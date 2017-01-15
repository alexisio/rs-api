'use strict';

var request = require('../util/request'),
    Promise = require('promise');

/**
 * Module containing Bestiary functions
 * @module Bestiary
 */
function Bestiary(config) {

    /**
     * Gets a beasts information by id (available for `rs`)
     * @param  id {Number} The beasts id
     * @example
     * // returns the beast information for beast id = 49
     * api.rs.bestiary.beast(49).then(function(beast) {
     *  console.log(beast);
     * }).catch(console.error);
     * @returns {Object} Beast information
     */
    this.beast = function (id) {
        return new Promise(function (resolve, reject) {
            request.json(config.urls.beast + id).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of beasts whose name contains specific terms (available for `rs`)
     * @param  terms {String} seperating terms with spaces or an array of terms
     * @example
     * // returns list of beasts related to the term cow sheep
     * api.rs.bestiary.beastsByTerms('cow sheep').then(function(beasts) {
     *  console.log(beasts);
     * }).catch(console.error);
     * @returns {Object} List of beasts
     */
    this.beastsByTerms = function (terms) {
        if (terms.constructor === Array) {
            terms = terms.join(' ');
        }

        return new Promise(function (resolve, reject) {
            request.json(config.urls.beastTerm + encodeURIComponent(terms)).then(resolve).catch(reject);
        });
    };

    /**
     * Alias of beastByTerms
     */
    this.beastsByTerm = this.beastsByTerms;

    /**
     * Gets a list of beasts that start with a specific letter (available for `rs`)
     * @param  letter {String} The letter to search for
     * @example
     * // returns list of beasts who's first letter is A
     * api.rs.bestiary.beastsByFirstLetter('A').then(function(beasts) {
     *  console.log(beasts);
     * }).catch(console.error);
     * @returns {Object} List of beasts that start with a specific letter
     */
    this.beastsByFirstLetter = function (letter) {
        return new Promise(function (resolve, reject) {
            request.json(config.urls.beastLetter + letter).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of all possible area names (available for `rs`)
     * @example
     * // returns list of area names
     * api.rs.bestiary.areas().then(function(areas) {
     *  console.log(areas);
     * }).catch(console.error);
     * @returns {Object} List of area names
     */
    this.areas = function () {
        return new Promise(function (resolve, reject) {
            request.json(config.urls.areas).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of beasts by an area name (available for `rs`)
     * @param  area {String} The area name to search for
     * @example
     * // returns list of beasts in the shadow dungeon
     * api.rs.bestiary.beastsByArea('Shadow Dungeon').then(function(beasts) {
     *  console.log(beasts);
     * }).catch(console.error);
     * @returns {Object} Beasts located in a specific area
     */
    this.beastsByArea = function (area) {
        return new Promise(function (resolve, reject) {
            request.json(config.urls.beastArea + encodeURIComponent(area)).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of all possible slayer categories (available for `rs`)
     * @example
     * // returns list of slayer categories
     * api.rs.bestiary.slayerCategories().then(function(categories) {
     *  console.log(categories);
     * }).catch(console.error);
     * @returns {Object} Slayer categories
     */
    this.slayerCategories = function () {
        return new Promise(function (resolve, reject) {
            request.json(config.urls.slayerCats).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of beasts by a specific slayer category id (available for `rs`)
     * @param  slayerId {Number} A slayer category id
     * @example
     * // returns list of beasts by specific slayer category id
     * api.rs.bestiary.beastsBySlayer(42).then(function(beasts) {
     *  console.log(beasts);
     *}).catch(console.error);
     * @returns {Object} List of beats in a slayer category
     */
    this.beastsBySlayer = function (slayerId) {
        return new Promise(function (resolve, reject) {
            request.json(config.urls.beastSlayer + slayerId).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of all possible weaknesses (available for `rs`)
     * @example
     * // returns list of all weaknesses
     * api.rs.bestiary.weaknesses().then(function(weaknesses) {
     *  console.log(weaknesses);
     * }).catch(console.error);
     * @returns {Object} List of possible weaknesses
     */
    this.weaknesses = function () {
        return new Promise(function (resolve, reject) {
            request.json(config.urls.weaknesses).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of beasts by a specific weekeness id (available for `rs`)
     * @param weeknessId {Number} A weekeness id
     * @example
     * // returns list of beasts weak to weakness of id 10
     * api.rs.bestiary.beastsByWeakness(10).then(function(beasts) {
     *  console.log(beasts);
     * }).catch(console.error);
     * @returns {Object} List of beasts weak to specific weakness
     */
    this.beastsByWeakness = function (weeknessId) {
        return new Promise(function (resolve, reject) {
            request.json(config.urls.beastWeekend + weeknessId).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of beasts by the specified level range(200-300) (available for `rs`)
     * @param  min {Number} The minimum level to lookup
     * @param  max {Number} The maximum level to lookup
     * @returns {Object} List of beasts in a specific level range
     * @example
     * // beasts of a level range between 200 and 300
     * api.rs.bestiary.beastsByLevelRange(200, 300).then(function(beasts) {
     *  console.log(beasts);
     * }).catch(console.error);
     */
    this.beastsByLevelRange = function (min, max) {
        return new Promise(function (resolve, reject) {
            request.json(config.urls.beastLevel + min + '-' + max).then(resolve).catch(reject);
        });
    };

}

module.exports = Bestiary;