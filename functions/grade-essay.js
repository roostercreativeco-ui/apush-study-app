// Cloudflare Pages Function
// File location in your repo: /functions/grade-essay.js
// Called at: /functions/grade-essay

export async function onRequestPost(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  try {
    const body = await context.request.json();
    const { essayType, prompt, period, partA, partB, partC, question, answer } = body;

    const apiKey = context.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key not configured' }), { status: 500, headers: corsHeaders });
    }

    let systemPrompt, userMessage;

    if (essayType === 'saq') {
      systemPrompt = `You are an expert AP US History teacher scoring Short Answer Questions (SAQ) using the official College Board rubric. 

For each part (A, B, C), award 1 point if the student:
- Makes a historically defensible claim
- Supports it with specific historical evidence
- Addresses the actual question asked

Be fair but rigorous. A vague or unsupported answer earns 0. A clear claim with specific evidence earns 1.

Respond ONLY with valid JSON in exactly this format, no other text:
{
  "scoreA": 0 or 1,
  "scoreB": 0 or 1,
  "scoreC": 0 or 1,
  "totalScore": 0-3,
  "feedbackA": "1-2 sentences of specific feedback",
  "feedbackB": "1-2 sentences of specific feedback",
  "feedbackC": "1-2 sentences of specific feedback",
  "modelA": "A strong 2-3 sentence model answer",
  "modelB": "A strong 2-3 sentence model answer",
  "modelC": "A strong 2-3 sentence model answer",
  "overallTip": "One actionable tip for improvement"
}`;

      userMessage = `AP US History SAQ — Period ${period}

Context/Prompt: ${prompt}

PART A: ${partA}

PART B: ${partB}

PART C: ${partC}

Score each part and provide feedback and model answers.`;

    } else if (essayType === 'leq') {
      systemPrompt = `You are an expert AP US History teacher scoring Long Essay Questions (LEQ) using the official College Board rubric.

Score the student's essay outline or response using this rubric:
- Thesis (1 pt): Makes a historically defensible claim with a line of reasoning
- Contextualization (1 pt): Accurately describes broader historical context before/after the prompt period
- Evidence (2 pts): 1pt for specific examples, 2pt if used to support the argument
- Analysis (1 pt): Uses historical reasoning (causation, comparison, or continuity/change over time) to frame the argument

Respond ONLY with valid JSON in exactly this format, no other text:
{
  "scoreThesis": 0 or 1,
  "scoreContext": 0 or 1,
  "scoreEvidence": 0, 1, or 2,
  "scoreAnalysis": 0 or 1,
  "totalScore": 0-5,
  "feedbackThesis": "Specific feedback on the thesis",
  "feedbackContext": "Specific feedback on contextualization",
  "feedbackEvidence": "Specific feedback on evidence use",
  "feedbackAnalysis": "Specific feedback on historical reasoning",
  "overallTip": "One actionable tip to improve this essay",
  "modelThesis": "A strong model thesis for this prompt"
}`;

      userMessage = `AP US History LEQ

Prompt: ${question}

Student Response:
${answer}

Score using the LEQ rubric and provide feedback.`;
    } else {
      return new Response(JSON.stringify({ error: 'Invalid essay type' }), { status: 400, headers: corsHeaders });
    }

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
        messages: [{ role: 'user', content: userMessage }],
        system: systemPrompt
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Anthropic error:', err);
      return new Response(JSON.stringify({ error: 'Grading service unavailable' }), { status: 502, headers: corsHeaders });
    }

    const data = await response.json();
    const rawText = data.content[0].text.trim();

    // Strip markdown code fences if present
    const cleaned = rawText.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();
    const result = JSON.parse(cleaned);

    return new Response(JSON.stringify(result), { status: 200, headers: corsHeaders });

  } catch (err) {
    console.error('Function error:', err);
    return new Response(JSON.stringify({ error: 'Grading failed: ' + err.message }), { status: 500, headers: corsHeaders });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
