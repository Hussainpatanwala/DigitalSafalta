/**
 * Digital Safalta — Cloudflare Worker
 *
 * Routes:
 *   POST /                     Free Audit / contact form  →  contact_submissions  (existing)
 *   GET  /exhibition/status    Public — is the expo checklist currently visible?
 *   POST /exhibition/submit    Public — score + store one visitor's checklist    →  exhibition_leads
 *   POST /exhibition/toggle    Admin  — flip the expo checklist on/off           →  app_settings
 */

// Change this to your real site origin before deploying.
const ALLOWED_ORIGIN = 'https://digitalsafalta.in';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-admin-key',
};

const VALID_CHANNELS = ['SEO', 'Paid Ads', 'Social Media', 'Content', 'Email', 'Other'];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Browsers send an OPTIONS "preflight" request before the real POST — answer it and stop.
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    if (url.pathname === '/exhibition/status' && request.method === 'GET') {
      return handleExhibitionStatus(env);
    }
    if (url.pathname === '/exhibition/submit' && request.method === 'POST') {
      return handleExhibitionSubmit(request, env);
    }
    if (url.pathname === '/exhibition/toggle' && request.method === 'POST') {
      return handleExhibitionToggle(request, env);
    }

    // Everything else (root path) is the original contact/free-audit form.
    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed' }, 405);
    }
    return handleContactSubmit(request, env);
  },
};

// ---------------------------------------------------------------------------
// Contact / Free Audit form (unchanged logic, just pulled into its own function)
// ---------------------------------------------------------------------------

async function handleContactSubmit(request, env) {
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
}

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

// ---------------------------------------------------------------------------
// Exhibition / Expo Growth Audit
// ---------------------------------------------------------------------------

// Mirrors "Part A: Business Growth Audit Checklist" exactly.
// `points` values are set so each section totals what the doc specifies:
// Google Presence /10, Website /10, and the other four sections /20 each — 100 total.
const CHECKLIST_ITEMS = [
  // Section 1a — Google Presence (5 items × 2 = /10)
  { id: 'gp_profile_exists',  section: 'google',   points: 2 },
  { id: 'gp_reviews_above_20', section: 'google',  points: 2 },
  { id: 'gp_correct_phone',   section: 'google',   points: 2 },
  { id: 'gp_latest_photos',   section: 'google',   points: 2 },
  { id: 'gp_maps_optimized',  section: 'google',   points: 2 },

  // Section 1b — Website (5 items × 2 = /10)
  { id: 'web_mobile_friendly', section: 'website', points: 2 },
  { id: 'web_fast_loading',    section: 'website', points: 2 },
  { id: 'web_ssl_enabled',     section: 'website', points: 2 },
  { id: 'web_whatsapp_button', section: 'website', points: 2 },
  { id: 'web_contact_form',    section: 'website', points: 2 },

  // Section 2 — Lead Generation (5 items × 4 = /20)
  { id: 'lg_website_inquiries', section: 'leadgen', points: 4 },
  { id: 'lg_facebook_active',   section: 'leadgen', points: 4 },
  { id: 'lg_instagram_active',  section: 'leadgen', points: 4 },
  { id: 'lg_linkedin_active',   section: 'leadgen', points: 4 },
  { id: 'lg_sources_tracked',   section: 'leadgen', points: 4 },

  // Section 3 — Sales Process (5 items × 4 = /20)
  { id: 'sp_enquiries_1day',     section: 'sales', points: 4 },
  { id: 'sp_whatsapp_followup',  section: 'sales', points: 4 },
  { id: 'sp_customer_database',  section: 'sales', points: 4 },
  { id: 'sp_followup_reminders', section: 'sales', points: 4 },
  { id: 'sp_quotation_tracking', section: 'sales', points: 4 },

  // Section 4 — Branding (5 items × 4 = /20)
  { id: 'br_professional_logo', section: 'branding', points: 4 },
  { id: 'br_product_catalogue', section: 'branding', points: 4 },
  { id: 'br_hq_images',         section: 'branding', points: 4 },
  { id: 'br_brand_consistency', section: 'branding', points: 4 },
  { id: 'br_testimonials',      section: 'branding', points: 4 },

  // Section 5 — Growth Readiness (5 items × 4 = /20)
  { id: 'gr_monthly_target',      section: 'growth', points: 4 },
  { id: 'gr_marketing_budget',    section: 'growth', points: 4 },
  { id: 'gr_lead_tracking',       section: 'growth', points: 4 },
  { id: 'gr_conversion_tracking', section: 'growth', points: 4 },
  { id: 'gr_roi_tracking',        section: 'growth', points: 4 },
];

