var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail === null) {
      list.tail = newNode;
      list.head = newNode;
    } else {
      newNode.previous = list.tail;
      list.tail.next = newNode;
      list.tail = newNode;
    }

    // list.head.next = list.tail;
    //constant
  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }
    var result = list.head.value;
    // delete list.head;


    if (list.head.next !== null) {
      list.head.next.previous = null;
    }

    list.head = list.head.next;

    return result;
  };

  list.contains = function(target) {
    var currentNode = list.head;

    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
    // return (list.head.value === target || list.tail.value === target);
  };

  list.addToHead = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.tail = newNode;
      list.head = newNode;
    } else {
      newNode.next = list.head;
      list.head.previous = newNode;
      list.head = newNode;
    }
  };

  list.removeTail = function() {
    if (list.tail === null) {
      return null;
    }
    var result = list.tail.value;
    // delete list.head;


    if (list.tail.previous !== null) {
      list.tail.previous.next = null;
    }

    list.tail = list.tail.previous;

    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};