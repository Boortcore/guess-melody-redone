import getElementFromTemplate from './getElementFromTemplate';

export default class AbstractView {

  get template() {
    throw new Error(`Нужно переопределить`);
  }

  render() {
    return getElementFromTemplate(this.template);
  }

  bind() {
    throw new Error(`Нужно переопределить`);
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }

  getMarkup() {

  }
}
