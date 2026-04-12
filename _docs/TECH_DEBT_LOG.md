# TECH DEBT LOG — MyScholar.my
*Last updated: April 12, 2026*

Items here are real problems but not urgent enough to block current work. Fix when the right opportunity arises.

---

## High (fix when touching that area)

**index.html byte integrity has no automated check**
The worst incident in this project's history was a silent byte corruption in `index.html` that removed `initData()` without any visible error. There is currently no automated check that runs before/after deploy.
- When to fix: when setting up the git workflow
- Fix: add a pre-push check in `push.bat` that verifies `initData(` is present in the file before pushing

**Internship `url_status` cron doesn't differentiate 403 from broken**
The weekly `pg_net` URL checker runs every Monday 8am UTC. It correctly avoids marking 403s as broken — but this logic lives only in the SQL/cron, not documented in any human-readable place.
- When to fix: next time the cron is edited
- Fix: add a comment block in the cron SQL explaining the 403 handling rule

---

## Medium (fix in a future cleanup session)

**internships.html GA4 events are incomplete**
`index.html` has four fully instrumented GA4 events. `internships.html` is partially instrumented. `intern_apply_click` is the most important missing event — it tracks whether students are actually clicking apply links.
- Fix: add `intern_search`, `intern_filter_applied`, `intern_apply_click` events to internships.html when doing the header rework

**No `last_verified` discipline on scholarships**
All 277 scholarship URLs show `url_status = 'ok'` but many may not have been manually spot-checked in months. The automated cron checks HTTP response codes, not whether the destination page still has an active listing.
- Fix: quarterly manual spot-check of the 20–30 most popular scholarships; add a `verified_by_human` boolean column if needed

**SEO pages are static and drift from the database**
The 74 SEO pages are generated once by Jack and then live statically. If a scholarship is removed from the database, its SEO page may still exist and link to a dead entry.
- Fix: add a step to Jack's workflow that cross-references active scholarship IDs against existing SEO pages

---

## Low (known, accepted for now)

**index.html is 202 KB — a single file**
The file size is large for a single HTML file. No immediate performance issue (GitHub Pages CDN serves it fast), but it will become harder to edit as features grow.
- Fix: consider splitting into a proper build system if/when the project grows beyond solo management

**localStorage bookmarks are device-specific**
Bookmarks don't sync across devices because there are no user accounts. This is an intentional constraint, not a bug — but it does limit utility.
- Fix: revisit if/when user accounts are ever introduced (currently not planned)

**OG image is duplicated in two formats**
`myscholar-og.png` (293 KB) and `myscholar-og.jpg` (42 KB) both exist. Only one is needed.
- Fix: confirm all HTML meta tags reference the `.jpg`, then delete the `.png`

**`_database/Acholarships 1.ods` filename has a typo**
The file is named "Acholarships" instead of "Scholarships".
- Fix: rename during next database export refresh
