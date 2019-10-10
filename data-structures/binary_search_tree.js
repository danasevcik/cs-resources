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

  insertNode(node, newNode) {
    // first check if the data for new node is less than data for given node
    if (newNode.data < node.data) {
      // if the new data is less than given data, check if the left is empty
      // otherwise, call this function until an empty left node is found
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      // if new data is greater than given data, check if right is empty
      // otherwise call this function until an empty right node is found
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  }

  removeData(data) {
    // this is a helper method that calls removeNode with given data
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    // removes the node with given data
    // is called recursively until it finds the node with the given data
    if (this.root === null) {
      // if the root is null, tree is empty
      return null;
    } else if (data < node.data) {
      // if data is less, traverse left
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      // if data is greater, traverse right
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      // if data is the same, check if right and left are null
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        // if there is only a node on the right, make that the new node
        node = node.right;
        return node;
      } else if (node.right === null) {
        // if there is only a node on the left, make that the new node
        node = node.left;
        return node;
      }
    }
  }

  findMinNode(node) {
    // find min node by checking if the left attribute is null
    // if it is, then it must be the lowest value
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
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
