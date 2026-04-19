# MyIntern — CV Archetypes Reference (v1.0)

**Purpose.** Reference data for the future MyIntern CV builder. Defines what a strong Malaysian-student CV looks like per degree cluster — so the tool can pre-populate sensible section orders, suggest realistic skill tags, and show accurate example structures.

**Sources.** Malaysian-specific: GradMalaysia CV guides, University of Nottingham Malaysia Careers Advisory, themalaysianlawyer.com, Bar Council pupillage circulars, ResumeWriter.my, Glassdoor MY / Indeed MY / Hiredly listings. Cross-referenced with employer "what we look for" content from SLB, Deloitte MY, L'Oréal MY, NP Digital, YTL, Teleport, TP-Link.

**What this file is not.** Not individual student data. Not scraped CVs. These are *patterns* derived from public career guidance, designed to help a CV tool default intelligently. No personally identifiable information (PII).

---
---

## Schema

Each archetype contains the same fields so it mirrors cleanly to a Supabase table later:

| Field | Purpose |
|---|---|
| `cluster_id` | Short code for the degree cluster |
| `display_name` | What students see in the UI picker |
| `degree_keywords` | Search terms a student might type; used to map degree → cluster |
| `section_order` | Ordered list of sections, top to bottom |
| `common_skills_technical` | Suggested skill chips (hard skills) |
| `common_skills_software` | Suggested software/tool chips |
| `common_skills_soft` | Suggested soft skill chips |
| `example_project_titles` | Realistic placeholder project names |
| `example_experience_verbs` | Action verbs that fit the cluster |
| `typical_certifications` | Certs students in this cluster often pursue |
| `length_guidance` | 1 page, 1–2 pages, etc. |
| `notes` | Cluster-specific quirks |

---

## 1. Computing & Software Engineering

- **cluster_id:** `computing`
- **display_name:** Computing & Software Engineering
- **degree_keywords:** Computer Science, Software Engineering, Information Technology, Data Science, Artificial Intelligence, Cyber Security, Computing
- **section_order:** Header → Education → Projects → Experience → Technical Skills → Extracurriculars → References
- **common_skills_technical:** Data structures, Algorithms, OOP, REST APIs, SQL, Version control, Agile, Unit testing, Machine learning basics, Cloud fundamentals (AWS/GCP/Azure)
- **common_skills_software:** Python, Java, JavaScript, TypeScript, React, Node.js, Git, GitHub, Docker, VS Code, Figma, Linux, MySQL, PostgreSQL, MongoDB
- **common_skills_soft:** Problem-solving, Teamwork, Communication, Self-learning, Attention to detail
- **example_project_titles:** Final Year Project: [topic], Hackathon entry: [name], Personal portfolio website, Open-source contribution to [repo], University database system, Mobile app for [purpose]
- **example_experience_verbs:** Built, Developed, Deployed, Implemented, Debugged, Refactored, Automated, Integrated, Optimised, Shipped
- **typical_certifications:** AWS Cloud Practitioner, Google Cloud Associate, Coursera ML specialisation, freeCodeCamp certs, CCNA (if networking-focused)
- **length_guidance:** 1 page
- **notes:** Projects > Experience is deliberate — most computing students have more to show from FYP, hackathons, and personal builds than from work. GitHub link in header is common. ATS keywords matter if applying to MNCs.

---

## 2. Accounting, Finance & Banking

