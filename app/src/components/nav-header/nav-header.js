import angular from 'angular';
import templateUrl from './nav-header.html';

class NavHeader {

}
const name = 'navHeader';
export default angular.module(name, [])
.component(name, {
  templateUrl,
  controller: NavHeader,
  bindings: {
      user: '='
  }
})

.name;
