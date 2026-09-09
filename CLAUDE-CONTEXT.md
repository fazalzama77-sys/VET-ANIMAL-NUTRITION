# CONTEXT — Animal Nutrition Studio

Read this whole file before doing anything else. It tells you who I am, what we are
building, the codebase layout, my conventions, and how I prefer to work. After reading,
say "Got it — what do you want to work on?" and wait for my actual task.

**Last updated:** 2026-09-09 (Full VCI MSVE 2016 97-topic skeleton, dual paper readiness, 147-term glossary, offline PWA)

---

## 👤 ABOUT ME

- **Name:** Fazal Zama
- **Role:** B.V.Sc & A.H. UG student at ICAR — Indian Veterinary Research Institute (IVRI), Bareilly (Roll No. B0-350-2025)
- **Background:** Veterinary science — **NOT a coder.** Explain in plain English with
  concrete file paths and simple steps.
- **Tools I use:** Windows PC, GitHub Desktop (not command-line git), File Explorer.
  I do NOT use a terminal. Give me GUI instructions or one-click `.bat` scripts.
- **Developer Credit:** `Mr. Fazal Zama · Developer · B.V.Sc & A.H. UG · Roll No. B0-350-2025 · vet.fazalzama@gmail.com`

---

## 🎯 WHAT WE ARE BUILDING

**Animal Nutrition Studio** — a free, comprehensive academic study companion website for
**B.V.Sc & A.H. second-year Animal Nutrition**, strictly aligned with the official
Veterinary Council of India (VCI) MSVE 2016 syllabus (Credit hours 3+1 = 4) as published
in the Gazette of India.

- **Authoritative syllabus source:** `Animal Nutrition outline.pdf` (in project root)
- **Architecture blueprint:** `NEW-SUBJECT-BLUEPRINT.md`
- **Working folder:** `D:/ANIMAL NUTRITION APPLICATION/`
- **Sister projects:**
  - `D:/PATHOLOGY APPLICATION/` (Veterinary Pathology Studio — reference only, **DO NOT EDIT**)
  - `D:/VET BIOCHEMISTRY/` (Veterinary Biochemistry Studio)
  - `D:/VET MICROBIOLOGY APPLICATION/` (Veterinary Microbiology Studio)
  - Anatomy Studio (Live at `https://veterinaryanatomy.com/`)

This project follows the exact proven architecture, three-layer navigation model, and
**shared IVRI Academic light theme** used across the veterinary studio series.

### The 8 Core Sections
1. **Theory** — Units 1–4 of the official VCI theory syllabus (68 topics total).
2. **Practical** — Units 1–4 of the official practical syllabus (29 laboratory practicals total).
3. **WHY** — Comparative species mechanism-first nutritional, biochemical, and digestive explanations.
4. **Question & Answer** — Written-exam practice: short notes, long answers, differentiate-between tables, definitions, and ration balancing exercises.
5. **Quiz** — MCQ / True-False / Fill-blank, with unit-wise, paper-wise, grand mock test, practical, Exam Mode (timed) and Smart Review (spaced repetition).
6. **Dashboard** — Dual VCI Board Exam readiness gauges (Paper I vs Paper II), 8-Unit Mastery Matrix, streak tracker, 84-day heatmap, and 5-box Leitner memory pipeline (0–1000 XP Nutrition Mastery Index).
7. **Library** — Bookmarks · Personal Notes · Multi-colour Highlights · 147-Term UG Animal Nutrition Glossary with SpeechSynthesis audio pronunciation.
8. **Settings** — Theme selection (Light canonical default, optional Dark), data backup/restore (JSON), and about modal.

### Exam Structure (VCI Annual Board Examination)
| Examination Paper | Theory Units | Practical Units | Theory Marks | Practical Marks | Syllabus Weightage |
|---|---|---|---|---|---|
| **Paper I** | Units 1 & 2 (Principles of Animal Nutrition & Feed Tech, Applied Ruminant Nutrition-I) | Practicals 1 & 2 | 100 Marks | 60 Marks | 20 |
| **Paper II** | Units 3 & 4 (Applied Ruminant Nutrition-II, Applied Non-Ruminant Nutrition) | Practicals 3 & 4 | 100 Marks | 60 Marks | 20 |

