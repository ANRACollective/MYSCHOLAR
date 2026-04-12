# MyIntern SEO Audit — April 2026
**Pages audited:** `myscholar.my/internships` + Jack-generated SEO landing pages (`/internship-malaysia-2026`, `/internship-it-teknologi-2026`, etc.)

---

## Executive Summary

The internships pages are in solid shape structurally — canonical tags, OG, Twitter Card, GA4 tracking, and mobile-first layout are all correct. The three gaps that matter most are:

1. **No JobPosting schema** on any internship page — the single biggest missed opportunity for Google rich results
2. **Stale year signal** in the hero eyebrow ("2025 / 2026" when it's April 2026)
3. **BM keyword gap** on the main `internships.html` meta — the Jack-generated pages have bilingual keyword coverage but the primary SPA doesn't

Fix these three and you'll cover ~80% of the SEO upside.

---

## 1. Keyword Mapping

### High-Intent English Keywords

| Keyword | Intent | Priority |
|---|---|---|
| internship Malaysia 2026 | Informational + navigational | ★★★ Already in meta |
| paid internship Malaysia 2026 | High commercial intent | ★★★ Missing from main page |
| internship programmes Malaysia | Navigational | ★★★ Missing |
| industrial training Malaysia 2026 | Formal/academic intent | ★★ Missing |
| GLC internship Malaysia 2026 | Branded aspiration | ★★ Already partially covered |
| internship for university students Malaysia | High specificity | ★★ Missing |
| internship closing soon Malaysia | Urgency-based | ★ Opportunity |
| graduate trainee Malaysia 2026 | Adjacent intent | ★ Opportunity |

### High-Intent BM Keywords (Bahasa Malaysia)

These are underserved on the main `internships.html` — the Jack SEO pages have them but the SPA doesn't.

| Keyword | Translation | Priority |
|---|---|---|
| latihan industri Malaysia 2026 | Industrial training Malaysia 2026 | ★★★ Critical — highest BM volume |
| latihan industri 2026 | Industrial training 2026 | ★★★ |
| internship bergaji Malaysia | Paid internship Malaysia | ★★★ |
| praktikum Malaysia 2026 | Practical training Malaysia 2026 | ★★ |
| latihan industri pelajar universiti | Industrial training for university students | ★★ |
| latihan praktikal Malaysia | Practical training Malaysia | ★★ |
| cara mohon internship Malaysia | How to apply for internship Malaysia | ★ Content opportunity |
| program latihan industri | Industrial training programme | ★ |

**Action:** Add the bolded BM terms to the `<meta name="keywords">` in `internships.html`. More importantly, include `latihan industri Malaysia 2026` and `internship bergaji Malaysia` in the visible **hero sub-text** — Google weights on-page text higher than the keywords meta tag.

### Company-Specific Keyword Gaps

The meta currently mentions Khazanah, Petronas, Grab, Maybank. Add:

- `internship Telekom Malaysia 2026`
- `internship Bank Negara Malaysia`
- `internship TNB 2026`
- `internship Axiata 2026`
- `internship Gamuda 2026`

These are high-intent branded searches students actually type. The Jack-generated SEO pages may already capture some — verify against `wave2.js`.

---

## 2. Technical SEO Audit

### ✅ Passing

- **Canonical tag** — `<link rel="canonical" href="https://myscholar.my/internships">` — correct, no trailing slash issues
- **OG tags** — complete set: type, url, title, description, image, locale, site_name ✓
- **Twitter Card** — `summary_large_image` with all required fields ✓
- **GA4** — `G-ZETBRDDMTV` loading async, `intern_search`, `intern_filter`, `intern_apply`, `intern_loaded` all instrumented ✓
- **Favicon / PWA manifest** — ico, 96px PNG, apple-touch-icon, site.webmanifest all referenced ✓
- **URL structure** — `/internships` is clean; SEO landing pages use descriptive slugs like `/internship-malaysia-2026` ✓
- **Mobile responsiveness** — bottom-sheet modal at <600px, full-width CTAs at <500px, clamp-based h1 sizing, 20px side padding on all containers ✓

### ⚠️ Issues to Fix

**Issue 1 — `lang="en"` instead of `lang="en-MY"`**

```html
<!-- Current -->
<html lang="en">

<!-- Fix -->
<html lang="en-MY">
```

The OG locale is correctly set to `en_MY` but the HTML lang attribute doesn't match. For Malaysian search localization, this matters. Small fix, worth doing.

---

**Issue 2 — Title tag length**

Current title: `"MyIntern | Internship Malaysia 2026 — Curated Programmes for Students"` = **70 characters**

Google displays ~60–65 chars before truncating. The tail end ("Curated Programmes for Students") gets cut, which wastes the title real estate on mobile SERPs.

```html
<!-- Fix — 58 chars -->
<title>MyIntern — Internship Malaysia 2026 | Free Directory</title>
```

---

**Issue 3 — No `rel="preconnect"` for Google Fonts**

The page loads two font families from Google Fonts but doesn't preconnect. This adds ~100–200ms of DNS + TCP overhead on first load.

```html
<!-- Add before the fonts <link> tag -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

---

**Issue 4 — JS-rendered content (main SPA)**

The internship cards are fetched from Supabase client-side after page load. Google's Chromium crawler does render JS, but it runs a two-wave indexing process: the static HTML is indexed first (within hours), JS-rendered content follows (days to weeks). This means:

- The hero, stats bar, search box, and filter chips are crawled quickly
- The actual company names and programme details are slow to index

**Mitigation already in place:** The Jack-generated static SEO pages (`/internship-malaysia-2026`, etc.) cover the keyword surface area with statically rendered HTML — this is the right architecture. Keep doing this for new keyword clusters.

**Additional mitigation:** Add static JobPosting schema in the `<head>` (see Section 4) — this gives Google structured data to parse without needing to render the JS feed.

---

**Issue 5 — No `hreflang` for bilingual content**

The site serves both English and BM content but doesn't declare language targets. This means Google guesses which version to serve for BM queries.

```html
<!-- Add to <head> of internships.html -->
<link rel="alternate" hreflang="en-MY" href="https://myscholar.my/internships">
<link rel="alternate" hreflang="ms-MY" href="https://myscholar.my/internships">
<link rel="alternate" hreflang="x-default" href="https://myscholar.my/internships">
```

Note: since there's only one page (not separate EN/BM URLs), `x-default` and both hreflang tags pointing to the same URL is acceptable and still sends the right signal.

---

**Issue 6 — No sitemap.xml reference in `<head>`**

Not a blocker, but adding `<link rel="sitemap" type="application/xml" href="/sitemap.xml">` in the head would help. More importantly — confirm that `sitemap.xml` includes `/internships` and all the `/internship-*` SEO pages. If it doesn't, many of those pages won't be discovered.

---

## 3. Content & CTA Optimization

### Hero Section

**H1 — current:**
> "Find Your *Internship.*"

Emotionally clean. But it contains no geographic keyword. Google weights H1 heavily. Consider:

> "Find Your *Internship in Malaysia.*"

This keeps the same rhythm and adds the primary target keyword without feeling forced. Alternatively, lean into what makes it different:

> "Malaysia's *Internship* Directory."

**Eyebrow — current:**
> "MALAYSIA · 2025 / 2026 INTAKE"

It's April 2026. The "2025" part reads as past tense. Update to:

> "MALAYSIA · 2026 / 2027 INTAKE"

**Hero sub-text — current:**
> "A curated directory of internship programmes for Malaysian students — GLCs, banks, startups and more."

Two things missing: (1) the word "paid" as a trust signal for students who care most about this, (2) the "free" signal is buried in the stats bar, not the sub-text.

**Suggested:**
> "A free, curated directory of paid and unpaid internship programmes for Malaysian students — GLCs, banks, startups and more."

This also naturally inserts "paid internship" into crawlable on-page text, which is one of the highest-intent keyword variants.

---

### Filter & Search

**Search placeholder — current:**
> "Search company or programme..."

**Suggested:**
> "Search by company, role, or industry..."

Tells students *what* is searchable. Reduces friction for first-time users.

**Missing filter — "Closing Soon"**

The scholarship page (index.html) has a rolling 60-day deadline window. The internship page doesn't have an equivalent urgency filter. This is both a UX and SEO opportunity (students search "internship closing soon Malaysia" and similar urgency queries). Consider adding a "Closing Soon" preference chip alongside "Paid Only" and "Open Now" — filtering to listings where `deadline_display` is within 60 days.

---

### CTAs

**Card CTA — "Apply →"**
Good. Action-oriented, clean. ✓

**Modal CTA — "Apply to [Company] →"**
Excellent — personalised, reduces hesitation. ✓

**What's missing:**
- No CTA to share or bookmark the listing (bookmarks use localStorage — add a bookmark icon ♡)
- No fallback CTA when all filters return 0 results — currently shows "No internships match your filters" with nothing to click. Add: "Clear all filters" link.
- The footer CTA is a missed opportunity: `"myscholar.my · MyIntern is part of the MyScholar ecosystem"` could become `"myscholar.my · Also explore: Scholarships →"` with actual cross-link

---

## 4. JobPosting Schema Markup

This is the biggest SEO gap. JobPosting schema enables **Google for Jobs** rich results — listings can appear directly in Google Search with salary, deadline, and company info. None of the current pages implement it.

### Approach A — Static schema in `<head>` (immediate, crawlable)

Add 3–5 representative listings as static JSON-LD in the `<head>` of `internships.html`. Google indexes this in the first crawl wave, before JS rendering.

```html
<!-- Add inside <head> of internships.html, after the existing meta tags -->
<script type="application/ld+json">
[
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Khazanah Internship Programme",
    "description": "Khazanah Nasional offers internship placements for Malaysian university students across investment, strategy, and operations functions.",
    "datePosted": "2026-01-01",
    "employmentType": "INTERN",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Khazanah Nasional Berhad",
      "sameAs": "https://www.khazanah.com.my"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kuala Lumpur",
        "addressCountry": "MY"
      }
    },
    "qualifications": "Open to Malaysian university students",
    "industry": "Government / GLC",
    "url": "https://myscholar.my/internships"
  },
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Petronas Student Internship Programme",
    "description": "PETRONAS offers structured internship placements for Malaysian students in engineering, technology, finance, and business functions.",
    "datePosted": "2026-01-01",
    "employmentType": "INTERN",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "PETRONAS",
      "sameAs": "https://www.petronas.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kuala Lumpur",
        "addressCountry": "MY"
      }
    },
    "qualifications": "Malaysian university students, minimum CGPA 3.0",
    "industry": "Energy & Utilities",
    "url": "https://myscholar.my/internships"
  },
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Maybank Internship Programme",
    "description": "Maybank offers internship opportunities for Malaysian students in banking, finance, technology, and operations.",
    "datePosted": "2026-01-01",
    "employmentType": "INTERN",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Maybank",
      "sameAs": "https://www.maybank.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kuala Lumpur",
        "addressCountry": "MY"
      }
    },
    "qualifications": "Malaysian university students",
    "industry": "Finance & Banking",
    "url": "https://myscholar.my/internships"
  }
]
</script>
```

---

### Approach B — Dynamic schema injection (complete coverage, JS-dependent)

Add this function to the `<script>` block in `internships.html`, and call it inside the `.then(d=>{...})` fetch callback after `render()`.

```javascript
/* ── JobPosting Schema Injection ──────────────────────────────────
   Injects JSON-LD JobPosting schema for top 10 listings after data loads.
   Google for Jobs can pick these up from the rendered DOM.
   Called once after Supabase fetch completes.
──────────────────────────────────────────────────────────────── */
function injectJobSchema(data) {
  // Only process up to 10 listings to avoid bloating the DOM
  const listings = data.slice(0, 10);

  listings.forEach(function(item) {
    const schema = {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      // Use programme name as the job title
      "title": item.programme_name,
      // Fall back to a generic description if none stored
      "description": item.description
        || (item.programme_name + " at " + item.company + " — internship programme for Malaysian students. Roles include: " + (item.roles_available || "various functions") + "."),
      // Use the first day of the current year as a safe datePosted
      "datePosted": "2026-01-01",
      "employmentType": "INTERN",
      "hiringOrganization": {
        "@type": "Organization",
        "name": item.company,
        // Link to the company's own website as the sameAs anchor
        "sameAs": item.url || ("https://myscholar.my/internships")
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          // Default to Malaysia; extend if city data is added to DB
          "addressCountry": "MY"
        }
      },
      // If allowance data exists and isn't "unpaid", mark as paid
      "jobBenefits": item.allowance_text && !item.allowance_text.toLowerCase().includes("unpaid")
        ? "Paid internship: " + item.allowance_text
        : "Internship placement for Malaysian students",
      "qualifications": item.eligibility || "Open to Malaysian university students",
      // Pass through the first industry tag if available
      "industry": Array.isArray(item.industry) ? item.industry[0] : (item.industry || ""),
      // Always point application back to the company's own URL or our listing
      "url": item.url || "https://myscholar.my/internships"
    };

    // Inject as a new <script type="application/ld+json"> tag in <head>
    const tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.textContent = JSON.stringify(schema);
    document.head.appendChild(tag);
  });
}
```

**Where to call it** — inside the existing fetch block:

```javascript
// Current code (line ~383):
.then(d => { DATA = d; buildChips(); render(); gtag('event', 'intern_loaded', {count: DATA.length}) })

