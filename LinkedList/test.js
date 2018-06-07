const List = require('./list');
const Node = require('./node');

test('List is a class', () => {
    expect(typeof List.prototype.constructor).toEqual('function')
});

test("Node is a class", () => {
    expect(typeof Node.prototype.constructor).toEqual('function')
});

describe('A Node', () => {
    test('has properties "data" and "next"', () => {
        const node = new Node('a', 'b');
        expect(node.data).toEqual('a');
        expect(node.next).toEqual('b');
    });
});

describe('Insert First', () => {
    test('appends a node to the start of the list', () => {
        const list = new List();
        list.insertFirst(1);
        expect(list.head.data).toEqual(1);
        list.insertFirst(2);
        expect(list.head.data).toEqual(2);
    });
});