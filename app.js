(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
   var showList = this;
   showList.items = ShoppingListCheckOffService.getItems();

	showList.buyItem = function (itemIndex) {
		ShoppingListCheckOffService.removeItem(itemIndex);
	}
}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
var bList = this;
   bList.items = ShoppingListCheckOffService.getBItems();

 
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [
  { name: "cookies", quantity: 10 },
  { name: "pies", quantity: 10 },
  { name: "colas", quantity: 30 },
  { name: "snickers", quantity: 5 },
  { name: "cookies", quantity: 10 },
  { name: "pies", quantity: 10 },
  { name: "nuts", quantity: 10 },
  { name: "apples", quantity: 10 }
  ];
  
  var bitems = [];


  service.removeItem = function (itemIdex) {
	var bitem;
	bitem = items[itemIdex];
    items.splice(itemIdex, 1);
	bitems.push(bitem);
	
  };

  service.getItems = function () {
    return items;
  };
  
  service.getBItems = function () {
    return bitems;
  };
  
  
  
  
}

})();
