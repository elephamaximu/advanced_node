// Object.create and Prototypes

const person = {
	firstname: '',
	lastname: '',
	greet: function () {
		return this.firstname + ' ' + this.lastname;
	},
};

const plato = Object.create(person);
plato.firstname = 'plato';
plato.lastname = 'Jung';

console.log(plato.greet());
