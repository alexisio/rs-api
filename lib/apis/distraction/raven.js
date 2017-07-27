'use strict';

var request = require('./../../util/request'),
    Promise = require('promise');

/**
 * Module containing Raven functions
 * @module Raven
 */
function Raven() {

    /**
     * Pull from the rs forums...this can easily break if they stop using the version 4 of the thread
     * http://services.runescape.com/m=forum/forums.ws?75,76,387,65763383
     * @returns {Promise} current viswax
     * @example
     * rsapi.rs.distraction.viswax.getCurrent().then(function(vis) {
     *  console.log(vis);
     * }).catch(console.error);
     */
    this.getCurrent = function() {
        return new Promise(function (resolve, reject) {
            let spawned = false;
            let daysUntilNext = 0;
            let found = (((Math.floor((Date.now() / 1000) / (24 * 60 * 60))) + 7) % 13);

            if (found < 1) {
                daysUntilNext = 1 - found;
                spawned = true;
            }
            else {
                daysUntilNext = 13 - found;
                spawned = false;
            }
            resolve({
                isSpawned: spawned,
                daysUntilNext: daysUntilNext
            });

        });

    }
}

module.exports = Raven;