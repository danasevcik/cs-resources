// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

// s1 - [1,2,3,4]
// s2 - [5,6,7,8]
// q should be - [4,8,3,7,2,6,1,5]
// get longer stack
// as long as there are elements in stack, pop and add to queue

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

  queueFromStack() {

  }
}

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    return this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    if (this.stack.length) {
      return this.stack[0]
    }
  }
}
