export async function onRequestPost(context) {
    try {
        const request = context.request;
        const env = context.env;

        const body = await request.json();
        const { prompt, partA, partB, partC, period } = body;

        const apiKey = env['ANTHROPIC_API_KEY'];
const debugInfo = {
    hasKey: 'ANTHROPIC_API_KEY' in env,
    typeofEnv: typeof env,
    typeofKey: typeof env['ANTHROPIC_API_KEY'],
    valueIsNull: env['ANTHROPIC_API_KEY'] === null,
    valueIsUndefined: env['ANTHROPIC_API_KEY'] === undefined,
};
if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured', debug: debugInfo }), {
        status: 500, headers: { 'Content-Type': 'application/json' }
    });
}

        const systemPrompt = `You are an experienced AP US History teacher grading Short Answer Questions (SAQs).

The SAQ rubric awards 1 point per part (max 3 points total):
- Part A: 1 point for accurately describing, explaining, or identifying something specific
- Part B: 1 point for accurately explaining a cause, effect, development, or historical situation
- Part C: 1 point for accurately explaining a similarity, difference, continuity, change, or making a historically defensible claim with evidence

Grading rules:
- Award 1 or 0 for each part — no partial credit
- Students do NOT need a thesis
- Answers must be historically accurate and use specific evidence
- 2-4 sentences is sufficient for full credit
- Be encouraging but honest

Respond ONLY with a JSON object in this exact format, no markdown, no extra text:
{
  "scoreA": 0,
  "scoreB": 1,
  "scoreC": 0,
  "totalScore": 1,
  "feedbackA": "specific feedback for part A in 1-2 sentences",
  "feedbackB": "specific feedback for part B in 1-2 sentences",
  "feedbackC": "specific feedback for part C in 1-2 sentences",
  "modelA": "a model 2-3 sentence answer for part A",
  "modelB": "a model 2-3 sentence answer for part B",
  "modelC": "a model 2-3 sentence answer for part C",
  "overallTip": "one specific tip to improve their SAQ writing in general"
}`;

        const userMessage = `Grade this SAQ response.

PROMPT: ${prompt}
PERIOD: ${period}

STUDENT'S PART A: ${partA || '(no answer)'}
STUDENT'S PART B: ${partB || '(no answer)'}
STUDENT'S PART C: ${partC || '(no answer)'}`;

        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-haiku-4-5-20251001',
                max_tokens: 1024,
                system: systemPrompt,
                messages: [{ role: 'user', content: userMessage }]
            })
        });

        if (!response.ok) {
            const err = await response.text();
            return new Response(JSON.stringify({ error: 'API error: ' + err }), {
                status: 500, headers: { 'Content-Type': 'application/json' }
            });
        }

        const data = await response.json();
        const text = data.content[0].text.trim();
        const result = JSON.parse(text);

        return new Response(JSON.stringify(result), {
            status: 200, headers: { 'Content-Type': 'application/json' }
        });

    } catch(e) {
        return new Response(JSON.stringify({ error: 'Server error: ' + e.message }), {
            status: 500, headers: { 'Content-Type': 'application/json' }
        });
    }
}
