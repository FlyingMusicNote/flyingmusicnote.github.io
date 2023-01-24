:: A bat file that goes into the files of your github website, this file updates the contents of your github repo when you run it
:: #fmn

git add .
git commit -m "commit" 
git remote add origin https://github.com/flyingmusicnote/flyingmusicnote.github.io.git
git push -u origin main
git status
pause