cd ../docs
git init
git add .
git commit -m deploy
git push -f git@github.com:wind1996/r-components.git master:gh-pages
