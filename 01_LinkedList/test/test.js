var LinkedList = require('../LinkedList.js'),
    assert = require('assert');

describe('Linked Lists', function() {

  var linkedList = new LinkedList();

  describe('Constructor', function() {
    it('should not have any elements', function() {
      assert.equal(true, linkedList.isEmpty());
    });
  });
  describe('Insertion', function() {
    it('should now contain one element', function() {
      linkedList.insert('1');
      assert.equal(false, linkedList.isEmpty());
    });
  });
});


