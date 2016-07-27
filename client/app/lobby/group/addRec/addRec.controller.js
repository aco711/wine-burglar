'use strict';

function addRecController($scope, Auth, $http, groupId) {
  this.message = 'Hello';
    this.id = groupId;
    this.link = '';
    
    this.ok = () => {

    var data = 
        {
             description: this.description,
             user: Auth.getCurrentUser()._id,
             link: this.link,
             group : this.id
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
