class Alert {
  constructor(container) {
    this.type = '';
    this.title = '';
    this.message = '';
    this.container = document.querySelector(`${container}`);
    this.closeTimeout = undefined;
  }
}
export default Alert;