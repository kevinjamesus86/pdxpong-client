import './register.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateUrl from './register.html';
import CompareTo from '../../directives/compare-to';
const name = 'register';

export default name;

const module = angular.module(name, [
    uiRouter,
    CompareTo
]);

class Register {
    constructor($state, Auth) {
        this.$state = $state;
        this.Auth = Auth;
    }
    register() {
        this.Auth.$createUserWithEmailAndPassword(this.email, this.password)
            .then((firebaseUser) => {
                this.user = firebaseUser;
                this.$state.go('leaderboard');
            }).catch((error) => {
                this.error = error;
            });
    }
}

module.component(name, {
    templateUrl,
    controller: ['$state', 'Auth', Register],
    bindings: {}
});

module.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('register', {
        url: '/register',
        template: '<register></register>'
    });
}]);
