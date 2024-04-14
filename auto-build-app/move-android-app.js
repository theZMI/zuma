const fs = require('fs');
const { GetJsAppProjectDir, GetCordovaProjectDir } = require("./_helpers");

const appDestination = GetJsAppProjectDir('dist-apps/');
const config = JSON.parse(fs.readFileSync(GetJsAppProjectDir('package.json'), 'utf-8'));

function CopyAndroidApp() {
    if (!fs.existsSync(appDestination)){
        fs.mkdirSync(appDestination);
    }

    fs.cpSync(
        GetCordovaProjectDir('platforms/android/app/build/outputs/apk/debug/app-debug.apk'),
        appDestination + config.version + '.apk',
    );
}

CopyAndroidApp();
console.log(`copy android app to ${appDestination}: DONE`);