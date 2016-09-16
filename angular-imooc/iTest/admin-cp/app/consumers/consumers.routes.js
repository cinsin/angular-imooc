/**
 * @version     V1.0
 * @author:     LinHongZhou
 * @Createdate:  2015-12-7
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
 * 2015-12-7    LinHongZhou          1.0             1.0
 * Why & What is modified:
 * </p>
 */
'use strict';

(function () {
    angular.module('app')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.consumers', {
                    abstract: true,
                    url: '/consumers',
                    templateUrl:"app/consumers/consumers.html"
                });
            $stateProvider
                .state('app.consumers.manage', {
                    url: '/manage',
                    templateUrl: 'app/consumers/consumers_manage.html'
                });
            $stateProvider
                .state('app.consumers.bills', {
                    url: '/bills',
                    templateUrl: 'app/consumers/consumers_bills.html?version=001'
                });
        }]);
})();