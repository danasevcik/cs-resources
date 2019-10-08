// A Binary tree is a type of tree in which each node has a left and right property
// A Binary Search Tree is a type of binary tree
// Nodes in a binary search tree have lesser values stored on the left
// Nodes in a binary search tree have greater values stored on the right

class BinarySearchTree {
  constructor(root=null) {
    this.root = root;
  }

  insert(data) {
    // create a node with the given data
    let newNode = new Node(data);

    // first check if the root of this tree is null
    // if it is, make the new node the root of the tree
    // otherwise, call helper function and pass in the new node
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
