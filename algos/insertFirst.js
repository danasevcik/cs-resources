// describe.skip('Insert First', () => {
//   test('appends a node to the start of the list', () => {
//     const l = new List();
//     l.insertFirst(1);
//     expect(l.head.data).toEqual(1);
//     l.insertFirst(2);
//     expect(l.head.data).toEqual(2);
//   });
// });

// given data, create new node
// check if head is null
// if it is, insert there
// otherwise point the next property to the current first and change head

class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head=null) {
    this.head = head;
  }

  insertFirst(data) {
    let node = new Node(data)
    if (this.head === null) {
      this.head = node;
    } else {
      let curr = this.head;
      this.head = node;
      this.head.next = curr;
    }
    return this
  }

}
let nodeTwo = new Node(2);
let nodeOne = new Node(1, nodeTwo);
let list = new LinkedList(nodeOne);
console.log(list);
console.log(list.insertFirst(3))
