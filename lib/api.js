'use strict';

var Player = require('./apis/player'),
    Bestiary = require('./apis/bestiary'),
    GrandExchange = require('./apis/grandexchange'),
    Clan = require('./apis/clan'),
    Distraction = require('./apis/distraction'),
    Boss = require('./apis/boss');

function API(type) {
    var config = require('./configs/' + type);

    /**
     *
     */
    this.clan = new Clan(config.clan);
    this.player = new Player(config.player);
    this.grandexchange = new GrandExchange(config.ge);
    this.ge = this.grandexchange;

    if (type === 'rs') {
        this.bestiary = new Bestiary(config.bestiary);
        this.boss = new Boss();
        this.distraction = new Distraction();
    }
}

module.exports = API;