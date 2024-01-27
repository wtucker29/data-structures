var BinarySearchTree = function(value) {
  var newTree = Object.create(binaryMethods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

var binaryMethods = {};

binaryMethods.insert = function(value) {
  if (this.left === null && value < this.value) {
    this.left = BinarySearchTree(value);
  }
  if (this.left !== null && value < this.value) {
    this.left.insert(value);
  }

  if (this.right === null && value > this.value) {
    this.right = BinarySearchTree(value);
  }
  if (this.right !== null && value > this.value) {
    this.right.insert(value);
  }
  // Check if value is greater or less than original/parent node value
  // Place new node in the left property if value is less
  // Place new node in right property if value is greater
  // Must be done recursively
};

binaryMethods.contains = function(value) {
  //base case comparing input value to the value of the current object

  if (this.value === value) {
    return true;
  }

  //recursive case doing recursion through the left and right properties to check the nodes in those values until we reach a node without a left or right property
  if (this.left !== null && value < this.value) {
    if (this.left.contains(value)) {
      return true;
    }
  }
  if (this.right !== null && value > this.value) {
    if (this.right.contains(value)) {
      return true;
    }
  }
  return false;

};

binaryMethods.depthFirstLog = function(callback) {
  for (var key in this) {
    // Base case
    if (key === 'value') {
      callback(this[key]);
    }
    // Recursive case
    if (typeof this[key] === 'object' && this[key] !== null) {
      this[key].depthFirstLog(callback);
    }
  }


};

/*
 * Complexity: What is the time complexity of the above functions?
 */
