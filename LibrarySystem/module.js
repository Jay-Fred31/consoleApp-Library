let libraryRepository = (function () {
  ("use strict");

  // Privates

  // create list list repository for the books
  let booksRepository = [];

  // define the category for the books
  let bookCategory;

  bookCategory = ["classic", "crime", "horror"];

  // Add books to the Library repository
  booksRepository.push({
    bookName: [
      "Little Woman",
      "Pride and Prejudice",
      "The great GATSBY",
      "Frankenstein",
    ],
    category: bookCategory[0],
  });

  booksRepository.push({
    bookName: ["In Cold Blood", "Devil in the White City", "The Big Sleep"],
    category: bookCategory[1],
  });

  booksRepository.push({
    bookName: ["House of Leaves", "Mexican Gothic"],
    category: bookCategory[2],
  });

  // function to display books category

  const _categoryList = function () {
    for (let i = 0; i < bookCategory.length; i++) {
      console.log(`${[i]}` + ": " + bookCategory[i]);
    }
  };

  // function to view books with category in the library
  const _viewAllBooks = function () {
    console.log(booksRepository);
  };

  // view books by category

  const _viewBooksByCategory = function (category) {
    let books;
    books = booksRepository.find((book) => (book.category = category));
    console.log(books);
  };

  // function to add a new book to the library
  const _addNewBook = function (category, bookName) {
    if (
      bookCategory.includes(category) == false &&
      bookCategory.includes(bookName) == false
    ) {
      bookCategory.push(category);
      booksRepository.push({ bookName, category });
    } else {
      console.log(
        "We are sorry, it looks like the category " +
          `${category}` +
          " already exist"
      );
      console.log("Below is a list of all available book category");
      _categoryList();
    }
  };

  //   function to retrieve all array of books
  const _getbooks = function (library, bookName) {
    let arrayOfArrayBooks = [];
    for (let i = 0; i < library.length; ++i)
      arrayOfArrayBooks.push(library[i][bookName]);
    return arrayOfArrayBooks;
  };

  //   save array of books
  const arrayBooks = _getbooks(booksRepository, "bookName");

  // list of available books in the library
  let listOfAllBooks = [];
  const _showAllBooks = function () {
    for (let i = 0; i < arrayBooks.length; i++) {
      for (let j = 0; j < arrayBooks[i].length; j++) {
        listOfAllBooks.push(arrayBooks[i][j]);
      }
    }
    console.log(listOfAllBooks);
  };

  //   Function to retrieve an array of all books in the library
  let borrowedBooks = [];

  const _borrowBook = function (book) {
    if (listOfAllBooks.includes(book) == true) {
      borrowedBooks.push(book);
      console.log("You just borrowed" + ": " + `${borrowedBooks}`);
      _removeABook(listOfAllBooks, book);
    } else {
      console.log(
        "We are sorry, the requested book does not exist in the library"
      );
    }
  };

  //   function to show all borrowed book
  const _getAllBorrowedBooks = function () {
    console.log(borrowedBooks);
  };

  //   function to remove a book from list of all books

  const _removeABook = function (bookArray, bookName) {
    let indexOfBorrowedBook = bookArray.indexOf(bookName);
    if (indexOfBorrowedBook != -1) {
      bookArray.splice(indexOfBorrowedBook, 1);
    }
  };

  // function to return borrowed books

  const _returnBorrowedBook = function (bookName) {
    if (borrowedBooks.includes(bookName) == true) {
      listOfAllBooks.push(bookName);
      _removeABook(borrowedBooks, bookName);
      console.log(
        "Thank you for returning the book " + `${bookName}` + " to the library"
      );
    }
  };

  return {
    viewLibrary: _viewAllBooks,
    booksByCategory: _viewBooksByCategory,
    addNewBook: _addNewBook,
    viewBorrowedBooks: _borrowBook,
    returnBorrowedBook: _returnBorrowedBook,
    viewAllBooks: _showAllBooks,
    getBooks: _getbooks,
    getAllBorrowedBooks: _getAllBorrowedBooks,
  };
})();

libraryRepository.viewAllBooks();

libraryRepository.viewBorrowedBooks("Devil in the White City");

libraryRepository.returnBorrowedBook("Devil in the White City");
