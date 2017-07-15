'use strict';

var request = require('./../../util/request'),
    Promise = require('promise');

/**
 * Module containing Circus functions
 * @module Circus
 */
function Circus() {
    const LOCATIONS = [
        'Tree Gnome Stronghold',
        'Seers\' Village',
        'Catherby',
        'Taverley',
        'Edgeville',
        'Falador',
        'Rimmington',
        'Draynor Village',
        'Al Kharid',
        'Lumbridge',
        'Lumber Yard',
        'Gertrude\'s House'
    ];

    this.getRotation = function() {
        return new Promise(function (resolve, reject) {
            let locations = [];
            for (var i = 0; i < LOCATIONS.length; i++) {
                var now = new Date();
                var daysToAdd = 7 * i;
                now.setDate(now.getDate() + daysToAdd);
                var currentLocation = Math.floor((((Math.floor((now / 1000) / (24 * 60 * 60))) + 1) % (7 * LOCATIONS.length)) / 7);
                var daysUntilNext = (7 - ((Math.floor((now / 1000) / (24 * 60 * 60))) + 1) % (7 * LOCATIONS.length) % 7) + daysToAdd;

                var start = new Date();
                start.setDate(start.getDate() + (daysUntilNext - 7));

                var obj = {
                    location: LOCATIONS[currentLocation],
                    daysUntilNext: daysUntilNext,
                    startDate: start
                };
                locations.push(obj);
            }

            resolve(locations);
        });

    }
}

module.exports = Circus;