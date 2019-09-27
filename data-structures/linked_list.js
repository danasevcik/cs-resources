// A linked list is a data structue that represents an ordered sequence of nodes. In a singly linked list, each node points to the next node in the linked list. A doubly linked list gives each node pointers to both the next node and previous node. Unlike an array, a linked list does not provide constant time access to a particular "index" within the list. This means that if you'd like to find the Kth element in the list, you will need to iterate through K elements. The benefit of a linked list is that you can add and remove items from the beginning of the list in constant time.
// Properties of a linked list object:
  // head
  // tail
// Properties of a node object:
  // data
  // next

class LinkedList {

  constructor(head=null, tail=null) {
    this.head = head;
    this.tail = tail;
  }

  findLast() {
    return this.tail;
  }

  append(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

}

class Node {

  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }

}
