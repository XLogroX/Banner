import Observer from '../Observer';

class UserData extends Observer {
  constructor() {
    super();
    this._data = {};
  }

  update(data) {
    this._data = Object.assign(
        {},
        this._data,
        data,
    );
    this._notify(data);
  }
}

export default UserData;
