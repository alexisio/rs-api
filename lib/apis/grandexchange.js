'use strict';

var request = require('../util/request'),
    Promise = require('promise');

/**
 * Module containing Grand Exchange functions
 * @module Grand Exchange
 */
function GrandExchange(config) {
    // Read the RScript data and put it into an item array
    var readRscriptData = function (data) {
        var items = [];
        data.forEach(function (d, i) {
            if (d.includes('ITEM:') && d.length > 3) {
                var iid = data[i + 1];
                var item = {
                    item: {
                        id: Number(iid[1].trim()),
                        name: d[2].replace(/_/g, ' '),
                        price: d[3],
                        change: d[4]
                    }
                };
                items.push(item);
            }
        });        
        return items;
    }

    /**
     * Returns an object containing the number of items in the category for each starting letter (available for `rs` / `osrs`)
     * @param  key {String|Number} The category id or name
     * @example
     * // returns items object for the Miscellaneous category
     * rsapi.rs.ge.category('Miscellaneous').then(function(category) {
     *  console.log(category);
     * }).catch(console.error);
     * @returns {Object} Items in the category
     */
    this.category = function (key) {
        var id;

        if (typeof key === 'string') {
            id = typeof key === 'string' ? config.categories.indexOf(key) : key;
        }

        return new Promise(function (resolve, reject) {
            request.json(config.urls.category + id).then(resolve).catch(reject);
        });
    };

    /**
     * Gets items in a category starting with a specific prefix (available for `rs` / `osrs`)
     * @param  key {String|Number} The category id or name
     * @param  prefix {String} An item's prefix
     * @param  page {Number} Page number
     * @example
     * // returns items object for items starting with A
     * rsapi.rs.ge.categoryPrices(0, 'a', 1).then(function(category) {
     *  console.log(category);
     * }).catch(console.error);
     * @returns {Object} Items starting with a specific prefix
     */
    this.categoryPrices = function (key, prefix, page) {
        var id;

        if (typeof key === 'string') {
            id = typeof key === 'string' ? config.categories.indexOf(key) : key;
        }

        return new Promise(function (resolve, reject) {
            request.json(config.urls.categoryPrice + 'category=' + key + '&alpha=' + prefix + '&page=' + page).then(resolve).catch(reject);
        });
    };

    /**
     * Gets the graph price information for each day for 180 days (available for `rs` / `osrs`)
     * @param  item {Number} An item id
     * @example
     * // returns items object for items starting with A
     * rsapi.rs.ge.categoryPrices(0, 'a', 1).then(function(category) {
     *  console.log(category);
     * }).catch(console.error);
     * @returns {Object} Graph price information over the last 180 days
     */
    this.graphData = function (item) {
        return new Promise(function (resolve, reject) {
            request.json(config.urls.graph + item + '.json').then(resolve).catch(reject);
        });
    };

    /**
     * Get an items current price, its price trend over 30, 90, and 180 days as well as its category and image urls (available for `rs` / `osrs`)
     * @param item As item id
     * @example
     * api.rs.ge.graphData(4151).then(function(item) {
     *  console.log(item.daily, item.average);
     * }).catch(console.error);
     * @returns {Object} Item's pricing information
     */
    this.itemInformation = function (item) {
        return new Promise(function (resolve, reject) {
            request.json(config.urls.information + item).then(resolve).catch(reject);
        });
    };

    /**
     * Get rscripts data for item(s) matching the name passed in (available for `rs`)
     * @param  name {String} An item name or part of an item name
     * @example
     * //returns an array of all items found on the ge containing the word noxious
     * api.rs.ge.itemId('noxious').then(function(item) {
     *  console.log(item.daily, item.average);
     * }).catch(console.error);
     * @returns {Array} Array contains item objects. Can return multiple items in the array.
     */
    this.itemId = function (name) {
        return new Promise(function (resolve, reject) {
            request.rscript(config.urls.rscript + encodeURIComponent(name)).then(function (data) {
                var items = readRscriptData(data);
                resolve(items);
            }).catch(reject);
        });
    };

}

module.exports = GrandExchange;