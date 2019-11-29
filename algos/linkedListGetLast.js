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
}
