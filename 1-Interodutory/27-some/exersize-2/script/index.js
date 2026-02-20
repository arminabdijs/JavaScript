let allProducts = [
    { id: 1, name: "Laptop", price: 17000000 },
    { id: 2, name: "Phone", price: 7000000 },
    { id: 3, name: "Pen", price: 12000 },
    { id: 4, name: "Pencil", price: 9000 },
    { id: 5, name: "Eraser", price: 6000 },
    { id: 6, name: "Milk", price: 35000 },
];

let userBasket = [
    { id: 1, name: "pen", price: 12000 },
    { id: 2, name: "pencil", price: 9000 },
];

let userProduct;
let newProduct;
let isInShop;

while (true) {
    userProduct = prompt("Enter the name of a product (or type 'exit' to finish):");

    if (userProduct.toLowerCase() === "exit") {
        break;
    }

    isInShop = allProducts.some( (product) => {
        if (product.name.toLowerCase() === userProduct.toLowerCase()) {
            newProduct = product;
            return true;
        }
        return false;
    });

    if (isInShop) {
        userBasket.push(newProduct);
        console.log(`${userProduct} added to your basket.`);
    } else {
        console.log("Product not available in the shop.");
    }
}

let totalPrice = 0
userBasket.forEach( (product) => {
    totalPrice += product.price;
});

console.log("Your basket:", userBasket);
console.log("Total Price:", totalPrice);