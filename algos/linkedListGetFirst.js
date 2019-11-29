// describe.skip('GetFirst', () => {
//   test('returns the first element', () => {
//     const l = new List();
//     l.insertFirst(1);
//     expect(l.getFirst().data).toEqual(1);
//     l.insertFirst(2);
//     expect(l.getFirst().data).toEqual(2);
//   });
// });

// if there is no head, return null
// otherwise, return head

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

  getFirst() {
    return this.head;
  }
}
