const Queue = require('./QueueStack')

test('Queue is a class', () => {
    expect(typeof Queue.prototype.constructor).toEqual('function');
});

test('can add elements to a queue', () => {
    const q = new Queue();
    expect(() => {
      q.add(1);
    }).not.toThrow();
  });