# Tech Debt Log — MyScholar Ecosystem
*Last updated: April 16, 2026 · Maintained by SOFIA*

Items here are real problems, not urgent enough to block current work. Fix when the right opportunity arises or the area is being edited anyway.

---

## Resolved — no longer debt

| Item | How resolved | Date |
|---|---|---|
| No git workflow — manual upload via GitHub web UI | push.bat script created with integrity check | April 2026 |
| Silent byte corruption risk with no pre-deploy check | push.bat now verifies `initData(` before pushing | April 2026 |
| Planning docs scattered across multiple folders | _dev/ is now the canonical home for active docs | April 16, 2026 |
| Dead staging seo-pages/ folder in workspace root | Moved to _archive/ | April 16, 2026 |
| Old planning docs stale and uncurated | Rewritten and moved to _dev/ by SOFIA | April 16, 2026 |

---

## High — fix when touching that area

**`intern_apply_click` GA4 event missing from internships.html**
`index.html` has four fully instrumented GA4 events. `internships.html` is missing `intern_apply_click` — the most important event for understanding whether students are actually clicking apply links.
- When to fix: next edit session on internships.html
- Fix: add `intern_apply_click`, `intern_search`, `intern_filter_applied` events

**21 hidden scholarships need manual review**
These records are `is_active = false` due to broken URLs flagged in the April 14, 2026 audit. Some may have been restored at source.
- When to fix: Month 2, Week 1 health check
- Fix: manually visit each URL, restore working ones (`is_active = true`), add a note to permanently retired ones

**pg_net 403 handling not documented in the cron SQL**
The rule "never mark 403 as broken" is correct and applied — but the logic lives only in the SQL cron, not in any comment block within it.
- When to fix: next time the cron SQL is edited
- Fix: add a comment block explaining the 403 handling rule

---

## Medium — fix in a future cleanup session

**No `last_verified` discipline on scholarship records**
277 scholarship URLs show `url_status = 'ok'` but many have not been manually checked in months. The pg_net cron checks HTTP response codes, not whether the destination page still has an active listing.
- Fix: quarterly manual spot-check of the 20–30 highest-traffic scholarships. Consider adding a `verified_by_human` boolean column.

**SEO pages drift from the database**
The ~129 SEO pages are generated once by JACK and then live statically. If a scholarship is removed from the database, its SEO page may still exist and link to a dead or stale entry.
- Fix: add a step to JACK's workflow that cross-references active scholarship IDs against existing SEO pages. Flag mismatches.

**myscholar-og.png is oversized and duplicated**
`_assets/myscholar-og.png` (293 KB) and `_assets/myscholar-og.jpg` (42 KB) both exist. All meta tags should reference the .jpg. Then the .png can be deleted.
- Fix: grep for `og.png` in index.html and internships.html. Switch any references to `og.jpg`. Then delete .png manually.

**`myscholar_profile_photo (1).svg` is likely a duplicate**
Same byte count as `myscholar_profile_photo.svg`. Probably a copy. Verify and delete the `(1)` version manually.

**`_database/Acholarships 1.ods` has a typo in the filename**
Should be "Scholarships", not "Acholarships". Not blocking anything but confusing.
- Fix: rename during next database export refresh.

---

## Low — known, accepted for now

**index.html is a large single file (~202 KB)**
No immediate performance issue (GitHub Pages CDN serves it fast). But it will grow harder to edit as features accumulate.
- Fix: consider splitting into a build system if/when the project grows beyond solo management or exceeds 400 KB.

**localStorage bookmarks are device-specific**
Bookmarks don't sync across devices — intentional constraint, not a bug. Noted here as a known limitation that will resurface if user accounts are ever introduced.

**Internship `url_type` of `careers_page` records are hidden but still exist**
Records with `url_type = 'careers_page'` are permanently `is_visible = false` but remain in the database. This is correct behaviour, but over time they accumulate and add noise to the dataset.
- Fix: quarterly, review all `careers_page` records. If a specific internship URL becomes available for any of them, update the `url_type` and `url` and consider making them visible.

**`__pycache__/` in SCHOLAR workspace root**
Python cache from KELLY scripts. Can't be deleted via bash (permission-locked). No functional impact.
- Fix: delete manually from File Explorer.

**Empty directories in repo (`CONTEXT/`, `_test_move/`, `_docs/`)**
Permission-locked via bash. No functional impact. Slightly clutters the repo.
- Fix: delete manually from File Explorer.

**`SEO/CNAME` is a duplicate of root `CNAME`**
Harmless but unnecessary. Permission-locked via bash.
- Fix: delete manually from File Explorer.
