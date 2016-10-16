import './account-account.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateUrl from './account-account.html';

class AccountAccount {
    constructor($state, Auth) {
        this.Auth = Auth;
        this.$state = $state;
    }
}
const name = 'accountAccount';
export default angular.module(name, [uiRouter])
    .component(name, {
        templateUrl,
        controller: ['$state', 'Auth', AccountAccount],
        bindings: {
            user: '='
        }
    })
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('account.account', {
                url:'/account',
                template: '<account-account user="$resolve.currentAuth"></account-account>',
                resolve: {
                    "currentAuth": ["Auth", function(Auth) {
                        return Auth.$requireSignIn();
                    }]
                }
            });
    }])
    .name;
