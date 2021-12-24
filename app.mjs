import Emitter from './emitter.mjs';

const emtr = new Emitter();

emtr.on('greet', function () {
	// this will run whenever the greet event is emitted
	console.log('someone said, hello');
});

emtr.on('greet', function () {
	console.log('a greeting occurred');
});

console.log('Hello!');
emtr.emit('greet');
