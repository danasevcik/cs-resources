// A Binary tree is a type of tree in which each node has a left and right property
// The main difference between a binary tree and a binary search tree is that a binary tree does not limit if the left or right child node is greater than or less than the other.

class BinaryTree {
  constructor(root=null) {
    this.root = null;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}
