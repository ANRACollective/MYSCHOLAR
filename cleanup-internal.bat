@echo off
:: ============================================================
:: cleanup-internal.bat — one-time security cleanup (P0 #2)
:: Removes internal docs from the PUBLIC repo while keeping
:: every file on your computer. Run this ONCE from the
:: MYSCHOLAR folder, then your normal push.bat from now on.
:: ============================================================

echo.
echo [Cleanup] Clearing any stale git lock...
del .git\index.lock 2>nul

echo.
echo [Cleanup] Untracking internal folders (files stay on disk)...
git rm -r --cached _dev _reports _archive _database _myjourney "myintern/briefs" manamana_tickets_v2.md
git rm --cached internships.html.bak

echo.
echo [Cleanup] Staging the new .gitignore and the admin stub...
git add .gitignore
git add myintern/admin.html

echo.
echo [Cleanup] Committing...
git commit -m "Security: remove internal docs and admin panel from public hosting"

echo.
echo [Cleanup] Pushing to GitHub...
git push origin main

echo.
echo [Cleanup] Done. Internal docs are no longer served publicly.
echo           Your files are all still on your computer.
echo           From now on, just use push.bat as usual.
echo.
pause
