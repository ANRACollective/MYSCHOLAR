/**
 * build-local.js — MyScholar Individual Scholarship Page Generator
 * Reads from scholarships-data.json (no network required)
 * Outputs static HTML to ../scholarships/ (or BUILD_OUT env var)
 *
 * Run: node build-local.js
 *   or: BUILD_OUT=/path/to/output node build-local.js
 */

'use strict';
const fs = require('fs');
const path = require('path');

// ── OUTPUT DIR ────────────────────────────────────────────────────
const OUT = process.env.BUILD_OUT || path.join(__dirname, '..', 'scholarships');
try { fs.mkdirSync(OUT, { recursive: true }); } catch (e) {}
console.log('Output dir: ' + OUT);

// ── LOAD DATA ─────────────────────────────────────────────────────
const DATA_FILE = process.env.DATA_FILE || path.join(__dirname, 'scholarships-data.json');
const scholarships = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
console.log('Loaded: ' + scholarships.length + ' scholarships');

// ── HELPERS ───────────────────────────────────────────────────────
function makeSlug(name) {
  return name.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/, '')
    .substring(0, 80);
}

function esc(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Format deadline text for display
function deadlineDisplay(s) {
  if (s.deadline_text) return esc(s.deadline_text);
  if (s.deadline_date) {
    var d = new Date(s.deadline_date);
    return d.toLocaleDateString('en-MY', { day: 'numeric', month: 'long', year: 'numeric' });
  }
  return 'Open / Rolling';
}

// Build the tags row (Full/Partial, Local/Overseas, No Bond, B40, Bumi Only)
function buildTags(s) {
  var tags = [];
  if (s.coverage === 'Full') tags.push('<span class="tag tag-full">Full Scholarship</span>');
  else if (s.coverage === 'Partial') tags.push('<span class="tag tag-partial">Partial Award</span>');
  else if (s.coverage) tags.push('<span class="tag">' + esc(s.coverage) + '</span>');

  if (s.destination === 'Overseas') tags.push('<span class="tag tag-overseas">Overseas</span>');
  else if (s.destination === 'Local') tags.push('<span class="tag tag-local">Local</span>');
  else if (s.destination === 'Both') tags.push('<span class="tag tag-local">Local</span><span class="tag tag-overseas">Overseas</span>');

  if (s.no_bond) tags.push('<span class="tag tag-nobond">No Bond</span>');
  if (s.b40) tags.push('<span class="tag tag-b40">B40 Priority</span>');
  if (s.bumi_only) tags.push('<span class="tag tag-bumi">Bumi Only</span>');

  return tags.join('\n      ');
}

// Build field chips
function buildChips(arr) {
  if (!arr || arr.length === 0) return '<span class="chip">Any Field</span>';
  return arr.map(function(f) { return '<span class="chip">' + esc(f) + '</span>'; }).join('');
}

// Build entry level / qualification chips
function buildSmallChips(arr) {
  if (!arr || arr.length === 0) return '';
  return arr.map(function(f) { return '<span class="chip chip-sm">' + esc(f) + '</span>'; }).join('');
}

// Related search pills (use category + coverage as related keywords)
function buildRelatedLinks(s) {
  var queries = [];
  if (s.category) queries.push(s.category + ' scholarship Malaysia');
  if (s.destination === 'Overseas') queries.push('overseas scholarship Malaysia');
  if (s.destination === 'Local') queries.push('local scholarship Malaysia');
  if (s.no_bond) queries.push('scholarship no bond Malaysia');
  if (s.b40) queries.push('B40 scholarship Malaysia');
  if (s.coverage === 'Full') queries.push('full scholarship Malaysia');
  if (s.fields && s.fields.length > 0 && s.fields[0] !== 'Any') {
    queries.push(s.fields[0].toLowerCase() + ' scholarship Malaysia');
  }
  // Cap at 6
  queries = queries.slice(0, 6);
  return queries.map(function(q) {
    return '<a href="/?q=' + encodeURIComponent(q) + '" class="related-pill">' + esc(q) + '</a>';
  }).join('\n      ');
}

// ── HTML BUILDER ──────────────────────────────────────────────────
function buildHTML(s, slug) {
  var canonicalUrl = 'https://myscholar.my/scholarships/' + slug;
  var pageTitle = esc(s.name) + ' | MyScholar Malaysia';
  var metaDesc = 'Full details for ' + esc(s.name) + ' by ' + esc(s.provider) + '. ' +
    (s.coverage ? s.coverage + ' scholarship' : 'Scholarship') + ' for Malaysian students' +
    (s.destination && s.destination !== 'Both' ? ' — ' + s.destination.toLowerCase() : '') + '. ' +
    'Check eligibility, amount, deadline and apply.';

  var jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": s.name + ' | MyScholar Malaysia',
    "description": metaDesc,
    "url": canonicalUrl,
    "inLanguage": "en-MY",
    "isPartOf": { "@type": "WebSite", "name": "MyScholar Malaysia", "url": "https://myscholar.my" },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://myscholar.my" },
        { "@type": "ListItem", "position": 2, "name": "Scholarships", "item": "https://myscholar.my" },
        { "@type": "ListItem", "position": 3, "name": s.name, "item": canonicalUrl }
      ]
    }
  }, null, 2);

  // Key facts grid — show whichever facts are present
  var facts = [];
  if (s.amount_description) {
    facts.push('<div class="fact"><div class="fact-label">Amount</div><div class="fact-value">' + esc(s.amount_description) + '</div></div>');
  }
  facts.push('<div class="fact"><div class="fact-label">Deadline</div><div class="fact-value">' + deadlineDisplay(s) + '</div></div>');
  if (s.destination) {
    facts.push('<div class="fact"><div class="fact-label">Study</div><div class="fact-value">' + esc(s.destination) + '</div></div>');
  }
  if (s.bond_description) {
    facts.push('<div class="fact"><div class="fact-label">Bond</div><div class="fact-value">' + esc(s.bond_description) + '</div></div>');
  }

  // Who can apply
  var whoLines = [];
  if (s.open_to_all) whoLines.push('Open to all Malaysians');
  if (s.b40) whoLines.push('B40 priority');
  if (s.bumi_only) whoLines.push('Bumiputera only');

  // Grade
  var gradeText = '';
  if (s.grade_description) gradeText = esc(s.grade_description);
  else if (s.grade_minimum) gradeText = esc(s.grade_minimum) + ' (minimum)';

  var notesHtml = s.notes
    ? '<section class="notes-section"><h2>Notes</h2><p>' + esc(s.notes) + '</p></section>'
    : '';

  return '<!DOCTYPE html>\n' +
