'use strict';

var api = require('../');

//api.rs.distraction.spotlight.getRotation('02/03/2017').then(function(res) {console.log(res);}).catch(console.error);

api.rs.distraction.spotlight.getMinigameNext('Conquest').then(function(res) {console.log(res);}).catch(console.error);
