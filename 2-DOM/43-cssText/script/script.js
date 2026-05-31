const $ = document;
const { log } = console;

const h1Elem = $.querySelector('h1');
const buttonElem = $.querySelector('button');

function setStyle() {
  /*  h1Elem.style.backgroundColor = 'rgb(127, 245, 9)';
  h1Elem.style.color = '#f5eaea';
  h1Elem.style.fontSize = '3rem';
  h1Elem.style.textAlign = 'center'; */

  h1Elem.style.cssText =
    'background-color: rgb(127, 245, 9);color: #f5eaea; font-size: 3rem; text-align: center;';
}

buttonElem.addEventListener('click', setStyle);
