const contextMenu = document.querySelector('.context-menu');

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();

  let x = event.pageX;
  let y = event.pageY;


  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.classList.add('show');
  
});
document.addEventListener('click', () => {
  contextMenu.classList.remove('show');
});
document.addEventListener('scroll', () => {
  contextMenu.classList.remove('show');
});
