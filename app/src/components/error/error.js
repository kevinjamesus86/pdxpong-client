import './error.less';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateUrl from './error.html';

class Error {
    constructor($stateParams) {
        console.log($stateParams);
        this.status = $stateParams.status;
        this.data = $stateParams.data;
    }
}
const name = 'error';
export default angular.module(name, [uiRouter])
    .component(name, {
        templateUrl,
        controller: ['$stateParams', Error],
        bindings: {
        }
    })
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('error', {
                url: '/error',
                params: {
                    status: undefined,
                    data: undefined
                },
                template: '<error></error>'
            });
    }])
    .name;
