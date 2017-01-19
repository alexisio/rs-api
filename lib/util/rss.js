var feed = require('rss-to-json'),
    Promise = require('promise');

function RSS(url) {
    return new Promise(function (resolve, reject) {
        feed.load(url, function (error, rss) {
            if (error) {
                reject(error);
                return;
            }
            rss.generated = new Date();
            resolve(rss);
        });
    });
}

module.exports = RSS;
