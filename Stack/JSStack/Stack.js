
// Creates the constructor to build our queue
class Stack {
    constructor() {
        // Initializes the queue with no data
        this.data = [];
    }
    // A queue method that takes one argument(the data you want to insert in the queue) and places the argument in the back of the queue
    add(n) {
        this.data.unshift(n);
    }
    // A queue method that removes the data from the end of the queue and returns
    remove() {
        return this.data.pop();
    }
    
   
}

//Experts our queue in order to be used in other contexts
module.exports = Stack;