// Updated:
.then(d => { DATA = d; buildChips(); render(); injectJobSchema(DATA); gtag('event', 'intern_loaded', {count: DATA.length}) })
```

---

### Approach C — Add to Jack-generated SEO pages

The `jack-run.js` currently only outputs `@type: "WebPage"` schema. Update the `buildHTML()` function to also include an `ItemList` of `JobPosting` objects for the featured company names on each SEO page.

Add this to the `jsonLd` section in `jack-run.js`:

```javascript
// In buildHTML(), for isInternship pages, add ItemList schema alongside the WebPage schema
const itemListSchema = isInternship ? JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": m.title,
  "description": m.description,
  "url": canonicalUrl,
  "itemListElement": (entry.featured_companies || []).map(function(co, idx) {
    return {
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "JobPosting",
        "title": co.programme || ("Internship at " + co.name),
        "hiringOrganization": {
          "@type": "Organization",
          "name": co.name,
          "sameAs": co.url || ""
        },
        "jobLocation": {
          "@type": "Place",
          "address": { "@type": "PostalAddress", "addressCountry": "MY" }
        },
        "employmentType": "INTERN",
        "url": canonicalUrl
      }
    };
  })
}, null, 2) : null;
```

This requires adding a `featured_companies` array to each entry in `wave2.js` for internship pages.

---

## 5. GA4 Tracking Gaps

While you're making these changes, add these two missing event calls:

```javascript
// Add to the bookmark/save action (if/when implemented):
gtag('event', 'intern_bookmark', { co: item.company });

