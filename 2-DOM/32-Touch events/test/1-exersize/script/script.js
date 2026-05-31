const $ = document;

const wrapperInput = $.querySelector('.wrapper__input');
const inputAdsin = $.querySelector('.wrapper__input--adsin');
const inputText = $.querySelector('input');
const inputMaxLength = inputText.getAttribute('maxlength');
const lengthNumber = $.querySelector('.length__number');

inputText.addEventListener('keyup', (event) => {
  lengthNumber.style.color = '#68a4b6';
  inputAdsin.style.color = '#68a4b6';
  lengthNumber.style.borderColor = '#68a4b6';

    lengthNumber.innerHTML = inputMaxLength - inputText.value.length;
    
  if (inputText.value.length === 0) {
    lengthNumber.style.color = '#bebbbe';
    inputAdsin.style.color = '#bebbbe';
    lengthNumber.style.borderColor = '#bebbbe';
  }
});


inputText.addEventListener('blur', (event) => {
  lengthNumber.style.color = '#bebbbe';
  inputAdsin.style.color = '#bebbbe';
  lengthNumber.style.borderColor = '#bebbbe';
});
