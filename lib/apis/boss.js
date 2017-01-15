'use strict';

var request = require('../util/request'),
    Promise = require('promise'),
    Araxxor = require('./boss/araxxor'),
    Vorago = require('./boss/vorago'),
    RoTS = require('./boss/rots');

function Boss() {
    /**
     * <a href="boss/araxxor">Araxxor functions</a>
     * @module {Araxxor} Araxxor module
     */
    this.araxxor = new Araxxor();

    /**
     * <a href="boss/rots">RoTS functions</a>
     * @module {RoTS} RoTS module
     */
    this.rots = new RoTS();

    /**
     * <a href="boss/vorago">Vorago functions</a>
     * @module {Vorago} Vorago module
     */
    this.vorago = new Vorago();
}

module.exports = Boss;