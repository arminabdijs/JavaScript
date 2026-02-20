let enterNumber1 = Number(prompt("Enter 1 number : "));
let enterNumber2 = Number(prompt("Enter 2 number : "));

if (enterNumber1 <= 0 || enterNumber2 <= 0) {
  console.log("numbers not 0 and -1,-2,-3,....");
}

while (enterNumber1 > 0 && enterNumber2 > 0) {
  let sum = enterNumber1 ** enterNumber1;
  console.log(sum);
  break;
}