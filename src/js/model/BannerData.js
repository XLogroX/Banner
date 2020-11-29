import Observer from '../Observer';

class BannerData extends Observer {
  constructor() {
    super();
    this._data = null;
  }

  update(eventName, data) {
    this._data = data;
    this._notify(eventName, data);
  }

  get bannerData() {
    return this._data;
  }

  set bannerData(data) {
    this._data = data;
  }
}

export default BannerData;
