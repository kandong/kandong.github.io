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
      'title': 'Software Engineer',
      'time': '03/2017 - Present',
      'company': 'Workpop, Los Angeles, CA',
      'skills': [
        'React',
        'Redux',
        'Apollo/GraphQL',
        'ES2015+',
        'Glamor',
        'Recompose',
        'Webpack',
        'Babel',
        'Yarn',
      ],
      'skillType': 'code',
      'description': 'Build internal React components library, creating consistent and engaging design patterns across all parts of our platform.  Shipped the Career Site custom builder where clients can create their own branded Career pages in just a few minutes. As a result, larger clients were attracted to Workpop.  Updated the subscription model essential to business growth needs. This resolved long standing customer issues by making the account management experience CSS easier.'
    },
    {
      'title': 'Front End Developer',
      'time': '04/2016 - 03/2017',
      'company': 'HomeHero, Santa Monica, CA',
      'skills': [
        'Vue',
        'Laravel',
        'HTML5',
        'Stylus',
        'ES2015',
        'Webpack',
        'Babel',
        'Yarn',
      ],
      'skillType': 'code',
      'description': 'Improved experience and performance to the patient signup and caregiver matching funnel through UI components redesign and code splitting.  Designed UI and led the front end development of a scheduling system that allows patient managers to assign caregivers with consideration of repeating services, geo location and aid needs.'
    },
		{
			'title': 'Front end developer',
			'time': '01/2015 - 04/2016',
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
			'skillType': 'code',
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
			'skillType': 'design',
			'description': 'Design interfaces for interactive projects such as Discovery Science Center interactive games, University of Wisconsin interactive kiosks and others.'
		},
		{
			'title': 'UX Designer',
			'time': '05/2013 - 06/2014',
			'company': 'TheHalfCity.com, Los Angeles, CA',
			'skills': [
				'Photoshop',
			],
			'skillType': 'design',
			'description': 'Created a unique user experience for a web based social review application in the Chinese market.'
		},
		{
			'title': 'Interactive Project Coordinator',
			'time': '08/2012 - 04/2014',
			'company': 'RGH Themed Entertainment, Woodland Hills, CA',
			'skills': [
				'Processing',
				'Unity'
			],
			'skillType': 'code',
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

    $scope.skills = {
	    'experienced': [
	    	'React',
	    	'Redux',
	    	'Apollo/GraphQL',
	    	'ES2015+',
        'Glamor',
        'Recompose',
        'Node.js',
        'Webpack',
        'Babel',
        'Vue',
        'Laravel',
        'HTML',
        'CSS',
        'Sass/Stylus',
        'Yarn/NPM',
        'Git',
        'Gulp/Grunt',
        'jQuery',
      ],
	    'growing': [
        'Express',
	    	'MongoDB',
	    ]
    };
  }]);
