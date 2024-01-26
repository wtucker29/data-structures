

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Call the set function within LimitedArray to set value to index
  // Create array within array to handle collisions
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  // Set bucket to equal current index
  var bucket = this._storage.get(index);

  // Iterate over bucket length if key already exists in hash table
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      return;
    }
  }

  // If key doesn't exist in hash table, push key-value pair to bucket
  bucket.push([k, v]);

  // Check if index within this._storage array is undefined
  // Manually create array and nest the key-value pair within the array we created
  // If index is not undefined
  // Push key-value pair to array within that index
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Call the get function within LimitedArray to retrieve value from index
  var bucket = this._storage.get(index);
  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        return tuple[1];
      }
    }
  }
  //return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Delete value at index
  var bucket = this._storage.get(index);
  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        tuple[1] = undefined;
      }
    }
  }
  // return this._storage.set(index, undefined);

  // this._storage.each(function(v, k) {
  //   if (k === index) {
  //     delete v;
  //   }
  // });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


