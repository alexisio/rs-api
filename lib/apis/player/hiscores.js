'use strict';

var request = require('./../../util/request'),
    Promise = require('promise');

function Hiscores(username, config) {
    var readSkills = function(data) {
        var skills = {};

        for (var i = 0; i < config.skills.length; i++) {
            var skillName = config.skills[i].toLowerCase();

            skills[skillName] = {
                rank: Number(data[i][0]),
                level: Number(data[i][1]),
                exp: Number(data[i][2])
            };
        }

        return skills;
    };

    var readActivities = function(data) {
        var activities = {};

        for (var i = 0; i < config.activities.length; i++) {
            var activityName = config.activities[i].replace(/^[^a-zA-Z_]+|[^a-zA-Z_0-9]+/g, ' ').replace(/\s/g, '_').toLowerCase();

            activities[activityName] = {
                rank: Number(data[i + config.skills.length][0]),
                score: Number(data[i + config.skills.length][1])
            };
        }

        return activities;
    };

    /**
     * Gets a players skill and activity information
     *
     * @param  type   [Optional] normal, ironman, hardcore/ultimate
     */
    this.lookup = function(type) {
        if (typeof type === 'undefined') {
            type = 'normal';
        }

        if (type === 'ultimate') {
            type = 'hardcore';
        }

        return new Promise(function(resolve, reject) {
            request.csv(config.urls[type] + encodeURIComponent(username)).then(function(data) {
                var playerInformation = {
                    name: username,
                    stats: readSkills(data),
                    activities: readActivities(data)
                };

                resolve(playerInformation);
            }).catch(reject);
        });
    };
}

module.exports = Hiscores;