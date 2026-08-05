/**
 * wave18-generate.js - JACK Wave 18 page generator
 * Generates ONLY Wave 18 pages into ../seo/ without touching existing pages.
 * Also updates seo/manifest.json, sitemap-seo.xml and seo/sitemap-seo.xml automatically.
 * Run: node _seo-tools/wave18-generate.js  (from MYSCHOLAR root)
 * Or:  node wave18-generate.js             (from _seo-tools/)
 *
 * New in Wave 18: proper 'journey' type handling restored.
 * Journey pages use MyJourney teal (#1F8A8A), link to /journey.html,
 * and the CTA deep-links to /journey.html?career=<career_id>.
 */
const fs = require('fs');
const path = require('path');

const BASEDIR = path.resolve(__dirname);
const OUT = process.env.JACK_OUT || path.join(BASEDIR, '../seo');
try { fs.mkdirSync(OUT, { recursive: true }); } catch(e) {}

const wave18 = require('./wave18.js');

// ── RELATED PAGES HELPER ─────────────────────────────────────────
function getRelatedPages(entry, allKeywords, n) {
  n = n || 4;
  var sameType = allKeywords.filter(function(k) {
    return k.slug !== entry.slug && k.type === entry.type;
  });
  var entryWords = {};
  (entry.keywords.primary + ' ' + entry.keywords.longtail_en.join(' '))
    .toLowerCase().split(/[\s\-]+/).forEach(function(w) {
      if (w.length > 3) entryWords[w] = true;
    });
  var scored = sameType.map(function(k) {
    var kWords = (k.keywords.primary + ' ' + k.keywords.longtail_en.join(' '))
      .toLowerCase().split(/[\s\-]+/);
    var overlap = kWords.filter(function(w) { return w.length > 3 && entryWords[w]; }).length;
    return { entry: k, overlap: overlap };
  });
  scored.sort(function(a, b) { return b.overlap - a.overlap; });
  return scored.slice(0, n).map(function(s) { return s.entry; });
}

