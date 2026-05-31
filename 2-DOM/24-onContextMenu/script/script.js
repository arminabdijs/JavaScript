let $ = document;

let btn = $.getElementById('btn');

btn.addEventListener('click', () => {
  console.log('clicked');
});

btn.addEventListener('contextmenu', () => {
  console.log('contextmenu');
});
