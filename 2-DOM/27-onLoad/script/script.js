let $ = document;
let { log } = console;

let img =$.querySelector('img')

function loadHandler() {
  log('loaded');
}

function loadImageHandler(event) {
  log('loaded image');
}

$.body.onload=loadHandler

img.onload=loadImageHandler


window.addEventListener('load',loadHandler)