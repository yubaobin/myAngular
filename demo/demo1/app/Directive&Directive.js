var myModule = angular.module("MyModule", []);

myModule.filter('small',function(){
    return function(input,params,params2){
        console.log('filterParams:'+params);
        console.log('filterParams2:'+params2);
        var back = [];
        for(var i = 0;i<input.length;i++){
            if(input[i].age < 3){
                back.push(input[i]);
            }
        }
        return back;
    }
});
myModule.controller('myController',['$scope',function($scope){
    $scope.array = [{
        'name' : 'a',
        'age' : '1'
    },{
        'name' : 'b',
        'age' : '2'
    },{
        'name' : 'c',
        'age' : '3'
    },{
        'name' : 'd',
        'age' : '4'
    },{
        'name' : 'e',
        'age' : '5'
    }];
}]);
myModule.directive("superman", function() {
    return {
        scope: {},
        restrict: 'AE',
        controller: function($scope) {
            $scope.abilities = [];
            this.addStrength = function() {
                $scope.abilities.push("strength");
            };
            this.addSpeed = function() {
                $scope.abilities.push("speed");
            };
            this.addLight = function() {
                $scope.abilities.push("light");
            };
        },
        link: function(scope, element, attrs) {
            element.addClass('btn btn-primary');
            element.bind("mouseenter", function() {
                console.log(scope.abilities);
            });
        }
    }
});
myModule.directive("strength", function() {
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addStrength();
        }
    }
});
myModule.directive("speed", function() {
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addSpeed();
        }
    }
});
myModule.directive("light", function() {
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addLight();
        }
    }
});