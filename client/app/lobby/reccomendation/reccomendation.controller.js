'use strict';

function reccomendationController($scope, $window) {
    console.log($scope.rec)
    
    $scope.goToContent = function () {
       $window.location.href = "http://" + $scope.rec.content;
    }

}

angular.module('wineBurglarApp')
  .controller('ReccomendationController', reccomendationController);

