import './register.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateUrl from './register.html';

const name = 'register';
export default name;

const module = angular.module(name, [uiRouter]);

class Register {
    constructor($state, Auth) {
        this.$state = $state;
        this.Auth = Auth;
    }
    register() {

    }
}

module.component(name, {
    templateUrl,
    controller: ['$state', 'Auth', Register],
    bindings: {
    }
});

module.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('register', {
        url: '/register',
        template: '<register></register>'
    });
}]);
