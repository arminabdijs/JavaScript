/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const mappedNumbers = numbers.map((number) => number * 2)

console.log(mappedNumbers)*/

// ===========================================================

/*//callBack function
const sum = (num1, num2, callback) => {
    if ((num1 + num2) % 2 === 0) {
        callback("Even")
    } else {
        callback("Odd")
    }
}

sum(5, 7, (result) => {
    console.log(result)
})*/

// ===========================================================

//callBack function
/* const sum = (num1, num2, callback) => {
    if ((num1 + num2) % 2 === 0) {
        callback("Even")
    } else {
        callback("Odd")
    }
}

function callbackFunction(result) {
    console.log(result)
}

sum(4, 7, callbackFunction) */

// ===========================================================

/* function logger(func) {
  console.log('logged (1)');
  func();
}

function logger2() {
  console.log('logged (2)');
}

logger(logger2); */

// ===========================================================

//callback
/*
const firstLogs = () => {
    console.log(1)
    console.log(2)
}

const middleLogs = (callback) => {
    setTimeout(() => {
        console.log(3)
        callback()
    }, 1000)
}

const lastLogs = () => {
    console.log(4)
    console.log(5)
}

firstLogs()
middleLogs(lastLogs)*/

// ===========================================================

/*const books = [
    {id: 1, title: "DEAD SIMPLE PYTHON", price: 500_000},
    {id: 2, title: "1984", price: 300_000},
    {id: 3, title: "The Great Gatsby", price: 350_000},
    {id: 4, title: "Pride and Prejudice", price: 250_000},
    {id: 5, title: "To Kill a Mockingbird", price: 200_000}
]

const addBook = (title, price, callback) => {
    let newBook = {
        id: books.length + 1, title: title, price: price
    }
    setTimeout(() => {
        books.push(newBook)
        callback()
    }, 2000)
}

const booksLogger = () => console.log(books)

addBook("The Catcher in the Rye", 320_000, booksLogger)*/

// ===========================================================

// callback Hell
const books = [
  { id: 1, title: 'DEAD SIMPLE PYTHON', price: 500_000 },
  { id: 2, title: '1984', price: 300_000 },
  { id: 3, title: 'The Great Gatsby', price: 350_000 },
  { id: 4, title: 'Pride and Prejudice', price: 250_000 },
  { id: 5, title: 'To Kill a Mockingbird', price: 200_000 },
];

const addBook = (title, price, callback) => {
  let newBook = {
    id: books.length + 1,
    title: title,
    price: price,
  };
  setTimeout(() => {
    books.push(newBook);
    callback(books);
  }, 2000);
};

const booksLogger = () => console.log(books);

addBook('The Catcher in the Rye', 320_000, (books) => {
  addBook('To Kill a Mockingbird', 280_000, (books) => {
    addBook('1984', 260_000, (books) => {
      addBook('Pride and Prejudice', 240_000, (books) => {
        addBook('DEAD SIMPLE PYTHON', 480_000, (books) => {
          booksLogger();
        });
      });
    });
  });
});
