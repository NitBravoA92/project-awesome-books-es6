class Alert {
  constructor(container) {
    this.type = '';
    this.title = '';
    this.message = '';
    this.container = document.querySelector(`${container}`);
    this.closeTimeout = undefined;
  }

  setAlertInfo(title, message) {
    this.title = title;
    this.message = message;
  }

  htmlContentAlert() {
    return `<div class="alert ${this.type}">
      <div class="alert-header">
        <h3 class="alert-title">${this.title}</h3> <button type="button" id="close-alert">X</button>
      </div>
      <p class="alert-message">${this.message}</p>
    </div>
    `;
  }

  removeHandlerEvent() {
    document.querySelector('#close-alert').addEventListener('click', () => {
      this.container.innerHTML = '';
    });
  }


}
export default Alert;