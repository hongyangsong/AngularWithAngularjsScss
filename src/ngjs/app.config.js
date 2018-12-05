'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider','$locationProvider',
    function config($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        })
        .when('/home', {
          template: '<app-home></app-home>'
        })
        .otherwise({ template: '' });
    }
  ]);
