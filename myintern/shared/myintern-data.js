// myintern-data.js — Shared data for MyIntern CV Builder ecosystem
// Contains: universities, courses, projects, archetypes, industry context, speak prompts
// All data objects are global variables loaded before page-specific scripts.

/* ── UNIVERSITIES — Malaysian institutions ── */
var UNI_DATA = [
  {cat:'Universiti Awam (IPTA)',items:['Universiti Malaya (UM)','Universiti Kebangsaan Malaysia (UKM)','Universiti Putra Malaysia (UPM)','Universiti Sains Malaysia (USM)','Universiti Teknologi Malaysia (UTM)','Universiti Teknologi MARA (UiTM)','Universiti Islam Antarabangsa Malaysia (UIAM)','Universiti Utara Malaysia (UUM)','Universiti Malaysia Sarawak (UNIMAS)','Universiti Malaysia Sabah (UMS)','Universiti Pendidikan Sultan Idris (UPSI)','Universiti Teknikal Malaysia Melaka (UTeM)','Universiti Tun Hussein Onn Malaysia (UTHM)','Universiti Malaysia Terengganu (UMT)','Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)','Universiti Malaysia Perlis (UniMAP)','Universiti Sultan Zainal Abidin (UniSZA)','Universiti Malaysia Kelantan (UMK)','Universiti Pertahanan Nasional Malaysia (UPNM)','Universiti Sains Islam Malaysia (USIM)']},
  {cat:'Universiti Swasta (IPTS)',items:['Multimedia University (MMU)','Universiti Tunku Abdul Rahman (UTAR)','Universiti Tenaga Nasional (UNITEN)','Universiti Petronas (UTP)','Taylor\'s University','Sunway University','Asia Pacific University (APU)','HELP University','INTI International University','SEGi University','Limkokwing University','KDU University','UCSI University','Universiti Kuala Lumpur (UniKL)','Management & Science University (MSU)','MAHSA University','Universiti Tun Abdul Razak (UNIRAZAK)','Al-Bukhary International University','Binary University','Perdana University','Widad University College','City University Malaysia','Lincoln University College','Universiti Selangor (UNISEL)','International Medical University (IMU)','Monash University Malaysia','University of Nottingham Malaysia','Heriot-Watt University Malaysia','Curtin University Malaysia','Swinburne University Sarawak','University of Southampton Malaysia','Xiamen University Malaysia','University of Reading Malaysia']},
  {cat:'Politeknik',items:['Politeknik Sultan Salahuddin Abdul Aziz Shah','Politeknik Ungku Omar','Politeknik Sultan Haji Ahmad Shah','Politeknik Kota Bharu','Politeknik Ibrahim Sultan','Politeknik Port Dickson','Politeknik Kuching Sarawak','Politeknik Kota Kinabalu','Politeknik Seberang Perai','Politeknik Shah Alam','Politeknik Merlimau','Politeknik Muadzam Shah','Politeknik Sandakan','Politeknik Sultan Mizan Zainal Abidin','Politeknik Tuanku Syed Sirajuddin','Politeknik Mersing','Politeknik Jeli','Politeknik Mukah','Politeknik Hulu Terengganu','Politeknik Banting','Politeknik Nilai','Politeknik Sultan Idris Shah','Politeknik Tun Syed Nasir','Politeknik Metro Kuala Lumpur','Politeknik Metro Johor Bahru','Politeknik Metro Kuantan','Politeknik Metro Tasek Gelugor','Politeknik Metro Betong Sarawak','Politeknik Balik Pulau','Politeknik Pagoh','Politeknik Sultan Abdul Halim Mu\'adzam Shah','Politeknik Dungun','Politeknik Lain (Other)']},
  {cat:'Kolej Komuniti',items:['Kolej Komuniti (any branch)']},
  {cat:'Kolej Swasta / Others',items:['AIMST University','Kolej MDIS Malaysia','Kolej Yayasan Sabah','DISTED College','KPJ Healthcare University College','Berjaya University College','International Centre for Education in Islamic Finance (INCEIF)','First City University College','Kolej Profesional MARA','ADTEC (various)','Institut Kemahiran MARA (IKM)','Akademi Laut Malaysia (ALAM)','Kolej Matrikulasi','Other institution']}
];

