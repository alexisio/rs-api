'use strict';

var api = require('../');

//api.rs.distraction.spotlight.getRotation('02/03/2017').then(function(res) {console.log(res);}).catch(console.error);
var spotlight = api.rs.distraction.spotlight;
spotlight.getMinigameNext(spotlight.BARBARIAN_ASSAULT).then(function(res) {console.log(res);}).catch(console.error);
