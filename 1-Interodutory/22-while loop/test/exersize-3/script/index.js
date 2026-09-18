let userNumber = Number(prompt('Enter the Number : ', 0));
let sum = 0;

while (userNumber / 10 != 0) {
  sum += userNumber % 10;
  userNumber = Math.floor(userNumber / 10);

}

console.log('Sum Of Digits : ', sum);
