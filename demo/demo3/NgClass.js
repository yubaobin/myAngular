var myCSSModule = angular.module('MyCSSModule', []);
myCSSModule.controller('HeaderController', ['$scope',
    function($scope) {
        $scope.isError = false;
        $scope.isWarning = true;
        $scope.showError = function() {
            $scope.messageText = 'This is an error!';
            $scope.isError = true;
            $scope.isWarning = true;
        };
        $scope.showWarning = function() {
            $scope.messageText = 'Just a warning. Please carry on.';
            $scope.isWarning = true;
            $scope.isError = true;
        };
    }
])
