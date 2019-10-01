// A stack is an array or list structure with two principal operations:
  // push
    // add an element to the end of the stack
  // pop
    // remove an element from the end of the stack
// LIFO is the guiding principle of a stack - last in, first out

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    // add element to end of array
    this.items.push(element);
  }

  pop() {
    // remove last element in the array
    if (this.items.length === 0) {
      return 'not enough elements';
    }
    this.items.pop();
  }
}
