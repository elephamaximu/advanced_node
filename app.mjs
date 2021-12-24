import Emitter from 'events';
import { events } from './config.mjs';

const emtr = new Emitter();

emtr.on(events.GREET, function () {
	// this will run whenever the greet event is emitted
	console.log('someone said, hello');
});

emtr.on(events.GREET, function () {
	console.log('a greeting occurred');
});

console.log('Hello!');
emtr.emit('greet');
