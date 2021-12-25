// Inheriting from the Event Emitter

const EventEmitter = require('events');
const util = require('util');

function Greetr() {
	this.greeting = 'Hello World';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function () {
	console.log(this.greeting);
	this.emit('greet');
};

const greetr1 = new Greetr();

greetr1.on('greet', function () {
	console.log('someone greeted');
});

greetr1.greet();
