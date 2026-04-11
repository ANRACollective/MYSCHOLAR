# MyScholar Malaysia

> A free scholarship finder for Malaysian students — no login, no paywall, no noise.

🔗 **Live site:** [myscholar.my](https://myscholar.my)

---

## What is MyScholar?

MyScholar is a free, searchable directory of scholarships, financial aid, and study loans available to Malaysian students — from SPM leavers to postgraduates.

Navigating scholarships in Malaysia is fragmented. Deadlines are scattered across dozens of websites, eligibility requirements differ between programmes, and many students miss out simply because they never heard of something they qualified for. MyScholar puts everything in one place and keeps it free.

It's still early days and I'm adding more scholarships regularly, but it's already usable.

---

## Current state

- **200+ scholarships** across federal government, state governments, GLCs, listed corporates, banks, universities, community bodies, and foreign government programmes
- Fully searchable and filterable — no login required
- Mobile-first design, built for students browsing on their phones
- Data stored in Supabase; frontend is a single-file HTML SPA hosted on GitHub Pages

---

## Features

- **Search** by scholarship name, provider, field of study, or grade requirement
- **Quick filter chips** — by category, qualification level, destination (local/overseas), award type, and deadline window
- **Scholarship quiz** — answer a few questions to see matched scholarships
- **Detail modal** for every scholarship — amount, deadlines, grade requirements, bond conditions, eligibility criteria, and tips
- **Suggest a correction** — any visitor can flag outdated info directly from the modal; corrections are emailed to the maintainer via Resend
- No login, no signup, no paywall

---

## Who is this for?

- Students who have just received their **SPM, STPM, A-Level, O-Level, UEC, or IGCSE** results
- Students currently in **foundation, diploma, or undergraduate** programmes
- **Parents** helping their children plan for further education
- **School counsellors and teachers** who want a quick reference for students

---

## Architecture

| Layer | Tool |
|---|---|
| Frontend | Single-file HTML SPA (`index.html`) |
| Hosting | GitHub Pages (`ANRACollective/MYSCHOLAR`) |
| Database | Supabase — table: `scholarships`, view: `scholarships_full` |
| Domain | `myscholar.my` via Exabytes, Cloudflare DNS |
| Email | Resend (transactional), Cloudflare Email Routing |
| Analytics | GA4 (`G-ZETBRDDMTV`) |

The site is intentionally dependency-free on the frontend — no build step, no framework, no npm. The entire UI is one HTML file.

---

## Scholarship coverage

Scholarships are sourced using an 8-actor model to systematically identify gaps:

1. **Federal Government** — JPA, MARA, PTPTN, KPT, BRIM/STR-linked programmes
2. **State Governments** — Yayasan Selangor, Penang Future Foundation, Yayasan Sarawak, and others
3. **GLCs** — PETRONAS, Khazanah, Sime Darby, Telekom Malaysia, TNB, UEM, PNB
4. **Listed Corporates** — Shell, Gamuda, Top Glove, AirAsia, IHH, and others
5. **Banks** — Bank Negara Malaysia, Maybank, CIMB, RHB, Bank Rakyat, BSN
6. **Universities** — bursaries and merit awards from public and private institutions
7. **Community & Religious Bodies** — Chinese community foundations, Yayasan Wakaf, religious bodies
8. **Foreign Governments** — UK Chevening, Australia Awards, Japan MEXT, US Fulbright, and others

---

## Analytics

Four custom GA4 events are instrumented:

- `search_query` — fired when a student submits a search term
- `filter_applied` — fired when a filter chip is toggled
- `correction_submitted` — fired when a correction form is submitted
- `quiz_completed` — fired when the scholarship quiz finishes, with five parameters capturing the student's quiz responses

---

## Data accuracy

All scholarship data is researched from official scholarship portals and audited periodically. Scholarship requirements, amounts, and deadlines change annually — always verify at the official scholarship website before applying.

URL health is checked automatically every Monday via a scheduled `pg_cron` job using `pg_net`. Each scholarship link is classified as:

- `ok` — confirmed live (includes sites that return 400/401/403 as bot protection)
- `suspected` — timeout or server error; likely live but unverifiable
- `broken` — 404 or DNS failure; flagged for manual review

If you spot outdated information or a missing scholarship, use the **Suggest a Correction** button inside any scholarship card.

---

## Contributing

The scholarship database is maintained directly in Supabase. If you're a developer and want to contribute, open an issue first to discuss the change.

If you're a student or counsellor who knows of a scholarship that should be listed, the easiest path is the **Suggest a Correction** form on the live site — no GitHub account needed.

---

## Roadmap

The product follows a three-phase arc:

**Phase 1 — Directory** *(current)*
- [x] 200+ scholarships with full details
- [x] Search, filter, and quiz
- [x] Suggest a correction workflow
- [x] GA4 analytics instrumentation
- [x] Automated URL health checks

**Phase 2 — Engagement**
- [ ] Email deadline alerts — students subscribe to get reminders before closing dates
- [ ] Personalised scholarship matching based on quiz results
- [ ] Bahasa Malaysia language toggle

**Phase 3 — Ecosystem**
- [ ] User accounts with synced bookmarks
- [ ] Application tracker
- [ ] Counsellor dashboard for school use

---

## License

MIT License — free to use, share, and modify. If you build on this, please keep it free for students.

---

## Disclaimer

This directory is for reference purposes only. MyScholar is not affiliated with any scholarship provider. Always refer to the official scholarship website for the most accurate and up-to-date information. Scholarship availability, eligibility criteria, and award amounts are subject to change without notice.

---

*Built for Malaysian students.*
