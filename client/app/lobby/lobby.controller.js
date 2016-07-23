'use strict';

(function($scope, $http){

class LobbyComponent {
  constructor($scope, $http) {
    this.message = 'Hello';
      
    $scope.goToGroup = function(id) {
        console.log('suh');
        console.log(id);
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
