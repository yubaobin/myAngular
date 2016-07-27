var app = angular.module('myApp',[]);

app.directive("hello",function(){
	return {
		restrict : "EA",
		template : "<h1>Hello Directive</h1>"
	}
});
app.controller('myCtrl',function($scope){
	
});