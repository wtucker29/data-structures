var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = 0;
  this.enqueueCount = 0;
  this.dequeueCount = 0;
};


Queue.prototype.enqueue = function(value) {
  this[this.index] = value;
  this.index++;
  this.enqueueCount++;
};

Queue.prototype.dequeue = function() {
  this.dequeueCount++;
  var keys = Object.keys(this);
  var result = this[keys[0]];
  delete this[keys[0]];
  return result;
};

Queue.prototype.size = function() {
  if (this.enqueueCount - this.dequeueCount <= 0) {
    return 0;
  }
  return this.enqueueCount - this.dequeueCount;
};