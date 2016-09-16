/**
 * @version     V1.0
 * @author:     LinHongZhou
 * @Createdate:  2015-12-6
 * @Description:
 * <p>
 * All rights Reserved, Designed By PinSong Software Technology Co.,Ltd
 * Copyright:   Copyright(C) 2015-2020
 * Company:     GuangZhou PinSong Software Technology Co.,Ltd
 * WebSite:     http://www.pinsong.com
 * </p>
 * <p>
 * Modification  History:
 * Date         Author        Version        Description
 * -----------------------------------------------------------------------------------
 * 2015-12-6    LinHongZhou          1.0             1.0
 * Why & What is modified:
 * </p>
 */

'use strict';

var app = angular.module('app', [
    'ngAnimate',
    'ngCookies',
    'ngStorage',
    'ui.router',
    'ui.bootstrap',
    'ui.load',
    'ui.jq',
    'ui.validate',
    'pascalprecht.translate',
    'app.services',
    'app.filters',
    'app.directives',
    'app.controllers'
])
app.run(
    ['$rootScope', '$state', '$stateParams', '$location',
        function ($rootScope, $state, $stateParams, $location) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]
);
