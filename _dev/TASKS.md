# Tasks & Operations — MyScholar Ecosystem
*Last updated: April 16, 2026 · Maintained by SOFIA*

Month 1 was the build. Month 2 onwards is lean operations — data freshness, SEO growth, and product quality. One or two batched Claude sessions per month. Everything else runs on automation.

---

## Immediate — before Month 2 begins

- [ ] **MyTuition data** — Get Google Places API key. Run: `cd _kelly && python kelly_agent.py --key YOUR_KEY`. Review `kelly_output/kelly_insert.sql`. Push to Supabase.
- [ ] **21 hidden scholarships** — Review each. Restore if URL is working again; permanently retire with a note if not. IDs to review: query `SELECT id, name, url FROM scholarships WHERE is_active = false ORDER BY id`.
- [ ] **Manual folder cleanup** — Delete from File Explorer: `MYSCHOLAR/CONTEXT/`, `MYSCHOLAR/_test_move/`, `MYSCHOLAR/_docs/` (empty), `MYSCHOLAR/SEO/CNAME`, `SCHOLAR/__pycache__/`.
- [ ] **`intern_apply_click` GA4 event** — Add to internships.html when next doing an edit session on that file.

---

## Monthly cadence (Month 2+)

Run these in order, one session per week or batch across one or two sessions.

### Week 1 — Health check
- Read Matt's URL checker report (runs automatically every 3 days — just check what changed)
- Review `url_status = 'broken'` on scholarships: `SELECT id, name, url FROM scholarships WHERE url_status = 'broken' AND is_active = true`
- Hide newly broken scholarship records; investigate suspected ones
- If `is_active = false` scholarships have been fixed at source: restore them

### Week 2 — Data refresh
- **Amirah**: Find and insert 5–10 new scholarships. Start ID from 303 (update before each batch).
- **Matt**: Find and insert 3–5 new internships. Verify URLs are `internship_page` or `direct_apply` type before inserting.
- ANRA review queue: flip `is_visible = true` for any Matt-added records that pass quality check.

### Week 3 — Growth
- **JACK**: Check `seo-manifest.json` for any keyword gaps. If there are clear opportunities (new scholarship category, rising internship search term), generate a new wave. Update `sitemap.xml` after.
- **SOFIA**: Post 1–2 social updates (LinkedIn or X). Use `"SOFIA, STUDENT MIND"` to identify what students are currently searching for and write copy that matches.

### Week 4 — Review
- Check GA4: top search queries, filter usage, bounce patterns. Note anything surprising.
- Identify one UX fix for next month. Log it here.
- Run `"SOFIA, REVENUE CHECK"` to assess internship partner pipeline readiness.
- Update this TASKS.md with next month's priorities.

---

## Recurring automated tasks (no action needed — just monitor)

| Cadence | Task | Owner |
|---|---|---|
| Every 3 days | Matt's URL checker — checks all internship URLs, auto-deactivates broken | Matt (scheduled) |
| Monday 8am UTC | pg_net cron — checks all scholarship URLs, updates url_status | Supabase |
| Monthly | ANRA: spot-check 10 random scholarship URLs manually | ANRA |
| Quarterly | Full scholarship DB audit vs official portals | ANRA |

---

## Backlog (no ETA — revisit when product has more traction)

- [ ] SPM pathways guide — what qualifications open which scholarships
- [ ] PTPTN calculator — B40/M40/T20 repayment estimates
- [ ] Application timeline calendar view
- [ ] Scholarship comparison mode (side-by-side)
- [ ] "Closing soon" email digest (needs user accounts first)
- [ ] MyTuition launch — deploy `tuition.html` to GitHub Pages, cross-link from index.html
- [ ] Partnership outreach — FSTEP, Talent Corp (when internship data is 100+ visible records)
- [ ] Bahasa Malaysia toggle (when BM translations are ready for all card copy)

---

## ID management rules

**Scholarships:** Next available ID = **303** (as of April 2026). Always verify with `SELECT MAX(id)+1 FROM scholarships` before a new batch.

**Internships:** Always run `SELECT MAX(id)+1 FROM internships` before any insert. Never assume.

**Never reuse IDs. Never auto-increment. Manual IDs only on both tables.**

---

## Done — Month 1 build (complete)

- [x] index.html SPA with full scholarship data (265 active records)
- [x] internships.html SPA with dark glass aesthetic
- [x] tuition.html SPA built (staging) — warm linen aesthetic, Leaflet map
- [x] Supabase schema: scholarships, internships, tuition_centres, teachers, reviews
- [x] SEO layer: ~129 pages across 4 waves + manual
- [x] Agent team: SOFIA, Amirah, Matt, JACK, Diana, KELLY defined
- [x] Matt's URL checker scheduled task (every 3 days)
- [x] pg_net scholarship URL cron (Monday 8am UTC)
- [x] push.bat deploy script with initData() integrity check
- [x] GA4 instrumented (scholarships: 4 events; internships: partial)
- [x] Correction submission form
- [x] Bookmark feature (localStorage)
- [x] Eligibility quiz
- [x] Folder reorganised and documented (April 16, 2026)
- [x] All planning docs updated and moved to _dev/ (April 16, 2026)
