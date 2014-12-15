'use strict';

/**
 * @ngdoc overview
 * @name quizApp
 * @description
 * # quizApp
 *
 * Main module of the application.
 */

angular
  .module('quizApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.utils'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider
      .hashPrefix(['!']);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
