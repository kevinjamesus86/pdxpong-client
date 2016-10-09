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

	var _navHeader = __webpack_require__(27);

	var _navHeader2 = _interopRequireDefault(_navHeader);

	var _leaderboard = __webpack_require__(29);

	var _leaderboard2 = _interopRequireDefault(_leaderboard);

	var _pdxpong = __webpack_require__(31);

	var _pdxpong2 = _interopRequireDefault(_pdxpong);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _module = _angular2.default.module('pdxpong', [_navHeader2.default, _leaderboard2.default, 'ui.router']);
	exports.default = _module.name;


	_module.component('main', {
	    templateUrl: _pdxpong2.default,
	    bindings: {}
	}).config(['$locationProvider', '$urlRouterProvider', function ($locationProvider, $urlRouterProvider) {
	    $locationProvider.html5Mode(true);
	    $urlRouterProvider.otherwise('/leaderboard');
	}]).run(['$rootScope', '$state', function ($rootScope, $state) {
	    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {

	        if (error === 'AUTH_REQUIRED') {
	            $state.go('leaderboard');
	        }
	    });
	}]);

/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(5);

	var _angular2 = _interopRequireDefault(_angular);

	var _navHeader = __webpack_require__(28);

	var _navHeader2 = _interopRequireDefault(_navHeader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NavHeader = function NavHeader() {
	  _classCallCheck(this, NavHeader);
	};

	var name = 'navHeader';
	exports.default = _angular2.default.module(name, []).component(name, {
	  templateUrl: _navHeader2.default,
	  controller: NavHeader
	}).name;

/***/ },

/***/ 28:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = 'app/src/components/nav-header/nav-header.html';

	angular.module('ng').run(['$templateCache', function ($templateCache) {
	    $templateCache.put('app/src/components/nav-header/nav-header.html', "<nav><a href alt=\"New Game\" class=logo></a><a href>Person's Name</a></nav>");
	}]);

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(5);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(11);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _leaderboard = __webpack_require__(30);

	var _leaderboard2 = _interopRequireDefault(_leaderboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Leaderboard = function Leaderboard() {
	  _classCallCheck(this, Leaderboard);
	};

	var name = 'leaderboard';
	exports.default = _angular2.default.module(name, [_angularUiRouter2.default]).component(name, {
	  templateUrl: _leaderboard2.default,
	  controller: Leaderboard
	}).config(['$stateProvider', function ($stateProvider) {

	  $stateProvider.state('leaderboard', {
	    url: '/leaderboard',
	    template: '<leaderboard></leaderboard>'
	  });
	}]).name;

/***/ },

/***/ 30:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = 'app/src/components/leaderboard/leaderboard.html';

	angular.module('ng').run(['$templateCache', function ($templateCache) {
	    $templateCache.put('app/src/components/leaderboard/leaderboard.html', "<h1>Leaderboad</h1>");
	}]);

/***/ },

/***/ 31:
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