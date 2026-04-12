@echo off
:: ============================================================
:: push.bat — MyScholar one-command deploy script
:: Run this from the MYSCHOLAR folder after Claude makes edits
:: ============================================================

echo.
echo [MyScholar] Checking file integrity before push...
echo.

:: Safety check: verify initData() is present in index.html
findstr /c:"initData(" index.html >nul 2>&1
if errorlevel 1 (
    echo [ERROR] initData^(^) not found in index.html!
    echo         Something may be corrupted. DO NOT push.
    echo         Check the file before continuing.
    pause
    exit /b 1
)
echo [OK] index.html integrity check passed.

:: Safety check: verify internships.html exists and is not empty
if not exist internships.html (
    echo [ERROR] internships.html not found!
    pause
    exit /b 1
)
echo [OK] internships.html exists.

echo.
echo [MyScholar] Staging all changes...
git add .

echo.
:: Auto-generate a commit message with today's date and time
for /f "tokens=1-3 delims=/ " %%a in ('date /t') do set TODAY=%%c-%%b-%%a
for /f "tokens=1-2 delims=: " %%a in ('time /t') do set NOW=%%a:%%b
set COMMIT_MSG=Update %TODAY% %NOW%

echo [MyScholar] Committing: "%COMMIT_MSG%"
git commit -m "%COMMIT_MSG%"

echo.
echo [MyScholar] Pushing to GitHub...
git push origin main

echo.
echo [MyScholar] Done. Changes are live on GitHub Pages.
echo             Allow 1-2 minutes for GitHub Pages to rebuild.
echo.
pause
