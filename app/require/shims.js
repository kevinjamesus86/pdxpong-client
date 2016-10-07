define({
    angular: {
        exports: 'angular'
    },
    ngAnimate: {
        deps: ['angular'],
        init: function(angular) {
            return angular.module('ngAnimate');
        }
    },
    ngSanitize: {
        deps: ['angular'],
        init: function(angular) {
            return angular.module('ngSanitize');
        }
    },
    uiRouter: {
        deps: ['angular'],
        init: function(angular) {
            return angular.module('ui.router');
        }
    }
});
