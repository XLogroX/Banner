import {RENDER_POSITION} from '../../../utils/const';
import {render} from '../../../utils/utils';
import BannerPreview from '../view/BannerPreview';


class BannerPreviewPresenter {
  constructor(container, dataModel, bannerDataModel) {
    this._container = container;
    this._bannerPreviewComponent = new BannerPreview();
    this._dataModel = dataModel;
    this._bannerDataModel = bannerDataModel;
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
  }

  init() {
    render(this._bannerPreviewComponent, this._container, RENDER_POSITION.BEFOREEND);
    this._addObservers();
  }

  _addObservers() {
    this._dataModel.addObserver('textChange', this.handleContentChange);
    this._dataModel.addObserver('colorChange', this.handleColorChange);
    this._dataModel.addObserver('imageChange', this.handleImageChange);
    this._dataModel.addObserver('linkChange', this.handleLinkChange);
  }

  updateTemplateData(eventName) {
    const banner = this._bannerPreviewComponent.getBanner();
    this._bannerDataModel.update(eventName, banner);
  }

  handleContentChange(data) {
    this._bannerPreviewComponent.renderText(data);
    this.updateTemplateData('textChange');
  }

  handleColorChange(data) {
    this._bannerPreviewComponent.changeColor(data);
    this.updateTemplateData('colorChange');
  }

  handleImageChange(data) {
    this._bannerPreviewComponent.changeImage(data);
    this.updateTemplateData('imageChange');
  }

  handleLinkChange(data) {
    this._bannerPreviewComponent.changeLink(data);
    this.updateTemplateData('linkChange');
  }
}

export default BannerPreviewPresenter;
