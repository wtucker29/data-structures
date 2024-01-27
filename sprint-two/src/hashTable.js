

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._tupleCount = 0;
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
  this._tupleCount++;

  // Checking ratio of tupleCount to limit
  // If tupleCount > 75% of limit
  if ((this._limit * 0.75) < this._tupleCount) {
    // Double limit
    this.resize(this._limit * 2);
  }


  // If tupleCount < 25% of limit
  if ((this._limit * 0.25) > this._tupleCount && this._limit > 8) {
    // Halve limit
    this.resize(this._limit / 2);
  }
};

HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;

  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  this._tupleCount = 0;

  // Iterate through oldStorage and move tuples to new storage buckets
  oldStorage.each(function(bucket) {
    // FInd a bucket
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        // Take the tuple(s) in that bucket and insert them into new storage array
        var tuple = bucket[i];
        this.newInsert(tuple[0], tuple[1]);
      }
    }
  }.bind(this));


};

HashTable.prototype.newInsert = function(k, v) {
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
  this._tupleCount++;
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
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Delete value at index
  var bucket = this._storage.get(index);
  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        bucket.splice(tuple, 1);
        this._tupleCount--;
      }
    }
  }


  // If tupleCount < 25% of limit
  if ((this._limit * 0.25) > this._tupleCount && this._limit > 8) {
    // Halve limit
    this.resize(this._limit / 2);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