/* ── COURSES — real Malaysian programmes ── */
var COURSE_DATA = [
  {cat:'eng',label:'Engineering',items:[
    {name:'Bachelor of Mechanical Engineering',sub:'Mech, manufacturing, automotive'},
    {name:'Bachelor of Electrical Engineering',sub:'Power, electronics, control'},
    {name:'Bachelor of Civil Engineering',sub:'Structural, construction, infrastructure'},
    {name:'Bachelor of Chemical Engineering',sub:'Process, petrochemical, bioprocess'},
    {name:'Bachelor of Electronic Engineering',sub:'Telecoms, embedded systems'},
    {name:'Diploma in Mechanical Engineering',sub:'Politeknik / IPTS'},
    {name:'Diploma in Electrical Engineering',sub:'Politeknik / IPTS'},
    {name:'Diploma in Civil Engineering',sub:'Politeknik / IPTS'},
    {name:'Other Engineering programme',sub:'Aerospace, marine, mechatronics, etc.'}
  ]},
  {cat:'cs',label:'IT / Computer Science',items:[
    {name:'Bachelor of Computer Science',sub:'Software dev, algorithms, AI'},
    {name:'Bachelor of Information Technology',sub:'Systems, networking, IT management'},
    {name:'Bachelor of Software Engineering',sub:'Full-stack, DevOps, testing'},
    {name:'Bachelor of Data Science',sub:'Analytics, ML, big data'},
    {name:'Bachelor of Cybersecurity',sub:'InfoSec, ethical hacking, forensics'},
    {name:'Bachelor of Multimedia / Game Dev',sub:'Animation, game design, VFX'},
    {name:'Diploma in Information Technology',sub:'Politeknik / IPTS'},
    {name:'Diploma in Computer Science',sub:'Politeknik / IPTS'},
    {name:'Other IT / CS programme',sub:'AI, cloud computing, etc.'}
  ]},
  {cat:'biz',label:'Business / Finance',items:[
    {name:'Bachelor of Accounting',sub:'Audit, tax, financial reporting'},
    {name:'Bachelor of Finance',sub:'Banking, investment, risk'},
    {name:'Bachelor of Business Administration',sub:'Management, operations, strategy'},
    {name:'Bachelor of Marketing',sub:'Digital marketing, brand, consumer'},
    {name:'Bachelor of Economics',sub:'Micro, macro, econometrics'},
    {name:'Bachelor of Human Resource Management',sub:'HR, talent, org development'},
    {name:'Bachelor of International Business',sub:'Trade, logistics, global markets'},
    {name:'Bachelor of Actuarial Science',sub:'Insurance, risk modelling'},
    {name:'Diploma in Accountancy',sub:'Politeknik / IPTS'},
    {name:'Diploma in Business Studies',sub:'Politeknik / IPTS'},
    {name:'Other Business programme',sub:'Supply chain, entrepreneurship, etc.'}
  ]},
  {cat:'sci',label:'Science',items:[
    {name:'Bachelor of Biotechnology',sub:'Biotech, genetics, microbiology'},
    {name:'Bachelor of Chemistry',sub:'Analytical, organic, industrial'},
    {name:'Bachelor of Physics',sub:'Applied physics, materials'},
    {name:'Bachelor of Mathematics / Statistics',sub:'Pure maths, applied, stats'},
    {name:'Bachelor of Environmental Science',sub:'Ecology, sustainability'},
    {name:'Bachelor of Food Science',sub:'Food tech, quality, nutrition'},
    {name:'Diploma in Science',sub:'Politeknik / IPTS'},
    {name:'Other Science programme',sub:'Geology, marine biology, etc.'}
  ]},
  {cat:'arts',label:'Arts / Social Science',items:[
    {name:'Bachelor of Law (LLB)',sub:'Legal studies, syariah, corporate law'},
    {name:'Bachelor of Mass Communication',sub:'Journalism, PR, broadcasting'},
    {name:'Bachelor of Psychology',sub:'Clinical, industrial, counselling'},
    {name:'Bachelor of Education',sub:'TESL, science ed, primary ed'},
    {name:'Bachelor of Graphic Design',sub:'Visual design, branding, UX'},
    {name:'Bachelor of Architecture',sub:'Architecture, interior, landscape'},
    {name:'Bachelor of Music / Performing Arts',sub:'Performance, composition'},
    {name:'Bachelor of Political Science',sub:'Governance, policy, IR'},
    {name:'Diploma in Communication',sub:'Politeknik / IPTS'},
    {name:'Other Arts / Social Science',sub:'History, languages, sociology, etc.'}
  ]},
  {cat:'health',label:'Health Sciences',items:[
    {name:'Bachelor of Medicine (MBBS)',sub:'Medicine, surgery'},
    {name:'Bachelor of Pharmacy',sub:'Clinical pharmacy, pharma'},
    {name:'Bachelor of Nursing',sub:'Nursing, midwifery'},
    {name:'Bachelor of Dentistry',sub:'Dental surgery'},
    {name:'Bachelor of Physiotherapy',sub:'Rehab, sports therapy'},
    {name:'Bachelor of Biomedical Science',sub:'Lab, diagnostics, research'},
    {name:'Bachelor of Dietetics / Nutrition',sub:'Clinical nutrition'},
    {name:'Diploma in Nursing',sub:'Politeknik / IPTS'},
    {name:'Diploma in Medical Lab Technology',sub:'Politeknik / IPTS'},
    {name:'Other Health programme',sub:'Optometry, radiography, etc.'}
  ]}
];

/* ── PROJECT DATABASE — course-specific, based on real Malaysian uni syllabi ── */
/* Each course category maps to projects students actually do.
   Sources: UTM/UM/UiTM FYP lists, Reddit r/malaysia, r/MalaysianPF,
   common politeknik LI reports, and standard MQA programme structures. */
