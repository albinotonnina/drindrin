/* global before, afterEach, beforeEach, describe, it, expect, sinon */

'use strict';
var five = require('johnny-five'),
    Bot = require('../../lib/puppet'),
    Joint = require('../../lib/joint'),
    Servo = five.Servo,
    _ = require('underscore'),
    testHelper;

describe('Bot', function () {

    before(function () {
        _.extend(this, testHelper);
    });

    beforeEach(function () {
        this.servoToSpy = sinon.spy(Servo.prototype, 'to');
        this.joint = new Joint({pin: 0});
    });

    afterEach(function () {
        this.servoToSpy.restore();

    });

    describe('Joint', function () {

        it('should instantiate the servo on init', function () {
            expect(this.joint.servo).to.be.an.instanceOf(five.Servo);
            expect(this.joint.servo.pin).to.be.equal(0);
        });

        it('test .moveTo 45 degrees', function () {
            this.joint.moveTo(45);
            expect(this.servoToSpy).to.have.been.calledWith(45);
        });

    });

    testHelper = {}
});