### Syllabus Breakdown (97 Topics Total)
- **Theory Unit 1: Principles of Animal Nutrition and Feed Technology (25 topics, `u1-t01` – `u1-t25`):**
  History and development of nutrition; nutrients in animal production and health; chemical composition of body and plants; nutritional terms; carbohydrate nutrition & metabolism; protein nutrition, quality & metabolism; lipid nutrition & metabolism; role, requirements & metabolism of water; macro-minerals (Ca, P, Mg, Na, K, Cl, S); trace minerals (Fe, Cu, Co, Mn, Zn, I, Se, Mo, Cr); fat-soluble vitamins (A, D, E, K); water-soluble vitamins (B-complex, C); classification of feeds & fodders; energy evaluation (GE, DE, ME, NE, TDN, SE); calorimetry; carbon-nitrogen balance; protein evaluation (BV, PER, NPU, DCP); calorie-protein & nutritive ratio; feed processing technology; processing of concentrates; processing of roughages; improvement of inferior roughages (urea treatment); silage making & quality evaluation; hay making; anti-nutritional factors & natural toxins; feed adulterants & quality standards; feed additives & supplements.
- **Theory Unit 2: Applied Ruminant Nutrition-I (9 topics, `u2-t01` – `u2-t09`):**
  Importance and principles of scientific feeding; feeding experiments and comparative slaughter technique; digestion and metabolism trials; norms & protocols for digestion trials; measurement of digestibility coefficients (direct, indirect, indicators); factors affecting digestibility in ruminants; feeding standards (history & significance); comparative evaluation of feeding standards (Morrison, NRC, ARC, Kearl, ICAR); balanced rations (definition, principles & guidelines).
- **Theory Unit 3: Applied Ruminant Nutrition-II (17 topics, `u3-t01` – `u3-t17`):**
  Nutrient requirements for maintenance; requirements for growth and meat production; requirements for reproduction & gestation; requirements for milk production; requirements for wool production; requirements for working & draft bullocks; general principles of ration computation; calf feeding & early weaning; feeding growing heifers & adult dairy cattle/buffaloes; feeding pregnant, lactating & dry animals; feeding breeding bulls & working bullocks; sheep nutrition across growth phases; goat nutrition across production phases; high-yielding animals & challenge feeding; bypass nutrients (bypass protein & bypass fat); non-protein nitrogen (NPN) & urea toxicity prevention; metabolic disorders (ketosis, milk fever, acidosis, bloat) & nutritional interventions.
- **Theory Unit 4: Applied Non-Ruminant Nutrition (17 topics, `u4-t01` – `u4-t17`):**
  Nutrient requirements for non-ruminants; methods for determining requirements in non-ruminants; feeding standards for non-ruminants & poultry (BIS & ICAR); swine nutrition I (piglets & growers); swine nutrition II (sows, boars & fatteners); equine nutrition I (foals & growing horses); equine nutrition II (broodmares, stallions & working/race horses); poultry nutrition I (broiler feeding); poultry nutrition II (layer feeding); unconventional feeds & agro-industrial by-products in non-ruminants; duck, quail and turkey nutrition; laboratory animal nutrition (mice, rats, guinea pigs); rabbit nutrition; canine (dog) nutrition; feline (cat) nutrition & obligate carnivore peculiarities; captive wild and zoo animal nutrition; nutritional deficiency disorders in non-ruminants & poultry.
- **Practical Units 1–4 (29 laboratory practicals, `p1-t01` – `p4-t07`):**
  - *Practical Unit 1 (14 practicals):* Lab safety & orientation; feed & fodder identification; physical evaluation of feeds; sampling procedures; preparation of standard solutions; sample grinding & processing; dry matter & moisture estimation; crude protein estimation (Kjeldahl method); ether extract estimation (Soxhlet method); crude fibre estimation; total ash & acid insoluble ash estimation; nitrogen-free extract (NFE) calculation; calcium & phosphorus estimation; Van Soest detergent fibre analysis (NDF, ADF, ADL).
  - *Practical Unit 2 (3 practicals):* Calculation of nutritive value (DCP, TDN) from digestion data; calculation of nutritive ratio (NR); conducting digestion & balance trials in ruminants.
  - *Practical Unit 3 (5 practicals):* Assessment of nutrient requirements for ruminants; computation of balanced rations for dairy cattle & buffaloes; computation of balanced rations for sheep & goats; formulation of rations during drought & flood scarcity; visit to commercial feed compounding mill.
  - *Practical Unit 4 (7 practicals):* Computation of balanced diets for broiler chickens; computation of balanced diets for layer chickens; formulation of rations for swine; formulation of rations for equines; formulation of diets for dogs and cats; formulation of diets for laboratory & zoo animals; demonstration of feed additive mixing.

