var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {
    index: 0
  };

  _.extend(storage, stackMethods);
  return storage;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.index] = value;
  this.index++;
};

stackMethods.pop = function() {
  this.index--;
  var result = this[this.index];
  delete this[this.index];
  return result;
};

stackMethods.size = function() {
  if (this.index < 0) {
    return 0;
  }
  return this.index;
};