// ── HTML BUILDER (v6: journey support restored) ──────────────────
function buildHTML(entry, relatedPages) {
  relatedPages = relatedPages || [];
  const isInternship = entry.type === 'internship';
  const isTuition = entry.type === 'tuition';
  const isJourney = entry.type === 'journey';
  // Journey pages use MyJourney teal; internships amber; tuition terracotta; scholarships coral
  const mainColor = isJourney ? '#1F8A8A' : isInternship ? '#ffb347' : isTuition ? '#b85c3a' : '#e8551e';
  const canonicalUrl = 'https://myscholar.my/seo/' + entry.slug;
  const kw = entry.keywords;
  const m = entry.meta;
  const l = entry.landing;
  const dateModified = new Date().toISOString().split('T')[0];
  const kwAll = [kw.primary, kw.primary_bm].concat(kw.longtail_en).concat(kw.longtail_bm).join(', ');

  const jsonLd = JSON.stringify({
    "@context":"https://schema.org","@type":"WebPage",
    "@id": canonicalUrl + "#webpage",
    "name":m.title,"description":m.description,"url":canonicalUrl,
    "dateModified": dateModified,
    "inLanguage":["en-MY","ms-MY"],
    "isPartOf":{"@type":"WebSite","@id":"https://myscholar.my/#website","name":"MyScholar Malaysia","url":"https://myscholar.my"},
    "breadcrumb":{"@type":"BreadcrumbList","@id":canonicalUrl+"#breadcrumb","itemListElement":[
      {"@type":"ListItem","position":1,"name":"Home","item":"https://myscholar.my"},
      {"@type":"ListItem","position":2,"name":m.title.replace(/ \| MyScholar.*$/,'').replace(/ \| MyJourney.*$/,''),"item":canonicalUrl}
    ]}
  }, null, 2);

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

  const dirUrl = isJourney ? '/journey.html' : isInternship ? '/internships' : isTuition ? '/tuition' : '/';
  const dirLabel = isJourney ? 'All Careers' : isInternship ? 'All Internships' : isTuition ? 'All Tuition Centres' : 'All Scholarships';
  const footerCopy = isJourney
    ? "Malaysia's free career explorer for students. Real salaries. Real pathways."
    : isInternship
    ? "Malaysia's free internship directory. No login. No paywall. Just internships."
    : isTuition
    ? "Malaysia's free tuition centre finder. Verified reviews. No paid listings."
    : "Malaysia's free scholarship directory. No login. No paywall. Just scholarships.";

  // Journey CTAs deep-link straight to the career detail page.
  // Everything else keeps the directory search deep-link.
  const ctaHrefEn = isJourney
    ? (entry.career_id ? '/journey.html?career=' + entry.career_id : '/journey.html')
    : dirUrl + '?q=' + encodeURIComponent(kw.primary);
  const ctaHrefBm = isJourney
    ? (entry.career_id ? '/journey.html?career=' + entry.career_id : '/journey.html')
    : dirUrl + '?q=' + encodeURIComponent(kw.primary_bm);
  // Journey keyword pills go to the career explorer, not a search query
  const pillUrl = function(k) {
    return isJourney ? '/journey.html' : dirUrl + '?q=' + encodeURIComponent(k);
  };

  const enPills = kw.longtail_en.map(function(k) {
    return '    <a href="' + pillUrl(k) + '" class="kw-pill">' + k + '</a>';
  }).join('\n');

  const bmPills = kw.longtail_bm.map(function(k) {
    return '    <a href="' + pillUrl(k) + '" class="kw-pill bm">' + k + '</a>';
  }).join('\n');

  const eyebrow = isJourney ? 'Kerjaya Malaysia' : isInternship ? 'Internships Malaysia' : isTuition ? 'Tuition Malaysia' : 'Biasiswa Malaysia';

  const steps = isJourney ? [
    { title: 'Explore the career path', body: 'Real starting salaries, study routes, and honest pros and cons for each career, written for Malaysian students.' },
    { title: 'Check the study routes', body: 'See which SPM subjects, diplomas, and degrees actually lead there, including TVET routes where they exist.' },
    { title: 'Fund it with a scholarship', body: 'Every career links back to matching scholarships and internships on MyScholar. Free, no login.' }
  ] : isInternship ? [
    { title: 'Browse by field or location', body: 'Filter internships by industry, area, or allowance. Real listings, updated regularly.' },
    { title: 'Prepare your application', body: 'Resume guides, cover letter tips, and interview prep, all free on MyScholar.' },
    { title: 'Apply directly to the company', body: 'We link straight to company portals. No signup, no fees, no middlemen.' }
  ] : isTuition ? [
    { title: 'Find centres near you', body: 'Search by area, subject, or exam level. SPM, IGCSE, A-Level, and more.' },
    { title: 'Compare and read reviews', body: 'Verified reviews from students and parents. No paid rankings.' },
    { title: 'Contact the centre directly', body: 'We give you the phone number and address. No booking commissions.' }
  ] : [
    { title: 'Find scholarships that match you', body: 'Browse by CGPA, field of study, race, income level, or target university.' },
    { title: 'Check the requirements', body: 'Eligibility, bond conditions, amount, and deadlines, all in one place.' },
    { title: 'Apply through the official link', body: "We link directly to the provider's application page. No fees, no agents." }
  ];
  const stepsHtml = steps.map(function(s, i) {
    return '<div class="step"><span class="step-num">' + (i+1) + '</span><strong>' + s.title + '</strong><p>' + s.body + '</p></div>';
  }).join('\n      ');

  const relatedBadge = isJourney ? 'Career' : isInternship ? 'Internship' : isTuition ? 'Tuition' : 'Scholarship';
  const relatedCardsHtml = relatedPages.map(function(r) {
    return '<a href="/seo/' + r.slug + '" class="related-card"><span class="related-badge">' + relatedBadge + '</span><span class="related-title">' + r.keywords.primary + '</span></a>';
  }).join('\n      ');

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
gtag("event","landing_page_view",{page_keyword:"${kw.primary}",page_slug:"${entry.slug}",page_type:"${entry.type}",page_wave:"18"});
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
.steps-section{background:rgba(255,255,255,.03);border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06);padding:52px 24px}
.steps-inner{max-width:680px;margin:0 auto;text-align:center}
.steps-inner h2{font-family:var(--serif);font-size:22px;margin-bottom:36px;color:rgba(255,255,255,.85)}
.steps-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
@media(max-width:600px){.steps-grid{grid-template-columns:1fr}}
.step{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:24px 20px;text-align:left}
.step-num{display:inline-block;background:var(--coral);color:#fff;font-size:11px;font-weight:700;width:22px;height:22px;line-height:22px;text-align:center;border-radius:50%;margin-bottom:12px}
.step p{font-size:14px;color:rgba(255,255,255,.65);line-height:1.6}
.step strong{display:block;font-size:15px;color:#fff;margin-bottom:6px;font-weight:600}
.related-section{max-width:680px;margin:0 auto;padding:52px 24px}
.related-section h2{font-family:var(--serif);font-size:20px;margin-bottom:24px;color:rgba(255,255,255,.6);text-align:center}
.related-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
@media(max-width:480px){.related-grid{grid-template-columns:1fr}}
.related-card{display:block;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);border-radius:8px;padding:16px 18px;text-decoration:none;transition:border-color .2s,background .2s}
.related-card:hover{border-color:var(--coral);background:rgba(255,255,255,.08)}
.related-badge{display:inline-block;font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--coral);margin-bottom:6px}
.related-title{display:block;font-size:14px;color:rgba(255,255,255,.8);line-height:1.4;font-weight:500}
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
  <a href="${ctaHrefEn}" class="cta-btn" id="cta-en">${l.cta_en}</a>
  <a href="${ctaHrefBm}" class="cta-btn" id="cta-bm" style="display:none">${l.cta_bm}</a>
  <a href="${dirUrl}" class="back">&larr; Back to full directory</a>