---

## 🎨 THE SHARED IVRI THEME — DO NOT TOUCH COLOURS

All IVRI subject platforms (Anatomy, Pathology, Animal Nutrition, Biochemistry, Microbiology)
share one standardised visual design system: **The Academic Light Theme** (institutional
medical blue on a soft blue-grey ground, typography in Inter + JetBrains Mono).

### The Rules
1. **`assets/css/tokens.css` is the single source of truth.** Every colour, font size, border,
   radius, shadow, and spacing value in the whole application comes from it.
2. **`tokens.css` is copied byte-for-byte from the reference project.** Never re-theme per subject.
3. **Never hard-code a hex value anywhere else.** If a colour is needed, use an existing token.
4. **Light is the default and canonical theme.** Dark mode exists solely as a night-reading
   option the student must explicitly select in Settings (`#/me`).
5. Only the **brand mark letters** (`AN`), **site title**, and `<meta name="theme-color">` change.

### The Palette (Token Values)
| Token | Value (Light) | Used For |
|---|---|---|
| `--ivri-blue` | `#1565c0` | **Primary.** Theory, Dashboard, links, brand mark `AN` |
| `--ivri-teal` | `#00897b` | Practical / Feed Technology / Lab |
| `--ivri-purple` | `#6a48b5` | WHY / Mechanisms / Q&A Model Answers |
| `--ivri-amber` | `#b25e00` | Quiz / Assessment / Sprints (darkened for contrast) |
| `--ivri-coral` | `#d84315` | Warning / High-yield alerts |
| `--ivri-sage` | `#2e7d32` | Success / Memory Safe / Clinical notes |
| `--bg` | `#f0f4f8` | Page ground (soft medical blue-grey, never stark white) |
| `--surface` | `#ffffff` | Cards, modals, dialogs |
| `--border` | `rgba(21,101,192,.15)` | Subtle blue-tinted borders, never dirty grey |
| `--text` | `#263238` | Dark blue-grey body text |
| `--text-muted` | `#546e7a` | Secondary text |

`--bg-image` adds the faint blue dot-grid and gradient behind the app. Shadows are blue-tinted (`--shadow-sm`, `--shadow-md`), not muddy black.

---

## 📋 CURRENT STATE & ZERO-CONTENT INTEGRITY

### Content Status
| Unit Code | Stream & Unit Name | Topics | Status | Structure |
|---|---|---|---|---|
| `unit-1` | Theory Unit 1: Principles of Animal Nutrition & Feed Tech | 25 | ⏳ **EMPTY SKELETON** | Scaffolding complete (`desc: ""`) |
| `unit-2` | Theory Unit 2: Applied Ruminant Nutrition-I | 9 | ⏳ **EMPTY SKELETON** | Scaffolding complete (`desc: ""`) |
| `unit-3` | Theory Unit 3: Applied Ruminant Nutrition-II | 17 | ⏳ **EMPTY SKELETON** | Scaffolding complete (`desc: ""`) |
| `unit-4` | Theory Unit 4: Applied Non-Ruminant Nutrition | 17 | ⏳ **EMPTY SKELETON** | Scaffolding complete (`desc: ""`) |
| `prac-unit-1` | Practical Unit 1: Feed Microscopy & Proximate Analysis | 14 | ⏳ **EMPTY SKELETON** | Scaffolding complete (`desc: ""`) |
| `prac-unit-2` | Practical Unit 2: Nutritive Values & Balance Trials | 3 | ⏳ **EMPTY SKELETON** | Scaffolding complete (`desc: ""`) |
| `prac-unit-3` | Practical Unit 3: Ruminant Ration Formulation & Mills | 5 | ⏳ **EMPTY SKELETON** | Scaffolding complete (`desc: ""`) |
| `prac-unit-4` | Practical Unit 4: Non-Ruminant, Poultry & Zoo Diets | 7 | ⏳ **EMPTY SKELETON** | Scaffolding complete (`desc: ""`) |
| `why` | Comparative Nutritional WHY Mechanisms | 1 | ⏳ **EMPTY SKELETON** | Template only (`title: ""`) |
| `qa` | Written Exam Q&A Bank (Units 1–4) | 1 | ⏳ **EMPTY SKELETON** | Template only (`question: ""`) |
| `quiz` | MCQ / True-False / Fill-blank Bank | 4 | ⏳ **EMPTY SKELETON** | Template only (`q: ""`) |

