// describe.skip('InsertLast', () => {
//   test('adds to the end of the list', () => {
//     const l = new List();
//     l.insertFirst('a');
//
//     l.insertLast('b');
//
//     expect(l.size()).toEqual(2);
//     expect(l.getLast().data).toEqual('b');
//   });
// });

// iterate until the end of the list
// point the last node to the newly created node
// return that new node

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

  insertLast(data) {
    let newNode = new Node(data);

    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      return newNode;
    } else {
      this.head = newNode;
      return newNode;
    }
  }
}

let nodeOne = new Node(1);
let nodeTwo = new Node(2, nodeOne);
let nodeThree = new Node(3, nodeTwo);
let nodeFour = new Node(4, nodeThree);
let list = new LinkedList(nodeFour);
console.log(list);
console.log(list.insertLast(7));
console.log(list);
