'use strict';

(function($http, $stateParams, $uibModal){

class GroupComponent {
  constructor($http, $stateParams, $uibModal) {
   this.group = {};
   this.recs = [];
    //on load
    $http.get('/api/groups/' + $stateParams.id).success(group => {
         this.group = group
    })
    .error(function(err) {
        console.log(err);
    })
    
    $http.get('/api/recs/group/' + $stateParams.id).success(recs => {
         this.recs = recs
    })
    .error(function(err) {
        console.log(err);
    })
    
    
    
//    
    this.addRec = size => {
    var addRecModal = $uibModal.open({
      templateUrl: 'app/lobby/group/addRec/addRec.html',
      controller: 'AddRecController',
      controllerAs: 'addRecCtrl',
      size: size,
      resolve: {
        groupId: () => {
          return this.group._id;
        }
      }
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
    controllerAs: 'groupCtrl'
    });

})();
