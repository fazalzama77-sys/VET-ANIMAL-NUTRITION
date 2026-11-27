"""
build_version.py - Animal Nutrition Studio release fingerprint.

Run on every build or update. The publish scripts call it automatically.

  python tools/build_version.py

What it does:
  1. Hashes every served HTML, CSS, JS and JSON data file with SHA-256.
     The hash covers index.html, manifest.json, service-worker.js,
     assets/, data/, js/ and revision/. It skips version.json, tools/ and repo/.
  2. Writes version.json in the repo root. The app polls this file to detect new releases.
  3. Updates index.html:
       - ?v=<short-hash> on every local <script src> and <link rel="stylesheet">
       - <meta name="app-version" content="<full-hash>">, which the app treats as its own build
  4. Sets CACHE_VERSION = "vanut-<short-hash>" in service-worker.js.
     The worker then changes byte-for-byte on every release.

Version stamps are removed before hashing: ?v= values, CACHE_VERSION and the
app-version meta tag. Re-running the script without content changes gives the
same hash and leaves every file untouched.
"""

import datetime
import hashlib
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SCAN_DIRS = ["assets", "data", "js", "revision"]
EXTS = {".html", ".css", ".js", ".json"}
SKIP_FILES = {"version.json"}
SHORT_LEN = 12

STAMP_PATTERNS = [
    (re.compile(r"([?&]v=)[0-9A-Za-z._-]+"), r"\1"),
    (re.compile(r'(CACHE_VERSION\s*=\s*")[^"]*(")'), r"\1\2"),
    (re.compile(r'(<meta\s+name="app-version"\s+content=")[^"]*(")'), r"\1\2"),
]


def collect_files():
    files = [p for p in ROOT.iterdir()
             if p.is_file() and p.suffix.lower() in EXTS and p.name not in SKIP_FILES]
    for d in SCAN_DIRS:
        base = ROOT / d
        if base.is_dir():
            files += [p for p in base.rglob("*") if p.is_file() and p.suffix.lower() in EXTS]
    return sorted(files, key=lambda p: p.relative_to(ROOT).as_posix())


def normalise(text):
    text = text.replace("\r\n", "\n")
    for rx, repl in STAMP_PATTERNS:
        text = rx.sub(repl, text)
    return text


def compute_hash(files):
    h = hashlib.sha256()
    for p in files:
        rel = p.relative_to(ROOT).as_posix()
        data = p.read_bytes()
        try:
            data = normalise(data.decode("utf-8")).encode("utf-8")
        except UnicodeDecodeError:
            pass
        h.update(rel.encode("utf-8") + b"\0" + data + b"\0")
    return h.hexdigest()


def read_text(p):
    with open(p, "r", encoding="utf-8", newline="") as f:
        return f.read()


def write_if_changed(p, new):
    if p.exists() and read_text(p) == new:
        return False
    with open(p, "w", encoding="utf-8", newline="") as f:
        f.write(new)
    return True


LOCAL_REF = r'(?!data:|https?:|//)([^"?#]+\.(?:js|css))(?:\?[^"#]*)?'


def stamp_index(html, full, short):
    # <script src="...">
    html = re.sub(r'(<script\b[^>]*?\bsrc=")' + LOCAL_REF + r'(")',
                  lambda m: m.group(1) + m.group(2) + "?v=" + short + m.group(3),
                  html, flags=re.IGNORECASE)
    # <link rel="stylesheet" href="...">
    def link(m):
        tag = m.group(0)
        if not re.search(r'rel="stylesheet"', tag, re.IGNORECASE):
            return tag
        return re.sub(r'(\bhref=")' + LOCAL_REF + r'(")',
                      lambda n: n.group(1) + n.group(2) + "?v=" + short + n.group(3),
                      tag, flags=re.IGNORECASE)
    html = re.sub(r"<link\b[^>]*>", link, html, flags=re.IGNORECASE)
    # <meta name="app-version">
    meta_rx = re.compile(r'(<meta\s+name="app-version"\s+content=")[^"]*(")')
    if meta_rx.search(html):
        html = meta_rx.sub(lambda m: m.group(1) + full + m.group(2), html)
    else:
        nl = "\r\n" if "\r\n" in html else "\n"
        html = re.sub(r'(<meta charset="[^"]*">)',
                      lambda m: m.group(1) + nl + '<meta name="app-version" content="' + full + '">',
                      html, count=1, flags=re.IGNORECASE)
    return html


def main():
    files = collect_files()
    full = compute_hash(files)
    short = full[:SHORT_LEN]
    changed = []

    index = ROOT / "index.html"
    if write_if_changed(index, stamp_index(read_text(index), full, short)):
        changed.append("index.html")

    sw = ROOT / "service-worker.js"
    sw_text = re.sub(r'(var CACHE_VERSION\s*=\s*")[^"]*(")',
                     lambda m: m.group(1) + "vanut-" + short + m.group(2), read_text(sw), count=1)
    if write_if_changed(sw, sw_text):
        changed.append("service-worker.js")

    vfile = ROOT / "version.json"
    old = {}
    if vfile.exists():
        try:
            old = json.loads(read_text(vfile))
        except ValueError:
            old = {}
    if old.get("hash") != full:
        info = {
            "hash": full,
            "short": short,
            "files": len(files),
            "builtAt": datetime.datetime.now(datetime.timezone.utc).replace(microsecond=0).isoformat(),
        }
        write_if_changed(vfile, json.dumps(info, indent=2) + "\n")
        changed.append("version.json")

    print("[version] sha256 %s (%d files)" % (full, len(files)))
    print("[version] updated: " + (", ".join(changed) if changed else "nothing (already current)"))
    return 0


if __name__ == "__main__":
    sys.exit(main())
