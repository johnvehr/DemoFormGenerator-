'use strict';

angular.module('empApplicationGenApp')
  .controller('ApplicationCtrl', function ($scope) {

    $scope.formStatus = false;
    $scope.appForm = {}

    $scope.saveData = function(){
      $scope.formStatus = false;
      $scope.post('/api/applications/write', $scope.appForm).success(function(res){
        console.log("Success")
      }).error(function(){
        console.log("Error on callback from server")
      })
    }

  });
