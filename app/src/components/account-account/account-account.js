import './account-account.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateUrl from './account-account.html';


function isProviderEnabled(user, pro) {
    for (var provider in user.providerData) {
        if (user.providerData[provider].providerId === pro) {
            console.log(pro + " is enabled");
            return true;
        }
    }
    return false;
}

class AccountAccount {
    constructor($state, Auth, firebase) {
        this.Auth = Auth;
        this.$state = $state;

        let goog = new firebase.auth.GoogleAuthProvider(),
            fb = new firebase.auth.FacebookAuthProvider(),
            tw = new firebase.auth.TwitterAuthProvider(),
            gh = new firebase.auth.GithubAuthProvider();
        this.providers = {
            'google': {
                provider: goog,
                isLinked: isProviderEnabled(this.user, goog.providerId)
            },
            'facebook':  {
                provider: fb,
                isLinked: isProviderEnabled(this.user, fb.providerId)
            },
            'twitter':  {
                provider: tw,
                isLinked: isProviderEnabled(this.user, tw.providerId)
            },
            'github':  {
                provider: gh,
                isLinked: isProviderEnabled(this.user, gh.providerId)
            }
        };
    }

    setProvider(pro) {
        let isCurrentlyEnabled = isProviderEnabled(this.user, pro.provider);
        if (isCurrentlyEnabled != pro.isLinked) {
            if (pro.isLinked) {
                this.user.linkWithPopup(pro.provider)
                    .then((result) => {
                        // do we need to do anything here?
                        console.log(result);
                    })
                    .catch((error) => {
                        pro.isLinked = false;
                        console.error(error);
                        // do something about Error
                    });
            }
        }
    }
}

const name = 'accountAccount';
export default angular.module(name, [uiRouter])
    .component(name, {
        templateUrl,
        controller: ['$state', 'Auth', 'firebase', AccountAccount],
        bindings: {
            user: '='
        }
    })
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('account.account', {
                url:'/account',
                template: '<account-account user="$resolve.currentAuth"></account-account>'
            });
    }])
    .name;
