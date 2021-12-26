// Typed Arrays

// 8bytes = 64bits
// This is not coming from Node
// coming from v8 JavaScript engine
const buffer = new ArrayBuffer(8);

// view is actually Typed Array meaning that it's an array
// I can deal with it as an array.
// and then give it to buffer to work with.
// simply a way for me to deal with the binary data in the buffer.
// we can store two numbers in this view 64/32
var view = new Int32Array(buffer);

view[0] = 5;
view[1] = 15;

console.log(view);
