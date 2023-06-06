import AwesomeBookLibrary from './modules/AwesomeBookLibrary.js';
import { PageNavigation, currentDateTime } from './modules/Header.js';

PageNavigation();
currentDateTime();

const app = new AwesomeBookLibrary();
app.initBooks();