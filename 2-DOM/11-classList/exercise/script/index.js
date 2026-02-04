/* let container=document.querySelector(".container");

const themeClasses = [
  "theme-blue",
  "theme-green",
  "theme-purple",
  "theme-orange",
  "theme-red",
  "theme-dark",
  "theme-teal",
  "theme-pink"
];


setInterval(() => {
    container.classList.remove(...themeClasses);

    const randomIndex = Math.floor(Math.random() * themeClasses.length);
    
    container.classList.toggle(themeClasses[randomIndex]);

}, 5000);  */

// =====================================================================

let container = document.querySelector(".container");

let redValue , greenValue , blueValue;

setInterval(() => {
    redValue = Math.floor(Math.random() * 256);
    greenValue = Math.floor(Math.random() * 256);
    blueValue = Math.floor(Math.random() * 256);

    container.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    container.style.color = `rgb(${255 - redValue}, ${255 - greenValue}, ${255 - blueValue})`;
}, 5000);