let usersList = document.querySelector('#users');

let usersArray = ['armin', 'amin', 'ali', 'amir', 'babak', 'hasan', 'qadir'];

let newUserLi = null;

let userFragment = document.createDocumentFragment();

usersArray.forEach((user) => {
  newUserLi = document.createElement('li');
  newUserLi.innerHTML = user;
  userFragment.appendChild(newUserLi);
});

usersList.append(userFragment);
