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

    const { name, phone, email, company, business_type, existing_website, message } = body;

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

    try {
      await env.DB.prepare(
        `INSERT INTO contact_submissions
          (name, phone, email, company, business_type, existing_website, message, source)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
      )
        .bind(name, phone, email, company || null, business_type || null, existing_website || null, message, 'website')
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
      console.error('Email notification failed:', err);
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
      textContent: emailBody,
    }),
  });

  if (!res.ok) {
    throw new Error(`Brevo API returned ${res.status}: ${await res.text()}`);
  }
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
