// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// create array FIFO
// add should push to end of array
// remove should remove from beginning of array

class Queue {
  constructor() {
    this.queue = [];
  }

  add(data) {
    return this.queue.push(data);
  }

  remove() {
    return this.queue.shift()
  }
}

let queue = new Queue;
console.log(queue.add(1));
console.log(queue.add(12));
console.log(queue.add(7));
console.log(queue.remove());
