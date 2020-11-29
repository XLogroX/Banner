import Observer from '../Observer';

class UserData extends Observer {
  constructor() {
    super();
    this._data = {
      text: '',
      color: '',
      link: '',
      image: '',
    };
  }

  update(eventName, data) {
    this._data = Object.assign(
        {},
        this._data,
        data,
    );
    this._notify(eventName, data);
  }

  get userData() {
    return this._data;
  }
}

export default UserData;
