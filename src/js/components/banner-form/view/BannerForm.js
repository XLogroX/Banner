import Abstract from '../../../Abstract';
import {createBannerFormTemplare} from './bannerForm.tempate';

class BannerForm extends Abstract {
  constructor() {
    super();
    this._data = {};

    this._onContentFieldInput = this._onContentFieldInput.bind(this);
    this._onColorFieldChange = this._onColorFieldChange.bind(this);
    this._onLinkButtonClick = this._onLinkButtonClick.bind(this);
    this._onImageButtonClick = this._onImageButtonClick.bind(this);
    this._onCopyHTMLButtonClick = this._onCopyHTMLButtonClick.bind(this);
    this._onCopyJSONButtonClick = this._onCopyJSONButtonClick.bind(this);
    this._onSavePNGButtonClick = this._onSavePNGButtonClick.bind(this);
  }
  _getTemplate() {
    return createBannerFormTemplare();
  }

  _onContentFieldInput(evt) {
    this._data.text = evt.target.value;
    this._callback.contentInput(this._data);
  }

  _onColorFieldChange(evt) {
    this._data.color = evt.target.value;
    this._callback.colorChange(this._data);
  }

  _onLinkButtonClick(evt) {
    const linkField = this.createComponentElement().querySelector('[data-type="link"]');
    linkField.reportValidity();

    if (!linkField.validity.valid || !linkField.value) {
      return;
    }

    this._data.link = linkField.value;
    this._callback.linkChange(this._data);
  }

  _onImageButtonClick(evt) {
    const imageField = this.createComponentElement().querySelector('[data-type="image"]');
    imageField.reportValidity();

    if (!imageField.validity.valid || !imageField.value) {
      return;
    }

    this._data.image = imageField.value;
    this._changeFormState(true);
    const promise = this._callback.imageChange(this._data);
    promise.then(() => {
      this._changeFormState();
    });
  }

  _onCopyHTMLButtonClick() {
    this._changeFormState(true);
    const promise = this._callback.copyHTML();
    promise.then(() => {
      this._changeFormState();
    });
  }

  _onCopyJSONButtonClick() {
    this._changeFormState(true);
    const promise = this._callback.copyJSON();
    promise.then(() => {
      this._changeFormState();
    });
  }

  _onSavePNGButtonClick() {
    this._changeFormState(true);
    const promise = this._callback.savePNG();
    promise.then(() => {
      this._changeFormState();
    });
  }

  _changeFormState(disabled = false) {
    const controls = this.createComponentElement().querySelectorAll('[data-type]');
    controls.forEach((control) => {
      control.disabled = disabled;
    });
  }

  setContentFieldInputHandler(cb) {
    this._setHandler('contentInput', cb, 'input', this._onContentFieldInput, '[data-type="contentField"]');
  }

  setColorFieldChangeHandler(cb) {
    this._setHandler('colorChange', cb, 'change', this._onColorFieldChange, '[data-type="colorField"]');
  }

  setLinkFieldChangeHandler(cb) {
    this._setHandler('linkChange', cb, 'click', this._onLinkButtonClick, '[data-type="linkButton"]');
  }

  setImageFieldChangeHandler(cb) {
    this._setHandler('imageChange', cb, 'click', this._onImageButtonClick, '[data-type="imageButton"]');
  }

  setHTMLCopyHandler(cb) {
    this._setHandler('copyHTML', cb, 'click', this._onCopyHTMLButtonClick, '[data-type="copyHTML"]');
  }

  setJSONCopyHandler(cb) {
    this._setHandler('copyJSON', cb, 'click', this._onCopyJSONButtonClick, '[data-type="copyJSON"]');
  }

  setPNGSaveHandler(cb) {
    this._setHandler('savePNG', cb, 'click', this._onSavePNGButtonClick, '[data-type="savePNG"]');
  }
}

export default BannerForm;
