let $ = document;

const navToggle = $.querySelector('.nav__toggle-icon');
const menuToggle = $.querySelector('.menu');
const coverToggle = $.querySelector('.cover');
const resumeListItems = $.querySelectorAll('.resume-list__item');
const portfolioListItems = $.querySelectorAll('.portfolio-list__item');
const menuItems = $.querySelectorAll('.menu__item');
const changeTheme = $.querySelector('.change__theme');

navToggle.addEventListener('click', function () {
  this.classList.toggle('nav__toggle-icon--open');
  menuToggle.classList.toggle('menu--open');
  coverToggle.classList.toggle('cover--show');
});

function navigationTabInit(listItems, listItemActiveClass, contentItemShowClass) {
  listItems.forEach((listItem) => {
    listItem.addEventListener('click', function () {
      removeActiveClass(listItemActiveClass);
      removeActiveClass(contentItemShowClass);

      this.classList.add(listItemActiveClass);

      let contentId = this.getAttribute('data-content-id');
      $.querySelector(contentId).classList.add(contentItemShowClass);
    });
  });
}

function removeActiveClass(className) {
  $.querySelector(`.${className}`).classList.remove(className);
}

navigationTabInit(portfolioListItems, 'portfolio-list__item--active', 'portfolio-content--show');
navigationTabInit(resumeListItems, 'resume-list__item--active', 'resume-content--show');

menuItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    removeActiveClass('menu__item--active');
    item.classList.add('menu__item--active');

    let sectionClass = item.getAttribute('data-section');
    let sectionOffsetTop = $.querySelector(`.${sectionClass}`).offsetTop;

    window.scroll({
      top: sectionOffsetTop,
      behavior: 'smooth',
    });
  });
});

changeTheme.addEventListener('click', (e) => {
  e.preventDefault();
    $.documentElement.classList.toggle('dark-theme');
    if ($.documentElement.className.includes('dark-theme')) {
      localStorage.setItem('theme', 'dark-theme');
    } else {
      localStorage.setItem('theme', 'light-theme');
    }
});

window.onload = () => {
    let localStorageTheme = localStorage.getItem("theme")
    

    if (localStorageTheme === 'dark-theme') {
      $.documentElement.classList.toggle('dark-theme');
    }
};