var PROJ_DB = {
  cs: {
    label:'Based on your IT / CS course',
    items:[
      {name:'Student Management System',sub:'Common FYP — CRUD app with login, database, reports',ph:"e.g. 'Built a student registration system using PHP, MySQL and Bootstrap for Faculty of Computing FYP'"},
      {name:'E-commerce / Online Store',sub:'Shopping cart, payment gateway, product catalog',ph:"e.g. 'Developed an online store for a local SME using Laravel with Stripe payment integration'"},
      {name:'Mobile App (Android / Flutter)',sub:'Campus app, food ordering, booking system',ph:"e.g. 'Built a campus cafeteria ordering app using Flutter with real-time order tracking for 300+ users'"},
      {name:'Data Analysis / Visualisation',sub:'Python pandas, Power BI, Tableau, Excel analytics',ph:"e.g. 'Analysed 2 years of e-commerce sales data using Python and created a Power BI dashboard for the client'"},
      {name:'Web Scraping / Automation',sub:'BeautifulSoup, Selenium, scheduled scripts',ph:"e.g. 'Built a Python web scraper to collect and compare laptop prices across 3 Malaysian e-commerce sites daily'"},
      {name:'Machine Learning / AI Model',sub:'Classification, prediction, NLP, image recognition',ph:"e.g. 'Trained a sentiment analysis model on 10K Malaysian tweets using scikit-learn (82% accuracy)'"},
      {name:'IoT / Embedded System',sub:'Arduino, Raspberry Pi, sensor-based project',ph:"e.g. 'Built a smart parking system using Arduino, ultrasonic sensors and an LCD display for campus parking'"},
      {name:'Cybersecurity / Networking',sub:'Penetration testing, firewall config, network audit',ph:"e.g. 'Conducted a vulnerability assessment of the faculty's lab network using Nmap and Wireshark'"},
      {name:'Game / Simulation',sub:'Unity, Unreal, Pygame, gamification',ph:"e.g. 'Developed a 2D educational game in Unity to teach Bahasa Malaysia vocabulary to primary school kids'"},
      {name:'API / Backend System',sub:'REST API, microservices, database design',ph:"e.g. 'Designed and built a REST API for a hostel booking system using Node.js and MongoDB'"}
    ]
  },
  biz: {
    label:'Based on your Business / Finance course',
    items:[
      {name:'Business Plan / Feasibility Study',sub:'Startup pitch, financial projections, market sizing',ph:"e.g. 'Wrote a full business plan for a campus laundry startup — market analysis, 3-year P&L, break-even in Year 2'"},
      {name:'Financial Statement Analysis',sub:'Ratio analysis, trend analysis, company valuation',ph:"e.g. 'Analysed Maybank and CIMB financial statements (2021-2024) using ratio analysis and DuPont framework'"},
      {name:'Marketing Plan / Campaign',sub:'4P analysis, STP, digital marketing strategy',ph:"e.g. 'Created a digital marketing plan for a local bubble tea brand — Instagram strategy, budget allocation, KPI targets'"},
      {name:'Consumer Research / Survey',sub:'Questionnaire design, SPSS analysis, findings report',ph:"e.g. 'Surveyed 200 students on online shopping behaviour, analysed results using SPSS chi-square and regression'"},
      {name:'Accounting / Audit Simulation',sub:'Bookkeeping, trial balance, audit procedures',ph:"e.g. 'Prepared full set of accounts (journal entries to financial statements) for a simulated SME using UBS Accounting'"},
      {name:'Tax Computation Exercise',sub:'Individual/corporate tax, tax planning, e-filing',ph:"e.g. 'Computed individual and corporate tax for 5 case studies covering reliefs, rebates and withholding tax'"},
      {name:'Investment Portfolio Project',sub:'Stock analysis, portfolio construction, risk assessment',ph:"e.g. 'Built a mock investment portfolio of 10 Bursa Malaysia stocks — tracked returns over 3 months vs KLCI benchmark'"},
      {name:'Case Competition Entry',sub:'L\'Oreal Brandstorm, CFA Research Challenge, etc.',ph:"e.g. 'Reached semi-finals of CFA Institute Research Challenge 2025 — presented equity research on Top Glove'"},
      {name:'Operations / Supply Chain Project',sub:'Process mapping, inventory model, logistics analysis',ph:"e.g. 'Mapped the supply chain of a campus F&B vendor and proposed inventory optimisation using EOQ model'"},
      {name:'HR / Organisational Study',sub:'Employee survey, job analysis, training plan',ph:"e.g. 'Conducted a job satisfaction survey at a local SME (50 employees) and recommended a retention strategy'"}
    ]
  },
  eng: {
    label:'Based on your Engineering course',
    items:[
      {name:'CAD / Technical Drawing',sub:'AutoCAD, SolidWorks, CATIA, engineering drawings',ph:"e.g. 'Designed a 3-storey residential building in AutoCAD with structural calculations per MS EN 1992'"},
      {name:'FYP — Design & Build',sub:'Capstone project with prototype or simulation',ph:"e.g. 'Designed and fabricated a solar-powered water filtration unit for rural communities as FYP'"},
      {name:'Circuit / PCB Design',sub:'Altium, Eagle, Proteus, microcontroller programming',ph:"e.g. 'Designed a PCB for a temperature monitoring system using PIC16F877A and programmed in C'"},
      {name:'Structural / Load Analysis',sub:'STAAD Pro, SAP2000, manual calculations',ph:"e.g. 'Performed structural analysis of a steel truss bridge using SAP2000 with wind and live load combinations'"},
      {name:'Process Simulation',sub:'Aspen HYSYS, MATLAB Simulink, process flow design',ph:"e.g. 'Simulated a methanol production plant in Aspen HYSYS and optimised heat exchanger network for 15% energy savings'"},
      {name:'Lab / Materials Testing',sub:'Tensile test, concrete cube test, soil analysis',ph:"e.g. 'Conducted concrete cube compression tests (7, 14, 28 days) and analysed results against MS EN 206 standards'"},
      {name:'Robot / Mechatronics Build',sub:'Line follower, robotic arm, autonomous vehicle',ph:"e.g. 'Built a line-following robot using Arduino Mega for Robocon Malaysia 2025 qualifying round'"},
      {name:'Site Visit / Industrial Report',sub:'Construction site, factory, power plant visit report',ph:"e.g. 'Documented construction progress at a highway project site — concrete pouring, rebar inspection, safety compliance'"},
      {name:'Environmental / Sustainability Study',sub:'EIA, waste management, water quality testing',ph:"e.g. 'Conducted Environmental Impact Assessment for a proposed housing development near a mangrove area'"},
      {name:'CNC / Manufacturing Project',sub:'G-code programming, lathe/milling, quality control',ph:"e.g. 'Programmed CNC milling operations for an aluminium bracket — G-code, tool path optimisation, tolerance check'"}
    ]
  },
  sci: {
    label:'Based on your Science course',
    items:[
      {name:'Lab Research / Experiment',sub:'Wet lab, field sampling, data collection',ph:"e.g. 'Studied the antimicrobial properties of local honey samples against E. coli using disk diffusion method'"},
      {name:'Research Paper / Literature Review',sub:'Academic writing, journal review, methodology',ph:"e.g. 'Wrote a 5,000-word literature review on microplastics in Malaysian rivers for Environmental Science course'"},
      {name:'Statistical Analysis Project',sub:'SPSS, R, hypothesis testing, regression',ph:"e.g. 'Analysed the relationship between air pollution (PM2.5) and hospital admissions in KL using R regression'"},
      {name:'Field Study / Biodiversity Survey',sub:'Species identification, transect sampling, ecosystem mapping',ph:"e.g. 'Conducted a mangrove biodiversity survey in Kuala Selangor — identified 12 crab species across 3 zones'"},
      {name:'Food Science / Quality Test',sub:'Nutritional analysis, shelf life study, sensory evaluation',ph:"e.g. 'Performed proximate analysis and sensory evaluation of jackfruit chips with varying drying temperatures'"},
      {name:'Biotechnology / Genetics Lab',sub:'PCR, gel electrophoresis, DNA extraction, cloning',ph:"e.g. 'Extracted DNA from local paddy varieties and performed PCR amplification to identify blast-resistant genes'"},
      {name:'Data Science / Bioinformatics',sub:'Python, R, biological databases, sequence analysis',ph:"e.g. 'Used Python BioPython library to analyse protein sequences from NCBI database for drug target identification'"},
      {name:'Environmental Monitoring',sub:'Water quality, air quality, soil testing',ph:"e.g. 'Monitored water quality of Sungai Klang over 4 weeks — pH, BOD, COD, TSS — and compared against Class II standards'"}
    ]
  },
  arts: {
    label:'Based on your Arts / Social Science course',
    items:[
      {name:'Research Paper / Thesis Draft',sub:'Academic writing, qualitative/quantitative study',ph:"e.g. 'Wrote a 6,000-word research paper on social media influence on GE15 voting patterns among youth'"},
      {name:'Documentary / Video Production',sub:'Filming, editing, storytelling, final cut',ph:"e.g. 'Produced a 10-minute documentary on Orang Asli land rights in Pahang for Media Production course'"},
      {name:'Graphic Design / Branding',sub:'Logo, brand identity, poster series, packaging',ph:"e.g. 'Designed complete brand identity (logo, colour palette, packaging) for a student-run kopitiam concept'"},
      {name:'UI/UX Design / App Mockup',sub:'Figma wireframes, user research, prototype',ph:"e.g. 'Designed a high-fidelity Figma prototype for a campus event discovery app — user research with 15 students'"},
      {name:'PR / Communications Campaign',sub:'Press release, media kit, crisis comms plan',ph:"e.g. 'Created a CSR communications plan for a mock client including press releases, social media calendar, KPIs'"},
      {name:'Social Media Content Strategy',sub:'Content calendar, analytics, platform management',ph:"e.g. 'Managed Instagram for Faculty of Arts orientation week — 40 posts, grew from 0 to 800 followers in 2 weeks'"},
      {name:'Legal Case Study / Moot Court',sub:'Case analysis, legal brief, oral arguments',ph:"e.g. 'Prepared and argued a mock constitutional law case on freedom of speech in Malaysia for moot court competition'"},
      {name:'Policy Brief / Position Paper',sub:'Government policy analysis, recommendations',ph:"e.g. 'Wrote a 3,000-word policy brief on improving mental health support for Malaysian university students'"},
      {name:'Psychology Research / Survey',sub:'Questionnaire, interview, thematic analysis',ph:"e.g. 'Conducted interviews with 20 B40 students on academic stress and analysed themes using NVivo'"},
      {name:'Teaching Practice / Lesson Plan',sub:'Micro-teaching, curriculum design, assessment',ph:"e.g. 'Designed and delivered 5 English lesson plans for Year 4 students during 8-week practicum in Perak'"}
    ]
  },
  health: {
    label:'Based on your Health Sciences course',
    items:[
      {name:'Clinical Attachment / Case Study',sub:'Patient case report, clinical rotation log',ph:"e.g. 'Documented and presented a Type 2 diabetes case study during 4-week clinical rotation at PPUM'"},
      {name:'Community Health Project',sub:'Health screening, awareness campaign, outreach',ph:"e.g. 'Organised a free health screening event in Kampung Baru — blood pressure, BMI, diabetes risk for 150 residents'"},
      {name:'Lab / Diagnostic Report',sub:'Blood analysis, microbiology, histopathology',ph:"e.g. 'Performed complete blood count and differential analysis on 30 samples during medical lab technology practical'"},
      {name:'Pharmacy Compounding / Dispensing',sub:'Drug preparation, prescription review, counselling',ph:"e.g. 'Dispensed and counselled patients on 50+ prescriptions during 6-week community pharmacy attachment'"},
      {name:'Research Paper / Mini Thesis',sub:'Clinical research, epidemiology, public health study',ph:"e.g. 'Conducted a cross-sectional study on antibiotic resistance awareness among 200 university students'"},
      {name:'Nursing Care Plan',sub:'Patient assessment, nursing diagnosis, interventions',ph:"e.g. 'Developed comprehensive nursing care plans for post-surgical patients during orthopaedic ward rotation'"},
      {name:'Health Education Material',sub:'Poster, pamphlet, video for patient education',ph:"e.g. 'Created a bilingual (BM/EN) pamphlet on dengue prevention for distribution at a rural health clinic'"},
      {name:'Physiotherapy / Rehab Protocol',sub:'Treatment plan, exercise programme, outcome measurement',ph:"e.g. 'Designed a 6-week rehabilitation protocol for ACL reconstruction patients with measurable milestones'"}
    ]
  },
  general: {
    label:'Common projects (any course)',
    items:[
      {name:'Final Year Project (FYP)',sub:'Your capstone project — the big one',ph:"Describe your FYP: what was the problem, what did you build/research, what was the result?"},
      {name:'Group Assignment / Case Study',sub:'Team project with report and presentation',ph:"e.g. 'Led a team of 4 to analyse Tesla's entry into Southeast Asia — presented SWOT and Go-To-Market strategy'"},
      {name:'Competition / Hackathon Entry',sub:'Participated or won a competition',ph:"e.g. 'Built a flood prediction prototype at AngelHack KL 2025 — placed Top 10 out of 40 teams'"},
      {name:'Freelance / Personal Project',sub:'Something you built on your own time',ph:"Describe what you built, why, and any results (users, revenue, completion)"},
      {name:'Something else',sub:'Any other project worth mentioning',ph:"What was the project? What did you do? What was the outcome?"}
    ]
  }
};

