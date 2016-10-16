import './account-profile.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateUrl from './account-profile.html';
import API from '../../services/api';

class AccountProfile {
    constructor($state, Auth, api) {
        this.Auth = Auth;
        this.$state = $state;
        this.api = api;
    }
    updateProfile() {
        this.api.setProfile(this.user.uid, this.profile);
    }
}
const name = 'accountProfile';
export default angular.module(name, [uiRouter])
    .component(name, {
        templateUrl,
        controller: ['$state', 'Auth', API, AccountProfile],
        bindings: {
            user: '=',
            profile: '='
        }
    })
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('account.profile', {
                url:'/profile',
                template: '<account-profile user="$resolve.currentAuth" profile="$resolve.profile"></account-profile>'
            });
    }])
    .name;
