# Student GitHub Guide — Animal Nutrition Studio

This guide explains how to push updates to GitHub and keep your live study companion website running smoothly.

---

## 🌟 The Daily 1-Click Workflow

You do **NOT** need to use the terminal or memorize git commands.

Whenever you finish adding lessons, quiz questions, or notes:
1. Double-click **`1-CLICK-PUSH-TO-GITHUB.bat`** in the project folder.
2. The script will automatically:
   - Synchronize your latest changes into the pristine `repo/` mirror.
   - Stage all modified files.
   - Create a timestamped commit.
   - Push to `origin main` at GitHub.
3. Your live site will automatically update within 1–2 minutes!

---

## 📦 What is the `repo/` Folder?

The `repo/` directory is an exact, pristine mirror of your root application.
It contains only the website files (`assets/`, `data/`, `images/`, `js/`, `tools/`, `index.html`, `manifest.json`, `service-worker.js`), stripped of local temp files or hidden metadata.

Use `repo/` when:
- Uploading files via GitHub web interface drag-and-drop.
- Sharing the website with friends or professors on a USB drive.

---

## 🔄 Automatic Updates (No Cache Bumping Needed)

`1-CLICK-PUSH-TO-GITHUB.bat` runs `tools/build_version.py` first. It writes `version.json`, which is a SHA-256 of all site files, and stamps `?v=<hash>` into `index.html` and `service-worker.js`.
Open copies of the site check `version.json` every 2 minutes and on focus or reconnect. On a new release they reload once and keep all saved progress.
Do **not** edit `CACHE_VERSION` by hand.
