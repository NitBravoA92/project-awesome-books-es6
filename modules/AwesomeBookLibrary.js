import Book from './Book.js';

class AwesomeBookLibrary {
  constructor() {
    this.books = [];
    this.booksContainer = document.querySelector('#books-container');
    this.formAddBook = document.querySelector('#form-book');
  }

  storageBooks() {
    localStorage.setItem('library', JSON.stringify(this.books));
  }
  
}