- **cluster_id:** `accounting_finance`
- **display_name:** Accounting, Finance & Banking
- **degree_keywords:** Accounting, Finance, Banking, Actuarial Science, Economics, Financial Economics, ACCA, CPA, CFA
- **section_order:** Header → Education (incl. professional qualifications) → Experience → Extracurriculars → Technical Skills → Certifications → References
- **common_skills_technical:** Financial analysis, Budgeting, Reconciliation, Audit procedures, Tax compliance, Financial modelling, Variance analysis, Bookkeeping, Equity research, Market research
- **common_skills_software:** Microsoft Excel (advanced: pivots, VLOOKUP, macros), Bloomberg Terminal, SAP, QuickBooks, Xero, Power BI, SPSS, STATA, SQL
- **common_skills_soft:** Analytical thinking, Attention to detail, Ethical judgement, Clear written communication, Time management under deadlines
- **example_project_titles:** Student-Managed Investment Fund member, University Case Competition [year], Accounting Society Treasurer, Equity research report on [sector]
- **example_experience_verbs:** Analysed, Reconciled, Audited, Prepared, Forecasted, Reviewed, Presented, Advised, Modelled
- **typical_certifications:** ACCA (in progress — common), CFA Level I/II candidate, CPA, ICAEW, MIA student membership, Bloomberg Market Concepts
- **length_guidance:** 1 page
- **notes:** Professional qualifications (ACCA in progress, CFA candidate) sit inside Education and add significant weight. Big Four (EY, KPMG, PwC, Deloitte) emphasise ethics, attention to detail, and CGPA. Include specific CGPA — "First Class" alone is not enough.

---

## 3. Engineering (Mechanical, Civil, Electrical, Chemical, Mechatronic)

- **cluster_id:** `engineering_core`
- **display_name:** Engineering (Mechanical / Civil / Electrical / Chemical)
- **degree_keywords:** Mechanical Engineering, Civil Engineering, Electrical Engineering, Electronic Engineering, Chemical Engineering, Mechatronics, Petroleum Engineering, Manufacturing Engineering
- **section_order:** Header → Education (incl. relevant coursework) → Projects / FYP → Experience → Technical Skills → Software Proficiency → Extracurriculars → References
- **common_skills_technical:** CAD drafting, Finite element analysis (FEA), Structural analysis, Thermodynamics, Fluid mechanics, Control systems, PCB design, PLC programming, Circuit design, Lean manufacturing, Quality assurance, Site supervision
- **common_skills_software:** AutoCAD, SolidWorks, MATLAB, ANSYS, Revit, Civil 3D, LabVIEW, Arduino IDE, Simulink, Python (basic), Microsoft Project
- **common_skills_soft:** Problem-solving, Teamwork, Safety awareness, Precision, Willingness to learn on-site, Reporting
- **example_project_titles:** Final Year Project: [design/system], Capstone Design Challenge, Robotics/IMechE competition, Solar car team, Bridge design project, PLC automation build
- **example_experience_verbs:** Designed, Drafted, Tested, Fabricated, Simulated, Inspected, Commissioned, Analysed, Maintained
- **typical_certifications:** IEM Graduate Member, Engineer in Training (EIT) prep, OSHA basic, AutoCAD Certified User, Six Sigma Yellow Belt, Scheduled Waste Management (DOE)
- **length_guidance:** 1–2 pages (2 acceptable if strong project portfolio)
- **notes:** "Relevant coursework" under Education is standard for engineering — lists 4–6 key modules. Software proficiency is often called out as a dedicated section. Site-based roles (civil, construction) weight willingness to relocate and English writing ability heavily.

---

## 4. Business, Management & Marketing

