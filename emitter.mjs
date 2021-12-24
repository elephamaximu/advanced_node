// this is going to allow us to say and event has happened,
// and to respond to the event happening.

class Emitter {
	constructor() {
		this.events = {};
	}

	// to add listener
	on(type, listener) {
		// if the property already exists then great
		// otherwise, make a new array
		this.events[type] = this.events[type] || [];

		// going to push my listenr function into the array
		// every time I push a new function, get new item in the array
		this.events[type].push(listener);
	}

	// hey, something happened
	emit(type) {
		if (this.events[type]) {
			this.events[type].forEach(function (listener) {
				listener();
			});
		}
	}
}

export default Emitter;
