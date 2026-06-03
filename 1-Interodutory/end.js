let num1 = 2;
let num2 = 3;

console.log(num1 + num2);

console.error('Data is not defined');

console.info('Api response status is 404');

console.warn('Api response status is 404');

console.assert(num1 > num2, 'big');

// -------------------------------------------

let user = {
  id: 1,
  username: 'Armin',
  password: '12345',
  age: 23,
};

console.log(
  `Id is ${user.id} username is ${user.username} password is ${user.password} age is ${user.age}`
);
console.table(user);

// -------------------------------------------

let allProducts = [
  { id: 1, name: 'Laptop', price: 17000000 },
  { id: 2, name: 'Phone', price: 7000000 },
  { id: 3, name: 'Pen', price: 12000 },
  { id: 4, name: 'Pencil', price: 9000 },
  { id: 5, name: 'Eraser', price: 6000 },
  { id: 6, name: 'Milk', price: 35000 },
];

console.table(allProducts);

// -------------------------------------------

console.time('for loop');
for (let i = 0; i <= 1000; i++) {
  // continue
}
console.timeEnd('for loop');

// -------------------------------------------
console.log('before grop');
console.group('first log');
console.log('first log in group');
console.log('second log in group');
console.log('third log in group');

console.groupEnd('first log');
console.log('after grop');
// -------------------------------------------

console.log('%cApi response status is 200', 'color:red;font-weight: 900;font-size:2rem');
