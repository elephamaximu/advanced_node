// callbacks

function greet(callback) {
	const data = {
		name: 'plato',
		age: 35,
	};

	callback(data);
}

greet((data) => console.log(`name: ${data.name}`));
greet((data) => console.log(`age: ${data.age}`));
