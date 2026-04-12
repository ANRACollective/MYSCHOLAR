/**
 * ═══════════════════════════════════════════════════════════════════
 * JACK SEO Generator -- MyScholar.my
 * Run: node generate-seo.js
 * Output: /seo/ folder with all landing page HTMLs ready for GitHub Pages
 * ═══════════════════════════════════════════════════════════════════
 */

const fs = require('fs');
const path = require('path');

// ── OUTPUT DIR ────────────────────────────────────────────────────
const OUT = path.join(__dirname, 'seo');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

// ── MASTER KEYWORD DATABASE ──────────────────────────────────────
// Every entry = one landing page targeting a specific search intent
const KEYWORDS = [

  // ═══════════════════════════════════════════════════════════════
  // CATEGORY 1: CORE / HIGH VOLUME
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "biasiswa-malaysia-2026",
    type: "scholarship",
    keywords: {
      primary: "scholarship malaysia 2026",
      primary_bm: "biasiswa malaysia 2026",
      longtail_en: ["list of scholarships in malaysia 2026", "malaysia scholarship application 2026", "scholarship for malaysian students 2026", "how to apply scholarship malaysia"],
      longtail_bm: ["senarai biasiswa malaysia 2026", "permohonan biasiswa malaysia 2026", "biasiswa untuk pelajar malaysia 2026", "cara mohon biasiswa malaysia"]
    },
    meta: {
      title: "Scholarships Malaysia 2026 -- Full List | MyScholar",
      title_bm: "Biasiswa Malaysia 2026 -- Senarai Penuh | MyScholar",
      description: "Browse 200+ scholarships in Malaysia for 2026. Filter by SPM, STPM, degree, diploma. Free, no login required.",
      description_bm: "Layari 200+ biasiswa Malaysia 2026. Tapis ikut SPM, STPM, ijazah, diploma. Percuma, tiada login diperlukan."
    },
    landing: {
      h1_en: "Every Scholarship in Malaysia, In One Place",
      h1_bm: "Semua Biasiswa Malaysia, Di Satu Tempat",
      intro_en: "We've gathered 200+ scholarships from government bodies, GLCs, banks, and private foundations -- all in one searchable directory. No login, no paywall. Just find what you're eligible for and apply.",
      intro_bm: "Kami kumpulkan 200+ biasiswa daripada kerajaan, GLC, bank, dan yayasan swasta -- semuanya dalam satu direktori. Tiada login, tiada bayaran. Cari kelayakan anda dan mohon terus.",
      cta_en: "Search Scholarships Now",
      cta_bm: "Cari Biasiswa Sekarang"
    }
  },

  {
    slug: "biasiswa-kerajaan-2026",
    type: "scholarship",
    keywords: {
      primary: "government scholarship malaysia 2026",
      primary_bm: "biasiswa kerajaan malaysia 2026",
      longtail_en: ["federal government scholarship malaysia", "government funded scholarship 2026", "public scholarship malaysia list", "jabatan perkhidmatan awam scholarship"],
      longtail_bm: ["biasiswa kerajaan persekutuan 2026", "biasiswa tajaan kerajaan malaysia", "senarai biasiswa kerajaan 2026", "biasiswa JPA kerajaan"]
    },
    meta: {
      title: "Government Scholarships Malaysia 2026 | MyScholar",
      title_bm: "Biasiswa Kerajaan Malaysia 2026 | MyScholar",
      description: "All Malaysian government scholarships for 2026 -- JPA, MARA, state scholarships and more. Updated weekly.",
      description_bm: "Semua biasiswa kerajaan Malaysia 2026 -- JPA, MARA, biasiswa negeri dan lain-lain. Dikemas kini setiap minggu."
    },
    landing: {
      h1_en: "Government Scholarships Malaysia 2026",
      h1_bm: "Biasiswa Kerajaan Malaysia 2026",
      intro_en: "From JPA to MARA to state-level scholarships -- we track every government-funded opportunity so you don't have to check ten different websites. Updated regularly.",
      intro_bm: "Dari JPA ke MARA hingga biasiswa peringkat negeri -- kami jejaki setiap peluang tajaan kerajaan supaya anda tak perlu semak sepuluh laman web berbeza. Dikemas kini secara berkala.",
      cta_en: "View Government Scholarships",
      cta_bm: "Lihat Biasiswa Kerajaan"
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CATEGORY 2: BY EDUCATION LEVEL (SPM / STPM / DIPLOMA / DEGREE)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "biasiswa-lepasan-spm-2026",
    type: "scholarship",
    keywords: {
      primary: "scholarship after SPM 2026",
      primary_bm: "biasiswa lepasan SPM 2026",
      longtail_en: ["scholarship for SPM leavers 2026", "SPM scholarship malaysia", "post-SPM scholarship application", "best scholarships after SPM results"],
      longtail_bm: ["biasiswa selepas SPM 2026", "permohonan biasiswa lepasan SPM", "biasiswa SPM terbaik 2026", "senarai biasiswa untuk pelajar SPM"]
    },
    meta: {
      title: "Scholarships After SPM 2026 -- Full List | MyScholar",
      title_bm: "Biasiswa Lepasan SPM 2026 -- Senarai Penuh | MyScholar",
      description: "Just got your SPM results? Find 50+ scholarships open to SPM leavers in 2026. Diploma, foundation, and degree pathways.",
      description_bm: "Baru dapat keputusan SPM? Cari 50+ biasiswa terbuka untuk lepasan SPM 2026. Laluan diploma, asasi, dan ijazah."
    },
    landing: {
      h1_en: "Scholarships After SPM 2026",
      h1_bm: "Biasiswa Lepasan SPM 2026",
      intro_en: "SPM results are out, and scholarship deadlines are ticking. We've compiled every opportunity open to SPM leavers -- from JPA to private foundations. Start searching.",
      intro_bm: "Keputusan SPM dah keluar, dan tarikh tutup biasiswa sedang berjalan. Kami kumpulkan setiap peluang untuk lepasan SPM -- dari JPA hingga yayasan swasta. Mula cari sekarang.",
      cta_en: "Find SPM Scholarships",
      cta_bm: "Cari Biasiswa SPM"
    }
  },

  {
    slug: "biasiswa-lepasan-stpm-2026",
    type: "scholarship",
    keywords: {
      primary: "scholarship after STPM 2026",
      primary_bm: "biasiswa lepasan STPM 2026",
      longtail_en: ["STPM scholarship malaysia 2026", "scholarship for STPM students", "post-STPM scholarship application", "degree scholarship after STPM"],
      longtail_bm: ["biasiswa selepas STPM 2026", "permohonan biasiswa lepasan STPM", "biasiswa ijazah lepasan STPM", "senarai biasiswa STPM 2026"]
    },
    meta: {
      title: "Scholarships After STPM 2026 | MyScholar",
      title_bm: "Biasiswa Lepasan STPM 2026 | MyScholar",
      description: "STPM graduates -- explore degree scholarships from government, GLCs, and private sponsors. All in one free directory.",
      description_bm: "Lepasan STPM -- terokai biasiswa ijazah dari kerajaan, GLC, dan penaja swasta. Semua dalam satu direktori percuma."
    },
    landing: {
      h1_en: "Scholarships After STPM 2026",
      h1_bm: "Biasiswa Lepasan STPM 2026",
      intro_en: "STPM done? Your next step is finding the right scholarship for your degree. We list every opportunity available to STPM graduates -- filter by field, sponsor, and deadline.",
      intro_bm: "Dah habis STPM? Langkah seterusnya ialah cari biasiswa yang sesuai untuk ijazah anda. Kami senaraikan semua peluang untuk lepasan STPM -- tapis ikut bidang, penaja, dan tarikh tutup.",
      cta_en: "Find STPM Scholarships",
      cta_bm: "Cari Biasiswa STPM"
    }
  },

  {
    slug: "biasiswa-diploma-2026",
    type: "scholarship",
    keywords: {
      primary: "diploma scholarship malaysia 2026",
      primary_bm: "biasiswa diploma malaysia 2026",
      longtail_en: ["scholarship for diploma students malaysia", "diploma funding malaysia 2026", "diploma scholarship application", "financial aid diploma malaysia"],
      longtail_bm: ["biasiswa pelajar diploma malaysia", "bantuan kewangan diploma 2026", "permohonan biasiswa diploma", "biasiswa untuk belajar diploma"]
    },
    meta: {
      title: "Diploma Scholarships Malaysia 2026 | MyScholar",
      title_bm: "Biasiswa Diploma Malaysia 2026 | MyScholar",
      description: "Scholarships for diploma students in Malaysia. MARA, PTPTN alternatives, and private sponsors all listed free.",
      description_bm: "Biasiswa untuk pelajar diploma di Malaysia. MARA, alternatif PTPTN, dan penaja swasta disenaraikan percuma."
    },
    landing: {
      h1_en: "Diploma Scholarships Malaysia 2026",
      h1_bm: "Biasiswa Diploma Malaysia 2026",
      intro_en: "Pursuing a diploma doesn't mean you're on your own financially. We've compiled scholarships specifically for diploma students -- from MARA to corporate sponsors.",
      intro_bm: "Belajar diploma bukan bermaksud anda kena tanggung sendiri. Kami kumpulkan biasiswa khas untuk pelajar diploma -- dari MARA hingga penaja korporat.",
      cta_en: "Browse Diploma Scholarships",
      cta_bm: "Layari Biasiswa Diploma"
    }
  },

  {
    slug: "biasiswa-ijazah-sarjana-muda-2026",
    type: "scholarship",
    keywords: {
      primary: "degree scholarship malaysia 2026",
      primary_bm: "biasiswa ijazah sarjana muda 2026",
      longtail_en: ["undergraduate scholarship malaysia", "bachelor degree scholarship 2026", "full scholarship degree malaysia", "scholarship for university students malaysia"],
      longtail_bm: ["biasiswa prasiswazah malaysia 2026", "biasiswa penuh ijazah malaysia", "biasiswa universiti malaysia 2026", "biasiswa pengajian ijazah pertama"]
    },
    meta: {
      title: "Degree Scholarships Malaysia 2026 | MyScholar",
      title_bm: "Biasiswa Ijazah Sarjana Muda 2026 | MyScholar",
      description: "Full and partial degree scholarships for Malaysian undergraduates. Government, GLC, and private -- all in one place.",
      description_bm: "Biasiswa penuh dan separa untuk ijazah sarjana muda. Kerajaan, GLC, dan swasta -- semua di satu tempat."
    },
    landing: {
      h1_en: "Degree Scholarships Malaysia 2026",
      h1_bm: "Biasiswa Ijazah Sarjana Muda 2026",
      intro_en: "Whether you're entering university or already enrolled, there are scholarships you might be missing. We list degree-level opportunities from every sponsor category in Malaysia.",
      intro_bm: "Sama ada anda baru masuk universiti atau sudah mendaftar, ada biasiswa yang mungkin anda terlepas. Kami senaraikan peluang peringkat ijazah dari semua kategori penaja di Malaysia.",
      cta_en: "Search Degree Scholarships",
      cta_bm: "Cari Biasiswa Ijazah"
    }
  },

  {
    slug: "biasiswa-sarjana-master-2026",
    type: "scholarship",
    keywords: {
      primary: "master scholarship malaysia 2026",
      primary_bm: "biasiswa sarjana master malaysia 2026",
      longtail_en: ["postgraduate scholarship malaysia 2026", "masters degree funding malaysia", "graduate scholarship application malaysia", "scholarship for masters students"],
      longtail_bm: ["biasiswa pascasiswazah malaysia 2026", "biasiswa pengajian sarjana 2026", "permohonan biasiswa master", "biasiswa untuk pelajar sarjana"]
    },
    meta: {
      title: "Master & Postgraduate Scholarships Malaysia 2026 | MyScholar",
      title_bm: "Biasiswa Sarjana & Pascasiswazah Malaysia 2026 | MyScholar",
      description: "Postgraduate scholarships in Malaysia for 2026. Masters and PhD funding from government, universities, and corporates.",
      description_bm: "Biasiswa pascasiswazah Malaysia 2026. Pembiayaan sarjana dan PhD dari kerajaan, universiti, dan korporat."
    },
    landing: {
      h1_en: "Postgraduate Scholarships Malaysia 2026",
      h1_bm: "Biasiswa Pascasiswazah Malaysia 2026",
      intro_en: "Thinking about a Masters or PhD? Funding is out there -- from government research grants to corporate sponsorships. We've gathered them so you can compare in one place.",
      intro_bm: "Nak sambung Master atau PhD? Pembiayaan memang ada -- dari geran penyelidikan kerajaan hingga tajaan korporat. Kami kumpulkan supaya anda boleh bandingkan di satu tempat.",
      cta_en: "Find Postgraduate Funding",
      cta_bm: "Cari Pembiayaan Pascasiswazah"
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CATEGORY 3: MAJOR SPONSORS (JPA, MARA, PETRONAS, etc.)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "biasiswa-jpa-2026",
    type: "scholarship",
    keywords: {
      primary: "JPA scholarship 2026",
      primary_bm: "biasiswa JPA 2026",
      longtail_en: ["JPA scholarship application 2026", "how to apply JPA scholarship", "JPA scholarship requirements", "public service department scholarship malaysia"],
      longtail_bm: ["permohonan biasiswa JPA 2026", "cara mohon biasiswa JPA", "syarat biasiswa JPA 2026", "biasiswa jabatan perkhidmatan awam"]
    },
    meta: {
      title: "JPA Scholarship 2026 -- Application Guide | MyScholar",
      title_bm: "Biasiswa JPA 2026 -- Panduan Permohonan | MyScholar",
      description: "Everything about JPA Scholarship 2026: requirements, deadlines, application steps. Find it on MyScholar.",
      description_bm: "Semua tentang Biasiswa JPA 2026: syarat, tarikh tutup, langkah permohonan. Cari di MyScholar."
    },
    landing: {
      h1_en: "JPA Scholarship 2026",
      h1_bm: "Biasiswa JPA 2026",
      intro_en: "The JPA scholarship is one of Malaysia's most sought-after government awards. We keep the latest info on requirements, deadlines, and how to apply -- so you don't miss the window.",
      intro_bm: "Biasiswa JPA adalah antara anugerah kerajaan paling dicari di Malaysia. Kami simpan maklumat terkini tentang syarat, tarikh tutup, dan cara mohon -- supaya anda tak terlepas peluang.",
      cta_en: "View JPA Scholarship Details",
      cta_bm: "Lihat Butiran Biasiswa JPA"
    }
  },

  {
    slug: "biasiswa-mara-2026",
    type: "scholarship",
    keywords: {
      primary: "MARA scholarship 2026",
      primary_bm: "biasiswa MARA 2026",
      longtail_en: ["MARA scholarship application 2026", "MARA loan scholarship", "MARA education sponsorship", "MARA scholarship for bumiputera"],
      longtail_bm: ["permohonan biasiswa MARA 2026", "pinjaman biasiswa MARA", "tajaan pendidikan MARA", "biasiswa MARA bumiputera 2026"]
    },
    meta: {
      title: "MARA Scholarship 2026 -- Apply Now | MyScholar",
      title_bm: "Biasiswa MARA 2026 -- Mohon Sekarang | MyScholar",
      description: "MARA Scholarship 2026: eligibility, deadlines, and application process. One of Malaysia's largest education sponsors.",
      description_bm: "Biasiswa MARA 2026: kelayakan, tarikh tutup, dan proses permohonan. Salah satu penaja pendidikan terbesar Malaysia."
    },
    landing: {
      h1_en: "MARA Scholarship 2026",
      h1_bm: "Biasiswa MARA 2026",
      intro_en: "MARA offers one of the broadest scholarship and loan programs in Malaysia. Whether you're heading overseas or staying local, check if you qualify.",
      intro_bm: "MARA menawarkan salah satu program biasiswa dan pinjaman paling luas di Malaysia. Sama ada anda ke luar negara atau kekal di dalam negara, semak kelayakan anda.",
      cta_en: "Check MARA Scholarship",
      cta_bm: "Semak Biasiswa MARA"
    }
  },

  {
    slug: "biasiswa-petronas-2026",
    type: "scholarship",
    keywords: {
      primary: "Petronas scholarship 2026",
      primary_bm: "biasiswa Petronas 2026",
      longtail_en: ["Petronas education sponsorship 2026", "Yayasan Petronas scholarship", "Petronas scholarship engineering", "how to get Petronas scholarship"],
      longtail_bm: ["tajaan pendidikan Petronas 2026", "biasiswa Yayasan Petronas", "biasiswa Petronas kejuruteraan", "cara dapat biasiswa Petronas"]
    },
    meta: {
      title: "Petronas Scholarship 2026 | MyScholar",
      title_bm: "Biasiswa Petronas 2026 | MyScholar",
      description: "Petronas Education Sponsorship 2026: one of Malaysia's most prestigious corporate scholarships. Find details here.",
      description_bm: "Tajaan Pendidikan Petronas 2026: salah satu biasiswa korporat paling berprestij di Malaysia. Cari butiran di sini."
    },
    landing: {
      h1_en: "Petronas Scholarship 2026",
      h1_bm: "Biasiswa Petronas 2026",
      intro_en: "Petronas sponsors top students for engineering, science, and technology degrees -- locally and abroad. It's competitive, but it's worth knowing what they're looking for.",
      intro_bm: "Petronas menaja pelajar cemerlang untuk ijazah kejuruteraan, sains, dan teknologi -- dalam dan luar negara. Ia kompetitif, tapi berbaloi untuk tahu apa yang mereka cari.",
      cta_en: "View Petronas Scholarship",
      cta_bm: "Lihat Biasiswa Petronas"
    }
  },

  {
    slug: "biasiswa-khazanah-2026",
    type: "scholarship",
    keywords: {
      primary: "Khazanah scholarship 2026",
      primary_bm: "biasiswa Khazanah 2026",
      longtail_en: ["Yayasan Khazanah scholarship 2026", "Khazanah global scholarship", "Khazanah scholarship application", "Khazanah scholarship overseas"],
      longtail_bm: ["biasiswa Yayasan Khazanah 2026", "biasiswa Khazanah luar negara", "permohonan biasiswa Khazanah", "biasiswa Khazanah global"]
    },
    meta: {
      title: "Khazanah Scholarship 2026 | MyScholar",
      title_bm: "Biasiswa Khazanah 2026 | MyScholar",
      description: "Yayasan Khazanah offers prestigious scholarships for top Malaysian students to study at world-class universities.",
      description_bm: "Yayasan Khazanah menawarkan biasiswa berprestij untuk pelajar cemerlang Malaysia belajar di universiti bertaraf dunia."
    },
    landing: {
      h1_en: "Khazanah Scholarship 2026",
      h1_bm: "Biasiswa Khazanah 2026",
      intro_en: "Khazanah's scholarship sends top Malaysian students to leading universities worldwide. If you're aiming high, this is one to know about.",
      intro_bm: "Biasiswa Khazanah menghantar pelajar terbaik Malaysia ke universiti terkemuka seluruh dunia. Kalau anda aim tinggi, ini patut anda tahu.",
      cta_en: "View Khazanah Scholarship",
      cta_bm: "Lihat Biasiswa Khazanah"
    }
  },

  {
    slug: "biasiswa-bank-negara-2026",
    type: "scholarship",
    keywords: {
      primary: "Bank Negara scholarship 2026",
      primary_bm: "biasiswa Bank Negara 2026",
      longtail_en: ["BNM scholarship 2026", "Bank Negara Kijang scholarship", "central bank scholarship malaysia", "Bank Negara scholarship requirements"],
      longtail_bm: ["biasiswa BNM 2026", "biasiswa Kijang Bank Negara", "biasiswa bank pusat malaysia", "syarat biasiswa Bank Negara"]
    },
    meta: {
      title: "Bank Negara Scholarship 2026 | MyScholar",
      title_bm: "Biasiswa Bank Negara 2026 | MyScholar",
      description: "Bank Negara's Kijang Scholarship -- one of Malaysia's most competitive awards for finance and economics students.",
      description_bm: "Biasiswa Kijang Bank Negara -- salah satu anugerah paling kompetitif untuk pelajar kewangan dan ekonomi Malaysia."
    },
    landing: {
      h1_en: "Bank Negara Kijang Scholarship 2026",
      h1_bm: "Biasiswa Kijang Bank Negara 2026",
      intro_en: "The Kijang Scholarship from Bank Negara is highly selective and covers full tuition at top universities. If finance or economics is your path, check the requirements here.",
      intro_bm: "Biasiswa Kijang dari Bank Negara sangat selektif dan menanggung yuran penuh di universiti terkemuka. Jika kewangan atau ekonomi laluan anda, semak syarat di sini.",
      cta_en: "View BNM Scholarship",
      cta_bm: "Lihat Biasiswa BNM"
    }
  },

  {
    slug: "biasiswa-tenaga-nasional-2026",
    type: "scholarship",
    keywords: {
      primary: "Tenaga Nasional scholarship 2026",
      primary_bm: "biasiswa Tenaga Nasional 2026",
      longtail_en: ["TNB scholarship 2026", "Yayasan Tenaga Nasional scholarship", "TNB engineering scholarship", "Tenaga Nasional education sponsorship"],
      longtail_bm: ["biasiswa TNB 2026", "biasiswa Yayasan Tenaga Nasional", "biasiswa TNB kejuruteraan", "tajaan pendidikan Tenaga Nasional"]
    },
    meta: {
      title: "TNB / Tenaga Nasional Scholarship 2026 | MyScholar",
      title_bm: "Biasiswa TNB / Tenaga Nasional 2026 | MyScholar",
      description: "Yayasan Tenaga Nasional scholarship for engineering students. Full sponsorship for local and overseas study.",
      description_bm: "Biasiswa Yayasan Tenaga Nasional untuk pelajar kejuruteraan. Tajaan penuh untuk pengajian dalam dan luar negara."
    },
    landing: {
      h1_en: "TNB Scholarship 2026",
      h1_bm: "Biasiswa TNB 2026",
      intro_en: "Tenaga Nasional sponsors engineering students through Yayasan TNB. Full tuition, living allowance, and a career pathway in one of Malaysia's biggest GLCs.",
      intro_bm: "Tenaga Nasional menaja pelajar kejuruteraan melalui Yayasan TNB. Yuran penuh, elaun sara hidup, dan laluan kerjaya dalam salah satu GLC terbesar Malaysia.",
      cta_en: "Check TNB Scholarship",
      cta_bm: "Semak Biasiswa TNB"
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CATEGORY 4: BY DEMOGRAPHIC
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "biasiswa-b40-2026",
    type: "scholarship",
    keywords: {
      primary: "scholarship for B40 students 2026",
      primary_bm: "biasiswa pelajar B40 2026",
      longtail_en: ["B40 scholarship malaysia", "financial aid B40 family", "low income scholarship malaysia 2026", "need-based scholarship malaysia"],
      longtail_bm: ["biasiswa keluarga B40 malaysia", "bantuan kewangan pelajar B40", "biasiswa pendapatan rendah 2026", "biasiswa berasas keperluan malaysia"]
    },
    meta: {
      title: "Scholarships for B40 Students Malaysia 2026 | MyScholar",
      title_bm: "Biasiswa Pelajar B40 Malaysia 2026 | MyScholar",
      description: "Scholarships and financial aid for B40 families in Malaysia. Need-based opportunities from government and private sponsors.",
      description_bm: "Biasiswa dan bantuan kewangan untuk keluarga B40 Malaysia. Peluang berasas keperluan dari kerajaan dan penaja swasta."
    },
    landing: {
      h1_en: "Scholarships for B40 Students 2026",
      h1_bm: "Biasiswa untuk Pelajar B40 2026",
      intro_en: "If your family falls in the B40 income bracket, there are scholarships specifically designed for you. We've gathered every need-based opportunity we could find.",
      intro_bm: "Jika keluarga anda dalam kategori pendapatan B40, ada biasiswa yang direka khas untuk anda. Kami kumpulkan setiap peluang berasas keperluan yang kami jumpa.",
      cta_en: "Find B40 Scholarships",
      cta_bm: "Cari Biasiswa B40"
    }
  },

  {
    slug: "biasiswa-bumiputera-2026",
    type: "scholarship",
    keywords: {
      primary: "bumiputera scholarship 2026",
      primary_bm: "biasiswa bumiputera 2026",
      longtail_en: ["scholarship for bumiputera students", "bumiputera only scholarship malaysia", "malay scholarship 2026", "bumiputera education fund"],
      longtail_bm: ["biasiswa khas bumiputera 2026", "biasiswa pelajar bumiputera malaysia", "biasiswa melayu 2026", "tabung pendidikan bumiputera"]
    },
    meta: {
      title: "Bumiputera Scholarships 2026 | MyScholar",
      title_bm: "Biasiswa Bumiputera 2026 | MyScholar",
      description: "Scholarships open to Bumiputera students in Malaysia 2026. MARA, state, and private foundation opportunities.",
      description_bm: "Biasiswa terbuka untuk pelajar Bumiputera Malaysia 2026. Peluang MARA, negeri, dan yayasan swasta."
    },
    landing: {
      h1_en: "Bumiputera Scholarships 2026",
      h1_bm: "Biasiswa Bumiputera 2026",
      intro_en: "Several scholarships in Malaysia are specifically open to Bumiputera students. We've filtered them out so you can see what's available at a glance.",
      intro_bm: "Beberapa biasiswa di Malaysia dibuka khas untuk pelajar Bumiputera. Kami tapis supaya anda boleh lihat apa yang tersedia dengan mudah.",
      cta_en: "Browse Bumiputera Scholarships",
      cta_bm: "Layari Biasiswa Bumiputera"
    }
  },

  {
    slug: "biasiswa-bukan-bumiputera-2026",
    type: "scholarship",
    keywords: {
      primary: "non-bumiputera scholarship malaysia 2026",
      primary_bm: "biasiswa bukan bumiputera 2026",
      longtail_en: ["scholarship for chinese students malaysia", "scholarship for indian students malaysia", "non-bumi scholarship 2026", "open scholarship all races malaysia"],
      longtail_bm: ["biasiswa pelajar cina malaysia 2026", "biasiswa pelajar india malaysia 2026", "biasiswa bukan bumi 2026", "biasiswa terbuka semua kaum malaysia"]
    },
    meta: {
      title: "Non-Bumiputera Scholarships Malaysia 2026 | MyScholar",
      title_bm: "Biasiswa Bukan Bumiputera Malaysia 2026 | MyScholar",
      description: "Scholarships open to all races in Malaysia, plus those specifically for non-Bumiputera students. Chinese, Indian, and open awards.",
      description_bm: "Biasiswa terbuka semua kaum di Malaysia, serta yang khusus untuk pelajar bukan Bumiputera. Biasiswa Cina, India, dan terbuka."
    },
    landing: {
      h1_en: "Scholarships for Non-Bumiputera Students 2026",
      h1_bm: "Biasiswa untuk Pelajar Bukan Bumiputera 2026",
      intro_en: "There are more options than you think. We list scholarships that are open to all races, plus those from community foundations, banks, and corporates that specifically support non-Bumiputera students.",
      intro_bm: "Ada lebih banyak pilihan daripada yang anda sangka. Kami senaraikan biasiswa terbuka semua kaum, serta dari yayasan komuniti, bank, dan korporat yang khusus menyokong pelajar bukan Bumiputera.",
      cta_en: "Search Open Scholarships",
      cta_bm: "Cari Biasiswa Terbuka"
    }
  },

  {
    slug: "biasiswa-sabah-sarawak-2026",
    type: "scholarship",
    keywords: {
      primary: "scholarship Sabah Sarawak 2026",
      primary_bm: "biasiswa Sabah Sarawak 2026",
      longtail_en: ["East Malaysia scholarship 2026", "Sarawak foundation scholarship", "Sabah foundation scholarship", "Yayasan Sarawak biasiswa"],
      longtail_bm: ["biasiswa Malaysia Timur 2026", "biasiswa Yayasan Sarawak", "biasiswa Yayasan Sabah", "biasiswa pelajar Sabah Sarawak"]
    },
    meta: {
      title: "Scholarships Sabah & Sarawak 2026 | MyScholar",
      title_bm: "Biasiswa Sabah & Sarawak 2026 | MyScholar",
      description: "Scholarships for students from Sabah and Sarawak. State foundations, federal, and private opportunities for East Malaysians.",
      description_bm: "Biasiswa untuk pelajar Sabah dan Sarawak. Yayasan negeri, persekutuan, dan peluang swasta untuk rakyat Malaysia Timur."
    },
    landing: {
      h1_en: "Scholarships for Sabah & Sarawak Students 2026",
      h1_bm: "Biasiswa untuk Pelajar Sabah & Sarawak 2026",
      intro_en: "Yayasan Sabah, Yayasan Sarawak, and several federal programs specifically support students from East Malaysia. We've brought them together in one list.",
      intro_bm: "Yayasan Sabah, Yayasan Sarawak, dan beberapa program persekutuan khusus menyokong pelajar dari Malaysia Timur. Kami kumpulkan dalam satu senarai.",
      cta_en: "View East Malaysia Scholarships",
      cta_bm: "Lihat Biasiswa Malaysia Timur"
    }
  },

  {
    slug: "biasiswa-oku-2026",
    type: "scholarship",
    keywords: {
      primary: "scholarship for disabled students malaysia 2026",
      primary_bm: "biasiswa OKU malaysia 2026",
      longtail_en: ["OKU scholarship malaysia", "disability scholarship malaysia 2026", "special needs scholarship", "financial aid disabled students malaysia"],
      longtail_bm: ["biasiswa pelajar OKU 2026", "biasiswa orang kurang upaya malaysia", "biasiswa keperluan khas 2026", "bantuan kewangan pelajar OKU"]
    },
    meta: {
      title: "Scholarships for OKU / Disabled Students 2026 | MyScholar",
      title_bm: "Biasiswa OKU / Pelajar Kurang Upaya 2026 | MyScholar",
      description: "Scholarships and financial aid for OKU (persons with disabilities) students in Malaysia 2026.",
      description_bm: "Biasiswa dan bantuan kewangan untuk pelajar OKU (orang kurang upaya) di Malaysia 2026."
    },
    landing: {
      h1_en: "Scholarships for OKU Students 2026",
      h1_bm: "Biasiswa untuk Pelajar OKU 2026",
      intro_en: "Students with disabilities deserve equal access to education funding. We track scholarships and aid programs that specifically support OKU students in Malaysia.",
      intro_bm: "Pelajar kurang upaya berhak mendapat akses sama rata kepada pembiayaan pendidikan. Kami jejaki biasiswa dan program bantuan yang khusus menyokong pelajar OKU di Malaysia.",
      cta_en: "Find OKU Scholarships",
      cta_bm: "Cari Biasiswa OKU"
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CATEGORY 5: BY FIELD OF STUDY
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "biasiswa-kejuruteraan-engineering-2026",
    type: "scholarship",
    keywords: {
      primary: "engineering scholarship malaysia 2026",
      primary_bm: "biasiswa kejuruteraan malaysia 2026",
      longtail_en: ["mechanical engineering scholarship malaysia", "electrical engineering scholarship 2026", "civil engineering scholarship malaysia", "engineering student financial aid"],
      longtail_bm: ["biasiswa kejuruteraan mekanikal malaysia", "biasiswa kejuruteraan elektrik 2026", "biasiswa kejuruteraan awam malaysia", "bantuan kewangan pelajar kejuruteraan"]
    },
    meta: {
      title: "Engineering Scholarships Malaysia 2026 | MyScholar",
      title_bm: "Biasiswa Kejuruteraan Malaysia 2026 | MyScholar",
      description: "Scholarships for engineering students in Malaysia. Petronas, TNB, Gamuda, and more. Find your field.",
      description_bm: "Biasiswa untuk pelajar kejuruteraan Malaysia. Petronas, TNB, Gamuda, dan lain-lain. Cari bidang anda."
    },
    landing: {
      h1_en: "Engineering Scholarships Malaysia 2026",
      h1_bm: "Biasiswa Kejuruteraan Malaysia 2026",
      intro_en: "Engineering students are among the most sponsored in Malaysia. Petronas, TNB, Gamuda, and others actively recruit through scholarships. See what's available for your specialisation.",
      intro_bm: "Pelajar kejuruteraan antara yang paling banyak ditaja di Malaysia. Petronas, TNB, Gamuda, dan lain-lain aktif merekrut melalui biasiswa. Lihat apa yang ada untuk pengkhususan anda.",
      cta_en: "Browse Engineering Scholarships",
      cta_bm: "Layari Biasiswa Kejuruteraan"
    }
  },

  {
    slug: "biasiswa-perubatan-medicine-2026",
    type: "scholarship",
    keywords: {
      primary: "medical scholarship malaysia 2026",
      primary_bm: "biasiswa perubatan malaysia 2026",
      longtail_en: ["medicine scholarship malaysia 2026", "scholarship for medical students", "doctor scholarship malaysia", "MBBS scholarship malaysia"],
      longtail_bm: ["biasiswa pelajar perubatan 2026", "biasiswa doktor malaysia", "biasiswa MBBS malaysia", "biasiswa pengajian perubatan"]
    },
    meta: {
      title: "Medical Scholarships Malaysia 2026 | MyScholar",
      title_bm: "Biasiswa Perubatan Malaysia 2026 | MyScholar",
      description: "Scholarships for medical students in Malaysia 2026. Government, GLC, and private funding for MBBS and beyond.",
      description_bm: "Biasiswa untuk pelajar perubatan Malaysia 2026. Pembiayaan kerajaan, GLC, dan swasta untuk MBBS dan seterusnya."
    },
    landing: {
      h1_en: "Medical Scholarships Malaysia 2026",
      h1_bm: "Biasiswa Perubatan Malaysia 2026",
      intro_en: "Medical degrees are expensive, but there's significant scholarship funding available. From JPA medical sponsorships to private hospital foundations -- find them here.",
      intro_bm: "Ijazah perubatan memang mahal, tapi ada banyak pembiayaan biasiswa yang tersedia. Dari tajaan perubatan JPA hingga yayasan hospital swasta -- cari di sini.",
      cta_en: "Find Medical Scholarships",
      cta_bm: "Cari Biasiswa Perubatan"
    }
  },

  {
    slug: "biasiswa-teknologi-maklumat-it-2026",
    type: "scholarship",
    keywords: {
      primary: "IT scholarship malaysia 2026",
      primary_bm: "biasiswa teknologi maklumat malaysia 2026",
      longtail_en: ["computer science scholarship malaysia", "tech scholarship 2026", "software engineering scholarship", "data science scholarship malaysia"],
      longtail_bm: ["biasiswa sains komputer malaysia", "biasiswa teknologi 2026", "biasiswa kejuruteraan perisian", "biasiswa sains data malaysia"]
    },
    meta: {
      title: "IT & Computer Science Scholarships Malaysia 2026 | MyScholar",
      title_bm: "Biasiswa IT & Sains Komputer Malaysia 2026 | MyScholar",
      description: "Tech scholarships in Malaysia for IT, computer science, and data science students. Corporate and government sponsors.",
      description_bm: "Biasiswa teknologi Malaysia untuk pelajar IT, sains komputer, dan sains data. Penaja korporat dan kerajaan."
    },
    landing: {
      h1_en: "IT & Tech Scholarships Malaysia 2026",
      h1_bm: "Biasiswa IT & Teknologi Malaysia 2026",
      intro_en: "Tech companies are hungry for talent and many offer scholarships to Malaysian students studying IT, computer science, and data science. We track them all.",
      intro_bm: "Syarikat teknologi memerlukan bakat dan ramai menawarkan biasiswa untuk pelajar Malaysia yang belajar IT, sains komputer, dan sains data. Kami jejaki semuanya.",
      cta_en: "Browse Tech Scholarships",
      cta_bm: "Layari Biasiswa Teknologi"
    }
  },

  {
    slug: "biasiswa-perakaunan-accounting-2026",
    type: "scholarship",
    keywords: {
      primary: "accounting scholarship malaysia 2026",
      primary_bm: "biasiswa perakaunan malaysia 2026",
      longtail_en: ["ACCA scholarship malaysia 2026", "accounting student scholarship", "Big 4 scholarship malaysia", "finance scholarship malaysia 2026"],
      longtail_bm: ["biasiswa ACCA malaysia 2026", "biasiswa pelajar perakaunan", "biasiswa Big 4 malaysia", "biasiswa kewangan malaysia 2026"]
    },
    meta: {
      title: "Accounting & Finance Scholarships Malaysia 2026 | MyScholar",
      title_bm: "Biasiswa Perakaunan & Kewangan Malaysia 2026 | MyScholar",
      description: "Scholarships for accounting and finance students. ACCA, Big 4 firms, banks, and professional body awards.",
      description_bm: "Biasiswa untuk pelajar perakaunan dan kewangan. ACCA, firma Big 4, bank, dan anugerah badan profesional."
    },
    landing: {
      h1_en: "Accounting & Finance Scholarships 2026",
      h1_bm: "Biasiswa Perakaunan & Kewangan 2026",
      intro_en: "Accounting firms, banks, and professional bodies like ACCA offer scholarships for Malaysian students. Whether you're pursuing ACCA, CPA, or a finance degree -- check what's available.",
      intro_bm: "Firma perakaunan, bank, dan badan profesional seperti ACCA menawarkan biasiswa untuk pelajar Malaysia. Sama ada anda mengejar ACCA, CPA, atau ijazah kewangan -- semak apa yang ada.",
      cta_en: "Find Accounting Scholarships",
      cta_bm: "Cari Biasiswa Perakaunan"
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CATEGORY 6: STUDY ABROAD / LUAR NEGARA
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "biasiswa-luar-negara-2026",
    type: "scholarship",
    keywords: {
      primary: "overseas scholarship malaysia 2026",
      primary_bm: "biasiswa luar negara 2026",
      longtail_en: ["study abroad scholarship malaysia", "scholarship to study overseas 2026", "UK scholarship for malaysians", "Australia scholarship malaysian students"],
      longtail_bm: ["biasiswa belajar luar negara 2026", "biasiswa ke UK untuk rakyat malaysia", "biasiswa ke Australia pelajar malaysia", "biasiswa pengajian luar negara"]
    },
    meta: {
      title: "Overseas Scholarships for Malaysians 2026 | MyScholar",
      title_bm: "Biasiswa Luar Negara untuk Rakyat Malaysia 2026 | MyScholar",
      description: "Study abroad scholarships for Malaysian students 2026. UK, Australia, US, Japan, and more. Government and private funding.",
      description_bm: "Biasiswa belajar luar negara untuk pelajar Malaysia 2026. UK, Australia, AS, Jepun, dan lain-lain. Pembiayaan kerajaan dan swasta."
    },
    landing: {
      h1_en: "Overseas Scholarships for Malaysians 2026",
      h1_bm: "Biasiswa Luar Negara untuk Rakyat Malaysia 2026",
      intro_en: "Dreaming of studying abroad? There are scholarships from Malaysian sponsors and foreign governments that can get you there. UK, Australia, Japan, Korea -- we've listed them all.",
      intro_bm: "Impikan belajar di luar negara? Ada biasiswa dari penaja Malaysia dan kerajaan asing yang boleh bantu anda ke sana. UK, Australia, Jepun, Korea -- kami senaraikan semuanya.",
      cta_en: "Explore Overseas Scholarships",
      cta_bm: "Terokai Biasiswa Luar Negara"
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CATEGORY 7: INTERNSHIPS
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "internship-malaysia-2026",
    type: "internship",
    keywords: {
      primary: "internship malaysia 2026",
      primary_bm: "latihan industri malaysia 2026",
      longtail_en: ["internship for students malaysia", "paid internship malaysia 2026", "internship openings malaysia", "industrial training malaysia"],
      longtail_bm: ["latihan industri pelajar malaysia", "internship bergaji malaysia 2026", "kekosongan latihan industri", "latihan praktikal malaysia 2026"]
    },
    meta: {
      title: "Internships Malaysia 2026 -- Find Opportunities | MyScholar",
      title_bm: "Latihan Industri Malaysia 2026 -- Cari Peluang | MyScholar",
      description: "Find internships across Malaysia for 2026. Engineering, IT, business, and more. Updated regularly.",
      description_bm: "Cari latihan industri seluruh Malaysia 2026. Kejuruteraan, IT, perniagaan, dan lain-lain. Dikemas kini secara berkala."
    },
    landing: {
      h1_en: "Internships Malaysia 2026",
      h1_bm: "Latihan Industri Malaysia 2026",
      intro_en: "Looking for your internship placement? We track opportunities across industries -- engineering, tech, finance, and more. No signup needed, just search and apply.",
      intro_bm: "Mencari penempatan latihan industri? Kami jejaki peluang merentasi industri -- kejuruteraan, teknologi, kewangan, dan lain-lain. Tiada pendaftaran diperlukan, cari dan mohon terus.",
      cta_en: "Search Internships",
      cta_bm: "Cari Latihan Industri"
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CATEGORY 8: ACTION / HOW-TO INTENT
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "cara-mohon-biasiswa-2026",
    type: "scholarship",
    keywords: {
      primary: "how to apply scholarship malaysia 2026",
      primary_bm: "cara mohon biasiswa malaysia 2026",
      longtail_en: ["scholarship application tips malaysia", "step by step scholarship application", "scholarship interview tips malaysia", "how to write scholarship essay"],
      longtail_bm: ["tips permohonan biasiswa malaysia", "langkah demi langkah mohon biasiswa", "tips temuduga biasiswa", "cara tulis esei biasiswa"]
    },
    meta: {
      title: "How to Apply for Scholarships Malaysia 2026 | MyScholar",
      title_bm: "Cara Mohon Biasiswa Malaysia 2026 | MyScholar",
      description: "Step-by-step guide on applying for scholarships in Malaysia. Tips for applications, essays, and interviews.",
      description_bm: "Panduan langkah demi langkah mohon biasiswa Malaysia. Tips permohonan, esei, dan temuduga."
    },
    landing: {
      h1_en: "How to Apply for Scholarships in Malaysia",
      h1_bm: "Cara Mohon Biasiswa di Malaysia",
      intro_en: "Not sure where to start? We break down the scholarship application process -- from finding the right fit to nailing the interview. No jargon, just practical steps.",
      intro_bm: "Tak pasti nak mula dari mana? Kami pecahkan proses permohonan biasiswa -- dari cari yang sesuai hingga berjaya dalam temuduga. Tiada jargon, hanya langkah praktikal.",
      cta_en: "Start Your Search",
      cta_bm: "Mula Cari Biasiswa"
    }
  },

  {
    slug: "senarai-biasiswa-terkini-2026",
    type: "scholarship",
    keywords: {
      primary: "latest scholarships malaysia 2026",
      primary_bm: "senarai biasiswa terkini malaysia 2026",
      longtail_en: ["new scholarships malaysia april 2026", "scholarships closing soon malaysia", "recently opened scholarships", "scholarship deadline this month"],
      longtail_bm: ["biasiswa baru malaysia april 2026", "biasiswa tarikh tutup terdekat", "biasiswa baru dibuka 2026", "tarikh tutup biasiswa bulan ini"]
    },
    meta: {
      title: "Latest Scholarships Malaysia 2026 -- Updated Weekly | MyScholar",
      title_bm: "Biasiswa Terkini Malaysia 2026 -- Kemas Kini Mingguan | MyScholar",
      description: "Don't miss out. See the latest scholarships in Malaysia, updated every week. Deadlines, new openings, and closing soon alerts.",
      description_bm: "Jangan terlepas. Lihat biasiswa terkini Malaysia, dikemas kini setiap minggu. Tarikh tutup, pembukaan baru, dan amaran hampir tutup."
    },
    landing: {
      h1_en: "Latest Scholarships Malaysia 2026",
      h1_bm: "Biasiswa Terkini Malaysia 2026",
      intro_en: "Scholarship deadlines don't wait. We update this list weekly so you always know what just opened and what's closing soon. Bookmark this page.",
      intro_bm: "Tarikh tutup biasiswa tak tunggu sesiapa. Kami kemas kini senarai ini setiap minggu supaya anda sentiasa tahu apa yang baru dibuka dan hampir tutup. Bookmark halaman ini.",
      cta_en: "See What's New",
      cta_bm: "Lihat Apa Yang Baru"
    }
  },

  {
    slug: "biasiswa-tanpa-ikatan-2026",
    type: "scholarship",
    keywords: {
      primary: "scholarship without bond malaysia 2026",
      primary_bm: "biasiswa tanpa ikatan malaysia 2026",
      longtail_en: ["no bond scholarship malaysia", "scholarship no service agreement", "unbonded scholarship 2026", "free scholarship no strings malaysia"],
      longtail_bm: ["biasiswa tiada ikatan perkhidmatan 2026", "biasiswa percuma tanpa bon", "biasiswa tanpa kontrak malaysia", "biasiswa tanpa perjanjian perkhidmatan"]
    },
    meta: {
      title: "Scholarships Without Bond Malaysia 2026 | MyScholar",
      title_bm: "Biasiswa Tanpa Ikatan Malaysia 2026 | MyScholar",
      description: "Looking for scholarships with no service bond? We list unbonded awards from foundations, community bodies, and more.",
      description_bm: "Cari biasiswa tanpa ikatan perkhidmatan? Kami senaraikan anugerah tanpa bon dari yayasan, badan komuniti, dan lain-lain."
    },
    landing: {
      h1_en: "Scholarships Without Bond 2026",
      h1_bm: "Biasiswa Tanpa Ikatan 2026",
      intro_en: "Not every scholarship comes with a service bond. Some foundations and community bodies fund your education with no strings attached. Here's what we've found.",
      intro_bm: "Bukan semua biasiswa datang dengan ikatan perkhidmatan. Sesetengah yayasan dan badan komuniti membiayai pendidikan anda tanpa syarat. Ini apa yang kami jumpa.",
      cta_en: "Browse Unbonded Scholarships",
      cta_bm: "Layari Biasiswa Tanpa Ikatan"
    }
  },

  {
    slug: "biasiswa-swasta-korporat-2026",
    type: "scholarship",
    keywords: {
      primary: "private corporate scholarship malaysia 2026",
      primary_bm: "biasiswa swasta korporat malaysia 2026",
      longtail_en: ["corporate scholarship malaysia 2026", "private foundation scholarship", "GLC scholarship malaysia", "company sponsored scholarship"],
      longtail_bm: ["biasiswa korporat malaysia 2026", "biasiswa yayasan swasta", "biasiswa GLC malaysia", "biasiswa tajaan syarikat"]
    },
    meta: {
      title: "Private & Corporate Scholarships Malaysia 2026 | MyScholar",
      title_bm: "Biasiswa Swasta & Korporat Malaysia 2026 | MyScholar",
      description: "Corporate and private scholarships in Malaysia 2026. GLCs, banks, foundations -- all listed free on MyScholar.",
      description_bm: "Biasiswa korporat dan swasta Malaysia 2026. GLC, bank, yayasan -- semua disenaraikan percuma di MyScholar."
    },
    landing: {
      h1_en: "Private & Corporate Scholarships 2026",
      h1_bm: "Biasiswa Swasta & Korporat 2026",
      intro_en: "Beyond government scholarships, Malaysia's corporate sector -- GLCs, banks, tech companies -- offers hundreds of awards. We list them all in one place.",
      intro_bm: "Selain biasiswa kerajaan, sektor korporat Malaysia -- GLC, bank, syarikat teknologi -- menawarkan ratusan anugerah. Kami senaraikan semuanya di satu tempat.",
      cta_en: "View Corporate Scholarships",
      cta_bm: "Lihat Biasiswa Korporat"
    }
  },

  {
    slug: "biasiswa-negeri-2026",
    type: "scholarship",
    keywords: {
      primary: "state scholarship malaysia 2026",
      primary_bm: "biasiswa negeri malaysia 2026",
      longtail_en: ["Selangor scholarship 2026", "Johor scholarship 2026", "Penang scholarship 2026", "state government scholarship malaysia"],
      longtail_bm: ["biasiswa Selangor 2026", "biasiswa Johor 2026", "biasiswa Pulau Pinang 2026", "biasiswa kerajaan negeri malaysia"]
    },
    meta: {
      title: "State Scholarships Malaysia 2026 | MyScholar",
      title_bm: "Biasiswa Negeri Malaysia 2026 | MyScholar",
      description: "Scholarships from all 13 Malaysian states and 3 federal territories. Check your home state's offerings.",
      description_bm: "Biasiswa dari semua 13 negeri Malaysia dan 3 wilayah persekutuan. Semak tawaran negeri asal anda."
    },
    landing: {
      h1_en: "State Scholarships Malaysia 2026",
      h1_bm: "Biasiswa Negeri Malaysia 2026",
      intro_en: "Many states offer their own scholarships -- Selangor, Johor, Penang, Sarawak, and more. Your home state might have funding you haven't heard about.",
      intro_bm: "Banyak negeri menawarkan biasiswa sendiri -- Selangor, Johor, Pulau Pinang, Sarawak, dan lain-lain. Negeri asal anda mungkin ada pembiayaan yang anda belum tahu.",
      cta_en: "Check State Scholarships",
      cta_bm: "Semak Biasiswa Negeri"
    }
  }
];

// ── MERGE WAVE 2 ─────────────────────────────────────────────────
try {
  const wave2 = require('./wave2.js');
  KEYWORDS.push(...wave2);
  console.log('  [+] Wave 2 loaded: ' + wave2.length + ' additional keywords');
} catch(e) {
  console.log('  [i] No wave2.js found, running Wave 1 only');
}

// ── HTML BUILDER ─────────────────────────────────────────────────
function buildHTML(entry) {
  const isInternship = entry.type === 'internship';
  const mainColor = isInternship ? '#ffb347' : '#e8551e';
  const canonicalUrl = 'https://myscholar.my/' + entry.slug;
  const kw = entry.keywords;
  const m = entry.meta;
  const l = entry.landing;

  return '<!DOCTYPE html>\n<html lang="en">\n<head>\n' +
    '<meta charset="UTF-8">\n' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
    '<title>' + m.title + '</title>\n' +
    '<meta name="description" content="' + m.description + '">\n' +
    '<meta name="keywords" content="' + [kw.primary, kw.primary_bm, ...kw.longtail_en, ...kw.longtail_bm].join(', ') + '">\n' +
    '<link rel="canonical" href="' + canonicalUrl + '">\n' +
    '<meta property="og:title" content="' + m.title + '">\n' +
    '<meta property="og:description" content="' + m.description + '">\n' +
    '<meta property="og:url" content="' + canonicalUrl + '">\n' +
    '<meta property="og:type" content="website">\n' +
    '<meta property="og:site_name" content="MyScholar Malaysia">\n' +
    '<meta property="og:image" content="https://myscholar.my/myscholar-og.jpg">\n' +
    '<meta property="og:locale" content="en_MY">\n' +
    '<meta property="og:locale:alternate" content="ms_MY">\n' +
    '<meta name="twitter:card" content="summary_large_image">\n' +
    '<meta name="twitter:title" content="' + m.title + '">\n' +
    '<meta name="twitter:description" content="' + m.description + '">\n' +
    '<meta name="twitter:image" content="https://myscholar.my/myscholar-og.jpg">\n' +
    '<meta name="title:bm" content="' + m.title_bm + '">\n' +
    '<meta name="description:bm" content="' + m.description_bm + '">\n' +
    '<script type="application/ld+json">\n' +
    JSON.stringify({
      "@context":"https://schema.org","@type":"WebPage",
      "name":m.title,"description":m.description,"url":canonicalUrl,
      "inLanguage":["en-MY","ms-MY"],
      "isPartOf":{"@type":"WebSite","name":"MyScholar Malaysia","url":"https://myscholar.my","description":"Malaysia\'s free scholarship and internship directory"},
      "breadcrumb":{"@type":"BreadcrumbList","itemListElement":[
        {"@type":"ListItem","position":1,"name":"Home","item":"https://myscholar.my"},
        {"@type":"ListItem","position":2,"name":m.title.replace(' | MyScholar',''),"item":canonicalUrl}
      ]}
    }, null, 2) + '\n</script>\n' +
    '<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZETBRDDMTV"></script>\n' +
    '<script>\n' +
    'window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","G-ZETBRDDMTV");' +
    'gtag("event","landing_page_view",{page_keyword:"' + kw.primary + '",page_slug:"' + entry.slug + '",page_type:"' + entry.type + '"});\n' +
    '</script>\n' +
    '<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">\n' +
    '<style>\n' +
    ':root{--midnight:#0f1f3d;--coral:' + mainColor + ';--ice:#f0f4ff;--white:#ffffff;--serif:"Playfair Display",Georgia,serif;--sans:"DM Sans",system-ui,sans-serif}\n' +
    '*{box-sizing:border-box;margin:0;padding:0}\n' +
    'body{font-family:var(--sans);background:var(--midnight);color:#fff;min-height:100vh}\n' +
    'nav{position:sticky;top:0;z-index:99;background:var(--midnight);padding:0 20px;display:flex;align-items:center;justify-content:space-between;height:52px;border-bottom:2px solid var(--coral)}\n' +
    '.nav-logo{font-family:var(--serif);color:#fff;font-size:20px;text-decoration:none}.nav-logo span{color:var(--coral)}\n' +
    '.hero{padding:80px 24px 60px;text-align:center;max-width:680px;margin:0 auto}\n' +
    '.eyebrow{font-size:11px;letter-spacing:.18em;color:var(--coral);text-transform:uppercase;font-weight:600;margin-bottom:14px}\n' +
    'h1{font-family:var(--serif);font-size:clamp(32px,5vw,56px);line-height:1.1;margin-bottom:20px}\n' +
    '.intro{font-size:16px;color:rgba(255,255,255,.75);line-height:1.7;margin-bottom:32px}\n' +
    '.cta-btn{display:inline-block;background:var(--coral);color:#fff;font-weight:600;padding:14px 32px;border-radius:6px;text-decoration:none;font-size:15px;transition:opacity .2s}\n' +
    '.cta-btn:hover{opacity:.85}\n' +
    '.lang-toggle{display:flex;gap:8px;justify-content:center;margin-bottom:24px}\n' +
    '.lt-btn{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);color:rgba(255,255,255,.6);padding:4px 14px;border-radius:20px;font-size:12px;cursor:pointer;transition:all .2s}\n' +
    '.lt-btn.active{background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)}\n' +
    '.back{display:block;text-align:center;margin-top:40px;font-size:13px;color:rgba(255,255,255,.4);text-decoration:none}\n' +
    '.back:hover{color:rgba(255,255,255,.7)}\n' +
    '.kw-section{max-width:680px;margin:0 auto;padding:0 24px 60px;text-align:center}\n' +
    '.kw-section h2{font-family:var(--serif);font-size:20px;margin-bottom:16px;color:rgba(255,255,255,.6)}\n' +
    '.kw-pills{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}\n' +
    '.kw-pill{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.5);padding:6px 14px;border-radius:20px;font-size:12px;text-decoration:none;transition:all .2s}\n' +
    '.kw-pill:hover{border-color:var(--coral);color:var(--coral)}\n' +
    '.kw-pill.bm{border-color:rgba(255,179,71,.25);color:rgba(255,179,71,.7)}\n' +
    'footer{text-align:center;padding:32px 24px;font-size:12px;color:rgba(255,255,255,.3);border-top:1px solid rgba(255,255,255,.08)}\n' +
    'footer a{color:rgba(255,255,255,.5);text-decoration:none}\n' +
    '</style>\n</head>\n<body>\n' +
    '<nav>\n  <a href="/" class="nav-logo">My<span>Scholar</span></a>\n' +
    '  <a href="/" style="font-size:12px;color:rgba(255,255,255,.5);text-decoration:none">&larr; All ' + (isInternship ? 'Internships' : 'Scholarships') + '</a>\n</nav>\n' +
    '<div class="hero">\n' +
    '  <div class="eyebrow">' + (isInternship ? 'Internships Malaysia' : 'Biasiswa Malaysia') + ' &middot; myscholar.my</div>\n' +
    '  <div class="lang-toggle">\n    <button class="lt-btn active" onclick="setLang(\'en\',this)">EN</button>\n    <button class="lt-btn" onclick="setLang(\'bm\',this)">BM</button>\n  </div>\n' +
    '  <h1 id="h1-en">' + l.h1_en + '</h1>\n' +
    '  <h1 id="h1-bm" style="display:none">' + l.h1_bm + '</h1>\n' +
    '  <p class="intro" id="intro-en">' + l.intro_en + '</p>\n' +
    '  <p class="intro" id="intro-bm" style="display:none">' + l.intro_bm + '</p>\n' +
    '  <a href="/?q=' + encodeURIComponent(kw.primary) + '" class="cta-btn" id="cta-en">' + l.cta_en + '</a>\n' +
    '  <a href="/?q=' + encodeURIComponent(kw.primary_bm) + '" class="cta-btn" id="cta-bm" style="display:none">' + l.cta_bm + '</a>\n' +
    '  <a href="/" class="back">&larr; Back to full directory</a>\n' +
    '</div>\n' +
    '<div class="kw-section">\n  <h2>Related Searches</h2>\n  <div class="kw-pills">\n' +
    kw.longtail_en.map(function(k){ return '    <a href="/?q=' + encodeURIComponent(k) + '" class="kw-pill">' + k + '</a>'; }).join('\n') + '\n' +
    kw.longtail_bm.map(function(k){ return '    <a href="/?q=' + encodeURIComponent(k) + '" class="kw-pill bm">' + k + '</a>'; }).join('\n') + '\n' +
    '  </div>\n</div>\n' +
    '<footer>\n  <p>&copy; 2026 <a href="https://myscholar.my">MyScholar.my</a> &mdash; Malaysia\'s free scholarship directory. No login. No paywall. Just scholarships.</p>\n</footer>\n' +
    '<script>\nfunction setLang(l,btn){\n' +
    '  document.querySelectorAll(".lt-btn").forEach(function(b){b.classList.remove("active")});\n' +
    '  btn.classList.add("active");\n' +
    '  ["h1","intro","cta"].forEach(function(id){\n' +
    '    document.getElementById(id+"-en").style.display=l==="en"?"":"none";\n' +
    '    document.getElementById(id+"-bm").style.display=l==="bm"?"":"none";\n' +
    '  });\n' +
    '  gtag("event","language_toggle",{language:l,page:"' + entry.slug + '"});\n' +
    '}\n</script>\n</body>\n</html>';
}

// ── GENERATE ALL ─────────────────────────────────────────────────
console.log('');
console.log('======================================================');
console.log('  JACK SEO Generator -- MyScholar.my');
console.log('======================================================');
console.log('');

let count = 0;
const manifest = [];

KEYWORDS.forEach(function(entry) {
  const filename = entry.slug + '.html';
  const filepath = path.join(OUT, filename);
  const html = buildHTML(entry);
  fs.writeFileSync(filepath, html, 'utf8');
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

// ── SITEMAP ──────────────────────────────────────────────────────
let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
sitemap += '  <url><loc>https://myscholar.my</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>\n';
manifest.forEach(function(m) {
  sitemap += '  <url><loc>' + m.canonical + '</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>\n';
});
sitemap += '</urlset>';

fs.writeFileSync(path.join(OUT, 'sitemap-seo.xml'), sitemap, 'utf8');
console.log('  + sitemap-seo.xml');

// ── MANIFEST JSON ────────────────────────────────────────────────
fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');
console.log('  + manifest.json');

// ── KEYWORD REPORT ───────────────────────────────────────────────
let report = '# JACK SEO Keyword Report -- MyScholar.my\n';
report += 'Generated: ' + new Date().toISOString() + '\n';
report += 'Total landing pages: ' + count + '\n\n';

KEYWORDS.forEach(function(entry) {
  report += '## ' + entry.slug + '\n';
  report += 'Type: ' + entry.type + '\n';
  report += 'Primary EN: ' + entry.keywords.primary + '\n';
  report += 'Primary BM: ' + entry.keywords.primary_bm + '\n';
  report += 'Long-tail EN: ' + entry.keywords.longtail_en.join(' | ') + '\n';
  report += 'Long-tail BM: ' + entry.keywords.longtail_bm.join(' | ') + '\n';
  report += 'Title: ' + entry.meta.title + '\n';
  report += 'Description: ' + entry.meta.description + '\n\n';
});

fs.writeFileSync(path.join(OUT, 'keyword-report.md'), report, 'utf8');
console.log('  + keyword-report.md');

console.log('');
console.log('======================================================');
console.log('  DONE -- ' + count + ' pages + sitemap + manifest + report');
console.log('  Output folder: ./seo/');
console.log('======================================================');
console.log('');
console.log('  Next steps:');
console.log('  1. Copy the /seo/ folder contents to your repo root');
console.log('  2. git add . && git commit -m "JACK: SEO landing pages" && git push');
console.log('  3. Pages go live on GitHub Pages automatically');
console.log('');
