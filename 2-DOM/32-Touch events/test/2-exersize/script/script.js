const $ = document;
const btn = $.querySelector('button');
const closeBtn = $.querySelector('.close__modal');
const modalParent = $.querySelector('.modal-parent');
const container = $.querySelector('.container');

btn.addEventListener('click', () => {
  modalParent.className = 'modal-parent active';
  container.style.filter = 'blur(10px)';
});

window.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) {
    modalParent.className = 'modal-parent';
    container.style.filter = 'blur(0px)';
  }
});

closeBtn.addEventListener('click', () => {
  modalParent.className = 'modal-parent';
  container.style.filter = 'blur(0px)';
});
