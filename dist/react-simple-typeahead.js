var ReactSimpleTypeahead =
/******/ (function(modules) { // webpackBootstrap
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

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _srcTypeaheadJsx = __webpack_require__(1);

	var _srcTypeaheadJsx2 = _interopRequireDefault(_srcTypeaheadJsx);

	exports['default'] = _srcTypeaheadJsx2['default'];
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _keyevent = __webpack_require__(4);

	var _keyevent2 = _interopRequireDefault(_keyevent);

	var _typeaheadDefaultCss = __webpack_require__(5);

	var _typeaheadDefaultCss2 = _interopRequireDefault(_typeaheadDefaultCss);

	var Typeahead = (function (_React$Component) {
	  _inherits(Typeahead, _React$Component);

	  function Typeahead(props) {
	    _classCallCheck(this, Typeahead);

	    _get(Object.getPrototypeOf(Typeahead.prototype), 'constructor', this).call(this, props);

	    this.handleOptionClick = this.handleOptionClick.bind(this);
	    this.handleOptionMouseOver = this.handleOptionMouseOver.bind(this);
	    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
	    this.handleInputChange = this.handleInputChange.bind(this);
	    this.handleInputBlur = this.handleInputBlur.bind(this);

	    this._navigateUp = this._navigateUp.bind(this);
	    this._navigateDown = this._navigateDown.bind(this);
	    this._setOptionSelected = this._setOptionSelected.bind(this);
	    this._hideResults = this._hideResults.bind(this);

	    this.state = {
	      value: this.props.defaultValue || '',
	      filteredOptions: this.props.options,
	      resultsListVisible: false
	    };
	  }

	  _createClass(Typeahead, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({
	        filteredOptions: nextProps.options || this.state.filteredOptions,
	        value: nextProps.defaultValue || this.state.value
	      });
	    }
	  }, {
	    key: 'handleOptionClick',
	    value: function handleOptionClick(evt) {
	      this._setOptionSelected();
	    }
	  }, {
	    key: 'handleOptionMouseOver',
	    value: function handleOptionMouseOver(newIndex) {
	      this.setState({
	        selectedIndex: newIndex
	      });
	    }
	  }, {
	    key: 'handleInputKeyUp',
	    value: function handleInputKeyUp(evt) {
	      evt.preventDefault();

	      switch (evt.keyCode) {
	        case _keyevent2['default'].DOM_VK_UP:
	          this._navigateUp();
	          break;
	        case _keyevent2['default'].DOM_VK_DOWN:
	          this._navigateDown();
	          break;
	        case _keyevent2['default'].DOM_VK_ESCAPE:
	          this._hideResults();
	          break;
	        case _keyevent2['default'].DOM_VK_RETURN:
	        case _keyevent2['default'].DOM_VK_ENTER:
	          this._setOptionSelected();
	          break;
	      }
	    }
	  }, {
	    key: 'handleInputChange',
	    value: function handleInputChange(evt) {
	      var _this = this;

	      evt.preventDefault();
	      var value = evt.target.value;

	      var filteredOptions = this.props.options.filter(function (opt) {
	        return opt.toLowerCase().includes(value.toLowerCase());
	      });

	      var showResultsList = filteredOptions.length > 0 && !!value;
	      var selectedIndex = showResultsList ? this.state.selectedIndex : null;

	      this.setState({
	        filteredOptions: filteredOptions,
	        value: value,
	        resultsListVisible: showResultsList,
	        selectedIndex: selectedIndex
	      }, function () {
	        _this.props.onInputChange(value);
	      });
	    }
	  }, {
	    key: 'handleInputBlur',
	    value: function handleInputBlur(evt) {
	      this._hideResults();
	      this.props.onBlur(evt);
	    }
	  }, {
	    key: '_navigateDown',
	    value: function _navigateDown() {
	      var newIndex = this.state.selectedIndex + 1 || 0;
	      if (newIndex > this.state.filteredOptions.length - 1) {
	        newIndex = 0;
	      }

	      this.setState({
	        selectedIndex: newIndex,
	        resultsListVisible: true
	      });
	    }
	  }, {
	    key: '_navigateUp',
	    value: function _navigateUp() {
	      var newIndex = this.state.selectedIndex - 1 || 0;
	      if (newIndex < 0) {
	        newIndex = this.state.filteredOptions.length - 1;
	      }

	      this.setState({
	        selectedIndex: newIndex,
	        resultsListVisible: true
	      });
	    }
	  }, {
	    key: '_setOptionSelected',
	    value: function _setOptionSelected() {
	      var _this2 = this;

	      if (this.state.selectedIndex) {
	        var opt = this.state.filteredOptions[this.state.selectedIndex];
	      } else {
	        var opt = this.props.options.filter(function (opt) {
	          return opt.toLowerCase().includes(_this2.state.value.toLowerCase());
	        }).pop();
	      }

	      this.setState({
	        value: opt,
	        resultsListVisible: false,
	        selectedIndex: undefined
	      }, function () {
	        _this2.props.onOptionSelected(opt);
	      });
	    }
	  }, {
	    key: '_hideResults',
	    value: function _hideResults() {
	      this.setState({
	        selectedIndex: undefined,
	        resultsListVisible: false
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var resultsClassNames = (0, _classnames2['default'])(this.props.styles.typeaheadResults, _defineProperty({}, this.props.styles.hidden, !this.state.resultsListVisible));

	      var optionsItems = this.state.filteredOptions.map(function (opt, i) {
	        var classNames = (0, _classnames2['default'])(_this3.props.styles.typeaheadResult, _defineProperty({}, _this3.props.styles.typeaheadResultFocused, _this3.state.selectedIndex === i));

	        return _react2['default'].createElement(
	          'li',
	          { className: classNames, key: i,
	            onClick: _this3.handleOptionClick,
	            onMouseOver: function (e) {
	              _this3.handleOptionMouseOver(i);
	            },
	            ref: 'option-' + i },
	          opt
	        );
	      });

	      return _react2['default'].createElement(
	        'div',
	        { className: this.props.styles.typeahead },
	        _react2['default'].createElement('input', { type: 'text',
	          value: this.state.value,
	          placeholder: this.props.placeholder,
	          onChange: this.handleInputChange,
	          onKeyUp: this.handleInputKeyUp,
	          onBlur: this.handleInputBlur,
	          onFocus: this.props.onFocus,
	          className: this.props.styles.typeaheadInput }),
	        _react2['default'].createElement(
	          'ul',
	          { className: resultsClassNames },
	          optionsItems
	        )
	      );
	    }
	  }]);

	  return Typeahead;
	})(_react2['default'].Component);

	;

	Typeahead.defaultProps = {
	  onOptionSelected: function onOptionSelected() {},
	  onBlur: function onBlur() {},
	  onFocus: function onFocus() {},
	  onInputChange: function onInputChange() {},
	  styles: _typeaheadDefaultCss2['default']
	};

	Typeahead.propTypes = {
	  defaultValue: _react2['default'].PropTypes.string,
	  options: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),

	  onOptionSelected: _react2['default'].PropTypes.func,
	  onBlur: _react2['default'].PropTypes.func,
	  onFocus: _react2['default'].PropTypes.func,
	  onInputChange: _react2['default'].PropTypes.func,

	  styles: _react2['default'].PropTypes.object
	};

	exports['default'] = Typeahead;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = undefined;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	'use strict';

	(function () {
		'use strict';

		function classNames() {

			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var KeyEvent = KeyEvent || {
	  DOM_VK_BACK_SPACE: 8,
	  DOM_VK_TAB: 9,
	  DOM_VK_RETURN: 13,
	  DOM_VK_ENTER: 14,
	  DOM_VK_ESCAPE: 27,
	  DOM_VK_UP: 38,
	  DOM_VK_DOWN: 40
	};

	exports["default"] = KeyEvent;
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?modules!./typeahead-default.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?modules!./typeahead-default.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "._--qJYrANuwmD-KJ0D15a- {\n  position: relative;\n}\n\n._13Eh0DVbiZYqwp0BoRFeKL {\n  position: relative;\n  z-index: 2;\n  margin-bottom: 3px !important;\n}\n\n._3FAMB6LjDfPJBcR3sJPY01 {\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  box-shadow: inset 0 1px 3px rhba(#000, 0.06);\n  box-sizing: border-box;\n\n  position: relative;\n  width: 95%;\n  margin: -15px auto 0 auto;\n  padding: 15px 0px 3px 0px;\n}\n\n._37Ufml0gd7voiDAuSFHEkX {\n  padding: 3px 15px;\n}\n\n._3pNBmUdUlmkH6oaJTY0w6Q {\n  background-color: red;\n  color: #FFF;\n}\n\n.Te41E-3_CxbJmx76tIfZO {\n  display: none;\n}\n\n", ""]);

	// exports
	exports.locals = {
		"typeahead": "_--qJYrANuwmD-KJ0D15a-",
		"typeaheadInput": "_13Eh0DVbiZYqwp0BoRFeKL",
		"typeaheadResults": "_3FAMB6LjDfPJBcR3sJPY01",
		"typeaheadResult": "_37Ufml0gd7voiDAuSFHEkX",
		"typeaheadResultFocused": "_3pNBmUdUlmkH6oaJTY0w6Q",
		"hidden": "Te41E-3_CxbJmx76tIfZO"
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	"use strict";

	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);