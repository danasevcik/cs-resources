// A heap is a special tree data structure where the tree is a complete binary tree
// There are two general types of heaps:
  // Max-heap:
    // The key present at the root node must be the greatest among all keys
    // The same is true for all of the children nodes
  // Min-heap:
    // The key present at the root node must be the least among all keys
    // The same is true for all of the children nodes

class MinHeap {
  constructor(root=null) {
    this.root = root;
  }

  insert(node, key) {
    // insert key given a node
  }
}

class Node {
  constructor(left=null, right=null, key) {
    this.left = left;
    this.right = right;
    this.key = key;
  }
}
