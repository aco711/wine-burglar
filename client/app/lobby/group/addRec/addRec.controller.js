'use strict';

function addRecController($scope, Auth, $http) {
  this.message = 'Hello';
    console.log($scope.group._id);
    
    $scope.ok = function () {
    var data = 
        {
             name: $scope.name,
             user: Auth.getCurrentUser()._id,
             content: $scope.link,
             consume: true
        }
         $http.post('/api/recs', data).then(function () {
             console.log('suh')
         }, function (err) {
             console.log(err)
         });
    }
}

angular.module('wineBurglarApp')
  .controller('AddRecController', addRecController);
