var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // Take input value and set it as target of node. Tree is a recursive data structure.
  // Add the node as a child of the tree (push to children array)
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // Inputs: Target value
  // Output: Boolean
  // Constraints: n/a
  // Edge Cases: n/a

  // Take the target input.
  // Check if target is the value associated with node or any children nodes
  // Return boolean
  // Base case
  if (this.value === target) {
    return true;
  }

  // Recursive case
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }

  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * AddChild is constant. Contains is linear.
 */
