'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:ProjectController
 * @description
 * # ProjectController
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('ProjectController', ['$scope', '$routeParams', 'projects', function ($scope, $routeParams, projects) {
		var project = projects[$routeParams.alias],
			sortedProjects = Object.keys(projects).sort(function(pA, pB) {
			return projects[pA].order - projects[pB].order;
		}),
			order = project.order,
			prevProject = (order !== 0 ? sortedProjects[order - 1] : sortedProjects[sortedProjects.length - 1]),
			nextProject = (order !== (sortedProjects.length - 1) ? sortedProjects[order + 1] : sortedProjects[0]);

		project.alias = $routeParams.alias;

	  	$scope.page = 'project';
	  	$scope.project = project;
	  	$scope.prevProject = prevProject;
	  	$scope.nextProject = nextProject;
  }]);
