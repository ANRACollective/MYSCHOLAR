# KELLY — Data Acquisition Agent Brief
**Version:** 2.0 | **Updated:** April 2026  
**Role:** Primary data pipeline for MyTuition tuition centre database

---

## What KELLY Does

KELLY collects, cleans, and structures tuition centre data for MyTuition. She runs in two modes: **automated** (Google Places API) and **manual curation** (Facebook groups + direct research). Both are needed — Google Places gives you breadth; Facebook gives you trust signals and community-verified centres.

---

## Stage A — Automated: Google Places API

**Script:** `kelly_agent.py` (root of SCHOLAR workspace)

### Commands
```bash
# Test without API key (verify setup is working)
python kelly_agent.py --mock

# Single area test (always start here before full run)
python kelly_agent.py --key YOUR_KEY --area "Cheras"

# Full KL scan (14 areas × 5 query templates = up to 420 API calls)
python kelly_agent.py --key YOUR_KEY

# Resume after crash
python kelly_agent.py --key YOUR_KEY --resume
```

### API Key Setup
1. Go to console.cloud.google.com
2. Create new project → "MyTuition KELLY"
3. Enable: **Places API** (not Places API New — the original)
4. Create API key → restrict to Places API only
5. Estimated cost: $4–6 for full KL seed run (covered by $200/month free credit)

### What It Scans
14 KL/Selangor areas × 5 query templates (English + Malay):
- Areas: KLCC, Cheras, Wangsa Maju, Setapak, Kepong, Bangsar, PJ, Subang, Shah Alam, Puchong, Klang, Ampang, Damansara, Sri Hartamas
- Queries per area: "tuition centre", "math tuition", "SPM tuition centre", "pusat tuisyen", "learning centre mathematics"

### Output Files
- `kelly_output/kelly_output.json` — structured centre data
- `kelly_output/kelly_insert.sql` — ready-to-paste Supabase INSERT statements

### Before Pushing to Supabase
- Spot check 10–15 entries in kelly_output.json
- Verify names are clean (no restaurants or clinics slipping through)
- Run the SQL in Supabase SQL Editor — check for constraint errors
- Do NOT push blindly; always review first

---

## Stage B — Manual Curation: Facebook Groups

Google Places gives you centres that are registered and verified on Google Maps. Facebook groups give you the centres parents *actually recommend* — which are often different. The manual layer is essential for trust and quality.

### Facebook Groups to Monitor

**National parent groups (large, high signal):**
- Ibu Bapa Malaysia
- SPM 2025 / SPM 2026 parent groups (search "ibu bapa SPM 2026")
- Mak Ayah Malaysia
- Parents Malaysia Network

**Tuition-specific groups:**
- Tuition Centre Malaysia
- Cari Tuition KL/Selangor
- SPM Add Maths / Maths Tuition Malaysia
- Physics Chemistry Tuition Malaysia

**Area-specific groups (highest signal for local discovery):**
- Parents Cheras
- Parents Wangsa Maju / Setapak
- Parents Subang Jaya / Shah Alam
- Parents Petaling Jaya
- Parents Puchong
- Ibu Bapa Kepong

### How to Extract Data from Facebook Groups

KELLY cannot scrape Facebook automatically. This is a manual research task.

**Step 1 — Join groups.** Join 5–10 of the above groups from your personal or MyScholar Facebook account.

**Step 2 — Search inside each group.** Use the group search bar with terms like:
- "tuition"
- "recommend tutor"
- "tuisyen"
- "tuition centre bagus" (good tuition centre)
- "syor tutor" (recommend tutor)

**Step 3 — Extract entries.** For each mentioned centre, collect:
- Centre name
- Area / neighbourhood
- Subjects taught
- Level (PT3 / SPM / STPM)
- Any pricing mentioned
- Parent sentiment (recommended / avoid / mixed)

**Step 4 — Use the manual insert template:**

```sql
INSERT INTO tuition_centres (name, address, area, subjects, levels, price_range, source, notes, last_verified)
VALUES (
  'Centre Name Here',
  'Street address if known',
  'Cheras',
  ARRAY['Math', 'Add Math'],
  ARRAY['SPM'],
  'RM80-120/month',
  'facebook',
  'Recommended by 3+ parents in Ibu Bapa Malaysia group. Noted for SPM Add Math results.',
  CURRENT_DATE
);
```

**Step 5 — Flag source clearly.** All Facebook-sourced entries should have `source = 'facebook'` in the DB so you can distinguish them from Google Places entries.

### Quality Bar for Facebook Entries
Only add a centre if it meets at least one of:
- Recommended by 3+ different parents in comments (not just the poster)
- Has a verified Facebook page with recent posts (active business)
- Mentioned specifically for SPM results ("my child got A+ for Add Math after joining...")

Do not add entries that only have a single mention or where there's no way to verify the centre still operates.

---

## Future Expansion (Phase 2+)

Once KL data is stable, expand KELLY to:
- **Penang** (Georgetown, Butterworth, Bukit Mertajam)
- **Johor Bahru** (JB, Skudai, Permas Jaya)
- **Kota Kinabalu** (Sabah)
- **Kuching** (Sarawak)

Update `AREAS` list in kelly_agent.py — no other changes needed.

---

## Data Schema Reference

Table: `tuition_centres` in Supabase project `ywvfvjvxwhcfprfrkgqm`

Key fields: `name`, `address`, `area`, `lat`, `lng`, `rating`, `review_count`, `subjects`, `levels`, `price_range`, `source` ('google_places' | 'facebook' | 'manual'), `notes`, `is_active`, `last_verified`

---

*KELLY is maintained by ANRA. Questions or new area requests: update this brief and kelly_agent.py AREAS list accordingly.*
