// Our test files to make sure the Stack is working as it should.
// When using jest, always import the file you are testing 
const Stack = require('./Stack');

//Checks to make sure the Stack is built as a class constructor
test('Stack is a class', () => {
  expect(typeof Stack.prototype.constructor).toEqual('function');
});

//Tests the functionality of Stack.add(n)
test('can add elements to a Stack', () => {
  const s = new Stack();
  expect(() => {
    s.add(1);
  }).not.toThrow();
});

// Tests the functionality of Stack.remove()
test('can remove elements from a Stack', () => {
  const s = new Stack();
  expect(() => {
    s.add(1);
    s.remove();
  }).not.toThrow();
});

// Tests the add and remove methods are working in accordance with a Stack data structure
test('Order of elements is maintained', () => {
  const s = new Stack();
  s.add("Banana");
  s.add("Apple");
  s.add("Orange");
  expect(s.remove()).toEqual("Banana");
  expect(s.remove()).toEqual("Apple");
  expect(s.remove()).toEqual("Orange");
  expect(s.remove()).toEqual(undefined);
});