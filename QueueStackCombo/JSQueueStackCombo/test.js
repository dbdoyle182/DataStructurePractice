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

test('Order of elements is maintaned', () => {
    const queue = new Queue();
    queue.add('Nothing');
    queue.add('Should');
    queue.add('Break');
    expect(queue.remove()).toEqual('Nothing');
    expect(queue.remove()).toEqual('Should');
    expect(queue.remove()).toEqual('Break');
    expect(queue.remove()).toEqual(undefined);
});