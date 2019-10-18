// A weighted graph is a type of graph (can be directed or undirected) in which each branch is given a numerical weight.
// A weighted graph is a special type of labeled graph in which the labels are usually positive numbers

class WeightedGraph {
  constructor(undirected = true) {
    this.adjList = new Map();
    this.undirected = undirected;
  }

  addVertex(vertice) {
    // check if the vertice is data or a node object
    if (vertice) {
      if (vertice.constructor !== Node) {
        // create a node if only data is passed in
        vertice = new Node(vertice);
      }
    }
    if (!this.adjList.get(vertice)) {
      // if the edge isnt found in the adj list, add it to the adj list
      this.adjList.set(vertice, new Map());
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
  }
}
