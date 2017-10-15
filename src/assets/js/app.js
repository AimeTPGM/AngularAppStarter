var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
	function($routeProvider,$locationProvider) {

		$routeProvider
		.when('/',{
			templateUrl: '/views/index.html',
			controller: 'IndexCtrl',
			title : 'Main'
			
		})
		.when('/second',{
			templateUrl: '/views/second.html',
			controller: 'SecondCtrl',
			title : 'Second'
		})
		
		.otherwise({ redirectTo: '/'});

		$locationProvider.html5Mode({
				enabled: true,
				requireBase: false
		});
	}
]);