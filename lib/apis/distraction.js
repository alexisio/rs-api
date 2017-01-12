'use strict';

var request = require('../util/request'),
    Promise = require('promise'),
    Spotlight = require('./distraction/spotlight');

function Distraction() {
    this.spotlight = new Spotlight();
}

module.exports = Distraction;