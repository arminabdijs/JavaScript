let $ = document;

let contextMenu = $.getElementById('contextMenu');
let menuItems = $.querySelectorAll('.menu-item');

function contextHandler(event) {
  event.preventDefault();

  if (contextMenu.style.display === 'none') {
    contextMenu.style.display = 'block';
    contextMenu.style.left = event.pageX + 'px';
    contextMenu.style.top = event.pageY + 'px';
  } else {
    contextMenu.style.left = event.pageX + 'px';
    contextMenu.style.top = event.pageY + 'px';
  }
}

function clickContextMenu() {
  contextMenu.style.display = 'none';
}

function keyDownHandler(event) {
  if (event.keyCode === 27) {
    contextMenu.style.display = 'none';
  }
}

$.body.addEventListener('contextmenu', contextHandler);

$.body.addEventListener('click', clickContextMenu);

$.body.addEventListener('keydown', keyDownHandler);
