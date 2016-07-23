'use strict';

(function($scope, $http, $stateParams){

class GroupComponent {
  constructor($scope, $http, $stateParams) {
    $http.get('/api/groups/' + $stateParams.id).success(function(group) {
         $scope.group = group
  })
    .error(function(err) {
        console.log(err);
    }) 
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
