@echo off
cd /d "%~dp0.."
start "Animal Nutrition Studio" http://localhost:5178/index.html#/
node tools\local-server.js 5178
