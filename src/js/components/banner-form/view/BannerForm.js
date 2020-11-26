import Abstract from '../../../Abstract';
import {createBannerFormTemplare} from './bannerForm.tempate';

class BannerForm extends Abstract {
  _getTemplate() {
    return createBannerFormTemplare();
  }
}

export default BannerForm;
