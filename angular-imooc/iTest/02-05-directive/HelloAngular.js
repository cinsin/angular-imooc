var helloApp = angular.module('HelloApp', []);

helloApp.directive('hello', function () {
    return {
        restrict: 'AEMC',
        template: '<div>Hi Cinsin.</div>',
        replace: true
    }
});