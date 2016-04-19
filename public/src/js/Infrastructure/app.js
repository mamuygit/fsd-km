
'use strict'
var angObj = angular.module('ngMain', ['ui.router', 'ngSanitize']);
console.log('angular working');

//angObj.factory('conf', function(){
//  console.log('angular factory');
//  var configue = {};
//  configue.init = function(){
//    return {};
//  }
//    return configue;
//})

angObj.run(function ($rootScope) {
    console.log('angular run'); 
})

//angObj.config(function ($urlMatcherFactoryProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
//    console.log('angular config');
//});