/* ── INDUSTRY CONTEXT — industry-specific advice per course category ── */
var INDUSTRY_CONTEXT = {
  cs: {
    label:'Tech / IT',
    projects:'Projects are the #1 thing tech employers screen for. A CS student with zero projects will be filtered out before a human reads the CV.',
    projectTip:'Build something — even a simple CRUD app or data analysis counts. Describe the tech stack.',
    activities:'Hackathons and coding competitions signal initiative. Part-time freelance work also counts.',
    skills:'List every language and tool you have touched — Python, Java, SQL, Git.',
    skillsExpected:['Python','Java','SQL','HTML / CSS','JavaScript'],
    interviewBridge:'Interviewers will ask you to walk through your project. If you cannot describe what you built, why, and what you learned — they will notice.',
    bulletExample:'Student Management System: Built a web-based attendance tracking system using PHP and MySQL, deployed for 2 classes (60+ students) with QR-based check-in.'
  },
  biz: {
    label:'Business / Finance',
    projects:'Case competitions, financial analysis reports, and business plans show you can apply theory. GLCs and Big 4 firms look for this.',
    projectTip:'Frame assignments as projects — a financial statement analysis is a legitimate entry.',
    activities:'Club leadership (president, AJK, treasurer) matters more in business than any other field. Employers equate it with management potential.',
    skills:'Excel is non-negotiable. Add UBS/SQL Accounting if in Accounting. SPSS matters for Marketing.',
    skillsExpected:['Excel / Spreadsheets','PowerPoint','Microsoft Word','Google Workspace'],
    interviewBridge:'Business interviewers will ask "tell me about a time you led a team" — if your CV lists no leadership activities, you have no story to tell.',
    bulletExample:'Financial Statement Analysis: Performed ratio analysis on Maybank annual reports (2021-2024) using DuPont framework, presented findings to class of 40.'
  },
  eng: {
    label:'Engineering',
    projects:'FYP and lab projects are expected. Site visit reports and CAD drawings count too. Engineers without project entries look incomplete.',
    projectTip:'Describe what you designed, tools used (AutoCAD, MATLAB, SolidWorks), and any measurable outcome.',
    activities:'PALAPES, SUKSIS, PBSM are highly valued — they signal discipline. Site visits and industrial training count.',
    skills:'List engineering software specifically — AutoCAD, SolidWorks, MATLAB. Generic "Microsoft Office" is not enough.',
    skillsExpected:['AutoCAD','Excel / Spreadsheets','Microsoft Word'],
    interviewBridge:'Engineering interviewers will ask about your FYP in detail. If your CV says "FYP" with no description, expect an awkward silence.',
    bulletExample:'Steel Truss Bridge Design: Designed a 3-span truss bridge in AutoCAD with structural load analysis per MS EN 1992, achieving factor of safety 1.8.'
  },
  sci: {
    label:'Science',
    projects:'Lab research, field studies, and data analysis are your evidence. Even a literature review counts if framed well.',
    projectTip:'State the research question, method, and one result — even if preliminary.',
    activities:'Lab assistant roles, tutoring, and community health outreach all count.',
    skills:'List statistical tools (SPSS, R, Python), lab techniques, and certifications.',
    skillsExpected:['R / SPSS / MATLAB','Excel / Spreadsheets','Microsoft Word'],
    interviewBridge:'Science interviewers will ask about your methodology. Be ready to explain why you chose a particular approach.',
    bulletExample:'Water Quality Analysis: Monitored Sungai Klang samples over 4 weeks — pH, BOD, COD, TSS — compared against Class II standards and presented findings.'
  },
  arts: {
    label:'Arts / Social Science',
    projects:'A portfolio is your CV. Design work, video production, published articles, moot court — these are your projects.',
    projectTip:'Link or describe your best work. If group project, specify your exact role.',
    activities:'Event organisation, content management, debate, student journalism show communication skills.',
    skills:'Canva, Figma, video editing, writing tools — list them all. Bilingual ability (BM + EN) is a strong differentiator.',
    skillsExpected:['Canva','Microsoft Word','PowerPoint'],
    interviewBridge:'Interviewers in creative fields will ask to see your work. Make sure your CV mentions something you can actually show.',
    bulletExample:'Faculty Week Campaign: Managed Instagram for Faculty of Arts orientation — planned 40 posts over 2 weeks, grew page from 0 to 800 followers.'
  },
  health: {
    label:'Health Sciences',
    projects:'Clinical attachments, community health projects, and case studies are your projects. Lab work counts too.',
    projectTip:'Describe the clinical setting, your role, and one learning outcome.',
    activities:'Community health outreach, first aid volunteering, hospital attachments demonstrate commitment.',
    skills:'List clinical skills, lab techniques, certifications (First Aid/CPR), and relevant software.',
    skillsExpected:['Microsoft Word','Excel / Spreadsheets','First Aid / CPR'],
    interviewBridge:'Health interviewers will ask about patient interactions. Your CV should mention at least one clinical or community experience.',
    bulletExample:'Community Health Screening: Organised free health screening in Kampung Baru — blood pressure, BMI, diabetes risk assessment for 150 residents.'
  }
};

