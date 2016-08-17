var app = angular.module('myApp',[]);
app.controller("myCtrl",function($scope){
	$scope.name = "ybb";
	var watch = $scope.$watch('name',function(newValue,oldValue,scope){
		console.log("new",newValue);
		console.log("old",oldValue);
		scope.say();
	})

	$scope.say = function(){
		console.log($scope.name);
		watch();
	}

	$scope.countries = ['Luxembourg','Saudi','Afghanistan','Bangladesh','Brunei','Cambodia','Indonesia','Jordan']
})

app.directive('pulldown',function(){
	return {
		restrict : "A",
		templateUrl: "./template/template.html",
		replace: false,
		scope: {
			datalist:"=",
		},
		controller: function($scope){
			$scope.isFocus = false;
		},
		link: function(scope,elem,attrs,ctrl){
			
		}
	}
}).directive('pulldowninput',function(){
	return {
		require: "^pulldown",
		scope: true,
		link: function(scope,elem,attrs,ctrl){
			elem.bind('focus',function(e){
				scope.isFocus = true;
			});
			elem.bind('blur',function(e){
				scope.isFocus = false;
			});
		}
	}
})