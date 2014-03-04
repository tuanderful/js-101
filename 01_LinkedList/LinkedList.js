function Node(value) {
  return {
    val: value,
    next: null
  }
}

function LinkedList(val) {
  this.head = null;
  this.length = 0;

  if (typeof val !== 'undefined') {
    this.insert(val);
  }
}

LinkedList.prototype.isEmpty = function() {
  return this.head === null;
}

LinkedList.prototype.insert = function(val) {
  var newNode = new Node(val),
      pointer = this.head;

  if (this.isEmpty()) {
    this.head = newNode;
  } else {
    // should probably use null instead of undefined.
    // this will allow us to set next to null after destroying a node,
    // rather than setting it to undefined.
    while (pointer.next !== null) {
      pointer = pointer.next;
    }
    pointer.next = newNode;
  }

  this.length++;
}

module.exports = LinkedList;