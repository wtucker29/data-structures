// Instantiate a new graph
var Graph = function() {
  // Create a key that contains the node
  this.index = 0;

  this.edge = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[this.index] = node;
  this.index++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  for (var key in this) {
    if (this[key] === node) {
      return true;
    } else {
      return false;
    }
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this) {
    if (this[key] === node) {
      delete this[key];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  for (var key in this) {
    if (this[key] === fromNode) {
      var fromNodeExists = true;
    }
    if (this[key] === toNode) {
      var toNodeExists = true;
    }
  }
  if (fromNodeExists === toNodeExists) {
    return this.edge[fromNode, toNode] === 1;
  } else {
    return false;
  }

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edge[fromNode] = 1;
  this.edge[toNode] = 1;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.edge[fromNode] = 0;
  this.edge[toNode] = 0;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    return cb(this[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
