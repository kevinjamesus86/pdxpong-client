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
        bindings: {}
    })
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('account', {
                abstract:true,
                template: '<account></account>',
                resolve: {
                    // controller will not be loaded until $requireSignIn resolves
                    // Auth refers to our $firebaseAuth wrapper in the factory below
                    "currentAuth": ["Auth", function(Auth) {
                        // $requireSignIn returns a promise so the resolve waits for it to complete
                        // If the promise is rejected, it will throw a $stateChangeError (see above)
                        return Auth.$requireSignIn();
                    }]
                }
            });
    }])
    .name;