**Total Topics Scaffolding: 97 Topics (68 Theory + 29 Practical).**

### 🛡️ The Zero-Content Filter Rule (CRITICAL)
- Zero lesson content has been written yet. **Never fill lessons with generic placeholder text or fake AI summaries.**
- Empty template rows are systematically filtered out across all application engines:
  - **Diagnostic Quiz Studio (`#/quiz`):** Correctly reports `0 questions ready` and renders clean empty states instead of blank broken quiz cards.
  - **Analytics Dashboard (`#/dashboard`):** Accurately begins at `0% syllabus read` and `0 Mastery XP`.
  - **Mastery Ranking:** Initializes cleanly to `Nutrition Apprentice` (Phase 1 · Foundations).
  - **Global Search (`Ctrl+K`):** Excludes empty topics and questions from search results.

### Fully Working Features
- ✅ All routes render with zero console errors.
- ✅ Two-pane lesson page: topic rail with read ticks + content blocks + Standard/Deep view switcher + read-aloud.
- ✅ Multi-colour highlighter (6 colours, persists in localStorage, renders inline).
- ✅ Mark read, Bookmark, Note, Share, circular progress ring, prev/next topic pager.
- ✅ Dual VCI Board Exam Readiness Gauges: Paper I (51 topics) vs Paper II (46 topics).
- ✅ 8-Unit Mastery Matrix with real-time filter tabs (All, Theory, Practical, Needs Practice, Mastered).
- ✅ 5-Box Leitner Spaced Repetition (SRS) memory pipeline with Ebbinghaus forgetting curve intervals.
- ✅ 147-Term UG Animal Nutrition Glossary with category filtering and Web Speech API audio pronunciation.
- ✅ Nutrition Spotter of the Day with diagnostic hallmarks, metabolic pathogenesis, and viva clues.
- ✅ Global Ctrl+K search indexing theory, practical, WHY mechanisms, Q&A banks, and glossary terms.
- ✅ Hideable Desktop Sidebar (`< Hide Sidebar` button, `#menubtn` hamburger, and <kbd>Ctrl</kbd> + <kbd>B</kbd> keyboard shortcut).
- ✅ Mobile 5-slot bottom bar with central Quiz FAB.
- ✅ Offline PWA service worker with precaching and cache-first strategy (`vanut-v1`).

---

## 🗂️ FILE STRUCTURE

