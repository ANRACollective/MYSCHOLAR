# Tasks & Sprint Board — MyScholar.my
*Last updated: April 2026*

Use this file to track what's in progress, what's next, and what's done. Update it at the start of each work session.

---

## 🔴 In Progress

### Internship directory — data population
- Matt running Find runs across all 4 tiers
- Target: 50+ visible records (is_visible = true)
- Next available internship ID: query `SELECT MAX(id)+1 FROM internships` before inserting

### Bahasa Malaysia language toggle
- index.html feature in progress
- Needs: BM translations for UI labels, filter names, card copy
- Do not ship until all visible scholarship cards have a Malay version of tips

---

## 🟡 Next Up (ordered by priority)

### 1. Complete internship data to 50+ visible records
- Matt: run full Find sweep + Refresh pass
- ANRA: review queue (flip is_visible = true for clean records)

### 2. Internship SEO — expand to 10+ pages
- Jack: update seo-manifest.json with new internship keyword targets
- Targets: internship-kewangan, internship-bank, internship-petronas, internship-glc, internship-sabah-sarawak
- Re-run generate-seo.js, push new pages, update sitemap-seo.xml

### 3. State-level scholarships
- Add: Yayasan Selangor, Penang Future Foundation, Yayasan Sarawak, Yayasan Johor
- Amirah: source official URLs from each foundation's site before inserting
- IDs start at 301

### 4. University bursaries
- UM, UPM, Taylor's, Sunway, HELP
- Needs research run — Matt or Amirah to pull official programme pages
- Separate from corporate scholarships in category tagging

### 5. Quiz feature — 3-question scholarship matching
- Q1: Entry level (SPM / STPM / A-Level / Diploma / Degree)
- Q2: Citizenship / ethnicity filter (All / Bumiputera / Non-Bumiputera)
- Q3: Destination preference (Local / Overseas / Either)
- Output: filtered scholarship list, no new DB columns needed
- GA4 event: quiz_completed (already instrumented)

### 6. Private foundation scholarships
- Jeffrey Cheah Foundation, Kuok Foundation, Top Glove Foundation
- IDs continue from wherever state scholarships end

---

## 🟢 Done (Recent)

- [x] internships.html SPA launched with dark glass aesthetic
- [x] Matt agent v2 spec written and operational
- [x] Amirah agent spec v1 written
- [x] SEO layer: 66 biasiswa pages + 4 internship pages live
- [x] Jack agent + generate-seo.js + seo-manifest.json
- [x] sitemap.xml + sitemap-seo.xml submitted
- [x] URL health monitoring cron (pg_net, Monday 8am UTC)
- [x] Correction submission form on scholarship cards
- [x] Bookmark feature (localStorage)
- [x] GA4 instrumented (4 scholarship events + 3 internship events)
- [x] Project folder reorganised (April 2026)
- [x] PRD, Roadmap, Architecture, MVP Scope docs written

---

## 🔵 Backlog (No ETA)

- [ ] SPM → pathways guide (what qualifications open which scholarships)
- [ ] Application timeline calendar view
- [ ] Scholarship comparison mode (side-by-side 2 scholarships)
- [ ] "Closing soon" email digest (needs accounts first)
- [ ] PTPTN calculator (B40/M40/T20 repayment estimates)
- [ ] Partnership outreach: FSTEP, Talent Corp, JPA comms team

---

## 🔧 Recurring Operations

| Cadence | Task | Owner |
|---------|------|-------|
| Weekly | Amirah: review hello@myscholar.my inbox | Amirah |
| Weekly | Matt: Refresh run on all active internship records | Matt |
| Weekly | Amirah: ops summary report | Amirah |
| Monthly | ANRA: review correction queue | ANRA |
| Monthly | ANRA: spot-check 10 random scholarship URLs manually | ANRA |
| Quarterly | Full scholarship database audit vs official portals | ANRA |
| Quarterly | Jack: SEO keyword refresh — new manifest entries | Jack |

---

## Notes on ID Management

**Scholarships:** Next available ID = 301 (as of April 2026)
**Internships:** Always run `SELECT MAX(id)+1 FROM internships` before any insert
**Never reuse IDs.** Never auto-increment. Manual IDs only on both tables.
