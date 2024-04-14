build-app:
	npm run build
	node auto-build-app/prepare-to-cordova.js
	node auto-build-app/copy-to-cordova-project.js
	node auto-build-app/build-android-app.js
	node auto-build-app/move-android-app