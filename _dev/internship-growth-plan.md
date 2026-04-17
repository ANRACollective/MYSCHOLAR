# Internship Growth Plan
**SOFIA + MATT · April 2026 · myscholar.my/internships**

---

## Where We Are

44 live records. That is a working product but not a destination. Students can browse, but the range is too narrow to feel like a real tool. At 44, a student who doesn't fit the industries or study levels we happen to cover will leave having found nothing.

The goal is to reach 150 records by end of Q2 2026, then 300+ by end of 2026. Not by dropping the quality bar — by working smarter on sources and expanding the industry net.

---

## Part 1: What Students Actually Want to Find

This is the ground truth Matt needs to build towards. Not "what is easy to insert" but "what a student is typing into the search bar."

### The core search intent

Malaysian students are not searching for "internship programmes." They are searching for very specific combinations:

| Search pattern | What it means for us |
|---|---|
| `"Maybank internship 2026"` | Brand-first. They want the exact company. |
| `"finance internship KL stipend"` | Category + location + money. Three filters at once. |
| `"internship for diploma students Malaysia"` | Study level filter is critical — diploma students feel excluded on most sites. |
| `"tech internship remote Malaysia"` | Remote/hybrid is now a real category. Not a niche. |
| `"internship March intake 2026"` | Timing-first. They have a fixed window from their uni. |
| `"oil and gas internship Malaysia"` | Sector-specific. Petronas dominates but there are others. |
| `"internship RM1500 Malaysia"` | Stipend-first. Some students are supporting themselves. |
| `"consulting internship Big 4 Malaysia"` | Prestige-tier. PwC/Deloitte/EY/KPMG are searched together. |
| `"startup internship Malaysia"` | Underserved. No single site does this well. |
| `"government internship Malaysia"` | JPA, MDec, MDEC, MAMPU — students don't know where to look. |

### Gaps in the current 44 records

Most likely gaps (to verify against DB):
- Startup / scale-up tier — almost certainly zero or one record
- Creative/media/marketing companies — likely thin
- Healthcare / pharma — likely thin
- Diploma-specifically-eligible programmes — likely underrepresented
- Remote-eligible roles — probably not flagged at all
- Government agencies (non-GLC) — may be missing

### Search filters students expect but we may not support yet

| Filter | Already in schema? | Notes |
|---|---|---|
| Stipend range | Partially — `allowance_text` is text, not numeric | Worth adding `allowance_min` integer column eventually |
| Remote / hybrid | No | Not in schema. Simple boolean to add. |
| Study field | No | `roles_available` covers roles but not "I'm a CS student" |
| Company size | No | Startup vs MNC vs GLC — useful signal |
| Intake timing | Yes — `intake_months` | Good. Make sure it's populated. |
| Duration | Yes — `min/max months` | Good. |
| Bumiputera / open | Yes | Good. |
| Diploma vs Degree | Yes — `study_level` | Good. |

---

## Part 2: The Source System — Where Matt Looks

Matt's current 4-tier system is solid. The problem is not the framework — it's that some high-yield sources are not being used yet.

### The rule that stays permanent

Matt only inserts a record if the company has a public-facing URL — the internship page, an info page, or a direct apply page on their own website. No login-wall-only portals. This is non-negotiable because it is what makes MyIntern trustworthy: every listing can be independently verified by the student.

### Source tiers — expanded

**Tier A: Aggregators that link to company pages (use these first)**

