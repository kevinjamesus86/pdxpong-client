import './account-account.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateUrl from './account-account.html';

class AccountAccount {
    constructor($state, Auth, currentAuth) {
        this.Auth = Auth;
        this.$state = $state;
        console.log(currentAuth);
    }
}
const name = 'accountAccount';
export default angular.module(name, [uiRouter])
    .component(name, {
        templateUrl,
        controller: ['$state', 'Auth', 'currentAuth', AccountAccount],
        bindings: {

        }
    })
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('account.account', {
                url:'/account',
                template: '<account-account user="currentAuth"></account-account>',
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
