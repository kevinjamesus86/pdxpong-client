webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _angular = __webpack_require__(8);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularAnimate = __webpack_require__(10);

	var _angularAnimate2 = _interopRequireDefault(_angularAnimate);

	var _angularSanitize = __webpack_require__(12);

	var _angularSanitize2 = _interopRequireDefault(_angularSanitize);

	var _angularUiRouter = __webpack_require__(14);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	__webpack_require__(15);

	var _pdxpong = __webpack_require__(29);

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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(8);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(14);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _navHeader = __webpack_require__(30);

	var _navHeader2 = _interopRequireDefault(_navHeader);

	var _leaderboard = __webpack_require__(32);

	var _leaderboard2 = _interopRequireDefault(_leaderboard);

	var _auth = __webpack_require__(34);

	var _auth2 = _interopRequireDefault(_auth);

	var _login = __webpack_require__(35);

	var _login2 = _interopRequireDefault(_login);

	var _register = __webpack_require__(37);

	var _register2 = _interopRequireDefault(_register);

	var _pdxpong = __webpack_require__(39);

	var _pdxpong2 = _interopRequireDefault(_pdxpong);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _module = _angular2.default.module('pdxpong', [_navHeader2.default, _leaderboard2.default, _auth2.default, _login2.default, _register2.default, _angularUiRouter2.default]);

	exports.default = _module.name;


	_module.component('main', {
	    templateUrl: _pdxpong2.default,
	    controller: ['Auth', function (Auth) {
	        this.auth = Auth;
	    }]
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(8);

	var _angular2 = _interopRequireDefault(_angular);

	var _navHeader = __webpack_require__(31);

	var _navHeader2 = _interopRequireDefault(_navHeader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NavHeader = function NavHeader() {
	  _classCallCheck(this, NavHeader);
	};

	var name = 'navHeader';
	exports.default = _angular2.default.module(name, []).component(name, {
	  templateUrl: _navHeader2.default,
	  controller: NavHeader,
	  bindings: {
	    auth: '='
	  }
	}).name;

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = 'app/src/components/nav-header/nav-header.html';

	angular.module('ng').run(['$templateCache', function ($templateCache) {
	    $templateCache.put('app/src/components/nav-header/nav-header.html', "<nav><a class=logo href alt=\"New Game\"></a><div ng-if=!$ctrl.user><a class=login-link href ui-sref=login>login</a><a class=login-link href ui-sref=register>register</a></div><a class=account-link ui-sref=account ng-if=$ctrl.user><span>{{$ctrl.user.name}}</span><img class=avatar ng-src={{$ctrl.user.avatar}}></a></nav>");
	}]);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(8);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(14);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _leaderboard = __webpack_require__(33);

	var _leaderboard2 = _interopRequireDefault(_leaderboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Leaderboard = function Leaderboard($rootScope) {
	    _classCallCheck(this, Leaderboard);

	    this.testVal = 'AWESOME.';
	    this.thing = $rootScope;
	};

	var name = 'leaderboard';
	exports.default = _angular2.default.module(name, [_angularUiRouter2.default]).component(name, {
	    templateUrl: _leaderboard2.default,
	    controller: ['$rootScope', Leaderboard]
	}).config(['$stateProvider', function ($stateProvider) {
	    $stateProvider.state('leaderboard', {
	        url: '/leaderboard',
	        template: '<leaderboard></leaderboard>'
	    });
	}]).name;

/***/ },
/* 33 */
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(8);

	var _angular2 = _interopRequireDefault(_angular);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var name = 'Auth';

	exports.default = _angular2.default.module(name, ['firebase']).service(name, ['$firebaseAuth', function ($firebaseAuth) {
	    return $firebaseAuth();
	}]).name;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(8);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(14);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _login = __webpack_require__(36);

	var _login2 = _interopRequireDefault(_login);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Login = function Login() {
	  _classCallCheck(this, Login);
	};

	var name = 'login';
	exports.default = _angular2.default.module(name, [_angularUiRouter2.default]).component(name, {
	  templateUrl: _login2.default,
	  controller: Login,
	  bindings: {
	    auth: '='
	  }
	}).config(['$stateProvider', function ($stateProvider) {
	  $stateProvider.state('login', {
	    url: '/login',
	    template: '<login auth="$ctrl.auth"></login>'
	  });
	}]).name;

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = 'app/src/components/login/login.html';

	angular.module('ng').run(['$templateCache', function ($templateCache) {
	    $templateCache.put('app/src/components/login/login.html', "<form class=$ctrl.login()><h1>Login</h1><div class=\"\"><label for=email>Email</label><input type=email ng-model=$ctrl.email></div><div class=\"\"><label for=password>Password</label><input type=password ng-model=$ctrl.password></div><input type=button name=name value=\"Sign In\"></form>{{$ctrl.state}}");
	}]);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(8);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(14);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _register = __webpack_require__(38);

	var _register2 = _interopRequireDefault(_register);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Register = function Register() {
	  _classCallCheck(this, Register);
	};

	var name = 'register';
	exports.default = _angular2.default.module(name, [_angularUiRouter2.default]).component(name, {
	  templateUrl: _register2.default,
	  controller: Register,
	  bindings: {
	    auth: '='
	  }
	}).config(['$stateProvider', function ($stateProvider) {
	  $stateProvider.state('register', {
	    url: '/register',
	    template: '<register auth="$ctrl.auth"></register>'
	  });
	}]).name;

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = 'app/src/components/register/register.html';

	angular.module('ng').run(['$templateCache', function ($templateCache) {
	    $templateCache.put('app/src/components/register/register.html', "<form class=$ctrl.login()><h1>Register</h1><div class=\"\"><label for=email>Email</label><input type=email ng-model=$ctrl.email></div><div class=\"\"><label for=password>Password</label><input type=password ng-model=$ctrl.password></div><input type=button name=name value=\"Sign In\"></form>{{$ctrl.state}}");
	}]);

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = 'app/src/pdxpong.html';

	angular.module('ng').run(['$templateCache', function ($templateCache) {
	    $templateCache.put('app/src/pdxpong.html', "<nav-header auth=$ctrl.auth></nav-header><div>{{log}}</div><div ui-view></div>");
	}]);

/***/ }
]);