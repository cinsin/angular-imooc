/**
 * Created by cinsin on 2016/8/31.
 */
var myFormModule = angular.module('MyFormModule', []);
myFormModule.controller('UserInfoCtrl', ['$scope',
    function ($scope) {
        $scope.userInfo = {
            email : 'cinsin@vip.qq.com',
            password : 'fake-password',
            autoLogin : true
        };

        $scope.getFormData = function () {
            console.log($scope.userInfo);
        };

        $scope.setFormData = function () {
            $scope.userInfo = {
                email : '26640540@qq.com',
                password : 'still-fake-password',
                autoLogin : false
            };
        };

        $scope.resetForm = function () {
            $scope.userInfo = {
                email : 'cinsin@vip.qq.com',
                password : 'fake-password',
                autoLogin : true
            };
        };
    }
]);