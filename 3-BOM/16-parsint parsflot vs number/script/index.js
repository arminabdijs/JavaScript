'use strict';
console.log(parseInt('123')); //It is used to convert a string to an integer.

// -----------------------------------------------------------------------------------------------------------

console.log(parseFloat('123.45')); //It is used to convert a string to a floating-point number.

// -----------------------------------------------------------------------------------------------------------

console.log(Number('123')); //It is used to convert a string to a number (either integer or floating-point).

// -----------------------------------------------------------------------------------------------------------

console.log(Number('123.45')); //It is used to convert a string to a number (either integer or floating-point).

// -----------------------------------------------------------------------------------------------------------

console.log(parseInt('123px'));
console.log(Number('123px'));
// -----------------------------------------------------------------------------------------------------------

console.log(parseFloat('123.45px'));
console.log(Number('123.45px'));

// -----------------------------------------------------------------------------------------------------------

console.log(parseInt('px123px'));
console.log(Number('px123px'));

// -----------------------------------------------------------------------------------------------------------

console.log(parseFloat('px123.45px'));
console.log(Number('px123.45px'));

// -----------------------------------------------------------------------------------------------------------

console.log(parseInt('101', 2)); //It is used to convert a string to an integer, with a specified radix (base). In this case, it converts the binary string '101' to the decimal integer 5.

console.log(parseInt('101', 8)); //It is used to convert a string to an integer, with a specified radix (base). In this case, it converts the octal string '101' to the decimal integer 65.

console.log(parseInt('101', 16)); //It is used to convert a string to an integer, with a specified radix (base). In this case, it converts the hexadecimal string '101' to the decimal integer 257.

console.log(parseInt('101', 10)); //It is used to convert a string to an integer, with a specified radix (base). In this case, it converts the decimal string '101' to the decimal integer 101.

// -----------------------------------------------------------------------------------------------------------

console.log(parseInt('0x1A')); //It is used to convert a hexadecimal string to an integer. In this case, it converts the hexadecimal string '0x1A' to the decimal integer 26.

console.log(Number('0x1A')); //It is used to convert a hexadecimal string to a number. In this case, it converts the hexadecimal string '0x1A' to the decimal number 26.

// -----------------------------------------------------------------------------------------------------------

console.log(parseInt('0b101')); //It is used to convert a binary string to an integer. In this case, it converts the binary string '0b101' to the decimal integer 0.

console.log(Number('0b101')); //It is used to convert a binary string to a number. In this case, it converts the binary string '0b101' to the decimal number 5.

// -----------------------------------------------------------------------------------------------------------
