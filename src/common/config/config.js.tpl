(function (angular) {
'use strict';
/*
* Configurations provider
 */
var AppConfigProvider = function(RestangularProvider) {
  var globals = {
    BASE_API_URL: '<%= BASE_API_URL %>',
  };

  RestangularProvider.setBaseUrl(globals.BASE_API_URL);
  RestangularProvider.setRestangularFields({
      route: 'restangularRoute'
  });

  return {
    RestangularProvider: RestangularProvider,
    getItem: function(key) {
        return globals[key];
    },
    $get: function() {
      return this;
    }
  };
};

AppConfigProvider.$inject = ['RestangularProvider'];

angular.module('csu.config', ['restangular'])
    .provider('appConfig', AppConfigProvider);

}(angular));