var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {
    index: 0,
    enqueueCount: 0,
    dequeueCount: 0
  };
  var size = 0;
  _.extend(storage, queueMethods);
  return storage;
};

var queueMethods = {};


queueMethods.enqueue = function(value) {
  this[this.index] = value;
  this.index++;
  this.enqueueCount++;
};

queueMethods.dequeue = function() {
  var keys = Object.keys(this);
  var result = this[keys[0]];
  delete this[keys[0]];
  this.dequeueCount++;
  return result;
};

queueMethods.size = function() {
  if (this.enqueueCount - this.dequeueCount <= 0) {
    return 0;
  }
  return this.enqueueCount - this.dequeueCount;
};
