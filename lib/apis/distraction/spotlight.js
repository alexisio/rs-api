'use strict';

var Promise = require('promise');

function Spotlight() {
    var spotlightRotations = [
        'Pest Control',
        'Soul Wars',
        'Fist of Guthix',
        'Barbarian Assault',
        'Conquest',
        'Fishing Trawler',
        'Great Orb Project',
        'Flash Powder Factory',
        'Castle Wars',
        'Stealing Creation',
        'Cabbage Facepunch Bonanza`',
        'Heist',
        'Mobilising Armies',
        'Barbarian Assault',
        'Conquest',
        'Fist of Guthix',
        'Castle Wars',
        'Pest Control',
        'Soul Wars',
        'Fishing Trawler',
        'Great Orb Project',
        'Flash Powder Factory',
        'Stealing Creation',
        'Cabbage Facepunch Bonanza',
        'Heist',
        'Trouble Brewing',
        'Castle Wars'
    ];

    var minigameAlias = {
        'pc': 'pest control',
        'sw': 'soul wars',
        'fog': 'fist of guthix',
        'ba': 'barbarian assault',
        'con': 'conquest',
        'ft': 'fishing trawler',
        'gop': 'great orb project',
        'cw': 'castle wars',
        'sc': 'stealing creation',
        'cfb': 'cabbage facepunch bonanza',
        'heist': 'heist',
        'ma': 'mobilising armies',
        'tb': 'trouble brewing'
    };

    var readRotations = function () {
        return new Promise(function (resolve, reject) {
            var rotations = [];
            for (var i = 0; i < spotlightRotations.length; i++) {
                var now = new Date();
                var daysToAdd = 3 * i;
                now.setDate(now.getDate() + daysToAdd);

                var currentSpotlight = Math.floor((((Math.floor((now / 1000) / (24 * 60 * 60))) - 49) % (3 * spotlightRotations.length)) / 3);
                var daysUntilNext = (3 - ((Math.floor((now / 1000) / (24 * 60 * 60))) - 49) % (3 * spotlightRotations.length) % 3) + daysToAdd;
                var start = new Date();
                start.setDate(start.getDate() + (daysUntilNext - 3));

                var obj = {
                    rotation: spotlightRotations[currentSpotlight],
                    daysUntilNext: daysUntilNext,
                    startDate: start
                };
                rotations.push(obj);
            }
            resolve(rotations);
        });
    }

    /**
     *
     * @param onDate Set date to lookup
     * @returns {Promise}
     */
    this.getRotation = function (onDate) {
        return new Promise(function (resolve, reject) {
            var rotations = [];
            if (typeof onDate !== 'undefined') {
                var now = new Date(onDate);
                var currentSpotlight = Math.floor((((Math.floor((now / 1000) / (24 * 60 * 60))) - 49) % (3 * spotlightRotations.length)) / 3);
                var daysUntilNext = 3 - ((Math.floor((now / 1000) / (24 * 60 * 60))) - 49) % (3 * spotlightRotations.length) % 3;
                var start = new Date(onDate);
                start.setDate(now.getDate() + daysUntilNext - 3);

                var obj = {
                    rotation: spotlightRotations[currentSpotlight],
                    daysUntilNext: daysUntilNext,
                    startDate: start
                };
                rotations.push(obj);
                resolve(rotations);
                return;
            }

            rotations = readRotations();
            resolve(rotations);
        });
    }

    /**
     * Gets the next time the minigame will be on spotlight
     * @param minigame
     */
    this.getMinigameNext = function (minigame) {
        return new Promise(function (resolve, reject) {
            readRotations().then(function (rotations) {
                rotations.forEach(function(rotation){
                    if (rotation.rotation.toLowerCase() == minigame.toLowerCase()) {
                        resolve(rotation);
                        return;
                    }
                });
            });
        });
    }
}

module.exports = Spotlight;