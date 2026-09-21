/* ============================================================
   dashboard.js — Elite Clinical Diagnostics & Analytics Engine
   ============================================================
   Next-Gen EdTech Learning Dashboard:
     - 0–1000 XP Animal Nutrition Mastery Index with Circular Gauge & Ranks
     - AI Next-Best-Action Clinical Prescriptions
     - Dual VCI Board Exam Readiness (Paper I vs Paper II)
     - Interactive Unit Mastery Matrix with Real-Time Filter Tabs
     - 5-Box Leitner Spaced Repetition Memory Pipeline
     - 84-Day Activity Heatmap with Month & Day Headings
     - Diagnostic Assessment Ledger (Recent Quiz Attempts)
     - Clinical Knowledge Vault (Highlights, Notes, Bookmarks)
   ============================================================ */

var dashboardApp = (function () {

  var activeFilter = "all";

  function render(host) {
    if (!host) return;

    var readMap   = store.getRead() || {};
    var quiz      = store.getQuiz() || { attempts: [], byUnit: {} };
    var streak    = store.computeStreak() || { current: 0, longest: 0, totalDays: 0 };
    var activity  = store.getActivity() || {};
    var srs       = store.getSrs() || {};
    var dueCards  = (store.dueSrs && store.dueSrs()) ? store.dueSrs().length : 0;
    var notes     = store.getNotes() || {};
    var bms       = store.getBookmarks() || [];
    var highlights = store.getHighlights() || {};
    var qaDone    = store.getQaDone() || [];

    // Syllabus counts
    var theoryUnits   = syllabus.theory || [];
    var practicalUnits = syllabus.practical || [];
    var allUnits      = theoryUnits.concat(practicalUnits);
    var totalTopics   = allUnits.reduce(function (n, u) { return n + (u.topics ? u.topics.length : 0); }, 0);
    var readCount     = Object.keys(readMap).length;
    var readPct       = totalTopics ? Math.round((readCount / totalTopics) * 100) : 0;

    // Quiz statistics
    var attempts = quiz.attempts || [];
    var totalQ = 0, totalCorrect = 0;
    attempts.forEach(function (a) { totalQ += (a.total || 0); totalCorrect += (a.correct || 0); });
    var quizAccuracy = totalQ ? Math.round((totalCorrect / totalQ) * 100) : 0;

    // Spaced repetition statistics
    var srsKeys = Object.keys(srs);
    var boxCounts = [0, 0, 0, 0, 0];
    srsKeys.forEach(function (k) {
      var b = Math.min(5, Math.max(1, srs[k].box || 1));
      boxCounts[b - 1]++;
    });
    var masteredCount = boxCounts[2] + boxCounts[3] + boxCounts[4]; // Box 3, 4, 5
    var retentionRate = srsKeys.length ? Math.round((masteredCount / srsKeys.length) * 100) : 0;

    // Highlights stats
    var totalHighlights = 0;
    var hlColorCounts = { yellow: 0, green: 0, blue: 0, pink: 0, orange: 0, purple: 0 };
    Object.keys(highlights).forEach(function (topId) {
      var arr = highlights[topId] || [];
      totalHighlights += arr.length;
      arr.forEach(function (h) {
        if (h.color && hlColorCounts[h.color] !== undefined) {
          hlColorCounts[h.color]++;
        }
      });
    });

    // Mastery XP Calculation (0 to 1000 XP)
    var readXP = Math.round((readCount / (totalTopics || 1)) * 400); // 40% weight
    var quizFactor = totalQ ? (totalCorrect / totalQ) : 0;
    var quizVolume = Math.min(1, attempts.length / 8);
    var quizXP = Math.round((quizFactor * 0.7 + quizVolume * 0.3) * 350); // 35% weight
    var srsFactor = srsKeys.length ? (masteredCount / srsKeys.length) : 0;
    var srsVolume = Math.min(1, srsKeys.length / 25);
    var srsXP = Math.round((srsFactor * 0.6 + srsVolume * 0.4) * 150); // 15% weight
    var streakFactor = Math.min(1, streak.current / 7);
    var daysFactor = Math.min(1, streak.totalDays / 10);
    var consistencyXP = Math.round((streakFactor * 0.6 + daysFactor * 0.4) * 100); // 10% weight

    var totalXP = Math.min(1000, readXP + quizXP + srsXP + consistencyXP);
    var readinessPct = Math.min(100, Math.round(totalXP / 10));

    // Rank evaluation
    var rank = getRank(totalXP);

    // Circumference for 175px gauge (radius = 70)
    var radius = 70;
    var circumference = 2 * Math.PI * radius;
    var strokeOffset = circumference - (circumference * readinessPct) / 100;

    // HTML Output
    host.innerHTML =
      '<div class="dash-elite">' +

        /* 1. Hero Cockpit Card */
        '<div class="dash-hero">' +
          '<div class="dash-cockpit">' +
            '<div class="mastery-gauge-wrap">' +
              '<div class="mastery-svg-gauge">' +
                '<svg viewBox="0 0 175 175">' +
                  '<circle class="mastery-gauge-bg" cx="87.5" cy="87.5" r="' + radius + '"></circle>' +
                  '<circle class="mastery-gauge-fill" cx="87.5" cy="87.5" r="' + radius + '" ' +
                    'stroke-dasharray="' + circumference + '" ' +
                    'stroke-dashoffset="' + strokeOffset + '"></circle>' +
                '</svg>' +
                '<div class="mastery-gauge-center">' +
                  '<span class="mastery-gauge-val">' + totalXP + '</span>' +
                  '<span class="mastery-gauge-lbl">Mastery XP</span>' +
                '</div>' +
              '</div>' +
              '<div class="mastery-rank-badge">' +
                app.icon(rank.icon) + ' ' + rank.title +
              '</div>' +
            '</div>' +

            '<div class="dash-cockpit-info">' +
              '<span class="dash-eyebrow">' + app.icon("sparkle") + ' Clinical Learning Cockpit · ' + rank.stage + '</span>' +
              '<h1 class="dash-title">Animal Nutrition Analytics</h1>' +
              '<p class="dash-lede">' +
                'Real-time exam readiness index, spaced retention health, and syllabus coverage across all four VCI Theory Units and four Practical Units.' +
              '</p>' +

              '<div class="dash-metrics-grid">' +
                '<div class="dash-metric-card">' +
                  '<div class="dash-metric-head">Streak <span class="streak-flame">' + app.icon("flame") + '</span></div>' +
                  '<div class="dash-metric-val">' + streak.current + ' <small style="font-size:14px;font-weight:600">days</small></div>' +
                  '<div class="dash-metric-sub">Best: ' + streak.longest + ' days</div>' +
                '</div>' +

                '<div class="dash-metric-card">' +
                  '<div class="dash-metric-head">Syllabus <span>' + app.icon("book") + '</span></div>' +
                  '<div class="dash-metric-val">' + readPct + '%</div>' +
                  '<div class="dash-metric-sub">' + readCount + ' of ' + totalTopics + ' topics read</div>' +
                '</div>' +

                '<div class="dash-metric-card">' +
                  '<div class="dash-metric-head">Quiz Accuracy <span>' + app.icon("target") + '</span></div>' +
                  '<div class="dash-metric-val">' + (totalQ ? quizAccuracy + '%' : '—') + '</div>' +
                  '<div class="dash-metric-sub">' + attempts.length + ' tests completed</div>' +
                '</div>' +

                '<div class="dash-metric-card">' +
                  '<div class="dash-metric-head">Memory Health <span>' + app.icon("shield") + '</span></div>' +
                  '<div class="dash-metric-val">' + (srsKeys.length ? retentionRate + '%' : '100%') + '</div>' +
                  '<div class="dash-metric-sub">' + (dueCards ? dueCards + ' due for review' : 'Zero memory decay') + '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +

        /* 2. Next Best Action Prescriptions */
        renderPrescriptions(dueCards, allUnits, readMap, quiz) +

        /* 3. Paper I vs Paper II Dual Examination Readiness */
        renderPaperReadiness(syllabus, readMap, quiz) +

        /* 4. Interactive Unit Mastery Matrix */
        '<section>' +
          '<div class="row row--between mb-3">' +
            '<div>' +
              '<h2>Unit Mastery Matrix</h2>' +
              '<p class="muted small mt-1">Reading progress, question bank volume, and high score per curriculum unit.</p>' +
            '</div>' +
          '</div>' +
          renderMatrixFilters(allUnits) +
          '<div id="unit-matrix-container">' +
            renderUnitMatrix(activeFilter, allUnits, readMap, quiz) +
          '</div>' +
        '</section>' +

        /* 5. 5-Box Leitner Memory Pipeline */
        renderLeitnerPipeline(srs, boxCounts, srsKeys.length, dueCards) +

        /* 6. Quiz Performance Analytics */
        renderQuizAnalytics() +

        /* 7. Activity Heatmap & Performance Trends */
        '<div class="grid grid--2">' +
          renderHeatmapCard(activity, streak) +
          renderRecentAttemptsCard(quiz) +
        '</div>' +

        (Object.keys(srs).length ? '<div class="grid grid--2 mt-4">' + renderSrsForecast(srs) + '</div>' : '') +

        /* 8. Study Vault & Knowledge Artifacts */
        renderKnowledgeVault(totalHighlights, hlColorCounts, Object.keys(notes).length, bms.length, qaDone.length) +

      '</div>';

    attachDashboardEvents(host, allUnits, readMap, quiz);
  }

  /* ---------- Rank calculation ---------- */
  function getRank(xp) {
    if (xp >= 750) {
      return { title: "Master Animal Nutritionist", stage: "Phase 4 · Elite Feed & Ration Formulation Mastery", icon: "trophy" };
    }
    if (xp >= 500) {
      return { title: "Senior Ration Formulator", stage: "Phase 3 · Board Exam Ready", icon: "sparkle" };
    }
    if (xp >= 250) {
      return { title: "Junior Feed Analyst", stage: "Phase 2 · Feed Diagnostics & Laboratory Acumen", icon: "search" };
    }
    return { title: "Nutrition Apprentice", stage: "Phase 1 · Foundations", icon: "book" };
  }

  /* ---------- Smart Action Prescriptions ---------- */
  function renderPrescriptions(dueCards, allUnits, readMap, quiz) {
    // 1. Spaced Repetition Mission
    var srsCard = '';
    if (dueCards > 0) {
      srsCard =
        '<div class="presc-card is-urgent">' +
          '<div>' +
            '<span class="presc-badge presc-badge--urgent">' + app.icon("clock") + ' Priority 1 · Memory Decay</span>' +
            '<h3 class="presc-title mt-2">' + dueCards + ' Question' + (dueCards > 1 ? 's' : '') + ' Due Today</h3>' +
            '<p class="presc-desc mt-1">Ebbinghaus forgetting curve active. Review your Leitner cards now to prevent memory drop.</p>' +
          '</div>' +
          '<a class="btn btn--primary presc-btn" href="#/quiz/review">' + app.icon("repeat") + ' Clear Review Queue</a>' +
        '</div>';
    } else {
      srsCard =
        '<div class="presc-card">' +
          '<div>' +
            '<span class="presc-badge presc-badge--success">' + app.icon("check") + ' Memory Safe</span>' +
            '<h3 class="presc-title mt-2">Zero Flashcards Due</h3>' +
            '<p class="presc-desc mt-1">Your spaced repetition queue is fully cleared. All active questions are in consolidation.</p>' +
          '</div>' +
          '<a class="btn btn--outline presc-btn" href="#/quiz">' + app.icon("quiz") + ' Practice Flashcards</a>' +
        '</div>';
    }

    // 2. Next Unread Lesson Mission
    var nextTopic = findNextUnreadTopic(allUnits, readMap);
    var topicTotal = allUnits.reduce(function (n, u) { return n + ((u.topics || []).length); }, 0);
    var lessonCard = '';
    if (nextTopic) {
      lessonCard =
        '<div class="presc-card is-primary">' +
          '<div>' +
            '<span class="presc-badge presc-badge--primary">' + app.icon("book") + ' Next Up in Syllabus</span>' +
            '<h3 class="presc-title mt-2">' + app.esc(shorten(nextTopic.title, 32)) + '</h3>' +
            '<p class="presc-desc mt-1">' + app.esc(nextTopic.unitTitle) + ' · Topic ' + nextTopic.index + '</p>' +
          '</div>' +
          '<a class="btn btn--primary presc-btn" href="#/topic/' + nextTopic.id + '">' + app.icon("book") + ' Continue Lesson</a>' +
        '</div>';
    } else {
      lessonCard =
        '<div class="presc-card">' +
          '<div>' +
            '<span class="presc-badge presc-badge--success">' + app.icon("trophy") + ' Full Coverage</span>' +
            '<h3 class="presc-title mt-2">All ' + topicTotal + ' Topics Read</h3>' +
            '<p class="presc-desc mt-1">You have explored every theory and practical topic in the syllabus!</p>' +
          '</div>' +
          '<a class="btn btn--outline presc-btn" href="#/theory">' + app.icon("repeat") + ' Review Lessons</a>' +
        '</div>';
    }

    // 3. Recommended Diagnostic Assessment
    var weakUnit = findLowestScoringUnit(allUnits, quiz);
    var quizCard =
      '<div class="presc-card">' +
        '<div>' +
          '<span class="presc-badge presc-badge--primary">' + app.icon("target") + ' Target Diagnostic</span>' +
          '<h3 class="presc-title mt-2">' + app.esc(shorten(weakUnit.name, 32)) + '</h3>' +
          '<p class="presc-desc mt-1">' + (weakUnit.hasScore ? 'Current best score: ' + weakUnit.score + '%. Take a 10-Q test to boost mastery.' : 'No assessment attempts yet. Take your first test.') + '</p>' +
        '</div>' +
        '<a class="btn btn--primary presc-btn" href="#/quiz/unit/' + weakUnit.id + '">' + app.icon("quiz") + ' Test Knowledge</a>' +
      '</div>';

    return '<div class="dash-prescriptions">' + srsCard + lessonCard + quizCard + '</div>';
  }

  /* ---------- Paper I vs Paper II Comparative Readiness ---------- */
  function renderPaperReadiness(syl, readMap, quiz) {
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
        totalQuestions += app.questionCount(u.id);
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
    var p2 = computePaper(["unit-3", "unit-4", "prac-unit-3", "prac-unit-4"], "Paper II", "Ruminant-II & Non-Ruminant Nutrition");

    function renderPaperCard(p, href) {
      return '<div class="paper-gauge-card">' +
        '<div class="paper-card-head">' +
          '<div>' +
            '<span class="paper-badge">' + p.label + '</span>' +
            '<h3 class="paper-card-title mt-1">' + p.name + '</h3>' +
            '<p class="paper-card-subtitle">Units ' + (p.label === "Paper I" ? "1, 2" : "3, 4") + ' (Theory + Practical)</p>' +
          '</div>' +
        '</div>' +

        '<div class="paper-progress-wrap">' +
          '<div class="row row--between small">' +
            '<span>Syllabus Reading</span>' +
            '<span class="mono"><b>' + p.readPct + '%</b> (' + p.readTopics + '/' + p.totalTopics + ')</span>' +
          '</div>' +
          '<div class="bar" style="height:8px">' +
            '<div class="bar__fill" style="width:' + p.readPct + '%;background:var(--ivri-blue)"></div>' +
          '</div>' +
        '</div>' +

        '<div class="paper-stats-row">' +
          '<div>' +
            '<div class="paper-stat-item-val">' + p.readTopics + '</div>' +
            '<div class="paper-stat-item-lbl">Read</div>' +
          '</div>' +
          '<div>' +
            '<div class="paper-stat-item-val">' + p.totalQuestions + '</div>' +
            '<div class="paper-stat-item-lbl">Questions</div>' +
          '</div>' +
          '<div>' +
            '<div class="paper-stat-item-val">' + (p.testCount ? p.avgScore + '%' : '—') + '</div>' +
            '<div class="paper-stat-item-lbl">Avg Score</div>' +
          '</div>' +
        '</div>' +

        '<a class="btn btn--outline mt-2" href="' + href + '">' +
          app.icon("quiz") + ' Simulate ' + p.label + ' Exam' +
        '</a>' +
      '</div>';
    }

    return '<section>' +
      '<h2>Annual Examination Readiness</h2>' +
      '<p class="muted small mt-1">Split according to the official VCI veterinary board exam format.</p>' +
      '<div class="paper-readiness-grid mt-4">' +
        renderPaperCard(p1, "#/quiz/paper/paper-1") +
        renderPaperCard(p2, "#/quiz/paper/paper-2") +
      '</div>' +
    '</section>';
  }

  /* ---------- Unit Mastery Matrix Filter Buttons ---------- */
  function renderMatrixFilters(allUnits) {
    var units = allUnits || [];
    var theoryN = units.filter(function (u) { return u.id.indexOf("unit-") === 0; }).length;
    var pracN = units.length - theoryN;
    var tabs = [
      { id: "all", label: "All Units (" + units.length + ")" },
      { id: "theory", label: "Theory (" + theoryN + ")" },
      { id: "practical", label: "Practical (" + pracN + ")" },
      { id: "weak", label: "Needs Practice (<60%)" },
      { id: "mastered", label: "Mastered (≥75%)" }
    ];

    return '<div class="matrix-filter-bar">' +
      tabs.map(function (tab) {
        return '<button class="matrix-tab-btn' + (activeFilter === tab.id ? ' is-active' : '') + '" data-filter="' + tab.id + '">' +
          tab.label +
        '</button>';
      }).join("") +
    '</div>';
  }

  /* ---------- Unit Mastery Matrix Grid ---------- */
  function renderUnitMatrix(filter, allUnits, readMap, quiz) {
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
      if (filter === "mastered") {
        return best !== null && best >= 75;
      }
      return true;
    });

    if (!filtered.length) {
      return '<div class="card p-5 text-center text-muted">No units match the selected filter.</div>';
    }

    return '<div class="unit-mastery-grid">' +
      filtered.map(function (u) {
        var isTheory = u.id.indexOf("unit-") === 0;
        var tag = isTheory ? "U" + u.no : "P" + u.no;
        var paperTag = (u.no <= 2) ? "Paper I" : "Paper II";

        var uTopics = u.topics || [];
        var done = 0;
        uTopics.forEach(function (t) { if (readMap[t.id]) done++; });
        var readP = uTopics.length ? Math.round((done / uTopics.length) * 100) : 0;

        var qn = app.questionCount(u.id);
        var rec = quiz.byUnit && quiz.byUnit["unit:" + u.id];
        var bestScore = (rec && typeof rec.best === "number") ? rec.best : null;
        var uStats = (quiz.units || {})[u.id];
        var accP = (uStats && uStats.totalQ) ? Math.round(uStats.totalCorrect / uStats.totalQ * 100) : null;

        return '<div class="unit-card-elite">' +
          '<div class="unit-card-top">' +
            '<span class="unit-card-badge">' + tag + ' · ' + paperTag + '</span>' +
            (bestScore !== null
              ? '<span class="chip ' + (bestScore >= 75 ? 'chip--ok' : bestScore >= 50 ? 'chip--warn' : 'chip--danger') + '">' +
                  bestScore + '% Best</span>'
              : '<span class="chip faint">Untested</span>') +
          '</div>' +

          '<a class="unit-card-title" href="#/unit/' + u.id + '">' +
            app.esc(u.short || u.title) +
          '</a>' +

          '<div class="unit-card-bars">' +
            '<div class="unit-bar-item">' +
              '<div class="unit-bar-label">' +
                '<span>Reading Progress</span>' +
                '<span class="mono">' + done + '/' + uTopics.length + ' (' + readP + '%)</span>' +
              '</div>' +
              '<div class="bar" style="height:6px">' +
                '<div class="bar__fill" style="width:' + readP + '%;background:var(--ivri-blue)"></div>' +
              '</div>' +
            '</div>' +
            (accP !== null
              ? '<div class="unit-bar-item mt-2">' +
                  '<div class="unit-bar-label">' +
                    '<span>Quiz Accuracy</span>' +
                    '<span class="mono">' + uStats.totalCorrect + '/' + uStats.totalQ + ' (' + accP + '%)</span>' +
                  '</div>' +
                  '<div class="bar" style="height:6px">' +
                    '<div class="bar__fill" style="width:' + accP + '%;background:' +
                      (accP >= 75 ? 'var(--ok)' : accP >= 50 ? 'var(--warn)' : 'var(--danger)') + '"></div>' +
                  '</div>' +
                '</div>'
              : '') +
          '</div>' +

          '<div class="unit-card-actions">' +
            '<a class="btn btn--sm btn--outline" style="flex:1" href="#/unit/' + u.id + '">' +
              app.icon("book") + ' Read' +
            '</a>' +
            (qn
              ? '<a class="btn btn--sm btn--primary" style="flex:1" href="#/quiz/unit/' + u.id + '">' +
                  app.icon("quiz") + ' Quiz (' + qn + ')' +
                '</a>'
              : '<span class="btn btn--sm disabled" style="flex:1">No Qs</span>') +
          '</div>' +
        '</div>';
      }).join("") +
    '</div>';
  }

  /* ---------- 5-Box Leitner Memory Pipeline ---------- */
  function renderLeitnerPipeline(srs, boxCounts, totalCards, dueCount) {
    var intervals = ["Daily (24h)", "Every 2 Days", "Every 4 Days", "Every 8 Days", "Mastered (16d)"];
    var descriptions = [
      "Volatile memory · High decay risk",
      "Short-term retention",
      "Consolidating memory",
      "Long-term clinical retention",
      "Reflexive diagnosis mastery"
    ];

    var maxBox = Math.max.apply(null, boxCounts.concat([1]));

    return '<section class="srs-pipeline-wrap">' +
      '<div class="row row--between">' +
        '<div>' +
          '<h2>Spaced Repetition Memory Matrix</h2>' +
          '<p class="muted small mt-1">Ebbinghaus memory curve optimizer. Questions climb from Box 1 to Box 5 as you reinforce recall.</p>' +
        '</div>' +
        (dueCount > 0
          ? '<a class="btn btn--primary btn--sm" href="#/quiz/review">' + app.icon("repeat") + ' Review ' + dueCount + ' Due</a>'
          : '<span class="chip chip--ok">' + app.icon("check") + ' Queue Clear</span>') +
      '</div>' +

      '<div class="srs-pipeline-grid">' +
        boxCounts.map(function (count, idx) {
          var boxNum = idx + 1;
          var pctOfTotal = totalCards ? Math.round((count / totalCards) * 100) : 0;
          return '<div class="srs-box-col" data-box="' + boxNum + '">' +
            '<span class="srs-box-num">Box ' + boxNum + '</span>' +
            '<div class="srs-box-count">' + count + '</div>' +
            '<div class="srs-box-interval">' + intervals[idx] + '</div>' +
            '<div class="bar mt-2" style="width:100%;height:5px">' +
              '<div class="bar__fill" style="width:' + (count / maxBox * 100) + '%"></div>' +
            '</div>' +
            '<span class="srs-box-pct mt-1">' + (totalCards ? pctOfTotal + '% of cards' : '0 cards') + '</span>' +
          '</div>';
        }).join("") +
      '</div>' +
    '</section>';
  }

  /* ---------- Spaced repetition forecast ---------- */
  function renderSrsForecast(srs) {
    var keys = Object.keys(srs || {});
    if (!keys.length) return '';

    var now = Date.now();
    var day = 86400000;
    var buckets = [0, 0, 0, 0, 0, 0, 0, 0];   // [due now, +1d, +2d ... +6d]
    var later = 0;

    keys.forEach(function (k) {
      var due = srs[k].due || 0;
      if (due <= now) { buckets[0]++; return; }
      var inDays = Math.ceil((due - now) / day);
      if (inDays <= 7) buckets[inDays]++;
      else later++;
    });

    var max = Math.max.apply(null, buckets.concat([1]));
    var dayNames = ["Today", "+1d", "+2d", "+3d", "+4d", "+5d", "+6d", "+7d"];

    return '<div class="heatmap-card-elite">' +
      '<div class="row row--between">' +
        '<div>' +
          '<h3>Review Forecast</h3>' +
          '<p class="muted small mt-1">Questions coming back to you over the next week.</p>' +
        '</div>' +
        (buckets[0] ? '<a class="btn btn--primary btn--sm" href="#/quiz/review">Review ' + buckets[0] + '</a>' : '') +
      '</div>' +
      '<div class="srs-forecast mt-4">' +
        buckets.map(function (n, i) {
          return '<div class="srs-forecast__col">' +
            '<div class="srs-forecast__bar-wrap">' +
              '<div class="srs-forecast__bar' + (i === 0 && n ? ' is-due' : '') +
                '" style="height:' + Math.round(n / max * 100) + '%" title="' + n + ' question' + (n === 1 ? '' : 's') + '"></div>' +
            '</div>' +
            '<span class="srs-forecast__n">' + n + '</span>' +
            '<span class="srs-forecast__d">' + dayNames[i] + '</span>' +
          '</div>';
        }).join("") +
      '</div>' +
      '<p class="small faint mt-3">' + keys.length + ' questions tracked' +
        (later ? ' · ' + later + ' resting beyond a week' : '') + '</p>' +
    '</div>';
  }

  /* ---------- Activity Heatmap Card ---------- */
  function renderHeatmapCard(activity, streak) {
    var cells = [];
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - 83); // 12 weeks = 84 days

    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var startMonth = monthNames[d.getMonth()];
    var midDate = new Date(d);
    midDate.setDate(midDate.getDate() + 42);
    var midMonth = monthNames[midDate.getMonth()];
    var nowMonth = monthNames[(new Date()).getMonth()];

    var activeDaysCount = 0;
    var totalInteractions = 0;

    for (var i = 0; i < 84; i++) {
      var key = d.getFullYear() + "-" +
        String(d.getMonth() + 1).padStart(2, "0") + "-" +
        String(d.getDate()).padStart(2, "0");
      var n = activity[key] || 0;
      if (n > 0) {
        activeDaysCount++;
        totalInteractions += n;
      }
      var lvl = n === 0 ? 0 : n < 3 ? 1 : n < 6 ? 2 : n < 12 ? 3 : 4;
      cells.push('<div class="hm__cell" data-lvl="' + lvl + '" title="' + key + ' — ' +
        (n ? n + ' study actions' : 'no activity') + '"></div>');
      d.setDate(d.getDate() + 1);
    }

    return '<div class="heatmap-card-elite">' +
      '<div class="row row--between">' +
        '<div>' +
          '<h3>Study Activity Heatmap</h3>' +
          '<p class="muted small mt-1">Past 12 weeks of clinical interactions.</p>' +
        '</div>' +
        '<span class="chip font-mono">' + totalInteractions + ' total actions</span>' +
      '</div>' +

      '<div class="heatmap-grid-scroll mt-4">' +
        '<div class="heatmap-months-row">' +
          '<span>' + startMonth + '</span>' +
          '<span>' + midMonth + '</span>' +
          '<span>' + nowMonth + '</span>' +
        '</div>' +
        '<div class="hm-elite">' + cells.join("") + '</div>' +
      '</div>' +

      '<div class="heatmap-summary-strip">' +
        '<div>Active days: <b>' + activeDaysCount + ' / 84</b></div>' +
        '<div>Longest streak: <b>' + streak.longest + ' days</b></div>' +
        '<div class="row small faint" style="gap:4px">' +
          '<span>Less</span>' +
          [0, 1, 2, 3, 4].map(function (l) { return '<div class="hm__cell" style="width:11px;height:11px" data-lvl="' + l + '"></div>'; }).join("") +
          '<span>More</span>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  /* ---------- Quiz Performance Analytics ---------- */
  function barTone(pct) {
    return pct >= 75 ? "is-ok" : pct >= 50 ? "is-warn" : "is-danger";
  }

  function accuracyBar(label, correct, total) {
    var pct = total ? Math.round(correct / total * 100) : 0;
    return '<div class="qa-bar">' +
      '<div class="qa-bar__top"><span>' + label + '</span>' +
        '<span class="muted">' + correct + '/' + total + ' · <b>' + pct + '%</b></span></div>' +
      '<div class="qa-bar__track"><div class="qa-bar__fill ' + barTone(pct) + '" style="width:' + pct + '%"></div></div>' +
    '</div>';
  }

  function formatStudyTime(s) {
    if (s.minutes >= 60) return Math.floor(s.minutes / 60) + 'h ' + (s.minutes % 60) + 'm';
    if (s.minutes >= 1) return s.minutes + 'm';
    return (s.seconds || 0) + 's';
  }

  function renderQuizAnalytics() {
    var s = (store.getQuizStats && store.getQuizStats()) || null;
    if (!s || !s.runs) {
      return '<section>' +
        '<h2>Quiz Performance Analytics</h2>' +
        '<p class="muted small mt-1">Every quiz you finish is recorded here — accuracy, speed, formats and weak units.</p>' +
        '<div class="card p-5 text-center mt-4 text-muted">' +
          app.icon("target") + '<br>No quiz data yet. Finish one quiz and your analytics appear here.<br>' +
          '<a class="btn btn--primary btn--sm mt-3" href="#/quiz">Take a quiz</a>' +
        '</div>' +
      '</section>';
    }

    var trend = s.hasTrend ? (s.trend || 0) : null;
    var trendCls = trend > 0 ? " is-up" : trend < 0 ? " is-down" : "";
    var trendTxt = trend === null ? "—" : trend > 0 ? "▲ " + trend + "%" : trend < 0 ? "▼ " + Math.abs(trend) + "%" : "level";
    var trendSub = trend === null ? "after 6 quizzes" : "last 5 vs previous 5";

    var tiles =
      '<div class="quiz-analytics-grid mt-4">' +
        '<div class="qa-tile"><div class="qa-tile__label">Questions answered</div>' +
          '<div class="qa-tile__val">' + s.totalQ + '</div>' +
          '<div class="qa-tile__sub">' + s.totalCorrect + ' correct</div></div>' +
        '<div class="qa-tile"><div class="qa-tile__label">Overall accuracy</div>' +
          '<div class="qa-tile__val">' + s.accuracy + '%</div>' +
          '<div class="qa-tile__sub">across ' + s.runs + ' quiz' + (s.runs === 1 ? '' : 'zes') + '</div></div>' +
        '<div class="qa-tile"><div class="qa-tile__label">Recent trend</div>' +
          '<div class="qa-tile__val' + trendCls + '">' + trendTxt + '</div>' +
          '<div class="qa-tile__sub">' + trendSub + '</div></div>' +
        '<div class="qa-tile"><div class="qa-tile__label">Time on quizzes</div>' +
          '<div class="qa-tile__val">' + formatStudyTime(s) + '</div>' +
          '<div class="qa-tile__sub">' + s.exams + ' timed exam' + (s.exams === 1 ? '' : 's') + '</div></div>' +
      '</div>';

    // last 10 scores as a small bar chart
    var spark = s.recent.length
      ? '<div class="card mt-4">' +
          '<div class="row row--between"><b>Recent scores</b>' +
            '<span class="small muted">newest on the right</span></div>' +
          '<div class="qa-spark mt-3">' +
            s.recent.map(function (r) {
              var h = Math.max(6, r.pct);
              return '<div class="qa-spark__bar ' + barTone(r.pct) + '" style="height:' + h + '%" title="' +
                app.esc(r.label || 'Quiz') + ' — ' + r.pct + '%"></div>';
            }).join("") +
          '</div>' +
        '</div>'
      : '';

    var fmtLabels = { mcq: "🔘 Multiple Choice", tf: "⚖️ True / False", fib: "✍️ Fill in the Blanks" };
    var fmtBars = Object.keys(fmtLabels).filter(function (f) {
      return s.formats[f] && s.formats[f].totalQ;
    }).map(function (f) {
      return accuracyBar(fmtLabels[f], s.formats[f].totalCorrect, s.formats[f].totalQ);
    }).join("");

    var unitBars = Object.keys(s.units).filter(function (u) {
      return s.units[u] && s.units[u].totalQ;
    }).sort(function (a, b) {
      var pa = s.units[a].totalCorrect / s.units[a].totalQ, pb = s.units[b].totalCorrect / s.units[b].totalQ;
      return pa - pb;
    }).map(function (u) {
      var name = (syllabus.unitById[u] || {}).short || u;
      return accuracyBar(app.esc(name), s.units[u].totalCorrect, s.units[u].totalQ);
    }).join("");

    // weakest sub-sections, only once they have been attempted a few times
    var subNames = (window.quizApp && quizApp.subSectionTitles) ? quizApp.subSectionTitles() : {};
    var weak = Object.keys(s.subs).filter(function (k) {
      return s.subs[k] && s.subs[k].totalQ >= 4;
    }).sort(function (a, b) {
      return (s.subs[a].totalCorrect / s.subs[a].totalQ) - (s.subs[b].totalCorrect / s.subs[b].totalQ);
    }).slice(0, 5);

    var diffLabels = { d1: "⭐ Foundational", d2: "⭐⭐ Core UG", d3: "⭐⭐⭐ Rank 1 Classic" };
    var diffBars = Object.keys(diffLabels).filter(function (d) {
      return s.diffs && s.diffs[d] && s.diffs[d].totalQ;
    }).map(function (d) {
      return accuracyBar(diffLabels[d], s.diffs[d].totalCorrect, s.diffs[d].totalQ);
    }).join("");

    // topics you keep getting wrong, with a direct link to the lesson
    var weakTopics = Object.keys(s.topics || {}).filter(function (t) {
      var rec = s.topics[t];
      return rec && rec.totalQ >= 2 && syllabus.topicById[t] &&
        (rec.totalCorrect / rec.totalQ) < 0.75;
    }).sort(function (a, b) {
      return (s.topics[a].totalCorrect / s.topics[a].totalQ) - (s.topics[b].totalCorrect / s.topics[b].totalQ);
    }).slice(0, 6);

    var weakTopicHtml = weakTopics.length
      ? '<div class="card mt-4">' +
          '<b>Lessons worth rereading</b>' +
          '<p class="small muted mt-1">Topics where your quiz answers keep going wrong.</p>' +
          '<div class="tlist mt-3" style="border:none">' +
            weakTopics.map(function (t) {
              var rec = s.topics[t];
              var pct = Math.round(rec.totalCorrect / rec.totalQ * 100);
              return '<a class="tlist__row" href="#/topic/' + t + '">' +
                '<span class="tlist__body"><span class="tlist__title">' +
                  app.esc(syllabus.topicById[t].title) + '</span>' +
                  '<span class="tlist__sub">' + rec.totalCorrect + ' of ' + rec.totalQ + ' correct</span></span>' +
                '<span class="tlist__right"><span class="chip ' +
                  (pct >= 75 ? 'chip--ok' : pct >= 50 ? 'chip--warn' : 'chip--danger') + '">' + pct + '%</span></span>' +
              '</a>';
            }).join("") +
          '</div>' +
        '</div>'
      : '';

    return '<section>' +
      '<div class="row row--between mb-1">' +
        '<div>' +
          '<h2>Quiz Performance Analytics</h2>' +
          '<p class="muted small mt-1">Every finished quiz is recorded — accuracy, speed, formats and weak areas.</p>' +
        '</div>' +
        '<a class="small" href="#/quiz">Take a quiz &rarr;</a>' +
      '</div>' +
      tiles +
      spark +
      '<div class="grid grid--2 mt-4">' +
        (fmtBars ? '<div class="card"><b>Accuracy by question type</b><div class="qa-bars mt-3">' + fmtBars + '</div></div>' : '') +
        (unitBars ? '<div class="card"><b>Accuracy by unit</b><p class="small muted mt-1">Weakest first.</p><div class="qa-bars mt-3">' + unitBars + '</div></div>' : '') +
        (diffBars ? '<div class="card"><b>Accuracy by difficulty</b><div class="qa-bars mt-3">' + diffBars + '</div></div>' : '') +
        (weak.length ? '<div class="card"><b>Focus next on</b><p class="small muted mt-1">Your weakest sub-sections so far.</p><div class="qa-bars mt-3">' +
            weak.map(function (k) {
              return accuracyBar(app.esc(subNames[k] || k), s.subs[k].totalCorrect, s.subs[k].totalQ);
            }).join("") + '</div></div>' : '') +
      '</div>' +
      weakTopicHtml +
    '</section>';
  }

  /* ---------- Diagnostic Assessment Ledger ---------- */
  function renderRecentAttemptsCard(quiz) {
    var list = (quiz.attempts || []).slice(-10).reverse();
    var reviewable = {};
    ((store.getAttemptLog && store.getAttemptLog()) || []).forEach(function (r) { reviewable[r.id] = true; });

    if (!list.length) {
      return '<div class="heatmap-card-elite">' +
        '<h3>Assessment Ledger</h3>' +
        '<p class="muted small mt-1">Record of your recent quizzes and simulation exams.</p>' +
        '<div class="card p-5 text-center mt-4 text-muted">' +
          app.icon("target") + '<br>' +
          'No quiz attempts recorded yet.<br>' +
          '<a class="btn btn--primary btn--sm mt-3" href="#/quiz">Take Diagnostic Test</a>' +
        '</div>' +
      '</div>';
    }

    return '<div class="heatmap-card-elite">' +
      '<div class="row row--between">' +
        '<div>' +
          '<h3>Assessment Ledger</h3>' +
          '<p class="muted small mt-1">Recent quizzes — tap any row to reopen its full review.</p>' +
        '</div>' +
        '<a class="small" href="#/quiz">All Quizzes &rarr;</a>' +
      '</div>' +

      '<div class="tlist mt-4" style="border:none">' +
        list.map(function (a) {
          var p = app.pct(a.correct, a.total);
          var dt = new Date(a.at);
          var dateStr = dt.toLocaleDateString(undefined, { month: "short", day: "numeric" });
          var mins = a.seconds ? Math.max(1, Math.round(a.seconds / 60)) : (a.minutes || 0);
          var hasReview = !!(a.id && reviewable[a.id]);
          return '<' + (hasReview ? 'a class="tlist__row" href="#/quiz/result/' + a.id + '"' : 'div class="tlist__row"') + '>' +
            '<span class="tlist__body">' +
              '<span class="tlist__title">' + app.esc(a.label || "Animal Nutrition Quiz") + '</span>' +
              '<span class="tlist__sub">' + dateStr +
                (a.exam ? ' · ⏱️ Timed Exam' : ' · Practice') +
                (mins ? ' · ' + mins + ' min' : '') +
                (a.unanswered ? ' · ' + a.unanswered + ' skipped' : '') +
              '</span>' +
            '</span>' +
            '<span class="tlist__right">' +
              '<span class="chip ' + (p >= 75 ? 'chip--ok' : p >= 50 ? 'chip--warn' : 'chip--danger') + '">' +
                a.correct + '/' + a.total + ' (' + p + '%)' +
              '</span>' +
              (hasReview ? '<span class="small faint ml-1">Review →</span>' : '') +
            '</span>' +
          '</' + (hasReview ? 'a' : 'div') + '>';
        }).join("") +
      '</div>' +
    '</div>';
  }

  /* ---------- Student Knowledge Vault ---------- */
  function renderKnowledgeVault(totalHl, hlColors, notesCount, bmsCount, qaCount) {
    return '<section>' +
      '<h2>Clinical Knowledge Vault</h2>' +
      '<p class="muted small mt-1">Your personal clinical repository of notes, high-yield highlights, and bookmarks.</p>' +
      '<div class="vault-grid mt-4">' +
        '<a class="vault-card" href="#/library">' +
          '<div class="vault-card-icon">' + app.icon("star") + '</div>' +
          '<div class="vault-card-val">' + bmsCount + '</div>' +
          '<div class="vault-card-title">Bookmarked Topics</div>' +
          '<div class="vault-card-sub">Quick revision access</div>' +
        '</a>' +

        '<a class="vault-card" href="#/library">' +
          '<div class="vault-card-icon">' + app.icon("note") + '</div>' +
          '<div class="vault-card-val">' + notesCount + '</div>' +
          '<div class="vault-card-title">Clinical Notes</div>' +
          '<div class="vault-card-sub">Personal observations</div>' +
        '</a>' +

        '<a class="vault-card" href="#/library">' +
          '<div class="vault-card-icon">' + app.icon("pen") + '</div>' +
          '<div class="vault-card-val">' + totalHl + '</div>' +
          '<div class="vault-card-title">Passages Highlighted</div>' +
          '<div class="vault-card-sub">Color-coded key points</div>' +
        '</a>' +

        '<a class="vault-card" href="#/qa">' +
          '<div class="vault-card-icon">' + app.icon("qa") + '</div>' +
          '<div class="vault-card-val">' + qaCount + '</div>' +
          '<div class="vault-card-title">Exam Questions Mastered</div>' +
          '<div class="vault-card-sub">Model answers reviewed</div>' +
        '</a>' +
      '</div>' +
    '</section>';
  }

  /* ---------- Helpers ---------- */
  function shorten(s, n) {
    if (!s) return "";
    return s.length > n ? s.slice(0, n - 1) + "…" : s;
  }

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
      if (u.id.indexOf("unit-") !== 0) return; // focus on theory units
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

    return candidate || { id: "unit-1", name: "Principles of Animal Nutrition and Feed Technology", score: 0, hasScore: false };
  }

  /* ---------- Attach UI events ---------- */
  function attachDashboardEvents(host, allUnits, readMap, quiz) {
    var filterBtns = host.querySelectorAll(".matrix-tab-btn");
    var container = host.querySelector("#unit-matrix-container");

    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        activeFilter = btn.getAttribute("data-filter") || "all";
        if (container) {
          container.innerHTML = renderUnitMatrix(activeFilter, allUnits, readMap, quiz);
        }
      });
    });
  }

  return {
    render: render
  };
})();
