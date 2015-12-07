'use strict';

// MODULE Controllers
var controllers = angular.module('controllers', []);

// CONTROLLER Controller
controllers.controller('Controller', function(constService, valService, factService, servService, provService, $location) {
  this.constS = constService.attr;
  this.valS = valService();
  this.factS = factService.getData();  
  this.servS = servService.getData();  
  this.provS = provService.getData();  
  factService.reverse();  
  this.decoS = factService.getData();  
  this.sentence = "John Wayne is the best obviously"; 
  this.val = "";
  this.tooLong = false;
  this.cambios = 0;
  this.varClass = true;
  this.users = [
    {name:"jake", age:21},
    {name:"pepe", age:7},     
    {name:"pepito", age:18}
  ];
  this.photo = {
    url: "_img/photo1.jpg",
    url2: "_img/photo2.jpg",
    date: "Ayer"
  };

  this.navigate = function() {    
    $location.path = "/ciri";
    console.log("-" + $location.path);
  };
  this.func = function() {
    this.sentence += " y algo mas";
  };
  this.watcher = function() {    
    this.cambios++;  
    this.val.length > 5 ? this.tooLong = true : this.tooLong = false;
  };
});