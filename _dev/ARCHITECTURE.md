# Architecture — MyScholar Ecosystem
*Last updated: April 16, 2026 · Maintained by SOFIA*

---

## Guiding Principle

No build step. No server. No separate CSS or JS files. If it works locally, it works in production. Deploy = push a file to GitHub. Every layer of complexity is a layer that can break silently.

---

## Stack at a Glance

| Layer | Technology | Why |
|---|---|---|
| Frontend | Single-file HTML SPAs | Zero infra, no build pipeline, works everywhere |
| Database | Supabase (PostgreSQL) | Full relational DB + JS client + free tier + dashboard |
| Hosting | GitHub Pages (ANRACollective/MYSCHOLAR) | Free, CDN-backed, SSL included |
| DNS | Cloudflare (grey cloud, DNS-only) | DNS resolution + free email routing |
| Email | Resend via Supabase Edge Functions | Transactional email without a backend |
| Email routing | Cloudflare Email Routing | hello@myscholar.my → personal inbox |
| Analytics | GA4 (G-ZETBRDDMTV) | Standard event tracking, no cost |
| Map tiles | Leaflet.js + OpenStreetMap | No API key, no cost — for MyTuition |
| URL monitoring (scholarships) | Supabase pg_net cron | Weekly health checks, Monday 8am UTC |
| URL monitoring (internships) | Matt's scheduled task | Every 3 days, auto-deactivates broken |
| SEO generation | Node.js (jack-run.js) | Batch-generate static pages from keyword manifest |
| Deploy integrity | push.bat | Verifies initData() before every push |

---

## Products & Files

### MyScholar — `index.html`
Scholarship SPA. Light/ice aesthetic. Supabase fetch via `scholarships_full` view + `initData()`. All filtering in-memory JavaScript. Bookmarks via localStorage.

**Critical:** If `initData()` is missing or corrupted, the page loads but shows no data. No error. Verify this function exists before every edit session.

### MyIntern — `internships.html`
Internship SPA. Dark glass aesthetic. Supabase fetch from `internships` table. Company logo cards, search, industry/level/stipend filters, apply links. GA4 partially instrumented.

### MyTuition — `tuition.html` (staging, outside repo)
Tuition centre map SPA. Warm linen/terracotta aesthetic. Leaflet.js + OpenStreetMap map. Supabase fetch from `tuition_centres` table via `centres_with_scores` view. Not yet deployed — blocked on KELLY data population and SUPABASE_ANON_KEY insertion.

---

## Repo File Map

```
MYSCHOLAR/
├── index.html              # MyScholar SPA
├── internships.html        # MyIntern SPA
├── 404.html
├── robots.txt
├── sitemap.xml             # Root sitemap (homepage + SEO pages)
├── sitemap-seo.xml
├── CNAME                   # myscholar.my
│
├── _agents/                # Agent spec files
│   ├── sofia-agent.md
│   ├── amirah-agent.md
│   ├── matt-agent-v2.md
│   ├── jack-agent.html
│   ├── diana-agent.md
│   └── kelly-agent-brief.md
│
├── _assets/                # OG images, logos, profile photos
├── FAVICON/                # Favicon set
│
├── SEO/                    # ~129 SEO landing pages (production)
├── scholarships/           # Individual scholarship detail pages
│
├── _seo-tools/             # SEO generation scripts (not deployed)
│   ├── jack-run.js         # JACK runner — set JACK_OUT env var
│   ├── generate-seo.js     # Wave 1 — 29 pages
│   ├── wave2.js            # Wave 2 — 43 pages
│   ├── wave3.js            # Wave 3 — 33 pages
│   ├── wave4.js            # Wave 4
│   └── seo-manifest.json
│
├── _dev/                   # Active planning docs + dev tools
│   ├── CURRENT_STATE.md    # ← this file's home
│   ├── TASKS.md
│   ├── DECISIONS_LOG.md
│   ├── ARCHITECTURE.md
│   ├── FEATURE_INVENTORY.md
│   ├── TECH_DEBT_LOG.md
│   ├── sofia-directives-apr2026.md
│   ├── internships-insert.html
│   └── myscholar-dev.skill
│
├── _database/              # Legacy schema reference
└── _archive/               # Old PRDs, concept docs — not active
```

