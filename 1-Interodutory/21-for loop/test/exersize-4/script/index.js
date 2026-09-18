let userNumber = Number(prompt("Enter the Number : ", 0));
let sum = 0;

for (let i = 0; userNumber / 10 != 0; i++) {
    sum += userNumber % 10;
    userNumber = Math.floor(userNumber / 10);
}

console.log("Sum Of Digits : ", sum);
