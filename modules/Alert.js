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

  renderAlert() {
    this.container.innerHTML = this.htmlContentAlert();
    this.closeTimeout = setTimeout(() => {
      this.container.innerHTML = '';
    }, 5000);
    this.removeHandlerEvent();
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
      if (typeof this.closeTimeout === 'number') {
        clearTimeout(this.closeTimeout);
      }
    });
  }

  success(title, message) {
    this.type = 'success';
    this.setAlertInfo(title, message);
    this.renderAlert();
  }

  error(title, message) {
    this.type = 'error';
    this.setAlertInfo(title, message);
    this.renderAlert();
  }
}
export default Alert;