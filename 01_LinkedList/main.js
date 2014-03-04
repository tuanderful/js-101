var LinkedList = require('./LinkedList.js');
// Effectively makes LinkedList equal to
// the module.exports object

var linkedList = new LinkedList();
console.log(linkedList);

linkedList.insert('1');
console.log(linkedList);
console.log(linkedList.length);

linkedList.insert('b');
console.log(linkedList);
console.log(linkedList.length);


linkedList.insert('c');
console.log(linkedList.head.next);
console.log(linkedList.length);