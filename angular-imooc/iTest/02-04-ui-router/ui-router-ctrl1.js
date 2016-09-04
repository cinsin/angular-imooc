/**
 * Created by cinsin on 2016/9/1.
 */
var uiRouterApp = angular.module('uiRouterApp', ['ui.router']);

uiRouterApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/default');

    $stateProvider
        .state('hello', {
            url: '/hello',
            templateUrl: 'tpls/hello.html'
        })
        .state('hello.cinsin', {
            url: '/hello.cinsin',
            templateUrl: 'tpls/hello.cinsin.html',
            controller: function ($scope) {
                $scope.items = ['A', 'list', 'of', 'items'];
            }
        })
        .state('about',{
            url: '/about',
            templateUrl: 'tpls/about.html'
        })
        .state('about.cinsin', {
            url: '/about.cinsin',
            templateUrl: 'tpls/about.cinsin.html',
            controller: 'AboutCinsinCtrl'
        })
        .state('default', {
            url: '/default',
            templateUrl: 'tpls/default.html'
        })
});

uiRouterApp.controller('AboutCinsinCtrl', ['$scope', function ($scope) {
    $scope.listOfAbout = ['list', 'of', 'about'];
}]);