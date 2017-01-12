'use strict';

var chai = require('chai'),
    expect = chai.expect,
    api = require('../');

chai.should();
chai.use(require('chai-things'));

describe('Player', function() {
    describe('#hiscores', function() {
        it('should return a players skills and activities', function(done) {
            return api.rs.player.hiscores('zezima').then(function(user) {
                expect(user.skills.hitpoints.level).to.equal(99);
                expect(user.skills.hitpoints.exp).to.equal(200000000);
                done();
            });
        });
    });

    describe('#events', function() {
        it('should return a players events log', function(done) {
            return api.rs.player.events('sync').then(function(log) {
                expect(log.items.length).to.greaterThan(1);
                done();
            });
        });
    });
});