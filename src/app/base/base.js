(function(angular) {
    'use strict';

    /*
     * Config the routes for Base Module
     *
     * @param stateProvider
     * @constructor
     */
    function Config(stateProvider) {
        stateProvider.state('base', {
            abstract: true,
            url: '/',
            views: {
                main: {
                    controller: 'BaseCtrl',
                    controllerAs: 'BaseCtrl',
                    templateUrl: 'base/base.tpl.html'
                }
            }
        });
    }

    var BaseCtrl = function ($state, sessionService) {
        var vm = this;

        vm.logOut = function () {
            sessionService.clear();
        };
    };

    Config.$inject = ['$stateProvider'];
    BaseCtrl.$inject = ['$state', 'sessionService'];

    angular.module('csu.base', ['ui.router', 'csu.services.session'])
        .config(Config)
        .controller('BaseCtrl', BaseCtrl);

}(angular));
