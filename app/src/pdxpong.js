import './pdxpong.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import NavHeader from './components/nav-header/nav-header';
import Leaderboard from './components/leaderboard/leaderboard';
import Account from './components/account/account';
import Auth from './services/auth';
import Login from './components/login/login';
import Register from './components/register/register';

const module = angular.module('pdxpong', [
    NavHeader,
    Leaderboard,
    Auth,
    Account,
    Login,
    Register,
    uiRouter
]);

export default module.name;

import templateUrl from './pdxpong.html';

let vm = {};
module.component('main', {
    templateUrl,
    controller: ['Auth', function(Auth) {
        vm = this;
        vm.auth = Auth;
    }]
})
.config(['$locationProvider', '$urlRouterProvider', function($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/leaderboard');
}])
.run(['$rootScope', '$state', 'Auth', function($rootScope, $state, Auth) {
    Auth.$onAuthStateChanged(function(firebaseUser) {
        if (vm.user && !firebaseUser) {
            // if user logs out
            $state.go('login');
        }
        vm.user = firebaseUser;
    });
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        if (error === 'AUTH_REQUIRED') {
            $state.go('leaderboard');
        }
    });
}]);
