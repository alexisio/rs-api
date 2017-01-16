'use strict';

var request = require('../util/request'),
    Promise = require('promise'),
    VoS = require('./skilling/vos'),
    Portables = require('./skilling/portables');

/**
 * Module containing specific distraction and minigame functions including:
 *
 * <a href="skilling/vos">Voice of Seren functions</a>
 *
 * <a href="skilling/portables">Portables functions</a>
 * @module Skilling module
 */
function Skilling() {
    this.vos = new VoS();
    this.portables = new Portables();
}

module.exports = Skilling;