webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _angular = __webpack_require__(5);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularAnimate = __webpack_require__(7);

	var _angularAnimate2 = _interopRequireDefault(_angularAnimate);

	var _angularSanitize = __webpack_require__(9);

	var _angularSanitize2 = _interopRequireDefault(_angularSanitize);

	var _angularUiRouter = __webpack_require__(11);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	__webpack_require__(12);

	var _pdxpong = __webpack_require__(26);

	var _pdxpong2 = _interopRequireDefault(_pdxpong);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// app to strap


	// styles
	// common dependencies
	var _module = _angular2.default.module('pdxpong-app', [_pdxpong2.default, _angularAnimate2.default, _angularSanitize2.default, _angularUiRouter2.default]);

	// general perf


	// pdxpong app
	_module.config(['$compileProvider', '$rootScopeProvider', function ($compileProvider, $rootScopeProvider) {
	    $compileProvider.debugInfoEnabled(false);
	    $compileProvider.onChangesTtl(5);
	    $rootScopeProvider.digestTtl(5);
	}]);

	// hit it
	_angular2.default.element(window).ready(function () {
	    _angular2.default.bootstrap(document.body, [_module.name]);
	});

/***/ },

/***/ 12:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(5);

	var _angular2 = _interopRequireDefault(_angular);

	var _pdxpong = __webpack_require__(27);

	var _pdxpong2 = _interopRequireDefault(_pdxpong);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import NavHeader from './components/nav-header/nav-header';
	// import Leaderboard from './components/leaderboard/leaderboard';

	var _module = _angular2.default.module('pdxpong', [
	// NavHeader.name,
	// Leaderboard.name,
	'ui.router']);
	exports.default = _module.name;


	_module.component('main', {
	  templateUrl: _pdxpong2.default,
	  bindings: {}
	}).run(run).config(config);

	function config($locationProvider, $urlRouterProvider) {
	  $locationProvider.html5Mode(true);
	  $urlRouterProvider.otherwise('/leaderboard');
	}

	function run($rootScope, $state) {
	  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
	    if (error === 'AUTH_REQUIRED') {
	      $state.go('leaderboard');
	    }
	  });
	}

/***/ },

/***/ 27:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = 'app/src/pdxpong.html';

	angular.module('ng').run(['$templateCache', function ($templateCache) {
	    $templateCache.put('app/src/pdxpong.html', "<nav-header></nav-header><div ui-view></div>");
	}]);

/***/ }

});