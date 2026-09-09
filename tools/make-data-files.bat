@echo off
cd /d "%~dp0.."
python tools\make-data-files.py
pause
