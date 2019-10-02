// A graph is a non-linear data structure that consists of nodes and edges. The nodes are sometimes referred to as vertices and the edges are lines or arcs that connect two nodes in a graph.
  // Undirected graph
    // A structure amounting to a set of objects in which some pairs of the object are in some sense related
  // Directed graph
    // A graph made up of a set of vertices connected by edges, where the edges have a direction associated with them

class Graph {
  constructor() {
    // create adjacent list to keep track of associations
    this.adjList = new Map();
  }

  addVertice(vertice) {
    this.adjList.set(vertice, []);
  }

  addEdge(v1, v2) {
    this.adjList.get(v1).push(v2);
    this.adjList.get(v2).push(v1);
  }
}
