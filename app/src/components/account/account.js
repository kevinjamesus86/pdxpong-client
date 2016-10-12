import './account.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateUrl from './account.html';
import AccountProfile from '../account-profile/account-profile';
import AccountAccount from '../account-account/account-account';
class Account {
    constructor($state, Auth) {
        this.Auth = Auth;
        this.$state = $state;
    }
    logout() {
        this.Auth.$signOut();
    }
}
const name = 'account';
export default angular.module(name, [
    uiRouter,
    AccountProfile,
    AccountAccount
])
    .component(name, {
        templateUrl,
        controller: ['$state', 'Auth', Account],
        bindings: {
        }
    })
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('account', {
                abstract:true,
                template: '<account></account>',
                resolve: {
                    "currentAuth": ["Auth", function(Auth) {
                        return Auth.$requireSignIn();
                    }]
                }
            });
    }])
    .name;
