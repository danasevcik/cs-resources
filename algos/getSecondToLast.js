// given a linked list
// return the second to last ele

// create two variables
// one for current and one for previous
// iterate through linked list and keep track of the current/previous
// when the current's next property is null, return the previous

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

  getSecondToLast(linkedList) {
    let previous = linkedList.head;
    let current = previous.next;
    while (current.next) {
      previous = current;
      current = current.next;
    }

    return previous;
  }
}

let nodeOne = new Node(1);
let nodeTwo = new Node(2, nodeOne);
let nodeThree = new Node(3, nodeTwo);
let nodeFour = new Node(4, nodeThree);
let list = new LinkedList(nodeFour);

console.log(list.getSecondToLast(list));
