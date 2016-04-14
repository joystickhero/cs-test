(function(angular) {
    'use strict';

    /**
     * Config the routes for Home Module
     * @param stateProvider
     * @constructor
     */
    function Config(stateProvider) {
        stateProvider.state('base.home', {
            url: '',
            views: {
                'content': {
                    controller: 'HomeCtrl',
                    controllerAs: 'HomeCtrl',
                    templateUrl: 'home/home.tpl.html'
                }
            }
        });
    }

    var HomeCtrl = function ($scope, titleService) {
        titleService.setTitle('Home');
    };


    Config.$inject = ['$stateProvider'];
    HomeCtrl.$inject = [
        '$scope',
        'titleService'
    ];

    angular.module('csu.controllers.home',
        [
            'ui.router',
            'csu.services.title'
        ])
        .config(Config)
        .controller('HomeCtrl', HomeCtrl);

}(angular));