var myCSSModule = angular.module('MyCSSModule', []);
myCSSModule.controller('DeathrayMenuController', ['$scope',
    function($scope) {
        $scope.menuState={show:true};
        $scope.toggleMenu = function() {
            $scope.menuState.show = !$scope.menuState.show;
        };
    }
])
