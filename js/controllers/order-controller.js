var orderModule = angular.module('OrderModule', ['ServiceModule']);

orderModule.controller('OrderController', function($scope, OrderService) {
    
    $scope.orderedItems = OrderService.getOrderedItems();
    
    $scope.calculateOrderTotal = function() {
        return OrderService.calculateOrderTotal();
    };
    
});