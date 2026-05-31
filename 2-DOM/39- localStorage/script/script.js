let buttonInsert = document.getElementsByTagName('button')[0];
let buttonGet = document.getElementsByTagName('button')[1];
let buttonclear = document.getElementsByTagName('button')[2];

buttonInsert.addEventListener('click', () => {
  localStorage.setItem('name', 'armin');
  localStorage.setItem('tasks', JSON.stringify(['js', 'py']));
});

buttonGet.addEventListener('click', () => {
  console.log(localStorage.getItem('name'));

  console.log(localStorage.name);

  let tasks = localStorage.getItem('tasks');

  console.log(JSON.parse(tasks));
  console.log(typeof JSON.parse(tasks)); 
});

buttonclear.addEventListener('click', () => {
  // localStorage.clear();
  localStorage.removeItem('tasks');
});
