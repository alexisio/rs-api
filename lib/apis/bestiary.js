'use strict';

var request = require('../util/request'),
    Promise = require('promise');

/**
 * Bestiary constructor
 * @param config
 * @constructor
 */
function Bestiary(config) {

    /**
     * Gets a beasts information by id
     * @param  id The beasts id
     * @returns {Object}
     */
    this.beast = function (id) {
        return new Promise(function (resolve, reject) {
            request.json(config.urls.beast + id).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of beasts whoes name contains specific terms
     * @param  terms String seperating terms with spaces or an array of terms
     * @returns {Object}
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
     * Gets a list of beasts that start with a specific letter
     * @param  letter The letter to search for
     * @returns {Object}
     */
    this.beastsByFirstLetter = function (letter) {
        return new Promise(function (resolve, reject) {
            request.json(config.urls.beastLetter + letter).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of all possible area names
     * @returns {Object}
     */
    this.areas = function () {
        return new Promise(function (resolve, reject) {
            request.json(config.urls.areas).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of beasts by an area name
     * @param  area The area name to search for
     * @returns {Object}
     */
    this.beastsByArea = function (area) {
        return new Promise(function (resolve, reject) {
            request.json(config.urls.beastArea + encodeURIComponent(area)).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of all possible slayer categories
     * @returns {Object}
     */
    this.slayerCategories = function () {
        return new Promise(function (resolve, reject) {
            request.json(config.urls.slayerCats).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of beasts by a specific slayer category id
     * @param  slayerId A slayer category id
     * @returns {Object}
     */
    this.beastsBySlayer = function (slayerId) {
        return new Promise(function (resolve, reject) {
            request.json(config.urls.beastSlayer + slayerId).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of all possible weaknesses
     * @returns {Object}
     */
    this.weaknesses = function () {
        return new Promise(function (resolve, reject) {
            request.json(config.urls.weaknesses).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of beasts by a specific weekeness id
     * @param weeknessId A weekeness id
     * @returns {Object}
     */
    this.beastsByWeakness = function (weeknessId) {
        return new Promise(function (resolve, reject) {
            request.json(config.urls.beastWeekend + weeknessId).then(resolve).catch(reject);
        });
    };

    /**
     * Gets a list of beasts by the specified level range(200-300)
     * @param  min The minimum level to lookup
     * @param  max The maximum level to lookup
     * @returns {Object}
     */
    this.beastsByLevelRange = function (min, max) {
        return new Promise(function (resolve, reject) {
            request.json(config.urls.beastLevel + min + '-' + max).then(resolve).catch(reject);
        });
    };

}

module.exports = Bestiary;