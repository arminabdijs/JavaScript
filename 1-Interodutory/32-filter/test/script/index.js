let userBasket = [
  { id: 1, name: "pen", price: 12000 },
  { id: 2, name: "pencil", price: 9000 },
  { id: 3, name: "Eraser", price: 6000 },
  { id: 4, name: "Milk", price: 35000 },
  { id: 4, name: "Car", price: 100000 },
];

let userProductUp100 = [];
let userProductDn100 = [];

let sumPriceProductDn100 = 0;
let sumPriceProductUp100 = 0;

userBasket.filter((priceProduct) => {
  if (priceProduct.price > 100000) {
    return userProductUp100.push(priceProduct);
  } else {
    return userProductDn100.push(priceProduct);
  }
});

userProductDn100.forEach((price) => {
  sumPriceProductDn100 += price.price;
});

userProductUp100.forEach((price) => {
  sumPriceProductUp100 += price.price;
});

sumPriceDn100 = sumPriceProductDn100 + userProductDn100.length * 1000;

sumPriceAllProducts = sumPriceDn100 + sumPriceProductUp100;

console.log(userBasket);

console.log("Shippingcost : " + userProductDn100.length * 1000);

console.log("total basket : " + sumPriceAllProducts);