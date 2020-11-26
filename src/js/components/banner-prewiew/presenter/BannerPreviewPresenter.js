import {RENDER_POSITION} from '../../../utils/const';
import {render} from '../../../utils/utils';
import BannerPreview from '../view/BannerPreview';


class BannerPreviewPresenter {
  constructor(container) {
    this._container = container;
    this._bannerFormComponent = new BannerPreview();
  }
  init() {
    render(this._bannerFormComponent, this._container, RENDER_POSITION.BEFOREEND);
  }
}

export default BannerPreviewPresenter;
