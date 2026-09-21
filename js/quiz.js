/* ============================================================
   quiz.js  —  The Animal Nutrition Quiz Engine
   ------------------------------------------------------------
   Features:
     - 720 Curriculum-standard Questions across Units 1 to 4
     - Strict 2 : 1 : 1 Ratio (90 MCQ : 45 TF : 45 FIB per unit)
     - 13 Thematic Sub-sections with dedicated module testing
     - Sequence Mode (Curriculum order) vs. Shuffle Mode (Randomized)
     - One tap answers and marks a question; answers are never lost
       when moving between questions, and an unfinished run survives
       a refresh
     - Question palette, flagging, skipping and per-question timing
     - Spaced Repetition (SRS) integration & Exam Simulation
   ============================================================ */

var quizApp = (function () {

  var host;                 // container element
  var run = null;           // active run state
  var timerId = null;       // exam countdown interval
  var keyHandler = null;    // keyboard shortcut handler while a run is open
  var lastPickAt = 0;       // guards against a tap firing twice


  /* Sub-section metadata for Units 1 to 6 */
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
      var p = syllabus.meta.papers.filter(function (x) { return x.id === id; })[0];
      return p ? p.units.map(function (n) { return "unit-" + n; }) : [];
    }
    if (kind === "grand") return syllabus.theory.map(function (u) { return u.id; });
    if (kind === "practical") return syllabus.practical.map(function (u) { return u.id; });
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
      // asked for a different quiz while one is still open? let the reader choose
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
     HUB
     ============================================================ */
  function renderHub() {
    resetRun();

    var theoryIds = syllabus.theory.map(function (u) { return u.id; });
    var pracIds = syllabus.practical.map(function (u) { return u.id; });
    var totalAll = countAvailable(theoryIds.concat(pracIds));
    var due = store.dueSrs().length;
    var q = store.getQuiz();

    var unitRows = syllabus.theory.map(function (u) {
      var n = countAvailable([u.id]);
      var rec = q.byUnit["unit:" + u.id];
      var subList = subSectionsByUnit[u.id] || [];
      return '<a class="tlist__row' + (n ? '' : ' is-empty') + '" href="' +
        (n ? '#/quiz/unit/' + u.id : '#/quiz') + '">' +
        '<span class="tlist__no">U' + u.no + '</span>' +
        '<span class="tlist__body"><span class="tlist__title">' + app.esc(u.short) + '</span>' +
        '<span class="tlist__sub">' +
          (n ? '<b>' + n + ' questions</b> (' + subList.length + ' modular sub-sections • 2:1:1 ratio)' : 'No questions added yet') +
        '</span></span>' +
        '<span class="tlist__right">' +
          (rec ? '<span class="chip chip--ok">Best ' + rec.best + '%</span>' : '') +
          (n ? app.icon("chevron", "faint") : '') +
        '</span></a>';
    }).join("");

    var pracRows = syllabus.practical.map(function (u) {
      var n = countAvailable([u.id]);
      return '<a class="tlist__row' + (n ? '' : ' is-empty') + '" href="' +
        (n ? '#/quiz/unit/' + u.id : '#/quiz') + '">' +
        '<span class="tlist__no">P' + u.no + '</span>' +
        '<span class="tlist__body"><span class="tlist__title">' + app.esc(u.short) + '</span>' +
        '<span class="tlist__sub">' + (n ? n + ' questions' : 'No questions added yet') + '</span></span>' +
        '<span class="tlist__right">' + (n ? app.icon("chevron", "faint") : '') + '</span></a>';
    }).join("");

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
        '<div class="card resume-quiz-card mt-6">' +
          '<div class="row row--wrap items-center gap-3">' +
            '<span class="chip chip--warn">⏸️ Unfinished quiz</span>' +
            '<b>' + app.esc(pending.label || "Quiz") + '</b>' +
            '<span class="small muted">' + doneN + ' of ' + pending.qs.length + ' answered</span>' +
            '<div class="push"></div>' +
            '<button class="btn btn--primary" id="resumequizbtn">Resume quiz</button>' +
            '<button class="btn btn--ghost" id="discardquizbtn">Discard</button>' +
          '</div>' +
        '</div>';
    }

    host.innerHTML =
      '<div class="pagehead quiz-hub-head">' +
        '<div class="row row--wrap items-center gap-2 mb-2">' +
          '<span class="chip chip--accent font-mono">🌟 ' + totalAll + ' Questions Bank</span>' +
          '<span class="chip chip--ok">Exact 2:1:1 Ratio (90 MCQ • 45 T/F • 45 FIB)</span>' +
          '<span class="chip">32 Sub-sections</span>' +
        '</div>' +
        '<h1>' + app.icon("quiz") + ' Animal Nutrition Examination Suite</h1>' +
        '<p class="lede">Test individual sub-sections, full units, paper-wise or grand exams. ' +
        'Choose between <b>Sequence Mode</b> (curriculum order) or <b>Shuffle Mode</b> (randomized), with instant feedback and Spaced Repetition queue.</p>' +
      '</div>' +

      (totalAll === 0
        ? '<div class="empty"><div class="empty__icon">' + app.icon("quiz") + '</div><h3>The question bank is empty</h3>' +
          '<p>Add questions in <b>data/data-quiz.JS</b>.</p></div>'
        : '') +

      resumeHtml +

      '<h2 class="mt-8 flex items-center gap-2"><span>🎯</span> Comprehensive Mock Tests</h2>' +
      '<div class="grid grid--3 mt-4">' +
        modeCard("Paper I", "Principles, Feed Tech & Ruminant Nutrition-I (Units 1, 2)", countAvailable(scopeUnits("paper", "paper-1")), "#/quiz/paper/paper-1", false, "theory") +
        modeCard("Paper II", "Ruminant Nutrition-II & Non-Ruminant Nutrition (Units 3, 4)", countAvailable(scopeUnits("paper", "paper-2")), "#/quiz/paper/paper-2", false, "theory") +
        modeCard("Grand test", "All four theory units", countAvailable(theoryIds), "#/quiz/grand", false, "trophy") +
        modeCard("Practical", "All practical units", countAvailable(pracIds), "#/quiz/practical", false, "practical") +
        modeCard("Smart Review", due + " question" + (due === 1 ? "" : "s") + " due today", due, "#/quiz/review", true, "repeat") +
      '</div>' +

      '<h2 class="mt-12 flex items-center gap-2"><span>📚</span> Theory Units with Modular Sub-sections</h2>' +
      '<p class="small muted">Click any unit below to practice specific sub-sections or the full unit in Sequence or Shuffle mode.</p>' +
      '<div class="tlist mt-4">' + unitRows + '</div>' +

      '<h2 class="mt-12 flex items-center gap-2"><span>🔬</span> Practical Diagnostic Units</h2>' +
      '<div class="tlist mt-4">' + pracRows + '</div>';

    var resumeBtn = document.getElementById("resumequizbtn");
    if (resumeBtn) resumeBtn.addEventListener("click", resumeSavedRun);
    var discardBtn = document.getElementById("discardquizbtn");
    if (discardBtn) discardBtn.addEventListener("click", function () {
      if (confirm("Discard the unfinished quiz?")) discardSavedRun();
    });
  }

  function modeCard(title, sub, n, href, isReview, ico) {
    var disabled = !n;
    var iconHtml = ico ? app.icon(ico) : (isReview ? app.icon("repeat") : app.icon("quiz"));
    return '<a class="card card--link modecard' + (disabled ? ' is-disabled' : '') + '" href="' +
      (disabled ? '#/quiz' : href) + '">' +
      '<div class="row"><span class="card__title" style="display:flex;align-items:center;gap:6px;">' + iconHtml + ' ' + title + '</span>' +
      '<span class="chip push' + (n ? ' chip--accent' : '') + '">' + n + '</span></div>' +
      '<p class="card__desc">' + sub + '</p>' +
      (disabled ? '<p class="small faint mt-2">' +
        (isReview ? 'Nothing due — answer some questions first.' : 'No questions added yet.') + '</p>' : '') +
      '</a>';
  }

  /* A quiz is open and the reader asked for a different one. */
  function renderInProgressChoice(kind, id) {
    var done = answeredCount();
    var openRun = run;
    host.innerHTML =
      '<div class="pagehead"><span class="eyebrow">Quiz in progress</span>' +
        '<h1>You already have a quiz open</h1>' +
        '<p class="lede"><b>' + app.esc(openRun.label) + '</b> — ' + done + ' of ' + openRun.qs.length +
        ' answered' + (openRun.exam ? ', timed' : '') + '.</p></div>' +
      '<div class="card">' +
        '<p>Carry on where you left off, or drop it and set up the new quiz. ' +
        'Dropping it means the answers so far are not scored.</p>' +
        '<div class="row row--wrap gap-3 mt-5">' +
          '<button class="btn btn--primary btn--lg" id="keepgoingbtn">Continue this quiz</button>' +
          '<button class="btn btn--lg" id="startnewbtn">Discard it and start the new one</button>' +
          '<a class="btn btn--ghost btn--lg" href="#/quiz">Back to Quiz Hub</a>' +
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
    var p = (syllabus.meta.papers || []).filter(function (x) { return x.id === id; })[0];
    if (!p) return "Paper";
    return p.name + " — Unit" + (p.units.length > 1 ? "s " : " ") + p.units.join(", ");
  }

  /* ============================================================
     SETUP SCREEN WITH SUB-SECTION PICKER & SEQUENCE/SHUFFLE TOGGLE
     ============================================================ */
  function renderSetup(kind, id) {
    resetRun();
    var unitIds = scopeUnits(kind, id);
    var subSections = (kind === "unit" && subSectionsByUnit[id]) ? subSectionsByUnit[id] : [];

    var label = kind === "unit"
      ? "Unit " + (syllabus.unitById[id] || {}).no + " — " + (syllabus.unitById[id] || {}).short
      : kind === "paper"
        ? paperLabel(id)
        : kind === "grand" ? "Grand Test — All Theory Units" : "Practical Units";

    var state = {
      subSectionId: "all",
      orderMode: "sequence", // 'sequence' or 'shuffle'
      formats: ["mcq", "tf", "fib"],
      count: 20,
      exam: false,
      minutes: 20,
      autoNext: true       // exam mode only: jump to the next question after a tap
    };

    function updateView() {
      var pool = bankFor(unitIds, state.formats, state.subSectionId);
      var allPool = bankFor(unitIds, ["mcq", "tf", "fib"], state.subSectionId);

      var counts = { mcq: 0, tf: 0, fib: 0 };
      allPool.forEach(function (q) { counts[q.format]++; });
      var maxN = pool.length;

      var presets = [10, 20, 30, 45, 90, maxN].filter(function (n, idx, arr) {
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
          '<div class="setup__row subsec-selector-row">' +
            '<div>' +
              '<b class="flex items-center gap-2"><span>📂</span> Choose Sub-section / Module</b>' +
              '<p class="small muted">Target a specific topic or practice all sub-sections in the unit.</p>' +
            '</div>' +
            '<div class="subsec-grid mt-3">' +
              '<button type="button" class="subsec-card' + (state.subSectionId === 'all' ? ' is-active' : '') + '" data-sub="all">' +
                '<div class="subsec-card__head">' +
                  '<span class="subsec-card__icon">🌟</span>' +
                  '<span class="subsec-card__title">All Sub-sections (Full Unit)</span>' +
                  '<span class="chip chip--accent subsec-card__badge">' + allCount + ' Qs</span>' +
                '</div>' +
                '<p class="subsec-card__desc">Complete unit test covering all topics in rigorous 2:1:1 exam ratio.</p>' +
              '</button>' +
              subSections.map(function (sub) {
                var c = bankFor(unitIds, ["mcq", "tf", "fib"], sub.id).length;
                var active = state.subSectionId === sub.id ? ' is-active' : '';
                return '<button type="button" class="subsec-card' + active + '" data-sub="' + sub.id + '">' +
                  '<div class="subsec-card__head">' +
                    '<span class="subsec-card__icon">' + sub.icon + '</span>' +
                    '<span class="subsec-card__title">' + app.esc(sub.title) + '</span>' +
                    '<span class="chip subsec-card__badge">' + c + ' Qs</span>' +
                  '</div>' +
                  '<p class="subsec-card__desc">' + app.esc(sub.desc) + '</p>' +
                '</button>';
              }).join("") +
            '</div>' +
          '</div>';
      }

      var currentSubMeta = getSubSectionMeta(id, state.subSectionId);
      var subHeadingBadge = currentSubMeta
        ? '<span class="chip chip--accent">' + currentSubMeta.icon + ' ' + app.esc(currentSubMeta.title) + '</span>'
        : '<span class="chip chip--accent">🌟 All ' + (subSections.length || '') + ' Sub-sections</span>';

      host.innerHTML =
        '<div class="pagehead">' +
          '<div class="row row--wrap items-center gap-2 mb-2">' +
            '<a class="btn btn--sm btn--ghost" href="#/quiz">← Quiz Hub</a>' +
            subHeadingBadge +
            '<span class="chip font-mono">' + maxN + ' Available Questions</span>' +
          '</div>' +
          '<h1>' + app.esc(label) + '</h1>' +
          '<p class="lede">Configure your test parameters below. Pick question count, format filters, and test mode.</p>' +
        '</div>' +

        '<div class="card setup quiz-setup-card">' +
          subSecHtml +

          /* Order Mode Toggle (Sequence vs Shuffle) */
          '<div class="setup__row">' +
            '<div>' +
              '<b class="flex items-center gap-2"><span>🔄</span> Question Order Mode</b>' +
              '<p class="small muted">Attempt questions sequentially according to syllabus or shuffle them randomly.</p>' +
            '</div>' +
            '<div class="quiz-mode-toggle" id="ordermodetoggle">' +
              '<button type="button" class="toggle-pill' + (state.orderMode === 'sequence' ? ' is-selected' : '') + '" data-mode="sequence">' +
                '<span class="pill-icon">📋</span>' +
                '<span class="pill-label">Sequence Mode</span>' +
                '<span class="pill-sub">Curriculum order</span>' +
              '</button>' +
              '<button type="button" class="toggle-pill' + (state.orderMode === 'shuffle' ? ' is-selected' : '') + '" data-mode="shuffle">' +
                '<span class="pill-icon">🔀</span>' +
                '<span class="pill-label">Shuffle Mode</span>' +
                '<span class="pill-sub">Randomized order</span>' +
              '</button>' +
            '</div>' +
          '</div>' +

          /* Format selection */
          '<div class="setup__row">' +
            '<div>' +
              '<b>Question Formats (2 : 1 : 1 Ratio)</b>' +
              '<p class="small muted">Select any combination of question types.</p>' +
            '</div>' +
            '<div class="row row--wrap gap-3" id="fmtbox">' +
              ['mcq', 'tf', 'fib'].map(function (f) {
                var lbl = { mcq: "Multiple Choice", tf: "True / False", fib: "Fill in the Blanks" }[f];
                var icon = { mcq: "🔘", tf: "⚖️", fib: "✍️" }[f];
                var count = counts[f];
                var checked = state.formats.indexOf(f) !== -1;
                return '<label class="check-pill' + (checked ? ' is-checked' : '') + (count === 0 ? ' is-disabled' : '') + '">' +
                  '<input type="checkbox" data-fmt="' + f + '"' + (checked ? ' checked' : '') + (count === 0 ? ' disabled' : '') + '> ' +
                  '<span class="check-pill__icon">' + icon + '</span>' +
                  '<span class="check-pill__label">' + lbl + '</span>' +
                  '<span class="chip chip--sm ml-1">' + count + '</span>' +
                '</label>';
              }).join("") +
            '</div>' +
          '</div>' +

          /* Question count */
          '<div class="setup__row">' +
            '<div>' +
              '<b>Number of Questions</b>' +
              '<p class="small muted">Choose your practice length.</p>' +
            '</div>' +
            '<div class="seg" id="segcount">' +
              presets.map(function (n) {
                var isSelected = state.count === n;
                return '<button type="button" class="seg__btn' + (isSelected ? ' is-on' : '') + '" data-count="' + n + '">' +
                  (n === maxN ? 'All (' + n + ')' : n) +
                '</button>';
              }).join("") +
            '</div>' +
          '</div>' +

          /* Exam Mode Toggle */
          '<div class="setup__row">' +
            '<div>' +
              '<b>⏱️ Exam Mode (Timed)</b>' +
              '<p class="small muted">Timed exam with no answer reveals until final submission — mirrors annual university exam.</p>' +
            '</div>' +
            '<label class="switch"><input type="checkbox" id="exammode"' + (state.exam ? ' checked' : '') + '><span></span></label>' +
          '</div>' +

          /* Auto-advance (exam mode only) */
          '<div class="setup__row" id="autonextrow"' + (state.exam ? '' : ' hidden') + '>' +
            '<div>' +
              '<b>⏭️ Move on automatically</b>' +
              '<p class="small muted">In exam mode, jump to the next question as soon as you tap an answer. ' +
              'You can still go back and change it.</p>' +
            '</div>' +
            '<label class="switch"><input type="checkbox" id="autonext"' + (state.autoNext ? ' checked' : '') + '><span></span></label>' +
          '</div>' +

          /* Time Limit selector */
          '<div class="setup__row" id="timerow"' + (state.exam ? '' : ' hidden') + '>' +
            '<div>' +
              '<b>Time Limit</b>' +
              '<p class="small muted">Automatic submission when clock reaches zero.</p>' +
            '</div>' +
            '<div class="seg" id="segtime">' +
              [10, 20, 30, 45, 60].map(function (m) {
                return '<button type="button" class="seg__btn' + (state.minutes === m ? ' is-on' : '') + '" data-min="' + m + '">' + m + ' min</button>';
              }).join("") +
            '</div>' +
          '</div>' +

          /* Action Bar */
          '<div class="row mt-8 items-center">' +
            '<a class="btn btn--ghost" href="#/quiz">Cancel</a>' +
            '<div class="push"></div>' +
            '<button class="btn btn--primary btn--lg" id="startbtn">' +
              '🚀 Start Quiz (' + Math.min(state.count, maxN) + ' Questions)' +
            '</button>' +
          '</div>' +
        '</div>';

      attachEvents();
    }

    function attachEvents() {
      // Sub-section cards
      document.querySelectorAll(".subsec-card").forEach(function (card) {
        card.addEventListener("click", function () {
          var sId = card.getAttribute("data-sub");
          state.subSectionId = sId;
          updateView();
        });
      });

      // Order Mode Toggle
      document.querySelectorAll("#ordermodetoggle .toggle-pill").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.orderMode = btn.getAttribute("data-mode");
          updateView();
        });
      });

      // Formats Checkboxes
      document.querySelectorAll("[data-fmt]").forEach(function (chk) {
        chk.addEventListener("change", function () {
          var checkedFmts = Array.prototype.slice.call(document.querySelectorAll("[data-fmt]"))
            .filter(function (c) { return c.checked; })
            .map(function (c) { return c.getAttribute("data-fmt"); });
          if (!checkedFmts.length) {
            app.toast("Select at least one question format");
            chk.checked = true;
            return;
          }
          state.formats = checkedFmts;
          updateView();
        });
      });

      // Question count seg
      document.querySelectorAll("#segcount .seg__btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.count = parseInt(btn.getAttribute("data-count"), 10);
          document.querySelectorAll("#segcount .seg__btn").forEach(function (b) { b.classList.remove("is-on"); });
          btn.classList.add("is-on");
          var startBtn = document.getElementById("startbtn");
          if (startBtn) startBtn.textContent = '🚀 Start Quiz (' + state.count + ' Questions)';
        });
      });

      // Exam Mode
      var examChk = document.getElementById("exammode");
      if (examChk) {
        examChk.addEventListener("change", function (e) {
          state.exam = e.target.checked;
          var tRow = document.getElementById("timerow");
          if (tRow) tRow.hidden = !e.target.checked;
          var aRow = document.getElementById("autonextrow");
          if (aRow) aRow.hidden = !e.target.checked;
        });
      }

      var autoChk = document.getElementById("autonext");
      if (autoChk) {
        autoChk.addEventListener("change", function (e) {
          state.autoNext = e.target.checked;
        });
      }

      // Time seg
      document.querySelectorAll("#segtime .seg__btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.minutes = parseInt(btn.getAttribute("data-min"), 10);
          document.querySelectorAll("#segtime .seg__btn").forEach(function (b) { b.classList.remove("is-on"); });
          btn.classList.add("is-on");
        });
      });

      // Start Button
      var startBtn = document.getElementById("startbtn");
      if (startBtn) {
        startBtn.addEventListener("click", function () {
          var rawPool = bankFor(unitIds, state.formats, state.subSectionId);
          if (!rawPool.length) {
            app.toast("No questions available for this selection");
            return;
          }

          var finalQuestions;
          if (state.orderMode === "shuffle") {
            finalQuestions = shuffle(rawPool).slice(0, state.count);
          } else {
            // Sequence mode: exact curriculum sequence
            finalQuestions = rawPool.slice(0, state.count);
          }

          var runLabel = label;
          var subMeta = getSubSectionMeta(id, state.subSectionId);
          if (subMeta) {
            runLabel = subMeta.icon + " " + subMeta.title;
          }

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
     SMART REVIEW
     ============================================================ */
  function renderReview() {
    resetRun();
    var dueKeys = store.dueSrs();
    var all = bankFor(
      syllabus.allUnits.map(function (u) { return u.id; }),
      ["mcq", "tf", "fib"]
    );
    var pool = all.filter(function (q) { return dueKeys.indexOf(q.key) !== -1; });

    if (!pool.length) {
      host.innerHTML =
        '<div class="pagehead"><span class="eyebrow">Spaced repetition</span><h1>Smart Review</h1></div>' +
        '<div class="empty"><div class="empty__icon">✅</div><h3>Nothing due right now</h3>' +
        '<p>Questions you answer wrongly come back tomorrow, then after 2, 4, 8 and 16 days ' +
        'as you keep getting them right. Take a quiz first and this queue will fill itself.</p>' +
        '<a class="btn btn--primary mt-4" href="#/quiz">Go to the quiz hub</a></div>';
      return;
    }

    start(shuffle(pool), "review", "Smart Review", false, 0, "shuffle", "all", null, false);
  }

  /* ============================================================
     RUNNING A QUIZ
     ------------------------------------------------------------
     One tap answers a question. In practice mode the tap also
     reveals the result straight away; in exam mode it just records
     the choice. Every answer is kept per question, so moving back
     and forth never loses or clears what was already answered, and
     the whole run is mirrored to storage so a refresh can resume.
     ============================================================ */

  var PRACTICE_LOCK_MS = 120;   // ignore double-taps on the same option

  function blankRun(questions, opts) {
    var n = questions.length;
    return {
      active: true,
      qs: questions,
      i: 0,
      answers: fillArray(n, null),
      checked: fillArray(n, false),   // result revealed for this question
      graded: fillArray(n, false),    // counted once towards spaced repetition
      flagged: fillArray(n, false),   // "look at this again"
      times: fillArray(n, 0),         // seconds spent per question
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

  /* In shuffle mode the options are shuffled too, so a remembered
     "the answer was the second one" cannot help. */
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

  /* ---------- timer ---------- */
  function startTimer() {
    stopTimer();
    if (!run || !run.exam) return;
    timerId = setInterval(function () {
      if (!run || !run.active) { stopTimer(); return; }
      if (Date.now() >= run.endsAt) { finish(true); return; }
      var t = document.getElementById("qtimer");
      if (t) {
        t.textContent = fmtTime(run.endsAt - Date.now());
        t.className = "chip " + (run.endsAt - Date.now() < 60000 ? "chip--danger" : "chip--warn");
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerId) { clearInterval(timerId); timerId = null; }
  }

  /* Tear down everything a finished or abandoned run leaves behind. */
  function stopRun() {
    stopTimer();
    if (keyHandler) {
      window.removeEventListener("keydown", keyHandler);
      keyHandler = null;
    }
  }

  /* ---------- saving / resuming an unfinished run ---------- */
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
    } catch (e) { /* storage full or unavailable — the run still works */ }
  }

  function savedRun() {
    var s = store.loadRun && store.loadRun();
    if (!s || !s.qs || !s.qs.length || !s.active) return null;

    // a save written by an older version of the app may be missing pieces
    var n = s.qs.length;
    var lists = ["answers", "checked", "graded", "flagged", "times"];
    var sound = lists.every(function (k) { return Array.isArray(s[k]) && s[k].length === n; });
    if (!sound || typeof s.i !== "number" || s.i < 0 || s.i >= n) {
      if (store.clearRun) store.clearRun();
      return null;
    }
    if (s.exam && s.endsAt && Date.now() > s.endsAt) {
      if (store.clearRun) store.clearRun();                         // timed paper ran out while away
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

  /* ---------- time spent on the current question ---------- */
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

  /* Keep the question itself in view when moving between questions,
     without yanking the page around while an explanation is open. */
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

  /* ---------- marking ---------- */
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

    // Fill in the blank: forgiving about case, spacing and punctuation,
    // and about a trailing plural "s", but never about the actual word.
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

  /* ---------- answering ---------- */
  function selectAnswer(value) {
    var q = run.qs[run.i];
    if (run.checked[run.i]) return;           // already revealed — locked

    run.answers[run.i] = value;

    if (run.exam) {
      persistRun();
      if (run.autoNext && run.i < run.qs.length - 1) {
        var from = run.i;
        paintRun();
        setTimeout(function () {
          if (run && run.active && run.i === from && isAnswered(q, run.answers[from])) goTo(from + 1);
        }, 260);
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
      app.toast("Choose or type an answer first");
      return;
    }
    if (run.checked[run.i]) return;

    run.checked[run.i] = true;
    var ok = isCorrect(q, given);

    if (!run.graded[run.i]) {
      run.graded[run.i] = true;
      store.gradeSrs(q.key, ok);
    }

    if (ok) {
      run.streak = (run.streak || 0) + 1;
      if (run.streak > (run.bestStreak || 0)) run.bestStreak = run.streak;
      if (run.streak === 3 && app.popMilestone) app.popMilestone("🔥 3 in a row!");
      else if (run.streak === 5 && app.popMilestone) app.popMilestone("🚀 5 streak — unstoppable!");
      else if (run.streak === 7 && app.popMilestone) app.popMilestone("⚡ 7 straight — pure genius!");
      else if (run.streak === 10 && app.popMilestone) app.popMilestone("👑 10 streak — Master Animal Nutritionist!");
    } else {
      run.streak = 0;
    }

    bankQuestionTime();
    persistRun();
    paintRun();

    if (ok && app.burstConfetti) {
      var el = document.querySelector(".opt.is-right") || document.querySelector(".quizcard");
      if (el) app.burstConfetti(el);
    }
  }

  /* ============================================================
     THE QUESTION SCREEN
     ============================================================ */
  function paintRun() {
    var q = run.qs[run.i];
    var given = run.answers[run.i];
    var revealed = !run.exam && run.checked[run.i];
    var locked = revealed;

    var body;
    if (q.format === "mcq") {
      body = '<div class="opts">' + (q.o || []).map(function (opt, i) {
        var cls = "opt";
        if (given === i) cls += " is-picked";
        if (revealed) {
          if (i === q.a) cls += " is-right";
          else if (given === i) cls += " is-wrong";
        }
        return '<button type="button" class="' + cls + '" data-pick="' + i + '"' +
          ' aria-pressed="' + (given === i) + '"' + (locked ? ' disabled' : '') + '>' +
          '<span class="opt__key">' + "ABCD".charAt(i) + '</span>' +
          '<span class="opt__text">' + app.esc(opt) + '</span>' +
          (revealed && i === q.a ? '<span class="opt__state">✓</span>' : '') +
          (revealed && given === i && i !== q.a ? '<span class="opt__state">✗</span>' : '') +
        '</button>';
      }).join("") + '</div>';

    } else if (q.format === "tf") {
      body = '<div class="opts opts--2">' + [true, false].map(function (v) {
        var cls = "opt opt--tf";
        if (given === v) cls += " is-picked";
        if (revealed) {
          if (v === q.a) cls += " is-right";
          else if (given === v) cls += " is-wrong";
        }
        return '<button type="button" class="' + cls + '" data-pick="' + v + '"' +
          ' aria-pressed="' + (given === v) + '"' + (locked ? ' disabled' : '') + '>' +
          '<span class="opt__key">' + (v ? "T" : "F") + '</span>' +
          '<span class="opt__text">' + (v ? "True" : "False") + '</span>' +
          (revealed && v === q.a ? '<span class="opt__state">✓</span>' : '') +
          (revealed && given === v && v !== q.a ? '<span class="opt__state">✗</span>' : '') +
        '</button>';
      }).join("") + '</div>';

    } else {
      body = '<div class="fib-card">' +
        '<div class="fib-input-wrap">' +
          '<input type="text" id="fibinput" class="fib-input" placeholder="Type your answer here…" ' +
          'autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" ' +
          'value="' + app.esc(given !== null && given !== undefined ? String(given) : "") + '"' +
          (locked ? ' disabled' : '') + '>' +
          (!locked
            ? '<button type="button" class="btn btn--primary" id="fibsubmit">' + (run.exam ? 'Save' : 'Check') + '</button>'
            : '') +
        '</div>' +
        (revealed
          ? '<div class="fib-accepted-callout ' + (isCorrect(q, given) ? 'is-ok' : 'is-error') + '">' +
              '<span class="badge">' + (isCorrect(q, given) ? '✓ Correct' : '✗ Incorrect') + '</span>' +
              '<span class="label"><b>Standard Answer:</b> ' + app.esc(q.a_display || (Array.isArray(q.a) ? q.a[0] : q.a)) + '</span>' +
            '</div>'
          : '') +
        '</div>';
    }

    var answered = answeredCount();
    var subMeta = getSubSectionMeta(q.unitId, q.subSection);
    var subBadge = subMeta
      ? '<span class="chip chip--accent"><span class="qicon">' + subMeta.icon + '</span> ' + app.esc(subMeta.title) + '</span>'
      : '';

    var diffBadge = q.diff === 1
      ? '<span class="chip chip--subtle">⭐ Foundational</span>'
      : q.diff === 2
        ? '<span class="chip chip--subtle">⭐⭐ Core UG</span>'
        : '<span class="chip chip--warn">⭐⭐⭐ Rank 1 Classic</span>';

    var orderBadge = run.orderMode === "sequence"
      ? '<span class="chip chip--subtle">📋 Sequence Mode</span>'
      : '<span class="chip chip--subtle">🔀 Shuffle Mode</span>';

    var isLast = run.i === run.qs.length - 1;
    var primaryBtn = !run.exam && !run.checked[run.i]
      ? '<button class="btn btn--primary btn--lg" id="checkbtn">' +
          (isAnswered(q, given) ? 'Check Answer' : 'Skip →') + '</button>'
      : (isLast
        ? '<button class="btn btn--primary btn--lg" id="finishbtn">Finish &amp; See Results 🏆</button>'
        : '<button class="btn btn--primary btn--lg" id="nextbtn">Next Question →</button>');

    host.innerHTML =
      '<div class="quizrun animate-fade-in">' +
        '<div class="quizrun__bar">' +
          '<button class="btn btn--sm btn--ghost" id="quitbtn">Quit</button>' +
          '<span class="chip font-medium">' + app.esc(run.label) + '</span>' +
          orderBadge +
          (run.exam ? '<span class="chip chip--warn">⏱️ Exam Mode</span>' : '<span class="chip chip--subtle">💡 Instant feedback</span>') +
          '<div class="push"></div>' +
          (run.streak >= 2 ? '<span class="chip chip--accent streak-badge">🔥 Streak ' + run.streak + '</span>' : '') +
          (run.exam ? '<span class="chip chip--warn" id="qtimer">' + fmtTime(run.endsAt - Date.now()) + '</span>' : '') +
          '<button class="chip chip--subtle qpalette-toggle" id="palettebtn" type="button" aria-expanded="' + (run.paletteOpen ? 'true' : 'false') + '">' +
            '▦ ' + (run.i + 1) + ' / ' + run.qs.length +
          '</button>' +
        '</div>' +

        '<div class="bar bar--lg mt-3"><div class="bar__fill" style="width:' +
          ((answered / run.qs.length) * 100) + '%"></div></div>' +
        '<div class="row mt-2 small faint"><span>' + answered + ' of ' + run.qs.length + ' answered</span>' +
          '<div class="push"></div>' +
          '<span>Question ' + (run.i + 1) + '</span></div>' +

        (run.paletteOpen ? renderPalette() : '') +

        '<div class="card quizcard mt-5">' +
          '<div class="quizcard__meta">' +
            '<span class="chip chip--accent font-bold">' +
              ({ mcq: "Multiple Choice", tf: "True / False", fib: "Fill in the Blank" }[q.format] || q.format) +
            '</span>' +
            '<span class="chip">' + app.esc((syllabus.unitById[q.unitId] || {}).short || q.unitId) + '</span>' +
            subBadge +
            diffBadge +
            '<div class="push"></div>' +
            '<button type="button" class="chip flagbtn' + (run.flagged[run.i] ? ' is-flagged' : '') + '" id="flagbtn" ' +
              'title="Mark this question to come back to it">' +
              (run.flagged[run.i] ? '🚩 Flagged' : '⚑ Flag') +
            '</button>' +
          '</div>' +

          '<h2 class="quizcard__q mt-4">' + app.esc(q.q) + '</h2>' +

          body +

          (revealed && q.e
            ? '<div class="quiz-explanation-box mt-6 animate-scale-up ' + (isCorrect(q, given) ? 'is-correct' : 'is-wrong') + '">' +
                '<div class="quiz-explanation-box__head">' +
                  '<span>' + (isCorrect(q, given) ? '🎉 Correct!' : '💡 Explanation & High-Yield Key Note') + '</span>' +
                '</div>' +
                '<p class="quiz-explanation-box__body">' + q.e + '</p>' +
                (q.topicId && syllabus.topicById[q.topicId]
                  ? '<a class="btn btn--sm btn--ghost mt-2" href="#/topic/' + q.topicId + '" target="_blank">📖 Read Full Lesson on ' + app.esc(syllabus.topicById[q.topicId].title) + ' →</a>'
                  : '') +
              '</div>'
            : '') +
        '</div>' +

        '<div class="row mt-6 items-center gap-2">' +
          '<button class="btn" id="prevbtn"' + (run.i === 0 ? ' disabled' : '') + '>← Previous</button>' +
          '<div class="push"></div>' +
          (run.exam && !isLast
            ? '<button class="btn" id="submitbtn">Submit Paper</button>'
            : '') +
          primaryBtn +
        '</div>' +

        '<p class="small faint mt-3 center qhint">' +
          (run.exam
            ? 'Tap an option to record your answer. You can change it any time before you submit.'
            : 'Tap an option — the answer is marked straight away. Keys: A–D / 1–4, T / F, Enter for next.') +
        '</p>' +
      '</div>';

    if (!run.questionEnteredAt) run.questionEnteredAt = Date.now();
    wireRun(q);
  }

  function renderPalette() {
    return '<div class="qpalette mt-4">' +
      '<div class="qpalette__head small muted">Jump to a question' +
        '<span class="qpalette__legend">' +
          '<i class="dot is-correct"></i> correct' +
          '<i class="dot is-wrong"></i> wrong' +
          '<i class="dot is-answered"></i> answered' +
          '<i class="dot is-flagged"></i> flagged' +
        '</span>' +
      '</div>' +
      '<div class="qpalette__grid mt-2">' +
        run.qs.map(function (q, i) {
          var cls = "qpalette__cell";
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
    '</div>';
  }

  function wireRun(q) {
    var scope = host;

    scope.querySelectorAll("[data-pick]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (Date.now() - lastPickAt < PRACTICE_LOCK_MS) return;
        lastPickAt = Date.now();
        var raw = b.getAttribute("data-pick");
        selectAnswer(q.format === "tf" ? (raw === "true") : parseInt(raw, 10));
      });
    });

    scope.querySelectorAll("[data-jump]").forEach(function (b) {
      b.addEventListener("click", function () {
        goTo(parseInt(b.getAttribute("data-jump"), 10));
      });
    });

    var pal = document.getElementById("palettebtn");
    if (pal) pal.addEventListener("click", function () {
      run.paletteOpen = !run.paletteOpen;
      paintRun();
    });

    var flag = document.getElementById("flagbtn");
    if (flag) flag.addEventListener("click", function () {
      run.flagged[run.i] = !run.flagged[run.i];
      persistRun();
      paintRun();
    });

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
      if (!isAnswered(q, run.answers[run.i])) {
        // "Skip" — move on without answering, nothing is lost or graded
        if (run.i < run.qs.length - 1) goTo(run.i + 1);
        else finishWithGuard();
        return;
      }
      revealAnswer();
    });

    var next = document.getElementById("nextbtn");
    if (next) next.addEventListener("click", function () { goTo(run.i + 1); });

    var prev = document.getElementById("prevbtn");
    if (prev) prev.addEventListener("click", function () { goTo(run.i - 1); });

    var fin = document.getElementById("finishbtn");
    if (fin) fin.addEventListener("click", function () { finishWithGuard(); });

    var sub = document.getElementById("submitbtn");
    if (sub) sub.addEventListener("click", function () { finishWithGuard(); });

    var quit = document.getElementById("quitbtn");
    if (quit) quit.addEventListener("click", function () {
      if (!confirm("Quit this quiz? Your answers so far will not be scored.")) return;
      stopRun();
      if (store.clearRun) store.clearRun();
      resetRun();
      location.hash = "#/quiz";
    });

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
      if (String(e.key).toLowerCase() === "m") {
        e.preventDefault();
        run.flagged[run.i] = !run.flagged[run.i];
        persistRun();
        paintRun();
        return;
      }
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        var btn = document.getElementById("checkbtn") || document.getElementById("nextbtn") || document.getElementById("finishbtn");
        if (btn) btn.click();
      }
    };
    window.addEventListener("keydown", keyHandler);
  }

  function finishWithGuard() {
    var missing = run.qs.length - answeredCount();
    if (missing > 0) {
      var word = missing === 1 ? "question is" : "questions are";
      if (!confirm(missing + " " + word + " still unanswered. Finish and see your result anyway?")) return;
    }
    finish(false);
  }

  /* ============================================================
     RESULTS, REVIEW & ANALYSIS
     ------------------------------------------------------------
     Finishing a quiz writes two things: a small summary used by the
     dashboard charts, and a full question-by-question record so the
     same review can be reopened later from the Assessment Ledger.
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
        store.gradeSrs(q.key, ok);
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

    if (store.saveAttemptDetail) store.saveAttemptDetail(record);

    resetRun();
    renderResult(record, true);
  }

  /* ---------- helpers shared by the result screen ---------- */

  function unitName(id) {
    return (syllabus.unitById[id] || {}).short || id || "";
  }

  function subName(id) {
    var titles = subSectionTitles();
    return titles[id] || id;
  }

  function diffName(key) {
    return { d1: "⭐ Foundational", d2: "⭐⭐ Core UG", d3: "⭐⭐⭐ Rank 1 Classic" }[key] || key;
  }

  function formatName(key) {
    return { mcq: "🔘 Multiple Choice", tf: "⚖️ True / False", fib: "✍️ Fill in the Blanks" }[key] || key;
  }

  function givenText(q) {
    if (!q.answered) return "Not answered";
    if (q.format === "mcq") return (q.o || [])[q.given];
    if (q.format === "tf") return q.given ? "True" : "False";
    return String(q.given);
  }

  function correctText(q) {
    if (q.format === "mcq") return (q.o || [])[q.a];
    if (q.format === "tf") return q.a ? "True" : "False";
    return q.a_display || (Array.isArray(q.a) ? q.a[0] : q.a);
  }

  function toneClass(pct) {
    return pct >= 75 ? "chip--ok" : pct >= 50 ? "chip--warn" : "chip--danger";
  }

  function barClass(pct) {
    return pct >= 75 ? "is-ok" : pct >= 50 ? "is-warn" : "is-danger";
  }

  function accuracyBar(label, correct, total, href) {
    var pct = total ? Math.round(correct / total * 100) : 0;
    var text = href
      ? '<a href="' + href + '">' + label + '</a>'
      : label;
    return '<div class="qa-bar">' +
      '<div class="qa-bar__top"><span>' + text + '</span>' +
        '<span class="muted">' + correct + '/' + total + ' · <b>' + pct + '%</b></span></div>' +
      '<div class="qa-bar__track"><div class="qa-bar__fill ' + barClass(pct) + '" style="width:' + pct + '%"></div></div>' +
    '</div>';
  }

  function groupStats(questions, pick) {
    var map = {};
    questions.forEach(function (q) {
      var key = pick(q);
      if (key === null || key === undefined || key === "") return;
      var b = map[key] || { total: 0, correct: 0, seconds: 0 };
      b.total += 1;
      if (q.ok) b.correct += 1;
      b.seconds += q.seconds || 0;
      map[key] = b;
    });
    return map;
  }

  function sortedByWeakness(map) {
    return Object.keys(map).sort(function (a, b) {
      return (map[a].correct / map[a].total) - (map[b].correct / map[b].total);
    });
  }

  /* previous attempt on the same scope, for a like-for-like comparison */
  function previousAttempt(record) {
    var attempts = (store.getQuiz().attempts || []).filter(function (a) {
      return a.scope === record.scope && a.at < record.at && a.total;
    });
    if (!attempts.length) return null;
    var prev = attempts[attempts.length - 1];
    return { pct: Math.round(prev.correct / prev.total * 100), at: prev.at };
  }

  /* ============================================================
     THE RESULT SCREEN
     ============================================================ */
  var resultState = { record: null, filter: "wrong", fresh: false };

  function renderResult(record, fresh) {
    resultState = { record: record, filter: "wrong", fresh: !!fresh };
    paintResult();

    var percent = app.pct(record.correct, record.total);
    if (fresh && percent >= 75 && app.burstConfetti) {
      setTimeout(function () {
        var ring = document.querySelector(".result__ring");
        if (ring) app.burstConfetti(ring);
        if (app.popMilestone) app.popMilestone("🏆 " + verdictFor(percent) + ": " + percent + "%!");
      }, 250);
    }
  }

  function verdictFor(percent) {
    return percent >= 85 ? "Rank 1 Distinction"
      : percent >= 70 ? "Strong First Class"
      : percent >= 50 ? "Passing Grade"
      : "Needs Revision";
  }

  function paintResult() {
    var record = resultState.record;
    if (!record) { renderHub(); return; }

    var qs = record.questions || [];
    var percent = app.pct(record.correct, record.total);
    var verdict = verdictFor(percent);
    var prev = previousAttempt(record);
    var wrongCount = qs.filter(function (q) { return !q.ok && q.answered; }).length;
    var skippedCount = qs.filter(function (q) { return !q.answered; }).length;
    var flaggedCount = qs.filter(function (q) { return q.flagged; }).length;

    var timed = qs.filter(function (q) { return q.seconds > 0; });
    var avgSecs = timed.length
      ? Math.round(timed.reduce(function (n, q) { return n + q.seconds; }, 0) / timed.length)
      : Math.round(record.seconds / Math.max(1, record.total));
    var slowest = timed.slice().sort(function (a, b) { return b.seconds - a.seconds; })[0];

    var unitMap = groupStats(qs, function (q) { return q.unitId; });
    var subMap = groupStats(qs, function (q) { return q.subSection; });
    var fmtMap = groupStats(qs, function (q) { return q.format; });
    var diffMap = groupStats(qs, function (q) { return "d" + q.diff; });
    var topicMap = groupStats(qs, function (q) { return q.topicId; });

    var weakTopics = sortedByWeakness(topicMap).filter(function (t) {
      return topicMap[t].correct < topicMap[t].total && syllabus.topicById[t];
    }).slice(0, 4);

    var deltaHtml = prev
      ? (function () {
          var d = percent - prev.pct;
          var cls = d > 0 ? "chip--ok" : d < 0 ? "chip--danger" : "";
          var sign = d > 0 ? "▲ +" + d : d < 0 ? "▼ " + d : "= same";
          return '<span class="chip ' + cls + '">' + sign + '% vs last time (' + prev.pct + '%)</span>';
        })()
      : '<span class="chip chip--subtle">First attempt on this selection</span>';

    host.innerHTML =
      '<div class="result animate-scale-up">' +
        (record.timedOut
          ? '<div class="callout mb-6"><div class="callout__title">Time Expired</div>' +
            'Your paper was submitted automatically when the countdown reached zero.</div>'
          : '') +

        (!resultState.fresh
          ? '<div class="row row--wrap items-center gap-2 mb-4">' +
              '<a class="btn btn--sm btn--ghost" href="#/dashboard">← Dashboard</a>' +
              '<span class="chip chip--subtle">Saved review · ' +
                new Date(record.at).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }) +
              '</span>' +
            '</div>'
          : '') +

        '<div class="result__ring">' + app.ringHtml(percent, 150) + '</div>' +
        '<h1 class="mt-6">' + record.correct + ' out of ' + record.total + ' Correct</h1>' +

        '<div class="row row--wrap center mt-3 gap-2" style="justify-content:center">' +
          '<span class="chip ' + toneClass(percent) + ' font-bold">' + verdict + '</span>' +
          '<span class="chip">' + app.esc(record.label) + '</span>' +
          deltaHtml +
        '</div>' +

        /* --- headline numbers --- */
        '<div class="quiz-analytics-grid mt-6 text-left">' +
          '<div class="qa-tile"><div class="qa-tile__label">Accuracy</div>' +
            '<div class="qa-tile__val">' + percent + '%</div>' +
            '<div class="qa-tile__sub">' + record.correct + ' right · ' + wrongCount + ' wrong · ' + skippedCount + ' skipped</div></div>' +
          '<div class="qa-tile"><div class="qa-tile__label">Time taken</div>' +
            '<div class="qa-tile__val">' + fmtDuration(record.seconds) + '</div>' +
            '<div class="qa-tile__sub">' + avgSecs + ' sec per question</div></div>' +
          '<div class="qa-tile"><div class="qa-tile__label">Best streak</div>' +
            '<div class="qa-tile__val">' + (record.bestStreak || 0) + '</div>' +
            '<div class="qa-tile__sub">in a row without a mistake</div></div>' +
          '<div class="qa-tile"><div class="qa-tile__label">Mode</div>' +
            '<div class="qa-tile__val" style="font-size:18px">' + (record.exam ? '⏱️ Timed exam' : '💡 Practice') + '</div>' +
            '<div class="qa-tile__sub">' + (record.orderMode === "sequence" ? "Syllabus order" : "Shuffled") + '</div></div>' +
        '</div>' +

        /* --- breakdowns --- */
        '<h2 class="mt-10 mb-3 text-left flex items-center gap-2"><span>📊</span> Where the marks went</h2>' +
        '<div class="grid grid--2 text-left">' +
          '<div class="card"><b>By unit</b><div class="qa-bars mt-3">' +
            Object.keys(unitMap).map(function (u) {
              return accuracyBar(app.esc(unitName(u)), unitMap[u].correct, unitMap[u].total, "#/unit/" + u);
            }).join("") +
          '</div></div>' +
          '<div class="card"><b>By question type</b><div class="qa-bars mt-3">' +
            Object.keys(fmtMap).map(function (f) {
              return accuracyBar(formatName(f), fmtMap[f].correct, fmtMap[f].total);
            }).join("") +
          '</div></div>' +
          (Object.keys(subMap).length
            ? '<div class="card"><b>By sub-section</b><p class="small muted mt-1">Weakest first.</p><div class="qa-bars mt-3">' +
                sortedByWeakness(subMap).map(function (s) {
                  return accuracyBar(app.esc(subName(s)), subMap[s].correct, subMap[s].total);
                }).join("") +
              '</div></div>'
            : '') +
          '<div class="card"><b>By difficulty</b><div class="qa-bars mt-3">' +
            Object.keys(diffMap).sort().map(function (d) {
              return accuracyBar(diffName(d), diffMap[d].correct, diffMap[d].total);
            }).join("") +
          '</div></div>' +
        '</div>' +

        /* --- pace --- */
        '<div class="card mt-4 text-left">' +
          '<b>⏱️ Pace</b>' +
          '<div class="row row--wrap gap-4 mt-2 small">' +
            '<span>Average <b>' + avgSecs + ' sec</b> per question</span>' +
            (slowest ? '<span>Longest single question <b>' + fmtDuration(slowest.seconds) + '</b></span>' : '') +
            '<span>Total <b>' + fmtDuration(record.seconds) + '</b></span>' +
          '</div>' +
          (slowest && slowest.seconds >= 45
            ? '<p class="small muted mt-2">Slowest: “' + app.esc(shortText(slowest.q, 90)) + '”</p>'
            : '') +
        '</div>' +

        /* --- what to do next --- */
        (weakTopics.length
          ? '<h2 class="mt-10 mb-3 text-left flex items-center gap-2"><span>🎯</span> What to study next</h2>' +
            '<div class="stack text-left">' +
              weakTopics.map(function (t) {
                var st = topicMap[t];
                var topic = syllabus.topicById[t];
                return '<div class="card mb-3 row row--wrap items-center gap-3">' +
                  '<span class="chip ' + toneClass(Math.round(st.correct / st.total * 100)) + '">' +
                    st.correct + '/' + st.total + '</span>' +
                  '<b style="flex:1;min-width:180px">' + app.esc(topic.title) + '</b>' +
                  '<a class="btn btn--sm btn--primary" href="#/topic/' + t + '">📖 Read the lesson</a>' +
                '</div>';
              }).join("") +
            '</div>'
          : '') +

        /* --- question by question --- */
        '<h2 class="mt-10 mb-1 text-left flex items-center gap-2"><span>🔍</span> Question by question</h2>' +
        '<div class="review-filterbar" id="reviewfilters">' +
          [["wrong", "Wrong (" + wrongCount + ")"],
           ["skipped", "Skipped (" + skippedCount + ")"],
           ["flagged", "Flagged (" + flaggedCount + ")"],
           ["correct", "Correct (" + record.correct + ")"],
           ["all", "All (" + record.total + ")"]]
            .map(function (f) {
              return '<button type="button" class="review-filter' + (resultState.filter === f[0] ? ' is-active' : '') +
                '" data-filter="' + f[0] + '">' + f[1] + '</button>';
            }).join("") +
        '</div>' +
        '<div id="reviewlist" class="text-left mt-4">' + renderReviewList() + '</div>' +

        /* --- actions --- */
        '<div class="row row--wrap mt-10 gap-3" style="justify-content:center">' +
          (wrongCount + skippedCount > 0 && resultState.fresh
            ? '<button class="btn btn--primary btn--lg" id="retrywrongbtn">🔁 Retry the ' + (wrongCount + skippedCount) + ' I missed</button>'
            : '') +
          '<a class="btn btn--lg" href="#/quiz">Quiz Hub</a>' +
          '<a class="btn btn--lg" href="#/dashboard">My Dashboard</a>' +
          '<a class="btn btn--lg" href="#/quiz/review">Smart SRS Queue</a>' +
        '</div>' +
      '</div>';

    wireResult();
  }

  function shortText(s, n) {
    s = String(s || "");
    return s.length > n ? s.slice(0, n - 1) + "…" : s;
  }

  function renderReviewList() {
    var record = resultState.record;
    var filter = resultState.filter;
    var qs = (record.questions || []).map(function (q, i) { return { q: q, i: i }; });

    var list = qs.filter(function (item) {
      var q = item.q;
      if (filter === "all") return true;
      if (filter === "wrong") return !q.ok && q.answered;
      if (filter === "skipped") return !q.answered;
      if (filter === "flagged") return q.flagged;
      if (filter === "correct") return q.ok;
      return true;
    });

    if (!list.length) {
      var msg = filter === "wrong" ? "Nothing wrong here — every answered question was correct."
        : filter === "skipped" ? "You answered every question."
        : filter === "flagged" ? "You did not flag any question."
        : "Nothing to show.";
      return '<div class="callout"><div class="callout__title">' +
        (filter === "wrong" ? "🏆 Clean sweep" : "Nothing here") + '</div>' + msg + '</div>';
    }

    return '<div class="stack">' + list.map(function (item) {
      var q = item.q;
      var state = q.ok ? "is-correct" : q.answered ? "is-wrong" : "is-skipped";
      var stateChip = q.ok ? '<span class="chip chip--ok">✓ Correct</span>'
        : q.answered ? '<span class="chip chip--danger">✗ Wrong</span>'
        : '<span class="chip chip--warn">Skipped</span>';

      return '<div class="card review-item ' + state + ' mb-3">' +
        '<div class="row row--wrap items-center gap-2 mb-2">' +
          '<span class="chip chip--accent">Q' + (item.i + 1) + '</span>' +
          stateChip +
          '<span class="chip font-mono">' + q.format.toUpperCase() + '</span>' +
          '<span class="chip">' + app.esc(unitName(q.unitId)) + '</span>' +
          (q.flagged ? '<span class="chip chip--warn">🚩 Flagged</span>' : '') +
          '<div class="push"></div>' +
          (q.seconds ? '<span class="chip chip--subtle">⏱ ' + fmtDuration(q.seconds) + '</span>' : '') +
        '</div>' +

        '<p class="review-item__q"><b>' + app.esc(q.q) + '</b></p>' +

        (q.format === "mcq" && q.o
          ? '<div class="review-options mt-3">' +
              q.o.map(function (opt, oi) {
                var cls = "review-option";
                if (oi === q.a) cls += " is-right";
                if (q.answered && oi === q.given && oi !== q.a) cls += " is-wrong";
                return '<div class="' + cls + '">' +
                  '<span class="opt__key">' + "ABCD".charAt(oi) + '</span>' +
                  '<span>' + app.esc(opt) + '</span>' +
                  (oi === q.a ? '<span class="push"></span><span class="chip chip--ok">Correct</span>' : '') +
                  (q.answered && oi === q.given && oi !== q.a ? '<span class="push"></span><span class="chip chip--danger">Your answer</span>' : '') +
                '</div>';
              }).join("") +
            '</div>'
          : '<div class="row row--wrap gap-4 mt-3">' +
              '<p class="small"><span class="chip ' + (q.ok ? 'chip--ok' : 'chip--danger') + '">Your answer:</span> <b>' +
                app.esc(String(givenText(q))) + '</b></p>' +
              '<p class="small"><span class="chip chip--ok">Correct answer:</span> <b>' +
                app.esc(String(correctText(q))) + '</b></p>' +
            '</div>') +

        (q.e ? '<div class="callout mt-3"><div class="callout__title">Why</div>' + q.e + '</div>' : '') +

        '<div class="row row--wrap gap-2 mt-3">' +
          (q.topicId && syllabus.topicById[q.topicId]
            ? '<a class="btn btn--sm" href="#/topic/' + q.topicId + '">📖 ' +
                app.esc(shortText(syllabus.topicById[q.topicId].title, 40)) + '</a>'
            : '') +
          '<button type="button" class="btn btn--sm btn--ghost" data-requeue="' + app.esc(q.key) + '">' +
            '🔁 Send to review queue</button>' +
        '</div>' +
      '</div>';
    }).join("") + '</div>';
  }

  function wireResult() {
    var bar = document.getElementById("reviewfilters");
    if (bar) {
      bar.querySelectorAll("[data-filter]").forEach(function (b) {
        b.addEventListener("click", function () {
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
      if (!pool.length) { app.toast("Those questions are no longer in the bank"); return; }
      start(shuffle(pool), "retry", "Retry — missed questions", false, 0, "shuffle", "all", null, false);
    });
  }

  function wireReviewButtons() {
    document.querySelectorAll("[data-requeue]").forEach(function (b) {
      b.addEventListener("click", function () {
        store.gradeSrs(b.getAttribute("data-requeue"), false);
        b.textContent = "✓ Queued for tomorrow";
        b.disabled = true;
      });
    });
  }

  /* Recorded questions are plain data; match them back to the live bank
     so a retry uses the current wording of each question. */
  function rebuildQuestions(recorded) {
    var all = bankFor(syllabus.allUnits.map(function (u) { return u.id; }), ["mcq", "tf", "fib"]);
    var byKey = {};
    all.forEach(function (q) { byKey[q.key] = q; });
    return recorded.map(function (r) { return byKey[r.key]; }).filter(Boolean);
  }

  /* Reopen a saved attempt from the dashboard ledger. */
  function renderSavedResult(id) {
    resetRun();
    var record = store.getAttemptDetail && store.getAttemptDetail(id);
    if (!record) {
      host.innerHTML =
        '<div class="pagehead"><h1>Review not available</h1></div>' +
        '<div class="empty"><div class="empty__icon">🗂️</div><h3>That quiz review has been cleared</h3>' +
        '<p>Only the most recent 20 quizzes keep their question-by-question record. ' +
        'The score itself is still counted in your dashboard totals.</p>' +
        '<a class="btn btn--primary mt-4" href="#/dashboard">Back to dashboard</a></div>';
      return;
    }
    renderResult(record, false);
  }

  /* Sub-section id -> readable title, used by the dashboard analytics. */
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
