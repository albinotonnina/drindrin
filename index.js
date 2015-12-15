'use strict';

var five = require('johnny-five');
var DrindrinBot = require('./bot/index');

var board = new five.Board();

board.on("ready", function() {
    new DrindrinBot(five);
});



