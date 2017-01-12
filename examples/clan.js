'use strict';

var api = require('../');

api.rs.clan.members('maximized').then(function(res) {console.log(res);}).catch(console.error);
