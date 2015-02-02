'use strict';

app.controller('MainCtrl', function ($scope, $http, Info, Tool) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    Tool.toolbarOff();

    $scope.login = function(){
      Info.login()
      .then(function(info){
      });
    }

    //user info
    $scope.userInfo

    $scope.getUserInfo = function(){
      Info.getInfo()
        .then(function(user){
          $scope.userInfo = user;
        });
    }
  });
