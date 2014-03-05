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
    while (pointer.next !== null) {
      pointer = pointer.next;
    }
    pointer.next = newNode;
  }

  this.length++;

  return this;                         // for chaining
}

LinkedList.prototype.remove = function() {

}

LinkedList.prototype.valueOf = function() {
  var arrayRepresentation = [],
      pointer = this.head;

  while (pointer !== null) {
    arrayRepresentation.push(pointer.val);
    pointer = pointer.next;
  }

  return arrayRepresentation;
}



module.exports = LinkedList;