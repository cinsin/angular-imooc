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


    angular.module('app.controllers')
        .controller('SigninController', ['$scope', '$http', '$state', 'SignInService', SigninController]);

    function SigninController($scope, $http, $state, SignInService) {
        $scope.user = {"username": "admin", "password": "admin"};
        $scope.authError = null;
        $scope.login = function () {
            $scope.authError = "Server Error";

            //var promise=SignInService.signIn({username: $scope.user.username, password: $scope.user.password});
            var promise = SignInService.signin($scope.user.username, $scope.user.password);


            promise.then(onSignInSuccess, onSignInFailed);

            function onSignInSuccess(data) {
                console.log(JSON.stringify(data));
                $state.go("app.dashboard");
            }

            function onSignInFailed(reason) {
                $scope.authError = reason;
            }

        };
    }

})();