- **cluster_id:** `business_marketing`
- **display_name:** Business, Management & Marketing
- **degree_keywords:** Business Administration, Management, Marketing, International Business, Human Resources, Supply Chain, Logistics, Entrepreneurship, Business Analytics
- **section_order:** Header → Education → Experience → Extracurriculars (leadership-heavy) → Skills → Certifications → References
- **common_skills_technical:** Market research, Consumer behaviour analysis, Campaign planning, Brand management, Social media strategy, SEO basics, Email marketing, CRM usage, Sales funnel understanding, Event coordination, Budget management
- **common_skills_software:** Microsoft Excel, PowerPoint, Google Analytics (GA4), Meta Ads Manager, Canva, Mailchimp, HubSpot, Salesforce (basic), Power BI, Hootsuite, Notion, Trello
- **common_skills_soft:** Communication, Leadership, Stakeholder management, Creativity, Adaptability, Commercial awareness
- **example_project_titles:** Marketing Club President, Entrepreneurship Challenge [year], Consumer research on [topic], University career fair organiser, Case competition: [company/theme]
- **example_experience_verbs:** Led, Organised, Coordinated, Pitched, Increased, Grew, Researched, Presented, Collaborated, Managed
- **typical_certifications:** Google Digital Marketing & E-commerce, Meta Blueprint, HubSpot Inbound Marketing, CIM Foundation, Google Analytics certification
- **length_guidance:** 1 page
- **notes:** Extracurricular leadership carries disproportionate weight — club exco roles, event organising, and volunteering are primary differentiators since most applicants have limited work history. Quantified outcomes (attendance, revenue raised, reach) are critical.

---

## 5. Law

- **cluster_id:** `law`
- **display_name:** Law (LLB / CLP / BPTC)
- **degree_keywords:** Law, LLB, Bachelor of Laws, Jurisprudence, Legal Studies
- **section_order:** Header → Academic History (reverse chronological: CLP/BPTC → LLB → A-Level/STPM → SPM) → Mooting & Legal Activities → Internships / Attachments → Extracurriculars → Skills → References
- **common_skills_technical:** Legal research, Case analysis, Statutory interpretation, Drafting (agreements, submissions), Mooting, Client interviewing, Legal writing, Cite-checking
- **common_skills_software:** LexisNexis, Westlaw, CLJ Law, Malaysian Bar portal, Microsoft Word (advanced), Adobe Acrobat
- **common_skills_soft:** Written advocacy, Attention to detail, Confidentiality, Time management, Professional ethics, Commercial awareness
- **example_project_titles:** Intra-varsity mooting competition, Taylor's/UM/Monash Moot, Client counselling competition, Legal Aid clinic volunteer, Student law journal editor
- **example_experience_verbs:** Researched, Drafted, Assisted, Attended (hearings), Cite-checked, Observed, Presented, Volunteered
- **typical_certifications:** CLP (for local graduates), Bar-at-Law (BPTC, for UK-qualified), Inner Temple / Lincoln's Inn membership (if applicable)
- **length_guidance:** 1–2 pages
- **notes:** Academic grades are non-negotiable — every level (SPM, pre-U, LLB, CLP) must show overall results. First Class or Second Upper Class (2:1) is flagged prominently. Pupillage applications specifically weight mooting, legal aid involvement, and any prior mini-pupillage or chambering exposure. Typos in the CV or cover letter are a near-instant reject.

---

## 6. Medicine, Pharmacy & Health Sciences

- **cluster_id:** `medicine_health`
- **display_name:** Medicine, Pharmacy & Health Sciences
- **degree_keywords:** Medicine, MBBS, MD, Pharmacy, Dentistry, Nursing, Physiotherapy, Biomedical Science, Medical Science, Public Health, Nutrition
- **section_order:** Header → Education → Clinical/Hospital Postings → Research & Publications → Extracurriculars & Volunteering → Skills & Certifications → References
- **common_skills_technical:** Patient assessment, Clinical history-taking, Phlebotomy (where trained), Aseptic technique, Medication reconciliation, Literature review, Lab techniques (PCR, ELISA, microscopy), Data collection
- **common_skills_software:** SPSS, R (basic), Microsoft Excel, EndNote/Mendeley, Hospital information systems (exposure during postings)
- **common_skills_soft:** Empathy, Communication with patients, Teamwork, Stress tolerance, Ethical awareness, Attention to detail
- **example_project_titles:** Clinical posting: [ward/specialty], Research assistant: [study], Health screening camp volunteer, Medical society exco, Final year thesis on [topic]
- **example_experience_verbs:** Assisted, Observed, Administered, Counselled, Documented, Researched, Presented (at conference), Volunteered
- **typical_certifications:** Basic Life Support (BLS), Advanced Cardiac Life Support (ACLS — final years), Good Clinical Practice (GCP) for research, provisional registration with MMC / PBKM / MDC as applicable
- **length_guidance:** 1–2 pages (2 common by final year)
- **notes:** Clinical postings (by specialty and duration) form the spine of the CV. Research output — even a poster or conference presentation — is weighted heavily. Extracurriculars showing empathy or community work (health camps, volunteering) matter because selection panels read for bedside manner, not just grades.

