// Files and fs asynchronous

import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

// pattern : error first callback
const greet = fs.readFile(
	__dirname + '/greet.txt',
	'utf8',
	function (err, data) {
		console.log(data);
	}
);

console.log('done!');
