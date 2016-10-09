import angular from 'angular';
import templateUrl from './leaderboard.html';

class Leaderboard {

}
const name = 'leaderboard';
export default angular.module(name, [
    'ui.router'
])
.component(name, {
  templateUrl,
  controller: Leaderboard
})
.config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('leaderboard', {
      url: '/leaderboard',
      template: '<leaderboard></leaderboard>'
    });
}])
.name;
