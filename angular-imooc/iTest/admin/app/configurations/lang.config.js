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

    /*angular.module('app').config(['$translateProvider', function($translateProvider){

        // Register a loader for the static files
        // So, the module will search missing translation tables under the specified urls.
        // Those urls are [prefix][langKey][suffix].
        $translateProvider.useStaticFilesLoader({
            prefix: 'l10n/',
            suffix: '.json'
        });

        // Tell the module what language to use by default
        $translateProvider.preferredLanguage('en');

        // Tell the module to store the language in the local storage
        $translateProvider.useLocalStorage();

    }])*/

    angular.module('app').config(function($translateProvider){

        $translateProvider.useStaticFilesLoader({
            prefix: 'l18n/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('cn');
        $translateProvider.useLocalStorage();

        // Register a loader for the static files
        // So, the module will search missing translation tables under the specified urls.
        // Those urls are [prefix][langKey][suffix].
        /*$translateProvider.useStaticFilesLoader({
            prefix: 'l10n/',
            suffix: '.json'
        });

        // Tell the module what language to use by default
        $translateProvider.preferredLanguage('en');

        // Tell the module to store the language in the local storage
        $translateProvider.useLocalStorage();*/

    })


})();