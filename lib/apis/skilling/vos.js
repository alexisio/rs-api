'use strict';

var request = require('./../../util/request'),
    Promise = require('promise');

function VoS() {
    /**
     * Get Voice of Seren
     * @returns {Promise} Object with the current Voice of Seren
     * @example
     * rsapi.rs.skilling.vos.getCurrent().then(function(vos) {
     *  console.log(vos);
     * }).catch(console.error);
     */
    this.getCurrent = function() {
        return new Promise(function(resolve, reject) {
            request.twitter({screen_name: 'jagexclock', count: 5}).then(function(tweets) {
                tweets.forEach(function(tweet) {
                    if (tweet.text.includes('Voice of Seren')) {
                        var vos = {
                            vos: tweet.text
                        };
                        resolve(vos);
                        return;
                    }
                });
            }).catch(reject);
        });
    };
}

module.exports = VoS;