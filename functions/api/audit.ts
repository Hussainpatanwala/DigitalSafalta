interface Env {
  OPENROUTER_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const apiKey = context.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'OPENROUTER_API_KEY not set in environment variables' }), {
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

  let apiResponse: Response;
  try {
    apiResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': 'https://digitalsafalta.in',
        'X-Title': 'Digital Safalta Marketing Audit',
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-r1-0528:free',
        messages: [
          { role: 'system', content: body.system },
          { role: 'user', content: body.prompt },
        ],
        temperature: 0.7,
        max_tokens: 2048,
      }),
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to reach OpenRouter', detail: String(err) }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const raw = await apiResponse.text();

  if (!apiResponse.ok) {
    return new Response(JSON.stringify({ error: `OpenRouter error ${apiResponse.status}`, detail: raw }), {
      status: apiResponse.status,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let data: { choices?: { message?: { content?: string } }[] };
  try {
    data = JSON.parse(raw);
  } catch {
    return new Response(JSON.stringify({ error: 'Could not parse response', detail: raw }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const text = data.choices?.[0]?.message?.content ?? '';

  if (!text) {
    return new Response(JSON.stringify({ error: 'Empty response', detail: raw }), {
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
