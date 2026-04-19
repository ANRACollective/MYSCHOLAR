# MyIntern — CV Builder Flow Mockup Brief

## What to build
A single HTML file (`myintern-cv-builder.html`) that is a mobile UI mockup of the CV Builder flow for MyIntern — a Malaysian student internship product. This is a prototype/mockup only, no backend needed.

## Design language
- Dark glass aesthetic: background `#0a0f1e`, panels `#0d1426`
- Accent: blue-indigo gradient `#3b82f6 → #6366f1`, highlight blue `#63b3ed`
- Font: system UI stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`)
- Mobile-first: render inside a 390×820px phone frame centered on the page
- No emojis anywhere in the UI
- All interactive elements must work via plain `onclick` attributes calling global JS functions

## Phone frame
Render a 390×820px rounded rectangle (border-radius: 40px) centered on a dark page. Status bar at top (44px, shows "9:41"). All screens are `position: absolute` inside the frame. The intro screen is a normal flow div.

---

## Screens

### Intro Screen
- Badge: "CV BUILDER"
- Title: "Let's build your **CV from scratch**" (highlight "CV from scratch" in `#63b3ed`)
- Subtitle: "Answer a few questions. We'll turn your answers into a proper CV — even if you have zero work experience."
- CV Strength box showing 0% with 4 section labels: Education, Experience, Skills, Profile
- Steps preview list (4 items with dots): "Your university & studies", "Projects & activities", "Skills & tools", "Why this role"
- Button: "Start building →" — clicking hides intro and shows Q0

---

### Q0 — University (Step 1 of 8, progress 12%)
- Title: "Which university?"
- Hint: "Type to search — we'll personalise your CV."
- Text search input at top (filters the list below as user types)
- Scrollable list of university options (single select — clicking one highlights it and enables Next):
  - Universiti Malaya (UM)
  - Universiti Teknologi Malaysia (UTM)
  - Universiti Teknologi MARA (UiTM)
  - Universiti Kebangsaan Malaysia (UKM)
  - Universiti Putra Malaysia (UPM)
  - Universiti Sains Malaysia (USM)
  - Universiti Utara Malaysia (UUM)
  - Universiti Malaysia Pahang (UMP)
  - Universiti Tun Hussein Onn (UTHM)
  - Universiti Teknikal Malaysia Melaka (UTeM)
  - Multimedia University (MMU)
  - Asia Pacific University (APU)
  - Universiti Tunku Abdul Rahman (UTAR)
  - Taylor's University
  - Sunway University
  - HELP University
  - INTI International University
  - SEGi University
  - Limkokwing University
  - KDU University College
  - Politeknik (various)
  - Kolej Komuniti
- Toast on selection: "+10 CV strength"
- Next button (disabled until selection), Skip link

---

### Q1 — Field of study (Step 2 of 8, progress 25%)
- Title: "What are you studying?"
- Hint: "Pick the closest match."
- 4 options (single select):
  - Computer Science / IT
  - Business & Finance
  - Engineering
  - Design & Media
- Toast: "+15 CV strength"
- Next, Skip

---

### Q2 — Study level (Step 3 of 8, progress 37%)
- Title: "What level are you at?"
- Hint: "This sets expectations for your experience."
- 4 options (single select):
  - Diploma — Early years
  - Diploma — Final year
  - Degree — Early years
  - Degree — Final year
- Toast: "+15 CV strength"
- Next, Skip

---

### Q3 — Projects (Step 4 of 8, progress 50%)
- Title: "Any projects — even class work?"
- Hint: "Select all that apply."
- Multi-select chip grid organised into 4 categories:
  - **IT & Software**: Attendance System, Online Booking System, Inventory System, E-commerce Website, Mobile App, Library System, Canteen App, Dashboard / Report
  - **Business & Finance**: Business Plan, Market Research, Financial Analysis, Feasibility Study, Case Study
  - **Engineering**: CAD Design, Circuit / PCB Design, Prototype Build, Technical Report
  - **Creative & Media**: Video Production, Photography Portfolio, Branding / Logo, Social Media Campaign, Infographic / Poster
