const path = require('path');

exports.GetJsAppProjectDir = (append = '') => {
    const root = path.resolve('.');
    return root + '/' + append;
}

exports.GetCordovaProjectDir = (append = '') => {
    return exports.GetJsAppProjectDir().slice(0, -1) + '-cordova/' + append;
}