function tierFor(total) {
  if (total >= 80) return 'Growth Ready';
  if (total >= 60) return 'Growth Opportunity';
  return 'Growth Risk';
}

// Recomputes every score SERVER-SIDE from the raw yes/no answers — a visitor's
// browser is never trusted to hand us the final number directly.
function scoreAnswers(answers) {
  const sectionTotals = { google: 0, website: 0, leadgen: 0, sales: 0, branding: 0, growth: 0 };
  for (const item of CHECKLIST_ITEMS) {
    if (answers[item.id] === true) {
      sectionTotals[item.section] += item.points;
    }
  }
  const total = Object.values(sectionTotals).reduce((a, b) => a + b, 0);
  return { ...sectionTotals, total, tier: tierFor(total) };
}

async function handleExhibitionStatus(env) {
  try {
    const row = await env.DB
      .prepare('SELECT value FROM app_settings WHERE key = ?')
      .bind('exhibition_active')
      .first();
    return jsonResponse({ active: row?.value === '1' });
  } catch (err) {
    console.error('exhibition status read failed:', err);
    // Fail closed — if we can't confirm it's on, don't show it.
    return jsonResponse({ active: false });
  }
}

async function handleExhibitionSubmit(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON body' }, 400);
  }

  const { name, company, mobile, email, industry, revenue_range, biggest_challenge, answers } = body;

  if (!name || !company || !mobile) {
    return jsonResponse({ error: 'name, company, and mobile are required' }, 400);
  }
  if (name.length > 100 || company.length > 200 || mobile.length > 30 ||
      (email && email.length > 200) || (biggest_challenge && biggest_challenge.length > 500)) {
    return jsonResponse({ error: 'Input too long' }, 400);
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ error: 'Invalid email address' }, 400);
  }
  if (!answers || typeof answers !== 'object') {
    return jsonResponse({ error: 'answers object is required' }, 400);
  }

  const scores = scoreAnswers(answers);

  try {
    await env.DB.prepare(
      `INSERT INTO exhibition_leads
        (created_at, name, company, mobile, email, industry, revenue_range, biggest_challenge,
         answers_json, score_google, score_website, score_leadgen, score_sales, score_branding,
         score_growth, score_total, tier)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(
        new Date().toISOString(), name, company, mobile, email || null, industry || null,
        revenue_range || null, biggest_challenge || null, JSON.stringify(answers),
        scores.google, scores.website, scores.leadgen, scores.sales, scores.branding,
        scores.growth, scores.total, scores.tier
      )
      .run();
  } catch (err) {
    console.error('exhibition D1 insert failed:', err);
    return jsonResponse({ error: 'Could not save your submission. Please try again.' }, 500);
  }

  return jsonResponse({
    success: true,
    score: scores.total,
    tier: scores.tier,
    breakdown: {
      google: scores.google, website: scores.website, leadgen: scores.leadgen,
      sales: scores.sales, branding: scores.branding, growth: scores.growth,
    },
  });
}

async function handleExhibitionToggle(request, env) {
  const adminKey = request.headers.get('x-admin-key');
  if (!env.EXPO_ADMIN_KEY || adminKey !== env.EXPO_ADMIN_KEY) {
    return jsonResponse({ error: 'Unauthorized' }, 401);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON body' }, 400);
  }
  if (typeof body.active !== 'boolean') {
    return jsonResponse({ error: 'active must be true or false' }, 400);
  }

  try {
    await env.DB.prepare(
      `INSERT INTO app_settings (key, value) VALUES ('exhibition_active', ?)
       ON CONFLICT(key) DO UPDATE SET value = excluded.value`
    ).bind(body.active ? '1' : '0').run();
  } catch (err) {
    console.error('exhibition toggle failed:', err);
    return jsonResponse({ error: 'Could not update setting' }, 500);
  }

  return jsonResponse({ success: true, active: body.active });
}
