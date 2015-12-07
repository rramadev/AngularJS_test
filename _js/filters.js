'use strict';

// MODULE Filters
var filters = angular.module('filters', []);

// FILTER edad
filters.filter('edad', function() {
  return function(input, edad) {
    var filtered = [];
    if(!input) {
      return '';
    }
    if (!edad) {
      edad = 5;
    }
    for (var i=0; i<input.length; i++) {
      if (input[i].age >= edad) {
        filtered.push(input[i]);
      } 
    }
    return filtered;
  }
})