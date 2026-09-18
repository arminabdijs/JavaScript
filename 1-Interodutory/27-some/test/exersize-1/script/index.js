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

let userProduct = prompt("Enter The Name Of Product: "); // 'Phone'

let newProduct;

let isInShop = allProducts.some(function (product) {
  if (product.name === userProduct) {
    newProduct = product;
    return true;
  }
});

if (isInShop === true) {
  userBasket.push(newProduct);

  let sum = 0;

  userBasket.forEach(function (product) {
    sum += product.price;
  });
  console.log(userBasket);
  console.log("Total Price: " + sum);
} else {
  console.log("not available");
}