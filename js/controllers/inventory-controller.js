var inventoryModule = angular.module('InventoryModule', ['ServiceModule']);

inventoryModule.controller('InventoryController', function($scope, ListService) {
    $scope.inventoryList = ListService.getBookList();
    
    $scope.saveItem = function() {
        
    }

});
