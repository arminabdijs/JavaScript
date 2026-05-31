const $ = document;
const { log } = console;

const pElem = $.querySelector('p');
const inputElem = $.querySelector('input');
const buttonElem = $.querySelector('button');
let number = 12;

/* 
try {
  log(x);
} catch (err) {
  log(err.message);
  pElem.innerText = err.message;
  pElem.innerText += err.name;
} 
*/

function checkValue() {
  try {
    if (inputElem.value.length > 8) {
      throw 'Too High';
    } else {
      throw 'Too Low';
    }
  } catch (err) {
    pElem.innerText = err;
  } finally {
    inputElem.value = '';
  }
}

buttonElem.addEventListener('click', checkValue);
