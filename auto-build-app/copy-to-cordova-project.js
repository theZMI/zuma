const fs = require('fs');
const { GetCordovaProjectDir, GetJsAppProjectDir } = require("./_helpers");

function ClearCordovaProject() {
    fs.rmSync(
        GetCordovaProjectDir('www/'),
        { recursive: true }
    );
}

function CopyJsAppToCordovaProject() {
    fs.cpSync(
        GetJsAppProjectDir('dist/'),
        GetCordovaProjectDir('www/'),
        { recursive: true }
    );
}

ClearCordovaProject();
CopyJsAppToCordovaProject();
console.log('js app copy into cordova project: DONE');