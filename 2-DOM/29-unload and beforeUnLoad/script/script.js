let $ = document;
let { log } = console;

/* window.addEventListener('unload', () => {
  log('event unloaded');
});

function unloadHandler() {
  log('unloaded');
} */

// ======================================================
window.addEventListener('pagehide', () => {
  alert('کاربر صفحه را ترک کرد');
});
// ======================================================

window.addEventListener('beforeunload', () => {
  alert('event beforeunload');
});

function beForeunLoadHandler() {
  log('event beforeunload');
}


/*
کاربر می‌خواهد صفحه را ترک کند
          ↓
     beforeunload
          ↓
      pagehide
          ↓
       صفحه خارج شد
 */
