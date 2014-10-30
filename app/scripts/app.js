'use strict';

/**
 * @ngdoc overview
 * @name webFundamentalsApp
 * @description
 * # webFundamentalsApp
 *
 * Main module of the application.
 */
angular
  .module('webFundamentalsApp', [
    'ngCookies',
    'ngSanitize',
    'ngTouch',
    'ngAnimate',
    'ui.router'
  ])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    
    $stateProvider
            .state('/', {
              url: '/',
              templateUrl: 'views/main.html',
            controller: 'MainCtrl'
    });
    
    //instead of declaring each slide to each separate HTML file, let's define just 'i' as a number of all slides - will become handy when we'll have big amount of slides
        var i;
        for (i=0; i<4; i++) {
            $stateProvider
                .state('slide-'+i, {
                  url: '/slide-'+i,
                  templateUrl: 'views/slides/slide_'+i+'.html',
                controller: 'MainCtrl'
             });
        }
    
});
