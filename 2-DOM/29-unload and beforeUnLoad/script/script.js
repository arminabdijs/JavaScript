let $ = document;
let { log } = console;

window.addEventListener('unload', () => {
  log('event unloaded');
});

function unloadHandler() {
  log('unloaded');
}

// ======================================================

window.addEventListener('beforeunload', () => {
  log('event beforeunload');
});

function beForeunLoadHandler() {
  log('event beforeunload');
}
