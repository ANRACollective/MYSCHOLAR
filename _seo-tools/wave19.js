/**
 * JACK Wave 19 - 2026-08-05
 * 10 new cara-jadi career pages (all career_ids verified against Supabase careers table):
 * A. Tech & data (5): penetration-tester, devops-engineer, data-engineer, ecommerce-manager, tax-consultant
 * B. Health, law & education (5): clinical-psychologist, audiologist, syariah-lawyer, forensic-scientist, sped-teacher
 *
 * wave19-generate.js also REGENERATES Wave 17's 9 journey pages with the v6 builder
 * (teal styling + career deep-links) and fixes two wrong career_ids:
 * university-lecturer -> lecturer, lab-technician -> medical-lab-tech.
 *
 * Slug collision check: all 10 clean vs manifest (552 entries as of 2026-08-05).
 */

module.exports = [
// ============================================================
// === WAVE 19 A: TECH & DATA CAREERS (1-5) ===================
// ============================================================

{
  slug: "cara-jadi-penetration-tester-malaysia",
  type: "journey", career_id: "penetration-tester",
  keywords: {
    primary: "how to become penetration tester Malaysia",
    primary_bm: "cara jadi penetration tester malaysia",
    longtail_en: ["penetration tester salary Malaysia", "ethical hacker career Malaysia", "OSCP certification Malaysia", "cybersecurity pentest jobs Malaysia", "bug bounty Malaysia income"],
    longtail_bm: ["gaji penetration tester malaysia", "kerjaya ethical hacker malaysia", "sijil OSCP malaysia", "kerja pentest cybersecurity", "pendapatan bug bounty malaysia"]
  },
  meta: {
    title: "Cara Jadi Penetration Tester di Malaysia 2026 - Sijil, Gaji & Laluan | MyJourney",
    title_bm: "How to Become a Penetration Tester in Malaysia 2026 - Certs, Salary & Path | MyJourney",
    description: "Companies pay penetration testers to legally hack them before criminals do. The certifications that matter in Malaysia, realistic starting pay of RM3,000 to RM5,000, and how to build proof of skill.",
    description_bm: "Syarikat membayar penetration tester untuk menggodam mereka secara sah sebelum penjenayah buat. Sijil yang penting di Malaysia, gaji permulaan realistik RM3,000 hingga RM5,000, dan cara bina bukti kemahiran."
  },
  landing: {
    h1_en: "How to Become a Penetration Tester in Malaysia",
    h1_bm: "Cara Jadi Penetration Tester di Malaysia",
    intro_en: "Penetration testing is the offensive side of cybersecurity: companies hire you to break into their own systems legally, then report how you did it before a real attacker finds the same hole. Demand in Malaysia keeps climbing because Bank Negara's risk requirements push banks and insurers into regular testing, and consultancies, telcos and the Big Four all run growing offensive security teams, alongside agencies like CyberSecurity Malaysia. The typical route in is a computer science or cybersecurity degree, and APU, MMU, UTeM and UiTM all run dedicated security programmes, but this field is unusually open to proof over paper. Certifications carry real hiring weight: CompTIA Security+ or eJPT to get started, then OSCP, which is the certification Malaysian employers most consistently respect for pentest roles. What gets you hired is demonstrated skill: a HackTheBox or TryHackMe profile with real progress, CTF competition results (Malaysia has an active scene through events run by universities and CyberSecurity Malaysia), write-ups of boxes you solved, and bug bounty findings even if the payouts were small. Fresh pentesters start around RM3,000 to RM5,000, and the ceiling rises quickly: experienced consultants bill at rates that push salaries well past RM10,000, and regional remote roles pay more. One honest warning: this job is report writing as much as hacking. The finding matters only if you can explain it clearly to someone non-technical.",
    intro_bm: "Penetration testing ialah sisi serangan dalam cybersecurity: syarikat upah anda untuk menceroboh sistem mereka sendiri secara sah, kemudian lapor bagaimana anda buat sebelum penyerang sebenar jumpa lubang yang sama. Permintaan di Malaysia terus naik kerana keperluan risiko Bank Negara mendorong bank dan syarikat insurans membuat ujian berkala, dan firma perunding, telco serta Big Four semuanya ada pasukan keselamatan ofensif yang berkembang, di samping agensi seperti CyberSecurity Malaysia. Laluan biasa ialah ijazah sains komputer atau cybersecurity, dan APU, MMU, UTeM serta UiTM ada program keselamatan khusus, tetapi bidang ini luar biasa terbuka kepada bukti berbanding sijil semata-mata. Pensijilan ada berat sebenar dalam pengambilan: CompTIA Security+ atau eJPT untuk mula, kemudian OSCP, pensijilan yang paling konsisten dihormati majikan Malaysia untuk peranan pentest. Yang buat anda diambil kerja ialah kemahiran yang terbukti: profil HackTheBox atau TryHackMe dengan kemajuan sebenar, keputusan pertandingan CTF (Malaysia ada scene aktif melalui acara universiti dan CyberSecurity Malaysia), write-up mesin yang anda selesaikan, dan penemuan bug bounty walaupun bayarannya kecil. Pentester baru mula sekitar RM3,000 hingga RM5,000, dan silingnya naik cepat: perunding berpengalaman dapat gaji jauh melepasi RM10,000, dan kerja remote serantau bayar lebih. Satu amaran jujur: kerja ini menulis laporan sama banyak dengan menggodam. Penemuan hanya bernilai kalau anda boleh terangkan dengan jelas kepada orang bukan teknikal.",
    cta_en: "See the full penetration tester career path",
    cta_bm: "Lihat laluan kerjaya penetration tester"
  }
},

{
  slug: "cara-jadi-jurutera-devops-malaysia",
  type: "journey", career_id: "devops-engineer",
  keywords: {
    primary: "how to become DevOps engineer Malaysia",
    primary_bm: "cara jadi jurutera devops malaysia",
    longtail_en: ["DevOps engineer salary Malaysia", "DevOps skills Docker Kubernetes", "AWS certification Malaysia career", "DevOps career path from developer", "cloud DevOps jobs KL"],
    longtail_bm: ["gaji jurutera devops malaysia", "skil devops docker kubernetes", "sijil AWS malaysia", "laluan kerjaya devops", "kerja devops kuala lumpur"]
  },
  meta: {
    title: "Cara Jadi Jurutera DevOps di Malaysia 2026 - Skil, Sijil & Gaji | MyJourney",
    title_bm: "How to Become a DevOps Engineer in Malaysia 2026 - Skills, Certs & Salary | MyJourney",
    description: "DevOps engineers keep software shipping smoothly, and Malaysian employers cannot hire enough of them. The skills stack, the certifications worth paying for, and starting pay around RM4,000.",
    description_bm: "Jurutera DevOps memastikan perisian dilancar dengan lancar, dan majikan Malaysia tidak cukup orang untuk diambil. Susunan kemahiran, sijil yang berbaloi, dan gaji permulaan sekitar RM4,000."
  },
  landing: {
    h1_en: "How to Become a DevOps Engineer in Malaysia",
    h1_bm: "Cara Jadi Jurutera DevOps di Malaysia",
    intro_en: "DevOps sits between writing software and running it: engineers in this role build the pipelines that test and deploy code automatically, manage cloud infrastructure, and keep production systems alive at 3am so developers do not have to. In Malaysia the demand comes from everywhere at once: banks modernising core systems, GXBank and the digital banks built cloud-native from day one, fintechs, the MNC tech hubs in KL and Penang, and every company moving workloads onto AWS, Azure or Google Cloud. Almost nobody starts as a DevOps engineer straight out of university. The normal path is one to two years as a software developer or system administrator first, then a sideways move once you know how systems break. The skill stack that Malaysian job ads actually list: Linux fundamentals, Docker and Kubernetes, a CI/CD tool like GitLab CI or Jenkins, infrastructure-as-code with Terraform, one major cloud platform, and enough scripting (Python or Bash) to automate anything you do twice. Certifications help here more than in most tech roles because they map directly to tools: AWS Solutions Architect Associate and the Certified Kubernetes Administrator are the two with the most pull locally. Starting pay is around RM4,000 and moves fast: three years of solid Kubernetes and cloud experience routinely commands RM7,000 to RM9,000 in KL, and remote regional roles pay above that.",
    intro_bm: "DevOps duduk di antara menulis perisian dan menjalankannya: jurutera dalam peranan ini bina pipeline yang menguji dan melancarkan kod secara automatik, mengurus infrastruktur cloud, dan memastikan sistem produksi hidup pukul 3 pagi supaya developer tidak perlu. Di Malaysia permintaan datang dari semua arah serentak: bank memodenkan sistem teras, GXBank dan bank digital dibina cloud-native dari hari pertama, fintech, hub teknologi MNC di KL dan Pulau Pinang, dan setiap syarikat yang memindahkan beban kerja ke AWS, Azure atau Google Cloud. Hampir tiada siapa mula sebagai jurutera DevOps terus dari universiti. Laluan biasa ialah satu hingga dua tahun sebagai software developer atau system administrator dulu, kemudian beralih setelah anda faham bagaimana sistem rosak. Susunan kemahiran yang iklan kerja Malaysia betul-betul senaraikan: asas Linux, Docker dan Kubernetes, alat CI/CD seperti GitLab CI atau Jenkins, infrastructure-as-code dengan Terraform, satu platform cloud utama, dan skrip (Python atau Bash) yang cukup untuk mengautomasikan apa sahaja yang anda buat dua kali. Pensijilan membantu di sini lebih daripada kebanyakan peranan teknologi kerana ia terus berkait dengan alat: AWS Solutions Architect Associate dan Certified Kubernetes Administrator dua yang paling laku tempatan. Gaji permulaan sekitar RM4,000 dan naik pantas: tiga tahun pengalaman Kubernetes dan cloud yang kukuh biasa dapat RM7,000 hingga RM9,000 di KL, dan kerja remote serantau bayar lebih tinggi.",
    cta_en: "See the full DevOps career path",
    cta_bm: "Lihat laluan kerjaya DevOps"
  }
},

{
  slug: "cara-jadi-data-engineer-malaysia",
  type: "journey", career_id: "data-engineer",
  keywords: {
    primary: "how to become data engineer Malaysia",
    primary_bm: "cara jadi data engineer malaysia",
    longtail_en: ["data engineer salary Malaysia", "data engineer vs data scientist", "SQL Python Spark skills Malaysia", "data pipeline engineer jobs", "data engineering course Malaysia"],
    longtail_bm: ["gaji data engineer malaysia", "beza data engineer dan data scientist", "skil SQL python spark", "kerja data pipeline malaysia", "kursus data engineering malaysia"]
  },
  meta: {
    title: "Cara Jadi Data Engineer di Malaysia 2026 - Skil, Gaji & Laluan | MyJourney",
    title_bm: "How to Become a Data Engineer in Malaysia 2026 - Skills, Salary & Path | MyJourney",
    description: "Data engineers build the pipelines every AI and analytics team depends on, and they now out-earn most data scientists in Malaysia. The skills, the pathway, and starting pay from RM4,500.",
    description_bm: "Data engineer bina pipeline yang setiap pasukan AI dan analitik bergantung padanya, dan kini pendapatan mereka melebihi kebanyakan data scientist di Malaysia. Kemahiran, laluan, dan gaji permulaan dari RM4,500."
  },
  landing: {
    h1_en: "How to Become a Data Engineer in Malaysia",
    h1_bm: "Cara Jadi Data Engineer di Malaysia",
    intro_en: "Everyone talks about data scientists, but the quiet truth of the Malaysian job market is that data engineers are scarcer, hired faster and often paid better. The difference matters: a data scientist builds models, while a data engineer builds the pipelines that collect, clean and deliver the data those models need. No pipeline, no model, which is why every bank, telco, airline and e-commerce platform in Malaysia is hiring for this role, and why the AI and data centre wave keeps raising demand. The route in is a computer science, software engineering or data science degree, though strong graduates from maths and other engineering fields make the jump too. The working skill set is concrete: SQL at a genuinely deep level (this is the single most tested skill in interviews), Python, a pipeline orchestrator like Airflow, distributed processing with Spark, and cloud data platforms, with Databricks and the cloud-native warehouses appearing in more Malaysian job ads each year. A practical way to prove yourself without experience: build one end-to-end project that pulls real Malaysian public data, cleans it, loads it into a warehouse and updates on a schedule, then put it on GitHub. Starting pay runs RM4,500 and up, seniors clear RM8,000 to RM12,000, and because the tooling is identical worldwide, remote regional offers come early in this career.",
    intro_bm: "Semua orang cakap tentang data scientist, tetapi kebenaran senyap pasaran kerja Malaysia ialah data engineer lebih jarang, lebih cepat diambil dan selalunya dibayar lebih baik. Bezanya penting: data scientist bina model, manakala data engineer bina pipeline yang mengumpul, membersih dan menghantar data yang model itu perlukan. Tiada pipeline, tiada model, sebab itu setiap bank, telco, syarikat penerbangan dan platform e-dagang di Malaysia sedang mengambil peranan ini, dan gelombang AI serta pusat data terus menaikkan permintaan. Laluan masuk ialah ijazah sains komputer, kejuruteraan perisian atau sains data, walaupun graduan matematik dan kejuruteraan lain yang kukuh turut berjaya beralih. Set kemahiran kerjanya konkrit: SQL pada tahap betul-betul mendalam (ini kemahiran paling banyak diuji dalam temuduga), Python, orchestrator pipeline seperti Airflow, pemprosesan teragih dengan Spark, dan platform data cloud, dengan Databricks dan warehouse cloud-native muncul dalam lebih banyak iklan kerja Malaysia setiap tahun. Cara praktikal buktikan diri tanpa pengalaman: bina satu projek hujung-ke-hujung yang tarik data awam Malaysia sebenar, bersihkan, muatkan ke warehouse dan kemas kini ikut jadual, kemudian letak di GitHub. Gaji permulaan RM4,500 ke atas, senior lepasi RM8,000 hingga RM12,000, dan kerana alatnya sama di seluruh dunia, tawaran remote serantau datang awal dalam kerjaya ini.",
    cta_en: "See the full data engineer career path",
    cta_bm: "Lihat laluan kerjaya data engineer"
  }
},

{
  slug: "cara-jadi-ecommerce-manager-malaysia",
  type: "journey", career_id: "ecommerce-manager",
  keywords: {
    primary: "how to become ecommerce manager Malaysia",
    primary_bm: "cara jadi ecommerce manager malaysia",
    longtail_en: ["ecommerce manager salary Malaysia", "Shopee Lazada TikTok Shop career", "ecommerce jobs Malaysia degree", "online business management career", "ecommerce marketing skills Malaysia"],
    longtail_bm: ["gaji ecommerce manager malaysia", "kerjaya shopee lazada tiktok shop", "kerja e-dagang malaysia", "pengurusan perniagaan online", "skil pemasaran ecommerce"]
  },
  meta: {
    title: "Cara Jadi E-commerce Manager di Malaysia 2026 - Laluan & Gaji | MyJourney",
    title_bm: "How to Become an E-commerce Manager in Malaysia 2026 - Path & Salary | MyJourney",
    description: "Malaysia shops online, and every brand needs someone running its Shopee, Lazada and TikTok Shop presence. The routes into e-commerce management and pay from RM3,500 to RM5,500.",
    description_bm: "Malaysia membeli-belah online, dan setiap jenama perlukan orang yang mengurus kehadiran Shopee, Lazada dan TikTok Shop mereka. Laluan ke pengurusan e-dagang dan gaji dari RM3,500 hingga RM5,500."
  },
  landing: {
    h1_en: "How to Become an E-commerce Manager in Malaysia",
    h1_bm: "Cara Jadi E-commerce Manager di Malaysia",
    intro_en: "E-commerce management is one of the few business careers in Malaysia where a 24-year-old can genuinely run a revenue line, because the platforms are young, the playbook changes monthly, and experience on Shopee, Lazada and TikTok Shop counts for more than seniority. The job is running a brand's online retail operation end to end: listings and content, pricing and promotions, campaign calendars around the mega sales (11.11, 12.12, Raya and payday cycles), performance ads inside and outside the platforms, inventory coordination with the warehouse, and the customer chat that decides your store rating. Routes in are flexible. A marketing or business degree is the common base, and platform-side roles at Shopee or Lazada as account managers teach the mechanics faster than anywhere, but the most convincing candidates often started by running a store themselves: their own small brand, a family business they digitised, or a campus dropship experiment with real numbers to show. That last point is the practical advice: you can build the portfolio for this career with RM500 of stock while still studying. Starting salaries for e-commerce executives sit around RM2,500 to RM3,500, managers running full store P&L earn RM3,500 to RM5,500, and heads of e-commerce at established brands go well beyond, with TikTok Shop expertise currently the scarcest and most rewarded skill in the market.",
    intro_bm: "Pengurusan e-dagang antara kerjaya perniagaan di Malaysia yang membolehkan orang berumur 24 tahun betul-betul mengurus satu barisan pendapatan, kerana platformnya muda, playbook berubah setiap bulan, dan pengalaman di Shopee, Lazada dan TikTok Shop lebih bernilai daripada senioriti. Kerjanya mengurus operasi runcit online sesuatu jenama dari hujung ke hujung: listing dan kandungan, harga dan promosi, kalendar kempen sekitar mega sale (11.11, 12.12, Raya dan kitaran gaji), iklan prestasi dalam dan luar platform, koordinasi inventori dengan gudang, dan chat pelanggan yang menentukan rating kedai anda. Laluan masuknya fleksibel. Ijazah pemasaran atau perniagaan asas biasa, dan peranan di pihak platform seperti account manager di Shopee atau Lazada mengajar mekaniknya paling cepat, tetapi calon paling meyakinkan selalunya mula dengan mengurus kedai sendiri: jenama kecil sendiri, perniagaan keluarga yang mereka digitalkan, atau eksperimen dropship kampus dengan angka sebenar untuk ditunjuk. Itu nasihat praktikalnya: anda boleh bina portfolio kerjaya ini dengan stok RM500 sambil masih belajar. Gaji permulaan eksekutif e-dagang sekitar RM2,500 hingga RM3,500, manager yang pegang P&L penuh kedai dapat RM3,500 hingga RM5,500, dan ketua e-dagang di jenama mapan jauh melebihi itu, dengan kepakaran TikTok Shop kini kemahiran paling jarang dan paling diberi ganjaran dalam pasaran.",
    cta_en: "See the full e-commerce career path",
    cta_bm: "Lihat laluan kerjaya e-dagang"
  }
},

{
  slug: "cara-jadi-perunding-cukai-malaysia",
  type: "journey", career_id: "tax-consultant",
  keywords: {
    primary: "how to become tax consultant Malaysia",
    primary_bm: "cara jadi perunding cukai malaysia",
    longtail_en: ["tax consultant salary Malaysia", "tax agent license LHDN", "CTIM Chartered Tax Institute Malaysia", "Big 4 tax career Malaysia", "tax career accounting degree"],
    longtail_bm: ["gaji perunding cukai malaysia", "lesen ejen cukai LHDN", "CTIM institut percukaian malaysia", "kerjaya cukai big 4", "kerjaya cukai ijazah perakaunan"]
  },
  meta: {
    title: "Cara Jadi Perunding Cukai di Malaysia 2026 - CTIM, LHDN & Gaji | MyJourney",
    title_bm: "How to Become a Tax Consultant in Malaysia 2026 - CTIM, LHDN & Salary | MyJourney",
    description: "Tax never goes out of demand. The pathway from accounting degree to licensed tax agent in Malaysia: Big 4 tax departments, CTIM qualification, LHDN licensing, and pay from RM3,200.",
    description_bm: "Cukai tidak pernah hilang permintaan. Laluan dari ijazah perakaunan ke ejen cukai berlesen di Malaysia: jabatan cukai Big 4, kelayakan CTIM, pelesenan LHDN, dan gaji dari RM3,200."
  },
  landing: {
    h1_en: "How to Become a Tax Consultant in Malaysia",
    h1_bm: "Cara Jadi Perunding Cukai di Malaysia",
    intro_en: "Tax is the accounting specialisation with the most durable demand in Malaysia: every company must file, the rules change every Budget, e-invoicing has forced thousands of businesses to modernise, and SST scope keeps widening, all of which means work for people who understand the system. The standard entry is an accounting degree or a professional qualification like ACCA, followed by a junior role in a tax department. The Big Four (KPMG, EY, PwC, Deloitte) hire large tax cohorts every year in KL and regional offices, and mid-tier firms like BDO, Crowe and Baker Tilly offer faster exposure to whole client files. Inside tax you specialise: corporate compliance, individual tax, transfer pricing (the best paid track), indirect tax covering SST and customs, or tax advisory for deals and restructuring. The professional ladder runs through CTIM, the Chartered Tax Institute of Malaysia, whose examinations and membership are the recognised professional standard, and the formal peak is becoming a licensed tax agent under Section 153 of the Income Tax Act, approved by the Ministry of Finance, which lets you sign filings and run your own practice. Juniors start around RM3,200, three to four years in puts you at RM4,500 plus, transfer pricing specialists and managers clear RM7,000 to RM10,000, and licensed agents with their own client base effectively own a recurring-revenue business, because tax season comes every single year.",
    intro_bm: "Cukai ialah pengkhususan perakaunan dengan permintaan paling tahan lama di Malaysia: setiap syarikat mesti failkan, peraturan berubah setiap Belanjawan, e-invois memaksa ribuan perniagaan memodenkan sistem, dan skop SST terus meluas, semuanya bermakna kerja untuk orang yang faham sistem ini. Kemasukan standard ialah ijazah perakaunan atau kelayakan profesional seperti ACCA, diikuti peranan junior dalam jabatan cukai. Big Four (KPMG, EY, PwC, Deloitte) ambil kohort cukai yang besar setiap tahun di KL dan pejabat wilayah, dan firma pertengahan seperti BDO, Crowe dan Baker Tilly beri pendedahan lebih cepat kepada fail klien penuh. Dalam bidang cukai anda mengkhusus: pematuhan korporat, cukai individu, transfer pricing (trek paling lumayan), cukai tidak langsung meliputi SST dan kastam, atau khidmat nasihat cukai untuk urus niaga dan penstrukturan semula. Tangga profesionalnya melalui CTIM, Chartered Tax Institute of Malaysia, yang peperiksaan dan keahliannya standard profesional yang diiktiraf, dan kemuncak formalnya ialah menjadi ejen cukai berlesen di bawah Seksyen 153 Akta Cukai Pendapatan, diluluskan Kementerian Kewangan, yang membolehkan anda menandatangani failan dan buka amalan sendiri. Junior mula sekitar RM3,200, tiga hingga empat tahun kemudian RM4,500 ke atas, pakar transfer pricing dan manager lepasi RM7,000 hingga RM10,000, dan ejen berlesen dengan pangkalan klien sendiri sebenarnya memiliki perniagaan pendapatan berulang, kerana musim cukai datang setiap tahun.",
    cta_en: "See the full tax consultant career path",
    cta_bm: "Lihat laluan kerjaya perunding cukai"
  }
},
// ============================================================
// === WAVE 19 B: HEALTH, LAW & EDUCATION CAREERS (6-10) ======
// ============================================================

{
  slug: "cara-jadi-psikologi-klinikal-malaysia",
  type: "journey", career_id: "clinical-psychologist",
  keywords: {
    primary: "how to become clinical psychologist Malaysia",
    primary_bm: "cara jadi ahli psikologi klinikal malaysia",
    longtail_en: ["clinical psychology masters Malaysia", "clinical psychologist salary Malaysia", "clinical psychology HELP UKM", "psychology degree pathway Malaysia", "mental health career Malaysia"],
    longtail_bm: ["sarjana psikologi klinikal malaysia", "gaji ahli psikologi klinikal", "psikologi klinikal HELP UKM", "laluan ijazah psikologi malaysia", "kerjaya kesihatan mental malaysia"]
  },
  meta: {
    title: "Cara Jadi Ahli Psikologi Klinikal di Malaysia 2026 - Sarjana, Gaji & Laluan | MyJourney",
    title_bm: "How to Become a Clinical Psychologist in Malaysia 2026 - Masters, Salary & Path | MyJourney",
    description: "Clinical psychology requires a specific masters degree that only a few Malaysian universities offer. The full pathway from SPM to practice, and why demand is at an all-time high.",
    description_bm: "Psikologi klinikal memerlukan sarjana khusus yang hanya beberapa universiti Malaysia tawarkan. Laluan penuh dari SPM ke amalan, dan kenapa permintaan berada di tahap tertinggi."
  },
  landing: {
    h1_en: "How to Become a Clinical Psychologist in Malaysia",
    h1_bm: "Cara Jadi Ahli Psikologi Klinikal di Malaysia",
    intro_en: "Clinical psychology is the most misunderstood pathway in Malaysian psychology, so let us make it precise: a bachelor's degree in psychology does not make you a clinical psychologist. The title requires a Master of Clinical Psychology, a supervised practicum-heavy programme offered by only a handful of Malaysian institutions, with UKM's health campus and HELP University the longest-established providers and a small number of others including UCSI and IIUM adding capacity. Entry into these masters programmes is fiercely competitive, typically requiring a strong psychology degree, research experience and interviews, because intake sizes are small. That bottleneck is exactly why the career is valuable: Malaysia has only a few hundred clinical psychologists for a population well past thirty million, mental health demand has surged since the pandemic and stayed high, insurance panels increasingly cover psychological services, and the Health Ministry has been expanding mental health services at hospitals and klinik kesihatan. Clinical psychologists assess and treat conditions like depression, anxiety, ADHD and trauma using evidence-based therapy, distinct from psychiatrists who are medical doctors prescribing medication. Fresh clinical psychologists earn RM3,500 to RM6,000 across government, university and private settings, and private practice rates in the Klang Valley commonly run RM150 to RM350 per session, which gives experienced practitioners real earning power. The path is long (degree, masters, supervised hours) but it leads to scarce, meaningful, recession-resistant work.",
    intro_bm: "Psikologi klinikal ialah laluan paling disalahfahami dalam bidang psikologi Malaysia, jadi mari jelaskan dengan tepat: ijazah sarjana muda psikologi tidak menjadikan anda ahli psikologi klinikal. Gelaran itu memerlukan Sarjana Psikologi Klinikal, program penuh praktikum diselia yang hanya ditawarkan segelintir institusi Malaysia, dengan kampus kesihatan UKM dan HELP University penyedia paling lama bertapak dan beberapa yang lain termasuk UCSI dan IIUM menambah kapasiti. Kemasukan ke program sarjana ini sangat kompetitif, biasanya perlukan ijazah psikologi yang kukuh, pengalaman penyelidikan dan temuduga, kerana saiz pengambilan kecil. Kesempitan itu jugalah yang menjadikan kerjaya ini bernilai: Malaysia hanya ada beberapa ratus ahli psikologi klinikal untuk penduduk melebihi tiga puluh juta, permintaan kesihatan mental melonjak sejak pandemik dan kekal tinggi, panel insurans semakin menanggung perkhidmatan psikologi, dan KKM terus meluaskan perkhidmatan kesihatan mental di hospital dan klinik kesihatan. Ahli psikologi klinikal menilai dan merawat keadaan seperti kemurungan, keresahan, ADHD dan trauma menggunakan terapi berasaskan bukti, berbeza dengan pakar psikiatri yang merupakan doktor perubatan yang boleh beri ubat. Ahli psikologi klinikal baru dapat RM3,500 hingga RM6,000 merentas kerajaan, universiti dan swasta, dan kadar amalan swasta di Lembah Klang biasanya RM150 hingga RM350 satu sesi, memberi pengamal berpengalaman kuasa pendapatan sebenar. Laluannya panjang (ijazah, sarjana, jam diselia) tetapi ia menuju kerja yang jarang, bermakna dan tahan kemelesetan.",
    cta_en: "See the full clinical psychologist career path",
    cta_bm: "Lihat laluan kerjaya psikologi klinikal"
  }
},

{
  slug: "cara-jadi-audiologis-malaysia",
  type: "journey", career_id: "audiologist",
  keywords: {
    primary: "how to become audiologist Malaysia",
    primary_bm: "cara jadi audiologis malaysia",
    longtail_en: ["audiology degree Malaysia UKM IIUM", "audiologist salary Malaysia", "hearing specialist career Malaysia", "audiology course requirements", "audiologist demand Malaysia"],
    longtail_bm: ["ijazah audiologi malaysia UKM IIUM", "gaji audiologis malaysia", "kerjaya pakar pendengaran", "syarat kursus audiologi", "permintaan audiologis malaysia"]
  },
  meta: {
    title: "Cara Jadi Audiologis di Malaysia 2026 - Ijazah, Gaji & Permintaan | MyJourney",
    title_bm: "How to Become an Audiologist in Malaysia 2026 - Degree, Salary & Demand | MyJourney",
    description: "Audiologists diagnose and manage hearing loss, and Malaysia produces far too few of them. Where to study, what the work involves, and why demand is rated very high.",
    description_bm: "Audiologis mendiagnosis dan mengurus masalah pendengaran, dan Malaysia melahirkan terlalu sedikit. Tempat belajar, apa kerjanya, dan kenapa permintaan sangat tinggi."
  },
  landing: {
    h1_en: "How to Become an Audiologist in Malaysia",
    h1_bm: "Cara Jadi Audiologis di Malaysia",
    intro_en: "Audiology is one of the best-kept secrets in Malaysian healthcare careers: a four-year science degree, an almost guaranteed job at the end, and a patient population that grows every year as the country ages and hearing screening expands. Audiologists assess hearing and balance, fit and programme hearing aids, run newborn hearing screening, support cochlear implant programmes, and manage industrial hearing conservation for factories, an underrated corporate niche in a manufacturing country. The reason demand stays very high is supply: only a small number of universities train audiologists, with UKM's health sciences faculty and IIUM in Kuantan the established public programmes, so graduating cohorts are tiny against national need. Entry requires a strong science-stream STPM, matriculation or foundation result, and the degree mixes anatomy, acoustics and clinical placements from early on. Career paths split three ways: government hospitals under the KKM allied health scheme starting around RM2,500 to RM3,000 with allowances, private ENT centres and hearing aid providers where commission on devices lifts income meaningfully, and the hearing aid industry itself, where clinical audiologists move into product training and regional roles. Experienced private-sector audiologists in the Klang Valley commonly earn RM5,000 to RM8,000, and clinic ownership is a real endgame because devices and long-term patient relationships create recurring revenue. If you want healthcare with normal working hours and no on-call emergencies, this profession deserves a serious look.",
    intro_bm: "Audiologi antara rahsia terbaik kerjaya kesihatan Malaysia: ijazah sains empat tahun, kerja hampir terjamin selepas tamat, dan populasi pesakit yang bertambah setiap tahun apabila negara semakin menua dan saringan pendengaran diperluas. Audiologis menilai pendengaran dan imbangan, memasang dan memprogram alat bantu dengar, menjalankan saringan pendengaran bayi baru lahir, menyokong program implan koklea, dan mengurus pemuliharaan pendengaran industri untuk kilang, satu niche korporat yang dipandang rendah dalam negara perkilangan. Sebab permintaan kekal sangat tinggi ialah bekalan: hanya sebilangan kecil universiti melatih audiologis, dengan fakulti sains kesihatan UKM dan IIUM di Kuantan program awam yang mapan, jadi kohort graduan sangat kecil berbanding keperluan negara. Kemasukan perlukan keputusan STPM, matrikulasi atau asasi aliran sains yang kukuh, dan ijazahnya menggabungkan anatomi, akustik dan penempatan klinikal dari awal. Laluan kerjaya berpecah tiga: hospital kerajaan bawah skim kesihatan bersekutu KKM bermula sekitar RM2,500 hingga RM3,000 dengan elaun, pusat ENT swasta dan penyedia alat bantu dengar di mana komisen alat menaikkan pendapatan dengan ketara, dan industri alat bantu dengar sendiri, di mana audiologis klinikal beralih ke latihan produk dan peranan serantau. Audiologis swasta berpengalaman di Lembah Klang biasa dapat RM5,000 hingga RM8,000, dan pemilikan klinik ialah matlamat akhir sebenar kerana alat dan hubungan pesakit jangka panjang mencipta pendapatan berulang. Kalau anda mahu kerjaya kesihatan dengan waktu kerja normal tanpa panggilan kecemasan, profesion ini wajar diberi perhatian serius.",
    cta_en: "See the full audiologist career path",
    cta_bm: "Lihat laluan kerjaya audiologis"
  }
},

{
  slug: "cara-jadi-peguam-syarie-malaysia",
  type: "journey", career_id: "syariah-lawyer",
  keywords: {
    primary: "how to become syariah lawyer Malaysia",
    primary_bm: "cara jadi peguam syarie malaysia",
    longtail_en: ["syariah law degree Malaysia", "peguam syarie requirements", "syariah lawyer salary Malaysia", "UIA USIM syariah law programme", "syarie legal practice Malaysia"],
    longtail_bm: ["ijazah undang-undang syariah malaysia", "syarat jadi peguam syarie", "gaji peguam syarie malaysia", "program syariah UIA USIM", "amalan guaman syarie"]
  },
  meta: {
    title: "Cara Jadi Peguam Syarie di Malaysia 2026 - Ijazah, Syarat & Gaji | MyJourney",
    title_bm: "How to Become a Syariah Lawyer in Malaysia 2026 - Degree, Requirements & Salary | MyJourney",
    description: "Syariah lawyers practise in Malaysia's syariah court system, admitted state by state. The degree routes at UIA, USIM and UiTM, the admission process, and what the practice pays.",
    description_bm: "Peguam syarie beramal dalam sistem mahkamah syariah Malaysia, diterima masuk negeri demi negeri. Laluan ijazah di UIA, USIM dan UiTM, proses kemasukan, dan pendapatan amalannya."
  },
  landing: {
    h1_en: "How to Become a Syariah Lawyer in Malaysia",
    h1_bm: "Cara Jadi Peguam Syarie di Malaysia",
    intro_en: "Malaysia runs two court systems side by side, and the syariah courts, which handle Islamic family law, inheritance, and religious matters for Muslims, need their own advocates: peguam syarie. The pathway differs from civil law in ways every prospective student should understand early. The academic base is a syariah or Islamic law qualification, with the recognised programmes at IIUM (UIA), USIM, UiTM, UM and UKM, and some students take double degrees combining civil law and syariah, the most flexible qualification in the market because it opens both court systems. Admission then happens state by state: each state's Majlis Agama Islam sets its own requirements for admission as a peguam syarie, typically involving a syariah legal qualification, an exam or interview, and for some states practical experience, so a lawyer admitted in Selangor must apply separately to practise in Johor. The daily work is family law at its most human: divorce (cerai), custody (hadhanah), maintenance (nafkah), inheritance distribution (faraid) and wills (wasiat), plus a growing commercial side as Islamic finance disputes and muamalat matters expand. Fresh syariah lawyers in small firms start around RM3,000, established practitioners in the Klang Valley earn RM5,000 and well beyond, and the double-qualified civil-and-syarie lawyers command the strongest positions. One practical note: strong Bahasa and Arabic legal literacy matter here more than in civil practice, and courtroom advocacy in BM is the daily craft.",
    intro_bm: "Malaysia menjalankan dua sistem mahkamah seiring, dan mahkamah syariah, yang mengendalikan undang-undang kekeluargaan Islam, pewarisan dan hal ehwal agama bagi orang Islam, memerlukan peguamnya sendiri: peguam syarie. Laluannya berbeza daripada undang-undang sivil dalam cara yang setiap bakal pelajar patut faham awal. Asas akademiknya kelayakan syariah atau undang-undang Islam, dengan program yang diiktiraf di UIAM (UIA), USIM, UiTM, UM dan UKM, dan sesetengah pelajar ambil ijazah berkembar menggabungkan undang-undang sivil dan syariah, kelayakan paling fleksibel dalam pasaran kerana ia membuka kedua-dua sistem mahkamah. Kemasukan kemudian berlaku negeri demi negeri: Majlis Agama Islam setiap negeri menetapkan syarat sendiri untuk diterima sebagai peguam syarie, biasanya melibatkan kelayakan undang-undang syariah, peperiksaan atau temuduga, dan bagi sesetengah negeri pengalaman praktikal, jadi peguam yang diterima di Selangor mesti memohon berasingan untuk beramal di Johor. Kerja hariannya undang-undang keluarga pada sisi paling manusiawi: cerai, hadhanah, nafkah, faraid dan wasiat, serta sisi komersial yang berkembang apabila pertikaian kewangan Islam dan hal muamalat meluas. Peguam syarie baru di firma kecil mula sekitar RM3,000, pengamal mapan di Lembah Klang dapat RM5,000 dan jauh lebih, dan peguam berkelayakan dua sivil-dan-syarie pegang kedudukan paling kukuh. Satu nota praktikal: penguasaan Bahasa dan literasi undang-undang Arab lebih penting di sini berbanding amalan sivil, dan hujahan mahkamah dalam BM ialah kraf harian.",
    cta_en: "See the full syariah lawyer career path",
    cta_bm: "Lihat laluan kerjaya peguam syarie"
  }
},

{
  slug: "cara-jadi-saintis-forensik-malaysia",
  type: "journey", career_id: "forensic-scientist",
  keywords: {
    primary: "how to become forensic scientist Malaysia",
    primary_bm: "cara jadi saintis forensik malaysia",
    longtail_en: ["forensic science degree Malaysia", "Jabatan Kimia Malaysia career", "forensic scientist salary Malaysia", "CSI career Malaysia reality", "forensic science USM UiTM"],
    longtail_bm: ["ijazah sains forensik malaysia", "kerjaya jabatan kimia malaysia", "gaji saintis forensik", "kerjaya forensik malaysia sebenar", "sains forensik USM UiTM"]
  },
  meta: {
    title: "Cara Jadi Saintis Forensik di Malaysia 2026 - Ijazah, Realiti & Gaji | MyJourney",
    title_bm: "How to Become a Forensic Scientist in Malaysia 2026 - Degree, Reality & Salary | MyJourney",
    description: "The honest guide to forensic science careers in Malaysia: where the real jobs are (Jabatan Kimia, PDRM, hospitals), how few openings exist, and the backup routes that share the same degree.",
    description_bm: "Panduan jujur kerjaya sains forensik di Malaysia: di mana kerja sebenar (Jabatan Kimia, PDRM, hospital), betapa sedikit kekosongan, dan laluan sandaran yang berkongsi ijazah sama."
  },
  landing: {
    h1_en: "How to Become a Forensic Scientist in Malaysia",
    h1_bm: "Cara Jadi Saintis Forensik di Malaysia",
    intro_en: "Forensic science attracts more Malaysian students than almost any other science career relative to its actual job openings, so this page owes you the honest version first: the field is real, fascinating and important, and it is also small, government-centred and competitive. The main employer is Jabatan Kimia Malaysia (the Department of Chemistry), whose laboratories analyse drugs, toxicology, DNA and trace evidence for the courts; alongside it sit PDRM's forensic units for crime scene work, hospital forensic medicine departments handling post-mortems under KKM, and niche roles in customs, fire investigation and private laboratories. Degree routes: dedicated forensic science programmes exist at USM's health campus and UiTM among others, but here is the useful secret: many working forensic analysts entered with straight chemistry, biochemistry or biomedical science degrees, because government lab posts recruit on the underlying science, and those degrees keep every other lab career open if forensic openings are scarce the year you graduate. Government scientific officer posts start around RM2,500 to RM3,500 on standard schemes, with the stability, pension and allowances of public service. The realistic strategy we suggest: take the strongest chemistry-heavy degree you can, add forensic electives or a forensic masters later, watch SPA announcements for Jabatan Kimia and KKM intakes, and treat television forensics as inspiration rather than a job description, because the real work is meticulous laboratory science with court testimony, not chases.",
    intro_bm: "Sains forensik menarik lebih ramai pelajar Malaysia berbanding hampir mana-mana kerjaya sains lain jika diukur dengan kekosongan kerja sebenarnya, jadi halaman ini berhutang versi jujur dulu: bidang ini benar, menarik dan penting, dan ia juga kecil, berpusat pada kerajaan dan kompetitif. Majikan utama ialah Jabatan Kimia Malaysia, yang makmalnya menganalisis dadah, toksikologi, DNA dan bukti kesan untuk mahkamah; di sampingnya ada unit forensik PDRM untuk kerja tempat kejadian, jabatan perubatan forensik hospital mengendalikan bedah siasat bawah KKM, dan peranan niche dalam kastam, siasatan kebakaran dan makmal swasta. Laluan ijazah: program sains forensik khusus ada di kampus kesihatan USM dan UiTM antara lain, tetapi ini rahsia berguna: ramai penganalisis forensik yang bekerja masuk dengan ijazah kimia, biokimia atau sains bioperubatan biasa, kerana jawatan makmal kerajaan mengambil berdasarkan sains asasnya, dan ijazah itu mengekalkan semua kerjaya makmal lain terbuka kalau kekosongan forensik sedikit pada tahun anda tamat. Jawatan pegawai sains kerajaan bermula sekitar RM2,500 hingga RM3,500 pada skim standard, dengan kestabilan, pencen dan elaun perkhidmatan awam. Strategi realistik yang kami cadangkan: ambil ijazah berat kimia paling kukuh yang anda mampu, tambah elektif forensik atau sarjana forensik kemudian, pantau pengumuman SPA untuk pengambilan Jabatan Kimia dan KKM, dan anggap forensik televisyen sebagai inspirasi bukan huraian kerja, kerana kerja sebenarnya sains makmal yang teliti dengan keterangan mahkamah, bukan kejar-mengejar.",
    cta_en: "See the full forensic scientist career path",
    cta_bm: "Lihat laluan kerjaya saintis forensik"
  }
},

{
  slug: "cara-jadi-guru-pendidikan-khas-malaysia",
  type: "journey", career_id: "sped-teacher",
  keywords: {
    primary: "how to become special education teacher Malaysia",
    primary_bm: "cara jadi guru pendidikan khas malaysia",
    longtail_en: ["special education degree Malaysia", "PISMP pendidikan khas IPG", "special needs teacher salary Malaysia", "sped teacher allowance BIPK", "PPKI teacher career Malaysia"],
    longtail_bm: ["ijazah pendidikan khas malaysia", "PISMP pendidikan khas IPG", "gaji guru pendidikan khas", "elaun guru pendidikan khas", "kerjaya guru PPKI"]
  },
  meta: {
    title: "Cara Jadi Guru Pendidikan Khas di Malaysia 2026 - IPG, Elaun & Laluan | MyJourney",
    title_bm: "How to Become a Special Education Teacher in Malaysia 2026 - IPG, Allowance & Path | MyJourney",
    description: "Special education is one of the highest-demand teaching tracks in Malaysia, with a monthly special allowance on top of normal teacher pay. The IPG and university routes in.",
    description_bm: "Pendidikan khas antara trek perguruan paling tinggi permintaan di Malaysia, dengan elaun khas bulanan di atas gaji guru biasa. Laluan IPG dan universiti."
  },
  landing: {
    h1_en: "How to Become a Special Education Teacher in Malaysia",
    h1_bm: "Cara Jadi Guru Pendidikan Khas di Malaysia",
    intro_en: "Special education is the teaching track where Malaysia's need most visibly outruns supply. Every year more students are diagnosed and registered with learning differences (autism, ADHD, dyslexia, hearing and visual impairment), the ministry keeps expanding PPKI integration programmes in mainstream schools and inclusive education targets, and schools across the country report shortages of trained pendidikan khas teachers. The routes in mirror general teaching but with a specialised stream. School leavers with strong SPM results can apply to the PISMP programme at IPG teacher institutes with a pendidikan khas option, studying tuition-free with a monthly allowance and a guaranteed posting into government service. At university level, UPSI is the historic centre for special education degrees, with UKM, UM and IIUM offering programmes and postgraduate diplomas that let existing teachers convert into the field, and the ISMP sponsorship covers education degrees for bonded service. The material difference from regular teaching: special education teachers in government schools receive the Bayaran Insentif Pendidikan Khas, a monthly special-education incentive on top of the standard DG-scheme teacher salary, in recognition of the specialised work. Classes are smaller, progress is measured in different units (a nonverbal child's first requested sentence can be a term's triumph), and the emotional demands are real, which is why the best candidates combine patience with genuine structure. For students who want teaching with deeper specialisation, better staffing ratios and an incentive allowance, this is the strongest teaching niche in the country.",
    intro_bm: "Pendidikan khas ialah trek perguruan di mana keperluan Malaysia paling ketara mengatasi bekalan. Setiap tahun lebih ramai murid didiagnosis dan didaftar dengan perbezaan pembelajaran (autisme, ADHD, disleksia, masalah pendengaran dan penglihatan), kementerian terus meluaskan program integrasi PPKI di sekolah arus perdana dan sasaran pendidikan inklusif, dan sekolah di seluruh negara melaporkan kekurangan guru pendidikan khas terlatih. Laluan masuknya seperti perguruan biasa tetapi dengan aliran khusus. Lepasan sekolah dengan keputusan SPM kukuh boleh memohon program PISMP di institut perguruan IPG dengan pilihan pendidikan khas, belajar tanpa yuran dengan elaun bulanan dan penempatan terjamin ke perkhidmatan kerajaan. Di peringkat universiti, UPSI ialah pusat bersejarah ijazah pendidikan khas, dengan UKM, UM dan IIUM menawarkan program serta diploma lepasan ijazah yang membolehkan guru sedia ada beralih ke bidang ini, dan tajaan ISMP menampung ijazah pendidikan dengan khidmat berikat. Beza material daripada perguruan biasa: guru pendidikan khas di sekolah kerajaan menerima Bayaran Insentif Pendidikan Khas, insentif bulanan di atas gaji guru skim DG standard, sebagai pengiktirafan kerja khusus itu. Kelas lebih kecil, kemajuan diukur dalam unit berbeza (ayat pertama yang diminta seorang kanak-kanak bukan lisan boleh jadi kejayaan satu penggal), dan tuntutan emosinya nyata, sebab itu calon terbaik menggabungkan kesabaran dengan struktur yang tulen. Untuk pelajar yang mahu perguruan dengan pengkhususan lebih mendalam, nisbah guru-murid lebih baik dan elaun insentif, ini niche perguruan paling kukuh di negara ini.",
    cta_en: "See the full special education career path",
    cta_bm: "Lihat laluan kerjaya pendidikan khas"
  }
}
];
