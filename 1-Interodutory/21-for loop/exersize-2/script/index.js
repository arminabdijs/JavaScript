let allPrices = 0;

for (let i = 0; i < 5; i++) {
    allPrices += Number(prompt("Enter the product price: "));
}

console.log("All price of your basket: " + allPrices);