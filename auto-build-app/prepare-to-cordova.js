const fs = require('fs');

function PrepareHtml() {
    const file = './dist/index.html';
    let data = fs.readFileSync(file, 'utf-8');

    const addMetaTag = data => {
        const metaTag = `<meta http-equiv="Content-Security-Policy" content="default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';" />`;
        return data.replace('</head>', `${metaTag}</head>`);
    }
    const addCordovaJs = data => {
        const src = '<script src="cordova.js"></script>';
        return data.replace('</body>', `${src}</body>`);
    }
    const allLinksToRelative = data => {
        const replaces = {
            'href="/': 'href="',
            'src="/': 'src="',
        };
        for (let k in replaces) {
            const v = replaces[k];
            data = data.replaceAll(k, v);
        }
        return data;
    }

    data = addMetaTag(data);
    data = addCordovaJs(data);
    data = allLinksToRelative(data);

    fs.writeFileSync(file, data, 'utf-8');
}

function PrepareCss() {
    const path = './dist/css/';
    const files = fs.readdirSync(path);
    for (const file of files) {
        let data = fs.readFileSync(path+file, 'utf-8');
        data = data.replaceAll('url(/', 'url(');
        fs.writeFileSync(path+file, data, 'utf-8');
    }
}

PrepareHtml();
PrepareCss();
console.log('prepare js app to cordova: DONE');