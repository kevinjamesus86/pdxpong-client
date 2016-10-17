import './leaderboard.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateUrl from './leaderboard.html';
import PlayerCard from '../player-card/player-card';
import API from '../../services/api';

class Leaderboard {
    constructor() {

    }
}

const name = 'leaderboard';
export default angular.module(name, [
        uiRouter,
        PlayerCard
    ])
    .component(name, {
        templateUrl,
        controller: [Leaderboard],
        bindings: {
            'profile': '='
        }
    })
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('leaderboard', {
                url: '/leaderboard',
                template: '<leaderboard profile="$resolve.profile"></leaderboard>',
                resolve: {
                    'currentAuth': ['Auth', function(auth) {
                        return auth.$waitForSignIn();
                    }],
                    'profile': ['currentAuth', API, '$q', function(auth, api, $q) {
                        return $q(function(resolve) {
                            api.getProfile(auth.uid)
                            .then(function(profile) {
                                resolve(profile.data.player);
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
