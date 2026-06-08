@echo off
setlocal
:: ============================================================
:: secure-reset.bat — ONE-TIME public-repo history purge (P0)
::
:: Collapses the ENTIRE repo to a single clean commit containing
:: only your current, non-internal files. Removes all old
:: versions of internal docs AND the old admin password from
:: GitHub history.
::
:: Run this ONCE from the MYSCHOLAR folder, INSTEAD of
:: cleanup-internal.bat. After this, use push.bat as normal.
::
:: Your files on disk are NOT touched. Only git history changes.
:: ============================================================

echo.
echo ============================================================
echo  SECURE RESET - this rewrites your public GitHub history.
echo  Your local files are safe. Past commit history is replaced
echo  with one clean commit. This cannot be undone on GitHub.
echo ============================================================
echo.

:: ---- Safety gate 1: confirm we are in the right folder ----
if not exist scholarships.html (
  echo [ABORT] scholarships.html not found. Run this from the MYSCHOLAR folder.
  pause & exit /b 1
)

:: ---- Safety gate 2: file-integrity check (byte-corruption guard) ----
echo [Check] Verifying scholarships.html integrity...
findstr /c:"initData(" scholarships.html >nul 2>&1
if errorlevel 1 (
  echo [ABORT] initData^(^) missing from scholarships.html - file may be corrupted.
  echo         Fix the file BEFORE running this. Nothing has been changed.
  pause & exit /b 1
)
if not exist internships.html ( echo [ABORT] internships.html missing. & pause & exit /b 1 )
if not exist journey.html ( echo [ABORT] journey.html missing. & pause & exit /b 1 )
if not exist .gitignore ( echo [ABORT] .gitignore missing - re-run setup first. & pause & exit /b 1 )
if not exist CNAME ( echo [ABORT] CNAME missing - custom domain would break. & pause & exit /b 1 )
echo [OK] Core files present and integrity check passed.

echo.
echo Last chance to abort. Close this window now to cancel,
echo or press any key to rewrite history and force-push.
pause >nul

:: ---- Clear any stale lock ----
del .git\index.lock 2>nul

:: ---- Build a clean single-commit history ----
echo.
echo [Reset] Creating fresh orphan branch...
git checkout --orphan _clean
if errorlevel 1 ( echo [ABORT] Could not create orphan branch. & pause & exit /b 1 )

echo [Reset] Unstaging everything, then re-adding (respects .gitignore)...
git rm -r --cached . >nul 2>&1
git add -A

echo [Reset] Committing clean snapshot...
git commit -m "MyScholar clean snapshot (security history reset, June 2026)"
if errorlevel 1 ( echo [ABORT] Commit failed. & pause & exit /b 1 )

echo [Reset] Replacing main with the clean branch...
git branch -D main
git branch -m main

echo [Reset] Force-pushing to GitHub...
git push -f origin main
if errorlevel 1 (
  echo [ERROR] Force-push failed. Your local repo is clean, but GitHub
  echo         was not updated. Check your connection/credentials and
  echo         run:  git push -f origin main
  pause & exit /b 1
)

echo.
echo ============================================================
echo  DONE. GitHub now has a single clean commit.
echo  Old internal docs and the old admin password are gone
echo  from history. GitHub Pages will rebuild in 1-2 minutes.
echo  From now on, just use push.bat as usual.
echo ============================================================
echo.
pause
endlocal
