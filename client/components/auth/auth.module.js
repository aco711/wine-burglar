'use strict';

angular.module('wineBurglarApp.auth', ['wineBurglarApp.constants', 'wineBurglarApp.util',
    'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
