'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
    .factory('dict', function($rootScope){
        var dict = {
            'English': {
                formTitle: 'This is a form', 
                nameInput: 'What is your name',
                namePlaceholder: 'your name here',
                acceptEULA: 'I accept the end user license agreement',
                saveBtn: 'Save',
                language: 'Language',
            },
            '中文': {
                formTitle:' 这个是表单', 
                nameInput: '你的名字',
                namePlaceholder: '比如：张三',
                acceptEULA: '我接受用户协议',
                saveBtn: '保存',
                language: '语言'
            },
            'Français': {
                formTitle: 'Ceci est un formulaire', 
                nameInput: "Comment tu t'appel",
                namePlaceholder: 'écrit ton nom ici',
                acceptEULA: "J'accepte les termes de l'accord",
                saveBtn: 'Sauvegarder',
                language: 'Langue'
            }
        };
        return {
            translate: function(key){
                return (dict[$rootScope.currentLang] || {})[key];
            }, 
            getLanguages: function(){
                return ['English', '中文', 'Français'];
            }
        };
    });
