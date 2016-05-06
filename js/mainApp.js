var appModule = angular.module('MainModule', ['ngRoute', 'ListModule', 'OrderModule', 'InventoryModule']);

appModule.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/store.html'
        })
        .when('/home', {
            templateUrl: 'views/store.html'
        })
        .when('/inventory', {
            controller: 'InventoryController',
            templateUrl: 'views/inventory.html'
        })
        .otherwise({
            template: "<h3>Oops! The page you are trying to reach does not exist!</h3>"
        });
});