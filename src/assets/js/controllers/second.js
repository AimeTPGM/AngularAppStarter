angular.module('app')
.controller('SecondCtrl',['$scope', '$http','$window',
	function($scope, $http, $window){
		$scope.hello = "This is second page!";
	}
]);