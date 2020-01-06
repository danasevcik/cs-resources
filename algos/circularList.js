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
  let seen = {head:true};
  let current = head;

  while (current.next) {
    current = current.next;
    if (seen[current.data]) {
      return true;
    } else if (!seen[current.data]) {
      seen[current.data] = true;
    } else if (current === null) {
      return false;
    }
  }
  return false;
}

let node1
let node3 = new Node('third', node1)
let node2 = new Node('second', node3)
node1 = new Node('first', node2)
let list = new LinkedList(node1);
console.log(circularList(node1));
