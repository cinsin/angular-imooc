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

    directives.directive('uiModule', ['MODULE_CONFIG', 'uiLoad', '$compile', function (MODULE_CONFIG, uiLoad, $compile) {
        return {
            restrict: 'A',
            compile: function (el, attrs) {
                var contents = el.contents().clone();
                return function (scope, el, attrs) {
                    el.contents().remove();
                    uiLoad.load(MODULE_CONFIG[attrs.uiModule])
                        .then(function () {
                            $compile(contents)(scope, function (clonedElement, scope) {
                                el.append(clonedElement);
                            });
                        });
                }
            }
        };
    }]);
})();