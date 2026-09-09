# Animal Nutrition Studio

A modern, fast, offline-first curriculum companion for **B.V.Sc & A.H. second-year Animal Nutrition**, following the official VCI MSVE syllabus (Credit hours 3+1 = 4). Built in pure vanilla JavaScript, HTML, and CSS — zero build steps, zero npm dependencies, zero complex toolchains.

---

## How to Run It

### Option A — Instant Local Server (Recommended)
Double-click **`tools/start-server.bat`**.
Open your browser to:
```
http://localhost:5178
```
*(Press `Ctrl+C` in the command window to stop the server).*

### Option B — Direct Double-Click
Double-click **`index.html`** in File Explorer. Every route, lesson reader, quiz runner, and dashboard view runs directly from `file:///`.

---

## Project Structure

```
D:\ANIMAL NUTRITION APPLICATION\
│
├── index.html                 Single-page application shell.
├── manifest.json              PWA manifest (standalone, theme-color #1565c0).
├── service-worker.js          Offline caching (CACHE_VERSION = "vanut-v1").
├── 1-CLICK-PUSH-TO-GITHUB.bat Double-click → syncs repo, stages, commits, and pushes to GitHub!
├── SYNC-TO-REPO.bat           Double-click → mirrors all files into repo/ sequentially.
├── README.md                  This content guide.
├── REPO.md                    Student repository & GitHub guide.
├── CLAUDE-CONTEXT.md          The project's living context memory file.
├── NEW-SUBJECT-BLUEPRINT.md   Architecture blueprint and specifications.
├── Animal Nutrition outline.pdf Authoritative VCI syllabus source document.
│
├── repo/                      📦 PRISTINE MIRROR FOLDER FOR DRAG-AND-DROP UPLOADS
│   ├── assets/                Sequential copy of assets/
│   ├── data/                  Sequential copy of data/
│   ├── images/                Sequential copy of images/
│   ├── js/                    Sequential copy of js/
│   └── tools/                 Sequential copy of tools/
│
├── data/                      ← ★ ALL SUBJECT CONTENT LIVES HERE ★
│   ├── data-syllabus.JS       Master index: units, topic titles, exam papers (97 topics)
│   ├── data-theory-unit1.JS   Unit 1: Principles & Feed Tech (25 topics)
│   ├── data-theory-unit2.JS   Unit 2: Applied Ruminant Nutrition-I (9 topics)
│   ├── data-theory-unit3.JS   Unit 3: Applied Ruminant Nutrition-II (17 topics)
│   ├── data-theory-unit4.JS   Unit 4: Applied Non-Ruminant Nutrition (17 topics)
│   ├── data-practical.JS      All 4 practical units (29 topics)
│   ├── data-why.JS            Mechanism-first comparative "WHY" entries
│   ├── data-qa.JS             Written-exam practice bank (Short notes, Long answers, etc.)
│   ├── data-quiz.JS           MCQ / True-False / Fill-in-the-Blank question bank
│   └── events-data.js         Department announcements & academic updates
│
├── js/                        ← Application Engines (Vanilla JS)
│   ├── store.js               localStorage layer with "vanut-" prefix
│   ├── app.js                 Router, page renderers, highlighter, and audio reader
│   ├── quiz.js                Quiz engine with Paper I, Paper II, Grand Test, & SRS
│   ├── dashboard.js           Nutrition mastery analytics & 12-week heatmap
│   ├── glossary.js            100+ term UG dictionary with audio pronunciation
│   ├── search.js              Instant Ctrl+K global search palette
│   ├── deep-guide.js          Contextual deep guide overlay controller
│   └── events.js              Announcements renderer
│
├── assets/css/                ← Shared IVRI Academic Light Theme
│   ├── tokens.css             Single source of truth for design tokens
│   ├── main.css               Layout, typography, sidebar, tooltips
│   ├── sections.css           Lesson, quiz, dashboard, and library styles
│   ├── animations.css         GPU-accelerated micro-interactions
│   ├── deep-guide.css         Deep view tutorial card
│   └── events.css             Department announcements cards
│
├── images/                    Figures, pathology/nutrition diagrams, icons
│
└── tools/
    ├── start-server.bat       One-click static HTTP server
    ├── local-server.js        Zero-dependency Node HTTP server
    ├── make-data-files.bat    Scaffolds missing topic data blocks
    ├── make-data-files.py     Python topic scaffolding engine
    └── sync-repo.bat          Mirrors files to repo/ folder
```

---

## How to Add Content (Non-Coder Guide)

1. Open the file in `data/` for the unit you want to edit (e.g. `data-theory-unit1.JS`).
2. Find the topic ID (e.g. `"u1-t05"` for Carbohydrates).
3. Fill in the fields:
   - `summary`: One high-yield orientation sentence.
   - `desc`: The full UG exam answer with headings and bullet points.
   - `eliteDesc`: Mechanism depth, bioenergetics, and topper details.
   - `keyPoints`: 10–18 high-scoring bullet lines.
   - `clinical`: Field veterinary applications for Indian livestock practice.
   - `tables`: 2–3 comparison tables asked in university exams.
4. Double-click `1-CLICK-PUSH-TO-GITHUB.bat` to save and sync!
