// .apply method

const obj = {
	name: 'Johne Doe',
	greet: function (param) {
		console.log(`hello ${this.name}`);
		console.log(param);
	},
};

obj.greet.apply({ name: 'plato' }, ['jung']);
