# MyScholar — Malaysia's Free Scholarship & Opportunities Finder

A free, searchable directory of scholarships, internships, and tuition centres for Malaysian students. Built and maintained by one person.

**Live site:** [myscholar.my](https://myscholar.my)

---

## Products

### MyScholar (`index.html`)
Scholarship and financial aid finder. 200+ programmes covering JPA, MARA, GLCs, banks, foundations, foreign governments, and study loans. Filterable by field, level, citizenship, and deadline.

### MyIntern (`internships.html`)
Internship finder for Malaysian students. Curated listings with verified URLs, stipend info, and deadline tracking. Automated URL health checks run every 3 days.

### MyTuition (`tuition.html` — coming soon)
Map-first discovery for SPM tuition centres in KL. Built on Leaflet.js + OpenStreetMap. Data sourced via KELLY (Google Places automation) and parent Facebook group curation.

---

## Stack

| Layer | Details |
|---|---|
| Frontend | Single-file HTML SPAs — no framework, no build step |
| Database | Supabase (`ywvfvjvxwhcfrkgqm`) |
| Hosting | GitHub Pages (`ANRACollective/MYSCHOLAR`) |
| Domain | myscholar.my (Exabytes registrar, Cloudflare DNS) |
| Email | Resend (transactional) + Cloudflare Email Routing |
| Analytics | GA4 (`G-ZETBRDDMTV`) |
| URL checks | pg_net cron every Monday 8am UTC |

---

## Repo structure

```
MYSCHOLAR/
├── index.html              # MyScholar SPA (scholarships)
├── internships.html        # MyIntern SPA
├── 404.html
├── robots.txt
├── sitemap.xml             # Homepage + SEO pages
├── sitemap-seo.xml
├── CNAME                   # myscholar.my
│
├── _agents/                # Agent briefs and prompts
│   ├── sofia-agent.md      # SOFIA — Chief Product & Growth Officer
│   ├── amirah-agent.md     # Amirah — scholarship researcher
│   ├── matt-agent-v2.md    # Matt — internship researcher + URL checker
│   ├── jack-agent.html     # JACK — SEO page generator
│   ├── diana-agent.md      # Diana — scholarship intelligence
│   └── kelly-agent-brief.md # KELLY — tuition centre data (Google Places)
│
├── _assets/                # Images, OG images, profile photos
├── FAVICON/                # Favicon set
│
├── SEO/                    # ~129 SEO landing pages (JACK-generated + manual)
├── scholarships/           # Individual scholarship detail pages
│
├── _seo-tools/             # SEO generation scripts
│   ├── jack-run.js         # JACK runner (set JACK_OUT env var)
│   ├── generate-seo.js     # Wave 1 — 29 pages
│   ├── wave2.js            # Wave 2 — 43 pages
│   ├── wave3.js            # Wave 3 — 33 pages
│   ├── wave4.js            # Wave 4
│   └── seo-manifest.json   # Tracks generated pages
│
├── _dev/                   # Dev tools, previews, SOFIA directives
├── _database/              # Legacy schema reference
└── _archive/               # Old docs, PRDs, planning files (not active)
```

---

## Workspace structure (outside repo)

```
SCHOLAR/  (workspace root — not in git)
├── MYSCHOLAR/              # Git repo (above)
├── tuition.html            # MyTuition SPA (staging — not yet deployed)
├── _kelly/                 # KELLY agent scripts + output SQL
│   ├── kelly_agent.py      # Run: python kelly_agent.py --key YOUR_KEY
│   ├── kelly_output/       # Generated JSON + SQL from last run
│   └── ...
├── _workspace/             # Audit docs, design system, SEO keyword research
├── _private/               # Subscriber data — sensitive, not in git
└── _archive/               # Old previews, stale sprint docs, staging pages
```

---

## Agent team

**SOFIA** — Chief Product & Growth Officer. Monthly planning, growth strategy, outreach copy, product decisions.

**Amirah** — Scholarship researcher. Finds, validates, and formats new scholarship entries for Supabase.

**Matt** — Internship researcher + URL health checker. Scheduled to run every 3 days; auto-deactivates broken internship URLs.

**JACK** — SEO page generator. Produces keyword-targeted landing pages from templates. Run via `_seo-tools/jack-run.js`.

**Diana** — Scholarship intelligence. Deeper analysis on specific scholarships or data gaps.

**KELLY** — Tuition centre data agent. Uses Google Places API (28 areas × 8 query variants) to discover and seed `tuition_centres` table.

---

## Critical rules

- `scholarships.id` is **not auto-increment** — always use explicit IDs. Next available: 303
- `url_status` values: `'ok'`, `'suspected'`, `'broken'`. Never mark 403 as broken.
- Internship visibility: only `internship_page`, `info_page`, `direct_apply`, `portal` url_types may be `is_visible = true`. `careers_page` is always hidden.
- UI scholarship count is permanently **"200+"** — do not change this figure in copy.
- Single-file constraint: all UI stays in the HTML files. No separate CSS/JS files, no Node server.
- Design language: `index.html` = light/ice aesthetic. `internships.html` = dark glass. `tuition.html` = warm linen/terracotta.
- Before editing `index.html`: verify `initData()` is present and byte count is consistent (file corruption risk — worst historical bug in this project).

---

## Monthly operations (Month 2+)

Month 1 was the build. From Month 2, the cadence is lean:

**Week 1 — Health.** Read Matt's URL checker report. Hide broken records.
**Week 2 — Data.** Run Amirah (5–10 scholarships) + Matt (3–5 internships).
**Week 3 — Growth.** Run JACK for a new SEO wave if gaps exist. One social post.
**Week 4 — Review.** Check GA4. Identify one UX fix. Plan next month.

Target: 1–2 batched Claude sessions per month. Everything else runs on automation (pg_net cron, Matt's scheduler).

---

## MyTuition launch checklist

1. Get Google Places API key (console.cloud.google.com)
2. Run KELLY: `cd _kelly && python kelly_agent.py --key YOUR_KEY`
3. Review `_kelly/kelly_output/kelly_insert.sql` before pushing to Supabase
4. Add `SUPABASE_ANON_KEY` to `tuition.html`
5. Move `tuition.html` into MYSCHOLAR repo and deploy to GitHub Pages
6. Cross-link from `index.html`

---

## Disclaimer

This directory is for reference only. MyScholar is not affiliated with any scholarship provider. Always verify at the official scholarship website before applying.

---

*Built by ANRA. Free for all Malaysian students.*
