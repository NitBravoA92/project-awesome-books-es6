import Book from './Book.js';
import Alert from './Alert.js';

class AwesomeBookLibrary {
  constructor() {
    this.books = [];
    this.booksContainer = document.querySelector('#books-container');
    this.formAddBook = document.querySelector('#form-book');
    /* Handle the 'Add a new book' form submit event */
    this.formAddBook.addEventListener('submit', this.saveBook);
  }

  initBooks() {
    if (localStorage.getItem('library')) {
      this.books = [...JSON.parse(localStorage.getItem('library'))];
      this.renderBooks();
    }
  }

  renderBooks() {
    this.booksContainer.innerHTML = '';
    this.books.forEach((book, index) => {
      this.booksContainer.appendChild(this.generateBookItem(book, index));
    });
  }

  storageBooks() {
    localStorage.setItem('library', JSON.stringify(this.books));
  }

  saveBook = (event) => {
    event.preventDefault();
    const alert = new Alert('#form-result');
    const { inputTitle, inputAuthor } = this.formAddBook;
    if (inputTitle.validity.valueMissing || inputAuthor.validity.valueMissing) {
      alert.error('Error!', 'You must fill in all the fields.');
      return;
    }
    const book = new Book(inputTitle.value, inputAuthor.value);
    this.books.unshift(book);
    this.storageBooks();
    alert.success('Success!', 'The book has been saved successfully.');
    this.formAddBook.reset();
    inputTitle.focus();
    this.renderBooks();
  };

  removeBook = (event) => {
    const bookIndex = event.target.parentElement.dataset.item;
    this.books.splice(bookIndex, 1);
    this.storageBooks();
    this.renderBooks();
  };

  generateBookItem(book, index) {
    const bookItem = document.createElement('div');
    const bookDetails = document.createElement('div');
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('p');
    const bookBtnRemove = document.createElement('button');
    bookItem.classList.add('book');
    bookItem.dataset.item = index;
    bookDetails.classList.add('book-details');
    bookTitle.classList.add('show-title');
    bookTitle.textContent = book.title;
    bookAuthor.classList.add('show-author');
    bookAuthor.innerHTML = `by <span class="show-author">${book.author}</span>`;
    bookBtnRemove.classList.add('removeBook');
    bookBtnRemove.setAttribute('type', 'button');
    bookBtnRemove.textContent = 'Remove';
    bookDetails.appendChild(bookTitle);
    bookDetails.appendChild(bookAuthor);
    bookItem.appendChild(bookDetails);
    bookItem.appendChild(bookBtnRemove);
    /* Handle the click event on the 'Remove' button of each Book item */
    bookBtnRemove.addEventListener('click', this.removeBook);
    return bookItem;
  }
}

export default AwesomeBookLibrary;