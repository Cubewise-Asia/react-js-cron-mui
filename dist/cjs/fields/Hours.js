"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Hours;

var _react = _interopRequireWildcard(require("react"));

var _CustomSelect = _interopRequireDefault(require("../components/CustomSelect"));

var _locale = require("../locale");

var _utils = require("../utils");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Hours(props) {
  var value = props.value,
      setValue = props.setValue,
      locale = props.locale,
      className = props.className,
      disabled = props.disabled,
      readOnly = props.readOnly,
      leadingZero = props.leadingZero,
      clockFormat = props.clockFormat,
      period = props.period,
      selectProps = _objectWithoutProperties(props, ["value", "setValue", "locale", "className", "disabled", "readOnly", "leadingZero", "clockFormat", "period"]);

  var internalClassName = (0, _react.useMemo)(function () {
    var _classNames;

    return (0, _utils.classNames)((_classNames = {
      'react-js-cron-field': true,
      'react-js-cron-hours': true
    }, _defineProperty(_classNames, "".concat(className, "-field"), !!className), _defineProperty(_classNames, "".concat(className, "-hours"), !!className), _classNames));
  }, [className]);
  return _react["default"].createElement("div", {
    className: internalClassName
  }, locale.prefixHours !== '' && _react["default"].createElement("span", null, locale.prefixHours || _locale.DEFAULT_LOCALE_EN.prefixHours), _react["default"].createElement(_CustomSelect["default"], _extends({
    placeholder: locale.emptyHours || _locale.DEFAULT_LOCALE_EN.emptyHours,
    value: value,
    unit: _constants.UNITS[1],
    setValue: setValue,
    locale: locale,
    className: className,
    disabled: disabled,
    readOnly: readOnly,
    leadingZero: leadingZero,
    clockFormat: clockFormat,
    period: period
  }, selectProps)));
}