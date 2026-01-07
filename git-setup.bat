@echo off
REM Git Setup Script für nilsgerberwebseite

REM Configure git author
git config user.name "Nils Gerber"
git config user.email "justnils@users.noreply.github.com"

echo # nilsgerberwebseite > README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/justnils/nilsgerberwebseite.git
git push -u origin main



