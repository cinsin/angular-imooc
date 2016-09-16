'use strict';


var appControllerModule = angular.module('app.controllers', []);

appControllerModule.controller('AppController',
    function ($scope, $translate, $localStorage, $window,$state) {
        // config
        $scope.app = {
            name: '畅游美国',
            version: '0.0.1',
            // for chart colors
            color: {
                primary: '#7266ba',
                info: '#23b7e5',
                success: '#27c24c',
                warning: '#fad733',
                danger: '#f05050',
                light: '#e8eff0',
                dark: '#3a3f51',
                black: '#1c2b36'
            },
            settings: {
                themeID: 1,
                navbarHeaderColor: 'bg-black',
                navbarCollapseColor: 'bg-white-only',
                asideColor: 'bg-black',
                headerFixed: true,
                asideFixed: false,
                asideFolded: false
            }
        }
    }
);