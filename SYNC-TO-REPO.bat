@echo off
title Local Sync to Repo Folder
color 0B
echo.
echo ============================================================
echo   ANIMAL NUTRITION STUDIO - SYNC TO REPO
echo ============================================================
echo.

set "ROOT=%~dp0"
if "%ROOT:~-1%"=="\" set "ROOT=%ROOT:~0,-1%"
set "SRC=%ROOT%"
set "DEST=%ROOT%\repo"

echo Mirroring project files into repo\ ...
robocopy "%SRC%" "%DEST%" /MIR /XD .git .claude repo tmp /XF SYNC-TO-REPO.bat 1-CLICK-PUSH-TO-GITHUB.bat *.tmp *.bak *.log >nul

color 0A
echo.
echo ============================================================
echo   [SUCCESS] Clean mirror prepared in repo\ folder!
echo ============================================================
echo.
pause
