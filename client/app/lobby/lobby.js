'use strict';

angular.module('wineBurglarApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('lobby', {
        url: '/lobby',
        template: '<lobby></lobby>'
      })
    .state('group', {
        url: '/group/:id',
        template: '<group></group>'
//        templateUrl: 'app/lobby/group/group.html',
//        controller: 'GroupController'
      });
        
  });
