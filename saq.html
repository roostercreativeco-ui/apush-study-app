<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>APUSH SAQ Practice</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-dark: #0a0e1a;
            --bg-card: #121829;
            --accent-blue: #4f8cff;
            --accent-red: #ff4f4f;
            --accent-gold: #ffc845;
            --accent-green: #34d399;
            --accent-purple: #a78bfa;
            --text-main: #f0f2ff;
            --text-dim: #8892b0;
            --radius: 16px;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'Outfit', sans-serif;
            background: var(--bg-dark);
            color: var(--text-main);
            min-height: 100vh;
            overflow-x: hidden;
        }

        .bg-grid {
            position: fixed; inset: 0;
            background-image:
                linear-gradient(rgba(167,139,250,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(167,139,250,0.03) 1px, transparent 1px);
            background-size: 60px 60px; z-index: 0;
        }
        .bg-glow {
            position: fixed; width: 600px; height: 600px;
            border-radius: 50%; filter: blur(120px); opacity: 0.25;
            z-index: 0; pointer-events: none;
        }
        .bg-glow.purple { background: var(--accent-purple); top: -200px; right: -100px; }
        .bg-glow.blue   { background: var(--accent-blue);   bottom: -300px; left: -200px; opacity: 0.15; }

        .nav {
            position: fixed; top: 0; left: 0; right: 0; z-index: 100;
            display: flex; align-items: center; justify-content: space-between;
            padding: 16px 24px;
            background: rgba(10,14,26,0.85); backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .nav-logo { font-weight: 800; font-size: 1.1rem; color: var(--text-main); text-decoration: none; }
        .nav-logo span { color: var(--accent-purple); }
        .nav-back { color: var(--text-dim); text-decoration: none; font-size: 0.9rem; font-weight: 600; transition: color 0.2s; }
        .nav-back:hover { color: var(--accent-purple); }

        .container {
            position: relative; z-index: 1;
            max-width: 600px; margin: 0 auto;
            padding: 80px 24px 60px;
        }

        /* ── SETUP ── */
        .setup-hero { text-align: center; margin-bottom: 32px; }
        .setup-hero .saq-icon { font-size: 3rem; display: block; margin-bottom: 12px; }
        .setup-hero h2 { font-size: 1.8rem; font-weight: 900; margin-bottom: 8px; }
        .setup-hero h2 span { color: var(--accent-purple); }
        .setup-hero p { color: var(--text-dim); font-size: 0.95rem; line-height: 1.5; max-width: 440px; margin: 0 auto; }

        .rubric-card {
            background: var(--bg-card);
            border: 1px solid rgba(167,139,250,0.15);
            border-radius: var(--radius); padding: 20px 24px;
            margin-bottom: 28px;
        }
        .rubric-card h3 { font-size: 0.85rem; font-weight: 700; color: var(--accent-purple); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
        .rubric-row { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 8px; font-size: 0.88rem; color: var(--text-dim); line-height: 1.4; }
        .rubric-row:last-child { margin-bottom: 0; }
        .rubric-point { background: rgba(167,139,250,0.15); color: var(--accent-purple); font-weight: 700; font-size: 0.78rem; padding: 2px 8px; border-radius: 100px; white-space: nowrap; flex-shrink: 0; margin-top: 1px; }

        .prompt-selector { margin-bottom: 24px; }
        .prompt-selector label { font-size: 0.9rem; font-weight: 600; color: var(--text-dim); display: block; margin-bottom: 10px; }
        .prompt-cards { display: flex; flex-direction: column; gap: 10px; }
        .prompt-card {
            padding: 16px 18px;
            background: var(--bg-card);
            border: 2px solid rgba(255,255,255,0.06);
            border-radius: 12px; cursor: pointer; transition: all 0.2s;
        }
        .prompt-card:hover { border-color: var(--accent-purple); }
        .prompt-card.selected { border-color: var(--accent-purple); background: rgba(167,139,250,0.05); }
        .prompt-card .prompt-period { font-size: 0.75rem; font-weight: 600; color: var(--accent-gold); margin-bottom: 6px; }
        .prompt-card .prompt-text { font-size: 0.92rem; font-weight: 600; line-height: 1.4; margin-bottom: 8px; }
        .prompt-card .prompt-parts { font-size: 0.8rem; color: var(--text-dim); line-height: 1.5; }

        .btn-start-saq {
            width: 100%; padding: 18px;
            background: linear-gradient(135deg, var(--accent-purple), #7c3aed);
            color: white; font-family: 'Outfit', sans-serif;
            font-size: 1.1rem; font-weight: 800;
            border: none; border-radius: 14px; cursor: pointer; transition: all 0.2s;
        }
        .btn-start-saq:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(167,139,250,0.3); }

        /* ── WRITING SCREEN ── */
        .saq-header { margin-bottom: 24px; }
        .saq-header .period-tag {
            font-size: 0.75rem; font-weight: 600; color: var(--accent-gold);
            background: rgba(255,200,69,0.1);
            padding: 4px 12px; border-radius: 100px;
            display: inline-block; margin-bottom: 12px;
        }
        .saq-prompt-box {
            background: var(--bg-card);
            border: 1px solid rgba(167,139,250,0.15);
            border-radius: var(--radius); padding: 20px 24px;
            margin-bottom: 24px;
        }
        .saq-prompt-box .prompt-label { font-size: 0.8rem; font-weight: 700; color: var(--accent-purple); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }
        .saq-prompt-box .prompt-body { font-size: 1rem; font-weight: 600; line-height: 1.6; }

        .saq-parts { display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px; }
        .saq-part {
            background: var(--bg-card);
            border: 1px solid rgba(255,255,255,0.06);
            border-radius: var(--radius); padding: 20px;
        }
        .saq-part .part-label {
            display: flex; align-items: center; gap: 10px;
            margin-bottom: 10px;
        }
        .saq-part .part-letter {
            width: 28px; height: 28px; border-radius: 7px;
            background: rgba(167,139,250,0.15);
            color: var(--accent-purple); font-weight: 800; font-size: 0.9rem;
            display: flex; align-items: center; justify-content: center;
            flex-shrink: 0;
        }
        .saq-part .part-question { font-size: 0.9rem; font-weight: 600; color: var(--text-main); line-height: 1.4; flex: 1; }
        .saq-part textarea {
            width: 100%; min-height: 100px;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 10px; padding: 12px 14px;
            color: var(--text-main); font-family: 'Outfit', sans-serif;
            font-size: 0.92rem; line-height: 1.5; resize: vertical; outline: none;
            transition: border-color 0.2s;
        }
        .saq-part textarea:focus { border-color: var(--accent-purple); }
        .saq-part textarea::placeholder { color: var(--text-dim); }
        .word-count { font-size: 0.75rem; color: var(--text-dim); text-align: right; margin-top: 4px; }

        .btn-submit-saq {
            width: 100%; padding: 18px;
            background: linear-gradient(135deg, var(--accent-purple), #7c3aed);
            color: white; font-family: 'Outfit', sans-serif;
            font-size: 1.1rem; font-weight: 800;
            border: none; border-radius: 14px; cursor: pointer; transition: all 0.2s;
            display: flex; align-items: center; justify-content: center; gap: 10px;
        }
        .btn-submit-saq:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(167,139,250,0.3); }
        .btn-submit-saq:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

        .grading-spinner {
            width: 20px; height: 20px;
            border: 2px solid rgba(255,255,255,0.3);
            border-top-color: white;
            border-radius: 50%; animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── RESULTS ── */
        .results-screen { display: none; }

        .score-hero { text-align: center; margin-bottom: 28px; }
        .score-hero .score-emoji { font-size: 3.5rem; display: block; margin-bottom: 10px; }
        .score-hero h2 { font-size: 1.8rem; font-weight: 900; margin-bottom: 6px; }
        .score-hero .score-subtitle { color: var(--text-dim); font-size: 1rem; margin-bottom: 20px; }

        .score-badge {
            display: inline-flex; align-items: center; gap: 8px;
            padding: 12px 28px;
            background: var(--bg-card);
            border: 2px solid rgba(167,139,250,0.3);
            border-radius: 100px;
            font-family: 'Space Mono', monospace;
            font-size: 1.5rem; font-weight: 700;
            color: var(--accent-purple);
        }

        .part-results { display: flex; flex-direction: column; gap: 16px; margin-bottom: 28px; }
        .part-result-card {
            background: var(--bg-card);
            border-radius: var(--radius); padding: 20px;
            border: 1px solid rgba(255,255,255,0.06);
        }
        .part-result-card.earned { border-color: rgba(52,211,153,0.25); }
        .part-result-card.missed { border-color: rgba(255,79,79,0.2); }

        .part-result-header {
            display: flex; align-items: center; justify-content: space-between;
            margin-bottom: 12px;
        }
        .part-result-header .part-id {
            display: flex; align-items: center; gap: 8px;
            font-weight: 700; font-size: 0.95rem;
        }
        .part-result-header .part-id .pl {
            width: 26px; height: 26px; border-radius: 6px;
            display: flex; align-items: center; justify-content: center;
            font-weight: 800; font-size: 0.82rem;
        }
        .earned .pl { background: rgba(52,211,153,0.15); color: var(--accent-green); }
        .missed  .pl { background: rgba(255,79,79,0.15);  color: var(--accent-red); }

        .score-pill {
            padding: 3px 12px; border-radius: 100px;
            font-size: 0.8rem; font-weight: 700;
        }
        .earned .score-pill { background: rgba(52,211,153,0.12); color: var(--accent-green); }
        .missed .score-pill  { background: rgba(255,79,79,0.1);   color: var(--accent-red); }

        .student-answer-label { font-size: 0.75rem; font-weight: 600; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 6px; }
        .student-answer-text {
            font-size: 0.88rem; line-height: 1.5; color: var(--text-main);
            background: rgba(255,255,255,0.03); border-radius: 8px; padding: 10px 12px;
            margin-bottom: 12px; font-style: italic;
        }

        .feedback-box {
            font-size: 0.88rem; line-height: 1.5; color: var(--text-dim);
            margin-bottom: 12px;
        }
        .feedback-box strong { color: var(--text-main); }

        .model-answer {
            background: rgba(167,139,250,0.06);
            border: 1px solid rgba(167,139,250,0.15);
            border-radius: 10px; padding: 12px 14px;
        }
        .model-answer .model-label { font-size: 0.75rem; font-weight: 700; color: var(--accent-purple); text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 6px; }
        .model-answer .model-text { font-size: 0.88rem; line-height: 1.5; color: var(--text-dim); }

        .overall-tip {
            background: var(--bg-card);
            border: 1px solid rgba(255,200,69,0.2);
            border-radius: var(--radius); padding: 18px 20px;
            margin-bottom: 28px;
        }
        .overall-tip .tip-label { font-size: 0.78rem; font-weight: 700; color: var(--accent-gold); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
        .overall-tip .tip-text { font-size: 0.92rem; color: var(--text-dim); line-height: 1.5; }

        .results-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .btn-new-prompt {
            padding: 14px 28px;
            background: linear-gradient(135deg, var(--accent-purple), #7c3aed);
            color: white; font-family: 'Outfit', sans-serif; font-size: 1rem; font-weight: 700;
            border: none; border-radius: 12px; cursor: pointer; transition: all 0.2s;
        }
        .btn-new-prompt:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(167,139,250,0.3); }
        .btn-retry-same {
            padding: 14px 28px; background: transparent;
            border: 1px solid rgba(167,139,250,0.3); color: var(--accent-purple);
            font-family: 'Outfit', sans-serif; font-size: 1rem; font-weight: 700;
            border-radius: 12px; cursor: pointer; transition: all 0.2s;
        }
        .btn-retry-same:hover { background: rgba(167,139,250,0.08); }
        .btn-home {
            padding: 14px 28px; background: transparent;
            border: 1px solid rgba(255,255,255,0.12); color: var(--text-dim);
            font-family: 'Outfit', sans-serif; font-size: 1rem; font-weight: 700;
            border-radius: 12px; cursor: pointer; transition: all 0.2s;
            text-decoration: none; display: inline-flex; align-items: center;
        }
        .btn-home:hover { border-color: var(--accent-purple); color: var(--accent-purple); }

        .error-msg {
            background: rgba(255,79,79,0.08); border: 1px solid rgba(255,79,79,0.2);
            border-radius: 12px; padding: 16px; color: var(--accent-red);
            font-size: 0.9rem; margin-bottom: 16px; display: none;
        }

        @media (max-width: 480px) {
            .container { padding: 72px 16px 40px; }
        }
    </style>
</head>
<body>
    <div class="bg-grid"></div>
    <div class="bg-glow purple"></div>
    <div class="bg-glow blue"></div>

    <nav class="nav">
        <a href="index.html" class="nav-logo">📝 <span>SAQ Practice</span></a>
        <a href="index.html" class="nav-back">← Back</a>
    </nav>

    <div class="container">

        <!-- SETUP SCREEN -->
        <div id="setup-screen">
            <div class="setup-hero">
                <span class="saq-icon">📝</span>
                <h2>SAQ <span>Practice</span></h2>
                <p>Short Answer Questions are 20% of your score. Practice writing precise, evidence-based responses — then get instant AI feedback scored against the real AP rubric.</p>
            </div>

            <div class="rubric-card">
                <h3>📋 SAQ Rubric — 3 points total</h3>
                <div class="rubric-row">
                    <span class="rubric-point">Part A — 1 pt</span>
                    <span>Describe, explain, or identify something specific using historical evidence</span>
                </div>
                <div class="rubric-row">
                    <span class="rubric-point">Part B — 1 pt</span>
                    <span>Explain a cause, effect, or historical development with specific evidence</span>
                </div>
                <div class="rubric-row">
                    <span class="rubric-point">Part C — 1 pt</span>
                    <span>Explain a similarity, difference, change, continuity, or make a claim with evidence</span>
                </div>
            </div>

            <div class="prompt-selector">
                <label>Choose a prompt:</label>
                <div class="prompt-cards" id="prompt-cards"></div>
            </div>

            <button class="btn-start-saq" onclick="startSAQ()">📝 Start Writing</button>
        </div>

        <!-- WRITING SCREEN -->
        <div id="writing-screen" style="display:none;">
            <div class="saq-header">
                <span class="period-tag" id="w-period">Period 3</span>
            </div>

            <div class="saq-prompt-box">
                <div class="prompt-label">📋 Your Prompt</div>
                <div class="prompt-body" id="w-prompt"></div>
            </div>

            <div class="saq-parts">
                <div class="saq-part">
                    <div class="part-label">
                        <div class="part-letter">A</div>
                        <div class="part-question" id="q-partA"></div>
                    </div>
                    <textarea id="ans-partA" placeholder="Write your answer here (2–4 sentences)..." oninput="updateWordCount(this, 'wc-a')"></textarea>
                    <div class="word-count" id="wc-a">0 words</div>
                </div>

                <div class="saq-part">
                    <div class="part-label">
                        <div class="part-letter">B</div>
                        <div class="part-question" id="q-partB"></div>
                    </div>
                    <textarea id="ans-partB" placeholder="Write your answer here (2–4 sentences)..." oninput="updateWordCount(this, 'wc-b')"></textarea>
                    <div class="word-count" id="wc-b">0 words</div>
                </div>

                <div class="saq-part">
                    <div class="part-label">
                        <div class="part-letter">C</div>
                        <div class="part-question" id="q-partC"></div>
                    </div>
                    <textarea id="ans-partC" placeholder="Write your answer here (2–4 sentences)..." oninput="updateWordCount(this, 'wc-c')"></textarea>
                    <div class="word-count" id="wc-c">0 words</div>
                </div>
            </div>

            <div class="error-msg" id="error-msg">Something went wrong with grading. Please try again.</div>

            <button class="btn-submit-saq" id="btn-submit" onclick="submitSAQ()">
                <span id="submit-label">✨ Submit for AI Grading</span>
            </button>
        </div>

        <!-- RESULTS SCREEN -->
        <div class="results-screen" id="results-screen">

            <div class="score-hero">
                <span class="score-emoji" id="score-emoji">🎉</span>
                <h2 id="score-title">Nice work!</h2>
                <p class="score-subtitle" id="score-subtitle">Here's your breakdown</p>
                <div class="score-badge">
                    <span id="total-score">0</span><span style="color:var(--text-dim); font-size:1.1rem;"> / 3</span>
                </div>
            </div>

            <div class="part-results" id="part-results"></div>

            <div class="overall-tip" id="overall-tip" style="display:none;">
                <div class="tip-label">💡 Pro Tip</div>
                <div class="tip-text" id="tip-text"></div>
            </div>

            <div class="results-actions">
                <button class="btn-retry-same" onclick="retrySame()">🔄 Try Again</button>
                <button class="btn-new-prompt" onclick="newPrompt()">📝 New Prompt</button>
                <a href="index.html" class="btn-home">🏠 Home</a>
            </div>
        </div>

    </div>

    <script>
        // ========================
        // SAQ PROMPTS
        // ========================
        const prompts = [
            {
                id: 1, period: 3,
                title: "The American Revolution",
                prompt: "Use the following image of the Boston Massacre (1770) to answer parts A, B, and C.",
                partA: "Briefly describe ONE perspective expressed in the image about the relationship between colonists and British authority.",
                partB: "Briefly explain ONE cause of growing colonial resistance to British rule in the decade before the Revolution.",
                partC: "Briefly explain ONE way the American Revolution changed political ideas in the new United States after 1776."
            },
            {
                id: 2, period: 4,
                title: "Jacksonian Democracy",
                prompt: "Use your knowledge of the period 1820–1845 to answer parts A, B, and C.",
                partA: "Briefly describe ONE way Andrew Jackson expanded democracy for some Americans during his presidency (1829–1837).",
                partB: "Briefly explain ONE cause of the forced removal of Native Americans from the Southeast during the 1830s.",
                partC: "Briefly explain ONE way Jacksonian policies limited democracy or rights for a specific group of Americans."
            },
            {
                id: 3, period: 5,
                title: "Civil War & Reconstruction",
                prompt: "Use your knowledge of the period 1860–1877 to answer parts A, B, and C.",
                partA: "Briefly describe ONE cause of Southern secession in 1860–1861.",
                partB: "Briefly explain ONE way the Emancipation Proclamation (1863) changed the goals or character of the Civil War.",
                partC: "Briefly explain ONE reason Reconstruction failed to secure lasting equality for formerly enslaved people."
            },
            {
                id: 4, period: 7,
                title: "The New Deal",
                prompt: "Use your knowledge of the period 1929–1941 to answer parts A, B, and C.",
                partA: "Briefly describe ONE cause of the Great Depression that began in 1929.",
                partB: "Briefly explain ONE specific New Deal program and how it addressed the Depression.",
                partC: "Briefly explain ONE way the New Deal changed the relationship between the federal government and American citizens."
            },
            {
                id: 5, period: 8,
                title: "The Civil Rights Movement",
                prompt: "Use your knowledge of the period 1950–1968 to answer parts A, B, and C.",
                partA: "Briefly describe ONE strategy used by civil rights activists in the 1950s–1960s to challenge racial segregation.",
                partB: "Briefly explain ONE cause of the Civil Rights Act of 1964 being passed by Congress.",
                partC: "Briefly explain ONE limitation of the Civil Rights Act of 1964 or Voting Rights Act of 1965 in achieving full equality."
            },
            {
                id: 6, period: 6,
                title: "Industrialization & Labor",
                prompt: "Use your knowledge of the period 1865–1900 to answer parts A, B, and C.",
                partA: "Briefly describe ONE way industrialization changed working conditions for American workers in the Gilded Age.",
                partB: "Briefly explain ONE cause of the rise of labor unions in the late nineteenth century.",
                partC: "Briefly explain ONE reason labor unions had limited success in achieving their goals during this period."
            }
        ];

        let selectedPromptId = 1;
        let currentPrompt = null;

        // ========================
        // BUILD PROMPT CARDS
        // ========================
        function buildPromptCards() {
            var html = '';
            prompts.forEach(function(p) {
                var selected = p.id === selectedPromptId ? 'selected' : '';
                html += '<div class="prompt-card ' + selected + '" onclick="selectPrompt(' + p.id + ')" id="prompt-card-' + p.id + '">' +
                    '<div class="prompt-period">Period ' + p.period + ' — ' + p.title + '</div>' +
                    '<div class="prompt-text">' + p.prompt + '</div>' +
                    '<div class="prompt-parts">A: ' + p.partA.substring(0,60) + '...<br>B: ' + p.partB.substring(0,60) + '...<br>C: ' + p.partC.substring(0,60) + '...</div>' +
                    '</div>';
            });
            document.getElementById('prompt-cards').innerHTML = html;
        }

        function selectPrompt(id) {
            selectedPromptId = id;
            document.querySelectorAll('.prompt-card').forEach(function(c) { c.classList.remove('selected'); });
            document.getElementById('prompt-card-' + id).classList.add('selected');
        }

        // ========================
        // START SAQ
        // ========================
        function startSAQ() {
            currentPrompt = prompts.find(function(p) { return p.id === selectedPromptId; });
            if (!currentPrompt) return;

            document.getElementById('w-period').textContent = 'Period ' + currentPrompt.period + ' — ' + currentPrompt.title;
            document.getElementById('w-prompt').textContent = currentPrompt.prompt;
            document.getElementById('q-partA').textContent = currentPrompt.partA;
            document.getElementById('q-partB').textContent = currentPrompt.partB;
            document.getElementById('q-partC').textContent = currentPrompt.partC;

            // Clear answers
            ['ans-partA', 'ans-partB', 'ans-partC'].forEach(function(id) {
                document.getElementById(id).value = '';
            });
            ['wc-a', 'wc-b', 'wc-c'].forEach(function(id) {
                document.getElementById(id).textContent = '0 words';
            });

            document.getElementById('error-msg').style.display = 'none';
            resetSubmitBtn();

            document.getElementById('setup-screen').style.display = 'none';
            document.getElementById('writing-screen').style.display = 'block';
            document.getElementById('results-screen').style.display = 'none';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // ========================
        // WORD COUNT
        // ========================
        function updateWordCount(textarea, wcId) {
            var words = textarea.value.trim() === '' ? 0 : textarea.value.trim().split(/\s+/).length;
            document.getElementById(wcId).textContent = words + ' word' + (words !== 1 ? 's' : '');
        }

        // ========================
        // SUBMIT FOR GRADING
        // ========================
        async function submitSAQ() {
            var partA = document.getElementById('ans-partA').value.trim();
            var partB = document.getElementById('ans-partB').value.trim();
            var partC = document.getElementById('ans-partC').value.trim();

            if (!partA && !partB && !partC) {
                document.getElementById('error-msg').textContent = 'Please write at least one answer before submitting.';
                document.getElementById('error-msg').style.display = 'block';
                return;
            }

            // Show loading state
            var btn = document.getElementById('btn-submit');
            var label = document.getElementById('submit-label');
            btn.disabled = true;
            label.innerHTML = '<div class="grading-spinner"></div> Grading your response...';
            document.getElementById('error-msg').style.display = 'none';

            try {
                var response = await fetch('/.netlify/functions/grade-essay', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        essayType: 'saq',
                        prompt: currentPrompt.prompt,
                        period: currentPrompt.period,
                        partA: currentPrompt.partA + '\n\nStudent answer: ' + partA,
                        partB: currentPrompt.partB + '\n\nStudent answer: ' + partB,
                        partC: currentPrompt.partC + '\n\nStudent answer: ' + partC
                    })
                });

                if (!response.ok) throw new Error('Grading failed');

                var result = await response.json();
                if (result.error) throw new Error(result.error);

                showResults(result, { partA, partB, partC });

            } catch(e) {
                console.error(e);
                document.getElementById('error-msg').textContent = 'Grading failed — please check your connection and try again.';
                document.getElementById('error-msg').style.display = 'block';
                resetSubmitBtn();
            }
        }

        function resetSubmitBtn() {
            var btn = document.getElementById('btn-submit');
            btn.disabled = false;
            document.getElementById('submit-label').innerHTML = '✨ Submit for AI Grading';
        }

        // ========================
        // SHOW RESULTS
        // ========================
        function showResults(result, answers) {
            document.getElementById('writing-screen').style.display = 'none';
            document.getElementById('results-screen').style.display = 'block';

            var total = result.totalScore || (result.scoreA + result.scoreB + result.scoreC);
            document.getElementById('total-score').textContent = total;

            var emoji, title, subtitle;
            if      (total === 3) { emoji='🏆'; title='Perfect Score!';    subtitle='Excellent SAQ technique.'; }
            else if (total === 2) { emoji='🔥'; title='Strong Work!';      subtitle='Almost there — check the feedback below.'; }
            else if (total === 1) { emoji='💪'; title='Getting There!';    subtitle='Review the model answers and try again.'; }
            else                  { emoji='📚'; title='Keep Practicing!';  subtitle='Study the model answers below carefully.'; }

            document.getElementById('score-emoji').textContent  = emoji;
            document.getElementById('score-title').textContent  = title;
            document.getElementById('score-subtitle').textContent = subtitle;

            // Build part result cards
            var parts = [
                { letter: 'A', score: result.scoreA, feedback: result.feedbackA, model: result.modelA, answer: answers.partA },
                { letter: 'B', score: result.scoreB, feedback: result.feedbackB, model: result.modelB, answer: answers.partB },
                { letter: 'C', score: result.scoreC, feedback: result.feedbackC, model: result.modelC, answer: answers.partC }
            ];

            var html = '';
            parts.forEach(function(p) {
                var earned = p.score === 1;
                var cls = earned ? 'earned' : 'missed';
                var scoreLabel = earned ? '✓ 1 / 1' : '✗ 0 / 1';

                html += '<div class="part-result-card ' + cls + '">';
                html += '<div class="part-result-header">';
                html += '<div class="part-id"><div class="pl">' + p.letter + '</div> Part ' + p.letter + '</div>';
                html += '<div class="score-pill">' + scoreLabel + '</div>';
                html += '</div>';

                if (p.answer) {
                    html += '<div class="student-answer-label">Your answer</div>';
                    html += '<div class="student-answer-text">' + escapeHtml(p.answer) + '</div>';
                }

                html += '<div class="feedback-box">' + escapeHtml(p.feedback || '') + '</div>';

                html += '<div class="model-answer">';
                html += '<div class="model-label">✨ Model Answer</div>';
                html += '<div class="model-text">' + escapeHtml(p.model || '') + '</div>';
                html += '</div>';

                html += '</div>';
            });

            document.getElementById('part-results').innerHTML = html;

            // Overall tip
            if (result.overallTip) {
                document.getElementById('tip-text').textContent = result.overallTip;
                document.getElementById('overall-tip').style.display = 'block';
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function escapeHtml(str) {
            return String(str)
                .replace(/&/g,'&amp;')
                .replace(/</g,'&lt;')
                .replace(/>/g,'&gt;')
                .replace(/"/g,'&quot;');
        }

        // ========================
        // NAVIGATION
        // ========================
        function retrySame() {
            document.getElementById('results-screen').style.display = 'none';
            startSAQ();
        }

        function newPrompt() {
            document.getElementById('results-screen').style.display = 'none';
            document.getElementById('setup-screen').style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // ========================
        // INIT
        // ========================
        buildPromptCards();
    </script>
</body>
</html>
