// --- Directions
// Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'


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

  weave(sourceOne, sourceTwo) {
    let longerQueue = sourceOne.length > sourceTwo.length ? sourceOne.queue.length : sourceTwo.queue.length;
    let sourceThree = new Queue;

    for (let i = 0; i < longerQueue; i++) {
      if (sourceOne.queue.length) {
        sourceThree.add(sourceOne.remove());
      }
      if (sourceTwo.queue.length) {
        sourceThree.add(sourceTwo.remove());
      }
    }

    return sourceThree;
  }
}


let queue1 = new Queue;
let queue2 = new Queue;
let queue3 = new Queue;
queue1.add(1);
queue1.add(2);
queue1.add(3);
queue2.add(4);
queue2.add(5);
queue2.add(6);
queue2.add(7);
console.log(queue3.weave(queue1, queue2));

// weave should give [1,4,2,5,3,6,7]