| Source | Why it works | How Matt uses it |
|---|---|---|
| [Prosple Malaysia](https://my.prosple.com/internships-malaysia) | 755 live listings, each has an "Apply on employer site" button. That button URL = the company page Matt needs. | Browse by industry. Copy employer site URL. Verify it loads. Insert if it meets schema rules. |
| [TalentCorp MySIP](https://www.talentcorp.com.my/mysip-incentives/) | Official government-backed internship registry. Every company on MySIP has committed to a structured programme. | Use the MySIP participant list to identify companies, then find their own career page URLs. |
| [Internship Corner](https://internshipcorner.net) | Aggregator that summarises known internship programmes with direct links. | Cross-reference against our DB. Grab any company not yet in our records. |

**Tier B: Company career pages — direct (highest quality, most work)**

Priority companies not yet in DB (need to verify):

*Finance & Banking*
- RHB Bank — careers.rhbgroup.com
- Public Bank — publicbank.com.my/careers
- Hong Leong Bank — hlbank.com.my/careers
- Affin Bank — affin.com.my
- AmBank — ambankgroup.com/careers
- Bank Islam — bankislam.com
- BSN — bsn.com.my
- BIMB Holdings — bimb.com.my

*Technology*
- Grab Malaysia — grab.com/my/careers
- Shopee Malaysia — careers.shopee.com.my
- Lazada Malaysia — lazada.com.my/careers
- Fusionex — fusionex-international.com
- Revenue Monster — revenuemonster.my
- Aerodyne — aerodyne.aero
- ViXS Systems / Nvidia MY office
- Carsome — carsome.my/careers
- GoPayz / GoGet / Kiple — local fintech startups

*Professional Services / Big 4*
- PwC Malaysia — pwc.com/my
- Deloitte Malaysia — deloitte.com/my
- KPMG Malaysia — kpmg.com/my
- Accenture Malaysia — accenture.com/my-en
- McKinsey KL — mckinsey.com/careers
- Boston Consulting Group Malaysia — bcg.com

*Oil, Gas & Energy*
- Sapura Energy — sapuraenergy.com
- Dialog Group — dialoggrp.com
- Serba Dinamik (check if active post-restructuring)
- Shell Malaysia — shell.com.my/careers
- ExxonMobil Malaysia — exxonmobil.com.my

*Healthcare & Pharma*
- IHH Healthcare — ihhhealthcare.com/careers
- KPJ Healthcare — kpj.com.my/careers
- Pharmaniaga — pharmaniaga.com
- Duopharma Biotech — duopharmabiotech.com

*Government / Agencies (non-GLC, often missed)*
- MDEC — mdec.my/careers
- MAMPU — mampu.gov.my
- Bank Negara Malaysia — bnm.gov.my/careers
- Securities Commission — sc.com.my
- Inland Revenue Board (LHDN) — hasil.gov.my
- MARA — mara.gov.my
- EPF / KWSP — kwsp.gov.my

*Media, Creative & Marketing*
- Astro — careers.astro.com.my
- Media Prima — mediaprima.com.my
- IPG Mediabrands — ipgmediabrands.com.my
- Leo Burnett — leoburnett.com (Malaysia office)

*Manufacturing & FMCG*
- Nestle Malaysia — nestle.com.my/careers
- F&N Malaysia — fn.com.my
- Dutch Lady — dutchlady.com.my
- Unilever Malaysia — unilever.com.my/careers
- P&G Malaysia — pgcareers.com

**Tier C: Sector-specific boards (use to fill gaps)**

| Source | Sector | Notes |
|---|---|---|
| MaGIC (Malaysian Global Innovation & Creativity Centre) | Startup | Lists startups that participate in structured programmes |
| Cradle Fund — cradle.com.my | Startup / tech | Portfolio companies sometimes have intern programs |
| 1337 Ventures — 1337.vc | Tech startup | Alumni companies worth checking |
| Glassdoor Malaysia | Cross-sector | Use to find programme names for companies, then go verify on their own site |
| LinkedIn Malaysia Internship | Cross-sector | Use to discover companies, not as the insert URL |

---

## Part 3: Growth Plan — How to Get to 150

### Phase 1: Source Sprint (May 2026) — target +50 records

Matt runs a full Tier A sweep using Prosple as the primary source.

Workflow:
1. Browse Prosple by industry (Finance → Tech → Consulting → Energy → Healthcare)
2. For each listing: click "Apply on employer site" → confirm it's a live, public company page
3. Check against existing DB (dedup by company + programme_name)
4. If not in DB: insert with `is_visible=false`, `url_status='ok'`, `last_verified=today`
5. Report back with new inserts + any gaps

Expected yield: 40–60 new records from Prosple alone.

### Phase 2: Targeted Company Run (June 2026) — target +40 records

Matt runs Tier B (company career pages directly) using the priority list above. Start with the categories most underrepresented after Phase 1.

Workflow is the same but source is the company career page not an aggregator.

Expected yield: 30–45 new records.

### Phase 3: Startup Tier (July 2026) — target +20–30 records

The most differentiated thing MyIntern can do that no aggregator does well: curate startup internships with verified company URLs.

Matt scours MaGIC portfolio, Cradle portfolio, and locally-known tech startups that have any kind of structured intern programme.

This is harder work but high payoff. Students searching "startup internship Malaysia" have almost nowhere else to go.

Expected yield: 15–25 new records.

---

## Part 4: Schema Improvements to Support Growth

These are small additions that would make the data more useful as we scale.

**Add `is_remote` boolean** — Students explicitly filter for this. Easy to add. Start flagging on new inserts.

**Add `allowance_min` integer** — Numeric version of `allowance_text` for range filtering. Even approximate is useful (500, 1000, 1500, 2000).

**Populate `perks` more consistently** — Mentorship, return offer, housing allowance, medical. These are student decision-making signals. Matt should fill this on every insert where data is available.

**Add `university_preference` text** — Some programmes (e.g. Maybank, TNB) prefer students from specific universities or CGPA thresholds. Worth capturing in eligibility + flagging separately.

---

## Part 5: What Stays Non-Negotiable

These rules do not change as we scale:

- Never insert if the only URL is a login-wall portal with no public page
- Never flip `is_visible = true` — ANRA reviews every record before it goes live
- Never invent a programme name without a source
- 403 errors are not broken — it's a live site blocking bots
- Every insert gets a real `tips` value — not a placeholder

The volume goal does not override quality. A student who finds a broken link or wrong information loses trust in the whole site. 44 good records is better than 200 bad ones.

---

## Matt's Updated Run Command

When ANRA says `"Matt, find new internships — Prosple sweep"`:

1. Browse my.prosple.com by each industry category
2. For each listing: verify employer site URL → dedup → insert if valid
3. Log source as `"Prosple Malaysia — [industry page URL]"` in your run report
4. Report: candidates found / already in DB / new inserts / suspected / gaps

---

*SOFIA + MATT · MyScholar Internship Growth Plan · April 2026*
