import './leaderboard.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateUrl from './leaderboard.html';

class Leaderboard {
    constructor($rootScope) {
        this.testVal = 'AWESOME.';
        this.thing = $rootScope;
    }
}

const name = 'leaderboard';
export default angular.module(name, [
    uiRouter
])
.component(name, {
  templateUrl,
  controller: ['$rootScope', Leaderboard]
})
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('leaderboard', {
      url: '/leaderboard',
      template: '<leaderboard></leaderboard>'
    });
}])
.name;