'<html lang="en-MY">\n' +
'<head>\n' +
'<meta charset="UTF-8">\n' +
'<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
'<title>' + pageTitle + '</title>\n' +
'<meta name="description" content="' + esc(metaDesc) + '">\n' +
'<link rel="canonical" href="' + canonicalUrl + '">\n' +
'<link rel="alternate" hreflang="en-MY" href="' + canonicalUrl + '">\n' +
'<link rel="alternate" hreflang="x-default" href="' + canonicalUrl + '">\n' +
'<meta property="og:title" content="' + pageTitle + '">\n' +
'<meta property="og:description" content="' + esc(metaDesc) + '">\n' +
'<meta property="og:url" content="' + canonicalUrl + '">\n' +
'<meta property="og:type" content="website">\n' +
'<meta property="og:site_name" content="MyScholar Malaysia">\n' +
'<meta property="og:image" content="https://myscholar.my/myscholar-og.jpg">\n' +
'<meta property="og:locale" content="en_MY">\n' +
'<meta name="twitter:card" content="summary_large_image">\n' +
'<meta name="twitter:title" content="' + pageTitle + '">\n' +
'<meta name="twitter:description" content="' + esc(metaDesc) + '">\n' +
'<meta name="twitter:image" content="https://myscholar.my/myscholar-og.jpg">\n' +
'<script type="application/ld+json">\n' + jsonLd + '\n</script>\n' +
'<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZETBRDDMTV"></script>\n' +
'<script>\n' +
'window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","G-ZETBRDDMTV");\n' +
'gtag("event","scholarship_page_view",{scholarship_id:' + s.id + ',scholarship_name:"' + esc(s.name).replace(/"/g, '\\"') + '",provider:"' + esc(s.provider).replace(/"/g, '\\"') + '",category:"' + esc(s.category) + '"});\n' +
'</script>\n' +
'<link rel="preconnect" href="https://fonts.googleapis.com">\n' +
'<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
'<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">\n' +
'<style>\n' +
':root{--midnight:#0f1f3d;--coral:#e8551e;--ice:#f0f4ff;--white:#fff;--serif:"Playfair Display",Georgia,serif;--sans:"DM Sans",system-ui,sans-serif}\n' +
'*{box-sizing:border-box;margin:0;padding:0}\n' +
'body{font-family:var(--sans);background:var(--ice);color:#1a2a4a;min-height:100vh}\n' +
'nav{position:sticky;top:0;z-index:99;background:var(--midnight);padding:0 20px;display:flex;align-items:center;justify-content:space-between;height:52px;border-bottom:2px solid var(--coral)}\n' +
'.nav-logo{font-family:var(--serif);color:#fff;font-size:20px;text-decoration:none}.nav-logo span{color:var(--coral)}\n' +
'.nav-back{font-size:12px;color:rgba(255,255,255,.55);text-decoration:none}.nav-back:hover{color:#fff}\n' +
'.hero{background:var(--midnight);color:#fff;padding:48px 24px 40px}\n' +
'.hero-inner{max-width:720px;margin:0 auto}\n' +
'.eyebrow{font-size:11px;letter-spacing:.18em;color:var(--coral);text-transform:uppercase;font-weight:600;margin-bottom:10px}\n' +
'.provider{font-size:13px;color:rgba(255,255,255,.55);margin-bottom:10px}\n' +
'h1{font-family:var(--serif);font-size:clamp(26px,4.5vw,44px);line-height:1.15;margin-bottom:18px}\n' +
'.tags{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:0}\n' +
'.tag{padding:5px 12px;border-radius:20px;font-size:12px;font-weight:600;letter-spacing:.03em}\n' +
'.tag-full{background:rgba(232,85,30,.2);color:#ff8a5c;border:1px solid rgba(232,85,30,.35)}\n' +
'.tag-partial{background:rgba(255,200,100,.12);color:#ffcb6b;border:1px solid rgba(255,200,100,.25)}\n' +
'.tag-overseas{background:rgba(100,180,255,.12);color:#7ec8fa;border:1px solid rgba(100,180,255,.25)}\n' +
'.tag-local{background:rgba(100,220,180,.12);color:#6ee7c0;border:1px solid rgba(100,220,180,.25)}\n' +
'.tag-nobond{background:rgba(160,255,160,.12);color:#7cf7a0;border:1px solid rgba(160,255,160,.25)}\n' +
'.tag-b40{background:rgba(255,220,100,.12);color:#ffdf6b;border:1px solid rgba(255,220,100,.25)}\n' +
'.tag-bumi{background:rgba(200,180,255,.12);color:#c4b5fd;border:1px solid rgba(200,180,255,.25)}\n' +
'.content{max-width:720px;margin:0 auto;padding:32px 24px 64px}\n' +
'.facts-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;margin-bottom:32px}\n' +
'.fact{background:#fff;border-radius:10px;padding:16px;box-shadow:0 1px 4px rgba(15,31,61,.08)}\n' +
'.fact-label{font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#8a9ab8;font-weight:600;margin-bottom:4px}\n' +
'.fact-value{font-size:14px;font-weight:600;color:#1a2a4a;line-height:1.4}\n' +
'section{background:#fff;border-radius:12px;padding:24px;margin-bottom:16px;box-shadow:0 1px 4px rgba(15,31,61,.07)}\n' +
'section h2{font-family:var(--serif);font-size:17px;color:#0f1f3d;margin-bottom:14px}\n' +
'section p{font-size:14px;line-height:1.7;color:#3a4a6a}\n' +
'.chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}\n' +
'.chip{background:var(--ice);border:1px solid #ccd6f0;color:#3a5a8a;padding:4px 12px;border-radius:16px;font-size:12px;font-weight:500}\n' +
'.chip-sm{font-size:11px;padding:3px 10px}\n' +
'.apply-wrap{text-align:center;margin:32px 0}\n' +
'.apply-btn{display:inline-block;background:var(--coral);color:#fff;font-weight:700;padding:16px 40px;border-radius:8px;text-decoration:none;font-size:15px;transition:opacity .2s;letter-spacing:.02em}\n' +
'.apply-btn:hover{opacity:.88}\n' +
'.related-section{margin-top:32px}\n' +
'.related-section h2{font-size:14px;font-weight:600;color:#8a9ab8;letter-spacing:.08em;text-transform:uppercase;margin-bottom:12px}\n' +
'.related-pills{display:flex;flex-wrap:wrap;gap:8px}\n' +
'.related-pill{background:#fff;border:1px solid #ccd6f0;color:#3a5a8a;padding:6px 14px;border-radius:20px;font-size:12px;text-decoration:none;transition:all .2s}\n' +
'.related-pill:hover{border-color:var(--coral);color:var(--coral)}\n' +
'.notes-section{background:#fffbf5;border-left:3px solid var(--coral)}\n' +
'footer{text-align:center;padding:24px;font-size:11px;color:#8a9ab8;border-top:1px solid #dde4f0}\n' +
'footer a{color:#3a5a8a;text-decoration:none}\n' +
'@media(max-width:480px){.facts-grid{grid-template-columns:1fr 1fr}.hero{padding:32px 16px 28px}.content{padding:20px 16px 48px}}\n' +
'</style>\n' +
'</head>\n' +
'<body>\n' +
'<nav>\n' +
'  <a href="/" class="nav-logo">My<span>Scholar</span></a>\n' +
'  <a href="/" class="nav-back">&larr; All Scholarships</a>\n' +
'</nav>\n' +
'<div class="hero">\n' +
'  <div class="hero-inner">\n' +
'    <div class="eyebrow">' + esc(s.category) + ' &middot; MyScholar.my</div>\n' +
'    <div class="provider">' + esc(s.provider) + '</div>\n' +
'    <h1>' + esc(s.name) + '</h1>\n' +
'    <div class="tags">\n' +
'      ' + buildTags(s) + '\n' +
'    </div>\n' +
'  </div>\n' +
'</div>\n' +
'<div class="content">\n' +
'  <div class="facts-grid">\n' +
    facts.map(function(f) { return '    ' + f; }).join('\n') + '\n' +
