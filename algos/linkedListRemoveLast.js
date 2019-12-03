// describe.skip('RemoveLast', () => {
//   test('RemoveLast removes the last node when list is empty', () => {
//     const l = new List();
//     expect(() => {
//       l.removeLast();
//     }).not.toThrow();
//   });
//
//   test('RemoveLast removes the last node when list is length 1', () => {
//     const l = new List();
//     l.insertFirst('a');
//     l.removeLast();
//     expect(l.head).toEqual(null);
//   });
//
//   test('RemoveLast removes the last node when list is length 2', () => {
//     const l = new List();
//     l.insertFirst('b');
//     l.insertFirst('a');
//
//     l.removeLast();
//
//     expect(l.size()).toEqual(1);
//     expect(l.head.data).toEqual('a');
//   });
//
//   test('RemoveLast removes the last node when list is length 3', () => {
//     const l = new List();
//     l.insertFirst('c');
//     l.insertFirst('b');
//     l.insertFirst('a');
//     l.removeLast();
//
//     expect(l.size()).toEqual(2);
//     expect(l.getLast().data).toEqual('b');
//   });
// });

// check if there is a head property of linked list
// if there is a next property, iterate until last node & remove last
// if not, remove head
// return last node

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

  removeLast()  {
    
  }
}
