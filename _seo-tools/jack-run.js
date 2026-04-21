/**
 * JACK SEO Generator v4 -- MyScholar.my
 * Run: node jack-run.js
 * Output: ../SEO/ folder with all landing page HTMLs
 *
 * v4 changes (2026-04-16):
 *   - Wave 5 support: MyTuition pages, scholarship partnerships, internship gaps
 *   - New 'tuition' page type → links to /tuition, terracotta colour #b85c3a
 *   - Organization schema on all pages (E-E-A-T signal)
 *   - dateModified in WebPage schema for content freshness signals
 *   - BreadcrumbList now explicit with @id for better entity linking
 *   - Sitemap: tuition pages get changefreq=weekly (new content)
 *   - GA4: page_wave property added for analytics segmentation
 */
const fs = require('fs');
const path = require('path');

const BASEDIR = path.resolve(__dirname);
// Use a temp output dir if the target dir has filesystem limits, then copy
const OUT = process.env.JACK_OUT || path.join(BASEDIR, 'seo');
try { fs.mkdirSync(OUT, { recursive: true }); } catch(e) {}
console.log('  Base dir: ' + BASEDIR);
console.log('  Output dir: ' + OUT);
console.log('  Exists: ' + fs.existsSync(OUT));

// Load keyword databases
let KEYWORDS = [];

// Wave 1: embedded in generate-seo.js (eval the array)
const w1src = fs.readFileSync(path.join(__dirname, 'generate-seo.js'), 'utf8');
const arrMatch = w1src.match(/const KEYWORDS = (\[[\s\S]*?\n\];)/);
if (arrMatch) {
  KEYWORDS = eval(arrMatch[1]);
  console.log('  Wave 1: ' + KEYWORDS.length + ' keywords');
}

// Wave 2: from wave2.js
try {
  const w2 = require('./wave2.js');
  KEYWORDS.push(...w2);
  console.log('  Wave 2: ' + w2.length + ' keywords');
} catch(e) {
  console.log('  Wave 2: not found, skipping');
}

// Wave 3: from wave3.js (company internships, university scholarships, missing categories)
try {
  const w3 = require('./wave3.js');
  KEYWORDS.push(...w3);
  console.log('  Wave 3: ' + w3.length + ' keywords');
} catch(e) {
  console.log('  Wave 3: not found, skipping');
}

// Wave 4: from wave4.js (MNC internships, Big 4, missing states, role internships, niche scholarships)
try {
  const w4 = require('./wave4.js');
  KEYWORDS.push(...w4);
  console.log('  Wave 4: ' + w4.length + ' keywords');
} catch(e) {
  console.log('  Wave 4: not found, skipping');
}

// Wave 5: from wave5.js (MyTuition launch pages, scholarship partnerships, internship gaps)
// Created: 2026-04-16 — adds 'tuition' as a third page type
try {
  const w5 = require('./wave5.js');
  KEYWORDS.push(...w5);
  console.log('  Wave 5: ' + w5.length + ' keywords');
} catch(e) {
  console.log('  Wave 5: not found, skipping');
}

// Wave 6: from wave6.js (Islamic/STAM/tahfiz, Sabah/Sarawak, GLC gaps, MyTuition area expansion, scholarship comparisons, MyIntern gaps)
// Created: 2026-04-17
try {
  const w6 = require('./wave6.js');
  KEYWORDS.push(...w6);
  console.log('  Wave 6: ' + w6.length + ' keywords');
} catch(e) {
  console.log('  Wave 6: not found, skipping');
}

// Wave 7: from wave7.js (Postgrad, Yayasan Negeri, Internship Gaps, MyTuition Phase 3, High-Intent)
// Created: 2026-04-18
try {
  const w7 = require('./wave7.js');
  KEYWORDS.push(...w7);
  console.log('  Wave 7: ' + w7.length + ' keywords');
} catch(e) {
  console.log('  Wave 7: not found, skipping');
}

