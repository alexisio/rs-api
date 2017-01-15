'use strict';

var request = require('../util/request'),
    Promise = require('promise'),
    Spotlight = require('./distraction/spotlight');

/**
 * Module containing specific distraction and minigame functions including:
 *
 * <a href="distraction/spotlight">Spotlight functions</a>
 * @module Distractions module
 */
function Distraction() {
    this.spotlight = new Spotlight();
}

module.exports = Distraction;