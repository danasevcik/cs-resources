// describe.skip('Size', () => {
//   test('returns the number of items in the linked list', () => {
//     const l = new List();
//     expect(l.size()).toEqual(0);
//     l.insertFirst(1);
//     l.insertFirst(1);
//     l.insertFirst(1);
//     l.insertFirst(1);
//     expect(l.size()).toEqual(4);
//   });
// });

// determine if there is a head in the linked list
// create counter variable
// iterate until the next property is null
// return counter

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
console.log(list.size()); // should be 4
