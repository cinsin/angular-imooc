var app = angular.module('app', []);

app.controller('MyCtrl', ['$scope', function ($scope) {
    $scope.loadFromNBI = function () {
        console.log('loading from NBI...');
        alert('loading from NBI...');
    };
    $scope.loadFromDB = function () {
        console.log('loading from DB...');
    };
}]);

app.directive('loader', function () {
    return {
        restrict: 'AE',
        link:function (scope, element, attrs) {
            element.bind('mouseenter', function (event) {
                // scope.loadData();
                //scope.$apply('loadData()');
                scope.$apply(attrs.howtoload);
            });
        }
    }
});

