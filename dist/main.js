(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("rc-animate"), require("immutable"), require("mice-city-data"), require("classnames"));
	else if(typeof define === 'function' && define.amd)
		define("CityPicker", ["react", "rc-animate", "immutable", "mice-city-data", "classnames"], factory);
	else if(typeof exports === 'object')
		exports["CityPicker"] = factory(require("react"), require("rc-animate"), require("immutable"), require("mice-city-data"), require("classnames"));
	else
		root["CityPicker"] = factory(root["react"], root["rc-animate"], root["immutable"], root["mice-city-data"], root["classnames"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_12__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _CityPicker = __webpack_require__(/*! ./CityPicker.js */ 1);
	
	var _CityPicker2 = _interopRequireDefault(_CityPicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _CityPicker2.default;

/***/ },
/* 1 */
/*!***************************!*\
  !*** ./src/CityPicker.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CityInput = __webpack_require__(/*! ./CityInput */ 3);
	
	var _CityInput2 = _interopRequireDefault(_CityInput);
	
	var _CityPanel = __webpack_require__(/*! ./CityPanel */ 13);
	
	var _CityPanel2 = _interopRequireDefault(_CityPanel);
	
	var _util = __webpack_require__(/*! ./util */ 5);
	
	__webpack_require__(/*! ./CityPicker.css */ 17);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CityPicker = function (_Component) {
	    _inherits(CityPicker, _Component);
	
	    function CityPicker(props) {
	        _classCallCheck(this, CityPicker);
	
	        var _this = _possibleConstructorReturn(this, (CityPicker.__proto__ || Object.getPrototypeOf(CityPicker)).call(this, props));
	
	        _this.state = {
	            cities: _util.immutableCityData,
	            open: false,
	            searching: false
	        };
	        return _this;
	    }
	
	    _createClass(CityPicker, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.setSelectedCities(this.props.value);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if ('value' in nextProps) {
	                this.setSelectedCities(nextProps.value);
	            }
	            if ('disabled' in nextProps) {
	                if (nextProps.disabled) {
	                    this.setState({
	                        open: false
	                    });
	                }
	            }
	        }
	
	        /**
	         * set selected cities
	         * @param cities
	         */
	
	    }, {
	        key: 'setSelectedCities',
	        value: function setSelectedCities(cities) {
	            var append = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	            if (cities === null || typeof cities === 'undefined') return;
	            cities = Object.prototype.toString.call(cities) === '[object Array]' ? cities : [cities];
	            // match property type
	            if (!cities.every(function (item) {
	                return (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && 'cityNameCn' in item && 'cityNameEn' in item && 'cityCode' in item && 'index' in item;
	            })) {
	                throw new Error('city item does not match shape of {cityNameCn, cityNameEn, cityCode, index, checked}');
	            }
	            var stateCities = this.state.cities.map(function (item) {
	                if (cities.find(function (elem) {
	                    return elem.cityCode === item.get('cityCode');
	                })) {
	                    return item.set('checked', true);
	                }
	                if (!append) {
	                    return item.set('checked', false);
	                }
	                return item;
	            });
	
	            this.setState({
	                cities: stateCities
	            });
	        }
	
	        /**
	         * on select city in city panel
	         * @param city
	         * @param index
	         */
	
	    }, {
	        key: 'onSelectCity',
	        value: function onSelectCity(city, index) {
	            var _this2 = this;
	
	            this.setState({
	                cities: this.state.cities.updateIn([index, 'checked'], function (value) {
	                    return !value;
	                })
	            }, function () {
	                // trigger onChange event
	                _this2.props.onChange(_this2.getSelectedCities());
	            });
	        }
	
	        /**
	         * get selected cities from data source
	         * @returns {any|*}
	         */
	
	    }, {
	        key: 'getSelectedCities',
	        value: function getSelectedCities() {
	            return this.state.cities.filter(function (item) {
	                return item.get('checked');
	            }).toJS();
	            // .map(item => item.get('cityNameCn')).toJS();
	        }
	
	        /**
	         * remove city tag from input form
	         * @param city
	         */
	
	    }, {
	        key: 'onRemoveCity',
	        value: function onRemoveCity(city) {
	            var _this3 = this;
	
	            var entry = this.state.cities.findEntry(function (value) {
	                return value.get('cityNameCn') === city.cityNameCn;
	            });
	
	            if (entry) {
	                var _entry = _slicedToArray(entry, 1);
	
	                var index = _entry[0];
	
	                this.setState({
	                    cities: this.state.cities.updateIn([index, 'checked'], function () {
	                        return false;
	                    })
	                }, function () {
	                    // trigger onChange event
	                    _this3.props.onChange(_this3.getSelectedCities());
	                });
	            }
	        }
	
	        /**
	         * open city panel
	         * @param open
	         */
	
	    }, {
	        key: 'openCityPanel',
	        value: function openCityPanel(open) {
	            this.setState({
	                open: open
	            });
	        }
	
	        /**
	         * open search panel
	         * @param searching
	         */
	
	    }, {
	        key: 'openSearchPanel',
	        value: function openSearchPanel(searching) {
	            this.setState({
	                searching: searching
	            });
	        }
	    }, {
	        key: 'onPanelBlur',
	        value: function onPanelBlur() {
	            var _this4 = this;
	
	            this.blurTimer = setTimeout(function () {
	                _this4.openCityPanel(false);
	                _this4.openSearchPanel(false);
	            }, 10);
	        }
	    }, {
	        key: 'onPanelFocus',
	        value: function onPanelFocus() {
	            if (this.blurTimer) {
	                clearTimeout(this.blurTimer);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'span',
	                { style: { position: 'relative' }, className: "city_select_root" },
	                _react2.default.createElement(_CityInput2.default, {
	                    style: { width: '100%' },
	                    value: this.getSelectedCities(),
	                    disabled: this.props.disabled,
	                    open: this.state.open,
	                    onAddCity: this.setSelectedCities.bind(this),
	                    onRemoveCity: this.onRemoveCity.bind(this),
	                    openCityPanel: this.openCityPanel.bind(this),
	                    openSearchPanel: this.openSearchPanel.bind(this)
	                }),
	                _react2.default.createElement(_CityPanel2.default, {
	                    cities: this.state.cities,
	                    open: this.state.open,
	                    openCityPanel: this.openCityPanel.bind(this),
	                    onSelectCity: this.onSelectCity.bind(this)
	                })
	            );
	        }
	    }]);
	
	    return CityPicker;
	}(_react.Component);
	// {"cityNameEn":"Beijing","cityNameCn":"北京","cityCode":1,"index":1,"checked":false}
	// PropTypes.arrayOf(PropTypes.shape({
	//         cityNameEn: PropTypes.string.isRequired,
	//         cityNameCn: PropTypes.string.isRequired,
	//         cityCode: PropTypes.number.isRequired,
	//         index: PropTypes.number.isRequired,
	//         checked: PropTypes.bool.isRequired
	//     })),
	
	
	CityPicker.defaultProps = {
	    disabled: false,
	    value: []
	};
	CityPicker.propTypes = {
	    disabled: _react.PropTypes.bool,
	    value: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.shape({
	        cityNameEn: _react.PropTypes.string,
	        cityNameCn: _react.PropTypes.string,
	        cityCode: _react.PropTypes.number,
	        index: _react.PropTypes.number,
	        checked: _react.PropTypes.bool
	    })])),
	    onChange: _react.PropTypes.func
	};
	CityPicker.mapCityItem = _util.mapCityItem;
	
	exports.default = CityPicker;

