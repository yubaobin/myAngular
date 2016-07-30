var bookStoreCtrls = angular.module('bookStoreCtrls', []);

bookStoreCtrls.controller('HelloCtrl', ['$scope',
    function($scope) {
        $scope.greeting = [123,1,34,56,68,2,0];

        $scope.fuck = {
            name:"fuck you !"
        };
        $scope.pageClass="hello";
        $scope.bigthen = function(num){
            return num >4;
        }
    }
]);

bookStoreCtrls.controller('BookListCtrl', ['$scope',
    function($scope) {
        $scope.books =[
        	{title:"《Ext江湖》",author:"大漠穷秋"},
        	{title:"《ActionScript游戏设计基础（第二版）》",author:"大漠穷秋"},
        	{title:"《用AngularJS开发下一代WEB应用》",author:"大漠穷秋"}
        ]
        $scope.pageClass="list";
    }
]);

/**
 * 指令
 */

bookStoreCtrls.directive('big',function(){
    return {
        restrict: "E",
        controller: function($scope){
            $scope.content = 0;
            this.add = function(){
                $scope.content++;
            }
        }
    }
});

bookStoreCtrls.directive('min',function(){
    return {
        restrict: "E",
        controller: function($scope){
            this.min = function(){
                $scope.content--;
            }
        }
    }
});

bookStoreCtrls.directive('small',function(){
    return {
        restrict: 'E',
        require: ['?^big','?^min'],
        template: '<div>{{content}}</div><button ng-click="add()">添加</button><button ng-click="min()">减少</button>',
        link: function(scope,elem,attrs,ctrl){
            scope.add = function(){
                ctrl[0].add();
            }
            scope.min = function(){
                ctrl[1].min();
            }
        },
    }
});
/**
 * 这里接着往下写，如果控制器的数量非常多，需要分给多个开发者，可以借助于grunt来合并代码
 */