```
D:\ANIMAL NUTRITION APPLICATION├── 1-CLICK-PUSH-TO-GITHUB.bat   🌟 Double-click → auto-syncs repo, commits & pushes to GitHub
├── SYNC-TO-REPO.bat             Double-click → offline robocopy mirror into repo/
├── index.html                   Single-page app shell. All sections render here.
├── manifest.json                PWA manifest (theme_color: #1565c0, name: Animal Nutrition Studio)
├── service-worker.js            Offline cache controller (CACHE_VERSION = "vanut-v1")
├── README.md                    Content writing & curriculum guide
├── REPO.md                      Repository & GitHub publishing guide
├── CONTEXT.md                   THIS MASTER CONTEXT FILE
├── CLAUDE-CONTEXT.md            Synchronized context mirror for Claude
├── NEW-SUBJECT-BLUEPRINT.md     Architecture blueprint and design specification
├── Animal Nutrition outline.pdf Authoritative VCI MSVE 2016 syllabus document
│
├── repo/                        📦 PRISTINE MIRROR FOR GITHUB / USB SHARING
│   └── (Exact mirror of assets/, data/, images/, js/, tools/ and root files)
│
├── data/                        ← ALL CURRICULUM DATA LIVES HERE
│   ├── data-syllabus.JS         Master index: 4 theory units (68 topics) + 4 practical units (29 topics)
│   ├── data-theory-unit1.JS     Unit 1: Principles & Feed Tech (25 topics scaffolding)
│   ├── data-theory-unit2.JS     Unit 2: Applied Ruminant Nutrition-I (9 topics scaffolding)
│   ├── data-theory-unit3.JS     Unit 3: Applied Ruminant Nutrition-II (17 topics scaffolding)
│   ├── data-theory-unit4.JS     Unit 4: Applied Non-Ruminant Nutrition (17 topics scaffolding)
│   ├── data-practical.JS        All 4 practical units (29 topics scaffolding)
│   ├── data-why.JS              Comparative nutrition WHY mechanisms (clean template)
│   ├── data-qa.JS               Written-exam model Q&A bank (clean template)
│   ├── data-quiz.JS             MCQ / True-False / Fill-blank question bank (clean template)
│   └── events-data.js           Department announcements & academic seminar configuration
│
├── js/                          ← JAVASCRIPT ENGINES
│   ├── store.js                 localStorage layer. ALL keys prefixed "vanut-" (20+ keys)
│   ├── app.js                   Router + shell + section renderers + highlighter + audio
│   ├── quiz.js                  Quiz engine (window.quizApp) with Paper I, Paper II & Grand modes
│   ├── dashboard.js             Clinical learning analytics (window.dashboardApp)
│   ├── glossary.js              147-term UG animal nutrition glossary + hover tooltips + speech
│   ├── search.js                Global site-wide search engine (Ctrl+K)
│   ├── deep-guide.js            Contextual Deep Nutritional View overlay controller
│   └── events.js                Academic seminar announcements renderer
│
├── assets/css/                  ← STYLESHEETS
│   ├── tokens.css               ★ SHARED IVRI THEME — copied byte-for-byte from Pathology
│   ├── main.css                 Reset, typography, layout, shared components, hideable sidebar
│   ├── sections.css             Per-screen styles (lesson card, quiz, dashboard, matrix, tables)
│   ├── animations.css           GPU-accelerated micro-interactions (transform/opacity only)
│   ├── deep-guide.css           Deep guide presentation styling
│   └── events.css               Department announcement card styles
│
├── images/                      Visual assets directory
│   ├── theory/                  Figures and flowcharts for Theory Units 1–4
│   ├── practical/               Micrographs and lab procedure diagrams
│   ├── why/                     Comparative mechanism illustrations
│   └── qa/                      Written exam diagrams and calculation sketches
│
└── tools/                       ← LOCAL TOOLS & AUTOMATION
    ├── start-server.bat         Double-click → launches local dev server at http://localhost:5178
    ├── local-server.js          Zero-dependency Node.js HTTP server (handles .JS, .css, .html)
    ├── make-data-files.bat      Double-click → executes python scaffolding script
    ├── make-data-files.py       Python script to scaffold and validate data files
    └── sync-repo.bat            Double-click → mirrors all files into repo/ via robocopy
```

### Data Shapes

**1. Lesson Content (`data-theory-unit*.JS`, `data-practical.JS`):**
```js
theoryData["unit-1"] = {
  "u1-t01": {
    summary:   "",   // One punchy line in large font at top of lesson
    desc:      "",   // STANDARD view — the complete UG university exam answer
    eliteDesc: "",   // DEEP view — advanced biochemical pathways & thermodynamic depth
    keyPoints: [],   // Marks-scoring bullet points (10–18 per topic)
    clinical:  "",   // Field veterinary application block rendered in green
    tables:    [],   // [{ title: "", headers: [], rows: [[]] }]
    img:       "",   // Relative path (e.g. "images/theory/u1-t01.svg")
    tags:      []    // Search tags
  }
};
```

