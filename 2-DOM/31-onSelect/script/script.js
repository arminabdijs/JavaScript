let $ = document;

/* const textElem = $.getElementById('text');

function selectHandler() {
  console.log('selected :)');
}


textElem.addEventListener('select', selectHandler); */

const username = $.getElementById('username');

function selectHandler(event) {
  console.log('selected :)', event);
}

username.addEventListener('select', selectHandler);
