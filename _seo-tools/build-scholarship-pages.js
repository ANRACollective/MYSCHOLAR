/**
 * build-scholarship-pages.js — MyScholar Individual Scholarship Page Generator
 *
 * Fetches all active scholarships from Supabase (with entry levels, fields, qualifications),
 * then generates one SEO-optimised HTML file per scholarship into ../scholarships/
 *
 * Run: node build-scholarship-pages.js
 * Output: ../scholarships/{slug}.html + sitemap-scholarships.xml + scholarship-manifest.json
 *
 * Design: matches MyScholar light/ice aesthetic (midnight/coral/ice palette, Playfair + DM Sans)
 */

const https = require('https');
const fs    = require('fs');
const path  = require('path');

// ── CONFIG ────────────────────────────────────────────────────────────────────
const SB_URL  = 'https://ywvfvjvxwhcfprfrkgqm.supabase.co';
const SB_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3dmZ2anZ4d2hjZnByZnJrZ3FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwNTQ5MzEsImV4cCI6MjA5MDYzMDkzMX0.5EzrJuW1fdPca2ZEKGPXXgbd_XYDqKzzu6e-iRQT9po';
const OUT_DIR = process.env.BUILD_OUT || path.join(__dirname, '..', 'scholarships');

try { fs.mkdirSync(OUT_DIR, { recursive: true }); } catch(e) {}
console.log('Output dir:', OUT_DIR);

// ── HELPERS ───────────────────────────────────────────────────────────────────

// Convert scholarship name to a URL-friendly slug
function makeSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')   // strip special chars
    .replace(/\s+/g, '-')             // spaces → hyphens
    .replace(/-+/g, '-')              // collapse multiple hyphens
    .replace(/^-|-$/g, '')            // trim leading/trailing hyphens
    .substring(0, 80);                // cap length
}

// Escape HTML special chars to prevent XSS in generated pages
function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Fetch JSON from Supabase REST API
function fetchSupabase(endpoint) {
  return new Promise((resolve, reject) => {
    const url  = SB_URL + endpoint;
    const opts = {
      headers: {
        'apikey':        SB_KEY,
        'Authorization': 'Bearer ' + SB_KEY,
        'Accept':        'application/json'
      }
    };
    https.get(url, opts, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch(e) { reject(new Error('JSON parse error: ' + data.substring(0,200))); }
      });
    }).on('error', reject);
  });
}

// ── CATEGORY COLOURS (matches index.html palette) ─────────────────────────────
const CAT_COLOUR = {
  'Government':   '#1e3a6e',
  'GLC':          '#00a878',
  'Banking':      '#c07a00',
  'Corporate':    '#7c3aed',
  'Loan':         '#0369a1',
  'State':        '#b45309',
  'Media':        '#be185d',
  'International':'#0f766e',
  'University':   '#4338ca',
  'Foundation':   '#065f46',
  'Postgraduate': '#7e22ce'
};

