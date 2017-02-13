'use strict';

var request = require('../util/request'),
    Promise = require('promise');

/**
 * Module containing to retrieve RS News
 * @module News
 */
function News(config) {
    this.getRecent = function() {
        return new Promise(function(resolve, reject) {
            request.rss(config.urls.rss).then(function(data) {
                resolve(data);
            }).catch(reject);
        });
    }
}
module.exports = News;