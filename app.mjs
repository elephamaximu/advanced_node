// Files and fs synchronous

// wraps up the C++ code that lets me get lower level
// and deal directly with files.
import fs from 'fs';
import path from 'path';

// I can then go get some data from the text file.
// Now we're dealing with files on our operating system
// that means we're dealing with, normally, binary data
// So I need to be able to deal with binary data in reading the file.

const __dirname = path.resolve();
const greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

// It's looking at the file, it will read the binary data,
// and then it will use the encoding to determine what those zeros and ones mean,
// What they ultimately map to as characters.
// When my file is read, it loads the contents of the file into the buffer first
// and then uses the encoding so I can get the string back.
console.log(greet);
