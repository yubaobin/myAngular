var myCSSModule = angular.module('MyCSSModule', []);
myCSSModule.controller('CSSCtrl', ['$scope',
    function($scope) {
        $scope.color = "red";
        $scope.setGreen = function() {
            $scope.color = "green";
        	$scope.float = "right";
        };
        $scope.retset = function(){
        	$scope.color = "red";
        	$scope.float = "left";
        }
    }
])
