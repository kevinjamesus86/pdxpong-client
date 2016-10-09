import angular from 'angular';
import NavHeader from './components/nav-header/nav-header';
// import Leaderboard from './components/leaderboard/leaderboard';

const module = angular.module('pdxpong', [
    NavHeader.name,
    // Leaderboard.name,
    'ui.router'
]);
export default module.name;

import templateUrl from './pdxpong.html';

module.component('main', {
    templateUrl,
    bindings: {
    }
});
