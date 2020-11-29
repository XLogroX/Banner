import {RENDER_POSITION} from '../../../utils/const';
import {convertHtmlToCanvas, copyInClipboard, remove, render, saveHtmlImage} from '../../../utils/utils';
import Popup from '../popup/view/Popup';
import BannerForm from '../view/BannerForm';


class BannerFormPresenter {
  constructor(container, dataModel, bannerDataModel) {
    this._container = container;
    this._bannerFormComponent = new BannerForm();
    this._dataModel = dataModel;
    this._popup = null;
    this._bannerDataModel = bannerDataModel;
    this._changeText = this._changeText.bind(this);
    this._changeColor = this._changeColor.bind(this);
    this._changeLink = this._changeLink.bind(this);
    this._changeImage = this._changeImage.bind(this);
    this._copyHTML = this._copyHTML.bind(this);
    this._copyJSON = this._copyJSON.bind(this);
    this._createBannerImage = this._createBannerImage.bind(this);
    this._closePopup = this._closePopup.bind(this);
  }

  init() {
    render(this._bannerFormComponent, this._container, RENDER_POSITION.BEFOREEND);
    this._setListeners();
  }

  _setListeners() {
    this._bannerFormComponent.setContentFieldInputHandler(this._changeText);
    this._bannerFormComponent.setColorFieldChangeHandler(this._changeColor);
    this._bannerFormComponent.setLinkFieldChangeHandler(this._changeLink);
    this._bannerFormComponent.setImageFieldChangeHandler(this._changeImage);
    this._bannerFormComponent.setHTMLCopyHandler(this._copyHTML);
    this._bannerFormComponent.setJSONCopyHandler(this._copyJSON);
    this._bannerFormComponent.setPNGSaveHandler(this._createBannerImage);
  }

  _changeText(data) {
    this._dataModel.update('textChange', data);
  }

  _changeColor(data) {
    this._dataModel.update('colorChange', data);
  }

  _changeLink(data) {
    this._createPopup('Ссылка успешно добавлена');
    this._dataModel.update('linkChange', data);
  }

  _changeImage(data) {
    const onSuccess = () => this._createPopup('Изображение успешно добавлено');
    const onError = () => this._createPopup('Ошибка. Добавить изображение не удалось');
    return fetch(data.image).then(() => {
      const img = new Image();
      img.src = data.image;

      this._dataModel.update('imageChange', data);

      const t = new Promise((res, rej) => {
        img.onload = res;
        img.onerror = rej;
      });

      return t.then(() => {
        onSuccess();
      }).catch(() => {
        onError();
      });
    }).catch(() => {
      onError();
    });
  }

  _createPopup(message) {
    if (this._popup) {
      remove(this._popup);
    }

    this._popup = new Popup(message);
    render(this._popup, this._bannerFormComponent, RENDER_POSITION.BEFOREEND);
    setTimeout(() => {
      this._popup.setPopupCloseHandler(this._closePopup);
    }, 0);
  }

  _closePopup() {
    remove(this._popup);
    this._popup.removePopupCloseHandler();
    this._popup = null;
  }

  _copyData(data) {
    const onSuccess = () => this._createPopup('Успешно скопировано');
    const onError = () => this._createPopup('Ошибка. Копировать не удалось');
    return copyInClipboard(data, onSuccess, onError);
  }

  _copyHTML() {
    const banner = this._bannerDataModel.bannerData;
    return this._copyData(banner.outerHTML);
  }

  _copyJSON() {
    const data = JSON.stringify(this._dataModel.userData);
    return this._copyData(JSON.stringify(data));
  }

  _createBannerImage() {
    const banner = this._bannerDataModel.bannerData;
    const onError = () => {
      this._createPopup('Ошибка. Не удалось сохранить');
    };
    const savePng = (canvas) => {
      saveHtmlImage(canvas, banner.offsetWidth * 2, banner.offsetHeight * 2, 'png', 'banner');
    };
    return convertHtmlToCanvas(banner, savePng, onError, {allowTaint: false, useCORS: true, scale: 2});
  }
}

export default BannerFormPresenter;
