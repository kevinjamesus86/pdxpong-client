import angular from 'angular';

const name = 'fileOnChange';

export default name;

var module = angular.module(name, []);
module.directive(name, function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var onChangeHandler = scope.$eval(attrs.fileOnChange);
            element.bind('change', onChangeHandler);
        }
    };
});
