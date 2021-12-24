import Emitter from 'events';

class Greetr extends Emitter {
	constructor() {
		super();
		this.greeting = 'Hello world';
	}

	greet(data) {
		console.log(this.greeting + ':' + data);
		this.emit('greet', data);
	}
}

const greeter1 = new Greetr();

greeter1.on('greet', function (data) {
	console.log('someone greeted ' + data);
});

greeter1.greet('Plato');
