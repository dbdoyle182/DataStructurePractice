const Queue = require('./QueueStack')

test('Queue is a class', () => {
    expect(typeof Queue.prototype.constructor).toEqual('function');
});

test('can add elements to a queue', () => {
    const queue = new Queue();
    expect(() => {
      queue.add("Banana");
    }).not.toThrow();
  });

test('Can remove elements from a queue', () => {
    const queue = new Queue();
    expect(() => {
        queue.add(1);
        queue.remove();
    }).not.toThrow();
});