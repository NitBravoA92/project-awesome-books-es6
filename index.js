import AwesomeBookLibrary from './modules/AwesomeBookLibrary.js';
import { currentDateTime } from './modules/Header.js';

currentDateTime();

const app = new AwesomeBookLibrary();
app.initBooks();