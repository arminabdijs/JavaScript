let DOC = document;

const cells = DOC.querySelectorAll('.cell');
const input = DOC.getElementById('input');
let caps = false;

cells.forEach((cell) => {
  cell.addEventListener('click', (e) => {
    let valueClick = e.target.innerText;
    let valueInput = input.value;
    if (valueClick === 'BACK') {
      input.value = valueInput.slice(0, -1);
    } else if (valueClick === 'ESC') {
      input.value = '';
    } else if (valueClick === 'TAB') {
      input.value += '    ';
    } else if (valueClick === 'ENTER') {
      input.value = '';
    } else if (valueClick === 'SHIFT') {
      return;
    } else if (valueClick === 'CAPS') {
      caps = !caps;
    } else {
      if (caps) {
        input.value += valueClick.toUpperCase();
      } else {
        input.value += valueClick.toLowerCase();
      }
    }
  });
});

DOC.addEventListener('keydown', (e) => {
  e.preventDefault();
  let physicalKey = e.keyCode === 16 ? e.code : e.keyCode;
  let valueInput = input.value;

  console.log(physicalKey);
  

  let correspondingCell = DOC.querySelector(`.cell[data-id="${physicalKey}"]`);
  let isExist = correspondingCell.getAttribute('data-id');

  correspondingCell.classList.add('hit');

  correspondingCell.addEventListener('animationend', () => {
    correspondingCell.classList.remove('hit');
  });

  if (isExist === '8') {
    input.value = valueInput.slice(0, -1);
  } else if (isExist === '27') {
    input.value = '';
  } else if (isExist === '9') {
    input.value += '    ';
  } else if (isExist === '13') {
    input.value = '';
  } else if (e.code === 'ShiftRight' || e.code === 'ShiftLeft') {
    return;
  } else if (isExist === '20') {
    caps = !caps;
  } else {
    if (caps) {
      input.value += correspondingCell.innerText.toUpperCase();
    } else {
      input.value += correspondingCell.innerText.toLowerCase();
    }
  }
});
