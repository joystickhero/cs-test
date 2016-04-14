(function (angular) {
    'use strict';

    function TitleService(document) {
        var prefix = '';
        var title = '';
        var suffix = '';

        return {
            setPrefix: function(p) {
                prefix = p;
                return prefix;
            },

            getPrefix: function() {
                return prefix;
            },

            setSuffix: function(s) {
                suffix = s;
                return suffix;
            },

            getSuffix: function() {
                return suffix;
            },

            makeTitle: function() {
                return prefix + title + suffix;
            },

            /*
             * Set document's title
             *
             * @param title: string
             */
            setTitle: function(t) {
                title = t;

                document.prop('title', this.makeTitle());
            },

            setSubTitle: function(t) {
                title = title + t;

                document.prop('title', this.makeTitle());
            },

            /*
             * Get document's title
             *
             * @return: string
             */
            getTitle: function() {
                return document.prop('title');
            }
        };
    }

    TitleService.$inject = ['$document'];

    angular.module('csu.services.title', [])
        .factory('titleService', TitleService);

}(angular));