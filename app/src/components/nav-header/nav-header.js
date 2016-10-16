import './nav-header.less';

import angular from 'angular';
import templateUrl from './nav-header.html';
import UserNameFilter from '../../filters/user-name';
import UserImageFilter from '../../filters/user-image';

class NavHeader {

}
const name = 'navHeader';
export default angular.module(name, [
    UserNameFilter,
    UserImageFilter
])
.component(name, {
  templateUrl,
  controller: NavHeader,
  bindings: {
      user: '='
  }
})

.name;
