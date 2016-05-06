var listModule = angular.module('ListModule', ['ServiceModule']);

listModule.controller('ListController', function ($scope, $rootScope, ListService, OrderService) {
    $scope.bookList = ListService.getBookList();

    $scope.addOrder = function (book) {
        OrderService.addOrder(book);   
    };

    $scope.removeOrder = function (book) {
       OrderService.removeOrder(book);
    };
});