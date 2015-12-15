/* global beforeEach, describe, it, expect, sinon */

'use strict';
var five = require('johnny-five');
var DrindrinBot = require('../../bot/index');


describe('Bot', function () {

    var bot;
    var board = new five.Board();

    beforeEach(function(){
        board.on("ready", function() {
            console.log('connected');
            bot = new DrindrinBot(five);
        });
    });

    describe('led', function () {

        it('Should turn a led on', function (done) {

            this.timeout(10000);

            setTimeout(function () {
                var result = bot.on();
                assert.equal(result, 1);
                done();
            }, 5000);


        });

        it('Should turn a led off', function (done) {

            this.timeout(10000);

            setTimeout(function () {
                var result = bot.off();
                assert.equal(result, 0);
                done();
            }, 5000);


        });
    });
});
