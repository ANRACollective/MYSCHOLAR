/**
 * JACK Wave 18 - 2026-08-04
 * 24 entries across 4 pillars:
 * A. MyJourney career gaps (8) - ai-engineer, semiconductor, data-centre, cabin-crew, game-dev, speech-therapist, paramedic, content-creator
 * B. Singapore expansion Phase 1 (5) - SG hub, ASEAN scholarship, NUS/NTU, PSC, belajar-di-singapura
 * C. Search-gap pages (8) - radiography, TESL, tourism, culinary, UniKL/MIED, Manipal, AIMST, royal foundations
 * D. Seasonal Aug-Dec (3) - October deadlines, semester break internships, SPM leaver internships
 *
 * Slug collision check: all 24 clean vs manifest (528 entries as of 2026-08-04).
 */

module.exports = [
// ============================================================
// === A. MYJOURNEY CAREER GAPS (8) - cara-jadi pages =========
// ============================================================

{
  slug: "cara-jadi-jurutera-ai-malaysia",
  type: "journey", career_id: "ai-engineer",
  keywords: {
    primary: "how to become AI engineer Malaysia",
    primary_bm: "cara jadi jurutera AI malaysia",
    longtail_en: ["AI engineer salary Malaysia 2026", "machine learning engineer Malaysia", "AI degree Malaysia university", "AI Nation Malaysia jobs", "AI engineer without degree Malaysia"],
    longtail_bm: ["gaji jurutera AI malaysia", "kerjaya kecerdasan buatan malaysia", "belajar AI universiti malaysia", "jurusan AI lepasan SPM", "kerja AI malaysia 2026"]
  },
  meta: {
    title: "Cara Jadi Jurutera AI di Malaysia 2026 - Laluan, Gaji & Skil | MyJourney",
    title_bm: "How to Become an AI Engineer in Malaysia 2026 - Pathway, Salary & Skills | MyJourney",
    description: "AI engineering is one of the fastest growing careers in Malaysia, with starting pay around RM4,500 a month. Here is the degree pathway, the skills that matter, and who is hiring.",
    description_bm: "Kejuruteraan AI antara kerjaya paling pesat berkembang di Malaysia, gaji permulaan sekitar RM4,500 sebulan. Ini laluan ijazah, skil yang penting, dan siapa yang mengambil pekerja."
  },
  landing: {
    h1_en: "How to Become an AI Engineer in Malaysia",
    h1_bm: "Cara Jadi Jurutera AI di Malaysia",
    intro_en: "AI engineering has moved from a niche role to one of the most recruited tech jobs in Malaysia. The national AI agenda, the wave of data centres being built in Johor and Cyberjaya, and banks and GLCs building their own AI teams have all pushed demand well past supply. The usual pathway is a degree in computer science, data science, or AI itself. UM, USM, UTM and UKM all offer AI or data science programmes, and private universities like APU, MMU, Sunway and Taylor's have dedicated AI degrees. What employers actually test for is practical skill: Python, machine learning frameworks like PyTorch or TensorFlow, and evidence you have built something real, whether a final year project, a Kaggle profile, or a working model deployed somewhere. Starting pay for fresh graduates is around RM4,500 a month, and engineers with two to three years of experience in Kuala Lumpur or Penang regularly cross RM8,000. A formal AI degree is the smoothest route, but a strong maths or engineering graduate who self-learns the ML stack and can show projects is hired all the time. Scholarships for computer science and data science count toward this path, and several GLC scholarships now name AI and data as priority fields.",
    intro_bm: "Kejuruteraan AI sudah menjadi antara kerja teknologi paling banyak diambil di Malaysia. Agenda AI negara, pembinaan pusat data secara besar-besaran di Johor dan Cyberjaya, serta bank dan GLC yang membina pasukan AI sendiri menyebabkan permintaan jauh melebihi bekalan. Laluan biasa ialah ijazah sains komputer, sains data, atau AI sendiri. UM, USM, UTM dan UKM semua ada program AI atau sains data, dan universiti swasta seperti APU, MMU, Sunway dan Taylor's ada ijazah AI khusus. Apa yang majikan uji sebenarnya ialah skil praktikal: Python, rangka kerja machine learning seperti PyTorch atau TensorFlow, dan bukti anda pernah bina sesuatu yang berfungsi, sama ada projek tahun akhir, profil Kaggle, atau model yang sudah digunakan. Gaji permulaan graduan baru sekitar RM4,500 sebulan, dan jurutera dengan dua hingga tiga tahun pengalaman di KL atau Pulau Pinang selalu melepasi RM8,000. Ijazah AI formal ialah laluan paling lancar, tetapi graduan matematik atau kejuruteraan yang belajar sendiri stack ML dan boleh tunjuk projek turut diambil bekerja. Biasiswa sains komputer dan sains data sah untuk laluan ini, dan beberapa biasiswa GLC kini menyenaraikan AI dan data sebagai bidang keutamaan.",
    cta_en: "See the full AI engineer career path",
    cta_bm: "Lihat laluan kerjaya jurutera AI"
  }
},

{
  slug: "cara-jadi-jurutera-semikonduktor-malaysia",
  type: "journey", career_id: "semiconductor-engineer",
  keywords: {
    primary: "how to become semiconductor engineer Malaysia",
    primary_bm: "cara jadi jurutera semikonduktor malaysia",
    longtail_en: ["semiconductor engineer salary Malaysia", "semiconductor jobs Penang 2026", "E&E degree semiconductor Malaysia", "Intel Infineon Micron careers Malaysia", "National Semiconductor Strategy jobs"],
    longtail_bm: ["gaji jurutera semikonduktor malaysia", "kerja semikonduktor pulau pinang", "ijazah elektrik elektronik semikonduktor", "kerjaya cip malaysia", "peluang kerja semikonduktor kulim"]
  },
  meta: {
    title: "Cara Jadi Jurutera Semikonduktor di Malaysia 2026 - Penang, Kulim & Gaji | MyJourney",
    title_bm: "How to Become a Semiconductor Engineer in Malaysia 2026 - Penang, Kulim & Salary | MyJourney",
    description: "Malaysia packages and tests a big share of the world's chips, and Penang is hiring aggressively. The degree route, what fabs and OSAT plants look for, and realistic starting pay around RM3,800.",
    description_bm: "Malaysia menguji dan memasang sebahagian besar cip dunia, dan Pulau Pinang sedang giat mengambil pekerja. Laluan ijazah, apa yang kilang cari, dan gaji permulaan realistik sekitar RM3,800."
  },
  landing: {
    h1_en: "How to Become a Semiconductor Engineer in Malaysia",
    h1_bm: "Cara Jadi Jurutera Semikonduktor di Malaysia",
    intro_en: "Semiconductors are Malaysia's biggest export industry, and the stretch from Bayan Lepas in Penang to Kulim Hi-Tech Park in Kedah is one of the densest chip manufacturing corridors in the world. Intel, Infineon, Micron, AMD, Bosch, ASE and dozens of local suppliers run wafer fabs, assembly and test plants there, and the National Semiconductor Strategy has pushed new investment into IC design as well, which is opening design centre roles in Penang, KL and Selangor that did not exist five years ago. The standard entry route is a degree in electrical and electronic engineering, mechatronics, or physics. USM in Penang feeds the industry directly, and UTM, UniMAP, MMU and UTAR graduates are heavily recruited too. Process, equipment, product, test and quality engineer roles start around RM3,800 a month for fresh graduates, with night shift and site allowances often pushing first year income higher. IC design pays the most, RM6,000 and above for those who master chip design tools during their degree. Diploma and TVET holders enter as technicians around RM2,500 and can work up. JPA, Yayasan Khazanah and several corporate scholarships name E&E as a priority field, and the big Penang employers run their own sponsorship and internship pipelines.",
    intro_bm: "Semikonduktor ialah industri eksport terbesar Malaysia, dan kawasan dari Bayan Lepas di Pulau Pinang hingga Kulim Hi-Tech Park di Kedah antara koridor pembuatan cip paling padat di dunia. Intel, Infineon, Micron, AMD, Bosch, ASE dan puluhan pembekal tempatan beroperasi di situ, dan Strategi Semikonduktor Negara membawa pelaburan baru dalam reka bentuk IC, membuka peluang kerja design centre di Pulau Pinang, KL dan Selangor yang tidak wujud lima tahun lalu. Laluan masuk biasa ialah ijazah kejuruteraan elektrik dan elektronik, mekatronik, atau fizik. Graduan USM di Pulau Pinang masuk terus ke industri ini, dan graduan UTM, UniMAP, MMU dan UTAR juga banyak diambil. Jawatan jurutera proses, peralatan, produk, ujian dan kualiti bermula sekitar RM3,800 sebulan untuk graduan baru, dengan elaun syif malam dan tapak selalu menaikkan pendapatan tahun pertama. Reka bentuk IC bayar paling tinggi, RM6,000 ke atas untuk yang mahir alat reka bentuk cip semasa belajar. Pemegang diploma dan TVET masuk sebagai juruteknik sekitar RM2,500 dan boleh naik. JPA, Yayasan Khazanah dan beberapa biasiswa korporat menyenaraikan E&E sebagai bidang keutamaan, dan majikan besar Pulau Pinang ada saluran tajaan dan internship sendiri.",
    cta_en: "See the full semiconductor career path",
    cta_bm: "Lihat laluan kerjaya semikonduktor"
  }
},

{
  slug: "cara-jadi-jurutera-pusat-data-malaysia",
  type: "journey", career_id: "data-centre-engineer",
  keywords: {
    primary: "how to become data centre engineer Malaysia",
    primary_bm: "cara jadi jurutera pusat data malaysia",
    longtail_en: ["data centre jobs Johor 2026", "data center engineer salary Malaysia", "hyperscaler jobs Malaysia", "data centre technician Malaysia", "electrical engineer data centre career"],
    longtail_bm: ["kerja pusat data johor", "gaji jurutera pusat data malaysia", "kerjaya data centre cyberjaya", "juruteknik pusat data malaysia", "peluang kerja pusat data sedenak"]
  },
  meta: {
    title: "Cara Jadi Jurutera Pusat Data di Malaysia 2026 - Johor Boom & Gaji | MyJourney",
    title_bm: "How to Become a Data Centre Engineer in Malaysia 2026 - Johor Boom & Salary | MyJourney",
    description: "Billions in data centre investment are landing in Johor and Cyberjaya, and there are not enough engineers to run them. The pathway in, from electrical and mechanical degrees to critical facility roles.",
    description_bm: "Pelaburan pusat data bernilai berbilion sedang masuk ke Johor dan Cyberjaya, dan jurutera tidak cukup untuk mengendalikannya. Ini laluan masuk, dari ijazah elektrik dan mekanikal ke peranan fasiliti kritikal."
  },
  landing: {
    h1_en: "How to Become a Data Centre Engineer in Malaysia",
    h1_bm: "Cara Jadi Jurutera Pusat Data di Malaysia",
    intro_en: "Malaysia is in the middle of a data centre construction boom that has few parallels anywhere. Johor, especially the Sedenak and Kulai corridor, has become one of the fastest growing data centre markets in the world, with hyperscalers and operators like Microsoft, Google, AWS, ByteDance, YTL and Bridge building or running campuses, alongside the established cluster in Cyberjaya. Every one of those facilities needs critical facility engineers and technicians around the clock, and operators openly say talent is their biggest constraint. The natural entry route is a degree in electrical or mechanical engineering, since the job is fundamentally about power systems, cooling, and uptime. Fresh graduates come in as facility or operations engineers around RM3,500 a month, and because sites run 24/7, shift allowances lift real income above that. Diploma and TVET holders in electrical, HVAC or chiller work enter as technicians and are in serious demand. Progression is fast for people who collect certifications like a chargeman ticket. This is also a career where being from Johor is suddenly an advantage: the jobs are landing there, not just in KL.",
    intro_bm: "Malaysia sedang melalui ledakan pembinaan pusat data yang jarang ada tandingan. Johor, khususnya koridor Sedenak dan Kulai, kini antara pasaran pusat data paling pesat berkembang di dunia, dengan syarikat seperti Microsoft, Google, AWS, ByteDance, YTL dan Bridge membina atau mengendalikan kampus, di samping kluster sedia ada di Cyberjaya. Setiap fasiliti perlukan jurutera dan juruteknik fasiliti kritikal sepanjang masa, dan pengendali sendiri mengakui kekurangan tenaga kerja ialah kekangan terbesar mereka. Laluan masuk semula jadi ialah ijazah kejuruteraan elektrik atau mekanikal, kerana kerja ini asasnya tentang sistem kuasa, penyejukan, dan uptime. Graduan baru masuk sebagai jurutera fasiliti atau operasi sekitar RM3,500 sebulan, dan kerana tapak beroperasi 24/7, elaun syif menaikkan pendapatan sebenar. Pemegang diploma dan TVET dalam bidang elektrik, HVAC atau chiller masuk sebagai juruteknik dan sangat diperlukan. Kenaikan pangkat cepat untuk mereka yang kumpul sijil seperti chargeman. Ini juga kerjaya di mana berasal dari Johor tiba-tiba jadi kelebihan: kerja-kerja ini mendarat di sana, bukan hanya di KL.",
    cta_en: "See the full data centre career path",
    cta_bm: "Lihat laluan kerjaya pusat data"
  }
},

{
  slug: "cara-jadi-pramugari-pramugara-malaysia",
  type: "journey", career_id: "cabin-crew",
  keywords: {
    primary: "how to become cabin crew Malaysia",
    primary_bm: "cara jadi pramugari malaysia",
    longtail_en: ["cabin crew requirements Malaysia SPM", "AirAsia cabin crew interview 2026", "Malaysia Airlines flight attendant salary", "cabin crew height requirement Malaysia", "pramugara requirements Malaysia"],
    longtail_bm: ["syarat jadi pramugari SPM", "temuduga pramugari AirAsia 2026", "gaji pramugari MAS", "syarat tinggi pramugari malaysia", "cara mohon pramugara batik air"]
  },
  meta: {
    title: "Cara Jadi Pramugari & Pramugara di Malaysia 2026 - Syarat, Gaji & Temuduga | MyJourney",
    title_bm: "How to Become Cabin Crew in Malaysia 2026 - Requirements, Salary & Interview | MyJourney",
    description: "SPM credits, English, minimum height and a swim test. What Malaysia Airlines, AirAsia and Batik Air really require, what the walk-in interview is like, and what cabin crew actually earn.",
    description_bm: "Kredit SPM, Bahasa Inggeris, syarat ketinggian dan ujian renang. Apa yang MAS, AirAsia dan Batik Air betul-betul perlukan, macam mana temuduga walk-in, dan berapa gaji sebenar pramugari."
  },
  landing: {
    h1_en: "How to Become Cabin Crew in Malaysia",
    h1_bm: "Cara Jadi Pramugari atau Pramugara di Malaysia",
    intro_en: "Cabin crew is one of the few careers in Malaysia where you can start flying internationally with an SPM certificate, and competition for every intake is intense. The core requirements across Malaysia Airlines, AirAsia and Batik Air are similar: minimum age 18, SPM with credits that must include English, confident spoken English, a minimum height requirement (commonly around 157cm for women and 165cm for men, checked with an arm reach test), good eyesight with or without correction, a clean complexion for visible areas in uniform, and the ability to swim. Recruitment usually happens through walk-in interview days announced on airline careers pages and social media. The day typically involves grooming checks, height and reach measurement, group activities and an English conversation stage. Basic salary for new crew is modest, often around RM1,500 to RM2,000, but flight and layover allowances change the picture: active crew commonly take home RM3,500 to RM5,000 a month, more on international routes. Training is paid and takes a few months, covering safety, first aid and service. It is a genuine career track too: senior crew, leading stewardess and inflight supervisor roles carry real pay bumps, and many crew later move into ground operations or training roles.",
    intro_bm: "Pramugari ialah antara kerjaya di Malaysia yang boleh bermula terbang ke luar negara dengan kelayakan SPM sahaja, dan persaingan setiap pengambilan sangat sengit. Syarat asas MAS, AirAsia dan Batik Air lebih kurang sama: umur minimum 18 tahun, SPM dengan kredit termasuk Bahasa Inggeris, boleh bertutur Bahasa Inggeris dengan yakin, syarat ketinggian minimum (biasanya sekitar 157cm untuk wanita dan 165cm untuk lelaki, disemak dengan ujian capaian tangan), penglihatan baik, kulit bersih pada bahagian yang nampak dalam uniform, dan mesti boleh berenang. Pengambilan biasanya melalui sesi temuduga walk-in yang diumumkan di laman kerjaya syarikat penerbangan dan media sosial. Hari temuduga biasanya ada semakan penampilan, ukur ketinggian dan capaian, aktiviti berkumpulan dan sesi perbualan Bahasa Inggeris. Gaji pokok kru baru memang rendah, sekitar RM1,500 hingga RM2,000, tetapi elaun penerbangan dan layover mengubah keadaan: kru aktif biasanya bawa balik RM3,500 hingga RM5,000 sebulan, lebih tinggi untuk laluan antarabangsa. Latihan dibayar dan mengambil masa beberapa bulan, meliputi keselamatan, bantuan kecemasan dan servis. Ia laluan kerjaya sebenar: jawatan kru kanan dan penyelia penerbangan bawa kenaikan gaji, dan ramai kru kemudian beralih ke operasi darat atau latihan.",
    cta_en: "See the full cabin crew career path",
    cta_bm: "Lihat laluan kerjaya pramugari"
  }
},

{
  slug: "cara-jadi-game-developer-malaysia",
  type: "journey", career_id: "game-developer",
  keywords: {
    primary: "how to become game developer Malaysia",
    primary_bm: "cara jadi game developer malaysia",
    longtail_en: ["game developer salary Malaysia", "game design course Malaysia", "game studio jobs Malaysia", "Unity Unreal developer Malaysia", "game development degree Malaysia"],
    longtail_bm: ["gaji game developer malaysia", "kursus game design malaysia", "kerja studio game malaysia", "belajar buat game malaysia", "ijazah game development malaysia"]
  },
  meta: {
    title: "Cara Jadi Game Developer di Malaysia 2026 - Studio, Skil & Gaji | MyJourney",
    title_bm: "How to Become a Game Developer in Malaysia 2026 - Studios, Skills & Salary | MyJourney",
    description: "Malaysian studios ship art and code for some of the biggest games in the world. The real paths in: game dev degrees, portfolio-first self learning, and what studios in KL actually pay.",
    description_bm: "Studio Malaysia menghasilkan seni dan kod untuk sebahagian game terbesar dunia. Laluan sebenar: ijazah game dev, belajar sendiri dengan portfolio, dan gaji sebenar studio di KL."
  },
  landing: {
    h1_en: "How to Become a Game Developer in Malaysia",
    h1_bm: "Cara Jadi Game Developer di Malaysia",
    intro_en: "Malaysia has a real games industry, not just a dream of one. Studios like Lemon Sky, Passion Republic and Streamline have worked on major international titles, Metronomik proved a Malaysian original can ship worldwide, and MDEC's LEVEL UP KL conference has made KL a recognised meeting point for the Southeast Asian games business. Jobs split into three broad tracks: programming (Unity, Unreal, C++ and C#), art (3D modelling, animation, concept art), and design or production. The programming track usually starts from a computer science or software engineering degree, while dedicated game development programmes exist at APU, KDU (UOW Malaysia), MMU and The One Academy. But this is a portfolio industry before it is a certificate industry: a playable demo, a polished art reel or shipped mods count more than grades in interviews. Starting pay is around RM2,800 a month at local studios, lower than generic software jobs, which is the honest trade-off for working on games. Experienced developers and artists at outsourcing studios serving AAA clients earn considerably more, and remote work for overseas studios has become a real option for senior people. If you want this path, start building something small and finish it. A finished bad game teaches more than an unfinished ambitious one.",
    intro_bm: "Malaysia ada industri game yang sebenar, bukan sekadar angan-angan. Studio seperti Lemon Sky, Passion Republic dan Streamline pernah bekerja pada judul antarabangsa terkenal, Metronomik membuktikan game asli Malaysia boleh dijual ke seluruh dunia, dan persidangan LEVEL UP KL anjuran MDEC menjadikan KL tempat pertemuan industri game Asia Tenggara. Kerja terbahagi kepada tiga laluan besar: pengaturcaraan (Unity, Unreal, C++ dan C#), seni (model 3D, animasi, concept art), dan reka bentuk atau produksi. Laluan pengaturcaraan biasanya bermula dari ijazah sains komputer atau kejuruteraan perisian, manakala program khusus game development ada di APU, KDU (UOW Malaysia), MMU dan The One Academy. Tetapi industri ini pentingkan portfolio lebih daripada sijil: demo yang boleh dimain, art reel yang kemas atau mod yang siap lebih bernilai daripada gred dalam temuduga. Gaji permulaan sekitar RM2,800 sebulan di studio tempatan, lebih rendah daripada kerja perisian biasa, itulah tukaran jujur untuk bekerja dalam bidang game. Pembangun dan artis berpengalaman di studio outsourcing yang melayan klien AAA dapat jauh lebih tinggi, dan kerja remote untuk studio luar negara kini pilihan sebenar bagi yang senior. Kalau nak laluan ini, mula bina sesuatu yang kecil dan siapkan. Game kecil yang siap mengajar lebih banyak daripada game besar yang tergantung.",
    cta_en: "See the full game developer career path",
    cta_bm: "Lihat laluan kerjaya game developer"
  }
},

{
  slug: "cara-jadi-terapis-pertuturan-malaysia",
  type: "journey", career_id: "speech-therapist",
  keywords: {
    primary: "how to become speech therapist Malaysia",
    primary_bm: "cara jadi terapis pertuturan malaysia",
    longtail_en: ["speech therapy degree Malaysia", "speech language pathologist salary Malaysia", "speech therapist demand Malaysia", "audiology speech science UKM IIUM", "speech therapy course requirements Malaysia"],
    longtail_bm: ["ijazah terapi pertuturan malaysia", "gaji terapis pertuturan malaysia", "kerjaya patologi pertuturan bahasa", "belajar terapi pertuturan di mana", "syarat kemasukan terapi pertuturan"]
  },
  meta: {
    title: "Cara Jadi Terapis Pertuturan di Malaysia 2026 - Ijazah, Gaji & Permintaan | MyJourney",
    title_bm: "How to Become a Speech Therapist in Malaysia 2026 - Degree, Salary & Demand | MyJourney",
    description: "Malaysia has far fewer speech therapists than it needs, and only a handful of universities train them. The entry route, where to study, and why demand keeps rising.",
    description_bm: "Malaysia jauh kekurangan terapis pertuturan berbanding keperluan, dan hanya beberapa universiti melatihnya. Laluan masuk, tempat belajar, dan kenapa permintaan terus naik."
  },
  landing: {
    h1_en: "How to Become a Speech Therapist in Malaysia",
    h1_bm: "Cara Jadi Terapis Pertuturan di Malaysia",
    intro_en: "Speech-language therapy is one of the most undersupplied healthcare professions in Malaysia. Therapists work with children with speech delays and autism, stroke survivors relearning language, patients with swallowing disorders, and the deaf and hard of hearing community, and there are only a few hundred qualified practitioners serving the whole country. The reason is simple: very few universities offer the degree. UKM pioneered the Speech Sciences programme at its Kuala Lumpur health campus, IIUM offers Audiology and Speech-Language Pathology in Kuantan, and a small number of private institutions have begun adding programmes. Entry is competitive and usually requires a strong STPM, matriculation or foundation result in the science stream, plus an interview: this is a talking profession and communication skills are assessed early. The degree takes four years including heavy clinical placement hours. Graduates start around RM2,800 a month in government hospitals under the KKM allied health scheme, while private practice and early intervention centres in the Klang Valley pay more and are expanding fast because waiting lists everywhere are long. Because school-age speech therapy is often paid for by parents directly, experienced therapists who open their own practice have real earning power. If you want healthcare work that is personal, scarce and genuinely needed, this is one of the strongest bets in Malaysia.",
    intro_bm: "Terapi pertuturan ialah antara profesion kesihatan paling kekurangan tenaga di Malaysia. Terapis bekerja dengan kanak-kanak lewat bercakap dan autisme, pesakit strok yang belajar semula berbahasa, pesakit masalah menelan, serta komuniti pekak dan kurang pendengaran, dan hanya beberapa ratus pengamal bertauliah melayan seluruh negara. Sebabnya mudah: sangat sedikit universiti menawarkan ijazah ini. UKM memelopori program Sains Pertuturan di kampus kesihatannya di Kuala Lumpur, IIUM menawarkan Audiologi dan Patologi Pertuturan-Bahasa di Kuantan, dan beberapa institusi swasta baru mula menambah program. Kemasukan kompetitif dan biasanya perlukan keputusan STPM, matrikulasi atau asasi aliran sains yang kukuh, serta temuduga: ini profesion bercakap dan kemahiran komunikasi dinilai awal. Ijazah mengambil masa empat tahun termasuk jam penempatan klinikal yang banyak. Graduan bermula sekitar RM2,800 sebulan di hospital kerajaan bawah skim kesihatan bersekutu KKM, manakala amalan swasta dan pusat intervensi awal di Lembah Klang bayar lebih tinggi dan berkembang pesat kerana senarai menunggu di mana-mana panjang. Oleh sebab terapi pertuturan kanak-kanak selalu dibayar terus oleh ibu bapa, terapis berpengalaman yang buka klinik sendiri ada kuasa pendapatan sebenar. Kalau anda mahu kerja kesihatan yang peribadi, jarang dan betul-betul diperlukan, ini antara pilihan paling kukuh di Malaysia.",
    cta_en: "See the full speech therapist career path",
    cta_bm: "Lihat laluan kerjaya terapis pertuturan"
  }
},

{
  slug: "cara-jadi-paramedik-malaysia",
  type: "journey", career_id: "paramedic",
  keywords: {
    primary: "how to become paramedic Malaysia",
    primary_bm: "cara jadi paramedik malaysia",
    longtail_en: ["paramedic course Malaysia", "penolong pegawai perubatan pathway", "emergency medical services diploma Malaysia", "paramedic salary Malaysia KKM", "ambulance paramedic requirements Malaysia"],
    longtail_bm: ["kursus paramedik malaysia", "diploma perubatan kecemasan", "gaji paramedik kkm", "syarat jadi paramedik lepasan spm", "penolong pegawai perubatan u29"]
  },
  meta: {
    title: "Cara Jadi Paramedik di Malaysia 2026 - Kursus, Syarat & Gaji | MyJourney",
    title_bm: "How to Become a Paramedic in Malaysia 2026 - Courses, Requirements & Salary | MyJourney",
    description: "Frontline emergency care in Malaysia runs on paramedics and assistant medical officers. The diploma routes in, SPM requirements, and what the job actually pays in government and private service.",
    description_bm: "Rawatan kecemasan barisan hadapan Malaysia bergantung pada paramedik dan penolong pegawai perubatan. Laluan diploma, syarat SPM, dan gaji sebenar dalam perkhidmatan kerajaan dan swasta."
  },
  landing: {
    h1_en: "How to Become a Paramedic in Malaysia",
    h1_bm: "Cara Jadi Paramedik di Malaysia",
    intro_en: "In Malaysia the ambulance and emergency frontline is mostly staffed by Penolong Pegawai Perubatan (assistant medical officers) and emergency medical services personnel, which is what most people mean when they say paramedic. The main government route is the Diploma Pembantu Perubatan offered through KKM training institutions (ILKKM), where selected SPM leavers train with an allowance and are absorbed into service on grade U29 after graduating. Entry needs SPM credits including Bahasa Melayu, mathematics and science subjects, plus physical fitness, and competition for ILKKM places is heavy because training is effectively sponsored. Private and university routes also exist: several institutions offer diplomas and degrees in emergency medical services and paramedic sciences, which lead to hospital emergency departments, private ambulance operators, oil and gas medic roles, and event medical coverage. Government starting pay on U29 lands around RM2,200 to RM2,800 with on-call and shift allowances on top, and industrial medic postings, especially offshore, pay substantially more. The work is physically and emotionally demanding, involves shifts and real emergencies from day one, and suits people who stay calm under pressure. For SPM leavers who want a healthcare career without the long medical degree road, this is one of the most direct and secure routes in.",
    intro_bm: "Di Malaysia, barisan hadapan ambulans dan kecemasan kebanyakannya dianggotai Penolong Pegawai Perubatan dan anggota perkhidmatan perubatan kecemasan, itulah yang biasanya dimaksudkan bila sebut paramedik. Laluan kerajaan utama ialah Diploma Pembantu Perubatan melalui institusi latihan KKM (ILKKM), di mana lepasan SPM terpilih dilatih dengan elaun dan diserap ke perkhidmatan gred U29 selepas tamat. Kemasukan perlukan kredit SPM termasuk Bahasa Melayu, matematik dan subjek sains, serta kecergasan fizikal, dan persaingan tempat ILKKM sengit kerana latihan sebenarnya ditaja. Laluan swasta dan universiti juga ada: beberapa institusi menawarkan diploma dan ijazah perkhidmatan perubatan kecemasan dan sains paramedik, membawa ke jabatan kecemasan hospital, pengendali ambulans swasta, medik minyak dan gas, dan liputan perubatan acara. Gaji permulaan kerajaan gred U29 sekitar RM2,200 hingga RM2,800 dengan elaun panggilan dan syif, dan penempatan medik industri, terutama luar pesisir, bayar jauh lebih tinggi. Kerja ini mencabar dari segi fizikal dan emosi, melibatkan syif dan kecemasan sebenar dari hari pertama, dan sesuai untuk orang yang tenang bawah tekanan. Untuk lepasan SPM yang mahu kerjaya kesihatan tanpa laluan panjang ijazah perubatan, ini antara jalan paling terus dan terjamin.",
    cta_en: "See the full paramedic career path",
    cta_bm: "Lihat laluan kerjaya paramedik"
  }
},

{
  slug: "cara-jadi-content-creator-malaysia",
  type: "journey", career_id: "content-creator",
  keywords: {
    primary: "how to become content creator Malaysia",
    primary_bm: "cara jadi content creator malaysia",
    longtail_en: ["content creator income Malaysia", "TikTok creator Malaysia earnings", "full time content creator Malaysia", "content creator career path", "brand deals Malaysia influencer"],
    longtail_bm: ["pendapatan content creator malaysia", "gaji tiktoker malaysia", "content creator sepenuh masa", "cara dapat brand deal malaysia", "kerjaya media sosial malaysia"]
  },
  meta: {
    title: "Cara Jadi Content Creator di Malaysia 2026 - Pendapatan Sebenar & Laluan | MyJourney",
    title_bm: "How to Become a Content Creator in Malaysia 2026 - Real Income & Pathway | MyJourney",
    description: "What content creation in Malaysia actually pays, how monetisation works on TikTok and YouTube, and the honest odds. Written for students thinking about it seriously, not selling a dream.",
    description_bm: "Berapa sebenarnya pendapatan content creator di Malaysia, cara monetisasi TikTok dan YouTube berfungsi, dan peluang sebenar. Ditulis untuk pelajar yang serius, bukan menjual angan-angan."
  },
  landing: {
    h1_en: "How to Become a Content Creator in Malaysia",
    h1_bm: "Cara Jadi Content Creator di Malaysia",
    intro_en: "Content creation is a real career in Malaysia now, but the honest version of this page matters more than the hype version. Income comes from several streams: brand deals and sponsored posts (the biggest earner for most Malaysian creators), TikTok and YouTube monetisation programmes, affiliate commissions especially through TikTok Shop and Shopee, live streaming gifts, and selling your own products or services. The numbers are wildly uneven. A nano creator with ten thousand followers might get RM300 to RM800 per sponsored post, mid-tier creators can charge a few thousand, and the top names earn more per video than most salaries. But the median part-time creator earns closer to RM1,500 a month, which is why most successful Malaysian creators treated it as a side income for one to two years before going full time. No degree is required, though mass communication, film and marketing courses teach useful production and strategy skills, and many creators come out of those programmes. What actually predicts success: posting consistently for months before results, picking a niche you can sustain, learning basic editing (CapCut is the standard entry tool), understanding what brands need, and treating it as a small business with invoices and rate cards rather than a lottery ticket. Start while studying, keep your costs at zero, and let the numbers tell you when it deserves more of your time.",
    intro_bm: "Content creation memang kerjaya sebenar di Malaysia sekarang, tetapi versi jujur halaman ini lebih penting daripada versi hype. Pendapatan datang dari beberapa sumber: brand deal dan post tajaan (pendapatan terbesar kebanyakan creator Malaysia), program monetisasi TikTok dan YouTube, komisen affiliate terutama melalui TikTok Shop dan Shopee, hadiah live streaming, dan jualan produk atau servis sendiri. Angkanya sangat tidak sekata. Creator nano dengan sepuluh ribu follower mungkin dapat RM300 hingga RM800 satu post tajaan, creator pertengahan boleh caj beberapa ribu, dan nama besar dapat lebih daripada gaji biasa untuk satu video. Tetapi purata creator sambilan dapat sekitar RM1,500 sebulan, sebab itu kebanyakan creator Malaysia yang berjaya jadikannya pendapatan sampingan selama setahun dua sebelum berhenti kerja. Ijazah tidak wajib, walaupun kursus komunikasi massa, filem dan pemasaran mengajar kemahiran produksi dan strategi yang berguna, dan ramai creator datang dari program itu. Apa yang betul-betul menentukan kejayaan: konsisten posting berbulan-bulan sebelum nampak hasil, pilih niche yang boleh bertahan, belajar editing asas (CapCut ialah alat permulaan standard), faham apa yang jenama perlukan, dan anggap ia perniagaan kecil dengan invois dan rate card, bukan tiket loteri. Mula semasa belajar, pastikan kos sifar, dan biar angka beritahu bila ia layak dapat lebih masa anda.",
    cta_en: "See the full content creator career path",
    cta_bm: "Lihat laluan kerjaya content creator"
  }
},
// ============================================================
// === B. SINGAPORE EXPANSION (5) - Phase 1 SEO hub ===========
// ============================================================

{
  slug: "biasiswa-singapura-2026",
  type: "scholarship",
  keywords: {
    primary: "Singapore scholarship 2026",
    primary_bm: "biasiswa singapura 2026",
    longtail_en: ["Singapore scholarships for Malaysians", "study in Singapore scholarship 2026", "Singapore government scholarship list", "PSC scholarship Singapore", "fully funded scholarship Singapore university"],
    longtail_bm: ["biasiswa belajar di singapura", "biasiswa kerajaan singapura", "senarai biasiswa singapura 2026", "biasiswa universiti singapura untuk pelajar malaysia", "biasiswa penuh singapura"]
  },
  meta: {
    title: "Singapore Scholarships 2026 - Full List for Malaysians & Singaporeans | MyScholar",
    title_bm: "Biasiswa Singapura 2026 - Senarai Penuh | MyScholar",
    description: "Every major Singapore scholarship in one place: ASEAN Scholarship and university awards for Malaysians, plus the PSC and government cluster for Singaporeans. Verified links, no paywall.",
    description_bm: "Semua biasiswa utama Singapura di satu tempat: Biasiswa ASEAN dan anugerah universiti untuk pelajar Malaysia, serta PSC dan kluster kerajaan untuk warga Singapura. Pautan sah, percuma."
  },
  landing: {
    h1_en: "Singapore Scholarships 2026 - The Full List",
    h1_bm: "Biasiswa Singapura 2026 - Senarai Penuh",
    intro_en: "Singapore runs one of the most generous and most competitive scholarship systems in the world, and it matters to two groups of students we serve. For Malaysians, the headline routes are the ASEAN Scholarship from Singapore's Ministry of Education, which fully funds secondary and pre-university study in Singapore with no bond, the ASEAN Undergraduate Scholarship at NUS and NTU, and the MOE Tuition Grant, which cuts university fees dramatically in exchange for a three year work bond in Singapore. Thousands of Malaysians study across the causeway on these schemes, and for students from Johor especially, Singapore is often the nearest world-class option. For Singaporean students, the system centres on the Public Service Commission (PSC) scholarships and the government cluster around it: SAF and Home Team scholarships, MOE Teaching awards, A*STAR research scholarships, statutory board awards from MAS to LTA, and community funds like MENDAKI. MyScholar tracks both sides with verified official links, deadlines and bond conditions, the same way we have always covered Malaysian scholarships: free, no login, and honest about the trade-offs each award carries.",
    intro_bm: "Singapura menjalankan salah satu sistem biasiswa paling lumayan dan paling kompetitif di dunia, dan ia penting untuk dua kumpulan pelajar. Untuk pelajar Malaysia, laluan utama ialah Biasiswa ASEAN daripada Kementerian Pendidikan Singapura, yang membiayai penuh pengajian menengah dan pra-universiti di Singapura tanpa ikatan, ASEAN Undergraduate Scholarship di NUS dan NTU, serta MOE Tuition Grant yang memotong yuran universiti dengan banyak sebagai tukaran ikatan kerja tiga tahun di Singapura. Ribuan pelajar Malaysia belajar di seberang tambak melalui skim ini, dan untuk pelajar Johor khususnya, Singapura selalunya pilihan bertaraf dunia yang paling dekat. Untuk pelajar Singapura pula, sistemnya berpusat pada biasiswa Public Service Commission (PSC) dan kluster kerajaan sekelilingnya: biasiswa SAF dan Home Team, anugerah perguruan MOE, biasiswa penyelidikan A*STAR, anugerah badan berkanun dari MAS hingga LTA, dan dana komuniti seperti MENDAKI. MyScholar menjejak kedua-dua sisi dengan pautan rasmi yang disahkan, tarikh tutup dan syarat ikatan, sama seperti kami sentiasa liputi biasiswa Malaysia: percuma, tanpa login, dan jujur tentang tukaran setiap anugerah.",
    cta_en: "Browse Singapore scholarships",
    cta_bm: "Lihat biasiswa Singapura"
  }
},

{
  slug: "asean-scholarship-singapore-2026",
  type: "scholarship",
  keywords: {
    primary: "ASEAN scholarship Singapore 2026",
    primary_bm: "biasiswa ASEAN singapura 2026",
    longtail_en: ["ASEAN scholarship for Malaysians", "MOE Singapore ASEAN scholarship application", "ASEAN scholarship secondary school Singapore", "ASEAN undergraduate scholarship NUS NTU", "ASEAN scholarship selection test interview"],
    longtail_bm: ["biasiswa ASEAN untuk pelajar malaysia", "cara mohon biasiswa ASEAN singapura", "biasiswa sekolah menengah singapura", "biasiswa ASEAN NUS NTU", "ujian pemilihan biasiswa ASEAN"]
  },
  meta: {
    title: "ASEAN Scholarship Singapore 2026 for Malaysians - How to Apply | MyScholar",
    title_bm: "Biasiswa ASEAN Singapura 2026 untuk Pelajar Malaysia | MyScholar",
    description: "Singapore MOE's ASEAN Scholarship fully funds Malaysian students through secondary school and pre-university in Singapore, with no bond. Eligibility, the selection test, and how to apply.",
    description_bm: "Biasiswa ASEAN MOE Singapura membiayai penuh pelajar Malaysia di sekolah menengah dan pra-universiti Singapura, tanpa ikatan. Kelayakan, ujian pemilihan, dan cara memohon."
  },
  landing: {
    h1_en: "ASEAN Scholarship Singapore 2026 - The Full Guide for Malaysians",
    h1_bm: "Biasiswa ASEAN Singapura 2026 - Panduan Penuh untuk Pelajar Malaysia",
    intro_en: "The ASEAN Scholarship is Singapore's flagship offer to Malaysian students, run directly by Singapore's Ministry of Education. It covers school fees, a living allowance, hostel accommodation and return airfare for study at Singapore secondary schools and junior colleges, leading to the Singapore-Cambridge GCE O and A Levels. The part that surprises most families: there is no bond. Scholars are free to return to Malaysia or study anywhere in the world afterwards, though many stay on for university in Singapore. Selection is tough and starts young, typically targeting strong students in Form 1 to Form 3 equivalent cohorts, with applications opening around the first half of the year. Candidates sit selection tests in English and mathematics, and shortlisted students go through an interview. Strong UPSR-era or school exam results, active co-curricular records and confident English all matter. For students who miss the school-level award, the same ASEAN branding continues at university: NUS and NTU offer ASEAN Undergraduate Scholarships covering tuition and living costs for Southeast Asian students. This scholarship changes lives, but be honest with yourself about the move: it means leaving home in your early teens, a faster academic pace, and adapting to Singapore's school culture. Families who prepare for that side of it do best.",
    intro_bm: "Biasiswa ASEAN ialah tawaran utama Singapura kepada pelajar Malaysia, dikendalikan terus oleh Kementerian Pendidikan Singapura. Ia menanggung yuran sekolah, elaun sara hidup, penginapan asrama dan tambang penerbangan pergi balik untuk belajar di sekolah menengah dan junior college Singapura, menuju ke GCE O Level dan A Level Singapura-Cambridge. Perkara yang paling mengejutkan kebanyakan keluarga: tiada ikatan. Penerima bebas pulang ke Malaysia atau belajar di mana-mana selepas tamat, walaupun ramai yang terus ke universiti di Singapura. Pemilihan sangat ketat dan bermula awal, biasanya menyasarkan pelajar cemerlang dalam kohort setara Tingkatan 1 hingga Tingkatan 3, dengan permohonan dibuka sekitar separuh pertama tahun. Calon menduduki ujian pemilihan Bahasa Inggeris dan matematik, dan yang disenarai pendek akan ditemuduga. Keputusan sekolah yang kukuh, rekod kokurikulum aktif dan Bahasa Inggeris yang yakin semuanya penting. Untuk pelajar yang terlepas anugerah peringkat sekolah, jenama ASEAN yang sama bersambung di universiti: NUS dan NTU menawarkan ASEAN Undergraduate Scholarship yang menanggung yuran dan kos sara hidup untuk pelajar Asia Tenggara. Biasiswa ini mengubah hidup, tetapi jujurlah dengan diri sendiri tentang perpindahan itu: ia bermakna meninggalkan rumah pada usia awal remaja, rentak akademik lebih pantas, dan penyesuaian dengan budaya sekolah Singapura. Keluarga yang bersedia untuk sisi itu paling berjaya.",
    cta_en: "Find scholarships that match you",
    cta_bm: "Cari biasiswa yang sesuai untuk anda"
  }
},

{
  slug: "nus-ntu-scholarship-malaysian-2026",
  type: "scholarship",
  keywords: {
    primary: "NUS NTU scholarship Malaysian students 2026",
    primary_bm: "biasiswa NUS NTU pelajar malaysia 2026",
    longtail_en: ["NUS scholarship for Malaysians", "NTU Nanyang scholarship international", "MOE tuition grant Singapore bond", "study at NUS NTU from Malaysia", "Singapore university scholarship SPM STPM"],
    longtail_bm: ["biasiswa NUS untuk pelajar malaysia", "biasiswa Nanyang NTU", "tuition grant singapura ikatan kerja", "masuk NUS NTU dari malaysia", "biasiswa universiti singapura lepasan SPM"]
  },
  meta: {
    title: "NUS & NTU Scholarships for Malaysians 2026 - Awards, Tuition Grant & Bonds | MyScholar",
    title_bm: "Biasiswa NUS & NTU untuk Pelajar Malaysia 2026 | MyScholar",
    description: "How Malaysians actually fund a degree at NUS or NTU: ASEAN Undergraduate Scholarships, the Nanyang Scholarship, and the MOE Tuition Grant with its three year work bond, explained plainly.",
    description_bm: "Cara pelajar Malaysia sebenarnya biayai ijazah di NUS atau NTU: ASEAN Undergraduate Scholarship, Nanyang Scholarship, dan MOE Tuition Grant dengan ikatan kerja tiga tahun, diterangkan jelas."
  },
  landing: {
    h1_en: "NUS and NTU Scholarships for Malaysian Students 2026",
    h1_bm: "Biasiswa NUS dan NTU untuk Pelajar Malaysia 2026",
    intro_en: "NUS and NTU sit at or near the top of every Asian university ranking, and they are closer to home than most Malaysians realise, in distance and in admissions. Funding a degree there works in layers. The first layer is the MOE Tuition Grant, which is not a scholarship in the usual sense: any admitted international student can take it, it cuts tuition fees by more than half, and in exchange you commit to working for a Singapore-registered company for three years after graduation. Because Singapore graduate salaries are high, many Malaysians consider that bond a feature rather than a cost, but it is a real legal commitment and you should decide deliberately. The second layer is true merit scholarships: the ASEAN Undergraduate Scholarship at both universities covers tuition after the grant plus a living allowance, and NTU's Nanyang Scholarship is its most prestigious award for outstanding entrants. These are competitive and lean heavily on academic results, leadership records and interview performance. Entry itself typically needs strong STPM, A Level, matriculation or IB results; top SPM students usually route through pre-university first. Applications open around October to February for the August intake, earlier than most Malaysian universities, so plan a year ahead. Deadlines for the scholarships usually track the admissions calendar.",
    intro_bm: "NUS dan NTU berada di puncak hampir setiap ranking universiti Asia, dan ia lebih dekat dengan pelajar Malaysia daripada yang disangka, dari segi jarak dan kemasukan. Pembiayaan ijazah di sana berfungsi secara berlapis. Lapisan pertama ialah MOE Tuition Grant, yang bukan biasiswa dalam erti biasa: mana-mana pelajar antarabangsa yang diterima masuk boleh mengambilnya, ia memotong yuran pengajian lebih separuh, dan sebagai tukaran anda komited bekerja dengan syarikat berdaftar di Singapura selama tiga tahun selepas tamat. Oleh sebab gaji graduan Singapura tinggi, ramai pelajar Malaysia anggap ikatan itu kelebihan dan bukan kos, tetapi ia komitmen undang-undang sebenar dan patut diputuskan dengan teliti. Lapisan kedua ialah biasiswa merit sebenar: ASEAN Undergraduate Scholarship di kedua-dua universiti menanggung yuran selepas geran serta elaun sara hidup, dan Nanyang Scholarship di NTU ialah anugerah paling berprestij untuk pelajar baru cemerlang. Semua ini kompetitif dan sangat bergantung pada keputusan akademik, rekod kepimpinan dan prestasi temuduga. Kemasukan biasanya perlukan keputusan STPM, A Level, matrikulasi atau IB yang kukuh; pelajar SPM cemerlang biasanya melalui pra-universiti dulu. Permohonan dibuka sekitar Oktober hingga Februari untuk kemasukan Ogos, lebih awal daripada kebanyakan universiti Malaysia, jadi rancang setahun lebih awal. Tarikh tutup biasiswa biasanya mengikut kalendar kemasukan.",
    cta_en: "Find scholarships that match you",
    cta_bm: "Cari biasiswa yang sesuai untuk anda"
  }
},

{
  slug: "psc-scholarship-singapore-2026",
  type: "scholarship",
  keywords: {
    primary: "PSC scholarship Singapore 2026",
    primary_bm: "biasiswa PSC singapura 2026",
    longtail_en: ["Public Service Commission scholarship Singapore", "PSC scholarship application requirements", "PSC scholarship bond public service", "Singapore government scholarship A levels", "PSC scholarship interview 2026"],
    longtail_bm: ["biasiswa suruhanjaya perkhidmatan awam singapura", "syarat biasiswa PSC", "ikatan biasiswa PSC perkhidmatan awam", "biasiswa kerajaan singapura A level", "temuduga biasiswa PSC"]
  },
  meta: {
    title: "PSC Scholarship Singapore 2026 - Requirements, Bond & How to Apply | MyScholar",
    title_bm: "Biasiswa PSC Singapura 2026 - Syarat, Ikatan & Cara Mohon | MyScholar",
    description: "The Public Service Commission scholarship is Singapore's most prestigious award, funding study at top universities worldwide in exchange for a public service bond. What it takes to win one.",
    description_bm: "Biasiswa Public Service Commission ialah anugerah paling berprestij Singapura, membiayai pengajian di universiti terbaik dunia dengan ikatan perkhidmatan awam. Ini yang diperlukan untuk mendapatkannya."
  },
  landing: {
    h1_en: "PSC Scholarship Singapore 2026 - The Complete Guide",
    h1_bm: "Biasiswa PSC Singapura 2026 - Panduan Lengkap",
    intro_en: "The Public Service Commission scholarship is the most prestigious undergraduate award in Singapore, and for many of the country's top A Level and IB graduates it is the goal they have worked toward for years. It funds full study costs at leading universities in Singapore or overseas, including Oxbridge and the Ivy League, plus allowances, and in return scholars serve a bond in the Singapore public service, typically four to six years depending on where and what they study. PSC scholars are groomed for leadership across ministries, and many of Singapore's permanent secretaries and political leaders started here. Selection is famously demanding: outstanding academic results are only the entry ticket, and the process weighs co-curricular leadership, psychometric assessments, and a panel interview with the commissioners that probes character, motivation and views on public issues. Applications open after A Level results are released, with the cycle running early in the year. Alongside the open PSC scholarship sit specialised tracks covering the SAF, Home Team, foreign service and engineering. If you are a Singaporean student weighing this path, the honest questions are about the bond: six years in public service shapes your twenties. Scholars who thrive are the ones who actually want that work, not just the brand.",
    intro_bm: "Biasiswa Public Service Commission ialah anugerah prasiswazah paling berprestij di Singapura, dan bagi ramai graduan A Level dan IB terbaik negara itu, ia matlamat yang diusahakan bertahun-tahun. Ia membiayai kos penuh pengajian di universiti terkemuka di Singapura atau luar negara, termasuk Oxbridge dan Ivy League, berserta elaun, dan sebagai balasan penerima berkhidmat dengan ikatan dalam perkhidmatan awam Singapura, biasanya empat hingga enam tahun bergantung pada tempat dan bidang pengajian. Penerima PSC dibentuk untuk kepimpinan merentas kementerian, dan ramai setiausaha tetap serta pemimpin politik Singapura bermula di sini. Pemilihan terkenal ketat: keputusan akademik cemerlang hanya tiket masuk, dan prosesnya menilai kepimpinan kokurikulum, penilaian psikometrik, dan temuduga panel bersama pesuruhjaya yang menguji sahsiah, motivasi dan pandangan tentang isu awam. Permohonan dibuka selepas keputusan A Level diumumkan, dengan kitaran berjalan awal tahun. Di samping biasiswa PSC terbuka ada trek khusus meliputi SAF, Home Team, perkhidmatan luar negeri dan kejuruteraan. Kalau anda pelajar Singapura menimbang laluan ini, soalan jujurnya tentang ikatan: enam tahun dalam perkhidmatan awam membentuk usia dua puluhan anda. Penerima yang berjaya ialah mereka yang betul-betul mahukan kerja itu, bukan sekadar jenamanya.",
    cta_en: "Browse Singapore scholarships",
    cta_bm: "Lihat biasiswa Singapura"
  }
},

{
  slug: "biasiswa-belajar-di-singapura",
  type: "scholarship",
  keywords: {
    primary: "study in Singapore scholarship Malaysian",
    primary_bm: "biasiswa belajar di singapura",
    longtail_en: ["study in Singapore after SPM", "Singapore polytechnic Malaysian student", "cost of studying in Singapore", "Singapore study options for Malaysians", "work in Singapore after study bond"],
    longtail_bm: ["belajar di singapura lepasan SPM", "politeknik singapura pelajar malaysia", "kos belajar di singapura", "cara sambung belajar singapura", "kerja di singapura selepas belajar"]
  },
  meta: {
    title: "Belajar di Singapura 2026 - Biasiswa, Laluan & Kos Sebenar untuk Pelajar Malaysia | MyScholar",
    title_bm: "Study in Singapore 2026 - Scholarships, Routes & Real Costs for Malaysians | MyScholar",
    description: "Every realistic route for a Malaysian student to study in Singapore: ASEAN Scholarship, polytechnics, university tuition grants, and what it truly costs. Plain answers, no agents.",
    description_bm: "Setiap laluan realistik pelajar Malaysia untuk belajar di Singapura: Biasiswa ASEAN, politeknik, tuition grant universiti, dan kos sebenarnya. Jawapan jelas, tanpa ejen."
  },
  landing: {
    h1_en: "Studying in Singapore as a Malaysian - Scholarships and Routes",
    h1_bm: "Belajar di Singapura sebagai Pelajar Malaysia - Biasiswa dan Laluan",
    intro_en: "For Malaysian students, Singapore is the nearest place to study at world-ranked institutions without flying across an ocean, and there are more funded routes in than most school counsellors mention. The routes stack by age. At secondary level, the ASEAN Scholarship from Singapore MOE fully funds school and junior college with no bond. After SPM, Singapore's five polytechnics accept Malaysian applicants into diploma programmes with strong industry links, and tuition grant support brings fees down substantially in exchange for a work bond. After STPM, A Levels or matriculation, NUS, NTU, SMU and the other universities admit Malaysians with tuition grants, ASEAN Undergraduate Scholarships and university merit awards covering the rest for the strongest candidates. The honest cost picture matters: without any support, Singapore fees and living costs are heavy once converted to ringgit, with accommodation being the biggest variable. With a tuition grant plus part-time work allowances, a polytechnic or university route becomes genuinely affordable for middle-income Malaysian families, and the graduate salary differential across the causeway is significant. The trade-offs are real too: bonds commit your first working years to Singapore, competition is intense, and living away from family at 17 or 18 is not for everyone. This page exists to lay the options out straight so you can decide with full information.",
    intro_bm: "Bagi pelajar Malaysia, Singapura ialah tempat terdekat untuk belajar di institusi berkedudukan dunia tanpa terbang merentas lautan, dan ada lebih banyak laluan bertaja daripada yang biasa disebut kaunselor sekolah. Laluan tersusun ikut peringkat umur. Di peringkat menengah, Biasiswa ASEAN daripada MOE Singapura membiayai penuh sekolah dan junior college tanpa ikatan. Selepas SPM, lima politeknik Singapura menerima pemohon Malaysia ke program diploma dengan hubungan industri yang kuat, dan sokongan tuition grant menurunkan yuran dengan banyak sebagai tukaran ikatan kerja. Selepas STPM, A Level atau matrikulasi, NUS, NTU, SMU dan universiti lain menerima pelajar Malaysia dengan tuition grant, ASEAN Undergraduate Scholarship dan anugerah merit universiti menampung selebihnya untuk calon terbaik. Gambaran kos yang jujur itu penting: tanpa sebarang sokongan, yuran dan kos hidup Singapura memang berat bila ditukar ke ringgit, dengan penginapan sebagai pemboleh ubah terbesar. Dengan tuition grant serta elaun kerja sambilan, laluan politeknik atau universiti jadi benar-benar mampu untuk keluarga Malaysia berpendapatan sederhana, dan beza gaji graduan di seberang tambak memang ketara. Tukarannya juga nyata: ikatan mengikat tahun-tahun awal kerjaya anda di Singapura, persaingan sengit, dan tinggal jauh dari keluarga pada umur 17 atau 18 bukan untuk semua orang. Halaman ini wujud untuk susun pilihan dengan jelas supaya anda boleh putuskan dengan maklumat penuh.",
    cta_en: "Find scholarships that match you",
    cta_bm: "Cari biasiswa yang sesuai untuk anda"
  }
},
// ============================================================
// === C. SEARCH-GAP PAGES (8) - from zero-result analysis ====
// ============================================================

{
  slug: "biasiswa-radiografi-juru-xray-2026",
  type: "scholarship",
  keywords: {
    primary: "radiography scholarship Malaysia 2026",
    primary_bm: "biasiswa radiografi 2026",
    longtail_en: ["medical imaging scholarship Malaysia", "radiographer training KKM", "diploma radiography Malaysia sponsored", "juru x-ray course Malaysia", "allied health scholarship radiography"],
    longtail_bm: ["biasiswa pengimejan perubatan", "latihan juru x-ray kkm", "diploma radiografi tajaan", "kursus juru x-ray malaysia", "biasiswa sains kesihatan bersekutu"]
  },
  meta: {
    title: "Biasiswa Radiografi & Juru X-Ray 2026 - Laluan Tajaan | MyScholar",
    title_bm: "Radiography & Medical Imaging Scholarships Malaysia 2026 | MyScholar",
    description: "How to get radiography training funded in Malaysia: ILKKM sponsored diplomas with allowances, JPA and allied health tracks, and university medical imaging degrees. All routes in one page.",
    description_bm: "Cara dapatkan latihan radiografi bertaja di Malaysia: diploma tajaan ILKKM dengan elaun, laluan JPA dan sains kesihatan bersekutu, dan ijazah pengimejan perubatan universiti."
  },
  landing: {
    h1_en: "Radiography and Medical Imaging Scholarships in Malaysia",
    h1_bm: "Biasiswa Radiografi dan Juru X-Ray di Malaysia",
    intro_en: "Radiography is one of the most in-demand allied health careers in Malaysia, and one of the most searched-for on MyScholar, yet funded routes into it are scattered and poorly explained elsewhere. The most direct sponsored route is through KKM's training institutes (ILKKM), where the Diploma in Medical Imaging takes selected SPM leavers, pays a monthly allowance during training, and absorbs graduates into government hospital service. Entry requires SPM credits including Bahasa Melayu, mathematics and science, and intakes are announced through SPA and KKM channels, so watch those windows closely. At degree level, medical imaging and diagnostic radiography programmes run at public universities including UKM and UiTM and at private institutions like MAHSA and Masterskill successors, and standard funding applies: JPA and PTPTN for public routes, university merit awards and PTPTN for private ones. Several state foundations and zakat bodies also fund allied health specifically because hospitals in their states are short-staffed. Radiographers start around RM2,500 in government service on the U scheme with on-call allowances, private imaging centres pay more with experience, and the profession is a genuine shortage area, which means employment on graduation is about as close to guaranteed as healthcare gets.",
    intro_bm: "Radiografi antara kerjaya kesihatan bersekutu paling diperlukan di Malaysia, dan antara yang paling banyak dicari di MyScholar, tetapi laluan bertaja ke bidang ini berselerak dan jarang diterangkan dengan baik. Laluan tajaan paling terus ialah melalui institusi latihan KKM (ILKKM), di mana Diploma Pengimejan Perubatan mengambil lepasan SPM terpilih, membayar elaun bulanan semasa latihan, dan menyerap graduan ke perkhidmatan hospital kerajaan. Kemasukan perlukan kredit SPM termasuk Bahasa Melayu, matematik dan sains, dan pengambilan diumumkan melalui saluran SPA dan KKM, jadi pantau tempoh itu rapat-rapat. Di peringkat ijazah, program pengimejan perubatan dan radiografi diagnostik ada di universiti awam termasuk UKM dan UiTM serta institusi swasta seperti MAHSA, dan pembiayaan biasa terpakai: JPA dan PTPTN untuk laluan awam, anugerah merit universiti dan PTPTN untuk swasta. Beberapa yayasan negeri dan badan zakat juga membiayai sains kesihatan bersekutu secara khusus kerana hospital di negeri mereka kekurangan tenaga. Juru x-ray bermula sekitar RM2,500 dalam perkhidmatan kerajaan skim U dengan elaun panggilan, pusat pengimejan swasta bayar lebih dengan pengalaman, dan profesion ini kawasan kekurangan sebenar, bermakna pekerjaan selepas tamat hampir pasti dalam bidang kesihatan.",
    cta_en: "Find allied health scholarships",
    cta_bm: "Cari biasiswa sains kesihatan"
  }
},

{
  slug: "biasiswa-tesl-2026",
  type: "scholarship",
  keywords: {
    primary: "TESL scholarship Malaysia 2026",
    primary_bm: "biasiswa TESL 2026",
    longtail_en: ["TESL degree scholarship Malaysia", "ISMP TESL KPM", "IPG TESL programme", "English teaching scholarship Malaysia", "TESL course university Malaysia"],
    longtail_bm: ["biasiswa ijazah TESL", "ISMP TESL kementerian pendidikan", "program TESL IPG", "biasiswa guru bahasa inggeris", "kursus TESL universiti malaysia"]
  },
  meta: {
    title: "Biasiswa TESL 2026 - ISMP, IPG & Laluan Guru Bahasa Inggeris | MyScholar",
    title_bm: "TESL Scholarships Malaysia 2026 - ISMP, IPG & English Teaching Routes | MyScholar",
    description: "Want to teach English in Malaysia? The funded TESL routes: KPM's ISMP sponsorship, IPG teacher training with allowances, and TESL degrees at public and private universities.",
    description_bm: "Nak mengajar Bahasa Inggeris di Malaysia? Laluan TESL bertaja: tajaan ISMP KPM, latihan perguruan IPG dengan elaun, dan ijazah TESL di universiti awam dan swasta."
  },
  landing: {
    h1_en: "TESL Scholarships in Malaysia - Every Funded Route to Teaching English",
    h1_bm: "Biasiswa TESL di Malaysia - Semua Laluan Bertaja untuk Mengajar Bahasa Inggeris",
    intro_en: "TESL (Teaching English as a Second Language) is one of the most repeatedly searched scholarship terms on MyScholar, and the answer deserves a proper page. The main sponsored route is the Ministry of Education's ISMP (Ijazah Sarjana Muda Pendidikan) sponsorship, which funds teaching degrees including TESL at partner universities, pays study allowances, and bonds graduates into government school service, effectively guaranteeing a teaching post. Alongside it, the IPG (Institut Pendidikan Guru) network trains teachers through the PISMP route, where selected SPM leavers study tuition-free with a monthly allowance; TESL is consistently one of the most competitive options in each intake, and strong SPM English plus a convincing interview matter most. At university level, TESL and English language education degrees run at UKM, UPM, UiTM, IIUM, UPSI and many private universities, fundable through JPA, state foundations and PTPTN. Beyond teaching in schools, a TESL degree opens doors in private language centres, corporate training, publishing and edtech, so a bond-free route keeps more options open while a bonded route buys certainty. If English is your strongest subject and you want it to be your career, there are more funded ways in than almost any other arts-stream path in Malaysia.",
    intro_bm: "TESL antara istilah biasiswa paling kerap dicari di MyScholar, dan jawapannya layak diberi halaman sendiri. Laluan tajaan utama ialah tajaan ISMP (Ijazah Sarjana Muda Pendidikan) Kementerian Pendidikan, yang membiayai ijazah perguruan termasuk TESL di universiti rakan, membayar elaun pengajian, dan mengikat graduan ke perkhidmatan sekolah kerajaan, sekali gus hampir menjamin jawatan guru. Selain itu, rangkaian IPG (Institut Pendidikan Guru) melatih guru melalui laluan PISMP, di mana lepasan SPM terpilih belajar tanpa yuran dengan elaun bulanan; TESL sentiasa antara pilihan paling kompetitif setiap pengambilan, dan Bahasa Inggeris SPM yang cemerlang serta temuduga yang meyakinkan paling penting. Di peringkat universiti, ijazah TESL dan pendidikan bahasa Inggeris ada di UKM, UPM, UiTM, IIUM, UPSI dan banyak universiti swasta, boleh dibiayai melalui JPA, yayasan negeri dan PTPTN. Selain mengajar di sekolah, ijazah TESL membuka pintu ke pusat bahasa swasta, latihan korporat, penerbitan dan edtech, jadi laluan tanpa ikatan mengekalkan lebih banyak pilihan manakala laluan berikat membeli kepastian. Kalau Bahasa Inggeris subjek terkuat anda dan anda mahu jadikannya kerjaya, ada lebih banyak laluan bertaja ke bidang ini berbanding hampir mana-mana laluan aliran sastera lain di Malaysia.",
    cta_en: "Find education scholarships",
    cta_bm: "Cari biasiswa pendidikan"
  }
},

{
  slug: "biasiswa-pelancongan-hospitaliti-2026",
  type: "scholarship",
  keywords: {
    primary: "tourism scholarship Malaysia 2026",
    primary_bm: "biasiswa pelancongan 2026",
    longtail_en: ["hospitality management scholarship Malaysia", "tourism degree scholarship", "hotel management course funded Malaysia", "Taylors hospitality scholarship", "culinary hospitality TVET IKBN"],
    longtail_bm: ["biasiswa pengurusan hospitaliti", "biasiswa ijazah pelancongan", "kursus pengurusan hotel bertaja", "biasiswa hospitaliti taylors", "kursus hospitaliti IKBN percuma"]
  },
  meta: {
    title: "Biasiswa Pelancongan & Hospitaliti 2026 - Ijazah, Diploma & TVET | MyScholar",
    title_bm: "Tourism & Hospitality Scholarships Malaysia 2026 - Degree, Diploma & TVET | MyScholar",
    description: "Tourism is back and hiring. Funded routes into tourism and hotel management: university scholarships, hotel group sponsorships, and free TVET training through IKBN. One honest page.",
    description_bm: "Pelancongan kembali rancak dan mengambil pekerja. Laluan bertaja ke pengurusan pelancongan dan hotel: biasiswa universiti, tajaan kumpulan hotel, dan latihan TVET percuma melalui IKBN."
  },
  landing: {
    h1_en: "Tourism and Hospitality Scholarships in Malaysia",
    h1_bm: "Biasiswa Pelancongan dan Hospitaliti di Malaysia",
    intro_en: "Tourism searches kept returning zero results on MyScholar, which told us students want this page badly, so here is the honest map. Malaysia's tourism industry is hiring again in force, with Visit Malaysia campaigns, new hotel openings and airline expansion all pulling in fresh graduates. At degree level, hospitality and tourism management programmes run at UiTM (the largest public provider), Taylor's University (whose hospitality school ranks among the best in Asia), Sunway, Berjaya University College (backed by a group that owns hotels) and UMS in Sabah, where tourism is a flagship field. Funding comes from the usual national sources (JPA where fields align, PTPTN, state foundations) plus industry-linked support: Berjaya and other hospitality groups have sponsored students into their own programmes, and hotel chains run management trainee schemes that pay you while you learn the business after graduation. The TVET route is genuinely underrated: IKBN and community colleges run hospitality, culinary and tourism operations courses that are free or nearly free with allowances, and hotels hire straight from them. Starting pay in hotels is modest, around RM1,800 to RM2,500, but progression to supervisory and management roles is faster than most industries for people who stay, and the skills travel worldwide.",
    intro_bm: "Carian pelancongan asyik pulang kosong di MyScholar, tandanya pelajar sangat mahukan halaman ini, jadi ini peta jujurnya. Industri pelancongan Malaysia kembali mengambil pekerja secara besar-besaran, dengan kempen Visit Malaysia, pembukaan hotel baru dan pengembangan syarikat penerbangan menarik graduan baru. Di peringkat ijazah, program pengurusan hospitaliti dan pelancongan ada di UiTM (penyedia awam terbesar), Taylor's University (sekolah hospitalitinya antara terbaik di Asia), Sunway, Berjaya University College (disokong kumpulan yang memiliki hotel) dan UMS di Sabah, di mana pelancongan bidang utama. Pembiayaan datang dari sumber nasional biasa (JPA untuk bidang berkaitan, PTPTN, yayasan negeri) serta sokongan berkait industri: Berjaya dan kumpulan hospitaliti lain pernah menaja pelajar ke program mereka sendiri, dan rangkaian hotel ada skim management trainee yang membayar anda sambil belajar selok-belok perniagaan selepas tamat. Laluan TVET sangat dipandang rendah: IKBN dan kolej komuniti menawarkan kursus hospitaliti, kulinari dan operasi pelancongan yang percuma atau hampir percuma dengan elaun, dan hotel mengambil terus dari situ. Gaji permulaan di hotel memang sederhana, sekitar RM1,800 hingga RM2,500, tetapi kenaikan ke jawatan penyeliaan dan pengurusan lebih pantas daripada kebanyakan industri untuk yang bertahan, dan kemahirannya laku di seluruh dunia.",
    cta_en: "Find tourism scholarships",
    cta_bm: "Cari biasiswa pelancongan"
  }
},

{
  slug: "biasiswa-kulinari-2026",
  type: "scholarship",
  keywords: {
    primary: "culinary arts scholarship Malaysia 2026",
    primary_bm: "biasiswa kulinari 2026",
    longtail_en: ["culinary school scholarship Malaysia", "pastry diploma Malaysia funded", "chef course Malaysia free", "Le Cordon Bleu Sunway scholarship", "GIATMARA culinary course"],
    longtail_bm: ["biasiswa sekolah kulinari", "diploma pastri bertaja malaysia", "kursus chef percuma", "biasiswa kulinari sunway", "kursus masakan giatmara"]
  },
  meta: {
    title: "Biasiswa Kulinari & Pastri 2026 - Kursus Chef Bertaja | MyScholar",
    title_bm: "Culinary Arts & Pastry Scholarships Malaysia 2026 - Funded Chef Courses | MyScholar",
    description: "From free GIATMARA and IKBN culinary training to diplomas at Berjaya, KDU and Sunway Le Cordon Bleu. Every funded way to train as a chef or pastry chef in Malaysia.",
    description_bm: "Dari latihan kulinari percuma GIATMARA dan IKBN hingga diploma di Berjaya, KDU dan Sunway Le Cordon Bleu. Semua laluan bertaja untuk jadi chef atau chef pastri di Malaysia."
  },
  landing: {
    h1_en: "Culinary Arts and Pastry Scholarships in Malaysia",
    h1_bm: "Biasiswa Kulinari dan Pastri di Malaysia",
    intro_en: "Culinary and pastry courses are expensive at the branded schools, which is exactly why students keep searching MyScholar for funded routes, so let us lay them out from cheapest to most premium. The zero-cost tier is government TVET: GIATMARA centres nationwide run culinary and bakery courses free for eligible Malaysians, IKBN and community colleges offer certificate and diploma programmes in culinary arts with allowances for many participants, and ILP institutes cover commercial cooking trades. These routes lead straight into hotel and restaurant kitchens. The middle tier is polytechnic and university diplomas: Politeknik Merlimau and others run hospitality and culinary programmes at public prices, fundable with PTPTN. The premium tier is the branded schools: Berjaya University College's culinary school (with real hotel group connections), KDU University College's School of Hospitality, Tourism and Culinary Arts, and Sunway's Le Cordon Bleu partnership, the most prestigious pastry and cuisine certificate in the region. These institutions offer merit scholarships and bursaries covering partial fees, MARA education financing has covered culinary study for eligible bumiputera students, and PTPTN applies to accredited diplomas and degrees. A working chef's honest advice: the certificate gets your first kitchen job, but the industry promotes on skill and stamina, so the cheaper routes lose you nothing long-term if the premium fees are out of reach.",
    intro_bm: "Kursus kulinari dan pastri mahal di sekolah berjenama, sebab itulah pelajar asyik cari laluan bertaja di MyScholar, jadi mari susun dari paling murah ke paling premium. Peringkat kos sifar ialah TVET kerajaan: pusat GIATMARA seluruh negara menawarkan kursus kulinari dan bakeri percuma untuk rakyat Malaysia yang layak, IKBN dan kolej komuniti ada program sijil dan diploma seni kulinari dengan elaun untuk ramai peserta, dan institut ILP meliputi bidang masakan komersial. Laluan ini terus masuk ke dapur hotel dan restoran. Peringkat pertengahan ialah diploma politeknik dan universiti: Politeknik Merlimau dan lain-lain menawarkan program hospitaliti dan kulinari pada harga awam, boleh dibiayai PTPTN. Peringkat premium ialah sekolah berjenama: sekolah kulinari Berjaya University College (dengan hubungan sebenar kumpulan hotel), School of Hospitality, Tourism and Culinary Arts di KDU, dan kerjasama Le Cordon Bleu di Sunway, sijil pastri dan masakan paling berprestij di rantau ini. Institusi ini menawarkan biasiswa merit dan bursari menampung sebahagian yuran, pembiayaan pendidikan MARA pernah menampung pengajian kulinari untuk pelajar bumiputera yang layak, dan PTPTN terpakai untuk diploma dan ijazah bertauliah. Nasihat jujur seorang chef: sijil dapatkan kerja dapur pertama anda, tetapi industri ini naikkan pangkat ikut kemahiran dan ketahanan, jadi laluan murah tidak merugikan apa-apa jangka panjang kalau yuran premium di luar kemampuan.",
    cta_en: "Find culinary scholarships",
    cta_bm: "Cari biasiswa kulinari"
  }
},

{
  slug: "biasiswa-unikl-mied-2026",
  type: "scholarship",
  keywords: {
    primary: "UniKL scholarship 2026",
    primary_bm: "biasiswa UniKL 2026",
    longtail_en: ["Yayasan UniKL scholarship", "MIED scholarship Malaysia", "UniKL MARA financing", "Universiti Kuala Lumpur scholarship application", "MIED education loan MIC"],
    longtail_bm: ["biasiswa yayasan unikl", "biasiswa MIED", "pembiayaan MARA unikl", "cara mohon biasiswa universiti kuala lumpur", "pinjaman pendidikan MIED"]
  },
  meta: {
    title: "Biasiswa UniKL & MIED 2026 - Yayasan UniKL, MARA & Pembiayaan | MyScholar",
    title_bm: "UniKL & MIED Scholarships 2026 - Yayasan UniKL, MARA & Financing | MyScholar",
    description: "Two heavily searched but poorly documented funders: Yayasan UniKL for Universiti Kuala Lumpur students, and MIED, the MIC education arm behind AIMST. What each covers and how to apply.",
    description_bm: "Dua penaja yang banyak dicari tetapi kurang didokumentasi: Yayasan UniKL untuk pelajar Universiti Kuala Lumpur, dan MIED, badan pendidikan MIC di sebalik AIMST. Apa yang ditanggung dan cara memohon."
  },
  landing: {
    h1_en: "UniKL and MIED Scholarships - What They Are and How to Apply",
    h1_bm: "Biasiswa UniKL dan MIED - Apa Itu dan Cara Memohon",
    intro_en: "Students kept searching MyScholar for Yayasan UniKL and MIED and finding nothing, so this page fixes that. They are two separate funders often confused with each other. Yayasan UniKL is the foundation attached to Universiti Kuala Lumpur, the MARA-owned technical university with campuses across the country covering engineering technology, aviation, medical technology and business. The foundation channels zakat, corporate and alumni contributions into financial aid for needy and deserving UniKL students, covering study costs and living support, and applications go through UniKL's student affairs and foundation channels once you are enrolled. Because UniKL is a MARA institution, eligible bumiputera students also access MARA education financing for its programmes, which for many students is the primary funding layer. MIED (Maju Institute of Educational Development) is different: it is the educational arm of MIC, established to expand higher education access for Malaysian Indian students, it founded AIMST University in Kedah, and it provides education loans and scholarships targeted primarily at Indian community students across recognised institutions, with need and merit both weighed. If you are Indian Malaysian and funding is the barrier, MIED is one of the specific doors built for you, and it is underused simply because few students know it exists.",
    intro_bm: "Pelajar asyik mencari Yayasan UniKL dan MIED di MyScholar dan tidak jumpa apa-apa, jadi halaman ini membetulkannya. Ini dua penaja berasingan yang selalu dikelirukan. Yayasan UniKL ialah yayasan di bawah Universiti Kuala Lumpur, universiti teknikal milik MARA dengan kampus di seluruh negara meliputi teknologi kejuruteraan, penerbangan, teknologi perubatan dan perniagaan. Yayasan ini menyalurkan sumbangan zakat, korporat dan alumni kepada bantuan kewangan untuk pelajar UniKL yang memerlukan dan layak, menampung kos pengajian dan sara hidup, dan permohonan melalui saluran hal ehwal pelajar dan yayasan UniKL selepas anda mendaftar. Oleh sebab UniKL institusi MARA, pelajar bumiputera yang layak juga boleh akses pembiayaan pendidikan MARA untuk programnya, yang bagi ramai pelajar menjadi lapisan pembiayaan utama. MIED (Maju Institute of Educational Development) pula berbeza: ia badan pendidikan MIC, ditubuhkan untuk meluaskan akses pendidikan tinggi pelajar India Malaysia, ia mengasaskan AIMST University di Kedah, dan ia menyediakan pinjaman pendidikan dan biasiswa disasarkan terutamanya kepada pelajar komuniti India di institusi yang diiktiraf, dengan keperluan dan merit sama-sama ditimbang. Kalau anda India Malaysia dan pembiayaan jadi penghalang, MIED antara pintu khusus yang dibina untuk anda, dan ia kurang digunakan hanya kerana sedikit pelajar tahu ia wujud.",
    cta_en: "Find scholarships that match you",
    cta_bm: "Cari biasiswa yang sesuai untuk anda"
  }
},

{
  slug: "biasiswa-manipal-university-2026",
  type: "scholarship",
  keywords: {
    primary: "Manipal University Malaysia scholarship 2026",
    primary_bm: "biasiswa manipal university 2026",
    longtail_en: ["MUCM scholarship Melaka", "Manipal medical scholarship Malaysia", "Melaka Manipal Medical College fees", "Manipal MBBS Malaysia funding", "private medical school scholarship Malaysia"],
    longtail_bm: ["biasiswa MUCM melaka", "biasiswa perubatan manipal", "yuran manipal melaka", "pembiayaan MBBS manipal malaysia", "biasiswa sekolah perubatan swasta"]
  },
  meta: {
    title: "Biasiswa Manipal University Malaysia 2026 - MUCM & Pembiayaan Perubatan | MyScholar",
    title_bm: "Manipal University Malaysia Scholarships 2026 - MUCM & Medical Funding | MyScholar",
    description: "Manipal University College Malaysia in Melaka trains a large share of Malaysia's private-route doctors. Its merit awards, fee structure reality, and every external funder that covers study there.",
    description_bm: "Manipal University College Malaysia di Melaka melatih sebahagian besar doktor laluan swasta negara. Anugerah meritnya, realiti struktur yuran, dan setiap penaja luar yang menampung pengajian di sana."
  },
  landing: {
    h1_en: "Manipal University Malaysia Scholarships and Funding",
    h1_bm: "Biasiswa dan Pembiayaan Manipal University Malaysia",
    intro_en: "Manipal University College Malaysia (MUCM, formerly Melaka-Manipal Medical College) has quietly trained thousands of Malaysia's doctors and dentists through its Melaka and Muar campuses, with a model that includes clinical years in Malaysia and options linked to the wider Manipal network. Students search for Manipal scholarships constantly because the fees are serious: a full private MBBS runs into hundreds of thousands of ringgit, and families need the funding picture straight before committing. MUCM itself offers merit scholarships and bursaries at entry for strong SPM, STPM, matriculation and foundation results, typically as partial fee waivers that step up with academic grades, and continuing awards reward performance during the programme. External funding is where most students assemble the rest: PTPTN covers accredited programmes up to its limits, MIED education loans serve Indian Malaysian students specifically and have a long history with private medicine, bank education loans (Maybank, CIMB and others) bridge remaining gaps, and a small number of state foundations and zakat bodies contribute for medicine. The honest advice we give every private-medicine family: get the total five year cost in writing, map every funding layer before year one, and remember that houseman posts are competitive regardless of where you graduate, so the degree is the start of the race, not the finish.",
    intro_bm: "Manipal University College Malaysia (MUCM, dulunya Melaka-Manipal Medical College) telah melatih ribuan doktor dan doktor gigi Malaysia melalui kampus Melaka dan Muar, dengan model yang merangkumi tahun klinikal di Malaysia dan pilihan berkait rangkaian Manipal yang lebih luas. Pelajar sentiasa mencari biasiswa Manipal kerana yurannya serius: MBBS swasta penuh mencecah ratusan ribu ringgit, dan keluarga perlu gambaran pembiayaan yang jelas sebelum komited. MUCM sendiri menawarkan biasiswa merit dan bursari semasa kemasukan untuk keputusan SPM, STPM, matrikulasi dan asasi yang cemerlang, biasanya sebagai pengecualian yuran separa yang meningkat ikut gred akademik, dan anugerah berterusan memberi ganjaran prestasi sepanjang program. Pembiayaan luaran ialah tempat kebanyakan pelajar melengkapkan bakinya: PTPTN menampung program bertauliah hingga hadnya, pinjaman pendidikan MIED khusus melayan pelajar India Malaysia dan lama terlibat dengan perubatan swasta, pinjaman pendidikan bank (Maybank, CIMB dan lain-lain) menutup baki jurang, dan beberapa yayasan negeri serta badan zakat menyumbang untuk perubatan. Nasihat jujur kami untuk setiap keluarga perubatan swasta: dapatkan jumlah kos lima tahun secara bertulis, susun setiap lapisan pembiayaan sebelum tahun satu, dan ingat jawatan houseman tetap kompetitif tidak kira di mana anda bergraduat, jadi ijazah itu permulaan perlumbaan, bukan penamatnya.",
    cta_en: "Find medical scholarships",
    cta_bm: "Cari biasiswa perubatan"
  }
},

{
  slug: "biasiswa-aimst-university-2026",
  type: "scholarship",
  keywords: {
    primary: "AIMST University scholarship 2026",
    primary_bm: "biasiswa AIMST university 2026",
    longtail_en: ["AIMST scholarship application", "AIMST dentistry medicine fees", "MIED AIMST funding", "AIMST University Kedah courses", "AIMST merit scholarship SPM"],
    longtail_bm: ["cara mohon biasiswa AIMST", "yuran pergigian perubatan AIMST", "pembiayaan MIED AIMST", "kursus AIMST university kedah", "biasiswa merit AIMST lepasan SPM"]
  },
  meta: {
    title: "Biasiswa AIMST University 2026 - Merit, MIED & Pembiayaan | MyScholar",
    title_bm: "AIMST University Scholarships 2026 - Merit, MIED & Funding | MyScholar",
    description: "AIMST University in Kedah offers some of the most accessible private medicine and dentistry fees in Malaysia. Its merit scholarships, MIED support, and how students fund study there.",
    description_bm: "AIMST University di Kedah menawarkan antara yuran perubatan dan pergigian swasta paling berpatutan di Malaysia. Biasiswa meritnya, sokongan MIED, dan cara pelajar biayai pengajian di sana."
  },
  landing: {
    h1_en: "AIMST University Scholarships and Funding",
    h1_bm: "Biasiswa dan Pembiayaan AIMST University",
    intro_en: "AIMST University in Semeling, Kedah occupies a specific and valuable spot in Malaysian higher education: a full private university founded by MIED, the educational arm of MIC, with medicine, dentistry, pharmacy, engineering, business and allied health programmes at fees that consistently undercut the Klang Valley private medical schools. Students searched for AIMST on MyScholar and found nothing, which was our gap, so here is the picture. AIMST offers entry merit scholarships tied to SPM, STPM, foundation and diploma results, usually structured as partial fee waivers, plus bursaries for siblings and alumni families, and its own foundation programmes feed into the professional degrees. The MIED connection matters most for funding: MIED education loans were built for exactly this pathway and have supported large numbers of Indian Malaysian students through AIMST medicine and dentistry, with repayment terms designed for community access. PTPTN covers accredited programmes, and bank education loans fill remaining gaps. The practical case for AIMST is cost-to-outcome: dentistry and medicine there cost meaningfully less than most private alternatives, the northern campus keeps living costs low, and graduates enter the same houseman and compulsory service system as everyone else. For families doing the private-medicine maths carefully, AIMST belongs on the shortlist.",
    intro_bm: "AIMST University di Semeling, Kedah menduduki tempat khusus dan bernilai dalam pendidikan tinggi Malaysia: universiti swasta penuh yang diasaskan MIED, badan pendidikan MIC, dengan program perubatan, pergigian, farmasi, kejuruteraan, perniagaan dan sains kesihatan bersekutu pada yuran yang konsisten lebih rendah daripada sekolah perubatan swasta Lembah Klang. Pelajar mencari AIMST di MyScholar dan tidak jumpa apa-apa, itu kelemahan kami, jadi ini gambarannya. AIMST menawarkan biasiswa merit kemasukan berdasarkan keputusan SPM, STPM, asasi dan diploma, biasanya berbentuk pengecualian yuran separa, serta bursari untuk adik-beradik dan keluarga alumni, dan program asasinya sendiri menyalur ke ijazah profesional. Hubungan MIED paling penting untuk pembiayaan: pinjaman pendidikan MIED dibina untuk laluan ini dan telah menyokong ramai pelajar India Malaysia melalui perubatan dan pergigian AIMST, dengan syarat bayaran balik direka untuk akses komuniti. PTPTN menampung program bertauliah, dan pinjaman bank menutup baki. Hujah praktikal untuk AIMST ialah nisbah kos kepada hasil: pergigian dan perubatan di sana jauh lebih murah daripada kebanyakan alternatif swasta, kampus utara mengekalkan kos hidup rendah, dan graduan masuk sistem houseman dan khidmat wajib yang sama seperti orang lain. Untuk keluarga yang mengira matematik perubatan swasta dengan teliti, AIMST wajar dalam senarai pendek.",
    cta_en: "Find scholarships that match you",
    cta_bm: "Cari biasiswa yang sesuai untuk anda"
  }
},

{
  slug: "biasiswa-diraja-sultan-2026",
  type: "scholarship",
  keywords: {
    primary: "royal scholarship Malaysia 2026",
    primary_bm: "biasiswa diraja sultan 2026",
    longtail_en: ["sultan scholarship Malaysia", "Yayasan Sultan Mizan scholarship", "royal foundation scholarship state", "Yayasan Raja Muda Selangor", "biasiswa yayasan diraja"],
    longtail_bm: ["biasiswa sultan malaysia", "biasiswa yayasan sultan mizan", "biasiswa yayasan diraja negeri", "yayasan raja muda selangor", "senarai biasiswa diraja"]
  },
  meta: {
    title: "Biasiswa Diraja & Yayasan Sultan 2026 - Senarai Ikut Negeri | MyScholar",
    title_bm: "Royal & Sultan Foundation Scholarships Malaysia 2026 - By State | MyScholar",
    description: "Malaysia's royal households fund education through state foundations that few students know about. The royal foundation scholarships by state, who qualifies, and how to find open cycles.",
    description_bm: "Istana-istana Malaysia membiayai pendidikan melalui yayasan negeri yang jarang diketahui pelajar. Biasiswa yayasan diraja ikut negeri, siapa layak, dan cara jumpa kitaran yang dibuka."
  },
  landing: {
    h1_en: "Royal and Sultan Foundation Scholarships in Malaysia",
    h1_bm: "Biasiswa Diraja dan Yayasan Sultan di Malaysia",
    intro_en: "Biasiswa sultan is a search that kept coming up empty on MyScholar, and the truth is these awards are real but scattered, run by separate royal and state foundations that each publish on their own schedule. The pattern across states looks like this. Terengganu's Yayasan Diraja Sultan Mizan funds education as part of its royal foundation mandate. In Selangor, Yayasan Raja Muda Selangor supports students from the state alongside Yayasan Selangor. Johor's royal household channels support through state foundations and periodic royal grants, Kedah has foundations associated with the Sultanah, and Perak, Pahang and Kelantan route royal patronage through their state yayasan bodies, which is why our state Yayasan pages matter for this search too. The common features: priority for students born in or schooled in the state, family income screening, a bias toward students heading into public universities, and application windows that open quietly, often announced through state education departments, district offices and school counsellors rather than big websites. Practical advice: identify your state's yayasan and royal foundation, follow their official channels, ask your school counsellor specifically about royal and state awards, and apply to the state layer in the same season as your JPA and PTPTN applications, because the amounts stack and the competition at state level is far thinner than the national schemes.",
    intro_bm: "Biasiswa sultan ialah carian yang asyik pulang kosong di MyScholar, dan sebenarnya anugerah ini wujud tetapi berselerak, dikendalikan yayasan diraja dan negeri berasingan yang masing-masing umum ikut jadual sendiri. Coraknya merentas negeri begini. Yayasan Diraja Sultan Mizan di Terengganu membiayai pendidikan sebagai sebahagian mandat yayasan dirajanya. Di Selangor, Yayasan Raja Muda Selangor menyokong pelajar negeri itu di samping Yayasan Selangor. Istana Johor menyalurkan sokongan melalui yayasan negeri dan geran diraja berkala, Kedah ada yayasan berkait Sultanah, dan Perak, Pahang serta Kelantan menyalurkan naungan diraja melalui badan yayasan negeri masing-masing, sebab itu halaman Yayasan negeri kami penting untuk carian ini juga. Ciri sepunya: keutamaan untuk pelajar kelahiran atau bersekolah di negeri itu, saringan pendapatan keluarga, kecenderungan kepada pelajar yang menuju universiti awam, dan tempoh permohonan yang dibuka secara senyap, selalunya diumumkan melalui jabatan pendidikan negeri, pejabat daerah dan kaunselor sekolah, bukan laman web besar. Nasihat praktikal: kenal pasti yayasan dan yayasan diraja negeri anda, ikuti saluran rasmi mereka, tanya kaunselor sekolah secara khusus tentang anugerah diraja dan negeri, dan mohon lapisan negeri pada musim yang sama dengan permohonan JPA dan PTPTN anda, kerana jumlahnya boleh bertindan dan persaingan peringkat negeri jauh lebih tipis daripada skim kebangsaan.",
    cta_en: "Find state scholarships",
    cta_bm: "Cari biasiswa negeri"
  }
},
// ============================================================
// === D. SEASONAL AUG-DEC (3) ================================
// ============================================================

{
  slug: "biasiswa-oktober-2026",
  type: "scholarship",
  keywords: {
    primary: "scholarship deadline October 2026",
    primary_bm: "biasiswa oktober 2026",
    longtail_en: ["scholarships closing October 2026 Malaysia", "biasiswa tarikh tutup oktober", "last chance scholarship 2026", "year end scholarship Malaysia", "scholarship still open October"],
    longtail_bm: ["biasiswa tutup oktober 2026", "biasiswa masih dibuka oktober", "peluang terakhir biasiswa 2026", "biasiswa hujung tahun malaysia", "senarai biasiswa oktober"]
  },
  meta: {
    title: "Biasiswa Tarikh Tutup Oktober 2026 - Senarai Terkini | MyScholar",
    title_bm: "Scholarships Closing October 2026 Malaysia - Updated List | MyScholar",
    description: "October is the quiet closing window before the year-end cycle resets. Every scholarship still open with October 2026 deadlines, checked against our verified database.",
    description_bm: "Oktober ialah tempoh tutup senyap sebelum kitaran hujung tahun bermula semula. Semua biasiswa masih dibuka dengan tarikh tutup Oktober 2026, disemak dengan pangkalan data kami."
  },
  landing: {
    h1_en: "Scholarships Closing in October 2026",
    h1_bm: "Biasiswa Tarikh Tutup Oktober 2026",
    intro_en: "October is a strange month in the Malaysian scholarship calendar and most students misread it. The big first-half cycles tied to SPM results and university intakes have closed, so it feels like nothing is open, but that is exactly wrong: October carries postgraduate deadlines for students targeting the following year, corporate and foundation awards that run on financial-year timing rather than academic timing, university entry scholarships for the upcoming intake season, and overseas cycles (Australia's first semester, UK January starts, and early birds for the following September) whose applications peak now. It is also when next year's major programmes begin announcing, which makes October the single best month to build your application folder: transcripts requested, referees confirmed, essays drafted while there is no deadline panic. MyScholar tracks deadlines on a rolling 60-day window on the main directory, so the October view below is pulled from verified listings rather than recycled blog lists that quietly go stale. Check each closing date against the official link before you plan around it, deadlines do move, and when a provider extends or closes early, the official page is the only source that matters.",
    intro_bm: "Oktober ialah bulan pelik dalam kalendar biasiswa Malaysia dan kebanyakan pelajar salah membacanya. Kitaran besar separuh pertama tahun yang berkait keputusan SPM dan kemasukan universiti sudah tutup, jadi ia terasa seperti tiada apa yang dibuka, tetapi itu silap: Oktober membawa tarikh tutup pascasiswazah untuk pelajar menyasar tahun berikutnya, anugerah korporat dan yayasan yang ikut tahun kewangan dan bukan tahun akademik, biasiswa kemasukan universiti untuk musim intake akan datang, dan kitaran luar negara (semester pertama Australia, kemasukan Januari UK, dan permohonan awal untuk September berikutnya) yang memuncak sekarang. Ia juga masa program besar tahun depan mula diumumkan, menjadikan Oktober bulan terbaik untuk siapkan folder permohonan anda: transkrip dipohon, perujuk disahkan, esei dirangka semasa tiada panik tarikh tutup. MyScholar menjejak tarikh tutup dalam tetingkap bergolek 60 hari di direktori utama, jadi paparan Oktober di bawah ditarik dari senarai yang disahkan, bukan senarai blog kitar semula yang senyap-senyap basi. Semak setiap tarikh tutup dengan pautan rasmi sebelum merancang, tarikh memang berubah, dan bila penaja melanjutkan atau menutup awal, laman rasmi satu-satunya sumber yang penting.",
    cta_en: "See scholarships closing soon",
    cta_bm: "Lihat biasiswa yang hampir tutup"
  }
},

{
  slug: "internship-cuti-semester-2026",
  type: "internship",
  keywords: {
    primary: "semester break internship Malaysia 2026",
    primary_bm: "internship cuti semester 2026",
    longtail_en: ["November December internship Malaysia", "short internship university student", "semester break job Malaysia", "internship 2 3 months Malaysia", "when to apply semester break internship"],
    longtail_bm: ["internship november disember malaysia", "internship pendek pelajar universiti", "kerja cuti semester malaysia", "internship 2 3 bulan", "bila mohon internship cuti semester"]
  },
  meta: {
    title: "Internship Cuti Semester 2026 - Nov & Dis, Mohon Sekarang | MyScholar",
    title_bm: "Semester Break Internships Malaysia 2026 - Nov & Dec, Apply Now | MyScholar",
    description: "The November-December semester break internship window is decided in August and September. Which companies take short-term interns, what they pay, and why applying now matters.",
    description_bm: "Tempoh internship cuti semester November-Disember ditentukan pada Ogos dan September. Syarikat mana ambil intern jangka pendek, berapa bayarannya, dan kenapa mohon sekarang penting."
  },
  landing: {
    h1_en: "Semester Break Internships in Malaysia - The Nov-Dec Window",
    h1_bm: "Internship Cuti Semester di Malaysia - Tempoh Nov-Dis",
    intro_en: "Here is the timing truth that catches students every year: the November and December semester break internships are mostly decided in August and September, because companies plan year-end headcount early and the good slots go to whoever applied before the rush. A semester break internship is different from your compulsory latihan industri. It is short, usually four to ten weeks, it does not need to satisfy faculty requirements, and its real purpose is to get industry lines onto your resume before the LI and graduate job hunts begin. Who actually takes short-term interns: the Big Four and mid-tier accounting firms staffing for audit busy season (peak demand exactly when your break falls), banks running year-end project support, retail, logistics and e-commerce operations scaling for the festive and 11.11 through 12.12 period, events companies, and startups that will take a capable student for any eight week stretch. Allowances range widely: RM500 to RM800 at small firms, RM800 to RM1,500 at established companies, more in tech. Apply with a one page resume, name the exact weeks you are available in your first message, and apply to fifteen or twenty places rather than three. Short internships convert to LI offers and graduate offers more often than students expect, because you become the known candidate.",
    intro_bm: "Ini kebenaran masa yang menangkap pelajar setiap tahun: internship cuti semester November dan Disember kebanyakannya ditentukan pada Ogos dan September, kerana syarikat rancang keperluan hujung tahun awal dan slot yang bagus pergi kepada siapa yang mohon sebelum musim sesak. Internship cuti semester berbeza dengan latihan industri wajib anda. Ia pendek, biasanya empat hingga sepuluh minggu, tidak perlu memenuhi syarat fakulti, dan tujuan sebenarnya ialah mendapatkan pengalaman industri dalam resume sebelum musim LI dan pencarian kerja graduan bermula. Siapa yang betul-betul ambil intern jangka pendek: firma Big Four dan perakaunan pertengahan yang menambah tenaga untuk musim sibuk audit (permintaan memuncak tepat masa cuti anda), bank dengan sokongan projek hujung tahun, operasi runcit, logistik dan e-dagang yang berkembang untuk musim perayaan serta tempoh 11.11 hingga 12.12, syarikat acara, dan startup yang sanggup ambil pelajar cekap untuk mana-mana lapan minggu. Elaun berbeza-beza: RM500 hingga RM800 di firma kecil, RM800 hingga RM1,500 di syarikat mapan, lebih tinggi dalam teknologi. Mohon dengan resume satu muka surat, nyatakan minggu tepat anda kosong dalam mesej pertama, dan mohon lima belas hingga dua puluh tempat, bukan tiga. Internship pendek bertukar jadi tawaran LI dan kerja graduan lebih kerap daripada yang pelajar jangka, sebab anda sudah jadi calon yang dikenali.",
    cta_en: "Browse internships now",
    cta_bm: "Lihat internship sekarang"
  }
},

{
  slug: "internship-lepasan-spm-2026",
  type: "internship",
  keywords: {
    primary: "internship after SPM Malaysia",
    primary_bm: "internship lepasan SPM 2026",
    longtail_en: ["what to do after SPM while waiting", "SPM leaver work experience", "part time job vs internship SPM", "gap period after SPM productive", "internship without degree Malaysia"],
    longtail_bm: ["nak buat apa lepas SPM sementara tunggu", "pengalaman kerja lepasan SPM", "kerja part time atau internship", "isi masa lepas SPM", "internship tanpa ijazah malaysia"]
  },
  meta: {
    title: "Internship Lepasan SPM 2026 - Isi Tempoh Menunggu Dengan Bijak | MyScholar",
    title_bm: "Internships for SPM Leavers 2026 - Use the Waiting Months Well | MyScholar",
    description: "The months between SPM and your next intake do not have to be wasted. Which companies take SPM leavers, what real workplace experience does for your applications, and how to ask.",
    description_bm: "Bulan-bulan antara SPM dan kemasukan seterusnya tidak perlu dibazirkan. Syarikat mana ambil lepasan SPM, apa pengalaman kerja sebenar buat untuk permohonan anda, dan cara memohon."
  },
  landing: {
    h1_en: "Internships and Work Experience for SPM Leavers",
    h1_bm: "Internship dan Pengalaman Kerja untuk Lepasan SPM",
    intro_en: "The stretch between finishing SPM and starting your next programme is one of the longest free periods you will ever get, often six months or more, and what you do with it shows up later in scholarship interviews, university applications and your first resume. Formal internship programmes mostly target university students, but real workplace experience is absolutely available to SPM leavers if you know where to look and how to ask. Retail chains, F&B groups, logistics depots and e-commerce warehouses hire school leavers year-round and the operational exposure is real. Small businesses, agencies and startups will often take a keen SPM leaver as a paid junior helper or unofficial intern if you approach them directly with a short, specific message about what you can do: manage social media, handle basic design in Canva, do stock counts, answer customers. Family businesses and your parents' networks count too, and structured options exist through Perkeso and youth employment initiatives that place school leavers into short placements. The honest framing: at this stage the money matters less than the evidence. Two or three months somewhere with a reference letter and one concrete thing you improved beats six months of nothing in every interview that follows. And if you are heading into a competitive scholarship season, being able to talk about real work is a quiet advantage most applicants your age simply do not have.",
    intro_bm: "Tempoh antara habis SPM dan mula program seterusnya ialah antara masa kosong paling panjang anda akan dapat, selalunya enam bulan atau lebih, dan apa yang anda buat dengannya akan muncul kemudian dalam temuduga biasiswa, permohonan universiti dan resume pertama anda. Program internship formal kebanyakannya sasarkan pelajar universiti, tetapi pengalaman kerja sebenar memang terbuka untuk lepasan SPM kalau tahu di mana nak cari dan cara memohon. Rangkaian runcit, kumpulan F&B, depoh logistik dan gudang e-dagang mengambil lepasan sekolah sepanjang tahun dan pendedahan operasinya sebenar. Perniagaan kecil, agensi dan startup selalu sanggup ambil lepasan SPM yang bersungguh sebagai pembantu junior bergaji atau intern tidak rasmi kalau anda dekati mereka terus dengan mesej pendek dan spesifik tentang apa anda boleh buat: urus media sosial, buat design asas di Canva, kira stok, layan pelanggan. Perniagaan keluarga dan rangkaian ibu bapa pun dikira, dan pilihan berstruktur wujud melalui Perkeso dan inisiatif pekerjaan belia yang menempatkan lepasan sekolah dalam penempatan pendek. Bingkai jujurnya: pada peringkat ini duit kurang penting daripada bukti. Dua tiga bulan di mana-mana dengan surat rujukan dan satu perkara konkrit yang anda perbaiki mengalahkan enam bulan kosong dalam setiap temuduga selepas itu. Dan kalau anda menuju musim biasiswa yang kompetitif, mampu bercerita tentang kerja sebenar ialah kelebihan senyap yang kebanyakan pemohon sebaya anda tidak ada.",
    cta_en: "Browse internships now",
    cta_bm: "Lihat internship sekarang"
  }
}
];
