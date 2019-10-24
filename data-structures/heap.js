// A heap is a special tree data structure where the tree is a complete binary tree

class Heap {
  constructor() {
    this.data = [];
  }

  add(value) {
    // add value to the array
    this.data.push(value);

    // bubble up based on index and value that was just added
    this.bubbleUp(this.data.length - 1, value);
  }
}
