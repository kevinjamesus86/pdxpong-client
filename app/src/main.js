define([
    'angular',
    'uiRouter'
], function defineMain(
    angular,
    uiRouter
) {
    'use strict';

    var module = angular.module('strap', [
        uiRouter.name
    ]);

    module.config([
        '$compileProvider',
        '$rootScopeProvider',
    function($compileProvider, $rootScopeProvider) {
        $compileProvider.debugInfoEnabled(false);
        $compileProvider.onChangesTtl(5);
        $rootScopeProvider.digestTtl(5);
    }]);

    ////////////////
    // strap up main
    ////////////////

    module.component('main', {
        template: '<h1>{{$ctrl.msg}}</h1>',
        bindings: {
            msg: '@'
        }
    });

    return module;
});
