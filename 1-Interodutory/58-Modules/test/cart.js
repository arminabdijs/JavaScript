'use strict';

import { allProducts } from './data.js';

let userBasket = [];

function findProductByName(name) {
  return allProducts.find((p) => p.name.toLowerCase() === name.toLowerCase());
}

function addToCart(product) {
  let existingProduct = userBasket.find((p) => p.id === product.id);

  if (existingProduct) {
    existingProduct.quty++;
  } else {
    userBasket.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quty: 1,
    });
  }
}

function getCart() {
  return userBasket;
}

function calculateTotal() {
  return userBasket.reduce((acc, item) => {
    return acc + item.price * item.quty;
  }, 0);
}

export { findProductByName, addToCart, getCart, calculateTotal };
