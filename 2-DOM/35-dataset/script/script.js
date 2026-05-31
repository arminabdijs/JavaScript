let $ = document;

/* let button = $.querySelector('button');

button.addEventListener("click", (event) => {
  console.log(event.target.dataset.id);
  console.log(event.target.dataset.name);
  console.log(event.target.dataset);
  
});


console.log(button.dataset.id);
console.log(button.dataset.name);
console.log(button.dataset); */

let button = $.querySelectorAll('button');

button.forEach((index) => {
  index.addEventListener('click', (event) => {
    console.log(event.target.dataset.id, event.target.dataset.name);
  });
});
