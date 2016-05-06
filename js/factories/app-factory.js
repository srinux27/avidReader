var factModule = angular.module('FactoryModule', ['ngResource']);


factModule.factory('BookFactory', function($resource, OrderFactory) {
     
    var bookResource = $resource('http://localhost:2403/books');    
        
    return {
        getBookList : function() {
            return bookResource.query();
        },
        
        saveBook : function(book) {
            bookResource.save(book, function() {
                console.log('Operation successful');
                return book;
            });
        }
    };
});



factModule.factory('OrderFactory', function() {
    var orderedItems = [];
    
    return {
        getOrders : function() {
            return orderedItems;
        },
        
        addOrder : function(book) {
            orderedItems.push(book);
        },
        
        removeOrder : function(index) {
            orderedItems.splice(index, 1);
        }, 
    };

});