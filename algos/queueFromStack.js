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

  queueFromStack(stackOne, stackTwo) {
    let longerStack = stackOne.stack.length > stackTwo.stack.length ? stackOne.stack.length : stackTwo.stack.length;
    let newQueue = new Queue;

    for (let i = 0; i < longerStack; i++) {
      if (stackOne.stack.length) {
        newQueue.add(stackOne.pop());
      }
      if (stackTwo.stack.length) {
        newQueue.add(stackTwo.pop());
      }
    }

    return newQueue;

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

let stack1 = new Stack;
let stack2 = new Stack;
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
stack2.push(5);
stack2.push(6);
stack2.push(7);
stack2.push(8);
let queue = new Queue;
console.log(queue.queueFromStack(stack1, stack2)); // this should give
// stack 1 - [1,2,3,4]
// stack 2 - [5,6,7,8]
// [4,8,3,7,2,6,1,5]
