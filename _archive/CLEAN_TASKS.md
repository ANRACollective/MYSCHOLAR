# CLEAN TASKS — MyScholar.my
*Last updated: April 12, 2026*

---

## Priority 1 — Do first (unblocks everything else)

- [ ] **Set up git locally**
  - Install Git for Windows if not already installed: https://git-scm.com/download/win
  - Open CMD in `MYSCHOLAR/` folder: `git init`
  - Connect to GitHub: `git remote add origin https://github.com/ANRACollective/MYSCHOLAR.git`
  - Pull current remote state: `git pull origin main`
  - Run `push.bat` to verify the workflow works

- [ ] **Verify push.bat works end-to-end**
  - Make a small test edit (e.g., add a comment to README.md)
  - Run `push.bat`
  - Confirm change appears on GitHub

---

## Priority 2 — Visible user impact (fix now)

- [ ] **Fix PNB internship URL (id: 104)** — currently `suspected`
  - Current URL: `https://careers.pnb.com.my`
  - Manually verify: does this URL open? Does it have an actual internship listing?
  - Update Supabase: set correct URL + `url_status = 'ok'` OR `is_visible = false` if no listing exists

- [ ] **Fix Deloitte internship URL (id: 26)** — `unverified`, currently visible
  - Current URL: `https://www2.deloitte.com/my/en/pages/careers/articles/students-interns.html`
  - Manually verify and update

- [ ] **Fix Unilever internship URL (id: 59)** — `unverified`, currently visible
  - Current URL: `https://careers.unilever.com/en/malaysia`
  - Manually verify and update

---

## Priority 3 — Brand continuity

- [ ] **Add MyScholar header to internships.html**
  - Matches logo, nav links, and colours from index.html
  - Keep dark glass body design completely intact
  - Header links: Home (myscholar.my) · Internships (current page)
  - Mobile responsive — hamburger or simplified nav on small screens
  - Add `intern_nav_click` GA4 event on nav links

---

## Priority 4 — URL audit (internships)

Verify each of these URLs manually and update Supabase accordingly:

- [ ] id 11 — Public Bank: `https://apply.pbebank.com/eRecruitPortal/ORSF`
- [ ] id 13 — AmBank: `https://www.ambankgroup.com/careers/employee-culture`
- [ ] id 18 — YTL: `https://www.ytl.com/jobs/`
- [ ] id 19 — TM: `https://tmcareer.tm.com.my/`
- [ ] id 20 — EPF: `https://www.kwsp.gov.my/en/corporate/careers`
- [ ] id 24 — IOI Group: `https://www.ioigroup.com/careers`
- [ ] id 30 — Allianz: `https://www.allianz.com.my/personal/allianz-at-a-glance/careers.html`
- [ ] id 31 — Great Eastern: `https://www.greateasternlife.com/my/en/careers.html`
- [ ] id 32 — Prudential: `https://www.prudential.com.my/en/work-with-us-corporate-careers/`
- [ ] id 33 — IHH Healthcare: `https://www.ihhhealthcare.com/my/our-company/join-us/employees`
- [ ] id 51 — DOSM: `https://www.dosm.gov.my/portal-main/student-corner`
- [ ] id 62 — Malaysia Airlines: `https://www.malaysiaairlines.com/my/en/about-us/join-us.html`
- [ ] id 80 — EduCity: `https://educity.com.my/`
- [ ] id 92 — Agrobank: `https://www.agrobank.com.my/home/careers/overview/`
- [ ] id 99 — McKinsey: `https://www.mckinsey.com/my/careers`
- [ ] id 100 — BCG: `https://careers.bcg.com/global/en/locations/malaysia`

For each: update `url` to the most direct application/internship page, set `url_status = 'ok'`, update `last_verified` to today's date.

---

## Priority 5 — Repo cleanup (safe deletes)

- [ ] Delete `SEO/test.html`
- [ ] Delete `CONTEXT/` directory
- [ ] Delete `FAVICON/` directory
- [ ] Delete `_test_move/` directory
- [ ] Delete `_assets/myscholar-og.png` (293 KB oversized version)
- [ ] Verify `_assets/myscholar_profile_photo (1).svg` is a duplicate → delete
- [ ] Delete `_seo-tools/_mockups/` folder (all 5 mockup files — design exploration is done)

---

## Priority 6 — Minor improvements (do when convenient)

- [ ] Verify `wave2.js` in `_seo-tools/` is still used — if not, delete
- [ ] Audit `_assets/FACEBOOK scholar profile picture.jpg` — confirm if used anywhere, remove if not
- [ ] Update OG image reference in index.html from `.png` to `.jpg` where applicable
