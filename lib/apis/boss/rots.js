'use strict';

var Promise = require('promise');

function RoTS() {
    var names = {
        A: 'Ahrim',
        D: 'Dharok',
        G: 'Guthan',
        K: 'Karil',
        T: 'Torag',
        V: 'Verac'
    };

    var rotsRotations = [
        [[names.D, names.T, names.V], [names.K, names.A, names.G]],
        [[names.K, names.T, names.G], [names.A, names.D, names.V]],
        [[names.K, names.G, names.V], [names.A, names.T, names.D]],
        [[names.G, names.T, names.V], [names.K, names.A, names.D]],
        [[names.K, names.T, names.V], [names.A, names.G, names.D]],
        [[names.A, names.G, names.D], [names.K, names.T, names.V]],
        [[names.K, names.A, names.D], [names.G, names.T, names.V]],
        [[names.A, names.T, names.D], [names.K, names.G, names.V]],
        [[names.A, names.D, names.V], [names.K, names.T, names.G]],
        [[names.K, names.A, names.G], [names.T, names.D, names.V]],
        [[names.A, names.T, names.G], [names.K, names.D, names.V]],
        [[names.A, names.G, names.V], [names.K, names.T, names.D]],
        [[names.K, names.A, names.T], [names.G, names.D, names.V]],
        [[names.K, names.A, names.V], [names.D, names.T, names.G]],
        [[names.A, names.T, names.V], [names.K, names.D, names.G]],
        [[names.K, names.D, names.G], [names.A, names.T, names.V]],
        [[names.D, names.T, names.G], [names.K, names.A, names.V]],
        [[names.G, names.D, names.V], [names.K, names.A, names.T]],
        [[names.K, names.T, names.D], [names.A, names.G, names.V]],
        [[names.K, names.D, names.V], [names.A, names.T, names.G]]
    ];
    /**
     * Returns RoTS's current and upcoming rotations or RoTS's rotation on a lookup date
     * @param onDate {Date} [Optional] Set date to lookup
     * @returns {Promise} Array of rotation
     */
    this.getRotation = function (onDate) {
        return new Promise(function (resolve, reject) {
            var rotations = [];
            var now = new Date();
            if (typeof onDate !== 'undefined') {
                var today = new Date(onDate);
                var currentRotation = (Math.floor((today / 1000) / (24 * 60 * 60)) % 20);
                var westSide = rotsRotations[currentRotation][0].join(" - ");
                var eastSide = rotsRotations[currentRotation][1].join(" - ");
                var obj = {
                    rotation: {
                        west: westSide,
                        east: eastSide
                    },
                    daysUntilNext: 1,
                    startDate: today
                }
                rotations.push(obj);
                resolve(rotations);
                return;
            }
            for (var i = 0; i < rotsRotations.length; i++) {
                var today = new Date();
                today.setDate(now.getDate() + i);
                var currentRotation = (Math.floor((today / 1000) / (24 * 60 * 60)) % 20);
                var westSide = rotsRotations[currentRotation][0].join(" - ");
                var eastSide = rotsRotations[currentRotation][1].join(" - ");
                var obj = {
                    rotation: {
                        west: westSide,
                        east: eastSide
                    },
                    daysUntilNext: 1,
                    startDate: today
                }
                rotations.push(obj);
            }
            resolve(rotations);
        });
    }
}

module.exports = RoTS;