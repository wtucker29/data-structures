var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = 0;
};

Stack.prototype.push = function(value) {
  this[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function() {
  this.index--;
  var result = this[this.index];
  delete this[this.index];
  return result;
};

Stack.prototype.size = function() {
  if (this.index <= 0) {
    return 0;
  }
  return this.index;
};