---

## 7. Design, Multimedia & Creative

- **cluster_id:** `design_multimedia`
- **display_name:** Design, Multimedia & Creative
- **degree_keywords:** Graphic Design, Multimedia, Creative Media, Animation, UI/UX, Visual Communication, Fine Art, Fashion Design, Illustration, Digital Design
- **section_order:** Header (with portfolio link) → Portfolio Link (prominent) → Education → Experience / Freelance → Projects → Software Skills → Extracurriculars → References
- **common_skills_technical:** Layout design, Typography, Branding, Visual identity, UI/UX basics, Wireframing, Prototyping, Motion graphics, Video editing, Photography, Storyboarding
- **common_skills_software:** Adobe Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, Figma, Canva, Procreate, Blender, Cinema 4D, Lightroom
- **common_skills_soft:** Creativity, Visual thinking, Receiving feedback, Meeting deadlines, Client communication, Iteration
- **example_project_titles:** University design showcase, Freelance logo for [client], Self-initiated brand identity project, Final year film/animation, Student magazine art director
- **example_experience_verbs:** Designed, Illustrated, Animated, Edited, Filmed, Prototyped, Branded, Photographed, Published
- **typical_certifications:** Adobe Certified Professional, Coursera UX Design (Google), Figma Academy completion
- **length_guidance:** 1 page (CV) + separate portfolio (non-negotiable)
- **notes:** A portfolio link is the CV. Every Malaysian design internship listing reviewed required a portfolio — academic work acceptable. The CV itself is often visually designed (controlled use of colour and typography is expected). Social media handles relevant to the work (Instagram, Behance, Dribbble) sit in the header.

---

## 8. Communications, Journalism & Public Relations

- **cluster_id:** `comms_pr`
- **display_name:** Communications, Journalism & Public Relations
- **degree_keywords:** Mass Communication, Journalism, Public Relations, Corporate Communication, Media Studies, Broadcasting, Advertising
- **section_order:** Header → Education → Writing / Media Portfolio Link → Experience → Extracurriculars → Skills → References
- **common_skills_technical:** Copywriting, Press release writing, Media pitching, Social media content planning, Interviewing, Event PR, Crisis comms basics, Editorial judgement
- **common_skills_software:** Microsoft Word, Canva, Adobe Premiere Rush, CapCut, Meltwater (basic), Hootsuite, Google Docs, Mailchimp
- **common_skills_soft:** Writing, Verbal communication, Storytelling, Cultural sensitivity (local + global), Adaptability, Curiosity
- **example_project_titles:** Student newspaper editor, Campus radio producer, Podcast host, PR campaign for [society], Volunteer comms lead for [NGO event]
- **example_experience_verbs:** Wrote, Pitched, Interviewed, Edited, Produced, Broadcast, Drafted, Published, Covered
- **typical_certifications:** Google News Initiative courses, Meta Blueprint Social Media, IABC Student membership
- **length_guidance:** 1 page
- **notes:** Writing samples or a Medium/Substack/portfolio link strongly encouraged. Bilingual (BM + English) fluency is a real advantage in local PR agencies and should be called out explicitly under Skills/Languages.

---

## 9. Hospitality, Tourism & Culinary

