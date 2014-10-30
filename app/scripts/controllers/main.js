'use strict';

/**
 * @ngdoc function
 * @name webFundamentalsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webFundamentalsApp
 */
angular.module('webFundamentalsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
