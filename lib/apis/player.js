'use strict';

var request = require('../util/request'),
    Promise = require('promise'),
    Hiscores = require('./player/hiscores'),
    Events = require('./player/events');

function Player(config) {

    /**
     * Gets a users hiscores and activities `rs` / `osrs`
     * @param username Display name of the user
     * @param type [Optional] normal, ironman, hardcore/ultimate
     */
    this.hiscores = function(username, type) {
        return new Hiscores(username, config.hiscores).lookup(type);
    };

    /**
     * Gets a users events log (aka adventure log)
     * @param username Display name of the user
     */
    this.events = function(username) {
        return new Events(username, config.events).lookup();
    }
}

module.exports = Player;