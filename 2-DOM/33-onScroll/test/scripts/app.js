let $ = document;

let header = $.querySelector('.header');

$.addEventListener('scroll', (event) => {
  if ($.documentElement.scrollTop > 0) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});
 