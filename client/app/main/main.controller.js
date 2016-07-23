'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket, $state) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];
      this.$state = $state;

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
          this.socket.syncUpdates('thing', this.awesomeThings);
        });
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }
      
    goToLobby() {
        console.log('suh');
        this.$state.go('lobby');
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

  angular.module('wineBurglarApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
