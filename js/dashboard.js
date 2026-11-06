/* ============================================================
   dashboard.js — Simple, Colorful & Professional Learning Dashboard
   Animal Nutrition Studio (B.V.Sc & A.H. Second Year)
   ------------------------------------------------------------
   Designed so that anyone (even a 13-year-old) can immediately
   understand their progress, what they need to study next, and
   how ready they are for their VCI Board Exams!
   ============================================================ */

var dashboardApp = (function () {

  var activeUnitFilter = "all";

  function render(host) {
    if (!host) return;

    var readMap    = (store.getRead && store.getRead()) || {};
    var quiz       = (store.getQuiz && store.getQuiz()) || { attempts: [], byUnit: {} };
    var streak     = (store.computeStreak && store.computeStreak()) || { current: 0, longest: 0, totalDays: 0 };
    var activity   = (store.getActivity && store.getActivity()) || {};
    var srs        = (store.getSrs && store.getSrs()) || {};
    var dueCards   = (store.dueSrs && store.dueSrs()) ? store.dueSrs().length : 0;
    var notes      = (store.getNotes && store.getNotes()) || {};
    var bms        = (store.getBookmarks && store.getBookmarks()) || [];
    var highlights = (store.getHighlights && store.getHighlights()) || {};
    var qaDone     = (store.getQaDone && store.getQaDone()) || [];

    // Syllabus counts
    var theoryUnits    = syllabus.theory || [];
    var practicalUnits = syllabus.practical || [];
    var allUnits       = theoryUnits.concat(practicalUnits);
    var totalTopics    = allUnits.reduce(function (n, u) { return n + (u.topics ? u.topics.length : 0); }, 0);
    var readCount      = Object.keys(readMap).length;
    var readPct        = totalTopics ? Math.round((readCount / totalTopics) * 100) : 0;

    // Quiz statistics
    var attempts = quiz.attempts || [];
    var totalQ = 0, totalCorrect = 0;
    attempts.forEach(function (a) { totalQ += (a.total || 0); totalCorrect += (a.correct || 0); });
    var quizAccuracy = totalQ ? Math.round((totalCorrect / totalQ) * 100) : 0;

    // Memory / SRS statistics
    var srsKeys = Object.keys(srs);
    var boxCounts = [0, 0, 0, 0, 0];
    srsKeys.forEach(function (k) {
      var b = Math.min(5, Math.max(1, srs[k].box || 1));
      boxCounts[b - 1]++;
    });
    var masteredCount = boxCounts[3] + boxCounts[4]; // Stage 4 & 5
    var retentionRate = srsKeys.length ? Math.round(((boxCounts[2] + boxCounts[3] + boxCounts[4]) / srsKeys.length) * 100) : 100;

    // Highlights stats
    var totalHighlights = 0;
    Object.keys(highlights).forEach(function (topId) {
      totalHighlights += (highlights[topId] || []).length;
    });

    // Simple 0-1000 Mastery XP
    var readXP = Math.round((readCount / (totalTopics || 1)) * 400); // 400 max
    var quizFactor = totalQ ? (totalCorrect / totalQ) : 0;
    var quizVolume = Math.min(1, attempts.length / 8);
    var quizXP = Math.round((quizFactor * 0.7 + quizVolume * 0.3) * 350); // 350 max
    var srsFactor = srsKeys.length ? ((boxCounts[2] + boxCounts[3] + boxCounts[4]) / srsKeys.length) : 0;
    var srsVolume = Math.min(1, srsKeys.length / 20);
    var srsXP = Math.round((srsFactor * 0.6 + srsVolume * 0.4) * 150); // 150 max
    var streakFactor = Math.min(1, streak.current / 7);
    var consistencyXP = Math.round(streakFactor * 100); // 100 max

    var totalXP = Math.min(1000, readXP + quizXP + srsXP + consistencyXP);
    var rank = getSimpleRank(totalXP);

    // Accuracy grade text
    var gradeText = !totalQ ? "Not Tested Yet" : quizAccuracy >= 85 ? "🌟 Excellent (A+)" : quizAccuracy >= 70 ? "👍 Good (Grade B)" : "📚 Needs Practice";

    host.innerHTML =
      '<div class="dashboard-v2 animate-fade-in">' +

        /* 1. Welcoming Hero Banner with Rank & XP Progress */
        '<div class="dsh-hero-card">' +
          '<div class="dsh-hero-top">' +
            '<div class="dsh-hero-greeting">' +
              '<div class="dsh-hero-badge">🌟 Student Study Dashboard</div>' +
              '<h1 class="dsh-hero-title">Welcome to Animal Nutrition!</h1>' +
              '<p class="dsh-hero-desc">' +
                'Here is your study progress across all 4 Theory Units and 4 Practical Units. Everything is tracked automatically as you read and take quizzes.' +
              '</p>' +
            '</div>' +
            '<div class="dsh-rank-badge-box">' +
              '<div class="dsh-rank-icon">' + rank.emoji + '</div>' +
              '<div class="dsh-rank-title">' + rank.title + '</div>' +
              '<div class="dsh-rank-stage">' + rank.stage + '</div>' +
            '</div>' +
          '</div>' +

          /* XP Progress Bar */
          '<div class="dsh-xp-wrap mt-6">' +
            '<div class="dsh-xp-labels">' +
              '<span class="font-bold">Mastery Level: <b>' + totalXP + ' / 1000 XP</b></span>' +
              '<span class="text-muted small">' + rank.nextLevelText + '</span>' +
            '</div>' +
            '<div class="dsh-xp-track mt-2">' +
              '<div class="dsh-xp-fill" style="width:' + (totalXP / 10) + '%"></div>' +
            '</div>' +
            '<p class="dsh-xp-hint mt-2">' +
              '💡 <b>How to earn XP:</b> Read a topic (+15 XP), score well on a quiz (+20 XP), and keep your daily streak (+10 XP)!' +
            '</p>' +
          '</div>' +
        '</div>' +

        /* 2. The Big 3 Super-Simple Metric Cards */
        '<div class="dsh-big3-grid mt-6">' +

          /* Card 1: Syllabus Progress */
          '<div class="dsh-metric-card dsh-metric-card--blue">' +
            '<div class="dsh-metric-top">' +
              '<span class="dsh-metric-icon">📖</span>' +
              '<span class="dsh-metric-tag">Syllabus Progress</span>' +
            '</div>' +
            '<div class="dsh-metric-val">' + readPct + '%</div>' +
            '<div class="dsh-metric-sub"><b>' + readCount + '</b> of ' + totalTopics + ' topics finished</div>' +
            '<div class="dsh-bar-track mt-3">' +
              '<div class="dsh-bar-fill dsh-bar-fill--blue" style="width:' + readPct + '%"></div>' +
            '</div>' +
            '<a class="dsh-card-link mt-3" href="#/theory">Explore Syllabus Lessons →</a>' +
          '</div>' +

          /* Card 2: Quiz Accuracy */
          '<div class="dsh-metric-card dsh-metric-card--green">' +
            '<div class="dsh-metric-top">' +
              '<span class="dsh-metric-icon">🎯</span>' +
              '<span class="dsh-metric-tag">Quiz Score</span>' +
            '</div>' +
            '<div class="dsh-metric-val">' + (totalQ ? quizAccuracy + '%' : '—') + '</div>' +
            '<div class="dsh-metric-sub">' + (totalQ ? '<b>' + totalCorrect + '</b> of ' + totalQ + ' questions correct' : 'Take a quiz to see score') + '</div>' +
            '<div class="dsh-bar-track mt-3">' +
              '<div class="dsh-bar-fill dsh-bar-fill--green" style="width:' + (totalQ ? quizAccuracy : 0) + '%"></div>' +
            '</div>' +
            '<div class="dsh-metric-status mt-2">' + gradeText + '</div>' +
          '</div>' +

          /* Card 3: Daily Study Streak */
          '<div class="dsh-metric-card dsh-metric-card--amber">' +
            '<div class="dsh-metric-top">' +
              '<span class="dsh-metric-icon">🔥</span>' +
              '<span class="dsh-metric-tag">Study Streak</span>' +
            '</div>' +
            '<div class="dsh-metric-val">' + streak.current + ' <small class="text-base font-normal">days</small></div>' +
            '<div class="dsh-metric-sub">Best streak: <b>' + streak.longest + ' days in a row</b></div>' +
            '<div class="dsh-bar-track mt-3">' +
              '<div class="dsh-bar-fill dsh-bar-fill--amber" style="width:' + Math.min(100, (streak.current / 7) * 100) + '%"></div>' +
            '</div>' +
            '<div class="dsh-metric-status mt-2">' +
              (streak.current > 0 ? '🔥 You are on a roll! Keep it up tomorrow.' : 'Study today to start your streak!') +
            '</div>' +
          '</div>' +

        '</div>' +

        /* 3. Single Crystal-Clear "What Should I Do Right Now?" Card */
        renderActionPrescription(dueCards, allUnits, readMap, quiz) +

        /* 4. Dual VCI Board Exam Readiness: Paper 1 vs Paper 2 */
        renderExamSplitSection(syllabus, readMap, quiz) +

        /* 5. Curriculum Units (Simple, Colorful & Interactive) */
        '<div class="dsh-section-wrap mt-10">' +
          '<div class="dsh-section-head">' +
            '<div>' +
              '<h2 class="flex items-center gap-2"><span>📚</span> Curriculum Units at a Glance</h2>' +
              '<p class="small text-muted">Click any unit to read topics or take an instant practice test.</p>' +
            '</div>' +
            '<div class="dsh-filter-tabs" id="unitfiltertabs">' +
              '<button class="dsh-tab-btn is-active" data-filter="all">All Units (8)</button>' +
              '<button class="dsh-tab-btn" data-filter="theory">Theory (4)</button>' +
              '<button class="dsh-tab-btn" data-filter="practical">Practical (4)</button>' +
              '<button class="dsh-tab-btn" data-filter="weak">Needs Practice</button>' +
            '</div>' +
          '</div>' +
          '<div class="dsh-units-grid mt-4" id="dshunitgrid">' +
            renderUnitsGrid(activeUnitFilter, allUnits, readMap, quiz) +
          '</div>' +
        '</div>' +

        /* 6. Smart Memory Vault (Spaced Repetition Made Ultra Simple) */
        renderMemoryVault(srs, boxCounts, srsKeys.length, dueCards) +

        /* 7. Recent Quizzes & Activity Calendar */
        '<div class="grid grid--2 mt-10 gap-5">' +
          renderRecentQuizzesCard(quiz) +
          renderActivityCalendarCard(activity, streak) +
        '</div>' +

        /* 8. Study Vault Shortcuts */
        renderStudyVault(totalHighlights, Object.keys(notes).length, bms.length, qaDone.length) +

      '</div>';

    attachEvents(host, allUnits, readMap, quiz);
  }

  /* Rank Evaluation with Simple Explanations */
  function getSimpleRank(xp) {
    if (xp >= 750) {
      return {
        emoji: "👑",
        title: "Animal Nutrition Master",
        stage: "Level 4 · Exam Ready Champion",
        nextLevelText: "Maximum Rank Achieved! 🏆"
      };
    }
    if (xp >= 500) {
      return {
        emoji: "🥇",
        title: "Senior Ration Formulator",
        stage: "Level 3 · Advanced Veterinary Student",
        nextLevelText: (750 - xp) + " XP to Level 4 (Animal Nutrition Master)"
      };
    }
    if (xp >= 250) {
      return {
        emoji: "🥈",
        title: "Feed Detective",
        stage: "Level 2 · Intermediate Explorer",
        nextLevelText: (500 - xp) + " XP to Level 3 (Senior Ration Formulator)"
      };
    }
    return {
      emoji: "🥉",
      title: "Nutrition Apprentice",
      stage: "Level 1 · Foundations",
      nextLevelText: (250 - xp) + " XP to Level 2 (Feed Detective)"
    };
  }

  /* Single Clear Next Step */
  function renderActionPrescription(dueCards, allUnits, readMap, quiz) {
    // Priority 1: Flashcards due for review
    if (dueCards > 0) {
      return '<div class="dsh-action-card dsh-action-card--review mt-6">' +
        '<div class="dsh-action-icon">🧠</div>' +
        '<div class="dsh-action-body">' +
          '<div class="dsh-action-tag">Recommended Next Step · Memory Refresh</div>' +
          '<h3 class="dsh-action-title">You have ' + dueCards + ' question' + (dueCards > 1 ? 's' : '') + ' ready for review!</h3>' +
          '<p class="dsh-action-desc">' +
            'A quick 2-minute review now ensures these questions stay fresh in your brain for your upcoming annual board exams.' +
          '</p>' +
        '</div>' +
        '<a class="btn btn--primary btn--lg dsh-action-btn" href="#/quiz/review">' +
          '⚡ Review ' + dueCards + ' Questions Now' +
        '</a>' +
      '</div>';
    }

    // Priority 2: Next unread lesson
    var nextTopic = findNextUnreadTopic(allUnits, readMap);
    if (nextTopic) {
      return '<div class="dsh-action-card dsh-action-card--read mt-6">' +
        '<div class="dsh-action-icon">📖</div>' +
        '<div class="dsh-action-body">' +
          '<div class="dsh-action-tag">Recommended Next Step · Continue Syllabus</div>' +
          '<h3 class="dsh-action-title">Read: ' + app.esc(nextTopic.title) + '</h3>' +
          '<p class="dsh-action-desc">' +
            nextTopic.unitTitle + ' · Topic ' + nextTopic.index + '. High-yield VCI exam notes with model questions.' +
          '</p>' +
        '</div>' +
        '<a class="btn btn--primary btn--lg dsh-action-btn" href="#/topic/' + nextTopic.id + '">' +
          '🚀 Start Reading (7 min)' +
        '</a>' +
      '</div>';
    }

    // Priority 3: Take a practice quiz
    var weakUnit = findLowestScoringUnit(allUnits, quiz);
    return '<div class="dsh-action-card dsh-action-card--quiz mt-6">' +
      '<div class="dsh-action-icon">🎯</div>' +
      '<div class="dsh-action-body">' +
        '<div class="dsh-action-tag">Recommended Next Step · Quiz Challenge</div>' +
        '<h3 class="dsh-action-title">Test Your Knowledge on ' + app.esc(weakUnit.name) + '</h3>' +
        '<p class="dsh-action-desc">' +
          'Take a quick 10-question quiz to test what you know and earn more Mastery XP!' +
        '</p>' +
      '</div>' +
      '<a class="btn btn--primary btn--lg dsh-action-btn" href="#/quiz/unit/' + weakUnit.id + '">' +
        '⚡ Start 10-Q Quiz' +
      '</a>' +
    '</div>';
  }

  /* Dual Board Exam Readiness: Paper 1 vs Paper 2 */
  function renderExamSplitSection(syl, readMap, quiz) {
    function computePaper(unitIds, paperLabel, paperName) {
      var units = (syl.theory || []).filter(function (u) { return unitIds.indexOf(u.id) !== -1; })
        .concat((syl.practical || []).filter(function (u) { return unitIds.indexOf(u.id) !== -1; }));

      var totalT = 0, readT = 0, totalQuestions = 0;
      var scores = [];

      units.forEach(function (u) {
        var uTopics = u.topics || [];
        totalT += uTopics.length;
        uTopics.forEach(function (t) {
          if (readMap[t.id]) readT++;
        });
        totalQuestions += (app.questionCount ? app.questionCount(u.id) : 0);
        var rec = quiz.byUnit && quiz.byUnit["unit:" + u.id];
        if (rec && typeof rec.best === "number") scores.push(rec.best);
      });

      var readPercent = totalT ? Math.round((readT / totalT) * 100) : 0;
      var avgScore = scores.length ? Math.round(scores.reduce(function (a, b) { return a + b; }, 0) / scores.length) : 0;

      return {
        label: paperLabel,
        name: paperName,
        totalTopics: totalT,
        readTopics: readT,
        readPct: readPercent,
        totalQuestions: totalQuestions,
        avgScore: avgScore,
        testCount: scores.length
      };
    }

    var p1 = computePaper(["unit-1", "unit-2", "prac-unit-1", "prac-unit-2"], "Paper I", "Principles, Feed Tech & Ruminant-I");
    var p2 = computePaper(["unit-3", "unit-4", "prac-unit-3", "prac-unit-4"], "Paper II", "Ruminant-II & Applied Non-Ruminant");

    function renderPaperCard(p, href) {
      return '<div class="dsh-paper-card">' +
        '<div class="dsh-paper-head">' +
          '<div class="dsh-paper-badge">' + p.label + '</div>' +
          '<h3 class="dsh-paper-title">' + p.name + '</h3>' +
          '<p class="dsh-paper-sub">Units ' + (p.label === "Paper I" ? "1 & 2" : "3 & 4") + ' (Theory + Practicals)</p>' +
        '</div>' +

        '<div class="dsh-paper-gauge-row mt-4">' +
          '<div class="dsh-paper-pct">' + p.readPct + '%</div>' +
          '<div class="dsh-paper-bar-wrap">' +
            '<div class="row row--between small mb-1">' +
              '<span>Syllabus Covered</span>' +
              '<b>' + p.readTopics + ' / ' + p.totalTopics + ' topics</b>' +
            '</div>' +
            '<div class="dsh-bar-track">' +
              '<div class="dsh-bar-fill dsh-bar-fill--blue" style="width:' + p.readPct + '%"></div>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div class="dsh-paper-stats-grid mt-4">' +
          '<div class="dsh-pstat">' +
            '<span class="dsh-pstat-val">' + p.readTopics + '</span>' +
            '<span class="dsh-pstat-lbl">Topics Done</span>' +
          '</div>' +
          '<div class="dsh-pstat">' +
            '<span class="dsh-pstat-val">' + p.totalQuestions + '</span>' +
            '<span class="dsh-pstat-lbl">Questions</span>' +
          '</div>' +
          '<div class="dsh-pstat">' +
            '<span class="dsh-pstat-val">' + (p.testCount ? p.avgScore + '%' : '—') + '</span>' +
            '<span class="dsh-pstat-lbl">Avg Score</span>' +
          '</div>' +
        '</div>' +

        '<div class="dsh-paper-actions mt-5">' +
          '<a class="btn btn--primary btn--md flex-1" href="' + href + '">🎯 Practice ' + p.label + ' Exam</a>' +
        '</div>' +
      '</div>';
    }

    return '<div class="dsh-section-wrap mt-10">' +
      '<div class="dsh-section-head mb-4">' +
        '<div>' +
          '<h2 class="flex items-center gap-2"><span>🏛️</span> VCI Annual Board Exam Readiness</h2>' +
          '<p class="small text-muted">Divided according to official university examination papers.</p>' +
        '</div>' +
      '</div>' +
      '<div class="grid grid--2 gap-4">' +
        renderPaperCard(p1, "#/quiz/paper/paper-1") +
        renderPaperCard(p2, "#/quiz/paper/paper-2") +
      '</div>' +
    '</div>';
  }

  /* Curriculum Units Grid */
  function renderUnitsGrid(filter, allUnits, readMap, quiz) {
    var filtered = allUnits.filter(function (u) {
      var isTheory = u.id.indexOf("unit-") === 0;
      var isPrac = u.id.indexOf("prac-") === 0;

      if (filter === "theory") return isTheory;
      if (filter === "practical") return isPrac;

      var rec = quiz.byUnit && quiz.byUnit["unit:" + u.id];
      var best = rec && typeof rec.best === "number" ? rec.best : null;

      if (filter === "weak") {
        return best === null || best < 60;
      }
      return true;
    });

    if (!filtered.length) {
      return '<div class="card p-6 text-center text-muted w-full col-span-full">No units match this filter.</div>';
    }

    var unitIcons = {
      "unit-1": "🌾", "unit-2": "🔬", "unit-3": "🥛", "unit-4": "🐓",
      "prac-unit-1": "🧪", "prac-unit-2": "⚖️", "prac-unit-3": "🥣", "prac-unit-4": "🐣"
    };

    return filtered.map(function (u) {
      var isTheory = u.id.indexOf("unit-") === 0;
      var tag = isTheory ? "Theory Unit " + u.no : "Practical " + u.no;
      var paperTag = (u.no <= 2) ? "Paper I" : "Paper II";

      var uTopics = u.topics || [];
      var done = 0;
      uTopics.forEach(function (t) { if (readMap[t.id]) done++; });
      var readP = uTopics.length ? Math.round((done / uTopics.length) * 100) : 0;

      var qn = app.questionCount ? app.questionCount(u.id) : 0;
      var rec = quiz.byUnit && quiz.byUnit["unit:" + u.id];
      var bestScore = (rec && typeof rec.best === "number") ? rec.best : null;

      var ico = unitIcons[u.id] || "📘";

      return '<div class="dsh-unit-card">' +
        '<div class="dsh-unit-top">' +
          '<div class="dsh-unit-badge-row">' +
            '<span class="dsh-unit-tag">' + tag + '</span>' +
            '<span class="dsh-paper-pill">' + paperTag + '</span>' +
          '</div>' +
          '<div class="dsh-unit-ico">' + ico + '</div>' +
        '</div>' +

        '<h3 class="dsh-unit-title">' + app.esc(u.short || u.title) + '</h3>' +

        '<div class="dsh-unit-progress-row mt-3">' +
          '<div class="row row--between small mb-1">' +
            '<span>Reading Progress</span>' +
            '<b>' + done + '/' + uTopics.length + ' (' + readP + '%)</b>' +
          '</div>' +
          '<div class="dsh-bar-track">' +
            '<div class="dsh-bar-fill dsh-bar-fill--blue" style="width:' + readP + '%"></div>' +
          '</div>' +
        '</div>' +

        '<div class="dsh-unit-quiz-status mt-3">' +
          '<span class="small text-muted">Quiz High Score:</span> ' +
          (bestScore !== null
            ? '<span class="chip ' + (bestScore >= 75 ? 'chip--ok' : bestScore >= 50 ? 'chip--warn' : 'chip--danger') + '">' +
                bestScore + '% Best</span>'
            : '<span class="chip chip--subtle">Not Taken Yet</span>') +
        '</div>' +

        '<div class="dsh-unit-actions mt-4">' +
          '<a class="btn btn--outline btn--sm flex-1" href="#/unit/' + u.id + '">📖 Read (' + uTopics.length + ')</a>' +
          (qn
            ? '<a class="btn btn--primary btn--sm flex-1" href="#/quiz/unit/' + u.id + '">🎯 Quiz (' + qn + ')</a>'
            : '<button class="btn btn--sm btn--ghost flex-1" disabled>No Qs</button>') +
        '</div>' +
      '</div>';
    }).join("");
  }

  /* Smart Memory Vault (SRS Made Simple) */
  function renderMemoryVault(srs, boxCounts, totalCards, dueCount) {
    var stageNames = [
      { num: 1, label: "Day 1", name: "Brand New", desc: "Just added · Needs quick review" },
      { num: 2, label: "Day 2", name: "Familiar", desc: "Remembering key facts" },
      { num: 3, label: "Day 4", name: "Solid", desc: "Solid memory formed" },
      { num: 4, label: "Day 8", name: "Long-Term", desc: "Exam-ready recall" },
      { num: 5, label: "Day 16", name: "Mastered! 🏆", desc: "Permanently remembered" }
    ];

    var maxBox = Math.max.apply(null, boxCounts.concat([1]));

    return '<div class="dsh-section-wrap mt-10">' +
      '<div class="dsh-section-head mb-4">' +
        '<div>' +
          '<h2 class="flex items-center gap-2"><span>🧠</span> Smart Memory Vault (Spaced Repetition)</h2>' +
          '<p class="small text-muted">' +
            'Every question you answer correctly moves up the ladder so you remember it permanently without cramming!' +
          '</p>' +
        '</div>' +
        (dueCount > 0
          ? '<a class="btn btn--primary btn--sm" href="#/quiz/review">⚡ Review ' + dueCount + ' Cards Due Today</a>'
          : '<span class="chip chip--ok">✓ All Memories Fresh</span>') +
      '</div>' +

      '<div class="dsh-srs-grid mt-4">' +
        boxCounts.map(function (count, idx) {
          var stage = stageNames[idx];
          var fillPct = Math.round((count / maxBox) * 100);
          return '<div class="dsh-srs-box">' +
            '<div class="dsh-srs-head">' +
              '<span class="dsh-srs-stage-badge">Stage ' + stage.num + '</span>' +
              '<span class="dsh-srs-time-pill">' + stage.label + '</span>' +
            '</div>' +
            '<div class="dsh-srs-count">' + count + ' <small class="text-xs font-normal">cards</small></div>' +
            '<b class="dsh-srs-name">' + stage.name + '</b>' +
            '<div class="dsh-bar-track mt-2">' +
              '<div class="dsh-bar-fill dsh-bar-fill--green" style="width:' + fillPct + '%"></div>' +
            '</div>' +
            '<span class="dsh-srs-desc mt-2">' + stage.desc + '</span>' +
          '</div>';
        }).join("") +
      '</div>' +
    '</div>';
  }

  /* Recent Quizzes Card */
  function renderRecentQuizzesCard(quiz) {
    var list = (quiz.attempts || []).slice(-6).reverse();

    if (!list.length) {
      return '<div class="card dsh-panel-card p-6">' +
        '<h3 class="flex items-center gap-2 mb-1"><span>🎯</span> Recent Quiz Results</h3>' +
        '<p class="small text-muted mb-4">Your past quizzes and practice tests will be logged here.</p>' +
        '<div class="card p-6 text-center text-muted">' +
          '<div style="font-size:2rem;margin-bottom:8px">🎲</div>' +
          '<p>No quiz attempts logged yet.</p>' +
          '<a class="btn btn--primary btn--sm mt-3" href="#/quiz">Take Your First Quiz</a>' +
        '</div>' +
      '</div>';
    }

    return '<div class="card dsh-panel-card p-6">' +
      '<div class="row row--between items-center mb-3">' +
        '<div>' +
          '<h3 class="flex items-center gap-2"><span>🎯</span> Recent Quiz Results</h3>' +
          '<p class="small text-muted">Tap any quiz to review what you got right or wrong.</p>' +
        '</div>' +
        '<a class="small font-bold" href="#/quiz">Quiz Arena →</a>' +
      '</div>' +

      '<div class="stack mt-4">' +
        list.map(function (a) {
          var p = app.pct(a.correct, a.total);
          var dt = new Date(a.at);
          var dateStr = dt.toLocaleDateString(undefined, { month: "short", day: "numeric" });
          return '<a class="dsh-quiz-row" href="#/quiz/result/' + a.id + '">' +
            '<div class="dsh-quiz-row__left">' +
              '<b>' + app.esc(a.label || "Animal Nutrition Quiz") + '</b>' +
              '<span class="small text-muted">' + dateStr + (a.exam ? ' · ⏱️ Timed Exam' : ' · Practice') + '</span>' +
            '</div>' +
            '<div class="dsh-quiz-row__right">' +
              '<span class="chip ' + (p >= 75 ? 'chip--ok' : p >= 50 ? 'chip--warn' : 'chip--danger') + '">' +
                a.correct + '/' + a.total + ' (' + p + '%)' +
              '</span>' +
            '</div>' +
          '</a>';
        }).join("") +
      '</div>' +
    '</div>';
  }

  /* Activity Heatmap Calendar */
  function renderActivityCalendarCard(activity, streak) {
    var cells = [];
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - 83); // 12 weeks = 84 days

    var activeDays = 0;
    var totalActions = 0;

    for (var i = 0; i < 84; i++) {
      var key = d.getFullYear() + "-" +
        String(d.getMonth() + 1).padStart(2, "0") + "-" +
        String(d.getDate()).padStart(2, "0");
      var n = activity[key] || 0;
      if (n > 0) {
        activeDays++;
        totalActions += n;
      }
      var lvl = n === 0 ? 0 : n < 3 ? 1 : n < 6 ? 2 : n < 12 ? 3 : 4;
      cells.push('<div class="hm__cell" data-lvl="' + lvl + '" title="' + key + ': ' + n + ' study actions"></div>');
      d.setDate(d.getDate() + 1);
    }

    return '<div class="card dsh-panel-card p-6">' +
      '<div class="row row--between items-center mb-3">' +
        '<div>' +
          '<h3 class="flex items-center gap-2"><span>📅</span> Study Activity (Past 12 Weeks)</h3>' +
          '<p class="small text-muted">Green squares show days you studied or took quizzes.</p>' +
        '</div>' +
        '<span class="chip chip--accent font-mono">' + totalActions + ' Actions</span>' +
      '</div>' +

      '<div class="heatmap-grid-scroll mt-4">' +
        '<div class="hm-elite">' + cells.join("") + '</div>' +
      '</div>' +

      '<div class="row row--between small text-muted mt-4 pt-3 border-t border-border-light">' +
        '<span>Active study days: <b>' + activeDays + ' of 84 days</b></span>' +
        '<div class="row items-center gap-1">' +
          '<span>Less</span>' +
          [0, 1, 2, 3, 4].map(function (l) { return '<div class="hm__cell" style="width:10px;height:10px" data-lvl="' + l + '"></div>'; }).join("") +
          '<span>More</span>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  /* Personal Study Vault */
  function renderStudyVault(totalHl, notesCount, bmsCount, qaCount) {
    return '<div class="dsh-section-wrap mt-10 mb-8">' +
      '<div class="dsh-section-head mb-4">' +
        '<div>' +
          '<h2 class="flex items-center gap-2"><span>🗂️</span> Personal Study Vault</h2>' +
          '<p class="small text-muted">All your bookmarks, notes, high-yield highlights, and exam answers.</p>' +
        '</div>' +
      '</div>' +

      '<div class="dsh-vault-grid">' +
        '<a class="dsh-vault-card" href="#/library">' +
          '<div class="dsh-vault-icon">🔖</div>' +
          '<div class="dsh-vault-count">' + bmsCount + '</div>' +
          '<b class="dsh-vault-label">Bookmarked Topics</b>' +
          '<span class="small text-muted">Quick revision links</span>' +
        '</a>' +
        '<a class="dsh-vault-card" href="#/library">' +
          '<div class="dsh-vault-icon">📝</div>' +
          '<div class="dsh-vault-count">' + notesCount + '</div>' +
          '<b class="dsh-vault-label">Personal Notes</b>' +
          '<span class="small text-muted">Saved study observations</span>' +
        '</a>' +
        '<a class="dsh-vault-card" href="#/library">' +
          '<div class="dsh-vault-icon">🖍️</div>' +
          '<div class="dsh-vault-count">' + totalHl + '</div>' +
          '<b class="dsh-vault-label">Passages Highlighted</b>' +
          '<span class="small text-muted">Key high-yield sentences</span>' +
        '</a>' +
        '<a class="dsh-vault-card" href="#/qa">' +
          '<div class="dsh-vault-icon">✍️</div>' +
          '<div class="dsh-vault-count">' + qaCount + '</div>' +
          '<b class="dsh-vault-label">Model Q&amp;A Practiced</b>' +
          '<span class="small text-muted">University written answers</span>' +
        '</a>' +
      '</div>' +
    '</div>';
  }

  /* Helpers */
  function findNextUnreadTopic(allUnits, readMap) {
    for (var uIdx = 0; uIdx < allUnits.length; uIdx++) {
      var u = allUnits[uIdx];
      var topics = u.topics || [];
      for (var tIdx = 0; tIdx < topics.length; tIdx++) {
        var t = topics[tIdx];
        if (!readMap[t.id]) {
          return {
            id: t.id,
            title: t.title,
            index: t.index || (tIdx + 1),
            unitTitle: u.short || u.title
          };
        }
      }
    }
    return null;
  }

  function findLowestScoringUnit(allUnits, quiz) {
    var minScore = 999;
    var candidate = null;

    allUnits.forEach(function (u) {
      if (u.id.indexOf("unit-") !== 0) return;
      var rec = quiz.byUnit && quiz.byUnit["unit:" + u.id];
      if (rec && typeof rec.best === "number") {
        if (rec.best < minScore) {
          minScore = rec.best;
          candidate = { id: u.id, name: u.short || u.title, score: rec.best, hasScore: true };
        }
      } else if (!candidate) {
        candidate = { id: u.id, name: u.short || u.title, score: 0, hasScore: false };
      }
    });

    return candidate || { id: "unit-1", name: "Principles of Animal Nutrition", score: 0, hasScore: false };
  }

  function attachEvents(host, allUnits, readMap, quiz) {
    var tabs = host.querySelectorAll("#unitfiltertabs .dsh-tab-btn");
    var container = host.querySelector("#dshunitgrid");

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.classList.remove("is-active"); });
        tab.classList.add("is-active");
        activeUnitFilter = tab.getAttribute("data-filter") || "all";
        if (container) {
          container.innerHTML = renderUnitsGrid(activeUnitFilter, allUnits, readMap, quiz);
        }
      });
    });
  }

  return {
    render: render
  };
})();
