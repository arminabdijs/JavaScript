function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("number is even");
  } else if (number % 2 === 1) {
    console.log("number is odd");
  } else {
    console.log("The input items are not entered correctly");
  }
}

isEvenOrOdd(Number(prompt("enter your Number")));
