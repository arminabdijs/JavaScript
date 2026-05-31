let btn = document.querySelector('button');

btn.addEventListener(
  'click',
  () => {
    console.log('clicked');
  },
  { once: true },
); // defult once:false

// ------------------------------------------------

//event bubbling
/* let divElem = document.querySelectorAll('div');

divElem.forEach((div, index) => {
  div.addEventListener('click', (evnt) => {
    console.log(`Div : ${index + 1}`);
    // div.style.backgroundColor = 'blue';
    event.target.style.backgroundColor = 'blue';
  });
}); */

// ------------------------------------------------

//event Capturing
let divElem = document.querySelectorAll('div');

/* divElem.forEach((div, index) => {
  div.addEventListener(
    'click',
    (evnt) => {
      console.log(`Div : ${index + 1}`);
      div.style.backgroundColor = 'blue';
    },
    { capture: true },
  );
}); */

divElem.forEach((div, index) => {
  div.addEventListener(
    'click',
    (evnt) => {
      console.log(`Div : ${index + 1}`);
      div.style.backgroundColor = 'blue';
    },
    true,
  );
});
