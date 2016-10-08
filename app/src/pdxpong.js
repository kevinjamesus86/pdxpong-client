import angular from 'angular';

const module = angular.module('pdxpong', []);
export default module.name;

import templateUrl from './pdxpong.html';

module.component('main', {
    templateUrl,
    bindings: {
        msg: '@'
    }
});
