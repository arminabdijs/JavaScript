let $ = document;
let { log } = console;

let editor = $.getElementById('editor');

function copyHandler(event) {
  log('this is copy');
}

function cutHandler(event) {
  event.preventDefault()
  log('this is cut');
}

function pasteHandler(event) {
  log('this is paste');
}

editor.addEventListener('copy', copyHandler);
editor.addEventListener('cut', cutHandler);
editor.addEventListener('paste', pasteHandler);