/***/ },
/* 2 */
/*!**************************************************************************************!*\
  !*** external {"root":"react","commonjs":"react","commonjs2":"react","amd":"react"} ***!
  \**************************************************************************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/*!**************************!*\
  !*** ./src/CityInput.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _rcAnimate = __webpack_require__(/*! rc-animate */ 4);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _util = __webpack_require__(/*! ./util */ 5);
	
	__webpack_require__(/*! ./CityInput.css */ 8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by q.chen on 2016/10/27.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * City input
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var classnames = __webpack_require__(/*! classnames */ 12);
	
	var UNSELECTABLE_STYLE = {
	    userSelect: 'none',
	    WebkitUserSelect: 'none'
	};
	var ENTER_KEY_CODE = 13;
	
	var CityInput = function (_Component) {
	    _inherits(CityInput, _Component);
	
	    function CityInput(props) {
	        _classCallCheck(this, CityInput);
	
	        var _this = _possibleConstructorReturn(this, (CityInput.__proto__ || Object.getPrototypeOf(CityInput)).call(this, props));
	
	        _this.state = {
	            inputValue: ''
	        };
	        return _this;
	    }
	
	    _createClass(CityInput, [{
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            var inputNode = this.getSearchInputDOM();
	            var mirrorNode = this.getSearchInputMirrorDOM();
	            if (inputNode.value) {
	                inputNode.style.width = '';
	                inputNode.style.width = mirrorNode.clientWidth + 'px';
	            } else {
	                inputNode.style.width = '';
	            }
	        }
	    }, {
	        key: 'onClick',
	        value: function onClick(e) {
	            e.preventDefault();
	            e.stopPropagation();
	            if (this.props.disabled) {
	                return false;
	            }
	            this.props.openCityPanel(true);
	            this.getSearchInputDOM().focus();
	        }
	    }, {
	        key: 'onInputChange',
	        value: function onInputChange(e) {
	            var value = e.target.value;
	            this.setInputValue(value);
	        }
	    }, {
	        key: 'onInputKeyDown',
	        value: function onInputKeyDown(e) {
	            var keyCode = e.keyCode;
	            if (keyCode === ENTER_KEY_CODE) {
	                var value = e.target.value;
	                this.props.onAddCity((0, _util.mapCityItem)(value), true);
	                this.setInputValue('');
	            }
	        }
	    }, {
	        key: 'onInputBlur',
	        value: function onInputBlur(e) {
	            var value = e.target.value;
	            if (value.length && value.length > 1) {
	                this.props.onAddCity((0, _util.mapCityItem)(value), true);
	            }
	            this.setInputValue('');
	        }
	    }, {
	        key: 'setInputValue',
	        value: function setInputValue(inputValue) {
	            this.setState({
	                inputValue: inputValue
	            });
	        }
	    }, {
	        key: 'onRemoveCity',
	        value: function onRemoveCity(city, e) {
	            e.preventDefault();
	            e.stopPropagation();
	            if (this.props.disabled) {
	                return false;
	            }
	            this.props.onRemoveCity(city);
	        }
	    }, {
	        key: 'getSearchInputDOM',
	        value: function getSearchInputDOM() {
	            return this.refs.searchInput;
	        }
	    }, {
	        key: 'getSearchInputMirrorDOM',
	        value: function getSearchInputMirrorDOM() {
	            return this.refs.searchInputMirror;
	        }
	
	        /**
	         * render placeholder
	         * @returns {XML} html to render
	         */
	
	    }, {
	        key: 'renderPlaceholder',
	        value: function renderPlaceholder() {
	            var placeholderStyle = this.props.placeholder ? {} : UNSELECTABLE_STYLE;
	            return _react2.default.createElement(
	                'div',
	                { unselectable: 'unselectable',
	                    className: 'ant-select-selection__placeholder',
	                    style: placeholderStyle },
	                this.props.placeholder
	            );
	        }
	
	        /**
	         * render tag iterator
	         * @param item data
	         * @param index index
	         * @returns {XML} city tag
	         */
	
	    }, {
	        key: 'renderTag',
	        value: function renderTag(item, index) {
	            var disabled = this.props.disabled;
	            var choiceClassName = disabled ? 'ant-select-selection__choice ant-select-selection__choice__disabled' : 'ant-select-selection__choice';
	            var key = typeof item === 'string' ? item : item.cityCode;
	            var content = typeof item === 'string' ? item : item.cityNameCn;
	            return _react2.default.createElement(
	                'li',
	                { style: UNSELECTABLE_STYLE,
	                    className: choiceClassName,
	                    key: key,
	                    title: content },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'ant-select-selection__choice__content' },
	                    content
	                ),
	                _react2.default.createElement('span', { className: 'ant-select-selection__choice__remove', onClick: this.onRemoveCity.bind(this, item) })
	            );
	        }
	
	        /**
	         * render tags
	         * @returns {*}
	         */
	
	    }, {
	        key: 'renderTags',
	        value: function renderTags() {
	            return this.props.value.map(this.renderTag.bind(this));
	        }
	
	        /**
	         * render search input
	         * @returns {XML}
	         */
	
	    }, {
	        key: 'renderInput',
	        value: function renderInput() {
	            return _react2.default.createElement(
	                'li',
	                { className: classnames({
	                        'ant-select-search': true,
	                        'ant-select-search--inline': true
	                    }), key: 'li-searchInput' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'ant-select-search__field__wrap' },
	                    _react2.default.createElement('input', { className: 'ant-select-search__field',
	                        onChange: this.onInputChange.bind(this),
	                        onKeyDown: this.onInputKeyDown.bind(this),
	                        onBlur: this.onInputBlur.bind(this),
	                        ref: 'searchInput',
	                        disabled: this.props.disabled,
	                        value: this.state.inputValue }),
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'ant-select-search__field__mirror', ref: 'searchInputMirror' },
	                        this.state.inputValue
	                    )
	                )
	            );
	        }
	
	        /**
	         * render tag animate container
	         * @returns {XML}
	         */
	
	    }, {
	        key: 'renderTagContainer',
	        value: function renderTagContainer() {
	            var innerNode = [].concat(_toConsumableArray(this.renderTags()), [this.renderInput()]);
	            return _react2.default.createElement(
	                _rcAnimate2.default,
	                {
	                    component: 'ul',
	                    transitionName: 'zoom' },
	                innerNode
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	
	            return _react2.default.createElement(
	                'div',
	                { className: classnames({
	                        'ant-select': true,
	                        'ant-select-enabled': !this.props.disabled,
	                        'ant-select-disabled': this.props.disabled,
	                        'ant-select-focused': this.props.open
	                    }),
	                    style: this.props.style,
	                    onClick: this.onClick.bind(this) },
	                _react2.default.createElement(
	                    'div',
	                    { className: classnames({
	                            'ant-select-selection': true,
	                            'ant-select-selection--multiple': true
	                        }),
	                        role: 'combobox' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: classnames({
	                                'ant-select-selection__rendered': true
	                            }) },
	                        this.renderTagContainer()
	                    )
	                )
	            );
	        }
	    }]);
	
	    return CityInput;
	}(_react.Component);
	
	CityInput.defaultProps = {
	    disabled: false,
	    open: false
	};
	
	
	CityInput.propTypes = {
	    open: _react.PropTypes.bool,
	    style: _react.PropTypes.object,
	    placeholder: _react.PropTypes.string,
	    disabled: _react.PropTypes.bool,
	    value: _react.PropTypes.array,
	    openCityPanel: _react.PropTypes.func,
	    onAddCity: _react.PropTypes.func,
	    onRemoveCity: _react.PropTypes.func
	};
	
	exports.default = CityInput;

/***/ },
/* 4 */
/*!**********************************************************************************************************!*\
  !*** external {"root":"rc-animate","commonjs":"rc-animate","commonjs2":"rc-animate","amd":"rc-animate"} ***!
  \**********************************************************************************************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.mapCityItem = exports.immutableCityData = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _immutable = __webpack_require__(/*! immutable */ 6);
	
	var cityData = __webpack_require__(/*! mice-city-data */ 7);
	
	var immutableCityData = exports.immutableCityData = (0, _immutable.fromJS)(cityData);
	
	var mapCityItem = exports.mapCityItem = function mapCityItem(cities) {
	    if (cities === null || typeof cities === 'undefined') return [];
	    cities = Object.prototype.toString.call(cities) === '[object Array]' ? cities : [cities];
	
	    return cities.map(function (item) {
	        var entry = void 0;
	
	        if (typeof item === 'number') {
	            // city code
	            entry = immutableCityData.findEntry(function (value) {
	                return value.get('cityCode') === item;
	            });
	        } else if (typeof item === 'string') {
	            // city name
	            entry = immutableCityData.findEntry(function (value) {
	                return value.get('cityNameEn').toLowerCase().indexOf(item.toLowerCase()) !== -1;
	            });
	            if (!entry) {
	                entry = immutableCityData.findEntry(function (value) {
	                    return value.get('cityNameCn').indexOf(item) !== -1;
	                });
	            }
	        } else if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
	            // city object
	            entry = immutableCityData.findEntry(function (value) {
	                return value.get('cityCode') === item.cityCode;
	            });
	        }
	
	        if (entry) {
	            // the city in data source
	            var _entry = entry;
	
	            var _entry2 = _slicedToArray(_entry, 2);
	
	            var index = _entry2[0];
	            var value = _entry2[1];
	
	            return value.toJS();
	        }
	        window.alert('城市不在数据中。');
	        return undefined;
	    }).filter(function (item) {
	        return item != null && typeof item !== 'undefined';
	    });
	};

