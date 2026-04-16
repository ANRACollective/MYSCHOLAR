# Decisions Log — MyScholar.my
*Last updated: April 2026*

A record of significant product, technical, and operational decisions — what was decided, when, and why. This exists so future decisions don't re-litigate settled questions, and so the reasoning is preserved when the answer is no longer obvious.

---

## Technical Decisions

---

### Single-file HTML SPA (index.html, internships.html)
**Date:** Project inception (pre-2026)  
**Decision:** All CSS and JS live inline in the HTML file. No build step. No separate files.  
**Why:** Solo builder with no formal engineering background and no CI/CD pipeline. Every extra layer of tooling is a layer that can break silently. Single-file means: if it works locally, it is production. Deploy = replace one file on GitHub.  
**Trade-off accepted:** File size grows over time. File edits become harder to diff and review. Accepted at this stage — files are still manageable, and the zero-infra advantage outweighs the complexity cost.  
**Revisit when:** index.html exceeds ~400 KB, or more than one person is editing the codebase.

---

### Supabase as the database layer
**Date:** Early 2026  
**Decision:** Moved scholarship data out of the HTML file and into Supabase (hosted PostgreSQL).  
**Why:** A static hardcoded list in HTML cannot be updated without re-deploying the whole file. Supabase gives a full relational database, a visual admin dashboard, a JS client that works directly in the browser (no backend needed), Row Level Security, and a generous free tier.  
**Trade-off accepted:** Data fetching on page load adds a network request. Acceptable — Supabase is fast and the data is small enough to load in full.  
**Revisit when:** Free tier row limits are approached, or complex RLS policies are needed for company dashboards (Phase 6).

---

### GitHub Pages for hosting
**Date:** Project inception  
**Decision:** Host on GitHub Pages from the ANRACollective/MYSCHOLAR repository.  
**Why:** Free, reliable, CDN-backed, SSL provided automatically. Deploy = push to the repo. No server configuration, no cost, no maintenance overhead.  
**Trade-off accepted:** Static files only — no server-side rendering, no dynamic routes. Acceptable for this architecture.  
**Revisit when:** Rate limits become a problem, or Phase 6 requires server-side auth and rendering.

---

### Cloudflare DNS-only (grey cloud, not proxied)
**Date:** 2026  
**Decision:** Use Cloudflare for DNS resolution but NOT as a proxy (grey cloud, not orange cloud).  
**Why:** Proxied mode added Cloudflare caching that caused stale versions of index.html to be served after deployments. Grey cloud mode eliminated this without sacrificing the Email Routing feature (which works regardless of proxy status).  
**Note:** If Cloudflare proxying is ever re-enabled, ensure cache invalidation is configured for index.html and internships.html.

---

### Manual IDs on scholarships and internships tables
**Date:** Early 2026  
**Decision:** Both tables use explicit integer IDs, NOT auto-increment / SERIAL.  
**Why:** Auto-increment IDs create a race condition risk when agent inserts and manual inserts happen in parallel. Manual IDs (always MAX+1 before insert) are explicit, auditable, and prevent collision.  
**Rule:** Always run `SELECT MAX(id)+1 FROM [table]` before any insert. Next scholarship ID: 301.

---

### Never mark 403 responses as broken
**Date:** 2026, during scholarship URL audit  
**Decision:** HTTP 403, 401, 405, 406, 429 responses are classified as `url_status = 'ok'`, not `'broken'`.  
**Why:** Government and GLC websites commonly return 403 to automated requests (bot detection). A 403 means the site is live and actively rejecting bots — the URL works for real humans. Marking it broken would mislead students.  
**Rule:** Only 404s and confirmed NXDOMAIN (DNS failure) qualify as `'broken'`. Timeouts and 5xx are `'suspected'`.

---

### is_visible = false by default on all internship inserts
**Date:** April 2026  
**Decision:** Every internship record inserted by Matt (or manually) starts with `is_visible = false`. ANRA flips to `true` after human review.  
**Why:** Students should never see an unreviewed record. Matt may make errors in programme names, eligibility, or tips. Human review is a quality gate that protects student trust.  
**Rule:** Matt never flips is_visible. That is always ANRA's decision.

---

### Never hard-delete records
**Date:** 2026  
**Decision:** Scholarship and internship records are never deleted from the database. Instead, use `is_active = false` to retire them.  
**Why:** Historical records have value (audit trail, seasonal patterns, user-submitted corrections reference specific IDs). Deleting records breaks any external reference and removes the ability to understand what was in the database at a given time.

