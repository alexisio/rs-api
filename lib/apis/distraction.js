'use strict';

var request = require('../util/request'),
    Promise = require('promise'),
    Spotlight = require('./distraction/spotlight'),
    Warbands = require('./distraction/warbands'),
    Viswax = require('./distraction/viswax'),
    Circus = require('./distraction/circus');

/**
 * Module containing specific distraction and minigame functions including:
 *
 * <a href="distraction/spotlight">Spotlight functions</a>
 *
 * <a href="distraction/viswax">Viswax functions</a>
 *
 * <a href="distraction/warbands">Warbands functions</a>
 * @module Distractions module
 */
function Distraction() {
    this.spotlight = new Spotlight();
    this.warbands = new Warbands();
    this.viswax = new Viswax();
    this.circus = new Circus();
}

module.exports = Distraction;