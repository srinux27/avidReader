var svcModule = angular.module('ServiceModule', ['FactoryModule']);

svcModule.service('ListService', function (BookFactory) {
    this.getBookList = function () {
        return BookFactory.getBookList();
    };
    
    
    
});


svcModule.service('OrderService', function (OrderFactory) {
    this.addOrder = function (book) {
        var orderedItems = OrderFactory.getOrders();
        var itemFound = false;

        for (var i = 0; i < orderedItems.length; i++) {
            if (orderedItems[i].name === book.name) {
                orderedItems[i].quantity = orderedItems[i].quantity + 1;
                itemFound = true;
            }
        }

        if (!itemFound) {
            orderedItems.push(book);
            orderedItems[orderedItems.length - 1].quantity = 1;
        }

    };


    this.removeOrder = function (book) {
        var orderedItems = OrderFactory.getOrders();
        var deleteItem;

        angular.forEach(orderedItems, function (orderedBook, index) {
            if (orderedBook.name === book.name) {
                orderedBook.quantity = orderedBook.quantity - 1;
            }

            if (orderedBook.quantity === 0) {
                deleteItem = index;
            }
        });

        if (deleteItem !== undefined) {
            OrderFactory.removeOrder(deleteItem);
        }
    };

    this.getOrderedItems = function () {
        return OrderFactory.getOrders();
    };

    this.calculateOrderTotal = function () {
        var totalAmount = 0;
        angular.forEach(OrderFactory.getOrders(), function (orderedItem) {
            totalAmount = totalAmount + (orderedItem.quantity * orderedItem.price);
        });

        return totalAmount;
    };
});