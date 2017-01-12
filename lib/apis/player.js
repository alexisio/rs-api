'use strict';

var request = require('../util/request'),
    Promise = require('promise'),
    Hiscores = require('./player/hiscores'),
    Events = require('./player/events');

function Player(config) {
    this.hiscores = function(username, type) {
        return new Hiscores(username, config.hiscores).lookup(type);
    };

    this.events = function(username) {
        return new Events(username, config.events).lookup();
    }
}

module.exports = Player;