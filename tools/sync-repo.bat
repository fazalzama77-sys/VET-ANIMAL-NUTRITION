@echo off
set "ROOT=%~dp0.."
set "SRC=%ROOT%"
set "DEST=%ROOT%\repo"
robocopy "%SRC%" "%DEST%" /MIR /XD .git .claude repo tmp /XF SYNC-TO-REPO.bat 1-CLICK-PUSH-TO-GITHUB.bat *.tmp *.bak *.log >nul
echo Synced to repo/ folder.
