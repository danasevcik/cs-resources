// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

// create stack class - LIFO - last in first out
// create stack array
// push - use .push
// pop - use .pop
// peek - look at first index

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

let stack = new Stack;
stack.push(1);
console.log(stack.stack);
stack.pop();
console.log(stack.stack);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.stack);
console.log(stack.peek());
