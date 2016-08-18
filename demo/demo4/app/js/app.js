var app = angular.module('myApp',['ui.router']);
app.controller("myCtrl",function($scope){
	$scope.countries = ['Luxembourg','Saudi','Afghanistan','Bangladesh','Brunei','Cambodia','Indonesia','Jordan']
})
app.controller("mainCtrl",function($scope,$state){
	
})
app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.when("/","main");
  	$stateProvider.state("main",{
  		url:"/main",
  		templateUrl:"./page/main.html"
  		controller:"mainCtrl"
  	}).state("state1",{
  		url:"/state1",
  		templateUrl:"./page/state1.html"
  	}).state("state2",{
  		url:"/state2",
  		templateUrl:"./page/state2.html"
  	})
});
