/// <reference path="scripts/angular.js" />

var EmployeeService = angular.module('EmployeeService', []);

EmployeeService.factory('EmpApi', function ($http) {
    var urlBase = "https://localhost:44319/api";
    var EmpApi = {};
    EmpApi.getEmployees = function () {
        return $http.get(urlBase + '/Employees');
    };

    return EmpApi;
});