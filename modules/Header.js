import { DateTime } from './luxon.js';

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