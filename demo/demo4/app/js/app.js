var app = angular.module('myApp',['ui.router']);
app.controller("myCtrl",function($scope){
	$scope.countries = ['Luxembourg','Saudi','Afghanistan','Bangladesh','Brunei','Cambodia','Indonesia','Jordan']
}).config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.when("/","main");
  	$stateProvider.state("main",{
  		url:"/main",
  		templateUrl:"./page/main.html",
  		controller:"mainCtrl"
  	}).state("state1",{
  		url:"/state1",
  		templateUrl:"./page/state1.html"
  	}).state("state2",{
  		url:"/state2",
  		templateUrl:"./page/state2.html"
  	}).state("state3",{
      url:"/state3",
      templateUrl:"./page/state3.html",
      resolve: {
        data: function(){
          return {
            list : [
            {
              id:1,
              name:'Luxembourg'
            },{
              id:2,
              name:'Saudi'
            },{
              id:3,
              name:'Afghanistan'
            },{
              id:4,
              name:'Bangladesh'
            }]
          }
        }
      },
      controller: "state3"
    }).state("state3.detail",{
      url:"/detail/:id",
      templateUrl:"./page/detail.html",
      controller:"detail"
    })
}).controller("mainCtrl",function($scope,$state){
  $scope.goto3 = function(){
    $state.go('state3');
  }
}).controller("state3",function($scope,data,$state){
  $scope.list = data.list;
  $scope.showDetail = function(id){
    $state.go('state3.detail',{id:id},{inherit:false}) //传递参数
  }
}).controller("detail",function($scope,$stateParams){
  console.log($scope.$parent.list)
  var id = $stateParams.id;
  if(id == 1){
    $scope.content = "你点击了第一个的详情";
  }else if(id == 2){
    $scope.content = "你点击了第二个的详情";
  }else if(id == 3){
    $scope.content = "你点击了第三个的详情";
  }else if(id == 4){
    $scope.content = "你点击了第四个的详情";
  }
})
