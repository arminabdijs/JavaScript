function averageCalculator(number1, number2, number3) {
    let average = (number1 + number2 + number3) / 3;
    console.log("Average of your number is " + average);
}

averageCalculator(
    Number(prompt("enter your Number")),
    Number(prompt("enter your Number")),
    Number(prompt("enter your Number"))
);