import Abstract from '../../../Abstract';
import {bannerStyle, BANNER_HEIGHT, BANNER_WIDTH} from '../../../utils/const';
import {createElement, encodeData} from '../../../utils/utils';
import {handleText} from './BannerPreview.functions';
import {createBannerPreviewTemplare} from './bannerPreview.template';

class BannerPreview extends Abstract {
  _getTemplate() {
    return createBannerPreviewTemplare(BANNER_WIDTH, BANNER_HEIGHT);
  }

  createComponentElement() {
    if (!this._element) {
      this._element = createElement(this._getTemplate());
      Object.keys(bannerStyle).forEach((key) => {
        this._element.querySelector('[data-type="banner"]').style[key] = bannerStyle[key];
      });
    }
    return this._element;
  }

  _copyData(data) {
    return Object.assign({}, data);
  }

  getBanner() {
    return this.createComponentElement().querySelector('[data-type="banner"]');
  }

  renderText(data) {
    const {text} = this._copyData(data);
    handleText(encodeData(text), this.getBanner());
  }

  changeColor(data) {
    const {color} = this._copyData(data);
    this.getBanner().style.backgroundColor = color;
  }

  changeImage(data) {
    const {image} = this._copyData(data);
    this.getBanner().style.backgroundImage = `url(${encodeData(image)})`;
  }

  changeLink(data) {
    const {link} = this._copyData(data);
    this.getBanner().setAttribute('href', encodeData(link));
  }
}

export default BannerPreview;
