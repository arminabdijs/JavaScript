let $ = document;

let resumeContent = $.querySelector('.resume-content');
let preloader = $.querySelector('.preloader');

let loadedWebsite = function () {
  setTimeout(() => {
    preloader.className = 'preloader hidden';
    resumeContent.className = 'resume-content visible';
  }, 5000);
};

window.addEventListener('load', loadedWebsite);
