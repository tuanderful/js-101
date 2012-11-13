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


function LinkedList() {
	//private variables
	var _root = 10;

	//public method
	this.getFoo = function () {
		return _root;
	};
}

var linkedList = new LinkedList();

LinkedList.prototype.getBar = function (price) {
	console.log("hi");
};