/*
 * Two patterns for creating a constructor with private members
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

var LinkedList = function(){
	//private variables
	var _root = 10;
	
	return {
		getFoo: function(){
			return root;
		}
	};
};