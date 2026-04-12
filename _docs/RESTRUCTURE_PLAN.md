# RESTRUCTURE PLAN — MyScholar.my
*Last updated: April 12, 2026*

---

## What needs to change

### 1. Deployment workflow (highest risk, highest payoff)
Currently there is no git repository locally. Every update requires manually uploading files through GitHub's web UI — slow, error-prone, and historically caused a silent byte corruption in `index.html` that broke the entire app.

**Fix:** Set up git locally in `MYSCHOLAR/` and create a one-command push script. When I make edits to your files, you run `push.bat` and it commits + pushes to GitHub automatically.

### 2. Internship URL quality
18 internships are `unverified`, 1 is `suspected`. Three of these are visible to users right now. Students clicking a dead or generic careers page is a direct failure of the app's core promise.

**Fix:** Manually verify each of the 19 URLs, update Supabase records with correct direct links, and mark `url_status = 'ok'` or `is_visible = false` if no good link exists.

### 3. internships.html — brand continuity
The internships page is visually disconnected from the main MyScholar brand. It has no shared header, logo, or nav. A student who clicks "Internships" from the scholarship page feels like they've gone to a different website.

**Fix:** Add a lightweight MyScholar header/nav bar to the top of `internships.html` — matching the logo, colours, and nav structure of `index.html`. Keep the dark glass body design intact. This is a targeted HTML edit, not a redesign.

### 4. Repo cleanup
Several empty directories and stale files exist in the repo. They add noise and confusion.

**Fix:** Delete `SEO/test.html`, `CONTEXT/`, `FAVICON/`, `_test_move/`, `_assets/myscholar-og.png` (oversized), `_assets/myscholar_profile_photo (1).svg` (duplicate), and internship mockup files that were never used.

---

## Suggested cleaner architecture (high-level)

No structural changes needed to the core app. The stack is appropriate for a solo-built project at this scale. What needs cleaning is operational, not architectural.

```
MYSCHOLAR/
├── index.html              ← scholarships SPA (keep as-is, targeted edits only)
├── internships.html        ← internships SPA (add MyScholar header)
├── 404.html
├── sitemap.xml
├── README.md
├── push.bat                ← NEW: one-command git push script
├── SEO/                    ← production SEO pages only (remove test.html)
├── _agents/                ← Amirah, Matt, Jack agent files
├── _assets/                ← keep .jpg OG, .svg logo; remove .png OG + duplicate
├── _database/              ← schema + data exports
├── _dev/                   ← admin tools
├── _docs/                  ← this folder (all planning/cleanup docs live here)
└── _seo-tools/             ← Jack tools only (remove _mockups/ folder)
```

---

## Order of what to fix first

| Priority | Task | Why first |
|---|---|---|
| 1 | Set up git + push.bat | Every other fix needs a safe deployment path |
| 2 | Fix the 3 visible internship URLs (PNB, Deloitte, Unilever) | Users are hitting these right now |
| 3 | Add MyScholar header to internships.html | Brand continuity, quick win |
| 4 | Audit + fix remaining 16 unverified internship URLs | URL quality = product quality |
| 5 | Repo cleanup (delete stale files) | Low risk, reduces confusion |
| 6 | Replace OG image reference with .jpg version in HTML | Performance, minor |

---

## What NOT to change

- The scholarship data model and query logic in index.html
- The dark glass design of internships.html (body only — header gets updated)
- The light/ice design of index.html
- The SEO page structure and sitemap setup
- localStorage bookmarks implementation
- GA4 event names and instrumentation (already working)
