/**
 * JACK SEO Generator v2 -- MyScholar.my
 * Run: node jack-run.js
 * Output: ./seo/ folder with all landing page HTMLs
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

console.log('  Total: ' + KEYWORDS.length + ' keywords');
console.log('');

// ── HTML BUILDER ─────────────────────────────────────────────────
function buildHTML(entry) {
  const isInternship = entry.type === 'internship';
  const mainColor = isInternship ? '#ffb347' : '#e8551e';
  const canonicalUrl = 'https://myscholar.my/' + entry.slug;
  const kw = entry.keywords;
  const m = entry.meta;
  const l = entry.landing;

  const kwAll = [kw.primary, kw.primary_bm].concat(kw.longtail_en).concat(kw.longtail_bm).join(', ');

  const jsonLd = JSON.stringify({
    "@context":"https://schema.org","@type":"WebPage",
    "name":m.title,"description":m.description,"url":canonicalUrl,
    "inLanguage":["en-MY","ms-MY"],
    "isPartOf":{"@type":"WebSite","name":"MyScholar Malaysia","url":"https://myscholar.my"},
    "breadcrumb":{"@type":"BreadcrumbList","itemListElement":[
      {"@type":"ListItem","position":1,"name":"Home","item":"https://myscholar.my"},
      {"@type":"ListItem","position":2,"name":m.title.replace(' | MyScholar',''),"item":canonicalUrl}
    ]}
  }, null, 2);

  const enPills = kw.longtail_en.map(function(k) {
    return '    <a href="/?q=' + encodeURIComponent(k) + '" class="kw-pill">' + k + '</a>';
  }).join('\n');

  const bmPills = kw.longtail_bm.map(function(k) {
    return '    <a href="/?q=' + encodeURIComponent(k) + '" class="kw-pill bm">' + k + '</a>';
  }).join('\n');

  const typeLabel = isInternship ? 'Internships' : 'Scholarships';
  const eyebrow = isInternship ? 'Internships Malaysia' : 'Biasiswa Malaysia';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${m.title}</title>
<meta name="description" content="${m.description}">
<meta name="keywords" content="${kwAll}">
<link rel="canonical" href="${canonicalUrl}">
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
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZETBRDDMTV"></script>
<script>
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","G-ZETBRDDMTV");gtag("event","landing_page_view",{page_keyword:"${kw.primary}",page_slug:"${entry.slug}",page_type:"${entry.type}"});
</script>
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
  <a href="/" style="font-size:12px;color:rgba(255,255,255,.5);text-decoration:none">&larr; All ${typeLabel}</a>
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
  <a href="/?q=${encodeURIComponent(kw.primary)}" class="cta-btn" id="cta-en">${l.cta_en}</a>
  <a href="/?q=${encodeURIComponent(kw.primary_bm)}" class="cta-btn" id="cta-bm" style="display:none">${l.cta_bm}</a>
  <a href="/" class="back">&larr; Back to full directory</a>
</div>
<div class="kw-section">
  <h2>Related Searches</h2>
  <div class="kw-pills">
${enPills}
${bmPills}
  </div>
</div>
<footer>
  <p>&copy; 2026 <a href="https://myscholar.my">MyScholar.my</a> &mdash; Malaysia's free scholarship directory. No login. No paywall. Just scholarships.</p>
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
console.log('  JACK SEO Generator v2 -- MyScholar.my');
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
    canonical: 'https://myscholar.my/' + entry.slug
  });
});

// Sitemap
let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
sitemap += '  <url><loc>https://myscholar.my</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>\n';
manifest.forEach(function(m) {
  sitemap += '  <url><loc>' + m.canonical + '</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>\n';
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
console.log('======================================================');
console.log('  DONE -- ' + count + ' pages generated');
console.log('  Output: ./seo/');
console.log('======================================================');
console.log('');
console.log('  CMD: copy seo/ to repo, then git push');
console.log('');
