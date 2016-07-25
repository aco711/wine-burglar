'use strict';

function addRecController($scope, Auth, $http) {
  this.message = 'Hello';
    console.log($scope.group._id);
    
    $scope.ok = function () {
        console.log($scope.link);
    var data = 
        {
             description: $scope.description,
             user: Auth.getCurrentUser()._id,
             link: $scope.link,
             group : $scope.group._id
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
