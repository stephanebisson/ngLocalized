'use strict';

angular.module('myApp.controllers', [])
    .controller('LanguageSwitcher', function($scope, dict, $rootScope){
        $scope.langs = dict.getLanguages();
        
        $scope.selectLang  = function(lang){
            $rootScope.currentLang = lang;
        };
        
        $scope.isCurrentLang = function(lang) {
            return $rootScope.currentLang === lang;
        };
    });
