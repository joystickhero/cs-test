(function() {
    'use strict';
    /*
     * Configuration function for the CSU app
     *
     * @param httpProvider
     * @param locationProvider
     * @param urlRouterProvider
     * @constructor
     */
    function Config(httpProvider, locationProvider, urlRouterProvider) {

        locationProvider.html5Mode(true).hashPrefix('!');

        httpProvider.defaults.useXDomain = true;
        delete httpProvider.defaults.headers.common['X-Requested-With'];

        urlRouterProvider.otherwise('/');

    }

    /*
     * Main Controller for the CSU App
     * @constructor
     */
    function AppCtrl() {}

    function run($state, titleService) {

        titleService.setPrefix('CSU > ');

        $state.go('base.home');

    }

    Config.$inject = [
        '$httpProvider',
        '$locationProvider',
        '$urlRouterProvider'
    ];

    run.$inject = ['$state', 'titleService'];

    angular.module('csu',
        [
            'templates-app',
            'templates-common',
            'ui.bootstrap',
            'ui.router',
            'restangular',
            'csu.config',
            'csu.base',
            'csu.services.title',
            'csu.controllers.home'
        ]
        )
        .config(Config)
        .run(run)
        .controller('AppCtrl', AppCtrl);
}());