**2. Quiz Question Bank (`data-quiz.JS`):**
```js
quizBank["unit-1"] = {
  mcq: [
    { q: "", o: ["A", "B", "C", "D"], a: 0, e: "Explanation...", topicId: "u1-t01", diff: 1, subSection: "sub1" }
  ],
  tf: [
    { q: "", a: true, e: "Explanation...", topicId: "u1-t01", diff: 1, subSection: "sub1" }
  ],
  fib: [
    { q: "The primary volatile fatty acid produced from roughage fermentation is ____.", a: ["acetate", "acetic acid"], e: "Explanation...", topicId: "u1-t05", diff: 1 }
  ]
};
```

**3. Written Exam Q&A Bank (`data-qa.JS`):**
```js
qaBank["unit-1"] = [
  {
    id: "u1-qa01",
    type: "short",     // short (5M) | long (10M) | diff (5M) | define (2M)
    marks: 5,
    question: "",
    topicId: "u1-t14",
    answer: "",
    keyPoints: [],
    diagram: "",
    table: null,
    pyq: ["IVRI 2023", "TANUVAS 2022"]
  }
];
```

**4. Comparative WHY Mechanisms (`data-why.JS`):**
```js
whyData = [
  {
    id: "w01",
    title: "",
    category: "mechanism",  // mechanism | bioenergetics | species | practical | clinical
    unit: "unit-1",
    comparison: "Ruminant vs Non-Ruminant",
    why: "",
    mechanism: [],
    clinical: "",
    analogy: "",
    img: "",
    quiz: {
      question: "",
      options: [],
      correctIndex: 0,
      explanation: ""
    }
  }
];
```

---

## ✍️ CONTENT WRITING STANDARD

**Target: High-scoring UG excellence (Rank 1 and 10 CGPA standard). Complete university
coverage without irrelevant post-doctoral clutter.**

- **`desc` (Standard View):** The complete, model university examination answer.
  Organised with uppercase bold headers (`<b>I. DEFINITION</b>`, `<b>II. BIOCHEMICAL PATHWAY</b>`,
  `<b>III. FEEDING GUIDELINES</b>`), clear bullet points (`<ul><li>`), and balanced reactions.
