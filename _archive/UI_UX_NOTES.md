# UI / UX Notes — MyScholar.my
*Last updated: April 2026*

---

## Design Principles

1. **Student first, always.** Every UI element must serve Aleya — 18, on her phone, needs answers fast.
2. **Speed over decoration.** Filtering should feel instant. No spinners. No loading states if avoidable.
3. **Trust through clarity.** If a URL is broken, show it. If data is estimated, label it. Students act on this information.
4. **Mobile first, always.** Design for 390px. Anything wider is a bonus.
5. **Honest copy.** No "Discover your dream scholarship!" energy. Direct, specific, factual.

---

## Design Systems

### Scholarships — index.html (Light / Ice)
- Background: white / soft blue-grey
- Primary accent: blue family (#2E75B6 range)
- Card style: white card, light shadow, rounded corners
- Typography: clean sans-serif, high contrast
- Status badges: colour-coded (Government = blue, GLC = teal, Banking = navy, etc.)
- Deadline urgency: red/orange for ≤ 30 days, yellow for 31–60 days

### Internships — internships.html (Dark Glass)
- Background: deep dark (#0D1117 range)
- Primary accent: teal / cyan glow
- Card style: dark card with subtle glass border and glow on hover
- Company logos: via Clearbit (`logo.clearbit.com/[domain]`), fallback to initials
- Allowance display: prominent — students care about this first
- Tags: industry chips in muted teal/blue

**Rule:** Do not mix these two systems. Light stays light. Dark stays dark. The visual difference signals to the user they are in a different section.

---

## Key UI Decisions & Rationale

### No pagination — show all, filter client-side
Students use filters and search to narrow down, not pagination. Showing all records at once (filtered) means they see the full picture immediately. At 300 scholarship records, client-side rendering is fast enough on mobile.

### Correction button on every card
Putting corrections inline (not in a separate "report" flow) increases submission rate. Students notice the error in context and act on it immediately. The friction must be near-zero.

### Bookmark without login
Every extra step before bookmarking loses the student. localStorage is instant, no account required, works offline. The trade-off (bookmarks are device-specific) is acceptable at this stage.

### is_visible flag — nothing shows until reviewed
Students never see a record ANRA hasn't checked. No matter how good Matt's research is, human review is the last gate. This is not about distrust of the agent — it's about protecting students from acting on unverified data.

### URL status displayed on cards
A broken link is worse than no link. Students lose time clicking dead links and lose trust in the directory. Showing `⚠ Link may be outdated` before they click is better than letting them discover it.

### Tips field — required, never generic
"Visit their website for more information" is useless to students. Every record must have a tip that would save a student time or prevent a common mistake. This is an editorial quality bar, not just a data field.

---

## Mobile-Specific Rules

- Tap targets minimum 44px height
- Filter chips must be scrollable horizontally, not wrap to multiple rows (wastes vertical space)
- Detail modal must be full-screen on mobile (not centred overlay)
- No hover-dependent interactions — assume touch
- Test with real thumb reach: key actions (search, filters, bookmark) must be reachable one-handed
- Font sizes: minimum 14px body, 16px input (prevents iOS auto-zoom on focus)

---

## Internship UI — Mockup History

Five concepts explored before landing on the dark glass aesthetic:

| File | Concept | Why Rejected / Archived |
|------|---------|------------------------|
| internship-mockup-A.html | Light, card-based | Too similar to index.html — no visual distinction between the two products |
| internship-mockup-B1-dark.html | First dark glass attempt | Good direction, but cards felt flat |
| internship-mockup-B1-v2.html | Extended dark glass | Most developed — closest to final |
| internship-mockup-B2-teal.html | Teal accent variant | Good colour, card spacing too tight |
| internship-mockup-B3-warm.html | Warm colour variant | Felt off-brand for a professional internship directory |

The dark glass aesthetic was chosen because: (1) it visually signals a separate product, (2) it reads as more professional/employer-adjacent than the scholarship side, and (3) it performs well on mobile OLED screens (common in Malaysia's market).

All mockups are archived in `_seo-tools/_mockups/` for reference.

---

## Copy Voice Rules

### Student-facing copy (scholarship/internship descriptions, tips)
- Plain English. Written for a 19-year-old. No corporate jargon.
- Specific over general: "Apply by 31 March" not "Apply before the deadline"
- Honest about limitations: "(estimated)" on allowance figures from forum research
- Tip quality bar: if a tip wouldn't save the student time or prevent a mistake, rewrite it

### Social content (Facebook / LinkedIn)
- Facebook: Bahasa Melayu preferred. 3–5 lines max. Always anchored to a real scholarship or update.
- LinkedIn: English. First-person (ANRA's voice). 4–6 lines. No bullet points in the post.
- No hype words: "amazing", "incredible", "game-changing", "exciting opportunity"
- Honest about early-stage: *"It's still early days and I'm adding more regularly, but it's already usable"*

### Outreach / partnership copy (Amirah)
- Short. Specific about why them, why now.
- No AI-sounding phrases: never "I hope this email finds you well", "I am reaching out to"
- First contact: no attachments, no hard asks
- Always written as ANRA the person, not MyScholar the brand

---

## GA4 Events Reference

Every interactive element must have an associated GA4 event. When adding a new UI element, define the event name and parameters at the same time — never as an afterthought.

| Event | Parameters | Trigger |
|-------|-----------|---------|
| `search_query` | `query: string` | User types in search bar (debounced) |
| `filter_applied` | `filter_type, filter_value` | User taps a filter chip |
| `correction_submitted` | `scholarship_id` | User submits correction form |
| `quiz_completed` | `entry_level, citizenship, destination` | User completes matching quiz |
| `intern_search` | `query: string` | User searches internship directory |
| `intern_filter_applied` | `filter_type, filter_value` | User filters internship listings |
| `intern_apply_click` | `internship_id, company` | User clicks Apply / Official Site |

For any future element (modal open, bookmark tap, etc.) — propose the event name alongside the UI code.
