// pipe method chaining

import fs from 'fs';
import path from 'path';
import { createGzip } from 'zlib';

const __dirname = path.resolve();

const readable = fs.createReadStream(__dirname + '/greet.txt');

const writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

const compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

const gzip = createGzip();

readable.pipe(writable);

// zlib library not saving it to a file
// simply giving me an output
readable.pipe(gzip).pipe(compressed);
