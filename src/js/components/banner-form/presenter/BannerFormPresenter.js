import {RENDER_POSITION} from '../../../utils/const';
import {render} from '../../../utils/utils';
import BannerForm from '../view/BannerForm';


class BannerFormPresenter {
  constructor(container) {
    this._container = container;
    this._bannerFormComponent = new BannerForm();
  }
  init() {
    render(this._bannerFormComponent, this._container, RENDER_POSITION.BEFOREEND);
  }
}

export default BannerFormPresenter;
