# CURRENT STATE — MyScholar Ecosystem
*Last updated: April 16, 2026 · Maintained by SOFIA*

---

## What the ecosystem is

Three free, no-login tools for Malaysian students — scholarships, internships, and tuition. Solo-built by ANRA. Hosted on GitHub Pages. Supabase backend. All logic client-side in single-file HTML SPAs. No backend server, no build step.

---

## Live products

| Product | File | Status |
|---|---|---|
| MyScholar (scholarships) | `index.html` | Production, fully functional |
| MyIntern (internships) | `internships.html` | Production, functional |
| MyTuition (tuition centres) | `tuition.html` (staging, outside repo) | Pre-launch — blocked on Google Places API key |
| SEO landing pages | `SEO/*.html` | ~129 pages deployed |
| 404 page | `404.html` | Live |

**Domain:** myscholar.my (Exabytes → Cloudflare DNS-only → GitHub Pages)

---

## Database — Supabase `ywvfvjvxwhcfprfrkgqm`

### Scholarships
- **265 active records** (`is_active = true`)
- **21 hidden records** (`is_active = false`) — broken URLs, pending manual review
- `url_status` breakdown: 250 ok / 21 broken / 15 suspected (as of April 14, 2026 audit)
- **Next available ID: 303**

### Internships
- **44 live records** (`is_visible = true`) as of April 15, 2026
- URL health: checked every 3 days via Matt's scheduled task (auto-deactivates broken)
- `url_type` rule: only `internship_page`, `info_page`, `direct_apply`, `portal` may be `is_visible = true`. `careers_page` is always hidden.
- Records with `url_status = 'broken'` are auto-set `is_active = false` by Matt's scheduler

### Tuition centres (MyTuition)
- **1 manually added record** — Pusat Tuisyen Formula Kota Kemuning (seeded as a test)
- KELLY agent ready to run but needs Google Places API key first
- Tables: `tuition_centres`, `teachers`, `reviews`, `results`, `scores`, view: `centres_with_scores`

---

## Features — what exists right now

### index.html (MyScholar)
- Supabase data fetch via `scholarships_full` view + `initData()`
- Search by keyword
- Filters: category, coverage, destination, eligibility, grade, deadline month
- Deadline display with 60-day urgency window
- Bookmarks (localStorage, no login)
- Correction/feedback submission form
- Eligibility quiz (3-question scholarship matcher)
- GA4 events: `search_query`, `filter_applied`, `correction_submitted`, `quiz_completed`
- Design: light/ice aesthetic — fixed

### internships.html (MyIntern)
- Supabase data fetch from `internships` table
- Company logo cards (`logo_url` / `logo_domain`)
- Search + filter (industry, study level, stipend)
- Apply links to external URLs
- GA4 events: partially instrumented (`intern_apply_click` still missing)
- Design: dark glass aesthetic — fixed

### SEO layer
- Wave 1 (generate-seo.js): 29 pages — core biasiswa, government, field keywords
- Wave 2 (wave2.js): 43 pages — banks, GLCs, foreign govts, states, pain points
- Wave 3 (wave3.js): 33 pages — company internships, university scholarships, niche categories
- Wave 4 (wave4.js): additional pages
- ~24 manual pages
- Total: ~129 pages in SEO/ folder
- Sitemaps: `sitemap.xml` (root) + `sitemap-seo.xml` (SEO subfolder)

### tuition.html (MyTuition — staging)
- Map-first SPA using Leaflet.js + OpenStreetMap (no API key cost)
- Warm linen/terracotta aesthetic — distinct from MyScholar and MyIntern
- Supabase JS client connected
- Blocked: needs `SUPABASE_ANON_KEY` added and KELLY to populate data

---

## Agent team

| Agent | File | Status | Runs |
|---|---|---|---|
| SOFIA | `_agents/sofia-agent.md` | Active | On demand |
| Amirah | `_agents/amirah-agent.md` | Active | On demand |
| Matt | `_agents/matt-agent-v2.md` | Active | Scheduled every 3 days + on demand |
| JACK | `_agents/jack-agent.html` | Active | On demand via jack-run.js |
| Diana | `_agents/diana-agent.md` | Active | On demand |
| KELLY | `_agents/kelly-agent-brief.md` | Ready, not yet run | Blocked on API key |

---

## Infrastructure health

| System | Status | Notes |
|---|---|---|
| GitHub Pages hosting | Healthy | Auto-deploy on push |
| Supabase DB | Healthy | Free tier, well within limits |
| Cloudflare DNS | Healthy | Grey cloud (DNS-only) |
| Resend email | Healthy | Free tier |
| GA4 analytics | Active | Property G-ZETBRDDMTV |
| pg_net URL cron | Active | Scholarships: Monday 8am UTC |
| Matt URL checker | Active | Scheduled every 3 days |
| push.bat deploy script | Active | Verifies initData() before push |

---

## Known issues

1. **21 hidden scholarships** — broken URLs, need manual re-check to determine if they can be restored or should be permanently retired.
2. **internships.html GA4 incomplete** — `intern_apply_click` event is not yet instrumented.
3. **MyTuition data empty** — KELLY hasn't run yet. One manual test record in DB.
4. **`__pycache__/` in SCHOLAR root** — Python cache from KELLY scripts, permission-locked, delete manually.
5. **Empty directories in repo** — `CONTEXT/`, `_test_move/`, and an empty `_docs/` folder remain permission-locked; delete manually from File Explorer.
6. **`SEO/CNAME`** — duplicate of root CNAME, delete manually.

---

## What is working well and deliberately kept as-is
- All architecture decisions (single-file, Supabase, GitHub Pages) are holding
- Scholarship data is rich and URL-audited
- SEO layer is deployed and indexed
- Agent team is operational
- Monthly ops cadence is defined (see TASKS.md)
- localStorage bookmarks work intentionally without accounts
- Scholarship count in UI is permanently "200+" — do not change