/* ── CV ARCHETYPES — section order, skills, and guidance per course cluster ── */
var CV_ARCHETYPES = {
  cs: {
    cluster:'computing',
    displayName:'Computing & Software Engineering',
    sectionOrder:['Header','Education','Projects','Experience','Technical Skills','Extracurriculars'],
    skillsTechnical:['Data structures','Algorithms','OOP','REST APIs','SQL','Version control','Agile','Unit testing','Machine learning basics','Cloud fundamentals'],
    skillsSoftware:['Python','Java','JavaScript','TypeScript','React','Node.js','Git','GitHub','Docker','VS Code','Figma','Linux','MySQL','PostgreSQL','MongoDB'],
    skillsSoft:['Problem-solving','Teamwork','Communication','Self-learning','Attention to detail'],
    projectTitles:['Final Year Project','Hackathon entry','Personal portfolio website','Open-source contribution','University database system','Mobile app'],
    experienceVerbs:['Built','Developed','Deployed','Implemented','Debugged','Refactored','Automated','Integrated','Optimised','Shipped'],
    certifications:['AWS Cloud Practitioner','Google Cloud Associate','Coursera ML specialisation','freeCodeCamp certs','CCNA'],
    lengthGuidance:'1 page',
    portfolioRequired:false,
    portfolioType:'GitHub',
    notes:'Projects > Experience. GitHub link in header. ATS keywords matter for MNCs.'
  },
  biz: {
    cluster:'business_marketing',
    displayName:'Business, Management & Marketing',
    sectionOrder:['Header','Education','Experience','Extracurriculars','Skills','Certifications'],
    skillsTechnical:['Market research','Consumer behaviour analysis','Campaign planning','Brand management','Social media strategy','SEO basics','Email marketing','CRM usage','Sales funnel','Event coordination','Budget management'],
    skillsSoftware:['Microsoft Excel','PowerPoint','Google Analytics','Meta Ads Manager','Canva','Mailchimp','HubSpot','Salesforce','Power BI','Hootsuite','Notion','Trello'],
    skillsSoft:['Communication','Leadership','Stakeholder management','Creativity','Adaptability','Commercial awareness'],
    projectTitles:['Marketing Club President','Entrepreneurship Challenge','Consumer research','University career fair organiser','Case competition'],
    experienceVerbs:['Led','Organised','Coordinated','Pitched','Increased','Grew','Researched','Presented','Collaborated','Managed'],
    certifications:['Google Digital Marketing','Meta Blueprint','HubSpot Inbound Marketing','CIM Foundation','Google Analytics cert'],
    lengthGuidance:'1 page',
    portfolioRequired:false,
    portfolioType:null,
    notes:'Extracurricular leadership carries disproportionate weight. Quantified outcomes critical.'
  },
  eng: {
    cluster:'engineering_core',
    displayName:'Engineering (Mechanical / Civil / Electrical / Chemical)',
    sectionOrder:['Header','Education','Projects / FYP','Experience','Technical Skills','Software Proficiency','Extracurriculars'],
    skillsTechnical:['CAD drafting','Finite element analysis','Structural analysis','Thermodynamics','Fluid mechanics','Control systems','PCB design','PLC programming','Circuit design','Lean manufacturing','Quality assurance','Site supervision'],
    skillsSoftware:['AutoCAD','SolidWorks','MATLAB','ANSYS','Revit','Civil 3D','LabVIEW','Arduino IDE','Simulink','Python','Microsoft Project'],
    skillsSoft:['Problem-solving','Teamwork','Safety awareness','Precision','Willingness to learn on-site','Reporting'],
    projectTitles:['Final Year Project','Capstone Design Challenge','Robotics competition','Solar car team','Bridge design project','PLC automation build'],
    experienceVerbs:['Designed','Drafted','Tested','Fabricated','Simulated','Inspected','Commissioned','Analysed','Maintained'],
    certifications:['IEM Graduate Member','OSHA basic','AutoCAD Certified User','Six Sigma Yellow Belt','Scheduled Waste Management'],
    lengthGuidance:'1-2 pages',
    portfolioRequired:false,
    portfolioType:null,
    notes:'Relevant coursework under Education is standard. Software proficiency as dedicated section. Site roles weight willingness to relocate.'
  },
  sci: {
    cluster:'sciences',
    displayName:'Sciences (Biology, Chemistry, Physics, Environmental)',
    sectionOrder:['Header','Education','Research & Lab Experience','Projects / FYP','Technical Skills','Extracurriculars'],
    skillsTechnical:['Lab techniques','Data analysis','Experimental design','Field sampling','Statistical analysis','Scientific writing','Titration','Chromatography','Spectroscopy','PCR','Cell culture'],
    skillsSoftware:['SPSS','R','Python','GraphPad Prism','ChemDraw','GIS (ArcGIS/QGIS)','ImageJ','EndNote'],
    skillsSoft:['Analytical thinking','Patience','Precision','Curiosity','Reading dense literature'],
    projectTitles:['Final Year Project','Research assistant','Science olympiad','Lab demonstrator'],
    experienceVerbs:['Measured','Analysed','Cultured','Quantified','Extracted','Observed','Documented','Presented'],
    certifications:['Good Lab Practice (GLP)','Chemical safety','Biosafety Level training'],
    lengthGuidance:'1-2 pages',
    portfolioRequired:false,
    portfolioType:null,
    notes:'Lab techniques list is central — be specific. Any conference poster or publication materially strengthens CV.'
  },
  arts: {
    cluster:'comms_pr',
    displayName:'Communications, Design & Creative',
    sectionOrder:['Header','Portfolio Link','Education','Experience','Projects','Software Skills','Extracurriculars'],
    skillsTechnical:['Copywriting','Press release writing','Social media content planning','Layout design','Typography','Branding','UI/UX basics','Wireframing','Motion graphics','Video editing','Photography'],
    skillsSoftware:['Adobe Photoshop','Illustrator','InDesign','Premiere Pro','After Effects','Figma','Canva','Procreate','Blender','Lightroom','CapCut'],
    skillsSoft:['Creativity','Visual thinking','Receiving feedback','Meeting deadlines','Client communication','Storytelling'],
    projectTitles:['Student newspaper editor','Design showcase','Freelance logo','PR campaign','Podcast host','Student magazine art director'],
    experienceVerbs:['Designed','Illustrated','Animated','Edited','Filmed','Prototyped','Branded','Photographed','Published','Wrote','Pitched'],
    certifications:['Adobe Certified Professional','Google UX Design','Figma Academy','Meta Blueprint Social Media'],
    lengthGuidance:'1 page + portfolio',
    portfolioRequired:true,
    portfolioType:'Behance / Dribbble / Instagram',
    notes:'Portfolio is the CV. Every design internship requires one. Bilingual (BM + EN) is a strong differentiator.'
  },
  health: {
    cluster:'medicine_health',
    displayName:'Medicine, Pharmacy & Health Sciences',
    sectionOrder:['Header','Education','Clinical / Hospital Postings','Research & Publications','Extracurriculars & Volunteering','Skills & Certifications'],
    skillsTechnical:['Patient assessment','Clinical history-taking','Phlebotomy','Aseptic technique','Medication reconciliation','Literature review','Lab techniques (PCR, ELISA)','Data collection'],
    skillsSoftware:['SPSS','R','Microsoft Excel','EndNote','Mendeley','Hospital information systems'],
    skillsSoft:['Empathy','Communication with patients','Teamwork','Stress tolerance','Ethical awareness','Attention to detail'],
    projectTitles:['Clinical posting','Research assistant','Health screening camp volunteer','Medical society exco','Final year thesis'],
    experienceVerbs:['Assisted','Observed','Administered','Counselled','Documented','Researched','Presented','Volunteered'],
    certifications:['Basic Life Support (BLS)','Advanced Cardiac Life Support (ACLS)','Good Clinical Practice (GCP)','MMC provisional registration'],
    lengthGuidance:'1-2 pages',
    portfolioRequired:false,
    portfolioType:null,
    notes:'Clinical postings by specialty and duration form the spine. Research output weighted heavily. Extracurriculars showing empathy matter.'
  }
};

