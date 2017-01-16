'use strict';

var request = require('../util/request'),
    Promise = require('promise'),
    Hiscores = require('./player/hiscores'),
    Events = require('./player/events');

/**
 * Module containing Player functions
 * @module Player
 */
function Player(config) {

    /**
     * Gets a users hiscores and activities (available for `rs` / `osrs`)
     * @param username {String} Display name of the user
     * @param type {String} [Optional] normal, ironman, hardcore/ultimate
     * @returns {Promise} Object of the users hiscores and activities
     * @example
     * // returns Sync's RS stats and activities
     * rsapi.rs.player.hiscores('sync').then(function(stats) {
     *  console.log(stats);
     * }).catch(console.error);
     *
     * // returns Sausage's RS stats and activities from the ironman game type
     * api.rs.hiscores.player('sausage', 'ironman').then(function(stats) {
     *   console.log(stats)
     * }).catch(console.error);
     *
     * // returns Sausage's RS stats and activities from the hardcore ironman game type
     * api.rs.hiscores.player('sausage', 'hardcore').then(function(stats) {
     *   console.log(stats)
     * }).catch(console.error);
     *
     * // returns hey jase's Old School RS stats and activities
     * api.osrs.hiscores.player('hey jase').then(function(stats) {
     *   console.log(stats)
     * }).catch(console.error);
     *
     * // returns lezley's Old School RS stats and activities from the ironman game type
     * api.osrs.hiscores.player('lezley', 'ironman').then(function(stats) {
     *   console.log(stats)
     * }).catch(console.error);
     *
     * // returns perm iron's Old School RS stats and activities from the ultimate ironman game type
     * api.osrs.hiscores.player('perm iron', 'ultimate').then(function(stats) {
     *   console.log(stats)
     * }).catch(console.error);
     */
    this.hiscores = function (username, type) {
        return new Hiscores(username, config.hiscores).lookup(type);
    };

    /**
     * Gets a users events log (aka adventure log) (available for `rs`)
     * @param username {String} Display name of the user
     * @returns {Promise} Object of the users events log
     * @example
     * // returns Sync's events / adventure log
     * rsapi.rs.player.events('sync').then(function(stats) {
     *  console.log(stats);
     * }).catch(console.error);
     */
    this.events = function (username) {
        return new Events(username, config.events).lookup();
    }

    /**
     * Returns the input user(s) clan, title, if the clan is recruiting, and if the title is a suffix
     * @param usernames {string|array} String of a single username or array of multiple to lookup
     * @returns {Promise} Object of the users player details
     * @example
     * rsapi.rs.player.details(['sync','xredfoxx']).then(function(details) {
     *  console.log(details);
     * }).catch(console.error);
     */
    this.details = function (usernames) {
        return new Promise(function (resolve, reject) {
            var names = [];
            if (typeof usernames === 'string') {
                names.push(usernames);
            }
            else if (typeof usernames === 'object') {
                names = usernames;
            }
            else {
                var jsonError = new Error('Unrecognized input for usernames. Should be a string or array.');
                reject(jsonError);
            }
            request.jsonp(config.urls.playerDetails + JSON.stringify(names)).then(resolve).catch(reject);
        });
    }
}

module.exports = Player;