export class Emitter {
  constructor(props) {
    this.events = new Map();
  }

  subscribe(event, callback) {
    this.events.set(event, callback);
  }

  emit(event, ...args) {
    const callback = this.events.get(event);
    if (callback && typeof callback === 'function') {
      callback.apply(this, args);
    }
  }
}

const emitter = new Emitter();

emitter.subscribe('hello', (name) => {
  console.log(`hello ${name}`);
});

emitter.emit('hello', 'world');

export default Emitter;
