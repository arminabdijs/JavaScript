import { findProductByName, addToCart, getCart, calculateTotal } from './cart.js';

let pro;

while (true) {
  pro = prompt('Enter product (type "exit" to quit)');

  if (pro === 'exit') break;

  let product = findProductByName(pro);

  if (!product) {
    alert('Not found, please try again');
    continue;
  }

  addToCart(product);
}

console.log(getCart());

alert(`Total price: ${calculateTotal().toLocaleString()}`);
