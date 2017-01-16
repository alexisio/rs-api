'use strict';

var request = require('./../../util/request'),
    Promise = require('promise');

/**
 * Module containing Warbands functions
 * @module Warbands
 */
function Viswax() {

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
            request.rsforum('http://services.runescape.com/m=forum/forums.ws?75,76,387,65763383').then(function(posts) {
                var sugar = posts.posts.filter(function(post) { return post.username == 'SugarsTiamat';});
                var money = sugar[0].body;
                var update = sugar[0].postTime;
                var editIndex = update.indexOf('Last edited on');
                var slot1Index = money.indexOf('Slot 1:');
                var slot2Index = money.indexOf('Slot 2:');
                var slot3Index = money.indexOf('Slot # 3:');
                if (slot3Index <= 1) {
                    // fail safe incase Sugar starts removing the # in Slot # 3
                    slot3Index = money.indexOf('Slot 3:');
                }
                var lastUpdate = update.substring(editIndex, update.length);
                var slot1 = money.substring(slot1Index + 7, slot2Index).trim().replace(/-/g,'').trim().replace(/ *\([^)]*\)*/g, '').trim();
                var slot2 = money.substring(slot2Index + 7, slot3Index).trim().replace(/-/g,'').trim().replace(/ *\([^)]*\)*/g, '').trim();
                var obj = {
                    slot1: slot1,
                    slot2: slot2,
                    lastUpdate: lastUpdate
                };
                resolve(obj);
            }).catch(reject);
        });

    }
}

module.exports = Viswax;