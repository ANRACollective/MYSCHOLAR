# MVP Scope — MyScholar.my
*Last updated: April 2026*

---

## What "MVP" Means Here

MVP = the product is genuinely useful to a student today, with no gaps that block them from finding what they need. It is not a minimum demo — it is a minimum complete experience.

---

## v1 — IN (Shipped or actively completing)

### Scholarship Directory
- [x] Supabase-powered, live-fetched scholarship data (277+ records)
- [x] Free-text search (name, provider, field, keywords)
- [x] Filters: category, entry level, destination, type
- [x] Deadline urgency filter (60-day rolling window)
- [x] Scholarship detail modal (full eligibility, amount, deadline, tips, link)
- [x] URL health indicator on each card
- [x] Bookmark via localStorage
- [x] Correction submission form
- [x] Mobile-first responsive design (390px target)
- [x] GA4 analytics (search_query, filter_applied, correction_submitted, quiz_completed)
- [x] Open Graph meta tags
- [x] Automatic URL monitoring (pg_net cron, every Monday 8am UTC)

### Internship Directory
- [x] internships.html SPA (dark glass aesthetic)
- [x] Supabase internships table with full schema
- [x] Matt agent for research and data population
- [x] Search, filter (industry, study level, rolling, allowance)
- [x] Company logo via Clearbit
- [x] Internship detail modal
- [ ] 50+ visible records (in progress — Matt running Find runs)

### SEO Layer
- [x] 66 biasiswa-*.html pages
- [x] 4 internship SEO pages
- [x] sitemap.xml + sitemap-seo.xml
- [x] Jack agent + generate-seo.js + keyword manifest

### Operations
- [x] Amirah agent (inbox triage, corrections, outreach drafts, weekly ops)
- [x] Matt agent v2 (Find, Refresh, Targeted, Check, Status modes)
- [x] hello@myscholar.my email routing via Cloudflare
- [x] Admin insert tool (internships-insert.html)

---

## v1 — OUT (Explicitly deferred)

| Feature | Reason Deferred |
|---------|-----------------|
| User accounts / auth | Adds friction for students. No feature requires it yet. |
| Email alerts / deadline reminders | Needs accounts first. Phase 7. |
| Application tracking | Phase 7 — full platform territory. |
| Company dashboard (self-serve) | Phase 6 — requires auth, Stripe, dashboard UI. |
| Featured / paid listings | Phase 5 — triggered by inbound demand, not shipped speculatively. |
| Bahasa Malaysia full toggle | In progress but not blocking v1. |
| Native mobile app | GitHub Pages SPA is mobile-first. App not justified yet. |
| Scholarship provider portal | Phase 7+ |
| Direct application submission | Complex integrations. Not in scope. |
| University bursaries | Data exists but not yet structured. Post-MVP backlog. |

---

## Later — Backlog (ordered by impact)

1. BM language toggle for index.html
2. State-level scholarships (Yayasan Selangor, Penang Future Foundation, Yayasan Sarawak)
3. University bursaries (UM, UPM, Taylor's, Sunway)
4. SPM → pathways guide (what qualifications open what)
5. Private foundation scholarships (Jeffrey Cheah, Kuok Foundation)
6. Quiz: 3 questions → matched scholarships
7. Application timeline calendar
8. Featured listings for internships (Phase 5)
9. Company self-serve dashboard (Phase 6)
10. Student profiles + expression of interest (Phase 7)

---

## The Line That Doesn't Move

The scholarship directory is free. Forever. No featured placements. No promoted results. No algorithmic downranking of non-paying providers. Any monetisation feature that touches the scholarship side gets rejected.