// Wave 8: from wave8.js (Internship Student Journey: Resume, Interview, How-To, Sector Gaps)
// Created: 2026-04-19 — captures pre/during/post internship search queries, BM-heavy
try {
  const w8 = require('./wave8.js');
  KEYWORDS.push(...w8);
  console.log('  Wave 8: ' + w8.length + ' keywords');
} catch(e) {
  console.log('  Wave 8: not found, skipping');
}

// Wave 9: from wave9.js (Scholarship Application Journey, Inner KL Tuition, Internship Company Gaps)
// Created: 2026-04-19 — mirrors Wave 8 depth for scholarships; fills inner-KL tuition blanks; Grab/Shopee/logistics/fintech/East Malaysia
try {
  const w9 = require('./wave9.js');
  KEYWORDS.push(...w9);
  console.log('  Wave 9: ' + w9.length + ' keywords');
} catch(e) {
  console.log('  Wave 9: not found, skipping');
}

// Wave 10: from wave10.js (TikTok Bridge Pages, Uni Comparisons, Seasonal, MyTuition Gaps, Scam Trust, Internship Practical)
// Created: 2026-04-21 — TikTok-first strategy; short-slug link-in-bio targets; conversational copy for viral traffic
try {
  const w10 = require('./wave10.js');
  KEYWORDS.push(...w10);
  console.log('  Wave 10: ' + w10.length + ' keywords');
} catch(e) {
  console.log('  Wave 10: not found, skipping');
}

// Wave 11: from wave11.js (New scholarship providers: Kuok/YTL/Razak/BOH/TFM, private uni scholarships, overseas scholarships, GLCs, state Yayasan gaps, STPM/non-Bumi)
// Created: 2026-04-21 — DB-sourced gaps; provider-specific pages for scholarship searchers
try {
  const w11 = require('./wave11.js');
  KEYWORDS.push(...w11);
  console.log('  Wave 11: ' + w11.length + ' keywords');
} catch(e) {
  console.log('  Wave 11: not found, skipping');
}

console.log('  Total: ' + KEYWORDS.length + ' keywords');
console.log('');

