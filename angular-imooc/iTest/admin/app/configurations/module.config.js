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
    var app = angular.module('app');
    app.constant('MODULE_CONFIG', {
            select2: ['js/jquery/select2/select2.css',
                'js/jquery/select2/select2-bootstrap.css',
                'js/jquery/select2/select2.min.js',
                'js/modules/ui-select2.js']
        }
    );

})();