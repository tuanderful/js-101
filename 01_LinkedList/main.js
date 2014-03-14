var LinkedList = require('./LinkedList.js');
// Effectively makes LinkedList equal to
// the module.exports object

var linkedList = new LinkedList();
console.log(linkedList);

console.log(linkedList.toString());

linkedList.insert('1');
console.log(linkedList.toString());
console.log(linkedList.length);

linkedList.insert('b');
console.log(linkedList.toString());
console.log(linkedList.length);

linkedList.insert('c');
console.log(linkedList.toString());
console.log(linkedList.length);


linkedList.insert('4').insert(5);
console.log(linkedList.toString());
console.log(linkedList.length);


linkedList.remove('b');
console.log(linkedList.toString());
console.log(linkedList.length);

linkedList.remove('1');
console.log(linkedList.toString());
console.log(linkedList.length);

linkedList.remove(5);
console.log(linkedList.toString());
console.log(linkedList.length);