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
  let seen = {}
  let data = current.data

  while (current.next) {
    if (seen[data]) {
      return true;
    } else if (!seen[data]) {
      seen[data] = true;
    }
    current = current.next;
    data = current.data
  }
  console.log(seen);
  return false;
}


let node3 = new Node('third')
let node2 = new Node('second', node3)
let node1 = new Node('first', node2)
let list = new LinkedList(node1);
console.log(circularList(node1));
