let $ = document;

const btnElem = $.querySelector('button');


function changeCssVariable() {
  $.documentElement.style.setProperty('--color-red', "green");
  
  console.log($.documentElement.style.getPropertyValue('--color-red'));
  
}


btnElem.addEventListener('click',changeCssVariable)