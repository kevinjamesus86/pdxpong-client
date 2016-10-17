import angular from 'angular';

const name = 'rankNumberFilter';

export default angular.module(name, [])
    .filter(name, [function() {
        return function(number) {
          if (number < 10) {
            number = '0' + number;
          }
          return number;
        };
    }])
    .name;
