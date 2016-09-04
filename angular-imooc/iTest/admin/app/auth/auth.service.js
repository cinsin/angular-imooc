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
    angular.module('app.services').factory("Auth", Auth);

    function Auth($cookieStore, ACCESS_LEVELS) {
        var _user = $cookieStore.get("user");

        var setUser = function (user) {

            if (!user.role || user.role < 0) {
                user.role = ACCESS_LEVELS.pub;
            }
            _user = user;
            $cookieStore.put("user", _user);
        };

        return {
            setUser: setUser,
            getUser: function () {
                return _user;
            },
            isLoggedIn: function () {
                return _user ? true : false;
            },
            logout: function () {
                $cookieStore.remove("user");
                _user = null;
            },
            getId: function () {
                return _user ? _user.sid : '';
            },
            getToken: function () {
                return _user ? _user.token : '';
            }
        };
    }

})();