// Declares Stack constructor; this type of data structure stores retrieves data last in first out
class Stack {
    constructor() {
        // Variable that will store all of data in our stack
        this.data = [];
    }
    // This method pushes a piece of data into the stack
    push (n) {
        this.data.push(n);
    }
    // Pulls the top piece of data off the stack
    pop () {
        return this.data.pop();
    }

    peek () {
        return this.data[this.data.length - 1]
    }
}

module.exports = Stack;