/***/ },
/* 6 */
/*!******************************************************************************************************!*\
  !*** external {"root":"immutable","commonjs":"immutable","commonjs2":"immutable","amd":"immutable"} ***!
  \******************************************************************************************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/*!**************************************************************************************************************************!*\
  !*** external {"root":"mice-city-data","commonjs":"mice-city-data","commonjs2":"mice-city-data","amd":"mice-city-data"} ***!
  \**************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/*!***************************!*\
  !*** ./src/CityInput.css ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./CityInput.css */ 9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./CityInput.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./CityInput.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/*!******************************************!*\
  !*** ./~/css-loader!./src/CityInput.css ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 10)();
	// imports
	
	
	// module
	exports.push([module.id, ".ant-select {\n  box-sizing: border-box;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  color: #666;\n  font-size: 12px;\n}\n.ant-select > ul > li > a {\n  padding: 0;\n  background-color: #fff;\n}\n.ant-select-arrow {\n  font-style: normal;\n  vertical-align: baseline;\n  text-align: center;\n  text-transform: none;\n  text-rendering: auto;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  line-height: 1;\n  margin-top: -6px;\n  display: inline-block;\n  font-size: 12px;\n  font-size: 8px \\9;\n  -webkit-transform: scale(0.66666667) rotate(0deg);\n      -ms-transform: scale(0.66666667) rotate(0deg);\n          transform: scale(0.66666667) rotate(0deg);\n  /* IE6-IE8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=1, M12=0, M21=0, M22=1)\";\n  zoom: 1;\n}\n.ant-select-arrow:before {\n  display: block;\n  font-family: \"anticon\" !important;\n}\n:root .ant-select-arrow {\n  -webkit-filter: none;\n          filter: none;\n}\n:root .ant-select-arrow {\n  font-size: 12px;\n}\n.ant-select-arrow * {\n  display: none;\n}\n.ant-select-arrow:before {\n  content: '\\E603';\n  -webkit-transition: -webkit-transform 0.2s ease;\n  transition: -webkit-transform 0.2s ease;\n  transition: transform 0.2s ease;\n  transition: transform 0.2s ease, -webkit-transform 0.2s ease;\n}\n.ant-select-selection {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-sizing: border-box;\n  display: block;\n  background-color: #fff;\n  border-radius: 6px;\n  border: 1px solid #d9d9d9;\n  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.ant-select-selection:hover {\n  border-color: #57c5f7;\n}\n.ant-select-focused .ant-select-selection,\n.ant-select-selection:focus,\n.ant-select-selection:active {\n  border-color: #57c5f7;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(45, 183, 245, 0.2);\n}\n.ant-select-selection__clear {\n  display: inline-block;\n  font-style: normal;\n  vertical-align: baseline;\n  text-align: center;\n  text-transform: none;\n  text-rendering: auto;\n  opacity: 0;\n  position: absolute;\n  right: 8px;\n  z-index: 1;\n  background: #fff;\n  top: 50%;\n  font-size: 12px;\n  color: #ccc;\n  width: 12px;\n  height: 12px;\n  margin-top: -6px;\n  line-height: 12px;\n  cursor: pointer;\n  -webkit-transition: color 0.3s ease, opacity 0.15s ease;\n  transition: color 0.3s ease, opacity 0.15s ease;\n}\n.ant-select-selection__clear:before {\n  display: block;\n  font-family: 'anticon';\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  content: \"\\E631\";\n}\n.ant-select-selection__clear:hover {\n  color: #999;\n}\n.ant-select-selection:hover .ant-select-selection__clear {\n  opacity: 1;\n}\n.ant-select-disabled {\n  color: #ccc;\n}\n.ant-select-disabled .ant-select-selection {\n  background: #f7f7f7;\n  cursor: not-allowed;\n}\n.ant-select-disabled .ant-select-selection:hover,\n.ant-select-disabled .ant-select-selection:focus,\n.ant-select-disabled .ant-select-selection:active {\n  border-color: #d9d9d9;\n  box-shadow: none;\n}\n.ant-select-disabled .ant-select-selection__clear {\n  display: none;\n  visibility: hidden;\n  pointer-events: none;\n}\n.ant-select-disabled .ant-select-selection--multiple .ant-select-selection__choice {\n  background: #e9e9e9;\n  color: #aaa;\n  padding-right: 10px;\n}\n.ant-select-disabled .ant-select-selection--multiple .ant-select-selection__choice__remove {\n  display: none;\n}\n.ant-select-selection--single {\n  height: 28px;\n  position: relative;\n  cursor: pointer;\n}\n.ant-select-selection--single .ant-select-selection__rendered {\n  height: 26px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-left: 8px;\n  padding-right: 24px;\n  line-height: 26px;\n}\n.ant-select-open.ant-select-show-search .ant-select-selection--single .ant-select-selection-selected-value {\n  position: absolute;\n  left: 8px;\n  top: 0;\n}\n.ant-select-lg .ant-select-selection--single {\n  height: 32px;\n}\n.ant-select-lg .ant-select-selection--single .ant-select-selection__rendered {\n  line-height: 30px;\n}\n.ant-select-lg .ant-select-selection--multiple {\n  min-height: 32px;\n}\n.ant-select-lg .ant-select-selection--multiple .ant-select-selection__rendered li {\n  height: 24px;\n  line-height: 24px;\n}\n.ant-select-sm .ant-select-selection {\n  border-radius: 4px;\n}\n.ant-select-sm .ant-select-selection--single {\n  height: 22px;\n}\n.ant-select-sm .ant-select-selection--single .ant-select-selection__rendered {\n  line-height: 20px;\n}\n.ant-select-sm .ant-select-selection--multiple {\n  min-height: 22px;\n}\n.ant-select-sm .ant-select-selection--multiple .ant-select-selection__rendered li {\n  height: 14px;\n  line-height: 14px;\n}\n.ant-select-disabled .ant-select-selection__choice__remove {\n  color: #ccc;\n  cursor: default;\n}\n.ant-select-disabled .ant-select-selection__choice__remove:hover {\n  color: #ccc;\n}\n.ant-select-search__field__wrap {\n  display: inline-block;\n  position: relative;\n}\n.ant-select-selection__placeholder,\n.ant-select-search__field__placeholder {\n  position: absolute;\n  top: 50%;\n  left: 9px;\n  right: 9px;\n  color: #ccc;\n  line-height: 20px;\n  height: 20px;\n  max-width: 100%;\n  margin-top: -10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.ant-select-search--inline {\n  float: left;\n  width: 100%;\n  height: 100%;\n}\n.ant-select-search--inline .ant-select-search__field__wrap {\n  width: 100%;\n  height: 100%;\n}\n.ant-select-search--inline .ant-select-search__field {\n  border: 0;\n  font-size: 100%;\n  height: 100%;\n  background: transparent;\n  outline: 0;\n  border-radius: 6px;\n}\n.ant-select-search--inline .ant-select-search__field__mirror {\n  position: absolute;\n  top: 0;\n  left: 9999px;\n  white-space: pre;\n  pointer-events: none;\n}\n.ant-select-search--inline > i {\n  float: right;\n}\n.ant-select-selection--multiple {\n  min-height: 28px;\n  cursor: text;\n}\n.ant-select-selection--multiple .ant-select-search--inline {\n  width: auto;\n}\n.ant-select-selection--multiple .ant-select-search--inline .ant-select-search__field {\n  width: 0.75em;\n}\n.ant-select-selection--multiple .ant-select-selection__rendered {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-left: 6px;\n  padding-bottom: 4px;\n}\n.ant-select-selection--multiple > ul > li,\n.ant-select-selection--multiple .ant-select-selection__rendered > ul > li {\n  margin-top: 4px;\n  height: 20px;\n  line-height: 20px;\n}\n.ant-select-selection--multiple .ant-select-selection__choice {\n  background-color: #f3f3f3;\n  border-radius: 4px;\n  cursor: default;\n  float: left;\n  padding: 0 15px;\n  margin-right: 4px;\n  max-width: 99%;\n  position: relative;\n  overflow: hidden;\n  -webkit-transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  padding: 0 20px 0 10px;\n}\n.ant-select-selection--multiple .ant-select-selection__choice__disabled {\n  padding: 0 10px;\n}\n.ant-select-selection--multiple .ant-select-selection__choice__content {\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n  -webkit-transition: margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.ant-select-selection--multiple .ant-select-selection__choice__remove {\n  font-style: normal;\n  vertical-align: baseline;\n  text-align: center;\n  text-transform: none;\n  text-rendering: auto;\n  line-height: 1;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #999;\n  line-height: inherit;\n  cursor: pointer;\n  font-weight: bold;\n  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  display: inline-block;\n  font-size: 12px;\n  font-size: 8px \\9;\n  -webkit-transform: scale(0.66666667) rotate(0deg);\n      -ms-transform: scale(0.66666667) rotate(0deg);\n          transform: scale(0.66666667) rotate(0deg);\n  /* IE6-IE8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=1, M12=0, M21=0, M22=1)\";\n  zoom: 1;\n  position: absolute;\n  right: 4px;\n  padding: 0 0 0 8px;\n}\n.ant-select-selection--multiple .ant-select-selection__choice__remove:before {\n  display: block;\n  font-family: \"anticon\" !important;\n}\n:root .ant-select-selection--multiple .ant-select-selection__choice__remove {\n  -webkit-filter: none;\n          filter: none;\n}\n:root .ant-select-selection--multiple .ant-select-selection__choice__remove {\n  font-size: 12px;\n}\n.ant-select-selection--multiple .ant-select-selection__choice__remove:hover {\n  color: #404040;\n}\n.ant-select-selection--multiple .ant-select-selection__choice__remove:before {\n  content: \"\\E62D\";\n}\n.ant-select-open .ant-select-arrow {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -ms-transform: rotate(180deg);\n}\n.ant-select-open .ant-select-arrow:before {\n  -webkit-transform: rotate(180deg);\n      -ms-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.ant-select-open .ant-select-selection {\n  border-color: #57c5f7;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(45, 183, 245, 0.2);\n}\n.ant-select-combobox .ant-select-arrow {\n  display: none;\n}\n.ant-select-combobox .ant-select-search--inline {\n  height: 100%;\n  float: none;\n}\n.ant-select-combobox .ant-select-search__field__wrap {\n  width: 100%;\n  height: 100%;\n}\n.ant-select-combobox .ant-select-search__field {\n  padding: 0 10px;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  box-shadow: none;\n}\n.ant-select-combobox .ant-select-selection__rendered {\n  padding: 0 24px 0 0;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n.ant-select-combobox .ant-select-selection__rendered > ul {\n  height: 100%;\n}\n.ant-select-dropdown {\n  background-color: white;\n  border: 1px solid #d9d9d9;\n  box-shadow: 0 1px 6px rgba(100, 100, 100, 0.2);\n  border-radius: 6px;\n  box-sizing: border-box;\n  z-index: 1050;\n  left: -9999px;\n  top: -9999px;\n  position: absolute;\n  outline: none;\n  overflow: hidden;\n  font-size: 12px;\n}\n.ant-select-dropdown.slide-up-enter.slide-up-enter-active.ant-select-dropdown-placement-bottomLeft,\n.ant-select-dropdown.slide-up-appear.slide-up-appear-active.ant-select-dropdown-placement-bottomLeft {\n  -webkit-animation-name: antSlideUpIn;\n          animation-name: antSlideUpIn;\n}\n.ant-select-dropdown.slide-up-enter.slide-up-enter-active.ant-select-dropdown-placement-topLeft,\n.ant-select-dropdown.slide-up-appear.slide-up-appear-active.ant-select-dropdown-placement-topLeft {\n  -webkit-animation-name: antSlideDownIn;\n          animation-name: antSlideDownIn;\n}\n.ant-select-dropdown.slide-up-leave.slide-up-leave-active.ant-select-dropdown-placement-bottomLeft {\n  -webkit-animation-name: antSlideUpOut;\n          animation-name: antSlideUpOut;\n}\n.ant-select-dropdown.slide-up-leave.slide-up-leave-active.ant-select-dropdown-placement-topLeft {\n  -webkit-animation-name: antSlideDownOut;\n          animation-name: antSlideDownOut;\n}\n.ant-select-dropdown-hidden {\n  display: none;\n}\n.ant-select-dropdown-menu {\n  outline: none;\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n  max-height: 250px;\n  overflow: auto;\n}\n.ant-select-dropdown-menu-item-group-list {\n  margin: 0;\n  padding: 0;\n}\n.ant-select-dropdown-menu-item-group-list > .ant-select-dropdown-menu-item {\n  padding-left: 24px;\n}\n.ant-select-dropdown-menu-item-group-title {\n  color: #999;\n  line-height: 1.5;\n  padding: 8px 15px;\n}\n.ant-select-dropdown-menu-item {\n  position: relative;\n  display: block;\n  padding: 7px 15px;\n  font-weight: normal;\n  color: #666;\n  cursor: pointer;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-transition: background 0.3s ease;\n  transition: background 0.3s ease;\n}\n.ant-select-dropdown-menu-item:hover,\n.ant-select-dropdown-menu-item-active {\n  background-color: #eaf8fe;\n}\n.ant-select-dropdown-menu-item-disabled {\n  color: #ccc;\n  cursor: not-allowed;\n}\n.ant-select-dropdown-menu-item-disabled:hover {\n  color: #ccc;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.ant-select-dropdown-menu-item-selected,\n.ant-select-dropdown-menu-item-selected:hover {\n  background-color: #f7f7f7;\n  font-weight: bold;\n  color: #666;\n}\n.ant-select-dropdown-menu-item-divider {\n  height: 1px;\n  margin: 1px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n  line-height: 0;\n}\n.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:after {\n  font-family: 'anticon';\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  content: \"\\E62E\";\n  color: transparent;\n  display: inline-block;\n  font-size: 12px;\n  font-size: 10px \\9;\n  -webkit-transform: scale(0.83333333) rotate(0deg);\n      -ms-transform: scale(0.83333333) rotate(0deg);\n          transform: scale(0.83333333) rotate(0deg);\n  /* IE6-IE8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=1, M12=0, M21=0, M22=1)\";\n  zoom: 1;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  position: absolute;\n  right: 15px;\n  font-weight: bold;\n  text-shadow: 0 0.1px 0, 0.1px 0 0, 0 -0.1px 0, -0.1px 0;\n}\n:root .ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:after {\n  -webkit-filter: none;\n          filter: none;\n}\n:root .ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:after {\n  font-size: 12px;\n}\n.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:hover:after {\n  color: #ddd;\n}\n.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-disabled:after {\n  display: none;\n}\n.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:after,\n.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover:after {\n  color: #2db7f5;\n  display: inline-block;\n}\n.ant-select-dropdown-container-open .ant-select-dropdown,\n.ant-select-dropdown-open .ant-select-dropdown {\n  display: block;\n}\n.ant-select-dropdown .ant-select-dropdown-search {\n  display: block;\n  padding: 4px;\n}\n.ant-select-dropdown .ant-select-dropdown-search .ant-select-search__field__wrap {\n  width: 100%;\n}\n.ant-select-dropdown .ant-select-dropdown-search .ant-select-search__field {\n  padding: 4px 7px;\n  width: 100%;\n  box-sizing: border-box;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  outline: none;\n}\n.ant-select-dropdown .ant-select-dropdown-search.ant-select-search--hide {\n  display: none;\n}\n\n.ant-search-input-wrapper {\n  display: inline-block;\n  vertical-align: middle;\n}\n.ant-search-input.ant-input-group .ant-input:first-child,\n.ant-search-input.ant-input-group .ant-select:first-child {\n  border-radius: 6px;\n  position: absolute;\n  top: -1px;\n  width: 100%;\n}\n.ant-search-input .ant-search-btn {\n  color: #666;\n  background-color: #f7f7f7;\n  border-color: #d9d9d9;\n  border-radius: 0 5px 5px 0;\n  left: -1px;\n  position: relative;\n  border-width: 0 0 0 1px;\n  z-index: 2;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.ant-search-input .ant-search-btn > a:only-child {\n  color: currentColor;\n}\n.ant-search-input .ant-search-btn > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ant-search-input .ant-search-btn:hover,\n.ant-search-input .ant-search-btn:focus {\n  color: #858585;\n  background-color: #f9f9f9;\n  border-color: #e1e1e1;\n}\n.ant-search-input .ant-search-btn:hover > a:only-child,\n.ant-search-input .ant-search-btn:focus > a:only-child {\n  color: currentColor;\n}\n.ant-search-input .ant-search-btn:hover > a:only-child:after,\n.ant-search-input .ant-search-btn:focus > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ant-search-input .ant-search-btn:active,\n.ant-search-input .ant-search-btn.active {\n  color: #616161;\n  background-color: #ebebeb;\n  border-color: #ebebeb;\n}\n.ant-search-input .ant-search-btn:active > a:only-child,\n.ant-search-input .ant-search-btn.active > a:only-child {\n  color: currentColor;\n}\n.ant-search-input .ant-search-btn:active > a:only-child:after,\n.ant-search-input .ant-search-btn.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ant-search-input .ant-search-btn.disabled,\n.ant-search-input .ant-search-btn[disabled],\nfieldset[disabled] .ant-search-input .ant-search-btn,\n.ant-search-input .ant-search-btn.disabled:hover,\n.ant-search-input .ant-search-btn[disabled]:hover,\nfieldset[disabled] .ant-search-input .ant-search-btn:hover,\n.ant-search-input .ant-search-btn.disabled:focus,\n.ant-search-input .ant-search-btn[disabled]:focus,\nfieldset[disabled] .ant-search-input .ant-search-btn:focus,\n.ant-search-input .ant-search-btn.disabled:active,\n.ant-search-input .ant-search-btn[disabled]:active,\nfieldset[disabled] .ant-search-input .ant-search-btn:active,\n.ant-search-input .ant-search-btn.disabled.active,\n.ant-search-input .ant-search-btn[disabled].active,\nfieldset[disabled] .ant-search-input .ant-search-btn.active {\n  color: #ccc;\n  background-color: #f7f7f7;\n  border-color: #d9d9d9;\n}\n.ant-search-input .ant-search-btn.disabled > a:only-child,\n.ant-search-input .ant-search-btn[disabled] > a:only-child,\nfieldset[disabled] .ant-search-input .ant-search-btn > a:only-child,\n.ant-search-input .ant-search-btn.disabled:hover > a:only-child,\n.ant-search-input .ant-search-btn[disabled]:hover > a:only-child,\nfieldset[disabled] .ant-search-input .ant-search-btn:hover > a:only-child,\n.ant-search-input .ant-search-btn.disabled:focus > a:only-child,\n.ant-search-input .ant-search-btn[disabled]:focus > a:only-child,\nfieldset[disabled] .ant-search-input .ant-search-btn:focus > a:only-child,\n.ant-search-input .ant-search-btn.disabled:active > a:only-child,\n.ant-search-input .ant-search-btn[disabled]:active > a:only-child,\nfieldset[disabled] .ant-search-input .ant-search-btn:active > a:only-child,\n.ant-search-input .ant-search-btn.disabled.active > a:only-child,\n.ant-search-input .ant-search-btn[disabled].active > a:only-child,\nfieldset[disabled] .ant-search-input .ant-search-btn.active > a:only-child {\n  color: currentColor;\n}\n.ant-search-input .ant-search-btn.disabled > a:only-child:after,\n.ant-search-input .ant-search-btn[disabled] > a:only-child:after,\nfieldset[disabled] .ant-search-input .ant-search-btn > a:only-child:after,\n.ant-search-input .ant-search-btn.disabled:hover > a:only-child:after,\n.ant-search-input .ant-search-btn[disabled]:hover > a:only-child:after,\nfieldset[disabled] .ant-search-input .ant-search-btn:hover > a:only-child:after,\n.ant-search-input .ant-search-btn.disabled:focus > a:only-child:after,\n.ant-search-input .ant-search-btn[disabled]:focus > a:only-child:after,\nfieldset[disabled] .ant-search-input .ant-search-btn:focus > a:only-child:after,\n.ant-search-input .ant-search-btn.disabled:active > a:only-child:after,\n.ant-search-input .ant-search-btn[disabled]:active > a:only-child:after,\nfieldset[disabled] .ant-search-input .ant-search-btn:active > a:only-child:after,\n.ant-search-input .ant-search-btn.disabled.active > a:only-child:after,\n.ant-search-input .ant-search-btn[disabled].active > a:only-child:after,\nfieldset[disabled] .ant-search-input .ant-search-btn.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ant-search-input .ant-search-btn:hover,\n.ant-search-input .ant-search-btn:focus {\n  color: #57c5f7;\n  background-color: white;\n  border-color: #57c5f7;\n}\n.ant-search-input .ant-search-btn:hover > a:only-child,\n.ant-search-input .ant-search-btn:focus > a:only-child {\n  color: currentColor;\n}\n.ant-search-input .ant-search-btn:hover > a:only-child:after,\n.ant-search-input .ant-search-btn:focus > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ant-search-input .ant-search-btn:active,\n.ant-search-input .ant-search-btn.active {\n  color: #2baee9;\n  background-color: white;\n  border-color: #2baee9;\n}\n.ant-search-input .ant-search-btn:active > a:only-child,\n.ant-search-input .ant-search-btn.active > a:only-child {\n  color: currentColor;\n}\n.ant-search-input .ant-search-btn:active > a:only-child:after,\n.ant-search-input .ant-search-btn.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ant-search-input .ant-search-btn:hover {\n  border-color: #d9d9d9;\n}\nform .ant-search-input .ant-search-btn {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty,\n.ant-search-input:hover .ant-search-btn-noempty {\n  color: #fff;\n  background-color: #2db7f5;\n  border-color: #2db7f5;\n}\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty > a:only-child,\n.ant-search-input:hover .ant-search-btn-noempty > a:only-child {\n  color: currentColor;\n}\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty > a:only-child:after,\n.ant-search-input:hover .ant-search-btn-noempty > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty:hover,\n.ant-search-input:hover .ant-search-btn-noempty:hover,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty:focus,\n.ant-search-input:hover .ant-search-btn-noempty:focus {\n  color: #ffffff;\n  background-color: #57c5f7;\n  border-color: #57c5f7;\n}\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty:hover > a:only-child,\n.ant-search-input:hover .ant-search-btn-noempty:hover > a:only-child,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty:focus > a:only-child,\n.ant-search-input:hover .ant-search-btn-noempty:focus > a:only-child {\n  color: currentColor;\n}\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty:hover > a:only-child:after,\n.ant-search-input:hover .ant-search-btn-noempty:hover > a:only-child:after,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty:focus > a:only-child:after,\n.ant-search-input:hover .ant-search-btn-noempty:focus > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty:active,\n.ant-search-input:hover .ant-search-btn-noempty:active,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty.active,\n.ant-search-input:hover .ant-search-btn-noempty.active {\n  color: #f2f2f2;\n  background-color: #2baee9;\n  border-color: #2baee9;\n}\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty:active > a:only-child,\n.ant-search-input:hover .ant-search-btn-noempty:active > a:only-child,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty.active > a:only-child,\n.ant-search-input:hover .ant-search-btn-noempty.active > a:only-child {\n  color: currentColor;\n}\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty:active > a:only-child:after,\n.ant-search-input:hover .ant-search-btn-noempty:active > a:only-child:after,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty.active > a:only-child:after,\n.ant-search-input:hover .ant-search-btn-noempty.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled,\n.ant-search-input:hover .ant-search-btn-noempty.disabled,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled],\n.ant-search-input:hover .ant-search-btn-noempty[disabled],\nfieldset[disabled] .ant-search-input.ant-search-input-focus .ant-search-btn-noempty,\nfieldset[disabled] .ant-search-input:hover .ant-search-btn-noempty,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled:hover,\n.ant-search-input:hover .ant-search-btn-noempty.disabled:hover,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled]:hover,\n.ant-search-input:hover .ant-search-btn-noempty[disabled]:hover,\nfieldset[disabled] .ant-search-input.ant-search-input-focus .ant-search-btn-noempty:hover,\nfieldset[disabled] .ant-search-input:hover .ant-search-btn-noempty:hover,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled:focus,\n.ant-search-input:hover .ant-search-btn-noempty.disabled:focus,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled]:focus,\n.ant-search-input:hover .ant-search-btn-noempty[disabled]:focus,\nfieldset[disabled] .ant-search-input.ant-search-input-focus .ant-search-btn-noempty:focus,\nfieldset[disabled] .ant-search-input:hover .ant-search-btn-noempty:focus,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled:active,\n.ant-search-input:hover .ant-search-btn-noempty.disabled:active,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled]:active,\n.ant-search-input:hover .ant-search-btn-noempty[disabled]:active,\nfieldset[disabled] .ant-search-input.ant-search-input-focus .ant-search-btn-noempty:active,\nfieldset[disabled] .ant-search-input:hover .ant-search-btn-noempty:active,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled.active,\n.ant-search-input:hover .ant-search-btn-noempty.disabled.active,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled].active,\n.ant-search-input:hover .ant-search-btn-noempty[disabled].active,\nfieldset[disabled] .ant-search-input.ant-search-input-focus .ant-search-btn-noempty.active,\nfieldset[disabled] .ant-search-input:hover .ant-search-btn-noempty.active {\n  color: #ccc;\n  background-color: #f7f7f7;\n  border-color: #d9d9d9;\n}\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled > a:only-child,\n.ant-search-input:hover .ant-search-btn-noempty.disabled > a:only-child,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled] > a:only-child,\n.ant-search-input:hover .ant-search-btn-noempty[disabled] > a:only-child,\nfieldset[disabled] .ant-search-input.ant-search-input-focus .ant-search-btn-noempty > a:only-child,\nfieldset[disabled] .ant-search-input:hover .ant-search-btn-noempty > a:only-child,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled:hover > a:only-child,\n.ant-search-input:hover .ant-search-btn-noempty.disabled:hover > a:only-child,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled]:hover > a:only-child,\n.ant-search-input:hover .ant-search-btn-noempty[disabled]:hover > a:only-child,\nfieldset[disabled] .ant-search-input.ant-search-input-focus .ant-search-btn-noempty:hover > a:only-child,\nfieldset[disabled] .ant-search-input:hover .ant-search-btn-noempty:hover > a:only-child,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled:focus > a:only-child,\n.ant-search-input:hover .ant-search-btn-noempty.disabled:focus > a:only-child,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled]:focus > a:only-child,\n.ant-search-input:hover .ant-search-btn-noempty[disabled]:focus > a:only-child,\nfieldset[disabled] .ant-search-input.ant-search-input-focus .ant-search-btn-noempty:focus > a:only-child,\nfieldset[disabled] .ant-search-input:hover .ant-search-btn-noempty:focus > a:only-child,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled:active > a:only-child,\n.ant-search-input:hover .ant-search-btn-noempty.disabled:active > a:only-child,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled]:active > a:only-child,\n.ant-search-input:hover .ant-search-btn-noempty[disabled]:active > a:only-child,\nfieldset[disabled] .ant-search-input.ant-search-input-focus .ant-search-btn-noempty:active > a:only-child,\nfieldset[disabled] .ant-search-input:hover .ant-search-btn-noempty:active > a:only-child,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled.active > a:only-child,\n.ant-search-input:hover .ant-search-btn-noempty.disabled.active > a:only-child,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled].active > a:only-child,\n.ant-search-input:hover .ant-search-btn-noempty[disabled].active > a:only-child,\nfieldset[disabled] .ant-search-input.ant-search-input-focus .ant-search-btn-noempty.active > a:only-child,\nfieldset[disabled] .ant-search-input:hover .ant-search-btn-noempty.active > a:only-child {\n  color: currentColor;\n}\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled > a:only-child:after,\n.ant-search-input:hover .ant-search-btn-noempty.disabled > a:only-child:after,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled] > a:only-child:after,\n.ant-search-input:hover .ant-search-btn-noempty[disabled] > a:only-child:after,\nfieldset[disabled] .ant-search-input.ant-search-input-focus .ant-search-btn-noempty > a:only-child:after,\nfieldset[disabled] .ant-search-input:hover .ant-search-btn-noempty > a:only-child:after,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled:hover > a:only-child:after,\n.ant-search-input:hover .ant-search-btn-noempty.disabled:hover > a:only-child:after,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled]:hover > a:only-child:after,\n.ant-search-input:hover .ant-search-btn-noempty[disabled]:hover > a:only-child:after,\nfieldset[disabled] .ant-search-input.ant-search-input-focus .ant-search-btn-noempty:hover > a:only-child:after,\nfieldset[disabled] .ant-search-input:hover .ant-search-btn-noempty:hover > a:only-child:after,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled:focus > a:only-child:after,\n.ant-search-input:hover .ant-search-btn-noempty.disabled:focus > a:only-child:after,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled]:focus > a:only-child:after,\n.ant-search-input:hover .ant-search-btn-noempty[disabled]:focus > a:only-child:after,\nfieldset[disabled] .ant-search-input.ant-search-input-focus .ant-search-btn-noempty:focus > a:only-child:after,\nfieldset[disabled] .ant-search-input:hover .ant-search-btn-noempty:focus > a:only-child:after,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled:active > a:only-child:after,\n.ant-search-input:hover .ant-search-btn-noempty.disabled:active > a:only-child:after,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled]:active > a:only-child:after,\n.ant-search-input:hover .ant-search-btn-noempty[disabled]:active > a:only-child:after,\nfieldset[disabled] .ant-search-input.ant-search-input-focus .ant-search-btn-noempty:active > a:only-child:after,\nfieldset[disabled] .ant-search-input:hover .ant-search-btn-noempty:active > a:only-child:after,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty.disabled.active > a:only-child:after,\n.ant-search-input:hover .ant-search-btn-noempty.disabled.active > a:only-child:after,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty[disabled].active > a:only-child:after,\n.ant-search-input:hover .ant-search-btn-noempty[disabled].active > a:only-child:after,\nfieldset[disabled] .ant-search-input.ant-search-input-focus .ant-search-btn-noempty.active > a:only-child:after,\nfieldset[disabled] .ant-search-input:hover .ant-search-btn-noempty.active > a:only-child:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: transparent;\n}\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty:hover,\n.ant-search-input:hover .ant-search-btn-noempty:hover,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty:focus,\n.ant-search-input:hover .ant-search-btn-noempty:focus,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty:active,\n.ant-search-input:hover .ant-search-btn-noempty:active,\n.ant-search-input.ant-search-input-focus .ant-search-btn-noempty.active,\n.ant-search-input:hover .ant-search-btn-noempty.active {\n  color: #fff;\n}\n.ant-search-input .ant-select-combobox .ant-select-selection__rendered {\n  right: 29px;\n}\n.ant-input {\n  position: relative;\n  display: inline-block;\n  padding: 4px 7px;\n  width: 100%;\n  height: 28px;\n  cursor: text;\n  font-size: 12px;\n  line-height: 1.5;\n  color: #666;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d9d9d9;\n  border-radius: 6px;\n  -webkit-transition: border 0.2s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.2s cubic-bezier(0.645, 0.045, 0.355, 1), box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: border 0.2s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.2s cubic-bezier(0.645, 0.045, 0.355, 1), box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.ant-input::-moz-placeholder {\n  color: #ccc;\n  opacity: 1;\n}\n.ant-input:-ms-input-placeholder {\n  color: #ccc;\n}\n.ant-input::-webkit-input-placeholder {\n  color: #ccc;\n}\n.ant-input:hover {\n  border-color: #57c5f7;\n}\n.ant-input:focus {\n  border-color: #57c5f7;\n  outline: 0;\n  box-shadow: 0 0 0 2px rgba(45, 183, 245, 0.2);\n}\n.ant-input[disabled],\nfieldset[disabled] .ant-input {\n  background-color: #f7f7f7;\n  opacity: 1;\n  cursor: not-allowed;\n  color: #ccc;\n}\n.ant-input[disabled]:hover,\nfieldset[disabled] .ant-input:hover {\n  border-color: #e1e1e1;\n}\ntextarea.ant-input {\n  max-width: 100%;\n  height: auto;\n  vertical-align: bottom;\n}\n.ant-input-lg {\n  padding: 6px 7px;\n  height: 32px;\n}\n.ant-input-sm {\n  padding: 1px 7px;\n  height: 22px;\n  border-radius: 4px;\n}\n.ant-input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n  width: 100%;\n}\n.ant-input-group[class*=\"col-\"] {\n  float: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n.ant-input-group > [class*=\"col-\"] {\n  padding-right: 8px;\n}\n.ant-input-group-addon,\n.ant-input-group-wrap,\n.ant-input-group > .ant-input {\n  display: table-cell;\n}\n.ant-input-group-addon:not(:first-child):not(:last-child),\n.ant-input-group-wrap:not(:first-child):not(:last-child),\n.ant-input-group > .ant-input:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.ant-input-group-addon,\n.ant-input-group-wrap {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.ant-input-group-wrap > * {\n  display: block !important;\n}\n.ant-input-group .ant-input {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n.ant-input-group-addon {\n  padding: 4px 7px;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1;\n  color: #666;\n  text-align: center;\n  background-color: #eee;\n  border: 1px solid #d9d9d9;\n  border-radius: 6px;\n}\n.ant-input-group-addon .ant-select {\n  margin: -5px -7px;\n}\n.ant-input-group-addon .ant-select .ant-select-selection {\n  background-color: inherit;\n  border: 0;\n  margin: -1px;\n  border: 1px solid transparent;\n}\n.ant-input-group-addon .ant-select-open .ant-select-selection,\n.ant-input-group-addon .ant-select-focused .ant-select-selection {\n  border-color: #57c5f7;\n}\n.ant-input-group > span > .ant-input:first-child,\n.ant-input-group > .ant-input:first-child,\n.ant-input-group-addon:first-child {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.ant-input-group > span > .ant-input:first-child .ant-select .ant-select-selection,\n.ant-input-group > .ant-input:first-child .ant-select .ant-select-selection,\n.ant-input-group-addon:first-child .ant-select .ant-select-selection {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.ant-input-group-addon:first-child {\n  border-right: 0;\n}\n.ant-input-group-addon:last-child {\n  border-left: 0;\n}\n.ant-input-group > .ant-input:last-child,\n.ant-input-group-addon:last-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.ant-input-group > .ant-input:last-child .ant-select .ant-select-selection,\n.ant-input-group-addon:last-child .ant-select .ant-select-selection {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.ant-input-group-lg .ant-input,\n.ant-input-group-lg > .ant-input-group-addon {\n  padding: 6px 7px;\n  height: 32px;\n}\n.ant-input-group-sm .ant-input,\n.ant-input-group-sm > .ant-input-group-addon {\n  padding: 1px 7px;\n  height: 22px;\n  border-radius: 4px;\n}\n", ""]);
	
	// exports


/***/ },
/* 10 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
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
/* 11 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
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
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
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
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
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


/***/ },
/* 12 */
/*!**********************************************************************************************************!*\
  !*** external {"root":"classnames","commonjs":"classnames","commonjs2":"classnames","amd":"classnames"} ***!
  \**********************************************************************************************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ },
/* 13 */
/*!**************************!*\
  !*** ./src/CityPanel.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _immutable = __webpack_require__(/*! immutable */ 6);
	
	var _rcAnimate = __webpack_require__(/*! rc-animate */ 4);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	__webpack_require__(/*! ./CityPanel.css */ 14);
	
	var _CityItem = __webpack_require__(/*! ./CityItem */ 16);
	
	var _CityItem2 = _interopRequireDefault(_CityItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var classnames = __webpack_require__(/*! classnames */ 12);
	/**
	 * constant CITY_SECTION_KEY
	 * @type {{HOT: string, A: string, E: string, J: string, N: string, T: string, Y: string}}
	 */
	var CITY_SECTION_KEY = {
	    HOT: 'HOT',
	    A: 'A',
	    E: 'E',
	    J: 'J',
	    N: 'N',
	    T: 'T',
	    Y: 'Y'
	};
	
	/**
	 * default city panel
	 */
	
	var CityPanel = function (_Component) {
	    _inherits(CityPanel, _Component);
	
	    function CityPanel(props) {
	        _classCallCheck(this, CityPanel);
	
	        var _this = _possibleConstructorReturn(this, (CityPanel.__proto__ || Object.getPrototypeOf(CityPanel)).call(this, props));
	
	        _this.state = {
	            section: CITY_SECTION_KEY.HOT
	        };
	        return _this;
	    }
	
	    /**
	     * change city panel
	     * @param sectionKey key of the panel
	     * @returns {function()} click function callback
	     */
	
	
	    _createClass(CityPanel, [{
	        key: 'changeCitySection',
	        value: function changeCitySection(sectionKey) {
	            var _this2 = this;
	
	            return function () {
	                _this2.setState({
	                    section: sectionKey
	                });
	            };
	        }
	
	        /**
	         * render city item in panel
	         * @param startIndex start index
	         * @param endIndex end index, not include end index item
	         * @returns {*}
	         */
	
	    }, {
	        key: 'renderCityItems',
	        value: function renderCityItems(startIndex, endIndex) {
	            var _this3 = this;
	
	            var cities = this.props.cities.slice(startIndex, endIndex);
	            return cities.map(function (item, index) {
	                return _react2.default.createElement(_CityItem2.default, { city: item,
	                    index: startIndex + index,
	                    key: item.get('cityCode'),
	                    onSelectCity: _this3.props.onSelectCity });
	            });
	        }
	    }, {
	        key: 'renderCityItem',
	        value: function renderCityItem(index) {
	            var city = this.props.cities.get(index);
	            var key = city.get('cityCode');
	            return _react2.default.createElement(_CityItem2.default, { city: city, index: index, key: key, onSelectCity: this.props.onSelectCity });
	        }
	
	        /**
	         * render city panel
	         * @returns {XML}
	         */
	
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;
	
	            return _react2.default.createElement(
	                _rcAnimate2.default,
	                {
	                    showProp: 'data-show',
	                    transitionName: 'fade' },
	                _react2.default.createElement(
	                    'div',
	                    {
	                        className: 'city_select_lhsl',
	                        'data-show': this.props.open,
	                        style: { display: this.props.open ? 'block' : 'none' } },
	                    _react2.default.createElement(
	                        'a',
	                        { className: 'close CQ_suggestionClose', onClick: function onClick() {
	                                _this4.props.openCityPanel(false);
	                            } },
	                        '\xD7'
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        { className: 'title' },
	                        '\u652F\u6301\u4E2D\u6587/\u82F1\u6587\u8F93\u5165'
	                    ),
	                    _react2.default.createElement(
	                        'ul',
	                        { className: 'tab_box' },
	                        _react2.default.createElement(
	                            'li',
	                            { className: classnames({ 'hot_selected': this.state.section === CITY_SECTION_KEY.HOT }),
	                                onClick: this.changeCitySection(CITY_SECTION_KEY.HOT) },
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                '\u70ED\u95E8'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            { className: classnames({ 'hot_selected': this.state.section === CITY_SECTION_KEY.A }),
	                                onClick: this.changeCitySection(CITY_SECTION_KEY.A) },
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                'ABCD'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            { className: classnames({ 'hot_selected': this.state.section === CITY_SECTION_KEY.E }),
	                                onClick: this.changeCitySection(CITY_SECTION_KEY.E) },
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                'EFGH'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            { className: classnames({ 'hot_selected': this.state.section === CITY_SECTION_KEY.J }),
	                                onClick: this.changeCitySection(CITY_SECTION_KEY.J) },
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                'JKLM'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            { className: classnames({ 'hot_selected': this.state.section === CITY_SECTION_KEY.N }),
	                                onClick: this.changeCitySection(CITY_SECTION_KEY.N) },
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                'NOPQRS'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            { className: classnames({ 'hot_selected': this.state.section === CITY_SECTION_KEY.T }),
	                                onClick: this.changeCitySection(CITY_SECTION_KEY.T) },
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                'TUVWX'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'li',
	                            { className: classnames({ 'hot_selected': this.state.section === CITY_SECTION_KEY.Y }),
	                                onClick: this.changeCitySection(CITY_SECTION_KEY.Y) },
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                'YZ'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: classnames({ 'city_item': true, 'hide': this.state.section !== CITY_SECTION_KEY.HOT }) },
	                        _react2.default.createElement(
	                            'div',
	                            null,
	                            this.renderCityItem(0) /*北京*/,
	                            this.renderCityItem(1) /*上海*/,
	                            this.renderCityItem(2) /*天津*/,
	                            this.renderCityItem(3) /*重庆*/,
	                            this.renderCityItem(5) /*大连*/,
	                            this.renderCityItem(6) /*青岛*/,
	                            this.renderCityItem(7) /*西安*/,
	                            this.renderCityItem(9) /*南京*/,
	                            this.renderCityItem(11) /*苏州*/,
	                            this.renderCityItem(14) /*杭州*/,
	                            this.renderCityItem(22) /*厦门*/,
	                            this.renderCityItem(25) /*成都*/,
	                            this.renderCityItem(26) /*深圳*/,
	                            this.renderCityItem(28) /*广州*/,
	                            this.renderCityItem(39) /*三亚*/,
	                            this.renderCityItem(513) /*台北*/,
	                            this.renderCityItem(54) /*香港*/,
	                            this.renderCityItem(119) /*济南*/,
	                            this.renderCityItem(317) /*宁波*/,
	                            this.renderCityItem(380) /*沈阳*/,
	                            this.renderCityItem(402) /*武汉*/
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: classnames({ 'city_item': true, hide: this.state.section !== CITY_SECTION_KEY.A }) },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'A'
	                            ),
	                            this.renderCityItem(1125) /*阿坝*/,
	                            this.renderCityItem(136) /*阿克苏*/,
	                            this.renderCityItem(138) /*阿勒泰*/,
	                            this.renderCityItem(135) /*安康*/,
	                            this.renderCityItem(140) /*安庆*/,
	                            this.renderCityItem(141) /*鞍山*/,
	                            this.renderCityItem(142) /*安顺*/,
	                            this.renderCityItem(144) /*安阳*/,
	                            this.renderCityItem(55) /*澳门*/
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'B'
	                            ),
	                            this.renderCityItem(61706) /*白城*/,
	                            this.renderCityItem(61730) /*百色*/,
	                            this.renderCityItem(9323) /*白沙*/,
	                            this.renderCityItem(2958) /*白山*/,
	                            this.renderCityItem(837) /*白银*/,
	                            this.renderCityItem(147) /*保定*/,
	                            this.renderCityItem(95) /*宝鸡*/,
	                            this.renderCityItem(158) /*保山*/,
	                            this.renderCityItem(50) /*保亭*/,
	                            this.renderCityItem(116) /*包头*/,
	                            this.renderCityItem(2959) /*巴彦淖尔*/,
	                            this.renderCityItem(3025) /*巴中*/,
	                            this.renderCityItem(151) /*北海*/,
	                            this.renderCityItem(0) /*北京*/,
	                            this.renderCityItem(145) /*蚌埠*/,
	                            this.renderCityItem(61745) /*本溪*/,
	                            this.renderCityItem(10328) /*毕节*/,
	                            this.renderCityItem(1108) /*滨州*/,
	                            this.renderCityItem(9765) /*博尔塔拉*/,
	                            this.renderCityItem(61669) /*亳州*/
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'C'
	                            ),
	                            this.renderCityItem(52) /*昌江*/,
	                            this.renderCityItem(176) /*沧州*/,
	                            this.renderCityItem(128) /*长春*/,
	                            this.renderCityItem(161) /*常德*/,
	                            this.renderCityItem(485) /*昌都*/,
	                            this.renderCityItem(10329) /*昌吉*/,
	                            this.renderCityItem(166) /*长沙*/,
	                            this.renderCityItem(113) /*长治*/,
	                            this.renderCityItem(173) /*常州*/,
	                            this.renderCityItem(171) /*朝阳*/,
	                            this.renderCityItem(175) /*潮州*/,
	                            this.renderCityItem(481) /*承德*/,
	                            this.renderCityItem(25) /*成都*/,
	                            this.renderCityItem(9134) /*澄迈*/,
	                            this.renderCityItem(511) /*郴州*/,
	                            this.renderCityItem(4186) /*嘉义*/,
	                            this.renderCityItem(162) /*赤峰*/,
	                            this.renderCityItem(177) /*池州*/,
	                            this.renderCityItem(3) /*重庆*/,
	                            this.renderCityItem(1173) /*崇左*/,
	                            this.renderCityItem(174) /*滁州*/
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'D'
	                            ),
	                            this.renderCityItem(32) /*大理市*/,
	                            this.renderCityItem(5) /*大连*/,
	                            this.renderCityItem(180) /*丹东*/,
	                            this.renderCityItem(53) /*儋州*/,
	                            this.renderCityItem(189) /*大庆*/,
	                            this.renderCityItem(112) /*大同*/,
	                            this.renderCityItem(6605) /*大兴安岭*/,
	                            this.renderCityItem(61821) /*达州*/,
	                            this.renderCityItem(194) /*德阳*/,
	                            this.renderCityItem(668) /*德州*/,
	                            this.renderCityItem(46) /*定安*/,
	                            this.renderCityItem(61612) /*定西*/,
	                            this.renderCityItem(44) /*东方*/,
	                            this.renderCityItem(182) /*东莞*/,
	                            this.renderCityItem(193) /*东营*/
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: classnames({ 'city_item': true, hide: this.state.section !== CITY_SECTION_KEY.E }) },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'E'
	                            ),
	                            this.renderCityItem(3035) /*鄂尔多斯*/,
	                            this.renderCityItem(61583) /*鄂州*/
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'F'
	                            ),
	                            this.renderCityItem(971) /*防城港*/,
	                            this.renderCityItem(204) /*佛山*/,
	                            this.renderCityItem(205) /*抚顺*/,
	                            this.renderCityItem(207) /*阜新*/,
	                            this.renderCityItem(210) /*阜阳*/,
	                            this.renderCityItem(211) /*福州*/,
	                            this.renderCityItem(2956) /*抚州*/
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'G'
	                            ),
	                            this.renderCityItem(6742) /*甘南*/,
	                            this.renderCityItem(218) /*赣州*/,
	                            this.renderCityItem(3177) /*甘孜*/,
	                            this.renderCityItem(61323) /*高雄*/,
	                            this.renderCityItem(61691) /*广安*/,
	                            this.renderCityItem(217) /*广元*/,
	                            this.renderCityItem(28) /*广州*/,
	                            this.renderCityItem(814) /*贵港*/,
	                            this.renderCityItem(29) /*桂林*/,
	                            this.renderCityItem(34) /*贵阳*/,
	                            this.renderCityItem(266) /*固原*/
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'H'
	                            ),
	                            this.renderCityItem(4) /*哈尔滨*/,
	                            this.renderCityItem(6723) /*海北*/,
	                            this.renderCityItem(6689) /*海东*/,
	                            this.renderCityItem(38) /*海口*/,
	                            this.renderCityItem(6534) /*海西*/,
	                            this.renderCityItem(224) /*邯郸*/,
	                            this.renderCityItem(14) /*杭州*/,
	                            this.renderCityItem(105) /*汉中*/,
	                            this.renderCityItem(61542) /*鹤壁*/,
	                            this.renderCityItem(3028) /*河池*/,
	                            this.renderCityItem(226) /*合肥*/,
	                            this.renderCityItem(905) /*鹤岗*/,
	                            this.renderCityItem(229) /*黑河*/,
	                            this.renderCityItem(238) /*衡水*/,
	                            this.renderCityItem(245) /*衡阳*/,
	                            this.renderCityItem(61296) /*河源*/,
	                            this.renderCityItem(61665) /*菏泽*/,
	                            this.renderCityItem(3199) /*贺州*/,
	                            this.renderCityItem(54) /*香港*/,
	                            this.renderCityItem(642) /*红河*/,
	                            this.renderCityItem(2921) /*新竹*/,
	                            this.renderCityItem(487) /*淮安*/,
	                            this.renderCityItem(221) /*淮北*/,
	                            this.renderCityItem(230) /*怀化*/,
	                            this.renderCityItem(235) /*淮南*/,
	                            this.renderCityItem(5922) /*花莲*/,
	                            this.renderCityItem(2957) /*黄冈*/,
	                            this.renderCityItem(6718) /*黄南*/,
	                            this.renderCityItem(20) /*黄山*/,
	                            this.renderCityItem(240) /*黄石*/,
	                            this.renderCityItem(87) /*呼和浩特*/,
	                            this.renderCityItem(247) /*惠州*/,
	                            this.renderCityItem(61641) /*葫芦岛*/,
	                            this.renderCityItem(3302) /*呼伦贝尔*/,
	                            this.renderCityItem(74) /*湖州*/
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: classnames({ 'city_item': true, hide: this.state.section !== CITY_SECTION_KEY.J }) },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'J'
	                            ),
	                            this.renderCityItem(264) /*佳木斯*/,
	                            this.renderCityItem(249) /*吉安*/,
	                            this.renderCityItem(263) /*江门*/,
	                            this.renderCityItem(61684) /*焦作*/,
	                            this.renderCityItem(484) /*嘉兴*/,
	                            this.renderCityItem(269) /*嘉峪关*/,
	                            this.renderCityItem(61547) /*揭阳*/,
	                            this.renderCityItem(129) /*吉林*/,
	                            this.renderCityItem(6726) /*基隆*/,
	                            this.renderCityItem(119) /*济南*/,
	                            this.renderCityItem(61748) /*金昌*/,
	                            this.renderCityItem(61683) /*晋城*/,
	                            this.renderCityItem(252) /*景德镇*/,
	                            this.renderCityItem(61711) /*荆门*/,
	                            this.renderCityItem(271) /*荆州*/,
	                            this.renderCityItem(255) /*金华*/,
	                            this.renderCityItem(265) /*济宁*/,
	                            this.renderCityItem(750) /*晋中*/,
	                            this.renderCityItem(270) /*锦州*/,
	                            this.renderCityItem(21) /*九江*/,
	                            this.renderCityItem(547) /*酒泉*/,
	                            this.renderCityItem(127) /*鸡西*/,
	                            this.renderCityItem(751) /*济源*/
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'K'
	                            ),
	                            this.renderCityItem(274) /*开封*/,
	                            this.renderCityItem(61323) /*高雄*/,
	                            this.renderCityItem(133) /*克拉玛依*/,
	                            this.renderCityItem(30) /*昆明*/
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'L'
	                            ),
	                            this.renderCityItem(1169) /*来宾*/,
	                            this.renderCityItem(749) /*莱芜*/,
	                            this.renderCityItem(283) /*廊坊*/,
	                            this.renderCityItem(86) /*兰州*/,
	                            this.renderCityItem(37) /*拉萨*/,
	                            this.renderCityItem(45) /*乐东*/,
	                            this.renderCityItem(288) /*乐山*/,
	                            this.renderCityItem(6485) /*凉山*/,
	                            this.renderCityItem(296) /*连云港*/,
	                            this.renderCityItem(61662) /*聊城*/,
	                            this.renderCityItem(294) /*辽阳*/,
	                            this.renderCityItem(295) /*辽源*/,
	                            this.renderCityItem(33) /*丽江*/,
	                            this.renderCityItem(61824) /*临沧*/,
	                            this.renderCityItem(114) /*临汾*/,
	                            this.renderCityItem(9166) /*临高*/,
	                            this.renderCityItem(51) /*陵水*/,
	                            this.renderCityItem(10189) /*临夏*/,
	                            this.renderCityItem(482) /*临沂*/,
	                            this.renderCityItem(91) /*林芝*/,
	                            this.renderCityItem(289) /*丽水*/,
	                            this.renderCityItem(508) /*六盘水*/,
	                            this.renderCityItem(297) /*柳州*/,
	                            this.renderCityItem(6645) /*陇南*/,
	                            this.renderCityItem(291) /*龙岩*/,
	                            this.renderCityItem(61510) /*娄底*/,
	                            this.renderCityItem(998) /*六安*/,
	                            this.renderCityItem(61679) /*漯河*/,
	                            this.renderCityItem(293) /*洛阳*/,
	                            this.renderCityItem(298) /*泸州*/,
	                            this.renderCityItem(6573) /*吕梁*/
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'M'
	                            ),
	                            this.renderCityItem(61615) /*马鞍山*/,
	                            this.renderCityItem(55) /*澳门*/,
	                            this.renderCityItem(61695) /*茂名*/,
	                            this.renderCityItem(61738) /*眉山*/,
	                            this.renderCityItem(2292) /*梅州*/,
	                            this.renderCityItem(312) /*绵阳*/,
	                            this.renderCityItem(123) /*牡丹江*/
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: classnames({ 'city_item': true, hide: this.state.section !== CITY_SECTION_KEY.N }) },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'N'
	                            ),
	                            this.renderCityItem(318) /*南昌*/,
	                            this.renderCityItem(319) /*南充*/,
	                            this.renderCityItem(9) /*南京*/,
	                            this.renderCityItem(321) /*南宁*/,
	                            this.renderCityItem(509) /*南平*/,
	                            this.renderCityItem(70) /*南通*/,
	                            this.renderCityItem(323) /*南阳*/,
	                            this.renderCityItem(2915) /*那曲*/,
	                            this.renderCityItem(892) /*内江*/,
	                            this.renderCityItem(317) /*宁波*/,
	                            this.renderCityItem(320) /*宁德*/,
	                            this.renderCityItem(1095) /*怒江*/
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'P'
	                            ),
	                            this.renderCityItem(324) /*盘锦*/,
	                            this.renderCityItem(61688) /*攀枝花*/,
	                            this.renderCityItem(6721) /*澎湖*/,
	                            this.renderCityItem(2455) /*平顶山*/,
	                            this.renderCityItem(325) /*平凉*/,
	                            this.renderCityItem(4611) /*屏东*/,
	                            this.renderCityItem(1127) /*萍乡*/,
	                            this.renderCityItem(3054) /*普洱*/,
	                            this.renderCityItem(552) /*莆田*/,
	                            this.renderCityItem(61820) /*濮阳*/
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'Q'
	                            ),
	                            this.renderCityItem(10075) /*黔东南*/,
	                            this.renderCityItem(9477) /*黔南*/,
	                            this.renderCityItem(6) /*青岛*/,
	                            this.renderCityItem(337) /*庆阳*/,
	                            this.renderCityItem(720) /*清远*/,
	                            this.renderCityItem(121) /*秦皇岛*/,
	                            this.renderCityItem(1176) /*钦州*/,
	                            this.renderCityItem(48) /*琼海*/,
	                            this.renderCityItem(49) /*琼中*/,
	                            this.renderCityItem(122) /*齐齐哈尔*/,
	                            this.renderCityItem(894) /*七台河*/,
	                            this.renderCityItem(339) /*泉州*/,
	                            this.renderCityItem(61576) /*曲靖*/,
	                            this.renderCityItem(340) /*衢州*/
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'R'
	                            ),
	                            this.renderCityItem(78) /*日喀则*/,
	                            this.renderCityItem(61696) /*日照*/
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'S'
	                            ),
	                            this.renderCityItem(366) /*三门峡*/,
	                            this.renderCityItem(367) /*三明*/,
	                            this.renderCityItem(39) /*三亚*/,
	                            this.renderCityItem(1) /*上海*/,
	                            this.renderCityItem(6499) /*商洛*/,
	                            this.renderCityItem(370) /*商丘*/,
	                            this.renderCityItem(343) /*上饶*/,
	                            this.renderCityItem(376) /*汕头*/,
	                            this.renderCityItem(734) /*汕尾*/,
	                            this.renderCityItem(353) /*韶关*/,
	                            this.renderCityItem(19) /*绍兴*/,
	                            this.renderCityItem(61701) /*邵阳*/,
	                            this.renderCityItem(380) /*沈阳*/,
	                            this.renderCityItem(26) /*深圳*/,
	                            this.renderCityItem(358) /*石家庄*/,
	                            this.renderCityItem(381) /*十堰*/,
	                            this.renderCityItem(3265) /*石嘴山*/,
	                            this.renderCityItem(911) /*双鸭山*/,
	                            this.renderCityItem(619) /*朔州*/,
	                            this.renderCityItem(369) /*四平*/,
	                            this.renderCityItem(606) /*松原*/,
	                            this.renderCityItem(61718) /*绥化*/,
	                            this.renderCityItem(669) /*遂宁*/,
	                            this.renderCityItem(61707) /*随州*/,
	                            this.renderCityItem(768) /*宿迁*/,
	                            this.renderCityItem(442) /*宿州*/,
	                            this.renderCityItem(11) /*苏州*/
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: classnames({ 'city_item': true, hide: this.state.section !== CITY_SECTION_KEY.T }) },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'T'
	                            ),
	                            this.renderCityItem(383) /*塔城*/,
	                            this.renderCityItem(382) /*泰安*/,
	                            this.renderCityItem(2925) /*台中*/,
	                            this.renderCityItem(2923) /*台南*/,
	                            this.renderCityItem(513) /*台北*/,
	                            this.renderCityItem(89) /*太原*/,
	                            this.renderCityItem(489) /*泰州*/,
	                            this.renderCityItem(488) /*台州*/,
	                            this.renderCityItem(395) /*唐山*/,
	                            this.renderCityItem(1572) /*桃园*/,
	                            this.renderCityItem(2) /*天津*/,
	                            this.renderCityItem(391) /*天水*/,
	                            this.renderCityItem(61639) /*铁岭*/,
	                            this.renderCityItem(97) /*铜川*/,
	                            this.renderCityItem(384) /*通化*/,
	                            this.renderCityItem(385) /*通辽*/,
	                            this.renderCityItem(386) /*铜陵*/,
	                            this.renderCityItem(10330) /*铜仁*/,
	                            this.renderCityItem(43) /*屯昌*/
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'U'
	                            ),
	                            this.renderCityItem(6467) /*乌兰察布*/
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'W'
	                            ),
	                            this.renderCityItem(41) /*万宁*/,
	                            this.renderCityItem(400) /*潍坊*/,
	                            this.renderCityItem(404) /*威海*/,
	                            this.renderCityItem(61621) /*渭南*/,
	                            this.renderCityItem(40) /*文昌*/,
	                            this.renderCityItem(9261) /*文山*/,
	                            this.renderCityItem(414) /*温州*/,
	                            this.renderCityItem(61723) /*乌海*/,
	                            this.renderCityItem(402) /*武汉*/,
	                            this.renderCityItem(403) /*芜湖*/,
	                            this.renderCityItem(35) /*乌鲁木齐*/,
	                            this.renderCityItem(549) /*武威*/,
	                            this.renderCityItem(10) /*无锡*/,
	                            this.renderCityItem(42) /*五指山*/,
	                            this.renderCityItem(6532) /*吴忠*/,
	                            this.renderCityItem(415) /*梧州*/
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'X'
	                            ),
	                            this.renderCityItem(22) /*厦门*/,
	                            this.renderCityItem(7) /*西安*/,
	                            this.renderCityItem(54) /*香港*/,
	                            this.renderCityItem(503) /*湘潭*/,
	                            this.renderCityItem(2982) /*湘西*/,
	                            this.renderCityItem(419) /*襄阳*/,
	                            this.renderCityItem(61528) /*咸宁*/,
	                            this.renderCityItem(94) /*咸阳*/,
	                            this.renderCityItem(786) /*孝感*/,
	                            this.renderCityItem(6604) /*新北市*/,
	                            this.renderCityItem(9319) /*兴安盟*/,
	                            this.renderCityItem(61538) /*邢台*/,
	                            this.renderCityItem(100) /*西宁*/,
	                            this.renderCityItem(429) /*新乡*/,
	                            this.renderCityItem(431) /*信阳*/,
	                            this.renderCityItem(507) /*新余*/,
	                            this.renderCityItem(434) /*忻州*/,
	                            this.renderCityItem(61597) /*宣城*/,
	                            this.renderCityItem(61685) /*许昌*/,
	                            this.renderCityItem(433) /*徐州*/
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: classnames({ 'city_item': true, hide: this.state.section !== CITY_SECTION_KEY.Y }) },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'Y'
	                            ),
	                            this.renderCityItem(2496) /*雅安*/,
	                            this.renderCityItem(93) /*延安*/,
	                            this.renderCityItem(9010) /*盐城*/,
	                            this.renderCityItem(61295) /*阳江*/,
	                            this.renderCityItem(61499) /*阳泉*/,
	                            this.renderCityItem(12) /*扬州*/,
	                            this.renderCityItem(453) /*烟台*/,
	                            this.renderCityItem(435) /*宜宾*/,
	                            this.renderCityItem(436) /*宜昌*/,
	                            this.renderCityItem(439) /*宜春*/,
	                            this.renderCityItem(438) /*伊春*/,
	                            this.renderCityItem(84) /*伊犁*/,
	                            this.renderCityItem(85) /*银川*/,
	                            this.renderCityItem(603) /*营口*/,
	                            this.renderCityItem(454) /*鹰潭*/,
	                            this.renderCityItem(61715) /*益阳*/,
	                            this.renderCityItem(61561) /*永州*/,
	                            this.renderCityItem(459) /*岳阳*/,
	                            this.renderCityItem(447) /*榆林*/,
	                            this.renderCityItem(61703) /*玉林*/,
	                            this.renderCityItem(115) /*运城*/,
	                            this.renderCityItem(3005) /*云浮*/,
	                            this.renderCityItem(6472) /*云林*/,
	                            this.renderCityItem(148) /*玉溪*/
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'city_item_in' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'city_item_letter' },
	                                'Z'
	                            ),
	                            this.renderCityItem(512) /*枣庄*/,
	                            this.renderCityItem(24) /*张家界*/,
	                            this.renderCityItem(470) /*张家口*/,
	                            this.renderCityItem(548) /*张掖*/,
	                            this.renderCityItem(479) /*漳州*/,
	                            this.renderCityItem(467) /*湛江*/,
	                            this.renderCityItem(472) /*肇庆*/,
	                            this.renderCityItem(474) /*昭通*/,
	                            this.renderCityItem(478) /*郑州*/,
	                            this.renderCityItem(13) /*镇江*/,
	                            this.renderCityItem(473) /*中山*/,
	                            this.renderCityItem(475) /*中卫*/,
	                            this.renderCityItem(2454) /*周口*/,
	                            this.renderCityItem(16) /*舟山*/,
	                            this.renderCityItem(27) /*珠海*/,
	                            this.renderCityItem(471) /*驻马店*/,
	                            this.renderCityItem(506) /*株洲*/,
	                            this.renderCityItem(462) /*淄博*/,
	                            this.renderCityItem(464) /*自贡*/,
	                            this.renderCityItem(856) /*资阳*/,
	                            this.renderCityItem(477) /*遵义*/
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return CityPanel;
	}(_react.Component);
	
	CityPanel.propTypes = {
	    open: _react.PropTypes.bool,
	    cities: _react.PropTypes.instanceOf(_immutable.List),
	    onSelectCity: _react.PropTypes.func,
	    openCityPanel: _react.PropTypes.func
	};
	
	exports.default = CityPanel;

