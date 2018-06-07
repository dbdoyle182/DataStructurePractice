const List = require('./list');
const Node = require('./node');

test('List is a class', () => {
    expect(typeof List.prototype.constructor).toEqual('function')
});

test("Node is a class", () => {
    expect(typeof Node.prototype.constructor).toEqual('function')
});
