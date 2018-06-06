import Stack from './Stack';

class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    remove() {
        while(this.first.peek()) {
            this.second.push(this.first.pop());
        }
    }
}