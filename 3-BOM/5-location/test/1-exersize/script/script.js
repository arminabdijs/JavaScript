/*
let locationSerch = location.search;

let params = new URLSearchParams(locationSerch);

let name = params.get('name');
let age = params.get('age');

document.getElementById('result').innerHTML = `
  نام: ${name ? name : 'وارد نشده'} <br>
  سن: ${age ? age : 'وارد نشده'}
`;
 */

let locationSerch = location.search;

let params = new URLSearchParams(locationSerch);
let userIdParams = Number(params.get('id'));

let result = document.getElementById('result');

let users = [
  { id: 1, name: 'Amin', age: 23 },
  { id: 2, name: 'Ali', age: 42 },
  { id: 3, name: 'Amin', age: 36 },
  { id: 4, name: 'Sara', age: 26 },
  { id: 5, name: 'Asra', age: 19 },
];

let mainUser = users.find((user) => {
  return user.id === userIdParams;
});

result.innerHTML = `
  نام: ${mainUser.name ? mainUser.name : 'وارد نشده'} 
  <br>
  سن: ${mainUser.age ? mainUser.age : 'وارد نشده'}
`;
