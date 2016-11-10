angular.module('users').
	config(['$routeProvider',
		function config($routeProvider) {
			$routeProvider.
				when('/login', {
				templateUrl: 'login.html',
				controller: 'loginCtrl',
				controllerAs: 'login'
			});
		}
	]);