- **cluster_id:** `hospitality_tourism`
- **display_name:** Hospitality, Tourism & Culinary
- **degree_keywords:** Hospitality Management, Hotel Management, Tourism, Culinary Arts, Event Management, Food & Beverage, Leisure Management
- **section_order:** Header → Education → Industrial Training / Placement → Experience (incl. part-time F&B) → Languages → Skills → References
- **common_skills_technical:** Front office operations, Food safety (HACCP basics), Service standards, Banquet setup, F&B service, Inventory handling, Reservation systems, Event coordination
- **common_skills_software:** Opera PMS (hotel), POS systems, Microsoft Office, social media platforms, TripAdvisor / booking portals
- **common_skills_soft:** Customer service, Stamina, Grooming and presentation, Multitasking, Cross-cultural communication, Problem-solving under pressure
- **example_project_titles:** Industrial placement at [hotel], Culinary competition entry, University F&B outlet operator, Event volunteer at [convention]
- **example_experience_verbs:** Served, Coordinated, Greeted, Managed (shifts), Prepared, Plated, Upsold, Assisted guests
- **typical_certifications:** Food Handler Certificate (MOH), Basic HACCP, TEFL (if hospitality + language track), First Aid
- **length_guidance:** 1 page
- **notes:** Languages spoken (especially Mandarin, Japanese, Korean, Arabic for inbound tourism) are a strong differentiator and belong prominently on the CV. Part-time F&B experience during studies is relevant work, not filler.

---

## 10. Education & Early Childhood

- **cluster_id:** `education`
- **display_name:** Education & Early Childhood
- **degree_keywords:** Education, TESL, Early Childhood Education, Primary Education, Secondary Education, Teaching, Pedagogy
- **section_order:** Header → Education → Teaching Practicum → Volunteering & Tutoring → Skills → Languages → References
- **common_skills_technical:** Lesson planning, Classroom management, Curriculum mapping (KSSR/KSSM), Formative assessment, Differentiated instruction, Pastoral care
- **common_skills_software:** Google Classroom, Canva for Education, Kahoot, Quizziz, Microsoft Teams, basic video editing
- **common_skills_soft:** Patience, Communication with children, Parent engagement, Adaptability, Empathy, Cultural awareness
- **example_project_titles:** School-based practicum at [school], Tuition centre part-time, Volunteer tutor for B40 students, English camp facilitator
- **example_experience_verbs:** Taught, Planned, Assessed, Mentored, Facilitated, Adapted, Engaged
- **typical_certifications:** TESL/TESOL (for language teachers), First Aid, Child Protection Awareness
- **length_guidance:** 1–2 pages
- **notes:** Practicum placements should be listed like experience, with school context and student demographics. Volunteer teaching and community work carry meaningful weight for both public-service (SPA) and private school applications.

---

## 11. Sciences (Pure & Applied)

- **cluster_id:** `sciences`
- **display_name:** Sciences (Biology, Chemistry, Physics, Environmental)
- **degree_keywords:** Biology, Chemistry, Physics, Biochemistry, Biotechnology, Microbiology, Environmental Science, Food Science, Marine Science, Geology
- **section_order:** Header → Education (incl. CGPA and relevant coursework) → Research & Lab Experience → Projects / FYP → Technical Skills → Extracurriculars → References
- **common_skills_technical:** Lab techniques (titration, chromatography, spectroscopy, PCR, cell culture), Data analysis, Experimental design, Field sampling, Statistical analysis, Scientific writing
- **common_skills_software:** SPSS, R, Python (basic), GraphPad Prism, ChemDraw, GIS (ArcGIS/QGIS for env sci), ImageJ, EndNote
- **common_skills_soft:** Analytical thinking, Patience, Precision, Curiosity, Reading dense literature
- **example_project_titles:** Final Year Project: [hypothesis], Research assistant under Dr. [name], Science olympiad participant, Lab demonstrator
- **example_experience_verbs:** Measured, Analysed, Cultured, Quantified, Extracted, Observed, Documented, Presented (poster)
- **typical_certifications:** Good Lab Practice (GLP), Chemical safety, Biosafety Level training
- **length_guidance:** 1–2 pages
- **notes:** Lab techniques list is central — be specific (e.g., "gel electrophoresis, Western blot, qPCR" rather than "molecular biology"). Any conference poster or publication, even co-authored, materially strengthens the CV.

