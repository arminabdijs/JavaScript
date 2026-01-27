// Math methods

//return number pi (3.141592653589793)
// console.log(Math.PI);

// ===========================================================

// return 2**4
// console.log(Math.pow(2, 4));

// ===========================================================

// return It takes the square root of 16 ---> 4 * 4 = 16 ==> output = 4
// console.log(Math.sqrt(16));

// ===========================================================

//It takes the absolute value of -1 ---> | -1 | = 1
// console.log(Math.abs(-1));

// ===========================================================

//Returns the smallest number
// console.log(Math.min(1, 2, 3, 4, 56, 6, 7, 889, 9, 2, -1));

// ===========================================================

//Returns the largest number
// console.log(Math.max(1, 2, 3, 4, 56, 6, 7, 889, 9, 2, -1));

// ===========================================================

//This will remove the decimal part and return the correct part
// console.log(Math.floor(1.9));

// ===========================================================

//This will remove the decimal part and return the correct part
// console.log(Math.trunc(2.7));

// ===========================================================

//This is going to change our number
// console.log(Math.round(12.7 ));

// ===========================================================

//It returns a random number between 0 and 1. If we want to get a specific number, we multiply it.
// console.log(Math.random() * 10);

// ===========================================================

//This rends any number that is out of the integer, for example, it rends the number 2.1 to 3.
// console.log(Math.ceil(2.1));

// ===========================================================

//It will multiply e=2.71828 by any number we give it ==> 2.71828 ^ 3
// console.log(Math.exp(3));

// ===========================================================

//Returns the natural logarithm (base e=2.71) of a number
// console.log(Math.log(9));
// console.log(2.718281828459045 ** 2.1972245773362196);

// ===========================================================

//This is Euler's number =2.718281828459045
// console.log(Math.E);

// ===========================================================

//LN10===log2.718281828459045(10)
// console.log(Math.LN10);
// console.log(2.718281828459045 ** 2.302585092994046);


// ===========================================================
// ===========================================================
// ===========================================================
// ===========================================================
// ===========================================================


let deg = 180
let radian = deg * (Math.PI / 180)

//Sine returns a number between 1 and -1
console.log(Math.sin(radian));


//tangent returns a number between 1 and -1
console.log(Math.tan(radian));


//cosine returns a number between 1 and -1
console.log(Math.cos(radian));


//This field returns the Arkcosine of 1
console.log(Math.acos(1));


//This will return the Arksine of 1
console.log(Math.asin(1));


//This field returns the Arktangent of 1
console.log(Math.atan(1));


//This field returns the Arktangents2 of two points x and y
console.log(Math.atan2(2, 6));