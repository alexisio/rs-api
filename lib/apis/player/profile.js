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
                    reject(`couldn't get profile for ${username}`);
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

        var skills = {};

        for (var i = 0; i < config.hiscores.skills.length; i++) {
            var skillName = config.hiscores.skills[i].toLowerCase();
            var skill = profile.skillvalues.filter(function(sv) {
                return sv.name.toLowerCase() == skillName;
            })[0];
            skills['overall'] = {
                rank: Number(profile.rank.replace(',','')),
                level: Number(profile.totalskill),
                exp: Number(profile.totalxp)
            };
            if (skill) {
                skills[skillName] = {
                    rank: Number(skill.rank),
                    level: Number(skill.level),
                    exp: Number(skill.xp) / 10
                };
            }
        }


        //profile.stats = profile.skillvalues;
        profile.stats = skills;
        delete profile.skillvalues;
        return profile;
    }
}

module.exports = Profile;