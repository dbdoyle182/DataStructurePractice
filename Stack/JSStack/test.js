// Require the stack module for testing
const Stack = require('./Stack');

test('Stack is a class', () => {
    expect(typeof Stack.prototype.constructor).toEqual('function')
});

test('stack can add and remove items', () => {
    const s = new Stack();
    s.push("Data One");
    expect(s.pop()).toEqual("Data One");
    s.push("Data Two");
    expect(s.pop()).toEqual("Data Two");
});

test('stack structure follows first in, last out', () => {
    const s = new Stack();
    s.push('Banana');
    s.push('Orange');
    s.push('Apple');
    s.push('Pineapple');
    expect(s.pop()).toEqual('Pineapple');
    expect(s.pop()).toEqual('Apple');
    expect(s.pop()).toEqual('Orange');
    expect(s.pop()).toEqual('Banana');
});

test("Stack.peek() returns the top level data but doesn't remove it", () => {
    const s = new Stack();
    s.push("This");
    s.push("is");
    s.push("Working");
    expect(s.peek()).toEqual("Working");
    expect(s.pop()).toEqual("Working");
    expect(s.peek()).toEqual("is");
    expect(s.pop()).toEqual("is");
    expect(s.peek()).toEqual("This");
    expect(s.pop()).toEqual("This");
})