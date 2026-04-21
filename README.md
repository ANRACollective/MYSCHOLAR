# MyScholar — Malaysia's Free Scholarship & Opportunities Finder

A free, searchable directory of scholarships, internships, and tuition centres for Malaysian students. Built and maintained by one person.

**Live site:** [myscholar.my](https://myscholar.my)

---

## Products

### MyScholar (`index.html`)
Scholarship and financial aid finder. 200+ programmes covering JPA, MARA, GLCs, banks, foundations, foreign governments, and study loans. Filterable by field, level, citizenship, and deadline.

### MyIntern (`internships.html`)
Internship finder for Malaysian students. Curated listings with verified URLs, stipend info, and deadline tracking.

### MyTuition (`tuition.html` — coming soon)
Map-first discovery for SPM tuition centres in KL.

---

## Stack

| Layer | Details |
|---|---|
| Frontend | Single-file HTML SPAs — no framework, no build step |
| Database | Supabase |
| Hosting | GitHub Pages |
| Domain | myscholar.my (Exabytes registrar, Cloudflare DNS) |
| Email | Resend + Cloudflare Email Routing |
| Analytics | GA4 |

---

## Repo structure

```
MYSCHOLAR/
├── index.html              # MyScholar SPA (scholarships)
├── internships.html        # MyIntern SPA
├── 404.html
├── robots.txt
├── sitemap.xml
├── sitemap-seo.xml
├── CNAME                   # myscholar.my
│
├── _assets/                # Images, OG images
├── FAVICON/                # Favicon set
│
├── SEO/                    # SEO landing pages
└── scholarships/           # Individual scholarship detail pages
```

---

## Data

Listings are kept up to date. If you spot an error or a missing scholarship, use the correction form on the site.

---

## Disclaimer

This directory is for reference only. MyScholar is not affiliated with any scholarship provider. Always verify at the official scholarship website before applying.

---

*Built by ANRA. Free for all Malaysian students.*
