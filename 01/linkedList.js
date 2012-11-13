/*
 * Two patterns for creating a constructor with private members
 * however, in these two examples, I couldn't modify the prototype of LinkedList.
 * That's because LinkedList was not a constructor, but the object that's returned.
 * 

function LinkedList(){
	var that = {}				//return object	
	  , _foo = "private foo";
	
	that.getFoo = function (){
		return _foo;
	}
	
	return that;
};

function LinkedList(){
	var _foo = "private foo";
	
	return {
		getFoo : function (){
			return _foo;
		}
	}
};*/

function Node( init ) {
	this.value = init;
	this.next = null;
}

function LinkedList() {
	//private variables
	var _root = null;
	var _length = 0;
	
	return {
		root: _root,
		length: function () {
			return _length;
		},
		insert: function (node) {
			//console.log(node);
			//console.log(_root);
			//console.log(_root.next);
			if (_root === null) {
				_root = node;
			}
			
			_length++;
			console.log(_root.next);
			
			var itr = _root;
			
			while (itr.next !== null) {
				itr = itr.next;
			}		
		}
	};
}



var linkedList = new LinkedList();

console.log(linkedList.length());

var n = new Node(5);
linkedList.insert( n );


window.setInterval( console.log(linkedList) ,5000);
