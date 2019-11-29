// describe.skip('GetLast', () => {
//   test('returns the last element', () => {
//     const l = new List();
//     l.insertFirst(2);
//     expect(l.getLast()).toEqual({ data: 2, next: null });
//     l.insertFirst(1);
//     expect(l.getLast()).toEqual({ data: 2, next: null });
//   });
// });

// if there is no head, return null
// otherwise iterate until next property is null and return that node

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

  getLast() {
    if (this.head === null) {
      return null;
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      return node;
    }
  }
}

let nodeOne = new Node(1);
let nodeTwo = new Node(2, nodeOne);
let nodeThree = new Node(3, nodeTwo);
let nodeFour = new Node(4, nodeThree);
let list = new LinkedList(nodeFour);
console.log(list);
console.log(list.getLast()); // should be nodeOne
