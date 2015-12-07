'use strict';

// MODULE App
var app = angular.module('app', [
  'controllers', 
  'filters', 
  'services',
  'directives',
  'ngRoute' 
]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {templateUrl: 'view1.html'})
    .when('/ciri', {templateUrl: 'view2.html'})
    .otherwise({template: 'Error finding route'});
})

