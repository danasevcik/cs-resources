// A queue is an array or list structure with two principal operations:
  // push
    // add an element to the end of the queue
  // shift
    // remove an element from the beginning of the queue
// FIFO is the guiding principle of a queue - first in, first out

class Queue {
  constructor() {
    this.items = [];
  }

  push(element) {
    // add element to end of array
    this.items.push(element);
  }

  shift() {
    // remove first element in the array
    if (this.items.length === 0) {
      return 'not enough elements';
    }
    this.items.shift();
  }
}
