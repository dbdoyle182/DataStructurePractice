const List = require('./list');
const Node = require('./node');

test('List is a class', () => {
    expect(typeof List.prototype.constructor).toEqual('function')
});
