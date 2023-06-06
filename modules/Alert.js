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
  
}
export default Alert;