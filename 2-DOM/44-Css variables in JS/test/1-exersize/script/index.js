let $ = document;

let colorPlate = $.querySelectorAll('.color-plate');

colorPlate.forEach((color) => {
  color.addEventListener('click', (e) => {
    let colorCss = getComputedStyle(e.target);
    $.documentElement.style.setProperty('--theme-color', colorCss.backgroundColor);
  });
});