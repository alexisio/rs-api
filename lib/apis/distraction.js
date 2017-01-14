'use strict';

var request = require('../util/request'),
    Promise = require('promise'),
    Spotlight = require('./distraction/spotlight');

/**
 * Distraction constructor
 * @constructor
 */
function Distraction() {
    /**
     * <a href="distraction/spotlight">Spotlight functions</a>
     * @type {Spotlight}
     */
    this.spotlight = new Spotlight();
}

module.exports = Distraction;