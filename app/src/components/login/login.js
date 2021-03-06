import './login.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateUrl from './login.html';
import ProviderLogins from '../provider-logins/provider-logins';

class Login {
    constructor($state, Auth) {
        this.$state = $state;
        this.Auth = Auth;
    }
    login() {
        var vm = this;
        this.Auth.$signInWithEmailAndPassword(this.email, this.password).then(function(firebaseUser) {
            vm.state = 'Signed in as:' + firebaseUser.uid;
            vm.$state.go('leaderboard');
        }).catch(function(error) {
            vm.state = 'Authentication failed:' + error;
        });
    }
}
const name = 'login';
export default angular.module(name, [uiRouter, ProviderLogins])
    .component(name, {
        templateUrl,
        controller: ['$state', 'Auth', Login],
        bindings: {
        }
    })
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                template: '<login></login>'
            });
    }])
    .name;
