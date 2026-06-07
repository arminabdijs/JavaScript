const users = [
  { id: 1, name: 'Ali', age: 22 },
  { id: 2, name: 'Sara', age: 28 },
  { id: 3, name: 'Reza', age: 35 },
  { id: 4, name: 'Maryam', age: 19 },
  { id: 5, name: 'Hassan', age: 42 },
  { id: 6, name: 'Narges', age: 31 },
  { id: 7, name: 'Ahmad', age: 27 },
  { id: 8, name: 'Fatemeh', age: 24 },
  { id: 9, name: 'Mohammad', age: 30 },
  { id: 10, name: 'Zahra', age: 26 },
];

function isLogin(userID) {
  return users.some((user) => user.id === userID);
}



// module.exports = {isLogin};
export { isLogin };
