var feed = require('rss-to-json'),
    Promise = require('promise');

function RSS(url) {
    return new Promise(function (resolve, reject) {
        var json = feed.load(url, function (error, rss) {
            if (error) {
                reject(error);
                return;
            }
            rss.generated = new Date();
            resolve(rss);
        });
        if (typeof json === 'undefined') {
            var jsonError = new Error('RuneScape API returned invalid json');
            reject(jsonError);
            return;
        }
    });
}

module.exports = RSS;
