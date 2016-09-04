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

    directives.directive('uiFullscreen', ['uiLoad', function(uiLoad) {
        return {
            restrict: 'AC',
            template:'<i class="fa fa-expand fa-fw text"></i><i class="fa fa-compress fa-fw text-active"></i>',
            link: function(scope, el, attr) {
                el.addClass('hide');
                uiLoad.load('bower_components/screenfull/dist/screenfull.min.js').then(function(){
                    if (screenfull.enabled) {
                        el.removeClass('hide');
                    }
                    el.on('click', function(){
                        var target;
                        attr.target && ( target = $(attr.target)[0] );
                        el.toggleClass('active');
                        screenfull.toggle(target);
                    });
                });
            }
        };
    }]);
})();