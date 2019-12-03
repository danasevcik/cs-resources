// describe.skip('GetAt', () => {
//   test('returns the node at given index', () => {
//     const l = new List();
//     expect(l.getAt(10)).toEqual(null);
//
//     l.insertLast(1);
//     l.insertLast(2);
//     l.insertLast(3);
//     l.insertLast(4);
//
//     expect(l.getAt(0).data).toEqual(1);
//     expect(l.getAt(1).data).toEqual(2);
//     expect(l.getAt(2).data).toEqual(3);
//     expect(l.getAt(3).data).toEqual(4);
//   });
// });

// iterate through the list and add to index counter
// when arrived at num, return node's data
// if nothing, return null

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

  getAt(index){
    if (this.head) {
      let indexCounter = 0;
      if (index === indexCounter) {
        return this.head.data;
      }
      let next = this.head.next;
      while (next) {
        indexCounter ++;
        if (indexCounter === index) {
          return next.data;
        }
        next = next.next;
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
console.log(list.getAt(1));
