// Djikstras algo finds the shortest distance between two nodes in a graph

function djikstras(graph, origin) {
  const visited = new Map();
  const { data, nodes } = djikstrasStore(graph.adjList, origin);
  // get a data map of nodes pointing to data about each of the nodes

  let target = origin;
  data.get(origin).closest = origin;
  // origin is given
  // get the closest node (first will be null)

  let i = 0;

  while(i < nodes.length) {
    // while there are nodes, set the target to true (meaning it has been visited)
    visited.set(target, true);

    // key value pairs for neighbors
    let neighbors = [...graph.adjList.get(target).entries()];

    let minimum = Infinity;

    let tempTarget = null;

    neighbors.forEach(neighbor => {
      let node = neighbor[0];
      let weight = neighbor[1];

      let targetNodeData = data.get(target);
      let currentNodeData = data.get(node);

      if (targetNodeData.weightSum + weight < currentNodeData.weightSum) {
        currentNodeData.weightSum = targetNodeData.weightSum + weight;
        currentNodeData.closest = target
      }

      if (currentNodeData.weightSum < minimum && !visited.get(node)) {
        minimum = currentNodeData.weightSum;
        tempTarget = node;
      }
    })

    if (!tempTarget) {
      break;
    }

    target = tempTarget;
    i++;
  }

  return data
}

function djikstrasStore(adjList, origin) {
  // take in a map of vertices that point to arrays of neighboring vertices
  // create nodes array of all adjList keys
  // create empty data map
  const nodes = [...adjList.keys()];
  const data = new Map();

  nodes.forEach(node => {
    // for each node, set default weightSum and closest vertice
    let data = {
      weightSum: node === origin ? 0 : Infinity,
      closest: null
    }

    // add the node and associated data to the new map
    data.set(node, data)
  })

  // return map of nodes pointing to data about those nodes
  return { data, nodes }
}
