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
    var app=angular.module('app');

    app.constant('JQ_CONFIG', {
            easyPieChart:   ['js/jquery/charts/easypiechart/jquery.easy-pie-chart.js'],
            sparkline:      ['js/jquery/charts/sparkline/jquery.sparkline.min.js'],
            plot:           ['js/jquery/charts/flot/jquery.flot.min.js',
                'js/jquery/charts/flot/jquery.flot.resize.js',
                'js/jquery/charts/flot/jquery.flot.tooltip.min.js',
                'js/jquery/charts/flot/jquery.flot.spline.js',
                'js/jquery/charts/flot/jquery.flot.orderBars.js',
                'js/jquery/charts/flot/jquery.flot.pie.min.js'],
            slimScroll:     ['js/jquery/slimscroll/jquery.slimscroll.min.js'],
            sortable:       ['js/jquery/sortable/jquery.sortable.js'],
            nestable:       ['js/jquery/nestable/jquery.nestable.js',
                'js/jquery/nestable/nestable.css'],
            filestyle:      ['js/jquery/file/bootstrap-filestyle.min.js'],
            slider:         ['js/jquery/slider/bootstrap-slider.js',
                'js/jquery/slider/slider.css'],
            chosen:         ['js/jquery/chosen/chosen.jquery.min.js',
                'js/jquery/chosen/chosen.css'],
            TouchSpin:      ['js/jquery/spinner/jquery.bootstrap-touchspin.min.js',
                'js/jquery/spinner/jquery.bootstrap-touchspin.css'],
            wysiwyg:        ['js/jquery/wysiwyg/bootstrap-wysiwyg.js',
                'js/jquery/wysiwyg/jquery.hotkeys.js'],
            dataTable:      ['js/jquery/datatables/jquery.dataTables.min.js',
                'js/jquery/datatables/dataTables.bootstrap.js',
                'js/jquery/datatables/dataTables.bootstrap.css'],
            vectorMap:      ['js/jquery/jvectormap/jquery-jvectormap.min.js',
                'js/jquery/jvectormap/jquery-jvectormap-world-mill-en.js',
                'js/jquery/jvectormap/jquery-jvectormap-us-aea-en.js',
                'js/jquery/jvectormap/jquery-jvectormap.css'],
            footable:       ['js/jquery/footable/footable.all.min.js',
                'js/jquery/footable/footable.core.css']
        }
    );


})();