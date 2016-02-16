'use strict';

angular.module('empApplicationGenApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('application', {
        url: '/application',
        templateUrl: 'app/application/application.html',
        controller: 'ApplicationCtrl'
      });
  });
