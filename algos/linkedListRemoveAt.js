// describe.skip('RemoveAt', () => {
//   test('removeAt doesnt crash on an empty list', () => {
//     const l = new List();
//     expect(() => {
//       l.removeAt(0);
//       l.removeAt(1);
//       l.removeAt(2);
//     }).not.toThrow();
//   });
//
//   test('removeAt doesnt crash on an index out of bounds', () => {
//     const l = new List();
//     expect(() => {
//       const l = new List();
//       l.insertFirst('a');
//       l.removeAt(1);
//     }).not.toThrow();
//   });
//
//   test('removeAt deletes the first node', () => {
//     const l = new List();
//     l.insertLast(1);
//     l.insertLast(2);
//     l.insertLast(3);
//     l.insertLast(4);
//     expect(l.getAt(0).data).toEqual(1);
//     l.removeAt(0);
//     expect(l.getAt(0).data).toEqual(2);
//   });
//
//   test('removeAt deletes the node at the given index', () => {
//     const l = new List();
//     l.insertLast(1);
//     l.insertLast(2);
//     l.insertLast(3);
//     l.insertLast(4);
//     expect(l.getAt(1).data).toEqual(2);
//     l.removeAt(1);
//     expect(l.getAt(1).data).toEqual(3);
//   });
//
//   test('removeAt works on the last node', () => {
//     const l = new List();
//     l.insertLast(1);
//     l.insertLast(2);
//     l.insertLast(3);
//     l.insertLast(4);
//     expect(l.getAt(3).data).toEqual(4);
//     l.removeAt(3);
//     expect(l.getAt(3)).toEqual(null);
//   });
// });


// iterate through list with 2 pointers
// one pointing to last and one to current
// once arrived at the wanted index, change next proprty of previous


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

  removeAt(index){
    let indexCounter = 0;
    // check if there is a head
    if (this.head) {
      // if they want to remove head
      if (index === 0) {
        if (this.head.next) {
          this.head = this.head.next;
        }
      } else {
        // if they dont want to remove first element
        let previous = this.head;
        let current = previous.next;
        while(current.next) {
          indexCounter++;
          if (indexCounter === index) {
            previous.next = current.next;
          }
          previous = current;
          current = current.next;
        }
      }
    } else {
      return null;
    }
  }
}

let nodeOne = new Node(1);
let nodeTwo = new Node(2, nodeOne);
let nodeThree = new Node(3, nodeTwo);
let nodeFour = new Node(4, nodeThree);
let list = new LinkedList(nodeFour);
console.log(list);
console.log(list.removeAt(1));
console.log(list);
