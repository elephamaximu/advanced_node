// Buffers

// I can either make a buffer and say the size
// because the buffer is intended to be a particular finite size,
// particular amount of memory
// or I can give it some string value
// and I can specify the encoding.
const buf = new Buffer('Hello', 'utf8');
// I asked buffer, take this string, convert it to binary data

console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wo');
console.log(buf.toString());
