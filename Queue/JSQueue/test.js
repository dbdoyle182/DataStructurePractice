// Our test files to make sure the queue is working as it should.
// When using jest, always import the file you are testing 
const Queue = require('./Queue');

//Checks to make sure the queue is built as a class constructor
test('Queue is a class', () => {
  expect(typeof Queue.prototype.constructor).toEqual('function');
});

//Tests the functionality of Queue.add(n)
test('can add elements to a queue', () => {
  const q = new Queue();
  expect(() => {
    q.add(1);
  }).not.toThrow();
});

// Tests the functionality of Queue.remove()
test('can remove elements from a queue', () => {
  const q = new Queue();
  expect(() => {
    q.add(1);
    q.remove();
  }).not.toThrow();
});

// Tests the add and remove methods are working in accordance with a queue data structure
test('Order of elements is maintained', () => {
  const q = new Queue();
  q.add("Banana");
  q.add("Apple");
  q.add("Orange");
  expect(q.remove()).toEqual("Banana");
  expect(q.remove()).toEqual("Apple");
  expect(q.remove()).toEqual("Orange");
  expect(q.remove()).toEqual(undefined);
});