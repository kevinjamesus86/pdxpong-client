import './account-account.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateUrl from './account-account.html';


function isProviderEnabled(user, pro) {
    for (var provider in user.providerData) {
        if (user.providerData[provider].providerId === pro) {
            return true;
        }
    }
    return false;
}

class AccountAccount {
    constructor($state, $scope) {
        this.$state = $state;
        this.$scope = $scope;

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

    onlyOneProvider() {
        return this.user.providerData.length === 1;
    }

    setProvider(pro) {
        let isCurrentlyEnabled = isProviderEnabled(this.user, pro.provider.providerId);
        if (isCurrentlyEnabled != pro.isLinked) {
            if (pro.isLinked) {
                this.user.linkWithPopup(pro.provider)
                    .then(() => {
                        this.$scope.$apply();
                    })
                    .catch((error) => {
                        this.$scope.$apply(() => {
                            pro.isLinked = false;
                            console.error(error);
                        });
                    });
            } else {
                // unlink stuffs
                this.user.unlink(pro.provider.providerId)
                    .then(() => {
                        this.$scope.$apply();
                    })
                    .catch((error) => {
                        console.error(error);
                    })
            }
        }
    }
}

const name = 'accountAccount';
export default angular.module(name, [uiRouter])
    .component(name, {
        templateUrl,
        controller: ['$state', '$scope', AccountAccount],
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
