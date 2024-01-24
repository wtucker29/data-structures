var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);
  storage.index = 0;
  storage.enqueueCount = 0;
  storage.dequeueCount = 0;
  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.index] = value;
  this.index++;
  this.enqueueCount++;
};

queueMethods.dequeue = function() {
  this.dequeueCount++;
  var keys = Object.keys(this);
  var result = this[keys[0]];
  delete this[keys[0]];
  return result;
};

queueMethods.size = function() {
  if (this.enqueueCount - this.dequeueCount <= 0) {
    return 0;
  }

  return this.enqueueCount - this.dequeueCount;
};
