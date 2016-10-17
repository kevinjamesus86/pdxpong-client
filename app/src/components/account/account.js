import './account.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateUrl from './account.html';
import AccountProfile from '../account-profile/account-profile';
import AccountAccount from '../account-account/account-account';
import API from '../../services/api';

class Account {
    constructor(Auth) {
        this.Auth = Auth;
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
        controller: ['Auth', Account],
        bindings: {
        }
    })
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('account', {
                abstract: true,
                template: '<account></account>',
                resolve: {
                    'currentAuth': ['Auth', function(Auth) {
                        return Auth.$requireSignIn();
                    }],
                    'profile': ['currentAuth', API, '$q', function(auth, api, $q) {
                        return $q(function(resolve) {
                            api.getProfile(auth.uid)
                            .then(function(profile) {
                                resolve(profile);
                            })
                            .catch(function() {
                                // even when the api doesn't find anything,
                                // we want to move forward
                                // this might not need to be a resolve
                                resolve();
                            });
                        })
                    }]
                }
            });
    }])
    .name;
