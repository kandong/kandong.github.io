"use strict";function config(a){a.when("/",{templateUrl:"views/home.html",controller:"HomeController",reloadOnSearch:!1}).when("/project/:alias",{templateUrl:"views/project.html",controller:"ProjectController"}).when("/about",{templateUrl:"views/about.html",controller:"AboutController"}).otherwise({redirectTo:"/"})}function run(a,b,c,d){a.$on("$routeChangeSuccess",function(){"work"===b.hash()?(a.routeChange=!0,c(function(){angular.element(document.querySelector("#nav-work")).triggerHandler("click")})):c(d)})}function MainController(a,b,c){a.header={url:"views/header.html"},a.footer={url:"views/footer.html"},a.socialLinks=[{label:"Email",link:"mailto:kannier.dong@gmail.com","short":"kannier.dong@gmail.com"},{label:"LinkedIn",link:"https://www.linkedin.com/in/dongkan","short":"linkedin.com/in/dongkan"},{label:"Twitter",link:"https://twitter.com/kannier","short":"@kannier"},{label:"CodePen",link:"http://codepen.io/kandong/","short":"@kandong"}],a.menu={open:!1},a.contact={open:!1},a.year=(new Date).getFullYear(),a.scrollTo=function(a){b.hash(a),c.scrollTo(a)}}function anchorSmoothScroll(a,b){function c(a,b){return a.pageYOffset?a.pageYOffset:b.documentElement&&b.documentElement.scrollTop?b.documentElement.scrollTop:b.body.scrollTop?b.body.scrollTop:0}function d(a,b){for(var c=b.offsetTop,d=b;d.offsetParent&&d.offsetParent!==a.body;)d=d.offsetParent,c+=d.offsetTop;return c}var e=a[0],f=b;this.scrollDown=function(a,b,c,d){for(var e=0,f=Math.round(d/25),g=a+f,h=a;b>h;h+=f)setTimeout("window.scrollTo(0, "+g+")",e*c),g+=f,g>b&&(g=b),e++},this.scrollUp=function(a,b,c,d){for(var e=0,f=Math.round(d/25),g=a-f,h=a;h>b;h-=f)setTimeout("window.scrollTo(0, "+g+")",e*c),g-=f,b>g&&(g=b),e++},this.scrollToTop=function(a){scrollTo(0,a)},this.scrollTo=function(a,b){var g=e.getElementById(a);if(g){var h=c(f,e),i=d(e,g),j=i>h?i-h:h-i;if(100>j)this.scrollToTop(i);else{var k=Math.round(j/100);b=b||(k>20?20:k),i>h?this.scrollDown(h,i,b,j):this.scrollUp(h,i,b,j)}}}}function loadImg(){return{restrict:"A",scope:{imgSrc:"@loadImgSrc"},link:function(a,b,c){var d=c.loadImg.split(","),e="";angular.forEach(d,function(b){e+=a.imgSrc+"_"+b+".jpg "+b+"w, "}),b.attr({src:a.imgSrc+"_"+d[0]+".jpg",srcset:e})}}}function social(){return{restrict:"E",scope:{socialLink:"=linkData"},replace:!0,template:'<li><a href="{{::socialLink.link}}" target="_blank"><span class="font-icon icon-{{::socialLink.label | lowercase}}"></span></a></li>'}}function factoryProjects(){var a,b={"smooth-jazz-platform":{imgPath:"smoothjazz",title:"Smooth Jazz",subtitle:"E-commerce platform",description:"Smooth Jazz is a single page application equipped for E-commerce solution.  As a front end developer, I worked on interface design and develop for various features, such as adding product to wish list, gift card purchase and redemption, assigning similar products, etc.  I challenged myself to also emmerse into back end development, and implemented features like building tree structure for product listing navigation, improving search algorithm, and building an email marketing system.",tools:["Backbone.Js","JavaScript","jQuery","PHP","HTML","Handlebars","SaSS","DynamoDB","MySQL","Git","Grunt"],link:"",noMobile:!0,screenshots:[{title:"Wish list",images:["wishlist.png"]},{title:"Gift card",images:["giftcard.png"]},{title:"Product navigation",images:["product_nav.png"]},{title:"Similar products",images:["similar_products.png"]},{title:"Product attributes",images:["attributes.png"]}]},faceplace:{imgPath:"faceplace",title:"Faceplace",subtitle:"E-commerce site",tools:["jQuery","HTML","SaSS"],link:"http://faceplace-us.smoothjazz.me/",screenshots:[{images:["service.jpg"]},{images:["testimonials.png"]}]},"jeffrey-james-botanicals":{imgPath:"jeffreyjames",title:"Jeffrey James Botanicals",subtitle:"E-commerce site",tools:["jQuery","HTML","SaSS"],link:"http://www.jeffreyjamesbotanicals.com/",screenshots:[{images:["subscription.png"]},{images:["story.png"]}]},automaton:{imgPath:"automaton",title:"Automaton",subtitle:"E-commerce site",tools:["jQuery","HTML","SaSS"],link:"http://www.automaton.us/",screenshots:[{images:["home.jpg"]},{images:["products.png"]}]},"smooth-jazz":{imgPath:"smoothjazzbrochure",title:"Smooth Jazz",subtitle:"Brochure site",tools:["jQuery","HTML","SaSS","PHP"],link:"http://smoothjazz.me/",screenshots:[{images:["home.png"]}]},"lola-james-jewelry":{imgPath:"lolajames",title:"Lola James Jewerly",subtitle:"E-commerce site",tools:["jQuery","HTML","SaSS"],link:"http://www.lolajamesjewelry.com/",screenshots:[{images:["home.png"]}]},"amanda-marmer":{imgPath:"amandamarmer",title:"Amanda Marmer",subtitle:"E-commerce site",tools:["jQuery","HTML","SaSS"],link:"http://www.amandamarmer.com/",screenshots:[{images:["about.png"]}]},"the-curation-agency":{imgPath:"curation",title:"The Curation Agency",subtitle:"Brochure site",description:"One page brochure website with rich animations.",tools:["SVG","GSAP","jQuery","HTML","SaSS"],link:"http://thecurationagency.com/",screenshots:[{images:["home.png"]}]},"maya-branner-designs":{imgPath:"mayabrenner",title:"Maya Brenner Designs",subtitle:"E-commerce site",tools:["jQuery","HTML","SaSS"],link:"http://www.mayabrenner.com/",screenshots:[{images:["home.png"]}]},"a-marmer":{imgPath:"amarmer",title:"A. Marmer",subtitle:"E-commerce site",tools:["jQuery","HTML","SaSS"],link:"http://www.amarmer.com/",screenshots:[{images:["home.jpg"]}]},"haan-oakley":{imgPath:"haanoakley",title:"Haan Oakley",subtitle:"Demo site",description:"This is a demo website only for mock-up purpose.",tools:["jQuery","HTML","SaSS"],link:"http://hoakley.smoothjazz.me/",screenshots:[{images:["home.png"]},{images:["about.png"]}]}},c=0;for(a in b)b[a].order=c,c++;return b}config.$inject=["$routeProvider"],run.$inject=["$rootScope","$location","$timeout","$anchorScroll"],anchorSmoothScroll.$inject=["$document","$window"],angular.module("portfolioApp",["ngAnimate","ngRoute","angular-inview"]).config(config).service("anchorSmoothScroll",anchorSmoothScroll).factory("projects",factoryProjects).directive("loadImg",loadImg).directive("social",social).controller("MainController",["$scope","$location","anchorSmoothScroll",MainController]).run(run),angular.module("portfolioApp").controller("HomeController",["$scope","projects",function(a,b){a.page="home",a.projects=b}]),angular.module("portfolioApp").controller("ProjectController",["$scope","$routeParams","projects",function(a,b,c){var d=c[b.alias],e=Object.keys(c).sort(function(a,b){return c[a].order-c[b].order}),f=d.order,g=0!==f?e[f-1]:e[e.length-1],h=f!==e.length-1?e[f+1]:e[0];d.alias=b.alias,a.page="project",a.project=d,a.prevProject=g,a.nextProject=h}]),angular.module("portfolioApp").controller("AboutController",["$scope",function(a){a.page="about",a.experiences=[{title:"Front end developer",time:"01/2015 - Present",company:"Excela Creative, Playa Vista, CA",skills:["Backbone.js","JavaScript","jQuery","PHP","HTML","Handlebars","Sass","DynamoDB","MySQL","Git","Grunt"],skillType:"code",description:"Develop intuitive features and interfaces for an in-house E-commerce platform and client websites."},{title:"Interactive Designer",time:"07/2014 - 12/2014",company:"Red Road Media, Los Angeles, CA",skills:["Photoshop","Illustrator","After Effects","Blender"],skillType:"design",description:"Design interfaces for interactive projects such as Discovery Science Center interactive games, University of Wisconsin interactive kiosks and others."},{title:"UX Designer",time:"05/2013 - 06/2014",company:"TheHalfCity.com, Los Angeles, CA",skills:["Photoshop"],skillType:"design",description:"Created a unique user experience for a web based social review application in the Chinese market."},{title:"Interactive Project Coordinator",time:"08/2012 - 04/2014",company:"RGH Themed Entertainment, Woodland Hills, CA",skills:["Processing","Unity"],skillType:"code",description:"Conducted usability testing, user research and created visualization prototypes to collaborate in the development of interactive experience prototypes."}],a.education=[{time:"Graduated 2012",title:"Master's of Entertainment Technology",school:"Carnegie Mellon University",description:"Project-based curriculum for clients such as Microsoft, LG and Oracle. Each project had a strong focus on rapid prototyping and user-centered design."},{time:"Graduated 2009",title:"B.F.A in TV Editing and Directing",school:"Communication University of China"}],a.skills={experienced:["HTML","CSS","Sass","JavaScript","jQuery","Backbone.js","PHP","Git","Grunt / Gulp"],growing:["Node.js","AngularJS","React","Babel"]}}]),angular.module("portfolioApp").run(["$templateCache",function(a){a.put("views/about.html",'<article id="about-content"> <div class="container clearfix"> <div class="header"> <h2 class="header-name">Kan Dong</h2> <h3 class="header-title">Front end developer</h3> <ul class="social-links"> <li class="header-location"><span class="font-icon icon-location"></span>Los Angeles</li> <li ng-repeat="socialLink in ::socialLinks"><a href="{{::socialLink.link}}" target="_blank"><span class="font-icon icon-{{::socialLink.label | lowercase}}"></span>{{::socialLink.short}}</a></li> <li> <span class="font-icon icon-doc"></span><a href="../images/KanDong_FrontEndDeveloper.pdf" download><span class="btn-text">Grab A Resume</span></a> </li> </ul> </div> <div class="panel-left"> <section class="experiences"> <h2 class="section-heading"><span class="font-icon icon-experience"></span>Experiences</h2> <ul class="timeline"> <li ng-repeat="experience in ::experiences" class="timeline-item"> <div class="aside"> <h4 class="time v-space">{{::experience.time}}</h4> </div> <div class="main"> <h3 class="title v-space">{{::experience.title}}</h3> <h5 class="location">{{::experience.company}}</h5> <p class="description">{{::experience.description}}</p> <h5 ng-if="experience.skills" class="skills"><span class="font-icon icon-{{::experience.skillType}}"></span>{{::experience.skills.join(\', \')}}</h5> </div> </li> </ul> </section> <section class="education"> <h2 class="section-heading"><span class="font-icon icon-education"></span>Education</h2> <ul class="timeline"> <li ng-repeat="edu in ::education" class="timeline-item"> <div class="aside"> <h4 class="time v-space">{{::edu.time}}</h4> </div> <div class="main"> <h3 class="title v-space">{{::edu.title}}</h3> <h5 class="location">{{::edu.school}}</h5> <p ng-if="edu.description" class="description">{{::edu.description}}</p> </div> </li> </ul> </section> </div> <div class="panel-right"> <section class="skills"> <div> <h2 class="section-heading"><span class="font-icon icon-code"></span>Development Skills</h2> <div class="list-container"> <ul ng-repeat="(title, skill) in ::skills"> <li><h3 class="list-heading v-space">{{::title}}</h3></li> <li ng-repeat="s in ::skill">{{s}}</li> </ul> </div> </div> <div> <h2 class="section-heading"><span class="font-icon icon-design"></span>Design Skills</h2> <ul> <li>Photoshop</li> <li>Illustrator</li> </ul> </div> </section> </div> </div> </article>'),a.put("views/footer.html",'<div class="container clearfix"> <ul class="social-links"> <social ng-repeat="socialLink in ::socialLinks" link-data="socialLink"></social> </ul> <p>&copy; {{::year}} Designed &amp; Coded by Kan Dong</p> </div>'),a.put("views/header.html",'<div class="container"> <a id="logo" class="btn-header" href="#/" ng-class="{\'open\': menu.open}"><span>K</span></a> <nav id="nav-menu" ng-class="{\'open\' : menu.open}"> <ul class="nav-links"> <li><a href="#/" ng-click="menu.open = false;scrollTo(&quot;work&quot;)" id="nav-work">Work</a></li> <li><a href="#/about" ng-click="menu.open = false">About</a></li> <li> <a id="contact-link" ng-click="contact.open = !contact.open">Contact</a> <ul class="social-links" ng-show="contact.open || menu.open"> <social ng-repeat="link in ::socialLinks" link-data="link"></social> </ul> </li> </ul> </nav> </div> <a ng-click="menu.open = !menu.open" ng-class="{\'open\': menu.open}" class="menu-toggle btn-header"> <span></span> </a> <div id="contact-content" ng-class="{\'open\': contact.open}"> <div class="content-wrapper"> <h1>Connect with Me</h1> <div class="content-row" ng-repeat="socialLink in ::socialLinks"> <h3>{{::socialLink.label}}</h3> <p><a href="{{::socialLink.link}}" target="_blank">{{::socialLink.short}}</a></p> </div> <span class="close-content" ng-click="contact.open = !contact.open">Close</span> </div> </div>'),a.put("views/home.html",'<section class="intro"> <div class="container"> <div class="statement"> <h1>Kan is a <span class="block">front end developer</span></h1> <div class="spin-text-block"> <span id="heart"></span> <span class="spin-constant">who</span> <ul class="spin-text-wrapper"> <li class="spin-text">loves</li> <li class="spin-text">enjoys</li> <li class="spin-text">creates</li> </ul> <ul class="spin-text-wrapper"> <li class="spin-text">delightful user experience</li> <li class="spin-text">pixel perfect design</li> <li class="spin-text">meaningful interaction</li> </ul> </div> </div> </div> </section> <a id="work"></a> <section id="work-container"> <div class="container"> <div id="thumbnail-grid" class="grid"> <a ng-repeat="(alias, project) in ::projects" in-view="project.inview = $inview" in-view-options="{ debounce: 250 }" ng-class="::{\'in-view\' : routeChange || project.inview}" class="thumbnail" href="#/project/{{::alias}}"> <figure> <img alt="thumbnail of project {{::project.title}}" sizes="(min-width: 1220px) 400px, (min-width: 1024px) calc(33vw - 10px), (min-width: 768px) calc(50vw - 10px), 100vw" load-img="767,1534,510,1020" load-img-src="/images/home/{{::project.imgPath}}" model="thumbnail"> <figcaption class="copy-wrapper"> <h3 class="title">{{::project.title}}</h3> <p class="sub-title">{{::project.subtitle}}</p> </figcaption> </figure> </a> </div> </div> </section>'),a.put("views/project.html",'<article class="project-content project-{{::project.alias}}"> <section class="intro"> <div class="container"> <hgroup> <h1 class="project-title">{{::project.title}}</h1> <h2>{{::project.subtitle}}</h2> <p ng-if="project.description">{{::project.description}}</p> <p class="project-tools"><span class="font-icon icon-code"></span>{{::project.tools.join(\', \')}}</p> <a class="btn-main project-link" ng-if="project.link" href="{{::project.link}}" target="_blank"><span class="btn-text">Go to site</span></a> </hgroup> <div class="jumbotron"> <div class="img-wrapper desktop"> <img ng-src="/images/project/{{::project.imgPath}}/desktop.png" alt="desktop layout of {{::project.title}}"> </div> <div class="img-wrapper tablet"> <img ng-src="/images/project/{{::project.imgPath}}/tablet.png" alt="tablet layout of {{::project.title}}"> </div> <div class="img-wrapper mobile" ng-hide="project.noMobile"> <img ng-if="!project.noMobile" ng-src="/images/project/{{::project.imgPath}}/mobile.png" alt="mobile layout of {{::project.title}}"> </div> </div> </div> </section> <section class="screenshots"> <div class="screenshot" ng-repeat="screenshot in ::project.screenshots"> <div class="container"> <h3 ng-if="::screenshot.title" class="screenshot-title">{{::screenshot.title}}</h3> <p ng-if="::screenshot.description" class="screenshot-description">{{::screenshot.description}}</p> <div class="screenshot-images"> <img ng-repeat="image in ::screenshot.images" ng-src="/images/project/{{::project.imgPath}}/{{::image}}"> </div> </div> </div> </section> </article> <div class="project-nav" ng-class="{\'at-bottom\' : footer.inview}"> <div class="container"> <a href="#/project/{{::prevProject}}"><span class="nav-prev"></span><span>previous project</span></a> <a href="#/project/{{::nextProject}}"><span class="nav-next"></span><span>next project</span></a> </div> </div>')}]);