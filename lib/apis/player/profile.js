'use strict';

var request = require('./../../util/request'),
    Promise = require('promise');

function Profile(usernames, config) {
    /**
     * Gets a players profile and skills
     *
     */
    this.lookup = function () {
        return new Promise(function (resolve, reject) {
            if (typeof usernames === 'string') {
                getProfile(usernames).then(function(profile) {
                    resolve(profile);
                }).catch(reject);
            }
            else {
                var jsonError = new Error('Unrecognized input for usernames. Should be a string or array.');
                reject(jsonError);
            }
        });
    };

    var getProfile = function(username) {
        return new Promise(function(resolve, reject) {
            request.json(config.urls.profile + username).then(function (profile) {
                if (profile && profile.skillvalues) {
                    profile = formatSkillValues(profile);
                    resolve(profile);
                }
                else if (profile.error) {
                    profile.name = username;
                    resolve(profile);
                }
                else {
                    reject(`could't get profile for ${username}`);
                }
            }).catch(reject);
        });
    };

    var formatSkillValues = function (profile) {
        profile.skillvalues.forEach(function(skill) {
            skill.name = config.hiscores.skillIds.filter(function(id) {
               return skill.id == id.id;
           })[0].name;
        });
        profile.stats = profile.skillvalues;
        delete profile.skillvalues;
        return profile;
    }
}

module.exports = Profile;