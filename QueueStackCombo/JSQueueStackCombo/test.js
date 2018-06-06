const Queue = require('./QueueStack')

test('Queue is a class', () => {
    expect(typeof Queue.prototype.constructor).toEqual('function');
})