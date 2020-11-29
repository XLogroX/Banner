import Abstract from '../../../../Abstract';
import {createPopupTemplate} from './popup.template';

class Popup extends Abstract {
  constructor(message) {
    super();
    this._message = message;
    this._onPopupCloseClick = this._onPopupCloseClick.bind(this);
  }
  _getTemplate() {
    return createPopupTemplate(this._message);
  }

  _onPopupCloseClick(evt) {
    if (!evt.target.closest('[data-popup="popup"]') || evt.target.dataset.popup === 'close') {
      this._callback.closePopup();
    }
  }

  setPopupCloseHandler(cb) {
    this._callback.closePopup = cb;
    document.addEventListener('click', this._onPopupCloseClick);
  }

  removePopupCloseHandler() {
    document.removeEventListener('click', this._onPopupCloseClick);
  }
}

export default Popup;
