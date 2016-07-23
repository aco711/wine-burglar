'use strict';

function groupController() {
  this.message = 'Hello';
}

angular.module('wineBurglarApp')
  .controller('GroupController', groupController);
