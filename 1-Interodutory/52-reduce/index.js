/*let numbers = [1, 2, 3];

let result = numbers.reduce((total, number) => {
    return total + number;
}, 0);

console.log(result); // 6*/

// ===========================================================
/*
let numbers = [1, 2, 3];

let result = numbers.reduce((resultSoFar, currentItem) => {
    return resultSoFar + currentItem;
}, 0);

console.log(result);*/

// ===========================================================

/*let arr = [10, 20, 30];

arr.reduce((acc, value, index, array) => {
    console.log(acc, value, index, array);
    return acc + value;
}, 0);*/

// ===========================================================

/*let result=["Armin", "Ali", "Sara"].reduce((acc, name, i) => {
    acc.push(`${i}: ${name}`);
    return acc;
}, []);

console.log(result);*/

// ===========================================================

/*let users = [
    { name: "Armin", role: "admin" },
    { name: "Ali", role: "user" },
    { name: "Sara", role: "admin" },
    { name: "Reza", role: "user" },
    { name: "Reza", role: "suport" },
];

let grouped = users.reduce((acc, user) => {

    if (!acc[user.role]) {
        acc[user.role] = [];
    }

    acc[user.role].push(user);

    return acc;

}, {});

console.log(grouped);*/


// ===========================================================

/*let numbers = [[1, 2], [3, 4], [5]];

let flat = numbers.reduce((acc, arr) => {
    return acc.concat(arr);
}, []);

console.log(flat);*/

// ===========================================================

/*
let fruits = ["apple", "banana", "apple", "orange", "banana"];

let count = fruits.reduce((acc, fruit) => {

    acc[fruit] = (acc[fruit] || 0) + 1;

    return acc;

}, {});

console.log(count);*/

// ===========================================================

/*
let unique = [1,2,2,3,1].reduce((acc, num) => {

    if (!acc.includes(num)) {
        acc.push(num);
    }

    return acc;

}, []);

console.log(unique);*/
