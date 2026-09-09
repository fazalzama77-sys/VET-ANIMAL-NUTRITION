@echo off
title 1-Click Upload to GitHub
color 0B
echo.
echo ============================================================
echo   ANIMAL NUTRITION STUDIO - 1-CLICK GITHUB UPLOADER
echo ============================================================
echo.

set "ROOT=%~dp0"
if "%ROOT:~-1%"=="\" set "ROOT=%ROOT:~0,-1%"
set "SRC=%ROOT%"
set "DEST=%ROOT%\repo"

echo [1/3] Synchronizing 'repo' folder...
robocopy "%SRC%" "%DEST%" /MIR /XD .git .claude repo tmp /XF SYNC-TO-REPO.bat 1-CLICK-PUSH-TO-GITHUB.bat *.tmp *.bak *.log >nul

if not exist "%ROOT%\.git" (
    color 0E
    echo.
    echo [INFO] Git repository is not initialized here yet.
    echo The pristine upload mirror has been prepared in the 'repo\' folder.
    echo When you add this folder to GitHub Desktop or run 'git init', this script will auto-push.
    echo.
    echo Location: %DEST%
    pause
    exit /b 0
)

echo [2/3] Checking for modified files...
cd /d "%ROOT%"
git add -A

git diff-index --quiet HEAD --
if %ERRORLEVEL% EQU 0 (
    echo No local changes to commit. Proceeding to sync with remote...
) else (
    echo Saving updates to local Git...
    git commit -m "Update Animal Nutrition Studio content (%date% %time%)"
)

echo [3/3] Uploading to GitHub...
git push origin main

if %ERRORLEVEL% EQU 0 (
    color 0A
    echo.
    echo ============================================================
    echo   [SUCCESS] ALL CHANGES UPLOADED TO GITHUB!
    echo   Your website will update automatically in 1-2 minutes.
    echo ============================================================
) else (
    color 0C
    echo.
    echo ============================================================
    echo   [NOTICE] Upload encountered an issue. Check internet or Git.
    echo ============================================================
)

echo.
echo Press any key to close this window...
pause >nul
