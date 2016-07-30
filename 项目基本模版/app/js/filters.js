var bookStoreFilters = angular.module('bookStoreFilters', []);

bookStoreFilters.filter('bookStoreFilter_1', 
	function(){
		return function(num){
			return num < 100;
		}
	}
);

bookStoreFilters.filter('bookStoreFilter_2', ['$scope',
    function($scope) {}
]);
