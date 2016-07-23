'use strict';

(function($scope, $http, $state){

class LobbyComponent {
  constructor($scope, $http, $state) {
    this.message = 'Hello';
      
    $scope.goToGroup = function(id) {
        console.log(id);
        $state.go('group', {id: id});
        
    }
      
    $http.get('/api/groups').success(function(groups) {
         $scope.groupsArray = groups;   
  })
    .error(function(err) {
        console.log(err)
        console.log("suh")
        
    });
  }
}

angular.module('wineBurglarApp')
  .component('lobby', {
    templateUrl: 'app/lobby/lobby.html',
    controller: LobbyComponent,
    controllerAs: 'lobbyCtrl'
  });

})();
