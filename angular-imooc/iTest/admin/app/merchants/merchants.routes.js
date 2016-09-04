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
                .state('app.merchants', {
                    abstract: true,
                    url: '/merchants',
                    templateUrl:"app/merchants/merchants.html"
                });
            $stateProvider
                .state('app.merchants.manage', {
                    url: '/manage',
                    templateUrl: 'app/merchants/merchants_manage.html'
                });
            $stateProvider
                .state('app.merchants.tours', {
                    url: '/tours',
                    templateUrl: 'app/merchants/merchants_tours.html'
                });

            $stateProvider
                .state('app.merchants.withdraws', {
                    url: '/withdraws',
                    templateUrl: 'app/merchants/merchants_withdraws.html?version=001'
                });
        }]);
})();