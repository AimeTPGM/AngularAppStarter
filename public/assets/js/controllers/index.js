angular.module('app')
.controller('IndexCtrl',['$scope', '$http','$window',
	function($scope, $http, $window){
		$scope.hello = "Hello! This is main page!";
	}
]);