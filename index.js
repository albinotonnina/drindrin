'use strict';
var five = require('johnny-five');
var Puppet = require('./lib/puppet');

var board = new five.Board();

board.on("ready", _initPuppet);

function _initPuppet(){
    this.puppet = new Puppet({});


    this.repl.inject({
        f1: this.puppet.front1,
        f2: this.puppet.front2
    });

}



