import './pdxpong.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import NavHeader from './components/nav-header/nav-header';
import Leaderboard from './components/leaderboard/leaderboard';
import Account from './components/account/account';
import Auth from './services/auth';
import Login from './components/login/login';
import Error from './components/error/error';
import API from './services/api';

const module = angular.module('pdxpong', [
    NavHeader,
    Leaderboard,
    Auth,
    Account,
    Login,
    Error,
    uiRouter,
    API
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
.config(['$locationProvider', '$urlRouterProvider',
    function($locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/leaderboard');
    }
])
.run([
    '$rootScope',
    '$state',
    Auth,
    API,
    function($rootScope, $state, Auth, api) {
        api.healthcheck().then(function(){
            // we could init everything here
            Auth.$onAuthStateChanged(function(firebaseUser) {
                if (vm.user && !firebaseUser) {
                    // if user logs out
                    $state.go('login');
                }
                if (firebaseUser) {
                    firebaseUser.getToken(false)
                    .then((idToken) => {
                        api.setToken(idToken);
                    })
                    .catch(function(error) {
                        console.error(error);
                    });
                }
                vm.user = firebaseUser;
            });
            $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
                if (error === 'AUTH_REQUIRED') {
                    $state.go('leaderboard');
                }
            });
        })
        .catch(function(err){
            // we could bail out and ask the user to reload or some nonsense
            $state.go('error', {status:500, data:err});
        });
}]);
