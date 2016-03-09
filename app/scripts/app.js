'use strict';

/**
 * @ngdoc overview
 * @name portfolioApp
 * @description
 * # portfolioApp
 *
 * Main module of the application.
 */
function config($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        reloadOnSearch: false
    })
    .when('/project/:alias', {
        templateUrl: 'views/project.html',
        controller: 'ProjectController',
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController',
    })
    .otherwise({
        redirectTo: '/'
    });
}

function run($rootScope, $location, $timeout, $anchorScroll) {
    $rootScope.$on('$routeChangeSuccess', function() {
        if ($location.hash() === 'work') {
            $rootScope.routeChange = true;
            $timeout(function() {
                angular.element(document.querySelector('#nav-work')).triggerHandler('click');
            });
        } else {
            $timeout($anchorScroll);
        }
    });
}

function MainController($scope, $location, anchorSmoothScroll) {
    $scope.header = {
        'url': 'views/header.html'
    };
    $scope.footer = {
        'url': 'views/footer.html'
    };
    $scope.socialLinks = [
        {
            'label': 'Email',
            'link': 'mailto:kannier.dong@gmail.com',
            'short': 'kannier.dong@gmail.com'
        },
        {
            'label': 'LinkedIn',
            'link': 'https://www.linkedin.com/in/dongkan',
            'short': 'linkedin.com/in/dongkan'
        },
        {
            'label': 'Twitter',
            'link': 'https://twitter.com/kannier',
            'short': '@kannier'
        },
        {
            'label': 'CodePen',
            'link': 'http://codepen.io/kandong/',
            'short': '@kandong'
        },
    ];
    $scope.menu = {
        open: false
    };
    $scope.contact = {
        open: false
    };
    $scope.year = (new Date()).getFullYear();
    $scope.scrollTo = function(id) {
        $location.hash(id);
        anchorSmoothScroll.scrollTo(id);
    };
}

function anchorSmoothScroll($document, $window) {
    var document = $document[0];
    var window = $window;

    function getCurrentPagePosition(window, document) {
        // Firefox, Chrome, Opera, Safari
        if (window.pageYOffset) {
            return window.pageYOffset;
        }
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop) {
            return document.documentElement.scrollTop;
        }
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop) {
            return document.body.scrollTop;
        }
        return 0;
    }

    function getElementY(document, element) {
        var y = element.offsetTop;
        var node = element;
        while (node.offsetParent && node.offsetParent !== document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        }
        return y;
    }

    this.scrollDown = function (startY, stopY, speed, distance) {
        var timer = 0;

        var step = Math.round(distance / 25);
        var leapY = startY + step;

        for (var i = startY; i < stopY; i += step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY += step;
            if (leapY > stopY) {
                leapY = stopY;
            }
            timer++;
        }
    };

    this.scrollUp = function (startY, stopY, speed, distance) {

        var timer = 0;

        var step = Math.round(distance / 25);
        var leapY = startY - step;

        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step;
            if (leapY < stopY) {
                leapY = stopY;
            }
            timer++;
        }
    };

    this.scrollToTop = function (stopY) {
        scrollTo(0, stopY);
    };

    this.scrollTo = function (elementId, speed) {
        // This scrolling function
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

        var element = document.getElementById(elementId);

        if (element) {
            var startY = getCurrentPagePosition(window, document);
            var stopY = getElementY(document, element);

            var distance = stopY > startY ? stopY - startY : startY - stopY;

            if (distance < 100) {
                this.scrollToTop(stopY);

            } else {
                var defaultSpeed = Math.round(distance / 100);
                speed = speed || (defaultSpeed > 20 ? 20 : defaultSpeed);

                if (stopY > startY) {
                    this.scrollDown(startY, stopY, speed, distance);
                } else {
                    this.scrollUp(startY, stopY, speed, distance);
                }
            }

        }

    };
}

function loadImg() {
    return {
        restrict: 'A',
        scope: {
            'imgSrc': '@loadImgSrc'
        },
        link: function($scope, elem, attrs) {
            var sizes = attrs.loadImg.split(','),
                srcsetStr = '';
            angular.forEach(sizes, function(size) {
                srcsetStr += $scope.imgSrc + '_' + size + '.jpg ' + size + 'w, ';
            });

            elem.attr({
                'src': $scope.imgSrc + '_' + sizes[0] + '.jpg',
                'srcset': srcsetStr
            });
        }
    };
}

function social() {
    return {
        restrict: 'E',
        scope: {
            socialLink: '=linkData'
        },
        replace: true,
        template: '<li><a href="{{::socialLink.link}}" target="_blank"><span class="font-icon icon-{{::socialLink.label | lowercase}}"></span></a></li>'
    };
}

