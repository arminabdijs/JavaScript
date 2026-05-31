/* console.log(location);
console.log(window.location); */

// -------------------------------------------

// console.log(location.protocol);

// -------------------------------------------

// console.log(location.hostname);

// -------------------------------------------

// console.log(location.pathname);

// -------------------------------------------

// console.log(location.href);

// -------------------------------------------

// location.href='https://soft98.ir'

// -------------------------------------------

// location.href = locatio.href;

// -------------------------------------------

/* document.getElementById('relod').addEventListener('click', () => {
    location.reload();
    
}); */

// -------------------------------------------

// document.getElementById('relod').addEventListener('click', () => {
//     location.assign('https://soft98.ir'); //save on history 
// });

// -------------------------------------------

document.getElementById('relod').addEventListener('click', () => {
  location.replace('https://soft98.ir'); //don't save on history
});
