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

  it('should contain method: subscribe', () => {
    const subscribeSpy = jest.spyOn(emitter, 'subscribe');

    emitter.subscribe('hello', handler);
    expect(subscribeSpy).toHaveBeenCalledWith('hello', handler);
    expect(emitter.events.get('hello')).toBe(handler);
  });

  it('should handle subscribing to the same event', () => {
    const subscribeSpy = jest.spyOn(emitter, 'subscribe');

    emitter.subscribe('hello', handler);
    emitter.subscribe('hello', handler2);
    expect(subscribeSpy).toHaveBeenCalledWith('hello', handler2);
    expect(emitter.events.get('hello')).toBe(handler2);
  });

  it('should contain method: unsubscribe', () => {
    const spy = jest.spyOn(emitter, 'unsubscribe');

    emitter.subscribe('hello', handler);
    emitter.unsubscribe('hello');
    expect(spy).toHaveBeenCalledWith('hello');
  });

  it('should handle unsubscribe when not already subscribed', () => {
    const spy = jest.spyOn(emitter, 'unsubscribe');

    emitter.unsubscribe('hello');
    expect(spy).toHaveBeenCalledWith('hello');
  });
});
