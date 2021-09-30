//Creating the route using injection 
var MyApp = angular.module("MyApp", ['ngRoute']);


//Creating route using ngRoute Module with service routeProvider
MyApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/Add', {
                templateUrl: 'Views/add.html',
                controller: 'AddController'
            }).
            when('/Edit', {
                templateUrl: 'Views/edit.html',
                controller: 'EditController'
            }).
            when('/Delete', {
                templateUrl: 'Views/delete.html',
                controller: 'DeleteController'
            }).
            when('/Home', {
                templateUrl: 'Views/home.html',
                controller: 'HomeController'
            }).
            otherwise({
                redirectTo: '/Home'
            });
    }])

//injecting the function dependency
MyApp.controller("AddController", function ($scope) {
    $scope.message = "in Add View";
})

MyApp.controller("EditController", function ($scope) {
    $scope.message = "in Edit View";
})
MyApp.controller("DeleteController", function ($scope) {
    $scope.message = "in Delete View";
})
MyApp.controller("HomeController", function ($scope) {
    $scope.message = "in Home View";
})