'use strict';
function sum(a, b, c) {
  console.log(`a : ${a}`);
  console.log(`b : ${b}`);
  console.log(`c : ${c}`);

  console.log(arguments); // this is in essex5 
  console.log(arguments[4]); // this is not an array but it is an array-like object
  console.log(arguments.length);//not use in arrow function 

  return a + b + c;
}

console.log(sum(1, 2, 3, 45, 78, 90, 100));
