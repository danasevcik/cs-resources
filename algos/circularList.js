// given a linked list head, determine if the list is circular

// start iterating from the given head
// create a map where the the node points to true
// if the next property is null, return false
// otherwise check if the node has already been visited

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

function circularList(head) {
  let current = head;
  let seen = {};

  while (current.next) {
    console.log(seen[current]);
    console.log(seen);
    if (seen[current]) {
      return true;
    } else if (!seen[current]) {
      seen[current] = true;
    }
    current = current.next;
  }
  return false;
}

// let node1
let node3 = new Node('third')
let node2 = new Node('second', node3)
let node1 = new Node('first', node2)
let list = new LinkedList(node1);
console.log(circularList(node1));