// ── HTML BUILDER ──────────────────────────────────────────────────────────────
function buildHTML(s, slug) {
  const canonical = 'https://myscholar.my/scholarships/' + slug;
  const catColour = CAT_COLOUR[s.category] || '#1e3a6e';

  // --- Tags row ---
  const tags = [];
  tags.push(`<span class="tag tag-coverage">${esc(s.coverage === 'Full' ? 'Full Scholarship' : 'Partial')}</span>`);
  tags.push(`<span class="tag tag-dest">${esc(s.destination)}</span>`);
  if (s.no_bond)    tags.push('<span class="tag tag-nobond">No Bond</span>');
  if (s.b40)        tags.push('<span class="tag tag-b40">B40 Friendly</span>');
  if (s.bumi_only)  tags.push('<span class="tag tag-bumi">Bumi Only</span>');
  if (!s.bumi_only && s.open_to_all) tags.push('<span class="tag tag-open">Open to All</span>');

  // --- Entry levels ---
  const levels = Array.isArray(s.entry_levels) ? s.entry_levels.filter(Boolean) : [];
  const levelLabels = { PostSPM:'Post-SPM', PreU:'Pre-University', Undergrad:'Undergraduate', Postgrad:'Postgraduate' };

  // --- Fields ---
  const fields = Array.isArray(s.fields) ? s.fields.filter(f => f && f !== 'null') : [];

  // --- Qualifications ---
  const quals = Array.isArray(s.qualifications) ? s.qualifications.filter(Boolean) : [];

  // --- Deadline display ---
  const deadline = s.deadline_text || (s.deadline_date ? s.deadline_date : 'Check provider website');

  // --- Grade display ---
  const grade = s.grade_description || (s.grade_minimum !== 'Any' ? s.grade_minimum : 'Check provider website');

  // --- Amount ---
  const amount = s.amount_description || 'See provider website for details';

  // --- Notes ---
  const notes = s.notes ? s.notes.replace(/\n/g, '<br>') : '';

  // --- Schema.org JSON-LD ---
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": s.name + " | MyScholar Malaysia",
    "description": `${s.name} by ${s.provider}. ${s.coverage} scholarship, ${s.destination.toLowerCase()} study. ${amount}`,
    "url": canonical,
    "inLanguage": ["en-MY", "ms-MY"],
    "isPartOf": { "@type": "WebSite", "name": "MyScholar Malaysia", "url": "https://myscholar.my" },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://myscholar.my" },
        { "@type": "ListItem", "position": 2, "name": "Scholarships", "item": "https://myscholar.my/scholarships" },
        { "@type": "ListItem", "position": 3, "name": s.name, "item": canonical }
      ]
    }
  }, null, 2);

  // --- Related JACK category links ---
  const relatedLinks = [];
  if (s.category === 'Government')   relatedLinks.push(['Government Scholarships', '/SEO/biasiswa-kerajaan-2026']);
  if (s.category === 'GLC')          relatedLinks.push(['GLC Scholarships', '/SEO/biasiswa-swasta-korporat-2026']);
  if (s.category === 'Banking')      relatedLinks.push(['Bank Scholarships', '/SEO/biasiswa-maybank-2026']);
  if (s.destination === 'Overseas')  relatedLinks.push(['Overseas Scholarships', '/SEO/biasiswa-luar-negara-2026']);
  if (s.b40)                         relatedLinks.push(['B40 Scholarships', '/SEO/biasiswa-b40-2026']);
  if (s.bumi_only)                   relatedLinks.push(['Bumiputera Scholarships', '/SEO/biasiswa-bumiputera-2026']);
  if (s.no_bond)                     relatedLinks.push(['No-Bond Scholarships', '/SEO/biasiswa-tanpa-ikatan-2026']);
  if (fields.includes('Engineering')) relatedLinks.push(['Engineering Scholarships', '/SEO/biasiswa-kejuruteraan-engineering-2026']);
  if (fields.includes('Medicine'))   relatedLinks.push(['Medical Scholarships', '/SEO/biasiswa-perubatan-medicine-2026']);
  if (fields.includes('IT'))         relatedLinks.push(['IT Scholarships', '/SEO/biasiswa-teknologi-maklumat-it-2026']);
  relatedLinks.push(['All Scholarships', '/']);

  const relatedHTML = relatedLinks.slice(0, 6).map(([label, href]) =>
    `<a href="${href}" class="rel-link">${esc(label)}</a>`
  ).join('\n');

  // --- Apply button ---
  const applyBtn = s.url
    ? `<a href="${esc(s.url)}" class="btn-apply" target="_blank" rel="noopener noreferrer">Apply Now &rarr;</a>`
    : `<a href="/" class="btn-apply">Browse All Scholarships</a>`;

  return `<!DOCTYPE html>
<html lang="en-MY">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(s.name)} 2026 | MyScholar Malaysia</title>
<meta name="description" content="${esc(s.name)} by ${esc(s.provider)}. ${esc(s.coverage)} ${s.destination === 'Overseas' ? 'overseas' : 'local'} scholarship. Deadline: ${esc(deadline)}. ${esc(amount)}.">
<meta name="keywords" content="${esc(s.name)}, ${esc(s.provider)}, scholarship Malaysia 2026, biasiswa Malaysia 2026, ${esc(s.category.toLowerCase())} scholarship">
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="en-MY" href="${canonical}">
<link rel="alternate" hreflang="ms-MY" href="${canonical}">
<link rel="alternate" hreflang="x-default" href="${canonical}">
<meta property="og:title" content="${esc(s.name)} | MyScholar Malaysia">
<meta property="og:description" content="${esc(s.coverage)} ${s.destination === 'Overseas' ? 'overseas' : 'local'} scholarship by ${esc(s.provider)}. ${esc(amount)}">
<meta property="og:url" content="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="MyScholar Malaysia">
<meta property="og:image" content="https://myscholar.my/myscholar-og.jpg">
<meta property="og:locale" content="en_MY">
<script type="application/ld+json">
${jsonLd}
</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZETBRDDMTV"></script>
<script>
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","G-ZETBRDDMTV");
gtag("event","scholarship_page_view",{scholarship_id:${s.id},scholarship_name:"${esc(s.name)}",provider:"${esc(s.provider)}",category:"${esc(s.category)}"});
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
:root{--midnight:#0f1f3d;--navy:#1e3a6e;--coral:#e8551e;--ice:#f0f4ff;--white:#ffffff;--cat:${catColour};--serif:"Playfair Display",Georgia,serif;--sans:"DM Sans",system-ui,sans-serif}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:var(--sans);background:var(--ice);color:var(--midnight);min-height:100vh}
nav{position:sticky;top:0;z-index:99;background:var(--midnight);padding:0 20px;display:flex;align-items:center;justify-content:space-between;height:52px;border-bottom:3px solid var(--coral)}
.nav-logo{font-family:var(--serif);color:#fff;font-size:20px;text-decoration:none}.nav-logo span{color:var(--coral)}
.nav-back{font-size:12px;color:rgba(255,255,255,.55);text-decoration:none;transition:color .2s}.nav-back:hover{color:#fff}
.hero{background:var(--midnight);padding:48px 24px 40px;color:#fff}
.hero-inner{max-width:720px;margin:0 auto}
.eyebrow{display:inline-block;background:var(--cat);color:#fff;font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;padding:4px 12px;border-radius:20px;margin-bottom:16px}
h1{font-family:var(--serif);font-size:clamp(24px,4vw,42px);line-height:1.15;margin-bottom:12px;color:#fff}
.provider{font-size:14px;color:rgba(255,255,255,.6);margin-bottom:20px}
.tags{display:flex;flex-wrap:wrap;gap:8px}
.tag{font-size:12px;font-weight:500;padding:4px 12px;border-radius:20px}
.tag-coverage{background:rgba(232,85,30,.2);color:#ff8c5a;border:1px solid rgba(232,85,30,.3)}
.tag-dest{background:rgba(255,255,255,.1);color:rgba(255,255,255,.75);border:1px solid rgba(255,255,255,.15)}
.tag-nobond{background:rgba(0,168,120,.15);color:#00c490;border:1px solid rgba(0,168,120,.3)}
.tag-b40{background:rgba(3,105,161,.2);color:#60b8f0;border:1px solid rgba(3,105,161,.3)}
.tag-bumi{background:rgba(180,83,9,.2);color:#fbbf24;border:1px solid rgba(180,83,9,.3)}
.tag-open{background:rgba(255,255,255,.07);color:rgba(255,255,255,.6);border:1px solid rgba(255,255,255,.12)}
.main{max-width:720px;margin:0 auto;padding:32px 24px 64px}
.section{background:var(--white);border-radius:12px;padding:24px;margin-bottom:20px;box-shadow:0 1px 4px rgba(0,0,0,.06)}
.section-title{font-family:var(--serif);font-size:16px;color:var(--midnight);margin-bottom:16px;padding-bottom:10px;border-bottom:1px solid rgba(15,31,61,.08)}
.fact-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
@media(max-width:480px){.fact-grid{grid-template-columns:1fr}}
.fact{background:var(--ice);border-radius:8px;padding:12px 14px}
.fact-label{font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(15,31,61,.45);margin-bottom:4px}
.fact-value{font-size:14px;font-weight:500;color:var(--midnight);line-height:1.4}
.fact-value.deadline{color:var(--coral);font-weight:600}
.chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
.chip{background:var(--ice);border:1px solid rgba(15,31,61,.12);color:var(--midnight);font-size:12px;padding:4px 10px;border-radius:20px}
.notes-text{font-size:14px;line-height:1.75;color:rgba(15,31,61,.75)}
.cta-section{text-align:center;padding:32px 0}
.btn-apply{display:inline-block;background:var(--coral);color:#fff;font-size:15px;font-weight:600;padding:14px 36px;border-radius:8px;text-decoration:none;transition:opacity .2s;margin-bottom:12px}
.btn-apply:hover{opacity:.88}
.btn-browse{display:block;font-size:13px;color:rgba(15,31,61,.5);text-decoration:none;margin-top:8px}
.btn-browse:hover{color:var(--coral)}
.related{border-top:1px solid rgba(15,31,61,.08);padding-top:24px;margin-top:8px}
.related-title{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(15,31,61,.4);margin-bottom:12px}
.rel-links{display:flex;flex-wrap:wrap;gap:8px}
.rel-link{background:var(--ice);border:1px solid rgba(15,31,61,.1);color:rgba(15,31,61,.65);font-size:12px;padding:5px 12px;border-radius:20px;text-decoration:none;transition:all .2s}
.rel-link:hover{border-color:var(--coral);color:var(--coral)}
footer{text-align:center;padding:24px;font-size:12px;color:rgba(15,31,61,.4);border-top:1px solid rgba(15,31,61,.08)}
footer a{color:rgba(15,31,61,.55);text-decoration:none}
</style>
</head>
<body>
<nav>
  <a href="/" class="nav-logo">My<span>Scholar</span></a>
  <a href="/" class="nav-back">&larr; All Scholarships</a>
</nav>

<div class="hero">
  <div class="hero-inner">
    <div class="eyebrow">${esc(s.category)} &middot; ${esc(s.provider)}</div>
    <h1>${esc(s.name)}</h1>
    <div class="provider">by ${esc(s.provider)}</div>
    <div class="tags">${tags.join('\n    ')}</div>
  </div>
</div>

<div class="main">

  <!-- Key Facts -->
  <div class="section">
    <div class="section-title">Key Details</div>
    <div class="fact-grid">
      <div class="fact">
        <div class="fact-label">Amount / Coverage</div>
        <div class="fact-value">${esc(amount)}</div>
      </div>
      <div class="fact">
        <div class="fact-label">Deadline</div>
        <div class="fact-value deadline">${esc(deadline)}</div>
      </div>
      <div class="fact">
        <div class="fact-label">Study Destination</div>
        <div class="fact-value">${esc(s.destination)}</div>
      </div>
      <div class="fact">
        <div class="fact-label">Bond</div>
        <div class="fact-value">${s.no_bond ? 'No bond required' : esc(s.bond_description || 'Bond applies — see provider')}</div>
      </div>
    </div>
  </div>

  <!-- Eligibility -->
  <div class="section">
    <div class="section-title">Eligibility</div>
    <div class="fact-grid">
      <div class="fact">
        <div class="fact-label">Grade Requirement</div>
        <div class="fact-value">${esc(grade)}</div>
      </div>
      <div class="fact">
        <div class="fact-label">Who Can Apply</div>
        <div class="fact-value">${s.bumi_only ? 'Bumiputera only' : (s.open_to_all ? 'Open to all Malaysians' : 'Check provider')}</div>
      </div>
    </div>
    ${levels.length ? `<div style="margin-top:14px"><div class="fact-label" style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(15,31,61,.45);margin-bottom:8px">Study Level</div><div class="chips">${levels.map(l => `<span class="chip">${esc(levelLabels[l] || l)}</span>`).join('')}</div></div>` : ''}
    ${quals.length ? `<div style="margin-top:14px"><div class="fact-label" style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(15,31,61,.45);margin-bottom:8px">Accepted Qualifications</div><div class="chips">${quals.map(q => `<span class="chip">${esc(q)}</span>`).join('')}</div></div>` : ''}
    ${fields.length ? `<div style="margin-top:14px"><div class="fact-label" style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(15,31,61,.45);margin-bottom:8px">Fields of Study</div><div class="chips">${fields.map(f => `<span class="chip">${esc(f)}</span>`).join('')}</div></div>` : ''}
  </div>

  ${notes ? `<!-- About -->
  <div class="section">
    <div class="section-title">About This Scholarship</div>
    <div class="notes-text">${notes}</div>
  </div>` : ''}

  <!-- CTA -->
  <div class="cta-section">
    ${applyBtn}
    <a href="/" class="btn-browse">&larr; Browse all 200+ scholarships on MyScholar</a>
  </div>

  <!-- Related -->
  <div class="related">
    <div class="related-title">Related Searches</div>
    <div class="rel-links">
      ${relatedHTML}
    </div>
  </div>

