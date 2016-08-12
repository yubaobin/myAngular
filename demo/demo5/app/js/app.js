var app = angular.module('myApp',[]);
app.controller("myCtrl",function($scope){
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
	]
})
app.directive("ybb",function(){
	return {
		restrict: 'E',
		scope:{
			name:"@",
			persons:"@"
		},
		templateUrl:'./template/template.html',
		replace: true,
		link:function(scope,elem,attrs,ctrl){
			console.log(scope);
			console.log(elem);
			console.log(attrs);
			console.log(ctrl);
		}
	}
})