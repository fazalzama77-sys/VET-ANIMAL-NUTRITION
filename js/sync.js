/* ============================================================
   sync.js — Cross-Device Cloud Sync Engine
   Animal Nutrition Studio (B.V.Sc & A.H.)
   ------------------------------------------------------------
   Seamless, real-time synchronization between Mobile Phone
   and Tablet (or PC/Laptop).

   Features:
     - End-to-end CRDT merging: highlights, notes, bookmarks,
       quiz attempts, SRS flashcards & activity streaks merge
       without data loss.
     - Firebase Realtime Database REST + Server-Sent Events (live push).
     - 6-digit Pairing PIN & 1-tap QR Code device linking.
     - 100% offline-first: persists locally when offline, auto-syncs
       when reconnected to Wi-Fi or mobile data.
   ============================================================ */

var syncApp = (function () {

  var syncState = "idle"; // "idle" | "pushing" | "pulling" | "error"
  var liveSource = null;
  var pushDebounceTimer = null;

  function setSyncState(st) {
    syncState = st;
    updateSyncStatusUi();
  }

  function sanitizeDbUrl(url) {
    if (!url) return "";
    url = url.trim().replace(/\/$/, "");
    if (!/^https?:\/\//i.test(url)) {
      url = "https://" + url;
    }
    return url;
  }

  function hashPin(pin) {
    var str = String(pin || "").trim().toLowerCase().replace(/[^a-z0-9]/g, "");
    if (!str) return "vanut_default_room";
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return "room_vanut_" + Math.abs(hash).toString(36) + "_" + str.slice(0, 10);
  }

  function getEndpoint(dbUrl, pin) {
    var cleanUrl = sanitizeDbUrl(dbUrl);
    var room = hashPin(pin);
    return cleanUrl + "/nutrition/" + room + ".json";
  }

  function generatePin() {
    var n1 = Math.floor(100 + Math.random() * 900);
    var n2 = Math.floor(100 + Math.random() * 900);
    return n1 + "-" + n2;
  }

  function getPairingUrl() {
    var cfg = store.getSyncConfig();
    var base = window.location.origin + window.location.pathname;
    return base + "#/sync?db=" + encodeURIComponent(cfg.dbUrl || "") + "&pin=" + encodeURIComponent(cfg.pin || "");
  }

  /* ---------- PUSH (Upload Local Changes) ---------- */
  function push(onComplete) {
    var cfg = store.getSyncConfig();
    if (!cfg.enabled || !cfg.dbUrl || !cfg.pin) {
      if (onComplete) onComplete(false, "Sync not configured");
      return;
    }
    if (!navigator.onLine) {
      if (onComplete) onComplete(false, "Offline — changes will sync once reconnected");
      return;
    }

    var endpoint = getEndpoint(cfg.dbUrl, cfg.pin);
    var payload = {
      deviceId: cfg.deviceId,
      deviceName: cfg.deviceName || "Device",
      updatedAt: Date.now(),
      state: store.getAllData()
    };

    setSyncState("pushing");

    fetch(endpoint, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    })
    .then(function () {
      var freshCfg = store.getSyncConfig(); freshCfg.lastSyncedAt = Date.now(); cfg = freshCfg;
      store.setSyncConfig(cfg);
      setSyncState("idle");
      updateSyncStatusUi();
      if (onComplete) onComplete(true, "Synced to cloud successfully ✔");
    })
    .catch(function (err) {
      console.warn("[sync] push error:", err);
      setSyncState("error");
      if (onComplete) onComplete(false, "Upload error: " + err.message);
    });
  }

  /* ---------- PULL (Download & Merge Remote Changes) ---------- */
  function pull(onComplete) {
    var cfg = store.getSyncConfig();
    if (!cfg.enabled || !cfg.dbUrl || !cfg.pin) {
      if (onComplete) onComplete(false, "Sync not configured");
      return;
    }
    if (!navigator.onLine) {
      if (onComplete) onComplete(false, "Offline");
      return;
    }

    var endpoint = getEndpoint(cfg.dbUrl, cfg.pin);
    setSyncState("pulling");

    fetch(endpoint)
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    })
    .then(function (data) {
      setSyncState("idle");
      if (data && data.state) {
        var changed = store.mergeRemoteData(data.state);
        var freshCfg = store.getSyncConfig(); freshCfg.lastSyncedAt = Date.now(); cfg = freshCfg;
        store.setSyncConfig(cfg);
        updateSyncStatusUi();
        if (changed && window.app && app.toast) {
          app.toast("Synced from " + (data.deviceName || "other device") + " ✨");
        }
        if (onComplete) onComplete(true, "Pulled latest updates (" + (changed ? "merged new data" : "already up to date") + ")");
      } else {
        // Cloud room is empty, push our local state to seed it
        push();
        if (onComplete) onComplete(true, "Cloud room initialized with this device's data");
      }
    })
    .catch(function (err) {
      console.warn("[sync] pull error:", err);
      setSyncState("error");
      if (onComplete) onComplete(false, "Could not pull: " + err.message);
    });
  }

  /* ---------- REAL-TIME SSE (Server-Sent Events) ---------- */
  function connectLive() {
    var cfg = store.getSyncConfig();
    if (!cfg.enabled || !cfg.dbUrl || !cfg.pin || !window.EventSource) return;
    if (liveSource) {
      try { liveSource.close(); } catch (e) {}
      liveSource = null;
    }

    var endpoint = getEndpoint(cfg.dbUrl, cfg.pin);
    try {
      liveSource = new EventSource(endpoint);
      liveSource.addEventListener("put", function (e) {
        try {
          var packet = JSON.parse(e.data);
          if (packet && packet.data && packet.data.state) {
            if (packet.data.deviceId !== cfg.deviceId) {
              var changed = store.mergeRemoteData(packet.data.state);
              var freshCfg = store.getSyncConfig(); freshCfg.lastSyncedAt = Date.now(); cfg = freshCfg;
              store.setSyncConfig(cfg);
              updateSyncStatusUi();
              if (changed && window.app && app.toast) {
                app.toast("Live update received from " + (packet.data.deviceName || "other device") + " ⚡");
              }
            }
          }
        } catch (err) {}
      });

      liveSource.onerror = function () {
        // Automatically reconnects on network blip
      };
    } catch (err) {}
  }

  /* ---------- DEBOUNCED AUTO-PUSH ON LOCAL CHANGES ---------- */
  function schedulePush() {
    var cfg = store.getSyncConfig();
    if (!cfg.enabled || !cfg.autoSync || !cfg.dbUrl || !cfg.pin) return;
    if (pushDebounceTimer) clearTimeout(pushDebounceTimer);
    pushDebounceTimer = setTimeout(function () {
      push();
    }, 1800);
  }

  /* ---------- TEST CONNECTION ---------- */
  function testConnection(dbUrl, pin, cb) {
    if (!dbUrl) { cb(false, "Please enter your Firebase Database URL"); return; }
    if (!pin) { cb(false, "Please enter a 6-digit Sync PIN"); return; }

    var ep = getEndpoint(dbUrl, pin);
    fetch(ep)
    .then(function (r) {
      if (r.ok) {
        cb(true, "Connection successful! Cloud database is online and reachable.");
      } else {
        cb(false, "Database responded with HTTP " + r.status + ". Ensure Realtime Database rules allow read/write.");
      }
    })
    .catch(function (err) {
      cb(false, "Connection failed: " + err.message + ". Check URL and internet connection.");
    });
  }

  /* ---------- FORMAT TIME AGO ---------- */
  function timeAgo(ts) {
    if (!ts) return "Never";
    var diff = Math.floor((Date.now() - ts) / 1000);
    if (diff < 5) return "Just now";
    if (diff < 60) return diff + "s ago";
    if (diff < 3600) return Math.floor(diff / 60) + "m ago";
    if (diff < 86400) return Math.floor(diff / 3600) + "h ago";
    return new Date(ts).toLocaleDateString();
  }

  /* ---------- UPDATE UI STATUS LABELS ---------- */
  function updateSyncStatusUi() {
    var statusEl = document.getElementById("sync-status-badge");
    var timeEl = document.getElementById("sync-last-time");
    var cfg = store.getSyncConfig();

    if (statusEl) {
      if (!cfg.enabled || !cfg.dbUrl || !cfg.pin) {
        statusEl.className = "sync-badge sync-badge--off";
        statusEl.innerHTML = '<span class="sync-dot"></span> Sync Inactive';
      } else if (!navigator.onLine) {
        statusEl.className = "sync-badge sync-badge--warn";
        statusEl.innerHTML = '<span class="sync-dot"></span> Offline';
      } else if (syncState === "pushing" || syncState === "pulling") {
        statusEl.className = "sync-badge sync-badge--syncing";
        statusEl.innerHTML = '<span class="sync-dot sync-pulse"></span> Syncing...';
      } else if (syncState === "error") {
        statusEl.className = "sync-badge sync-badge--error";
        statusEl.innerHTML = '<span class="sync-dot"></span> Sync Warning';
      } else {
        statusEl.className = "sync-badge sync-badge--live";
        statusEl.innerHTML = '<span class="sync-dot"></span> Auto-Sync Active';
      }
    }

    if (timeEl) {
      timeEl.textContent = timeAgo(cfg.lastSyncedAt);
    }
  }

  /* ---------- BOOT & INITIALIZE ---------- */
  function init() {
    var cfg = store.getSyncConfig();
    if (!cfg.deviceId) {
      cfg.deviceId = "dev_" + Math.random().toString(36).slice(2, 9);
      cfg.deviceName = (/Mobi|Android|iPhone/i.test(navigator.userAgent) ? "Mobile Phone 📱" : "Tablet / PC 📟");
      store.setSyncConfig(cfg);
    }

    // Attach to store write hook
    store._onChange = function (key, val) {
      if (key === store.KEYS.syncConfig) return;
      schedulePush();
    };

    if (cfg.enabled && cfg.dbUrl && cfg.pin) {
      if (navigator.onLine) {
        pull(function () {
          connectLive();
        });
      }
    }

    window.addEventListener("online", function () {
      var c = store.getSyncConfig();
      if (c.enabled && c.dbUrl && c.pin) {
        pull(function () {
          push();
          connectLive();
        });
      }
      updateSyncStatusUi();
    });

    window.addEventListener("offline", function () {
      updateSyncStatusUi();
    });

    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "visible") {
        var c = store.getSyncConfig();
        if (c.enabled && c.dbUrl && c.pin && navigator.onLine) {
          pull();
        }
      }
    });
  }

  // Auto-init on script load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  return {
    init: init,
    push: push,
    pull: pull,
    connectLive: connectLive,
    schedulePush: schedulePush,
    generatePin: generatePin,
    getPairingUrl: getPairingUrl,
    testConnection: testConnection,
    updateSyncStatusUi: updateSyncStatusUi
  };

})();
