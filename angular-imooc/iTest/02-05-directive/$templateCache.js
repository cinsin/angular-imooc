var moduleApp = angular.module('TemplateCacheApp', []);

moduleApp.run(function ($templateCache) {
    $templateCache.put('hello.html', '<div>Hi there.</div>');
});

moduleApp.directive('hello', function ($templateCache) {
    return {
        restrict: 'EA',
        template: $templateCache.get('hello.html'),
        replace: true
    }
});