let allProducts = [
    { id: 1, name: "laptop", price: 17000000 },
    { id: 2, name: "phone", price: 7000000 },
    { id: 3, name: "pen", price: 12000 },
    { id: 4, name: "pencil", price: 9000 },
    { id: 5, name: "eraser", price: 6000 },
    { id: 6, name: "milk", price: 35000 },
];

let userBasket = [
    { id: 1, name: "pen", price: 12000 },
    { id: 2, name: "pencil", price: 9000 },
];

function findProductByName(name) {
    return allProducts.find(product => product.name.toLowerCase() === name.toLowerCase());
}

let userRequest = Number(prompt("1. Add Products \n2. Remove Products", "1 OR 2"));

if (userRequest !== 1 && userRequest !== 2) {
    console.log("You need to choose a valid option (1 or 2).");
} else {
    let userProductName = prompt("Enter product name: ").toLowerCase();

    switch (userRequest) {
        case 1:
            let productToAdd = findProductByName(userProductName);

            if (productToAdd) {
                userBasket.push(productToAdd);
                console.log(`${userProductName} added to your basket.`);
            } else {
                console.log("This product is not available in our store.");
            }
            break;

        case 2:
            let productToRemoveIndex = userBasket.findIndex(product => product.name.toLowerCase() === userProductName);

            if (productToRemoveIndex === -1) {
                console.log("Product not found in your basket.");
            } else {
                let removedProduct = userBasket.splice(productToRemoveIndex, 1)[0]; 
                console.log(`${removedProduct.name} removed from your basket.`);
            }
            break;

        default:
            console.log("Please enter a valid option (1 or 2).");
            break;
    }

    console.log("Current basket:");
    userBasket.forEach(product => {
        console.log(`Product: ${product.name}, Price: ${product.price}`);
    });


    let totalPrice = 0;
    userBasket.forEach(product => {
        totalPrice += product.price;
    });

    console.log("Total Price: " + totalPrice);
}