'use strict';

// MODULE Directives
var directives = angular.module('directives', []);

// DIRECTIVE phot
directives.directive('photo', function() {
  return {
    restrict: 'E',
    template: '<figure>' +
                '<img width="500px" ng-src="{{photoSrc}}"/>' +
                '<figcaption>{{caption}}</figcaption>' +
              '</figure>',
    replace: true,
    controllerAs: 'testCtrl',
    /* Old version */
    /*
    link: function(scope,element,attrs) {
      attrs.$observe('caption', function (value) {
        element.find('figcaption').text(value);
      })
      attrs.$observe('photoSrc', function (value) {
        element.find('img').attr('src', value);
      })
     }*/
    /*With isolated scope*/
    scope: {
      /*One way databinding ParentScope --> DirectiveScope*/
      /*caption: '@',
      photoSrc: '@'*/
    }   
  }
});