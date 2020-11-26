import {createElement} from './utils/utils';

class Abstract {
  constructor(container) {
    this._container = container;
    this._element = null;
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

  removeElent() {
    this._element = null;
  }
}

export default Abstract;
