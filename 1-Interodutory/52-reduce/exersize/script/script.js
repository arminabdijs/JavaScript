let allProducts = [
  { id: 1, name: 'milk', price: 50000 },
  { id: 2, name: 'conserve', price: 200000 },
  { id: 3, name: 'poultry', price: 30000 },
  { id: 4, name: 'cake', price: 80000 },
  { id: 5, name: 'puff', price: 40000 },
  { id: 6, name: 'chips', price: 30000 },
  { id: 7, name: 'chocolate', price: 90000 },
  { id: 8, name: 'pepsi', price: 100000 },
  { id: 9, name: 'syrup', price: 200000 },
  { id: 10, name: 'rice', price: 1000000 },
];

let userBasket = [
  { id: 9, name: 'syrup', price: 200000, quty: 1 },
  { id: 10, name: 'rice', price: 1000000, quty: 1 },
];

let pro;

while (true) {
  pro = prompt('Enter product (type "exit" to quit)');

  if (pro === 'exit') {
    break;
  }

  let product = allProducts.find((p) => {
    return p.name.toLowerCase() === pro.toLowerCase();
  });

  if (!product) {
    alert('Not found, please try again');
  } else {
    let existingProduct = userBasket.find((p) => p.id === product.id);

    if (existingProduct) existingProduct.quty++;
    else {
      userBasket.push({
        id: product.id,
        name: product.name,
        price: +product.price,
        quty: 1,
      });
    }
  }
}


let result = userBasket.reduce((acc, item) => {
  return acc + item.price * item.quty;
}, 0);

alert(`Total price: ${result}`);