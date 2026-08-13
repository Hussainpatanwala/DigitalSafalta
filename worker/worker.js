/**
 * Digital Safalta — Contact Form Worker
 * Receives POSTs from the React contact form, stores them in D1,
 * and (optionally) emails a notification via Brevo or SendGrid.
 */

// Change this to your real site origin before deploying.
const ALLOWED_ORIGIN = 'https://digitalsafalta.in';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

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

    const { name, phone, email, company, business_type, existing_website, message, consent_given_at, terms_version, privacy_version } = body;

    // Basic required-field + format checks. Reject bad data before it ever touches the database.
    if (!name || !phone || !email || !message) {
      return jsonResponse({ error: 'name, phone, email, and message are required' }, 400);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse({ error: 'Invalid email address' }, 400);
    }
    // Guard against absurdly long input (basic spam/abuse protection).
    if (name.length > 200 || message.length > 5000) {
      return jsonResponse({ error: 'Input too long' }, 400);
    }
    // Consent is enforced server-side too — never trust the checkbox state alone from the browser.
    if (!consent_given_at || !terms_version || !privacy_version) {
      return jsonResponse({ error: 'Consent to Terms of Service and Privacy Policy is required' }, 400);
    }

    try {
      await env.DB.prepare(
        `INSERT INTO contact_submissions
          (name, phone, email, company, business_type, existing_website, message, source, consent_given_at, terms_version, privacy_version)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
        .bind(name, phone, email, company || null, business_type || null, existing_website || null, message, 'website', consent_given_at, terms_version, privacy_version)
        .run();
    } catch (err) {
      console.error('D1 insert failed:', err);
      return jsonResponse({ error: 'Could not save your message. Please try again.' }, 500);
    }

    // Email notification is optional and must never block the form from succeeding —
    // if it fails, we still tell the visitor their message was saved.
    try {
      await sendNotificationEmail(env, { name, phone, email, company, business_type, existing_website, message });
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

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
  });
}

/**
 * Sends you an email whenever a new submission comes in.
 * Uses Brevo (formerly Sendinblue) by default since that's already set up for this project.
 * A SendGrid version is included below, commented out — swap in whichever you prefer.
 */
async function sendNotificationEmail(env, data) {
  if (!env.BREVO_API_KEY) return; // Skip silently if no key is configured yet.

  const textBody = `
New contact form submission on digitalsafalta.in

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Company: ${data.company || '-'}
Business type: ${data.business_type || '-'}
Existing website: ${data.existing_website || '-'}

Message:
${data.message}
`.trim();

  const htmlBody = buildHtmlEmail(data);

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: { name: 'Digital Safalta Website', email: env.NOTIFY_FROM_EMAIL },
      to: [{ email: env.NOTIFY_TO_EMAIL }],
      subject: `New enquiry from ${data.name}`,
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

// Escapes user-submitted text before it goes into HTML, so a name/message containing
// characters like < or & can't break the email's layout.
function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildHtmlEmail(data) {
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
          <h1 style="margin:6px 0 0;color:#ffffff;font-size:18px;">New Contact Form Enquiry</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 8px 0;">
          <table role="presentation" width="100%" style="border-collapse:collapse;">
            ${row('Name', data.name)}
            ${row('Phone', data.phone)}
            ${row('Email', data.email)}
            ${row('Company', data.company)}
            ${row('Business type', data.business_type)}
            ${row('Existing website', data.existing_website)}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 24px 24px;">
          <div style="color:#64748b;font-size:13px;font-weight:600;margin-bottom:6px;">Message</div>
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:14px;color:#0f172a;font-size:14px;line-height:1.5;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
        </td>
      </tr>
      <tr>
        <td style="padding:14px 24px;background:#f8fafc;border-top:1px solid #e2e8f0;">
          <span style="color:#94a3b8;font-size:12px;">Sent automatically from the contact form on digitalsafalta.in</span>
        </td>
      </tr>
    </table>
  </body>
</html>`.trim();
}

/* ---------- SendGrid alternative (use this instead if you'd rather use SendGrid) ----------

async function sendNotificationEmail(env, data) {
  if (!env.SENDGRID_API_KEY) return;

  const emailBody = `
New contact form submission on digitalsafalta.in

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Company: ${data.company || '-'}
Business type: ${data.business_type || '-'}
Existing website: ${data.existing_website || '-'}

Message:
${data.message}
`.trim();

  const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${env.SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: env.NOTIFY_TO_EMAIL }] }],
      from: { email: env.NOTIFY_FROM_EMAIL, name: 'Digital Safalta Website' },
      subject: `New enquiry from ${data.name}`,
      content: [{ type: 'text/plain', value: emailBody }],
    }),
  });

  if (!res.ok) {
    throw new Error(`SendGrid API returned ${res.status}: ${await res.text()}`);
  }
}

------------------------------------------------------------------------------------------- */
