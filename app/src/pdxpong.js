import angular from 'angular';
import NavHeader from './components/nav-header/nav-header';
import Leaderboard from './components/leaderboard/leaderboard';

const module = angular.module('pdxpong', [
    NavHeader,
    Leaderboard,
    'ui.router'
]);
export default module.name;

import templateUrl from './pdxpong.html';

module.component('main', {
    templateUrl,
    bindings: {
    }
}).config(['$locationProvider', '$urlRouterProvider', function($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/leaderboard');
}])
.run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {

        if (error === 'AUTH_REQUIRED') {
            $state.go('leaderboard');
        }
    });
}]);
