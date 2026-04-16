# Decisions Log — MyScholar Ecosystem
*Last updated: April 16, 2026 · Maintained by SOFIA*

A record of significant product, technical, and operational decisions — what was decided, when, and why. Add new decisions at the bottom. Never delete settled decisions — they prevent relitigating closed questions.

---

## Technical Decisions

### Single-file HTML SPA architecture
**Date:** Project inception
**Decision:** All CSS and JS live inline in each HTML file. No build step. No separate files. Deploy = replace one file on GitHub.
**Why:** Solo builder, no engineering background, no CI/CD. Single-file means zero infra to maintain. If it works locally, it works in production.
**Trade-off accepted:** File size grows. Diffs are harder. Accepted at this stage — zero-infra advantage outweighs complexity cost.
**Revisit when:** index.html exceeds ~400 KB, or multiple contributors.

---

### Supabase as the database
**Date:** Early 2026
**Decision:** Move scholarship data from inline HTML to Supabase (hosted PostgreSQL).
**Why:** A static HTML list can't be updated without redeploying the whole file. Supabase gives a full relational DB, a browser-compatible JS client, a visual dashboard, and a free tier.
**Trade-off accepted:** Network request on load. Acceptable — data is small, Supabase is fast.

---

### GitHub Pages for hosting
**Date:** Project inception
**Decision:** Host on GitHub Pages from ANRACollective/MYSCHOLAR.
**Why:** Free, CDN-backed, SSL included. Deploy = push to the repo.
**Revisit when:** Rate limits, or Phase 6 requires server-side auth.

---

### Cloudflare DNS-only (grey cloud)
**Date:** 2026
**Decision:** Use Cloudflare for DNS resolution but not as a proxy.
**Why:** Proxied mode caused stale cached versions of index.html to be served after deployments. Grey cloud + Email Routing resolves both problems.
**Note:** If proxying is ever re-enabled, configure cache purge rules for index.html and internships.html.

---

### Manual IDs on scholarships and internships tables
**Date:** Early 2026
**Decision:** Both tables use explicit integer IDs, not auto-increment.
**Why:** Auto-increment creates race conditions when agent inserts and manual inserts happen in parallel. Manual IDs are auditable and prevent collision.
**Rule:** Always `SELECT MAX(id)+1` before inserting. Current scholarship next ID: 303.

---

### Never mark 403 as broken
**Date:** 2026, during scholarship URL audit
**Decision:** HTTP 403, 401, 405, 406, 429 → `url_status = 'ok'`.
**Why:** Government and GLC sites commonly return 403 to bots. A 403 means the site is live. Only 404 and confirmed DNS failure qualify as `'broken'`. Timeouts and 5xx are `'suspected'`.

---

### is_visible = false by default on all internship inserts
**Date:** April 2026
**Decision:** Every internship record starts `is_visible = false`. ANRA flips to `true` after review.
**Why:** Students should never see an unreviewed record. Human review is the quality gate.
**Rule:** Matt never flips is_visible. That is always ANRA's decision.

---

### Never hard-delete records
**Date:** 2026
**Decision:** Use `is_active = false` to retire records, never DELETE.
**Why:** Historical records have audit value. IDs are referenced in correction submissions and SEO pages. Deleting breaks external references.

---

### Git workflow via push.bat with integrity check
**Date:** April 12, 2026
**Decision:** Deploy via push.bat script. Verifies `initData(` is present in index.html before pushing.
**Why:** Previous workflow (manual GitHub web UI upload) was slow, error-prone, and caused the byte corruption incident. Script is fast, consistent, and adds an automated integrity gate.
**Rule:** Always run push.bat after edits. Never upload HTML manually via GitHub web UI again.

---

### File integrity protocol — verify before every edit session
**Date:** 2026, post-incident
**Decision:** Before any edit on index.html or internships.html: (1) confirm initData() is present, (2) record the byte count.
**Why:** A silent byte corruption removed initData() from index.html. The page loaded but showed no data. No error. Protocol prevents recurrence.
**Rule:** Never edit from a remembered version. Always start from the live file.

---

