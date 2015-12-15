'use strict';

//var Raspi = require("raspi-gpio");

class DrinDrin {

    constructor(five) {
        this.led = new five.Led(13);
    }

    blink(){
        this.led.blink(500);
    }

    on() {
        this.led.on();
        return 1;

    }

    off() {
        this.led.off();
        return 0;
    }
}

module.exports = DrinDrin;