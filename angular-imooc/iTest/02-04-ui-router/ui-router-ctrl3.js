var uiRouterApp3 = angular.module('uiRouterApp3', ['ui.router']);
uiRouterApp3.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider.state('index', {
        url: '/index',
        views: {
            '': {
                templateUrl: 'tpls3/index.html'
            },
            'topbar@index': {
                templateUrl: 'tpls3/topbar.html'
            },
            'home@index': {
                templateUrl: 'tpls3/home.html'
            }
        }
    });
    $stateProvider.state('index.demo', {
        url: '/demo',
        views: {
            'home@index': { // Replace 'home@index''s templateUrl
                templateUrl: 'tpls3/index.demo.html'
            }
        }
    });
    $stateProvider.state('index.misc', {
        url: '/misc',
        templateUrl: 'tpls3/index.misc.html'
    });
});