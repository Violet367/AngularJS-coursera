(function () {
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController', LunchCheckController);


function LunchCheckController($scope, $injector){
  $scope.food = "";
  $scope.display = '';
  $scope.message = function(){
    var num = $scope.food.split(',').length;


      if($scope.food == ''){
        $scope.display = "Please enter data first.";
      }else if (num <= 3) {
        $scope.display = "Enjoy!";
      }else{
        $scope.display = "Too much!";
      }


  }

$injector.annotate(LunchCheckController);
};



})();