</div>
<div class="kw-section">
  <h2>Related Searches</h2>
  <div class="kw-pills">
${enPills}
${bmPills}
  </div>
</div>
<div class="steps-section">
  <div class="steps-inner">
    <h2>How it works</h2>
    <div class="steps-grid">
      ${stepsHtml}
    </div>
  </div>
</div>
${relatedCardsHtml ? `<div class="related-section">
  <h2>Also on MyScholar</h2>
  <div class="related-grid">
    ${relatedCardsHtml}
  </div>
</div>` : ''}
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
console.log('  JACK Wave 18 Generator - MyScholar.my');
console.log('  Output: ' + OUT);
console.log('======================================================');

let count = 0;
wave18.forEach(function(entry) {
  const filename = entry.slug + '.html';
  const filepath = path.join(OUT, filename);
  const related = getRelatedPages(entry, wave18, 4);
  fs.writeFileSync(filepath, buildHTML(entry, related), 'utf8');
  count++;
  console.log('  + ' + filename);
});

// ── UPDATE MANIFEST (idempotent) ─────────────────────────────────
const manifestPath = path.join(OUT, 'manifest.json');
let manifest = [];
try { manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8')); } catch(e) {}
const wave18Slugs = new Set(wave18.map(function(e){ return e.slug; }));
manifest = manifest.filter(function(p){ return !wave18Slugs.has(p.slug); });
const today = new Date().toISOString().split('T')[0];
wave18.forEach(function(e) {
  manifest.push({
    slug: e.slug,
    file: e.slug + '.html',
    type: e.type,
    primary_en: e.keywords.primary,
    primary_bm: e.keywords.primary_bm,
    title: e.meta.title,
    canonical: 'https://myscholar.my/seo/' + e.slug,
    dateGenerated: today
  });
});
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
console.log('  manifest.json updated: ' + manifest.length + ' entries');

// ── UPDATE SITEMAPS (idempotent) ─────────────────────────────────
const sitemapPaths = [
  path.join(BASEDIR, '../sitemap-seo.xml'),
  path.join(OUT, 'sitemap-seo.xml')
];
sitemapPaths.forEach(function(smPath) {
  let sm;
  try { sm = fs.readFileSync(smPath, 'utf8'); } catch(e) { console.log('  ! sitemap not found: ' + smPath); return; }
  // strip any existing entries for wave 18 slugs so reruns stay clean
  wave18.forEach(function(e) {
    const re = new RegExp('^.*<loc>https://myscholar\\.my/seo/' + e.slug.replace(/[-]/g, '\\-') + '</loc>.*$\\n?', 'm');
    sm = sm.replace(re, '');
  });
  const newLines = wave18.map(function(e) {
    return '  <url><loc>https://myscholar.my/seo/' + e.slug + '</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>';
  }).join('\n');
  sm = sm.replace('</urlset>', newLines + '\n</urlset>');
  fs.writeFileSync(smPath, sm, 'utf8');
  const locCount = (sm.match(/<loc>/g) || []).length;
  console.log('  ' + path.basename(path.dirname(smPath)) + '/' + path.basename(smPath) + ' updated: ' + locCount + ' URLs');
});

console.log('');
console.log('  Done - ' + count + ' pages written to ' + OUT);
console.log('  Next: git add, commit, push (see JACK terminal block)');
console.log('======================================================');
