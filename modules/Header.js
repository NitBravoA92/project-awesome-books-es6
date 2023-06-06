import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

export const PageNavigation = () => {
  const pagesLinks = document.querySelectorAll('.nav-link');
  let pageId;
  let pageContainer;
  pagesLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      for (let index = 0; index < pagesLinks.length; index += 1) {
        pageId = pagesLinks[index].dataset.url;
        pageContainer = document.querySelector(`#${pageId}`);
        if (!pageContainer.classList.contains('hide')) {
          pageContainer.classList.add('hide');
          pagesLinks[index].classList.remove('change-color');
          break;
        }
      }
      link.classList.add('change-color');
      pageId = link.dataset.url;
      pageContainer = document.querySelector(`#${pageId}`);
      pageContainer.classList.remove('hide');
    });
  });
};

export const currentDateTime = () => {
  const dateContainer = document.querySelector('#date-container');
  setInterval(() => {
    const dateNow = DateTime.now();
    dateContainer.textContent = dateNow.toLocaleString(
      {
        ...DateTime.DATE_FULL,
        ...DateTime.TIME_WITH_SECONDS,
      },
    );
  }, 1000);
};