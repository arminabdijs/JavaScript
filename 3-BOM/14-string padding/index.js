'use strict';
let str = 'Hello';
console.log(str.padStart(10)); // default is space
console.log(str.padStart(10, '*'));

console.log(str.padEnd(10)); // default is space
console.log(str.padEnd(10, '*'));

let str2 = '12345';
console.log(str2.padStart(10, '0')); // default is space
console.log(str2.padEnd(10, '0')); // default is space