- **`eliteDesc` (Deep View):** Additional biochemical depth for academic distinction.
  Includes rumen stoichiometry (Wolin's equations), thermodynamic efficiency of ATP generation,
  amino acid flow at the duodenum, and cellular signal transduction in nutrient partitioning.
- **`keyPoints`:** 10–18 high-yield marks-scoring bullet lines per topic that an examiner
  looks for during evaluation.
- **`tables`:** 2–3 comparison tables per topic (e.g., Weende vs Van Soest, RDP vs RUP,
  Starch Equivalent vs TDN, True Protein vs NPN).
- **`clinical`:** Mandatory practical field veterinary note at the bottom of every topic.
  Focuses on Indian livestock feeding realities, deficiency correction, toxicity prevention,
  and ration balancing protocols.

### Indian Livestock Field Realities (Deliberate Bias — Keep It)
All clinical notes, examples, and practical cases must reflect real-world Indian livestock
feeding situations:
- Paddy straw and wheat straw basal roughage diets;
- Urea ammoniation of straw (4 kg urea + 40 L water per 100 kg straw, 21-day anaerobic curing);
- Urea Molasses Mineral Block (UMMB) licks for dry-season grazing;
- Bypass protein (formaldehyde-treated mustard/groundnut cake) and bypass fat (calcium salts of long-chain fatty acids / Prill fat) in high-yielding Murrah buffaloes and crossbred cows;
- Subacute Ruminal Acidosis (SARA) from sudden grain overload during challenge feeding;
- Prevention of Parturient Hypocalcemia (Milk Fever) through negative DCAD feeding (-50 to -100 mEq/kg DM) with anionic salts in late gestation;
- Pregnancy toxaemia in multi-bearing Marwari and Muzaffarnagri ewes;
- Toxic principles: Aflatoxin B1 in stored groundnut cake and maize, hydrocyanic acid (HCN / dhurrin) in immature sorghum/chari (<50 days growth), mimosine in *Leucaena leucocephala* (Subabul), gossypol in raw cottonseed cake, oxalates in hybrid Napier/Pennisetum, and nitrate-nitrite toxicity in lush oats;
- Silage making under tropical Indian conditions using trench and pit silos with sugarcane tops, maize, and sorghum.

### Mandatory Content Boundaries
1. **No Darwinian origin narratives or phylogenetic speculation.** Do not state that a digestive
   structure or microbial enzyme "evolved from" primitive species. Keep explanations on established
   comparative anatomy, ruminal microbiology, nutritional biochemistry, and present physiology.
2. **Religious and mythological neutrality.** No religious references, worship narratives, or
   mythological metaphors.
3. **Strict analogy boundary.** Do not use alcohol, alcoholic beverages, bar scenarios, or
   intoxication as analogies, mnemonics, or examples. (Note: ethanol as a chemical solvent or
   volatile fatty acid precursor is acceptable as pure chemistry; the boundary applies to
   conversational analogies and behavioral examples). For metabolic lipid accumulation, reference
   bovine ketosis, pregnancy toxaemia, and feline hepatic lipidosis.

---

## ⚙️ KEY ARCHITECTURAL FACTS

- **Hash Routing:** The entire single-page app routes through URL hash fragments:
  `#/`, `#/theory`, `#/practical`, `#/unit/unit-1`, `#/topic/u1-t01`, `#/quiz`,
  `#/quiz/paper/paper-1`, `#/quiz/paper/paper-2`, `#/quiz/grand`, `#/dashboard`,
  `#/why`, `#/qa`, `#/library`, `#/library/glossary`, `#/me`.
  Works seamlessly from local `file://` protocol and static HTTP servers with zero server-side rewrites.
- **`syllabus` Backbone:** Built in `data/data-syllabus.JS`. Creates `syllabus.theory`,
  `syllabus.practical`, `syllabus.allUnits` (concatenated 8 units), `syllabus.unitById`,
  and `syllabus.topicById` lookups at script execution time.
- **LocalStorage Storage Prefix:** All persistent keys use the strict prefix **`vanut-`**:
  `vanut-theme`, `vanut-detail`, `vanut-read`, `vanut-bookmarks`, `vanut-notes`,
  `vanut-highlights`, `vanut-hl-color`, `vanut-quiz`, `vanut-srs`, `vanut-activity`,
  `vanut-visits`, `vanut-onboarded`, `vanut-last-topic`, `vanut-qa-done`, `vanut-sidebar-collapsed`,
  `vanut-srs-notify`, `vanut-srs-time`, `vanut-notify-last`.
  Covered by `store.backupKeys()` for seamless student JSON export/import.
- **5-Box Leitner Memory Pipeline:**
  - Box 1: 1 day (volatile)
  - Box 2: 2 days (short-term)
  - Box 3: 4 days (consolidating)
  - Box 4: 8 days (long-term)
  - Box 5: 16 days (mastered)
  - Correct answer promotes question to `min(5, box + 1)`. Incorrect drops straight to `Box 1`.
- **Theme Initialization:** Executed inline in `<head>` before body paint to eliminate white flash:
  `var t = localStorage.getItem("vanut-theme") || "light"; document.documentElement.setAttribute("data-theme", t);`
- **Dynamic Exam Split Logic:**
  - Paper I = Units 1 & 2 (`unit-1`, `unit-2`, `prac-unit-1`, `prac-unit-2`) → 51 topics.
  - Paper II = Units 3 & 4 (`unit-3`, `unit-4`, `prac-unit-3`, `prac-unit-4`) → 46 topics.
  - Total = 97 topics.

---

## 🛠️ DEPLOYMENT & GITHUB WORKFLOW (FOR FAZAL & AI ASSISTANTS)

Fazal is a veterinary student and **does not use command-line Git or terminal DevOps**.
To keep publishing dead-simple and foolproof, two 1-click automation batch files and a clean
mirror folder are maintained in `D:/ANIMAL NUTRITION APPLICATION/`:

### 🌟 Script 1: `1-CLICK-PUSH-TO-GITHUB.bat` (Recommended Daily Workflow)
Whenever any AI assistant (Claude, Antigravity, ChatGPT) or Fazal finishes adding content or modifying code:
1. Double-click `1-CLICK-PUSH-TO-GITHUB.bat` in `D:/ANIMAL NUTRITION APPLICATION/` (or its desktop shortcut).
2. It executes 3 sequential steps automatically in under 5 seconds:
   - **Step 1/3 (Auto-Sync):** Runs robocopy to ensure the `repo/` mirror folder has all latest files organized in their clean subdirectories (`assets/`, `data/`, `images/`, `js/`, `tools/`).
   - **Step 2/3 (Package & Commit):** Detects modified files and records an automatic timestamped commit (e.g. `Update Animal Nutrition Studio content (09-09-2026 12:00)`).
   - **Step 3/3 (Push to GitHub):** Securely pushes all changes directly to remote `origin main`.
3. Displays a green `[SUCCESS] ALL CHANGES UPLOADED TO GITHUB!` banner.
4. Cloudflare / GitHub Pages automatically rebuilds and deploys the live site within 1–2 minutes.

### 📁 Script 2: `SYNC-TO-REPO.bat` (Local Clean Mirror Tool)
- **What it does:** Mirrors all application files from `D:/ANIMAL NUTRITION APPLICATION/` into `D:/ANIMAL NUTRITION APPLICATION/repo/`, maintaining strict directory nesting (`assets/css/`, `data/`, `images/`, `js/`, `tools/`) and cleaning out stale/orphan files.
- **Offline only:** Does NOT connect to the internet or push to GitHub.
- **Do you need to run it if you use `1-CLICK-PUSH-TO-GITHUB.bat`?** **NO.** `1-CLICK-PUSH-TO-GITHUB.bat` already runs this sync as Step 1 automatically!
- **When to use `SYNC-TO-REPO.bat`:**
  1. *Manual Web Upload:* If dragging and dropping files through the github.com web browser interface.
  2. *USB Pen Drive / Sharing:* To copy the pure, clean website files onto a USB drive for friends/professors without internal `.git` or system metadata.
  3. *Offline Work:* When updating local files without an active internet connection.

### 📦 Strict Rules for AI Assistants
1. **Always edit in `D:/ANIMAL NUTRITION APPLICATION/`** (e.g. `data/data-theory-unit1.JS`, `js/app.js`).
2. **Never drop flat, unorganized files into `repo/`**. The `repo/` folder must remain an exact mirror of the root structure.
3. After completing any major content or feature update, run `SYNC-TO-REPO.bat` (or robocopy) to update `repo/`.
4. **Before every release:** bump `CACHE_VERSION` in `service-worker.js` (currently **`vanut-v1`** → next release `vanut-v2`). Otherwise returning students keep the cached old version.

---

## 🐛 KNOWN PITFALLS (DO NOT REINTRODUCE)

- **Node `.JS` Extension:** Node.js v24 throws `ERR_UNKNOWN_FILE_EXTENSION` when running `node --check` directly on files with uppercase `.JS`. Validate using Node `vm.Script` or test runner scripts.
- **Counting Empty Template Rows:** Always filter `q.q`, `q.question`, `w.title` for non-empty text. Never count empty scaffold objects.
- **`syllabus.allUnits` Dependency:** Engines in `app.js` and `dashboard.js` rely on `syllabus.allUnits = syllabus.theory.concat(syllabus.practical)` initialized in `data/data-syllabus.JS`.
- **Quiz Timer Interval Leaks:** Always clear active countdown intervals before dropping a quiz run or navigating away.
- **Service Worker Stale Cache:** In development, unregister service worker or bump `CACHE_VERSION` when precached files change.

---

## 🚀 HOW TO WORK WITH ME EFFICIENTLY

1. **Read this whole file first.** Don't ask "what is the project about?"
2. **Be specific** — name exact file paths and line ranges.
3. **Don't over-explore.** If I give an instruction, go straight to the target file.
4. **Vanilla JS only** — never suggest React, Vue, npm packages, or build tools.
5. **End with a clear verification checklist** so I can test quickly.
6. **Always respect the content boundaries** (no Darwinian ancestry speculation, no religious bias, no alcohol analogies).
