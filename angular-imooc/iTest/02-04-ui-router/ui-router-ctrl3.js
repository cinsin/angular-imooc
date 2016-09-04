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
                templateUrl: 'tpls3/index.demo.html',
                controller: 'AddUserCtrl'
            }
        }
    });
    $stateProvider.state('index.demo.highendusers', {
        url: '/high-end-users',
        templateUrl: 'tpls3/index.demo.highendusers.html',
        controller: 'HighEndUsersCtrl'
    });
    $stateProvider.state('index.demo.normalusers', {
        url: 'normal-users',
        templateUrl: 'tpls3/index.demo.normalusers.html'
    });
    $stateProvider.state('index.demo.lowendusers', {
        url: 'low-end-users',
        templateUrl: 'tpls3/index.demo.lowendusers.html'
    });
    $stateProvider.state('index.demo.adduser', {
        url: 'add-user',
        templateUrl: 'tpls3/index.demo.adduser.html',
        controller: 'BackCtrl'
    });

    $stateProvider.state('index.misc', {
        url: '/misc',
        views: {
           'home@index': {
               templateUrl: 'tpls3/index.misc.html'
           }
        }
    });
});

uiRouterApp3.controller('HighEndUsersCtrl', ['$scope', function ($scope) {
    $scope.userList = [
        {name:'Gone with the Wind', author:'Margaret Mitchell'},
        {name:'A Song of Ice and Fire', author:'George R. R. Martin'},
        {name:'A Brief History of Time', author:'Stephen Hawking'}
    ];
}]);

uiRouterApp3.controller('AddUserCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.addUser = function () {
        $state.go('index.demo.adduser');
    };
}]);

uiRouterApp3.controller('BackCtrl', ['$scope', function ($scope) {
    $scope.backToPrevious = function () {
        window.history.back();
    }
}]);