function factoryProjects() {
    var projects = {
        'smooth-jazz-platform' : {
            'imgPath': 'smoothjazz',
            'title': 'Smooth Jazz',
            'subtitle': 'E-commerce platform',
            'description': 'Smooth Jazz is a single page application equipped for E-commerce solution.  As a front end developer, I worked on interface design and develop for various features, such as adding product to wish list, gift card purchase and redemption, assigning similar products, etc.  I challenged myself to also emmerse into back end development, and implemented features like building tree structure for product listing navigation, improving search algorithm, and building an email marketing system.',
            'tools': ['Backbone.Js', 'JavaScript', 'jQuery', 'PHP', 'HTML', 'Handlebars', 'SaSS', 'DynamoDB', 'MySQL', 'Git', 'Grunt'],
            'link': '',
            'noMobile': true,
            'screenshots': [
                {
                    'title': 'Wish list',
                    'images': ['wishlist.png']
                },
                {
                    'title': 'Gift card',
                    'images': ['giftcard.png']
                },
                {
                    'title': 'Product navigation',
                    'images': ['product_nav.png']
                },
                {
                    'title': 'Similar products',
                    'images': ['similar_products.png']
                },
                {
                    'title': 'Product attributes',
                    'images': ['attributes.png']
                },
            ]
        },
        'faceplace' : {
            'imgPath': 'faceplace',
            'title': 'Faceplace',
            'subtitle': 'E-commerce site',
            'tools': ['jQuery', 'HTML', 'SaSS'],
            'link': 'http://faceplace-us.smoothjazz.me/',
            'screenshots': [
                {
                    'images': ['service.jpg']
                },
                {
                    'images': ['testimonials.png']
                },
            ]
        },
        'jeffrey-james-botanicals' : {
            'imgPath': 'jeffreyjames',
            'title': 'Jeffrey James Botanicals',
            'subtitle': 'E-commerce site',
            'tools': ['jQuery', 'HTML', 'SaSS'],
            'link': 'http://www.jeffreyjamesbotanicals.com/',
            'screenshots': [
                {
                    'images': ['subscription.png']
                },
                {
                    'images': ['story.png']
                },
            ]
        },
        'automaton' : {
            'imgPath': 'automaton',
            'title': 'Automaton',
            'subtitle': 'E-commerce site',
            'tools': ['jQuery', 'HTML', 'SaSS'],
            'link': 'http://www.automaton.us/',
            'screenshots': [
                {
                    'images': ['home.jpg']
                },
                {
                    'images': ['products.png']
                },
            ]
        },
        'smooth-jazz' : {
            'imgPath': 'smoothjazzbrochure',
            'title': 'Smooth Jazz',
            'subtitle': 'Brochure site',
            'tools': ['jQuery', 'HTML', 'SaSS', 'PHP'],
            'link': 'http://smoothjazz.me/',
            'screenshots': [
                {
                    'images': ['home.png']
                },
            ]
        },
        'lola-james-jewelry' : {
            'imgPath': 'lolajames',
            'title': 'Lola James Jewerly',
            'subtitle': 'E-commerce site',
            'tools': ['jQuery', 'HTML', 'SaSS'],
            'link': 'http://www.lolajamesjewelry.com/',
            'screenshots': [
                {
                    'images': ['home.png']
                },
            ]
        },
        'amanda-marmer' : {
            'imgPath': 'amandamarmer',
            'title': 'Amanda Marmer',
            'subtitle': 'E-commerce site',
            'tools': ['jQuery', 'HTML', 'SaSS'],
            'link': 'http://www.amandamarmer.com/',
            'screenshots': [
                {
                    'images': ['about.png']
                },
            ]
        },
        'the-curation-agency' : {
            'imgPath': 'curation',
            'title': 'The Curation Agency',
            'subtitle': 'Brochure site',
            'description': 'One page brochure website with rich animations.',
            'tools': ['SVG', 'GSAP', 'jQuery', 'HTML', 'SaSS'],
            'link': 'http://thecurationagency.com/',
            'screenshots': [
                {
                    'images': ['home.png']
                },
            ]
        },
        'maya-branner-designs' : {
            'imgPath': 'mayabrenner',
            'title': 'Maya Brenner Designs',
            'subtitle': 'E-commerce site',
            'tools': ['jQuery', 'HTML', 'SaSS'],
            'link': 'http://www.mayabrenner.com/',
            'screenshots': [
                {
                    'images': ['home.png']
                },
            ]
        },
        'a-marmer' : {
            'imgPath': 'amarmer',
            'title': 'A. Marmer',
            'subtitle': 'E-commerce site',
            'tools': ['jQuery', 'HTML', 'SaSS'],
            'link': 'http://www.amarmer.com/',
            'screenshots': [
                {
                    'images': ['home.jpg']
                },
            ]
        },
        'haan-oakley' : {
            'imgPath': 'haanoakley',
            'title': 'Haan Oakley',
            'subtitle': 'Demo site',
            'description': 'This is a demo website only for mock-up purpose.',
            'tools': ['jQuery', 'HTML', 'SaSS'],
            'link': 'http://hoakley.smoothjazz.me/',
            'screenshots': [
                {
                    'images': ['home.png']
                },
                {
                    'images': ['about.png']
                },
            ]
        }
    },
    order = 0,
    p;

    for (p in projects) {
        projects[p].order = order;
        order++;
    }

    return projects;
}

angular.module('portfolioApp', [
        'ngAnimate',
        'ngRoute',
        'angular-inview'
    ])
    .config(config)
    .service('anchorSmoothScroll', anchorSmoothScroll)
    .factory('projects', factoryProjects)
    .directive('loadImg', loadImg)
    .directive('social', social)
    .controller('MainController', ['$scope', '$location', 'anchorSmoothScroll', MainController])
    .run(run);