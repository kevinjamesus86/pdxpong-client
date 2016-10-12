import angular from 'angular';

const name = 'userNameFilter';

export default angular.module(name, [])
    .filter(name, [function() {
        return function(user) {
            return user.displayName || user.email;
        };
    }])
    .name;
