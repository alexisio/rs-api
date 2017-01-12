'use strict';

var api = require('../');

var date = '01/12/2017';
//api.rs.boss.araxxor.getRotation(date).then(function(d) {console.log(d)}).catch(console.error);
//api.rs.boss.rots.getRotation(date).then(function(d) {console.log(d)}).catch(console.error);
api.rs.boss.vorago.getRotation().then(function(d) {console.log(d)}).catch(console.error);