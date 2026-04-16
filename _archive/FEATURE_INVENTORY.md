# FEATURE INVENTORY — MyScholar.my
*Last updated: April 12, 2026*

Tag key: **KEEP** · **IMPROVE** · **REMOVE** · **UNCLEAR**

---

## Core app features

| Feature | Location | Tag | Notes |
|---|---|---|---|
| Scholarship search | index.html | **KEEP** | Core functionality, working |
| Scholarship filters | index.html | **KEEP** | Category, coverage, destination, eligibility, grade, deadline |
| Deadline urgency display | index.html | **KEEP** | 60-day window — high utility for students |
| Scholarship bookmarks | index.html | **KEEP** | localStorage, no login — intentional |
| Correction/feedback form | index.html | **KEEP** | Trust-building feature |
| Eligibility quiz | index.html | **KEEP** | Useful for students unsure where to start |
| Internship search | internships.html | **KEEP** | Core functionality |
| Internship filters | internships.html | **KEEP** | Industry, study level, stipend |
| Company logo display | internships.html | **KEEP** | Adds visual credibility |
| Apply links (external) | internships.html | **IMPROVE** | 19 URLs are unverified/suspected — need audit |
| Internship page header | internships.html | **IMPROVE** | Needs to mirror MyScholar header/nav for brand continuity |
| Dark glass design | internships.html | **KEEP** | Fixed design language — do not replace, only align header |

---

## SEO layer

| Feature | Location | Tag | Notes |
|---|---|---|---|
| Scholarship category pages | SEO/biasiswa-*.html | **KEEP** | 66 pages, driving organic traffic |
| Internship SEO pages | SEO/internship-*.html | **KEEP** | 4 pages |
| How-to guides | SEO/cara-mohon-*.html | **KEEP** | Educational content, good for trust |
| Comparison pages | SEO/ptptn-vs-biasiswa-*.html | **KEEP** | High-intent traffic |
| SEO sitemaps | sitemap.xml + SEO/sitemap-seo.xml | **KEEP** | Both needed |
| SEO test page | SEO/test.html | **REMOVE** | `<h1>ok</h1>` — trivial test file, no value |

---

## AI agents

| Agent | File | Tag | Notes |
|---|---|---|---|
| Amirah (scholarship researcher) | _agents/amirah-agent.md | **KEEP** | Core research workflow |
| Matt (internship researcher) | _agents/matt-agent-v2.md | **KEEP** | Core research workflow |
| Jack (SEO generator) | _agents/jack-agent.html + _seo-tools/ | **KEEP** | Batch SEO page generation |

---

## Dev & tooling

| Feature | Location | Tag | Notes |
|---|---|---|---|
| Internship insert admin UI | _dev/internships-insert.html | **KEEP** | Useful for manual Supabase inserts |
| SEO generator script | _seo-tools/generate-seo.js | **KEEP** | Jack's main tool |
| Jack runner | _seo-tools/jack-run.js | **KEEP** | Needed for running Jack |
| SEO manifest | _seo-tools/seo-manifest.json | **KEEP** | Config for all SEO pages |
| SEO keyword report | _seo-tools/seo-keyword-report.md | **KEEP** | Research reference |
| wave2.js | _seo-tools/wave2.js | **UNCLEAR** | Animation library — verify if still used anywhere |
| Internship mockups | _seo-tools/_mockups/*.html | **REMOVE** | Design exploration done, B1-v2 was chosen, rest are stale |
| Claude skill file | _dev/myscholar-dev.skill | **KEEP** | Project skill |

---

## Assets

| Asset | Location | Tag | Notes |
|---|---|---|---|
| OG image (jpg) | _assets/myscholar-og.jpg | **KEEP** | 42 KB — use this one |
| OG image (png) | _assets/myscholar-og.png | **REMOVE** | 293 KB — oversized duplicate |
| Logo SVG | _assets/myscholar_profile_photo.svg | **KEEP** | |
| Logo SVG duplicate | _assets/myscholar_profile_photo (1).svg | **REMOVE** | Same byte size as original — duplicate |
| Facebook profile photo | _assets/FACEBOOK scholar profile picture.jpg | **UNCLEAR** | Verify if used anywhere before removing |

---

## Repo clutter

| Item | Tag | Notes |
|---|---|---|
| `CONTEXT/` directory | **REMOVE** | Empty |
| `FAVICON/` directory | **REMOVE** | Empty |
| `_test_move/` directory | **REMOVE** | Empty leftover from April 2026 reorganization |

---

## Planned / not yet built

| Feature | Tag | Notes |
|---|---|---|
| Git push automation | **IMPROVE** | Currently no git workflow — top priority to add |
| Internship page MyScholar header | **IMPROVE** | Branded top-bar to match index.html |
| URL re-verification workflow | **IMPROVE** | 19 internship URLs need manual check + update |