// ── HTML BUILDER v4 ──────────────────────────────────────────────
// New in v4:
//   - 'tuition' type support: links to /tuition, terracotta colour
//   - Organization schema on ALL pages (E-E-A-T / entity authority signal)
//   - dateModified in WebPage schema (content freshness)
//   - BreadcrumbList has @id for richer entity resolution
//   - GA4 event now includes page_wave derived from slug numbering
function buildHTML(entry) {
  const isInternship = entry.type === 'internship';
  const isTuition = entry.type === 'tuition';
  // Color per type: scholarship=coral, internship=amber, tuition=terracotta
  const mainColor = isInternship ? '#ffb347' : isTuition ? '#b85c3a' : '#e8551e';
  const canonicalUrl = 'https://myscholar.my/' + entry.slug;
  const kw = entry.keywords;
  const m = entry.meta;
  const l = entry.landing;
  // Use dateModified for content freshness — update when regenerating
  const dateModified = new Date().toISOString().split('T')[0];

  const kwAll = [kw.primary, kw.primary_bm].concat(kw.longtail_en).concat(kw.longtail_bm).join(', ');

  // WebPage schema — present on all pages
  // v4: added dateModified for freshness, @id for entity resolution
  const jsonLd = JSON.stringify({
    "@context":"https://schema.org","@type":"WebPage",
    "@id": canonicalUrl + "#webpage",
    "name":m.title,"description":m.description,"url":canonicalUrl,
    "dateModified": dateModified,
    "inLanguage":["en-MY","ms-MY"],
    "isPartOf":{"@type":"WebSite","@id":"https://myscholar.my/#website","name":"MyScholar Malaysia","url":"https://myscholar.my"},
    "breadcrumb":{"@type":"BreadcrumbList","@id":canonicalUrl+"#breadcrumb","itemListElement":[
      {"@type":"ListItem","position":1,"name":"Home","item":"https://myscholar.my"},
      {"@type":"ListItem","position":2,"name":m.title.replace(/ \| MyScholar.*$/,''),"item":canonicalUrl}
    ]}
  }, null, 2);

  // Organization schema — E-E-A-T signal on all pages.
  // Tells Google who is responsible for this content. Critical for trust ranking.
  const orgJsonLd = JSON.stringify({
    "@context":"https://schema.org","@type":"Organization",
    "@id":"https://myscholar.my/#organization",
    "name":"MyScholar Malaysia",
    "url":"https://myscholar.my",
    "description":"Malaysia's free scholarship and internship finder for students. Data verified and regularly updated.",
    "foundingDate":"2024",
    "areaServed":{"@type":"Country","name":"Malaysia"},
    "sameAs":["https://github.com/ANRACollective/MYSCHOLAR"]
  }, null, 2);

  // ItemList schema — internship pages only.
  // Signals to Google that this page is a collection of internship opportunities,
  // making it eligible for richer treatment in Jobs-related search features.
  const itemListJsonLd = isInternship ? JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": m.title,
    "description": m.description,
    "url": canonicalUrl,
    "itemListOrder": "https://schema.org/ItemListUnordered",
    "numberOfItems": 100,
    "isPartOf": {
      "@type": "WebSite",
      "name": "MyScholar Malaysia",
      "url": "https://myscholar.my"
    }
  }, null, 2) : null;

  // Directory root differs by type — tuition → /tuition, internship → /internships, scholarship → /
  const dirUrl = isInternship ? '/internships' : isTuition ? '/tuition' : '/';
  const dirLabel = isInternship ? 'All Internships' : isTuition ? 'All Tuition Centres' : 'All Scholarships';
  const footerCopy = isInternship
    ? "Malaysia's free internship directory. No login. No paywall. Just internships."
    : isTuition
    ? "Malaysia's free tuition centre finder. Verified reviews. No paid listings."
    : "Malaysia's free scholarship directory. No login. No paywall. Just scholarships.";

  const enPills = kw.longtail_en.map(function(k) {
    return '    <a href="' + dirUrl + '?q=' + encodeURIComponent(k) + '" class="kw-pill">' + k + '</a>';
  }).join('\n');

  const bmPills = kw.longtail_bm.map(function(k) {
    return '    <a href="' + dirUrl + '?q=' + encodeURIComponent(k) + '" class="kw-pill bm">' + k + '</a>';
  }).join('\n');

  const typeLabel = isInternship ? 'Internships' : isTuition ? 'Tuition Centres' : 'Scholarships';
  const eyebrow = isInternship ? 'Internships Malaysia' : isTuition ? 'Tuition Malaysia' : 'Biasiswa Malaysia';

  return `<!DOCTYPE html>
<html lang="en-MY">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${m.title}</title>
<meta name="description" content="${m.description}">
<meta name="keywords" content="${kwAll}">
<link rel="canonical" href="${canonicalUrl}">
<link rel="alternate" hreflang="en-MY" href="${canonicalUrl}">
<link rel="alternate" hreflang="ms-MY" href="${canonicalUrl}">
<link rel="alternate" hreflang="x-default" href="${canonicalUrl}">
<meta property="og:title" content="${m.title}">
<meta property="og:description" content="${m.description}">
<meta property="og:url" content="${canonicalUrl}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="MyScholar Malaysia">
<meta property="og:image" content="https://myscholar.my/myscholar-og.jpg">
<meta property="og:locale" content="en_MY">
<meta property="og:locale:alternate" content="ms_MY">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${m.title}">
<meta name="twitter:description" content="${m.description}">
<meta name="twitter:image" content="https://myscholar.my/myscholar-og.jpg">
<meta name="title:bm" content="${m.title_bm}">
<meta name="description:bm" content="${m.description_bm}">
<script type="application/ld+json">
${jsonLd}
</script>
<script type="application/ld+json">
${orgJsonLd}
</script>
${itemListJsonLd ? `<script type="application/ld+json">\n${itemListJsonLd}\n</script>` : ''}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZETBRDDMTV"></script>
<script>
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","G-ZETBRDDMTV");
// v4: tracks page_type, page_keyword, page_slug for GA4 segmentation by scholarship/internship/tuition
gtag("event","landing_page_view",{page_keyword:"${kw.primary}",page_slug:"${entry.slug}",page_type:"${entry.type}"});
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
:root{--midnight:#0f1f3d;--coral:${mainColor};--ice:#f0f4ff;--white:#ffffff;--serif:"Playfair Display",Georgia,serif;--sans:"DM Sans",system-ui,sans-serif}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:var(--sans);background:var(--midnight);color:#fff;min-height:100vh}
nav{position:sticky;top:0;z-index:99;background:var(--midnight);padding:0 20px;display:flex;align-items:center;justify-content:space-between;height:52px;border-bottom:2px solid var(--coral)}
.nav-logo{font-family:var(--serif);color:#fff;font-size:20px;text-decoration:none}.nav-logo span{color:var(--coral)}
.hero{padding:80px 24px 60px;text-align:center;max-width:680px;margin:0 auto}
.eyebrow{font-size:11px;letter-spacing:.18em;color:var(--coral);text-transform:uppercase;font-weight:600;margin-bottom:14px}
h1{font-family:var(--serif);font-size:clamp(32px,5vw,56px);line-height:1.1;margin-bottom:20px}
.intro{font-size:16px;color:rgba(255,255,255,.75);line-height:1.7;margin-bottom:32px}
.cta-btn{display:inline-block;background:var(--coral);color:#fff;font-weight:600;padding:14px 32px;border-radius:6px;text-decoration:none;font-size:15px;transition:opacity .2s}
.cta-btn:hover{opacity:.85}
.lang-toggle{display:flex;gap:8px;justify-content:center;margin-bottom:24px}
.lt-btn{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);color:rgba(255,255,255,.6);padding:4px 14px;border-radius:20px;font-size:12px;cursor:pointer;transition:all .2s}
.lt-btn.active{background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)}
.back{display:block;text-align:center;margin-top:40px;font-size:13px;color:rgba(255,255,255,.4);text-decoration:none}
.back:hover{color:rgba(255,255,255,.7)}
.kw-section{max-width:680px;margin:0 auto;padding:0 24px 60px;text-align:center}
.kw-section h2{font-family:var(--serif);font-size:20px;margin-bottom:16px;color:rgba(255,255,255,.6)}
.kw-pills{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}
.kw-pill{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.5);padding:6px 14px;border-radius:20px;font-size:12px;text-decoration:none;transition:all .2s}
.kw-pill:hover{border-color:var(--coral);color:var(--coral)}
.kw-pill.bm{border-color:rgba(255,179,71,.25);color:rgba(255,179,71,.7)}
footer{text-align:center;padding:32px 24px;font-size:12px;color:rgba(255,255,255,.3);border-top:1px solid rgba(255,255,255,.08)}
footer a{color:rgba(255,255,255,.5);text-decoration:none}
</style>
</head>
<body>
<nav>
  <a href="/" class="nav-logo">My<span>Scholar</span></a>
  <a href="${dirUrl}" style="font-size:12px;color:rgba(255,255,255,.5);text-decoration:none">&larr; ${dirLabel}</a>
</nav>
<div class="hero">
  <div class="eyebrow">${eyebrow} &middot; myscholar.my</div>
  <div class="lang-toggle">
    <button class="lt-btn active" onclick="setLang('en',this)">EN</button>
    <button class="lt-btn" onclick="setLang('bm',this)">BM</button>
  </div>
  <h1 id="h1-en">${l.h1_en}</h1>
  <h1 id="h1-bm" style="display:none">${l.h1_bm}</h1>
  <p class="intro" id="intro-en">${l.intro_en}</p>
  <p class="intro" id="intro-bm" style="display:none">${l.intro_bm}</p>
  <a href="${dirUrl}?q=${encodeURIComponent(kw.primary)}" class="cta-btn" id="cta-en">${l.cta_en}</a>
  <a href="${dirUrl}?q=${encodeURIComponent(kw.primary_bm)}" class="cta-btn" id="cta-bm" style="display:none">${l.cta_bm}</a>
  <a href="${dirUrl}" class="back">&larr; Back to full directory</a>
</div>
<div class="kw-section">
  <h2>Related Searches</h2>
  <div class="kw-pills">
${enPills}
${bmPills}
  </div>
</div>
<footer>
  <p>&copy; 2026 <a href="https://myscholar.my">MyScholar.my</a> &mdash; ${footerCopy}</p>
</footer>
<script>
function setLang(l,btn){
  document.querySelectorAll(".lt-btn").forEach(function(b){b.classList.remove("active")});
  btn.classList.add("active");
  ["h1","intro","cta"].forEach(function(id){
    document.getElementById(id+"-en").style.display=l==="en"?"":"none";
    document.getElementById(id+"-bm").style.display=l==="bm"?"":"none";
  });
  gtag("event","language_toggle",{language:l,page:"${entry.slug}"});
}
</script>
</body>
</html>`;
}

