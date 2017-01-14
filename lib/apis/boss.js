'use strict';

var request = require('../util/request'),
    Promise = require('promise'),
    Araxxor = require('./boss/araxxor'),
    Vorago = require('./boss/vorago'),
    RoTS = require('./boss/rots');

/**
 * Boss constructor
 * @constructor
 */
function Boss() {
    /**
     * <a href="boss/araxxor">Araxxor functions</a>
     * @type {Araxxor}
     */
    this.araxxor = new Araxxor();

    /**
     * <a href="boss/rots">RoTS functions</a>
     * @type {RoTS}
     */
    this.rots = new RoTS();

    /**
     * <a href="boss/vorago">Vorago functions</a>
     * @type {Vorago}
     */
    this.vorago = new Vorago();
}

module.exports = Boss;