/// <reference path="scripts/angular.js" />

var EmployeeService = angular.module('EmployeeService', []);

EmployeeService.factory('EmpApi', function ($http) {
    var urlBase = "https://localhost:44319/api";
    var EmpApi = {};
    //Get endpoint
    EmpApi.getEmployees = function () {
        return $http.get(urlBase + '/Employees');
    };
    //Post endpoint
    EmpApi.AddEmployee = function (emp) {
        return $http.post(urlBase + '/Employees/', emp);
    }
    return EmpApi;
});