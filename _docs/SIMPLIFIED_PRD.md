# SIMPLIFIED PRD — MyScholar.my
*Last updated: April 12, 2026*

---

## The problem

Malaysian students waste time searching across scattered, outdated sources to find scholarships and internships they actually qualify for. Most aggregator sites are cluttered, ad-heavy, or require registration. Application links are often dead.

---

## The user

A Malaysian student — SPM to degree level — looking to:
- Find a scholarship or internship quickly
- Know if they're eligible before clicking through
- Trust that the link they're about to click actually works

80%+ of traffic is mobile. The experience must work on a 390px screen first.

---

## Core value

> One place to find verified Malaysian scholarships and internships, with clear eligibility info and working links. Free, no login, no fluff.

---

## What this app must do (non-negotiable)

1. **Show scholarships** — searchable, filterable, with deadline urgency
2. **Show internships** — searchable, filterable, with company info
3. **Working application links** — the primary exit point for every user. A broken link is a broken product.
4. **Feel like one site** — scholarships and internships should share a consistent header/brand so students don't feel lost navigating between them

---

## What this app should also do (important but secondary)

- Surface deadlines closing soon (rolling 60-day window)
- Let students bookmark opportunities without logging in
- Allow students to report corrections (trust signal)
- Help unsure students find options via the eligibility quiz
- Be discoverable via SEO for high-intent search terms

---

## What this app is NOT trying to do

- Replace official scholarship portals
- Require user accounts or data collection
- Be a full job board
- Support advertising or paid placements

---

## Design constraints (fixed — do not change)
- index.html: light/ice aesthetic
- internships.html: dark glass aesthetic
- Both must share a MyScholar header/nav so they feel connected
- Single-file HTML SPAs only — no separate CSS/JS files, no Node server
- All data lives in Supabase — no static JSON data files

---

## Success looks like
- A student finds a scholarship or internship they're eligible for in under 2 minutes
- They click the apply link and it works
- They come back when the next deadline cycle opens
