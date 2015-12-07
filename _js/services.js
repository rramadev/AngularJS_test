'use strict';

// MODULE Services
var services = angular.module('services', []);

// SERVICE Constant
services.constant('constService', {attr: "this is a const!"});

// SERVICE Value
services.value('valService', function() { 
  return "this is a value!"; 
});

// SERVICE Factory
services.factory('factService', function() {
  // Private
  var myData = "this is factory data!";
  var myfunction = function() { };
  return {
    // Public
    myDataPublic: "",
    getData: function() {
      return myData;
    },
    setData: function(data) {
      myData = data;
    },
    addData: myfunction
  }
});

// SERVICE Service
services.service('servService', function() {
  // Private
  var myData = "this is service data!";
  var myfunction = function() { };
  // Public
  this.myDataPublic = "";
  this.getData = function() {
    return myData;    
  },
  this.addData = myfunction;
});

// SERVICE Provider
services.provider('provService', function() {
  // Private
  var myData = "this is provider data!";
  var myfunction = function() { };  
  return {
    // Initialization function to use in Config
    setData: function(data) {
      myData = data;
    },
    $get: function() {
      // Public
      return  {        
        getData: function() {
          return myData;    
        },
        addData: myfunction
      }
    }
  }  
});

  // Config - Init myData using provider function
  services.config(function(provServiceProvider) {
    provServiceProvider.setData("this is a config provider data!");
  });

// SERVICE Decorator
// Config - Extend factService adding a reverse method
// Provide is where angular create services
services.config(function($provide) {  
  // Decorator service
  // Delegate refers to the factory service 
  $provide.decorator('factService', function($delegate) {
    // New method
    $delegate.reverse = function() {
      console.log($delegate.getData())
      $delegate.setData($delegate.getData().split('').reverse().join(''));
    };
    return $delegate;
  })  
});