'use strict';

var Promise = require('promise');

/**
 * Module containing Araxxor functions
 * @module Araxxor
 */
function Araxxor() {
    /**
     * Returns araxxor's current and upcoming rotations or araxxor's rotation on a lookup date (available for `rs`)
     * @param onDate {Date} [Optional] Set date to lookup (MM/dd/YYYY)
     * @example
     * // lookup upcoming rotation order (presorted in order)
     * api.rs.boss.araxxor.getRotation().then(function(rotation) {
     *  console.log(rotation);
     * }).catch(console.error);
     *
     * // lookup the rotation for provided date
     * api.rs.boss.araxxor.getRotation('02/03/2017').then(function(rotation) {
     *  console.log(rotation);
     * }).catch(console.error);
     * @returns {Promise} Array of rotation
     */
    this.getRotation = function (onDate) {
        return new Promise(function (resolve, reject) {
            var paths = {
                top: {
                    location: 'top',
                    number: Number(1),
                    characteristic: 'Minions'
                },
                middle: {
                    location: 'middle',
                    number: Number(2),
                    characteristic: 'Acid'
                },
                bottom: {
                    location: 'bottom',
                    number: Number(3),
                    characteristic: 'Darkness'
                }
            }
            var araxxorRotations = [
                paths.top,
                paths.middle,
                paths.bottom
            ];
            var rotations = [];
            if (typeof onDate !== 'undefined') {
                var now = new Date(onDate);
                var currentRotation = Math.floor((((Math.floor(Math.floor(now / 1000) / (24 * 60 * 60))) + 3) % (4 * araxxorRotations.length)) / 4);
                var daysUntilNext = 4 - ((Math.floor((now / 1000) / (24 * 60 * 60))) + 3) % (4 * araxxorRotations.length) % 4;
                var start = new Date(onDate);
                start.setDate(start.getDate() - (4 - daysUntilNext));
                var closed = araxxorRotations[currentRotation];
                var open = araxxorRotations.filter(function(rotation) {
                    return rotation != araxxorRotations[currentRotation];
                });

                var obj = {
                    rotation: {
                        open: open,
                        closed: closed
                    },
                    daysUntilNext: daysUntilNext,
                    startDate: start
                };
                rotations.push(obj);
                resolve(rotations);
                return;
            }

            for (var i = 0; i < araxxorRotations.length; i++) {
                var now = new Date();
                var daysToAdd = 4 * i;
                now.setDate(now.getDate() + daysToAdd);

                var currentRotation = Math.floor((((Math.floor(Math.floor(now / 1000) / (24 * 60 * 60))) + 3) % (4 * araxxorRotations.length)) / 4);
                var daysUntilNext = (4 - ((Math.floor((Date.now() / 1000) / (24 * 60 * 60))) + 3) % (4 * araxxorRotations.length) % 4) + daysToAdd;

                var start = new Date();
                start.setDate(start.getDate() + (daysUntilNext - 4));

                var closed = araxxorRotations[currentRotation];
                var open = araxxorRotations.filter(function(rotation) {
                    return rotation != araxxorRotations[currentRotation];
                });

                var obj = {
                    rotation: {
                        open: open,
                        closed: closed
                    },
                    daysUntilNext: daysUntilNext,
                    startDate: start
                };
                rotations.push(obj);
            }
            resolve(rotations);
        });
    }
}

module.exports = Araxxor;