- Custom text input at bottom: "Describe your project briefly..."
- Next enables when any chip selected OR custom input has text
- Toast: "+20 CV strength"
- Next, Skip: "I haven't done any yet"

---

### Q4 — Activities (Step 5 of 8, progress 62%)
- Title: "Activities outside class?"
- Hint: "Persatuan, part-time, volunteer — all counts."
- Multi-select chip grid:
  - **Uniform Bodies**: PALAPES, SUKSIS, PBSM, St John Ambulance, RELA
  - **Student Roles**: Persatuan Pelajar, Kolej Kediaman, Majlis Perwakilan, Event Committee, Faculty Rep
  - **Skills & Interests**: Debate, Public Speaking, Sports Rep, Photography, Community Service, Cultural Performance
  - **Work Experience**: Part-time Retail, Part-time F&B, Freelance Work, Family Business, Tutor / Teaching
- Custom text input: "Anything else? Add it here..."
- Toast: "+20 CV strength"
- Next, Skip: "Nothing yet — that's okay"

---

### Q5 — Skills (Step 6 of 8, progress 75%)
- Title: "What do you already know?"
- Hint: "Select all — basics count too."
- Multi-select chip grid:
  - **Tools & Software**: Microsoft Office, Excel, PowerPoint, Google Docs, Canva, Figma, Photoshop, Video Editing, AutoCAD, MATLAB
  - **Coding & Tech**: Python, Java, HTML / CSS, SQL, C++, JavaScript, PHP, MySQL
  - **Languages**: Bahasa Malaysia, English, Mandarin, Tamil
  - **Certs & Others**: MUET, Google Analytics, First Aid, Social Media Mgmt, UBS Accounting, SQL Accounting
- Custom text input: "Anything else? Type here..."
- Toast: "+15 CV strength"
- Next, Skip

---

### Q6 — Why this role (Step 7 of 8, progress 87%)
- Title: "Why this internship?"
- Hint: "Pick a starter, then add your own words."
- 4 sentence starter options (single select):
  - I want real experience, not just theory
  - This matches my course / final year project
  - I want to learn from industry professionals
  - I want to build my portfolio before I graduate
- Optional free-text textarea below: "Add more detail here (optional)..."
- Next enables when option selected OR textarea has text
- Toast: "+10 CV strength"
- Button: "Build my CV →" (goes to completion)
- Skip link

---

### Completion Screen (Step 8 of 8)
- Circular SVG arc showing 95% fill in blue
- Score: "95" large in blue
- Label: "CV Strength"
- Sub: "out of 100 — strong for a student CV"
- Title: "Your CV is ready"
- Body: "We've turned your answers into clean, professional bullets. Next: find the gaps for this role."
- 4 green chips: "Education added", "Projects added", "Skills added", "Profile written"
- Confetti burst animation on arrival (16 coloured pieces fall and fade)
- Button: "See your gaps for this role →" (can show alert for now)

---

## Transitions
- Each screen slides in from right (`transform: translateX(100%)` → `translateX(0)`)
- Previous screen slides out to left (`translateX(-100%)`)
- Duration: 320ms, `cubic-bezier(0.4,0,0.2,1)`
- Chips toggle a `selected` state (blue border + blue text)
- "Next" button starts at 35% opacity / disabled, becomes full opacity / enabled when valid input present
- A small toast bar ("+ X CV strength") animates in after a valid selection

## Progress bar
Thin 3px bar at top of each question screen. Blue gradient fill. Width set per step (12%, 25%, 37%, 50%, 62%, 75%, 87%, 100%).

## Step counter
Small uppercase label above question title: "STEP X OF 8"

---

## Critical: all JS must use global functions
Use plain `onclick="functionName()"` on all buttons, chips, and options. Define all functions as globals in a `<script>` tag at the bottom of `<body>`. Do NOT use IIFE wrappers or ES modules. Do NOT use addEventListener. This ensures compatibility with sandboxed preview environments.

## File output
Save as: `myintern-cv-builder.html`
Single file, no external dependencies.