/* ── ACTION VERBS & TOOLS — for bullet quality checking ── */
var ACTION_VERBS=['built','designed','developed','created','led','managed','analysed','analyzed','conducted','implemented','organised','organized','coordinated','prepared','performed','wrote','produced','maintained','tested','deployed','configured','presented','established','founded','trained','supervised','delivered'];

var TOOLS_KEYWORDS=['php','mysql','python','java','javascript','html','css','sql','react','flutter','laravel','node','excel','powerpoint','canva','figma','photoshop','autocad','solidworks','matlab','spss','tableau','power bi','sap','arduino','raspberry','unity','photoshop','premiere','wordpress','shopify','firebase','mongodb','postgresql','git','github','aws','docker','linux'];

/* ── SPEAK PROMPTS — bilingual interview speak-test prompts per course ── */
var SPEAK_PROMPTS={
  cs:{
    en:['Tell me about your strongest project. What did you build, what tools did you use, and what was the result?','You listed Python and SQL as skills. Have you used them together? Give me an example.','Why do you want an internship in tech? What do you hope to learn?'],
    bm:['Ceritakan tentang projek terbaik anda. Apa yang anda bina, alat apa yang anda guna, dan apa hasilnya?','Anda ada Python dan SQL. Pernah guna kedua-duanya dalam satu projek? Beri contoh.','Kenapa anda nak intern dalam bidang teknologi? Apa yang anda harap belajar?']
  },
  biz:{
    en:['Describe a time you analysed financial data. What did you find?','You mentioned a business plan. Walk me through the problem you were solving.','What leadership experience do you have? Give a specific example.'],
    bm:['Ceritakan pengalaman anda menganalisis data kewangan. Apa yang anda temui?','Anda ada business plan. Terangkan masalah yang anda cuba selesaikan.','Apa pengalaman kepimpinan anda? Beri contoh yang spesifik.']
  },
  eng:{
    en:['Walk me through your biggest engineering project. What did you design and what tools did you use?','Tell me about a time you had to solve a technical problem with no guidance.','What engineering software are you most confident with? Show me how you would use it.'],
    bm:['Terangkan projek kejuruteraan terbesar anda. Apa yang anda reka dan alat apa yang anda guna?','Ceritakan masa anda perlu selesaikan masalah teknikal tanpa bantuan.','Perisian kejuruteraan apa yang anda paling yakin? Tunjukkan bagaimana anda gunakannya.']
  },
  sci:{
    en:['Describe your most interesting lab experiment. What was the research question?','How did you collect and analyse your data? Be specific about methods.','Why are you passionate about science? What drives your curiosity?'],
    bm:['Ceritakan eksperimen makmal paling menarik anda. Apa soalan penyelidikannya?','Bagaimana anda kumpul dan analisis data anda? Nyatakan kaedah dengan spesifik.','Kenapa anda minat sains? Apa yang mendorong anda?']
  },
  arts:{
    en:['Show me your best piece of work. What was the brief, and how did you approach it?','Tell me about a campaign or event you organised. What was your role?','How do you handle creative feedback? Give me a real example.'],
    bm:['Tunjukkan karya terbaik anda. Apa brief-nya dan bagaimana anda approach?','Ceritakan tentang kempen atau acara yang anda anjurkan. Apa peranan anda?','Bagaimana anda terima feedback kreatif? Beri contoh sebenar.']
  },
  health:{
    en:['Describe a clinical experience that changed how you think about patient care.','Tell me about a community health project you were involved in.','What clinical skills do you feel most confident about?'],
    bm:['Ceritakan pengalaman klinikal yang ubah cara anda fikir tentang penjagaan pesakit.','Ceritakan projek kesihatan komuniti yang anda terlibat.','Kemahiran klinikal apa yang anda paling yakin?']
  },
  general:{
    en:['Tell me about yourself — who are you and what are you studying?','What is your biggest achievement so far?','Why should an employer pick you for this internship?'],
    bm:['Ceritakan tentang diri anda — siapa anda dan apa yang anda belajar?','Apa pencapaian terbesar anda setakat ini?','Kenapa majikan patut pilih anda untuk internship ini?']
  }
};
