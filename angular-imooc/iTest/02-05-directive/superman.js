var app = angular.module('app', []);

app.controller('supermanCtrl', ['$scope', function ($scope) {
    $scope.abilities = [];
    this.addStrength = function () {
        $scope.abilities.push('Strength');
    };
    this.addAgile = function () {
        $scope.abilities.push('Agile');
    };
    this.addWisdom = function () {
        $scope.abilities.push('Wisdom');
    };
}]);

app.directive('superman', function () {
    return {
        scope: {},
        restrict: 'E',
        link:function (scope, element, attrs) {
            element.bind('mouseenter', function () {
                element.addClass('btn btn-primary');
                console.log(scope.abilities)
            });
            element.bind('mouseout', function () {
                element.removeClass('btn btn-primary');
            });
        },
        controller: 'supermanCtrl'
    }
});

app.directive('strength', function () {
    return {
        restrict: 'A',
        require: '^superman',
        link: function (scope, element, attrs, supermanCtrl) {
            supermanCtrl.addStrength();
        }
    }
});

app.directive('agile', function () {
    return {
        restrict: 'A',
        require: '^superman',
        link: function (scope, element, sttrs, supermanCtrl) {
            supermanCtrl.addAgile();
        }
    }
});

app.directive('wisdom', function () {
    return {
        restrict: 'A',
        require: '^superman',
        link: function (scope, element, attrs, supermanCtrl) {
            supermanCtrl.addWisdom();
        }
    }
});