/***/ },
/* 14 */
/*!***************************!*\
  !*** ./src/CityPanel.css ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./CityPanel.css */ 15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./CityPanel.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./CityPanel.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/*!******************************************!*\
  !*** ./~/css-loader!./src/CityPanel.css ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 10)();
	// imports
	
	
	// module
	exports.push([module.id, ".city_select_lhsl {\r\n    width: 408px;\r\n    padding: 10px;\r\n    border: 1px solid #999;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    z-index: 999;\r\n}\r\n\r\n.city_select_lhsl .close {\r\n    float: right;\r\n    width: 20px;\r\n    height: 20px;\r\n    color: #666;\r\n    text-align: center;\r\n    font: bold 16px/20px Simsun;\r\n}\r\n\r\n.city_select_lhsl .close:hover {\r\n    text-decoration: none;\r\n    color: #FFA800;\r\n}\r\n\r\n.city_select_lhsl .title {\r\n    margin-bottom: 10px;\r\n    color: #999;\r\n}\r\n\r\n.city_select_lhsl .tab_box {\r\n    width: 100%;\r\n    height: 22px;\r\n    margin-bottom: 6px;\r\n    margin-top: 0;\r\n    border-bottom: 2px solid #ccc;\r\n}\r\n\r\n.city_select_lhsl .tab_box li {\r\n    position: relative;\r\n    float: left;\r\n    display: inline;\r\n    margin-right: 2px;\r\n    line-height: 22px;\r\n    cursor: pointer;\r\n}\r\n\r\n.city_select_lhsl .tab_box li b {\r\n    display: none;\r\n}\r\n\r\n.city_select_lhsl .tab_box li span {\r\n    padding: 0 8px;\r\n}\r\n\r\n.city_select_lhsl .tab_box .hot_selected {\r\n    border-bottom: 2px solid #06c;\r\n    margin-bottom: -2px;\r\n    font-weight: bold;\r\n    color: #06c;\r\n}\r\n\r\n.city_select_lhsl .tab_box .hot_selected b {\r\n    position: absolute;\r\n    top: 23px;\r\n    left: 50%;\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    margin-left: -5px;\r\n    overflow: hidden;\r\n    font-size: 0;\r\n    line-height: 0;\r\n    border-color: #06c transparent transparent transparent;\r\n    border-style: solid dashed dashed dashed;\r\n    border-width: 5px;\r\n}\r\n\r\n.city_select_lhsl .city_item,\r\n.city_select_lhsl .search_history_box {\r\n    display: inline-block;\r\n    *zoom: 1;\r\n    overflow: hidden;\r\n}\r\n\r\n.city_select_lhsl .city_item {\r\n    width: 408px;\r\n}\r\n\r\n.city_select_lhsl .city_item a,\r\n.city_select_lhsl .search_history_box a {\r\n    float: left;\r\n    display: inline;\r\n    width: 52px;\r\n    height: 22px;\r\n    margin: 0 2px 2px 0;\r\n    padding-left: 8px;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    line-height: 22px;\r\n    color: #333;\r\n}\r\n\r\n.city_select_lhsl .city_item a:hover,\r\n.city_select_lhsl .search_history_box a:hover {\r\n    background-color: #2577E3;\r\n    text-decoration: none;\r\n    color: #fff;\r\n}\r\n.city_select_lhsl .city_item a.selected {\r\n    background-color: #2577E3;\r\n    text-decoration: none;\r\n    color: #fff;\r\n    border: 1px solid #2577E3;\r\n}\r\n\r\n.city_item .city_item_in {\r\n    width: 378px;\r\n    padding-left: 30px;\r\n    *zoom: 1;\r\n}\r\n\r\n.city_item .city_item_in:after,\r\n.city_select_lhsl .search_history_box:after {\r\n    display: block;\r\n    height: 0;\r\n    visibility: hidden;\r\n    overflow: hidden;\r\n    content: \".\";\r\n    clear: both;\r\n}\r\n\r\n.city_item .city_item_letter {\r\n    float: left;\r\n    width: 30px;\r\n    height: 22px;\r\n    margin-left: -30px;\r\n    line-height: 22px;\r\n    text-align: center;\r\n    color: #E56700;\r\n}\r\n\r\n.city_select_lhsl .sarch_history_title {\r\n    margin-bottom: 2px;\r\n    font-weight: bold;\r\n    color: #06c;\r\n}\r\n\r\n.city_select_lhsl .search_history_box {\r\n    margin-bottom: 6px;\r\n}\r\n\r\n.city_select_lhsl div.hide {\r\n    display: none\r\n}", ""]);
	
	// exports


/***/ },
/* 16 */
/*!*************************!*\
  !*** ./src/CityItem.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _immutable = __webpack_require__(/*! immutable */ 6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var classnames = __webpack_require__(/*! classnames */ 12);
	
	var CityItem = function (_Component) {
	    _inherits(CityItem, _Component);
	
	    function CityItem(props) {
	        _classCallCheck(this, CityItem);
	
	        return _possibleConstructorReturn(this, (CityItem.__proto__ || Object.getPrototypeOf(CityItem)).call(this, props));
	    }
	
	    _createClass(CityItem, [{
	        key: 'onSelectCity',
	        value: function onSelectCity() {
	            this.props.onSelectCity(this.props.city, this.props.index);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'a',
	                { data: this.props.city.get('cityNameEn') + '|' + this.props.city.get('cityNameCn') + '|' + this.props.city.get('cityCode'),
	                    className: classnames({ selected: this.props.city.get('checked') }),
	                    onClick: this.onSelectCity.bind(this) },
	                this.props.city.get('cityNameCn')
	            );
	        }
	    }]);
	
	    return CityItem;
	}(_react.Component);
	
	CityItem.propTypes = {
	    city: _react.PropTypes.instanceOf(_immutable.Map).isRequired,
	    index: _react.PropTypes.number.isRequired,
	    onSelectCity: _react.PropTypes.func.isRequired
	};
	
	exports.default = CityItem;

/***/ },
/* 17 */
/*!****************************!*\
  !*** ./src/CityPicker.css ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./CityPicker.css */ 18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./CityPicker.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./CityPicker.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/*!*******************************************!*\
  !*** ./~/css-loader!./src/CityPicker.css ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 10)();
	// imports
	
	
	// module
	exports.push([module.id, ".city_select_root .ant-select-dropdown-menu-root {\r\n    display: none;\r\n}", ""]);
	
	// exports


/***/ }
/******/ ])
});
;
//# sourceMappingURL=main.js.map