// Copy file by listening for the data event

import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

const readable = fs.createReadStream(__dirname + '/greet.txt', {
	encoding: 'utf8',
	highWaterMark: 2 * 1024,
});

const writable = fs.createWriteStream(__dirname + '/greetcopy.txt', {
	encoding: 'utf8',
});

readable.on('data', function (chunk) {
	writable.write(chunk);
});
