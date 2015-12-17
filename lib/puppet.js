'use strict';

//var Raspi = require("raspi-gpio");


var Joint;

class Puppet {

    constructor(opts) {
        Joint = opts.joint || require('./joint');
        this._initJoints();
    }

    _initJoints() {

       // this.front1 = new Joint({pin: 0, startAt: 0});
        this.front2 = new Joint({pin: 1, startAt: 0, invert: true});



    }

}

module.exports = Puppet;