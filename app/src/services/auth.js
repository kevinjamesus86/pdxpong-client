import angular from 'angular';

const name = 'Auth';

export default angular.module(name, ['firebase'])
.service(name, ['$firebaseAuth', function($firebaseAuth) {
    return $firebaseAuth();
}])
.name;
