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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _keyevent = require('./keyevent');

var _keyevent2 = _interopRequireDefault(_keyevent);

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
      if (nextProps.defaultValue != this.props.defaultValue) {
        var newValue = nextProps.defaultValue;
      } else {
        var newValue = this.state.value || nextProps.defaultValue;
      }

      this.setState({
        filteredOptions: nextProps.options || this.state.filteredOptions,
        value: newValue
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
      var selectedIndex = showResultsList ? this.state.selectedIndex : undefined;

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
  styles: {}
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