---

## Product Decisions

---

### Scholarship count stays at "200+" in UI copy
**Date:** 2026  
**Decision:** The number displayed in marketing copy and the UI header is permanently "200+" regardless of the actual count.  
**Why:** A specific number invites questions about accuracy and becomes stale immediately. "200+" is honest (the database exceeds 200), communicates scale, and never needs updating. Changing this figure would confuse returning users and require coordinated UI changes.

---

### Scholarships are permanently free — no featured placements ever
**Date:** Project inception  
**Decision:** No scholarship provider will ever pay to have their listing featured, promoted, or ranked higher. The scholarship directory is a public good and is permanently free.  
**Why:** The moment a student suspects a scholarship appears because someone paid for it, the entire directory becomes untrustworthy. The trust signal of the scholarship side is the foundation that makes the internship revenue model possible. Corrupting one corrupts both.

---

### Dark glass aesthetic for internships (not the same as scholarships)
**Date:** April 2026  
**Decision:** internships.html uses a dark glass design system — visually distinct from the light/ice aesthetic of index.html.  
**Why:** Two reasons. (1) Visual distinction tells the student they are in a different product section. (2) The internship directory has a slightly more professional / employer-adjacent feel than the scholarship side — the dark aesthetic supports this. Five mockups were explored; dark glass was most distinct and mobile-performant.  
**Rule:** Do not mix the two aesthetics. index.html = light. internships.html = dark. Always.

---

### Internship revenue model — employer pays, not students
**Date:** April 2026  
**Decision:** When MyScholar introduces revenue features, they will target employers (featured listings, company dashboards) not students.  
**Why:** Students are the audience. Companies are the customers. Charging students for any feature in a product built to serve their access to opportunity is a fundamental values violation. Revenue comes from companies who want access to the audience MyScholar has built.

---

### Agent-based operations (Amirah, Matt, Jack)
**Date:** April 2026  
**Decision:** Build named agents with defined scopes rather than doing all ops manually.  
**Why:** At 277+ scholarship records and a growing internship database, manual operations (research, URL checks, inbox management, SEO generation) consume time that should go into product work. Agents with explicit scope and spec documents reduce the operational burden without losing quality control (ANRA retains final approval on all consequential actions).  
**Key constraint:** Agents draft, ANRA approves and sends. No agent takes consequential action without ANRA sign-off.

---

### File integrity protocol — verify before every edit
**Date:** 2026 (post-incident)  
**Decision:** Before any edit session on index.html or internships.html: (1) confirm initData() is present, (2) record the byte count.  
**Why:** A silent byte corruption removed initData() from index.html. The page loaded but showed no data. No error message. The incident was undetected for a period. This protocol prevents it recurring.  
**Rule:** Never edit from a remembered version. Always start from the live file.

---

## Operational Decisions

---

### Amirah never sends — ANRA always sends
**Date:** April 2026  
**Decision:** All external communications drafted by Amirah (emails to partners, replies to students, social posts) are reviewed and sent by ANRA. Amirah drafts only.  
**Why:** Relationships — with scholarship providers, potential partners, students — are ANRA's to own. An agent sending on ANRA's behalf without review creates reputational risk and undermines the personal, direct brand voice that MyScholar has established.

---

### Weekly ops cadence
**Date:** April 2026  
**Decision:** Amirah produces a weekly ops summary covering inbox, corrections, partnerships, and social. Matt runs a weekly Refresh on all active internship records.  
**Why:** Without a regular cadence, operational debt accumulates silently (broken URLs, unanswered corrections, stale records). Weekly is frequent enough to catch issues early without becoming noise.

---

### Git workflow via push.bat — CMD script, not GUI
**Date:** April 12, 2026
**Decision:** Deploy via a `push.bat` script in the MYSCHOLAR root. I (Claude) edit files directly in the workspace; ANRA runs `push.bat` to commit + push to GitHub.
**Why:** The previous workflow (manual file upload via GitHub web UI) was slow, error-prone, and caused a silent byte corruption incident. A script is fast, consistent, and adds a pre-push integrity check (verifies `initData(` is present before pushing). Ruled out: GitHub Desktop, VS Code git panel — keeping it simple and terminal-based.
**Rule:** Always run `push.bat` after I complete edits in a session. Never upload HTML files manually via the GitHub web UI again.

---

*Add new decisions here as they are made. Format: decision, date, why, trade-offs accepted, when to revisit.*
