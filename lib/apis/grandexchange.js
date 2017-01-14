'use strict';

var request = require('../util/request'),
    Promise = require('promise');

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
     * Returns an object containing the number of items in the category for each starting letter
     * @param  key The category id or name
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
     * Gets items in a category starting with a specific prefix
     * @param  key The category id or name
     * @param  prefix An item's prefix
     * @param  page Page number
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
     * Gets the graph price information for each day for 180 days
     * @param  item An item id
     * @returns {Object} Graph price information over the last 180 days
     */
    this.graphData = function (item) {
        return new Promise(function (resolve, reject) {
            request.json(config.urls.graph + item + '.json').then(resolve).catch(reject);
        });
    };

    /**
     * Get an items current price, its price trend over 30, 90, and 180 days as well as its category and image urls.
     * @param item As item id
     * @returns {Object} Item's pricing information
     */
    this.itemInformation = function (item) {
        return new Promise(function (resolve, reject) {
            request.json(config.urls.information + item).then(resolve).catch(reject);
        });
    };

    /**
     * Get rscripts data for item(s) matching the name passed in
     * @param  name An item name or part of an item name
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