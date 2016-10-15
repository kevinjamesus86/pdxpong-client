import './leaderboard.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateUrl from './leaderboard.html';
import PlayerCard from '../player-card/player-card';

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
  controller: [Leaderboard]
})
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('leaderboard', {
      url: '/leaderboard',
      template: '<leaderboard></leaderboard>'
    });
}])
.name;
