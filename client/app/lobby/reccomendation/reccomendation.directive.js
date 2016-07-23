'use strict';

angular.module('wineBurglarApp')
  .directive('reccomendation', function () {
    return {
      templateUrl: 'app/lobby/reccomendation/reccomendation.html',
      scope: {
        rec: '=reccomend'
      },
      controller : reccomendationController,
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
