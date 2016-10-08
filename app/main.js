import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';

const module = angular.module('pdxpong', [
    ngAnimate,
    ngSanitize,
    uiRouter
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


import templateUrl from './main.html';

module.component('main', {
    templateUrl,
    bindings: {
        msg: '@'
    }
});

angular.element(window).ready(function() {
    angular.bootstrap(document.body, [ module.name ]);
});
