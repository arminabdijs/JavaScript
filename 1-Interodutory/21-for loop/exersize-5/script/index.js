let userNumber = Number(prompt("Enter the Number : ", 0));
let sum = 0;

if (userNumber === 0) {
  sum = 1;
} else {
  for (let i = 0; userNumber / 10 != 0; i++) {
    sum++;
    userNumber = Math.floor(userNumber / 10);
  }
}

console.log("Sum Of length : ", sum);
