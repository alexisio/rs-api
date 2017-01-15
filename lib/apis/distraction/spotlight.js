'use strict';

var Promise = require('promise');

/**
 * Module containing Spotlight functions
 * @module Spotlight
 */
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

    /**
     * @constant {String} Minigame
     */
    this.PEST_CONTROL = 'pest control';

    /**
     * @constant {String} Minigame
     */
    this.SOUL_WARS = 'soul wars';

    /**
     * @constant {String} Minigame
     */
    this.FIST_OF_GUTHIX = 'fist of guthix';

    /**
     * @constant {String} Minigame
     */
    this.BARBARIAN_ASSAULT = 'barbarian assault';

    /**
     * @constant {String} Minigame
     */
    this.CONQUEST = 'conquest';

    /**
     * @constant {String} Minigame
     */
    this.FISHING_TRAWLER = 'fishing trawler';

    /**
     * @constant {String} Minigame
     */
    this.GREAT_ORB_PROJECT = 'great orb project';

    /**
     * @constant {String} Minigame
     */
    this.CASTLE_WARS = 'castle wars';

    /**
     * @constant {String} Minigame
     */
    this.STEALING_CREATION = 'stealing creation';

    /**
     * @constant {String} Minigame
     */
    this.CABBAGE_FACEPUNCH_BONANZA = 'cabbage facepunch bonanza';

    /**
     * @constant {String} Minigame
     */
    this.HEIST = 'heist';

    /**
     * @constant {String} Minigame
     */
    this.MOBILISING_ARMIES = 'mobilising armies';

    /**
     * @constant {String} Minigame
     */
    this.TROUBLE_BREWING = 'trouble brewing';

    //Gets upcoming rotations
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
     * Returns spotlight's current and upcoming rotations or the spotlight on a lookup date (available for `rs`)
     * @param onDate {Date} [Optional] Set date to lookup
     * @example
     * // lookup upcoming minigame spotlight order (presorted in order)
     * api.rs.distraction.spotlight.getRotation().then(function(spotlight) {
     *  console.log(spotlight);
     * }).catch(console.error);
     *
     * // lookup the minigame on spotlight for provided date
     * api.rs.distraction.spotlight.getRotation('02/03/2017').then(function(spotlight) {
     *  console.log(spotlight);
     * }).catch(console.error);
     * @returns {Promise} Array of rotation
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
     * Gets the next time the minigame will be on spotlight (available for `rs`)
     * @param minigame {String} Mainigame to lookup
     * @example
     * // lookup the next time Barb Assault is on spotlight
     * var spotlight = api.rs.distraction.spotlight;
     * spotlight.getMinigameNext(spotlight.BARBARIAN_ASSAULT).then(function(minigame) {
     *  console.log(minigame);
     * }).catch(console.error);
     * @returns {Promise} Object of minigame information
     */
    this.getMinigameNext = function (minigame) {
        return new Promise(function (resolve, reject) {
            readRotations().then(function (rotations) {
                rotations.forEach(function (rotation) {
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