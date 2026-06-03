// synchronous/asynchronous

/* console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7); */

// ===========================================================
// asynchronous
console.log(1);
console.log(2);
console.log(3);
console.log(4);
setTimeout(() => console.log(5), 3000);
console.log(6);
console.log(7);

// ===========================================================

/*const firstLogs = () => {
    console.log(1)//sync
    console.log(2)//sync
}

const middleLogs = () => {
    setTimeout(() => console.log(3), 1000)//async
}

const lastLogs = () => {
    console.log(4)//sync
    console.log(5)//sync
}

firstLogs()
middleLogs()
lastLogs()*/

// ===========================================================
