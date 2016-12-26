(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"), require("classnames"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery", "classnames"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jquery"), require("classnames")) : factory(root["jQuery"], root["classNames"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _jquery3 = __webpack_require__(2);

	var _jquery4 = _interopRequireDefault(_jquery3);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var $ = _jquery2.default;

	var BrowserHelper = function () {
		function BrowserHelper() {
			_classCallCheck(this, BrowserHelper);
		}

		_createClass(BrowserHelper, [{
			key: 'detect',
			value: function detect() {
				return Object.keys($.browser).filter(function (key) {
					return key !== 'version' && key !== 'versionNumber';
				}).reduce(function (classes, key) {
					var className = 'n-' + key.replace(' ', '-');

					classes[className] = $.browser[key];
					return classes;
				}, {});
			}
		}, {
			key: 'attachToHTML',
			value: function attachToHTML() {
				$('html').addClass((0, _classnames2.default)(this.detect()));
			}
		}]);

		return BrowserHelper;
	}();

	var helper = new BrowserHelper();
	helper.attachToHTML();

	exports.default = helper;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery Browser Plugin 0.1.0
	 * https://github.com/gabceb/jquery-browser-plugin
	 *
	 * Original jquery-browser code Copyright 2005, 2015 jQuery Foundation, Inc. and other contributors
	 * http://jquery.org/license
	 *
	 * Modifications Copyright 2015 Gabriel Cebrian
	 * https://github.com/gabceb
	 *
	 * Released under the MIT license
	 *
	 * Date: 05-07-2015
	 */
	/*global window: false */

	(function (factory) {
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
	      return factory($);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module === 'object' && typeof module.exports === 'object') {
	    // Node-like environment
	    module.exports = factory(require('jquery'));
	  } else {
	    // Browser globals
	    factory(window.jQuery);
	  }
	}(function(jQuery) {
	  "use strict";

	  function uaMatch( ua ) {
	    // If an UA is not provided, default to the current browser UA.
	    if ( ua === undefined ) {
	      ua = window.navigator.userAgent;
	    }
	    ua = ua.toLowerCase();

	    var match = /(edge)\/([\w.]+)/.exec( ua ) ||
	        /(opr)[\/]([\w.]+)/.exec( ua ) ||
	        /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
	        /(iemobile)[\/]([\w.]+)/.exec( ua ) ||
	        /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
	        /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
	        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
	        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
	        /(msie) ([\w.]+)/.exec( ua ) ||
	        ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
	        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
	        [];

	    var platform_match = /(ipad)/.exec( ua ) ||
	        /(ipod)/.exec( ua ) ||
	        /(windows phone)/.exec( ua ) ||
	        /(iphone)/.exec( ua ) ||
	        /(kindle)/.exec( ua ) ||
	        /(silk)/.exec( ua ) ||
	        /(android)/.exec( ua ) ||
	        /(win)/.exec( ua ) ||
	        /(mac)/.exec( ua ) ||
	        /(linux)/.exec( ua ) ||
	        /(cros)/.exec( ua ) ||
	        /(playbook)/.exec( ua ) ||
	        /(bb)/.exec( ua ) ||
	        /(blackberry)/.exec( ua ) ||
	        [];

	    var browser = {},
	        matched = {
	          browser: match[ 5 ] || match[ 3 ] || match[ 1 ] || "",
	          version: match[ 2 ] || match[ 4 ] || "0",
	          versionNumber: match[ 4 ] || match[ 2 ] || "0",
	          platform: platform_match[ 0 ] || ""
	        };

	    if ( matched.browser ) {
	      browser[ matched.browser ] = true;
	      browser.version = matched.version;
	      browser.versionNumber = parseInt(matched.versionNumber, 10);
	    }

	    if ( matched.platform ) {
	      browser[ matched.platform ] = true;
	    }

	    // These are all considered mobile platforms, meaning they run a mobile browser
	    if ( browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
	      browser.ipod || browser.kindle || browser.playbook || browser.silk || browser[ "windows phone" ]) {
	      browser.mobile = true;
	    }

	    // These are all considered desktop platforms, meaning they run a desktop browser
	    if ( browser.cros || browser.mac || browser.linux || browser.win ) {
	      browser.desktop = true;
	    }

	    // Chrome, Opera 15+ and Safari are webkit based browsers
	    if ( browser.chrome || browser.opr || browser.safari ) {
	      browser.webkit = true;
	    }

	    // IE11 has a new token so we will assign it msie to avoid breaking changes
	    if ( browser.rv || browser.iemobile) {
	      var ie = "msie";

	      matched.browser = ie;
	      browser[ie] = true;
	    }

	    // Edge is officially known as Microsoft Edge, so rewrite the key to match
	    if ( browser.edge ) {
	      delete browser.edge;
	      var msedge = "msedge";

	      matched.browser = msedge;
	      browser[msedge] = true;
	    }

	    // Blackberry browsers are marked as Safari on BlackBerry
	    if ( browser.safari && browser.blackberry ) {
	      var blackberry = "blackberry";

	      matched.browser = blackberry;
	      browser[blackberry] = true;
	    }

	    // Playbook browsers are marked as Safari on Playbook
	    if ( browser.safari && browser.playbook ) {
	      var playbook = "playbook";

	      matched.browser = playbook;
	      browser[playbook] = true;
	    }

	    // BB10 is a newer OS version of BlackBerry
	    if ( browser.bb ) {
	      var bb = "blackberry";

	      matched.browser = bb;
	      browser[bb] = true;
	    }

	    // Opera 15+ are identified as opr
	    if ( browser.opr ) {
	      var opera = "opera";

	      matched.browser = opera;
	      browser[opera] = true;
	    }

	    // Stock Android browsers are marked as Safari on Android.
	    if ( browser.safari && browser.android ) {
	      var android = "android";

	      matched.browser = android;
	      browser[android] = true;
	    }

	    // Kindle browsers are marked as Safari on Kindle
	    if ( browser.safari && browser.kindle ) {
	      var kindle = "kindle";

	      matched.browser = kindle;
	      browser[kindle] = true;
	    }

	     // Kindle Silk browsers are marked as Safari on Kindle
	    if ( browser.safari && browser.silk ) {
	      var silk = "silk";

	      matched.browser = silk;
	      browser[silk] = true;
	    }

	    // Assign the name and platform variable
	    browser.name = matched.browser;
	    browser.platform = matched.platform;
	    return browser;
	  }

	  // Run the matching process, also assign the function to the returned object
	  // for manual, jQuery-free use if desired
	  window.jQBrowser = uaMatch( window.navigator.userAgent );
	  window.jQBrowser.uaMatch = uaMatch;

	  // Only assign to jQuery.browser if jQuery is loaded
	  if ( jQuery ) {
	    jQuery.browser = window.jQBrowser;
	  }

	  return window.jQBrowser;
	}));


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }
/******/ ])
});
;