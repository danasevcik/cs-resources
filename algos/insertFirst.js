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
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  insertFirst(data) {

  }
}
