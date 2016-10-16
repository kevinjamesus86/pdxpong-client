import './provider-logins.less';

import angular from 'angular';
import templateUrl from './provider-logins.html';

class ProviderLogins {
  constructor($state, Auth) {
    this.$state = $state;
    this.Auth = Auth;
    this.providers = [
        {
            name: 'google'
        },
        {
            name: 'github'
        },
        {
            name: 'twitter'
        },
        {
            name: 'facebook'
        }
    ]
  }
  logInWith(provider) {
      this.Auth.$signInWithPopup(provider)
      .then(() => {
          if (this.redirectTo) {
              this.$state.go(this.redirectTo);
          }
      });
  }
}
const name = 'providerLogins';
export default angular.module(name, [

]).component(name, {
  templateUrl,
  controller: ['$state', 'Auth', ProviderLogins],
  bindings: {
      redirectTo: '@'
  }
})
.name;
