// Building a node class for our data in the linked list

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

module.exports = Node;