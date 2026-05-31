let $ = document;
let { log } = console;

let btn = $.getElementById('btn');

btn.addEventListener('click', (event) => {
  log(event);
});

function contextHandler(event) {
  log(event.pageX, event.pageY);
}
