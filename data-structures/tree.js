// A tree is a data structure where a node can have zero or more children. Each node/vertice contains a value. The connection between nodes are edges.
// A tree is a type of graph, but not all graphs are trees
  // Starts with a root node and branches off with its decendents and finally there are leaves
  // Top most node is called a root
  // Node without children is called a leaf or terminal node
  // Height is the distance (edge count) between farthest leaf and node
  // Depth or level of node is the distance between the root and the node

class Tree {
  constructor(root=null) {
    // set the default value of root to be null
    this.root = root;
  }

  bfs(fn) {
    let arr = [this.root];

    while (arr.length) {
      let currentNode = arr.shift();
      arr.push(...currentNode.children);

      fn(node);
    }
  }

  dfs(fn) {
    // initialize an array to keep track of unvisited nodes
    let arr = [this.root];

    // while there are still elements in the array
    while (arr.length) {
      // remove first
      let currentNode = arr.shift();
      // add its children to the FRONT of the array
      arr.unshift(...currentNode.children);

      // invoke the callback with the given node
      fn(node)
    }
  }

  addNode(node) {
    // first check if the root is null
    // if it isn't, set the given node to be the root node
    if (this.root ===  null) {
      this.root = node;
    } else {
      // if there is, go through the nodes until there aren't any children
      // when that node is found, set the given node to be the child of that node
      let node = this.root;
      while (node.children) {
        node = node.children[0];
      }
      node.children.push(node);
    }
  }
}

class Node {
  constructor(data, children=[]) {
    // a node should have 2 properties - data and children
    // data can be of any data type
    // children is an array of node objects
    this.data = data;
    this.children = children;
  }
}
