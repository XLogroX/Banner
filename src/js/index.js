import '@/scss/style';
import BannerFormPresenter from './components/banner-form/presenter/BannerFormPresenter';
import BannerPreviewPresenter from './components/banner-prewiew/presenter/BannerPreviewPresenter';
import BannerData from './model/BannerData';
import UserData from './model/UserData';

const main = document.querySelector('main');

const userDataModel = new UserData();
const bannerDataModel = new BannerData();
const bannerFormPresenter = new BannerFormPresenter(main, userDataModel, bannerDataModel);
const bannerPreviewPresenter = new BannerPreviewPresenter(main, userDataModel, bannerDataModel);

bannerPreviewPresenter.init();
bannerFormPresenter.init();

bannerPreviewPresenter.updateTemplateData();
