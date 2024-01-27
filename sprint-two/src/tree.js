var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = []; // fix me

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // Take input value and set it as target of node. Tree is a recursive data structure.
  // Add the node as a child of the tree (push to children array)
  var currentTree = this;
  var childTree = Tree(value);
  childTree.parent = currentTree;
  this.children.push(childTree);

  // Add the current node to the parent property of the new child node
};

treeMethods.removeFromParent = function(value) {
  // Remove value from children property in parent node
  var parentTree = this.parent;
  for (var i = 0; i < parentTree.children.length; i++) {
    if (parentTree.children[i].value === value) {
      parentTree.children.splice(i, 1);
    }
  }

  // Remove parent property from parent (set to null)
  this.parent = null;


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



treeMethods.traverse = function(callback) {
  // Base Case
  callback(this.value);

  // Recursive Case
  if (this.children.length) {
    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i];
      child.traverse(callback);
    }
  }
};












// treeMethods.traverse = function(callback) {
//   callback(this.value);

//   if (!this.children) { return; }
//   for (var i = 0; i < this.children.length; i++) {
//     var child = this.children[i];
//     child.traverse(callback);
//   }
// };


/*
 * Complexity: What is the time complexity of the above functions?
 * AddChild is constant. Contains is linear.
 */