// Add to schema injection confirmation (useful for debugging):
gtag('event', 'intern_schema_injected', { count: Math.min(DATA.length, 10) });
```

---

## 6. Quick Wins Checklist

In order of impact-to-effort:

- [ ] **Update eyebrow** — "2025 / 2026" → "2026 / 2027" in internships.html (1 min)
- [ ] **Add Approach A static schema** — paste the 3 JobPosting JSON-LD blocks into `<head>` of internships.html (5 min)
- [ ] **Shorten title tag** — 70 chars → under 60 chars (2 min)
- [ ] **Add `rel="preconnect"`** for Google Fonts (2 min)
- [ ] **Fix `lang="en"` → `lang="en-MY"`** (1 min)
- [ ] **Add BM keywords to meta** in internships.html — `latihan industri Malaysia 2026, internship bergaji Malaysia, praktikum Malaysia` (3 min)
- [ ] **Update hero sub-text** to include "paid" and "free" in the visible copy (2 min)
- [ ] **Add Approach B dynamic schema** function to internships.html JS block (10 min)
- [ ] **Add `hreflang` tags** (3 min)
- [ ] **Verify sitemap.xml** includes `/internships` and all `/internship-*` SEO pages
- [ ] **Update jack-run.js** to output ItemList + JobPosting schema for internship pages (30 min)

---

*Audit by Jack (SEO agent) · MyScholar.my · April 2026*
