'use strict';

var request = require('request'),
    Promise = require('promise'),
    jsonp = require('./jsonp'),
    rssToJson = require('./rss'),
    scrapeIt = require('scrape-it'),
    Twitter = require('twitter'),
    client = new Twitter({
        consumer_key: 'PnQCcW2U1rtW0RTCg3PDChZoW',
        consumer_secret: 'LfH5dAyjK4T37QyLJebKeSyIUXbisF2y1MYJNYmU1PpRK1Bgxs',
        access_token_key: '258860854-X8vnfyfL75jtyN9hGlo3Ra3XfKrU2dCrFJmRB0ZN',
        access_token_secret: '9uHdhirEjUnXx0tg8gs8wCERIfDDWYS4UmLdYL98bGGok'
    }),
    async = require('async'),
    GoogleSpreadsheet = require('google-spreadsheet');

function Request() {
}

Request.prototype.csv = function (url) {
    return new Promise(function (resolve, reject) {
        request({
            url: url
        }, function (error, response, body) {
            if (error) {
                reject(error);
                return;
            }

            if (response.statusCode !== 200) {
                var httpError = new Error('HTTP Code ' + response.statusCode);
                httpError.statusCode = response.statusCode;
                reject(httpError);
                return;
            }

            if (body.length === 0) {
                var bodyError = new Error('RuneScape API returned empty body');
                reject(bodyError);
                return;
            }

            var lines = [];

            body.split('\n').forEach(function (line) {
                if (line.length > 0) {
                    lines.push(line.split(','));
                }
            });

            resolve(lines);
        });
    });
};

Request.prototype.json = function (url) {
    return new Promise(function (resolve, reject) {
        request({
            url: url,
            json: true
        }, function (error, response, json) {
            if (error) {
                reject(error);
                return;
            }

            if (response.statusCode !== 200) {
                var httpError = new Error('HTTP Code ' + response.statusCode);
                httpError.statusCode = response.statusCode;
                reject(httpError);
                return;
            }

            if (typeof json === 'undefined') {
                var jsonError = new Error('RuneScape API returned invalid json');
                reject(jsonError);
                return;
            }

            resolve(json);
        });
    });
};

Request.prototype.jsonp = function(url, cookie) {
    return new Promise(function (resolve, reject) {
        jsonp(url, cookie, 'jsonp', function(json) {
            if (json) {
                resolve(json);
            }
            else {
                var jsonError = new Error('RuneScape API returned invalid json');
                reject(jsonError);
                return;
            }
        });
    });
};

Request.prototype.createSession = function() {
    return new Promise(function (resolve, reject) {
        request.post('https://secure.runescape.com/m=weblogin/login.ws',{form:{username:process.env.username,password:process.env.password,mod:'www',ssl:'0',dest:'community'}}, function(error, response, body) {
            if (error) {
                reject(error);
                return;
            }
            var cookies = response.headers['set-cookie'];
            cookies.forEach(function(cookie) {
                if (cookie.includes('session')) {
                   resolve(cookie);
                }
            });
        });
    });
};

Request.prototype.rss = function (url) {
    return new Promise(function (resolve, reject) {
        var rss = new rssToJson(url);
        resolve(rss);
    });
};

Request.prototype.rscript = function(url) {
    console.log(url);
    return new Promise(function (resolve, reject) {
        request({
            url: url
        }, function (error, response, body) {
            if (error) {
                reject(error);
                return;
            }

            if (response.statusCode !== 200) {
                var httpError = new Error('HTTP Code ' + response.statusCode);
                httpError.statusCode = response.statusCode;
                reject(httpError);
                return;
            }

            if (body.length === 0) {
                var bodyError = new Error('RuneScape API returned empty body');
                reject(bodyError);
                return;
            }

            var lines = [];

            body.split('\n').forEach(function (line) {
                if (line.includes(':') && !line.includes('PHP:')) {
                    lines.push(line.split(' '));
                }
            });

            resolve(lines);
        });
    });
};

Request.prototype.rsforum = function(url) {
    return new Promise(function (resolve, reject) {
        scrapeIt(url, {
            posts: {
                listItem: '.forum-post',
                data: {
                    username: '.post-avatar > .post-avatar__name > .post-avatar__name-link',
                    body: '.forum-post__message-container > .forum-post__message > .forum-post__body',
                    postTime: '.forum-post__message-container > .forum-post__time-below'
                }
            }
        },
        function(err, posts) {
            if (err) {
                reject(error);
                return;
            }
            resolve(posts);
        })
    });
};

/**
 * Get tweets from twitter timeline
 * @param obj {screen_name: 'name', count: 5}
 * @returns {Promise} Tweets
 */
Request.prototype.twitter = function(obj) {
    return new Promise(function (resolve, reject) {
        client.get('statuses/user_timeline', obj, function (error, tweets, response) {
            if (error) {
                reject(error);
                return;
            }
            resolve(tweets);
        });
    });
};

Request.prototype.googleSheet = function(key, sheetIndex) {
    return new Promise(function (resolve, reject) {
        var doc = new GoogleSpreadsheet(key);
        var sheet;
        doc.getInfo(function(err, info) {
            sheet = info.worksheets[sheetIndex];
            if (typeof sheet === 'undefined') {
                var jsonError = new Error('RuneScape API returned invalid json');
                reject(jsonError);
                return;
            }
            resolve(sheet);
        });
    });
};

module.exports = new Request();