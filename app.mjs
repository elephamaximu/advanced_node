// Copy file by piping

import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

const readable = fs.createReadStream(__dirname + '/greet.txt');

const writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.pipe(writable);
