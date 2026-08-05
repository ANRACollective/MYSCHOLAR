/**
 * JACK Wave 20 - 2026-08-05
 * 14 scholarship pages, all evidence-backed:
 * A. High-search terms from search_logs 90-day data (5): TESP TNB (94 searches), pilot/cadet (40), BNM Kijang, ACCA, MSU (8 zero-results)
 * B. DB provider gaps (5): Shell, Fulbright/MACEE, Yayasan Peneraju, Sunway/Jeffrey Cheah, Taylors
 * C. DB provider gaps (4): Sarawak Energy (18 searches), Great Eastern, IMU, Huawei/Google tech programmes
 *
 * Slug collision check: all 14 clean vs manifest (562 entries as of 2026-08-05).
 * Data note: MSU is searched 18x/90d with 8 zero-results but has NO records in the
 * scholarships table - flagged for DIANA to research and add.
 */

module.exports = [
// ============================================================
// === WAVE 20 A: HIGH-SEARCH TERM PAGES (1-5) ================
// ============================================================

{
  slug: "biasiswa-tesp-tnb-2026",
  type: "scholarship",
  keywords: {
    primary: "TESP TNB scholarship 2026",
    primary_bm: "biasiswa TESP TNB 2026",
    longtail_en: ["TNB Education Sponsorship Programme", "TESP scholarship application 2026", "Tenaga Nasional scholarship SPM", "TESP engineering sponsorship", "Yayasan Tenaga Nasional scholarship"],
    longtail_bm: ["program tajaan pendidikan TNB", "cara mohon TESP 2026", "biasiswa tenaga nasional lepasan SPM", "tajaan kejuruteraan TESP", "biasiswa yayasan tenaga nasional"]
  },
  meta: {
    title: "Biasiswa TESP TNB 2026 - Syarat, Bidang & Cara Mohon | MyScholar",
    title_bm: "TESP TNB Scholarship 2026 - Requirements, Fields & How to Apply | MyScholar",
    description: "TESP is TNB's education sponsorship, one of the most searched scholarships on MyScholar. What it covers, which fields qualify, the bond terms, and when applications open.",
    description_bm: "TESP ialah tajaan pendidikan TNB, antara biasiswa paling banyak dicari di MyScholar. Apa yang ditanggung, bidang yang layak, syarat ikatan, dan bila permohonan dibuka."
  },
  landing: {
    h1_en: "TESP - The TNB Education Sponsorship Programme, Explained",
    h1_bm: "Biasiswa TESP TNB - Panduan Penuh",
    intro_en: "TESP has quietly become one of the most typed-in searches on MyScholar, and for good reason: Tenaga Nasional's education sponsorship is among the most complete packages a Malaysian student can get. The programme, run through TNB and Yayasan Tenaga Nasional, sponsors high-performing students through preparatory studies and degrees in fields the utility actually needs, with electrical and power engineering at the core, alongside mechanical, civil and increasingly digital and data fields as the grid modernises. Sponsorship typically covers full tuition, living allowances and related costs, and comes with the trade every student should weigh deliberately: a service bond with TNB after graduation. For many scholars that bond is the best part, a guaranteed engineering job at one of Malaysia's largest companies in an era when the energy transition, grid upgrades and data centre demand are pouring work into the power sector. Selection is built on SPM results (with strong mathematics and science expected), followed by assessments and interviews, and application windows typically open after SPM results season, announced through TNB's official channels. If you are aiming for TESP, the practical preparation is straightforward: protect your SPM maths and physics grades, be ready to explain a genuine interest in the energy sector, and apply the moment the window opens rather than the week it closes. Check the listing below for the current cycle status and the official application link.",
    intro_bm: "TESP diam-diam menjadi antara carian paling banyak ditaip di MyScholar, dan memang ada sebabnya: tajaan pendidikan Tenaga Nasional antara pakej paling lengkap yang boleh didapati pelajar Malaysia. Program ini, dikendalikan melalui TNB dan Yayasan Tenaga Nasional, menaja pelajar cemerlang melalui pengajian persediaan dan ijazah dalam bidang yang syarikat utiliti itu betul-betul perlukan, dengan kejuruteraan elektrik dan kuasa sebagai teras, di samping mekanikal, awam dan semakin banyak bidang digital dan data seiring pemodenan grid. Tajaan biasanya menanggung yuran penuh, elaun sara hidup dan kos berkaitan, dan datang dengan tukaran yang setiap pelajar patut timbang dengan teliti: ikatan perkhidmatan dengan TNB selepas tamat. Bagi ramai penerima, ikatan itu bahagian terbaik, kerja kejuruteraan terjamin di salah satu syarikat terbesar Malaysia ketika peralihan tenaga, naik taraf grid dan permintaan pusat data mencurahkan kerja ke sektor kuasa. Pemilihan berasaskan keputusan SPM (matematik dan sains yang kukuh dijangka), diikuti penilaian dan temuduga, dan tempoh permohonan biasanya dibuka selepas musim keputusan SPM, diumumkan melalui saluran rasmi TNB. Kalau anda sasarkan TESP, persediaan praktikalnya jelas: jaga gred matematik dan fizik SPM, bersedia menerangkan minat sebenar terhadap sektor tenaga, dan mohon sebaik sahaja tetingkap dibuka, bukan minggu ia tutup. Semak senarai di bawah untuk status kitaran semasa dan pautan permohonan rasmi.",
    cta_en: "Check the TESP listing on MyScholar",
    cta_bm: "Semak senarai TESP di MyScholar"
  }
},

{
  slug: "biasiswa-pilot-cadet-2026",
  type: "scholarship",
  keywords: {
    primary: "pilot scholarship Malaysia 2026",
    primary_bm: "biasiswa pilot 2026",
    longtail_en: ["cadet pilot programme Malaysia", "sponsored pilot training Malaysia", "how much pilot course Malaysia", "airline cadet sponsorship 2026", "pilot scholarship SPM requirements"],
    longtail_bm: ["program juruterbang pelatih malaysia", "tajaan latihan pilot", "kos kursus pilot malaysia", "kadet pilot syarikat penerbangan 2026", "syarat biasiswa juruterbang SPM"]
  },
  meta: {
    title: "Biasiswa Pilot & Kadet Juruterbang 2026 - Tajaan Sebenar & Kos | MyScholar",
    title_bm: "Pilot & Cadet Scholarships Malaysia 2026 - Real Sponsorships & Costs | MyScholar",
    description: "Pilot training costs more than RM250,000 and real sponsorships are rare. The cadet programmes and scholarships that actually exist in Malaysia, and the honest maths before you commit.",
    description_bm: "Latihan juruterbang melebihi RM250,000 dan tajaan sebenar jarang. Program kadet dan biasiswa yang betul-betul wujud di Malaysia, dan kiraan jujur sebelum anda komited."
  },
  landing: {
    h1_en: "Pilot and Cadet Scholarships in Malaysia - What Actually Exists",
    h1_bm: "Biasiswa Pilot dan Kadet Juruterbang di Malaysia",
    intro_en: "Pilot is one of the most searched words on MyScholar, so this page gives you the version flying schools rarely lead with. Commercial pilot training in Malaysia costs roughly RM250,000 to RM350,000 at private academies, and fully sponsored routes are scarce and fiercely contested. They do exist: airlines periodically run cadet pilot programmes where the carrier sponsors or co-funds training in exchange for a service bond, Malaysia Airlines has historically trained cadets through its own academy pipeline, AirAsia has run cadet intakes in growth years, and MyScholar's database tracks the pilot sponsorships currently listed with their status. Beyond airline cadetships, some students fund training through PTPTN-adjacent study loans at approved academies, family financing, or the military route, where RMAF pilot training is fully paid and comes with a long service commitment that is a career in itself. The honest checklist before chasing this dream: airline cadet intakes open and close with the aviation cycle, so a year with no intake is normal; medical certification (Class 1) should be tested early because it can end the plan regardless of grades; and self-funding without a job guarantee carries real risk, since a licence alone does not guarantee an airline seat. Strong SPM credits, especially in maths, physics and English, plus genuine flying exposure through flight simulator communities or aviation clubs, all strengthen a cadet application when windows open.",
    intro_bm: "Pilot antara perkataan paling banyak dicari di MyScholar, jadi halaman ini beri versi yang jarang diketengahkan sekolah penerbangan. Latihan juruterbang komersial di Malaysia menelan kira-kira RM250,000 hingga RM350,000 di akademi swasta, dan laluan tajaan penuh jarang serta sangat sengit dipertandingkan. Ia memang wujud: syarikat penerbangan sekali-sekala buka program kadet juruterbang di mana syarikat menaja atau membiayai bersama latihan sebagai tukaran ikatan perkhidmatan, Malaysia Airlines pernah melatih kadet melalui saluran akademinya sendiri, AirAsia pernah buka pengambilan kadet pada tahun pertumbuhan, dan pangkalan data MyScholar menjejak tajaan pilot yang tersenarai dengan statusnya. Selain kadet syarikat penerbangan, sesetengah pelajar biayai latihan melalui pinjaman pengajian di akademi yang diluluskan, pembiayaan keluarga, atau laluan tentera, di mana latihan juruterbang TUDM dibayar penuh dan datang dengan komitmen perkhidmatan panjang yang merupakan kerjaya tersendiri. Senarai semak jujur sebelum mengejar impian ini: pengambilan kadet buka dan tutup ikut kitaran penerbangan, jadi tahun tanpa pengambilan itu normal; pemeriksaan perubatan (Kelas 1) patut diuji awal kerana ia boleh menamatkan rancangan tanpa mengira gred; dan biaya sendiri tanpa jaminan kerja bawa risiko sebenar, kerana lesen sahaja tidak menjamin tempat di syarikat penerbangan. Kredit SPM kukuh, terutama matematik, fizik dan Bahasa Inggeris, serta pendedahan penerbangan tulen melalui komuniti simulator atau kelab penerbangan, semuanya menguatkan permohonan kadet bila tetingkap dibuka.",
    cta_en: "See pilot scholarships in the database",
    cta_bm: "Lihat biasiswa pilot dalam pangkalan data"
  }
},

{
  slug: "biasiswa-kijang-bnm-2026",
  type: "scholarship",
  keywords: {
    primary: "Kijang scholarship BNM 2026",
    primary_bm: "biasiswa kijang BNM 2026",
    longtail_en: ["Bank Negara Kijang scholarship requirements", "Kijang Emas scholarship SPM", "BNM scholarship bond", "Kijang scholarship overseas study", "Bank Negara scholarship application 2026"],
    longtail_bm: ["syarat biasiswa kijang bank negara", "biasiswa kijang emas SPM", "ikatan biasiswa BNM", "biasiswa kijang belajar luar negara", "cara mohon biasiswa bank negara 2026"]
  },
  meta: {
    title: "Biasiswa Kijang & Kijang Emas BNM 2026 - Syarat & Ikatan | MyScholar",
    title_bm: "BNM Kijang & Kijang Emas Scholarship 2026 - Requirements & Bond | MyScholar",
    description: "Bank Negara's Kijang scholarships fund top SPM scorers through pre-university and degrees, including overseas. Kijang vs Kijang Emas, the bond terms, and how selection works.",
    description_bm: "Biasiswa Kijang Bank Negara membiayai pelajar SPM terbaik melalui pra-universiti dan ijazah, termasuk luar negara. Beza Kijang dan Kijang Emas, syarat ikatan, dan cara pemilihan."
  },
  landing: {
    h1_en: "The BNM Kijang Scholarship - Bank Negara's Flagship Award",
    h1_bm: "Biasiswa Kijang BNM - Anugerah Utama Bank Negara",
    intro_en: "Students search MyScholar for kijang by name, which tells you how strong this brand is among top scorers: the Kijang scholarships are Bank Negara Malaysia's flagship awards, and they compete directly with JPA and Yayasan Khazanah for the country's best SPM results. The structure has two tiers. The Kijang Scholarship funds outstanding SPM leavers through pre-university and on to degrees at leading universities in Malaysia or overseas in fields relevant to the central bank's work: economics, finance, accounting, actuarial science, law, mathematics, data science and related disciplines. Kijang Emas sits above it, reserved for the very top band of SPM performers nationally, with broader freedom in course and destination. Both cover the full package (tuition, allowances, and overseas costs where applicable) and both carry a service bond with Bank Negara, which in practice means starting your career at the central bank, an institution whose alumni move into the most senior roles across Malaysian finance. Selection weighs near-perfect SPM results as the entry filter, then assessments and panel interviews that look for analytical thinking and genuine interest in economics and public policy, not just grades. Applications typically open around SPM results season through BNM's official scholarship portal. If your results put you in the running, apply to Kijang, JPA and Khazanah in the same season; the interviews sharpen each other and the offers give you a real choice.",
    intro_bm: "Pelajar mencari kijang di MyScholar dengan namanya sendiri, itu menunjukkan betapa kuatnya jenama ini dalam kalangan pelajar cemerlang: biasiswa Kijang ialah anugerah utama Bank Negara Malaysia, dan ia bersaing terus dengan JPA dan Yayasan Khazanah untuk keputusan SPM terbaik negara. Strukturnya ada dua peringkat. Biasiswa Kijang membiayai lepasan SPM cemerlang melalui pra-universiti dan seterusnya ijazah di universiti terkemuka di Malaysia atau luar negara dalam bidang berkaitan kerja bank pusat: ekonomi, kewangan, perakaunan, sains aktuari, undang-undang, matematik, sains data dan disiplin berkaitan. Kijang Emas di atasnya, dikhaskan untuk kelompok paling atas pencapai SPM seluruh negara, dengan kebebasan lebih luas dalam kursus dan destinasi. Kedua-duanya menanggung pakej penuh (yuran, elaun, dan kos luar negara jika berkenaan) dan kedua-duanya membawa ikatan perkhidmatan dengan Bank Negara, yang secara praktiknya bermakna memulakan kerjaya di bank pusat, institusi yang alumninya menduduki jawatan paling kanan merentas kewangan Malaysia. Pemilihan menimbang keputusan SPM hampir sempurna sebagai tapisan masuk, kemudian penilaian dan temuduga panel yang mencari pemikiran analitikal dan minat sebenar terhadap ekonomi dan dasar awam, bukan sekadar gred. Permohonan biasanya dibuka sekitar musim keputusan SPM melalui portal biasiswa rasmi BNM. Kalau keputusan anda melayakkan, mohon Kijang, JPA dan Khazanah pada musim yang sama; temuduga saling mengasah dan tawarannya memberi anda pilihan sebenar.",
    cta_en: "Check the BNM listings on MyScholar",
    cta_bm: "Semak senarai BNM di MyScholar"
  }
},

{
  slug: "biasiswa-acca-2026",
  type: "scholarship",
  keywords: {
    primary: "ACCA scholarship Malaysia 2026",
    primary_bm: "biasiswa ACCA 2026",
    longtail_en: ["ACCA sponsorship Big 4 Malaysia", "ACCA fees Malaysia funding", "Yayasan Peneraju ACCA", "ACCA vs accounting degree Malaysia", "professional accounting qualification sponsored"],
    longtail_bm: ["tajaan ACCA big 4 malaysia", "yuran ACCA pembiayaan", "peneraju profesional ACCA", "ACCA atau ijazah perakaunan", "kelayakan perakaunan profesional bertaja"]
  },
  meta: {
    title: "Biasiswa & Tajaan ACCA 2026 - Big 4, Peneraju & Laluan Bertaja | MyScholar",
    title_bm: "ACCA Scholarships Malaysia 2026 - Big 4, Peneraju & Sponsored Routes | MyScholar",
    description: "You do not have to pay for ACCA yourself. The employers, foundations and programmes that sponsor ACCA in Malaysia, including Big 4 study support and Yayasan Peneraju's professional track.",
    description_bm: "Anda tidak semestinya bayar ACCA sendiri. Majikan, yayasan dan program yang menaja ACCA di Malaysia, termasuk sokongan pengajian Big 4 dan trek profesional Yayasan Peneraju."
  },
  landing: {
    h1_en: "ACCA Scholarships and Sponsorships in Malaysia",
    h1_bm: "Biasiswa dan Tajaan ACCA di Malaysia",
    intro_en: "ACCA keeps appearing in MyScholar searches, and the question behind it is usually the same: the qualification is respected everywhere, but who pays for it? The good news is that in Malaysia, most people who complete ACCA never pay the full cost themselves. The biggest funders are employers: the Big Four and mid-tier accounting firms routinely cover exam fees, subscriptions and study leave for staff pursuing ACCA, which is why the most common route is joining a firm after SPM, a foundation, or a degree and qualifying while working. For bumiputera candidates, Yayasan Peneraju's professional programmes have funded ACCA and other professional qualifications end to end, tuition and exams included, and remain one of the most generous routes available. ACCA Malaysia itself and its learning partners (Sunway TES being the most established) offer merit scholarships and high-achiever awards that waive tuition for strong students, and universities with ACCA-accredited accounting degrees give exemptions that cut the number of papers, and therefore the cost, substantially. The strategic choice students face is degree-first (broader, PTPTN-fundable, exemptions from up to nine papers) versus ACCA-direct after SPM or STPM (faster and cheaper overall, but more exam pressure earlier). Either way, the professional bodies' own funding plus employer sponsorship means the realistic out-of-pocket cost is far below the sticker price, and this page's directory link shows the live funding options we track.",
    intro_bm: "ACCA kerap muncul dalam carian MyScholar, dan soalan di sebaliknya biasanya sama: kelayakan ini dihormati di mana-mana, tetapi siapa yang bayar? Berita baiknya, di Malaysia kebanyakan orang yang tamat ACCA tidak pernah bayar kos penuh sendiri. Penaja terbesar ialah majikan: firma Big Four dan pertengahan lazimnya menanggung yuran peperiksaan, langganan dan cuti belajar untuk staf yang mengambil ACCA, sebab itu laluan paling biasa ialah menyertai firma selepas SPM, asasi atau ijazah dan layak sambil bekerja. Untuk calon bumiputera, program profesional Yayasan Peneraju pernah membiayai ACCA dan kelayakan profesional lain dari hujung ke hujung, termasuk tuisyen dan peperiksaan, dan kekal antara laluan paling lumayan. ACCA Malaysia sendiri dan rakan pembelajarannya (Sunway TES paling mapan) menawarkan biasiswa merit dan anugerah pencapai tinggi yang mengecualikan yuran untuk pelajar cemerlang, dan universiti dengan ijazah perakaunan berakreditasi ACCA memberi pengecualian yang memotong bilangan kertas, dan sekali gus kos, dengan banyak. Pilihan strategik pelajar: ijazah dulu (lebih luas, boleh PTPTN, pengecualian hingga sembilan kertas) atau terus ACCA selepas SPM atau STPM (lebih cepat dan murah keseluruhan, tetapi tekanan peperiksaan lebih awal). Apa pun, pembiayaan badan profesional serta tajaan majikan bermakna kos poket sebenar jauh di bawah harga penuh, dan pautan direktori halaman ini menunjukkan pilihan pembiayaan yang kami jejak.",
    cta_en: "Find accounting scholarships",
    cta_bm: "Cari biasiswa perakaunan"
  }
},

{
  slug: "biasiswa-msu-university-2026",
  type: "scholarship",
  keywords: {
    primary: "MSU scholarship 2026",
    primary_bm: "biasiswa MSU 2026",
    longtail_en: ["Management and Science University scholarship", "MSU Shah Alam scholarship application", "MSU merit scholarship SPM", "MSU medicine pharmacy funding", "MSU fees and financial aid"],
    longtail_bm: ["biasiswa management science university", "cara mohon biasiswa MSU shah alam", "biasiswa merit MSU lepasan SPM", "pembiayaan perubatan farmasi MSU", "yuran MSU bantuan kewangan"]
  },
  meta: {
    title: "Biasiswa MSU 2026 - Management & Science University | MyScholar",
    title_bm: "MSU Scholarships 2026 - Management & Science University | MyScholar",
    description: "MSU is one of the most searched universities on MyScholar. Its merit scholarships, financial aid layers, and how to fund study at the Shah Alam campus, laid out plainly.",
    description_bm: "MSU antara universiti paling banyak dicari di MyScholar. Biasiswa meritnya, lapisan bantuan kewangan, dan cara biayai pengajian di kampus Shah Alam, disusun jelas."
  },
  landing: {
    h1_en: "MSU Scholarships and Funding - The Full Picture",
    h1_bm: "Biasiswa dan Pembiayaan MSU - Gambaran Penuh",
    intro_en: "MSU (Management and Science University) is one of the most searched university names on MyScholar, often returning nothing, so this page closes that gap. The Shah Alam university has built its reputation on career-focused programmes across health sciences (including medicine through its international campus arrangements, pharmacy and nursing), business, hospitality, engineering and creative fields, and it backs enrolment with one of the more active institutional aid setups among Malaysian private universities. Entry merit scholarships reward strong SPM, STPM, matriculation and diploma results with partial fee waivers that scale with grades, and additional support layers exist for alumni families, siblings studying concurrently, and specific programme promotions that change by intake, which is why the definitive numbers always come from the current intake's offer letter rather than last year's brochure. Around the university's own aid, the standard national layers apply: PTPTN loans cover accredited programmes, EPF education withdrawals help families bridge gaps, state foundations and zakat bodies support eligible students, and for health programmes specifically, the usual allied health and nursing sponsorships in our directory can apply depending on the course. Our practical advice for any private university decision, MSU included: get the full programme cost in writing for all years, not just year one, confirm which scholarship percentages continue past the first year and what CGPA keeps them, and stack the national funding layers early because their deadlines run on their own calendars.",
    intro_bm: "MSU (Management and Science University) antara nama universiti paling banyak dicari di MyScholar, dan selalunya tiada hasil, jadi halaman ini menutup jurang itu. Universiti di Shah Alam ini membina reputasinya dengan program berfokus kerjaya merentas sains kesihatan (termasuk perubatan melalui aturan kampus antarabangsanya, farmasi dan kejururawatan), perniagaan, hospitaliti, kejuruteraan dan bidang kreatif, dan ia menyokong kemasukan dengan salah satu sistem bantuan institusi paling aktif dalam kalangan universiti swasta Malaysia. Biasiswa merit kemasukan memberi ganjaran keputusan SPM, STPM, matrikulasi dan diploma yang kukuh dengan pengecualian yuran separa mengikut gred, dan lapisan sokongan tambahan wujud untuk keluarga alumni, adik-beradik belajar serentak, dan promosi program tertentu yang berubah ikut pengambilan, sebab itu angka muktamad sentiasa datang dari surat tawaran pengambilan semasa, bukan risalah tahun lepas. Di sekeliling bantuan universiti sendiri, lapisan nasional biasa terpakai: pinjaman PTPTN menanggung program bertauliah, pengeluaran pendidikan KWSP membantu keluarga menutup jurang, yayasan negeri dan badan zakat menyokong pelajar yang layak, dan untuk program kesihatan khususnya, tajaan sains kesihatan bersekutu dan kejururawatan biasa dalam direktori kami boleh terpakai bergantung pada kursus. Nasihat praktikal kami untuk sebarang keputusan universiti swasta, termasuk MSU: dapatkan kos program penuh secara bertulis untuk semua tahun, bukan tahun satu sahaja, sahkan peratusan biasiswa mana yang berterusan selepas tahun pertama dan CGPA apa yang mengekalkannya, dan susun lapisan pembiayaan nasional awal kerana tarikh tutupnya berjalan ikut kalendar sendiri.",
    cta_en: "Find scholarships that match you",
    cta_bm: "Cari biasiswa yang sesuai untuk anda"
  }
},
// ============================================================
// === WAVE 20 B: PROVIDER GAP PAGES (6-10) ===================
// ============================================================

{
  slug: "biasiswa-shell-malaysia-2026",
  type: "scholarship",
  keywords: {
    primary: "Shell scholarship Malaysia 2026",
    primary_bm: "biasiswa Shell malaysia 2026",
    longtail_en: ["Shell Malaysia scholarship application", "Shell STEM scholarship", "oil and gas scholarship Malaysia", "Shell scholarship Sarawak Sabah", "energy company scholarship 2026"],
    longtail_bm: ["cara mohon biasiswa shell", "biasiswa STEM shell", "biasiswa minyak dan gas malaysia", "biasiswa shell sarawak sabah", "biasiswa syarikat tenaga 2026"]
  },
  meta: {
    title: "Biasiswa Shell Malaysia 2026 - Bidang, Syarat & Cara Mohon | MyScholar",
    title_bm: "Shell Malaysia Scholarship 2026 - Fields, Requirements & How to Apply | MyScholar",
    description: "Shell has funded Malaysian students for decades, with East Malaysia strongly represented. What the scholarship covers, the STEM fields it favours, and how to apply.",
    description_bm: "Shell telah membiayai pelajar Malaysia berdekad lamanya, dengan Malaysia Timur diwakili kuat. Apa yang biasiswa tanggung, bidang STEM yang diutamakan, dan cara memohon."
  },
  landing: {
    h1_en: "The Shell Malaysia Scholarship - A Full Guide",
    h1_bm: "Biasiswa Shell Malaysia - Panduan Penuh",
    intro_en: "Shell is one of the oldest corporate scholarship names in Malaysia, with a sponsorship tradition that goes back generations and a footprint that gives East Malaysian students a genuine edge: Shell's upstream operations off Sarawak and Sabah and its long history in Miri (Malaysia's first oil town) mean the company has consistently invested in students from those states alongside Peninsular applicants. The modern programme focuses on fields the energy business runs on, engineering disciplines (petroleum, mechanical, electrical, chemical), geosciences, and increasingly the digital and commercial skills an energy company in transition needs. Coverage typically includes tuition and living support for study at recognised universities, and Shell's schemes have historically been notable for how they treat scholars: structured internships inside the company, mentoring from working engineers, and a hiring pipeline that, even when the award carries no strict bond, tends to pull scholars into Shell's graduate programmes. Selection looks for strong academics as the baseline (SPM and pre-university results in the sciences), then leadership and community involvement, because the company explicitly recruits for future leaders rather than exam machines. Application windows are announced through Shell Malaysia's official careers and social channels and via school counsellors in its operating states. The listing below carries the current cycle's verified link and status; if the window is closed, bookmark it, because this is a scholarship worth planning a year ahead for.",
    intro_bm: "Shell antara nama biasiswa korporat paling lama di Malaysia, dengan tradisi tajaan yang menjangkau beberapa generasi dan kehadiran yang memberi pelajar Malaysia Timur kelebihan sebenar: operasi huluan Shell di perairan Sarawak dan Sabah serta sejarah panjangnya di Miri (bandar minyak pertama Malaysia) bermakna syarikat ini konsisten melabur dalam pelajar dari negeri-negeri itu di samping pemohon Semenanjung. Program moden fokus pada bidang yang perniagaan tenaga perlukan, disiplin kejuruteraan (petroleum, mekanikal, elektrik, kimia), geosains, dan semakin banyak kemahiran digital dan komersial yang syarikat tenaga dalam peralihan perlukan. Tanggungan biasanya termasuk yuran dan sokongan sara hidup untuk pengajian di universiti yang diiktiraf, dan skim Shell dari dulu terkenal dengan cara ia melayan penerima: internship berstruktur dalam syarikat, bimbingan daripada jurutera yang bekerja, dan saluran pengambilan yang, walaupun anugerah tiada ikatan ketat, cenderung menarik penerima ke program graduan Shell. Pemilihan mencari akademik kukuh sebagai asas (keputusan SPM dan pra-universiti dalam sains), kemudian kepimpinan dan penglibatan komuniti, kerana syarikat ini secara jelas merekrut pemimpin masa depan, bukan mesin peperiksaan. Tempoh permohonan diumumkan melalui saluran kerjaya dan media sosial rasmi Shell Malaysia serta kaunselor sekolah di negeri operasinya. Senarai di bawah membawa pautan dan status kitaran semasa yang disahkan; kalau tetingkap sudah tutup, simpan halaman ini, kerana biasiswa ini berbaloi dirancang setahun lebih awal.",
    cta_en: "Check the Shell listing on MyScholar",
    cta_bm: "Semak senarai Shell di MyScholar"
  }
},

{
  slug: "biasiswa-fulbright-macee-2026",
  type: "scholarship",
  keywords: {
    primary: "Fulbright scholarship Malaysia 2026",
    primary_bm: "biasiswa Fulbright malaysia 2026",
    longtail_en: ["Fulbright Malaysian scholar programme", "MACEE Fulbright application", "study in USA scholarship Malaysia", "Fulbright masters PhD funding", "US exchange programme Malaysia"],
    longtail_bm: ["program fulbright pelajar malaysia", "cara mohon fulbright MACEE", "biasiswa belajar di amerika", "pembiayaan sarjana PhD fulbright", "program pertukaran amerika malaysia"]
  },
  meta: {
    title: "Biasiswa Fulbright & MACEE 2026 - Belajar di Amerika | MyScholar",
    title_bm: "Fulbright & MACEE Scholarships 2026 - Study in the USA | MyScholar",
    description: "The Fulbright programme, run in Malaysia by MACEE, funds Malaysians for graduate study and research in the United States. Who it suits, what it covers, and how the cycle works.",
    description_bm: "Program Fulbright, dikendalikan di Malaysia oleh MACEE, membiayai rakyat Malaysia untuk pengajian sarjana dan penyelidikan di Amerika Syarikat. Untuk siapa, apa yang ditanggung, dan cara kitarannya."
  },
  landing: {
    h1_en: "Fulbright and MACEE - The American Scholarship Route for Malaysians",
    h1_bm: "Fulbright dan MACEE - Laluan Biasiswa Amerika untuk Rakyat Malaysia",
    intro_en: "The Fulbright programme is the United States government's flagship educational exchange, and in Malaysia it is administered by MACEE, the Malaysian-American Commission on Educational Exchange, a binational body that has been sending Malaysians to America (and bringing Americans here) for decades. This is not an undergraduate scholarship, which is the first thing to understand: Fulbright's core Malaysian awards fund graduate study, typically masters degrees, along with research programmes and specialised exchanges, so its natural audience is final-year students, young researchers, academics and professionals with a clear plan for what an American graduate degree would unlock. Coverage is comprehensive for funded awards: tuition support, living stipends, airfare, health coverage and the J-1 visa process, plus the thing alumni consistently rate highest, membership of a global Fulbright network that opens doors for the rest of a career. Selection is essay- and interview-driven in a way Malaysian applicants sometimes underestimate: a strong academic record is assumed, and what wins is a sharply argued statement of purpose connecting your field, a specific US programme, and what you will bring back to Malaysia, because the programme's whole premise is exchange, not emigration (the associated visa carries a home-return requirement most awardees should expect). Cycles generally open many months before the intended academic year, so the right time to start drafting is a full year out. MACEE also advises on US study generally, making it a resource worth knowing even if you fund your degree another way.",
    intro_bm: "Program Fulbright ialah pertukaran pendidikan utama kerajaan Amerika Syarikat, dan di Malaysia ia ditadbir oleh MACEE, Malaysian-American Commission on Educational Exchange, badan dwinegara yang telah menghantar rakyat Malaysia ke Amerika (dan membawa rakyat Amerika ke sini) berdekad lamanya. Ini bukan biasiswa prasiswazah, itu perkara pertama untuk difahami: anugerah teras Fulbright untuk rakyat Malaysia membiayai pengajian pascasiswazah, biasanya ijazah sarjana, bersama program penyelidikan dan pertukaran khusus, jadi audiens semula jadinya pelajar tahun akhir, penyelidik muda, ahli akademik dan profesional dengan rancangan jelas tentang apa yang ijazah sarjana Amerika akan buka. Tanggungan menyeluruh untuk anugerah yang dibiayai: sokongan yuran, elaun sara hidup, tambang penerbangan, perlindungan kesihatan dan proses visa J-1, serta perkara yang alumni konsisten nilai paling tinggi, keahlian rangkaian Fulbright global yang membuka pintu sepanjang kerjaya. Pemilihan dipacu esei dan temuduga dengan cara yang kadangkala dipandang ringan pemohon Malaysia: rekod akademik kukuh dianggap asas, dan yang menang ialah pernyataan tujuan yang berhujah tajam menghubungkan bidang anda, program AS yang spesifik, dan apa yang anda akan bawa pulang ke Malaysia, kerana premis keseluruhan program ini ialah pertukaran, bukan penghijrahan (visa berkaitan membawa syarat pulang ke negara asal yang kebanyakan penerima patut jangkakan). Kitaran biasanya dibuka berbulan-bulan sebelum tahun akademik yang disasar, jadi masa yang betul untuk mula merangka ialah setahun awal. MACEE juga menasihat tentang pengajian AS secara umum, menjadikannya sumber yang patut dikenali walaupun anda biayai ijazah dengan cara lain.",
    cta_en: "See US study scholarships",
    cta_bm: "Lihat biasiswa pengajian Amerika"
  }
},

{
  slug: "biasiswa-yayasan-peneraju-2026",
  type: "scholarship",
  keywords: {
    primary: "Yayasan Peneraju scholarship 2026",
    primary_bm: "biasiswa Yayasan Peneraju 2026",
    longtail_en: ["Yayasan Peneraju Pendidikan Bumiputera", "Peneraju Tunas Peneraju Skil", "Peneraju Profesional ACCA CFA", "bumiputera professional certification funding", "Peneraju application requirements"],
    longtail_bm: ["yayasan peneraju pendidikan bumiputera", "peneraju tunas peneraju skil", "peneraju profesional ACCA CFA", "pembiayaan sijil profesional bumiputera", "syarat permohonan peneraju"]
  },
  meta: {
    title: "Biasiswa Yayasan Peneraju 2026 - Tunas, Skil & Profesional | MyScholar",
    title_bm: "Yayasan Peneraju Scholarships 2026 - Tunas, Skil & Profesional | MyScholar",
    description: "Yayasan Peneraju funds bumiputera Malaysians from school support through TVET skills to elite professional certifications like ACCA and CFA. The three programme tracks explained.",
    description_bm: "Yayasan Peneraju membiayai bumiputera Malaysia dari sokongan sekolah, kemahiran TVET, hingga sijil profesional elit seperti ACCA dan CFA. Tiga trek program dijelaskan."
  },
  landing: {
    h1_en: "Yayasan Peneraju - Three Tracks, One Mission",
    h1_bm: "Yayasan Peneraju - Tiga Trek, Satu Misi",
    intro_en: "Yayasan Peneraju Pendidikan Bumiputera is one of the most consequential funders most Malaysian students have never properly heard of, which is exactly why students kept searching for it here and finding nothing. Established under the government's bumiputera economic agenda, it does something distinct from JPA or MARA: instead of general degree sponsorship, it targets specific gaps in bumiputera representation, and it organises that mission into three tracks. Peneraju Tunas supports school-age and pre-tertiary students, particularly high-potential students from lower-income families, through academic support and pathway programmes. Peneraju Skil funds technical and vocational certification (welding, aviation maintenance, oil and gas trades, digital skills and more), often with allowances during training and strong job-placement rates, making it one of the best-funded TVET routes in the country. Peneraju Profesional is the flagship most relevant to this page's searchers: it funds professional qualifications end to end, ACCA, CFA, actuarial exams, CIMA, risk and audit certifications and other credentials where bumiputera professionals remain underrepresented, frequently covering tuition, exam fees and support costs in full. Eligibility centres on bumiputera status with programme-specific academic and age criteria, and selection favours applicants who can show commitment to completing demanding qualifications. Cycles for each track open at different times through the foundation's official channels, so the practical move is to identify your track, follow its announcements, and prepare documents before the window opens.",
    intro_bm: "Yayasan Peneraju Pendidikan Bumiputera antara penaja paling penting yang kebanyakan pelajar Malaysia tidak pernah kenal dengan betul, sebab itulah pelajar asyik mencarinya di sini dan tidak jumpa apa-apa. Ditubuhkan di bawah agenda ekonomi bumiputera kerajaan, ia buat sesuatu yang berbeza daripada JPA atau MARA: bukannya tajaan ijazah umum, ia menyasar jurang khusus dalam perwakilan bumiputera, dan menyusun misi itu kepada tiga trek. Peneraju Tunas menyokong pelajar usia sekolah dan pra-tertiari, khususnya pelajar berpotensi tinggi dari keluarga berpendapatan rendah, melalui sokongan akademik dan program laluan. Peneraju Skil membiayai pensijilan teknikal dan vokasional (kimpalan, penyelenggaraan penerbangan, tred minyak dan gas, kemahiran digital dan banyak lagi), selalunya dengan elaun semasa latihan dan kadar penempatan kerja yang kukuh, menjadikannya antara laluan TVET paling baik dibiayai di negara ini. Peneraju Profesional ialah program utama paling relevan untuk pencari halaman ini: ia membiayai kelayakan profesional dari hujung ke hujung, ACCA, CFA, peperiksaan aktuari, CIMA, pensijilan risiko dan audit serta kredential lain di mana profesional bumiputera masih kurang diwakili, kerap menanggung penuh yuran tuisyen, peperiksaan dan kos sokongan. Kelayakan berpusat pada status bumiputera dengan kriteria akademik dan umur khusus program, dan pemilihan mengutamakan pemohon yang boleh tunjuk komitmen menamatkan kelayakan yang mencabar. Kitaran setiap trek dibuka pada masa berbeza melalui saluran rasmi yayasan, jadi langkah praktikalnya: kenal pasti trek anda, ikuti pengumumannya, dan sediakan dokumen sebelum tetingkap dibuka.",
    cta_en: "Check the Peneraju listings on MyScholar",
    cta_bm: "Semak senarai Peneraju di MyScholar"
  }
},

{
  slug: "biasiswa-sunway-jeffrey-cheah-2026",
  type: "scholarship",
  keywords: {
    primary: "Sunway University scholarship 2026",
    primary_bm: "biasiswa Sunway University 2026",
    longtail_en: ["Jeffrey Cheah Foundation scholarship", "Sunway scholarship SPM requirements", "Sunway College scholarship application", "Jeffrey Cheah Entrance Scholarship", "private university scholarship Malaysia"],
    longtail_bm: ["biasiswa yayasan jeffrey cheah", "syarat biasiswa sunway SPM", "cara mohon biasiswa sunway college", "biasiswa kemasukan jeffrey cheah", "biasiswa universiti swasta malaysia"]
  },
  meta: {
    title: "Biasiswa Sunway & Jeffrey Cheah Foundation 2026 - Syarat & Cara Mohon | MyScholar",
    title_bm: "Sunway & Jeffrey Cheah Foundation Scholarships 2026 | MyScholar",
    description: "The Jeffrey Cheah Foundation runs one of Malaysia's largest private education scholarship pools, funding study at Sunway University and College. The award tiers and how to qualify.",
    description_bm: "Jeffrey Cheah Foundation mengendalikan antara dana biasiswa pendidikan swasta terbesar Malaysia, membiayai pengajian di Sunway University dan College. Peringkat anugerah dan cara layak."
  },
  landing: {
    h1_en: "Sunway and Jeffrey Cheah Foundation Scholarships",
    h1_bm: "Biasiswa Sunway dan Jeffrey Cheah Foundation",
    intro_en: "Sunway's scholarship system is unusual among Malaysian private universities because of how it is owned: Sunway University and Sunway College operate under the Jeffrey Cheah Foundation, a structure where the institutions' surpluses are channelled back into education rather than out to shareholders, and the foundation has grown into one of the largest private education scholarship funders in the country. For students, that translates into a genuinely deep award structure. Entrance scholarships reward strong SPM, IGCSE, STPM, A-Level and UEC results with fee waivers that scale to full coverage for top performers, and the flagship awards for outstanding students can cover the entire programme. Beyond entry merit, the foundation runs community and hardship-based support, continuing scholarships that reward performance during study, and targeted awards across Sunway's schools, from business and hospitality (including the Le Cordon Bleu culinary partnership) to computing, engineering and the American Degree Transfer Program. Sunway's tie-ups add further routes: the Sunway TES accounting pathway carries its own high-achiever funding for ACCA-track students, and cross-registration links with partner institutions broaden what a scholar can study. Applications generally run alongside admissions, with results slips and co-curricular records as the working documents, and interviews for the higher tiers. If you are comparing private universities on net cost rather than sticker price, the foundation's depth means Sunway frequently lands cheaper than its brochure suggests for strong students, and the listings linked below show the current verified awards.",
    intro_bm: "Sistem biasiswa Sunway luar biasa dalam kalangan universiti swasta Malaysia kerana cara pemilikannya: Sunway University dan Sunway College beroperasi di bawah Jeffrey Cheah Foundation, struktur di mana lebihan institusi disalurkan semula ke pendidikan dan bukan keluar kepada pemegang saham, dan yayasan ini telah berkembang menjadi antara penaja biasiswa pendidikan swasta terbesar di negara ini. Untuk pelajar, itu diterjemahkan kepada struktur anugerah yang benar-benar mendalam. Biasiswa kemasukan memberi ganjaran keputusan SPM, IGCSE, STPM, A-Level dan UEC yang kukuh dengan pengecualian yuran yang meningkat hingga tanggungan penuh untuk pencapai terbaik, dan anugerah utama untuk pelajar cemerlang boleh menanggung keseluruhan program. Selain merit kemasukan, yayasan ini menjalankan sokongan berasaskan komuniti dan kesusahan, biasiswa berterusan yang memberi ganjaran prestasi semasa belajar, dan anugerah disasar merentas sekolah-sekolah Sunway, dari perniagaan dan hospitaliti (termasuk kerjasama kulinari Le Cordon Bleu) hingga komputeran, kejuruteraan dan American Degree Transfer Program. Kerjasama Sunway menambah laluan lagi: laluan perakaunan Sunway TES membawa pembiayaan pencapai tinggi sendiri untuk pelajar trek ACCA, dan hubungan dengan institusi rakan meluaskan apa yang penerima boleh pelajari. Permohonan biasanya berjalan seiring kemasukan, dengan slip keputusan dan rekod kokurikulum sebagai dokumen kerja, dan temuduga untuk peringkat lebih tinggi. Kalau anda membandingkan universiti swasta ikut kos bersih dan bukan harga risalah, kedalaman yayasan ini bermakna Sunway kerap jatuh lebih murah daripada yang dijangka untuk pelajar cemerlang, dan senarai di bawah menunjukkan anugerah sah semasa.",
    cta_en: "Check the Sunway listings on MyScholar",
    cta_bm: "Semak senarai Sunway di MyScholar"
  }
},

{
  slug: "biasiswa-taylors-university-2026",
  type: "scholarship",
  keywords: {
    primary: "Taylors University scholarship 2026",
    primary_bm: "biasiswa Taylors University 2026",
    longtail_en: ["Taylors Excellence Award SPM", "Taylors scholarship application 2026", "Taylors hospitality scholarship", "Taylors merit scholarship requirements", "Taylors College scholarship"],
    longtail_bm: ["anugerah kecemerlangan taylors SPM", "cara mohon biasiswa taylors 2026", "biasiswa hospitaliti taylors", "syarat biasiswa merit taylors", "biasiswa taylors college"]
  },
  meta: {
    title: "Biasiswa Taylor's University 2026 - Merit Awards & Cara Mohon | MyScholar",
    title_bm: "Taylor's University Scholarships 2026 - Merit Awards & How to Apply | MyScholar",
    description: "Taylor's runs substantial merit scholarships across its top-ranked programmes, from hospitality to law. The award structure, what results earn what percentage, and how to apply.",
    description_bm: "Taylor's menawarkan biasiswa merit besar merentas program berkedudukan tingginya, dari hospitaliti hingga undang-undang. Struktur anugerah, keputusan apa dapat peratus apa, dan cara memohon."
  },
  landing: {
    h1_en: "Taylor's University Scholarships - The Full Guide",
    h1_bm: "Biasiswa Taylor's University - Panduan Penuh",
    intro_en: "Taylor's University consistently ranks among Southeast Asia's top private universities, and its hospitality school competes globally, which makes its scholarship structure worth understanding properly rather than assuming the fees are simply out of reach. The core of the system is merit: entrance awards tied directly to SPM, IGCSE, STPM, A-Level, UEC and foundation results, structured as percentage fee waivers that rise with grades, with the highest bands reserved for near-perfect results and flagship excellence awards covering substantial portions of top programmes. Around that core sit targeted layers: subject-specific awards in areas Taylor's is known for (hospitality and culinary, design, law, biosciences and computing among them), sports scholarships for state and national athletes, community and sibling support, and continuing awards that reward CGPA during the degree, which matters because a scholarship you keep for four years is worth far more than a first-year discount. Taylor's College entries (A-Levels and foundation) carry their own awards that can chain into degree scholarships, an underrated route where a strong foundation year effectively re-opens the top scholarship bands. Applications run with admissions through the university's scholarship portal, deadlines track each intake, and the higher awards involve interviews. Two practical notes from how we see students navigate this: the published bands are the floor, not the ceiling, for exceptional applicants, and stacking a Taylor's award with PTPTN and external foundation funding is standard practice, so build the full funding picture before deciding the fees rule you out.",
    intro_bm: "Taylor's University konsisten berada dalam kalangan universiti swasta terbaik Asia Tenggara, dan sekolah hospitalitinya bersaing di peringkat global, menjadikan struktur biasiswanya wajar difahami betul-betul dan bukan terus menganggap yurannya di luar jangkauan. Teras sistemnya ialah merit: anugerah kemasukan terikat terus dengan keputusan SPM, IGCSE, STPM, A-Level, UEC dan asasi, berstruktur sebagai pengecualian yuran peratusan yang naik ikut gred, dengan jalur tertinggi dikhaskan untuk keputusan hampir sempurna dan anugerah kecemerlangan utama menanggung sebahagian besar program terbaik. Di sekeliling teras itu ada lapisan disasar: anugerah khusus bidang dalam bidang yang Taylor's terkenal (hospitaliti dan kulinari, reka bentuk, undang-undang, biosains dan komputeran antaranya), biasiswa sukan untuk atlet negeri dan negara, sokongan komuniti dan adik-beradik, dan anugerah berterusan yang memberi ganjaran CGPA semasa ijazah, yang penting kerana biasiswa yang anda kekalkan empat tahun jauh lebih bernilai daripada diskaun tahun pertama. Kemasukan Taylor's College (A-Level dan asasi) membawa anugerahnya sendiri yang boleh bersambung ke biasiswa ijazah, laluan yang dipandang rendah di mana tahun asasi yang cemerlang membuka semula jalur biasiswa teratas. Permohonan berjalan seiring kemasukan melalui portal biasiswa universiti, tarikh tutup ikut setiap pengambilan, dan anugerah lebih tinggi melibatkan temuduga. Dua nota praktikal daripada cara kami lihat pelajar mengharunginya: jalur yang diterbitkan ialah lantai, bukan siling, untuk pemohon luar biasa, dan menggabungkan anugerah Taylor's dengan PTPTN serta pembiayaan yayasan luar ialah amalan biasa, jadi bina gambaran pembiayaan penuh sebelum memutuskan yurannya menghalang anda.",
    cta_en: "Check the Taylor's listings on MyScholar",
    cta_bm: "Semak senarai Taylor's di MyScholar"
  }
},
// ============================================================
// === WAVE 20 C: PROVIDER GAP PAGES (11-14) ==================
// ============================================================

{
  slug: "biasiswa-sarawak-energy-2026",
  type: "scholarship",
  keywords: {
    primary: "Sarawak Energy scholarship 2026",
    primary_bm: "biasiswa Sarawak Energy 2026",
    longtail_en: ["Sarawak Energy scholarship application", "SEB scholarship Sarawakian students", "engineering scholarship Sarawak", "Sarawak Energy sponsorship bond", "scholarship for Sarawak students 2026"],
    longtail_bm: ["cara mohon biasiswa sarawak energy", "biasiswa SEB pelajar sarawak", "biasiswa kejuruteraan sarawak", "ikatan tajaan sarawak energy", "biasiswa anak sarawak 2026"]
  },
  meta: {
    title: "Biasiswa Sarawak Energy 2026 - Syarat, Bidang & Ikatan | MyScholar",
    title_bm: "Sarawak Energy Scholarship 2026 - Requirements, Fields & Bond | MyScholar",
    description: "Sarawak Energy sponsors Sarawakian students through engineering and technical degrees, with a job waiting at the state's power utility. One of the most searched Sarawak scholarships.",
    description_bm: "Sarawak Energy menaja pelajar Sarawak melalui ijazah kejuruteraan dan teknikal, dengan kerja menanti di utiliti kuasa negeri. Antara biasiswa Sarawak paling banyak dicari."
  },
  landing: {
    h1_en: "The Sarawak Energy Scholarship - A Guide for Sarawakian Students",
    h1_bm: "Biasiswa Sarawak Energy - Panduan untuk Pelajar Sarawak",
    intro_en: "Sarawak Energy is among the most searched scholarship names on MyScholar from East Malaysian students, and it deserves the attention: the state utility behind the Bakun and Murum dams and Sarawak's expanding hydropower grid runs one of the most complete sponsorship packages available specifically to Sarawakians. The logic of the programme is workforce-building. Sarawak's energy ambitions (hydropower exports to neighbours, the state's push into hydrogen, and the industrial corridor SCORE) need a steady pipeline of engineers, and the company sponsors students in exactly those fields: electrical, mechanical, civil and chemical engineering as the core, alongside surveying, environmental science, finance and digital disciplines in some cycles. Sponsorship typically covers tuition and living allowances at recognised universities in Malaysia and sometimes abroad, and carries a service bond with Sarawak Energy after graduation, which for many scholars is precisely the point: a guaranteed professional job in Sarawak, at Sarawakian pay scales, without having to migrate to the Peninsula, something few other employers in the state can promise at the same scale. Priority goes to Sarawakian students, results matter (strong SPM or pre-university science grades), and selection includes interviews that look for people genuinely willing to build a career in the state's energy sector. Application windows are announced on Sarawak Energy's official channels, and the verified listing below carries the current status; Sarawakians comparing options should weigh this alongside Yayasan Sarawak and the state foundation layer, because the awards can complement each other.",
    intro_bm: "Sarawak Energy antara nama biasiswa paling banyak dicari di MyScholar oleh pelajar Malaysia Timur, dan ia memang layak diberi perhatian: utiliti negeri di sebalik empangan Bakun dan Murum serta grid hidroelektrik Sarawak yang berkembang menjalankan antara pakej tajaan paling lengkap yang khusus untuk anak Sarawak. Logik programnya pembinaan tenaga kerja. Cita-cita tenaga Sarawak (eksport hidroelektrik ke negara jiran, usaha negeri dalam hidrogen, dan koridor perindustrian SCORE) memerlukan saluran jurutera yang berterusan, dan syarikat menaja pelajar dalam bidang itulah: kejuruteraan elektrik, mekanikal, awam dan kimia sebagai teras, di samping ukur, sains alam sekitar, kewangan dan disiplin digital dalam sesetengah kitaran. Tajaan biasanya menanggung yuran dan elaun sara hidup di universiti yang diiktiraf di Malaysia dan kadangkala luar negara, dan membawa ikatan perkhidmatan dengan Sarawak Energy selepas tamat, yang bagi ramai penerima itulah tujuannya: kerja profesional terjamin di Sarawak, dengan skala gaji Sarawak, tanpa perlu berhijrah ke Semenanjung, sesuatu yang jarang majikan lain di negeri itu boleh janjikan pada skala sama. Keutamaan kepada pelajar Sarawak, keputusan penting (gred sains SPM atau pra-universiti yang kukuh), dan pemilihan termasuk temuduga yang mencari orang yang benar-benar mahu bina kerjaya dalam sektor tenaga negeri. Tempoh permohonan diumumkan di saluran rasmi Sarawak Energy, dan senarai sah di bawah membawa status semasa; anak Sarawak yang membandingkan pilihan patut timbang ini bersama Yayasan Sarawak dan lapisan yayasan negeri, kerana anugerahnya boleh saling melengkapi.",
    cta_en: "Check the Sarawak Energy listing",
    cta_bm: "Semak senarai Sarawak Energy"
  }
},

{
  slug: "biasiswa-great-eastern-2026",
  type: "scholarship",
  keywords: {
    primary: "Great Eastern scholarship Malaysia 2026",
    primary_bm: "biasiswa Great Eastern 2026",
    longtail_en: ["Great Eastern Life scholarship application", "insurance company scholarship Malaysia", "Great Eastern scholarship requirements", "actuarial finance scholarship Malaysia", "Great Eastern Supremacy award"],
    longtail_bm: ["cara mohon biasiswa great eastern", "biasiswa syarikat insurans malaysia", "syarat biasiswa great eastern", "biasiswa aktuari kewangan malaysia", "anugerah great eastern"]
  },
  meta: {
    title: "Biasiswa Great Eastern 2026 - Syarat & Cara Mohon | MyScholar",
    title_bm: "Great Eastern Scholarship Malaysia 2026 - Requirements & How to Apply | MyScholar",
    description: "Great Eastern Life, Malaysia's oldest life insurer, funds undergraduate study for high-achieving students. What the scholarship covers, who qualifies, and how the selection runs.",
    description_bm: "Great Eastern Life, penanggung insurans hayat tertua Malaysia, membiayai pengajian prasiswazah untuk pelajar cemerlang. Apa yang ditanggung, siapa layak, dan cara pemilihan."
  },
  landing: {
    h1_en: "The Great Eastern Scholarship - A Full Guide",
    h1_bm: "Biasiswa Great Eastern - Panduan Penuh",
    intro_en: "Great Eastern has been insuring Malaysian lives for more than a century, which makes it one of the oldest corporate names in the country, and its scholarship programme extends that history into education, funding high-achieving Malaysian undergraduates with a package that stands comparison with the better-known bank foundations. The award typically covers tuition and study support for degrees at recognised local universities, with fields reflecting where an insurer builds its talent: actuarial science is the marquee track (and one of the few for which dedicated corporate funding exists in Malaysia at all), alongside finance, accounting, business, data science, IT and related disciplines. What separates insurer scholarships from generic corporate awards is the career geometry: actuarial students in particular should note that a funded degree plus a structured pathway into an actuarial team, with study support for professional exams afterwards, compresses what is otherwise one of the longest and most expensive qualification journeys in finance. Selection follows the familiar corporate pattern, strong SPM or pre-university results as the filter, then assessments and interviews weighing leadership and fit, and awards may carry service terms with the company, which given actuarial and finance graduate salaries is rarely the drawback it sounds. Applications open on the company's cycle through its official careers and foundation channels; the verified listing below tracks the current window. Students hunting actuarial funding specifically should read this page alongside our actuarial and insurance scholarship listings, because the handful of funders in this niche are best applied to as a set.",
    intro_bm: "Great Eastern telah menginsuranskan nyawa rakyat Malaysia lebih seabad, menjadikannya antara nama korporat tertua di negara ini, dan program biasiswanya melanjutkan sejarah itu ke pendidikan, membiayai prasiswazah Malaysia cemerlang dengan pakej yang setanding yayasan bank yang lebih dikenali. Anugerah ini biasanya menanggung yuran dan sokongan pengajian untuk ijazah di universiti tempatan yang diiktiraf, dengan bidang mencerminkan tempat penanggung insurans membina bakatnya: sains aktuari trek utama (dan antara yang sedikit di Malaysia dengan pembiayaan korporat khusus), di samping kewangan, perakaunan, perniagaan, sains data, IT dan disiplin berkaitan. Yang membezakan biasiswa penanggung insurans daripada anugerah korporat generik ialah geometri kerjaya: pelajar aktuari khususnya patut perhatikan bahawa ijazah dibiayai serta laluan berstruktur ke pasukan aktuari, dengan sokongan pengajian untuk peperiksaan profesional selepas itu, memendekkan salah satu perjalanan kelayakan paling panjang dan mahal dalam kewangan. Pemilihan mengikut corak korporat biasa, keputusan SPM atau pra-universiti kukuh sebagai tapisan, kemudian penilaian dan temuduga menimbang kepimpinan dan kesesuaian, dan anugerah mungkin membawa syarat perkhidmatan dengan syarikat, yang memandangkan gaji graduan aktuari dan kewangan jarang menjadi keburukan seperti bunyinya. Permohonan dibuka ikut kitaran syarikat melalui saluran kerjaya dan yayasan rasminya; senarai sah di bawah menjejak tetingkap semasa. Pelajar yang khusus mencari pembiayaan aktuari patut baca halaman ini bersama senarai biasiswa aktuari dan insurans kami, kerana penaja yang sedikit dalam niche ini paling baik dimohon sebagai satu set.",
    cta_en: "Check the Great Eastern listing",
    cta_bm: "Semak senarai Great Eastern"
  }
},

{
  slug: "biasiswa-imu-malaysia-2026",
  type: "scholarship",
  keywords: {
    primary: "IMU scholarship 2026",
    primary_bm: "biasiswa IMU 2026",
    longtail_en: ["International Medical University scholarship", "IMU merit scholarship medicine", "IMU need based bursary", "IMU pharmacy dentistry funding", "private medical university scholarship Malaysia"],
    longtail_bm: ["biasiswa international medical university", "biasiswa merit perubatan IMU", "bursari IMU keperluan", "pembiayaan farmasi pergigian IMU", "biasiswa universiti perubatan swasta"]
  },
  meta: {
    title: "Biasiswa IMU 2026 - Merit, Need-Based & Pembiayaan Perubatan | MyScholar",
    title_bm: "IMU Scholarships 2026 - Merit, Need-Based & Medical Funding | MyScholar",
    description: "IMU is Malaysia's oldest private medical university, and its scholarships include genuine need-based aid alongside merit awards. The funding structure for medicine, pharmacy and health degrees.",
    description_bm: "IMU universiti perubatan swasta tertua Malaysia, dan biasiswanya termasuk bantuan berasaskan keperluan tulen di samping anugerah merit. Struktur pembiayaan perubatan, farmasi dan ijazah kesihatan."
  },
  landing: {
    h1_en: "IMU Scholarships - Merit and Need-Based Funding for Health Degrees",
    h1_bm: "Biasiswa IMU - Pembiayaan Merit dan Keperluan untuk Ijazah Kesihatan",
    intro_en: "IMU (International Medical University) in Bukit Jalil holds a specific place in Malaysian medicine: the country's first private medical university, with decades of graduates through its medicine, dentistry, pharmacy and health sciences programmes and a partner-transfer model that has sent students on to universities across the UK, Ireland, Australia and beyond. Its funding structure deserves attention for one reason many students miss: alongside the expected merit scholarships, IMU runs genuine need-based support, and in private medicine that combination is rare. The merit layer rewards strong pre-university results (STPM, A-Level, matriculation, foundation and equivalents) with partial fee scholarships across its programmes, scaled by results and programme competitiveness. The need-based layer, which our database tracks as a distinct listing, directs support to capable students whose family finances would otherwise close the door on health degrees, with income documentation as part of the assessment; for families doing the brutal maths on private medicine, this is a route worth investigating properly rather than assuming defeat. Around IMU's own aid, the standard national stack applies (PTPTN up to programme limits, EPF education withdrawals, bank study loans, and for Indian Malaysian students the MIED route we cover on its own page), and IMU's local-partner pathway pricing differs meaningfully from the transfer tracks, so cost planning depends heavily on which route you choose. Practical advice: request the full multi-year cost for your specific track in writing, ask admissions directly about need-based aid rather than waiting for it to be offered, and apply for the national layers on their own deadlines in parallel.",
    intro_bm: "IMU (International Medical University) di Bukit Jalil memegang tempat khusus dalam perubatan Malaysia: universiti perubatan swasta pertama negara, dengan berdekad graduan melalui program perubatan, pergigian, farmasi dan sains kesihatannya serta model pindahan rakan yang menghantar pelajar ke universiti di UK, Ireland, Australia dan seterusnya. Struktur pembiayaannya wajar diberi perhatian atas satu sebab yang ramai pelajar terlepas: di samping biasiswa merit yang dijangka, IMU menjalankan sokongan berasaskan keperluan yang tulen, dan dalam perubatan swasta gabungan itu jarang. Lapisan merit memberi ganjaran keputusan pra-universiti kukuh (STPM, A-Level, matrikulasi, asasi dan setara) dengan biasiswa yuran separa merentas programnya, berskala ikut keputusan dan persaingan program. Lapisan keperluan, yang pangkalan data kami jejak sebagai senarai berasingan, menyalurkan sokongan kepada pelajar berkebolehan yang kewangan keluarganya akan menutup pintu ijazah kesihatan, dengan dokumentasi pendapatan sebahagian daripada penilaian; untuk keluarga yang mengira matematik kejam perubatan swasta, ini laluan yang patut disiasat betul-betul dan bukan terus mengalah. Di sekeliling bantuan IMU sendiri, susunan nasional standard terpakai (PTPTN hingga had program, pengeluaran pendidikan KWSP, pinjaman pengajian bank, dan untuk pelajar India Malaysia laluan MIED yang kami liputi di halaman sendiri), dan harga laluan rakan tempatan IMU berbeza ketara daripada trek pindahan, jadi perancangan kos sangat bergantung pada laluan yang anda pilih. Nasihat praktikal: minta kos penuh berbilang tahun untuk trek spesifik anda secara bertulis, tanya kemasukan terus tentang bantuan keperluan dan jangan tunggu ia ditawarkan, dan mohon lapisan nasional ikut tarikh tutup masing-masing secara selari.",
    cta_en: "Check the IMU listings on MyScholar",
    cta_bm: "Semak senarai IMU di MyScholar"
  }
},

{
  slug: "biasiswa-huawei-google-teknologi-2026",
  type: "scholarship",
  keywords: {
    primary: "tech company scholarship Malaysia 2026",
    primary_bm: "biasiswa syarikat teknologi 2026",
    longtail_en: ["Huawei Seeds for the Future Malaysia", "Google career certificate scholarship", "tech scholarship Malaysia students", "ICT talent programme Malaysia", "technology company sponsorship 2026"],
    longtail_bm: ["huawei seeds for the future malaysia", "biasiswa sijil kerjaya google", "biasiswa teknologi pelajar malaysia", "program bakat ICT malaysia", "tajaan syarikat teknologi 2026"]
  },
  meta: {
    title: "Biasiswa & Program Teknologi 2026 - Huawei, Google & Syarikat Tech | MyScholar",
    title_bm: "Tech Company Scholarships 2026 - Huawei, Google & More | MyScholar",
    description: "Global tech companies fund Malaysian students differently: talent programmes, certificates and competitions more than classic scholarships. What Huawei, Google and others actually offer.",
    description_bm: "Syarikat teknologi global membiayai pelajar Malaysia dengan cara berbeza: program bakat, sijil dan pertandingan lebih daripada biasiswa klasik. Apa yang Huawei, Google dan lain-lain betul-betul tawarkan."
  },
  landing: {
    h1_en: "Tech Company Scholarships and Programmes in Malaysia",
    h1_bm: "Biasiswa dan Program Syarikat Teknologi di Malaysia",
    intro_en: "Students search for Huawei and Google scholarships expecting the classic model, full degree sponsorship with a bond, and mostly that is not how global tech companies operate in Malaysia, so this page explains what they actually offer, because some of it is more valuable than students assume. Huawei's flagship is Seeds for the Future, a talent programme for high-performing ICT undergraduates that combines technology bootcamps, exposure to 5G, cloud and AI work, and access to a global alumni network, alongside its ICT Academy certifications run with Malaysian universities and periodic scholarship collaborations with local institutions. Google's model runs through funded career certificates (data analytics, cybersecurity, UX, IT support) delivered with local partners and government agencies, developer student programmes on campuses, and competition tracks, credentials that hiring managers in Malaysian tech genuinely recognise and that cost students nothing when funded cohorts open. Around these two sit the wider tech-talent layer our directory tracks: telco and MNC programmes, cybersecurity certification sponsorships tied to national agencies, and cloud provider training credits that amount to funded qualifications. The strategic read for students: treat these as accelerators, not tuition. A funded certificate, a Seeds cohort or a developer programme costs weeks rather than years, signals initiative on a resume more loudly than most club positions, and often leads to the internships and referrals that decide graduate hiring. Pair them with the classic scholarship layer (JPA, corporate, university merit) for tuition, and use the tech programmes to build the skill evidence the degree alone does not provide.",
    intro_bm: "Pelajar mencari biasiswa Huawei dan Google dengan menjangkakan model klasik, tajaan ijazah penuh dengan ikatan, dan kebanyakannya bukan begitu cara syarikat teknologi global beroperasi di Malaysia, jadi halaman ini menerangkan apa yang mereka betul-betul tawarkan, kerana sebahagiannya lebih bernilai daripada yang pelajar sangka. Program utama Huawei ialah Seeds for the Future, program bakat untuk prasiswazah ICT cemerlang yang menggabungkan bootcamp teknologi, pendedahan kepada kerja 5G, cloud dan AI, serta akses rangkaian alumni global, di samping pensijilan ICT Academy yang dijalankan dengan universiti Malaysia dan kerjasama biasiswa berkala dengan institusi tempatan. Model Google berjalan melalui sijil kerjaya yang dibiayai (analitik data, cybersecurity, UX, sokongan IT) disampaikan dengan rakan tempatan dan agensi kerajaan, program pelajar developer di kampus, dan trek pertandingan, kredential yang pengurus pengambilan dalam teknologi Malaysia betul-betul iktiraf dan tidak menelan kos pelajar bila kohort dibiayai dibuka. Di sekeliling dua ini ada lapisan bakat teknologi lebih luas yang direktori kami jejak: program telco dan MNC, tajaan pensijilan cybersecurity berkait agensi kebangsaan, dan kredit latihan penyedia cloud yang menjadi kelayakan dibiayai. Bacaan strategik untuk pelajar: anggap semua ini sebagai pemecut, bukan yuran. Sijil dibiayai, kohort Seeds atau program developer menelan minggu bukan tahun, menonjolkan inisiatif dalam resume lebih kuat daripada kebanyakan jawatan kelab, dan kerap membawa kepada internship dan rujukan yang menentukan pengambilan graduan. Gandingkan dengan lapisan biasiswa klasik (JPA, korporat, merit universiti) untuk yuran, dan guna program teknologi untuk bina bukti kemahiran yang ijazah sahaja tidak beri.",
    cta_en: "Find technology scholarships",
    cta_bm: "Cari biasiswa teknologi"
  }
}
];
