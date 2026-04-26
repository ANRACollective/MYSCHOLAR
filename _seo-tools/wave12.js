// JACK Wave 12 — MyJourney Career Path SEO Pages
// Created: 2026-04-23
// Strategy: Launch MyJourney on search. No tuition pages (MyTuition paused).
// All entries are type="journey" — new page type added in jack-run.js v5.
//
// CTA links use /journey.html?career=<career_id>
// IMPORTANT: journey.html must support ?career= URL param for deep-linking.
// Until that's live, all CTAs fall back to /journey.html correctly.
//
// 30 entries across 4 pillars:
//   A. INDIVIDUAL CAREERS — BUILT (16)    — one page per is_built=true career in Supabase
//   B. INDIVIDUAL CAREERS — STUBS (4)     — high-demand careers not yet fully built
//   C. CATEGORY PAGES (5)                 — health, engineering, tech, business, creative
//   D. HIGH-INTENT / COMPARISON (5)       — "what career suits me", "after SPM", salary, science degree
//
// Wave 12 strategy: Capture students at the "I want to be X, what do I do?" moment.
// These are the highest-intent queries in Malaysian student search — before scholarship search,
// before internship search. MyJourney is the upstream product.

module.exports = [

// ============================================================
// === A. INDIVIDUAL CAREERS — BUILT ==========================
// ============================================================

{
  slug: "cara-jadi-doktor-malaysia", type: "journey", career_id: "doctor",
  keywords: {
    primary: "cara nak jadi doktor Malaysia",
    primary_bm: "cara jadi doktor Malaysia 2026",
    longtail_en: ["how to become a doctor in Malaysia", "doctor career path Malaysia", "medical degree Malaysia requirements", "MBBS Malaysia universities 2026", "how long to become doctor Malaysia"],
    longtail_bm: ["syarat jadi doktor Malaysia", "universiti perubatan Malaysia terbaik", "MBBS Malaysia berapa tahun", "lepas SPM nak jadi doktor buat apa", "laluan kerjaya doktor Malaysia"]
  },
  meta: {
    title: "Cara Jadi Doktor di Malaysia 2026 — Laluan Lengkap dari SPM | MyJourney",
    title_bm: "Cara Nak Jadi Doktor Malaysia 2026 — Syarat, Universiti & Gaji | MyJourney",
    description: "Step-by-step guide to becoming a doctor in Malaysia. SPM subjects, pre-university options, MBBS universities, housemanship, and MMC registration — all in one place.",
    description_bm: "Panduan lengkap cara jadi doktor di Malaysia. Subjek SPM, pre-universiti, universiti MBBS, housemanship, dan pendaftaran MMC — semua dalam satu tempat."
  },
  landing: {
    h1_en: "How to Become a Doctor in Malaysia — Full Career Path",
    h1_bm: "Cara Jadi Doktor di Malaysia — Laluan Kerjaya Lengkap",
    intro_en: "Becoming a doctor in Malaysia follows a clear but demanding path. Starting from SPM, students need strong results in Biology, Chemistry, and Physics — these three are non-negotiable for entry into any Malaysian medical school. After SPM, most students take the A-Level, STPM, or a foundation programme in science before applying for a five-year MBBS or MBChB degree. Public universities offering medicine include UM, UKM, USM, UPM, and UiTM — entry is highly competitive and typically requires a minimum CGPA of 3.5 at pre-university level. Private medical colleges such as IMU, Monash Malaysia, and Taylor's University also offer MBBS programmes with direct UK partnerships. After graduating, doctors complete two years of compulsory housemanship in government hospitals, followed by registration with the Malaysian Medical Council (MMC). Only after MMC registration can a doctor practise independently. The full journey from SPM to independent practise takes roughly ten to eleven years. Starting salary for a government Medical Officer after housemanship is around RM 3,800–4,200 per month. Specialists earn considerably more. MyJourney maps this path so you can see every decision point before you commit.",
    intro_bm: "Kerjaya doktor di Malaysia mengikuti laluan yang jelas tetapi mencabar. Bermula dari SPM, pelajar memerlukan keputusan cemerlang dalam Biologi, Kimia, dan Fizik — ketiga-tiganya penting untuk memasuki mana-mana sekolah perubatan Malaysia. Selepas SPM, kebanyakan pelajar mengambil A-Level, STPM, atau program asasi sains sebelum memohon ijazah MBBS atau MBChB selama lima tahun.",
    cta_en: "See Full Doctor Career Path",
    cta_bm: "Lihat Laluan Kerjaya Doktor"
  }
},

{
  slug: "cara-jadi-peguam-malaysia", type: "journey", career_id: "lawyer",
  keywords: {
    primary: "cara nak jadi peguam Malaysia",
    primary_bm: "cara jadi lawyer Malaysia 2026",
    longtail_en: ["how to become a lawyer in Malaysia", "law degree Malaysia requirements", "CLP exam Malaysia", "Bar Council Malaysia admission", "LLB Malaysia universities 2026"],
    longtail_bm: ["syarat jadi peguam Malaysia", "universiti undang-undang Malaysia", "peperiksaan CLP Malaysia", "laluan kerjaya peguam Malaysia", "LLB vs LLM Malaysia"]
  },
  meta: {
    title: "Cara Jadi Peguam di Malaysia 2026 — LLB, CLP & Admission to the Bar | MyJourney",
    title_bm: "Cara Nak Jadi Peguam Malaysia 2026 — Laluan Lengkap | MyJourney",
    description: "How to become a lawyer in Malaysia. LLB universities, the CLP exam, pupillage, and admission to the Bar — the full path explained for Malaysian students.",
    description_bm: "Cara jadi peguam di Malaysia. Universiti LLB, peperiksaan CLP, pupillage, dan kemasukan ke Bar — laluan penuh dijelaskan untuk pelajar Malaysia."
  },
  landing: {
    h1_en: "How to Become a Lawyer in Malaysia — Full Career Path",
    h1_bm: "Cara Jadi Peguam di Malaysia — Laluan Kerjaya Lengkap",
    intro_en: "The path to becoming a lawyer in Malaysia starts with an LLB (Bachelor of Laws) degree — either from a local university like UM, UKM, UiTM, or MMU, or from a recognised overseas institution in the UK, Australia, or New Zealand. If your degree is from an approved local university, you qualify for the Certificate in Legal Practice (CLP) route. Graduates from overseas universities with degrees not automatically recognised by the Malaysian Bar must also sit the CLP. The CLP is a notoriously challenging professional examination — pass rates historically sit around 30–50%, and many candidates sit it multiple times. After passing the CLP (or qualifying directly from recognised universities), candidates undergo nine months of pupillage under a qualified practitioner before being admitted to the Malaysian Bar. The total journey from SPM to independent legal practice typically takes seven to eight years. Law is a popular but competitive career in Malaysia — the Bar is currently overpopulated relative to court capacity in some regions, so understanding the job market before committing matters. MyJourney shows you the specific universities, exam requirements, and timeline.",
    intro_bm: "Laluan menjadi peguam di Malaysia bermula dengan ijazah LLB (Sarjana Muda Undang-Undang) — sama ada dari universiti tempatan seperti UM, UKM, UiTM, atau MMU, atau dari institusi luar negara yang diiktiraf di UK, Australia, atau New Zealand. Selepas ijazah, calon perlu lulus Sijil Amalan Undang-Undang (CLP) sebelum menjalani pupillage selama sembilan bulan.",
    cta_en: "See Full Lawyer Career Path",
    cta_bm: "Lihat Laluan Kerjaya Peguam"
  }
},

{
  slug: "cara-jadi-akauntan-malaysia", type: "journey", career_id: "accountant",
  keywords: {
    primary: "cara nak jadi akauntan Malaysia",
    primary_bm: "cara jadi akauntan Malaysia 2026",
    longtail_en: ["how to become an accountant in Malaysia", "ACCA Malaysia career path", "MIA membership Malaysia", "accounting degree Malaysia universities", "CPA vs ACCA Malaysia"],
    longtail_bm: ["syarat jadi akauntan Malaysia", "ACCA Malaysia berapa tahun", "MIA Malaysia keahlian", "universiti perakaunan Malaysia", "gaji akauntan Malaysia 2026"]
  },
  meta: {
    title: "Cara Jadi Akauntan di Malaysia 2026 — Degree, ACCA & MIA | MyJourney",
    title_bm: "Cara Nak Jadi Akauntan Malaysia 2026 — Laluan Penuh | MyJourney",
    description: "How to become an accountant in Malaysia. Accounting degree options, ACCA vs local qualifications, MIA membership, and what the career actually looks like.",
    description_bm: "Cara jadi akauntan di Malaysia. Pilihan ijazah perakaunan, ACCA vs kelayakan tempatan, keahlian MIA, dan realiti kerjaya sebenar."
  },
  landing: {
    h1_en: "How to Become an Accountant in Malaysia — Full Career Path",
    h1_bm: "Cara Jadi Akauntan di Malaysia — Laluan Kerjaya Lengkap",
    intro_en: "Accountancy is one of Malaysia's most in-demand professional careers with two main entry routes. The first is a local accounting degree from universities like UM, UPM, UKM, UiTM, or private institutions like UTAR and Taylor's — which qualifies you for membership with the Malaysian Institute of Accountants (MIA) after gaining practical experience. The second is a professional qualification route, most commonly ACCA (Association of Chartered Certified Accountants), which is widely recognised in Malaysia and can be completed in parallel with or after a degree. Other professional bodies like CIMA (Chartered Institute of Management Accountants) and CPA Australia also have strong followings. Public sector accountants typically join through the Malaysia Public Service Commission and are governed by MIA. Entry-level audit associates in Big 4 firms start at around RM 2,500–3,000 per month, with significant growth as you gain qualifications. Chartered accountants with MIA membership and experience in a specialised area (tax, forensics, corporate finance) can earn RM 8,000–15,000 or more at senior levels. MyJourney shows the specific path from SPM results to your first professional role.",
    intro_bm: "Perakaunan adalah salah satu kerjaya profesional yang paling banyak dicari di Malaysia dengan dua laluan utama. Laluan pertama adalah ijazah perakaunan tempatan dari universiti seperti UM, UPM, UKM, UiTM, atau institusi swasta seperti UTAR dan Taylor's. Laluan kedua adalah kelayakan profesional seperti ACCA, CIMA, atau CPA Australia.",
    cta_en: "See Full Accountant Career Path",
    cta_bm: "Lihat Laluan Kerjaya Akauntan"
  }
},

{
  slug: "cara-jadi-software-developer-malaysia", type: "journey", career_id: "developer",
  keywords: {
    primary: "cara nak jadi software developer Malaysia",
    primary_bm: "cara jadi programmer Malaysia 2026",
    longtail_en: ["how to become a software developer in Malaysia", "computer science degree Malaysia", "coding career Malaysia 2026", "IT career path Malaysia", "software engineer salary Malaysia"],
    longtail_bm: ["syarat jadi programmer Malaysia", "universiti IT Malaysia terbaik", "gaji software developer Malaysia", "belajar coding Malaysia mana bagus", "kerjaya IT Malaysia 2026"]
  },
  meta: {
    title: "Cara Jadi Software Developer di Malaysia 2026 — CS Degree & Career Path | MyJourney",
    title_bm: "Cara Nak Jadi Programmer Malaysia 2026 — Laluan Kerjaya IT | MyJourney",
    description: "How to become a software developer in Malaysia. Computer science degree options, bootcamp vs degree debate, tech company hiring, and realistic salary expectations.",
    description_bm: "Cara jadi software developer di Malaysia. Pilihan ijazah sains komputer, bootcamp vs degree, syarikat teknologi, dan jangkaan gaji sebenar."
  },
  landing: {
    h1_en: "How to Become a Software Developer in Malaysia — Full Career Path",
    h1_bm: "Cara Jadi Software Developer di Malaysia — Laluan Kerjaya Lengkap",
    intro_en: "Software development is one of the most accessible professional careers in Malaysia in terms of entry paths — a Computer Science or Software Engineering degree from universities like UM, UTM, UPM, MMU, APU, or UTAR is the traditional route, but it is no longer the only one. Coding bootcamps and self-taught developers are increasingly hired by Malaysian tech companies, particularly for front-end and full-stack roles at startups. That said, structured CS degrees still carry weight for positions at larger tech companies and MNCs like Grab, Shopee, Intel, Dell, and Hewlett Packard Enterprise — all of which have significant operations in Malaysia. Malaysia's National AI Roadmap and the Penang Silicon Valley branding have accelerated demand for developers in AI/ML, embedded systems, and cloud engineering. Entry-level developers at tech startups start at around RM 3,000–4,000 per month. Developers with two to three years of experience in in-demand stacks (Python, TypeScript, Go, cloud-native) can realistically earn RM 6,000–10,000. Seniors at established tech companies or MNCs can exceed RM 15,000. MyJourney maps the Malaysian-specific path so you know which degree, which university, and which skills matter here.",
    intro_bm: "Pembangunan perisian adalah salah satu kerjaya profesional yang paling mudah diakses di Malaysia dari segi laluan masuk. Ijazah Sains Komputer atau Kejuruteraan Perisian dari universiti seperti UM, UTM, UPM, MMU, APU, atau UTAR adalah laluan tradisional, tetapi ia bukan satu-satunya cara. Bootcamp pengekodan dan pembangun autodidak semakin banyak diambil bekerja oleh syarikat teknologi Malaysia.",
    cta_en: "See Full Developer Career Path",
    cta_bm: "Lihat Laluan Kerjaya Programmer"
  }
},

{
  slug: "cara-jadi-jurutera-awam-malaysia", type: "journey", career_id: "engineer-civil",
  keywords: {
    primary: "cara nak jadi jurutera awam Malaysia",
    primary_bm: "cara jadi civil engineer Malaysia 2026",
    longtail_en: ["how to become a civil engineer in Malaysia", "civil engineering degree Malaysia", "BEM registration Malaysia", "IEM membership Malaysia", "civil engineer salary Malaysia 2026"],
    longtail_bm: ["syarat jadi jurutera awam Malaysia", "universiti kejuruteraan awam Malaysia", "daftar BEM Malaysia", "gaji jurutera awam Malaysia", "laluan kerjaya jurutera awam"]
  },
  meta: {
    title: "Cara Jadi Jurutera Awam di Malaysia 2026 — BEM, IEM & Laluan Kerjaya | MyJourney",
    title_bm: "Cara Nak Jadi Civil Engineer Malaysia 2026 — Panduan Lengkap | MyJourney",
    description: "How to become a civil engineer in Malaysia. Degree options, BEM Professional Engineer registration, IEM membership, and the full career path from SPM.",
    description_bm: "Cara jadi jurutera awam di Malaysia. Pilihan ijazah, pendaftaran Jurutera Profesional BEM, keahlian IEM, dan laluan kerjaya penuh dari SPM."
  },
  landing: {
    h1_en: "How to Become a Civil Engineer in Malaysia — Full Career Path",
    h1_bm: "Cara Jadi Jurutera Awam di Malaysia — Laluan Kerjaya Lengkap",
    intro_en: "Civil engineering in Malaysia is a regulated profession governed by the Board of Engineers Malaysia (BEM). To practise as a Professional Engineer (PE), you need a BEM-accredited engineering degree — offered at UM, UPM, UTM, UNITEN, UniKL, and several private universities — followed by practical engineering experience and passing the Professional Assessment exam. Students typically enter civil engineering via A-Level, STPM, Foundation in Engineering, or a diploma pathway. A civil engineering degree takes four years for direct entry students. After graduation, engineers register as Graduate Engineers with BEM and must accumulate at least three years of supervised experience before sitting the Professional Assessment. IEM (Institution of Engineers Malaysia) membership runs in parallel and is the professional body for networking and continuing development. Civil engineers work across construction, infrastructure, water resources, geotechnical, and structural disciplines — Malaysia's active infrastructure pipeline (MRT, highway projects, smart city initiatives) keeps demand steady. Graduate salaries start at RM 2,500–3,500. Professional Engineers with PE certification typically earn RM 6,000–12,000 depending on sector and specialisation.",
    intro_bm: "Kejuruteraan awam di Malaysia adalah profesion yang dikawal selia oleh Lembaga Jurutera Malaysia (BEM). Untuk mengamalkan sebagai Jurutera Profesional (PE), anda memerlukan ijazah kejuruteraan yang diakreditasi BEM, diikuti dengan pengalaman kejuruteraan praktikal dan lulus peperiksaan Penilaian Profesional.",
    cta_en: "See Full Civil Engineer Career Path",
    cta_bm: "Lihat Laluan Kerjaya Jurutera Awam"
  }
},

{
  slug: "cara-jadi-jurutera-mekanikal-malaysia", type: "journey", career_id: "engineer-mech",
  keywords: {
    primary: "cara nak jadi jurutera mekanikal Malaysia",
    primary_bm: "cara jadi mechanical engineer Malaysia 2026",
    longtail_en: ["how to become a mechanical engineer in Malaysia", "mechanical engineering degree Malaysia", "BEM IEM mechanical Malaysia", "mechanical engineer salary Malaysia", "oil gas engineering Malaysia"],
    longtail_bm: ["syarat jadi jurutera mekanikal Malaysia", "universiti kejuruteraan mekanikal Malaysia", "gaji jurutera mekanikal Malaysia 2026", "jurutera mekanikal kerja apa Malaysia", "laluan kerjaya mekanikal"]
  },
  meta: {
    title: "Cara Jadi Jurutera Mekanikal di Malaysia 2026 — Laluan & Gaji | MyJourney",
    title_bm: "Cara Nak Jadi Mechanical Engineer Malaysia 2026 | MyJourney",
    description: "How to become a mechanical engineer in Malaysia. Degree options, BEM registration, IEM, and real-world career options in manufacturing, oil & gas, and aerospace.",
    description_bm: "Cara jadi jurutera mekanikal di Malaysia. Pilihan ijazah, pendaftaran BEM, IEM, dan pilihan kerjaya sebenar dalam pembuatan, minyak & gas, dan aeroangkasa."
  },
  landing: {
    h1_en: "How to Become a Mechanical Engineer in Malaysia — Full Career Path",
    h1_bm: "Cara Jadi Jurutera Mekanikal di Malaysia — Laluan Kerjaya Lengkap",
    intro_en: "Mechanical engineering is one of Malaysia's most versatile engineering disciplines, with graduates entering sectors as diverse as oil and gas (Petronas, Shell, Sapura), automotive (Proton, Perodua), aerospace (CTRM, Malaysia Airlines Engineering), semiconductor manufacturing (Penang), and building services. The path follows the same professional framework as civil engineering — a BEM-accredited four-year degree, followed by graduate engineer registration, supervised experience, and Professional Engineer (PE) assessment. UTM, UM, UPM, UNITEN, and Multimedia University are among the institutions offering accredited mechanical engineering programmes. Students enter via A-Level, Foundation in Engineering, or a diploma pathway (diploma holders can often enter Year 2). Mechanical engineers in Malaysia typically specialise during their careers — HVAC, rotating equipment, structural analysis, or product design are common tracks. The semiconductor and E&E (electrical and electronics) manufacturing sector in Penang and Selangor is a major employer of mechanical engineers, particularly in process and equipment engineering roles. Graduate salaries start at around RM 2,800–3,800. PE-certified engineers with specialisation earn RM 7,000–15,000.",
    intro_bm: "Kejuruteraan mekanikal adalah salah satu disiplin kejuruteraan yang paling serba boleh di Malaysia, dengan graduan yang memasuki pelbagai sektor termasuk minyak dan gas, automotif, aeroangkasa, pembuatan semikonduktor, dan perkhidmatan bangunan.",
    cta_en: "See Full Mechanical Engineer Career Path",
    cta_bm: "Lihat Laluan Kerjaya Jurutera Mekanikal"
  }
},

{
  slug: "cara-jadi-guru-malaysia", type: "journey", career_id: "teacher",
  keywords: {
    primary: "cara nak jadi guru Malaysia",
    primary_bm: "cara jadi cikgu Malaysia 2026",
    longtail_en: ["how to become a teacher in Malaysia", "teaching degree Malaysia", "IPGM teachers college Malaysia", "KPM teacher intake 2026", "KPLI Malaysia teaching qualification"],
    longtail_bm: ["syarat jadi guru kerajaan Malaysia", "IPGM kemasukan 2026", "ijazah perguruan Malaysia", "gaji guru kerajaan Malaysia 2026", "laluan kerjaya cikgu Malaysia"]
  },
  meta: {
    title: "Cara Jadi Guru di Malaysia 2026 — IPGM, Degree Pendidikan & Gaji | MyJourney",
    title_bm: "Cara Nak Jadi Cikgu Malaysia 2026 — Syarat & Laluan Penuh | MyJourney",
    description: "How to become a teacher in Malaysia. IPGM diploma route, education degree, KPM teacher placement, and what government teacher pay actually looks like.",
    description_bm: "Cara jadi guru di Malaysia. Laluan diploma IPGM, ijazah pendidikan, penempatan guru KPM, dan realiti gaji guru kerajaan."
  },
  landing: {
    h1_en: "How to Become a Teacher in Malaysia — Full Career Path",
    h1_bm: "Cara Jadi Guru di Malaysia — Laluan Kerjaya Lengkap",
    intro_en: "Teaching in Malaysia's government school system involves two main entry routes. The first is through Institut Pendidikan Guru Malaysia (IPGM) — a teacher training college network under the Ministry of Education — which offers a four-year Bachelor of Education (B.Ed) programme. SPM leavers can apply directly, and selection is competitive. The second route is through a degree in education from public universities like UM, UPM, UKM, UUM, or UPSI (which specialises exclusively in teacher training). Private university education graduates can also apply for government school positions, though government placements are prioritised for public university graduates. Upon completing their qualification, teachers are placed by the Ministry of Education (KPM) into government schools nationwide — placement location is not always the applicant's first choice, and outstation postings to Sabah, Sarawak, or rural Peninsular Malaysia are common especially early in a career. Government teacher salaries start at DG41 grade, currently around RM 2,600–3,200 per month for new entrants, with increments tied to the public service grade progression. Teaching is one of the most JPA and MARA scholarship-supported careers due to national teacher shortage targets — MyScholar lists several scholarship options specifically for education degrees.",
    intro_bm: "Kerjaya perguruan dalam sistem sekolah kerajaan Malaysia mempunyai dua laluan utama. Pertama melalui Institut Pendidikan Guru Malaysia (IPGM) yang menawarkan program Ijazah Sarjana Muda Perguruan (B.Ed) selama empat tahun. Kedua melalui ijazah pendidikan dari universiti awam seperti UM, UPM, UKM, UUM, atau UPSI.",
    cta_en: "See Full Teacher Career Path",
    cta_bm: "Lihat Laluan Kerjaya Guru"
  }
},

{
  slug: "cara-jadi-jururawat-malaysia", type: "journey", career_id: "nurse",
  keywords: {
    primary: "cara nak jadi jururawat Malaysia",
    primary_bm: "cara jadi nurse Malaysia 2026",
    longtail_en: ["how to become a nurse in Malaysia", "nursing degree Malaysia", "Malaysian Nursing Board registration", "nursing salary Malaysia 2026", "post-basic nursing Malaysia"],
    longtail_bm: ["syarat jadi jururawat Malaysia", "ijazah kejururawatan Malaysia", "Lembaga Jururawat Malaysia", "gaji jururawat kerajaan Malaysia", "laluan kerjaya jururawat"]
  },
  meta: {
    title: "Cara Jadi Jururawat di Malaysia 2026 — Degree, Lembaga & Gaji | MyJourney",
    title_bm: "Cara Nak Jadi Nurse Malaysia 2026 — Laluan Kerjaya Penuh | MyJourney",
    description: "How to become a nurse in Malaysia. Nursing diploma vs degree, Malaysian Nursing Board registration, government hospital posting, and realistic pay.",
    description_bm: "Cara jadi jururawat di Malaysia. Diploma vs ijazah kejururawatan, pendaftaran Lembaga Jururawat Malaysia, penempatan hospital kerajaan, dan gaji sebenar."
  },
  landing: {
    h1_en: "How to Become a Nurse in Malaysia — Full Career Path",
    h1_bm: "Cara Jadi Jururawat di Malaysia — Laluan Kerjaya Lengkap",
    intro_en: "Nursing in Malaysia can be entered through two qualification levels — a three-year Diploma in Nursing (offered at public nursing colleges under MOH and private institutions) or a four-year Bachelor of Nursing Science degree from universities like UPM, UM, UiTM, and several private universities. Both pathways lead to registration with the Malaysian Nursing Board (MNB), which is mandatory to practise as a Registered Nurse (RN). After registration, government nurses are posted to Ministry of Health hospitals, clinics, or health offices nationwide. Private hospital nurses are employed directly. New RNs in the government sector start at grade U29 or U32, earning around RM 1,800–2,400 per month — though pay has increased following recent civil service salary adjustments. Post-basic specialist training (ICU, oncology, midwifery, etc.) opens career advancement opportunities and pay increments. Degree-holding nurses are increasingly recruited into nursing education, clinical research, and management roles. There is a significant global demand for Malaysian nurses, particularly from hospitals in the UK, Australia, and the Middle East — though working abroad requires additional licensing in the destination country.",
    intro_bm: "Kejururawatan di Malaysia boleh dimasuki melalui dua peringkat kelayakan — Diploma dalam Kejururawatan selama tiga tahun atau Ijazah Sarjana Muda Sains Kejururawatan selama empat tahun. Kedua-dua laluan membawa kepada pendaftaran dengan Lembaga Jururawat Malaysia (MNB).",
    cta_en: "See Full Nurse Career Path",
    cta_bm: "Lihat Laluan Kerjaya Jururawat"
  }
},

{
  slug: "cara-jadi-farmasis-malaysia", type: "journey", career_id: "pharmacist",
  keywords: {
    primary: "cara nak jadi farmasis Malaysia",
    primary_bm: "cara jadi pharmacist Malaysia 2026",
    longtail_en: ["how to become a pharmacist in Malaysia", "pharmacy degree Malaysia", "Malaysian Pharmacy Board registration", "pharmacist salary Malaysia 2026", "clinical pharmacist Malaysia"],
    longtail_bm: ["syarat jadi farmasis Malaysia", "ijazah farmasi Malaysia", "daftar Lembaga Farmasi Malaysia", "gaji farmasis Malaysia", "laluan kerjaya farmasis"]
  },
  meta: {
    title: "Cara Jadi Farmasis di Malaysia 2026 — Degree, Lembaga & Kerjaya | MyJourney",
    title_bm: "Cara Nak Jadi Pharmacist Malaysia 2026 — Panduan Lengkap | MyJourney",
    description: "How to become a pharmacist in Malaysia. Pharmacy degree, internship year, Pharmacy Board registration, and career options in hospitals, retail, and industry.",
    description_bm: "Cara jadi farmasis di Malaysia. Ijazah farmasi, tahun internship, pendaftaran Lembaga Farmasi, dan pilihan kerjaya di hospital, runcit, dan industri."
  },
  landing: {
    h1_en: "How to Become a Pharmacist in Malaysia — Full Career Path",
    h1_bm: "Cara Jadi Farmasis di Malaysia — Laluan Kerjaya Lengkap",
    intro_en: "Pharmacy in Malaysia requires a four-year Bachelor of Pharmacy degree (B.Pharm) from a recognised institution — UiTM, USM, UPM, UM, and IIUM are the main public universities, while private institutions include International Medical University (IMU) and several others. After the degree, graduates complete a one-year pre-registration internship (either in government or private sectors), followed by registration with the Malaysian Pharmacy Board. Government pharmacists are posted to Ministry of Health hospitals and community clinics. Career paths include hospital pharmacy (clinical pharmaceutical services), industrial pharmacy (working in pharmaceutical manufacturing companies like Pharmaniaga or CCM), regulatory affairs (MDA — Medical Device Authority), retail community pharmacy, and academic/research roles. Entry-level government pharmacists start at around RM 2,800–3,500 per month. Senior hospital pharmacists with clinical specialisation earn considerably more. The pharmaceutical industry in Malaysia is growing — companies like Pharmaniaga, CCM Pharmaceuticals, and international MNCs like Pfizer and Novartis actively recruit Malaysian pharmacy graduates.",
    intro_bm: "Farmasi di Malaysia memerlukan ijazah Sarjana Muda Farmasi (B.Pharm) selama empat tahun dari institusi yang diiktiraf. Selepas ijazah, graduan menjalani internship pra-pendaftaran selama satu tahun sebelum mendaftar dengan Lembaga Farmasi Malaysia.",
    cta_en: "See Full Pharmacist Career Path",
    cta_bm: "Lihat Laluan Kerjaya Farmasis"
  }
},

{
  slug: "cara-jadi-doktor-gigi-malaysia", type: "journey", career_id: "dentist",
  keywords: {
    primary: "cara nak jadi doktor gigi Malaysia",
    primary_bm: "cara jadi dentist Malaysia 2026",
    longtail_en: ["how to become a dentist in Malaysia", "dentistry degree Malaysia", "Malaysian Dental Council registration", "dentist salary Malaysia 2026", "private dentist vs government Malaysia"],
    longtail_bm: ["syarat jadi doktor gigi Malaysia", "ijazah pergigian Malaysia", "MMC DRC pendaftaran pergigian", "gaji doktor gigi Malaysia", "laluan kerjaya doktor gigi"]
  },
  meta: {
    title: "Cara Jadi Doktor Gigi di Malaysia 2026 — Degree, DRC & Laluan | MyJourney",
    title_bm: "Cara Nak Jadi Dentist Malaysia 2026 — Panduan Kerjaya Penuh | MyJourney",
    description: "How to become a dentist in Malaysia. Dentistry degree, housemanship, DRC registration, and the difference between government and private dental practice.",
    description_bm: "Cara jadi doktor gigi di Malaysia. Ijazah pergigian, housemanship, pendaftaran DRC, dan perbezaan antara pergigian kerajaan dan swasta."
  },
  landing: {
    h1_en: "How to Become a Dentist in Malaysia — Full Career Path",
    h1_bm: "Cara Jadi Doktor Gigi di Malaysia — Laluan Kerjaya Lengkap",
    intro_en: "Dentistry in Malaysia follows a path similar to medicine — a five-year Bachelor of Dental Surgery (BDS) degree, followed by compulsory housemanship and registration with the Dental Registration Committee (DRC) under the Malaysian Dental Council. Public universities offering dentistry include UM (the oldest and most established), USM, UKM, and UITM. Private dental colleges like CUCMS and AIMST also offer accredited programmes. Entry is highly competitive — students typically need excellent SPM results in Biology and Chemistry, followed by a strong A-Level or Foundation in Science result. After the BDS and housemanship period (currently 18 months to two years), dentists register with the DRC and can choose to remain in government service or move to private practice. Government dental officers start at around RM 3,200–3,800 per month. Private dental practitioners earn considerably more — experienced private dentists, especially those with specialist qualifications in orthodontics, oral surgery, or prosthodontics, can earn well above RM 15,000 per month. Specialist training is done either locally through the Colleges of Dentistry Malaysia or abroad.",
    intro_bm: "Pergigian di Malaysia mengikuti laluan yang serupa dengan perubatan — ijazah Sarjana Muda Pembedahan Gigi (BDS) selama lima tahun, diikuti dengan housemanship dan pendaftaran dengan Jawatankuasa Pendaftaran Pergigian (DRC) di bawah Majlis Pergigian Malaysia.",
    cta_en: "See Full Dentist Career Path",
    cta_bm: "Lihat Laluan Kerjaya Doktor Gigi"
  }
},

{
  slug: "cara-jadi-arkitek-malaysia", type: "journey", career_id: "architect",
  keywords: {
    primary: "cara nak jadi arkitek Malaysia",
    primary_bm: "cara jadi architect Malaysia 2026",
    longtail_en: ["how to become an architect in Malaysia", "architecture degree Malaysia", "LAM registration Malaysia", "PAM Malaysia architect", "architect salary Malaysia 2026"],
    longtail_bm: ["syarat jadi arkitek Malaysia", "ijazah senibina Malaysia", "daftar LAM Malaysia", "PAM ahli Malaysia", "gaji arkitek Malaysia"]
  },
  meta: {
    title: "Cara Jadi Arkitek di Malaysia 2026 — LAM, PAM & Laluan Kerjaya | MyJourney",
    title_bm: "Cara Nak Jadi Architect Malaysia 2026 — Panduan Lengkap | MyJourney",
    description: "How to become an architect in Malaysia. Architecture degree, Part 1/2/3 LAM exams, PAM membership, and what the profession actually looks like in practice.",
    description_bm: "Cara jadi arkitek di Malaysia. Ijazah senibina, peperiksaan LAM Bahagian 1/2/3, keahlian PAM, dan realiti profesion ini dalam amalan sebenar."
  },
  landing: {
    h1_en: "How to Become an Architect in Malaysia — Full Career Path",
    h1_bm: "Cara Jadi Arkitek di Malaysia — Laluan Kerjaya Lengkap",
    intro_en: "Architecture in Malaysia is a regulated profession with a structured three-part registration process through the Lembaga Arkitek Malaysia (LAM). To become a registered architect, you need to complete a LAM-recognised architecture degree (Part 1), followed by practical training and the Part 2 professional examination, and finally the Part 3 professional competency examination. This process typically takes seven to nine years from the start of your undergraduate degree to full registration. Universities offering accredited architecture programmes include UM, UTM, UiTM, Taylor's University, and UTAR. Entry into architecture programmes is competitive — a strong portfolio showing drawing and spatial thinking skills is often part of the application process for private universities. The Pertubuhan Akitek Malaysia (PAM) is the professional body that architects join for networking, continuing education, and industry representation. Architects in Malaysia work across residential, commercial, institutional, and infrastructure projects. Starting salaries for graduate architects at established firms run from RM 2,500–3,500. Registered architects with a strong portfolio and client base can earn RM 8,000–20,000 or more in senior or principal roles.",
    intro_bm: "Senibina di Malaysia adalah profesion yang dikawal selia dengan proses pendaftaran tiga bahagian melalui Lembaga Arkitek Malaysia (LAM). Untuk menjadi arkitek berdaftar, anda perlu melengkapkan ijazah senibina yang diiktiraf LAM (Bahagian 1), latihan praktikal dan peperiksaan profesional Bahagian 2, serta peperiksaan kecekapan profesional Bahagian 3.",
    cta_en: "See Full Architect Career Path",
    cta_bm: "Lihat Laluan Kerjaya Arkitek"
  }
},

{
  slug: "cara-jadi-marketing-executive-malaysia", type: "journey", career_id: "marketing",
  keywords: {
    primary: "cara nak jadi marketing executive Malaysia",
    primary_bm: "cara jadi marketing Malaysia 2026",
    longtail_en: ["how to become a marketing executive in Malaysia", "marketing degree Malaysia", "digital marketing career Malaysia", "marketing salary Malaysia 2026", "brand manager Malaysia career path"],
    longtail_bm: ["syarat jadi marketing Malaysia", "ijazah pemasaran Malaysia", "digital marketing kerjaya Malaysia", "gaji marketing executive Malaysia", "laluan kerjaya pemasaran"]
  },
  meta: {
    title: "Cara Jadi Marketing Executive di Malaysia 2026 — Degree & Career Path | MyJourney",
    title_bm: "Cara Nak Jadi Marketing Malaysia 2026 — Laluan Kerjaya | MyJourney",
    description: "How to become a marketing professional in Malaysia. Degree options, digital vs traditional marketing, entry-level roles, and what the career ladder looks like.",
    description_bm: "Cara jadi profesional pemasaran di Malaysia. Pilihan ijazah, pemasaran digital vs tradisional, jawatan peringkat permulaan, dan tangga kerjaya sebenar."
  },
  landing: {
    h1_en: "How to Become a Marketing Professional in Malaysia — Full Career Path",
    h1_bm: "Cara Jadi Marketing Executive di Malaysia — Laluan Kerjaya Lengkap",
    intro_en: "Marketing is one of Malaysia's most open career fields — there is no regulated professional body or mandatory licence, which means entry paths are varied. A degree in Marketing, Mass Communication, Business Administration, or even Psychology can all lead to a marketing career. Universities like UM, UPM, UiTM, Taylor's, Sunway, and Monash Malaysia all offer relevant programmes. In practice, Malaysian employers increasingly value a combination of digital skills (Google Analytics, Meta Ads, SEO, content strategy) alongside communication ability. The rise of e-commerce (Shopee, Lazada, TikTok Shop) and digital-first brands has dramatically shifted demand — performance marketers and growth hackers are more sought after than traditional brand advertisers at smaller companies, while MNCs and large consumer brands still invest heavily in brand marketing. Entry-level marketing roles (Marketing Executive, Social Media Executive, Content Writer) start at RM 2,200–3,000. Brand Managers with five to seven years of experience at FMCG companies like Nestlé, Unilever, P&G, or local telecoms earn RM 7,000–12,000. Marketing Directors at large organisations can earn significantly more.",
    intro_bm: "Pemasaran adalah salah satu bidang kerjaya yang paling terbuka di Malaysia — tiada badan profesional yang dikawal selia atau lesen mandatori, yang bermakna laluan masuk adalah pelbagai. Ijazah dalam Pemasaran, Komunikasi Massa, Pentadbiran Perniagaan, atau bahkan Psikologi boleh membawa kepada kerjaya pemasaran.",
    cta_en: "See Full Marketing Career Path",
    cta_bm: "Lihat Laluan Kerjaya Marketing"
  }
},

{
  slug: "cara-jadi-data-scientist-malaysia", type: "journey", career_id: "data",
  keywords: {
    primary: "cara nak jadi data scientist Malaysia",
    primary_bm: "cara jadi data scientist Malaysia 2026",
    longtail_en: ["how to become a data scientist in Malaysia", "data science degree Malaysia", "AI career Malaysia 2026", "machine learning jobs Malaysia", "data analyst vs data scientist Malaysia"],
    longtail_bm: ["syarat jadi data scientist Malaysia", "ijazah data science Malaysia", "kerjaya AI Malaysia", "gaji data scientist Malaysia 2026", "data analyst Malaysia laluan kerjaya"]
  },
  meta: {
    title: "Cara Jadi Data Scientist di Malaysia 2026 — Degree, Skills & Gaji | MyJourney",
    title_bm: "Cara Nak Jadi Data Scientist Malaysia 2026 — Laluan Kerjaya AI | MyJourney",
    description: "How to become a data scientist in Malaysia. Degree options, required skills (Python, SQL, ML), real job market expectations, and the AI career landscape in 2026.",
    description_bm: "Cara jadi data scientist di Malaysia. Pilihan ijazah, kemahiran diperlukan (Python, SQL, ML), jangkaan pasaran kerja sebenar, dan landskap kerjaya AI 2026."
  },
  landing: {
    h1_en: "How to Become a Data Scientist in Malaysia — Full Career Path",
    h1_bm: "Cara Jadi Data Scientist di Malaysia — Laluan Kerjaya Lengkap",
    intro_en: "Data science is one of Malaysia's fastest-growing career fields, driven by the government's National AI Roadmap, Malaysia Digital (formerly MSC Malaysia), and an increase in data-driven decision making across banking, retail, healthcare, and logistics. The most common degree paths are Computer Science, Statistics, Mathematics, or dedicated Data Science and Analytics programmes now offered at UM, UPM, UTM, Sunway University, and APU. That said, Malaysia's data science hiring market is pragmatic — a strong portfolio of projects (Kaggle competitions, personal analyses on GitHub, internship outputs) often carries as much weight as the degree name itself. Core skills expected by Malaysian employers: Python or R for analysis, SQL for data manipulation, at least one ML framework (scikit-learn, TensorFlow, or PyTorch), and the ability to communicate findings clearly to non-technical stakeholders. Entry-level data analysts start at RM 3,000–4,500. Data scientists with two to three years of experience and a track record of production model deployments can earn RM 6,000–10,000. Senior roles at banks (Maybank, CIMB, Public Bank) or tech companies often exceed RM 12,000.",
    intro_bm: "Sains data adalah salah satu bidang kerjaya yang berkembang paling pesat di Malaysia, didorong oleh Peta Jalan AI Negara, Malaysia Digital, dan peningkatan membuat keputusan berasaskan data merentasi perbankan, runcit, penjagaan kesihatan, dan logistik.",
    cta_en: "See Full Data Scientist Career Path",
    cta_bm: "Lihat Laluan Kerjaya Data Scientist"
  }
},

{
  slug: "cara-jadi-jurutera-elektrik-malaysia", type: "journey", career_id: "engineer-elec",
  keywords: {
    primary: "cara nak jadi jurutera elektrik Malaysia",
    primary_bm: "cara jadi electrical engineer Malaysia 2026",
    longtail_en: ["how to become an electrical engineer in Malaysia", "electrical engineering degree Malaysia", "TNB career Malaysia", "semiconductor engineer Malaysia", "electrical engineer salary Malaysia 2026"],
    longtail_bm: ["syarat jadi jurutera elektrik Malaysia", "universiti kejuruteraan elektrik Malaysia", "kerjaya TNB Malaysia", "gaji jurutera elektrik Malaysia", "jurutera elektrik vs elektronik Malaysia"]
  },
  meta: {
    title: "Cara Jadi Jurutera Elektrik di Malaysia 2026 — BEM, TNB & Kerjaya | MyJourney",
    title_bm: "Cara Nak Jadi Electrical Engineer Malaysia 2026 — Panduan Lengkap | MyJourney",
    description: "How to become an electrical engineer in Malaysia. Degree, BEM registration, TNB and semiconductor sector career paths, and salary benchmarks.",
    description_bm: "Cara jadi jurutera elektrik di Malaysia. Ijazah, pendaftaran BEM, laluan kerjaya sektor TNB dan semikonduktor, dan penanda aras gaji."
  },
  landing: {
    h1_en: "How to Become an Electrical Engineer in Malaysia — Full Career Path",
    h1_bm: "Cara Jadi Jurutera Elektrik di Malaysia — Laluan Kerjaya Lengkap",
    intro_en: "Electrical engineering in Malaysia offers one of the broadest career landscapes of any engineering discipline, spanning power and energy (Tenaga Nasional Berhad, Sarawak Energy), semiconductor manufacturing (Penang's silicon valley ecosystem — Intel, Infineon, Broadcom, First Solar), telecommunications (Maxis, Celcom, U Mobile), oil and gas (Petronas upstream instrumentation), and building electrical systems. The professional path mirrors other engineering disciplines — a BEM-accredited four-year Bachelor of Electrical Engineering from UTM, UM, UPM, UiTM, UNITEN, or private universities, followed by graduate engineer registration and eventual Professional Engineer (PE) assessment. UNITEN (Universiti Tenaga Nasional) is notable for its strong TNB industry links. Students from the E&E (electrical and electronics) manufacturing sector often work at multinational semiconductor plants in Penang — these companies actively recruit fresh graduates and sponsor postgraduate study. Graduate salaries start at RM 2,800–3,500. Electrical PEs with specialisations in power systems, process control, or semiconductor manufacturing can earn RM 8,000–15,000.",
    intro_bm: "Kejuruteraan elektrik di Malaysia menawarkan landskap kerjaya yang paling luas antara semua disiplin kejuruteraan, merangkumi tenaga dan kuasa, pembuatan semikonduktor, telekomunikasi, minyak dan gas, serta sistem elektrik bangunan.",
    cta_en: "See Full Electrical Engineer Career Path",
    cta_bm: "Lihat Laluan Kerjaya Jurutera Elektrik"
  }
},

{
  slug: "cara-jadi-quantity-surveyor-malaysia", type: "journey", career_id: "quantity-surveyor",
  keywords: {
    primary: "cara nak jadi quantity surveyor Malaysia",
    primary_bm: "cara jadi QS Malaysia 2026",
    longtail_en: ["how to become a quantity surveyor in Malaysia", "QS degree Malaysia", "BQSM registration Malaysia", "quantity surveyor salary Malaysia 2026", "RISM Malaysia quantity surveyor"],
    longtail_bm: ["syarat jadi QS Malaysia", "ijazah ukur bahan Malaysia", "daftar BQSM Malaysia", "gaji quantity surveyor Malaysia", "laluan kerjaya QS Malaysia"]
  },
  meta: {
    title: "Cara Jadi Quantity Surveyor di Malaysia 2026 — BQSM, RISM & Gaji | MyJourney",
    title_bm: "Cara Nak Jadi QS Malaysia 2026 — Panduan Kerjaya Lengkap | MyJourney",
    description: "How to become a quantity surveyor in Malaysia. QS degree, BQSM registration, RISM membership, and career outlook in Malaysia's active construction sector.",
    description_bm: "Cara jadi quantity surveyor di Malaysia. Ijazah QS, pendaftaran BQSM, keahlian RISM, dan prospek kerjaya dalam sektor pembinaan Malaysia yang aktif."
  },
  landing: {
    h1_en: "How to Become a Quantity Surveyor in Malaysia — Full Career Path",
    h1_bm: "Cara Jadi Quantity Surveyor di Malaysia — Laluan Kerjaya Lengkap",
    intro_en: "Quantity surveying (QS) is one of Malaysia's most steadily in-demand built environment professions. QS professionals manage construction costs, prepare bills of quantities, handle contract administration, and ensure projects are delivered within budget. It is a regulated profession governed by the Board of Quantity Surveyors Malaysia (BQSM) — to use the title 'Registered Quantity Surveyor' you must hold a BQSM-recognised degree and complete a period of supervised professional experience before sitting the BQSM Assessment. Universities offering recognised QS programmes include UTM, UiTM, UTAR, Lincoln University College, and Heriot-Watt University Malaysia. The Royal Institution of Surveyors Malaysia (RISM) is the professional body for networking and career development. QS professionals work for consulting firms (QS consultancies), contractors (as project QS), developers, and government bodies including JKR (Public Works Department). Graduate QS roles start at around RM 2,500–3,200. Registered Quantity Surveyors with project experience earn RM 5,000–10,000. Senior or director-level QS professionals at large consultancies or developers earn more.",
    intro_bm: "Ukur bahan (QS) adalah salah satu profesion alam bina yang paling stabil dituntut di Malaysia. Profesional QS mengurus kos pembinaan, menyediakan bil kuantiti, mengendalikan pentadbiran kontrak, dan memastikan projek disampaikan dalam bajet.",
    cta_en: "See Full Quantity Surveyor Career Path",
    cta_bm: "Lihat Laluan Kerjaya Quantity Surveyor"
  }
},

{
  slug: "cara-jadi-fisioterapi-malaysia", type: "journey", career_id: "physiotherapist",
  keywords: {
    primary: "cara nak jadi fisioterapi Malaysia",
    primary_bm: "cara jadi physiotherapist Malaysia 2026",
    longtail_en: ["how to become a physiotherapist in Malaysia", "physiotherapy degree Malaysia", "MPT registration Malaysia", "allied health career Malaysia", "physiotherapist salary Malaysia 2026"],
    longtail_bm: ["syarat jadi fisioterapi Malaysia", "ijazah fisioterapi Malaysia", "pendaftaran MPT Malaysia", "kerjaya kesihatan bersekutu Malaysia", "gaji fisioterapi Malaysia"]
  },
  meta: {
    title: "Cara Jadi Fisioterapi di Malaysia 2026 — Degree, MPT & Kerjaya | MyJourney",
    title_bm: "Cara Nak Jadi Physiotherapist Malaysia 2026 — Panduan Lengkap | MyJourney",
    description: "How to become a physiotherapist in Malaysia. Physiotherapy degree, MPT registration under the Allied Health Professions Act, and career settings in hospitals and private clinics.",
    description_bm: "Cara jadi fisioterapi di Malaysia. Ijazah fisioterapi, pendaftaran MPT di bawah Akta Profesion Kesihatan Bersekutu, dan tetapan kerjaya di hospital dan klinik swasta."
  },
  landing: {
    h1_en: "How to Become a Physiotherapist in Malaysia — Full Career Path",
    h1_bm: "Cara Jadi Fisioterapi di Malaysia — Laluan Kerjaya Lengkap",
    intro_en: "Physiotherapy in Malaysia is regulated under the Allied Health Professions Act 2016, with registration managed by the Malaysian Physiotherapy Association (MPT) under the Allied Health Professions Regulation. To practise, you need a recognised Bachelor of Physiotherapy degree — offered at UM, UPM, UTM, UiTM, and several private universities including AIMST and KPJ Healthcare University College. The programme typically takes four years and includes significant clinical placement hours in hospital settings. After graduation, physiotherapists complete a one-year internship in a government or accredited private hospital before applying for full MPT registration. Employment settings include government hospitals (MOH), private hospitals, rehabilitation centres, sports facilities, and increasingly home-care services. Stroke rehabilitation, musculoskeletal injury treatment, paediatric physiotherapy, and sports rehabilitation are common specialisation tracks. Government physiotherapists start at around RM 2,300–2,800 per month. Senior physiotherapists in private hospitals or running their own clinic typically earn considerably more. International demand — particularly from Australia, UK, and the Middle East — is strong for Malaysian-trained physiotherapists.",
    intro_bm: "Fisioterapi di Malaysia dikawal selia di bawah Akta Profesion Kesihatan Bersekutu 2016, dengan pendaftaran diuruskan oleh Persatuan Fisioterapi Malaysia (MPT). Untuk mengamalkan, anda memerlukan ijazah Sarjana Muda Fisioterapi yang diiktiraf.",
    cta_en: "See Full Physiotherapist Career Path",
    cta_bm: "Lihat Laluan Kerjaya Fisioterapi"
  }
},

// ============================================================
// === B. INDIVIDUAL CAREERS — STUBS ==========================
// ============================================================

{
  slug: "cara-jadi-graphic-designer-malaysia", type: "journey", career_id: "designer",
  keywords: {
    primary: "cara nak jadi graphic designer Malaysia",
    primary_bm: "cara jadi designer Malaysia 2026",
    longtail_en: ["how to become a graphic designer in Malaysia", "design degree Malaysia", "creative career Malaysia 2026", "UX designer Malaysia career", "freelance designer Malaysia"],
    longtail_bm: ["syarat jadi graphic designer Malaysia", "ijazah reka bentuk Malaysia", "kerjaya kreatif Malaysia", "gaji graphic designer Malaysia", "portfolio designer Malaysia"]
  },
  meta: {
    title: "Cara Jadi Graphic Designer di Malaysia 2026 — Degree, Portfolio & Kerjaya | MyJourney",
    title_bm: "Cara Nak Jadi Designer Malaysia 2026 — Laluan Kerjaya Kreatif | MyJourney",
    description: "How to become a graphic designer in Malaysia. Design degree vs self-taught, portfolio building, agency vs in-house careers, and realistic pay expectations.",
    description_bm: "Cara jadi graphic designer di Malaysia. Ijazah seni reka vs autodidak, membina portfolio, kerjaya agensi vs dalaman, dan jangkaan gaji sebenar."
  },
  landing: {
    h1_en: "How to Become a Graphic Designer in Malaysia — Full Career Path",
    h1_bm: "Cara Jadi Graphic Designer di Malaysia — Laluan Kerjaya Lengkap",
    intro_en: "Graphic design is one of Malaysia's most accessible creative careers — there is no regulated professional body and no licence required to call yourself a designer. That said, a structured design education makes a real difference in how quickly you develop and how seriously you are taken in the job market. Degree programmes in Graphic Design, Visual Communication, or Multimedia Design are available at institutions like UiTM, LUCT, The One Academy, IACT, Dasein, APU, and several others. The curriculum differs substantially between institutions — portfolio quality on graduation is a much stronger hiring signal than the name of the institution. Malaysian employers and clients are increasingly looking for designers who can work across digital and print, handle UI/UX work for apps and websites, create social media content at scale, and operate tools like Figma, Adobe Creative Suite, and Canva. Agency salaries start at around RM 2,000–2,800 for junior designers. Seniors at established agencies earn RM 4,000–7,000. UX/UI specialists at tech companies can earn considerably more — RM 6,000–12,000 for mid-level roles. Freelance income varies widely but experienced freelance designers serving corporate clients can earn beyond RM 10,000 per month.",
    intro_bm: "Reka bentuk grafik adalah salah satu kerjaya kreatif yang paling mudah diakses di Malaysia — tiada badan profesional yang dikawal selia dan tiada lesen diperlukan untuk memanggil diri anda seorang pereka. Walau bagaimanapun, pendidikan reka bentuk yang berstruktur membuat perbezaan sebenar dalam cara anda berkembang dan sejauh mana anda dianggap serius di pasaran kerja.",
    cta_en: "Explore Designer Career Path",
    cta_bm: "Terokai Laluan Kerjaya Designer"
  }
},

{
  slug: "cara-jadi-psikologi-malaysia", type: "journey", career_id: "psychologist",
  keywords: {
    primary: "cara nak jadi psikologi Malaysia",
    primary_bm: "cara jadi psychologist Malaysia 2026",
    longtail_en: ["how to become a psychologist in Malaysia", "psychology degree Malaysia", "clinical psychologist Malaysia registration", "MPA Malaysia", "counselling vs psychology Malaysia"],
    longtail_bm: ["syarat jadi psikologi Malaysia", "ijazah psikologi Malaysia", "psikologi klinikal Malaysia pendaftaran", "kaunseling vs psikologi Malaysia", "gaji psikologi Malaysia"]
  },
  meta: {
    title: "Cara Jadi Psikologi di Malaysia 2026 — Degree, MPA & Kerjaya | MyJourney",
    title_bm: "Cara Nak Jadi Psychologist Malaysia 2026 — Panduan Kerjaya | MyJourney",
    description: "How to become a psychologist in Malaysia. Psychology degree, the difference between psychologist and counsellor, MPA registration, and where psychologists actually work.",
    description_bm: "Cara jadi psikologi di Malaysia. Ijazah psikologi, perbezaan antara psikologi dan kaunselor, pendaftaran MPA, dan di mana psikologi sebenarnya bekerja."
  },
  landing: {
    h1_en: "How to Become a Psychologist in Malaysia — Full Career Path",
    h1_bm: "Cara Jadi Psikologi di Malaysia — Laluan Kerjaya Lengkap",
    intro_en: "Psychology in Malaysia is a developing profession in terms of regulation. Unlike medicine or law, the title 'psychologist' is not currently fully protected by statute — though this is changing. The Malaysian Psychological Association (MPA) is developing registration frameworks for clinical and counselling psychologists, and regulatory clarity is expected to increase over the coming years. An undergraduate degree in Psychology from UM, UPM, UKM, HELP University, Sunway University, or Taylor's University is the starting point. Most professional practice requires a Master's degree in Clinical Psychology, Counselling Psychology, or Educational Psychology. Clinical psychologists work in psychiatric hospitals and MOH mental health units; counselling psychologists work in schools, universities, and private practice; industrial-organisational psychologists work in HR, talent management, and occupational health. A licensed counsellor (under the Counsellors Act 1998, LKM registration) is a separate but related pathway — counsellors can practise without a master's degree in psychology. Starting salaries for psychology graduates in entry-level HR or counselling support roles are around RM 2,000–2,800. Clinical psychologists with master's qualifications in government settings earn RM 3,500–5,000. Private practice rates vary widely.",
    intro_bm: "Psikologi di Malaysia adalah profesion yang sedang berkembang dari segi peraturan. Tidak seperti perubatan atau undang-undang, gelaran 'psikologi' pada masa ini belum sepenuhnya dilindungi oleh undang-undang — walaupun ini sedang berubah. Persatuan Psikologi Malaysia (MPA) sedang membangunkan rangka kerja pendaftaran untuk psikologi klinikal dan kaunseling.",
    cta_en: "Explore Psychologist Career Path",
    cta_bm: "Terokai Laluan Kerjaya Psikologi"
  }
},

{
  slug: "cara-jadi-veterinar-malaysia", type: "journey", career_id: "vet",
  keywords: {
    primary: "cara nak jadi doktor haiwan Malaysia",
    primary_bm: "cara jadi vet Malaysia 2026",
    longtail_en: ["how to become a veterinarian in Malaysia", "veterinary degree Malaysia", "DVS Malaysia registration", "UPM veterinary school Malaysia", "vet salary Malaysia 2026"],
    longtail_bm: ["syarat jadi doktor haiwan Malaysia", "ijazah veterinar Malaysia", "pendaftaran DVS Malaysia", "UPM doktor haiwan Malaysia", "gaji doktor haiwan Malaysia"]
  },
  meta: {
    title: "Cara Jadi Doktor Haiwan di Malaysia 2026 — DVS, UPM & Kerjaya | MyJourney",
    title_bm: "Cara Nak Jadi Vet Malaysia 2026 — Panduan Kerjaya Lengkap | MyJourney",
    description: "How to become a veterinarian in Malaysia. Veterinary degree, DVS Malaysia registration, the UPM veterinary school, and career paths in small animal, livestock, and wildlife practice.",
    description_bm: "Cara jadi doktor haiwan di Malaysia. Ijazah veterinar, pendaftaran DVS Malaysia, sekolah veterinar UPM, dan laluan kerjaya dalam amalan haiwan kecil, ternakan, dan hidupan liar."
  },
  landing: {
    h1_en: "How to Become a Veterinarian in Malaysia — Full Career Path",
    h1_bm: "Cara Jadi Doktor Haiwan di Malaysia — Laluan Kerjaya Lengkap",
    intro_en: "Veterinary medicine in Malaysia is a regulated profession under the Veterinary Surgeons Act 1974, with registration managed by the Department of Veterinary Services Malaysia (DVS). Universiti Putra Malaysia (UPM) is historically the primary veterinary school in Malaysia and remains the most established, though other institutions have since developed programmes. The degree is a five-year Doctor of Veterinary Medicine (DVM) — entry requires excellent SPM results in Biology and Chemistry, followed by a strong pre-university result in science. After graduation, new vets register with DVS and can choose from several career paths: government veterinary services (DVS itself — livestock disease control, food safety, border inspection), private small animal practice (companion animal clinics, of which there is a growing number in urban Malaysia), aquatic animal medicine (given Malaysia's significant fishery and aquaculture sector), wildlife medicine (Zoo Negara, Perhilitan, wildlife rehabilitation), and livestock/agri-business roles. Starting salaries for government veterinary officers are around RM 2,800–3,500. Experienced small animal practitioners at established private clinics can earn considerably more, and those who own their own clinic have uncapped income potential.",
    intro_bm: "Perubatan veterinar di Malaysia adalah profesion yang dikawal selia di bawah Akta Doktor Haiwan 1974, dengan pendaftaran diuruskan oleh Jabatan Perkhidmatan Veterinar Malaysia (DVS). UPM secara sejarah adalah sekolah veterinar utama di Malaysia.",
    cta_en: "Explore Vet Career Path",
    cta_bm: "Terokai Laluan Kerjaya Doktor Haiwan"
  }
},

{
  slug: "cara-jadi-chef-malaysia", type: "journey", career_id: "chef",
  keywords: {
    primary: "cara nak jadi chef Malaysia",
    primary_bm: "cara jadi chef profesional Malaysia 2026",
    longtail_en: ["how to become a chef in Malaysia", "culinary school Malaysia", "KDU culinary arts Malaysia", "hotel chef career Malaysia", "chef salary Malaysia 2026"],
    longtail_bm: ["syarat jadi chef Malaysia", "sekolah masakan Malaysia", "seni kulinari Malaysia diploma", "kerjaya chef hotel Malaysia", "gaji chef Malaysia"]
  },
  meta: {
    title: "Cara Jadi Chef di Malaysia 2026 — Culinary School, Hotel & Kerjaya | MyJourney",
    title_bm: "Cara Nak Jadi Chef Profesional Malaysia 2026 — Panduan Kerjaya | MyJourney",
    description: "How to become a chef in Malaysia. Culinary school vs on-the-job training, hotel career paths, F&B industry landscape, and realistic chef salaries.",
    description_bm: "Cara jadi chef di Malaysia. Sekolah kulinari vs latihan kerja, laluan kerjaya hotel, landskap industri F&B, dan gaji chef yang sebenar."
  },
  landing: {
    h1_en: "How to Become a Chef in Malaysia — Full Career Path",
    h1_bm: "Cara Jadi Chef di Malaysia — Laluan Kerjaya Lengkap",
    intro_en: "Cheffing in Malaysia is one of the few professional careers where formal qualifications, while helpful, are genuinely secondary to skill and experience. That said, the food and beverage (F&B) industry is competitive at the top end, and culinary training from a recognised institution opens doors to five-star hotel kitchens and established restaurant groups faster. Culinary arts programmes are offered at KDU University College, Taylor's University, Berjaya University College of Hospitality, and a number of private culinary schools. Diploma and degree programmes in Culinary Arts, Food Service Management, or Hospitality Management are common entry routes. The hotel sector is the largest employer of formally trained chefs in Malaysia — Marriott, Hilton, Four Seasons, and local luxury brands like YTL Hotels all run structured kitchen hierarchies with clear promotion tracks. F&B entrepreneurship is also a realistic end-goal for many chefs — Malaysia's food scene (from street food to fine dining) provides genuine opportunities. Kitchen salaries start low — commis chefs at hotels begin at around RM 1,500–2,200. Sous chefs at established restaurants earn RM 4,000–7,000. Executive Chefs at five-star hotels earn RM 8,000–20,000 or more.",
    intro_bm: "Kerjaya chef di Malaysia adalah salah satu daripada beberapa kerjaya profesional di mana kelayakan formal, walaupun berguna, benar-benar adalah kedua kepada kemahiran dan pengalaman. Walau bagaimanapun, industri makanan dan minuman (F&B) adalah kompetitif di peringkat tertinggi, dan latihan kulinari dari institusi yang diiktiraf membuka pintu kepada dapur hotel bintang lima.",
    cta_en: "Explore Chef Career Path",
    cta_bm: "Terokai Laluan Kerjaya Chef"
  }
},

// ============================================================
// === C. CATEGORY PAGES ======================================
// ============================================================

{
  slug: "kerjaya-bidang-kesihatan-malaysia", type: "journey",
  keywords: {
    primary: "kerjaya bidang kesihatan Malaysia",
    primary_bm: "kerjaya kesihatan Malaysia 2026",
    longtail_en: ["health careers in Malaysia", "medical careers Malaysia 2026", "allied health jobs Malaysia", "healthcare degree Malaysia", "best health careers Malaysia salary"],
    longtail_bm: ["kerjaya perubatan Malaysia", "bidang kesihatan bersekutu Malaysia", "pilihan kerjaya kesihatan Malaysia", "gaji kerjaya kesihatan Malaysia", "universiti kesihatan Malaysia"]
  },
  meta: {
    title: "Kerjaya Bidang Kesihatan Malaysia 2026 — Semua Pilihan dalam Satu Tempat | MyJourney",
    title_bm: "Pilihan Kerjaya Kesihatan Malaysia 2026 — Doktor, Jururawat & Lebih | MyJourney",
    description: "All health careers in Malaysia — doctor, dentist, pharmacist, nurse, physiotherapist, and more. See the full path for each and compare your options.",
    description_bm: "Semua kerjaya kesihatan di Malaysia — doktor, doktor gigi, farmasis, jururawat, fisioterapi, dan lebih. Lihat laluan penuh setiap satu dan bandingkan pilihan anda."
  },
  landing: {
    h1_en: "Health Careers in Malaysia — All Pathways in One Place",
    h1_bm: "Kerjaya Bidang Kesihatan Malaysia — Semua Laluan dalam Satu Tempat",
    intro_en: "Malaysia's healthcare sector is one of the country's largest employers and a consistent source of stable, respected careers. For students finishing SPM with strong science results, the health sector offers more than just medicine and dentistry — there are eight or more distinct health professions, each with its own regulatory body, degree pathway, and career landscape. Doctor (MBBS, MMC registration), Dentist (BDS, DRC registration), Pharmacist (B.Pharm, Pharmacy Board), Nurse (Diploma or B.Nursing, MNB registration), Physiotherapist (B.Physiotherapy, MPT registration), Occupational Therapist, Medical Laboratory Technologist, and Radiographer are all fully regulated allied health professions in Malaysia. Each has a different study length, salary range, work environment, and demand outlook. MyJourney maps each health career individually — you can see the exact SPM requirements, pre-university options, universities, registration bodies, and salary data for each one before you commit to an application.",
    intro_bm: "Sektor penjagaan kesihatan Malaysia adalah salah satu majikan terbesar negara dan sumber kerjaya yang stabil dan dihormati secara konsisten. Untuk pelajar yang menamatkan SPM dengan keputusan sains yang cemerlang, sektor kesihatan menawarkan lebih daripada sekadar perubatan dan pergigian — terdapat lapan atau lebih profesion kesihatan yang berbeza.",
    cta_en: "Explore All Health Careers",
    cta_bm: "Terokai Semua Kerjaya Kesihatan"
  }
},

{
  slug: "kerjaya-bidang-kejuruteraan-malaysia", type: "journey",
  keywords: {
    primary: "kerjaya bidang kejuruteraan Malaysia",
    primary_bm: "kerjaya engineering Malaysia 2026",
    longtail_en: ["engineering careers Malaysia 2026", "best engineering field Malaysia", "civil vs mechanical vs electrical Malaysia", "engineering degree Malaysia salary", "engineering jobs Malaysia 2026"],
    longtail_bm: ["bidang kejuruteraan terbaik Malaysia", "pilihan kerjaya jurutera Malaysia", "jurutera awam vs mekanikal vs elektrik Malaysia", "gaji jurutera Malaysia 2026", "universiti kejuruteraan Malaysia terbaik"]
  },
  meta: {
    title: "Kerjaya Bidang Kejuruteraan Malaysia 2026 — Civil, Mekanikal, Elektrik & Lebih | MyJourney",
    title_bm: "Pilihan Kerjaya Engineering Malaysia 2026 — Panduan Lengkap | MyJourney",
    description: "All engineering careers in Malaysia — civil, mechanical, electrical, chemical, and more. Compare pathways, BEM registration, and salary benchmarks before choosing your discipline.",
    description_bm: "Semua kerjaya kejuruteraan di Malaysia — awam, mekanikal, elektrik, kimia, dan lebih. Bandingkan laluan, pendaftaran BEM, dan penanda aras gaji sebelum memilih disiplin anda."
  },
  landing: {
    h1_en: "Engineering Careers in Malaysia — Compare All Pathways",
    h1_bm: "Kerjaya Kejuruteraan Malaysia — Bandingkan Semua Laluan",
    intro_en: "Engineering is Malaysia's most consistently in-demand professional sector, supported by active infrastructure spending, a thriving E&E manufacturing corridor in Penang and Selangor, Petronas and oil and gas operations, and an expanding semiconductor industry. All engineering disciplines in Malaysia are regulated by the Board of Engineers Malaysia (BEM) — which means the professional pathway (degree → graduate engineer registration → supervised experience → Professional Engineer assessment) is broadly the same across civil, mechanical, electrical, chemical, and other engineering branches. The choice of discipline matters enormously for which industry you work in and which companies recruit you. Civil engineers go into infrastructure, construction, and water resources. Mechanical engineers go into oil and gas, automotive, HVAC, and manufacturing. Electrical engineers go into power utilities, semiconductors, and telecommunications. Chemical engineers go into petrochemical, pharmaceutical, and food processing. MyJourney has a dedicated page for each discipline so you can see the specific universities, BEM accreditation status, and real salary data before choosing.",
    intro_bm: "Kejuruteraan adalah sektor profesional yang paling konsisten dituntut di Malaysia, disokong oleh perbelanjaan infrastruktur yang aktif, koridor pembuatan E&E yang berkembang pesat di Pulau Pinang dan Selangor, operasi Petronas, dan industri semikonduktor yang berkembang.",
    cta_en: "Explore All Engineering Careers",
    cta_bm: "Terokai Semua Kerjaya Kejuruteraan"
  }
},

{
  slug: "kerjaya-bidang-teknologi-malaysia", type: "journey",
  keywords: {
    primary: "kerjaya bidang teknologi Malaysia",
    primary_bm: "kerjaya IT Malaysia 2026",
    longtail_en: ["tech careers Malaysia 2026", "IT jobs Malaysia fresh graduate", "AI careers Malaysia", "cybersecurity career Malaysia", "software engineer vs data scientist Malaysia"],
    longtail_bm: ["bidang IT Malaysia pilihan kerjaya", "kerjaya AI Malaysia 2026", "cybersecurity kerjaya Malaysia", "gaji IT Malaysia fresh grad", "universiti IT Malaysia terbaik"]
  },
  meta: {
    title: "Kerjaya Bidang Teknologi Malaysia 2026 — IT, AI, Cyber & Software | MyJourney",
    title_bm: "Pilihan Kerjaya IT Malaysia 2026 — Semua Laluan dalam Satu Tempat | MyJourney",
    description: "All tech careers in Malaysia — software developer, data scientist, cybersecurity, cloud engineering, and more. See which path fits your interests and what each actually pays.",
    description_bm: "Semua kerjaya teknologi di Malaysia — pembangun perisian, saintis data, keselamatan siber, kejuruteraan awan, dan lebih. Lihat laluan mana yang sesuai dengan minat anda."
  },
  landing: {
    h1_en: "Tech Careers in Malaysia 2026 — All Pathways in One Place",
    h1_bm: "Kerjaya Teknologi Malaysia 2026 — Semua Laluan dalam Satu Tempat",
    intro_en: "Malaysia's technology sector is one of the fastest-growing career destinations for students finishing SPM, with the government's National AI Roadmap, Malaysia Digital (formerly MSC Malaysia), and a pipeline of MNC technology investments creating genuine demand for local tech talent. Unlike engineering or medicine, technology careers in Malaysia are mostly unregulated — there is no mandatory licence or professional body registration for most roles. This makes entry more flexible but also means the job market is skills-driven rather than credential-driven. Core technology career paths Malaysian students commonly pursue include: Software Development and Engineering (the largest employer category), Data Science and Analytics (fastest-growing), Cybersecurity (severe talent shortage), Cloud and DevOps Engineering (strong MNC demand), UI/UX Design (cross-discipline), and Artificial Intelligence Engineering (the highest-growth segment under Malaysia's AI agenda). MyJourney has a dedicated path for Software Developer and Data Scientist — the two built-out tech careers in the current database — with more to follow.",
    intro_bm: "Sektor teknologi Malaysia adalah salah satu destinasi kerjaya yang paling pesat berkembang bagi pelajar yang menamatkan SPM, dengan Peta Jalan AI Negara, Malaysia Digital, dan saluran pelaburan teknologi MNC mencipta permintaan sebenar untuk bakat teknologi tempatan.",
    cta_en: "Explore All Tech Careers",
    cta_bm: "Terokai Semua Kerjaya Teknologi"
  }
},

{
  slug: "kerjaya-bidang-perniagaan-malaysia", type: "journey",
  keywords: {
    primary: "kerjaya bidang perniagaan Malaysia",
    primary_bm: "kerjaya bisnes Malaysia 2026",
    longtail_en: ["business careers Malaysia 2026", "finance career Malaysia", "accounting vs finance Malaysia", "corporate career Malaysia fresh grad", "MBA Malaysia worth it"],
    longtail_bm: ["bidang perniagaan Malaysia pilihan kerjaya", "kerjaya kewangan Malaysia", "akauntan vs penganalisis kewangan Malaysia", "kerjaya korporat Malaysia graduan", "gaji bidang perniagaan Malaysia"]
  },
  meta: {
    title: "Kerjaya Bidang Perniagaan Malaysia 2026 — Accounting, Finance & Marketing | MyJourney",
    title_bm: "Pilihan Kerjaya Perniagaan Malaysia 2026 — Panduan Graduan | MyJourney",
    description: "Business careers in Malaysia — accountant, financial analyst, marketing, and more. Compare degree options, professional qualifications, and what each role actually pays.",
    description_bm: "Kerjaya perniagaan di Malaysia — akauntan, penganalisis kewangan, pemasaran, dan lebih. Bandingkan pilihan ijazah, kelayakan profesional, dan gaji sebenar setiap peranan."
  },
  landing: {
    h1_en: "Business Careers in Malaysia 2026 — All Pathways Compared",
    h1_bm: "Kerjaya Perniagaan Malaysia 2026 — Semua Laluan Dibandingkan",
    intro_en: "Business is the most popular undergraduate field of study in Malaysia and also the most varied in terms of career outcomes. A business degree can lead to accounting and audit, financial analysis and investment, marketing and brand management, human resources, operations and supply chain, entrepreneurship, or corporate finance — and the outcomes depend heavily on which specialisation you pursue, which professional qualifications you add, and where you intern during your degree. Malaysian students in the business field often pursue professional qualifications alongside or after their degree — ACCA, CIMA, or CPA Australia for accountants; CFA for finance professionals; CIPP or CIPD for HR specialists. Big 4 accounting firms (Deloitte, PwC, EY, KPMG) are major graduate employers. Banks (Maybank, CIMB, Public Bank, RHB) recruit heavily from business faculties. The corporate sector, GLCs (Khazanah, Permodalan Nasional, Sime Darby), and government-linked financial institutions also absorb large numbers of business graduates. MyJourney has dedicated paths for Accountant, Marketing Executive, and Financial Analyst.",
    intro_bm: "Perniagaan adalah bidang pengajian ijazah pertama yang paling popular di Malaysia dan juga paling pelbagai dari segi hasil kerjaya. Ijazah perniagaan boleh membawa kepada perakaunan dan audit, analisis kewangan dan pelaburan, pemasaran dan pengurusan jenama, sumber manusia, operasi dan rantaian bekalan, atau kewangan korporat.",
    cta_en: "Explore All Business Careers",
    cta_bm: "Terokai Semua Kerjaya Perniagaan"
  }
},

{
  slug: "kerjaya-bidang-undang-undang-malaysia", type: "journey",
  keywords: {
    primary: "kerjaya bidang undang-undang Malaysia",
    primary_bm: "kerjaya law Malaysia 2026",
    longtail_en: ["law careers Malaysia 2026", "alternatives to being a lawyer Malaysia", "syariah law career Malaysia", "legal career options Malaysia", "legal officer government Malaysia"],
    longtail_bm: ["bidang undang-undang Malaysia pilihan kerjaya", "kerjaya selain peguam Malaysia", "undang-undang syariah kerjaya Malaysia", "pegawai undang-undang kerajaan Malaysia", "gaji kerjaya undang-undang Malaysia"]
  },
  meta: {
    title: "Kerjaya Bidang Undang-Undang Malaysia 2026 — Peguam, Syariah & Lebih | MyJourney",
    title_bm: "Pilihan Kerjaya Undang-Undang Malaysia 2026 — Panduan Lengkap | MyJourney",
    description: "Law careers in Malaysia — advocate and solicitor, Syariah lawyer, legal officer, in-house counsel, and more. What each path requires and what it pays.",
    description_bm: "Kerjaya undang-undang di Malaysia — peguam bela dan peguam cara, peguam syariah, pegawai undang-undang, penasihat undang-undang dalaman, dan lebih."
  },
  landing: {
    h1_en: "Law Careers in Malaysia 2026 — Beyond Just Being a Lawyer",
    h1_bm: "Kerjaya Undang-Undang Malaysia 2026 — Lebih daripada Sekadar Peguam",
    intro_en: "Law in Malaysia opens more career paths than many students realise. The most visible is Advocate and Solicitor — private practice legal work, admitted to the Malaysian Bar after completing an LLB and the CLP examination and nine months of pupillage. But legal qualifications are used across a much wider range of roles. Government Legal Officers (Pegawai Undang-Undang) work in the Attorney General's Chambers, government ministries, and statutory bodies — entry is through the Public Service Commission and offers stable, structured career progression. In-house legal counsel roles at corporations, banks, and GLCs are another major path for law graduates, offering corporate hours and competitive pay. Syariah law is a distinct track — graduates of Syariah law programmes (from UIAM/IIUM, UM, or state Syariah institutions) can practise as Syariah advocates in the Syariah courts. Academic law (lecturing and research) is also a path for those who pursue postgraduate qualifications. MyJourney currently maps the Lawyer (Advocate and Solicitor) path in detail — with the CLP, pupillage, and private practice career ladder all laid out for Malaysian students.",
    intro_bm: "Undang-undang di Malaysia membuka lebih banyak laluan kerjaya daripada yang disedari kebanyakan pelajar. Peguam Bela dan Peguam Cara adalah yang paling ketara — kerja undang-undang guaman persendirian, diterima masuk ke Bar Malaysia selepas melengkapkan LLB dan peperiksaan CLP serta pupillage selama sembilan bulan.",
    cta_en: "Explore All Law Careers",
    cta_bm: "Terokai Semua Kerjaya Undang-Undang"
  }
},

// ============================================================
// === D. HIGH-INTENT / COMPARISON PAGES ======================
// ============================================================

{
  slug: "pilihan-kerjaya-selepas-spm-2026", type: "journey",
  keywords: {
    primary: "pilihan kerjaya selepas SPM Malaysia",
    primary_bm: "kerjaya selepas SPM Malaysia 2026",
    longtail_en: ["what to do after SPM Malaysia 2026", "career options after SPM Malaysia", "best courses after SPM Malaysia", "SPM leaver career guide Malaysia", "pre-university options Malaysia 2026"],
    longtail_bm: ["apa buat lepas SPM Malaysia", "pilihan kerjaya lepas SPM 2026", "kursus terbaik selepas SPM Malaysia", "lepas SPM nak buat apa Malaysia", "matrikulasi vs asasi vs STPM Malaysia"]
  },
  meta: {
    title: "Pilihan Kerjaya Selepas SPM Malaysia 2026 — Panduan untuk Pelajar | MyJourney",
    title_bm: "Apa Nak Buat Lepas SPM Malaysia 2026 — Semua Pilihan Dijelaskan | MyJourney",
    description: "What to do after SPM in Malaysia 2026. Pre-university options (Matric, A-Level, Foundation, STPM, Diploma), which careers each route leads to, and how to decide.",
    description_bm: "Apa nak buat selepas SPM di Malaysia 2026. Pilihan pra-universiti (Matrikulasi, A-Level, Asasi, STPM, Diploma), kerjaya mana yang setiap laluan membawa kepada, dan cara membuat keputusan."
  },
  landing: {
    h1_en: "What to Do After SPM in Malaysia 2026 — Full Career Planning Guide",
    h1_bm: "Apa Nak Buat Lepas SPM Malaysia 2026 — Panduan Perancangan Kerjaya",
    intro_en: "Finishing SPM is the most significant decision point in a Malaysian student's academic life — and also one of the most confusing. The question 'what do I do next?' is immediately followed by 'which pre-university route should I take?', which is then followed by 'which degree?', and then 'which career?'. These decisions are connected, and making them in the wrong order costs time and money. The five main pre-university pathways in Malaysia are: Matriculation (KPM Matrikulasi — one or two years, only for Bumiputera and quota-based), STPM (Sijil Tinggi Persekolahan Malaysia — two years, public exam, for all students), Foundation programmes (one year, offered by public and private universities), A-Level (two years, private or international schools), and Diploma (two to three years, polytechnic or private college, can articulate into degree Year 2). Each route has different costs, different durations, different university eligibility, and different career implications. MyJourney was built to answer the downstream question — once you know which career you want, work backwards to see which pre-U route makes the most sense. Browse any career below to see its SPM and pre-U requirements.",
    intro_bm: "Menamatkan SPM adalah titik keputusan paling penting dalam kehidupan akademik pelajar Malaysia — dan juga salah satu yang paling mengelirukan. Soalan 'apa nak buat seterusnya?' diikuti segera dengan 'laluan pra-universiti mana yang patut diambil?', kemudian 'ijazah mana?', dan kemudian 'kerjaya mana?'. Keputusan-keputusan ini adalah saling berkaitan.",
    cta_en: "Explore Career Paths from SPM",
    cta_bm: "Terokai Laluan Kerjaya dari SPM"
  }
},

{
  slug: "kerjaya-bergaji-tinggi-malaysia-2026", type: "journey",
  keywords: {
    primary: "kerjaya bergaji tinggi Malaysia 2026",
    primary_bm: "gaji tertinggi kerjaya Malaysia 2026",
    longtail_en: ["highest paying jobs in Malaysia 2026", "best salary careers Malaysia fresh graduate", "high income careers Malaysia", "doctor vs lawyer vs engineer salary Malaysia", "most in demand jobs Malaysia 2026"],
    longtail_bm: ["kerjaya gaji paling tinggi Malaysia", "gaji fresh grad Malaysia 2026", "kerjaya pendapatan tinggi Malaysia", "doktor vs peguam vs jurutera gaji Malaysia", "kerjaya paling laku Malaysia 2026"]
  },
  meta: {
    title: "Kerjaya Bergaji Tinggi Malaysia 2026 — Gaji Sebenar Setiap Profesion | MyJourney",
    title_bm: "Gaji Tertinggi Kerjaya Malaysia 2026 — Perbandingan Sebenar | MyJourney",
    description: "Which careers pay the most in Malaysia in 2026? Real salary data for doctors, lawyers, engineers, data scientists, architects, and more — with honest context on what it takes to get there.",
    description_bm: "Kerjaya mana yang paling banyak membayar di Malaysia pada 2026? Data gaji sebenar untuk doktor, peguam, jurutera, saintis data, arkitek, dan lebih — dengan konteks jujur tentang apa yang diperlukan."
  },
  landing: {
    h1_en: "Highest Paying Careers in Malaysia 2026 — Real Data, Honest Context",
    h1_bm: "Kerjaya Bergaji Tertinggi Malaysia 2026 — Data Sebenar, Konteks Jujur",
    intro_en: "Salary comparisons between careers in Malaysia are often misleading because they conflate entry-level pay with peak-career pay, or they compare government and private sector without clarifying the difference. Here is an honest overview of what different Malaysian professions actually pay at different career stages. Doctors in government service start at around RM 3,800–4,200 as a Medical Officer after housemanship; specialists earn RM 8,000–15,000+. Lawyers start low (RM 2,000–2,500 as a pupil) and scale widely depending on firm type — partners at top commercial firms can earn RM 30,000+ per month. Engineers (civil, mechanical, electrical) start at RM 2,500–3,500 as graduates and scale to RM 8,000–15,000+ as Professional Engineers in specialist roles. Data Scientists start at RM 3,000–4,500 and scale quickly — senior roles at tech companies or banks reach RM 12,000–18,000. Accountants start at RM 2,500–3,000 and scale to RM 10,000–20,000+ for CFO-level roles at public companies. Architects start at RM 2,500–3,000 and scale to RM 15,000+ as principals at major firms. The honest reality: most Malaysian professional careers take five to ten years to reach their high-income phase. The careers with the longest training periods (medicine, law) often also have the highest ceilings. MyJourney maps the full timeline for each career so you can make an informed decision.",
    intro_bm: "Perbandingan gaji antara kerjaya di Malaysia sering mengelirukan kerana ia mencampurkan gaji peringkat permulaan dengan gaji puncak kerjaya, atau membandingkan sektor kerajaan dan swasta tanpa menjelaskan perbezaannya. Berikut adalah gambaran keseluruhan yang jujur tentang apa yang sebenarnya dibayar oleh profesion Malaysia yang berbeza pada peringkat kerjaya yang berbeza.",
    cta_en: "Compare Career Paths & Salaries",
    cta_bm: "Bandingkan Laluan Kerjaya & Gaji"
  }
},

{
  slug: "career-path-malaysia-students", type: "journey",
  keywords: {
    primary: "career path Malaysia students",
    primary_bm: "laluan kerjaya pelajar Malaysia 2026",
    longtail_en: ["career planning Malaysia student guide", "how to choose a career in Malaysia", "MyJourney career path Malaysia", "career exploration Malaysia SPM student", "what career suits me Malaysia"],
    longtail_bm: ["perancangan kerjaya pelajar Malaysia", "cara pilih kerjaya Malaysia", "terokai kerjaya Malaysia", "kerjaya yang sesuai untuk saya Malaysia", "panduan kerjaya pelajar SPM Malaysia"]
  },
  meta: {
    title: "Career Path Malaysia — Explore Every Option Before You Decide | MyJourney",
    title_bm: "Laluan Kerjaya Malaysia — Terokai Setiap Pilihan Sebelum Membuat Keputusan | MyJourney",
    description: "MyJourney maps career paths for Malaysian students — from SPM subjects to degree to first job. See the real route for 20+ professions, with scholarships and internships built in.",
    description_bm: "MyJourney memetakan laluan kerjaya untuk pelajar Malaysia — dari subjek SPM hingga ijazah hingga kerja pertama. Lihat laluan sebenar untuk 20+ profesion, dengan biasiswa dan internship disertakan."
  },
  landing: {
    h1_en: "Career Paths for Malaysian Students — See the Full Route Before You Commit",
    h1_bm: "Laluan Kerjaya untuk Pelajar Malaysia — Lihat Laluan Penuh Sebelum Komit",
    intro_en: "Most career advice for Malaysian students comes from two places: parents who graduated in a different economy, and generic websites that describe jobs without explaining how to actually get into them in Malaysia. MyJourney is built to fix that gap. It maps 20+ career pathways specific to the Malaysian context — covering the SPM subjects you need, which pre-university route makes sense, which Malaysian universities offer relevant degrees, what the regulatory body registration process looks like, and what you can realistically expect to earn at different stages. Every career on MyJourney also links directly to relevant scholarships on MyScholar (so you can see which scholarships fund that path) and to relevant internships on MyIntern (so you can see where students actually get early experience in that field). It is still early days and we are adding more careers regularly, but the 20+ currently live are among the most-searched by Malaysian students. If you already have a career in mind, go directly to that career page. If you are still figuring it out, the category pages for health, engineering, technology, business, and law are good places to start.",
    intro_bm: "Kebanyakan nasihat kerjaya untuk pelajar Malaysia datang dari dua tempat: ibu bapa yang bergraduat dalam ekonomi yang berbeza, dan laman web generik yang menerangkan pekerjaan tanpa menjelaskan cara sebenar untuk memasukinya di Malaysia. MyJourney dibina untuk mengisi jurang tersebut.",
    cta_en: "Explore All Career Paths",
    cta_bm: "Terokai Semua Laluan Kerjaya"
  }
},

{
  slug: "kerjaya-selepas-ijazah-sains-malaysia", type: "journey",
  keywords: {
    primary: "kerjaya selepas ijazah sains Malaysia",
    primary_bm: "kerja lepas degree sains Malaysia 2026",
    longtail_en: ["careers after science degree Malaysia", "science graduate jobs Malaysia", "biology degree Malaysia career", "chemistry degree career Malaysia", "what can I do with a science degree Malaysia"],
    longtail_bm: ["kerjaya ijazah sains Malaysia", "kerja untuk graduan sains Malaysia", "ijazah biologi kerjaya Malaysia", "ijazah kimia kerja apa Malaysia", "sains tulen vs gunaan Malaysia"]
  },
  meta: {
    title: "Kerjaya Selepas Ijazah Sains Malaysia 2026 — Semua Pilihan Dijelaskan | MyJourney",
    title_bm: "Kerja Lepas Degree Sains Malaysia 2026 — Panduan Graduan Sains | MyJourney",
    description: "What can you do with a science degree in Malaysia? Career paths for biology, chemistry, physics, and biomedical science graduates — including professional routes and industry options.",
    description_bm: "Apa yang boleh anda lakukan dengan ijazah sains di Malaysia? Laluan kerjaya untuk graduan biologi, kimia, fizik, dan sains bioperubatan — termasuk laluan profesional dan pilihan industri."
  },
  landing: {
    h1_en: "Careers After a Science Degree in Malaysia — Full Guide",
    h1_bm: "Kerjaya Selepas Ijazah Sains di Malaysia — Panduan Lengkap",
    intro_en: "A science degree in Malaysia — whether in Biology, Chemistry, Physics, Biochemistry, Biotechnology, or Biomedical Science — opens more doors than many students realise, but the connection between the degree and the career is not always obvious. The most direct routes from science degrees lead into the health professions — though these require professional degrees (MBBS, BPharm, B.Physio) rather than a pure science BSc. A BSc in Biomedical Science, for example, is often used as a stepping stone into medical laboratory work (registered with the Medical Technology Board), or as a foundation for postgraduate study in molecular biology, genetics, or pharmaceutical research. Chemistry graduates often enter the pharmaceutical, food science, petrochemical (Petronas), or materials science industries. Physics graduates are in demand for semiconductor process engineering roles (particularly in Penang's E&E corridor) and in data science (strong mathematical foundation). Environmental Science and Biotechnology graduates find roles in environmental consulting, government agencies (MPOB for palm oil research, MARDI for agricultural research, Bioeconomy Corporation), and biopharmaceutical production. If you are studying a pure science degree and wondering which professional career it can lead to, MyJourney's health and engineering career pages give the most direct cross-reference.",
    intro_bm: "Ijazah sains di Malaysia — sama ada dalam Biologi, Kimia, Fizik, Biokimia, Bioteknologi, atau Sains Bioperubatan — membuka lebih banyak pintu daripada yang disedari kebanyakan pelajar, tetapi hubungan antara ijazah dan kerjaya tidak selalu jelas.",
    cta_en: "Find Your Career Path",
    cta_bm: "Cari Laluan Kerjaya Anda"
  }
},

{
  slug: "tips-pilih-kerjaya-malaysia", type: "journey",
  keywords: {
    primary: "tips pilih kerjaya Malaysia",
    primary_bm: "cara pilih kerjaya yang sesuai Malaysia 2026",
    longtail_en: ["how to choose a career in Malaysia", "career quiz Malaysia student", "interest vs salary career Malaysia", "career advice Malaysia SPM leaver", "passion vs stable career Malaysia"],
    longtail_bm: ["cara memilih kerjaya yang sesuai Malaysia", "minat vs gaji kerjaya Malaysia", "nasihat kerjaya pelajar SPM Malaysia", "passion vs kerjaya stabil Malaysia", "kerjaya yang sesuai dengan diri saya"]
  },
  meta: {
    title: "Tips Pilih Kerjaya Malaysia 2026 — Cara Buat Keputusan yang Betul | MyJourney",
    title_bm: "Cara Pilih Kerjaya Yang Sesuai Malaysia 2026 — Panduan Pelajar | MyJourney",
    description: "How to choose a career in Malaysia — practical advice for SPM leavers and degree students on interest, salary, job market, and making a decision you won't regret.",
    description_bm: "Cara pilih kerjaya di Malaysia — nasihat praktikal untuk pelajar lepasan SPM dan pelajar ijazah tentang minat, gaji, pasaran kerja, dan membuat keputusan yang tidak akan anda sesali."
  },
  landing: {
    h1_en: "How to Choose a Career in Malaysia — Practical Advice, Not Just Inspiration",
    h1_bm: "Cara Pilih Kerjaya di Malaysia — Nasihat Praktikal, Bukan Sekadar Inspirasi",
    intro_en: "Career choice advice in Malaysia tends to fall into two unhelpful extremes: 'follow your passion' (with no acknowledgment of job market realities) or 'pick something stable and practical' (with no acknowledgment that you will spend 35+ years doing it). The truth is that a good career decision for a Malaysian student in 2026 involves four things held in balance: genuine interest or aptitude in the subject area (you do not need to love every day, but active disinterest is a red flag), realistic understanding of the job market for that career in Malaysia (some fields are genuinely oversupplied; others have structural talent gaps), clarity on the actual pathway (how long, how much does education cost, what are the barriers to entry), and financial fit (can you fund the education, and does the expected income match your life goals?). MyJourney was built to help with the third point — the pathway clarity — because it is the most factual and least discussed. Once you know what a career actually requires in Malaysia, you can make a better-informed decision on the other three. Start by browsing a few careers that interest you, read the full path, and compare them honestly.",
    intro_bm: "Nasihat pilihan kerjaya di Malaysia cenderung jatuh ke dua ekstrem yang tidak berguna: 'ikuti minat anda' (tanpa pengakuan tentang realiti pasaran kerja) atau 'pilih sesuatu yang stabil dan praktikal' (tanpa pengakuan bahawa anda akan menghabiskan 35+ tahun melakukannya).",
    cta_en: "Browse All Career Paths",
    cta_bm: "Layari Semua Laluan Kerjaya"
  }
}

]; // end wave12 exports
