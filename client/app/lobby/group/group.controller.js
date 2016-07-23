'use strict';

(function($scope, $http){

class GroupComponent {
  constructor($scope, $http) {
    this.message = 'Hello';
   
  }
}

angular.module('wineBurglarApp')
  .component('group', {
    templateUrl: 'app/lobby/group/group.html',
    controller: groupComponent,
    controllerAs: 'groupCtrl'
  });

})();
