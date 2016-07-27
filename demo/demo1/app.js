var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
	$scope.num = 0;
	$scope.user = [];
	$scope.add = function(e){
		console.log(e);
		var num = ++$scope.num;
		if(num%3 == 0){
			$scope.isRed = true;
			$scope.isGreen = false;
			$scope.isBlue = false;
		}else if(num%3 == 1){
			$scope.isRed = false;
			$scope.isGreen = true;
			$scope.isBlue = false;
		}else {
			$scope.isRed = false;
			$scope.isGreen = false;
			$scope.isBlue = true;
		}
		$scope.user.push(num);
	}
});