import Abstract from '../../../Abstract';
import {createBannerPreviewTemplare} from './bannerPreview.template';

class BannerPreview extends Abstract {
  _getTemplate() {
    return createBannerPreviewTemplare();
  }
}

export default BannerPreview;
