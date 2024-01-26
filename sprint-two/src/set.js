var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // Add item to set
  this._storage[item] = 1;
};

setPrototype.contains = function(item) {
  if (this._storage[item] !== undefined) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  if (this._storage[item] === 1) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// var Set = function() {
//   var set = Object.create(setPrototype);
//   set._storage = []; // fix me
//   return set;
// };

// var setPrototype = {};

// setPrototype.add = function(item) {
//   this._storage.push(item);
// };

// setPrototype.contains = function(item) {
//   for (var i = 0; i < this._storage.length; i++) {
//     if (this._storage[i] === item) {
//       return true;
//     }
//   }
//   return false;
// };

// setPrototype.remove = function(item) {
//   for (var i = 0; i < this._storage.length; i++) {
//     if (this._storage[i] === item) {
//       delete this._storage[i];
//     }
//   }
// };