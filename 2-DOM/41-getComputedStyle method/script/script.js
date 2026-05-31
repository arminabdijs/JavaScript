const $ = document;
const { log } = console;

const boxElem = $.querySelector('.box');

// return font size = 2rem
// log(boxElem.style.fontSize);

// return backgroundColor = empty;
// this is style external but just for inline styles
// log(boxElem.style.backgroundColor);

// --------------------------------------------------------

/* let boxStyles = getComputedStyle(boxElem);

log(boxStyles.backgroundColor);
log(boxStyles.width);
log(boxStyles.height);
log(boxStyles.display);
log(boxStyles.justifyContent);
log(boxStyles.alignItems);
log(boxStyles.color); */

// --------------------------------------------------------

let boxStyleBackgroundColor = getComputedStyle(boxElem).getPropertyValue('background-color');
let boxStyleWidth = getComputedStyle(boxElem).getPropertyValue('width');
let boxStyleHeight = getComputedStyle(boxElem).getPropertyValue('height');
let boxStyleDisplay = getComputedStyle(boxElem).getPropertyValue('display');
let boxStyleJustifyContent = getComputedStyle(boxElem).getPropertyValue('justify-content');
let boxStyleAlignItems = getComputedStyle(boxElem).getPropertyValue('align-items');
let boxStyleColor = getComputedStyle(boxElem).getPropertyValue('color');

log(boxStyleBackgroundColor);
log(boxStyleWidth);
log(boxStyleHeight);
log(boxStyleDisplay);
log(boxStyleJustifyContent);
log(boxStyleAlignItems);
log(boxStyleColor);