---

## 12. Built Environment & Architecture

- **cluster_id:** `built_environment`
- **display_name:** Architecture, Quantity Surveying & Built Environment
- **degree_keywords:** Architecture, Quantity Surveying, Construction Management, Urban Planning, Interior Design, Landscape Architecture, Real Estate, Building Surveying
- **section_order:** Header (with portfolio link) → Education → Design Studio Projects → Experience / Practicum → Technical Skills → Software → References
- **common_skills_technical:** Architectural drafting, 3D modelling, BIM workflows, Site analysis, Cost estimation, Tender documents (QS), Concept development, Model-making, Measured drawings
- **common_skills_software:** AutoCAD, Revit, SketchUp, Rhino, Lumion, Enscape, V-Ray, Adobe Photoshop / InDesign (for boards), CostX (QS), ArchiCAD
- **common_skills_soft:** Spatial thinking, Presentation, Collaborative studio culture, Time management under deadline, Accepting critique
- **example_project_titles:** Design Studio [year/semester]: [brief], Measured Drawing project at [heritage site], Competition entry: [name], Practicum at [firm]
- **example_experience_verbs:** Designed, Modelled, Drafted, Visualised, Surveyed, Costed, Presented, Built (models)
- **typical_certifications:** LAM Part 1 (Architecture — on graduation), RISM student membership (QS), Green Building Index familiarity
- **length_guidance:** 1 page (CV) + separate portfolio (non-negotiable)
- **notes:** Portfolio is the main application document; the CV is a companion. Architecture firms often expect a PDF portfolio sent alongside. For QS roles, measurable cost-estimation coursework or practicum tasks should be quantified (contract value worked on, BQs prepared).

---

## Quick lookup table

For fast UI mapping:

| cluster_id | Sections emphasising | Portfolio required? |
|---|---|---|
| computing | Projects, Technical Skills | Optional (GitHub) |
| accounting_finance | Experience, Certifications | No |
| engineering_core | Projects, Software Proficiency | No |
| business_marketing | Extracurriculars, Experience | No |
| law | Academic History, Mooting | No |
| medicine_health | Clinical Postings, Research | No |
| design_multimedia | Portfolio, Software Skills | **Yes** |
| comms_pr | Writing samples, Portfolio | Recommended |
| hospitality_tourism | Industrial Training, Languages | No |
| education | Teaching Practicum, Volunteering | No |
| sciences | Lab Experience, FYP | No |
| built_environment | Studio Projects, Portfolio | **Yes** |

---

## Proposed Supabase schema (for when we mirror this)

```sql
CREATE TABLE cv_archetypes (
  cluster_id TEXT PRIMARY KEY,
  display_name TEXT NOT NULL,
  degree_keywords TEXT[] NOT NULL,
  section_order TEXT[] NOT NULL,
  common_skills_technical TEXT[],
  common_skills_software TEXT[],
  common_skills_soft TEXT[],
  example_project_titles TEXT[],
  example_experience_verbs TEXT[],
  typical_certifications TEXT[],
  length_guidance TEXT,
  portfolio_required BOOLEAN DEFAULT FALSE,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS: public read, service-role write (same pattern as scholarships/internships)
ALTER TABLE cv_archetypes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_read_cv_archetypes" ON cv_archetypes
  FOR SELECT USING (true);
```

---

## Changelog

- **v1.0 (Apr 2026)** — Initial 12 clusters based on Malaysian university career guidance and local employer listings. No PII. Research-based only.

