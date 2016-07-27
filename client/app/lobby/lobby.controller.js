'use strict';

(function($http, $state, Auth){

class LobbyComponent {
  constructor($http, $state, Auth) {
    this.message = 'Hello';
    this.groupsArray = [];
      
    this.goToGroup = function(id) {
        console.log(id);
        $state.go('group', {id: id});
    }
    
//    this.groupsArray = Auth.getCurrentUser().groups || [];
      
    $http.get('/api/groups').success(groups => {
            console.log(groups);
            this.groupsArray = groups; 
        })
    .error(function(err) {
        console.log(err)
        console.log("suh")
        
    });
      console.log(this.groupsArray)

  }

}
angular.module('wineBurglarApp')
  .component('lobby', {
    templateUrl: 'app/lobby/lobby.html',
    controller: LobbyComponent,
    controllerAs: 'lobbyCtrl'
  });

})();
