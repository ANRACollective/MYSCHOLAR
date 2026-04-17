# TikTok Automation Plan — MyScholar
**Owner:** SOFIA  
**Input from:** AMIRAH (content layer) + JACK (discoverability layer)  
**Status:** Planned — activate post-MyTuition launch  
**Created:** 2026-04-16  

---

## Decision Summary

**Three Student Tests:**
| Test | Result |
|---|---|
| Utility | PASS — TikTok surfaces scholarships students didn't know to search for |
| Trust | PASS — Active account signals a maintained, real platform |
| Urgency | STRONG PASS — Deadline-driven content is the core format |

Score: 3/3. Priority: HIGH — post-MyTuition.

---

## Content Strategy (AMIRAH)

### Format: 3-Slide Scholarship Spotlight
- **Slide 1 (Hook):** Scholarship name + organisation + amount. No fluff. "RM18,000. Open to all races. Deadline in 9 days."
- **Slide 2 (Eligibility):** Who qualifies. CGPA, citizenship, field of study. Concise.
- **Slide 3 (CTA):** Deadline date. "Find it at myscholar.my — link in bio."

### Voice
Same as the MyScholar brand: direct, understated, no hype. Not "AMAZING scholarship you can't miss!!" — just the facts, student-facing.

### Selection Criteria (Supabase query)
```sql
SELECT id, name, organisation, amount_display, eligibility, deadline, url
FROM scholarships
WHERE is_active = true
  AND url_status = 'ok'
  AND deadline > NOW()
  AND deadline < NOW() + INTERVAL '60 days'
ORDER BY deadline ASC
LIMIT 9; -- 3 per week × 3 weeks ahead
```

### Posting Cadence
- 3 videos per week: Monday, Wednesday, Friday
- ~12 videos per month
- Evergreen scholarships (JPA, MARA, PTPTN — annual renewals) get a recurring slot each cycle

---

## Discoverability Strategy (JACK)

### TikTok as Search Engine
Gen Z uses TikTok search. Hashtags = keywords. JACK generates captions + hashtag sets using the same keyword clusters from SEO waves.

### Caption Template (JACK generates per video)
```
[Scholarship name] by [Organisation] — RM[amount] for [eligibility summary].

Deadline: [date]. Don't miss it.

Find 200+ scholarships at myscholar.my 🔗 link in bio

#biasiswamalaysia #scholarshipmalaysia #biasiswa[OrgName] #pelajarmalaysia #biasiswaJPA #universitymalaysia #studentmalaysia #myscholar
```

### UTM Structure (bio link)
```
https://myscholar.my?utm_source=tiktok&utm_medium=social&utm_campaign=spotlight
```

### Traffic Funnel
TikTok video → bio link → SEO landing page (if JACK has generated one) → Supabase scholarship record. Students who discover via TikTok also find MyScholar via Google — double surface, same scholarship.

### Phase 3 Addition
If TikTok referrals grow, JACK generates a dedicated `/tiktok/` landing page as a TikTok-in-bio destination with a curated "closing soon" view.

---

## Technical Pipeline

### Stack (all free-tier)
| Component | Tool | Cost |
|---|---|---|
| Data source | Supabase (scholarships table) | Free |
| Card generation | GitHub Actions + Puppeteer (HTML→PNG) | Free |
| Video assembly | FFmpeg | Free |
| Audio | Mixkit royalty-free tracks | Free |
| Posting (Phase 1–2) | Manual / Buffer free plan | Free |
| Posting (Phase 3) | TikTok Content Posting API | Free |
| Tracking | Supabase `social_posts` table + GA4 | Free |

**Total monthly cost: SGD 0**

---

## Phase Plan

### Phase 0 — Now (pre-MyTuition): Document only
- This file is the deliverable.
- **Action during MyTuition launch week:** Apply for TikTok Business account + Developer account. Approval takes 1–2 weeks — run in parallel, doesn't steal focus.

### Phase 1 — Post-MyTuition launch (Month 1): Manual test
- Run the Supabase query above. Pick 3 scholarships manually.
- Use Claude + canvas-design skill to generate the 3-slide PNG cards per video.
- Upload 3 test videos manually to TikTok.
- Evaluate format: do views hold past 5 seconds? Is the CTA clear?
- Refine the slide template before automating.
- **One Claude session. ~2 hours total.**

### Phase 2 — Month 2: Semi-automated cards
**GitHub Action (runs weekly, Monday 8am MYT):**
1. Query Supabase for 3 closing-soon scholarships
2. Render 3-slide PNG cards from HTML template using Puppeteer (headless Chrome)
3. FFmpeg stitches PNGs → 15-second vertical MP4 (1080×1920)
4. Add royalty-free background audio track (Mixkit)
5. JACK generates caption + hashtags for each
6. Video + caption land in `/tiktok-queue/` folder in repo

**ANRA's weekly task:** Open the queue folder, review 3 videos (~5 min), upload to TikTok manually with the pre-generated captions.

### Phase 3 — Month 3+: Full automation
- TikTok Content Posting API posts directly (no manual upload)
- New Supabase table `social_posts` logs every post:
  ```sql
  CREATE TABLE social_posts (
    id SERIAL PRIMARY KEY,
    platform TEXT DEFAULT 'tiktok',
    scholarship_id INT REFERENCES scholarships(id),
    posted_at TIMESTAMPTZ,
    caption TEXT,
    video_url TEXT,
    status TEXT DEFAULT 'live' -- 'live', 'removed', 'error'
  );
  ```
- Matt's URL checker pattern extended to verify TikTok post URLs haven't been removed
- SOFIA reviews TikTok referral traffic in GA4 during monthly ops Week 4

---

## Slide Card Design Spec

- Dimensions: 1080×1920px (TikTok vertical)
- Design language: consistent with MyScholar light/ice aesthetic — clean, minimal
- Font: same as index.html (system sans-serif stack)
- Slide 1 background: light ice gradient with scholarship org colour accent
- Slide 2: white card, clear eligibility list
- Slide 3: deadline date prominent, CTA in brand colour, myscholar.my URL
- Transition: simple fade (FFmpeg xfade filter)
- Duration: 5 seconds per slide = 15 seconds total (optimal for TikTok retention)

---

## Monthly Ops Integration

In Week 3 (Growth/SEO), add:
- Review `/tiktok-queue/` — upload this week's 3 videos (Phase 2+)
- Check `social_posts` table for any removed posts
- SOFIA reviews TikTok referral UTM data in GA4

---

## Pre-Launch Checklist (Before Phase 1)

- [ ] TikTok Business account created (handle: @myscholar.my or @myscholarmy)
- [ ] TikTok Developer account applied for (Content Posting API scope: `video.publish`)
- [ ] Bio set: "Free scholarship finder for Malaysian students. 200+ scholarships." + link
- [ ] 3 test slide cards designed (canvas-design skill)
- [ ] Supabase closing-soon query tested and returning valid results
- [ ] Buffer free plan connected (backup posting method)

---

*SOFIA owns this doc. Update when Phase 1 completes or the design template is finalised.*
