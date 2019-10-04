// A tree is a data structure where a node can have zero or more children. Each node/vertice contains a value. The connection between nodes are edges.
// A tree is a type of graph, but not all graphs are trees
  // Starts with a root node and branches off with its decendents and finally there are leaves
  // Top most node is called a root
  // Node without children is called a leaf or terminal node
  // Height is the distance (edge count) between farthest leaf and node
  // Depth or level of node is the distance between the root and the node

class Tree {
  constructor(root=null) {
    this.root = root;
  }
}

class Node {
  constructor(data, children=[]) {
    this.data = data;
    this.children = children;
  }
}
