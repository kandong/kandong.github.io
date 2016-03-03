'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:AboutController
 * @description
 * # AboutController
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('AboutController', ['$scope', function ($scope) {
  	$scope.page = 'about';

    $scope.experiences = [
		{
			'title': 'Front end developer',
			'time': '01/2015 - Present',
			'company': 'Excela Creative, Playa Vista, CA',
			'skills': [
				'Backbone.js',
				'JavaScript',
				'jQuery',
				'PHP',
				'HTML',
				'Handlebars',
				'Sass',
				'DynamoDB',
				'MySQL',
				'Git',
				'Grunt'
			],
			'description': 'Develop intuitive features and interfaces for an in-house E-commerce platform and client websites.'
		},
		{
			'title': 'Interactive Designer',
			'time': '07/2014 - 12/2014',
			'company': 'Red Road Media, Los Angeles, CA',
			'skills': [
				'Photoshop',
				'Illustrator',
				'After Effects',
				'Blender'
			],
			'description': 'Design interfaces for interactive projects such as Discovery Science Center interactive games, University of Wisconsin interactive kiosks and others.'
		},
		{
			'title': 'UX Designer',
			'time': '05/2013 - 06/2014',
			'company': 'TheHalfCity.com, Los Angeles, CA',
			'description': 'Created a unique user experience for a web based social review application in the Chinese market.'
		},
		{
			'title': 'Interactive Project Coordinator',
			'time': '08/2012 - 04/2014',
			'company': 'RGH Themed Entertainment, Woodland Hills, CA',
			'description': 'Conducted usability testing, user research and created visualization prototypes to collaborate in the development of interactive experience prototypes.'
		}
    ];

    $scope.education = [
    	{
    		'time': 'Graduated 2012',
    		'title': 'Master\'s of Entertainment Technology',
    		'school': 'Carnegie Mellon University',
    		'description': 'Project-based curriculum for clients such as Microsoft, LG and Oracle. Each project had a strong focus on rapid prototyping and user-centered design.'
    	},
    	{
    		'time': 'Graduated 2009',
    		'title': 'B.F.A in TV Editing and Directing',
    		'school': 'Communication University of China'
    	}
    ];
  }]);
