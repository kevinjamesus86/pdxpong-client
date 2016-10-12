import angular from 'angular';

const name = 'userImageFilter';

export default angular.module(name, [])
    .filter(name, [function() {
        return function(user) {
            return user.photoURL || '/images/default-avatar.jpg';
        };
    }])
    .name;
