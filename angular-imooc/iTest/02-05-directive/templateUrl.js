var templateUrlApp = angular.module('TemplateUrlapp', []);

templateUrlApp.directive('hello', function () {
    return {
        restrict: 'AE',
        templateUrl: 'hello.html',
        replace: true

    }
});