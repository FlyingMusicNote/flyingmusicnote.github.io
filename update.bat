:: A bat file that goes into the files of your github website, this file updates the contents of your github repo when you run it
:: #fmn

git init
git add -A
git commit -am "commit"
git branch -M main
:: git remote add origin https://github.com/(user)/(user).github.io.git
git push -u origin main
pause