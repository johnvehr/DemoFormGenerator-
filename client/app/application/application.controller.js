'use strict';

angular.module('empApplicationGenApp')
  .controller('ApplicationCtrl', function ($scope, $http) {

    $scope.formStatus = false;
    $scope.appForm = {}

    $scope.saveData = function(){
      $scope.formStatus = true;
      $http.post('/api/applications/write', $scope.appForm).success(function(res){
        console.log("Success")
      }).error(function(){
        console.log("Error on callback from server")
      })
    }

  });