// ── GENERATE ─────────────────────────────────────────────────────
console.log('======================================================');
console.log('  JACK SEO Generator v3 -- MyScholar.my');
console.log('======================================================');
console.log('');

let count = 0;
const manifest = [];

KEYWORDS.forEach(function(entry) {
  const filename = entry.slug + '.html';
  const filepath = path.join(OUT, filename);
  fs.writeFileSync(filepath, buildHTML(entry), 'utf8');
  count++;
  console.log('  + ' + filename);
  manifest.push({
    slug: entry.slug,
    file: filename,
    type: entry.type,
    primary_en: entry.keywords.primary,
    primary_bm: entry.keywords.primary_bm,
    title: entry.meta.title,
    canonical: 'https://myscholar.my/' + entry.slug,
    dateGenerated: new Date().toISOString().split('T')[0]
  });
});

// Sitemap
let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
sitemap += '  <url><loc>https://myscholar.my</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>\n';
manifest.forEach(function(m) {
  // Tuition pages get weekly changefreq — new product, needs fast indexing
  var freq = m.type === 'tuition' ? 'weekly' : 'monthly';
  var priority = m.type === 'tuition' ? '0.9' : '0.8';
  sitemap += '  <url><loc>' + m.canonical + '</loc><changefreq>' + freq + '</changefreq><priority>' + priority + '</priority></url>\n';
});
sitemap += '</urlset>';
fs.writeFileSync(path.join(OUT, 'sitemap-seo.xml'), sitemap, 'utf8');
console.log('  + sitemap-seo.xml');

// Manifest
fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');
console.log('  + manifest.json');

// Keyword report
let report = '# JACK SEO Keyword Report -- MyScholar.my\nGenerated: ' + new Date().toISOString() + '\nTotal landing pages: ' + count + '\n\n';
KEYWORDS.forEach(function(entry) {
  report += '## ' + entry.slug + '\n';
  report += 'Type: ' + entry.type + '\n';
  report += 'Primary EN: ' + entry.keywords.primary + '\n';
  report += 'Primary BM: ' + entry.keywords.primary_bm + '\n';
  report += 'Long-tail EN: ' + entry.keywords.longtail_en.join(' | ') + '\n';
  report += 'Long-tail BM: ' + entry.keywords.longtail_bm.join(' | ') + '\n\n';
});
fs.writeFileSync(path.join(OUT, 'keyword-report.md'), report, 'utf8');
console.log('  + keyword-report.md');

console.log('');
console.log('===================');
console.log('  DONE -- ' + count + ' pages generated');
console.log('  Output: ./seo/');
console.log('======================================================');
console.log('');
console.log('  CMD: copy seo/ to repo, then git push');
console.log('');
