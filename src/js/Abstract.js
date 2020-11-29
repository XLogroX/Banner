import {createElement} from './utils/utils';

class Abstract {
  constructor(container) {
    this._container = container;
    this._element = null;
    this._callback = {};
  }

  _getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  createComponentElement() {
    if (!this._element) {
      this._element = createElement(this._getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  _setHandler(eventName, callback, eventType, handleFunction, selector) {
    this._callback[eventName] = callback;
    const element = selector ?
    this.createComponentElement().querySelector(selector) :
    this.createComponentElement();
    element.addEventListener(eventType, handleFunction);
  }

  removeHandler(handleFunction, eventType, selector) {
    const element = selector ?
    this.createComponentElement().querySelector(selector) :
    this.createComponentElement();
    element.removeEventListener(eventType, handleFunction);
  }
}

export default Abstract;
