import Book from './Book.js';

class AwesomeBookLibrary {
  constructor() {
    this.books = [];
    this.booksContainer = document.querySelector('#books-container');
    this.formAddBook = document.querySelector('#form-book');
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

  removeBook = (event) => {
    const bookIndex = event.target.parentElement.dataset.item;
    this.books.splice(bookIndex, 1);
    this.storageBooks();
    this.renderBooks();
  }

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
    return bookItem;
  }

}