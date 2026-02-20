let userNumbser = 0;
let sumNumberOfNumbers = 0;

for (let i = 1; i <= 5; i++) {
    userNumbser += +prompt(`enter ${i} number`);
    sumNumberOfNumbers++;
}

console.log(userNumbser / sumNumberOfNumbers);