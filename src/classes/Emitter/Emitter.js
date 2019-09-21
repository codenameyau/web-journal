export class Emitter {
  constructor(props) {
    this.events = new Map();
  }

  subscribe(event, callback) {
    this.events.set(event, callback);
  }

  unsubscribe(event) {
    this.events.delete(event);
  }

  emit(event, ...args) {
    const callback = this.events.get(event);
    if (callback && typeof callback === 'function') {
      callback.apply(this, args);
    }
  }
}

export default Emitter;
