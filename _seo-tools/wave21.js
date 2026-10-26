/**
 * JACK Wave 21 - 2026-10-26
 * 17 pages, all scoped from search_logs (90 days to 2026-10-26) and the live DB:
 *
 * A. Seasonal (5): biasiswa 2027 anticipation, JPA 2027 cycle, MARA 2027 cycle,
 *    December 2026 closings (overseas postgrad season), January 2027 openings.
 *    The Aug 2026 plan flagged these for October. "mara" is the #1 search term (224/90d).
 * B. Search-gap scholarship pages (4): aircraft maintenance engineering ("aircraft" 10/10 zero),
 *    chemical engineering (9 searches, 6 zero), actuary (4/4 zero, DB has 4 records under "actuarial"),
 *    quantity surveying (4/4 zero, DB has 4 records). Each CTA targets a query the DB answers.
 * C. Career cara-jadi tranche (8): full-stack-developer, business-analyst, management-consultant,
 *    wealth-manager, midwife, aerospace-engineer, copywriter, criminologist.
 *    All 8 career_ids verified built+active in the Supabase careers table on 2026-10-26.
 *    Pay ranges in copy match the careers table start_pay field exactly.
 *
 * Slug collision check: all 17 clean vs manifest (568 unique slugs as of 2026-10-26).
 * Not built (data gaps handed to DIANA, not SEO problems): tabung haji (24/24 zero, no records),
 * felda, yapeim, upsi, unimap, ipma, semiconductor, fintech, political science, pengajian islam.
 * Counselling/psychology already has biasiswa-psikologi-kaunseling-2026; its zero-results are a DB gap.
 *
 * Writing rules: no em dashes anywhere, plain hyphens only. Natural BM, not translated EN.
 */

