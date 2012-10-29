'use strict';

/* Filters */

angular.module('myApp.filters', [])
    .filter('translate', function(dict){
        return function(key, defaultText){
            return dict.translate(key) || defaultText;
        };
    });
