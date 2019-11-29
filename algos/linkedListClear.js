// describe.skip('Clear', () => {
//   test('empties out the list', () => {
//     const l = new List();
//     expect(l.size()).toEqual(0);
//     l.insertFirst(1);
//     l.insertFirst(1);
//     l.insertFirst(1);
//     l.insertFirst(1);
//     expect(l.size()).toEqual(4);
//     l.clear();
//     expect(l.size()).toEqual(0);
//   });
// });

// if there is a head, clear it

class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  clear() {
    if (this.head) {
      this.head = null;
    }
    return this;
  }

  size() {
    let counter = 0;
    if (this.head === null) {
      return counter;
    } else {
      let node = this.head;
      counter++;
      while (node.next) {
        counter++;
        node = node.next;
      }
      return counter;
    }
  }
}

let nodeOne = new Node(1);
let nodeTwo = new Node(2, nodeOne);
let nodeThree = new Node(3, nodeTwo);
let nodeFour = new Node(4, nodeThree);
let list = new LinkedList(nodeFour);
console.log(list);
console.log(list.clear());
console.log(list.size());
