// common dependencies
import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';

// pdxpong app
import pdxpong from './src/pdxpong';

// app to strap
const module = angular.module('pdxpong-app', [
    pdxpong,
    ngAnimate,
    ngSanitize
]);

// general perf
module.config([
    '$compileProvider',
    '$rootScopeProvider',
function($compileProvider, $rootScopeProvider) {
    $compileProvider.debugInfoEnabled(false);
    $compileProvider.onChangesTtl(5);
    $rootScopeProvider.digestTtl(5);
}]);

// hit it
angular.element(window).ready(function() {
    angular.bootstrap(document.body, [ module.name ]);
});
