'use strict';

var Promise = require('promise');

/**
 * Module containing Warbands functions
 * @module Warbands
 */
function Warbands() {

    /**
     * Get the next warbands
     * @returns {Promise} Object containing hours, minutes, seconds and date/time in which the next warbands takes place
     * @example
     * rsapi.rs.distraction.warbands.getNet().then(function(wb) {
     *  console.log(wb);
     * }).catch(console.error);
     */
    this.getNext = function() {
        return new Promise(function (resolve, reject) {
            var d = new Date();
            var day = d.getUTCDate() - d.getUTCDay();
            var diff = new Date();
            var seconds;

            if (d.getUTCDay() === 0 && d.getUTCHours() < 12) {
                day = day - 7;
            }

            diff.setUTCDate(day);
            diff.setUTCHours(12, 0, 0, 0);
            seconds = d.valueOf() - diff.valueOf();

            if (seconds !== Math.abs(seconds)) {
                var bodyError = new Error('Unable to get next warbands time.');
                reject(bodyError);
                return;
            }

            seconds = Math.floor(seconds / 1000);
            seconds = 25200 - (seconds % 25200);

            var hours = Math.floor(seconds / 3600);
            var minutes = Math.floor((seconds % 3600) / 60);
            seconds = (seconds % 3600) % 60;

            var obj = {
                hours: Number(hours),
                minutes: Number(minutes),
                seconds: Number(seconds)
            };
            resolve(obj);
        });

    }
}

module.exports = Warbands;