'  </div>\n' +
'  <section class="elig-section">\n' +
'    <h2>Eligibility</h2>\n' +
'    ' + (gradeText ? '<p><strong>Grades:</strong> ' + gradeText + '</p>' : '') + '\n' +
'    ' + (whoLines.length ? '<p style="margin-top:8px"><strong>Who:</strong> ' + whoLines.join(', ') + '</p>' : '') + '\n' +
'    ' + (s.entry_levels && s.entry_levels.length ? '<p style="margin-top:10px"><strong>Study level:</strong></p><div class="chips">' + buildSmallChips(s.entry_levels) + '</div>' : '') + '\n' +
'    ' + (s.qualifications && s.qualifications.length ? '<p style="margin-top:10px"><strong>Qualifications:</strong></p><div class="chips">' + buildSmallChips(s.qualifications) + '</div>' : '') + '\n' +
'    ' + (s.fields && s.fields.length ? '<p style="margin-top:10px"><strong>Fields:</strong></p><div class="chips">' + buildChips(s.fields) + '</div>' : '') + '\n' +
'  </section>\n' +
  notesHtml + '\n' +
'  <div class="apply-wrap">\n' +
'    <a href="' + esc(s.url) + '" class="apply-btn" target="_blank" rel="noopener"\n' +
'       onclick="gtag(\'event\',\'scholarship_apply_click\',{scholarship_id:' + s.id + ',scholarship_name:\'' + esc(s.name).replace(/'/g, "\\'") + '\',provider:\'' + esc(s.provider).replace(/'/g, "\\'") + '\'})">\n' +
'      Apply / Official Page &rarr;\n' +
'    </a>\n' +
'  </div>\n' +
'  <div class="related-section">\n' +
'    <h2>Related Searches</h2>\n' +
'    <div class="related-pills">\n' +
'      ' + buildRelatedLinks(s) + '\n' +
'    </div>\n' +
'  </div>\n' +
'</div>\n' +
'<footer>\n' +
'  <p>&copy; 2026 <a href="https://myscholar.my">MyScholar.my</a> &mdash; Malaysia\'s free scholarship directory. No login. No paywall.</p>\n' +
'</footer>\n' +
'</body>\n' +
'</html>';
}