### Matt's URL checker as a scheduled task (every 3 days)
**Date:** April 15, 2026
**Decision:** Matt's internship URL checker runs automatically every 3 days at 8am, not just on demand. Auto-deactivates broken records, produces a change report.
**Why:** Manual URL checks were falling behind as the internship count grew to 127 records. Automation removes the operational burden while maintaining data quality.
**Rule:** Matt auto-deactivates (`is_active = false`) any record where the URL returns a clear failure. ANRA's review queue is the broken records list.

---

### internship url_type visibility rule
**Date:** April 15, 2026
**Decision:** Only `internship_page`, `info_page`, `direct_apply`, `portal` url_types may be `is_visible = true`. `careers_page` is always hidden.
**Why:** A generic careers page gives students no useful information about the specific internship. It wastes their time and erodes trust in the data. Visibility is reserved for pages that are specifically about the programme.

---

## Product Decisions

### Scholarship count stays at "200+" in UI copy
**Date:** 2026
**Decision:** The figure in all copy, UI, and marketing is permanently "200+" — never the exact count.
**Why:** A specific number is immediately stale and invites accuracy challenges. "200+" is honest, communicates scale, and never needs updating. Do not change this even as the database grows.

---

### Scholarships permanently free — no featured placements, ever
**Date:** Project inception
**Decision:** No scholarship provider will ever pay to appear higher, be featured, or be promoted in any way.
**Why:** Student trust is the foundation of the business. The moment a student suspects a scholarship appears because of payment, the entire directory becomes untrustworthy. This corrupts the scholarship side and makes the internship revenue model impossible. Non-negotiable.

---

### Three distinct design aesthetics — one per product
**Date:** April 2026
**Decision:**
- `index.html` (MyScholar) = light/ice aesthetic
- `internships.html` (MyIntern) = dark glass aesthetic
- `tuition.html` (MyTuition) = warm linen/terracotta aesthetic
**Why:** Visual distinction helps students understand they're in a different product section. The MyTuition palette (Rooted. brand inspiration) reflects the tutoring/academic context distinctly from the funding and employment contexts.
**Rule:** Never mix the aesthetics. Each product has its own language.

---

### Revenue model — employers pay, students never pay
**Date:** April 2026
**Decision:** When MyScholar introduces paid features, they target employers (featured listings, company dashboards), not students.
**Why:** Students are the audience. Companies are the customers. Charging students for access in a product built for their benefit is a values violation.

---

### Agent-based operations
**Date:** April 2026
**Decision:** Build named agents (SOFIA, Amirah, Matt, JACK, Diana, KELLY) with defined scopes and spec files rather than doing all ops manually.
**Why:** At 265+ scholarship records and a growing internship and tuition database, manual operations consume time that should go into product. Agents with clear specs reduce burden without losing quality control. ANRA retains final approval on all consequential actions.
**Key constraint:** Agents draft, ANRA approves and executes. No agent takes a consequential action without ANRA sign-off.

---

### Monthly ops cadence as the operating rhythm
**Date:** April 16, 2026
**Decision:** From Month 2, the default is a lean monthly cadence — health check, data refresh, growth, review — run in 1–2 batched Claude sessions per month.
**Why:** Month 1 was build-heavy and Claude-intensive (SGD 150/month at Max Pro). Month 2+ should be maintenance, not build. Batching Claude usage instead of working continuously keeps costs proportionate to the work being done.
**Target:** SGD 0–5 in Claude usage per month once the monthly playbook is running smoothly.

---

### Planning docs live in _dev/, archive in _archive/
**Date:** April 16, 2026
**Decision:** Active planning documents (CURRENT_STATE, TASKS, DECISIONS_LOG, ARCHITECTURE, FEATURE_INVENTORY, TECH_DEBT_LOG) live in `MYSCHOLAR/_dev/`. Old versions are archived in `MYSCHOLAR/_archive/`. SOFIA is responsible for keeping active docs current.
**Why:** Without a clear home, planning docs were scattered across multiple folders and becoming stale. _dev/ is the active working area; _archive/ is the record. SOFIA updates the _dev/ versions at the start of each new product phase or when significant decisions are made.

---

## Operational Decisions

### Amirah never sends — ANRA always sends
**Date:** April 2026
**Decision:** All external communications drafted by Amirah are reviewed and sent by ANRA. Amirah drafts only.
**Why:** Relationships with scholarship providers, partners, and students are ANRA's to own. An agent sending without review creates reputational risk.

---

*Add new decisions as they are made. Format: title, date, decision, why, trade-offs, revisit condition.*
