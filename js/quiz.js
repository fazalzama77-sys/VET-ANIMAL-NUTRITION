/* ============================================================
   quiz.js  —  Interactive, Playful & Vibrant Quiz Arena Engine
   Animal Nutrition Studio (B.V.Sc & A.H. Second Year)
   ------------------------------------------------------------
   Features:
     - 820 Curriculum-Standard Questions across Units 1 to 4
     - Web Audio API Chime & Sound Synthesizer (offline, zero-dep)
     - Rapid 10-Q Sprint & Daily Challenge Launchers
     - Colorful, Modern Game Hub with Mode Cards & Unit Browser
     - Streamlined Step-by-Step Setup Wizard
     - Clutter-Free In-Quiz HUD with Fixed, Predictable Controls
     - Bouncy, Tactile Options with Confetti & Celebratory Streaks
     - Slide-Down Quick Question Palette Drawer
     - High-Yield Explanations with Direct Syllabus Deep-Links
     - Celebratory Results Screen with Retry Missed Filter
     - Full Spaced Repetition (SRS) Leitner Integration
   ============================================================ */

var quizApp = (function () {

  var host;                 // container element
  var run = null;           // active run state
  var timerId = null;       // exam countdown interval
  var keyHandler = null;    // keyboard shortcut handler while a run is open
  var lastPickAt = 0;       // guards against double-tap firing
  var activeHubTab = "all"; // 'all', 'theory', 'practical'

  /* Sound synthesizer state */
  var audioCtx = null;
  function isSoundEnabled() {
    return localStorage.getItem("vanut-quiz-sound") !== "false";
  }
  function setSoundEnabled(val) {
    localStorage.setItem("vanut-quiz-sound", val ? "true" : "false");
  }

  function playSound(type) {
    if (!isSoundEnabled()) return;
    try {
      var AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!audioCtx) audioCtx = new AudioContext();
      if (audioCtx.state === "suspended") audioCtx.resume();

      var t = audioCtx.currentTime;
      var osc = audioCtx.createOscillator();
      var gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === "correct") {
        // High celebratory two-tone chime (C5 -> G5)
        osc.type = "sine";
        osc.frequency.setValueAtTime(523.25, t);
        osc.frequency.setValueAtTime(783.99, t + 0.08);
        gain.gain.setValueAtTime(0.18, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
        osc.start(t);
        osc.stop(t + 0.36);
      } else if (type === "wrong") {
        // Soft low tone (not jarring)
        osc.type = "triangle";
        osc.frequency.setValueAtTime(180, t);
        osc.frequency.exponentialRampToValueAtTime(130, t + 0.22);
        gain.gain.setValueAtTime(0.16, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
        osc.start(t);
        osc.stop(t + 0.26);
      } else if (type === "streak") {
        // Celebratory 3-note arpeggio
        osc.type = "sine";
        osc.frequency.setValueAtTime(523.25, t);
        osc.frequency.setValueAtTime(659.25, t + 0.07);
        osc.frequency.setValueAtTime(783.99, t + 0.14);
        gain.gain.setValueAtTime(0.2, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);
        osc.start(t);
        osc.stop(t + 0.46);
      } else if (type === "click") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(440, t);
        gain.gain.setValueAtTime(0.05, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
        osc.start(t);
        osc.stop(t + 0.05);
      }
    } catch (e) {
      /* AudioContext not permitted or muted — fail gracefully */
    }
  }

  /* Sub-section metadata for Units 1 to 4 */
  var subSectionsByUnit = {
    "unit-1": [
      { id: "u1-s1", icon: "💧", title: "Water, Carbohydrates & Lipids", desc: "Body composition, water metabolism, carbohydrate & fat nutrition" },
      { id: "u1-s2", icon: "🥩", title: "Protein & Amino Acid Nutrition", desc: "Essential amino acids, biological value, PER, DCP & protein evaluation" },
      { id: "u1-s3", icon: "⚡", title: "Minerals & Vitamins", desc: "Macro/trace elements, fat & water soluble vitamins, deficiencies & toxicities" },
      { id: "u1-s4", icon: "🔥", title: "Bioenergetics & Energy Evaluation", desc: "GE, DE, ME, NE, TDN, calorimetry & carbon-nitrogen balance" },
      { id: "u1-s5", icon: "🌾", title: "Feeds, Conservation & Technology", desc: "Roughages, concentrates, silage/hay, anti-nutritional factors & additives" }
    ],
    "unit-2": [
      { id: "u2-s1", icon: "🔬", title: "Digestion & Metabolism Trials", desc: "Scientific feeding, digestion trial protocols, indicator methods & digestibility" },
      { id: "u2-s2", icon: "📊", title: "Feeding Standards & Balanced Rations", desc: "Historical & modern ruminant feeding standards, merits, demerits & balanced ration rules" }
    ],
    "unit-3": [
      { id: "u3-s1", icon: "🥛", title: "Dairy Cattle & Buffalo Nutrition", desc: "Nutrient requirements for maintenance, growth, gestation, milk production & challenge feeding" },
      { id: "u3-s2", icon: "🐑", title: "Sheep, Goat & Draft Animal Nutrition", desc: "Ration formulation for meat, milk, wool, and working animals" },
      { id: "u3-s3", icon: "🧪", title: "Bypass Nutrients, NPN & Metabolic Disorders", desc: "Bypass protein/fat, urea feeding, bloat, ketosis, acidosis & milk fever" }
    ],
    "unit-4": [
      { id: "u4-s1", icon: "🐓", title: "Poultry Nutrition (Broilers & Layers)", desc: "Broiler and layer feeding phases, BIS/ICAR standards & alternate feeds" },
      { id: "u4-s2", icon: "🐖", title: "Swine & Equine Nutrition", desc: "Piglets, sows, boars, fatteners, equine digestive physiology & feeding" },
      { id: "u4-s3", icon: "🐕", title: "Companion, Laboratory & Zoo Animal Nutrition", desc: "Dogs, cats (obligate carnivore), rabbits, rodents, and captive wildlife feeding" }
    ]
  };

  function getSubSectionMeta(unitId, subId) {
    if (!subId || subId === "all") return null;
    var list = subSectionsByUnit[unitId] || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === subId) return list[i];
    }
    return null;
  }

  function resetRun() {
    stopRun();
    run = null;
  }

  /* ============================================================
     BUILDING A QUESTION SET
     ============================================================ */
  function bankFor(unitIds, formats, subSectionId) {
    var out = [];
    unitIds.forEach(function (uid) {
      var b = (window.quizBank || {})[uid];
      if (!b) return;
      formats.forEach(function (f) {
        (b[f] || []).forEach(function (q, i) {
          if (!q.q || !String(q.q).trim()) return;   // skip empty template rows
          if (subSectionId && subSectionId !== "all" && q.subSection !== subSectionId) return;
          out.push({
            key: uid + ":" + f + ":" + i,
            format: f,
            unitId: uid,
            subSection: q.subSection || null,
            q: q.q,
            o: q.o,
            a: q.a,
            a_display: q.a_display || (Array.isArray(q.a) ? q.a[0] : q.a),
            e: q.e,
            topicId: q.topicId || null,
            diff: q.diff || 1
          });
        });
      });
    });
    return out;
  }

  function scopeUnits(kind, id) {
    if (kind === "unit") return [id];
    if (kind === "paper") {
      var p = (syllabus.meta && syllabus.meta.papers ? syllabus.meta.papers : []).filter(function (x) { return x.id === id; })[0];
      return p ? p.units.map(function (n) { return "unit-" + n; }) : (id === "paper-1" ? ["unit-1", "unit-2"] : ["unit-3", "unit-4"]);
    }
    if (kind === "grand") return (syllabus.theory || []).map(function (u) { return u.id; });
    if (kind === "practical") return (syllabus.practical || []).map(function (u) { return u.id; });
    return [];
  }

  function shuffle(a) {
    var copy = a.slice(0);
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = copy[i]; copy[i] = copy[j]; copy[j] = t;
    }
    return copy;
  }

  function countAvailable(unitIds, subSectionId) {
    return bankFor(unitIds, ["mcq", "tf", "fib"], subSectionId).length;
  }

  /* ============================================================
     ROUTER ENTRY POINT
     ============================================================ */
  function render(container, params) {
    host = container;
    var kind = params.a;

    if (run && run.active) {
      var wanted = kind ? kind + (params.b ? ":" + params.b : "") : "";
      var current = String(run.scope || "");
      var sameQuiz = !kind || current === wanted || current.indexOf(wanted + ":") === 0;
      if (kind === "result") { renderSavedResult(params.b); return; }
      if (sameQuiz || kind === "resume") { paintRun(); return; }
      renderInProgressChoice(kind, params.b);
      return;
    }

    if (kind === "resume") { resumeSavedRun(); return; }
    if (kind === "result") { renderSavedResult(params.b); return; }
    if (!kind) { renderHub(); return; }
    if (kind === "unit")      { renderSetup("unit", params.b); return; }
    if (kind === "paper")     { renderSetup("paper", params.b); return; }
    if (kind === "grand")     { renderSetup("grand", null); return; }
    if (kind === "practical") { renderSetup("practical", null); return; }
    if (kind === "review")    { renderReview(); return; }
    renderHub();
  }

  /* ============================================================
     QUIZ ARENA HUB
     ============================================================ */
  function renderHub() {
    resetRun();

    var theoryUnits = syllabus.theory || [];
    var pracUnits = syllabus.practical || [];
    var theoryIds = theoryUnits.map(function (u) { return u.id; });
    var pracIds = pracUnits.map(function (u) { return u.id; });
    var totalAll = countAvailable(theoryIds.concat(pracIds));
    var due = (store.dueSrs && store.dueSrs()) ? store.dueSrs().length : 0;
    var q = store.getQuiz() || { attempts: [], byUnit: {} };

    var fmtCounts = { mcq: 0, tf: 0, fib: 0 };
    bankFor(theoryIds.concat(pracIds), ["mcq", "tf", "fib"]).forEach(function (bq) { fmtCounts[bq.format]++; });

    var pending = savedRun();
    var resumeHtml = "";
    if (pending) {
      var doneN = 0;
      pending.qs.forEach(function (pq, pi) {
        var ans = pending.answers[pi];
        var has = ans !== null && ans !== undefined && !(pq.format === "fib" && String(ans).trim() === "");
        if (has) doneN++;
      });
      resumeHtml =
        '<div class="card qz-resume-card mb-6 animate-scale-up">' +
          '<div class="qz-resume-content">' +
            '<div class="qz-resume-icon">⏸️</div>' +
            '<div class="qz-resume-text">' +
              '<div class="qz-resume-tag">In Progress Quiz Saved</div>' +
              '<h3 class="qz-resume-title">' + app.esc(pending.label || "Quiz") + '</h3>' +
              '<div class="qz-resume-sub">' + doneN + ' of ' + pending.qs.length + ' questions answered (' + Math.round((doneN / pending.qs.length) * 100) + '%)</div>' +
            '</div>' +
            '<div class="qz-resume-actions">' +
              '<button class="btn btn--primary" id="resumequizbtn">▶️ Continue Quiz</button>' +
              '<button class="btn btn--ghost" id="discardquizbtn">Discard</button>' +
            '</div>' +
          '</div>' +
        '</div>';
    }

    // Units Grid
    var unitCardsHtml = theoryUnits.map(function (u) {
      var n = countAvailable([u.id]);
      var rec = q.byUnit && q.byUnit["unit:" + u.id];
      var subList = subSectionsByUnit[u.id] || [];
      var bestScore = rec ? rec.best : null;
      var stars = bestScore >= 85 ? "⭐⭐⭐" : bestScore >= 60 ? "⭐⭐" : bestScore !== null ? "⭐" : "";

      var unitIcons = { "unit-1": "🌾", "unit-2": "🔬", "unit-3": "🥛", "unit-4": "🐓" };
      var uIco = unitIcons[u.id] || "📚";

      return '<div class="qz-unit-card" data-unit="' + u.id + '">' +
        '<div class="qz-unit-card__top">' +
          '<div class="qz-unit-card__badge-row">' +
            '<span class="qz-unit-tag">Unit ' + u.no + '</span>' +
            (bestScore !== null
              ? '<span class="chip ' + (bestScore >= 75 ? 'chip--ok' : bestScore >= 50 ? 'chip--warn' : 'chip--danger') + '">' +
                  stars + ' ' + bestScore + '% Best</span>'
              : '<span class="chip chip--subtle">Untested</span>') +
          '</div>' +
          '<div class="qz-unit-card__icon">' + uIco + '</div>' +
        '</div>' +
        '<h3 class="qz-unit-card__title">' + app.esc(u.short || u.title) + '</h3>' +
        '<p class="qz-unit-card__desc">' + (n ? n + ' questions across ' + subList.length + ' focused modules' : 'No questions available yet') + '</p>' +
        '<div class="qz-unit-card__subs">' +
          subList.slice(0, 3).map(function (s) {
            return '<span class="qz-sub-pill">' + s.icon + ' ' + app.esc(s.title.split(",")[0]) + '</span>';
          }).join("") +
          (subList.length > 3 ? '<span class="qz-sub-pill">+' + (subList.length - 3) + ' more</span>' : '') +
        '</div>' +
        '<div class="qz-unit-card__foot">' +
          '<a class="btn btn--sm btn--primary" href="#/quiz/unit/' + u.id + '">⚡ Start Quiz (' + n + ')</a>' +
          '<button class="btn btn--sm btn--outline qz-quick10-btn" data-unit="' + u.id + '">Quick 10 🎲</button>' +
        '</div>' +
      '</div>';
    }).join("");

    var pracCardsHtml = pracUnits.map(function (u) {
      var n = countAvailable([u.id]);
      return '<div class="qz-unit-card qz-unit-card--prac" data-unit="' + u.id + '">' +
        '<div class="qz-unit-card__top">' +
          '<span class="qz-unit-tag">Practical ' + u.no + '</span>' +
          '<span class="chip chip--subtle">' + n + ' Qs</span>' +
        '</div>' +
        '<h3 class="qz-unit-card__title">' + app.esc(u.short || u.title) + '</h3>' +
        '<p class="qz-unit-card__desc">' + (u.title || "Laboratory practical diagnostics & proximate analysis calculations") + '</p>' +
        '<div class="qz-unit-card__foot mt-auto">' +
          (n
            ? '<a class="btn btn--sm btn--primary w-full" href="#/quiz/unit/' + u.id + '">Practice Practicals (' + n + ')</a>'
            : '<button class="btn btn--sm btn--ghost w-full" disabled>Coming Soon</button>') +
        '</div>' +
      '</div>';
    }).join("");

    host.innerHTML =
      '<div class="quiz-arena animate-fade-in">' +

        /* 1. Playful Vibrant Hero Banner */
        '<div class="qz-hero-banner">' +
          '<div class="qz-hero-inner">' +
            '<div class="qz-hero-badge">🎮 Animal Nutrition Quiz Arena</div>' +
            '<h1 class="qz-hero-title">Level Up Your Nutrition Mastery</h1>' +
            '<p class="qz-hero-sub">' +
              'Test your knowledge with <b>' + totalAll + ' exam-grade questions</b>, earn streaks, collect mastery XP, and crush your VCI Board Exams with confidence!' +
            '</p>' +
            '<div class="qz-hero-stats">' +
              '<div class="qz-stat-pill"><b>' + totalAll + '</b> Questions</div>' +
              '<div class="qz-stat-pill"><b>' + fmtCounts.mcq + '</b> MCQ</div>' +
              '<div class="qz-stat-pill"><b>' + fmtCounts.tf + '</b> True/False</div>' +
              '<div class="qz-stat-pill"><b>' + fmtCounts.fib + '</b> Fill Blank</div>' +
              '<div class="qz-stat-pill qz-stat-pill--accent">🔥 Combos & Confetti</div>' +
            '</div>' +
            '<div class="qz-hero-actions mt-4">' +
              '<button class="btn btn--primary btn--lg qz-sprint-btn" id="sprint10btn">⚡ Rapid 10-Question Sprint</button>' +
              '<a class="btn btn--outline btn--lg" href="#/quiz/paper/paper-1">📘 Paper I Exam</a>' +
              '<a class="btn btn--outline btn--lg" href="#/quiz/paper/paper-2">📙 Paper II Exam</a>' +
              (due > 0 ? '<a class="btn btn--accent btn--lg" href="#/quiz/review">🧠 Smart Review (' + due + ' due)</a>' : '') +
            '</div>' +
          '</div>' +
        '</div>' +

        resumeHtml +

        /* 2. Game Modes Section */
        '<div class="qz-section-head mt-8">' +
          '<div>' +
            '<h2 class="flex items-center gap-2"><span>🎯</span> Choose Your Game Mode</h2>' +
            '<p class="small text-muted">Select an official exam simulation, full syllabus grand mock, or instant revision.</p>' +
          '</div>' +
        '</div>' +

        '<div class="qz-modes-grid mt-4">' +
          modeCardNew({
            id: "paper-1",
            title: "Paper I Board Exam",
            subtitle: "Principles, Feed Tech & Applied Ruminant-I",
            count: countAvailable(scopeUnits("paper", "paper-1")),
            href: "#/quiz/paper/paper-1",
            icon: "📘",
            time: "20-40 min",
            color: "blue"
          }) +
          modeCardNew({
            id: "paper-2",
            title: "Paper II Board Exam",
            subtitle: "Ruminant-II & Applied Non-Ruminant Nutrition",
            count: countAvailable(scopeUnits("paper", "paper-2")),
            href: "#/quiz/paper/paper-2",
            icon: "📙",
            time: "20-40 min",
            color: "amber"
          }) +
          modeCardNew({
            id: "grand",
            title: "Grand Championship Mock",
            subtitle: "All 4 Theory Units Combined (Full Syllabus)",
            count: countAvailable(theoryIds),
            href: "#/quiz/grand",
            icon: "🏆",
            time: "30-60 min",
            color: "purple"
          }) +
          modeCardNew({
            id: "practical",
            title: "Laboratory Diagnostic",
            subtitle: "Proximate Analysis & Feed Formulation Labs",
            count: countAvailable(pracIds),
            href: "#/quiz/practical",
            icon: "🔬",
            time: "15-25 min",
            color: "teal"
          }) +
          modeCardNew({
            id: "review",
            title: "Smart Memory Workout",
            subtitle: "Spaced repetition flashcards due for recall",
            count: due,
            href: "#/quiz/review",
            icon: "🧠",
            time: "5-10 min",
            color: "green",
            isReview: true
          }) +
        '</div>' +

        /* 3. Interactive Unit Browser Tabs */
        '<div class="qz-section-head mt-12">' +
          '<div>' +
            '<h2 class="flex items-center gap-2"><span>📚</span> Practice by Curriculum Unit</h2>' +
            '<p class="small text-muted">Focus on specific syllabus units with modular topic breakdowns.</p>' +
          '</div>' +
          '<div class="qz-tab-group" id="hubtabgroup">' +
            '<button class="qz-tab-btn is-active" data-tab="all">All Units</button>' +
            '<button class="qz-tab-btn" data-tab="theory">Theory (4)</button>' +
            '<button class="qz-tab-btn" data-tab="practical">Practical (4)</button>' +
          '</div>' +
        '</div>' +

        '<div class="qz-units-grid mt-4" id="unitcardscontainer">' +
          unitCardsHtml +
          pracCardsHtml +
        '</div>' +

      '</div>';

    // Event Wire-up
    var resumeBtn = document.getElementById("resumequizbtn");
    if (resumeBtn) resumeBtn.addEventListener("click", resumeSavedRun);

    var discardBtn = document.getElementById("discardquizbtn");
    if (discardBtn) discardBtn.addEventListener("click", function () {
      if (confirm("Discard your saved in-progress quiz?")) discardSavedRun();
    });

    var sprintBtn = document.getElementById("sprint10btn");
    if (sprintBtn) sprintBtn.addEventListener("click", function () {
      launchRapidSprint(10);
    });

    // Quick 10 buttons on unit cards
    document.querySelectorAll(".qz-quick10-btn").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var uId = btn.getAttribute("data-unit");
        launchQuick10ForUnit(uId);
      });
    });

    // Hub Filter Tabs
    var tabBtns = document.querySelectorAll("#hubtabgroup .qz-tab-btn");
    tabBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        tabBtns.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        var tab = btn.getAttribute("data-tab");
        var container = document.getElementById("unitcardscontainer");
        if (container) {
          if (tab === "all") container.innerHTML = unitCardsHtml + pracCardsHtml;
          else if (tab === "theory") container.innerHTML = unitCardsHtml;
          else if (tab === "practical") container.innerHTML = pracCardsHtml;

          // Re-wire quick 10 buttons
          container.querySelectorAll(".qz-quick10-btn").forEach(function (b) {
            b.addEventListener("click", function (e) {
              e.stopPropagation();
              launchQuick10ForUnit(b.getAttribute("data-unit"));
            });
          });
        }
      });
    });
  }

  function modeCardNew(opts) {
    var disabled = !opts.count && !opts.isReview;
    var zeroReview = opts.isReview && !opts.count;
    var colorCls = "qz-mode-card--" + (opts.color || "blue");

    return '<a class="qz-mode-card ' + colorCls + (disabled || zeroReview ? ' is-disabled' : '') + '" href="' +
      (disabled || zeroReview ? '#/quiz' : opts.href) + '">' +
      '<div class="qz-mode-card__top">' +
        '<span class="qz-mode-card__icon">' + opts.icon + '</span>' +
        '<span class="chip ' + (opts.count ? 'chip--accent' : 'chip--subtle') + '">' +
          (opts.isReview ? (opts.count ? opts.count + ' Due' : '0 Due') : opts.count + ' Qs') +
        '</span>' +
      '</div>' +
      '<h3 class="qz-mode-card__title">' + opts.title + '</h3>' +
      '<p class="qz-mode-card__desc">' + opts.subtitle + '</p>' +
      '<div class="qz-mode-card__foot">' +
        '<span class="qz-mode-card__time">⏱️ ' + opts.time + '</span>' +
        '<span class="qz-mode-card__cta">' + (zeroReview ? 'Queue Clear ✓' : 'Play Now →') + '</span>' +
      '</div>' +
    '</a>';
  }

  /* Rapid 10-Question Sprint Launcher */
  function launchRapidSprint(count) {
    var theoryIds = (syllabus.theory || []).map(function (u) { return u.id; });
    var pool = bankFor(theoryIds, ["mcq", "tf", "fib"], "all");
    if (!pool.length) { app.toast("Question bank is empty!"); return; }
    var picked = shuffle(pool).slice(0, count || 10);
    start(picked, "sprint", "⚡ Rapid 10-Q Sprint", false, 0, "shuffle", "all", null, false);
  }

  function launchQuick10ForUnit(unitId) {
    var pool = bankFor([unitId], ["mcq", "tf", "fib"], "all");
    if (!pool.length) { app.toast("No questions available for this unit yet."); return; }
    var u = syllabus.unitById[unitId] || {};
    var picked = shuffle(pool).slice(0, 10);
    start(picked, "unit:" + unitId + ":quick10", "⚡ Quick 10 · " + (u.short || unitId), false, 0, "shuffle", "all", unitId, false);
  }

  /* A quiz is open and student navigated to another quiz */
  function renderInProgressChoice(kind, id) {
    var done = answeredCount();
    var openRun = run;
    host.innerHTML =
      '<div class="quiz-arena">' +
        '<div class="pagehead"><span class="eyebrow">⏸️ Quiz In Progress</span>' +
          '<h1>You already have an active quiz open</h1>' +
          '<p class="lede"><b>' + app.esc(openRun.label) + '</b> — ' + done + ' of ' + openRun.qs.length +
          ' questions answered' + (openRun.exam ? ' (Timed Exam Mode)' : '') + '.</p></div>' +
        '<div class="card p-6">' +
          '<p>Would you like to resume where you left off, or discard this session and start fresh?</p>' +
          '<div class="row row--wrap gap-3 mt-6">' +
            '<button class="btn btn--primary btn--lg" id="keepgoingbtn">▶️ Continue This Quiz</button>' +
            '<button class="btn btn--lg btn--outline" id="startnewbtn">🔄 Discard and Start New</button>' +
            '<a class="btn btn--ghost btn--lg" href="#/quiz">Back to Quiz Arena</a>' +
          '</div>' +
        '</div>' +
      '</div>';

    var keep = document.getElementById("keepgoingbtn");
    if (keep) keep.addEventListener("click", function () { paintRun(); });

    var fresh = document.getElementById("startnewbtn");
    if (fresh) fresh.addEventListener("click", function () {
      stopRun();
      if (store.clearRun) store.clearRun();
      run = null;
      if (kind === "unit" || kind === "paper") renderSetup(kind, id);
      else if (kind === "grand" || kind === "practical") renderSetup(kind, null);
      else if (kind === "review") renderReview();
      else renderHub();
    });
  }

  function paperLabel(id) {
    var p = (syllabus.meta && syllabus.meta.papers ? syllabus.meta.papers : []).filter(function (x) { return x.id === id; })[0];
    if (!p) return id === "paper-1" ? "Paper I (Units 1 & 2)" : "Paper II (Units 3 & 4)";
    return p.name + " — Unit" + (p.units.length > 1 ? "s " : " ") + p.units.join(", ");
  }

  /* ============================================================
     QUIZ SETUP WIZARD
     ============================================================ */
  function renderSetup(kind, id) {
    resetRun();
    var unitIds = scopeUnits(kind, id);
    var subSections = (kind === "unit" && subSectionsByUnit[id]) ? subSectionsByUnit[id] : [];

    var label = kind === "unit"
      ? "Unit " + (syllabus.unitById[id] || {}).no + " — " + (syllabus.unitById[id] || {}).short
      : kind === "paper"
        ? paperLabel(id)
        : kind === "grand" ? "Grand Championship Mock (Units 1-4)" : "Practical Examination Diagnostic";

    var state = {
      subSectionId: "all",
      orderMode: "shuffle", // default to shuffle for playful experience
      formats: ["mcq", "tf", "fib"],
      count: 20,
      exam: false,
      minutes: 20,
      autoNext: false
    };

    function updateView() {
      var pool = bankFor(unitIds, state.formats, state.subSectionId);
      var allPool = bankFor(unitIds, ["mcq", "tf", "fib"], state.subSectionId);

      var counts = { mcq: 0, tf: 0, fib: 0 };
      allPool.forEach(function (q) { counts[q.format]++; });
      var maxN = pool.length;

      var presets = [10, 20, 30, 50, maxN].filter(function (n, idx, arr) {
        return n <= maxN && arr.indexOf(n) === idx;
      });
      if (!presets.length) presets = [maxN];
      if (state.count > maxN || presets.indexOf(state.count) === -1) {
        state.count = presets[Math.min(1, presets.length - 1)] || maxN;
      }

      var subSecHtml = "";
      if (subSections.length > 0) {
        var allCount = bankFor(unitIds, ["mcq", "tf", "fib"], "all").length;
        subSecHtml =
          '<div class="qz-setup-step mb-6">' +
            '<div class="qz-step-num">1</div>' +
            '<div class="qz-step-body">' +
              '<h3 class="qz-step-title">Choose Sub-section / Focus Module</h3>' +
              '<p class="small text-muted mb-3">Target a specific topic or test the full curriculum unit.</p>' +
              '<div class="qz-subsec-grid">' +
                '<button type="button" class="qz-subsec-card' + (state.subSectionId === 'all' ? ' is-selected' : '') + '" data-sub="all">' +
                  '<div class="qz-subsec-card__icon">🌟</div>' +
                  '<div class="qz-subsec-card__text">' +
                    '<b>All Sub-sections (Full Unit)</b>' +
                    '<span class="small text-muted">' + allCount + ' Questions · Complete coverage</span>' +
                  '</div>' +
                  '<span class="qz-subsec-check">✓</span>' +
                '</button>' +
                subSections.map(function (sub) {
                  var c = bankFor(unitIds, ["mcq", "tf", "fib"], sub.id).length;
                  var sel = state.subSectionId === sub.id ? ' is-selected' : '';
                  return '<button type="button" class="qz-subsec-card' + sel + '" data-sub="' + sub.id + '">' +
                    '<div class="qz-subsec-card__icon">' + sub.icon + '</div>' +
                    '<div class="qz-subsec-card__text">' +
                      '<b>' + app.esc(sub.title) + '</b>' +
                      '<span class="small text-muted">' + c + ' Questions · ' + app.esc(sub.desc) + '</span>' +
                    '</div>' +
                    '<span class="qz-subsec-check">✓</span>' +
                  '</button>';
                }).join("") +
              '</div>' +
            '</div>' +
          '</div>';
      }

      host.innerHTML =
        '<div class="quiz-arena">' +
          '<div class="pagehead mb-6">' +
            '<div class="row row--wrap items-center gap-2 mb-2">' +
              '<a class="btn btn--sm btn--ghost" href="#/quiz">← Quiz Arena</a>' +
              '<span class="chip chip--accent font-mono">' + maxN + ' Questions Available</span>' +
            '</div>' +
            '<h1>' + app.esc(label) + '</h1>' +
            '<p class="lede">Configure your test session below. Pick question count, format, and study mode.</p>' +
          '</div>' +

          '<div class="card qz-setup-wizard p-6">' +
            subSecHtml +

            /* Step 2: Game Mode */
            '<div class="qz-setup-step mb-6">' +
              '<div class="qz-step-num">' + (subSections.length ? '2' : '1') + '</div>' +
              '<div class="qz-step-body">' +
                '<h3 class="qz-step-title">Select Challenge Mode</h3>' +
                '<p class="small text-muted mb-3">Choose how feedback and scoring should behave during the quiz.</p>' +
                '<div class="grid grid--2 gap-3">' +
                  '<button type="button" class="qz-mode-toggle-card' + (!state.exam ? ' is-selected' : '') + '" data-exam="false">' +
                    '<div class="qz-mode-toggle-card__icon">💡</div>' +
                    '<div class="qz-mode-toggle-card__content">' +
                      '<b>Study &amp; Practice Mode</b>' +
                      '<p class="small text-muted mt-1">Instant answer checks, streak combos, celebratory confetti &amp; high-yield notes after every question.</p>' +
                    '</div>' +
                    '<span class="qz-mode-check">✓</span>' +
                  '</button>' +
                  '<button type="button" class="qz-mode-toggle-card' + (state.exam ? ' is-selected' : '') + '" data-exam="true">' +
                    '<div class="qz-mode-toggle-card__icon">⏱️</div>' +
                    '<div class="qz-mode-toggle-card__content">' +
                      '<b>Board Exam Simulation</b>' +
                      '<p class="small text-muted mt-1">Timed countdown clock, no answer reveals until final submission. Mirrors official VCI exam hall conditions.</p>' +
                    '</div>' +
                    '<span class="qz-mode-check">✓</span>' +
                  '</button>' +
                '</div>' +
              '</div>' +
            '</div>' +

            /* Step 3: Question Order & Length */
            '<div class="qz-setup-step mb-6">' +
              '<div class="qz-step-num">' + (subSections.length ? '3' : '2') + '</div>' +
              '<div class="qz-step-body">' +
                '<h3 class="qz-step-title">Question Order &amp; Length</h3>' +
                '<div class="row row--wrap gap-4 mt-3">' +
                  '<div class="flex-1 min-w-[200px]">' +
                    '<label class="small font-bold block mb-2">Question Order</label>' +
                    '<div class="seg" id="segorder">' +
                      '<button type="button" class="seg__btn' + (state.orderMode === 'shuffle' ? ' is-on' : '') + '" data-order="shuffle">🔀 Shuffled</button>' +
                      '<button type="button" class="seg__btn' + (state.orderMode === 'sequence' ? ' is-on' : '') + '" data-order="sequence">📋 Syllabus Order</button>' +
                    '</div>' +
                  '</div>' +
                  '<div class="flex-1 min-w-[200px]">' +
                    '<label class="small font-bold block mb-2">Number of Questions</label>' +
                    '<div class="seg" id="segcount">' +
                      presets.map(function (n) {
                        return '<button type="button" class="seg__btn' + (state.count === n ? ' is-on' : '') + '" data-count="' + n + '">' +
                          (n === maxN ? 'All (' + n + ')' : n) +
                        '</button>';
                      }).join("") +
                    '</div>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +

            /* Step 4: Formats */
            '<div class="qz-setup-step mb-6">' +
              '<div class="qz-step-num">' + (subSections.length ? '4' : '3') + '</div>' +
              '<div class="qz-step-body">' +
                '<h3 class="qz-step-title">Question Formats</h3>' +
                '<p class="small text-muted mb-2">Choose any combination of question styles.</p>' +
                '<div class="row row--wrap gap-3" id="fmtbox">' +
                  ['mcq', 'tf', 'fib'].map(function (f) {
                    var lbl = { mcq: "Multiple Choice", tf: "True / False", fib: "Fill in the Blanks" }[f];
                    var icon = { mcq: "🔘", tf: "⚖️", fib: "✍️" }[f];
                    var count = counts[f];
                    var checked = state.formats.indexOf(f) !== -1;
                    return '<label class="qz-format-pill' + (checked ? ' is-checked' : '') + (count === 0 ? ' is-disabled' : '') + '">' +
                      '<input type="checkbox" data-fmt="' + f + '"' + (checked ? ' checked' : '') + (count === 0 ? ' disabled' : '') + '> ' +
                      '<span>' + icon + ' ' + lbl + '</span>' +
                      '<span class="chip chip--sm ml-1">' + count + '</span>' +
                    '</label>';
                  }).join("") +
                '</div>' +
              '</div>' +
            '</div>' +

            /* Optional Timer row for Exam Mode */
            (state.exam
              ? '<div class="qz-setup-step mb-6 animate-fade-in">' +
                  '<div class="qz-step-num">⏱️</div>' +
                  '<div class="qz-step-body">' +
                    '<h3 class="qz-step-title">Exam Time Limit</h3>' +
                    '<div class="seg mt-2" id="segtime">' +
                      [10, 20, 30, 45, 60].map(function (m) {
                        return '<button type="button" class="seg__btn' + (state.minutes === m ? ' is-on' : '') + '" data-min="' + m + '">' + m + ' min</button>';
                      }).join("") +
                    '</div>' +
                  '</div>' +
                '</div>'
              : '') +

            /* Launch Bar */
            '<div class="qz-launch-bar mt-8 pt-6">' +
              '<a class="btn btn--ghost btn--lg" href="#/quiz">Cancel</a>' +
              '<button class="btn btn--primary btn--xl qz-launch-btn" id="startbtn">' +
                '🚀 Launch Quiz (' + Math.min(state.count, maxN) + ' Questions)' +
              '</button>' +
            '</div>' +

          '</div>' +
        '</div>';

      attachWizardEvents();
    }

    function attachWizardEvents() {
      // Sub-sections
      document.querySelectorAll(".qz-subsec-card").forEach(function (card) {
        card.addEventListener("click", function () {
          playSound("click");
          state.subSectionId = card.getAttribute("data-sub");
          updateView();
        });
      });

      // Exam mode cards
      document.querySelectorAll(".qz-mode-toggle-card").forEach(function (card) {
        card.addEventListener("click", function () {
          playSound("click");
          state.exam = card.getAttribute("data-exam") === "true";
          updateView();
        });
      });

      // Order toggle
      document.querySelectorAll("#segorder .seg__btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          playSound("click");
          state.orderMode = btn.getAttribute("data-order");
          updateView();
        });
      });

      // Count seg
      document.querySelectorAll("#segcount .seg__btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          playSound("click");
          state.count = parseInt(btn.getAttribute("data-count"), 10);
          updateView();
        });
      });

      // Time seg
      document.querySelectorAll("#segtime .seg__btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          playSound("click");
          state.minutes = parseInt(btn.getAttribute("data-min"), 10);
          document.querySelectorAll("#segtime .seg__btn").forEach(function (b) { b.classList.remove("is-on"); });
          btn.classList.add("is-on");
        });
      });

      // Format checkboxes
      document.querySelectorAll("[data-fmt]").forEach(function (chk) {
        chk.addEventListener("change", function () {
          playSound("click");
          var checkedFmts = Array.prototype.slice.call(document.querySelectorAll("[data-fmt]"))
            .filter(function (c) { return c.checked; })
            .map(function (c) { return c.getAttribute("data-fmt"); });
          if (!checkedFmts.length) {
            app.toast("Select at least one format!");
            chk.checked = true;
            return;
          }
          state.formats = checkedFmts;
          updateView();
        });
      });

      // Start Button
      var startBtn = document.getElementById("startbtn");
      if (startBtn) {
        startBtn.addEventListener("click", function () {
          var questions = bankFor(unitIds, state.formats, state.subSectionId);
          if (!questions.length) { app.toast("No questions match your selection"); return; }

          var finalQuestions = state.orderMode === "shuffle" ? shuffle(questions) : questions;
          finalQuestions = finalQuestions.slice(0, Math.min(state.count, finalQuestions.length));

          var runLabel = label;
          var subMeta = getSubSectionMeta(id, state.subSectionId);
          if (subMeta) runLabel = subMeta.icon + " " + subMeta.title;

          start(
            finalQuestions,
            kind + (id ? ":" + id : "") + (state.subSectionId !== "all" ? ":" + state.subSectionId : ""),
            runLabel,
            state.exam,
            state.minutes,
            state.orderMode,
            state.subSectionId,
            id,
            state.autoNext
          );
        });
      }
    }

    updateView();
  }

  /* ============================================================
     SMART REVIEW (SPACED REPETITION)
     ============================================================ */
  function renderReview() {
    resetRun();
    var dueKeys = (store.dueSrs && store.dueSrs()) || [];
    var all = bankFor(
      syllabus.allUnits.map(function (u) { return u.id; }),
      ["mcq", "tf", "fib"]
    );
    var pool = all.filter(function (q) { return dueKeys.indexOf(q.key) !== -1; });

    if (!pool.length) {
      host.innerHTML =
        '<div class="quiz-arena">' +
          '<div class="pagehead"><span class="eyebrow">🧠 Spaced Repetition</span><h1>Smart Memory Review</h1></div>' +
          '<div class="card p-8 text-center mt-6">' +
            '<div style="font-size:3rem;margin-bottom:1rem">🎉</div>' +
            '<h2>Your Memory Queue is Completely Clear!</h2>' +
            '<p class="muted mt-2 max-w-lg mx-auto">Zero questions are due for recall today. As you solve quizzes, missed questions will reappear automatically at 1, 2, 4, 8, and 16 day intervals to cement them into long-term memory.</p>' +
            '<div class="row row--wrap justify-center gap-3 mt-6">' +
              '<a class="btn btn--primary btn--lg" href="#/quiz">Go to Quiz Arena</a>' +
              '<a class="btn btn--outline btn--lg" href="#/dashboard">Open Dashboard</a>' +
            '</div>' +
          '</div>' +
        '</div>';
      return;
    }

    start(shuffle(pool), "review", "🧠 Smart Memory Review", false, 0, "shuffle", "all", null, false);
  }

  /* ============================================================
     RUNNING A QUIZ (ACTIVE RUNNER)
     ============================================================ */
  var PRACTICE_LOCK_MS = 120;

  function blankRun(questions, opts) {
    var n = questions.length;
    return {
      active: true,
      qs: questions,
      i: 0,
      answers: fillArray(n, null),
      checked: fillArray(n, false),
      graded: fillArray(n, false),
      flagged: fillArray(n, false),
      times: fillArray(n, 0),
      scope: opts.scope,
      label: opts.label,
      orderMode: opts.orderMode || "sequence",
      subSectionId: opts.subSectionId || "all",
      unitId: opts.unitId || (questions[0] ? questions[0].unitId : null),
      exam: !!opts.exam,
      autoNext: !!opts.autoNext,
      minutes: opts.minutes || 0,
      endsAt: opts.exam ? Date.now() + (opts.minutes || 0) * 60000 : 0,
      startedAt: Date.now(),
      streak: 0,
      bestStreak: 0,
      paletteOpen: false
    };
  }

  function fillArray(n, v) {
    var a = [];
    for (var i = 0; i < n; i++) a.push(v);
    return a;
  }

  function withShuffledOptions(q) {
    if (q.format !== "mcq" || !Array.isArray(q.o) || q.o.length < 2) return q;
    var order = shuffle(q.o.map(function (_, i) { return i; }));
    var copy = {};
    for (var k in q) copy[k] = q[k];
    copy.o = order.map(function (idx) { return q.o[idx]; });
    copy.a = order.indexOf(q.a);
    return copy;
  }

  function start(questions, scope, label, exam, minutes, orderMode, subSectionId, unitId, autoNext) {
    stopRun();

    var prepared = (orderMode === "shuffle")
      ? questions.map(withShuffledOptions)
      : questions;

    run = blankRun(prepared, {
      scope: scope, label: label, exam: exam, minutes: minutes,
      orderMode: orderMode, subSectionId: subSectionId, unitId: unitId,
      autoNext: autoNext
    });

    run.questionEnteredAt = Date.now();
    startTimer();
    persistRun();
    paintRun();
  }

  function startTimer() {
    stopTimer();
    if (!run || !run.exam) return;
    timerId = setInterval(function () {
      if (!run || !run.active) { stopTimer(); return; }
      if (Date.now() >= run.endsAt) { finish(true); return; }
      var t = document.getElementById("qtimer");
      if (t) {
        var remaining = run.endsAt - Date.now();
        t.textContent = "⏱️ " + fmtTime(remaining);
        t.className = "qz-hud-chip " + (remaining < 60000 ? "qz-hud-chip--danger" : "qz-hud-chip--warn");
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerId) { clearInterval(timerId); timerId = null; }
  }

  function stopRun() {
    stopTimer();
    if (keyHandler) {
      window.removeEventListener("keydown", keyHandler);
      keyHandler = null;
    }
  }

  function persistRun() {
    if (!run || !run.active) return;
    try {
      var copy = {};
      for (var k in run) {
        if (k === "paletteOpen" || k === "questionEnteredAt") continue;
        copy[k] = run[k];
      }
      copy.savedAt = Date.now();
      store.saveRun(copy);
    } catch (e) {}
  }

  function savedRun() {
    var s = store.loadRun && store.loadRun();
    if (!s || !s.qs || !s.qs.length || !s.active) return null;

    var n = s.qs.length;
    var lists = ["answers", "checked", "graded", "flagged", "times"];
    var sound = lists.every(function (k) { return Array.isArray(s[k]) && s[k].length === n; });
    if (!sound || typeof s.i !== "number" || s.i < 0 || s.i >= n) {
      if (store.clearRun) store.clearRun();
      return null;
    }
    if (s.exam && s.endsAt && Date.now() > s.endsAt) {
      if (store.clearRun) store.clearRun();
      return null;
    }
    return s;
  }

  function resumeSavedRun() {
    var s = savedRun();
    if (!s) { renderHub(); return; }
    stopRun();
    run = s;
    run.paletteOpen = false;
    run.questionEnteredAt = Date.now();
    startTimer();
    paintRun();
  }

  function discardSavedRun() {
    if (store.clearRun) store.clearRun();
    renderHub();
  }

  function bankQuestionTime() {
    if (!run || !run.questionEnteredAt) return;
    var secs = Math.round((Date.now() - run.questionEnteredAt) / 1000);
    if (secs > 0 && secs < 3600) run.times[run.i] = (run.times[run.i] || 0) + secs;
    run.questionEnteredAt = Date.now();
  }

  function goTo(index) {
    if (!run || index < 0 || index >= run.qs.length) return;
    bankQuestionTime();
    run.i = index;
    run.paletteOpen = false;
    persistRun();
    paintRun();
    scrollQuestionIntoView();
  }

  function scrollQuestionIntoView() {
    var card = document.querySelector(".quizrun");
    if (!card || typeof window === "undefined") return;
    var top = card.getBoundingClientRect().top + window.pageYOffset - 70;
    if (window.pageYOffset > top + 4) window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }

  function fmtTime(ms) {
    var s = Math.max(0, Math.floor(ms / 1000));
    return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
  }

  function fmtDuration(seconds) {
    if (seconds < 60) return seconds + " sec";
    var m = Math.floor(seconds / 60), s = seconds % 60;
    if (m < 60) return m + " min " + (s ? s + " sec" : "");
    return Math.floor(m / 60) + " h " + (m % 60) + " min";
  }

  function normaliseText(v) {
    return String(v)
      .toLowerCase()
      .replace(/[‘’“”]/g, "'")
      .replace(/[.,;:!?'"()\[\]]/g, "")
      .replace(/[-_/]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function isAnswered(q, given) {
    if (given === null || given === undefined) return false;
    if (q.format === "fib") return String(given).trim() !== "";
    return true;
  }

  function isCorrect(q, given) {
    if (!isAnswered(q, given)) return false;
    if (q.format === "mcq") return given === q.a;
    if (q.format === "tf") return given === q.a;

    var mine = normaliseText(given);
    if (!mine) return false;
    var accepted = Array.isArray(q.a) ? q.a : [q.a];
    return accepted.some(function (acc) {
      var want = normaliseText(acc);
      if (!want) return false;
      if (mine === want) return true;
      if (mine.replace(/s$/, "") === want.replace(/s$/, "")) return true;
      return false;
    });
  }

  function answeredCount() {
    var n = 0;
    run.qs.forEach(function (q, i) { if (isAnswered(q, run.answers[i])) n++; });
    return n;
  }

  function selectAnswer(value) {
    var q = run.qs[run.i];
    if (run.checked[run.i]) return;

    run.answers[run.i] = value;
    playSound("click");

    if (run.exam) {
      persistRun();
      if (run.autoNext && run.i < run.qs.length - 1) {
        var from = run.i;
        paintRun();
        setTimeout(function () {
          if (run && run.active && run.i === from && isAnswered(q, run.answers[from])) goTo(from + 1);
        }, 220);
        return;
      }
      paintRun();
      return;
    }

    revealAnswer();
  }

  function revealAnswer() {
    var q = run.qs[run.i];
    var given = run.answers[run.i];
    if (!isAnswered(q, given)) {
      app.toast("Select or type an answer first!");
      return;
    }
    if (run.checked[run.i]) return;

    run.checked[run.i] = true;
    var ok = isCorrect(q, given);

    if (!run.graded[run.i]) {
      run.graded[run.i] = true;
      if (store.gradeSrs) store.gradeSrs(q.key, ok);
    }

    if (ok) {
      run.streak = (run.streak || 0) + 1;
      if (run.streak > (run.bestStreak || 0)) run.bestStreak = run.streak;
      playSound("correct");

      if (run.streak >= 3) playSound("streak");
      if (run.streak === 3 && app.popMilestone) app.popMilestone("🔥 3 in a row! You're on fire!");
      else if (run.streak === 5 && app.popMilestone) app.popMilestone("🚀 5 streak! Unstoppable!");
      else if (run.streak === 7 && app.popMilestone) app.popMilestone("⚡ 7 streak! Pure nutrition genius!");
      else if (run.streak === 10 && app.popMilestone) app.popMilestone("👑 10 streak! Gold Medalist!");
    } else {
      run.streak = 0;
      playSound("wrong");
    }

    bankQuestionTime();
    persistRun();
    paintRun();

    if (ok && app.burstConfetti) {
      var el = document.querySelector(".opt.is-right") || document.querySelector(".qz-question-card");
      if (el) app.burstConfetti(el);
    }
  }

  /* ============================================================
     THE QUESTION RUNNER SCREEN
     ============================================================ */
  function paintRun() {
    var q = run.qs[run.i];
    var given = run.answers[run.i];
    var revealed = !run.exam && run.checked[run.i];
    var locked = revealed;

    // Build Option Controls
    var body;
    if (q.format === "mcq") {
      var letters = ["A", "B", "C", "D"];
      body = '<div class="qz-options-list">' + (q.o || []).map(function (opt, i) {
        var cls = "qz-option-btn";
        if (given === i) cls += " is-selected";
        if (revealed) {
          if (i === q.a) cls += " is-correct animate-pop";
          else if (given === i) cls += " is-incorrect animate-shake";
        }
        return '<button type="button" class="' + cls + '" data-pick="' + i + '"' +
          ' aria-pressed="' + (given === i) + '"' + (locked ? ' disabled' : '') + '>' +
          '<span class="qz-option-badge">' + letters[i] + '</span>' +
          '<span class="qz-option-text">' + app.esc(opt) + '</span>' +
          (revealed && i === q.a ? '<span class="qz-option-state is-right">✓ Correct</span>' : '') +
          (revealed && given === i && i !== q.a ? '<span class="qz-option-state is-wrong">✗ Incorrect</span>' : '') +
        '</button>';
      }).join("") + '</div>';

    } else if (q.format === "tf") {
      body = '<div class="qz-tf-grid">' + [true, false].map(function (v) {
        var cls = "qz-tf-btn" + (v ? " qz-tf-btn--true" : " qz-tf-btn--false");
        if (given === v) cls += " is-selected";
        if (revealed) {
          if (v === q.a) cls += " is-correct animate-pop";
          else if (given === v) cls += " is-incorrect animate-shake";
        }
        return '<button type="button" class="' + cls + '" data-pick="' + v + '"' +
          ' aria-pressed="' + (given === v) + '"' + (locked ? ' disabled' : '') + '>' +
          '<span class="qz-tf-icon">' + (v ? "👍" : "👎") + '</span>' +
          '<span class="qz-tf-text">' + (v ? "TRUE" : "FALSE") + '</span>' +
          (revealed && v === q.a ? '<span class="qz-option-state is-right">✓ Correct</span>' : '') +
          (revealed && given === v && v !== q.a ? '<span class="qz-option-state is-wrong">✗ Incorrect</span>' : '') +
        '</button>';
      }).join("") + '</div>';

    } else {
      body = '<div class="qz-fib-card">' +
        '<div class="qz-fib-input-wrap">' +
          '<input type="text" id="fibinput" class="qz-fib-input" placeholder="Type your answer here..." ' +
          'autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" ' +
          'value="' + app.esc(given !== null && given !== undefined ? String(given) : "") + '"' +
          (locked ? ' disabled' : '') + '>' +
          (!locked
            ? '<button type="button" class="btn btn--primary qz-fib-submit-btn" id="fibsubmit">' +
                (run.exam ? 'Save Answer' : 'Check Answer ✓') +
              '</button>'
            : '') +
        '</div>' +
        (revealed
          ? '<div class="qz-fib-reveal-card ' + (isCorrect(q, given) ? 'is-correct' : 'is-incorrect') + '">' +
              '<span class="qz-fib-badge">' + (isCorrect(q, given) ? '✓ Correct' : '✗ Incorrect') + '</span>' +
              '<div class="qz-fib-info">' +
                '<span class="text-muted small">Standard Prescribed Answer:</span>' +
                '<b class="qz-fib-answer">' + app.esc(q.a_display || (Array.isArray(q.a) ? q.a[0] : q.a)) + '</b>' +
              '</div>' +
            '</div>'
          : '') +
      '</div>';
    }

    var answered = answeredCount();
    var pctDone = Math.round((answered / run.qs.length) * 100);
    var subMeta = getSubSectionMeta(q.unitId, q.subSection);
    var uMeta = syllabus.unitById[q.unitId] || {};

    var diffBadge = q.diff === 1
      ? '<span class="qz-pill qz-pill--green">⭐ Foundational</span>'
      : q.diff === 2
        ? '<span class="qz-pill qz-pill--blue">⭐⭐ Core UG</span>'
        : '<span class="qz-pill qz-pill--amber">⭐⭐⭐ Gold Rank</span>';

    var isLast = run.i === run.qs.length - 1;

    // Solid Bottom Action Controls
    var primaryActionBtn = "";
    if (run.exam) {
      if (isLast) {
        primaryActionBtn = '<button class="btn btn--primary btn--lg" id="submitpaperbtn">🏆 Finish &amp; Submit Paper</button>';
      } else {
        primaryActionBtn = '<button class="btn btn--primary btn--lg" id="nextbtn">Next Question →</button>';
      }
    } else {
      if (!run.checked[run.i]) {
        primaryActionBtn =
          '<div class="flex items-center gap-2">' +
            (!isAnswered(q, given)
              ? '<button class="btn btn--ghost btn--sm" id="skipbtn">Skip Question →</button>'
              : '') +
            '<button class="btn btn--primary btn--lg" id="checkbtn">Check Answer ✓</button>' +
          '</div>';
      } else {
        if (isLast) {
          primaryActionBtn = '<button class="btn btn--primary btn--lg" id="finishbtn">Finish &amp; See Results 🏆</button>';
        } else {
          primaryActionBtn = '<button class="btn btn--primary btn--lg" id="nextbtn">Next Question →</button>';
        }
      }
    }

    host.innerHTML =
      '<div class="quizrun animate-fade-in">' +

        /* 1. Rock-Solid Game HUD */
        '<header class="qz-hud">' +
          '<div class="qz-hud__left">' +
            '<button class="btn btn--sm btn--ghost qz-exit-btn" id="quitbtn" title="Exit Quiz">' +
              '✕ Exit' +
            '</button>' +
            '<span class="qz-hud-title">' + app.esc(run.label) + '</span>' +
          '</div>' +

          '<div class="qz-hud__center">' +
            '<button class="qz-hud-chip qz-palette-toggle" id="palettebtn" type="button" aria-expanded="' + (run.paletteOpen ? 'true' : 'false') + '">' +
              '▦ Q ' + (run.i + 1) + ' / ' + run.qs.length + ' ▾' +
            '</button>' +
          '</div>' +

          '<div class="qz-hud__right">' +
            (run.streak >= 2
              ? '<span class="qz-hud-chip qz-hud-chip--streak">🔥 ' + run.streak + ' Streak</span>'
              : '') +
            (run.exam
              ? '<span class="qz-hud-chip qz-hud-chip--timer" id="qtimer">⏱️ ' + fmtTime(run.endsAt - Date.now()) + '</span>'
              : '') +
            '<button class="btn btn--sm qz-hud-submit-btn" id="hudsubmitbtn" title="Submit test and view your results">' +
              '📝 Submit' +
            '</button>' +
            '<button class="qz-sound-toggle-btn" id="soundtogglebtn" title="Toggle Sound">' +
              (isSoundEnabled() ? '🔊' : '🔇') +
            '</button>' +
          '</div>' +
        '</header>' +

        /* Smooth Progress Bar */
        '<div class="qz-progress-track">' +
          '<div class="qz-progress-fill" style="width:' + ((run.i + 1) / run.qs.length * 100) + '%"></div>' +
        '</div>' +

        /* Dropdown Palette */
        (run.paletteOpen ? renderPalette() : '') +

        /* 2. Main Question Card */
        '<div class="card qz-question-card mt-5">' +
          '<div class="qz-card-meta">' +
            '<span class="qz-pill qz-pill--brand">' + app.esc(uMeta.short || q.unitId) + '</span>' +
            (subMeta ? '<span class="qz-pill qz-pill--sub">' + subMeta.icon + ' ' + app.esc(subMeta.title.split(",")[0]) + '</span>' : '') +
            diffBadge +
            '<span class="qz-pill qz-pill--neutral">' +
              ({ mcq: "Multiple Choice", tf: "True / False", fib: "Fill in the Blank" }[q.format] || q.format) +
            '</span>' +
            '<div class="push"></div>' +
            '<button type="button" class="qz-flag-btn' + (run.flagged[run.i] ? ' is-flagged' : '') + '" id="flagbtn" title="Flag this question for review">' +
              (run.flagged[run.i] ? '🚩 Flagged' : '⚑ Flag') +
            '</button>' +
          '</div>' +

          '<h2 class="qz-question-text mt-4">' + app.esc(q.q) + '</h2>' +

          body +

          /* High-Yield Explanation Box */
          (revealed && q.e
            ? '<div class="qz-explanation-card mt-6 animate-scale-up ' + (isCorrect(q, given) ? 'is-correct' : 'is-wrong') + '">' +
                '<div class="qz-explanation-head">' +
                  '<span class="qz-explanation-title">' +
                    (isCorrect(q, given) ? '🎉 Spot On!' : '💡 High-Yield Concept Explanation') +
                  '</span>' +
                '</div>' +
                '<div class="qz-explanation-body">' + q.e + '</div>' +
                (q.topicId && syllabus.topicById[q.topicId]
                  ? '<div class="mt-3 pt-2 border-t border-border-light">' +
                      '<a class="qz-deep-topic-link" href="#/topic/' + q.topicId + '" target="_blank">' +
                        '📖 Read full textbook chapter: <b>' + app.esc(syllabus.topicById[q.topicId].title) + '</b> →' +
                      '</a>' +
                    '</div>'
                  : '') +
              '</div>'
            : '') +
        '</div>' +

        /* 3. Rock-Solid Fixed Navigation Bar */
        '<div class="qz-nav-bar mt-6">' +
          '<button class="btn btn--lg qz-nav-prev" id="prevbtn"' + (run.i === 0 ? ' disabled' : '') + '>' +
            '← Previous' +
          '</button>' +

          '<div class="qz-nav-status">' +
            '<span class="text-muted small">Question ' + (run.i + 1) + ' of ' + run.qs.length + ' (' + pctDone + '% answered)</span>' +
          '</div>' +

          '<div class="qz-nav-actions">' +
            (!isLast || (!run.exam && !run.checked[run.i])
              ? '<button type="button" class="btn btn--lg qz-nav-submit-btn mr-2" id="submittestbtn" title="Submit test and calculate your final score">📝 Submit Test</button>'
              : '') +
            primaryActionBtn +
          '</div>' +
        '</div>' +

        '<p class="qz-nav-hint small text-muted text-center mt-3">' +
          (run.exam
            ? 'Exam Mode: Select an answer and move forward. You can return to any question using Previous or the Question Jump menu.'
            : 'Practice Mode: Tap an answer for instant feedback. Keys: A–D, 1–4, T/F, Enter to advance.') +
        '</p>' +

      '</div>';

    if (!run.questionEnteredAt) run.questionEnteredAt = Date.now();
    wireRun(q);
  }

  function renderPalette() {
    var answered = answeredCount();
    return '<div class="qz-palette-drawer animate-scale-up">' +
      '<div class="qz-palette-head">' +
        '<b>Question Map (' + answered + ' of ' + run.qs.length + ' Answered)</b>' +
        '<div class="qz-palette-legend">' +
          '<span class="qz-legend-item"><i class="qz-dot is-correct"></i> Correct</span>' +
          '<span class="qz-legend-item"><i class="qz-dot is-wrong"></i> Wrong</span>' +
          '<span class="qz-legend-item"><i class="qz-dot is-answered"></i> Answered</span>' +
          '<span class="qz-legend-item"><i class="qz-dot is-flagged"></i> Flagged</span>' +
        '</div>' +
      '</div>' +
      '<div class="qz-palette-grid">' +
        run.qs.map(function (q, i) {
          var cls = "qz-palette-cell";
          if (isAnswered(q, run.answers[i])) {
            cls += run.checked[i]
              ? (isCorrect(q, run.answers[i]) ? " is-correct" : " is-wrong")
              : " is-answered";
          }
          if (run.flagged[i]) cls += " is-flagged";
          if (i === run.i) cls += " is-current";
          return '<button type="button" class="' + cls + '" data-jump="' + i + '">' + (i + 1) + '</button>';
        }).join("") +
      '</div>' +
      '<div class="qz-palette-foot mt-4 pt-3 border-t border-border flex items-center justify-between">' +
        '<span class="small text-muted font-mono">' + answered + ' of ' + run.qs.length + ' answered</span>' +
        '<button type="button" class="btn btn--sm btn--primary" id="palettesubmitbtn">📝 Submit Test Now</button>' +
      '</div>' +
    '</div>';
  }

  function wireRun(q) {
    var scope = host;

    // Option picks
    scope.querySelectorAll("[data-pick]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (Date.now() - lastPickAt < PRACTICE_LOCK_MS) return;
        lastPickAt = Date.now();
        var raw = b.getAttribute("data-pick");
        selectAnswer(q.format === "tf" ? (raw === "true") : parseInt(raw, 10));
      });
    });

    // Palette jump
    scope.querySelectorAll("[data-jump]").forEach(function (b) {
      b.addEventListener("click", function () {
        goTo(parseInt(b.getAttribute("data-jump"), 10));
      });
    });

    // Palette toggle
    var pal = document.getElementById("palettebtn");
    if (pal) pal.addEventListener("click", function () {
      playSound("click");
      run.paletteOpen = !run.paletteOpen;
      paintRun();
    });

    // Sound toggle
    var snd = document.getElementById("soundtogglebtn");
    if (snd) snd.addEventListener("click", function () {
      var enabled = !isSoundEnabled();
      setSoundEnabled(enabled);
      snd.textContent = enabled ? '🔊' : '🔇';
      app.toast(enabled ? "Sound effects enabled" : "Sound effects muted");
    });

    // Flag toggle
    var flag = document.getElementById("flagbtn");
    if (flag) flag.addEventListener("click", function () {
      playSound("click");
      run.flagged[run.i] = !run.flagged[run.i];
      persistRun();
      paintRun();
    });

    // FIB input
    var fib = document.getElementById("fibinput");
    if (fib) {
      if (!run.checked[run.i]) setTimeout(function () { try { fib.focus(); } catch (e) {} }, 60);
      fib.addEventListener("input", function () {
        run.answers[run.i] = fib.value;
      });
      fib.addEventListener("change", function () {
        run.answers[run.i] = fib.value;
        persistRun();
      });
      fib.addEventListener("keydown", function (e) {
        if (e.key !== "Enter") return;
        e.preventDefault();
        run.answers[run.i] = fib.value;
        if (run.exam) {
          persistRun();
          if (run.i < run.qs.length - 1) goTo(run.i + 1); else paintRun();
        } else {
          revealAnswer();
        }
      });
    }

    var fibSubmit = document.getElementById("fibsubmit");
    if (fibSubmit) fibSubmit.addEventListener("click", function () {
      if (fib) run.answers[run.i] = fib.value;
      if (run.exam) {
        persistRun();
        app.toast("Answer saved");
        paintRun();
      } else {
        revealAnswer();
      }
    });

    var check = document.getElementById("checkbtn");
    if (check) check.addEventListener("click", function () {
      revealAnswer();
    });

    var skip = document.getElementById("skipbtn");
    if (skip) skip.addEventListener("click", function () {
      if (run.i < run.qs.length - 1) goTo(run.i + 1);
      else finishWithGuard();
    });

    var next = document.getElementById("nextbtn");
    if (next) next.addEventListener("click", function () { goTo(run.i + 1); });

    var prev = document.getElementById("prevbtn");
    if (prev) prev.addEventListener("click", function () { goTo(run.i - 1); });

    // Submit / Finish buttons across HUD, Palette, and Navigation Bar
    ["submittestbtn", "hudsubmitbtn", "palettesubmitbtn", "finishbtn", "submitpaperbtn", "examfinishbtn"].forEach(function (id) {
      var b = document.getElementById(id);
      if (b) {
        b.addEventListener("click", function () {
          playSound("click");
          finishWithGuard();
        });
      }
    });

    var quit = document.getElementById("quitbtn");
    if (quit) quit.addEventListener("click", function () {
      if (!confirm("Exit this quiz? Your unfinished session will be saved so you can resume anytime.")) return;
      stopRun();
      persistRun();
      location.hash = "#/quiz";
    });

    // Keyboard Shortcuts
    if (keyHandler) window.removeEventListener("keydown", keyHandler);
    keyHandler = function (e) {
      if (!run || !run.active) return;
      var tag = e.target && e.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      var cur = run.qs[run.i];
      if (!run.checked[run.i]) {
        if (cur.format === "mcq") {
          var map = { "1": 0, "2": 1, "3": 2, "4": 3, a: 0, b: 1, c: 2, d: 3 };
          var pick = map[String(e.key).toLowerCase()];
          if (pick !== undefined && pick < (cur.o || []).length) {
            e.preventDefault();
            selectAnswer(pick);
            return;
          }
        } else if (cur.format === "tf") {
          var k = String(e.key).toLowerCase();
          if (k === "t" || k === "1") { e.preventDefault(); selectAnswer(true); return; }
          if (k === "f" || k === "2") { e.preventDefault(); selectAnswer(false); return; }
        }
      }

      if (e.key === "ArrowRight") { e.preventDefault(); goTo(run.i + 1); return; }
      if (e.key === "ArrowLeft") { e.preventDefault(); goTo(run.i - 1); return; }
      if (String(e.key).toLowerCase() === "m" || String(e.key).toLowerCase() === "f") {
        e.preventDefault();
        run.flagged[run.i] = !run.flagged[run.i];
        persistRun();
        paintRun();
        return;
      }
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        var btn = document.getElementById("checkbtn") || document.getElementById("nextbtn") || document.getElementById("finishbtn") || document.getElementById("submittestbtn");
        if (btn) btn.click();
      }
    };
    window.addEventListener("keydown", keyHandler);
  }

  function finishWithGuard() {
    var answered = answeredCount();
    var missing = run.qs.length - answered;
    if (missing > 0) {
      var word = missing === 1 ? "question is" : "questions are";
      if (!confirm("You have answered " + answered + " of " + run.qs.length + " questions.\n\n" + missing + " " + word + " still unanswered.\n\nAre you sure you want to submit your test now?")) return;
    } else {
      if (!confirm("All " + run.qs.length + " questions answered!\n\nSubmit your test and calculate your final score?")) return;
    }
    finish(false);
  }

  /* ============================================================
     FINISHING & SAVING RESULTS
     ============================================================ */
  function finish(timedOut) {
    bankQuestionTime();
    stopRun();
    if (store.clearRun) store.clearRun();

    var correct = 0, unanswered = 0;
    var formatStats = { mcq: { total: 0, correct: 0 }, tf: { total: 0, correct: 0 }, fib: { total: 0, correct: 0 } };
    var unitStats = {}, subStats = {}, topicStats = {}, diffStats = {}, wrongKeys = [];

    function bump(map, key, ok) {
      if (key === null || key === undefined || key === "") return;
      var b = map[key] || { total: 0, correct: 0 };
      b.total += 1;
      if (ok) b.correct += 1;
      map[key] = b;
    }

    var questions = run.qs.map(function (q, i) {
      var given = run.answers[i];
      var ok = isCorrect(q, given);
      var answered = isAnswered(q, given);

      if (ok) correct++;
      else {
        wrongKeys.push(q.key);
        if (!answered) unanswered++;
      }

      if (!formatStats[q.format]) formatStats[q.format] = { total: 0, correct: 0 };
      formatStats[q.format].total++;
      if (ok) formatStats[q.format].correct++;

      bump(unitStats, q.unitId, ok);
      bump(subStats, q.subSection, ok);
      bump(topicStats, q.topicId, ok);
      bump(diffStats, "d" + (q.diff || 1), ok);

      if (!run.graded[i]) {
        run.graded[i] = true;
        if (store.gradeSrs) store.gradeSrs(q.key, ok);
      }

      return {
        key: q.key,
        q: q.q,
        format: q.format,
        unitId: q.unitId,
        subSection: q.subSection || null,
        topicId: q.topicId || null,
        diff: q.diff || 1,
        o: q.o || null,
        a: q.a,
        a_display: q.a_display,
        e: q.e || "",
        given: given === undefined ? null : given,
        ok: ok,
        answered: answered,
        seconds: run.times[i] || 0,
        flagged: !!run.flagged[i]
      };
    });

    var total = run.qs.length;
    var seconds = Math.max(1, Math.round((Date.now() - run.startedAt) / 1000));

    var record = {
      id: "a" + Date.now(),
      at: Date.now(),
      scope: run.scope,
      label: run.label,
      total: total,
      correct: correct,
      unanswered: unanswered,
      exam: run.exam,
      mode: run.exam ? "exam" : "practice",
      orderMode: run.orderMode,
      timedOut: !!timedOut,
      seconds: seconds,
      bestStreak: run.bestStreak || 0,
      flagged: run.flagged.filter(Boolean).length,
      questions: questions
    };

    if (store.saveAttempt) {
      store.saveAttempt({
        id: record.id,
        at: record.at,
        scope: record.scope,
        label: record.label,
        total: total,
        correct: correct,
        unanswered: unanswered,
        exam: record.exam,
        mode: record.mode,
        orderMode: record.orderMode,
        timedOut: record.timedOut,
        seconds: seconds,
        minutes: Math.max(1, Math.round(seconds / 60)),
        bestStreak: record.bestStreak,
        flagged: record.flagged,
        units: unitStats,
        formats: formatStats,
        subs: subStats,
        topics: topicStats,
        diffs: diffStats,
        wrongKeys: wrongKeys.slice(0, 80)
      });
    }

    if (store.saveAttemptDetail) store.saveAttemptDetail(record);

    resetRun();
    renderResult(record, true);
  }

  /* ============================================================
     THE RESULT & SUMMARY SCREEN
     ============================================================ */
  var resultState = { record: null, filter: "wrong", fresh: false };

  function renderResult(record, fresh) {
    var missed = (record.questions || []).filter(function (q) { return !q.ok; }).length;
    resultState = { record: record, filter: missed ? "wrong" : "all", fresh: !!fresh };
    paintResult();

    var percent = app.pct(record.correct, record.total);
    if (fresh) {
      if (percent >= 75) {
        playSound("fanfare");
        if (app.burstConfetti) {
          setTimeout(function () {
            var ring = document.querySelector(".qz-result-trophy");
            if (ring) app.burstConfetti(ring);
            if (app.popMilestone) app.popMilestone("🏆 " + verdictFor(percent) + ": " + percent + "%!");
          }, 250);
        }
      } else {
        playSound("streak");
      }
    }
  }

  function verdictFor(percent) {
    return percent >= 85 ? "Rank 1 Gold Medalist!"
      : percent >= 70 ? "First Class Honours!"
      : percent >= 50 ? "Passing Grade Achieved!"
      : "Needs Revision";
  }

  function verdictIcon(percent) {
    return percent >= 85 ? "👑"
      : percent >= 70 ? "🏆"
      : percent >= 50 ? "🎯"
      : "📚";
  }

  function paintResult() {
    var record = resultState.record;
    if (!record) { renderHub(); return; }

    var qs = record.questions || [];
    var percent = app.pct(record.correct, record.total);
    var verdict = verdictFor(percent);
    var vIcon = verdictIcon(percent);

    var wrongCount = qs.filter(function (q) { return !q.ok && q.answered; }).length;
    var skippedCount = qs.filter(function (q) { return !q.answered; }).length;
    var flaggedCount = qs.filter(function (q) { return q.flagged; }).length;
    var avgSecs = Math.max(1, Math.round(record.seconds / Math.max(1, record.total)));

    host.innerHTML =
      '<div class="quiz-arena">' +
        '<div class="qz-result-wrap animate-scale-up">' +

          (record.timedOut
            ? '<div class="callout mb-6"><div class="callout__title">⏱️ Time Expired</div>' +
              'Your examination was submitted automatically when the clock hit zero.</div>'
            : '') +

          /* Victory Hero Card */
          '<div class="qz-result-hero">' +
            '<div class="qz-result-trophy">' + vIcon + '</div>' +
            '<div class="qz-result-score-badge">' + percent + '% Score</div>' +
            '<h1 class="qz-result-title mt-2">' + verdict + '</h1>' +
            '<p class="qz-result-sub mt-1">' +
              'You answered <b>' + record.correct + ' of ' + record.total + ' questions correctly</b> in ' + app.esc(record.label) + '.' +
            '</p>' +

            /* Stat Chips */
            '<div class="qz-result-stats-row mt-6">' +
              '<div class="qz-stat-box">' +
                '<span class="qz-stat-box__lbl">Accuracy</span>' +
                '<b class="qz-stat-box__val">' + percent + '%</b>' +
                '<span class="small text-muted">' + record.correct + ' right / ' + record.total + '</span>' +
              '</div>' +
              '<div class="qz-stat-box">' +
                '<span class="qz-stat-box__lbl">Time Spent</span>' +
                '<b class="qz-stat-box__val">' + fmtDuration(record.seconds) + '</b>' +
                '<span class="small text-muted">' + avgSecs + 's / question</span>' +
              '</div>' +
              '<div class="qz-stat-box">' +
                '<span class="qz-stat-box__lbl">Best Streak</span>' +
                '<b class="qz-stat-box__val">🔥 ' + (record.bestStreak || 0) + '</b>' +
                '<span class="small text-muted">Combos in a row</span>' +
              '</div>' +
              '<div class="qz-stat-box">' +
                '<span class="qz-stat-box__lbl">Flagged</span>' +
                '<b class="qz-stat-box__val">🚩 ' + flaggedCount + '</b>' +
                '<span class="small text-muted">To review later</span>' +
              '</div>' +
            '</div>' +

            /* Quick Action Buttons */
            '<div class="qz-result-actions mt-6">' +
              (wrongCount + skippedCount > 0
                ? '<button class="btn btn--primary btn--lg" id="retrywrongbtn">🔁 Retry Missed Questions (' + (wrongCount + skippedCount) + ')</button>'
                : '') +
              '<button class="btn btn--outline btn--lg" id="retakebtn">🔄 Retake Entire Quiz</button>' +
              '<a class="btn btn--ghost btn--lg" href="#/quiz">Quiz Arena</a>' +
              '<a class="btn btn--ghost btn--lg" href="#/dashboard">My Dashboard</a>' +
            '</div>' +
          '</div>' +

          /* Question-by-Question Review with Filter Tabs */
          '<div class="qz-review-section mt-10">' +
            '<div class="qz-section-head mb-4">' +
              '<div>' +
                '<h2 class="flex items-center gap-2"><span>🔍</span> Detailed Answer Review</h2>' +
                '<p class="small text-muted">Examine high-yield veterinary rationales and solidify weak topics.</p>' +
              '</div>' +
              '<div class="qz-review-filters" id="reviewfilters">' +
                [["wrong", "Missed (" + (wrongCount + skippedCount) + ")"],
                 ["correct", "Correct (" + record.correct + ")"],
                 ["flagged", "Flagged (" + flaggedCount + ")"],
                 ["all", "All (" + record.total + ")"]]
                  .map(function (f) {
                    return '<button type="button" class="qz-filter-pill' + (resultState.filter === f[0] ? ' is-active' : '') +
                      '" data-filter="' + f[0] + '">' + f[1] + '</button>';
                  }).join("") +
              '</div>' +
            '</div>' +

            '<div id="reviewlist" class="stack mt-4">' + renderReviewList() + '</div>' +
          '</div>' +

        '</div>' +
      '</div>';

    wireResult();
  }

  function renderReviewList() {
    var record = resultState.record;
    var filter = resultState.filter;
    var qs = (record.questions || []).map(function (q, i) { return { q: q, i: i }; });

    var list = qs.filter(function (item) {
      var q = item.q;
      if (filter === "all") return true;
      if (filter === "wrong") return !q.ok;
      if (filter === "flagged") return q.flagged;
      if (filter === "correct") return q.ok;
      return true;
    });

    if (!list.length) {
      var msg = filter === "wrong" ? "Clean sweep! You answered every question correctly."
        : filter === "flagged" ? "You did not flag any question."
        : "No questions match this filter.";
      return '<div class="card p-8 text-center text-muted">' +
        '<div style="font-size:2rem;margin-bottom:8px">🎉</div>' +
        '<b>' + msg + '</b>' +
      '</div>';
    }

    return list.map(function (item) {
      var q = item.q;
      var stateCls = q.ok ? "is-correct" : "is-wrong";
      var stateBadge = q.ok
        ? '<span class="chip chip--ok">✓ Correct</span>'
        : (!q.answered ? '<span class="chip chip--warn">Skipped</span>' : '<span class="chip chip--danger">✗ Incorrect</span>');

      return '<div class="card qz-review-card ' + stateCls + ' mb-3">' +
        '<div class="row row--wrap items-center gap-2 mb-2">' +
          '<span class="chip chip--accent font-mono font-bold">Q' + (item.i + 1) + '</span>' +
          stateBadge +
          '<span class="chip font-mono">' + q.format.toUpperCase() + '</span>' +
          '<span class="chip">' + app.esc((syllabus.unitById[q.unitId] || {}).short || q.unitId) + '</span>' +
          (q.flagged ? '<span class="chip chip--warn">🚩 Flagged</span>' : '') +
          '<div class="push"></div>' +
          (q.seconds ? '<span class="small text-muted font-mono">⏱️ ' + fmtDuration(q.seconds) + '</span>' : '') +
        '</div>' +

        '<h3 class="qz-review-q mt-2 mb-3">' + app.esc(q.q) + '</h3>' +

        (q.format === "mcq" && q.o
          ? '<div class="qz-review-opts-grid">' +
              q.o.map(function (opt, oi) {
                var cls = "qz-review-opt";
                if (oi === q.a) cls += " is-correct";
                if (q.answered && oi === q.given && oi !== q.a) cls += " is-chosen-wrong";
                return '<div class="' + cls + '">' +
                  '<span class="qz-review-opt-badge">' + "ABCD".charAt(oi) + '</span>' +
                  '<span>' + app.esc(opt) + '</span>' +
                  (oi === q.a ? '<span class="push chip chip--ok">Correct Answer</span>' : '') +
                  (q.answered && oi === q.given && oi !== q.a ? '<span class="push chip chip--danger">Your Pick</span>' : '') +
                '</div>';
              }).join("") +
            '</div>'
          : '<div class="qz-review-text-ans mt-3">' +
              '<div class="qz-ans-pill ' + (q.ok ? 'is-ok' : 'is-wrong') + '">' +
                '<span class="small text-muted">Your Answer:</span> <b>' + (q.answered ? app.esc(String(q.given)) : '<i>(Skipped)</i>') + '</b>' +
              '</div>' +
              '<div class="qz-ans-pill is-ok">' +
                '<span class="small text-muted">Correct Answer:</span> <b>' + app.esc(String(q.a_display || (Array.isArray(q.a) ? q.a[0] : q.a))) + '</b>' +
              '</div>' +
            '</div>') +

        (q.e
          ? '<div class="qz-review-explanation mt-3">' +
              '<b>💡 Key High-Yield Note:</b> ' + q.e +
            '</div>'
          : '') +

        '<div class="row row--wrap gap-2 mt-4">' +
          (q.topicId && syllabus.topicById[q.topicId]
            ? '<a class="btn btn--sm btn--primary" href="#/topic/' + q.topicId + '">📖 Read Lesson: ' + app.esc(syllabus.topicById[q.topicId].title) + ' →</a>'
            : '') +
          '<button type="button" class="btn btn--sm btn--ghost" data-requeue="' + app.esc(q.key) + '">🧠 Send to Spaced Memory Queue</button>' +
        '</div>' +

      '</div>';
    }).join("");
  }

  function wireResult() {
    var bar = document.getElementById("reviewfilters");
    if (bar) {
      bar.querySelectorAll("[data-filter]").forEach(function (b) {
        b.addEventListener("click", function () {
          playSound("click");
          resultState.filter = b.getAttribute("data-filter");
          bar.querySelectorAll("[data-filter]").forEach(function (x) { x.classList.remove("is-active"); });
          b.classList.add("is-active");
          var list = document.getElementById("reviewlist");
          if (list) {
            list.innerHTML = renderReviewList();
            wireReviewButtons();
          }
        });
      });
    }

    wireReviewButtons();

    var retry = document.getElementById("retrywrongbtn");
    if (retry) retry.addEventListener("click", function () {
      var missed = (resultState.record.questions || []).filter(function (q) { return !q.ok; });
      if (!missed.length) return;
      var pool = rebuildQuestions(missed);
      if (!pool.length) { app.toast("Questions are no longer available in the bank"); return; }
      start(shuffle(pool), "retry", "🔁 Retry Missed Questions", false, 0, "shuffle", "all", null, false);
    });

    var retake = document.getElementById("retakebtn");
    if (retake) retake.addEventListener("click", function () {
      var rec = resultState.record;
      var pool = rebuildQuestions(rec.questions || []);
      if (!pool.length) { app.toast("Questions are no longer available in the bank"); return; }
      start(shuffle(pool), rec.scope, rec.label, rec.exam, Math.max(5, Math.round(rec.seconds / 60) || 10),
            "shuffle", "all", null, rec.exam);
    });
  }

  function wireReviewButtons() {
    document.querySelectorAll("[data-requeue]").forEach(function (b) {
      b.addEventListener("click", function () {
        playSound("click");
        if (store.gradeSrs) store.gradeSrs(b.getAttribute("data-requeue"), false);
        b.textContent = "✓ Queued for Daily Review";
        b.disabled = true;
      });
    });
  }

  function rebuildQuestions(recorded) {
    var all = bankFor(syllabus.allUnits.map(function (u) { return u.id; }), ["mcq", "tf", "fib"]);
    var byKey = {};
    all.forEach(function (q) { byKey[q.key] = q; });
    return recorded.map(function (r) { return byKey[r.key]; }).filter(Boolean);
  }

  function renderSavedResult(id) {
    var record = store.getAttemptDetail && store.getAttemptDetail(id);
    if (!record) {
      host.innerHTML =
        '<div class="quiz-arena">' +
          '<div class="pagehead"><h1>Review Not Available</h1></div>' +
          '<div class="card p-8 text-center text-muted">' +
            '<h3>That quiz attempt has expired</h3>' +
            '<p class="mt-2">Only recent quiz attempts retain full question-by-question review records.</p>' +
            '<a class="btn btn--primary mt-4" href="#/dashboard">Back to Dashboard</a>' +
          '</div>' +
        '</div>';
      return;
    }
    renderResult(record, false);
  }

  function subSectionTitles() {
    var out = {};
    for (var uid in subSectionsByUnit) {
      subSectionsByUnit[uid].forEach(function (s) { out[s.id] = s.icon + " " + s.title; });
    }
    return out;
  }

  return {
    render: render,
    reset: resetRun,
    resume: resumeSavedRun,
    discardSaved: discardSavedRun,
    subSectionTitles: subSectionTitles
  };
})();
