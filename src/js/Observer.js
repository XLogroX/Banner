class Observer {
  constructor() {
    this._observers = {};
  }

  addObserver(eventName, fn) {
    this._observers[eventName] = this._observers[eventName] || [];
    this._observers[eventName].push(fn);

    return () => {
      this._observers[eventName] = this._observers[eventName].filter((observer) => {
        return observer !== fn;
      });
    };
  }

  _notify(eventName, ...args) {
    if (!Array.isArray(this._observers[eventName])) {
      return false;
    }
    this._observers[eventName].forEach((observer) => {
      observer(...args);
    });

    return true;
  }
}
export default Observer;
