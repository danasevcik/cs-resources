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
    // add vertice to adjacent list as a key
    // add empty array as the value for that key
    this.adjList.set(vertice, []);
  }

  addEdge(v1, v2) {
    // this creates an edge without direction
    this.adjList.get(v1).push(v2);
    this.adjList.get(v2).push(v1);
  }

  // Depth first search is a traversal methodology - once we start down a path, we don't stop until we get to the end. Traverse through a branch the entire way through, and then work back up to the top.
  // DFS can be implemented using a stack structure

  dfs(vertice) {
    if (this.adjList.get(vertice)) {
      // create empty map object to keep track of visited vertices
      const visited = new Map();

      // call helper function to look for neighboring vertices
      // pass in current vertice, visited obj, and null for previous vertice
      this.dfsHelper(vertice, visited, null)
    }
  }

  dfsHelper(vertice, visited, previous) {
    // add key value to visited map
    visited.set(vertice) = true;

    // get array of other vertices
    const neighbors = this.adjList.get(vertice);

    // iterate through neighbors and check if that vertice has been visited
    // if not, pass in that vertice, the visited map and previous vertice to helper fcn
    neighbors.forEach(neighborVertice => {
      if (!visited.get(neighborVertice) {
        this.dfsHelper(neighborVertice, visited, vertice)
      }
    })
  }
}

class Vertice {
  constructor(data) {
    this.data = data;
  }
}
