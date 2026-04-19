# MyIntern — Interview Practice Flow Brief

## What to build
A single HTML file (`myintern-interview-practice.html`) that is a mobile UI mockup of the Interview Practice flow for MyIntern — a Malaysian student internship product. Prototype only, no backend needed.

---

## Design language
- Dark glass aesthetic: background `#0a0f1e`, panels `#0d1426`
- Accent: blue-indigo gradient `#3b82f6 → #6366f1`, highlight blue `#63b3ed`
- Font: system UI stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`)
- Mobile-first: render inside a 390×820px phone frame centered on the page
- No emojis anywhere in the UI
- All interactive elements must use plain `onclick` attributes calling global JS functions

## Phone frame
390×820px rounded rectangle (border-radius: 40px) centered on a dark page. Status bar at top (44px, shows "9:41"). All screens are `position: absolute` inside the frame with `inset: 44px 0 0 0`.

---

## Screens

There are 4 screens total. One is active at a time. Transitions slide left/right using `transform: translateX`.

### Screen transitions
- Going forward: current screen slides out left (translateX(-100%)), new screen slides in from right (translateX(0))
- Going back: current screen slides out right (translateX(100%)), previous screen returns from left
- Duration: 320ms, `cubic-bezier(0.4,0,0.2,1)`
- Active state class: `active` (translateX(0))
- Exiting state class: `gone` (translateX(-100%))
- Default resting state: translateX(100%) — off to the right

### Navigation
Use a history stack array (`var histStack = []`). `goTo(fromId, toId)` pushes fromId onto the stack and transitions. `backTo(id)` pops the stack and returns.

---

### Screen 1 — Question List (`id="s-list"`)

**Header:**
- Title (h2): "Interview Practice"
- Subtitle: "7 questions personalised to your CV and this role."

**Progress summary bar** (below header, above scrollable list):
- 7 dot indicators — each dot is a small circle (10px), coloured: grey = not started, blue = next up, green = answered
- Text: "X/7 answered" (X updates as questions are completed)

**Question rows** (scrollable list of 7):

Each row shows:
- Question number circle (left) — grey if not started, blue if it's the next unanswered, green checkmark if done
- Question text preview (2-line clamp, truncated)
- Category tag chip (colour coded by type)
- Arrow indicator (right)

Tapping any row calls `openQuestion(idx)` which loads that question into the answer screen and transitions to it.

**Question data** (all 7, see Data section below).

**No footer button** — the list is the navigation hub.

---

### Screen 2 — Answer Input (`id="s-answer"`)

**Top nav:**
- Back button (left arrow) — calls `backTo('s-list')`
- Step label: "QUESTION X OF 7" (set dynamically)

**Body (scrollable):**

1. **Question card** — blue-tinted panel showing:
   - Small label: "INTERVIEW QUESTION"
   - The full question text (larger, bold)
   - A personalisation hint in small grey text (e.g. "From your CV: Attendance System listed under projects")

2. **STAR hint toggle** — a dashed-border button row:
   - Label: "Not sure where to start? Use the STAR guide"
   - Chevron that rotates when open
   - Clicking calls `toggleHint()` which shows/hides the panel below
   - The hint panel (hidden by default) shows 4 rows: S / T / A / R with coloured letter badges and explanation text:
     - S: "Situation — Set the scene briefly. What was the context?"
     - T: "Task — What were you trying to do or solve?"
     - A: "Action — What did you actually do? Be specific."
     - R: "Result — What happened? Even a small win counts."

3. **Answer textarea:**
   - Placeholder: "Type your answer here..."
   - `oninput` calls `updateWordCount()`
   - Live word count displayed below right: "X words"

**Footer:**
- "Submit answer" button — disabled until word count >= 5
- Clicking calls `submitAnswer()`

---

### Screen 3 — AI Feedback (`id="s-feedback"`)

**Top nav:**
- Back button — calls `backTo('s-answer')`
- Label: "FEEDBACK — QX" (set dynamically)

**Body (scrollable):**

1. **Score ring** — circular SVG arc (120×120px):
   - Background circle: `rgba(255,255,255,0.06)`, stroke-width 8
   - Filled arc: blue-indigo gradient, stroke-linecap round, rotated -90deg
   - stroke-dasharray: 314
   - stroke-dashoffset: set dynamically based on computed score (see Scoring logic)
   - Score number displayed large below the ring
   - Score label below that (e.g. "out of 10 — good answer")

2. **"What worked" card** — green-tinted panel, label "WHAT WORKED", body text set dynamically

3. **"What to improve" card** — orange-tinted panel, label "WHAT TO IMPROVE", body text set dynamically

4. **Sample answer toggle:**
   - Clicking calls `toggleSample()` — shows/hides the sample panel
   - Label: "See a stronger answer"
   - Sample text uses `<em>` tags (styled in blue) to highlight key phrases

**Footer:**
- Primary button: "Next question" (or "See your results" if this was the last unanswered) — calls `nextQuestion()`
- Secondary button: "Try this one again" — calls `retryAnswer()`

---

### Screen 4 — Practice Complete (`id="s-complete"`)

**Body:**

1. **Completion graphic** — square badge (72×72px, rounded 24px) with a blue gradient background, containing a large checkmark character

2. **Title:** "Practice complete"

3. **Subtitle:** "You've gone through all 7 questions. Your readiness score has been updated."

4. **Readiness update panel** — green-tinted box showing:
   - Label: "Interview readiness"
   - Old score crossed out: "35" (strikethrough)
   - Arrow
   - New score: "78" in green
   - Progress bar below: green-to-blue gradient, width 78%

5. **"What you showed" section** — 3 rows with green checkmark circles:
   - "Specific project context with clear problem statement"
   - "Genuine motivation — not just 'I want experience'"
   - "Self-awareness about gaps and what you want to learn"

**Footer:**
- Primary button: "Apply for this role" → `alert('Apply flow coming next')`
- Secondary button: "Practice again" → `goTo('s-complete','s-list')`

---

## Scoring logic

The score shown in feedback is computed based on word count of the submitted answer. This simulates what Claude Haiku will do in the real build.

```javascript
function computeScore(wordCount) {
  if (wordCount < 10) return {
    score: 2, offset: 251, label: "out of 10 — too short to evaluate",
    good: "Nothing to work with yet.",
    improve: "An answer this short would last about 5 seconds out loud. Interviewers expect 30-60 seconds minimum. Try again with at least 3-4 real sentences."
  };
  if (wordCount < 30) return {
    score: 4, offset: 188, label: "out of 10 — needs more detail",
    good: "You gave a response — that's the starting point.",
    improve: "Too brief. You've made a statement but not backed it up. Add a specific example: what exactly did you do, when, and what happened as a result?"
  };
  if (wordCount < 60) return {
    score: 6, offset: 126, label: "out of 10 — decent start",
    good: "Enough here to evaluate — you've got the basic shape of an answer.",
    improve: "Missing a concrete outcome. What specifically happened at the end? Even a small, real detail makes answers stick."
  };
  return null; // 60+ words: use question-specific feedback data
}
```

`stroke-dashoffset` reference: circumference is 314. Offset = 314 × (1 − score/10).
- 2/10 = 251
- 4/10 = 188
- 6/10 = 126
- 7/10 = 94
- 8/10 = 63

If `computeScore()` returns `null` (60+ words), use the question's own `score`, `scoreLabel`, `scoreOffset`, `good`, and `improve` fields.

The sample answer always shows regardless of score — it is educational at every level.

---

## Question data

All 7 questions. Each object has: `q` (question text), `tag` (CSS class suffix), `tagLabel` (display text), `why` (personalisation note), `score`, `scoreLabel`, `scoreOffset`, `good`, `improve`, `sample` (HTML string, `<em>` tags allowed for highlights).

Tag colour mapping:
- `project` → indigo/purple
- `skills` → blue
- `activity` → green
- `motivation` → amber
- `problem` → red/pink
- `reflection` → purple
- `goals` → teal

```javascript
var questions = [
  {
    q: "Walk me through your Attendance System project — what problem were you solving?",
    tag: "project", tagLabel: "Project",
    why: "From your CV: Attendance System listed under projects",
    score: 7, scoreLabel: "out of 10 — good answer", scoreOffset: 94,
    good: "Clear context. You explained what the system did without over-explaining the tech stack.",
    improve: "Missing the outcome. What happened after you built it? Was it actually used by anyone? Even 'my lecturer gave us a B+ and said it was the most complete submission' is a real result.",
    sample: "In my second year, our faculty still tracked attendance on paper — lecturers would pass around a sheet each class and manually count at the end of semester. For my system development subject, I built a <em>web-based attendance system</em> using PHP and MySQL. Students log in with their matric number, check in via a QR code the lecturer generates each class, and the system auto-calculates attendance percentage. <em>The lecturer adopted it for two classes the following semester</em>. I learned that database structure decisions made early are hard to undo — I had to refactor my tables halfway through because I hadn't planned for multiple sessions per day."
  },
  {
    q: "You listed Python and SQL. Have you used them together on the same project?",
    tag: "skills", tagLabel: "Skills",
    why: "From your CV: Python and SQL both listed under technical skills",
    score: 6, scoreLabel: "out of 10 — decent, can be stronger", scoreOffset: 126,
    good: "You gave a concrete example rather than just saying yes. That's exactly what interviewers want.",
    improve: "Go further on the SQL side — what kind of queries? Joins? Aggregations? Specificity builds credibility even if the project was small.",
    sample: "In my final year project, I used Python to process the raw data and SQL to store and query it. I wrote a script that parsed CSV exports from the university portal into a MySQL database, then used Python again to run analysis on the query results. Nothing production-scale, but I got comfortable writing <em>multi-table JOINs and GROUP BY queries</em> to answer questions like 'which students are at risk based on attendance and assignment scores combined.' The integration between the two tools was where I learned the most."
  },
  {
    q: "You were in PALAPES. Tell me about a moment that required real discipline.",
    tag: "activity", tagLabel: "Activity",
    why: "From your CV: PALAPES listed under co-curricular activities",
    score: 8, scoreLabel: "out of 10 — strong answer", scoreOffset: 63,
    good: "Strong specific detail — time, place, stakes. This is exactly how you should answer behavioural questions.",
    improve: "Connect it back to the workplace — 'this is why I don't complain when debugging at 11pm' makes interviewers remember you.",
    sample: "During the annual PALAPES assessment camp, we had a 36-hour field exercise with minimal sleep. Around hour 28, we had to navigate a night course and my team was behind schedule. The easiest thing would've been to cut corners on the final checkpoint. <em>I pushed us to complete every checkpoint fully</em> — we finished last but complete. That experience taught me that discipline isn't about performing well when you're fresh. It's about not cutting corners when you're exhausted. I think about that when I'm debugging a feature at midnight before a submission deadline."
  },
  {
    q: "What drew you to Computer Science specifically?",
    tag: "motivation", tagLabel: "Motivation",
    why: "Field of study from your CV",
    score: 7, scoreLabel: "out of 10 — good answer", scoreOffset: 94,
    good: "Personal origin story gives it authenticity. Far better than generic 'I like technology' answers.",
    improve: "Bring it forward in time — what does that original spark look like now, as a final year student? Has it evolved?",
    sample: "When I was 16, my uncle's small restaurant was losing money because he had no way to track which dishes were actually profitable — he was just guessing. I built him a basic Excel tracker and realised data could make real decisions clearer for people who aren't numbers-oriented. That sent me toward CS. Now in final year, it's less about the aha moment and more about the fact that <em>I can build things that didn't exist before</em>. That's still what gets me."
  },
  {
    q: "Tell me about a time you had to figure something out with no one to help you.",
    tag: "problem", tagLabel: "Problem Solving",
    why: "Standard internship readiness question",
    score: 7, scoreLabel: "out of 10 — good answer", scoreOffset: 94,
    good: "Good structure. You showed process, not just outcome — that's what separates a real answer from a rehearsed one.",
    improve: "Name the actual resource you used. 'I found a Stack Overflow thread' or 'I read the official PHP docs' is more credible than 'I searched online.'",
    sample: "During my e-commerce project, I needed to implement a payment gateway but our supervisor was on leave and none of my group members had done it before. I spent two days reading the <em>Billplz API documentation</em> end to end, set up a sandbox environment, and tested each endpoint individually. I got it working, but more importantly — I now know I can read documentation and build from it without needing someone to walk me through it."
  },
  {
    q: "You're in final year. What's one thing you'd do differently if you started over?",
    tag: "reflection", tagLabel: "Reflection",
    why: "Standard self-awareness question for final year students",
    score: 8, scoreLabel: "out of 10 — strong answer", scoreOffset: 63,
    good: "Honest and specific. You didn't give a 'weakness that's secretly a strength' answer — that honesty reads well.",
    improve: "Show you've already started correcting it. 'I wish I'd done X earlier, so now I'm doing Y' closes the loop.",
    sample: "I'd start building things outside of class assignments earlier. All my projects so far have been for marks. I only started a personal project — a simple scholarship finder for Malaysian students — in my final semester. I've learned more from it in three months than from two years of coursework because <em>there are no marks, just users</em>. If I started over, I'd do one real side project per year."
  },
  {
    q: "If you got this internship, what would you want to have learned by the end of it?",
    tag: "goals", tagLabel: "Goals",
    why: "Role-specific closing question",
    score: 8, scoreLabel: "out of 10 — strong answer", scoreOffset: 63,
    good: "Specific, role-relevant, and shows you've thought about it beyond just 'experience'. Interviewers remember this.",
    improve: "Add a secondary goal that's people-focused — what do you want to learn from the team, not just the tech?",
    sample: "Three things. First, I want to see what production-level code looks like — how it's structured, reviewed, and deployed — because my projects only have me as the audience. Second, I want to understand how product decisions actually get made. In university it's just 'the spec says so.' Third, I want to see <em>how good developers approach problems they've never seen before</em> — that process is what I can't learn from YouTube."
  }
];
```

---

## State variables

```javascript
var histStack = [];      // navigation history
var currentQ = 0;        // index of question being answered
var answered = [false, false, false, false, false, false, false]; // per-question status
var hintOpen = false;    // STAR hint panel open state
var sampleOpen = false;  // sample answer panel open state
```

---

## Functions required (all global, no IIFE, no ES modules)

```
renderQuestionList()       — rebuilds the question list HTML, updates dots and done count
goTo(fromId, toId)         — slide transition forward, push fromId to histStack
backTo(id)                 — slide transition back, pop histStack
openQuestion(idx)          — set currentQ, populate answer screen, call goTo('s-list','s-answer')
toggleHint()               — toggle STAR panel open/close
updateWordCount()          — count words in textarea, enable/disable submit button (min 5 words)
submitAnswer()             — compute score from word count, populate feedback screen, goTo answer→feedback
computeScore(wordCount)    — returns score object for <60 word answers, null for 60+
retryAnswer()              — clear textarea, goTo feedback→answer
nextQuestion()             — mark currentQ as answered, check if all done, goTo feedback→list or complete
toggleSample()             — toggle sample answer panel open/close
```

---

## Critical JS rules

- Use plain `onclick="functionName()"` on ALL buttons, rows, and toggles
- Define ALL functions as globals in a single `<script>` tag at the bottom of `<body>`
- Do NOT use IIFE wrappers `(function(){...})()`
- Do NOT use `addEventListener`
- Do NOT use ES modules or `import`
- Initialise by calling `renderQuestionList()` directly in the script (not inside DOMContentLoaded)

---

## File output

Save as: `myintern-interview-practice.html`
Single file, no external dependencies.