### Workspace root (outside repo)

```
SCHOLAR/
├── MYSCHOLAR/              # Git repo (above)
├── tuition.html            # MyTuition SPA (staging)
├── _kelly/                 # KELLY scripts + output SQL
├── _workspace/             # Audit docs, design system, keyword research
├── _private/               # Subscriber CSV — sensitive, not in git
└── _archive/               # Old previews, stale sprint docs
```

---

## Database — Supabase `ywvfvjvxwhcfprfrkgqm`

### Tables

| Table | Rows | Notes |
|---|---|---|
| `scholarships` | 265 active + 21 hidden | Manual IDs. Next available: 303 |
| `internships` | 44 visible | Manual IDs. Auto-deactivation by Matt's checker |
| `scholarships_full` | (view) | Joins scholarships with metadata |
| `tuition_centres` | 1 (test record) | Awaiting KELLY run |
| `teachers` | empty | MyTuition supporting table |
| `reviews` | empty | MyTuition supporting table |
| `centres_with_scores` | (view) | MyTuition map query |

### Key schema rules
- `scholarships.id` — NOT auto-increment. Always `SELECT MAX(id)+1` before inserting. Next: 303.
- `internships.id` — same rule.
- `url_status` — `'ok'`, `'suspected'`, `'broken'`. Never mark 403 as broken.
- `internships.is_visible` — always `false` on insert. ANRA flips to `true` after review.
- `internships.is_active` — Matt controls via URL checker automation.
- Never hard-delete any record. Use `is_active = false`.

### URL Monitoring — two systems

**Scholarships (pg_net cron):**
- Every Monday 8am UTC
- `net.http_get()` on each scholarship URL
- 403/401/405 → `'ok'` | Timeout/5xx → `'suspected'` | 404/DNS fail → `'broken'`

**Internships (Matt's scheduled task):**
- Every 3 days at 8am
- Checks all internship URLs via browser automation
- Auto-sets `is_active = false` on confirmed broken records
- Produces a change report for ANRA review

---

## Deployment Flow

### HTML files (index.html, internships.html)
```
Edit file in SCHOLAR workspace
→ Verify initData() is present
→ Run push.bat (commits + pushes to GitHub)
→ GitHub Pages auto-deploys in ~30 seconds
→ myscholar.my serves the new file
```

### SEO pages
```
Update _seo-tools/seo-manifest.json with new page definitions
→ Run: node _seo-tools/jack-run.js
→ Output: new HTML files in SEO/
→ Update sitemap.xml / sitemap-seo.xml
→ Run push.bat
```

### Database changes
```
Use Supabase dashboard SQL editor
→ Write migration SQL
→ Execute against ywvfvjvxwhcfprfrkgqm
→ Verify with SELECT after every change
```

---

## Agent Infrastructure

Agents are Claude sessions with defined scopes and spec files. They use Supabase MCP (`execute_sql`) for DB access and browser/web tools for research.

| Agent | File | Scope |
|---|---|---|
| SOFIA | `_agents/sofia-agent.md` | Strategy, monthly planning, agent orchestration |
| Amirah | `_agents/amirah-agent.md` | Scholarship research, comms, inbox |
| Matt | `_agents/matt-agent-v2.md` | Internship research, URL health checking |
| JACK | `_agents/jack-agent.html` | SEO page generation |
| Diana | `_agents/diana-agent.md` | Scholarship intelligence and deep research |
| KELLY | `_agents/kelly-agent-brief.md` | Tuition centre data via Google Places API |

---

## Scale Thresholds — When to Change the Architecture

| Trigger | Action |
|---|---|
| `index.html` > 400 KB | Extract CSS to separate file |
| Multiple contributors | Add Vite/Parcel + separate CSS modules |
| Company dashboards needed (Phase 6) | Migrate to Next.js or SvelteKit + Supabase Auth |
| GitHub Pages rate-limits | Migrate to Vercel (30-min switch, same repo) |
| Supabase free tier limit hit | Upgrade to paid tier — no migration needed |

**Do not introduce a build step without a matching automated deploy step.** Manual build + manual deploy creates the divergence risk that produced the byte corruption incident.
