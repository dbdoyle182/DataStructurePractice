const Stack = require('./Stack');

class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(data) {
        this.first.push(data);
    }

    remove() {
        while(this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const data = this.second.pop();

        while(this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return data;
    }

    peek() {
        while(this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const data = this.second.peek();

        while(this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return data;
    }

}

module.exports = Queue;