import angular from 'angular';
// import NavHeader from './components/nav-header/nav-header';
// import Leaderboard from './components/leaderboard/leaderboard';

const module = angular.module('pdxpong', [
    // NavHeader.name,
    // Leaderboard.name,
    'ui.router'
]);
export default module.name;

import templateUrl from './pdxpong.html';

module.component('main', {
    templateUrl,
    bindings: {
    }
})
.run(run)
.config(config);

function config($locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/leaderboard');
}

function run($rootScope, $state) {
  $rootScope.$on('$stateChangeError',
    (event, toState, toParams, fromState, fromParams, error) => {
      if (error === 'AUTH_REQUIRED') {
        $state.go('leaderboard');
      }
    }
  );
}
