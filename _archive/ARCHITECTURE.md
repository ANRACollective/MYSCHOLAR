# Architecture — MyScholar.my
*Last updated: April 2026*

---

## Guiding Principle

No build step. No server. No separate CSS or JS files. If it works locally, it works in production. Deploy = replace a file on GitHub. Every layer of complexity is a layer that can break silently.

---

## Stack at a Glance

| Layer | Technology | Why |
|-------|-----------|-----|
| Frontend | Single-file HTML SPA | Zero infra, no build pipeline, works everywhere |
| Database | Supabase (PostgreSQL) | Full relational DB + JS client + free tier + dashboard |
| Hosting | GitHub Pages | Free, CDN-backed, SSL included, no server config |
| DNS | Cloudflare (grey cloud) | DNS-only mode + free email routing |
| Email | Resend via Supabase Edge Functions | Transactional email without a backend |
| Email routing | Cloudflare Email Routing | hello@myscholar.my → personal inbox, free |
| Analytics | GA4 (G-ZETBRDDMTV) | Standard event tracking, no cost |
| URL monitoring | Supabase pg_net cron | Weekly health checks on scholarship/internship URLs |
| SEO generation | Node.js (jack-run.js + generate-seo.js) | Batch-generate static pages from keyword manifest |

---

## Frontend Architecture

### File Map

```
MYSCHOLAR/
├── index.html           # Scholarship SPA (~200 KB, inline CSS + JS)
├── internships.html     # Internship SPA (~25 KB, inline CSS + JS)
├── 404.html             # GitHub Pages error page
├── sitemap.xml          # Main sitemap
└── SEO/
    ├── biasiswa-*.html  # 66 scholarship SEO pages (static, auto-generated)
    ├── internship-*.html # 4 internship SEO pages
    └── sitemap-seo.xml
```

### How index.html Works

1. Page loads — all CSS and JS are inline, nothing external to fetch
2. `initData()` fires — fetches scholarship records from Supabase via JS client
3. Cards render client-side from the fetched array
4. All filtering and search is in-memory JavaScript — no server round-trips
5. Bookmarks read/write to localStorage

**Critical:** If `initData()` is missing or corrupted, the page loads but shows no data. No error. Verify this function exists before every edit session.

### Design System

- **index.html** — light/ice aesthetic. White backgrounds, soft blue accents, clean type.
- **internships.html** — dark glass aesthetic. Deep backgrounds, glowing accents, card depth.
- These are intentionally distinct. Do not mix the two aesthetics.

---

## Database — Supabase

**Project ID:** `ywvfvjvxwhcfprfrkgqm`

### Tables

```
scholarships          — main scholarship records (277+ rows, next ID: 301)
internships           — internship programme records
scholarships_full     — view joining scholarships with additional metadata
```

### Key Schema Rules

- `scholarships.id` — NOT auto-increment. Always query `MAX(id)+1` before inserting.
- `internships.id` — same rule. Always `MAX(id)+1`.
- `url_status` — accepted values: `'ok'`, `'suspected'`, `'broken'`. Never mark a 403 as broken.
- `internships.is_visible` — always `false` on insert. ANRA flips to `true` after review.
- `internships.is_active` — Matt controls this during Refresh runs.
- Never hard-delete any record. Use `is_active = false`.

### URL Monitoring

Supabase cron via `pg_net` extension:
- Runs every Monday 8:00 AM UTC
- Calls `net.http_get()` on each scholarship URL
- Updates `url_status` field
- 403/401/405 → `'ok'` (live site, bot-blocking)
- Timeout / 5xx → `'suspected'`
- 404 / DNS failure → `'broken'`

### Edge Functions

Used for transactional email via Resend. Triggered on correction submissions and other events requiring notification.

---

## Deployment Flow

### Scholarships / Internships (HTML files)
```
Edit index.html or internships.html locally
→ Verify initData() is present (grep or tail check)
→ Compare byte count to known-good baseline
→ Push to GitHub (ANRACollective/MYSCHOLAR)
→ GitHub Pages auto-deploys in ~30 seconds
→ myscholar.my serves the new file
```

### SEO Pages
```
Update seo-manifest.json with new page definitions
→ Run: node _seo-tools/generate-seo.js
→ Output: new biasiswa-*.html files in SEO/
→ Update sitemap-seo.xml to include new pages
→ Push to GitHub
```

### Database Changes
```
Use Supabase dashboard SQL editor
→ Write migration SQL
→ Execute directly against ywvfvjvxwhcfprfrkgqm
→ Verify with SELECT after every change
→ Update _database/myscholar_schema.sql to reflect new state
```

---

## Agent Infrastructure

Agents are Claude sessions with defined scopes and spec files. They use Supabase MCP (`execute_sql`) for DB access and web tools for research.

| Agent | File | Scope |
|-------|------|-------|
| Amirah | `_agents/amirah-agent.md` | Ops, comms, inbox, corrections, outreach drafts |
| Matt | `_agents/matt-agent-v2.md` | Internship research, URL verification, Supabase inserts |
| Jack | `_agents/jack-agent.html` | SEO page generation from keyword manifest |

---

## What Changes at Each Scale Threshold

| Trigger | Action |
|---------|--------|
| index.html > 400 KB | Extract CSS to separate file |
| Multiple contributors on the codebase | Add Vite/Parcel build step + separate CSS modules |
| Company dashboards needed (Phase 6) | Migrate to Next.js or SvelteKit, add Supabase Auth |
| GitHub Pages rate-limits or becomes too slow | Migrate to Vercel (30-min switch, same repo) |
| Supabase free tier limit hit | Upgrade to paid tier — no migration needed |

**Do not introduce a build step without a matching automated deploy step.** Manual build + manual deploy creates divergence risk (the byte corruption incident was a preview of this failure mode).
