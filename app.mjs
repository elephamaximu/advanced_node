// .call method

const obj = {
	name: 'Johne Doe',
	greet: function (param) {
		console.log(`hello ${this.name}`);
	},
};

obj.greet.call({ name: 'plato' });
