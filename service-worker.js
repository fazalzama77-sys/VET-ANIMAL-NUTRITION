/* ============================================================
   service-worker.js - Network-First Offline PWA Engine
   Animal Nutrition Studio (B.V.Sc & A.H.)

   - CACHE_VERSION is stamped by tools/build_version.py on every
     build. Do not edit it by hand.
   - Same-origin GETs use the network first with
     fetch(req, { cache: "no-store" }). This skips GitHub Pages'
     max-age HTTP cache. Cache Storage is only an offline fallback.
   - version.json and ?update_check= requests never touch
     Cache Storage, so update probes always reach the network.
   - The worker activates at once with skipWaiting() and clients.claim().
   ============================================================ */

var CACHE_VERSION = "vanut-3f449406ab68";
var SHELL_CACHE = CACHE_VERSION + "-shell";

/* Cache keys carry no query string, so ?v=<hash> versions share one entry. */
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
  "assets/css/study-visuals.css",

  "data/data-syllabus.JS",
  "data/data-theory-unit1.JS",
  "data/data-theory-unit2.JS",
  "data/data-theory-unit3.JS",
  "data/data-theory-unit4.JS",
  "data/data-study-visuals.js",
  "data/data-practical.JS",
  "data/data-images.js",
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
  "js/sync.js",
  "js/study-scenes.js",
  "js/study-visuals.js",
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

/* ---- Helpers ---- */
function cacheKey(req) {
  var u = new URL(req.url);
  u.search = "";
  u.hash = "";
  return u.href;
}

function isUpdateProbe(url) {
  return /\/version\.json$/i.test(url.pathname) || url.searchParams.has("update_check");
}

/* Fresh network fetch that skips the HTTP cache. Some older engines reject
   a RequestInit on navigation requests, so they retry with a plain fetch. */
function fetchFresh(req) {
  return fetch(req, { cache: "no-store" }).catch(function () {
    return fetch(req);
  });
}

function fromCache(req) {
  return caches.match(cacheKey(req), { ignoreSearch: true }).then(function (hit) {
    if (hit) return hit;
    if (req.mode === "navigate" || req.destination === "document") {
      return caches.match("index.html", { ignoreSearch: true }).then(function (doc) {
        return doc || caches.match("./", { ignoreSearch: true });
      });
    }
    return undefined;
  }).then(function (res) {
    return res || new Response("Offline", { status: 503, statusText: "Offline" });
  });
}

/* ---- Install: precache the app shell and activate at once ---- */
self.addEventListener("install", function (e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(SHELL_CACHE).then(function (cache) {
      return Promise.all(
        PRECACHE.map(function (url) {
          return fetch(new Request(url, { cache: "no-store" })).then(function (res) {
            if (res && res.ok) return cache.put(cacheKey(new Request(url)), res);
          }).catch(function (err) {
            console.warn("[SW] Precache item missed:", url, err);
          });
        })
      );
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

/* ---- Activate: delete old caches and claim open pages ---- */
self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (k) {
          if (k.indexOf(CACHE_VERSION) !== 0) return caches.delete(k);
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

/* ---- Fetch ---- */
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;

  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // 1. Update probes skip Cache Storage completely.
  if (isUpdateProbe(url)) {
    e.respondWith(
      fetchFresh(req).catch(function () {
        return new Response("", { status: 503, statusText: "Offline" });
      })
    );
    return;
  }

  // 2. Every other same-origin asset uses the network first, with the cache as fallback.
  e.respondWith(
    fetchFresh(req).then(function (res) {
      if (res && res.ok && res.type === "basic") {
        var copy = res.clone();
        caches.open(SHELL_CACHE).then(function (c) {
          return c.put(cacheKey(req), copy);
        }).catch(function () {});
      }
      return res;
    }).catch(function () {
      return fromCache(req);
    })
  );
});

/* ---- Client Communication ---- */
self.addEventListener("message", function (e) {
  if (!e.data) return;
  if (e.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  } else if (e.data.type === "PURGE_AND_RELOAD") {
    caches.keys().then(function (names) {
      return Promise.all(names.map(function (n) { return caches.delete(n); }));
    }).then(function () {
      self.skipWaiting();
      if (e.source) e.source.postMessage({ type: "PURGE_COMPLETE" });
    });
  }
});
