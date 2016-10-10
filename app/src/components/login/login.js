import angular from 'angular';
import uiRouter from 'angular-ui-router';
import templateUrl from './login.html';

class Login {

}
const name = 'login';
export default angular.module(name, [uiRouter])
.component(name, {
  templateUrl,
  controller: Login,
  bindings: {
      auth: '='
  }
})
.config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        template: '<login auth="$ctrl.auth"></login>'
      });
}])
.name;
