'use strict';

(function($scope, $http, $stateParams, $uibModal){

class GroupComponent {
  constructor($scope, $http, $stateParams, $uibModal) {
   
    //on load
    $http.get('/api/groups/' + $stateParams.id).success(function(group) {
         $scope.group = group
    })
    .error(function(err) {
        console.log(err);
    })
    
    $http.get('/api/recs/group/' + $stateParams.id).success(function(recs) {
         $scope.recs = recs
    })
    .error(function(err) {
        console.log(err);
    })
    
    
    
    
    $scope.addRec = function (size) {
    var addRecModal = $uibModal.open({
      templateUrl: 'app/lobby/group/addRec/addRec.html',
      controller: 'AddRecController',
      size: size,
      scope:$scope
     });
    }
    
//    addRecModal.result.then(function () {
//
//    }, function () {
//    });
    
    
    
  }
}

angular.module('wineBurglarApp')
  .component('group', {
    templateUrl: 'app/lobby/group/group.html',
    controller: GroupComponent,
    controllerAs: 'groupCtrl',
    bindings: {
        group: '='
    }
    });

})();
