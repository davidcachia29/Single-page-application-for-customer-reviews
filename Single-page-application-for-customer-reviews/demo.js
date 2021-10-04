//Creating the route using injection 
var MyApp = angular.module("MyApp", ['ngRoute', 'EmployeeService']);


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
MyApp.controller("AddController", function ($scope, EmpApi) {
    $scope.addEmp = function () {
        var empToAdd = {
            'Name': $scope.Name,
            'Email': $scope.Email,
            'mobil_no': $scope.mobil_no,
        }
        EmpApi.AddEmployee(empToAdd).then(function (response) {                 
            $scope.Name = undefined;
            $scope.Email = undefined;
            $scope.mobil_no = undefined;
            $alert("user added");
        }).catch(function (responce) {
            alert(Object.data);
        });
        
           
    }
})

MyApp.controller("EditController", function ($scope) {
    $scope.message = "in Edit View";
})
MyApp.controller("DeleteController", function ($scope) {
    $scope.message = "in Delete View";
})
MyApp.controller("HomeController", function ($scope, EmpApi) {

    getEmployees();
    function getEmployees() {
        EmpApi.getEmployees({}).then(function (emps) {
            $scope.emps = emps;
        }).catch(function (Object) {
            alert(Object.data);
        });
    }
});