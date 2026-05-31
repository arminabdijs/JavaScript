let $ = document;
let { log } = console;
// use all element


function scrollHandler(event) {
  // log('scroll :)');

  // log(event);
  
  log($.documentElement.scrollTop, $.documentElement.scrollLeft);
  log($.documentElement.scrollHeight, $.documentElement.scrollWidth);
}

// window.addEventListener('scroll', scrollHandler);

$.addEventListener('scroll', scrollHandler);

// $.body.onscroll = scrollHandler;
