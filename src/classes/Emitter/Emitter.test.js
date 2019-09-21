import Emitter from './Emitter';

describe('Emitter', () => {
  let emitter;

  const handler = (...args) => {
    console.log('hello', ...args);
  };

  const handler2 = (...args) => {
    console.log('bonjour', ...args);
  };

  beforeEach(() => {
    emitter = new Emitter();
  });

  it('should contain method: emit', () => {
    const spy = jest.spyOn(emitter, 'emit');
    emitter.subscribe('hello', handler);
    emitter.emit('hello', 'world', 'how', 'are', 'you');
    expect(spy).toBeCalledWith('hello', 'world', 'how', 'are', 'you');
  });

  it('should contain method: subscribe', () => {
    const spy = jest.spyOn(emitter, 'subscribe');

    emitter.subscribe('hello', handler);
    expect(spy).toBeCalledWith('hello', handler);
    expect(emitter.events.get('hello')).toBe(handler);
  });

  it('should handle subscribing to the same event', () => {
    const spy = jest.spyOn(emitter, 'subscribe');

    emitter.subscribe('hello', handler);
    emitter.subscribe('hello', handler2);
    expect(spy).toBeCalledWith('hello', handler2);
    expect(emitter.events.get('hello')).toBe(handler2);
  });

  it('should contain method: unsubscribe', () => {
    const spy = jest.spyOn(emitter, 'unsubscribe');

    emitter.subscribe('hello', handler);
    emitter.unsubscribe('hello');
    expect(spy).toBeCalledWith('hello');
  });

  it('should handle unsubscribe when not already subscribed', () => {
    const spy = jest.spyOn(emitter, 'unsubscribe');

    emitter.unsubscribe('hello');
    expect(spy).toBeCalledWith('hello');
  });
});