module.exports = [
// ============================================================
// === WAVE 21 A: SEASONAL (1-5) ==============================
// ============================================================

{
  slug: "biasiswa-2027-malaysia",
  type: "scholarship",
  cta_query: "",  // directory search the CTA actually runs (verified against DB 2026-10-26); empty = full directory
  keywords: {
    primary: "scholarships 2027 Malaysia",
    primary_bm: "biasiswa 2027",
    longtail_en: ["scholarship 2027 for SPM leavers", "when do 2027 scholarships open", "scholarship application timeline 2027 Malaysia", "scholarships for intake 2027", "prepare for scholarship 2027"],
    longtail_bm: ["biasiswa 2027 lepasan SPM", "bila biasiswa 2027 dibuka", "jadual permohonan biasiswa 2027", "biasiswa kemasukan 2027", "persediaan biasiswa 2027"]
  },
  meta: {
    title: "Biasiswa 2027 Malaysia - Bila Dibuka, Apa Perlu Sedia Sekarang | MyScholar",
    title_bm: "Scholarships 2027 Malaysia - When They Open and What to Prepare Now | MyScholar",
    description: "Sitting SPM in 2026 and planning for 2027? The scholarship calendar runs on a cycle. Which windows open first, what the big providers want, and what you can prepare before results day.",
    description_bm: "Duduk SPM 2026 dan merancang untuk 2027? Kalendar biasiswa berjalan ikut kitaran. Tetingkap mana dibuka dulu, apa yang penyedia besar mahukan, dan apa boleh disediakan sebelum hari keputusan."
  },
  landing: {
    h1_en: "Scholarships 2027: The Calendar, Before It Starts",
    h1_bm: "Biasiswa 2027: Kalendar Sebelum Ia Bermula",
    intro_en: "If you are sitting SPM at the end of 2026, the 2027 scholarship cycle is already closer than it feels. Most of the big local windows do not open until results come out, usually around May, and when they open they close fast: JPA, MARA and the corporate foundations tend to run two to four week windows, not months. That leaves one useful thing to do now, which is to understand the calendar so nothing catches you by surprise. The rough shape of a Malaysian scholarship year: January to March is the medicine, dentistry and pharmacy window (JPA PPF) plus overseas postgraduate deadlines; March to May brings BYDPA, Securities Commission, Bank Negara Kijang and most of the GLC programmes; results day in May triggers the undergraduate rush, with JPA, MARA, Petronas, TNB, Yayasan Khazanah and the state foundations all opening within weeks of each other; July to October is the private university and state religious council season, and November to December belongs mostly to overseas postgraduate awards. What you can prepare before any of that: a clean copy of your SPM slip the day you get it, a one page list of your co-curricular record with dates, a short personal statement you can adapt, and a realistic view of your CGPA or grades against each provider's minimum. The 2027 listings on MyScholar will be marked as they open. For now the 2026 pages below show you what each provider asked for last cycle, which is the best predictor of what they will ask for again.",
    intro_bm: "Kalau anda duduk SPM hujung 2026, kitaran biasiswa 2027 sebenarnya lebih dekat daripada yang dirasa. Kebanyakan tetingkap tempatan yang besar tidak dibuka sehingga keputusan keluar, biasanya sekitar Mei, dan bila dibuka ia tutup cepat: JPA, MARA dan yayasan korporat biasanya buka dua hingga empat minggu sahaja, bukan berbulan. Jadi satu perkara berguna yang boleh dibuat sekarang ialah faham kalendarnya supaya tiada yang mengejutkan. Bentuk kasar setahun biasiswa di Malaysia: Januari hingga Mac ialah tetingkap perubatan, pergigian dan farmasi (JPA PPF) serta tarikh tutup pascasiswazah luar negara; Mac hingga Mei datang BYDPA, Suruhanjaya Sekuriti, Kijang Bank Negara dan kebanyakan program GLC; hari keputusan pada Mei mencetuskan kesibukan prasiswazah, dengan JPA, MARA, Petronas, TNB, Yayasan Khazanah dan yayasan negeri semua dibuka dalam beberapa minggu; Julai hingga Oktober musim universiti swasta dan majlis agama negeri, dan November hingga Disember kebanyakannya anugerah pascasiswazah luar negara. Apa yang boleh disediakan sebelum semua itu: salinan bersih slip SPM pada hari anda terima, senarai satu muka rekod kokurikulum dengan tarikh, pernyataan peribadi pendek yang boleh diubah suai, dan pandangan realistik tentang gred anda berbanding minimum setiap penyedia. Senarai 2027 di MyScholar akan ditanda apabila dibuka. Buat masa ini, halaman 2026 di bawah tunjukkan apa setiap penyedia minta kitaran lepas, dan itu peramal terbaik apa yang mereka akan minta lagi.",
    cta_en: "See what each provider asked for in 2026",
    cta_bm: "Lihat apa setiap penyedia minta pada 2026"
  }
},

{
  slug: "biasiswa-jpa-2027",
  type: "scholarship",
  cta_query: "JPA",  // directory search the CTA actually runs (verified against DB 2026-10-26); empty = full directory
  keywords: {
    primary: "JPA scholarship 2027",
    primary_bm: "biasiswa JPA 2027",
    longtail_en: ["JPA PIDN 2027 application", "JPA scholarship after SPM 2026", "JPA PPF 2027 medicine dentistry pharmacy", "BYDPA 2027 application", "JPA scholarship requirements 2027"],
    longtail_bm: ["permohonan JPA PIDN 2027", "biasiswa JPA lepasan SPM 2026", "JPA PPF 2027 perubatan pergigian farmasi", "permohonan BYDPA 2027", "syarat biasiswa JPA 2027"]
  },
  meta: {
    title: "Biasiswa JPA 2027 - PIDN, PPF, BYDPA, Bila Buka & Syarat | MyScholar",
    title_bm: "JPA Scholarship 2027 - PIDN, PPF, BYDPA, Opening Dates and Requirements | MyScholar",
    description: "JPA runs several programmes on different clocks. PPF opens first (January to March), BYDPA and the overseas programmes in spring, PIDN only after SPM results. What each one wants for 2027.",
    description_bm: "JPA jalankan beberapa program ikut jam berbeza. PPF buka dulu (Januari hingga Mac), BYDPA dan program luar negara pada musim bunga, PIDN hanya selepas keputusan SPM. Apa setiap satu mahukan untuk 2027."
  },
  landing: {
    h1_en: "JPA Scholarships 2027: Which Programme, Which Window",
    h1_bm: "Biasiswa JPA 2027: Program Mana, Tetingkap Mana",
    intro_en: "JPA is one word to students but several programmes to the Public Service Department, and they open at different times. The first to watch in 2027 is Program Khas Perubatan, Pergigian dan Farmasi (PPF), which has historically opened between January and March for students already holding pre-university results and aiming at medicine, dentistry or pharmacy. Biasiswa Yang di-Pertuan Agong (BYDPA) and the special programmes for Japan, Korea, France and Germany (JKPJ) usually follow in March to May, and the JPA-MARA convertible loan (PKJM) typically runs a short April window. The one most SPM leavers are waiting for is Program Ijazah Dalam Negara (PIDN) and the income-tiered Dermasiswa B40, which open only after SPM results are released, usually around May, with a window that has been as short as two weeks. Two things worth knowing before 2027: JPA has shifted steadily towards income tiering and local study, so a strong result alone no longer guarantees an overseas place, and every JPA programme carries a service bond with the government. The listings below are the 2026 records for each JPA programme, with the application links, which is where the 2027 announcements will appear first. Check them in January and again in May.",
    intro_bm: "JPA satu perkataan bagi pelajar, tetapi beberapa program bagi Jabatan Perkhidmatan Awam, dan semuanya dibuka pada masa berbeza. Yang pertama perlu dipantau pada 2027 ialah Program Khas Perubatan, Pergigian dan Farmasi (PPF), yang sebelum ini dibuka antara Januari hingga Mac untuk pelajar yang sudah ada keputusan pra-universiti dan menyasarkan perubatan, pergigian atau farmasi. Biasiswa Yang di-Pertuan Agong (BYDPA) dan program khas Jepun, Korea, Perancis dan Jerman (JKPJ) biasanya menyusul pada Mac hingga Mei, dan pinjaman boleh ubah JPA-MARA (PKJM) lazimnya buka tetingkap pendek pada April. Yang paling ditunggu lepasan SPM ialah Program Ijazah Dalam Negara (PIDN) dan Dermasiswa B40 yang berasaskan pendapatan, yang dibuka hanya selepas keputusan SPM keluar, biasanya sekitar Mei, dengan tetingkap yang pernah sependek dua minggu. Dua perkara yang patut tahu sebelum 2027: JPA semakin condong ke arah tingkatan pendapatan dan pengajian tempatan, jadi keputusan cemerlang sahaja tidak lagi menjamin tempat luar negara, dan setiap program JPA ada ikatan perkhidmatan dengan kerajaan. Senarai di bawah ialah rekod 2026 bagi setiap program JPA, dengan pautan permohonan, iaitu tempat pengumuman 2027 akan muncul dahulu. Semak pada Januari dan sekali lagi pada Mei.",
    cta_en: "See all JPA programmes on MyScholar",
    cta_bm: "Lihat semua program JPA di MyScholar"
  }
},

{
  slug: "biasiswa-mara-2027",
  type: "scholarship",
  cta_query: "MARA",  // directory search the CTA actually runs (verified against DB 2026-10-26); empty = full directory
  keywords: {
    primary: "MARA scholarship 2027",
    primary_bm: "biasiswa MARA 2027",
    longtail_en: ["MARA TESP 2027 application", "MARA sponsorship after SPM 2026", "MARA convertible loan 2027", "MARA Young Talent Programme 2027", "MARA scholarship requirements 2027"],
    longtail_bm: ["permohonan MARA TESP 2027", "tajaan MARA lepasan SPM 2026", "pinjaman boleh ubah MARA 2027", "program MARA 2027 lepasan SPM", "syarat biasiswa MARA 2027"]
  },
  meta: {
    title: "Biasiswa MARA 2027 - TESP, PPBU, TVETMARA, Bila Buka & Syarat | MyScholar",
    title_bm: "MARA Scholarship 2027 - TESP, Convertible Loan, TVETMARA, Dates and Requirements | MyScholar",
    description: "MARA is the single most searched term on MyScholar. For 2027: TESP for tertiary sponsorship, the convertible loan for most degree students, and TVETMARA intakes in January and July. What to expect and when.",
    description_bm: "MARA ialah istilah paling banyak dicari di MyScholar. Untuk 2027: TESP untuk tajaan pengajian tinggi, pinjaman boleh ubah untuk kebanyakan pelajar ijazah, dan kemasukan TVETMARA pada Januari dan Julai. Apa yang dijangka dan bila."
  },
  landing: {
    h1_en: "MARA Scholarships 2027: What Opens, and When",
    h1_bm: "Biasiswa MARA 2027: Apa Dibuka, dan Bila",
    intro_en: "More students type MARA into MyScholar than any other word, so here is the 2027 picture laid out plainly. MARA funding for Bumiputera students comes in a few shapes. The Tertiary Education Sponsorship Programme (TESP) is the full scholarship track, historically opening around May to June after SPM and STPM results, with full tuition and allowances and a service bond. The convertible education loan (Pinjaman Pelajaran Boleh Ubah) is what most MARA-funded degree students are actually on: a loan that converts partly or fully into a scholarship depending on your final results, which makes your CGPA worth real money. The JPA-MARA special programme (PKJM) is a joint convertible loan with a short April window. And TVETMARA, through the IKM, KKTM and MJII institutes, takes certificate and diploma students in January and July intakes with heavily subsidised fees, which is the route many SPM leavers overlook. For SPM 2026 candidates the practical timeline is this: TVETMARA January 2027 intake applications come first, then PKJM in April, then TESP and the convertible loan once results land. Eligibility is Bumiputera only across all of these, income and household size affect the loan-to-scholarship conversion, and MARA checks results and interview performance, not just the application form. The 2026 MARA records below carry the official links where 2027 dates will be announced.",
    intro_bm: "Lebih ramai pelajar menaip MARA di MyScholar berbanding perkataan lain, jadi ini gambaran 2027 secara terus terang. Pembiayaan MARA untuk pelajar Bumiputera datang dalam beberapa bentuk. Program Tajaan Pendidikan Tinggi (TESP) ialah laluan biasiswa penuh, sebelum ini dibuka sekitar Mei hingga Jun selepas keputusan SPM dan STPM, dengan yuran penuh dan elaun serta ikatan perkhidmatan. Pinjaman Pelajaran Boleh Ubah pula apa yang kebanyakan pelajar ijazah tajaan MARA sebenarnya ada: pinjaman yang bertukar sebahagian atau sepenuhnya menjadi biasiswa bergantung keputusan akhir, yang menjadikan CGPA anda bernilai wang sebenar. Program khas JPA-MARA (PKJM) ialah pinjaman boleh ubah bersama dengan tetingkap pendek pada April. Dan TVETMARA, melalui institut IKM, KKTM dan MJII, mengambil pelajar sijil dan diploma pada kemasukan Januari dan Julai dengan yuran yang disubsidi berat, laluan yang ramai lepasan SPM terlepas pandang. Bagi calon SPM 2026, garis masa praktikalnya begini: permohonan kemasukan TVETMARA Januari 2027 datang dulu, kemudian PKJM pada April, kemudian TESP dan pinjaman boleh ubah sebaik keputusan keluar. Kelayakan Bumiputera sahaja untuk semua ini, pendapatan dan saiz isi rumah mempengaruhi penukaran pinjaman kepada biasiswa, dan MARA menilai keputusan serta prestasi temuduga, bukan borang semata-mata. Rekod MARA 2026 di bawah membawa pautan rasmi tempat tarikh 2027 akan diumumkan.",
    cta_en: "See all MARA programmes on MyScholar",
    cta_bm: "Lihat semua program MARA di MyScholar"
  }
},

{
  slug: "biasiswa-tutup-disember-2026",
  type: "scholarship",
  cta_query: "postgraduate",  // directory search the CTA actually runs (verified against DB 2026-10-26); empty = full directory
  keywords: {
    primary: "scholarships closing December 2026",
    primary_bm: "biasiswa tutup Disember 2026",
    longtail_en: ["scholarship deadlines December 2026 Malaysia", "postgraduate scholarships closing December 2026", "SINGA deadline December 2026", "overseas PhD scholarship December 2026 deadline", "last scholarships of 2026"],
    longtail_bm: ["tarikh tutup biasiswa Disember 2026", "biasiswa pascasiswazah tutup Disember 2026", "biasiswa luar negara tarikh akhir Disember 2026", "biasiswa PhD tutup Disember 2026", "biasiswa terakhir 2026"]
  },
  meta: {
    title: "Biasiswa Tutup Disember 2026 - Tarikh Akhir Yang Masih Boleh Dikejar | MyScholar",
    title_bm: "Scholarships Closing December 2026 - Deadlines You Can Still Make | MyScholar",
    description: "December is overseas postgraduate season. SINGA and the Hong Kong PhD Fellowship close 1 December, MBZUAI mid-month, Iwatani on the 20th. Local undergraduate windows do not reopen until 2027. The full list.",
    description_bm: "Disember ialah musim pascasiswazah luar negara. SINGA dan Hong Kong PhD Fellowship tutup 1 Disember, MBZUAI pertengahan bulan, Iwatani pada 20 haribulan. Tetingkap prasiswazah tempatan tidak dibuka semula sehingga 2027. Senarai penuh."
  },
  landing: {
    h1_en: "Scholarships Closing in December 2026",
    h1_bm: "Biasiswa Yang Tutup Pada Disember 2026",
    intro_en: "An honest read of December: if you are an SPM or STPM leaver looking for an undergraduate scholarship, almost nothing local closes this month, because almost nothing local is open. The big domestic windows reopen in 2027 after results. December belongs to postgraduate students, and specifically to overseas research funding for the August and autumn 2027 intakes. On the MyScholar list right now: the Singapore International Graduate Award (SINGA) for PhD study at NUS, NTU, SUTD and A*STAR closes 1 December; the Hong Kong PhD Fellowship Scheme closes in early December; the MBZUAI graduate scholarship in Abu Dhabi closes around 15 December; and the Iwatani International Scholarship in Japan takes applications from 1 to 20 December. Just before the month starts, the ETH Zurich Excellence Scholarship and the MAINS Bantuan Am Pelajaran IPT for Negeri Sembilan students both close on 30 November, and the FLYsiswa flight voucher for 2026 has to be claimed by then too. If you are a final year student or fresh graduate eyeing any of these, the thing that kills December applications is not the essay, it is referee letters: academic referees go on leave, so ask this week. For everyone else, the useful December task is preparation for January, when JPA PPF, the TVETMARA intake and the next round of overseas master's deadlines all arrive at once.",
    intro_bm: "Bacaan jujur tentang Disember: kalau anda lepasan SPM atau STPM yang mencari biasiswa prasiswazah, hampir tiada yang tempatan tutup bulan ini, sebab hampir tiada yang tempatan dibuka. Tetingkap domestik yang besar dibuka semula pada 2027 selepas keputusan. Disember milik pelajar pascasiswazah, khususnya pembiayaan penyelidikan luar negara untuk kemasukan Ogos dan musim luruh 2027. Dalam senarai MyScholar sekarang: Singapore International Graduate Award (SINGA) untuk PhD di NUS, NTU, SUTD dan A*STAR tutup 1 Disember; Hong Kong PhD Fellowship Scheme tutup awal Disember; biasiswa siswazah MBZUAI di Abu Dhabi tutup sekitar 15 Disember; dan Iwatani International Scholarship di Jepun terima permohonan dari 1 hingga 20 Disember. Sejurus sebelum bulan bermula, ETH Zurich Excellence Scholarship dan Bantuan Am Pelajaran IPT MAINS untuk pelajar Negeri Sembilan kedua-duanya tutup 30 November, dan baucar penerbangan FLYsiswa 2026 juga perlu dituntut sebelum itu. Kalau anda pelajar tahun akhir atau graduan baru yang menyasarkan mana-mana ini, perkara yang mematikan permohonan Disember bukan esei, tetapi surat perujuk: pensyarah bercuti, jadi minta minggu ini. Bagi yang lain, tugas Disember yang berguna ialah persediaan untuk Januari, bila JPA PPF, kemasukan TVETMARA dan pusingan seterusnya tarikh tutup sarjana luar negara semua tiba serentak.",
    cta_en: "See every scholarship closing soon",
    cta_bm: "Lihat semua biasiswa yang hampir tutup"
  }
},

{
  slug: "biasiswa-januari-2027",
  type: "scholarship",
  cta_query: "",  // directory search the CTA actually runs (verified against DB 2026-10-26); empty = full directory
  keywords: {
    primary: "scholarships opening January 2027",
    primary_bm: "biasiswa Januari 2027",
    longtail_en: ["scholarships open in January 2027 Malaysia", "JPA PPF January 2027", "TVETMARA January 2027 intake", "new year scholarship applications 2027", "January 2027 scholarship deadlines"],
    longtail_bm: ["biasiswa dibuka Januari 2027", "JPA PPF Januari 2027", "kemasukan TVETMARA Januari 2027", "permohonan biasiswa awal tahun 2027", "tarikh tutup biasiswa Januari 2027"]
  },
  meta: {
    title: "Biasiswa Januari 2027 - Apa Dibuka Awal Tahun & Cara Bersedia | MyScholar",
    title_bm: "Scholarships January 2027 - What Opens in the New Year and How to Prepare | MyScholar",
    description: "January is the first real window of 2027: JPA's medicine, dentistry and pharmacy programme, the TVETMARA January intake, and a run of overseas master's deadlines. What opens, what closes, what to have ready.",
    description_bm: "Januari ialah tetingkap sebenar pertama 2027: program perubatan, pergigian dan farmasi JPA, kemasukan TVETMARA Januari, dan rentetan tarikh tutup sarjana luar negara. Apa dibuka, apa tutup, apa perlu sedia."
  },
  landing: {
    h1_en: "Scholarships Opening in January 2027",
    h1_bm: "Biasiswa Yang Dibuka Pada Januari 2027",
    intro_en: "January is quieter than May but it is not empty, and the students who use it well are usually the ones who already know what they are aiming for. Three things tend to happen in the first weeks of the year. JPA's Program Khas Perubatan, Pergigian dan Farmasi (PPF) has historically opened between January and March for students with pre-university results who want medicine, dentistry or pharmacy on a government scholarship; it is competitive, bonded, and the one JPA programme that does not wait for SPM results. TVETMARA's January intake takes certificate and diploma students into the IKM, KKTM and MJII institutes with heavily subsidised fees, a route that suits SPM leavers who already have their results and want a skills qualification rather than another year of waiting. And for graduates, January carries a cluster of overseas deadlines: the Doha Institute scholarships close 15 January, and several European and East Asian master's programmes for autumn 2027 close in the same stretch. FLYsiswa, the government subsidised flight ticket for students travelling between Sabah, Sarawak and the peninsula, has in past years reopened for claims in January, so check whether the 2027 scheme is confirmed. What to have ready: certified copies of your results, your IC, a passport if overseas is on the table, and for PPF a clear answer to why that field, because the interview asks. The listings below are everything on MyScholar that opens or closes around January, with the official links.",
    intro_bm: "Januari lebih sunyi daripada Mei tetapi tidak kosong, dan pelajar yang gunakannya dengan baik biasanya yang sudah tahu apa yang disasarkan. Tiga perkara lazimnya berlaku pada minggu-minggu pertama tahun. Program Khas Perubatan, Pergigian dan Farmasi (PPF) JPA sebelum ini dibuka antara Januari hingga Mac untuk pelajar yang ada keputusan pra-universiti dan mahu perubatan, pergigian atau farmasi dengan biasiswa kerajaan; ia kompetitif, ada ikatan, dan satu-satunya program JPA yang tidak menunggu keputusan SPM. Kemasukan TVETMARA Januari mengambil pelajar sijil dan diploma ke institut IKM, KKTM dan MJII dengan yuran yang disubsidi berat, laluan yang sesuai untuk lepasan SPM yang sudah ada keputusan dan mahu kelayakan kemahiran berbanding setahun lagi menunggu. Dan bagi graduan, Januari membawa kelompok tarikh tutup luar negara: biasiswa Doha Institute tutup 15 Januari, dan beberapa program sarjana Eropah dan Asia Timur untuk musim luruh 2027 tutup dalam tempoh yang sama. FLYsiswa, tiket penerbangan subsidi kerajaan untuk pelajar yang berulang antara Sabah, Sarawak dan semenanjung, pada tahun-tahun lepas dibuka semula untuk tuntutan pada Januari, jadi semak sama ada skim 2027 disahkan. Apa yang perlu sedia: salinan keputusan yang disahkan, kad pengenalan, pasport kalau luar negara dipertimbangkan, dan untuk PPF, jawapan jelas kenapa bidang itu, sebab temuduga akan tanya. Senarai di bawah ialah semua di MyScholar yang dibuka atau tutup sekitar Januari, dengan pautan rasmi.",
    cta_en: "See scholarships open in January",
    cta_bm: "Lihat biasiswa yang dibuka pada Januari"
  }
},

// ============================================================
// === WAVE 21 B: SEARCH-GAP SCHOLARSHIP PAGES (6-9) ==========
// ============================================================

{
  slug: "biasiswa-aircraft-maintenance-engineering-2026",
  type: "scholarship",
  cta_query: "aviation",  // directory search the CTA actually runs (verified against DB 2026-10-26); empty = full directory
  keywords: {
    primary: "aircraft maintenance engineering scholarship",
    primary_bm: "biasiswa aircraft maintenance engineering",
    longtail_en: ["aircraft maintenance engineer scholarship Malaysia", "CAAM Part-66 licence sponsorship", "UniKL MIAT scholarship", "aviation engineering scholarship SPM leaver", "MRO sponsorship Malaysia"],
    longtail_bm: ["biasiswa jurutera penyelenggaraan pesawat", "tajaan lesen CAAM Part-66", "biasiswa UniKL MIAT", "biasiswa kejuruteraan penerbangan lepasan SPM", "tajaan MRO Malaysia"]
  },
  meta: {
    title: "Biasiswa Aircraft Maintenance Engineering - Laluan AME & Tajaan di Malaysia | MyScholar",
    title_bm: "Aircraft Maintenance Engineering Scholarships - The AME Route and Sponsorship in Malaysia | MyScholar",
    description: "Students search aircraft on MyScholar and find pilot programmes. The other aviation career, aircraft maintenance engineering, has its own route: CAAM Part-66, MRO employers, and who sponsors it.",
    description_bm: "Pelajar cari aircraft di MyScholar dan jumpa program juruterbang. Kerjaya penerbangan yang satu lagi, aircraft maintenance engineering, ada laluannya sendiri: CAAM Part-66, majikan MRO, dan siapa yang menaja."
  },
  landing: {
    h1_en: "Aircraft Maintenance Engineering: The Scholarship Route Nobody Searches Correctly",
    h1_bm: "Aircraft Maintenance Engineering: Laluan Biasiswa Yang Jarang Dicari Dengan Betul",
    intro_en: "Every student who types aircraft into MyScholar gets pilot results, and most of them are not looking for a pilot programme. They want the other side of the hangar: the licensed aircraft maintenance engineer (AME) who signs off an aircraft as airworthy, a career that Malaysia is genuinely short of. The country runs one of Southeast Asia's largest maintenance, repair and overhaul (MRO) sectors, anchored by Malaysia Airlines Engineering, AirAsia's engineering arm, Sepang Aircraft Engineering and a cluster of engine and component shops around KLIA and Subang, and all of them need Part-66 licence holders. The route is not a normal engineering degree. You train towards the CAAM Part-66 licence, usually through a diploma or degree programme at an approved Part-147 training organisation, with UniKL MIAT in Sepang the best known, then build the hands-on hours that the licence requires. Funding works differently from the pilot track too. MARA sponsors a meaningful share of UniKL MIAT students, some airlines and MRO companies run their own cadet technician schemes, ADMAL Aviation College offers partial and full scholarships across its programmes, and the TVET route through TVETMARA keeps the cost low for certificate level entry. Starting pay for a licensed AME is modest, in the RM3,500 to RM5,500 range that the MyJourney aerospace engineer page lists, but licensed engineers with type ratings are paid well above that and are in demand across the Gulf and Singapore. The listings below are every aviation and aircraft related scholarship on MyScholar, pilot and engineering both, so you can see which is actually yours.",
    intro_bm: "Setiap pelajar yang taip aircraft di MyScholar dapat keputusan juruterbang, dan kebanyakannya bukan mencari program juruterbang. Mereka mahu sisi hangar yang satu lagi: jurutera penyelenggaraan pesawat berlesen (AME) yang mengesahkan pesawat layak terbang, kerjaya yang Malaysia betul-betul kekurangan. Negara ini menjalankan salah satu sektor penyelenggaraan, pembaikan dan baik pulih (MRO) terbesar di Asia Tenggara, berteraskan Malaysia Airlines Engineering, bahagian kejuruteraan AirAsia, Sepang Aircraft Engineering dan kelompok bengkel enjin dan komponen sekitar KLIA dan Subang, dan semuanya perlukan pemegang lesen Part-66. Laluannya bukan ijazah kejuruteraan biasa. Anda berlatih ke arah lesen CAAM Part-66, biasanya melalui program diploma atau ijazah di organisasi latihan Part-147 yang diluluskan, dengan UniKL MIAT di Sepang yang paling dikenali, kemudian kumpul jam praktikal yang lesen itu perlukan. Pembiayaan pun berbeza daripada laluan juruterbang. MARA menaja sebahagian besar pelajar UniKL MIAT, beberapa syarikat penerbangan dan MRO ada skim kadet juruteknik sendiri, ADMAL Aviation College tawarkan biasiswa separa dan penuh merentasi programnya, dan laluan TVET melalui TVETMARA kekalkan kos rendah untuk kemasukan peringkat sijil. Gaji permulaan AME berlesen sederhana, sekitar RM3,500 hingga RM5,500 seperti yang disenaraikan halaman jurutera aeroangkasa MyJourney, tetapi jurutera berlesen dengan type rating dibayar jauh lebih tinggi dan diperlukan di Teluk dan Singapura. Senarai di bawah ialah setiap biasiswa penerbangan dan pesawat di MyScholar, juruterbang dan kejuruteraan kedua-duanya, supaya anda nampak yang mana betul-betul milik anda.",
    cta_en: "See aviation and aircraft scholarships",
    cta_bm: "Lihat biasiswa penerbangan dan pesawat"
  }
},

{
  slug: "biasiswa-kejuruteraan-kimia-2026",
  type: "scholarship",
  cta_query: "chemical",  // directory search the CTA actually runs (verified against DB 2026-10-26); empty = full directory
  keywords: {
    primary: "chemical engineering scholarship Malaysia",
    primary_bm: "biasiswa kejuruteraan kimia",
    longtail_en: ["chemical engineering scholarship 2026", "Petronas scholarship chemical engineering", "oil and gas scholarship chemical engineering", "UTP chemical engineering sponsorship", "process engineering scholarship Malaysia"],
    longtail_bm: ["biasiswa kejuruteraan kimia 2026", "biasiswa Petronas kejuruteraan kimia", "biasiswa minyak dan gas kejuruteraan kimia", "tajaan UTP kejuruteraan kimia", "biasiswa jurutera proses Malaysia"]
  },
  meta: {
    title: "Biasiswa Kejuruteraan Kimia 2026 - Siapa Taja & Bidang Yang Diterima | MyScholar",
    title_bm: "Chemical Engineering Scholarships 2026 - Who Sponsors It and Where It Leads | MyScholar",
    description: "Chemical engineering searches on MyScholar return thin results because sponsors list it as engineering, oil and gas, or process. The providers that actually fund it, and the search that finds them.",
    description_bm: "Carian kejuruteraan kimia di MyScholar pulangkan keputusan nipis sebab penaja senaraikannya sebagai kejuruteraan, minyak dan gas, atau proses. Penyedia yang betul-betul membiayainya, dan carian yang menjumpai mereka."
  },
  landing: {
    h1_en: "Chemical Engineering Scholarships in Malaysia",
    h1_bm: "Biasiswa Kejuruteraan Kimia di Malaysia",
    intro_en: "Chemical engineering is one of the better funded degrees in Malaysia and one of the worst labelled. Students search for it by name and find one or two records, when in reality most of the country's largest sponsors fund it every year under a different heading. Petronas is the obvious one: its education sponsorship programme has long treated chemical and process engineering as core fields, both at Universiti Teknologi Petronas and at partner universities abroad, and it remains the single largest employer of chemical engineers in the country. Shell, the Sarawak energy and gas players, and the downstream petrochemical groups around Kerteh, Gebeng and Pengerang follow the same pattern, listing their scholarships as engineering or oil and gas rather than chemical. The public universities with strong programmes, including UTM, USM, UMPSA in Pahang and UKM, run merit tuition waivers that cover chemical engineering without naming it. So the practical advice is to search wider than the degree name: engineering, oil and gas, Petronas, and the general GLC scholarships are where the money sits. The field itself holds up well for Malaysia: the petrochemical complexes, palm oil processing, pharmaceuticals in Penang and Selangor, and the newer battery and semiconductor materials plants all hire process engineers, and the Board of Engineers Malaysia professional route is clear. The listings below start from the records that mention chemical engineering directly; use the related searches to widen the net.",
    intro_bm: "Kejuruteraan kimia antara ijazah yang paling banyak dibiayai di Malaysia dan antara yang paling teruk dilabel. Pelajar mencarinya mengikut nama dan jumpa satu dua rekod, sedangkan sebenarnya kebanyakan penaja terbesar negara membiayainya setiap tahun di bawah tajuk lain. Petronas yang paling jelas: program tajaan pendidikannya sudah lama menganggap kejuruteraan kimia dan proses sebagai bidang teras, di Universiti Teknologi Petronas dan di universiti rakan luar negara, dan ia kekal majikan tunggal terbesar jurutera kimia di negara ini. Shell, pemain tenaga dan gas Sarawak, serta kumpulan petrokimia hiliran sekitar Kerteh, Gebeng dan Pengerang ikut corak yang sama, menyenaraikan biasiswa mereka sebagai kejuruteraan atau minyak dan gas, bukan kimia. Universiti awam dengan program yang kukuh, termasuk UTM, USM, UMPSA di Pahang dan UKM, ada pengecualian yuran merit yang merangkumi kejuruteraan kimia tanpa menamakannya. Jadi nasihat praktikalnya ialah cari lebih luas daripada nama ijazah: kejuruteraan, minyak dan gas, Petronas, dan biasiswa GLC umum ialah tempat wangnya. Bidang ini sendiri kukuh untuk Malaysia: kompleks petrokimia, pemprosesan minyak sawit, farmaseutikal di Pulau Pinang dan Selangor, serta loji bahan bateri dan semikonduktor yang baru semuanya mengambil jurutera proses, dan laluan profesional Lembaga Jurutera Malaysia jelas. Senarai di bawah bermula daripada rekod yang sebut kejuruteraan kimia secara langsung; guna carian berkaitan untuk luaskan jaring.",
    cta_en: "See chemical engineering scholarships",
    cta_bm: "Lihat biasiswa kejuruteraan kimia"
  }
},

{
  slug: "biasiswa-aktuari-actuary-2026",
  type: "scholarship",
  cta_query: "actuarial",  // directory search the CTA actually runs (verified against DB 2026-10-26); empty = full directory
  keywords: {
    primary: "actuarial science scholarship Malaysia",
    primary_bm: "biasiswa sains aktuari",
    longtail_en: ["actuary scholarship Malaysia 2026", "actuarial science sponsorship insurance company", "Securities Commission scholarship actuarial", "MNRB scholarship actuarial science", "actuarial degree scholarship SPM leaver"],
    longtail_bm: ["biasiswa aktuari 2026", "tajaan sains aktuari syarikat insurans", "biasiswa Suruhanjaya Sekuriti aktuari", "biasiswa MNRB sains aktuari", "biasiswa ijazah aktuari lepasan SPM"]
  },
  meta: {
    title: "Biasiswa Sains Aktuari 2026 - Penaja Insurans, Takaful & Pasaran Modal | MyScholar",
    title_bm: "Actuarial Science Scholarships 2026 - Insurance, Takaful and Capital Market Sponsors | MyScholar",
    description: "Students search actuary and get nothing; the records are filed as actuarial. Four active sponsors on MyScholar fund actuarial science: Securities Commission, MNRB, Generali and AEON Credit. How each works.",
    description_bm: "Pelajar cari actuary dan tak jumpa apa-apa; rekodnya difailkan sebagai actuarial. Empat penaja aktif di MyScholar biayai sains aktuari: Suruhanjaya Sekuriti, MNRB, Generali dan AEON Credit. Cara setiap satu berfungsi."
  },
  landing: {
    h1_en: "Actuarial Science Scholarships in Malaysia",
    h1_bm: "Biasiswa Sains Aktuari di Malaysia",
    intro_en: "Actuarial science is a small field with an unusually high scholarship rate, because the people who need actuaries, insurers, takaful operators, reinsurers and the capital market regulator, would rather sponsor a student for four years than compete for a qualified one later. On MyScholar right now there are four active sponsors whose records name actuarial science directly. The Securities Commission Malaysia scholarship covers full tuition, living allowance, a laptop and flights for overseas study, with a bond, and opens around March to May. MNRB, the national reinsurer, funds foundation and undergraduate study at local and selected universities with a bond. Generali Malaysia's Volare scholarship pays up to RM12,000 a year with no bond, which is rare. And the AEON Credit sponsorship places students at UM, UPM or USM with about RM40,000 over the degree. Beyond these, Bank Negara's Kijang scholarship, the big takaful operators and the Big Four actuarial practices sponsor or hire into the field without naming it. The degree itself is offered at UM, UKM, UiTM, USIM, Heriot-Watt Malaysia and a few private universities, and the real test is not the degree but the professional exams: the Society of Actuaries or the Institute and Faculty of Actuaries papers that take most people five to eight years after graduation. Sponsors know this, which is why they look for Add Maths and Mathematics grades first and treat everything else as secondary. One search tip: the directory indexes the word actuarial, so search that rather than actuary. The button below does it for you.",
    intro_bm: "Sains aktuari bidang kecil dengan kadar biasiswa yang luar biasa tinggi, sebab pihak yang perlukan aktuari, iaitu syarikat insurans, pengendali takaful, syarikat insurans semula dan pengawal selia pasaran modal, lebih rela menaja pelajar empat tahun daripada bersaing untuk aktuari yang sudah layak kemudian. Di MyScholar sekarang ada empat penaja aktif yang rekodnya menamakan sains aktuari secara langsung. Biasiswa Suruhanjaya Sekuriti Malaysia tanggung yuran penuh, elaun sara hidup, komputer riba dan tiket penerbangan untuk pengajian luar negara, dengan ikatan, dan dibuka sekitar Mac hingga Mei. MNRB, syarikat insurans semula negara, biayai pengajian asasi dan prasiswazah di universiti tempatan dan terpilih dengan ikatan. Biasiswa Volare Generali Malaysia bayar sehingga RM12,000 setahun tanpa ikatan, yang jarang ada. Dan tajaan AEON Credit tempatkan pelajar di UM, UPM atau USM dengan kira-kira RM40,000 sepanjang ijazah. Selain ini, biasiswa Kijang Bank Negara, pengendali takaful besar dan amalan aktuari Big Four menaja atau mengambil pekerja dalam bidang ini tanpa menamakannya. Ijazah ini ditawarkan di UM, UKM, UiTM, USIM, Heriot-Watt Malaysia dan beberapa universiti swasta, dan ujian sebenarnya bukan ijazah tetapi peperiksaan profesional: kertas Society of Actuaries atau Institute and Faculty of Actuaries yang ambil masa lima hingga lapan tahun selepas tamat bagi kebanyakan orang. Penaja tahu ini, sebab itu mereka lihat gred Matematik Tambahan dan Matematik dulu dan anggap yang lain sekunder. Satu tip carian: direktori ini mengindeks perkataan actuarial, jadi cari itu dan bukan actuary. Butang di bawah buat untuk anda.",
    cta_en: "See actuarial science scholarships",
    cta_bm: "Lihat biasiswa sains aktuari"
  }
},

{
  slug: "biasiswa-quantity-surveying-2026",
  type: "scholarship",
  cta_query: "quantity surveying",  // directory search the CTA actually runs (verified against DB 2026-10-26); empty = full directory
  keywords: {
    primary: "quantity surveying scholarship Malaysia",
    primary_bm: "biasiswa ukur bahan",
    longtail_en: ["quantity surveyor scholarship 2026", "property developer scholarship quantity surveying", "Eco World Foundation scholarship quantity surveying", "IJM scholarship quantity surveyor", "construction scholarship Malaysia SPM leaver"],
    longtail_bm: ["biasiswa ukur bahan 2026", "biasiswa pemaju hartanah ukur bahan", "biasiswa Eco World Foundation ukur bahan", "biasiswa IJM juruukur bahan", "biasiswa pembinaan Malaysia lepasan SPM"]
  },
  meta: {
    title: "Biasiswa Ukur Bahan 2026 - Pemaju & Kontraktor Yang Menaja QS | MyScholar",
    title_bm: "Quantity Surveying Scholarships 2026 - Developers and Contractors That Sponsor QS | MyScholar",
    description: "Four active sponsors on MyScholar fund quantity surveying: Eco World Foundation (closes 31 October 2026), IJM, WCT and SP Setia. The developer and contractor route into a BQSM-registered career.",
    description_bm: "Empat penaja aktif di MyScholar biayai ukur bahan: Eco World Foundation (tutup 31 Oktober 2026), IJM, WCT dan SP Setia. Laluan pemaju dan kontraktor ke kerjaya berdaftar BQSM."
  },
  landing: {
    h1_en: "Quantity Surveying Scholarships in Malaysia",
    h1_bm: "Biasiswa Ukur Bahan di Malaysia",
    intro_en: "Quantity surveying is the construction industry's accounting profession: QS graduates measure, cost and control the money on every building, highway and plant, and in Malaysia the career runs through the Board of Quantity Surveyors Malaysia (BQSM) registration. It is also one of the few degrees where the sponsors are not banks or government but the developers and contractors themselves, who need a steady supply of QS graduates and fund them directly. On MyScholar the four active sponsors that name quantity surveying are all from that world. The Eco World Foundation scholarship pays RM8,000 to RM20,000 a year plus a living allowance with no bond and B40 priority, and its 2026 round closes on 31 October, so if you are reading this in the last week of October, go now. IJM Corporation covers full tuition and allowances with a bond and rolling intakes. WCT Holdings runs an annual bonded scholarship covering tuition. And the SP Setia Foundation offers full tuition, a living allowance and a laptop, bonded, opening around the second quarter. Gamuda, Sunway and the state housing boards sponsor into the field too under broader construction or built environment headings. The degree is offered at UM, UTM, USM, UiTM, UTAR, Taylor's and INTI among others, and most programmes are accredited by BQSM and the RICS, which matters because Malaysian QS graduates work across Singapore, the Gulf and Australia on the strength of that recognition. Starting pay is around RM2,800 to RM3,800 and rises with chartered status. The listings below are the four direct sponsors; the related searches cover construction and built environment more broadly.",
    intro_bm: "Ukur bahan ialah profesion perakaunan industri pembinaan: graduan QS mengukur, menilai kos dan mengawal wang untuk setiap bangunan, lebuh raya dan loji, dan di Malaysia kerjaya ini melalui pendaftaran Lembaga Juruukur Bahan Malaysia (BQSM). Ia juga antara sedikit ijazah yang penajanya bukan bank atau kerajaan tetapi pemaju dan kontraktor sendiri, yang perlukan bekalan graduan QS yang stabil dan biayai mereka secara langsung. Di MyScholar, empat penaja aktif yang menamakan ukur bahan semuanya dari dunia itu. Biasiswa Eco World Foundation bayar RM8,000 hingga RM20,000 setahun serta elaun sara hidup tanpa ikatan dan keutamaan B40, dan pusingan 2026 tutup pada 31 Oktober, jadi kalau anda baca ini pada minggu terakhir Oktober, pergi sekarang. IJM Corporation tanggung yuran penuh dan elaun dengan ikatan dan kemasukan bergolek. WCT Holdings jalankan biasiswa tahunan berikat yang tanggung yuran. Dan Yayasan SP Setia tawarkan yuran penuh, elaun sara hidup dan komputer riba, berikat, dibuka sekitar suku kedua. Gamuda, Sunway dan lembaga perumahan negeri juga menaja bidang ini di bawah tajuk pembinaan atau alam bina yang lebih luas. Ijazah ini ditawarkan di UM, UTM, USM, UiTM, UTAR, Taylor's dan INTI antara lain, dan kebanyakan program diakreditasi BQSM dan RICS, yang penting sebab graduan QS Malaysia bekerja di Singapura, Teluk dan Australia atas pengiktirafan itu. Gaji permulaan sekitar RM2,800 hingga RM3,800 dan naik dengan status chartered. Senarai di bawah ialah empat penaja langsung; carian berkaitan merangkumi pembinaan dan alam bina secara lebih luas.",
    cta_en: "See quantity surveying scholarships",
    cta_bm: "Lihat biasiswa ukur bahan"
  }
},

// ============================================================
// === WAVE 21 C: CARA-JADI CAREER PAGES (10-17) ==============
// ============================================================

{
  slug: "cara-jadi-full-stack-developer-malaysia",
  type: "journey", career_id: "full-stack-developer",
  keywords: {
    primary: "how to become full stack developer Malaysia",
    primary_bm: "cara jadi full stack developer malaysia",
    longtail_en: ["full stack developer salary Malaysia", "full stack developer without degree Malaysia", "coding bootcamp Malaysia full stack", "full stack developer skills 2026", "web developer career path Malaysia"],
    longtail_bm: ["gaji full stack developer malaysia", "full stack developer tanpa ijazah", "bootcamp coding malaysia", "skil full stack developer 2026", "laluan kerjaya web developer malaysia"]
  },
  meta: {
    title: "Cara Jadi Full Stack Developer di Malaysia 2026 - Skil, Laluan & Gaji | MyJourney",
    title_bm: "How to Become a Full Stack Developer in Malaysia 2026 - Skills, Routes and Salary | MyJourney",
    description: "Full stack is the single most posted tech job in Malaysia. The degree route, the bootcamp route, what employers actually test, and starting pay of RM4,000 to RM6,000.",
    description_bm: "Full stack ialah kerja teknologi yang paling banyak diiklankan di Malaysia. Laluan ijazah, laluan bootcamp, apa yang majikan betul-betul uji, dan gaji permulaan RM4,000 hingga RM6,000."
  },
  landing: {
    h1_en: "How to Become a Full Stack Developer in Malaysia",
    h1_bm: "Cara Jadi Full Stack Developer di Malaysia",
    intro_en: "A full stack developer builds both halves of a web or mobile product: the front end people see and the back end of servers, databases and APIs that make it work. In Malaysia it is the most posted tech role by a wide margin, with Jobstreet routinely showing more than three thousand open listings, because startups, e-commerce platforms, the global business services centres in KL and Cyberjaya, banks and the digital banks all need people who can ship a feature end to end. There are two honest routes in. The standard one is a three year computer science or IT degree at a public university, APU, MMU, Sunway or UTAR, where the degree gets you past HR filters and the GLC graduate programmes. The other is the bootcamp or self-taught route, which Malaysian employers accept more readily than in most fields, but only if you can show real work: a portfolio of two or three deployed projects with the code on GitHub, not a certificate. Either way the stack that local job ads actually list in 2026 is JavaScript or TypeScript, React or Vue on the front, Node or a Python or PHP framework on the back, SQL and a cloud platform, with Git as a given. Fresh full stack developers start at RM4,000 to RM6,000, which is above most degree jobs, and three years of solid experience pushes well past RM8,000, with remote roles for Singapore or Australian companies paying more again. The trade-off is that the field changes fast and nobody will send you on training; you keep yourself current or you fall behind.",
    intro_bm: "Full stack developer bina kedua-dua bahagian produk web atau mudah alih: front end yang orang nampak dan back end iaitu pelayan, pangkalan data dan API yang buat ia berfungsi. Di Malaysia ia peranan teknologi yang paling banyak diiklankan dengan jurang yang besar, dengan Jobstreet lazimnya menunjukkan lebih tiga ribu iklan terbuka, sebab startup, platform e-dagang, pusat perkhidmatan perniagaan global di KL dan Cyberjaya, bank dan bank digital semuanya perlukan orang yang boleh siapkan satu ciri dari hujung ke hujung. Ada dua laluan jujur masuk. Yang standard ialah ijazah sains komputer atau IT tiga tahun di universiti awam, APU, MMU, Sunway atau UTAR, di mana ijazah bawa anda melepasi tapisan HR dan program graduan GLC. Yang satu lagi ialah laluan bootcamp atau belajar sendiri, yang majikan Malaysia terima lebih mudah berbanding kebanyakan bidang, tetapi hanya kalau anda boleh tunjuk kerja sebenar: portfolio dua tiga projek yang sudah dilancarkan dengan kod di GitHub, bukan sijil. Apa pun, susunan yang iklan kerja tempatan betul-betul senaraikan pada 2026 ialah JavaScript atau TypeScript, React atau Vue di depan, Node atau rangka kerja Python atau PHP di belakang, SQL dan satu platform cloud, dengan Git sebagai asas. Full stack developer baru mula pada RM4,000 hingga RM6,000, lebih tinggi daripada kebanyakan kerja ijazah, dan tiga tahun pengalaman kukuh tolak jauh melepasi RM8,000, dengan kerja remote untuk syarikat Singapura atau Australia bayar lebih lagi. Tukarannya ialah bidang ini berubah pantas dan tiada siapa akan hantar anda ke latihan; anda kekalkan diri terkini atau anda ketinggalan.",
    cta_en: "See the full stack developer career path",
    cta_bm: "Lihat laluan kerjaya full stack developer"
  }
},

{
  slug: "cara-jadi-business-analyst-malaysia",
  type: "journey", career_id: "business-analyst",
  keywords: {
    primary: "how to become business analyst Malaysia",
    primary_bm: "cara jadi business analyst malaysia",
    longtail_en: ["business analyst salary Malaysia fresh graduate", "business analyst skills SQL requirements", "business analyst vs data analyst Malaysia", "business analyst degree Malaysia", "BA career path banking Malaysia"],
    longtail_bm: ["gaji business analyst malaysia fresh graduate", "skil business analyst SQL", "business analyst vs data analyst", "ijazah business analyst malaysia", "laluan kerjaya BA perbankan malaysia"]
  },
  meta: {
    title: "Cara Jadi Business Analyst di Malaysia 2026 - Ijazah, Skil & Gaji | MyJourney",
    title_bm: "How to Become a Business Analyst in Malaysia 2026 - Degree, Skills and Salary | MyJourney",
    description: "Business analysts translate what a company needs into what IT builds. One of the most posted roles nationwide, open to business and IT graduates alike, starting at RM3,500 to RM5,500.",
    description_bm: "Business analyst terjemahkan apa yang syarikat perlukan kepada apa yang IT bina. Antara peranan paling banyak diiklankan di seluruh negara, terbuka kepada graduan perniagaan dan IT, bermula RM3,500 hingga RM5,500."
  },
  landing: {
    h1_en: "How to Become a Business Analyst in Malaysia",
    h1_bm: "Cara Jadi Business Analyst di Malaysia",
    intro_en: "A business analyst sits between the people who run a business and the people who build its systems. You work out what a department actually needs, write it down in a way engineers can build from, and check that what gets delivered solves the problem. In Malaysia this is one of the most posted jobs nationwide, with Jobstreet consistently listing more than two thousand openings, because every bank, GLC, insurer, telco and consulting firm is somewhere in a digital transformation project and needs people who can speak both languages. The degree is flexible: a BBA, a business or economics degree, or a BSc in IT or information systems all work, and the public universities, Sunway, Taylor's, APU and UTAR all feed the role. What employers test is not the major but the skills: can you run a workshop and extract requirements, can you write a clear user story, can you read a process and spot where it breaks, and increasingly can you pull your own numbers with SQL and Excel rather than waiting for someone to send them. Banks and the Big Four often hire business analysts into graduate programmes, and that is the most structured entry point. Fresh graduates start at RM3,500 to RM5,500, with the banking and consulting end of the range paying more, and experienced BAs who move into product owner or project management roles comfortably pass RM8,000. The common confusion is BA versus data analyst: a data analyst answers questions from data, a business analyst defines what needs to change. If you like people and problems more than spreadsheets, this is the one.",
    intro_bm: "Business analyst duduk antara orang yang jalankan perniagaan dan orang yang bina sistemnya. Anda kenal pasti apa yang satu jabatan betul-betul perlukan, tuliskannya dengan cara yang jurutera boleh bina, dan pastikan apa yang disiapkan selesaikan masalah itu. Di Malaysia ini antara kerja yang paling banyak diiklankan di seluruh negara, dengan Jobstreet konsisten menyenaraikan lebih dua ribu kekosongan, sebab setiap bank, GLC, syarikat insurans, telco dan firma perunding ada projek transformasi digital dan perlukan orang yang boleh bercakap kedua-dua bahasa. Ijazahnya fleksibel: BBA, ijazah perniagaan atau ekonomi, atau BSc IT atau sistem maklumat semuanya boleh, dan universiti awam, Sunway, Taylor's, APU dan UTAR semuanya menyumbang kepada peranan ini. Apa yang majikan uji bukan jurusan tetapi kemahiran: boleh tak anda kendalikan bengkel dan cungkil keperluan, boleh tak tulis user story yang jelas, boleh tak baca satu proses dan kesan di mana ia rosak, dan semakin penting, boleh tak tarik nombor sendiri dengan SQL dan Excel daripada tunggu orang hantar. Bank dan Big Four selalu ambil business analyst ke dalam program graduan, dan itu pintu masuk yang paling berstruktur. Graduan baru mula pada RM3,500 hingga RM5,500, dengan hujung perbankan dan perunding bayar lebih, dan BA berpengalaman yang beralih ke peranan product owner atau pengurusan projek selesa melepasi RM8,000. Kekeliruan biasa ialah BA lawan data analyst: data analyst jawab soalan daripada data, business analyst tentukan apa yang perlu berubah. Kalau anda lebih suka orang dan masalah daripada spreadsheet, ini yang satu.",
    cta_en: "See the business analyst career path",
    cta_bm: "Lihat laluan kerjaya business analyst"
  }
},

{
  slug: "cara-jadi-management-consultant-malaysia",
  type: "journey", career_id: "management-consultant",
  keywords: {
    primary: "how to become management consultant Malaysia",
    primary_bm: "cara jadi management consultant malaysia",
    longtail_en: ["management consultant salary Malaysia", "McKinsey BCG Bain Malaysia graduate", "case interview preparation Malaysia", "consulting career path Malaysia", "Big Four consulting graduate programme"],
    longtail_bm: ["gaji management consultant malaysia", "McKinsey BCG Bain graduan malaysia", "persediaan case interview", "laluan kerjaya consulting malaysia", "program graduan consulting Big Four"]
  },
  meta: {
    title: "Cara Jadi Management Consultant di Malaysia 2026 - Laluan, Case Interview & Gaji | MyJourney",
    title_bm: "How to Become a Management Consultant in Malaysia 2026 - Route, Case Interviews and Pay | MyJourney",
    description: "KL is a regional consulting hub, and the firms hire fresh graduates every year. Which degree helps, why the case interview matters more than the CV, and associate pay of RM4,500 to RM7,000.",
    description_bm: "KL ialah hab consulting serantau, dan firma-firma ambil graduan baru setiap tahun. Ijazah mana membantu, kenapa case interview lebih penting daripada CV, dan gaji associate RM4,500 hingga RM7,000."
  },
  landing: {
    h1_en: "How to Become a Management Consultant in Malaysia",
    h1_bm: "Cara Jadi Management Consultant di Malaysia",
    intro_en: "Management consultants are hired by companies, government agencies and GLCs to solve problems their own teams cannot: a cost base that has grown out of control, a market they want to enter, a transformation that has stalled. Kuala Lumpur is a genuine regional hub for this work, with McKinsey, BCG, Bain, Accenture Strategy, Deloitte and EY-Parthenon all running active Malaysian offices that recruit fresh graduates every year, alongside a layer of mid-sized and boutique firms. The honest version of the route is this. Any strong degree gets you to the application: economics, engineering, accounting, law and the sciences all appear in consulting intakes, but the top firms filter hard by university reputation and academic results, so a first class from a well-regarded university, a JPA or Khazanah scholarship on the CV, and leadership roles in student organisations all count. What actually gets you through the door is the case interview, where you are handed a business problem and asked to structure it out loud in forty minutes. Nobody is good at this naturally. Students who get offers have typically done thirty to fifty practice cases with partners, and Malaysian university consulting clubs exist precisely for this. Starting pay as an analyst or associate consultant is RM4,500 to RM7,000 a month at the strategy firms, with the Big Four advisory practices a little below that, and the progression is steep: consultants who stay three to five years and move to industry usually land in strategy or chief of staff roles paying well into five figures. The cost is real too, with long weeks and heavy travel, which is why most people treat it as a launch pad rather than a lifetime.",
    intro_bm: "Management consultant diupah oleh syarikat, agensi kerajaan dan GLC untuk selesaikan masalah yang pasukan mereka sendiri tak boleh: kos yang membengkak tak terkawal, pasaran yang mereka mahu masuk, transformasi yang tersekat. Kuala Lumpur ialah hab serantau sebenar untuk kerja ini, dengan McKinsey, BCG, Bain, Accenture Strategy, Deloitte dan EY-Parthenon semuanya ada pejabat Malaysia yang aktif mengambil graduan baru setiap tahun, di samping lapisan firma sederhana dan butik. Versi jujur laluannya begini. Mana-mana ijazah yang kukuh bawa anda ke permohonan: ekonomi, kejuruteraan, perakaunan, undang-undang dan sains semua muncul dalam pengambilan consulting, tetapi firma teratas tapis keras ikut reputasi universiti dan keputusan akademik, jadi kelas pertama dari universiti yang dihormati, biasiswa JPA atau Khazanah dalam CV, dan jawatan kepimpinan dalam persatuan pelajar semuanya dikira. Yang betul-betul bawa anda masuk ialah case interview, di mana anda diberi satu masalah perniagaan dan diminta susun jawapannya secara lisan dalam empat puluh minit. Tiada siapa pandai ini secara semula jadi. Pelajar yang dapat tawaran biasanya sudah buat tiga puluh hingga lima puluh kes latihan dengan rakan, dan kelab consulting universiti Malaysia wujud khusus untuk ini. Gaji permulaan sebagai analyst atau associate consultant ialah RM4,500 hingga RM7,000 sebulan di firma strategi, dengan amalan advisory Big Four sedikit di bawah itu, dan kenaikannya curam: consultant yang kekal tiga hingga lima tahun dan beralih ke industri biasanya dapat peranan strategi atau chief of staff dengan gaji lima angka. Kosnya juga nyata, dengan minggu yang panjang dan perjalanan yang banyak, sebab itu kebanyakan orang anggap ia pelantar pelancaran, bukan seumur hidup.",
    cta_en: "See the management consultant career path",
    cta_bm: "Lihat laluan kerjaya management consultant"
  }
},

{
  slug: "cara-jadi-wealth-manager-malaysia",
  type: "journey", career_id: "wealth-manager",
  keywords: {
    primary: "how to become wealth manager Malaysia",
    primary_bm: "cara jadi wealth manager malaysia",
    longtail_en: ["wealth manager salary Malaysia", "private banking career Malaysia", "SIDC CMSRL licence requirements", "relationship manager bank graduate programme", "CFP certification Malaysia"],
    longtail_bm: ["gaji wealth manager malaysia", "kerjaya private banking malaysia", "lesen CMSRL SIDC", "program graduan relationship manager bank", "sijil CFP malaysia"]
  },
  meta: {
    title: "Cara Jadi Wealth Manager di Malaysia 2026 - Lesen, Laluan Bank & Gaji | MyJourney",
    title_bm: "How to Become a Wealth Manager in Malaysia 2026 - Licences, Bank Route and Pay | MyJourney",
    description: "Wealth managers advise high net worth clients on investing and protecting their money. The finance degree plus SIDC licence route, the bank graduate programmes, and starting pay of RM4,000 to RM6,000.",
    description_bm: "Wealth manager nasihatkan pelanggan berharta tinggi tentang melabur dan melindungi wang mereka. Laluan ijazah kewangan plus lesen SIDC, program graduan bank, dan gaji permulaan RM4,000 hingga RM6,000."
  },
  landing: {
    h1_en: "How to Become a Wealth Manager in Malaysia",
    h1_bm: "Cara Jadi Wealth Manager di Malaysia",
    intro_en: "Wealth managers look after the money of people who have a lot of it: business owners, professionals and families who need someone to structure their investments across equities, bonds, unit trusts, insurance and estate planning. In Malaysia the demand has grown sharply in the last few years as KL positioned itself as a regional wealth centre and a string of global family offices set up local operations, so the private banks, the wealth arms of Maybank, CIMB, Public Bank and Hong Leong, and the independent advisory firms are all hiring. The route is more regulated than most finance careers. You need a degree, usually finance, economics, accounting or business, and then a licence before you can legally give investment advice: the Securities Industry Development Corporation (SIDC) examinations that lead to a Capital Markets Services Representative's Licence, and for insurance products the relevant Bank Negara registrations. Most people enter through a bank graduate or management associate programme as a relationship manager trainee, which is where the licensing gets done on the bank's time. The Certified Financial Planner (CFP) qualification is the credential that sets established wealth managers apart. Starting pay is RM4,000 to RM6,000 a month as an associate or trainee relationship manager, but the real money in this career is variable: once you carry a book of clients, bonuses tied to assets under management can double the base. The honest caution is that this is a sales job dressed as an advisory one, at least for the first five years, and your income depends on building trust with people who are rightly suspicious of anyone who wants to manage their money.",
    intro_bm: "Wealth manager jaga wang orang yang ada banyak wang: pemilik perniagaan, profesional dan keluarga yang perlukan seseorang untuk susun pelaburan mereka merentasi ekuiti, bon, unit amanah, insurans dan perancangan harta pusaka. Di Malaysia permintaannya naik mendadak sejak beberapa tahun kebelakangan apabila KL meletakkan dirinya sebagai pusat kekayaan serantau dan rentetan pejabat keluarga global buka operasi tempatan, jadi bank swasta, bahagian kekayaan Maybank, CIMB, Public Bank dan Hong Leong, serta firma nasihat bebas semuanya mengambil pekerja. Laluannya lebih dikawal selia daripada kebanyakan kerjaya kewangan. Anda perlu ijazah, biasanya kewangan, ekonomi, perakaunan atau perniagaan, kemudian lesen sebelum boleh beri nasihat pelaburan secara sah: peperiksaan Securities Industry Development Corporation (SIDC) yang membawa kepada Lesen Wakil Perkhidmatan Pasaran Modal, dan untuk produk insurans, pendaftaran Bank Negara yang berkaitan. Kebanyakan orang masuk melalui program graduan atau management associate bank sebagai pelatih relationship manager, dan di situlah pelesenan dibuat atas masa bank. Kelayakan Certified Financial Planner (CFP) ialah sijil yang membezakan wealth manager yang mantap. Gaji permulaan ialah RM4,000 hingga RM6,000 sebulan sebagai associate atau pelatih relationship manager, tetapi wang sebenar dalam kerjaya ini berubah-ubah: sebaik anda ada buku pelanggan sendiri, bonus yang terikat pada aset di bawah pengurusan boleh gandakan gaji asas. Amaran jujurnya ialah ini kerja jualan yang berpakaian nasihat, sekurang-kurangnya lima tahun pertama, dan pendapatan anda bergantung pada membina kepercayaan dengan orang yang wajar curiga terhadap sesiapa yang mahu uruskan wang mereka.",
    cta_en: "See the wealth manager career path",
    cta_bm: "Lihat laluan kerjaya wealth manager"
  }
},

{
  slug: "cara-jadi-bidan-midwife-malaysia",
  type: "journey", career_id: "midwife",
  keywords: {
    primary: "how to become midwife Malaysia",
    primary_bm: "cara jadi bidan malaysia",
    longtail_en: ["midwife salary Malaysia government hospital", "midwifery post basic course Malaysia", "nursing to midwifery Malaysia", "Malaysian Midwifery Board registration", "midwife course after SPM"],
    longtail_bm: ["gaji bidan hospital kerajaan", "kursus post basic kebidanan", "jururawat ke bidan malaysia", "pendaftaran Lembaga Bidan Malaysia", "kursus bidan lepasan SPM"]
  },
  meta: {
    title: "Cara Jadi Bidan di Malaysia 2026 - Laluan Jururawat, Post Basic & Gaji | MyJourney",
    title_bm: "How to Become a Midwife in Malaysia 2026 - Nursing Route, Post Basic and Pay | MyJourney",
    description: "In Malaysia most midwives are nurses first. The nursing degree plus post basic midwifery route, Malaysian Midwifery Board registration, and starting pay of RM3,000 to RM4,600 in MOH and private wards.",
    description_bm: "Di Malaysia kebanyakan bidan ialah jururawat dulu. Laluan ijazah kejururawatan plus post basic kebidanan, pendaftaran Lembaga Bidan Malaysia, dan gaji permulaan RM3,000 hingga RM4,600 di wad KKM dan swasta."
  },
  landing: {
    h1_en: "How to Become a Midwife in Malaysia",
    h1_bm: "Cara Jadi Bidan di Malaysia",
    intro_en: "Midwives care for women through pregnancy, labour, birth and the weeks after, and in Malaysia the profession is regulated by the Malaysian Midwifery Board under the Ministry of Health, with its own register separate from nursing. That last point shapes the whole route. Unlike some countries, Malaysia does not run a direct entry midwifery degree for school leavers in any volume; the recognised path is to qualify and register as a nurse first, through a diploma or degree in nursing at a Ministry of Health college, a public university or an accredited private college like IMU, MAHSA or KPJ, then complete a post basic midwifery programme, typically a six to twelve month advanced diploma, and register with the Midwifery Board. The old community midwife route (Jururawat Masyarakat) still exists for rural health clinics and is a shorter MOH-run programme, which is worth knowing if you want to work in Sabah, Sarawak or the rural peninsula. Entry at SPM level means credits in Biology, Chemistry and a third science alongside BM and English, and MOH nursing colleges carry an allowance during training plus a bond. Pay as a registered midwife starts at RM3,000 to RM4,600 a month in government and private maternity wards, with the government scale adding allowances for shifts and critical care. Demand is steady rather than booming: MOH maternity units keep consistent staffing, private hospitals in the Klang Valley, Penang and Johor recruit regularly, and Malaysia's maternal health targets under the 12th Malaysia Plan keep the role funded. The honest part is the hours. Babies arrive at 3am, and a midwife's week does not look like an office week.",
    intro_bm: "Bidan jaga wanita sepanjang kehamilan, bersalin, kelahiran dan minggu-minggu selepasnya, dan di Malaysia profesion ini dikawal selia oleh Lembaga Bidan Malaysia di bawah Kementerian Kesihatan, dengan daftar sendiri yang berasingan daripada kejururawatan. Perkara terakhir itu membentuk keseluruhan laluan. Tidak seperti sesetengah negara, Malaysia tidak jalankan ijazah kebidanan kemasukan terus untuk lepasan sekolah dalam jumlah besar; laluan yang diiktiraf ialah layak dan daftar sebagai jururawat dulu, melalui diploma atau ijazah kejururawatan di kolej Kementerian Kesihatan, universiti awam atau kolej swasta yang diakreditasi seperti IMU, MAHSA atau KPJ, kemudian tamatkan program post basic kebidanan, biasanya diploma lanjutan enam hingga dua belas bulan, dan daftar dengan Lembaga Bidan. Laluan lama Jururawat Masyarakat masih wujud untuk klinik kesihatan luar bandar dan ia program KKM yang lebih pendek, yang patut tahu kalau anda mahu bekerja di Sabah, Sarawak atau luar bandar semenanjung. Kemasukan peringkat SPM bermakna kredit Biologi, Kimia dan satu lagi sains bersama BM dan Bahasa Inggeris, dan kolej kejururawatan KKM ada elaun semasa latihan serta ikatan. Gaji sebagai bidan berdaftar bermula RM3,000 hingga RM4,600 sebulan di wad bersalin kerajaan dan swasta, dengan skala kerajaan tambah elaun syif dan rawatan kritikal. Permintaan stabil, bukan meletup: unit bersalin KKM kekalkan kakitangan yang konsisten, hospital swasta di Lembah Klang, Pulau Pinang dan Johor ambil pekerja secara berkala, dan sasaran kesihatan ibu Malaysia di bawah Rancangan Malaysia Ke-12 kekalkan pembiayaan peranan ini. Bahagian jujurnya ialah waktu kerja. Bayi lahir pukul 3 pagi, dan minggu bidan tak sama seperti minggu pejabat.",
    cta_en: "See the midwife career path",
    cta_bm: "Lihat laluan kerjaya bidan"
  }
},

{
  slug: "cara-jadi-jurutera-aeroangkasa-malaysia",
  type: "journey", career_id: "aerospace-engineer",
  keywords: {
    primary: "how to become aerospace engineer Malaysia",
    primary_bm: "cara jadi jurutera aeroangkasa malaysia",
    longtail_en: ["aerospace engineer salary Malaysia", "aerospace engineering degree UPM USM", "aircraft maintenance engineer vs aerospace engineer", "CAAM Part-66 licence route", "aerospace industry jobs Malaysia MRO"],
    longtail_bm: ["gaji jurutera aeroangkasa malaysia", "ijazah kejuruteraan aeroangkasa UPM USM", "jurutera penyelenggaraan pesawat vs aeroangkasa", "laluan lesen CAAM Part-66", "kerja industri aeroangkasa malaysia MRO"]
  },
  meta: {
    title: "Cara Jadi Jurutera Aeroangkasa di Malaysia 2026 - Dua Laluan, Lesen & Gaji | MyJourney",
    title_bm: "How to Become an Aerospace Engineer in Malaysia 2026 - Two Tracks, Licences and Pay | MyJourney",
    description: "Malaysia's aerospace industry is mostly maintenance, not design. The degree route, the CAAM Part-66 licence route, which one actually gets hired, and starting pay of RM3,500 to RM5,500.",
    description_bm: "Industri aeroangkasa Malaysia kebanyakannya penyelenggaraan, bukan reka bentuk. Laluan ijazah, laluan lesen CAAM Part-66, yang mana betul-betul diambil kerja, dan gaji permulaan RM3,500 hingga RM5,500."
  },
  landing: {
    h1_en: "How to Become an Aerospace Engineer in Malaysia",
    h1_bm: "Cara Jadi Jurutera Aeroangkasa di Malaysia",
    intro_en: "Aerospace engineering sounds like designing aircraft, and a small number of Malaysians do exactly that at Airbus suppliers, Spirit AeroSystems in Subang and the composites plants in Kedah and Johor. But the honest shape of the industry here is maintenance, repair and overhaul: Malaysia runs one of the largest MRO sectors in Southeast Asia, led by Malaysia Airlines Engineering, AirAsia's engineering arm, Sepang Aircraft Engineering and the engine and component shops around KLIA, and the national aerospace blueprint is built around growing that to a multi-billion dollar industry by 2030. That means two different tracks with the same job title. The degree track is a four year BEng in aerospace engineering at UPM, USM or UniKL MIAT, accredited by the Board of Engineers Malaysia, which leads into design, structures, flight test and the technical side of MRO. The licence track is the CAAM Part-66 aircraft maintenance engineer licence, earned through an approved Part-147 training organisation plus supervised hands-on hours, and it is the Part-66 licence, not the degree, that the MRO employers actually hire on. Many of the best placed graduates do both: a degree for the engineering foundation, then Part-66 to be employable. Entry at SPM needs credits in Add Maths, Physics and Chemistry, and MARA, Petronas and the airlines themselves sponsor students into the field. Starting pay is RM3,500 to RM5,500 a month as a graduate engineer or AME trainee, and licensed engineers with type ratings on specific aircraft move well above that, with Gulf and Singapore employers paying more again. The caution is that the design side is thin in Malaysia, so if you want to build aircraft rather than keep them flying, plan for a postgraduate degree or a move abroad.",
    intro_bm: "Kejuruteraan aeroangkasa bunyinya seperti mereka bentuk pesawat, dan sebilangan kecil rakyat Malaysia memang buat itu di pembekal Airbus, Spirit AeroSystems di Subang dan loji komposit di Kedah dan Johor. Tetapi bentuk jujur industri ini di sini ialah penyelenggaraan, pembaikan dan baik pulih: Malaysia jalankan salah satu sektor MRO terbesar di Asia Tenggara, diterajui Malaysia Airlines Engineering, bahagian kejuruteraan AirAsia, Sepang Aircraft Engineering dan bengkel enjin dan komponen sekitar KLIA, dan pelan tindakan aeroangkasa negara dibina untuk mengembangkannya menjadi industri bernilai berbilion dolar menjelang 2030. Ini bermakna dua laluan berbeza dengan gelaran kerja yang sama. Laluan ijazah ialah BEng kejuruteraan aeroangkasa empat tahun di UPM, USM atau UniKL MIAT, diakreditasi Lembaga Jurutera Malaysia, yang membawa ke reka bentuk, struktur, ujian penerbangan dan sisi teknikal MRO. Laluan lesen ialah lesen jurutera penyelenggaraan pesawat CAAM Part-66, diperoleh melalui organisasi latihan Part-147 yang diluluskan serta jam praktikal di bawah seliaan, dan lesen Part-66 itu, bukan ijazah, yang majikan MRO betul-betul ambil kerja. Ramai graduan yang paling baik kedudukannya buat kedua-duanya: ijazah untuk asas kejuruteraan, kemudian Part-66 untuk boleh diambil kerja. Kemasukan SPM perlukan kredit Matematik Tambahan, Fizik dan Kimia, dan MARA, Petronas dan syarikat penerbangan sendiri menaja pelajar ke bidang ini. Gaji permulaan ialah RM3,500 hingga RM5,500 sebulan sebagai jurutera graduan atau pelatih AME, dan jurutera berlesen dengan type rating pesawat tertentu naik jauh melepasi itu, dengan majikan Teluk dan Singapura bayar lebih lagi. Amarannya ialah sisi reka bentuk nipis di Malaysia, jadi kalau anda mahu bina pesawat dan bukan kekalkannya terbang, rancang untuk ijazah pascasiswazah atau berpindah ke luar negara.",
    cta_en: "See the aerospace engineer career path",
    cta_bm: "Lihat laluan kerjaya jurutera aeroangkasa"
  }
},

{
  slug: "cara-jadi-copywriter-malaysia",
  type: "journey", career_id: "copywriter",
  keywords: {
    primary: "how to become copywriter Malaysia",
    primary_bm: "cara jadi copywriter malaysia",
    longtail_en: ["copywriter salary Malaysia junior", "advertising agency jobs KL copywriter", "copywriting portfolio no experience", "mass communication degree copywriter", "freelance copywriter Malaysia rates"],
    longtail_bm: ["gaji copywriter junior malaysia", "kerja agensi iklan KL copywriter", "portfolio copywriting tanpa pengalaman", "ijazah komunikasi massa copywriter", "kadar copywriter freelance malaysia"]
  },
  meta: {
    title: "Cara Jadi Copywriter di Malaysia 2026 - Portfolio, Agensi & Gaji | MyJourney",
    title_bm: "How to Become a Copywriter in Malaysia 2026 - Portfolio, Agencies and Pay | MyJourney",
    description: "Copywriters write the words that make advertising work. The agency route in KL, why a portfolio beats a degree, how bilingual writers get ahead, and junior pay of RM2,500 to RM3,500.",
    description_bm: "Copywriter tulis perkataan yang buat pengiklanan berkesan. Laluan agensi di KL, kenapa portfolio kalahkan ijazah, bagaimana penulis dwibahasa mendahului, dan gaji junior RM2,500 hingga RM3,500."
  },
  landing: {
    h1_en: "How to Become a Copywriter in Malaysia",
    h1_bm: "Cara Jadi Copywriter di Malaysia",
    intro_en: "A copywriter writes the words in advertising: the headline on a billboard, the script for a Raya commercial, the caption under a brand's TikTok, the email that makes you click, the landing page that makes you buy. In Malaysia the industry is centred in Kuala Lumpur, where the big network agencies and a growing layer of independent and digital shops sit alongside in-house brand teams at the telcos, banks, e-commerce platforms and consumer goods companies, and the Jobstreet data shows steady, not spectacular, demand across all of them. The route is unusual among the careers on MyJourney because the degree matters less than almost anywhere else. Most Malaysian copywriters studied mass communication, advertising, English or journalism at UiTM, Taylor's, Sunway, UCSI or a public university, but agencies hire on the portfolio, and a portfolio can be built before you graduate: spec campaigns for real brands, social copy you wrote for a club or a small business, a newsletter with actual subscribers, student awards from the Kancil or Young Lions competitions. The thing that gives a Malaysian copywriter an edge is being able to write that lands in two or three languages, because campaigns here are rarely English only and clients pay for a writer who can make Bahasa copy sound natural rather than translated. Junior copywriters start at RM2,500 to RM3,500 a month, which is low, and the honest reason people stay is that the ceiling is not: senior writers and creative directors at agencies, or content leads at tech companies, earn well into five figures, and freelance copywriters with a client base charge by the project at rates that can outpace a salary. Expect the first two years to be fast, unglamorous and the best training you will get.",
    intro_bm: "Copywriter tulis perkataan dalam pengiklanan: tajuk utama di papan iklan, skrip iklan Raya, kapsyen di bawah TikTok jenama, e-mel yang buat anda klik, halaman pendaratan yang buat anda beli. Di Malaysia industri ini berpusat di Kuala Lumpur, di mana agensi rangkaian besar dan lapisan agensi bebas dan digital yang berkembang duduk bersama pasukan jenama dalaman di telco, bank, platform e-dagang dan syarikat barangan pengguna, dan data Jobstreet tunjukkan permintaan yang stabil, bukan hebat, merentasi semuanya. Laluannya luar biasa antara kerjaya di MyJourney sebab ijazah kurang penting berbanding hampir mana-mana tempat lain. Kebanyakan copywriter Malaysia belajar komunikasi massa, pengiklanan, Bahasa Inggeris atau kewartawanan di UiTM, Taylor's, Sunway, UCSI atau universiti awam, tetapi agensi ambil kerja berdasarkan portfolio, dan portfolio boleh dibina sebelum tamat pengajian: kempen spekulatif untuk jenama sebenar, kapsyen sosial yang anda tulis untuk kelab atau perniagaan kecil, surat berita dengan pelanggan sebenar, anugerah pelajar daripada pertandingan Kancil atau Young Lions. Perkara yang beri copywriter Malaysia kelebihan ialah mampu menulis yang mengena dalam dua atau tiga bahasa, sebab kempen di sini jarang Bahasa Inggeris sahaja dan pelanggan bayar untuk penulis yang boleh buat kapsyen Bahasa Melayu bunyi semula jadi, bukan terjemahan. Copywriter junior mula pada RM2,500 hingga RM3,500 sebulan, yang rendah, dan sebab jujur orang kekal ialah silingnya tidak rendah: penulis kanan dan pengarah kreatif di agensi, atau ketua kandungan di syarikat teknologi, dapat gaji lima angka, dan copywriter freelance dengan pangkalan pelanggan caj ikut projek pada kadar yang boleh melebihi gaji. Jangkakan dua tahun pertama pantas, tidak glamor dan latihan terbaik yang anda akan dapat.",
    cta_en: "See the copywriter career path",
    cta_bm: "Lihat laluan kerjaya copywriter"
  }
},

{
  slug: "cara-jadi-criminologist-malaysia",
  type: "journey", career_id: "criminologist",
  keywords: {
    primary: "how to become criminologist Malaysia",
    primary_bm: "cara jadi kriminologis malaysia",
    longtail_en: ["criminology degree Malaysia", "criminologist salary Malaysia", "criminology jobs Jabatan Penjara PDRM", "criminology vs forensic science Malaysia", "crime prevention officer career"],
    longtail_bm: ["ijazah kriminologi malaysia", "gaji kriminologis malaysia", "kerja kriminologi Jabatan Penjara PDRM", "kriminologi vs sains forensik", "kerjaya pegawai pencegahan jenayah"]
  },
  meta: {
    title: "Cara Jadi Kriminologis di Malaysia 2026 - Ijazah, Kerja & Gaji | MyJourney",
    title_bm: "How to Become a Criminologist in Malaysia 2026 - Degree, Jobs and Pay | MyJourney",
    description: "Criminology is the study of why crime happens, not the lab work of CSI. Where it is taught in Malaysia, who hires (prisons, PDRM, Home Affairs, research), and starting pay of RM2,800 to RM4,000.",
    description_bm: "Kriminologi ialah kajian kenapa jenayah berlaku, bukan kerja makmal CSI. Di mana ia diajar di Malaysia, siapa yang ambil kerja (penjara, PDRM, Kementerian Dalam Negeri, penyelidikan), dan gaji permulaan RM2,800 hingga RM4,000."
  },
  landing: {
    h1_en: "How to Become a Criminologist in Malaysia",
    h1_bm: "Cara Jadi Kriminologis di Malaysia",
    intro_en: "Criminology is the study of crime as a social problem: why it happens, who it happens to, what sentencing and rehabilitation actually do, and which prevention policies work. It is not forensic science, which is the laboratory analysis of evidence, and students who confuse the two usually find out in second year. In Malaysia criminology is taught inside social science, psychology and law faculties rather than as a stand-alone degree in most places, with USM, UKM, UiTM, UUM and a few private universities offering it as a major or a concentration, and most graduates then specialise through a master's. The employers are mostly public sector. Jabatan Penjara Malaysia hires criminology-trained officers into rehabilitation and parole work, PDRM's crime prevention and community policing divisions take graduates, the Ministry of Home Affairs and the Anti-Drug Agency run policy and research units, and the universities and think tanks employ researchers. A smaller private market exists in corporate security, fraud investigation and compliance, particularly at banks, where a criminology background combined with some finance knowledge is valued. Entry at SPM needs credits in BM and English, and Sociology, History and Moral Studies are useful background; no science subjects are required. Starting pay is RM2,800 to RM4,000 a month as a crime prevention officer, rehabilitation officer or junior researcher, and most of the public roles follow the government scheme of service with its allowances and pension. Demand is steady rather than large: the agencies hire every year, but in modest numbers, so a master's degree and some research or volunteer experience with rehabilitation NGOs make a real difference. The honest pitch is that this is a career for people who want to understand crime and reduce it, not catch criminals; that is a different job.",
    intro_bm: "Kriminologi ialah kajian jenayah sebagai masalah sosial: kenapa ia berlaku, kepada siapa ia berlaku, apa yang hukuman dan pemulihan sebenarnya buat, dan dasar pencegahan mana yang berkesan. Ia bukan sains forensik, iaitu analisis makmal terhadap bukti, dan pelajar yang keliru antara kedua-duanya biasanya sedar pada tahun kedua. Di Malaysia kriminologi diajar dalam fakulti sains sosial, psikologi dan undang-undang, bukan sebagai ijazah berasingan di kebanyakan tempat, dengan USM, UKM, UiTM, UUM dan beberapa universiti swasta tawarkannya sebagai pengkhususan, dan kebanyakan graduan kemudian mengkhusus melalui sarjana. Majikannya kebanyakan sektor awam. Jabatan Penjara Malaysia ambil pegawai terlatih kriminologi untuk kerja pemulihan dan parol, bahagian pencegahan jenayah dan perpolisan komuniti PDRM ambil graduan, Kementerian Dalam Negeri dan Agensi Antidadah jalankan unit dasar dan penyelidikan, dan universiti serta badan pemikir ambil penyelidik. Pasaran swasta yang lebih kecil wujud dalam keselamatan korporat, siasatan penipuan dan pematuhan, terutamanya di bank, di mana latar kriminologi bersama sedikit pengetahuan kewangan dihargai. Kemasukan SPM perlukan kredit BM dan Bahasa Inggeris, dan Sosiologi, Sejarah serta Pendidikan Moral latar yang berguna; tiada subjek sains diperlukan. Gaji permulaan ialah RM2,800 hingga RM4,000 sebulan sebagai pegawai pencegahan jenayah, pegawai pemulihan atau penyelidik muda, dan kebanyakan jawatan awam ikut skim perkhidmatan kerajaan dengan elaun dan pencennya. Permintaan stabil, bukan besar: agensi ambil pekerja setiap tahun tetapi dalam jumlah sederhana, jadi ijazah sarjana dan sedikit pengalaman penyelidikan atau sukarelawan dengan NGO pemulihan buat perbezaan sebenar. Jualan jujurnya ialah ini kerjaya untuk orang yang mahu faham jenayah dan kurangkannya, bukan tangkap penjenayah; itu kerja yang lain.",
    cta_en: "See the criminologist career path",
    cta_bm: "Lihat laluan kerjaya kriminologis"
  }
}

];
