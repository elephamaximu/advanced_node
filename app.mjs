import Emitter from 'events';

class Greetr extends Emitter {
	constructor() {
		super();
		this.greeting = 'Hello world';
	}

	greet() {
		console.log(this.greeting);
		this.emit('greet');
	}
}

const greeter1 = new Greetr();

greeter1.on('greet', function () {
	console.log('someone greeted');
});

greeter1.greet();
