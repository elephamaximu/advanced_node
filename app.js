// make custom event emitter with function constructor
const Emitter = require('./emitter');

const emtr = new Emitter();

emtr.on('greet', function () {
	console.log('someone said hello');
});

emtr.on('greet', function () {
	console.log('greeting occurred');
});

console.log('Hello');
emtr.emit('greet');
