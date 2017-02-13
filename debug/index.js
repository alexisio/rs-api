'use strict';
// simple place to add calls to debug them while developing

var api = require('../');

//api.rs.player.details(['sync']).then(console.log).catch(console.error);
function resolve(d) {
    console.log(d);
}
api.rs.player.events('sync').then(console.log).catch(console.error);
//api.rs.player.details('sync').then(console.log).catch(console.error);
//api.rs.clan.members('maximized').then(console.log).catch(console.error);
//api.rs.distraction.viswax.getCurrent().then(console.log).catch(console.error);
//api.rs.skilling.portables.getCall().then(console.log);
//api.rs.news.getRecent().then(console.log).catch(console.error);

//api.rs.boss.araxxor.getRotation(new Date()).then(console.log).catch(console.error);