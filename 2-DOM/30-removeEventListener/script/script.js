let $ = document;

const boxElem = $.getElementById('box');
const btnElem = $.getElementById('btn');

function mouseMoveHandler() {
  console.log("mousemove");
  
}

function removeHandler() {
  boxElem.removeEventListener('mousemove', mouseMoveHandler);
  console.log('Event Remove');
  
}

btnElem.addEventListener('click',removeHandler)
boxElem.addEventListener('mousemove', mouseMoveHandler);