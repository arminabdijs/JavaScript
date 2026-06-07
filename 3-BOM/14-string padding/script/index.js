'use strict';
/* let str = 'Hello';
console.log(str.padStart(10)); // default is space
console.log(str.padStart(10, '*'));

console.log(str.padEnd(10)); // default is space
console.log(str.padEnd(10, '*')); */

// --------------------------------------------------------------------------------------

/* let str2 = '12345';
console.log(str2.padStart(10, '0')); // default is space
console.log(str2.padEnd(10, '0')); // default is space */

// --------------------------------------------------------------------------------------

/* let phoneNumber = '+989185379592';
let last4Digits = phoneNumber.slice(-4);
let maskedPhoneNumber = last4Digits.padStart(phoneNumber.length, '*');
console.log(maskedPhoneNumber); */

// --------------------------------------------------------------------------------------

/* let phoneNumber = '+989185379592';
let last4Digits = phoneNumber.slice(-4);
let maskedPhoneNumber = last4Digits.padStart(phoneNumber.length, '●');

console.log(maskedPhoneNumber); */

// --------------------------------------------------------------------------------------

/* let phoneNumber = '+989185379592';
let last4Digits = phoneNumber.slice(-4);
let maskedPhoneNumber = last4Digits.padStart(phoneNumber.length, '■'); 

console.log(maskedPhoneNumber); */

// --------------------------------------------------------------------------------------

/* let phoneNumber = '+989185379592';
let last4Digits = phoneNumber.slice(-4);
let maskedPhoneNumber = last4Digits.padStart(phoneNumber.length, '★'); 

console.log(maskedPhoneNumber); */

// --------------------------------------------------------------------------------------

let phoneNumber = '+989185379592';
let maskedPhoneNumber =
  phoneNumber.slice(0, 3) + ''.padEnd(phoneNumber.length - 5, '●') + phoneNumber.slice(-2);
console.log(maskedPhoneNumber);
