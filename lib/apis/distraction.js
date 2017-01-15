'use strict';

var request = require('../util/request'),
    Promise = require('promise'),
    Spotlight = require('./distraction/spotlight');

function Distraction() {
    /**
     * <a href="distraction/spotlight">Spotlight functions</a>
     * @module {Spotlight} Minigame Spotlight module
     */
    this.spotlight = new Spotlight();
}

module.exports = Distraction;