/*Modules are used to segment and sort files.
We send a file containing a program to other files with the same name using the export ,
and in another file we call it using the import method.
We call that concept from the address of that file,
and for this, in the browser of this module,
we enter this expression type="module" in the script tag.*/

/* const users = [
  { id: 1, name: 'Ali', age: 22 },
  { id: 2, name: 'Sara', age: 28 },
  { id: 3, name: 'Reza', age: 35 },
  { id: 4, name: 'Maryam', age: 19 },
  { id: 5, name: 'Hassan', age: 42 },
  { id: 6, name: 'Narges', age: 31 },
  { id: 7, name: 'Ahmad', age: 27 },
  { id: 8, name: 'Fatemeh', age: 24 },
  { id: 9, name: 'Mohammad', age: 30 },
  { id: 10, name: 'Zahra', age: 26 },
];

function isLogin(userID) {
  return users.some((user) => user.id === userID);
}

console.log(isLogin(6));
 */
// ===========================================================

import { isLogin } from '../utils/funcs.js';

console.log(isLogin(6));
// ===========================================================

/* import { number, userName as name } from '../utils/comments.js';

console.log(number);
console.log(name); */

// ===========================================================

/* import * as comm from "../utils/comments.js"

console.log(comm.number)
console.log(comm.userName) */

// ===========================================================

/* import {sum1} from "../utils/course.js";

console.log(sum1(12, 12)) */

// ===========================================================
/* 
import {sum} from "../utils/users.js";

console.log(sum(12, 12)) */
