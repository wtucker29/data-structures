var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail === null) {
      list.tail = Node(value);
      list.head = list.tail;
    }
    list.tail = Node(value);
    list.head.next = list.tail;
    //constant
  };

  list.removeHead = function() {
    var result = list.head.value;
    delete list.head;
    list.head = list.tail;
    return result;
  };

  list.contains = function(target) {
    return (list.head.value === target || list.tail.value === target);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Add to tail is constant. Remove head is constant. Contains is constant.
 */
