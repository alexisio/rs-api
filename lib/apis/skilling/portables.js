'use strict';

var request = require('./../../util/request'),
    Promise = require('promise');

function Portables() {
    var types = [
        'fletchers',
        'crafters',
        'braziers',
        'sawmills',
        'forges',
        'ranges',
        'wells'
    ];
    var obj = {
        fletchers: '',
        crafters: '',
        braziers: '',
        sawmills: '',
        forges: '',
        ranges: '',
        wells: '',
        abbrev: '',
        update: {
            update: new Date(),
            updateBy: ''
        }
    };
    /**
     * Get most recent call from Portables FC
     * https://docs.google.com/spreadsheets/d/16Yp-eLHQtgY05q6WBYA2MDyvQPmZ4Yr3RHYiBCBj2Hc/edit#gid=915793480
     * @returns {Promise} Portable locations
     * @example
     * rsapi.rs.skilling.portables.getCall().then(function(portables) {
     *  console.log(portables);
     * }).catch(console.error);
     */
    this.getCall = function () {
        return new Promise(function (resolve, reject) {
            request.googleSheet('16Yp-eLHQtgY05q6WBYA2MDyvQPmZ4Yr3RHYiBCBj2Hc', 0).then(function (sheet) {
                sheet.getCells({'min-row': 26, 'max-row': 31, 'min-col': 1, 'max-col': 2, 'return-empty': true}, function (err, cells) {
                    cells.forEach(function (cell, i) {
                        var cellValue = cell.value.toLowerCase().trim();
                        if (cellValue.length > 0) {
                            if (types.some(function (v) {
                                return cellValue.indexOf(v) >= 0;
                            })) {
                                var match = cells[i + 1].value;
                                obj[cellValue] = match.trim();
                            }
                        }
                    });
                });

                sheet.getCells({'min-row': 16, 'max-row': 18, 'return-empty': true}, function (err, cells) {
                    cells.forEach(function (cell, i) {
                        var cellValue = cell.value.toLowerCase().trim();
                        if (cellValue.length > 0) {
                            if (cellValue.includes('last update on')) {
                                obj.update['update'] = cells[i + 1].value;
                            }
                            else if (cellValue.startsWith('by')) {
                                obj.update['updateBy'] = cells[i + 1].value;
                            }
                            else if (cellValue.startsWith('abbreviations')) {
                                obj.abbrev = cells[i + 1].value;
                            }
                        }
                    });
                    resolve(obj);
                })
            }).catch(console.error);
        });
    };
}

module.exports = Portables;