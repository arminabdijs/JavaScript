// Global Scope
// Local Scope
// Block {}

/* let globalNumber = 12;

{
  var localNumber = 20;
}

console.log(globalNumber);
console.log(localNumber); */

// ===========================================================

/*let globalNumber = 12

{
    let localNumber = 20
}

console.log(globalNumber)
console.log(localNumber)*/

// ===========================================================

let number = 34;

function showNumber() {
  let number = 18;
  console.log(`In Function : ${number}`);
}

console.log(`Out Function : ${number}`);

showNumber();