// ── GENERATE ──────────────────────────────────────────────────────
console.log('');
console.log('==============================================');
console.log('  MyScholar Scholarship Page Builder');
console.log('==============================================');
console.log('');

var count = 0;
var skipped = 0;
var manifest = [];
var slugMap = {};

scholarships.forEach(function(s) {
  // Only generate for active scholarships
  if (!s.is_active) { skipped++; return; }

  var slug = makeSlug(s.name);

  // Deduplicate slugs
  if (slugMap[slug]) {
    slug = slug + '-' + s.id;
  }
  slugMap[slug] = true;

  var filename = slug + '.html';
  var filepath = path.join(OUT, filename);
  fs.writeFileSync(filepath, buildHTML(s, slug), 'utf8');
  count++;
  console.log('  + ' + filename);

  manifest.push({
    id: s.id,
    slug: slug,
    file: filename,
    name: s.name,
    provider: s.provider,
    category: s.category,
    canonical: 'https://myscholar.my/scholarships/' + slug
  });
});

// Write manifest
fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');
console.log('  + manifest.json');

// Write sitemap fragment
var sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
manifest.forEach(function(m) {
  sitemap += '  <url><loc>' + m.canonical + '</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>\n';
});
sitemap += '</urlset>';
fs.writeFileSync(path.join(OUT, 'sitemap-scholarships.xml'), sitemap, 'utf8');
console.log('  + sitemap-scholarships.xml');

console.log('');
console.log('==============================================');
console.log('  DONE: ' + count + ' pages, ' + skipped + ' skipped (inactive)');
console.log('  Output: ' + OUT);
console.log('==============================================');
