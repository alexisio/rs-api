'use strict';

var request = require('../util/request'),
    Promise = require('promise'),
    Araxxor = require('./boss/araxxor'),
    Vorago = require('./boss/vorago'),
    RoTS = require('./boss/rots');

function Boss() {
    this.araxxor = new Araxxor();
    this.rots = new RoTS();
    this.vorago = new Vorago();
}

module.exports = Boss;