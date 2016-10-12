import './account-profile.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateUrl from './account-profile.html';

class AccountProfile {
    constructor($state, Auth, $scope) {
        this.Auth = Auth;
        this.$state = $state;
        this.$scope = $scope;
        this.profile = {
            displayName: this.user.displayName,
            photoURL: this.user.photoURL
        }
    }
    updateProfile() {

        // firebaseAuth doesn't have this yet
        this.user.updateProfile(this.profile).then(() => {
            this.$scope.$apply();
        }, (error) => {
            this.error = error;
        });

    }
}
const name = 'accountProfile';
export default angular.module(name, [uiRouter])
    .component(name, {
        templateUrl,
        controller: ['$state', 'Auth', '$scope', AccountProfile],
        bindings: {
            user: '='
        }
    })
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('account.profile', {
                url:'/profile',
                template: '<account-profile user="$resolve.currentAuth"></account-profile>',
                resolve: {
                    "currentAuth": ["Auth", function(Auth) {
                        return Auth.$requireSignIn();
                    }]
                }
            });
    }])
    .name;
