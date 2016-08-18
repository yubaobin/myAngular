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
		watch(); //解除监听
	}

	$scope.countries = ['Luxembourg','Saudi','Afghanistan','Bangladesh','Brunei','Cambodia','Indonesia','Jordan']
})

app.directive('pulldown',function(){
	return {
		restrict : "A",
		templateUrl: "./template/template.html",
		replace: true,
		scope: {
			datalist:"=",
		},
		controller: function($scope,$timeout){
			$scope.isFocus = false;
			$scope.focus = function(){
				$scope.isFocus = true;
			}
			$scope.blur = function(){
				$timeout(function () {
			     	$scope.isFocus = false;
			  	}, 200);				
			}
			this.setText = function(text){
				$scope.search = text;
			}
		},
		link: function(scope,elem,attrs,ctrl){
			
		}
	}
}).directive('myli',function(){
	return {
		restrict : "A",
		require: "^pulldown",
		scope: true,
		link: function(scope,elem,attrs,ctrl){
			elem.bind('click',function(e){
				ctrl.setText(elem[0].innerText);
			})
		}
	}
})

app.filter("myfilter",function(){
	return function(input,param){
		console.log("filter",param)
		if(!!input){
			return input*input;
		}else {
			return 0;
		}
	}
})