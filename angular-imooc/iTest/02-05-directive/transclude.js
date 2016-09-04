var transcludeApp = angular.module('TranscludeApp', []);

transcludeApp.directive('hello', function () {
    return {
        restrict: 'AE',
        template: '<div>This is so you think you can dance.<div ng-transclude></div></div>',
        transclude: true
    }
});