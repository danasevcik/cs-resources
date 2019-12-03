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
    if (this.head) {
      if (this.head.next) {
        let previous = this.head;
        let current = this.head.next;
        while (current.next) {
          previous = current;
          current = current.next;
        }
        previous.next = null;
        return previous;
      } else {
        this.head = null;
        return 'you removed the last node!'
      }
    } else {
      return 'the list is empty!'
    }
  }
}

let nodeOne = new Node(1);
let nodeTwo = new Node(2, nodeOne);
let nodeThree = new Node(3, nodeTwo);
let nodeFour = new Node(4, nodeThree);
let list = new LinkedList(nodeFour);
console.log(list);
console.log(list.removeLast());
console.log(list.removeLast());
console.log(list);

// let nodeOne = new Node(1);
// let nodeFour = new Node(4);
// let list = new LinkedList(nodeFour);
// console.log(list);
// console.log(list.removeLast());
// console.log(list);
