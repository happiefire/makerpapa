# publish:
# 	git checkout master; git push; git checkout gh-pages; git merge master; git push; git checkout master

jade:
	jade src/jade/*.jade --pretty --out build/; 