'use strict';

angular.module('wineBurglarApp')
  .directive('reccomendation', function () {
    return {
      templateUrl: 'app/reccomendation/reccomendation.html',
      scope: {
        contentLink: '=content',
        addedBy: '=user',
        isConsumed: '=consumed'
      },
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
