'use strict';

var Promise = require('promise');

function Vorago() {
    var rotations = {
        C: {
            normal: 'Ceiling Collapse',
            hard: {
                east: 'Team Split - Green Bomb',
                west: 'Team Split - Vitalis',
                unlock: 'Torso of Omens'
            }
        },
        S: {
            normal: 'Scopulus',
            hard: {
                east: 'Purple Bomb - Team Split',
                west: 'Puple Bomb - Vitalis',
                unlock: 'Helm of Omens'
            }
        },
        V: {
            normal: 'Vitalis',
            hard: {
                east: 'Vitalis - Purple Bomb',
                west: 'Vitalis - Bleeds',
                unlock: 'Legs of Omens'
            }
        },
        G: {
            normal: 'Green Bomb',
            hard: {
                east: 'Green Bomb - Vitalis',
                west: 'Team Split - Purple Bomb',
                unlock: 'Boots of Omens'
            }
        },
        T: {
            normal: 'Team Split',
            hard: {
                east: 'Team Split - Team Split',
                west: 'Team Split - Purpose Bomb',
                unlock: 'Maul of Omens'
            }
        },
        E: {
            normal: 'The End',
            hard: {
                east: 'Purple Bomb - Bleeds',
                west: 'Purple Bomb - Vitalis',
                unlock: 'Gloves of Omens'
            }
        }
    };

    var voragoRotations = [
        rotations.C,
        rotations.S,
        rotations.V,
        rotations.G,
        rotations.T,
        rotations.E
    ];
    /**
     * Returns Vorago's current and upcoming rotations or Vorago's rotation on a lookup date
     * @param onDate {Date} [Optional] Set date to lookup
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
     * @returns {Promise} Array of rotation (includes hardmode info)
     */
    this.getRotation = function (onDate) {
        return new Promise(function (resolve, reject) {
            var rotations = [];
            if (typeof onDate !== 'undefined') {
                var now = new Date(onDate);
                var currentRotation = Math.floor((((Math.floor(Math.floor(now / 1000) / (24 * 60 * 60))) - 6) % (7 * voragoRotations.length)) / 7);
                var daysUntilNext = 7 - ((Math.floor((now / 1000) / (24 * 60 * 60))) - 6) % (7 * voragoRotations.length) % 7;
                var start = new Date(onDate);
                start.setDate(now.getDate() + daysUntilNext - 7);

                var obj = {
                    rotation: voragoRotations[currentRotation],
                    daysUntilNext: daysUntilNext,
                    startDate: start
                }
                rotations.push(obj);
                resolve(rotations);
                return;
            }
            for (var i = 0; i < voragoRotations.length; i++) {
                var now = new Date();
                var daysToAdd = 7 * i;
                now.setDate(now.getDate() + daysToAdd);
                var currentRotation = Math.floor((((Math.floor(Math.floor(now / 1000) / (24 * 60 * 60))) - 6) % (7 * voragoRotations.length)) / 7);
                var daysUntilNext = (7 - ((Math.floor((now / 1000) / (24 * 60 * 60))) - 6) % (7 * voragoRotations.length) % 7) + daysToAdd;
                var start = new Date();
                start.setDate(start.getDate() + (daysUntilNext - 7));

                var obj = {
                    rotation: voragoRotations[currentRotation],
                    daysUntilNext: daysUntilNext,
                    startDate: start
                }
                rotations.push(obj);
            }
            resolve(rotations);
        });
    }
}

module.exports = Vorago;