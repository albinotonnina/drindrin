'use strict';
var five = require('johnny-five');

class Joint {

    constructor(opts) {

        this.config = {
            address: opts.address || 0x40,
            controller: opts.controller || 'PCA9685',
            pin: opts.pin || 0,
            range: opts.range || [0, 180],
            invert: opts.invert || false,
            startAt: opts.startAt || undefined
        };


        this.servo = opts.servo || this._initServo();
        console.log(opts);
       // this.servo.home();
    }

    /** @private */
    _initServo() {
        return new five.Servo(this.config);
    }

    /** @public */
    moveTo(degrees, ms) {
        this.servo.to(degrees, ms || 500);
    }

}

module.exports = Joint;