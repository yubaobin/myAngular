var app = angular.module('myApp',[]);
app.controller("myCtrl",function($scope){
	$scope.num = 0;
	$scope.ybb="ybb";
	$scope.data = [
		{
			name : 'test1',
			age : '11'
		},{
			name : 'test2',
			age : '12'
		},{
			name : 'test3',
			age : '13'
		},{
			name : 'test4',
			age : '14'
		}
	];

	$scope.myColor = 1;
	$scope.colors = [
		{
			code : 1,
			name : "红色"
		},{
			code : 2,
			name : "蓝色"
		},{
			code : 3,
			name : "绿色"
		},{
			code : 4,
			name : "黄色"
		}
	]
	$scope.time = 0;
	$scope.addNum = function(){
		$scope.num++;
		if($scope.num == 1){
			$scope.time1 = new Date();
		}else {
			$scope.time2 = new Date();
			var change = $scope.time2 - $scope.time1;
			if($scope.num == 2){
				$scope.time = change;
			}else if(change < $scope.time){
				$scope.time = change;
			}
		}
		$scope.time1 = new Date();
	}
	$scope.isFullStack = true;
})
app.directive("ybb",function(){
	return {
		restrict: 'E',
		scope:{
			name:"@",
			persons:"=",
			num:"=",
			add:"&",
			time:"@"
		},
		templateUrl:'./template/template.html',
		replace: true,
		link:function(scope,elem,attrs,ctrl){
			console.log(elem)
		}
	}
})