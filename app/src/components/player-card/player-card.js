import './player-card.less';

import angular from 'angular';
import templateUrl from './player-card.html';
import UserNameFilter from '../../filters/user-name';
import UserImageFilter from '../../filters/user-image';

class PlayerCard {

}
const name = 'playerCard';
export default angular.module(name, [
    UserNameFilter,
    UserImageFilter
])
.component(name, {
  templateUrl,
  controller: PlayerCard,
  bindings: {
      user: '='
  }
})

.name;
