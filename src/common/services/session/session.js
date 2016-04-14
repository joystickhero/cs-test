(function (angular){
    'use strict';

    /**
     * Service to handle the user's session.
     *
     * @param tokenService
     * @param storageService
     * @param rootScope
     * @param state
     */
    var sessionService = function (tokenService, storageService, rootScope, state) {

        /**
         * Cleans the user data and tokens from the session and redirect to login.
         */
        var clear = function () {
            delete rootScope.loggedUser;
            tokenService.clean();

            state.go('login');
        };

        var getLoggedUser = function () {
            var loggedUser = null,
                isSuperAdmin = null;
            if (isLogged()) {
                loggedUser = storageService.get('loggedUser');
                isSuperAdmin = storageService.get('isSuperAdmin');
                return {
                    username: loggedUser,
                    isSuperAdmin: isSuperAdmin  === 'true'
                };
            }

            return null;
        };

        /**
         * Returns true if the user is logged in.
         */
        var isLogged = function() {
            var token = tokenService.getAccess();
            return token ? true: false;
        };

        return {
            clear: clear,
            isLogged: isLogged,
            getUser: getLoggedUser
        };
    };

    sessionService.$inject = [
//        'tokenService',
//        'storageService',
        '$rootScope',
        '$state'
    ];

    angular.module('csu.services.session', [
//        'csu.services.token',
//        'csu.services.storage'
    ])
        .factory('sessionService', sessionService);

}(angular));