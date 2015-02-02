'use strict';

app.controller('ToolbarCtrl', function ($scope, $http, $location, Info, Tool) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.showing = Tool.toolbarShow;

    $scope.$on('state.update', function(thing, update){
      $scope.showing = update.state;
    });

    //user info
    $scope.logout = function(){
      Info.logout()
      .then(function(data) {
        $location.path("/logout");
      });
    }
  });