(function () {
    'use strict';

    // TODO: Create tests for app module
    describe('App Module', function () {

        var rootScope= null;

        beforeEach(module('csu'));

        describe('AppCtrl', function () {

            beforeEach(inject(function (_$rootScope_) {
                rootScope = _$rootScope_;
            }));

            it('must test something', function () {
                return true;
            });

        });
    });
}());
