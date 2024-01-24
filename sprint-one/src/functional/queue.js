var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {

    //size--;
    // remove the first item added
    var keys = Object.keys(storage);
    var result = storage[keys[0]];
    delete storage[keys[0]];
    return result;

  };

  someInstance.size = function() {
    if (size <= 0) {
      return 0;
    }
    return Object.keys(storage).length;
  };

  return someInstance;
};
