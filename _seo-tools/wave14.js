// JACK Wave 14 — MyJourney Career Expansion
// Created: 2026-04-27
// Strategy: Cover the remaining high-search career IDs in journey.html.
// All entries are type="journey" — linked to /journey.html?career=<career_id>
//
// A. HIGH-DEMAND PROFESSIONAL CAREERS (10)
//    pilot, cybersecurity, cloud engineer, financial planner, HR manager,
//    property agent, dietitian, UX designer, petroleum engineer, entrepreneur
// B. GOVERNMENT & UNIFORMED SERVICES (6)
//    police officer, military officer, customs officer, diplomat, PTD officer, social worker
// C. CREATIVE & TECHNICAL TRADES (5)
//    animator, photographer, auto mechanic, plumber, HVAC technician
// D. ALLIED HEALTH & COUNSELLING (4)
//    occupational therapist, biomedical scientist, counsellor, legal executive
// E. JOURNEY DISCOVERY CATEGORY PAGES (5)
//    government careers, TVET/vocational, careers without a degree,
//    careers for science students, logistics & supply chain careers
//
// Total: 30 entries. 0 slug collisions with waves 1-13.

module.exports = [

// ============================================================
// === A. HIGH-DEMAND PROFESSIONAL CAREERS ====================
// ============================================================

{
  slug: "cara-jadi-juruterbang-malaysia", type: "journey", career_id: "pilot",
  keywords: {
    primary: "cara nak jadi pilot Malaysia",
    primary_bm: "cara jadi juruterbang Malaysia 2026",
    longtail_en: ["how to become a pilot in Malaysia", "pilot career path Malaysia 2026", "MAS pilot cadet Malaysia", "AirAsia pilot cadet programme", "pilot licence Malaysia cost"],
    longtail_bm: ["syarat jadi pilot Malaysia", "program kadet juruterbang Malaysia", "kos lesen pilot Malaysia", "juruterbang Malaysia gaji", "laluan kerjaya juruterbang Malaysia 2026"]
  },
  meta: {
    title: "Cara Jadi Juruterbang (Pilot) di Malaysia 2026 — Syarat, Kos & Laluan Kerjaya | MyJourney",
    title_bm: "How to Become a Pilot in Malaysia 2026 — Requirements, Cost & Career Path | MyJourney",
    description: "Full guide to becoming a commercial pilot in Malaysia. Cadet programmes at MAS, AirAsia and Batik Air, the cost of a CPL licence, medical requirements, and realistic salary expectations.",
    description_bm: "Panduan lengkap cara jadi juruterbang komersial di Malaysia. Program kadet, kos lesen CPL, syarat perubatan, dan gaji sebenar juruterbang Malaysia."
  },
  landing: {
    h1_en: "How to Become a Pilot in Malaysia — Full Career Path for 2026",
    h1_bm: "Cara Jadi Juruterbang di Malaysia — Laluan Kerjaya Lengkap 2026",
    intro_en: "Becoming a commercial pilot in Malaysia is one of the most romanticised and genuinely complex career paths a student can pursue. The two main routes are the sponsored cadet programme and the self-funded licence route. Malaysia Airlines (MAS) runs the MAS Academy cadet programme, which selects candidates directly from SPM or A-Level results and sponsors the full cost of training in exchange for a bond period upon completion. AirAsia previously ran its own Academy cadet intake; in 2026 Batik Air Malaysia (formerly Malindo) and Capital A-affiliated carriers are the active cadet recruiters alongside MAS. The self-funded route involves obtaining a Private Pilot Licence (PPL), then a Commercial Pilot Licence (CPL), and eventually an Instrument Rating — the total cost in Malaysia ranges from RM 250,000 to RM 450,000 depending on the flight school and whether training is done locally or overseas (Philippines, Australia, and the US are common destinations). The minimum educational requirement is SPM with at least credit in Mathematics and a science subject, plus passing a strict Class 1 aviation medical examination from the Civil Aviation Authority of Malaysia (CAAM). Colour blindness is a disqualifier. Starting salary for a first officer at a Malaysian airline is approximately RM 6,000–9,000 per month; captains at MAS and AirAsia can earn RM 20,000–40,000 or more. The global pilot shortage is real and is affecting Malaysian carriers — this is one career where demand is structurally higher than supply. MyJourney maps both the sponsored and self-funded routes with specific timelines.",
    intro_bm: "Terdapat dua laluan utama untuk jadi juruterbang di Malaysia: program kadet tajaan syarikat penerbangan (MAS Academy, Batik Air) dan laluan lesen berbayar sendiri. Laluan berbayar sendiri boleh menelan kos RM 250,000–450,000 untuk PPL + CPL. Syarat minimum: SPM kredit Matematik dan sains, serta lulus pemeriksaan perubatan Kelas 1 CAAM. Gaji ketua juruterbang di MAS dan AirAsia boleh mencapai RM 20,000–40,000 sebulan.",
    cta_en: "See Full Pilot Career Path",
    cta_bm: "Lihat Laluan Kerjaya Juruterbang"
  }
},

{
  slug: "cara-jadi-pakar-keselamatan-siber-malaysia", type: "journey", career_id: "cybersecurity",
  keywords: {
    primary: "cara nak jadi pakar keselamatan siber Malaysia",
    primary_bm: "cara jadi cybersecurity expert Malaysia 2026",
    longtail_en: ["how to become a cybersecurity professional Malaysia", "cybersecurity career path Malaysia 2026", "ethical hacking career Malaysia", "CISSP CEH Malaysia career", "cybersecurity salary Malaysia 2026"],
    longtail_bm: ["syarat jadi pakar keselamatan siber Malaysia", "kerjaya cybersecurity Malaysia 2026", "ethical hacker Malaysia", "sijil keselamatan siber Malaysia", "gaji cybersecurity Malaysia 2026"]
  },
  meta: {
    title: "Cara Jadi Pakar Keselamatan Siber di Malaysia 2026 — Laluan Kerjaya & Sijil | MyJourney",
    title_bm: "How to Become a Cybersecurity Professional in Malaysia 2026 | MyJourney",
    description: "Career guide to becoming a cybersecurity professional in Malaysia. Degree options, key certifications (CEH, CISSP, CompTIA Security+), top employers, and realistic salaries in 2026.",
    description_bm: "Panduan kerjaya keselamatan siber di Malaysia. Pilihan ijazah, sijil utama (CEH, CISSP), majikan terkemuka, dan gaji sebenar 2026."
  },
  landing: {
    h1_en: "How to Become a Cybersecurity Professional in Malaysia — 2026 Career Guide",
    h1_bm: "Cara Jadi Pakar Keselamatan Siber di Malaysia — Panduan Kerjaya 2026",
    intro_en: "Cybersecurity is one of the fastest-growing and most actively recruited fields in Malaysia in 2026. The government's push through CyberSecurity Malaysia, Bank Negara's escalating cybersecurity requirements for financial institutions, and the Madani economy's digital agenda have created genuine and persistent demand for cybersecurity professionals at all levels. Entry paths are more flexible than most technical fields: a degree in Computer Science, Information Technology, or Information Security from UM, UTM, UPM, UiTM, or private institutions like APU and Asia Pacific University provides the strongest foundation. However, cybersecurity is one of the rare fields in Malaysia where industry certifications carry significant weight alongside or even instead of a degree — the Certified Ethical Hacker (CEH), CompTIA Security+, CompTIA Network+, and Certified Information Systems Security Professional (CISSP) are all employer-recognised qualifications. Entry-level cybersecurity roles in Malaysia include SOC analyst (Security Operations Centre), penetration tester, security analyst, and vulnerability assessment roles. Top employers include CyberSecurity Malaysia, Telekom Malaysia, CIMB, Maybank, Axiata, and an increasingly active market of specialist cybersecurity consulting firms. Government roles through NACSA (National Cyber Security Agency) are another avenue. Starting salaries for fresh cybersecurity graduates in Malaysia typically run from RM 3,500–5,000 — meaningfully higher than general IT starting pay — and senior penetration testers and security architects can earn RM 10,000–20,000 or more. MyJourney maps the degree and certification paths into each cybersecurity role type.",
    intro_bm: "Keselamatan siber adalah antara bidang IT yang paling banyak direkrut di Malaysia pada 2026. Laluan masuk termasuk ijazah IT/Sains Komputer dari UM, UTM, atau APU, atau sijil industri seperti CEH dan CompTIA Security+. Majikan utama: CyberSecurity Malaysia, CIMB, Maybank, Telekom, dan NACSA. Gaji permulaan RM 3,500–5,000 — lebih tinggi daripada IT am.",
    cta_en: "See Full Cybersecurity Career Path",
    cta_bm: "Lihat Laluan Kerjaya Keselamatan Siber"
  }
},

{
  slug: "cara-jadi-jurutera-cloud-malaysia", type: "journey", career_id: "cloud-engineer",
  keywords: {
    primary: "cara nak jadi cloud engineer Malaysia",
    primary_bm: "cara jadi jurutera cloud Malaysia 2026",
    longtail_en: ["how to become a cloud engineer in Malaysia", "cloud computing career Malaysia 2026", "AWS Azure GCP career Malaysia", "cloud architect Malaysia salary", "DevOps career path Malaysia"],
    longtail_bm: ["kerjaya cloud computing Malaysia", "AWS Azure Malaysia kerjaya", "jurutera cloud gaji Malaysia 2026", "DevOps Malaysia kerjaya", "sijil cloud Malaysia"]
  },
  meta: {
    title: "Cara Jadi Cloud Engineer di Malaysia 2026 — AWS, Azure, GCP & Laluan Kerjaya | MyJourney",
    title_bm: "How to Become a Cloud Engineer in Malaysia 2026 — Career Path & Certifications | MyJourney",
    description: "Guide to cloud engineering careers in Malaysia. AWS, Azure, and GCP certifications, top cloud employers, DevOps and SRE roles, and salary benchmarks for 2026.",
    description_bm: "Panduan kerjaya jurutera cloud di Malaysia. Sijil AWS, Azure, GCP, majikan cloud terkemuka, peranan DevOps dan SRE, serta gaji 2026."
  },
  landing: {
    h1_en: "How to Become a Cloud Engineer in Malaysia — Career Guide for 2026",
    h1_bm: "Cara Jadi Jurutera Cloud di Malaysia — Panduan Kerjaya 2026",
    intro_en: "Cloud engineering has become one of the highest-paid entry points into the Malaysian tech job market, driven by the rapid adoption of cloud infrastructure across banking, telco, e-commerce, and government sectors. Cloud engineers design, build, and maintain cloud-based systems — in practice this means working with platforms like Amazon Web Services (AWS), Microsoft Azure, or Google Cloud Platform (GCP) to deploy applications, manage infrastructure, and ensure reliability and security. The traditional path into cloud engineering starts with a Computer Science or IT degree, but the field is unusual in that vendor certifications carry genuine market value: the AWS Solutions Architect Associate, AWS DevOps Professional, Azure Administrator (AZ-104), and Google Associate Cloud Engineer certifications are all actively used by Malaysian employers as screening criteria. MDEC-funded cloud reskilling programmes have created pathways into cloud roles without a traditional degree, though competition from CS graduates remains high for the most desirable roles. Key employers in Malaysia include Telekom Malaysia (TM ONE), Maxis, Axiata, the cloud divisions of the Big 4 banks, and the Malaysian operations of AWS, Microsoft, and Google themselves — all of which have growing regional presence in KL. Starting salaries for cloud engineers in Malaysia are typically RM 4,000–6,000 for fresh talent with relevant certifications; senior cloud architects and SREs with five or more years experience earn RM 10,000–20,000+.",
    intro_bm: "Jurutera cloud adalah antara kerjaya IT bergaji paling tinggi di Malaysia. Platform utama: AWS, Azure, GCP. Sijil vendor seperti AWS Solutions Architect dan Azure Administrator diiktiraf majikan Malaysia. Majikan terkemuka: TM ONE, Maxis, bank-bank utama, dan pejabat AWS/Microsoft/Google di KL. Gaji permulaan RM 4,000–6,000.",
    cta_en: "See Full Cloud Engineer Career Path",
    cta_bm: "Lihat Laluan Kerjaya Jurutera Cloud"
  }
},

{
  slug: "cara-jadi-perancang-kewangan-malaysia", type: "journey", career_id: "financial-planner",
  keywords: {
    primary: "cara nak jadi perancang kewangan Malaysia",
    primary_bm: "cara jadi financial planner Malaysia 2026",
    longtail_en: ["how to become a financial planner in Malaysia", "CFP Malaysia career path", "financial planning licence Malaysia", "SC licensed financial planner Malaysia", "financial planner salary Malaysia 2026"],
    longtail_bm: ["syarat jadi perancang kewangan Malaysia", "lesen perancang kewangan Malaysia", "CFP Malaysia", "kerjaya perancang kewangan Malaysia 2026", "gaji perancang kewangan Malaysia"]
  },
  meta: {
    title: "Cara Jadi Perancang Kewangan di Malaysia 2026 — Lesen, CFP & Laluan Kerjaya | MyJourney",
    title_bm: "How to Become a Financial Planner in Malaysia 2026 — Licence, CFP & Career | MyJourney",
    description: "Guide to becoming a licensed financial planner in Malaysia. SC licensing requirements, the CFP designation, career paths in banks, unit trust companies, and independent practice.",
    description_bm: "Panduan jadi perancang kewangan berlesen di Malaysia. Keperluan lesen SC, kelayakan CFP, dan laluan kerjaya di bank, syarikat unit amanah, dan amalan bebas."
  },
  landing: {
    h1_en: "How to Become a Financial Planner in Malaysia — Full Career Guide",
    h1_bm: "Cara Jadi Perancang Kewangan di Malaysia — Panduan Kerjaya Lengkap",
    intro_en: "Financial planning in Malaysia is a regulated profession — you cannot legally provide comprehensive financial advice to clients without the appropriate licence from the Securities Commission Malaysia (SC) or Bank Negara Malaysia (BNM), depending on the products involved. This makes entry into financial planning more structured than many expect. For investment-related advice, you need a Capital Markets Services Representative's Licence (CMSRL) from the SC. For insurance and takaful products, you need a Financial Adviser's Representative (FAR) certification under BNM. For unit trust distribution, a FIMM qualification is required. The Certified Financial Planner (CFP) designation — awarded by the Financial Planning Association of Malaysia (FPAM) — is the gold standard comprehensive qualification that covers all major financial planning domains. The typical path: a Finance, Economics, or Accounting degree, followed by one or more of the regulatory licences, then working toward CFP over two to five years. Most financial planners in Malaysia work within one of three structures: employed by a bank or insurer (selling that institution's products), affiliated with a unit trust or financial advisory firm, or as an independent fee-based financial planner (still uncommon in Malaysia but growing). Income varies enormously — bank-employed financial consultants typically earn RM 3,000–5,000 base plus commission; experienced independent financial planners can earn RM 10,000–30,000+ per month from fees and renewal commissions. The key is building a client base, which takes three to five years of disciplined relationship development.",
    intro_bm: "Perancang kewangan di Malaysia adalah profesion terkawal — anda memerlukan lesen dari SC atau BNM bergantung pada produk yang diliputi. Kelayakan CFP dari FPAM adalah standard emas industri. Pendapatan sangat berbeza: perancang bank earn RM 3,000–5,000 asas + komisen; perancang bebas berpengalaman boleh earn RM 10,000–30,000+ sebulan.",
    cta_en: "See Full Financial Planner Career Path",
    cta_bm: "Lihat Laluan Kerjaya Perancang Kewangan"
  }
},

{
  slug: "cara-jadi-pengurus-hr-malaysia", type: "journey", career_id: "hr-manager",
  keywords: {
    primary: "cara nak jadi HR manager Malaysia",
    primary_bm: "cara jadi pengurus HR Malaysia 2026",
    longtail_en: ["how to become an HR manager in Malaysia", "human resources career Malaysia 2026", "CIPD SHRM Malaysia HR career", "HR degree Malaysia universities", "HR manager salary Malaysia 2026"],
    longtail_bm: ["syarat jadi pengurus sumber manusia Malaysia", "kerjaya HR Malaysia 2026", "ijazah pengurusan HR Malaysia", "gaji HR manager Malaysia", "laluan kerjaya HR Malaysia"]
  },
  meta: {
    title: "Cara Jadi HR Manager di Malaysia 2026 — Ijazah, Kelayakan & Laluan Kerjaya | MyJourney",
    title_bm: "How to Become an HR Manager in Malaysia 2026 — Degree, Qualifications & Career | MyJourney",
    description: "Career guide to becoming an HR manager in Malaysia. Relevant degrees, HRDF and CIPD qualifications, the progression from HR executive to HR manager, and salary benchmarks.",
    description_bm: "Panduan kerjaya pengurus HR di Malaysia. Ijazah berkaitan, kelayakan HRDF dan CIPD, perkembangan dari eksekutif HR ke pengurus, dan penanda aras gaji."
  },
  landing: {
    h1_en: "How to Become an HR Manager in Malaysia — Career Guide for 2026",
    h1_bm: "Cara Jadi Pengurus HR di Malaysia — Panduan Kerjaya 2026",
    intro_en: "Human resources management is one of the more accessible professional career paths in Malaysia for graduates from a range of degree backgrounds — not just those who studied HR directly. While a degree in Human Resource Management, Business Administration, or Psychology from universities like UiTM, UM, UPM, or private institutions is the most direct route, many practising HR managers in Malaysia entered through other business, social science, or even liberal arts degrees and built their HR knowledge on the job. The HR function in Malaysian companies spans several specialisations: talent acquisition (recruiting), compensation and benefits, learning and development, employee relations, and HR business partnering. Entry-level roles are typically HR Executive or HR Officer positions, and progression to HR Manager typically takes four to seven years, usually requiring demonstrated generalist competency and in larger organisations a specific domain of expertise. Professional development is supported through HRDC (Human Resource Development Corporation, formerly HRDF) and internationally through CIPD (UK-based) or SHRM (US-based) certifications, both of which are increasingly valued by larger Malaysian corporations and MNCs. HR managers in Malaysia typically earn RM 5,000–9,000 per month at the mid-level; senior HR managers and HR directors at large corporations earn RM 12,000–25,000+. The function has been growing in strategic importance in Malaysian companies — HR is no longer purely administrative, particularly in tech, banking, and professional services firms.",
    intro_bm: "Pengurus HR boleh dicapai dari pelbagai latar belakang ijazah — bukan sahaja HR secara langsung. Peranan entry-level biasanya Eksekutif HR, kemudian naik ke Pengurus HR dalam 4–7 tahun. Sijil CIPD atau SHRM meningkatkan daya saing. Gaji pengurus HR Malaysia RM 5,000–9,000 sebulan; pengurus kanan RM 12,000–25,000+.",
    cta_en: "See Full HR Manager Career Path",
    cta_bm: "Lihat Laluan Kerjaya Pengurus HR"
  }
},

{
  slug: "cara-jadi-ejen-hartanah-malaysia", type: "journey", career_id: "property-agent",
  keywords: {
    primary: "cara nak jadi ejen hartanah Malaysia",
    primary_bm: "cara jadi ejen hartanah Malaysia 2026",
    longtail_en: ["how to become a property agent in Malaysia", "real estate agent licence Malaysia", "BOVAEA Malaysia registration", "property negotiator Malaysia", "real estate career Malaysia salary"],
    longtail_bm: ["syarat jadi ejen hartanah Malaysia", "lesen ejen hartanah Malaysia", "pendaftaran BOVAEA Malaysia", "negotiator hartanah Malaysia", "gaji ejen hartanah Malaysia 2026"]
  },
  meta: {
    title: "Cara Jadi Ejen Hartanah di Malaysia 2026 — Lesen BOVAEA & Laluan Kerjaya | MyJourney",
    title_bm: "How to Become a Property Agent in Malaysia 2026 — BOVAEA Licence & Career | MyJourney",
    description: "How to become a licensed real estate agent in Malaysia. BOVAEA registration, the difference between a negotiator and a registered agent, exam requirements, and realistic earnings.",
    description_bm: "Cara jadi ejen hartanah berlesen di Malaysia. Pendaftaran BOVAEA, perbezaan antara negotiator dan ejen berdaftar, keperluan peperiksaan, dan pendapatan sebenar."
  },
  landing: {
    h1_en: "How to Become a Property Agent in Malaysia — Licensing and Career Guide",
    h1_bm: "Cara Jadi Ejen Hartanah di Malaysia — Panduan Lesen dan Kerjaya",
    intro_en: "The property agent career in Malaysia has one of the lowest formal entry barriers of any professional career — but building a sustainable income from it takes longer and requires more resilience than most students realise. The regulatory body is the Board of Valuers, Appraisers, Estate Agents and Property Managers (BOVAEA). There are two tiers: a Registered Estate Agent (REA), who is a fully licensed professional, and a Real Estate Negotiator (REN), who works under the supervision of a registered agent. Most people enter as a REN first. To become a REN, you register through an established real estate agency (IQI, PropNex, CBRE WTW, Rahim & Co, etc.), pay a registration fee, obtain a REN tag from BOVAEA, and complete a one-day Negotiator Certification Course (NCC). There is no degree requirement for REN registration. To become a fully Registered Estate Agent, you need either a recognised degree in Estate Management or Real Estate, or to pass the BOVAEA exams after working as a REN for a qualifying period. The income model is almost entirely commission-based — RENs typically earn 30–50% of the commission their transactions generate for the agency. In a good month during an active property market, a productive REN in KL can earn RM 5,000–15,000+; in slow months, income can drop to near zero. The feast-or-famine nature of commission income is the biggest adjustment for new agents — it takes most people 6–12 months to close their first few transactions and build a consistent referral pipeline.",
    intro_bm: "Untuk jadi Negotiator Hartanah (REN) di Malaysia, daftar dengan agensi hartanah berlesen, bayar yuran, dan hadiri Negotiator Certification Course (NCC) satu hari. Tiada keperluan ijazah untuk REN. Pendapatan berasaskan komisen sepenuhnya — REN produktif di KL boleh earn RM 5,000–15,000+ sebulan dalam bulan aktif, tetapi pendapatan tidak tetap.",
    cta_en: "See Full Property Agent Career Path",
    cta_bm: "Lihat Laluan Kerjaya Ejen Hartanah"
  }
},

{
  slug: "cara-jadi-ahli-dietitik-malaysia", type: "journey", career_id: "dietitian",
  keywords: {
    primary: "cara nak jadi ahli dietitik Malaysia",
    primary_bm: "cara jadi dietitian Malaysia 2026",
    longtail_en: ["how to become a dietitian in Malaysia", "dietetics degree Malaysia universities", "nutritionist vs dietitian Malaysia", "MDA dietitian registration Malaysia", "dietitian salary Malaysia 2026"],
    longtail_bm: ["syarat jadi dietitian Malaysia", "universiti dietitik Malaysia", "nutrisionis vs dietitian Malaysia", "pendaftaran MDA Malaysia", "gaji ahli dietitik Malaysia 2026"]
  },
  meta: {
    title: "Cara Jadi Ahli Dietitik di Malaysia 2026 — Ijazah, Pendaftaran MDA & Kerjaya | MyJourney",
    title_bm: "How to Become a Dietitian in Malaysia 2026 — Degree, MDA Registration & Career | MyJourney",
    description: "Guide to becoming a registered dietitian in Malaysia. Dietetics degree universities, the difference between a dietitian and a nutritionist, MDA registration, and career options.",
    description_bm: "Panduan cara jadi ahli dietitik berdaftar di Malaysia. Universiti dietitik, perbezaan dietitian dan nutrisionis, pendaftaran MDA, dan pilihan kerjaya."
  },
  landing: {
    h1_en: "How to Become a Dietitian in Malaysia — Career Guide for 2026",
    h1_bm: "Cara Jadi Ahli Dietitik di Malaysia — Panduan Kerjaya 2026",
    intro_en: "Dietitian is a protected professional title in Malaysia — you need a recognised degree and registration with the Malaysian Dietitians' Association (MDA) to use it and to practise clinical dietetics. This is distinct from 'nutritionist', which is an unprotected title that anyone can use regardless of qualifications. In practice, this means the dietitian career has a clear, defined entry path while nutritionist roles vary enormously in rigour. Recognised dietetics degree programmes in Malaysia are offered at UPM (Universiti Putra Malaysia — one of the most established), UiTM, AIMST University, and a small number of other institutions. The degree typically runs four years and includes supervised clinical placements in hospitals. After graduating from an accredited programme, you apply for MDA registration before practising. Career paths for Malaysian dietitians fall into three main tracks: clinical dietetics in government hospitals (Kementerian Kesihatan Malaysia employs the largest number of dietitians in the country), clinical dietetics in private hospitals, and community and corporate nutrition — working with food companies, the fitness industry, or public health agencies. The growing awareness of diabetes, obesity, and non-communicable diseases in Malaysia is creating steady demand for dietitian services, particularly in primary healthcare settings. Starting salary for a government dietitian is approximately RM 2,800–3,500 per month; private hospital and corporate dietitians often earn more. The field is relatively small in Malaysia — MDA has fewer than 1,000 registered members — which means individual practitioners are well-known and professional networks are tight.",
    intro_bm: "Ahli dietitik adalah gelaran profesional yang dilindungi di Malaysia — memerlukan ijazah dietitik yang diiktiraf dan pendaftaran MDA. Ini berbeza dengan 'nutrisionis' yang tidak dilindungi. Universiti yang menawarkan program dietitik termasuk UPM dan UiTM. Laluan kerjaya utama: hospital kerajaan KKM, hospital swasta, dan pemakanan korporat.",
    cta_en: "See Full Dietitian Career Path",
    cta_bm: "Lihat Laluan Kerjaya Ahli Dietitik"
  }
},

{
  slug: "cara-jadi-ux-designer-malaysia", type: "journey", career_id: "ux-designer",
  keywords: {
    primary: "cara nak jadi UX designer Malaysia",
    primary_bm: "cara jadi UX designer Malaysia 2026",
    longtail_en: ["how to become a UX designer in Malaysia", "UI UX career path Malaysia 2026", "UX design bootcamp Malaysia", "product designer Malaysia career", "UX designer salary Malaysia 2026"],
    longtail_bm: ["kerjaya UX designer Malaysia 2026", "UI UX design Malaysia", "bootcamp UX design Malaysia", "gaji UX designer Malaysia", "cara belajar UX design Malaysia"]
  },
  meta: {
    title: "Cara Jadi UX Designer di Malaysia 2026 — Laluan Masuk, Portfolio & Gaji | MyJourney",
    title_bm: "How to Become a UX Designer in Malaysia 2026 — Entry Path, Portfolio & Salary | MyJourney",
    description: "Career guide to UX design in Malaysia. Formal degree vs bootcamp routes, portfolio building, tools (Figma), top tech and fintech employers hiring UX designers, and 2026 salaries.",
    description_bm: "Panduan kerjaya UX design di Malaysia. Ijazah vs bootcamp, pembinaan portfolio, alatan (Figma), majikan tech dan fintech terkemuka, dan gaji 2026."
  },
  landing: {
    h1_en: "How to Become a UX Designer in Malaysia — Career Guide for 2026",
    h1_bm: "Cara Jadi UX Designer di Malaysia — Panduan Kerjaya 2026",
    intro_en: "UX (User Experience) design is one of the few creative-technical careers in Malaysia where a non-traditional entry path — bootcamp, self-study, and portfolio — is genuinely competitive with a formal degree. Demand from tech companies, banks undergoing digital transformation, fintech startups, e-commerce platforms, and government digital agencies has grown fast enough that employers are largely evaluating candidates on portfolio quality and problem-solving ability rather than degree subject. That said, a degree in Interaction Design, Visual Communication, Multimedia, or Computer Science with a design focus from institutions like Limkokwing, INTI, Taylor's, or the digital design programmes at UiTM and MMU provides a structured learning environment and industry connections that bootcamps cannot fully replicate. The core tools for the Malaysian UX job market in 2026 are Figma (dominant), FigJam, Protopie for advanced prototyping, and basic familiarity with design systems and accessibility standards. A portfolio of three to five case studies — showing the full research-to-design process, not just final screens — is the non-negotiable requirement for any junior UX role. Top UX employers in Malaysia include Grab, Shopee, AirAsia, CIMB Bank, Maybank, GXBank, and a growing number of well-funded startups in the KL ecosystem. Starting salaries for junior UX designers in Malaysia range from RM 2,500–4,000 at agencies to RM 3,500–5,500 at product companies. Senior UX designers and product designers at tech companies earn RM 7,000–15,000+.",
    intro_bm: "UX design di Malaysia boleh dicapai melalui ijazah reka bentuk atau bootcamp/belajar sendiri — portfolio adalah penentu utama. Alatan utama: Figma. Portfolio 3–5 kajian kes yang menunjukkan proses penyelidikan hingga reka bentuk adalah wajib. Majikan terkemuka: Grab, Shopee, GXBank, CIMB. Gaji permulaan RM 2,500–5,500.",
    cta_en: "See Full UX Designer Career Path",
    cta_bm: "Lihat Laluan Kerjaya UX Designer"
  }
},

{
  slug: "cara-jadi-jurutera-petroleum-malaysia", type: "journey", career_id: "engineer-petro",
  keywords: {
    primary: "cara nak jadi jurutera petroleum Malaysia",
    primary_bm: "cara jadi petroleum engineer Malaysia 2026",
    longtail_en: ["how to become a petroleum engineer in Malaysia", "petroleum engineering degree Malaysia", "Petronas career petroleum engineer", "oil gas engineer Malaysia 2026", "petroleum engineer salary Malaysia"],
    longtail_bm: ["syarat jadi jurutera petroleum Malaysia", "ijazah kejuruteraan petroleum Malaysia", "kerjaya Petronas jurutera", "gaji jurutera petroleum Malaysia 2026", "UTP petroleum engineering Malaysia"]
  },
  meta: {
    title: "Cara Jadi Jurutera Petroleum di Malaysia 2026 — UTP, Petronas & Laluan Kerjaya | MyJourney",
    title_bm: "How to Become a Petroleum Engineer in Malaysia 2026 — UTP, Petronas & Career | MyJourney",
    description: "Guide to petroleum engineering in Malaysia. UTP and other petroleum engineering universities, Petronas and oil and gas employer pathways, and salary expectations in 2026.",
    description_bm: "Panduan kejuruteraan petroleum di Malaysia. UTP dan universiti lain, laluan kerjaya Petronas dan syarikat minyak dan gas, serta jangkaan gaji 2026."
  },
  landing: {
    h1_en: "How to Become a Petroleum Engineer in Malaysia — Career Guide for 2026",
    h1_bm: "Cara Jadi Jurutera Petroleum di Malaysia — Panduan Kerjaya 2026",
    intro_en: "Malaysia's petroleum industry — centred on Petronas and the upstream operators working in Malaysian waters — remains one of the highest-paying destinations for engineering graduates in the country, despite the energy transition narrative. Petroleum engineering is the most directly relevant discipline, but the industry also recruits chemical, mechanical, and electrical engineers into technical roles. For petroleum engineering specifically, Universiti Teknologi PETRONAS (UTP) in Perak is the primary local institution, producing the majority of petroleum engineers working in Malaysian oil and gas. UTP has a well-established relationship with Petronas and the wider upstream industry that makes its graduates highly sought after. Other options include UTM (chemical engineering with oil and gas modules) and overseas programmes in the UK and Australia. The Petronas Graduate Programme is the most prestigious entry point — highly competitive, structured, and well-compensated. Other upstream employers include Shell Sarawak (SMDS), ExxonMobil, Murphy Oil, and the growing number of independent E&P companies operating in Sarawak and Sabah. Service company roles at Schlumberger (SLB), Halliburton, and Baker Hughes offer alternative entry points with strong training programmes. Starting salary for a petroleum engineering graduate at Petronas or a major operator is typically RM 4,000–6,500; mid-career engineers with ten years experience earn RM 12,000–25,000+. The energy transition is creating new roles in carbon capture, offshore wind, and gas-to-power — petroleum engineers are increasingly working across these adjacent areas.",
    intro_bm: "Jurutera petroleum di Malaysia kebanyakannya bekerja dengan Petronas, Shell Sarawak, ExxonMobil, dan syarikat perkhidmatan seperti Schlumberger. UTP adalah universiti utama untuk kejuruteraan petroleum. Gaji permulaan RM 4,000–6,500 di operator besar; jurutera pertengahan kerjaya earn RM 12,000–25,000+.",
    cta_en: "See Full Petroleum Engineer Career Path",
    cta_bm: "Lihat Laluan Kerjaya Jurutera Petroleum"
  }
},

{
  slug: "cara-jadi-usahawan-malaysia", type: "journey", career_id: "entrepreneur",
  keywords: {
    primary: "cara nak jadi usahawan berjaya Malaysia",
    primary_bm: "cara jadi entrepreneur Malaysia 2026",
    longtail_en: ["how to become an entrepreneur in Malaysia 2026", "starting a business Malaysia guide", "SME grant Malaysia 2026", "Cradle fund Malaysia startup", "young entrepreneur Malaysia"],
    longtail_bm: ["cara mulakan perniagaan Malaysia", "geran SME Malaysia 2026", "usahawan muda Malaysia", "dana Cradle Malaysia", "startup Malaysia 2026 cara mula"]
  },
  meta: {
    title: "Cara Jadi Usahawan Berjaya di Malaysia 2026 — Panduan Mula, Geran & Ekosistem | MyJourney",
    title_bm: "How to Become an Entrepreneur in Malaysia 2026 — Startup Guide, Grants & Ecosystem | MyJourney",
    description: "Practical guide to entrepreneurship in Malaysia. Business registration, available grants (SME Corp, Cradle, MARA, MDEC), the startup ecosystem in KL, and what distinguishes successful Malaysian entrepreneurs.",
    description_bm: "Panduan praktikal keusahawanan di Malaysia. Pendaftaran perniagaan, geran tersedia (SME Corp, Cradle, MARA, MDEC), ekosistem startup KL, dan apa yang membezakan usahawan Malaysia berjaya."
  },
  landing: {
    h1_en: "How to Become an Entrepreneur in Malaysia — A Practical Guide for 2026",
    h1_bm: "Cara Jadi Usahawan di Malaysia 2026 — Panduan Praktikal",
    intro_en: "Entrepreneurship in Malaysia is both more supported and more challenging than it looks from the outside. The government has built an extensive ecosystem of support: Cradle Fund for early-stage technology startups, MDEC's Digital Economy programmes, SME Corporation for established SMEs, MARA's entrepreneurship programmes for bumiputera founders, and various angel investor networks and accelerators based in KL Sentral and Bangsar South. Registering a business in Malaysia is genuinely straightforward — a Sdn. Bhd. (private limited company) can be incorporated through SSM (Suruhanjaya Syarikat Malaysia) within a day or two, with a minimum paid-up capital of RM 1. The harder parts are what most entrepreneurship guides skip: finding a genuinely underserved problem, building early customers before you have a polished product, managing cash flow through the first eighteen months, and staying motivated through the extended period before revenue becomes predictable. Malaysian entrepreneurs who have built durable businesses — in e-commerce, food and beverage, professional services, manufacturing, and increasingly in tech — tend to share a few traits: deep knowledge of a specific customer segment, willingness to start small and validate before scaling, and the ability to recruit and retain good people even when the company cannot yet pay market rates. The failure rate for new businesses in Malaysia mirrors global patterns — most do not survive beyond three years. But the support infrastructure in 2026 is meaningfully better than it was a decade ago, and the domestic market of 33 million people with growing middle-class purchasing power provides real opportunity. MyJourney maps the entrepreneurship pathway with specific resources and honest stage-by-stage guidance.",
    intro_bm: "Ekosistem keusahawanan Malaysia menawarkan sokongan melalui Cradle Fund (startup tech), MDEC, SME Corp, dan MARA (usahawan bumiputera). Mendaftar Sdn. Bhd. di SSM boleh siap dalam sehari. Cabaran sebenar: cari masalah yang belum diselesaikan, bina pelanggan awal, dan urus aliran tunai dalam 18 bulan pertama.",
    cta_en: "Explore the Entrepreneur Path on MyJourney",
    cta_bm: "Terokai Laluan Usahawan di MyJourney"
  }
},

// ============================================================
// === B. GOVERNMENT & UNIFORMED SERVICES =====================
// ============================================================

{
  slug: "cara-jadi-pegawai-polis-malaysia", type: "journey", career_id: "police-officer",
  keywords: {
    primary: "cara nak jadi pegawai polis Malaysia",
    primary_bm: "cara jadi polis Malaysia 2026",
    longtail_en: ["how to join the police Malaysia", "PDRM officer application Malaysia 2026", "police inspector Malaysia requirements", "IPD Malaysia application", "police salary Malaysia 2026"],
    longtail_bm: ["cara masuk polis Malaysia", "permohonan pegawai PDRM 2026", "syarat jadi polis Malaysia", "gaji polis Malaysia 2026", "inspektor polis Malaysia"]
  },
  meta: {
    title: "Cara Jadi Pegawai Polis di Malaysia 2026 — Syarat PDRM, Proses & Gaji | MyJourney",
    title_bm: "How to Join PDRM Malaysia 2026 — Police Officer Requirements, Process & Salary | MyJourney",
    description: "Guide to joining PDRM as a police officer in Malaysia. Inspector vs constable entry routes, physical and academic requirements, the application process, and salary scales.",
    description_bm: "Panduan menyertai PDRM sebagai pegawai polis di Malaysia. Laluan masuk Inspektor vs Konstabel, syarat fizikal dan akademik, proses permohonan, dan gaji."
  },
  landing: {
    h1_en: "How to Become a Police Officer in Malaysia — PDRM Career Guide for 2026",
    h1_bm: "Cara Jadi Pegawai Polis di Malaysia — Panduan Kerjaya PDRM 2026",
    intro_en: "PDRM (Polis Diraja Malaysia) recruits through two distinct entry routes: the Inspector route (for degree holders entering as commissioned officers) and the Constable/Corporal route (for SPM leavers entering as non-commissioned ranks). For graduates, the Inspector Cadet Programme is the most relevant entry point — candidates apply through the SPA (Suruhanjaya Perkhidmatan Awam) erekrut portal, sit a written exam, and if selected proceed to a structured selection process including physical fitness tests, medical examination, and panel interview. Physical requirements for police entry in Malaysia include a minimum height of 160cm for males (150cm females), with specific fitness tests assessed during the selection process. Academic requirements for the Inspector route are a degree in any field from a recognised university. Specialist tracks exist for graduates with relevant degrees — law graduates can enter the Legal department, medical graduates into the Medical Unit, and so on. PDRM offers significant job security, a structured promotion pathway, and pension benefits under the public service scheme. Starting salary for a fresh Inspector Cadet is approximately RM 2,500–3,500 per month, rising with promotion. Senior officers at the rank of Superintendent and above earn considerably more, particularly with specialist posting allowances. Aside from regular police work, PDRM also has specialist units including the Special Branch (intelligence), CID, commercial crime, narcotics, and counter-terrorism. MyJourney maps both the Inspector and Constable entry routes with specific requirements.",
    intro_bm: "PDRM merekrut melalui dua laluan: Inspektor (untuk graduan, melalui portal erekrut SPA) dan Konstabel (untuk lepasan SPM). Syarat fizikal: tinggi minimum 160cm (lelaki), 150cm (wanita). Gaji permulaan Inspektor Kadet sekitar RM 2,500–3,500 sebulan dengan faedah pencen perkhidmatan awam.",
    cta_en: "See Full Police Officer Career Path",
    cta_bm: "Lihat Laluan Kerjaya Pegawai Polis"
  }
},

{
  slug: "cara-jadi-pegawai-tentera-malaysia", type: "journey", career_id: "military-officer",
  keywords: {
    primary: "cara nak jadi pegawai tentera Malaysia",
    primary_bm: "cara jadi pegawai ATM Malaysia 2026",
    longtail_en: ["how to join the Malaysian army as an officer", "ATM officer application Malaysia 2026", "Kadet Pegawai Tentera Malaysia", "military officer requirements Malaysia", "army officer salary Malaysia 2026"],
    longtail_bm: ["cara masuk tentera Malaysia sebagai pegawai", "permohonan pegawai ATM 2026", "syarat jadi pegawai tentera Malaysia", "gaji pegawai tentera Malaysia", "UPNM Malaysia"]
  },
  meta: {
    title: "Cara Jadi Pegawai Tentera (ATM) di Malaysia 2026 — Syarat, UPNM & Proses | MyJourney",
    title_bm: "How to Become a Military Officer in Malaysia 2026 — ATM Requirements, UPNM & Process | MyJourney",
    description: "Guide to becoming a commissioned officer in the Malaysian Armed Forces (ATM). UPNM direct entry, SPA officer cadet routes, physical requirements, and career progression in the Army, Navy, and Air Force.",
    description_bm: "Panduan jadi pegawai komisen dalam Angkatan Tentera Malaysia (ATM). Masuk terus UPNM, laluan kadet pegawai SPA, syarat fizikal, dan perkembangan kerjaya dalam Tentera Darat, Laut, dan Udara."
  },
  landing: {
    h1_en: "How to Become a Military Officer in Malaysia — ATM Career Guide for 2026",
    h1_bm: "Cara Jadi Pegawai Tentera (ATM) di Malaysia — Panduan Kerjaya 2026",
    intro_en: "The Malaysian Armed Forces (Angkatan Tentera Malaysia, or ATM) comprises three services — Tentera Darat Malaysia (Army), Tentera Laut Diraja Malaysia (Navy, TLDM), and Tentera Udara Diraja Malaysia (Air Force, TUDM) — each with officer and enlisted ranks. Entry as a commissioned officer follows two main routes. The first and most structured is through Universiti Pertahanan Nasional Malaysia (UPNM) in Sungai Besi, Kuala Lumpur — Malaysia's dedicated defence university that produces the majority of military officers across all three services. Admission to UPNM follows SPM results, physical fitness assessment, and an aptitude evaluation; successful candidates complete a four-year degree programme integrated with officer cadet training. The second route is through direct officer cadet recruitment for graduates who already hold a degree — these are advertised periodically through SPA and the individual service recruitment portals. Specialist officers — medical, legal, engineering, chaplaincy — are recruited directly from relevant professionals. Physical requirements are strict: candidates must pass fitness tests involving running, push-ups, and sit-ups to ATM standards. Malaysian military officers enjoy comprehensive benefits including accommodation allowances, medical coverage, retirement pension after 20+ years of service, and various rank-based allowances. Officer starting pay in the lower commissioned ranks (Lieutenant/Leftenan) is approximately RM 2,800–4,000 per month; Colonels and above earn significantly more with allowances. Service life involves potential postings across Peninsular Malaysia, Sabah, Sarawak, and UN peacekeeping missions abroad.",
    intro_bm: "Laluan utama jadi pegawai ATM: belajar di UPNM (Sungai Besi, KL) dalam program 4 tahun yang menggabungkan ijazah dan latihan kadet, ATAU rekrut langsung untuk graduan melalui portal SPA. Faedah: elaun tempat tinggal, perlindungan perubatan, dan pencen selepas 20+ tahun berkhidmat.",
    cta_en: "See Full Military Officer Career Path",
    cta_bm: "Lihat Laluan Kerjaya Pegawai Tentera"
  }
},

{
  slug: "cara-jadi-pegawai-kastam-malaysia", type: "journey", career_id: "customs-officer",
  keywords: {
    primary: "cara nak jadi pegawai kastam Malaysia",
    primary_bm: "cara jadi pegawai kastam JKDM Malaysia 2026",
    longtail_en: ["how to become a customs officer Malaysia", "JKDM officer application Malaysia 2026", "customs and excise Malaysia career", "pegawai kastam degree requirement", "customs officer salary Malaysia 2026"],
    longtail_bm: ["cara masuk kastam Malaysia", "permohonan pegawai JKDM 2026", "syarat pegawai kastam Malaysia", "gaji pegawai kastam Malaysia", "kerjaya kastam Malaysia"]
  },
  meta: {
    title: "Cara Jadi Pegawai Kastam (JKDM) di Malaysia 2026 — Syarat & Proses Permohonan | MyJourney",
    title_bm: "How to Become a Customs Officer in Malaysia 2026 — JKDM Requirements & Application | MyJourney",
    description: "Guide to joining JKDM (Jabatan Kastam Diraja Malaysia) as a customs officer. Degree vs SPM entry routes, application through SPA, physical requirements, and salary scales.",
    description_bm: "Panduan menyertai JKDM sebagai pegawai kastam. Laluan masuk ijazah vs SPM, permohonan melalui SPA, syarat fizikal, dan skala gaji."
  },
  landing: {
    h1_en: "How to Become a Customs Officer in Malaysia — JKDM Career Guide",
    h1_bm: "Cara Jadi Pegawai Kastam di Malaysia — Panduan Kerjaya JKDM",
    intro_en: "Jabatan Kastam Diraja Malaysia (JKDM) is the royal customs agency responsible for collecting customs duties, excise duties, and GST/sales tax, as well as enforcing trade controls at Malaysian borders, ports, and airports. Career entry into JKDM follows the standard Malaysian civil service pathway through SPA (Suruhanjaya Perkhidmatan Awam). The officer grade (Grade W41 and above) requires a degree in any discipline — law, accounting, business, economics, and related fields are most directly applicable to customs work but are not mandatory. The assistant officer and customs inspector routes are open to SPM leavers. Applications are made through the SPA erekrut portal, and shortlisted candidates typically go through a written exam, group assessment, and medical examination. Customs officers in Malaysia are posted across entry points — KLIA, Port Klang, Penang Port, Johor Bahru customs checkpoints, and the land borders with Thailand — which means postings can be outside your home state. Specialist career tracks within JKDM include the Anti-Smuggling Unit (enforcement), Tax Audit, and the Customs Intelligence division. Salary for an officer-grade customs officer in Malaysia follows the government service pay scale — starting at around RM 2,500–3,200 per month at Grade W41, with structured annual increments and promotion ladders. The retirement pension and comprehensive benefits package are significant compensations compared to private sector equivalents at the same gross salary.",
    intro_bm: "Jabatan Kastam Diraja Malaysia (JKDM) merekrut pegawai melalui portal SPA erekrut. Gred Pegawai (W41 ke atas) memerlukan ijazah dalam mana-mana bidang. Pemohon akan melalui peperiksaan bertulis, penilaian kumpulan, dan pemeriksaan perubatan. Posting boleh di KLIA, Port Klang, atau sempadan darat. Gaji permulaan sekitar RM 2,500–3,200 sebulan dengan faedah pencen.",
    cta_en: "See Full Customs Officer Career Path",
    cta_bm: "Lihat Laluan Kerjaya Pegawai Kastam"
  }
},

{
  slug: "cara-jadi-pegawai-diplomatik-malaysia", type: "journey", career_id: "diplomat",
  keywords: {
    primary: "cara nak jadi diplomat Malaysia",
    primary_bm: "cara jadi pegawai diplomatik Malaysia 2026",
    longtail_en: ["how to become a diplomat in Malaysia", "Wisma Putra officer application Malaysia", "foreign service Malaysia career", "PTD diplomat route Malaysia", "diplomat salary Malaysia 2026"],
    longtail_bm: ["cara masuk perkhidmatan luar negara Malaysia", "permohonan pegawai Wisma Putra", "kerjaya diplomatik Malaysia", "PTD peluang diplomat Malaysia", "gaji diplomat Malaysia"]
  },
  meta: {
    title: "Cara Jadi Diplomat di Malaysia 2026 — Wisma Putra, PTD & Laluan Kerjaya | MyJourney",
    title_bm: "How to Become a Diplomat in Malaysia 2026 — Wisma Putra, PTD & Career Path | MyJourney",
    description: "Guide to a diplomatic career in Malaysia. The Wisma Putra foreign service route, the PTD pathway into diplomatic postings, degree requirements, and what the job actually involves.",
    description_bm: "Panduan kerjaya diplomatik di Malaysia. Laluan perkhidmatan luar Wisma Putra, laluan PTD, keperluan ijazah, dan apa sebenarnya kerja seorang diplomat."
  },
  landing: {
    h1_en: "How to Become a Diplomat in Malaysia — Career Guide for 2026",
    h1_bm: "Cara Jadi Diplomat di Malaysia — Panduan Kerjaya 2026",
    intro_en: "A diplomatic career in Malaysia goes through the Ministry of Foreign Affairs (Wisma Putra) and is one of the most competitive entry points in the Malaysian civil service. There are two main routes. The first is the Foreign Service Officer (FSO) track — a dedicated diplomatic stream with postings to Malaysian embassies and high commissions abroad. FSO positions are recruited through SPA and require a strong degree (international relations, law, economics, political science, and languages are most relevant) and typically very strong results at the written examination and interview stages. Language proficiency — at minimum strong English and ideally proficiency in Arabic, Mandarin, French, or another language — is an advantage. The second route is through the PTD (Pegawai Tadbir dan Diplomatik) general administrative service, a large category within the Malaysian civil service that includes postings to Wisma Putra and therefore potential diplomatic assignments alongside non-diplomatic administrative postings across all ministries. The PTD route is marginally more accessible but does not guarantee a diplomatic posting. In practice, Malaysian diplomats spend their careers alternating between postings abroad (typically 2–3 year postings at embassies, high commissions, or permanent missions at the UN and ASEAN) and home postings at Wisma Putra HQ in Putrajaya. The work covers bilateral relations, trade facilitation, consular services for Malaysians abroad, and multilateral negotiations. Salary follows the government service scale — starting around RM 2,800–4,000 for officer grade, with overseas posting allowances that can significantly supplement income during international assignments.",
    intro_bm: "Kerjaya diplomatik Malaysia melalui Kementerian Luar Negeri (Wisma Putra) melalui dua laluan: Pegawai Perkhidmatan Luar (FSO) yang khusus untuk diplomat, atau PTD umum yang mungkin mendapat penempatan diplomatik. Laluan FSO amat kompetitif. Diplomat bertukar antara penempatan luar negara (2–3 tahun) dan berkhidmat di HQ Putrajaya.",
    cta_en: "See Full Diplomat Career Path",
    cta_bm: "Lihat Laluan Kerjaya Pegawai Diplomatik"
  }
},

{
  slug: "cara-jadi-pekerja-sosial-malaysia", type: "journey", career_id: "social-worker",
  keywords: {
    primary: "cara nak jadi pekerja sosial Malaysia",
    primary_bm: "cara jadi pekerja sosial Malaysia 2026",
    longtail_en: ["how to become a social worker in Malaysia", "social work degree Malaysia universities", "JKM social worker Malaysia", "MIMSW Malaysia social work", "social worker salary Malaysia 2026"],
    longtail_bm: ["syarat jadi pekerja sosial Malaysia", "universiti kerja sosial Malaysia", "pekerja sosial JKM Malaysia", "gaji pekerja sosial Malaysia", "kerjaya kerja sosial Malaysia 2026"]
  },
  meta: {
    title: "Cara Jadi Pekerja Sosial di Malaysia 2026 — Ijazah, Pendaftaran & Kerjaya | MyJourney",
    title_bm: "How to Become a Social Worker in Malaysia 2026 — Degree, Registration & Career | MyJourney",
    description: "Guide to social work careers in Malaysia. Social work degree universities, registration with MIMSW, JKM and NGO career paths, and realistic salary expectations.",
    description_bm: "Panduan kerjaya kerja sosial di Malaysia. Universiti ijazah kerja sosial, pendaftaran MIMSW, laluan kerjaya JKM dan NGO, serta gaji sebenar."
  },
  landing: {
    h1_en: "How to Become a Social Worker in Malaysia — Career Guide for 2026",
    h1_bm: "Cara Jadi Pekerja Sosial di Malaysia — Panduan Kerjaya 2026",
    intro_en: "Social work in Malaysia is a profession that is growing in formal recognition but still underrepresented relative to the country's needs. Practising social workers in Malaysia work across child welfare, elderly care, disability services, domestic abuse support, addiction rehabilitation, and community development. The formal professional body is the Malaysian Institute of Social Work (MIMSW), which is working toward mandatory registration for all practising social workers — as of 2026 this is not yet fully enforced but is increasingly expected by government agencies and reputable NGOs. The main degree route is a Bachelor of Social Work from universities including UM, UiTM, UPM, Universiti Malaysia Sabah, and several private institutions. The degree includes supervised fieldwork placements as a core component. Career tracks split between the government sector — primarily Jabatan Kebajikan Masyarakat (JKM), Malaysia's social welfare department, which employs the largest number of social workers in the country — and the NGO sector, which includes organisations like Shelter Home, Lighthouse Children's Home, and various community-based organisations. JKM social workers are civil servants on the government pay scale, starting around RM 2,200–2,800 per month. NGO sector salaries are often lower but the work may be more directly impactful in specific areas. The profession in Malaysia faces a real challenge: caseloads are frequently very high relative to staffing, and burnout is a documented issue. It is a career that requires genuine commitment to the mission beyond the financial reward.",
    intro_bm: "Pekerja sosial di Malaysia bekerja dalam kebajikan kanak-kanak, penjagaan warga emas, perkhidmatan OKU, dan pembangunan komuniti. Badan profesional: MIMSW. Majikan terbesar: Jabatan Kebajikan Masyarakat (JKM). Gaji pegawai JKM bermula sekitar RM 2,200–2,800 sebulan. NGO mungkin bayar lebih rendah tetapi kerja lebih langsung.",
    cta_en: "See Full Social Worker Career Path",
    cta_bm: "Lihat Laluan Kerjaya Pekerja Sosial"
  }
},

// ============================================================
// === C. CREATIVE & TECHNICAL TRADES =========================
// ============================================================

{
  slug: "cara-jadi-animator-malaysia", type: "journey", career_id: "animator",
  keywords: {
    primary: "cara nak jadi animator Malaysia",
    primary_bm: "cara jadi animator Malaysia 2026",
    longtail_en: ["how to become an animator in Malaysia", "animation degree Malaysia universities", "Wau Animation Les Copaque Malaysia", "2D 3D animator Malaysia career", "animator salary Malaysia 2026"],
    longtail_bm: ["syarat jadi animator Malaysia", "universiti animasi Malaysia", "kerjaya animasi Malaysia 2026", "animator 2D 3D Malaysia", "gaji animator Malaysia"]
  },
  meta: {
    title: "Cara Jadi Animator di Malaysia 2026 — Ijazah, Studio & Laluan Kerjaya | MyJourney",
    title_bm: "How to Become an Animator in Malaysia 2026 — Degree, Studios & Career Path | MyJourney",
    description: "Career guide to animation in Malaysia. Animation degree options, Malaysia's top studios (Wau Animation, Les' Copaque, Animonsta), freelance routes, and realistic salary expectations.",
    description_bm: "Panduan kerjaya animasi di Malaysia. Pilihan ijazah animasi, studio terkemuka Malaysia (Wau Animation, Les' Copaque, Animonsta), laluan freelance, dan gaji sebenar."
  },
  landing: {
    h1_en: "How to Become an Animator in Malaysia — Career Guide for 2026",
    h1_bm: "Cara Jadi Animator di Malaysia — Panduan Kerjaya 2026",
    intro_en: "Malaysia has a genuine and globally recognised animation industry, built around a cluster of studios that have produced original IP for both local and international markets. The most well-known are Les' Copaque (creators of Upin & Ipin), Wau Animation (Ejen Ali, one of Malaysia's most successful animation franchises), Animonsta Studios (BoBoiBoy, which has international distribution), and a growing number of smaller studios producing content for digital platforms. The industry employs character animators, riggers, background artists, lighting and effects artists, storyboard artists, and technical directors — the full spectrum of roles in a production pipeline. Entry into the industry typically follows a degree in Animation, Multimedia Design, or Game Art from institutions like Limkokwing University (which has strong animation alumni in the industry), One Academy, The One Academy (TOA — arguably the most well-regarded art and design school in Malaysia), The Animation Studio, and several public university programmes. Portfolio quality is the primary filter for studio hiring — a degree from a top school opens doors, but a mediocre portfolio from a prestigious school will be rejected while a strong portfolio from a lesser-known programme will get noticed. Software proficiency expected in the industry includes Maya (3D), Blender (increasingly common), Toon Boom Harmony (2D), and Adobe Animate. Starting salaries in Malaysian animation studios are typically RM 2,000–3,500; senior artists and technical leads earn RM 5,000–9,000. There is also a freelance layer — motion graphics, explainer videos, and short-form content for social media — which can be more lucrative but less stable.",
    intro_bm: "Malaysia ada industri animasi yang diiktiraf globally dengan studio seperti Wau Animation (Ejen Ali), Les' Copaque (Upin & Ipin), dan Animonsta (BoBoiBoy). Sekolah seni terkemuka: The One Academy (TOA). Portfolio adalah penentu utama pengambilan. Perisian utama: Maya, Blender, Toon Boom. Gaji permulaan RM 2,000–3,500.",
    cta_en: "See Full Animator Career Path",
    cta_bm: "Lihat Laluan Kerjaya Animator"
  }
},

{
  slug: "cara-jadi-jurugambar-malaysia", type: "journey", career_id: "photographer",
  keywords: {
    primary: "cara nak jadi jurugambar profesional Malaysia",
    primary_bm: "cara jadi photographer Malaysia 2026",
    longtail_en: ["how to become a professional photographer Malaysia", "photography career Malaysia 2026", "wedding photographer Malaysia income", "commercial photographer Malaysia", "photography degree Malaysia"],
    longtail_bm: ["kerjaya fotografi Malaysia 2026", "jurugambar perkahwinan Malaysia pendapatan", "jurugambar komersial Malaysia", "cara mulakan perniagaan fotografi Malaysia", "photographer freelance Malaysia"]
  },
  meta: {
    title: "Cara Jadi Jurugambar Profesional di Malaysia 2026 — Laluan Masuk & Pengkhususan | MyJourney",
    title_bm: "How to Become a Professional Photographer in Malaysia 2026 — Career Paths | MyJourney",
    description: "Guide to photography careers in Malaysia — wedding, commercial, editorial, and content photography. Entry paths, realistic income, building a client base, and equipment considerations.",
    description_bm: "Panduan kerjaya fotografi di Malaysia — perkahwinan, komersial, editorial, dan konten. Laluan masuk, pendapatan sebenar, membina pangkalan pelanggan, dan pertimbangan peralatan."
  },
  landing: {
    h1_en: "How to Become a Professional Photographer in Malaysia — 2026 Career Guide",
    h1_bm: "Cara Jadi Jurugambar Profesional di Malaysia — Panduan Kerjaya 2026",
    intro_en: "Photography is one of the most accessible creative professions to start in Malaysia but one of the harder ones to make a full-time sustainable income from. The barriers to entry are low — a decent camera and editing skills — but the competition is high and clients in most markets have significant price sensitivity. That said, Malaysian photographers who have built specialised expertise in specific niches are doing well. Wedding photography is the largest market — a well-established wedding photographer in KL can charge RM 3,000–10,000+ per wedding and book 30–50 weddings a year, generating a very respectable income. Commercial and advertising photography for brands and agencies is the second major market — this requires stronger technical skills in lighting and styling but pays significantly higher day rates (RM 1,500–5,000 per day for established commercial photographers). Editorial photography for magazines and online publications pays lower rates but provides profile building. Product photography for e-commerce is a growing segment given Malaysia's massive online retail market — it is more repetitive but consistent in demand. There is no regulated licensing requirement to call yourself a professional photographer in Malaysia. Most serious photographers develop their craft through a combination of a formal diploma or degree in photography (One Academy, The PJ College, KDU, Sunway), online learning, and above all sustained practice and portfolio development. Equipment matters but is not the differentiator — creative vision, technical consistency, and client communication skills are what separate successful photographers from those who struggle. MyJourney maps the different photography specialisations and their realistic income trajectories.",
    intro_bm: "Fotografi Malaysia paling mudah dimulakan tetapi sukar untuk jadi pendapatan tetap. Pasaran terbesar: jurugambar perkahwinan (RM 3,000–10,000+ per majlis, 30–50 majlis setahun). Fotografi komersial bayar lebih tinggi per hari (RM 1,500–5,000) tetapi memerlukan kemahiran teknikal lebih tinggi. Tiada lesen wajib — portfolio dan konsistensi menentukan kejayaan.",
    cta_en: "See Full Photographer Career Path",
    cta_bm: "Lihat Laluan Kerjaya Jurugambar"
  }
},

{
  slug: "cara-jadi-mekanik-kereta-malaysia", type: "journey", career_id: "auto-mechanic",
  keywords: {
    primary: "cara nak jadi mekanik kereta Malaysia",
    primary_bm: "cara jadi auto mechanic Malaysia 2026",
    longtail_en: ["how to become a car mechanic in Malaysia", "automotive mechanic career Malaysia 2026", "JPK mechanic certificate Malaysia", "Proton Perodua technician Malaysia", "mechanic salary Malaysia 2026"],
    longtail_bm: ["syarat jadi mekanik kereta Malaysia", "kerjaya automotif Malaysia 2026", "sijil mekanik JPK Malaysia", "gaji mekanik Malaysia 2026", "laluan kerjaya mekanik automotif"]
  },
  meta: {
    title: "Cara Jadi Mekanik Kereta di Malaysia 2026 — SKM, Bengkel & Laluan Kerjaya | MyJourney",
    title_bm: "How to Become an Auto Mechanic in Malaysia 2026 — SKM, Workshops & Career | MyJourney",
    description: "Guide to becoming a mechanic in Malaysia. SKM automotive certificates, apprenticeship routes, dealership vs independent workshop careers, and realistic earnings.",
    description_bm: "Panduan jadi mekanik di Malaysia. Sijil automotif SKM, laluan perantisan, kerjaya di dealership vs bengkel bebas, dan pendapatan sebenar."
  },
  landing: {
    h1_en: "How to Become a Car Mechanic in Malaysia — Automotive Career Guide for 2026",
    h1_bm: "Cara Jadi Mekanik Kereta di Malaysia — Panduan Kerjaya Automotif 2026",
    intro_en: "Automotive mechanics in Malaysia are in genuine and persistent demand — there are approximately 12 million registered vehicles in the country and a chronic shortage of qualified technicians relative to that vehicle population. The career is also changing rapidly: the rise of hybrid vehicles and EV penetration (Proton's collaboration with Geely, Perodua's upcoming EV models, and the influx of Chinese EVs like BYD and Chery) is creating demand for technicians with electrical and high-voltage vehicle training alongside traditional mechanical skills. The formal certification pathway in Malaysia runs through JPK (Jabatan Pembangunan Kemahiran) — the SKM (Sijil Kemahiran Malaysia) in Automotive Technician at Level 1, 2, and 3 provides the structured qualification that dealerships and serious workshops look for. TVET institutions including community colleges, industrial training institutes (ILP), and vocational colleges offer these programmes. The apprenticeship route — starting as a workshop helper and learning on the job over three to five years — remains common, particularly in the independent workshop sector. Career paths diverge between authorised service centres (Proton, Perodua, Honda, Toyota dealerships), which offer structured pay, manufacturer training, and job stability; and independent workshops, which often offer faster skill development and more varied work. Experienced diagnostic technicians and master technicians in Malaysia earn RM 4,000–8,000+ per month; workshop owners who have built a loyal customer base earn substantially more. EV-certified technicians are already commanding a premium in 2026 as the market transitions.",
    intro_bm: "Mekanik kereta ada permintaan tinggi di Malaysia — 12 juta kenderaan berdaftar dan kekurangan kronik teknisian berkelayakan. Laluan formal: sijil SKM (Automotif) dari JPK melalui kolej vokasional atau ILP. Kenaikan EV (Proton Geely, BYD, Chery) mewujudkan permintaan untuk teknisian bertauliah EV. Teknisian diagnostik berpengalaman earn RM 4,000–8,000+ sebulan.",
    cta_en: "See Full Auto Mechanic Career Path",
    cta_bm: "Lihat Laluan Kerjaya Mekanik Kereta"
  }
},

{
  slug: "cara-jadi-juruteknik-hvac-malaysia", type: "journey", career_id: "hvac-technician",
  keywords: {
    primary: "cara nak jadi juruteknik HVAC Malaysia",
    primary_bm: "cara jadi HVAC technician Malaysia 2026",
    longtail_en: ["how to become an HVAC technician in Malaysia", "air conditioning technician Malaysia career", "HVAC certificate Malaysia JPK", "Daikin Midea HVAC career Malaysia", "HVAC technician salary Malaysia 2026"],
    longtail_bm: ["syarat jadi juruteknik penghawa dingin Malaysia", "kerjaya HVAC Malaysia 2026", "sijil teknikal HVAC JPK Malaysia", "gaji juruteknik HVAC Malaysia", "laluan kerjaya penghawa dingin Malaysia"]
  },
  meta: {
    title: "Cara Jadi Juruteknik HVAC di Malaysia 2026 — Sijil, Majikan & Gaji | MyJourney",
    title_bm: "How to Become an HVAC Technician in Malaysia 2026 — Certificate, Employers & Salary | MyJourney",
    description: "Guide to HVAC and air conditioning technician careers in Malaysia. SKM certificates, top employers, commercial vs residential HVAC work, and realistic earnings.",
    description_bm: "Panduan kerjaya juruteknik HVAC dan penghawa dingin di Malaysia. Sijil SKM, majikan terkemuka, kerja HVAC komersial vs kediaman, dan pendapatan sebenar."
  },
  landing: {
    h1_en: "How to Become an HVAC Technician in Malaysia — Career Guide for 2026",
    h1_bm: "Cara Jadi Juruteknik HVAC di Malaysia — Panduan Kerjaya 2026",
    intro_en: "HVAC (Heating, Ventilation, and Air Conditioning) technicians in Malaysia primarily work in air conditioning and mechanical ventilation — the 'heating' component is less relevant in a tropical climate. Malaysia's climate makes air conditioning not just a comfort item but a near-essential in commercial and residential buildings, creating consistent and recession-resistant demand for qualified HVAC technicians. The commercial HVAC market — central chilled water systems, AHUs, FCUs, and BMS integration in office towers, hospitals, hotels, and shopping malls — is the higher-paying segment and requires more technical knowledge than residential split-unit installation and servicing. The certification pathway runs through JPK's SKM Air Conditioning and Refrigeration programme, available at ILPs, vocational colleges, and TVET institutions. Manufacturer training programmes from Daikin, Midea, York, Carrier, and Trane also carry significant weight with commercial HVAC contractors. Entry without formal certification is possible through apprenticeship, but JPK certification is increasingly expected by commercial clients and building operators. Career paths in HVAC include working for M&E (mechanical and electrical) contractors on construction projects, working for HVAC service companies on maintenance contracts with commercial clients, or eventually running your own servicing business. Starting pay for a fresh HVAC technician in Malaysia is approximately RM 1,800–2,500; experienced commercial HVAC technicians with chiller and BMS knowledge earn RM 3,500–6,000. Business owners with a portfolio of maintenance contracts earn substantially more.",
    intro_bm: "Juruteknik HVAC di Malaysia ada permintaan stabil kerana iklim tropika Malaysia menjadikan penghawa dingin keperluan penting. Sijil JPK (Penghawa Dingin & Penyejukan) adalah laluan formal utama. Segmen komersial (sistem chiller, AHU di bangunan pejabat dan hospital) bayar lebih tinggi. Gaji permulaan RM 1,800–2,500; juruteknik komersial berpengalaman RM 3,500–6,000.",
    cta_en: "See Full HVAC Technician Career Path",
    cta_bm: "Lihat Laluan Kerjaya Juruteknik HVAC"
  }
},

// ============================================================
// === D. ALLIED HEALTH & COUNSELLING =========================
// ============================================================

{
  slug: "cara-jadi-ahli-terapi-pekerjaan-malaysia", type: "journey", career_id: "occ-therapist",
  keywords: {
    primary: "cara nak jadi ahli terapi pekerjaan Malaysia",
    primary_bm: "cara jadi occupational therapist Malaysia 2026",
    longtail_en: ["how to become an occupational therapist in Malaysia", "occupational therapy degree Malaysia", "MSOT Malaysia registration", "OT career path Malaysia", "occupational therapist salary Malaysia 2026"],
    longtail_bm: ["syarat jadi terapi pekerjaan Malaysia", "universiti OT Malaysia", "pendaftaran MSOT Malaysia", "gaji ahli terapi pekerjaan Malaysia", "kerjaya OT Malaysia 2026"]
  },
  meta: {
    title: "Cara Jadi Ahli Terapi Pekerjaan di Malaysia 2026 — Ijazah, MSOT & Kerjaya | MyJourney",
    title_bm: "How to Become an Occupational Therapist in Malaysia 2026 — Degree, MSOT & Career | MyJourney",
    description: "Guide to occupational therapy careers in Malaysia. OT degree universities, MSOT registration, government vs private hospital career paths, and salary benchmarks.",
    description_bm: "Panduan kerjaya terapi pekerjaan di Malaysia. Universiti ijazah OT, pendaftaran MSOT, laluan kerjaya hospital kerajaan vs swasta, dan gaji."
  },
  landing: {
    h1_en: "How to Become an Occupational Therapist in Malaysia — Career Guide for 2026",
    h1_bm: "Cara Jadi Ahli Terapi Pekerjaan di Malaysia — Panduan Kerjaya 2026",
    intro_en: "Occupational therapy (OT) is an allied health profession that helps people of all ages develop, recover, or maintain the skills needed for daily living and working — after injury, illness, or disability. In Malaysia, OTs work across a range of settings: government hospitals (KKM is the largest employer), private hospitals, rehabilitation centres, schools and special education programmes, and psychiatric facilities. The formal path is a Bachelor of Occupational Therapy, which is offered at a small number of Malaysian universities including UiTM, and internationally at universities in the UK, Australia, and Ireland whose graduates are recognised in Malaysia. After graduating from an accredited programme, registration with the Malaysian Society of Occupational Therapists (MSOT) is the professional standard, though as of 2026 formal statutory registration under the Allied Health Professions Act is still in progress. The OT workforce in Malaysia is significantly smaller than demand — there is a well-documented shortage, particularly in rural hospitals, paediatric settings, and mental health services. This shortage means job security is high for qualified OTs. Starting salary for a government OT follows the public service scale, typically RM 2,800–3,500; private hospital OTs often earn more. The work requires patience, creativity, and genuine connection with patients — it is one of the allied health careers where the human relationship dimension of the work is as important as the technical knowledge.",
    intro_bm: "Terapi pekerjaan (OT) membantu individu mengembangkan semula kemahiran harian selepas kecederaan, penyakit, atau kecacatan. Laluan: ijazah Terapi Pekerjaan (UiTM atau universiti luar yang diiktiraf), kemudian pendaftaran MSOT. Malaysia mengalami kekurangan OT yang ketara — keselamatan kerja tinggi. Gaji permulaan kerajaan RM 2,800–3,500.",
    cta_en: "See Full Occupational Therapist Career Path",
    cta_bm: "Lihat Laluan Kerjaya Ahli Terapi Pekerjaan"
  }
},

{
  slug: "cara-jadi-ahli-sains-bioperubatan-malaysia", type: "journey", career_id: "biomedical-sci",
  keywords: {
    primary: "cara nak jadi ahli sains bioperubatan Malaysia",
    primary_bm: "cara jadi biomedical scientist Malaysia 2026",
    longtail_en: ["how to become a biomedical scientist in Malaysia", "biomedical science degree Malaysia", "laboratory career Malaysia 2026", "MSB registration Malaysia biomedical", "biomedical scientist salary Malaysia"],
    longtail_bm: ["syarat jadi saintis bioperubatan Malaysia", "universiti sains bioperubatan Malaysia", "kerjaya makmal Malaysia", "gaji ahli sains bioperubatan Malaysia", "pendaftaran MSB Malaysia"]
  },
  meta: {
    title: "Cara Jadi Ahli Sains Bioperubatan di Malaysia 2026 — Ijazah, Makmal & Kerjaya | MyJourney",
    title_bm: "How to Become a Biomedical Scientist in Malaysia 2026 — Degree, Lab & Career | MyJourney",
    description: "Guide to biomedical science careers in Malaysia. Degree options, laboratory career paths in hospitals and research institutions, MSB registration, and salary expectations.",
    description_bm: "Panduan kerjaya sains bioperubatan di Malaysia. Pilihan ijazah, laluan kerjaya makmal di hospital dan institusi penyelidikan, pendaftaran MSB, dan jangkaan gaji."
  },
  landing: {
    h1_en: "How to Become a Biomedical Scientist in Malaysia — Career Guide for 2026",
    h1_bm: "Cara Jadi Ahli Sains Bioperubatan di Malaysia — Panduan Kerjaya 2026",
    intro_en: "Biomedical science is a broad degree discipline in Malaysia that leads into several distinct career paths — hospital laboratory work (the most common destination), pharmaceutical and biotech industry roles, medical research, and academic positions. Students often choose biomedical science without a clear picture of what the job actually involves day-to-day. The most common entry into practice is as a Medical Laboratory Technologist (MLT) in a hospital pathology laboratory — these roles involve processing and analysing blood, urine, tissue, and microbiological samples to support clinical diagnoses. Hospitals in Malaysia employ medical lab staff in haematology, biochemistry, microbiology, histopathology, and blood bank departments. Registration with the Malaysian Society of Biomedical Scientists (MSBS) is the professional standard. Degree programmes are offered at UiTM, UPM, UKM, UITM, MAHSA University, and other institutions — a typical four-year Honours degree with laboratory practical components. The pharmaceutical and biotech industry route offers roles in quality control, quality assurance, regulatory affairs, and R&D in companies like AstraZeneca Malaysia, Hovid, Kotra Pharma, and the research arms of hospital networks. Academic and research roles (at IMR — Institut Kajian Perubatan, university research centres, and international organisations) tend to require postgraduate study. Starting salary for a government medical laboratory technologist is approximately RM 2,500–3,200; private sector and pharmaceutical roles vary widely but often offer higher total compensation. The COVID-19 pandemic significantly raised the profile of laboratory scientists in Malaysia and demonstrated their central role in healthcare — this has partly translated into improved recruitment and retention attention.",
    intro_bm: "Sains bioperubatan membawa kepada kerjaya dalam makmal hospital patologi (laluan paling biasa), industri farmaseutikal, dan penyelidikan perubatan. Pendaftaran MSBS adalah standard profesional. Ijazah 4 tahun dari UiTM, UPM, UKM, atau MAHSA. Gaji permulaan juruteknik makmal kerajaan sekitar RM 2,500–3,200.",
    cta_en: "See Full Biomedical Scientist Career Path",
    cta_bm: "Lihat Laluan Kerjaya Ahli Sains Bioperubatan"
  }
},

{
  slug: "cara-jadi-kaunselor-malaysia", type: "journey", career_id: "counsellor",
  keywords: {
    primary: "cara nak jadi kaunselor Malaysia",
    primary_bm: "cara jadi counsellor Malaysia 2026",
    longtail_en: ["how to become a counsellor in Malaysia", "counselling degree Malaysia universities", "LKM registered counsellor Malaysia", "counsellor vs psychologist Malaysia", "counsellor salary Malaysia 2026"],
    longtail_bm: ["syarat jadi kaunselor berdaftar Malaysia", "universiti kaunseling Malaysia", "pendaftaran LKM Malaysia", "kaunselor vs psikologi Malaysia", "gaji kaunselor Malaysia 2026"]
  },
  meta: {
    title: "Cara Jadi Kaunselor Berdaftar di Malaysia 2026 — LKM, Ijazah & Kerjaya | MyJourney",
    title_bm: "How to Become a Registered Counsellor in Malaysia 2026 — LKM, Degree & Career | MyJourney",
    description: "Guide to counselling careers in Malaysia. LKM registration requirements, counselling degree universities, the difference between counsellor and psychologist, and realistic salary expectations.",
    description_bm: "Panduan kerjaya kaunseling di Malaysia. Syarat pendaftaran LKM, universiti ijazah kaunseling, perbezaan kaunselor dan psikologi, serta gaji sebenar."
  },
  landing: {
    h1_en: "How to Become a Registered Counsellor in Malaysia — Career Guide for 2026",
    h1_bm: "Cara Jadi Kaunselor Berdaftar di Malaysia — Panduan Kerjaya 2026",
    intro_en: "Counselling in Malaysia is a regulated profession under the Counsellors Act 1998, administered by Lembaga Kaunselor Malaysia (LKM). Only individuals registered with LKM are legally permitted to use the title Kaunselor Berdaftar (Registered Counsellor) and to practise counselling professionally. This makes the entry path relatively clearly defined: you need a recognised degree in counselling or a related field, followed by supervised practice hours and registration with LKM. Universities offering Bachelor of Counselling degrees include UiTM, UPM, UKM, UMS, and several private institutions. The degree typically involves theoretical coursework alongside supervised counselling practice in placement settings. One common point of confusion is the difference between a counsellor and a psychologist in the Malaysian context — counsellors focus on supporting clients through life challenges, relationship issues, grief, anxiety, and career concerns using counselling modalities; psychologists (particularly clinical psychologists) focus more on diagnosing and treating mental health conditions and have a separate regulatory pathway. Both are valuable but distinct. Career settings for Malaysian counsellors include secondary schools (the KPM school counsellor system employs the most counsellors in the country), private counselling centres, hospitals, corporate employee assistance programmes, and rehabilitation centres. School counsellors in the government system are civil servants on the education service pay scale, starting around RM 2,500–3,200. Private practice counsellors earn per-session fees that range from RM 80–250 per session in Malaysia. The mental health awareness movement in Malaysia has significantly expanded demand for counselling services, though supply of trained and registered counsellors remains limited.",
    intro_bm: "Kaunselor berdaftar di Malaysia dikawal selia oleh Lembaga Kaunselor Malaysia (LKM) di bawah Akta Kaunselor 1998. Laluan: ijazah kaunseling (UiTM, UPM, UKM), jam amalan berkuasa, kemudian daftar LKM. Majikan terbesar: sistem kaunselor sekolah KPM. Kaunselor swasta mengenakan bayaran RM 80–250 per sesi. Permintaan meningkat pesat seiring kesedaran kesihatan mental.",
    cta_en: "See Full Counsellor Career Path",
    cta_bm: "Lihat Laluan Kerjaya Kaunselor"
  }
},

{
  slug: "cara-jadi-eksekutif-undang-undang-malaysia", type: "journey", career_id: "legal-executive",
  keywords: {
    primary: "cara nak jadi legal executive Malaysia",
    primary_bm: "cara jadi eksekutif undang-undang Malaysia 2026",
    longtail_en: ["how to become a legal executive in Malaysia", "legal executive vs lawyer Malaysia", "paralegal career Malaysia 2026", "CILEX Malaysia legal executive", "legal executive salary Malaysia"],
    longtail_bm: ["perbezaan legal executive dan peguam Malaysia", "kerjaya paralegal Malaysia", "eksekutif undang-undang gaji Malaysia", "syarat legal executive Malaysia 2026", "diploma undang-undang kerjaya Malaysia"]
  },
  meta: {
    title: "Cara Jadi Legal Executive di Malaysia 2026 — Berbeza dengan Peguam & Laluan Kerjaya | MyJourney",
    title_bm: "How to Become a Legal Executive in Malaysia 2026 — vs Lawyer & Career Path | MyJourney",
    description: "Guide to legal executive and paralegal careers in Malaysia. How it differs from a lawyer, entry qualifications, career paths in law firms, banks, and corporations, and realistic salaries.",
    description_bm: "Panduan kerjaya legal executive dan paralegal di Malaysia. Perbezaan dengan peguam, kelayakan masuk, laluan kerjaya di firma guaman, bank, dan korporat, serta gaji sebenar."
  },
  landing: {
    h1_en: "How to Become a Legal Executive in Malaysia — Career Guide for 2026",
    h1_bm: "Cara Jadi Legal Executive di Malaysia — Panduan Kerjaya 2026",
    intro_en: "A legal executive in Malaysia is a legal professional who works in a supporting or technical capacity within the legal field — distinct from an advocate and solicitor (lawyer) who is called to the Bar and can appear in court independently. Legal executives handle tasks such as drafting legal documents, conducting legal research, managing case files, liaising with clients and courts, and handling conveyancing, probate, or corporate secretarial work under the supervision of a lawyer. This is a practical, in-demand career that does not require the full LLB degree and CLP qualification needed to become a lawyer. The typical entry path is a Diploma in Legal Studies or a related law diploma — offered at many Malaysian polytechnics and colleges — or in some cases an entry-level position in a law firm for school leavers who learn on the job. Professional development is supported through the Malaysian Institute of Chartered Secretaries and Administrators (MAICSA) for corporate secretarial work, or through CILEX (Chartered Institute of Legal Executives, UK) qualifications which are gaining recognition in Malaysia. Career settings include law firms (the most common), banks (legal departments), property developers (conveyancing work), and corporations with in-house legal teams. Legal executives in Malaysian law firms typically earn RM 2,000–4,000 per month at the junior to mid level, with experienced legal executives in specialist areas like conveyancing or corporate work earning RM 4,000–7,000. It is a career that rewards precision, thoroughness, and the ability to manage multiple matters simultaneously.",
    intro_bm: "Legal executive di Malaysia menjalankan kerja undang-undang sokongan — draf dokumen, penyelidikan undang-undang, urus fail, dan kerja konveyans — di bawah pengawasan peguam. Berbeza dari peguam yang boleh muncul di mahkamah secara bebas. Laluan masuk: Diploma Pengajian Undang-undang dari politeknik atau kolej. Gaji legal executive berpengalaman RM 4,000–7,000.",
    cta_en: "See Full Legal Executive Career Path",
    cta_bm: "Lihat Laluan Kerjaya Legal Executive"
  }
},

// ============================================================
// === E. JOURNEY DISCOVERY CATEGORY PAGES ====================
// ============================================================

{
  slug: "kerjaya-dalam-kerajaan-malaysia", type: "journey",
  keywords: {
    primary: "kerjaya dalam kerajaan Malaysia 2026",
    primary_bm: "government career Malaysia 2026",
    longtail_en: ["government career Malaysia 2026", "civil service career Malaysia", "how to join Malaysian civil service", "SPA exam Malaysia 2026", "PTD officer Malaysia career"],
    longtail_bm: ["kerjaya perkhidmatan awam Malaysia 2026", "kerja kerajaan Malaysia 2026", "cara masuk perkhidmatan awam Malaysia", "peperiksaan SPA Malaysia", "kelebihan kerja kerajaan Malaysia"]
  },
  meta: {
    title: "Kerjaya dalam Kerajaan Malaysia 2026 — Panduan Perkhidmatan Awam | MyJourney",
    title_bm: "Government Careers in Malaysia 2026 — Civil Service Guide | MyJourney",
    description: "A guide to government and civil service careers in Malaysia. How to apply through SPA, the major categories of government jobs, PTD and specialist officer tracks, and what working in the Malaysian public service is really like.",
    description_bm: "Panduan kerjaya kerajaan dan perkhidmatan awam Malaysia. Cara mohon melalui SPA, kategori utama pekerjaan kerajaan, laluan PTD dan pegawai pakar, dan realiti bekerja dalam perkhidmatan awam Malaysia."
  },
  landing: {
    h1_en: "Government and Civil Service Careers in Malaysia — What You Need to Know in 2026",
    h1_bm: "Kerjaya dalam Kerajaan Malaysia 2026 — Panduan Perkhidmatan Awam",
    intro_en: "Government careers in Malaysia offer a combination of job security, structured benefits, and work that directly shapes public services — but the reality of working in the Malaysian civil service is more varied than either the critics or the advocates tend to acknowledge. The civil service employs approximately 1.6 million people across federal, state, and statutory bodies — making the government the largest single employer in the country. Entry for degree holders goes primarily through SPA (Suruhanjaya Perkhidmatan Awam), which administers competitive examinations and interviews for most officer-grade positions. The most prominent entry track for generalist degree holders is the PTD (Pegawai Tadbir dan Diplomatik) scheme — a large category that places officers across all ministries in policy, administrative, and diplomatic roles. Specialist officer tracks exist for doctors (medical scheme), teachers (education service), engineers (technical scheme), accountants, lawyers, and IT professionals — each with their own recruitment pathways and pay scales. Pay in the Malaysian civil service has been a recurring concern — historically below private sector equivalents at the same qualification level — but recent salary revisions under the Madani government and the comprehensive benefits package (pension, medical, housing loan access, and job security) make the total compensation package more competitive than the base salary alone suggests. The work culture varies enormously by ministry and department. MyJourney maps the key government career pathways with specific role categories and entry requirements.",
    intro_bm: "Perkhidmatan awam Malaysia menggaji kira-kira 1.6 juta pekerja. Laluan masuk untuk graduan: SPA erekrut, terutamanya skim PTD untuk pegawai am, atau skim pakar (doktor, jurutera, guru, akauntan). Faedah: pencen, liputan perubatan, akses pinjaman perumahan, dan keselamatan kerja. Gaji asas lebih rendah daripada sektor swasta tetapi pakej keseluruhan lebih kompetitif.",
    cta_en: "Explore Government Career Paths on MyJourney",
    cta_bm: "Terokai Laluan Kerjaya Kerajaan di MyJourney"
  }
},

{
  slug: "kerjaya-tvet-vokasional-malaysia", type: "journey",
  keywords: {
    primary: "kerjaya melalui TVET Malaysia 2026",
    primary_bm: "TVET career path Malaysia 2026",
    longtail_en: ["TVET career path Malaysia 2026", "vocational career Malaysia", "technical career without degree Malaysia", "SKM certificate career Malaysia", "TVET salary Malaysia 2026"],
    longtail_bm: ["kerjaya TVET Malaysia 2026", "kerjaya vokasional Malaysia", "kerja tanpa ijazah Malaysia", "sijil SKM kerjaya Malaysia", "gaji graduan TVET Malaysia"]
  },
  meta: {
    title: "Kerjaya Melalui TVET di Malaysia 2026 — Peluang, Gaji & Laluan | MyJourney",
    title_bm: "TVET Career Paths in Malaysia 2026 — Opportunities, Salaries & Routes | MyJourney",
    description: "An honest guide to careers through TVET (Technical and Vocational Education and Training) in Malaysia. SKM certificates, high-demand technical trades, and the real earning potential of skilled technical workers.",
    description_bm: "Panduan jujur kerjaya melalui TVET di Malaysia. Sijil SKM, kemahiran teknikal permintaan tinggi, dan potensi pendapatan sebenar pekerja teknikal mahir."
  },
  landing: {
    h1_en: "TVET Career Paths in Malaysia — What You Can Actually Earn in 2026",
    h1_bm: "Kerjaya Melalui TVET di Malaysia 2026 — Apa Yang Sebenarnya Boleh Anda Dapat",
    intro_en: "TVET (Technical and Vocational Education and Training) has historically been positioned as a second-choice path in Malaysian education — the option for students who did not score well enough for university. This framing is increasingly inaccurate and is actively being challenged by both government policy and market realities. Malaysia has a genuine and documented shortage of skilled technical workers: qualified welders, plumbers, electricians, HVAC technicians, mechatronic technicians, construction tradespeople, and industrial maintenance workers are in demand across the economy, and employers are paying more for them than the starting salaries of many degree-holder roles. The TVET pathway in Malaysia runs through several institution types: vocational colleges (Kolej Vokasional) under KPM, Industrial Training Institutes (Institut Latihan Perindustrian, ILP) under MHRCC, community colleges, and private TVET providers. Qualifications are standardised through the SKM (Sijil Kemahiran Malaysia) system at Levels 1, 2, and 3, with Level 3 equivalent to an SPM for entry into DKM (Diploma Kemahiran Malaysia) or further advancement. The ceiling on TVET incomes is often underestimated: a master electrician running their own contracting business in KL, a certified welding inspector, or an experienced CNC machinist can earn RM 5,000–10,000+ per month. The path is different from a degree — it requires practical skill accumulation over years of hands-on work — but the destination is not a lower-income ceiling. MyJourney maps the specific TVET career paths with realistic progression timelines.",
    intro_bm: "TVET bukan pilihan kedua — Malaysia mengalami kekurangan serius pekerja teknikal mahir. Tukang paip, electrician, juruteknik HVAC, dan teknisian industri ada permintaan tinggi. Gaji: pengkontraktor elektrik berpengalaman atau juruteknik CNC boleh earn RM 5,000–10,000+ sebulan. TVET berbeza dari ijazah tetapi bukan siling pendapatan yang lebih rendah.",
    cta_en: "Explore TVET Career Paths on MyJourney",
    cta_bm: "Terokai Laluan Kerjaya TVET di MyJourney"
  }
},

{
  slug: "kerjaya-tanpa-ijazah-malaysia", type: "journey",
  keywords: {
    primary: "kerjaya tanpa ijazah Malaysia 2026",
    primary_bm: "jobs without degree Malaysia 2026",
    longtail_en: ["careers without a degree Malaysia 2026", "high paying jobs without degree Malaysia", "work without degree Malaysia", "SPM jobs Malaysia 2026", "non-graduate career Malaysia"],
    longtail_bm: ["kerjaya tanpa degree Malaysia", "kerja bergaji tinggi tanpa ijazah Malaysia", "peluang kerja lepas SPM Malaysia 2026", "kerjaya untuk lepasan SPM", "boleh kaya tanpa degree Malaysia"]
  },
  meta: {
    title: "Kerjaya Bergaji Baik Tanpa Ijazah di Malaysia 2026 — Panduan Jujur | MyJourney",
    title_bm: "High-Paying Careers Without a Degree in Malaysia 2026 — Honest Guide | MyJourney",
    description: "An honest look at careers in Malaysia that do not require a university degree — trades, entrepreneurship, sales, real estate, and digital skills — with realistic income expectations.",
    description_bm: "Panduan jujur kerjaya di Malaysia yang tidak memerlukan ijazah universiti — kemahiran teknikal, keusahawanan, jualan, hartanah, dan kemahiran digital — dengan jangkaan pendapatan realistik."
  },
  landing: {
    h1_en: "High-Paying Careers Without a University Degree in Malaysia — 2026 Guide",
    h1_bm: "Kerjaya Bergaji Baik Tanpa Ijazah di Malaysia 2026 — Panduan Jujur",
    intro_en: "The degree-versus-no-degree debate in Malaysia is often framed as a binary choice with a clear winner, when the reality is more nuanced. A university degree increases access to certain career paths and reduces friction in others — but it is not the only route to a financially rewarding and fulfilling career. There are several high-income career paths in Malaysia that are accessible without a university degree. Skilled trades are the most structurally undervalued: qualified electricians, plumbers, welders, and HVAC technicians with their own client base or contracting business can earn RM 5,000–15,000+ per month — often more than degree holders in many office roles. Real estate negotiating, as outlined in the property agent career path, is accessible with an SPM and has genuinely high earning potential for those with sales discipline and local market knowledge. Entrepreneurship, by definition, does not require a degree — and many of Malaysia's most successful SME owners built their businesses through trade skills, market knowledge, and execution rather than formal qualifications. Digital skills — social media management, content creation, e-commerce operations, graphic design, video editing — have created a layer of independent income earners who built their skills through online learning rather than formal education. Sales roles across insurance, telco, and property consistently produce high earners regardless of academic background. The honest caveat is that the non-degree path typically requires stronger self-direction, more tolerance for income variability in the early years, and deliberate skill-building without the structured pathway a degree provides. MyJourney maps these non-degree paths with realistic timelines.",
    intro_bm: "Ijazah bukan satu-satunya laluan ke pendapatan baik di Malaysia. Kemahiran teknikal (electrician, tukang paip, pengkontraktor), ejen hartanah, keusahawanan, kemahiran digital, dan jualan — semua ini boleh menghasilkan pendapatan melebihi banyak kerjaya pemegang ijazah. Syarat: lebih arah kendiri, toleransi variasi pendapatan awal, dan pembinaan kemahiran yang disengajakan.",
    cta_en: "Explore Career Paths on MyJourney",
    cta_bm: "Terokai Laluan Kerjaya di MyJourney"
  }
},

{
  slug: "kerjaya-untuk-pelajar-sains-malaysia", type: "journey",
  keywords: {
    primary: "kerjaya untuk pelajar sains Malaysia 2026",
    primary_bm: "science student career Malaysia 2026",
    longtail_en: ["career options for science students Malaysia 2026", "what to do with science degree Malaysia", "pure science career Malaysia", "biology chemistry physics career Malaysia", "science stream after SPM Malaysia"],
    longtail_bm: ["kerjaya untuk pelajar aliran sains Malaysia", "apa buat dengan ijazah sains Malaysia", "kerjaya sains tulen Malaysia", "aliran sains selepas SPM pilihan kerjaya", "bidang yang sesuai untuk pelajar sains Malaysia"]
  },
  meta: {
    title: "Kerjaya untuk Pelajar Sains di Malaysia 2026 — Pilihan Ijazah & Laluan Kerjaya | MyJourney",
    title_bm: "Career Options for Science Students in Malaysia 2026 — Degrees & Paths | MyJourney",
    description: "A guide to career paths for Malaysian students in the science stream. Medicine, engineering, pharmacy, data science, biotechnology, and non-traditional options for science graduates.",
    description_bm: "Panduan laluan kerjaya untuk pelajar aliran sains Malaysia. Perubatan, kejuruteraan, farmasi, sains data, bioteknologi, dan pilihan bukan tradisi untuk graduan sains."
  },
  landing: {
    h1_en: "Career Paths for Science Students in Malaysia — A Practical Guide for 2026",
    h1_bm: "Kerjaya untuk Pelajar Aliran Sains di Malaysia — Panduan Praktikal 2026",
    intro_en: "Choosing the science stream in Malaysian secondary school opens a wide range of university and career options — but also creates a specific pressure to choose between a relatively small set of 'approved' professional paths (medicine, engineering, pharmacy) that the system tends to funnel students toward. The reality is broader. Science stream students who perform well in Biology, Chemistry, Physics, and Mathematics have genuine access to: medicine and the health professions (the highest-prestige route), engineering across all disciplines, pharmacy and pharmaceutical sciences, data science and computer science (where mathematical aptitude is valued), environmental science, biomedical science, food science and nutrition, forensic science, and optometry. Beyond these direct applications, science graduates also do well in finance (quantitative roles), consulting (analytical rigour), and increasingly in technology product roles. One pattern worth being aware of: many Malaysian science students end up in biology-heavy degree programmes (medical sciences, biomedical, food science) without a clear picture of the career destination — these degrees are valuable but the job market for them is more competitive and the salary trajectories are lower than engineering or data science at the same qualification level. Before choosing, it is worth researching not just what degree you can get into, but what the job market looks like three to five years after graduation. MyJourney maps the specific careers with degree requirements and realistic outcome data for science-stream students.",
    intro_bm: "Aliran sains membuka laluan ke perubatan, kejuruteraan, farmasi, sains data, bioperubatan, dan banyak lagi. Pelajar sains juga boleh masuk ke kewangan kuantitatif dan teknologi. Amaran jujur: pelajar dalam program sains biologi (bioperubatan, sains makanan) sering menghadapi pasaran kerja yang lebih kompetitif dan gaji yang lebih rendah berbanding kejuruteraan atau sains data pada tahap kelayakan yang sama.",
    cta_en: "Explore Science Career Paths on MyJourney",
    cta_bm: "Terokai Laluan Kerjaya Sains di MyJourney"
  }
},

{
  slug: "cara-jadi-pengurus-logistik-malaysia", type: "journey", career_id: "logistics-manager",
  keywords: {
    primary: "cara nak jadi pengurus logistik Malaysia",
    primary_bm: "cara jadi logistics manager Malaysia 2026",
    longtail_en: ["how to become a logistics manager in Malaysia", "supply chain career Malaysia 2026", "logistics degree Malaysia", "freight forwarding career Malaysia", "logistics manager salary Malaysia 2026"],
    longtail_bm: ["syarat jadi pengurus logistik Malaysia", "kerjaya rantaian bekalan Malaysia 2026", "ijazah logistik Malaysia", "kerjaya penghantaran barang Malaysia", "gaji pengurus logistik Malaysia"]
  },
  meta: {
    title: "Cara Jadi Pengurus Logistik di Malaysia 2026 — Ijazah, Syarikat & Gaji | MyJourney",
    title_bm: "How to Become a Logistics Manager in Malaysia 2026 — Degree, Companies & Salary | MyJourney",
    description: "Guide to logistics and supply chain management careers in Malaysia. Relevant degrees, top logistics employers, career progression from executive to manager, and salary benchmarks.",
    description_bm: "Panduan kerjaya pengurusan logistik dan rantaian bekalan di Malaysia. Ijazah berkaitan, majikan logistik terkemuka, perkembangan kerjaya dari eksekutif ke pengurus, dan gaji."
  },
  landing: {
    h1_en: "How to Become a Logistics Manager in Malaysia — Career Guide for 2026",
    h1_bm: "Cara Jadi Pengurus Logistik di Malaysia — Panduan Kerjaya 2026",
    intro_en: "Logistics and supply chain management is one of Malaysia's strategic economic sectors — Port Klang is among the busiest container ports in Southeast Asia, Kuala Lumpur International Airport handles significant air cargo volumes, and Malaysia's position at the heart of ASEAN supply chains makes logistics a consistently important employer. Logistics managers oversee the movement, storage, and distribution of goods — coordinating with freight forwarders, warehouse operators, customs brokers, and transportation providers to ensure products move efficiently from origin to destination. Entry into the logistics field typically starts with a degree in Logistics and Supply Chain Management, Business Administration, or Maritime Management from institutions like UiTM (which has one of the larger logistics programmes), Universiti Malaysia Terengganu, UPM, or private institutions including INTI and HELP. Maritime and port-specific programmes are offered at Universiti Malaysia Terengganu and Politeknik Malaysia. Professional qualifications from the Chartered Institute of Logistics and Transport (CILT) are internationally recognised and increasingly valued by Malaysian logistics employers. Major employers include Pos Malaysia, DHL, FedEx, DB Schenker, Expeditors, and the logistics arms of large retailers and manufacturers. E-commerce growth has created a significant new layer of last-mile logistics companies — Ninja Van, J&T Express, Ninjavan, and similar — that have large logistics operations requiring managers. Starting salary for a logistics executive is typically RM 2,500–3,500; experienced logistics managers handling significant accounts or regional responsibilities earn RM 6,000–12,000.",
    intro_bm: "Logistik dan rantaian bekalan adalah sektor ekonomi strategik Malaysia — Port Klang antara pelabuhan kontena tersibuk di Asia Tenggara. Majikan utama: DHL, FedEx, DB Schenker, Pos Malaysia, dan syarikat e-dagang baru (Ninja Van, J&T). Ijazah berkaitan dari UiTM, UMT, atau UPM. Sijil CILT diiktiraf antarabangsa. Gaji pengurus logistik berpengalaman RM 6,000–12,000.",
    cta_en: "See Full Logistics Manager Career Path",
    cta_bm: "Lihat Laluan Kerjaya Pengurus Logistik"
  }
},

]; // end module.exports
