import './register.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateUrl from './register.html';

const name = 'register';
export default name;

const module = angular.module(name, [uiRouter]);

class Register {

}

module.component(name, {
    templateUrl,
    controller: Register,
    bindings: {
        auth: '='
    }
});

module.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('register', {
        url: '/register',
        template: '<register auth="$ctrl.auth"></register>'
    });
}]);
