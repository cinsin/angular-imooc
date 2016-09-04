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


    var directives = angular.module('app.directives');

    directives.directive('uiScroll', ['$location', '$anchorScroll', function($location, $anchorScroll) {
        return {
            restrict: 'AC',
            link: function(scope, el, attr) {
                el.on('click', function(e) {
                    $location.hash(attr.uiScroll);
                    $anchorScroll();
                });
            }
        };
    }]);
})();