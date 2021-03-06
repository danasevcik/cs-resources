// A Binary tree is a type of tree in which each node has a left and right property
// The main difference between a binary tree and a binary search tree is that a binary tree does not limit if the left or right child node is greater than or less than the other.

class BinaryTree {
  constructor(root=null) {
    this.root = null;
  }

  insert(data) {
    // create a new node with given data
    let newNode = new Node(data);

    // check if the root of the tree is null
    // if it is, make this new node the root
    // otherwise, insert the node by calling the helper function
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(node, newNode);
    }
  }

  insertNode(node, newNode) {
    // given a node and a new node to append, check if left (arbitrarily first) is open
    // if it is, make left property the new node
    // if not, check if right is open
    // if it is, make right property the new node
    // if neither left or right are open, return error message
    if (node.left === null) {
      node.left = newNode;
    } else if (node.right === null) {
      node.right = newNode;
    } else {
      return 'no space for the new node within the given node'
    }
  }

  removeRoot() {
    this.root = null;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
