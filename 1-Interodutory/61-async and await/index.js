// Async
/*async function f() {
    return 1;
}//return a promise
f().then(console.log);*/

// ===========================================================

// Async/await
/*
async function f3() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result =await  promise; // wait for promise completion

    console.log(result); // "done!"
}

f3();*/

// ===========================================================

//error use await in function
/*
function g() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Something went wrong!")), 1000)
    });

    let result = await promise; // wait for promise completion
    console.log(result);

}

g()*/

// ===========================================================

//anonymous function async/await
/*(async () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Something went wrong!")), 1000)
    });

    let result = await promise; // wait for promise completion
    console.log(result);
})();*/

// ===========================================================

//get API promise
/*
const fetchData = () => {
    fetch("https://jsonplaceholder.org/posts")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}
fetchData()*/

// ===========================================================

// handler Error
/*
async function handlerError() {
    throw new Error("Whoops!");
}
handlerError()*/
