var app = angular.module("firstApp", []);

  app.controller("MyFirstController", function($scope){
   $scope.name = "Severus Snape";
  })

  app.controller("ExercisesController", function($scope){
    var seconds = 100 * 365 * 24 * 60 * 60;
    $scope.FavColor = "blue";
    $scope.secondsInACentury = seconds;
    $scope.date = Date.now();
  });
