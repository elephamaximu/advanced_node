// inherit with super keyword

class Person {
	constructor() {
		this.firstname = 'John';
		this.lastname = 'Doe';
	}

	greet() {
		console.log(`Hello, ${this.firstname} ${this.lastname}`);
	}
}

class Policeman extends Person {
	constructor() {
		super();
		this.badgenumber = '1234';
	}
}

const officer = new Policeman();
officer.greet();
