'use strict';

var request = require('../util/request'),
    Promise = require('promise'),
    Araxxor = require('./boss/araxxor'),
    Vorago = require('./boss/vorago'),
    RoTS = require('./boss/rots');

/**
 * Module containing specific boss functions including:
 *
 * <a href="boss/araxxor">Araxxor functions</a>
 *
 * <a href="boss/rots">RoTS functions</a>
 *
 * <a href="boss/vorago">Vorago functions</a>
 * @module Bosses module
 */
function Boss() {

    this.araxxor = new Araxxor();

    this.rots = new RoTS();

    this.vorago = new Vorago();
}

module.exports = Boss;