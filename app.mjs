// Streams

import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

// I want to have this give me that ReadStream object
const readable = fs.createReadStream(__dirname + '/greet.txt', {
	encoding: 'utf8',
	highWaterMark: 2 * 1024,
});

// It has EventEmitter down the pipeline, I can listen to an event
// an event that's emitted by the ReadStream is 'data'
readable.on('data', function (chunk) {
	console.log(chunk);
	console.log(chunk.length);
});
