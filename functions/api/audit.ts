interface Env {
  GEMINI_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const apiKey = context.env.GEMINI_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'GEMINI_API_KEY not set in environment variables' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: { system: string; prompt: string };
  try {
    body = await context.request.json() as { system: string; prompt: string };
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  let geminiResponse: Response;
  try {
    geminiResponse = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: body.system + '\n\n' + body.prompt }],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2048,
        },
      }),
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to reach Gemini API', detail: String(err) }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const raw = await geminiResponse.text();

  if (!geminiResponse.ok) {
    return new Response(JSON.stringify({ error: `Gemini API error ${geminiResponse.status}`, detail: raw }), {
      status: geminiResponse.status,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let data: { candidates?: { content?: { parts?: { text?: string }[] } }[] };
  try {
    data = JSON.parse(raw);
  } catch {
    return new Response(JSON.stringify({ error: 'Could not parse Gemini response', detail: raw }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';

  if (!text) {
    return new Response(JSON.stringify({ error: 'Empty response from Gemini', detail: raw }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ text }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
