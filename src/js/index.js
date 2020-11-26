import '@/scss/style';
import BannerFormPresenter from './components/banner-form/presenter/BannerFormPresenter';
import BannerPreviewPresenter from './components/banner-prewiew/presenter/BannerPreviewPresenter';

const main = document.querySelector('main');

const bannerFormPresenter = new BannerFormPresenter(main);
const bannerPreviewPresenter = new BannerPreviewPresenter(main);

bannerPreviewPresenter.init();
bannerFormPresenter.init();
