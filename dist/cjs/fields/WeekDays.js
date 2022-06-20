"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WeekDays;

var _react = _interopRequireWildcard(require("react"));

var _CustomSelect = _interopRequireDefault(require("../components/CustomSelect"));

var _locale = require("../locale");

var _utils = require("../utils");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function WeekDays(props) {
  var value = props.value,
      setValue = props.setValue,
      locale = props.locale,
      className = props.className,
      humanizeLabels = props.humanizeLabels,
      monthDays = props.monthDays,
      disabled = props.disabled,
      readOnly = props.readOnly,
      period = props.period,
      selectProps = _objectWithoutProperties(props, ["value", "setValue", "locale", "className", "humanizeLabels", "monthDays", "disabled", "readOnly", "period"]);

  var optionsList = locale.weekDays || _locale.DEFAULT_LOCALE_EN.weekDays;
  var noMonthDays = period === 'week' || !monthDays || monthDays.length === 0;
  var internalClassName = (0, _react.useMemo)(function () {
    var _classNames;

    return (0, _utils.classNames)((_classNames = {
      'react-js-cron-field': true,
      'react-js-cron-week-days': true,
      'react-js-cron-week-days-placeholder': !noMonthDays
    }, _defineProperty(_classNames, "".concat(className, "-field"), !!className), _defineProperty(_classNames, "".concat(className, "-week-days"), !!className), _classNames));
  }, [className, noMonthDays]);
  var localeJSON = JSON.stringify(locale);
  var placeholder = (0, _react.useMemo)(function () {
    if (noMonthDays) {
      return locale.emptyWeekDays || _locale.DEFAULT_LOCALE_EN.emptyWeekDays;
    }

    return locale.emptyWeekDaysShort || _locale.DEFAULT_LOCALE_EN.emptyWeekDaysShort;
  }, [noMonthDays, localeJSON]);
  var displayWeekDays = period === 'week' || !readOnly || value && value.length > 0 || (!value || value.length === 0) && (!monthDays || monthDays.length === 0);
  var monthDaysIsDisplayed = !readOnly || monthDays && monthDays.length > 0 || (!monthDays || monthDays.length === 0) && (!value || value.length === 0);
  return displayWeekDays ? _react["default"].createElement("div", {
    className: internalClassName
  }, locale.prefixWeekDays !== '' && (period === 'week' || !monthDaysIsDisplayed) && _react["default"].createElement("span", null, locale.prefixWeekDays || _locale.DEFAULT_LOCALE_EN.prefixWeekDays), locale.prefixWeekDaysForMonthAndYearPeriod !== '' && period !== 'week' && monthDaysIsDisplayed && _react["default"].createElement("span", null, locale.prefixWeekDaysForMonthAndYearPeriod || _locale.DEFAULT_LOCALE_EN.prefixWeekDaysForMonthAndYearPeriod), _react["default"].createElement(_CustomSelect["default"], _extends({
    placeholder: placeholder,
    optionsList: optionsList,
    grid: false,
    value: value,
    unit: _objectSpread(_objectSpread({}, _constants.UNITS[4]), {}, {
      alt: locale.altWeekDays || _locale.DEFAULT_LOCALE_EN.altWeekDays
    }),
    setValue: setValue,
    locale: locale,
    className: className,
    humanizeLabels: humanizeLabels,
    disabled: disabled,
    readOnly: readOnly,
    period: period
  }, selectProps))) : null;
}