function _id(id) {
  return document.getElementById(id);
}

function _createElement(element) {
  return document.createElement(element);
}

let titleBook = _id('title');
let authorBook = _id('author');
let yearBook = _id('year');
let addBookBtn = _id('add-btn');
let bookList = _id('book-list');

let books = [];

function clickHandeler(event) {
  event.preventDefault();

  let titleBookValue = titleBook.value;
  let authorBookValue = authorBook.value;
  let yearBookValue = yearBook.value;

  if (
    titleBookValue.length < 3 ||
    authorBookValue.length < 3 ||
    isNaN(yearBookValue) ||
    yearBookValue < 1000
  ) {
    alert('Please input your informarion.');
    makeEmptyInputs();
  } else {
    let newBookObject = {
      id: books.length + 1,
      title: titleBookValue,
      author: authorBookValue,
      year: yearBookValue,
    };

    books.push(newBookObject);

    setIntoLocalStorage(books);
  }
}

function setIntoLocalStorage(allBooksArray) {
  localStorage.setItem('books', JSON.stringify(allBooksArray));
  makeEmptyInputs();
  booksGenerator(allBooksArray);
}

function makeEmptyInputs() {
  titleBook.value = '';

  authorBook.value = '';

  yearBook.value = '';
}

function booksGenerator(allBooksArray) {
  bookList.innerHTML = '';

  allBooksArray.forEach((book) => {
    let newBookTr = _createElement('tr');
    let newBookTitle = _createElement('td');
    let newBookAuthor = _createElement('td');
    let newBookYear = _createElement('td');

    newBookTitle.innerText = book.title;
    newBookAuthor.innerText = book.author;
    newBookYear.innerText = book.year;

    newBookTr.append(newBookTitle, newBookAuthor, newBookYear);
    bookList.append(newBookTr);
  });
}

function getBooksFromLocalStorage() {
  let localStorageBooks = localStorage.getItem('books');
  if (localStorageBooks) {
    books = JSON.parse(localStorageBooks);
    booksGenerator(books);
  }
}

addBookBtn.addEventListener('click', clickHandeler);

window.addEventListener('load', getBooksFromLocalStorage);

