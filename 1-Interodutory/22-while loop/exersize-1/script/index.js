let userNumberStart = Number(prompt("Enter your min number : "));
let userNumberEnd = Number(prompt("Enter your max number : "));

if (userNumberStart <= userNumberEnd) {
    while (userNumberStart <= userNumberEnd) {
        if (userNumberStart % 2 === 0) {
            console.log(userNumberStart);
        }
        userNumberStart++;
    }
} else {
    while (userNumberEnd <= userNumberStart) {
        if (userNumberStart % 2 === 0) {
            console.log(userNumberStart);
        }
        userNumberStart--;
    }
}