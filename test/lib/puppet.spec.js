/* global beforeEach, describe, it, expect, sinon */

'use strict';
var five = require('johnny-five');
var Bot = require('../../lib/puppet');


describe('Bot', function () {

    var bot;
    var board = new five.Board();

    beforeEach(function(){
        board.on("ready", function() {
            console.log('connected');
            bot = new Bot(five);
        });
    });

    describe('bot', function () {


    });
});
