/* ============================================================
   service-worker.js - 100% Offline PWA Engine
   Animal Nutrition Studio (B.V.Sc & A.H.)
   ============================================================ */

var CACHE_VERSION = "vanut-v8";
var SHELL_CACHE = CACHE_VERSION + "-shell";
var IMG_CACHE = CACHE_VERSION + "-img";

var PRECACHE = [
  "./",
  "index.html",
  "manifest.json",

  "assets/css/tokens.css",
  "assets/css/main.css",
  "assets/css/sections.css",
  "assets/css/deep-guide.css",
  "assets/css/events.css",
  "assets/css/animations.css",

  "data/data-syllabus.JS",
  "data/data-theory-unit1.JS",
  "data/data-theory-unit2.JS",
  "data/data-theory-unit3.JS",
  "data/data-theory-unit4.JS",
  "data/data-practical.JS",
  "data/data-why.JS",
  "data/data-qa.JS",
  "data/data-quiz.JS",
  "data/events-data.js",

  "js/store.js",
  "js/quiz.js",
  "js/dashboard.js",
  "js/glossary.js",
  "js/search.js",
  "js/deep-guide.js",
  "js/events.js",
  "js/app.js",

  "images/icon-192.png",
  "images/icon-512.png",
  "images/icon-maskable-192.png",
  "images/icon-maskable-512.png",
  "images/apple-touch-icon.png",
  "images/favicon-32.png",
  "images/favicon-16.png",

  "revision/unit-1-rapid-revision.html",
  "revision/unit-2-rapid-revision.html",
  "revision/unit-3-rapid-revision.html",
  "revision/unit-4-rapid-revision.html"
];

/* ---- Installation: Cache core app shell ---- */
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(SHELL_CACHE)
      .then(function (cache) {
        return Promise.all(
          PRECACHE.map(function (url) {
            return cache.add(url).catch(function (err) {
              console.warn("[SW] Precache item missed:", url, err);
            });
          })
        );
      })
      .then(function () {
        return self.skipWaiting();
      })
  );
});

/* ---- Activation: Clean old caches & claim clients ---- */
self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (k) {
          if (k.indexOf(CACHE_VERSION) !== 0) {
            return caches.delete(k);
          }
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

/* ---- Fetch Handler: Offline-first with background updates ---- */
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;

  var url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // 1. Navigation requests: Network-first, fallback to cached index.html
  if (req.mode === "navigate" || req.destination === "document") {
    e.respondWith(
      fetch(req).then(function (res) {
        if (res && res.status === 200) {
          var copy = res.clone();
          caches.open(SHELL_CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () {
        return caches.match(req).then(function (hit) {
          return hit || caches.match("index.html") || caches.match("./");
        });
      })
    );
    return;
  }

  // 2. Images & Icons: Cache-first
  if (/\.(png|jpg|jpeg|webp|gif|svg|ico)$/i.test(url.pathname)) {
    e.respondWith(
      caches.match(req).then(function (hit) {
        if (hit) return hit;
        return fetch(req).then(function (res) {
          if (res && res.status === 200) {
            var copy = res.clone();
            caches.open(IMG_CACHE).then(function (c) { c.put(req, copy); });
          }
          return res;
        }).catch(function () {
          return hit;
        });
      })
    );
    return;
  }

  // 3. App Shell & Data: Stale-While-Revalidate
  e.respondWith(
    caches.match(req).then(function (hit) {
      var networkFetch = fetch(req).then(function (res) {
        if (res && res.status === 200) {
          var copy = res.clone();
          caches.open(SHELL_CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () {
        return hit;
      });
      return hit || networkFetch;
    })
  );
});

/* ---- Client Communication ---- */
self.addEventListener("message", function (e) {
  if (e.data && e.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
