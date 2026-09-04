const contextMenu = document.getElementById('contextMenu');

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();

  // const menuWidth = contextMenu.offsetWidth;
  // const menuHeight = contextMenu.offsetHeight;

  let x = event.clientX;
  let y = event.clientY;

  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;

  contextMenu.classList.add('show');
});

document.addEventListener('click', () => {
  contextMenu.classList.remove('show');
});

contextMenu.addEventListener('click', (event) => {
  event.stopPropagation();
});
