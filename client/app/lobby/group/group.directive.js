'use strict';

angular.module('wineBurglarApp')
  .directive('group', function () {
    return {
      templateUrl: 'app/lobby/group/group.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
