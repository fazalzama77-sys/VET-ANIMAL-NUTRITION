/* ============================================================
   store.js  —  Everything that must survive a page refresh.
   Animal Nutrition Studio
   ------------------------------------------------------------
   All keys are prefixed "vanut-" so this site can never collide
   with other subject sites if served from one domain.

   IMPORTANT: if you add a NEW key, also add it to store.backupKeys()
   or the Backup/Restore file will silently miss it.
   ============================================================ */

var store = (function () {

  var PREFIX = "vanut-";

  var KEYS = {
    theme:      PREFIX + "theme",       // "light" (default) | "dark"
    detail:     PREFIX + "detail",      // "standard" | "deep"
    read:       PREFIX + "read",        // { topicId: timestamp }
    bookmarks:  PREFIX + "bookmarks",   // [ "topicId", ... ]
    notes:      PREFIX + "notes",       // { topicId: "note text" }
    highlights: PREFIX + "highlights",  // { topicId: [ {text, color}, ... ] }
    hlColor:    PREFIX + "hl-color",    // "yellow" | "green" | "blue" | "pink" | "orange" | "purple"
    quiz:       PREFIX + "quiz",        // { attempts: [], byUnit: {}, units: {}, formats: {}, subs: {} }
    quizRun:    PREFIX + "quiz-run",    // the quiz currently in progress, so a refresh never loses it
    quizLog:    PREFIX + "quiz-log",    // question-by-question record of recent attempts, for review
    srs:        PREFIX + "srs",         // { questionKey: {box, due, wrong} }
    activity:   PREFIX + "activity",    // { "YYYY-MM-DD": actionCount }
    visits:     PREFIX + "visits",      // number
    onboarded:  PREFIX + "onboarded",   // "1"
    lastTopic:  PREFIX + "last-topic",  // topicId — powers "Resume studying"
    qaDone:     PREFIX + "qa-done",     // [ "qaId", ... ]
    notifySrs:  PREFIX + "notify-srs",  // boolean: whether daily SRS notification is enabled
    notifyTime: PREFIX + "notify-time", // preferred reminder time "HH:MM"
    navPos:     PREFIX + "nav-pos",     // "bottom" | "top" | "left" | "right"
    deepGuideSeen: PREFIX + "deep-guide-seen",
    topicGuideSeen: PREFIX + "topic-guide-seen",
    eventSeen:  PREFIX + "event-announcements-seen",
    installDismissed: PREFIX + "install-dismissed",
    sidebarCollapsed: PREFIX + "sidebar-collapsed"
  };

  /* ---------- low level ---------- */
  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (raw === null) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }

  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      // Quota exceeded or private mode — fail quietly, never break the page.
      console.warn("[store] could not save", key, e);
      return false;
    }
  }

  /* ---------- theme ---------- */
  function getTheme() { return read(KEYS.theme, "light"); }
  function setTheme(v) {
    write(KEYS.theme, v);
    applyTheme();
  }
  function applyTheme() {
    var t = getTheme();
    if (typeof document !== "undefined" && document.documentElement) {
      document.documentElement.setAttribute("data-theme", t === "dark" ? "dark" : "light");
    }
  }

  /* ---------- detail level (Standard vs Deep) ---------- */
  function getDetail() { return read(KEYS.detail, "standard"); }
  function setDetail(v) { write(KEYS.detail, v); }

  /* ---------- read / progress ---------- */
  function getRead() { return read(KEYS.read, {}); }
  function isRead(id) { return !!getRead()[id]; }
  function toggleRead(id) {
    var m = getRead();
    if (m[id]) delete m[id]; else m[id] = Date.now();
    write(KEYS.read, m);
    logActivity();
    return !!m[id];
  }

  /* ---------- bookmarks ---------- */
  function getBookmarks() { return read(KEYS.bookmarks, []); }
  function isBookmarked(id) { return getBookmarks().indexOf(id) !== -1; }
  function toggleBookmark(id) {
    var a = getBookmarks();
    var i = a.indexOf(id);
    if (i === -1) a.push(id); else a.splice(i, 1);
    write(KEYS.bookmarks, a);
    return i === -1;
  }

  /* ---------- notes ---------- */
  function getNotes() { return read(KEYS.notes, {}); }
  function getNote(id) { return getNotes()[id] || ""; }
  function setNote(id, text) {
    var m = getNotes();
    if (text && text.trim()) m[id] = text; else delete m[id];
    write(KEYS.notes, m);
    logActivity();
  }

  /* ---------- highlights ---------- */
  var VALID_HL_COLORS = ["yellow", "green", "blue", "pink", "orange", "purple"];
  function getHighlightColor() {
    var c = read(KEYS.hlColor, "yellow");
    return VALID_HL_COLORS.indexOf(c) !== -1 ? c : "yellow";
  }
  function setHighlightColor(color) {
    if (VALID_HL_COLORS.indexOf(color) === -1) color = "yellow";
    write(KEYS.hlColor, color);
    return color;
  }
  function getHighlights() { return read(KEYS.highlights, {}); }
  // occ = which occurrence of the text in the lesson the student selected
  // (0 = first). Highlights saved before this existed have no occ and mean 0.
  function sameHl(item, text, occ) {
    var itemText = typeof item === "string" ? item : (item ? item.text : "");
    if (itemText !== text) return false;
    if (occ === undefined || occ === null) return true;
    var itemOcc = (item && typeof item.occ === "number") ? item.occ : 0;
    return itemOcc === occ;
  }
  function addHighlight(id, text, color, occ) {
    color = (color && VALID_HL_COLORS.indexOf(color) !== -1) ? color : getHighlightColor();
    occ = (typeof occ === "number" && occ >= 0) ? occ : 0;
    var m = getHighlights();
    if (!m[id]) m[id] = [];
    var found = false;
    for (var i = 0; i < m[id].length; i++) {
      var item = m[id][i];
      if (sameHl(item, text, occ)) {
        m[id][i] = { text: text, color: color, occ: occ };
        found = true;
        break;
      }
    }
    if (!found) {
      m[id].push({ text: text, color: color, occ: occ });
    }
    write(KEYS.highlights, m);
    logActivity();
  }
  // Without occ every highlight of that text goes; with occ only that one.
  function removeHighlight(id, text, occ) {
    var m = getHighlights();
    if (!m[id]) return;
    m[id] = m[id].filter(function (t) {
      return !sameHl(t, text, occ);
    });
    if (!m[id].length) delete m[id];
    write(KEYS.highlights, m);
  }

  /* ---------- quiz results ---------- */
  function emptyQuiz() {
    return { attempts: [], byUnit: {}, units: {}, formats: {}, subs: {}, topics: {}, diffs: {} };
  }

  function getQuiz() {
    var q = read(KEYS.quiz, null) || emptyQuiz();
    // older saves only had attempts + byUnit
    if (!q.attempts) q.attempts = [];
    if (!q.byUnit) q.byUnit = {};
    if (!q.units) q.units = {};
    if (!q.formats) q.formats = {};
    if (!q.subs) q.subs = {};
    if (!q.topics) q.topics = {};
    if (!q.diffs) q.diffs = {};
    return q;
  }

  // bucket = { runs, totalQ, totalCorrect, best, last, lastAt }
  function tallyBucket(map, key, total, correct, at) {
    if (!key || !total) return;
    var b = map[key] || { runs: 0, best: 0, totalQ: 0, totalCorrect: 0 };
    b.runs += 1;
    b.totalQ += total;
    b.totalCorrect += correct;
    var pct = Math.round(correct / total * 100);
    if (pct > (b.best || 0)) b.best = pct;
    b.last = pct;
    b.lastAt = at;
    map[key] = b;
  }

  /* An attempt may carry these extras (all optional):
       units:   { unitId:   { total, correct } }
       formats: { mcq|tf|fib: { total, correct } }
       subs:    { subSectionId: { total, correct } }
       topics:  { topicId: { total, correct } }
       seconds, mode, wrongKeys                                        */
  function saveAttempt(attempt) {
    var q = getQuiz();
    attempt.at = attempt.at || Date.now();
    q.attempts.push(attempt);
    if (q.attempts.length > 300) q.attempts = q.attempts.slice(-300);

    tallyBucket(q.byUnit, attempt.scope, attempt.total, attempt.correct, attempt.at);

    ["units", "formats", "subs", "topics", "diffs"].forEach(function (group) {
      var src = attempt[group];
      if (!src) return;
      for (var key in src) {
        tallyBucket(q[group], key, src[key].total, src[key].correct, attempt.at);
      }
    });

    // a unit quiz should also count towards that unit even when it was a
    // sub-section run, so the dashboard mastery matrix always sees it
    if (attempt.units) {
      for (var uid in attempt.units) {
        tallyBucket(q.byUnit, "unit:" + uid, attempt.units[uid].total, attempt.units[uid].correct, attempt.at);
      }
    }

    write(KEYS.quiz, q);
    logActivity();
  }

  /* Everything the dashboard needs, computed in one place. */
  function getQuizStats() {
    var q = getQuiz();
    var attempts = q.attempts || [];
    var totalQ = 0, totalCorrect = 0, seconds = 0, exams = 0;
    attempts.forEach(function (a) {
      totalQ += a.total || 0;
      totalCorrect += a.correct || 0;
      seconds += a.seconds || ((a.minutes || 0) * 60);
      if (a.exam) exams += 1;
    });

    var recent = attempts.slice(-10).map(function (a) {
      return { at: a.at, pct: a.total ? Math.round(a.correct / a.total * 100) : 0, label: a.label, exam: !!a.exam };
    });

    // average of the last 5 vs the 5 before, so the dashboard can show a trend
    var last5 = recent.slice(-5), prev5 = attempts.slice(-10, -5).map(function (a) {
      return a.total ? Math.round(a.correct / a.total * 100) : 0;
    });
    function avg(list, pick) {
      if (!list.length) return 0;
      var sum = 0;
      list.forEach(function (x) { sum += pick ? pick(x) : x; });
      return Math.round(sum / list.length);
    }

    var byDay = {};
    attempts.forEach(function (a) {
      var d = new Date(a.at || Date.now());
      var key = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
      var rec = byDay[key] || { total: 0, correct: 0, runs: 0 };
      rec.total += a.total || 0;
      rec.correct += a.correct || 0;
      rec.runs += 1;
      byDay[key] = rec;
    });

    return {
      attempts: attempts,
      runs: attempts.length,
      exams: exams,
      totalQ: totalQ,
      totalCorrect: totalCorrect,
      accuracy: totalQ ? Math.round(totalCorrect / totalQ * 100) : 0,
      minutes: Math.round(seconds / 60),
      seconds: seconds,
      recent: recent,
      // only meaningful once there is something to compare against
      hasTrend: prev5.length > 0,
      trend: prev5.length ? avg(last5, function (r) { return r.pct; }) - avg(prev5) : 0,
      units: q.units || {},
      formats: q.formats || {},
      subs: q.subs || {},
      topics: q.topics || {},
      diffs: q.diffs || {},
      byDay: byDay
    };
  }

  /* ---------- question-by-question record of finished quizzes ----------
     Keeps the last MAX_LOGGED attempts in full so any of them can be
     reopened and reviewed later from the dashboard.                      */
  var MAX_LOGGED = 20;

  function getAttemptLog() {
    var log = read(KEYS.quizLog, []);
    return Array.isArray(log) ? log : [];
  }

  function saveAttemptDetail(record) {
    var log = getAttemptLog();
    log.push(record);
    while (log.length > MAX_LOGGED) log.shift();

    // If storage is tight, drop the oldest entries until it fits.
    while (log.length && !write(KEYS.quizLog, log)) {
      log.shift();
      if (!log.length) return false;
    }
    return true;
  }

  function getAttemptDetail(id) {
    var log = getAttemptLog();
    for (var i = log.length - 1; i >= 0; i--) {
      if (String(log[i].id) === String(id)) return log[i];
    }
    return null;
  }

  function clearAttemptLog() {
    try { localStorage.removeItem(KEYS.quizLog); } catch (e) {}
  }

  /* ---------- quiz in progress (survives a refresh or a closed tab) ---------- */
  function saveRun(runState) { return write(KEYS.quizRun, runState); }
  function loadRun() { return read(KEYS.quizRun, null); }
  function clearRun() {
    try { localStorage.removeItem(KEYS.quizRun); } catch (e) {}
  }

  /* ---------- spaced repetition (Leitner boxes 1-5) ---------- */
  function getSrs() { return read(KEYS.srs, {}); }
  function gradeSrs(key, correct) {
    var m = getSrs();
    var item = m[key] || { box: 1, due: 0, wrong: 0, seen: 0 };
    item.seen += 1;
    if (correct) {
      item.box = Math.min(5, item.box + 1);
    } else {
      item.box = 1;
      item.wrong += 1;
    }
    // Box 1..5 → review in 1, 2, 4, 8, 16 days
    var days = Math.pow(2, item.box - 1);
    item.due = Date.now() + days * 86400000;
    m[key] = item;
    write(KEYS.srs, m);
  }
  function dueSrs() {
    var m = getSrs(), now = Date.now(), out = [];
    for (var k in m) if (m[k].due <= now) out.push(k);
    return out;
  }

  /* ---------- activity / streak ---------- */
  function today() {
    var d = new Date();
    return d.getFullYear() + "-" +
      String(d.getMonth() + 1).padStart(2, "0") + "-" +
      String(d.getDate()).padStart(2, "0");
  }
  function getActivity() { return read(KEYS.activity, {}); }
  function logActivity() {
    var m = getActivity();
    var t = today();
    m[t] = (m[t] || 0) + 1;
    write(KEYS.activity, m);
  }
  function computeStreak() {
    var m = getActivity();
    var cur = 0, longest = 0, run = 0;
    var d = new Date();

    if (!m[today()]) d.setDate(d.getDate() - 1);

    for (var i = 0; i < 400; i++) {
      var key = d.getFullYear() + "-" +
        String(d.getMonth() + 1).padStart(2, "0") + "-" +
        String(d.getDate()).padStart(2, "0");
      if (m[key]) { cur++; d.setDate(d.getDate() - 1); }
      else break;
    }
    var days = Object.keys(m).sort();
    for (var j = 0; j < days.length; j++) {
      if (j > 0) {
        var prev = new Date(days[j - 1]), now2 = new Date(days[j]);
        run = ((now2 - prev) / 86400000 === 1) ? run + 1 : 1;
      } else run = 1;
      if (run > longest) longest = run;
    }
    return { current: cur, longest: Math.max(longest, cur), totalDays: days.length };
  }

  /* ---------- misc ---------- */
  function bumpVisits() {
    var n = (read(KEYS.visits, 0) || 0) + 1;
    write(KEYS.visits, n);
    return n;
  }
  function getVisits() { return read(KEYS.visits, 0) || 0; }
  function getLastTopic() { return read(KEYS.lastTopic, null); }
  function setLastTopic(id) { write(KEYS.lastTopic, id); }

  /* ---------- onboarding ---------- */
  function isOnboarded() { return !!read(KEYS.onboarded, false); }
  function setOnboarded() { write(KEYS.onboarded, 1); }
  function resetOnboarding() {
    try { localStorage.removeItem(KEYS.onboarded); } catch (e) {}
  }

  function getQaDone() { return read(KEYS.qaDone, []); }
  function toggleQaDone(id) {
    var a = getQaDone(), i = a.indexOf(id);
    if (i === -1) a.push(id); else a.splice(i, 1);
    write(KEYS.qaDone, a);
    logActivity();
    return i === -1;
  }

  /* ---------- nav position (Desktop) ---------- */
  function getNavPos() { return read(KEYS.navPos, "left"); }
  function setNavPos(pos) {
    write(KEYS.navPos, pos);
    applyNavPos();
  }
  function applyNavPos() {
    var pos = getNavPos();
    if (typeof document !== "undefined" && document.documentElement) {
      document.documentElement.setAttribute("data-nav-pos", pos);
    }
  }

  /* ---------- sidebar collapsed state (Desktop) ---------- */
  function isSidebarCollapsed() { return !!read(KEYS.sidebarCollapsed, false); }
  function setSidebarCollapsed(val) {
    write(KEYS.sidebarCollapsed, !!val);
    applySidebarState();
  }
  function toggleSidebarCollapsed() {
    var next = !isSidebarCollapsed();
    setSidebarCollapsed(next);
    return next;
  }
  function applySidebarState() {
    try {
      if (typeof document !== "undefined" && document.body) {
        if (isSidebarCollapsed()) document.body.classList.add("sidebar-collapsed");
        else document.body.classList.remove("sidebar-collapsed");
      }
    } catch (e) {}
  }

  /* ---------- daily SRS notifications ---------- */
  function getSrsNotify() { return read(KEYS.notifySrs, false); }
  function setSrsNotify(bool) { write(KEYS.notifySrs, !!bool); }
  function getSrsNotifyTime() { return read(KEYS.notifyTime, "19:00"); }
  function setSrsNotifyTime(t) { write(KEYS.notifyTime, t || "19:00"); }

  /* ---------- backup / restore ---------- */
  function backupKeys() {
    var out = [];
    for (var k in KEYS) out.push(KEYS[k]);
    return out;
  }

  function exportBackup() {
    var payload = { _app: "animal-nutrition-studio", _version: 1, _at: new Date().toISOString(), data: {} };
    backupKeys().forEach(function (k) {
      var v = localStorage.getItem(k);
      if (v !== null) payload.data[k] = v;
    });
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "animal-nutrition-backup-" + today() + ".json";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  function importBackup(file, onDone) {
    var r = new FileReader();
    r.onload = function () {
      try {
        var p = JSON.parse(r.result);
        if (!p || p._app !== "animal-nutrition-studio" || !p.data) {
          onDone(false, "That does not look like a valid study backup file.");
          return;
        }
        for (var k in p.data) localStorage.setItem(k, p.data[k]);
        onDone(true, "Restored. Reloading...");
      } catch (e) {
        onDone(false, "The file could not be read.");
      }
    };
    r.readAsText(file);
  }

  function resetAll() {
    backupKeys().forEach(function (k) { localStorage.removeItem(k); });
  }

  /* ---------- public API ---------- */
  return {
    KEYS: KEYS,
    getTheme: getTheme, setTheme: setTheme, applyTheme: applyTheme,
    getDetail: getDetail, setDetail: setDetail,
    getRead: getRead, isRead: isRead, toggleRead: toggleRead,
    getBookmarks: getBookmarks, isBookmarked: isBookmarked, toggleBookmark: toggleBookmark,
    getNotes: getNotes, getNote: getNote, setNote: setNote,
    getHighlights: getHighlights, addHighlight: addHighlight, removeHighlight: removeHighlight,
    getHighlightColor: getHighlightColor, setHighlightColor: setHighlightColor, VALID_HL_COLORS: VALID_HL_COLORS,
    getQuiz: getQuiz, saveAttempt: saveAttempt, getQuizStats: getQuizStats,
    saveRun: saveRun, loadRun: loadRun, clearRun: clearRun,
    getAttemptLog: getAttemptLog, saveAttemptDetail: saveAttemptDetail,
    getAttemptDetail: getAttemptDetail, clearAttemptLog: clearAttemptLog,
    getSrs: getSrs, gradeSrs: gradeSrs, dueSrs: dueSrs,
    getActivity: getActivity, logActivity: logActivity, computeStreak: computeStreak,
    bumpVisits: bumpVisits, getVisits: getVisits,
    getLastTopic: getLastTopic, setLastTopic: setLastTopic,
    isOnboarded: isOnboarded, setOnboarded: setOnboarded, resetOnboarding: resetOnboarding,
    getQaDone: getQaDone, toggleQaDone: toggleQaDone,
    getNavPos: getNavPos, setNavPos: setNavPos, applyNavPos: applyNavPos,
    isSidebarCollapsed: isSidebarCollapsed, setSidebarCollapsed: setSidebarCollapsed,
    toggleSidebarCollapsed: toggleSidebarCollapsed, applySidebarState: applySidebarState,
    getSrsNotify: getSrsNotify, setSrsNotify: setSrsNotify,
    getSrsNotifyTime: getSrsNotifyTime, setSrsNotifyTime: setSrsNotifyTime,
    backupKeys: backupKeys, exportBackup: exportBackup, importBackup: importBackup,
    resetAll: resetAll,
    today: today
  };
})();

if (typeof window !== "undefined") {
  store.applyTheme();
  store.applyNavPos();
  store.applySidebarState();
}
