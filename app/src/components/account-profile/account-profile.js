import './account-profile.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateUrl from './account-profile.html';

class AccountProfile {
    constructor($state, Auth) {
        this.Auth = Auth;
        this.$state = $state;
    }
    logout() {
        this.Auth.$signOut();
    }
}
const name = 'accountProfile';
export default angular.module(name, [uiRouter])
    .component(name, {
        templateUrl,
        controller: ['$state', 'Auth', AccountProfile],
        bindings: {}
    })
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('account.profile', {
                url:'/profile',
                template: '<account-profile></account-profile>',
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
