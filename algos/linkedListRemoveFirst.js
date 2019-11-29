// describe.skip('RemoveFirst', () => {
//   test('removes the first node when the list has a size of one', () => {
//     const l = new List();
//     l.insertFirst('a');
//     l.removeFirst();
//     expect(l.size()).toEqual(0);
//     expect(l.getFirst()).toEqual(null);
//   });
//
//   test('removes the first node when the list has a size of three', () => {
//     const l = new List();
//     l.insertFirst('c');
//     l.insertFirst('b');
//     l.insertFirst('a');
//     l.removeFirst();
//     expect(l.size()).toEqual(2);
//     expect(l.getFirst().data).toEqual('b');
//     l.removeFirst();
//     expect(l.size()).toEqual(1);
//     expect(l.getFirst().data).toEqual('c');
//   });
// });

// check if head is null
// if not, remove first and make head point to the next node

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
