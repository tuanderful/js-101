function Node(value) {
  return {
    val: value,
    next: null
  };
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
};

LinkedList.prototype.insert = function(val) {
  var newNode = new Node(val),
      cursor = this.head;

  if (this.isEmpty()) {
    this.head = newNode;
  } else {
    while (cursor.next !== null) {
      cursor = cursor.next;
    }
    cursor.next = newNode;
  }

  this.length++;

  return this;                         // for chaining
};

LinkedList.prototype.remove = function(val) {
  var cursor = this.head,
      previous = null;

  console.log('Looking for ' + val);

  if (this.isEmpty()) {                // No items in list
    return this;
  } else if (cursor.val === val) {     // first item in list
    // TODO
  } else {
    while (cursor.next !== null && cursor.next.val !== val) {
      cursor = cursor.next;
    }
    // fall out of the loop if next is null (you are at the end),
    // or the next one is the val (cursor is pointing to previous)
    if (cursor.next === null) {
      console.log('-- end of list, item not found');
    } else {
      if (cursor.next.next === null) {
        console.log('-- no element after the needle');
        cursor.next = null;
      } else { //(cursor.next.next !== null)
        console.log('-- element after the needle');
        cursor.next = cursor.next.next;
      }
    }
  }
};

LinkedList.prototype.toString = function() {
  var arrayRepresentation = [],
      cursor = this.head;

  while (cursor !== null) {
    arrayRepresentation.push(cursor.val);
    cursor = cursor.next;
  }

  return arrayRepresentation;
};

module.exports = LinkedList;