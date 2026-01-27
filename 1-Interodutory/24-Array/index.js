/*const user1 = "armin"
const user2 = "ali"
const user3 = "mohammad"
const user4 = "sara"
console.log(user1, user2, user3, user4);*/

// ===========================================================

// Array

/*const data = ["armin", "ali", "mohammad", "sara", 18, 40, false, 70, true, "mohammad", "sara"]
console.log(data);*/

// ===========================================================

/*
const users = ["Ali", "Qadir", "Amin", "Babak", "Sasan", "Zahra"]

console.log(users)

console.log(users[1])

console.log(users[4])

console.log(users.length)
*/

// ===========================================================

//This will change the index 2 of that array
/*
const users = ["Ali", "Qadir", "Amin", "Babak", "Sasan", "Zahra"]
users[2] = "Armin"
console.log(users)*/

// ===========================================================

//It returns the last item of the array with the help of length minus 1
/*const users = ["Ali", "Qadir", "Amin", "Babak", "Sasan", "Zahra"]
console.log(users[users.length - 1]);*/

// ===========================================================

//It returns the last item using the at method
/*
const users = ["Ali", "Qadir", "Amin", "Babak", "Sasan", "Zahra"]
console.log(users.at(-1));*/

// ===========================================================

//This adds an item to the end of the array using the push method
/*const users = ["Ali", "Qadir", "Amin", "Babak", "Sasan", "Zahra"]
users.push("Armin")
users.push("Armin","Mohammad")
console.log(users)*/

// ===========================================================

//This removes the last item of the array with the help of the pop method
/*const users = ["Ali", "Qadir", "Amin", "Babak", "Sasan", "Zahra","Armin"]
users.pop()
console.log(users)*/

// ===========================================================

//This adds an item to the beginning of the array using the unshift method
/*const users = ["Ali", "Qadir", "Amin", "Babak", "Sasan", "Zahra"]
users.unshift("Armin")
users.unshift("Armin","Mohammad")
console.log(users)*/

// ===========================================================

//This removes the last item of the array with the help of the pop method
/*
const users = ["Armin","Ali", "Qadir", "Amin", "Babak", "Sasan", "Zahra"]
users.shift()
console.log(users)*/

// ===========================================================

/*const users = ["Ali", "Qadir", "Amin", "Babak", "Sasan", "Zahra"]
users.reverse()
console.log(users)*/

// ===========================================================

/*const users = ["Ali", "Qadir", "Amin", "Babak", "Sasan", "Zahra"]
console.log(users.join("--"))
console.log(users.join())
console.log(users.join("😒"))*/

/*let test = "armin";
console.log(test.split("")); //output => [ 'a', 'r', 'm', 'i', 'n' ]
console.log(test.split("").reverse().join(""));*/

/*let arr = ["armin", "ali", "mohammad", "sara"];
console.log(arr.splice(",", 2)); //output => [ 'armin', 'ali' ]*/

// ===========================================================

/*const users = ["Ali", "Qadir", "Amin", "Babak", "Sasan", "Zahra"]
console.log(users.slice(0,2))*/

// ===========================================================

/*const users = ["Ali", "Qadir", "Amin", "Babak", "Sasan", "Zahra"]
const userPending=["Armin","Mohammad"]
console.log(users.concat(userPending))*/

// ===========================================================

/*const users = ["Ali", "Qadir", "Amin", "Babak", "Sasan", "Zahra"]
console.log(users.includes("Ali"))*/

// ===========================================================

/*const users = ["Ali", "Qadir", "Amin", "Babak", "Sasan", "Zahra"]
console.log(users.indexOf("Ali"))*/

// ===========================================================

/*const users = ["Ali", "Qadir", "Amin", "Babak", "Sasan","Ali", "Zahra"]
console.log(users.lastIndexOf("Ali"))*/

// ===========================================================

/*const users = ["Ali", "Qadir", "Amin", "Babak", "Sasan","Ali", "Zahra"]
users.splice(1,0,"Armin Abdi")
users.splice(1,3)
console.log(users)*/

// ===========================================================

/*const users = ["Ali", "Qadir", "Amin", "Babak", "Sasan","Ali", "Zahra"]
console.log(users.sort())*/

/*let arr = [1, 2, 3, "Armin", true];
console.log(arr.sort((a, b) => (a > b ? 1 : -1)));*/

/*
let arr2 = [ "Armin", "true","ali","mohammad"];
console.log(arr2.sort( (a, b) => a.localeCompare(b) ));//this is sorted by string*/

// ===========================================================

/*
let arr = new Array("Apple", "Pear", "etc");
let arr2 = new Array(2); //This type of array has a problem with numbers
console.log(arr2[0]);
console.log(arr2.length);*/

// ===========================================================

/*
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; //Multiple arrays
console.log(matrix[1][1]);*/

// ===========================================================

/*let arrNumber = [1, 2, 3];
console.log(String(arrNumber) === "1,2,3");*/

// ===========================================================

//The delete method is for objects and it deletes that item in the array, but the desired place is still occupied.
/*
let arr = ["I", "go", "home"];
delete arr[1];
console.log(arr)
console.log(arr[1]);*/

// ===========================================================

/*
let arrNumber = [1, 2, 3];
console.log(Array.isArray(arrNumber));*/

// ===========================================================

