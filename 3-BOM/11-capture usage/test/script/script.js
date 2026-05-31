const $ = document;

window.addEventListener('DOMContentLoaded', () => {
  const colorPlate = $.querySelectorAll('.color-plate');
  const iconPlase = $.querySelector('.icon__plase');
  const iconBin = $.querySelector('.icon__bin');
  const contaentHistoryNoteApp = $.querySelector('.contaent__history--note-app');
  const noteAppInput = $.getElementById('note-app__input');
  const isExistMassage = $.querySelector('p');

  let bgcolor;

  function clearInput() {
    noteAppInput.value = '';
    noteAppInput.style.backgroundColor = 'rgb(254,254,254)';
    bgcolor = 'rgb(254,254,254)';
  }

  function activeAlert() {
    isExistMassage.innerHTML = 'value exist to note or empity';
    isExistMassage.className = 'active';
    isExistMassage.style.backgroundColor = '#ff1f65';
    setTimeout(() => {
      isExistMassage.className = '';
    }, 4000);
  }

  function addNoteFun() {
    if (noteAppInput.value.trim()) {
      let itemHistoryNoteApp = $.createElement('div');
      itemHistoryNoteApp.setAttribute('class', 'item__history--note-app');
      itemHistoryNoteApp.innerHTML = noteAppInput.value;
      itemHistoryNoteApp.style.backgroundColor = bgcolor;
      contaentHistoryNoteApp.appendChild(itemHistoryNoteApp);
    } else {
      activeAlert();
    }
  }

  contaentHistoryNoteApp.addEventListener('click', (event) => {
    if (event.target.tagName === 'DIV') {
      event.target.remove();
      // event.target.parentElement.remove();; //if div>p
      isExistMassage.innerHTML = `${event.target.innerHTML} is removed`;
      isExistMassage.className = 'active';
      isExistMassage.style.backgroundColor = '#18db18';
      setTimeout(() => {
        isExistMassage.className = '';
      }, 4000);
    }
  });

  iconPlase.addEventListener('click', () => {
    addNoteFun();
    clearInput();
  });

  iconBin.addEventListener('click', () => {
    clearInput();
  });

  noteAppInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      addNoteFun();
      clearInput();
    }
  });

  colorPlate.forEach((color) => {
    color.addEventListener('click', (event) => {
      bgcolor = event.target.style.backgroundColor;
      noteAppInput.style.backgroundColor = bgcolor;
    });
  });
});
