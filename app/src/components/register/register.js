import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateUrl from './register.html';

class Register {

}
const name = 'register';
export default angular.module(name, [uiRouter])
.component(name, {
  templateUrl,
  controller: Register,
  bindings: {
      auth: '='
  }
})
.config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        template: '<register auth="$ctrl.auth"></register>'
      });
}])
.name;
