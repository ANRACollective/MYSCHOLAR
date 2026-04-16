# Feature Inventory — MyScholar Ecosystem
*Last updated: April 16, 2026 · Maintained by SOFIA*

Status: **LIVE** · **STAGING** · **PLANNED** · **ARCHIVED**

---

## MyScholar — index.html

| Feature | Status | Notes |
|---|---|---|
| Scholarship search (keyword) | LIVE | Core, working |
| Filters — category, coverage, destination | LIVE | Working |
| Filters — eligibility, grade, deadline month | LIVE | Working |
| 60-day deadline urgency display | LIVE | High utility for students |
| Bookmark feature (localStorage) | LIVE | Intentional — no login required |
| Correction/feedback submission form | LIVE | Trust signal |
| Eligibility quiz (3-question matcher) | LIVE | `quiz_completed` GA4 event instrumented |
| GA4 events (4 events) | LIVE | `search_query`, `filter_applied`, `correction_submitted`, `quiz_completed` |
| Light/ice aesthetic | LIVE | Fixed design language — do not change |

---

## MyIntern — internships.html

| Feature | Status | Notes |
|---|---|---|
| Internship data fetch (Supabase) | LIVE | 44 visible records |
| Company logo cards | LIVE | `logo_url` / `logo_domain` fallback |
| Search + filter (industry, level, stipend) | LIVE | Working |
| Apply links (external) | LIVE | Verified via Matt's 3-day URL checker |
| GA4 events (partial) | LIVE | Missing `intern_apply_click` — add in next edit session |
| Dark glass aesthetic | LIVE | Fixed design language — do not change |
| Matt's automated URL checker | LIVE | Runs every 3 days, auto-deactivates broken |

---

## MyTuition — tuition.html (staging)

| Feature | Status | Notes |
|---|---|---|
| Leaflet.js map (OpenStreetMap) | STAGING | No API key cost — working |
| Supabase fetch (`centres_with_scores` view) | STAGING | Schema complete, data empty |
| Centre detail cards | STAGING | UI built |
| Warm linen/terracotta aesthetic | STAGING | Fixed design language |
| KELLY data population | PLANNED | Blocked on Google Places API key |
| Deploy to GitHub Pages | PLANNED | Blocked on KELLY run + SUPABASE_ANON_KEY |

---

## SEO Layer

| Feature | Status | Notes |
|---|---|---|
| Wave 1 pages (29) | LIVE | Core biasiswa, government, field keywords |
| Wave 2 pages (43) | LIVE | Banks, GLCs, foreign govts, states, pain points |
| Wave 3 pages (33) | LIVE | Company internships, university scholarships, niche |
| Wave 4 pages | LIVE | Additional pages |
| Manual SEO pages (~24) | LIVE | Hand-crafted pages |
| Sitemaps (root + SEO) | LIVE | `sitemap.xml` + `sitemap-seo.xml` |
| Further waves | PLANNED | Run JACK when new keyword gaps are identified |

---

## Agent Team

| Agent | Status | Notes |
|---|---|---|
| SOFIA | LIVE | Strategy and monthly planning |
| Amirah | LIVE | Scholarship research and comms |
| Matt | LIVE | Internship research + scheduled URL checker |
| JACK | LIVE | SEO generation via jack-run.js |
| Diana | LIVE | Scholarship intelligence |
| KELLY | READY | Tuition data — blocked on API key |

---

## Dev & Tooling

| Tool | Status | Notes |
|---|---|---|
| push.bat deploy script | LIVE | Includes initData() integrity check |
| Internship insert admin UI | LIVE | `_dev/internships-insert.html` |
| JACK SEO generator | LIVE | `_seo-tools/jack-run.js` + wave scripts |
| seo-manifest.json | LIVE | Config for all SEO pages |
| KELLY agent scripts | READY | `_kelly/kelly_agent.py` — needs API key |
| myscholar-dev.skill | LIVE | Claude skill file for project sessions |

---

## Planned / Backlog

| Feature | Priority | Notes |
|---|---|---|
| `intern_apply_click` GA4 event | High | Add during next internships.html edit session |
| MyTuition launch | High | After KELLY run |
| 21 hidden scholarships review | High | Manual re-check — restore or retire |
| SPM pathways guide | Medium | What qualifications open which scholarships |
| PTPTN calculator | Medium | B40/M40/T20 repayment estimates |
| Bahasa Malaysia toggle | Medium | Needs BM translations for all card copy first |
| Application timeline calendar | Low | |
| Scholarship comparison mode | Low | |
| "Closing soon" email digest | Low | Needs user accounts first |
| Featured employer listings | Low — Phase 5 | Revenue feature — when internship data is 100+ visible |
| Company dashboards | Low — Phase 6 | Requires Supabase Auth + backend |

---

## Archived / Resolved

| Item | Resolution |
|---|---|
| internship-mockup-*.html files | Chose dark glass (B1-v2). Others archived. |
| seo-pages/ staging folder (root) | All 16 pages deployed to SEO/. Folder moved to _archive/. |
| _docs/ planning folder | Replaced by _dev/ planning docs. Old docs in _archive/. |
| index.html.bak | Moved to _archive/. |
| nodetest.html | Moved to _archive/. |
| myscholar-og.png (293 KB oversized) | Switch all meta tags to reference .jpg (42 KB). Then delete manually. |
| myscholar_profile_photo (1).svg | Likely duplicate — verify and delete manually. |
