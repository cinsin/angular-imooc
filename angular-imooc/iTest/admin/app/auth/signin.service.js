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
(function () {

    angular.module('app.services').factory("SignInService", SignInService);

    function SignInService($q, Auth) {
        var _signin = function (username, password) {
            var deferred = $q.defer(); //通过$q服务注册一个延迟对象 deferred
            var user = {"username": username, "password": password};
            user.sid = 1;

            if ((username != null && username === "admin") && (password != null && password === "admin")) {
                Auth.setUser(user);
                deferred.resolve(user);
            } else {
                deferred.reject("错误的用户名者密码!");
            }
            return deferred.promise; //通过deferred延迟对象，可以得到一个承诺promise，而promise会返回当前任务的完成结果
        }
        return {
            signin: _signin
        };
    }
})();