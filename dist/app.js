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

	var _pdxpong = __webpack_require__(29);

	var _pdxpong2 = _interopRequireDefault(_pdxpong);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import Leaderboard from './components/leaderboard/leaderboard';

	var _module = _angular2.default.module('pdxpong', [_navHeader2.default.name,
	// Leaderboard.name,
	'ui.router']);
	exports.default = _module.name;


	_module.component('main', {
	    templateUrl: _pdxpong2.default,
	    bindings: {}
	});

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
	});

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