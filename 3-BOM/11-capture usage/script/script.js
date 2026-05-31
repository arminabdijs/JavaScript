const listItems = document.querySelectorAll('li');
const inputtElem = document.querySelector('input');
const languageContainer = document.querySelector('.list');

/* listItems.forEach((listItem) => {
  listItem.addEventListener('click', (event) => {
    console.log(event.target);
    event.target.remove();
  });
}); */
languageContainer.addEventListener('click', (event) => {
  // console.log(event.target.tagName);
  if (event.target.tagName === 'LI') {
    event.target.remove();
  }
});

inputtElem.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    let newLanguage = document.createElement('li');

    newLanguage.innerHTML = event.target.value;

    languageContainer.append(newLanguage);

    // console.log(listItems);

    inputtElem.value = '';
  }
});
