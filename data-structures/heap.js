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

  removeHead() {
    // access first and last elements of the heap
    let head = this.data[0];
    let tail = this.data.pop();

    // if there is no data, there was only one ele in the array
    if (this.data[0]) {
      // reassign first ele to tail
      this.data[0] = tail;

      // starting from the top, bubble down
      this.bubbleDown(0, tail);
    }
    return head;
  }
}
