import Emitter from './Emitter';

describe('Emitter', () => {
  it('should emit events', () => {
    const emitter = new Emitter();
    emitter.subscribe('hello', () => {
      console.log('hello world')
    })
  })
});
