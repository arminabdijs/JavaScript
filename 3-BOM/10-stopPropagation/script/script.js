let divElem = document.querySelectorAll('div');

divElem.forEach((div, index) => {
  div.addEventListener('click', (evnt) => {
    evnt.stopPropagation();

    console.log(`Div : ${index + 1}`);

    div.style.backgroundColor = 'blue';
  });
});