</div>

<footer>
  <p>&copy; 2026 <a href="https://myscholar.my">MyScholar.my</a> &mdash; Malaysia's free scholarship directory. No login. No paywall.</p>
</footer>
</body>
</html>`;
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log('======================================================');
  console.log('  MyScholar Scholarship Page Builder');
  console.log('======================================================\n');

  // Fetch all active scholarships
  console.log('  Fetching scholarships from Supabase...');
  const scholarships = await fetchSupabase(
    '/rest/v1/scholarships?select=*&is_active=eq.true&order=id.asc'
  );
  console.log('  Found ' + scholarships.length + ' active scholarships\n');

  // Fetch related data in parallel
  console.log('  Fetching related data (entry levels, fields, qualifications)...');
  const [entryLevels, fields, quals] = await Promise.all([
    fetchSupabase('/rest/v1/scholarship_entry_levels?select=*'),
    fetchSupabase('/rest/v1/scholarship_fields?select=*'),
    fetchSupabase('/rest/v1/scholarship_quals?select=*')
  ]);

  // Build lookup maps keyed by scholarship_id
  const levelMap = {};
  entryLevels.forEach(r => {
    if (!levelMap[r.scholarship_id]) levelMap[r.scholarship_id] = [];
    levelMap[r.scholarship_id].push(r.entry_level);
  });
  const fieldMap = {};
  fields.forEach(r => {
    if (!fieldMap[r.scholarship_id]) fieldMap[r.scholarship_id] = [];
    fieldMap[r.scholarship_id].push(r.field_display || r.field_tag);
  });
  const qualMap = {};
  quals.forEach(r => {
    if (!qualMap[r.scholarship_id]) qualMap[r.scholarship_id] = [];
    qualMap[r.scholarship_id].push(r.qualification);
  });

  console.log('  Data loaded. Building pages...\n');

  // Track slugs to handle duplicates
  const usedSlugs = {};
  const manifest = [];
  let count = 0;

  scholarships.forEach(s => {
    // Attach related data
    s.entry_levels  = levelMap[s.id]  || [];
    s.fields        = fieldMap[s.id]  || [];
    s.qualifications = qualMap[s.id] || [];

    // Generate unique slug
    let slug = makeSlug(s.name);
    if (usedSlugs[slug]) {
      slug = slug + '-' + s.id;
    }
    usedSlugs[slug] = true;

    // Build and write HTML
    const html     = buildHTML(s, slug);
    const filename = slug + '.html';
    const filepath = path.join(OUT_DIR, filename);
    fs.writeFileSync(filepath, html, 'utf8');
    count++;
    console.log('  + ' + filename);

    manifest.push({
      id:       s.id,
      slug:     slug,
      file:     filename,
      name:     s.name,
      provider: s.provider,
      category: s.category,
      canonical: 'https://myscholar.my/scholarships/' + slug
    });
  });

  // Write sitemap for scholarship pages
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  manifest.forEach(m => {
    sitemap += `  <url><loc>${m.canonical}</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>\n`;
  });
  sitemap += '</urlset>';
  fs.writeFileSync(path.join(OUT_DIR, 'sitemap-scholarships.xml'), sitemap, 'utf8');

  // Write manifest
  fs.writeFileSync(path.join(OUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');

  console.log('\n======================================================');
  console.log('  DONE — ' + count + ' scholarship pages generated');
  console.log('  Sitemap: scholarships/sitemap-scholarships.xml');
  console.log('  Manifest: scholarships/manifest.json');
  console.log('======================================================\n');
  console.log('  Next: add sitemap-scholarships.xml to GSC');
  console.log('  and reference it from sitemap.xml via <sitemapindex>\n');
}

main().catch(err => {
  console.error('ERROR:', err.message);
  process.exit(1);
});
