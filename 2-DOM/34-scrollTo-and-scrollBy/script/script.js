let $ = document;

let button0 = $.querySelectorAll('button')[0];
let button1 = $.querySelectorAll('button')[1];

button1.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

button0.addEventListener('click', () => {
  window.scrollBy(0, 20);
});

window.addEventListener('scroll', () => {
  if ($.documentElement.scrollTop > 0) {
    button0.style.position = 'fixed';
  }
});


