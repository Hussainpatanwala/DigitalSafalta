/**
 * Digital Safalta — Free Audit Form Worker
 * Receives POSTs from the React Free Audit form, stores them in D1,
 * and emails a notification via Brevo.
 */

// Change this to your real site origin before deploying.
const ALLOWED_ORIGIN = 'https://digitalsafalta.in';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const VALID_CHANNELS = ['SEO', 'Paid Ads', 'Social Media', 'Content', 'Email', 'Other'];

export default {
  async fetch(request, env) {
    // Browsers send an OPTIONS "preflight" request before the real POST — answer it and stop.
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed' }, 405);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ error: 'Invalid JSON body' }, 400);
    }

    const {
      first_name, last_name, company_name, email, phone, website_url,
      runs_paid_ads, sends_newsletters, posts_social_regularly,
      main_marketing_channel, has_customer_database, uses_data_for_winback,
      consent_given_at, terms_version, privacy_version,
    } = body;

    // --- Required text fields ---
    if (!first_name || !last_name || !company_name || !email) {
      return jsonResponse({ error: 'first_name, last_name, company_name, and email are required' }, 400);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse({ error: 'Invalid email address' }, 400);
    }
    // Basic length guards (spam/abuse protection).
    if (
      first_name.length > 100 || last_name.length > 100 ||
      company_name.length > 200 || email.length > 200 ||
      (phone && phone.length > 30) || (website_url && website_url.length > 300)
    ) {
      return jsonResponse({ error: 'Input too long' }, 400);
    }

    // --- Questionnaire: yes/no fields must be actual booleans ---
    const yesNoFields = { runs_paid_ads, sends_newsletters, posts_social_regularly, has_customer_database, uses_data_for_winback };
    for (const [key, value] of Object.entries(yesNoFields)) {
      if (typeof value !== 'boolean') {
        return jsonResponse({ error: `${key} must be answered (true/false)` }, 400);
      }
    }
    if (!VALID_CHANNELS.includes(main_marketing_channel)) {
      return jsonResponse({ error: 'main_marketing_channel must be one of: ' + VALID_CHANNELS.join(', ') }, 400);
    }

    // --- Consent is enforced server-side too — never trust the checkbox state alone from the browser ---
    if (!consent_given_at || !terms_version || !privacy_version) {
      return jsonResponse({ error: 'Consent to Terms of Service and Privacy Policy is required' }, 400);
    }

    try {
      await env.DB.prepare(
        `INSERT INTO contact_submissions
          (first_name, last_name, company_name, email, phone, website_url,
           runs_paid_ads, sends_newsletters, posts_social_regularly,
           main_marketing_channel, has_customer_database, uses_data_for_winback,
           consent_given_at, terms_version, privacy_version)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
        .bind(
          first_name, last_name, company_name, email, phone || null, website_url || null,
          boolToInt(runs_paid_ads), boolToInt(sends_newsletters), boolToInt(posts_social_regularly),
          main_marketing_channel, boolToInt(has_customer_database), boolToInt(uses_data_for_winback),
          consent_given_at, terms_version, privacy_version
        )
        .run();
    } catch (err) {
      console.error('D1 insert failed:', err);
      return jsonResponse({ error: 'Could not save your submission. Please try again.' }, 500);
    }

    // Email notification is optional and must never block the form from succeeding —
    // if it fails, we still tell the visitor their submission was saved.
    try {
      await sendNotificationEmail(env, {
        first_name, last_name, company_name, email, phone, website_url,
        runs_paid_ads, sends_newsletters, posts_social_regularly,
        main_marketing_channel, has_customer_database, uses_data_for_winback,
      });
    } catch (err) {
      console.error('Email notification failed:', {
        name: err?.name,
        message: err?.message,
        stack: err?.stack,
        raw: String(err),
      });
    }

    return jsonResponse({ success: true });
  },
};

function boolToInt(v) {
  return v ? 1 : 0;
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
  });
}

function yesNo(v) {
  return v ? 'Yes' : 'No';
}

/**
 * Sends you an email whenever a new Free Audit submission comes in.
 * Uses Brevo (already set up for this project).
 */
async function sendNotificationEmail(env, data) {
  if (!env.BREVO_API_KEY) return; // Skip silently if no key is configured yet.

  const fullName = `${data.first_name} ${data.last_name}`;

  const textBody = `
New Free Audit request on digitalsafalta.in

Name: ${fullName}
Company / Business: ${data.company_name}
Email: ${data.email}
Phone: ${data.phone || '-'}
Website: ${data.website_url || '-'}

Questionnaire:
- Runs paid ads: ${yesNo(data.runs_paid_ads)}
- Sends email newsletters: ${yesNo(data.sends_newsletters)}
- Posts regularly on social media: ${yesNo(data.posts_social_regularly)}
- Main marketing channel: ${data.main_marketing_channel}
- Has a customer database (Excel/DB): ${yesNo(data.has_customer_database)}
- Uses existing data for winback: ${yesNo(data.uses_data_for_winback)}
`.trim();

  const htmlBody = buildHtmlEmail(data, fullName);

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: { name: 'Digital Safalta Website', email: env.NOTIFY_FROM_EMAIL },
      to: [{ email: env.NOTIFY_TO_EMAIL }],
      subject: `New Free Audit request from ${fullName} (${data.company_name})`,
      textContent: textBody,
      htmlContent: htmlBody,
    }),
  });

  if (!res.ok) {
    let responseText = '';
    try {
      responseText = await res.text();
    } catch {
      responseText = '(could not read response body)';
    }
    throw new Error(`Brevo API returned ${res.status}: ${responseText}`);
  }
}

// Escapes user-submitted text before it goes into HTML, so any field containing
// characters like < or & can't break the email's layout.
function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildHtmlEmail(data, fullName) {
  const row = (label, value) => `
    <tr>
      <td style="padding:8px 12px;color:#64748b;font-size:13px;font-weight:600;white-space:nowrap;vertical-align:top;">${label}</td>
      <td style="padding:8px 12px;color:#0f172a;font-size:14px;">${escapeHtml(value) || '<span style="color:#94a3b8;">—</span>'}</td>
    </tr>`;

  return `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:24px;background-color:#f1f5f9;font-family:Arial, Helvetica, sans-serif;">
    <table role="presentation" width="100%" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
      <tr>
        <td style="background-color:#0f172a;padding:20px 24px;">
          <span style="color:#2dd4bf;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Digital Safalta</span>
          <h1 style="margin:6px 0 0;color:#ffffff;font-size:18px;">New Free Audit Request</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 8px 0;">
          <table role="presentation" width="100%" style="border-collapse:collapse;">
            ${row('Name', fullName)}
            ${row('Company / Business', data.company_name)}
            ${row('Email', data.email)}
            ${row('Phone', data.phone)}
            ${row('Website', data.website_url)}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 24px 24px;">
          <div style="color:#64748b;font-size:13px;font-weight:600;margin-bottom:6px;">Questionnaire</div>
          <table role="presentation" width="100%" style="border-collapse:collapse;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">
            ${row('Runs paid ads', yesNo(data.runs_paid_ads))}
            ${row('Sends email newsletters', yesNo(data.sends_newsletters))}
            ${row('Posts regularly on social media', yesNo(data.posts_social_regularly))}
            ${row('Main marketing channel', data.main_marketing_channel)}
            ${row('Has a customer database', yesNo(data.has_customer_database))}
            ${row('Uses data for winback', yesNo(data.uses_data_for_winback))}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:14px 24px;background:#f8fafc;border-top:1px solid #e2e8f0;">
          <span style="color:#94a3b8;font-size:12px;">Sent automatically from the Free Audit form on digitalsafalta.in</span>
        </td>
      </tr>
    </table>
  </body>
</html>`.trim();
}
