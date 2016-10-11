import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateUrl from './login.html';

class Login {
    constructor(Auth, $state) {
        this.auth = Auth;
        this.$state = $state;
    }
    login() {
        var vm = this;
        this.auth.$signInWithEmailAndPassword('my@email.com', 'password').then(function(firebaseUser) {
            vm.state = 'Signed in as:' + firebaseUser.uid;
            vm.$state.go('leaderboard');
        }).catch(function(error) {
            vm.state = 'Authentication failed:' + error;
        });
    }
    signInWith(provider) {
        var vm = this;
        this.auth.$signInWithPopup(provider).then(function(firebaseUser) {
            vm.state = 'Signed in as:' + firebaseUser.uid;
            vm.$state.go('leaderboard');
        }).catch(function(error) {
            vm.state = 'Authentication failed:' + error;
        });
    }
}
const name = 'login';
export default angular.module(name, [uiRouter])
    .component(name, {
        templateUrl,
        controller: ['Auth', '$state', Login],
        bindings: {
            auth: '='
        }
    })
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                template: '<login auth="$ctrl.auth"></login>'
            });
    }])
    .name;
