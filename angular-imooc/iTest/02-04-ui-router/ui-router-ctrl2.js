var uiRouterApp2 = angular.module('uiRouterApp2', ['ui.router']);

uiRouterApp2.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'tpls2/home.html'
    });
    $stateProvider.state('home.list',{
        url: '/list',
        templateUrl: 'tpls2/home.list.html',
        controller: 'HomeListCtrl'
    });
    $stateProvider.state('home.paragraph', {
        url: '/paragraph',
        templateUrl: 'tpls2/home.paragraph.html'
    });
    $stateProvider.state('about', {
        url: '/about',
        views: {
            '': {
                templateUrl: 'tpls2/about.html'
            },
            'columnOne@about': {
                template: 'Content of column one.'
            },
            'columnTow@about': {
                templateUrl: 'tpls2/about.column.two.html',
                controller: 'AboutColumnTwoCtrl'
            }
        }
    });
});

uiRouterApp2.controller('HomeListCtrl', ['$scope', function ($scope) {
    $scope.books = [
        {name:'Gone with the Wind', author:'Margaret Mitchell'},
        {name:'A Song of Ice and Fire', author:'George R. R. Martin'},
        {name:'A Brief History of Time', author:'Stephen Hawking'}
    ];
}]);

uiRouterApp2.controller('AboutColumnTwoCtrl', ['$scope', function ($scope) {
    $scope.goods = {
        titleMsg: 'Ice Cream'
    };
    $scope.iceCream = [
        {flavour: 'Butterscotch', price: '$5.2'},
        {flavour: 'Strawberry', price: '$8.8'},
        {flavour: 'Mango', price: '$2'}
    ]
}]);