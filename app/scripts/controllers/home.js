'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:HomeController
 * @description
 * # HomeController
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
	.controller('HomeController', ['$scope', 'projects', function ($scope, projects) {
		$scope.page = 'home';
	    $scope.projects = projects;
	}]);
