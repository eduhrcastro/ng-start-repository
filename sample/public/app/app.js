'use strict'

angular.module('sample', [
  'ngRoute',
  'ngMessages',
  'ngAnimate',
  'ngSanitize',
  'boilerplate'
])
  .config(($routeProvider, $locationProvider, $httpProvider) => {
    // Remove '!' from path
    $locationProvider.hashPrefix('')

    // Allow cross domain requests
    $httpProvider.defaults.withCredentials = true
    $httpProvider.defaults.useXDomain = true
    delete $httpProvider.defaults.headers.common['X-Requested-With']

    $routeProvider
      .when('/', {
        templateUrl: 'app/views/home/home.html',
        controller: 'HomeCtrl as homeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  })
