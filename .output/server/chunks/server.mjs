import require$$0 from 'unenv/runtime/mock/proxy';
import { v as vue_cjs_prod$1, s as serverRenderer, r as require$$1 } from './renderer.mjs';
import { $fetch as $fetch$1 } from 'ohmyfetch';
import { joinURL, hasProtocol, isEqual } from 'ufo';
import { createHooks } from 'hookable';
import { getContext, executeAsync } from 'unctx';
import destr from 'destr';
import { createError as createError$1, sendRedirect, appendHeader } from 'h3';
import defu from 'defu';
import { createPopper } from '@popperjs/core';
import { CoreWarnCodes, CompileErrorCodes, DEFAULT_LOCALE, registerMessageResolver, resolveValue, registerLocaleFallbacker, fallbackWithLocaleChain, setDevToolsHook, createCompileError, updateFallbackLocale, NUMBER_FORMAT_OPTIONS_KEYS, DATETIME_FORMAT_OPTIONS_KEYS, setFallbackContext, createCoreContext, clearDateTimeFormat, clearNumberFormat, setAdditionalMeta, getFallbackContext, NOT_REOSLVED, parseTranslateArgs, translate, MISSING_RESOLVE_VALUE, parseDateTimeArgs, datetime, parseNumberArgs, number } from '@intlify/core-base';
import { parse, serialize } from 'cookie-es';
import { isEqual as isEqual$1 } from 'ohash';
import { stringify } from 'qs';
import { a as useRuntimeConfig$1 } from './node-server.mjs';
import 'stream';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';

var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}
function toDate$1(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule");
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}
function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate$1(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}
function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate$1(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  var dayOfMonth = date.getDate();
  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}
function addYears(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, amount * 12);
}
var commonjsGlobal$1 = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var freeGlobal$1 = typeof commonjsGlobal$1 == "object" && commonjsGlobal$1 && commonjsGlobal$1.Object === Object && commonjsGlobal$1;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$8 = freeGlobal || freeSelf || Function("return this")();
var _root = root$8;
var root$7 = _root;
var Symbol$7 = root$7.Symbol;
var _Symbol = Symbol$7;
var Symbol$6 = _Symbol;
var objectProto$h = Object.prototype;
var hasOwnProperty$e = objectProto$h.hasOwnProperty;
var nativeObjectToString$1 = objectProto$h.toString;
var symToStringTag$1 = Symbol$6 ? Symbol$6.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$e.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$g = Object.prototype;
var nativeObjectToString = objectProto$g.toString;
function objectToString$1$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1$1;
var Symbol$5 = _Symbol, getRawTag = _getRawTag, objectToString$2 = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$5 ? Symbol$5.toStringTag : void 0;
function baseGetTag$a(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString$2(value);
}
var _baseGetTag = baseGetTag$a;
function isObjectLike$d(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$d;
var baseGetTag$9 = _baseGetTag, isObjectLike$c = isObjectLike_1;
var boolTag$4 = "[object Boolean]";
function isBoolean$1(value) {
  return value === true || value === false || isObjectLike$c(value) && baseGetTag$9(value) == boolTag$4;
}
var isBoolean_1 = isBoolean$1;
var baseGetTag$8 = _baseGetTag, isObjectLike$b = isObjectLike_1;
var numberTag$4 = "[object Number]";
function isNumber$1(value) {
  return typeof value == "number" || isObjectLike$b(value) && baseGetTag$8(value) == numberTag$4;
}
var isNumber_1 = isNumber$1;
var isArray$e = Array.isArray;
var isArray_1 = isArray$e;
var baseGetTag$7 = _baseGetTag, isArray$d = isArray_1, isObjectLike$a = isObjectLike_1;
var stringTag$4 = "[object String]";
function isString$2(value) {
  return typeof value == "string" || !isArray$d(value) && isObjectLike$a(value) && baseGetTag$7(value) == stringTag$4;
}
var isString_1 = isString$2;
function isObject$d(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$d;
var baseGetTag$6 = _baseGetTag, isObject$c = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$3(value) {
  if (!isObject$c(value)) {
    return false;
  }
  var tag = baseGetTag$6(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var isFunction_1$1 = isFunction$3;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength$3(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
var isLength_1 = isLength$3;
var isFunction$2 = isFunction_1$1, isLength$2 = isLength_1;
function isArrayLike$6(value) {
  return value != null && isLength$2(value.length) && !isFunction$2(value);
}
var isArrayLike_1 = isArrayLike$6;
var isArrayLike$5 = isArrayLike_1, isObjectLike$9 = isObjectLike_1;
function isArrayLikeObject$1(value) {
  return isObjectLike$9(value) && isArrayLike$5(value);
}
var isArrayLikeObject_1 = isArrayLikeObject$1;
function isUndefined(value) {
  return value === void 0;
}
var isUndefined_1 = isUndefined;
var baseGetTag$5 = _baseGetTag, isObjectLike$8 = isObjectLike_1;
var dateTag$4 = "[object Date]";
function baseIsDate$1(value) {
  return isObjectLike$8(value) && baseGetTag$5(value) == dateTag$4;
}
var _baseIsDate = baseIsDate$1;
function baseUnary$4(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$4;
var _nodeUtil = { exports: {} };
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var baseIsDate = _baseIsDate, baseUnary$3 = _baseUnary, nodeUtil$3 = _nodeUtil.exports;
var nodeIsDate = nodeUtil$3 && nodeUtil$3.isDate;
var isDate$1 = nodeIsDate ? baseUnary$3(nodeIsDate) : baseIsDate;
var isDate_1 = isDate$1;
function baseClamp$1(number, lower, upper) {
  if (number === number) {
    if (upper !== void 0) {
      number = number <= upper ? number : upper;
    }
    if (lower !== void 0) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}
var _baseClamp = baseClamp$1;
var baseGetTag$4 = _baseGetTag, isObjectLike$7 = isObjectLike_1;
var symbolTag$3 = "[object Symbol]";
function isSymbol$4(value) {
  return typeof value == "symbol" || isObjectLike$7(value) && baseGetTag$4(value) == symbolTag$3;
}
var isSymbol_1 = isSymbol$4;
var isObject$b = isObject_1, isSymbol$3 = isSymbol_1;
var NAN = 0 / 0;
var reTrim = /^\s+|\s+$/g;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$1(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol$3(value)) {
    return NAN;
  }
  if (isObject$b(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$b(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, "");
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_1 = toNumber$1;
var baseClamp = _baseClamp, toNumber$2 = toNumber_1;
function clamp(number, lower, upper) {
  if (upper === void 0) {
    upper = lower;
    lower = void 0;
  }
  if (upper !== void 0) {
    upper = toNumber$2(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== void 0) {
    lower = toNumber$2(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp(toNumber$2(number), lower, upper);
}
var clamp_1 = clamp;
var isArray$c = isArray_1, isSymbol$2 = isSymbol_1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey$3(value, object) {
  if (isArray$c(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$2(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var _isKey = isKey$3;
var root$6 = _root;
var coreJsData$1 = root$6["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$2;
var isFunction$1$1 = isFunction_1$1, isMasked = _isMasked, isObject$a = isObject_1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$f = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$d = objectProto$f.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$d).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(value) {
  if (!isObject$a(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$7(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$7;
var getNative$6 = _getNative;
var nativeCreate$4 = getNative$6(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$e = Object.prototype;
var hasOwnProperty$c = objectProto$e.hasOwnProperty;
function hashGet$1(key) {
  var data2 = this.__data__;
  if (nativeCreate$2) {
    var result = data2[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$c.call(data2, key) ? data2[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$d = Object.prototype;
var hasOwnProperty$b = objectProto$d.hasOwnProperty;
function hashHas$1(key) {
  var data2 = this.__data__;
  return nativeCreate$1 ? data2[key] !== void 0 : hasOwnProperty$b.call(data2, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data2 = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data2[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$6(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$6;
var eq$5 = eq_1;
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$5(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data2 = this.__data__, index2 = assocIndexOf$3(data2, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data2.length - 1;
  if (index2 == lastIndex) {
    data2.pop();
  } else {
    splice.call(data2, index2, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data2 = this.__data__, index2 = assocIndexOf$2(data2, key);
  return index2 < 0 ? void 0 : data2[index2][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data2 = this.__data__, index2 = assocIndexOf(data2, key);
  if (index2 < 0) {
    ++this.size;
    data2.push([key, value]);
  } else {
    data2[index2][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var getNative$5 = _getNative, root$5 = _root;
var Map$3 = getNative$5(root$5, "Map");
var _Map = Map$3;
var Hash = _Hash, ListCache$3 = _ListCache, Map$2 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache$3)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map2, key) {
  var data2 = map2.__data__;
  return isKeyable(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data2 = getMapData(this, key), size = data2.size;
  data2.set(key, value);
  this.size += data2.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$3(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache$3.prototype.clear = mapCacheClear;
MapCache$3.prototype["delete"] = mapCacheDelete;
MapCache$3.prototype.get = mapCacheGet;
MapCache$3.prototype.has = mapCacheHas;
MapCache$3.prototype.set = mapCacheSet;
var _MapCache = MapCache$3;
var MapCache$2 = _MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize$1(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache$2)();
  return memoized;
}
memoize$1.Cache = MapCache$2;
var memoize_1 = memoize$1;
var memoize = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var _stringToPath = stringToPath$1;
function arrayMap$4(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array[index2], index2, array);
  }
  return result;
}
var _arrayMap = arrayMap$4;
var Symbol$4 = _Symbol, arrayMap$3 = _arrayMap, isArray$b = isArray_1, isSymbol$1 = isSymbol_1;
var INFINITY$1 = 1 / 0;
var symbolProto$2 = Symbol$4 ? Symbol$4.prototype : void 0, symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;
function baseToString$1(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$b(value)) {
    return arrayMap$3(value, baseToString$1) + "";
  }
  if (isSymbol$1(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var _baseToString = baseToString$1;
var baseToString = _baseToString;
function toString$1(value) {
  return value == null ? "" : baseToString(value);
}
var toString_1 = toString$1;
var isArray$a = isArray_1, isKey$2 = _isKey, stringToPath = _stringToPath, toString = toString_1;
function castPath$6(value, object) {
  if (isArray$a(value)) {
    return value;
  }
  return isKey$2(value, object) ? [value] : stringToPath(toString(value));
}
var _castPath = castPath$6;
var isSymbol$5 = isSymbol_1;
var INFINITY = 1 / 0;
function toKey$6(value) {
  if (typeof value == "string" || isSymbol$5(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var _toKey = toKey$6;
var castPath$5 = _castPath, toKey$5 = _toKey;
function baseGet$4(object, path) {
  path = castPath$5(path, object);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey$5(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
var _baseGet = baseGet$4;
var baseGet$3 = _baseGet;
function get$1(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet$3(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get$1;
var getNative$4 = _getNative;
var defineProperty$2 = function() {
  try {
    var func = getNative$4(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty = defineProperty$2;
var defineProperty$1 = _defineProperty;
function baseAssignValue$4(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$4;
var baseAssignValue$3 = _baseAssignValue, eq$4 = eq_1;
var objectProto$c = Object.prototype;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
function assignValue$3(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$a.call(object, key) && eq$4(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$3(object, key, value);
  }
}
var _assignValue = assignValue$3;
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$4(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$4;
var assignValue$2 = _assignValue, castPath$4 = _castPath, isIndex$3 = _isIndex, isObject$9 = isObject_1, toKey$4 = _toKey;
function baseSet$2(object, path, value, customizer) {
  if (!isObject$9(object)) {
    return object;
  }
  path = castPath$4(path, object);
  var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index2 < length) {
    var key = toKey$4(path[index2]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index2 != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject$9(objValue) ? objValue : isIndex$3(path[index2 + 1]) ? [] : {};
      }
    }
    assignValue$2(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var _baseSet = baseSet$2;
var baseSet$1 = _baseSet;
function set(object, path, value) {
  return object == null ? object : baseSet$1(object, path, value);
}
var set_1 = set;
function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index2];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor = createBaseFor$1;
var createBaseFor = _createBaseFor;
var baseFor$2 = createBaseFor();
var _baseFor = baseFor$2;
function baseTimes$1(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var _baseTimes = baseTimes$1;
var baseGetTag$3 = _baseGetTag, isObjectLike$6 = isObjectLike_1;
var argsTag$3 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$6(value) && baseGetTag$3(value) == argsTag$3;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$5 = isObjectLike_1;
var objectProto$b = Object.prototype;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$b.propertyIsEnumerable;
var isArguments$4 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$5(value) && hasOwnProperty$9.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments_1 = isArguments$4;
var isBuffer$4 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$4, isBuffer$4.exports);
var baseGetTag$2 = _baseGetTag, isLength$1 = isLength_1, isObjectLike$4 = isObjectLike_1;
var argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$2 = "[object Error]", funcTag$1 = "[object Function]", mapTag$6 = "[object Map]", numberTag$3 = "[object Number]", objectTag$4 = "[object Object]", regexpTag$3 = "[object RegExp]", setTag$6 = "[object Set]", stringTag$3 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$6] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$4] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$6] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$4(value) && isLength$1(value.length) && !!typedArrayTags[baseGetTag$2(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
var baseIsTypedArray = _baseIsTypedArray, baseUnary$2 = _baseUnary, nodeUtil$2 = _nodeUtil.exports;
var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;
var isTypedArray$3 = nodeIsTypedArray ? baseUnary$2(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$3;
var baseTimes = _baseTimes, isArguments$3 = isArguments_1, isArray$9 = isArray_1, isBuffer$3 = isBuffer$4.exports, isIndex$2 = _isIndex, isTypedArray$2 = isTypedArray_1;
var objectProto$a = Object.prototype;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
function arrayLikeKeys$2(value, inherited) {
  var isArr = isArray$9(value), isArg = !isArr && isArguments$3(value), isBuff = !isArr && !isArg && isBuffer$3(value), isType = !isArr && !isArg && !isBuff && isTypedArray$2(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$8.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex$2(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$2;
var objectProto$9 = Object.prototype;
function isPrototype$3(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$9;
  return value === proto;
}
var _isPrototype = isPrototype$3;
function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$2;
var overArg$1 = _overArg;
var nativeKeys$1 = overArg$1(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype$2 = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
function baseKeys$1(object) {
  if (!isPrototype$2(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$7.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var arrayLikeKeys$1 = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike$4 = isArrayLike_1;
function keys$6(object) {
  return isArrayLike$4(object) ? arrayLikeKeys$1(object) : baseKeys(object);
}
var keys_1 = keys$6;
var baseFor$1 = _baseFor, keys$5 = keys_1;
function baseForOwn$2(object, iteratee) {
  return object && baseFor$1(object, iteratee, keys$5);
}
var _baseForOwn = baseForOwn$2;
var ListCache$2 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$2();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data2 = this.__data__, result = data2["delete"](key);
  this.size = data2.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var ListCache$1 = _ListCache, Map$1 = _Map, MapCache$1 = _MapCache;
var LARGE_ARRAY_SIZE = 200;
function stackSet$1(key, value) {
  var data2 = this.__data__;
  if (data2 instanceof ListCache$1) {
    var pairs = data2.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data2.size;
      return this;
    }
    data2 = this.__data__ = new MapCache$1(pairs);
  }
  data2.set(key, value);
  this.size = data2.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$4(entries) {
  var data2 = this.__data__ = new ListCache(entries);
  this.size = data2.size;
}
Stack$4.prototype.clear = stackClear;
Stack$4.prototype["delete"] = stackDelete;
Stack$4.prototype.get = stackGet;
Stack$4.prototype.has = stackHas;
Stack$4.prototype.set = stackSet;
var _Stack = Stack$4;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$1;
var MapCache = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
function SetCache$1(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;
var _SetCache = SetCache$1;
function arraySome$2(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome$2;
function cacheHas$1(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas$1;
var SetCache = _SetCache, arraySome$1 = _arraySome, cacheHas = _cacheHas;
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index2 < arrLength) {
    var arrValue = array[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome$1(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var _equalArrays = equalArrays$2;
var root$4 = _root;
var Uint8Array$2 = root$4.Uint8Array;
var _Uint8Array = Uint8Array$2;
function mapToArray$2(map2) {
  var index2 = -1, result = Array(map2.size);
  map2.forEach(function(value, key) {
    result[++index2] = [key, value];
  });
  return result;
}
var _mapToArray = mapToArray$2;
function setToArray$1(set2) {
  var index2 = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var _setToArray = setToArray$1;
var Symbol$3 = _Symbol, Uint8Array$1 = _Uint8Array, eq$3 = eq_1, equalArrays$1 = _equalArrays, mapToArray$1 = _mapToArray, setToArray = _setToArray;
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", mapTag$5 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]";
var symbolProto$1 = Symbol$3 ? Symbol$3.prototype : void 0, symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$3:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag$2:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag$2:
    case dateTag$2:
    case numberTag$2:
      return eq$3(+object, +other);
    case errorTag$1:
      return object.name == other.name && object.message == other.message;
    case regexpTag$2:
    case stringTag$2:
      return object == other + "";
    case mapTag$5:
      var convert = mapToArray$1;
    case setTag$5:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag$2:
      if (symbolValueOf$1) {
        return symbolValueOf$1.call(object) == symbolValueOf$1.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag$1;
function arrayPush$3(array, values) {
  var index2 = -1, length = values.length, offset = array.length;
  while (++index2 < length) {
    array[offset + index2] = values[index2];
  }
  return array;
}
var _arrayPush = arrayPush$3;
var arrayPush$2 = _arrayPush, isArray$8 = isArray_1;
function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$8(object) ? result : arrayPush$2(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$2;
function arrayFilter$1(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array[index2];
    if (predicate(value, index2, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$1;
function stubArray$2() {
  return [];
}
var stubArray_1 = stubArray$2;
var arrayFilter = _arrayFilter, stubArray$1 = stubArray_1;
var objectProto$7 = Object.prototype;
var propertyIsEnumerable = objectProto$7.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var _getSymbols = getSymbols$3;
var baseGetAllKeys$1 = _baseGetAllKeys, getSymbols$2 = _getSymbols, keys$4 = keys_1;
function getAllKeys$2(object) {
  return baseGetAllKeys$1(object, keys$4, getSymbols$2);
}
var _getAllKeys = getAllKeys$2;
var getAllKeys$1 = _getAllKeys;
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$6 = Object.prototype;
var hasOwnProperty$6 = objectProto$6.hasOwnProperty;
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys$1(object), objLength = objProps.length, othProps = getAllKeys$1(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key = objProps[index2];
    if (!(isPartial ? key in other : hasOwnProperty$6.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key = objProps[index2];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var _equalObjects = equalObjects$1;
var getNative$3 = _getNative, root$3 = _root;
var DataView$1 = getNative$3(root$3, "DataView");
var _DataView = DataView$1;
var getNative$2 = _getNative, root$2 = _root;
var Promise$2 = getNative$2(root$2, "Promise");
var _Promise = Promise$2;
var getNative$1 = _getNative, root$1 = _root;
var Set$2 = getNative$1(root$1, "Set");
var _Set = Set$2;
var getNative = _getNative, root = _root;
var WeakMap$1 = getNative(root, "WeakMap");
var _WeakMap = WeakMap$1;
var DataView = _DataView, Map$4 = _Map, Promise$1 = _Promise, Set$1 = _Set, WeakMap = _WeakMap, baseGetTag$1 = _baseGetTag, toSource = _toSource;
var mapTag$4 = "[object Map]", objectTag$3 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$2 = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$4), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap);
var getTag$5 = baseGetTag$1;
if (DataView && getTag$5(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map$4 && getTag$5(new Map$4()) != mapTag$4 || Promise$1 && getTag$5(Promise$1.resolve()) != promiseTag || Set$1 && getTag$5(new Set$1()) != setTag$4 || WeakMap && getTag$5(new WeakMap()) != weakMapTag$1) {
  getTag$5 = function(value) {
    var result = baseGetTag$1(value), Ctor = result == objectTag$3 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;
        case mapCtorString:
          return mapTag$4;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$4;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var _getTag = getTag$5;
var Stack$3 = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag$4 = _getTag, isArray$7 = isArray_1, isBuffer$2 = isBuffer$4.exports, isTypedArray$1 = isTypedArray_1;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", objectTag$2 = "[object Object]";
var objectProto$5 = Object.prototype;
var hasOwnProperty$5 = objectProto$5.hasOwnProperty;
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$7(object), othIsArr = isArray$7(other), objTag = objIsArr ? arrayTag$1 : getTag$4(object), othTag = othIsArr ? arrayTag$1 : getTag$4(other);
  objTag = objTag == argsTag$1 ? objectTag$2 : objTag;
  othTag = othTag == argsTag$1 ? objectTag$2 : othTag;
  var objIsObj = objTag == objectTag$2, othIsObj = othTag == objectTag$2, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$2(object)) {
    if (!isBuffer$2(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$3());
    return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty$5.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$5.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack$3());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$3());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep$1;
var baseIsEqualDeep = _baseIsEqualDeep, isObjectLike$3 = isObjectLike_1;
function baseIsEqual$2(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike$3(value) && !isObjectLike$3(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$2, stack);
}
var _baseIsEqual = baseIsEqual$2;
var Stack$2 = _Stack, baseIsEqual$1 = _baseIsEqual;
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch$1(object, source, matchData, customizer) {
  var index2 = matchData.length, length = index2, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index2--) {
    var data2 = matchData[index2];
    if (noCustomizer && data2[2] ? data2[1] !== object[data2[0]] : !(data2[0] in object)) {
      return false;
    }
  }
  while (++index2 < length) {
    data2 = matchData[index2];
    var key = data2[0], objValue = object[key], srcValue = data2[1];
    if (noCustomizer && data2[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack$2();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch$1;
var isObject$8 = isObject_1;
function isStrictComparable$2(value) {
  return value === value && !isObject$8(value);
}
var _isStrictComparable = isStrictComparable$2;
var isStrictComparable$1 = _isStrictComparable, keys$3 = keys_1;
function getMatchData$1(object) {
  var result = keys$3(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable$1(value)];
  }
  return result;
}
var _getMatchData = getMatchData$1;
function matchesStrictComparable$2(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var _matchesStrictComparable = matchesStrictComparable$2;
var baseIsMatch = _baseIsMatch, getMatchData = _getMatchData, matchesStrictComparable$1 = _matchesStrictComparable;
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
var _baseMatches = baseMatches$1;
function baseHasIn$1(object, key) {
  return object != null && key in Object(object);
}
var _baseHasIn = baseHasIn$1;
var castPath$3 = _castPath, isArguments$2 = isArguments_1, isArray$6 = isArray_1, isIndex$1 = _isIndex, isLength = isLength_1, toKey$3 = _toKey;
function hasPath$2(object, path, hasFunc) {
  path = castPath$3(path, object);
  var index2 = -1, length = path.length, result = false;
  while (++index2 < length) {
    var key = toKey$3(path[index2]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index2 != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex$1(key, length) && (isArray$6(object) || isArguments$2(object));
}
var _hasPath = hasPath$2;
var baseHasIn = _baseHasIn, hasPath$1 = _hasPath;
function hasIn$2(object, path) {
  return object != null && hasPath$1(object, path, baseHasIn);
}
var hasIn_1 = hasIn$2;
var baseIsEqual = _baseIsEqual, get = get_1, hasIn$1 = hasIn_1, isKey$1 = _isKey, isStrictComparable = _isStrictComparable, matchesStrictComparable = _matchesStrictComparable, toKey$2 = _toKey;
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$1(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$2(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn$1(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
var _baseMatchesProperty = baseMatchesProperty$1;
function identity$3(value) {
  return value;
}
var identity_1 = identity$3;
function baseProperty$1(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var _baseProperty = baseProperty$1;
var baseGet$2 = _baseGet;
function basePropertyDeep$1(path) {
  return function(object) {
    return baseGet$2(object, path);
  };
}
var _basePropertyDeep = basePropertyDeep$1;
var baseProperty = _baseProperty, basePropertyDeep = _basePropertyDeep, isKey = _isKey, toKey$1 = _toKey;
function property$1(path) {
  return isKey(path) ? baseProperty(toKey$1(path)) : basePropertyDeep(path);
}
var property_1 = property$1;
var baseMatches = _baseMatches, baseMatchesProperty = _baseMatchesProperty, identity$2 = identity_1, isArray$5 = isArray_1, property = property_1;
function baseIteratee$3(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity$2;
  }
  if (typeof value == "object") {
    return isArray$5(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
var _baseIteratee = baseIteratee$3;
var baseAssignValue$2 = _baseAssignValue, baseForOwn$1 = _baseForOwn, baseIteratee$2 = _baseIteratee;
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee$2(iteratee);
  baseForOwn$1(object, function(value, key, object2) {
    baseAssignValue$2(result, key, iteratee(value, key, object2));
  });
  return result;
}
var mapValues_1 = mapValues;
var arrayMap$2 = _arrayMap;
function baseToPairs$1(object, props) {
  return arrayMap$2(props, function(key) {
    return [key, object[key]];
  });
}
var _baseToPairs = baseToPairs$1;
function setToPairs$1(set2) {
  var index2 = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index2] = [value, value];
  });
  return result;
}
var _setToPairs = setToPairs$1;
var baseToPairs = _baseToPairs, getTag$3 = _getTag, mapToArray = _mapToArray, setToPairs = _setToPairs;
var mapTag$3 = "[object Map]", setTag$3 = "[object Set]";
function createToPairs$1(keysFunc) {
  return function(object) {
    var tag = getTag$3(object);
    if (tag == mapTag$3) {
      return mapToArray(object);
    }
    if (tag == setTag$3) {
      return setToPairs(object);
    }
    return baseToPairs(object, keysFunc(object));
  };
}
var _createToPairs = createToPairs$1;
var createToPairs = _createToPairs, keys$2 = keys_1;
var toPairs = createToPairs(keys$2);
var toPairs_1 = toPairs;
function apply$2(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$2;
var apply$1 = _apply;
var nativeMax = Math.max;
function overRest$2(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index2 < length) {
      array[index2] = args[start + index2];
    }
    index2 = -1;
    var otherArgs = Array(start + 1);
    while (++index2 < start) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start] = transform(array);
    return apply$1(func, this, otherArgs);
  };
}
var _overRest = overRest$2;
function constant$1(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant$1;
var constant = constant_1, defineProperty = _defineProperty, identity$1 = identity_1;
var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var _baseSetToString = baseSetToString$1;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$1(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$1;
var baseSetToString = _baseSetToString, shortOut = _shortOut;
var setToString$2 = shortOut(baseSetToString);
var _setToString = setToString$2;
var identity = identity_1, overRest$1 = _overRest, setToString$1 = _setToString;
function baseRest$3(func, start) {
  return setToString$1(overRest$1(func, start, identity), func + "");
}
var _baseRest = baseRest$3;
var eq$2 = eq_1, isArrayLike$3 = isArrayLike_1, isIndex = _isIndex, isObject$7 = isObject_1;
function isIterateeCall$3(value, index2, object) {
  if (!isObject$7(object)) {
    return false;
  }
  var type = typeof index2;
  if (type == "number" ? isArrayLike$3(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
    return eq$2(object[index2], value);
  }
  return false;
}
var _isIterateeCall = isIterateeCall$3;
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$6 = isObject_1, isPrototype$1 = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject$6(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype$1(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$4.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike$2 = isArrayLike_1;
function keysIn$6(object) {
  return isArrayLike$2(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$6;
var baseRest$2 = _baseRest, eq$1 = eq_1, isIterateeCall$2 = _isIterateeCall, keysIn$5 = keysIn_1;
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
var defaults = baseRest$2(function(object, sources) {
  object = Object(object);
  var index2 = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : void 0;
  if (guard && isIterateeCall$2(sources[0], sources[1], guard)) {
    length = 1;
  }
  while (++index2 < length) {
    var source = sources[index2];
    var props = keysIn$5(source);
    var propsIndex = -1;
    var propsLength = props.length;
    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];
      if (value === void 0 || eq$1(value, objectProto$3[key]) && !hasOwnProperty$3.call(object, key)) {
        object[key] = source[key];
      }
    }
  }
  return object;
});
var defaults_1 = defaults;
var baseAssignValue$1 = _baseAssignValue, eq = eq_1;
function assignMergeValue$2(object, key, value) {
  if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue$1(object, key, value);
  }
}
var _assignMergeValue = assignMergeValue$2;
var _cloneBuffer = { exports: {} };
(function(module, exports) {
  var root2 = _root;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBuffer.exports);
var Uint8Array2 = _Uint8Array;
function cloneArrayBuffer$3(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$3;
var cloneArrayBuffer$2 = _cloneArrayBuffer;
function cloneTypedArray$2(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$2;
function copyArray$2(source, array) {
  var index2 = -1, length = source.length;
  array || (array = Array(length));
  while (++index2 < length) {
    array[index2] = source[index2];
  }
  return array;
}
var _copyArray = copyArray$2;
var isObject$5 = isObject_1;
var objectCreate = Object.create;
var baseCreate$1 = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$5(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$1;
var overArg = _overArg;
var getPrototype$3 = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$3;
var baseCreate = _baseCreate, getPrototype$2 = _getPrototype, isPrototype = _isPrototype;
function initCloneObject$2(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype$2(object)) : {};
}
var _initCloneObject = initCloneObject$2;
var baseGetTag = _baseGetTag, getPrototype$1 = _getPrototype, isObjectLike$2 = isObjectLike_1;
var objectTag$1 = "[object Object]";
var funcProto = Function.prototype, objectProto$2 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject$2(value) {
  if (!isObjectLike$2(value) || baseGetTag(value) != objectTag$1) {
    return false;
  }
  var proto = getPrototype$1(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$2.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_1 = isPlainObject$2;
function safeGet$2(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var _safeGet = safeGet$2;
var assignValue$1 = _assignValue, baseAssignValue = _baseAssignValue;
function copyObject$6(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length = props.length;
  while (++index2 < length) {
    var key = props[index2];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue$1(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$6;
var copyObject$5 = _copyObject, keysIn$4 = keysIn_1;
function toPlainObject$1(value) {
  return copyObject$5(value, keysIn$4(value));
}
var toPlainObject_1 = toPlainObject$1;
var assignMergeValue$1 = _assignMergeValue, cloneBuffer$1 = _cloneBuffer.exports, cloneTypedArray$1 = _cloneTypedArray, copyArray$1 = _copyArray, initCloneObject$1 = _initCloneObject, isArguments$1 = isArguments_1, isArray$4 = isArray_1, isArrayLikeObject = isArrayLikeObject_1, isBuffer$1 = isBuffer$4.exports, isFunction$4 = isFunction_1$1, isObject$4 = isObject_1, isPlainObject$1$1 = isPlainObject_1, isTypedArray = isTypedArray_1, safeGet$1 = _safeGet, toPlainObject = toPlainObject_1;
function baseMergeDeep$1(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet$1(object, key), srcValue = safeGet$1(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue$1(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray$4(srcValue), isBuff = !isArr && isBuffer$1(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray$4(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray$1(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer$1(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray$1(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject$1$1(srcValue) || isArguments$1(srcValue)) {
      newValue = objValue;
      if (isArguments$1(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject$4(objValue) || isFunction$4(objValue)) {
        newValue = initCloneObject$1(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue$1(object, key, newValue);
}
var _baseMergeDeep = baseMergeDeep$1;
var Stack$1 = _Stack, assignMergeValue = _assignMergeValue, baseFor = _baseFor, baseMergeDeep = _baseMergeDeep, isObject$3 = isObject_1, keysIn$3 = keysIn_1, safeGet = _safeGet;
function baseMerge$2(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack$1());
    if (isObject$3(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge$2, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn$3);
}
var _baseMerge = baseMerge$2;
var baseMerge$1 = _baseMerge, isObject$2 = isObject_1;
function customDefaultsMerge$1(objValue, srcValue, key, object, source, stack) {
  if (isObject$2(objValue) && isObject$2(srcValue)) {
    stack.set(srcValue, objValue);
    baseMerge$1(objValue, srcValue, void 0, customDefaultsMerge$1, stack);
    stack["delete"](srcValue);
  }
  return objValue;
}
var _customDefaultsMerge = customDefaultsMerge$1;
var baseRest$1 = _baseRest, isIterateeCall$1 = _isIterateeCall;
function createAssigner$1(assigner) {
  return baseRest$1(function(object, sources) {
    var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall$1(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index2 < length) {
      var source = sources[index2];
      if (source) {
        assigner(object, source, index2, customizer);
      }
    }
    return object;
  });
}
var _createAssigner = createAssigner$1;
var baseMerge = _baseMerge, createAssigner = _createAssigner;
var mergeWith$1 = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});
var mergeWith_1 = mergeWith$1;
var apply$3 = _apply, baseRest = _baseRest, customDefaultsMerge = _customDefaultsMerge, mergeWith = mergeWith_1;
var defaultsDeep = baseRest(function(args) {
  args.push(void 0, customDefaultsMerge);
  return apply$3(mergeWith, void 0, args);
});
var defaultsDeep_1 = defaultsDeep;
var baseGet$1 = _baseGet, baseSet = _baseSet, castPath$2 = _castPath;
function basePickBy$1(object, paths, predicate) {
  var index2 = -1, length = paths.length, result = {};
  while (++index2 < length) {
    var path = paths[index2], value = baseGet$1(object, path);
    if (predicate(value, path)) {
      baseSet(result, castPath$2(path, object), value);
    }
  }
  return result;
}
var _basePickBy = basePickBy$1;
var basePickBy = _basePickBy, hasIn = hasIn_1;
function basePick$1(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}
var _basePick = basePick$1;
var Symbol$2 = _Symbol, isArguments = isArguments_1, isArray$3 = isArray_1;
var spreadableSymbol = Symbol$2 ? Symbol$2.isConcatSpreadable : void 0;
function isFlattenable$1(value) {
  return isArray$3(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var _isFlattenable = isFlattenable$1;
var arrayPush$1 = _arrayPush, isFlattenable = _isFlattenable;
function baseFlatten$1(array, depth, predicate, isStrict, result) {
  var index2 = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index2 < length) {
    var value = array[index2];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten$1(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush$1(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var _baseFlatten = baseFlatten$1;
var baseFlatten = _baseFlatten;
function flatten$1(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
var flatten_1 = flatten$1;
var flatten = flatten_1, overRest = _overRest, setToString = _setToString;
function flatRest$2(func) {
  return setToString(overRest(func, void 0, flatten), func + "");
}
var _flatRest = flatRest$2;
var basePick = _basePick, flatRest$1 = _flatRest;
var pick = flatRest$1(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});
var pick_1 = pick;
function arrayEach$1(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (iteratee(array[index2], index2, array) === false) {
      break;
    }
  }
  return array;
}
var _arrayEach = arrayEach$1;
var copyObject$4 = _copyObject, keys$1 = keys_1;
function baseAssign$1(object, source) {
  return object && copyObject$4(source, keys$1(source), object);
}
var _baseAssign = baseAssign$1;
var copyObject$3 = _copyObject, keysIn$2 = keysIn_1;
function baseAssignIn$1(object, source) {
  return object && copyObject$3(source, keysIn$2(source), object);
}
var _baseAssignIn = baseAssignIn$1;
var copyObject$2 = _copyObject, getSymbols$1 = _getSymbols;
function copySymbols$1(source, object) {
  return copyObject$2(source, getSymbols$1(source), object);
}
var _copySymbols = copySymbols$1;
var arrayPush = _arrayPush, getPrototype = _getPrototype, getSymbols = _getSymbols, stubArray = stubArray_1;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn$2;
var copyObject$1 = _copyObject, getSymbolsIn$1 = _getSymbolsIn;
function copySymbolsIn$1(source, object) {
  return copyObject$1(source, getSymbolsIn$1(source), object);
}
var _copySymbolsIn = copySymbolsIn$1;
var baseGetAllKeys = _baseGetAllKeys, getSymbolsIn = _getSymbolsIn, keysIn$1 = keysIn_1;
function getAllKeysIn$2(object) {
  return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn$2;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1$1 = objectProto$1.hasOwnProperty;
function initCloneArray$1(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$1$1.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var _initCloneArray = initCloneArray$1;
var cloneArrayBuffer$1 = _cloneArrayBuffer;
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$1(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView = cloneDataView$1;
var reFlags = /\w*$/;
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var _cloneRegExp = cloneRegExp$1;
var Symbol$1 = _Symbol;
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol$1(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var _cloneSymbol = cloneSymbol$1;
var cloneArrayBuffer = _cloneArrayBuffer, cloneDataView = _cloneDataView, cloneRegExp = _cloneRegExp, cloneSymbol = _cloneSymbol, cloneTypedArray = _cloneTypedArray;
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag$1(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);
    case dataViewTag$1:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);
    case regexpTag$1:
      return cloneRegExp(object);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object);
  }
}
var _initCloneByTag = initCloneByTag$1;
var getTag$2 = _getTag, isObjectLike$1 = isObjectLike_1;
var mapTag$1 = "[object Map]";
function baseIsMap$1(value) {
  return isObjectLike$1(value) && getTag$2(value) == mapTag$1;
}
var _baseIsMap = baseIsMap$1;
var baseIsMap = _baseIsMap, baseUnary$1 = _baseUnary, nodeUtil$1 = _nodeUtil.exports;
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;
var isMap_1 = isMap$1;
var getTag$1 = _getTag, isObjectLike = isObjectLike_1;
var setTag$1 = "[object Set]";
function baseIsSet$1(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$1;
}
var _baseIsSet = baseIsSet$1;
var baseIsSet = _baseIsSet, baseUnary = _baseUnary, nodeUtil = _nodeUtil.exports;
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet_1 = isSet$1;
var Stack = _Stack, arrayEach = _arrayEach, assignValue = _assignValue, baseAssign = _baseAssign, baseAssignIn = _baseAssignIn, cloneBuffer = _cloneBuffer.exports, copyArray = _copyArray, copySymbols = _copySymbols, copySymbolsIn = _copySymbolsIn, getAllKeys = _getAllKeys, getAllKeysIn$1 = _getAllKeysIn, getTag = _getTag, initCloneArray = _initCloneArray, initCloneByTag = _initCloneByTag, initCloneObject = _initCloneObject, isArray$2 = isArray_1, isBuffer = isBuffer$4.exports, isMap$2 = isMap_1, isObject$1$1 = isObject_1, isSet$2 = isSet_1, keys = keys_1, keysIn = keysIn_1;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG$1 = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone$1(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG$1, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject$1$1(value)) {
    return value;
  }
  var isArr = isArray$2(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet$2(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap$2(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn$1 : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var _baseClone = baseClone$1;
function last$1(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
var last_1 = last$1;
function baseSlice$1(array, start, end) {
  var index2 = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index2 < length) {
    result[index2] = array[index2 + start];
  }
  return result;
}
var _baseSlice = baseSlice$1;
var baseGet = _baseGet, baseSlice = _baseSlice;
function parent$1(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}
var _parent = parent$1;
var castPath$1 = _castPath, last = last_1, parent = _parent, toKey = _toKey;
function baseUnset$1(object, path) {
  path = castPath$1(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}
var _baseUnset = baseUnset$1;
var isPlainObject$3 = isPlainObject_1;
function customOmitClone$1(value) {
  return isPlainObject$3(value) ? void 0 : value;
}
var _customOmitClone = customOmitClone$1;
var arrayMap$1 = _arrayMap, baseClone = _baseClone, baseUnset = _baseUnset, castPath = _castPath, copyObject = _copyObject, customOmitClone = _customOmitClone, flatRest = _flatRest, getAllKeysIn = _getAllKeysIn;
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap$1(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});
var omit_1 = omit;
var objectProto = Object.prototype;
var hasOwnProperty$f = objectProto.hasOwnProperty;
function baseHas$1(object, key) {
  return object != null && hasOwnProperty$f.call(object, key);
}
var _baseHas = baseHas$1;
var baseHas = _baseHas, hasPath = _hasPath;
function has$1(object, path) {
  return object != null && hasPath(object, path, baseHas);
}
var has_1 = has$1;
var isArrayLike$1 = isArrayLike_1;
function createBaseEach$1(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike$1(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index2 = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index2-- : ++index2 < length) {
      if (iteratee(iterable[index2], index2, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var _createBaseEach = createBaseEach$1;
var baseForOwn = _baseForOwn, createBaseEach = _createBaseEach;
var baseEach$2 = createBaseEach(baseForOwn);
var _baseEach = baseEach$2;
function head(array) {
  return array && array.length ? array[0] : void 0;
}
var head_1 = head;
var baseEach = _baseEach;
function baseSome$1(collection, predicate) {
  var result;
  baseEach(collection, function(value, index2, collection2) {
    result = predicate(value, index2, collection2);
    return !result;
  });
  return !!result;
}
var _baseSome = baseSome$1;
var arraySome = _arraySome, baseIteratee = _baseIteratee, baseSome = _baseSome, isArray$f = isArray_1, isIterateeCall = _isIterateeCall;
function some$1(collection, predicate, guard) {
  var func = isArray$f(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = void 0;
  }
  return func(collection, baseIteratee(predicate));
}
var some_1 = some$1;
const getType = (value) => Object.prototype.toString.call(value).slice(8, -1);
const isDate$2 = (value) => isDate_1(value) && !isNaN(value.getTime());
const isObject$e = (value) => getType(value) === "Object";
const has = has_1;
const hasAny = (obj, props) => some_1(props, (p) => has_1(obj, p));
const some = some_1;
const pad = (val, len, char = "0") => {
  val = val !== null && val !== void 0 ? String(val) : "";
  len = len || 2;
  while (val.length < len) {
    val = `${char}${val}`;
  }
  return val;
};
const mergeEvents = (...args) => {
  const result = {};
  args.forEach((e) => Object.entries(e).forEach(([key, value]) => {
    if (!result[key]) {
      result[key] = value;
    } else if (isArrayLikeObject_1(result[key])) {
      result[key].push(value);
    } else {
      result[key] = [result[key], value];
    }
  }));
  return result;
};
const pageIsValid = (page) => !!(page && page.month && page.year);
const pageIsBeforePage = (page, comparePage) => {
  if (!pageIsValid(page) || !pageIsValid(comparePage))
    return false;
  if (page.year === comparePage.year)
    return page.month < comparePage.month;
  return page.year < comparePage.year;
};
const pageIsAfterPage = (page, comparePage) => {
  if (!pageIsValid(page) || !pageIsValid(comparePage))
    return false;
  if (page.year === comparePage.year)
    return page.month > comparePage.month;
  return page.year > comparePage.year;
};
const pageIsBetweenPages = (page, fromPage, toPage) => (page || false) && !pageIsBeforePage(page, fromPage) && !pageIsAfterPage(page, toPage);
const pageIsEqualToPage = (aPage, bPage) => {
  if (!aPage && bPage)
    return false;
  if (aPage && !bPage)
    return false;
  if (!aPage && !bPage)
    return true;
  return aPage.month === bPage.month && aPage.year === bPage.year;
};
const addPages = ({ month, year }, count) => {
  const incr = count > 0 ? 1 : -1;
  for (let i = 0; i < Math.abs(count); i++) {
    month += incr;
    if (month > 12) {
      month = 1;
      year++;
    } else if (month < 1) {
      month = 12;
      year--;
    }
  }
  return {
    month,
    year
  };
};
const pageRangeToArray = (from, to) => {
  if (!pageIsValid(from) || !pageIsValid(to))
    return [];
  const result = [];
  while (!pageIsAfterPage(from, to)) {
    result.push(from);
    from = addPages(from, 1);
  }
  return result;
};
function datesAreEqual(a, b) {
  const aIsDate = isDate$2(a);
  const bIsDate = isDate$2(b);
  if (!aIsDate && !bIsDate)
    return true;
  if (aIsDate !== bIsDate)
    return false;
  return a.getTime() === b.getTime();
}
const arrayHasItems = (array) => isArrayLikeObject_1(array) && array.length > 0;
const mixinOptionalProps = (source, target, props) => {
  const assigned = [];
  props.forEach((p) => {
    const name = p.name || p.toString();
    const mixin = p.mixin;
    const validate = p.validate;
    if (Object.prototype.hasOwnProperty.call(source, name)) {
      const value = validate ? validate(source[name]) : source[name];
      target[name] = mixin && isObject$e(value) ? __spreadValues$1(__spreadValues$1({}, mixin), value) : value;
      assigned.push(name);
    }
  });
  return {
    target,
    assigned: assigned.length ? assigned : null
  };
};
const on = (element, event, handler, opts) => {
  if (element && event && handler) {
    element.addEventListener(event, handler, opts);
  }
};
const off = (element, event, handler, opts) => {
  if (element && event) {
    element.removeEventListener(event, handler, opts);
  }
};
const elementContains = (element, child) => !!element && !!child && (element === child || element.contains(child));
const onSpaceOrEnter = (event, handler) => {
  if (event.key === " " || event.key === "Enter") {
    handler(event);
    event.preventDefault();
  }
};
const createGuid = () => {
  function S4() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
};
function hash(str) {
  let hashcode = 0;
  let i = 0;
  let chr;
  if (str.length === 0)
    return hashcode;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hashcode = (hashcode << 5) - hashcode + chr;
    hashcode |= 0;
  }
  return hashcode;
}
var _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$a$1 = {
  name: "CustomTransition",
  emits: [
    "before-enter",
    "before-transition",
    "after-enter",
    "after-transition"
  ],
  props: {
    name: String,
    appear: Boolean
  },
  computed: {
    name_() {
      return `vc-${this.name || "none"}`;
    }
  },
  methods: {
    beforeEnter(el) {
      this.$emit("before-enter", el);
      this.$emit("before-transition", el);
    },
    afterEnter(el) {
      this.$emit("after-enter", el);
      this.$emit("after-transition", el);
    }
  }
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return vue_cjs_prod$1.openBlock(), vue_cjs_prod$1.createBlock(vue_cjs_prod$1.Transition, {
    name: $options.name_,
    appear: $props.appear,
    onBeforeEnter: $options.beforeEnter,
    onAfterEnter: $options.afterEnter
  }, {
    default: vue_cjs_prod$1.withCtx(() => [
      vue_cjs_prod$1.renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["name", "appear", "onBeforeEnter", "onAfterEnter"]);
}
var CustomTransition = /* @__PURE__ */ _export_sfc$1(_sfc_main$a$1, [["render", _sfc_render$5]]);
const _sfc_main$9$1 = {
  name: "Popover",
  emits: ["before-show", "after-show", "before-hide", "after-hide"],
  render() {
    return vue_cjs_prod$1.h("div", {
      class: [
        "vc-popover-content-wrapper",
        {
          "is-interactive": this.isInteractive
        }
      ],
      ref: "popover"
    }, [
      vue_cjs_prod$1.h(CustomTransition, {
        name: this.transition,
        appear: true,
        "on-before-enter": this.beforeEnter,
        "on-after-enter": this.afterEnter,
        "on-before-leave": this.beforeLeave,
        "on-after-leave": this.afterLeave
      }, {
        default: () => this.isVisible ? vue_cjs_prod$1.h("div", {
          tabindex: -1,
          class: [
            "vc-popover-content",
            `direction-${this.direction}`,
            this.contentClass
          ],
          style: this.contentStyle
        }, [
          this.content,
          vue_cjs_prod$1.h("span", {
            class: [
              "vc-popover-caret",
              `direction-${this.direction}`,
              `align-${this.alignment}`
            ]
          })
        ]) : null
      })
    ]);
  },
  props: {
    id: { type: String, required: true },
    contentClass: String
  },
  data() {
    return {
      ref: null,
      opts: null,
      data: null,
      transition: "slide-fade",
      transitionTranslate: "15px",
      transitionDuration: "0.15s",
      placement: "bottom",
      positionFixed: false,
      modifiers: [],
      isInteractive: false,
      isHovered: false,
      isFocused: false,
      showDelay: 0,
      hideDelay: 110,
      autoHide: false,
      popperEl: null
    };
  },
  computed: {
    content() {
      return isFunction_1$1(this.$slots.default) && this.$slots.default({
        direction: this.direction,
        alignment: this.alignment,
        data: this.data,
        updateLayout: this.setupPopper,
        hide: (opts) => this.hide(opts)
      }) || this.$slots.default;
    },
    contentStyle() {
      return {
        "--slide-translate": this.transitionTranslate,
        "--slide-duration": this.transitionDuration
      };
    },
    popperOptions() {
      return {
        placement: this.placement,
        strategy: this.positionFixed ? "fixed" : "absolute",
        modifiers: [
          {
            name: "onUpdate",
            enabled: true,
            phase: "afterWrite",
            fn: this.onPopperUpdate
          },
          ...this.modifiers || []
        ],
        onFirstUpdate: this.onPopperUpdate
      };
    },
    isVisible() {
      return !!(this.ref && this.content);
    },
    direction() {
      return this.placement && this.placement.split("-")[0] || "bottom";
    },
    alignment() {
      const isLeftRight = this.direction === "left" || this.direction === "right";
      let alignment = this.placement.split("-");
      alignment = alignment.length > 1 ? alignment[1] : "";
      if (["start", "top", "left"].includes(alignment)) {
        return isLeftRight ? "top" : "left";
      }
      if (["end", "bottom", "right"].includes(alignment)) {
        return isLeftRight ? "bottom" : "right";
      }
      return isLeftRight ? "middle" : "center";
    }
  },
  watch: {
    opts(val, oldVal) {
      if (oldVal && oldVal.callback) {
        oldVal.callback(__spreadProps$1(__spreadValues$1({}, oldVal), {
          completed: !val,
          reason: val ? "Overridden by action" : null
        }));
      }
    }
  },
  mounted() {
    this.popoverEl = this.$refs.popover;
    this.addEvents();
  },
  beforeUnmount() {
    this.destroyPopper();
    this.removeEvents();
    this.popoverEl = null;
  },
  methods: {
    addEvents() {
      on(this.popoverEl, "click", this.onClick);
      on(this.popoverEl, "mouseover", this.onMouseOver);
      on(this.popoverEl, "mouseleave", this.onMouseLeave);
      on(this.popoverEl, "focusin", this.onFocusIn);
      on(this.popoverEl, "focusout", this.onFocusOut);
      on(document, "keydown", this.onDocumentKeydown);
      on(document, "click", this.onDocumentClick);
      on(document, "show-popover", this.onDocumentShowPopover);
      on(document, "hide-popover", this.onDocumentHidePopover);
      on(document, "toggle-popover", this.onDocumentTogglePopover);
      on(document, "update-popover", this.onDocumentUpdatePopover);
    },
    removeEvents() {
      off(this.popoverEl, "click", this.onClick);
      off(this.popoverEl, "mouseover", this.onMouseOver);
      off(this.popoverEl, "mouseleave", this.onMouseLeave);
      off(this.popoverEl, "focusin", this.onFocusIn);
      off(this.popoverEl, "focusout", this.onFocusOut);
      off(document, "keydown", this.onDocumentKeydown);
      off(document, "click", this.onDocumentClick);
      off(document, "show-popover", this.onDocumentShowPopover);
      off(document, "hide-popover", this.onDocumentHidePopover);
      off(document, "toggle-popover", this.onDocumentTogglePopover);
      off(document, "update-popover", this.onDocumentUpdatePopover);
    },
    onClick(e) {
      e.stopPropagation();
    },
    onMouseOver() {
      this.isHovered = true;
      if (this.isInteractive)
        this.show();
    },
    onMouseLeave() {
      this.isHovered = false;
      if (this.autoHide && !this.isFocused && (!this.ref || this.ref !== document.activeElement)) {
        this.hide();
      }
    },
    onFocusIn() {
      this.isFocused = true;
      if (this.isInteractive)
        this.show();
    },
    onFocusOut(e) {
      if (!e.relatedTarget || !elementContains(this.popoverEl, e.relatedTarget)) {
        this.isFocused = false;
        if (!this.isHovered && this.autoHide)
          this.hide();
      }
    },
    onDocumentClick(e) {
      if (!this.$refs.popover || !this.ref) {
        return;
      }
      if (elementContains(this.popoverEl, e.target) || elementContains(this.ref, e.target)) {
        return;
      }
      this.hide();
    },
    onDocumentKeydown(e) {
      if (e.key === "Esc" || e.key === "Escape") {
        this.hide();
      }
    },
    onDocumentShowPopover({ detail }) {
      if (!detail.id || detail.id !== this.id)
        return;
      this.show(detail);
    },
    onDocumentHidePopover({ detail }) {
      if (!detail.id || detail.id !== this.id)
        return;
      this.hide(detail);
    },
    onDocumentTogglePopover({ detail }) {
      if (!detail.id || detail.id !== this.id)
        return;
      this.toggle(detail);
    },
    onDocumentUpdatePopover({ detail }) {
      if (!detail.id || detail.id !== this.id)
        return;
      this.update(detail);
    },
    show(opts = {}) {
      opts.action = "show";
      const ref = opts.ref || this.ref;
      const delay = opts.showDelay >= 0 ? opts.showDelay : this.showDelay;
      if (!ref) {
        if (opts.callback) {
          opts.callback({
            completed: false,
            reason: "Invalid reference element provided"
          });
        }
        return;
      }
      clearTimeout(this.timeout);
      this.opts = opts;
      const fn = () => {
        Object.assign(this, omit_1(opts, ["id"]));
        this.setupPopper();
        this.opts = null;
      };
      if (delay > 0) {
        this.timeout = setTimeout(() => fn(), delay);
      } else {
        fn();
      }
    },
    hide(opts = {}) {
      opts.action = "hide";
      const ref = opts.ref || this.ref;
      const delay = opts.hideDelay >= 0 ? opts.hideDelay : this.hideDelay;
      if (!this.ref || ref !== this.ref) {
        if (opts.callback) {
          opts.callback(__spreadProps$1(__spreadValues$1({}, opts), {
            completed: false,
            reason: this.ref ? "Invalid reference element provided" : "Popover already hidden"
          }));
        }
        return;
      }
      const fn = () => {
        this.ref = null;
        this.opts = null;
      };
      clearTimeout(this.timeout);
      this.opts = opts;
      if (delay > 0) {
        this.timeout = setTimeout(fn, delay);
      } else {
        fn();
      }
    },
    toggle(opts = {}) {
      if (this.isVisible && opts.ref === this.ref) {
        this.hide(opts);
      } else {
        this.show(opts);
      }
    },
    update(opts = {}) {
      Object.assign(this, omit_1(opts, ["id"]));
      this.setupPopper();
    },
    setupPopper() {
      this.$nextTick(() => {
        if (!this.ref || !this.$refs.popover)
          return;
        if (this.popper && this.popper.reference !== this.ref) {
          this.destroyPopper();
        }
        if (!this.popper) {
          this.popper = createPopper(this.ref, this.popoverEl, this.popperOptions);
        } else {
          this.popper.update();
        }
      });
    },
    onPopperUpdate(args) {
      if (args.placement) {
        this.placement = args.placement;
      } else if (args.state) {
        this.placement = args.state.placement;
      }
    },
    beforeEnter(e) {
      this.$emit("before-show", e);
    },
    afterEnter(e) {
      this.$emit("after-show", e);
    },
    beforeLeave(e) {
      this.$emit("before-hide", e);
    },
    afterLeave(e) {
      this.destroyPopper();
      this.$emit("after-hide", e);
    },
    destroyPopper() {
      if (this.popper) {
        this.popper.destroy();
        this.popper = null;
      }
    }
  }
};
const childMixin$1 = {
  inject: ["sharedState"],
  computed: {
    masks() {
      return this.sharedState.masks;
    },
    theme() {
      return this.sharedState.theme;
    },
    locale() {
      return this.sharedState.locale;
    },
    dayPopoverId() {
      return this.sharedState.dayPopoverId;
    }
  },
  methods: {
    format(date, mask) {
      return this.locale.format(date, mask);
    },
    pageForDate(date) {
      return this.locale.getDateParts(this.locale.normalizeDate(date));
    }
  }
};
const targetProps = ["base", "start", "end", "startEnd"];
const displayProps = [
  "class",
  "contentClass",
  "style",
  "contentStyle",
  "color",
  "fillMode"
];
const defConfig = {
  color: "blue",
  isDark: false,
  highlight: {
    base: { fillMode: "light" },
    start: { fillMode: "solid" },
    end: { fillMode: "solid" }
  },
  dot: {
    base: { fillMode: "solid" },
    start: { fillMode: "solid" },
    end: { fillMode: "solid" }
  },
  bar: {
    base: { fillMode: "solid" },
    start: { fillMode: "solid" },
    end: { fillMode: "solid" }
  },
  content: {
    base: {},
    start: {},
    end: {}
  }
};
class Theme {
  constructor(config) {
    Object.assign(this, defConfig, config);
  }
  normalizeAttr({ config, type }) {
    let rootColor = this.color;
    let root2 = {};
    const normAttr = this[type];
    if (config === true || isString_1(config)) {
      rootColor = isString_1(config) ? config : rootColor;
      root2 = __spreadValues$1({}, normAttr);
    } else if (isObject$e(config)) {
      if (hasAny(config, targetProps)) {
        root2 = __spreadValues$1({}, config);
      } else {
        root2 = {
          base: __spreadValues$1({}, config),
          start: __spreadValues$1({}, config),
          end: __spreadValues$1({}, config)
        };
      }
    } else {
      return null;
    }
    defaults_1(root2, { start: root2.startEnd, end: root2.startEnd }, normAttr);
    toPairs_1(root2).forEach(([targetType, targetConfig]) => {
      let targetColor = rootColor;
      if (targetConfig === true || isString_1(targetConfig)) {
        targetColor = isString_1(targetConfig) ? targetConfig : targetColor;
        root2[targetType] = { color: targetColor };
      } else if (isObject$e(targetConfig)) {
        if (hasAny(targetConfig, displayProps)) {
          root2[targetType] = __spreadValues$1({}, targetConfig);
        } else {
          root2[targetType] = {};
        }
      }
      if (!has(root2, `${targetType}.color`)) {
        set_1(root2, `${targetType}.color`, targetColor);
      }
    });
    return root2;
  }
  normalizeHighlight(config) {
    const highlight = this.normalizeAttr({
      config,
      type: "highlight"
    });
    toPairs_1(highlight).forEach(([_, targetConfig]) => {
      const c = defaults_1(targetConfig, {
        isDark: this.isDark,
        color: this.color
      });
      targetConfig.style = __spreadValues$1(__spreadValues$1({}, this.getHighlightBgStyle(c)), targetConfig.style);
      targetConfig.contentStyle = __spreadValues$1(__spreadValues$1({}, this.getHighlightContentStyle(c)), targetConfig.contentStyle);
    });
    return highlight;
  }
  getHighlightBgStyle({ fillMode, color, isDark }) {
    switch (fillMode) {
      case "outline":
      case "none":
        return {
          backgroundColor: isDark ? "var(--gray-900)" : "var(--white)",
          border: "2px solid",
          borderColor: isDark ? `var(--${color}-200)` : `var(--${color}-700)`,
          borderRadius: "var(--rounded-full)"
        };
      case "light":
        return {
          backgroundColor: isDark ? `var(--${color}-800)` : `var(--${color}-200)`,
          opacity: isDark ? 0.75 : 1,
          borderRadius: "var(--rounded-full)"
        };
      case "solid":
        return {
          backgroundColor: isDark ? `var(--${color}-500)` : `var(--${color}-600)`,
          borderRadius: "var(--rounded-full)"
        };
      default:
        return {
          borderRadius: "var(--rounded-full)"
        };
    }
  }
  getHighlightContentStyle({ fillMode, color, isDark }) {
    switch (fillMode) {
      case "outline":
      case "none":
        return {
          fontWeight: "var(--font-bold)",
          color: isDark ? `var(--${color}-100)` : `var(--${color}-900)`
        };
      case "light":
        return {
          fontWeight: "var(--font-bold)",
          color: isDark ? `var(--${color}-100)` : `var(--${color}-900)`
        };
      case "solid":
        return {
          fontWeight: "var(--font-bold)",
          color: "var(--white)"
        };
      default:
        return "";
    }
  }
  bgAccentHigh({ color, isDark }) {
    return {
      backgroundColor: isDark ? `var(--${color}-500)` : `var(--${color}-600)`
    };
  }
  contentAccent({ color, isDark }) {
    if (!color)
      return null;
    return {
      fontWeight: "var(--font-bold)",
      color: isDark ? `var(--${color}-100)` : `var(--${color}-900)`
    };
  }
  normalizeDot(config) {
    return this.normalizeNonHighlight("dot", config, this.bgAccentHigh);
  }
  normalizeBar(config) {
    return this.normalizeNonHighlight("bar", config, this.bgAccentHigh);
  }
  normalizeContent(config) {
    return this.normalizeNonHighlight("content", config, this.contentAccent);
  }
  normalizeNonHighlight(type, config, styleFn) {
    const attr = this.normalizeAttr({ type, config });
    toPairs_1(attr).forEach(([_, targetConfig]) => {
      defaults_1(targetConfig, { isDark: this.isDark, color: this.color });
      targetConfig.style = __spreadValues$1(__spreadValues$1({}, styleFn(targetConfig)), targetConfig.style);
    });
    return attr;
  }
}
var MILLISECONDS_IN_MINUTE$2 = 6e4;
function getDateMillisecondsPart(date) {
  return date.getTime() % MILLISECONDS_IN_MINUTE$2;
}
function getTimezoneOffsetInMilliseconds(dirtyDate) {
  var date = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = Math.ceil(date.getTimezoneOffset());
  date.setSeconds(0, 0);
  var hasNegativeUTCOffset = baseTimezoneOffset > 0;
  var millisecondsPartOfTimezoneOffset = hasNegativeUTCOffset ? (MILLISECONDS_IN_MINUTE$2 + getDateMillisecondsPart(date)) % MILLISECONDS_IN_MINUTE$2 : getDateMillisecondsPart(date);
  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE$2 + millisecondsPartOfTimezoneOffset;
}
function tzTokenizeDate(date, timeZone) {
  var dtf = getDateTimeFormat(timeZone);
  return dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
}
var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date);
  var filled = [];
  for (var i = 0; i < formatted.length; i++) {
    var pos = typeToPos[formatted[i].type];
    if (pos >= 0) {
      filled[pos] = parseInt(formatted[i].value, 10);
    }
  }
  return filled;
}
function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, "");
  var parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted);
  return [parsed[3], parsed[1], parsed[2], parsed[4], parsed[5], parsed[6]];
}
var dtfCache = {};
function getDateTimeFormat(timeZone) {
  if (!dtfCache[timeZone]) {
    var testDateFormatted = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date("2014-06-25T04:00:00.123Z"));
    var hourCycleSupported = testDateFormatted === "06/25/2014, 00:00:00" || testDateFormatted === "\u200E06\u200E/\u200E25\u200E/\u200E2014\u200E \u200E00\u200E:\u200E00\u200E:\u200E00";
    dtfCache[timeZone] = hourCycleSupported ? new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return dtfCache[timeZone];
}
var MILLISECONDS_IN_HOUR$1 = 36e5;
var MILLISECONDS_IN_MINUTE$1 = 6e4;
var patterns$1 = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-])(\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/,
  timezoneIANA: /(UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/
};
function tzParseTimezone(timezoneString, date) {
  var token2;
  var absoluteOffset;
  token2 = patterns$1.timezoneZ.exec(timezoneString);
  if (token2) {
    return 0;
  }
  var hours;
  token2 = patterns$1.timezoneHH.exec(timezoneString);
  if (token2) {
    hours = parseInt(token2[2], 10);
    if (!validateTimezone()) {
      return NaN;
    }
    absoluteOffset = hours * MILLISECONDS_IN_HOUR$1;
    return token2[1] === "+" ? -absoluteOffset : absoluteOffset;
  }
  token2 = patterns$1.timezoneHHMM.exec(timezoneString);
  if (token2) {
    hours = parseInt(token2[2], 10);
    var minutes = parseInt(token2[3], 10);
    if (!validateTimezone(hours, minutes)) {
      return NaN;
    }
    absoluteOffset = hours * MILLISECONDS_IN_HOUR$1 + minutes * MILLISECONDS_IN_MINUTE$1;
    return token2[1] === "+" ? -absoluteOffset : absoluteOffset;
  }
  token2 = patterns$1.timezoneIANA.exec(timezoneString);
  if (token2) {
    var tokens = tzTokenizeDate(date, timezoneString);
    var asUTC = Date.UTC(tokens[0], tokens[1] - 1, tokens[2], tokens[3], tokens[4], tokens[5]);
    var timestampWithMsZeroed = date.getTime() - date.getTime() % 1e3;
    return -(asUTC - timestampWithMsZeroed);
  }
  return 0;
}
function validateTimezone(hours, minutes) {
  if (minutes != null && (minutes < 0 || minutes > 59)) {
    return false;
  }
  return true;
}
var MILLISECONDS_IN_HOUR = 36e5;
var MILLISECONDS_IN_MINUTE = 6e4;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimeDelimeter: /[T ]/,
  plainTime: /:/,
  timeZoneDelimeter: /[Z ]/i,
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    /^([+-]\d{3})$/,
    /^([+-]\d{4})$/
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    /^([+-]\d{5})/,
    /^([+-]\d{6})/
  ],
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  timezone: /([Z+-].*| UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/
};
function toDate(argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  }
  if (argument === null) {
    return new Date(NaN);
  }
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : toInteger(options.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  }
  if (argument instanceof Date || typeof argument === "object" && Object.prototype.toString.call(argument) === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || Object.prototype.toString.call(argument) === "[object Number]") {
    return new Date(argument);
  } else if (!(typeof argument === "string" || Object.prototype.toString.call(argument) === "[object String]")) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;
  var date = parseDate(restDateString, year);
  if (isNaN(date)) {
    return new Date(NaN);
  }
  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset;
    if (dateStrings.time) {
      time = parseTime(dateStrings.time);
      if (isNaN(time)) {
        return new Date(NaN);
      }
    }
    if (dateStrings.timezone || options.timeZone) {
      offset = tzParseTimezone(dateStrings.timezone || options.timeZone, new Date(timestamp + time));
      if (isNaN(offset)) {
        return new Date(NaN);
      }
      offset = tzParseTimezone(dateStrings.timezone || options.timeZone, new Date(timestamp + time + offset));
      if (isNaN(offset)) {
        return new Date(NaN);
      }
    } else {
      offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time));
      offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time + offset));
    }
    return new Date(timestamp + time + offset);
  } else {
    return new Date(NaN);
  }
}
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimeter);
  var timeString;
  if (patterns.plainTime.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    dateStrings.timezone = array[2];
    if (patterns.timeZoneDelimeter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimeter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token2 = patterns.timezone.exec(timeString);
    if (token2) {
      dateStrings.time = timeString.replace(token2[1], "");
      dateStrings.timezone = token2[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var patternYYY = patterns.YYY[additionalDigits];
  var patternYYYYY = patterns.YYYYY[additionalDigits];
  var token2;
  token2 = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
  if (token2) {
    var yearString = token2[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    };
  }
  token2 = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
  if (token2) {
    var centuryString = token2[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    };
  }
  return {
    year: null
  };
}
function parseDate(dateString, year) {
  if (year === null) {
    return null;
  }
  var token2;
  var date;
  var month;
  var week;
  if (dateString.length === 0) {
    date = new Date(0);
    date.setUTCFullYear(year);
    return date;
  }
  token2 = patterns.MM.exec(dateString);
  if (token2) {
    date = new Date(0);
    month = parseInt(token2[1], 10) - 1;
    if (!validateDate(year, month)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month);
    return date;
  }
  token2 = patterns.DDD.exec(dateString);
  if (token2) {
    date = new Date(0);
    var dayOfYear = parseInt(token2[1], 10);
    if (!validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, 0, dayOfYear);
    return date;
  }
  token2 = patterns.MMDD.exec(dateString);
  if (token2) {
    date = new Date(0);
    month = parseInt(token2[1], 10) - 1;
    var day = parseInt(token2[2], 10);
    if (!validateDate(year, month, day)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, day);
    return date;
  }
  token2 = patterns.Www.exec(dateString);
  if (token2) {
    week = parseInt(token2[1], 10) - 1;
    if (!validateWeekDate(year, week)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week);
  }
  token2 = patterns.WwwD.exec(dateString);
  if (token2) {
    week = parseInt(token2[1], 10) - 1;
    var dayOfWeek = parseInt(token2[2], 10) - 1;
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  }
  return null;
}
function parseTime(timeString) {
  var token2;
  var hours;
  var minutes;
  token2 = patterns.HH.exec(timeString);
  if (token2) {
    hours = parseFloat(token2[1].replace(",", "."));
    if (!validateTime(hours)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR;
  }
  token2 = patterns.HHMM.exec(timeString);
  if (token2) {
    hours = parseInt(token2[1], 10);
    minutes = parseFloat(token2[2].replace(",", "."));
    if (!validateTime(hours, minutes)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
  }
  token2 = patterns.HHMMSS.exec(timeString);
  if (token2) {
    hours = parseInt(token2[1], 10);
    minutes = parseInt(token2[2], 10);
    var seconds = parseFloat(token2[3].replace(",", "."));
    if (!validateTime(hours, minutes, seconds)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1e3;
  }
  return null;
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  if (month < 0 || month > 11) {
    return false;
  }
  if (date != null) {
    if (date < 1) {
      return false;
    }
    var isLeapYear = isLeapYearIndex(year);
    if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
      return false;
    }
    if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
      return false;
    }
  }
  return true;
}
function validateDayOfYearDate(year, dayOfYear) {
  if (dayOfYear < 1) {
    return false;
  }
  var isLeapYear = isLeapYearIndex(year);
  if (isLeapYear && dayOfYear > 366) {
    return false;
  }
  if (!isLeapYear && dayOfYear > 365) {
    return false;
  }
  return true;
}
function validateWeekDate(year, week, day) {
  if (week < 0 || week > 52) {
    return false;
  }
  if (day != null && (day < 0 || day > 6)) {
    return false;
  }
  return true;
}
function validateTime(hours, minutes, seconds) {
  if (hours != null && (hours < 0 || hours >= 25)) {
    return false;
  }
  if (minutes != null && (minutes < 0 || minutes >= 60)) {
    return false;
  }
  if (seconds != null && (seconds < 0 || seconds >= 60)) {
    return false;
  }
  return true;
}
function startOfWeek(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate$1(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}
function startOfISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  return startOfWeek(dirtyDate, {
    weekStartsOn: 1
  });
}
function getISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate$1(dirtyDate);
  var year = date.getFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  var date = startOfISOWeek(fourthOfJanuary);
  return date;
}
var MILLISECONDS_IN_WEEK$2 = 6048e5;
function getISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate$1(dirtyDate);
  var diff = startOfISOWeek(date).getTime() - startOfISOWeekYear(date).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK$2) + 1;
}
function getWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var date = toDate$1(dirtyDate);
  var year = date.getFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = startOfWeek(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = startOfWeek(firstWeekOfThisYear, dirtyOptions);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  var year = getWeekYear(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  var date = startOfWeek(firstWeek, dirtyOptions);
  return date;
}
var MILLISECONDS_IN_WEEK$1 = 6048e5;
function getWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate$1(dirtyDate);
  var diff = startOfWeek(date, options).getTime() - startOfWeekYear(date, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}
var MILLISECONDS_IN_WEEK = 6048e5;
function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  requiredArgs(2, arguments);
  var startOfWeekLeft = startOfWeek(dirtyDateLeft, dirtyOptions);
  var startOfWeekRight = startOfWeek(dirtyDateRight, dirtyOptions);
  var timestampLeft = startOfWeekLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekLeft);
  var timestampRight = startOfWeekRight.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekRight);
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
}
function lastDayOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate$1(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}
function startOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate$1(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}
function getWeeksInMonth(date, options) {
  requiredArgs(1, arguments);
  return differenceInCalendarWeeks(lastDayOfMonth(date), startOfMonth(date), options) + 1;
}
const millisecondsPerDay = 24 * 60 * 60 * 1e3;
class DateInfo {
  constructor(config, { order = 0, locale, isFullDay } = {}) {
    this.isDateInfo = true;
    this.order = order;
    this.locale = locale instanceof Locale ? locale : new Locale(locale);
    this.firstDayOfWeek = this.locale.firstDayOfWeek;
    if (!isObject$e(config)) {
      const date = this.locale.normalizeDate(config);
      if (isFullDay) {
        config = {
          start: date,
          end: date
        };
      } else {
        config = {
          startOn: date,
          endOn: date
        };
      }
    }
    let start = null;
    let end = null;
    if (config.start) {
      start = this.locale.normalizeDate(config.start, __spreadProps$1(__spreadValues$1({}, this.opts), {
        time: "00:00:00"
      }));
    } else if (config.startOn) {
      start = this.locale.normalizeDate(config.startOn, this.opts);
    }
    if (config.end) {
      end = this.locale.normalizeDate(config.end, __spreadProps$1(__spreadValues$1({}, this.opts), {
        time: "23:59:59"
      }));
    } else if (config.endOn) {
      end = this.locale.normalizeDate(config.endOn, this.opts);
    }
    if (start && end && start > end) {
      const temp = start;
      start = end;
      end = temp;
    } else if (start && config.span >= 1) {
      end = addDays(start, config.span - 1);
    }
    this.start = start;
    this.startTime = start ? start.getTime() : NaN;
    this.end = end;
    this.endTime = end ? end.getTime() : NaN;
    this.isDate = this.startTime && this.startTime === this.endTime;
    this.isRange = !this.isDate;
    const andOpt = mixinOptionalProps(config, {}, DateInfo.patternProps);
    if (andOpt.assigned) {
      this.on = { and: andOpt.target };
    }
    if (config.on) {
      const or = (isArrayLikeObject_1(config.on) ? config.on : [config.on]).map((o) => {
        if (isFunction_1$1(o))
          return o;
        const opt = mixinOptionalProps(o, {}, DateInfo.patternProps);
        return opt.assigned ? opt.target : null;
      }).filter((o) => o);
      if (or.length)
        this.on = __spreadProps$1(__spreadValues$1({}, this.on), { or });
    }
    this.isComplex = !!this.on;
  }
  get opts() {
    return {
      order: this.order,
      locale: this.locale
    };
  }
  toDateInfo(date) {
    return date.isDateInfo ? date : new DateInfo(date, this.opts);
  }
  startOfWeek(date) {
    const day = date.getDay() + 1;
    const daysToAdd = day >= this.firstDayOfWeek ? this.firstDayOfWeek - day : -(7 - (this.firstDayOfWeek - day));
    return addDays(date, daysToAdd);
  }
  diffInDays(d1, d2) {
    return Math.round((d2 - d1) / millisecondsPerDay);
  }
  diffInWeeks(d1, d2) {
    return this.diffInDays(this.startOfWeek(d1), this.startOfWeek(d2));
  }
  diffInYears(d1, d2) {
    return d2.getUTCFullYear() - d1.getUTCFullYear();
  }
  diffInMonths(d1, d2) {
    return this.diffInYears(d1, d2) * 12 + (d2.getMonth() - d1.getMonth());
  }
  static get patterns() {
    return {
      dailyInterval: {
        test: (day, interval, di) => di.diffInDays(di.start || new Date(), day.date) % interval === 0
      },
      weeklyInterval: {
        test: (day, interval, di) => di.diffInWeeks(di.start || new Date(), day.date) % interval === 0
      },
      monthlyInterval: {
        test: (day, interval, di) => di.diffInMonths(di.start || new Date(), day.date) % interval === 0
      },
      yearlyInterval: {
        test: () => (day, interval, di) => di.diffInYears(di.start || new Date(), day.date) % interval === 0
      },
      days: {
        validate: (days) => isArrayLikeObject_1(days) ? days : [parseInt(days, 10)],
        test: (day, days) => days.includes(day.day) || days.includes(-day.dayFromEnd)
      },
      weekdays: {
        validate: (weekdays2) => isArrayLikeObject_1(weekdays2) ? weekdays2 : [parseInt(weekdays2, 10)],
        test: (day, weekdays2) => weekdays2.includes(day.weekday)
      },
      ordinalWeekdays: {
        validate: (ordinalWeekdays) => Object.keys(ordinalWeekdays).reduce((obj, ck) => {
          const weekdays2 = ordinalWeekdays[ck];
          if (!weekdays2)
            return obj;
          obj[ck] = isArrayLikeObject_1(weekdays2) ? weekdays2 : [parseInt(weekdays2, 10)];
          return obj;
        }, {}),
        test: (day, ordinalWeekdays) => Object.keys(ordinalWeekdays).map((k) => parseInt(k, 10)).find((k) => ordinalWeekdays[k].includes(day.weekday) && (k === day.weekdayOrdinal || k === -day.weekdayOrdinalFromEnd))
      },
      weekends: {
        validate: (config) => config,
        test: (day) => day.weekday === 1 || day.weekday === 7
      },
      workweek: {
        validate: (config) => config,
        test: (day) => day.weekday >= 2 && day.weekday <= 6
      },
      weeks: {
        validate: (weeks) => isArrayLikeObject_1(weeks) ? weeks : [parseInt(weeks, 10)],
        test: (day, weeks) => weeks.includes(day.week) || weeks.includes(-day.weekFromEnd)
      },
      months: {
        validate: (months) => isArrayLikeObject_1(months) ? months : [parseInt(months, 10)],
        test: (day, months) => months.includes(day.month)
      },
      years: {
        validate: (years) => isArrayLikeObject_1(years) ? years : [parseInt(years, 10)],
        test: (day, years) => years.includes(day.year)
      }
    };
  }
  static get patternProps() {
    return Object.keys(DateInfo.patterns).map((k) => ({
      name: k,
      validate: DateInfo.patterns[k].validate
    }));
  }
  static testConfig(config, day, dateInfo) {
    if (isFunction_1$1(config))
      return config(day);
    if (isObject$e(config)) {
      return Object.keys(config).every((k) => DateInfo.patterns[k].test(day, config[k], dateInfo));
    }
    return null;
  }
  iterateDatesInRange({ start, end }, fn) {
    if (!start || !end || !isFunction_1$1(fn))
      return null;
    start = this.locale.normalizeDate(start, __spreadProps$1(__spreadValues$1({}, this.opts), {
      time: "00:00:00"
    }));
    const state2 = {
      i: 0,
      date: start,
      day: this.locale.getDateParts(start),
      finished: false
    };
    let result = null;
    for (; !state2.finished && state2.date <= end; state2.i++) {
      result = fn(state2);
      state2.date = addDays(state2.date, 1);
      state2.day = this.locale.getDateParts(state2.date);
    }
    return result;
  }
  shallowIntersectingRange(other) {
    return this.rangeShallowIntersectingRange(this, this.toDateInfo(other));
  }
  rangeShallowIntersectingRange(date1, date2) {
    if (!this.dateShallowIntersectsDate(date1, date2)) {
      return null;
    }
    const thisRange = date1.toRange();
    const otherRange = date2.toRange();
    let start = null;
    let end = null;
    if (thisRange.start) {
      if (!otherRange.start) {
        start = thisRange.start;
      } else {
        start = thisRange.start > otherRange.start ? thisRange.start : otherRange.start;
      }
    } else if (otherRange.start) {
      start = otherRange.start;
    }
    if (thisRange.end) {
      if (!otherRange.end) {
        end = thisRange.end;
      } else {
        end = thisRange.end < otherRange.end ? thisRange.end : otherRange.end;
      }
    } else if (otherRange.end) {
      end = otherRange.end;
    }
    return { start, end };
  }
  intersectsDate(other) {
    const date = this.toDateInfo(other);
    if (!this.shallowIntersectsDate(date))
      return null;
    if (!this.on)
      return this;
    const range = this.rangeShallowIntersectingRange(this, date);
    let result = false;
    this.iterateDatesInRange(range, (state2) => {
      if (this.matchesDay(state2.day)) {
        result = result || date.matchesDay(state2.day);
        state2.finished = result;
      }
    });
    return result;
  }
  shallowIntersectsDate(other) {
    return this.dateShallowIntersectsDate(this, this.toDateInfo(other));
  }
  dateShallowIntersectsDate(date1, date2) {
    if (date1.isDate) {
      return date2.isDate ? date1.startTime === date2.startTime : this.dateShallowIncludesDate(date2, date1);
    }
    if (date2.isDate) {
      return this.dateShallowIncludesDate(date1, date2);
    }
    if (date1.start && date2.end && date1.start > date2.end) {
      return false;
    }
    if (date1.end && date2.start && date1.end < date2.start) {
      return false;
    }
    return true;
  }
  includesDate(other) {
    const date = this.toDateInfo(other);
    if (!this.shallowIncludesDate(date)) {
      return false;
    }
    if (!this.on) {
      return true;
    }
    const range = this.rangeShallowIntersectingRange(this, date);
    let result = true;
    this.iterateDatesInRange(range, (state2) => {
      if (this.matchesDay(state2.day)) {
        result = result && date.matchesDay(state2.day);
        state2.finished = !result;
      }
    });
    return result;
  }
  shallowIncludesDate(other) {
    return this.dateShallowIncludesDate(this, other.isDate ? other : new DateInfo(other, this.opts));
  }
  dateShallowIncludesDate(date1, date2) {
    if (date1.isDate) {
      if (date2.isDate) {
        return date1.startTime === date2.startTime;
      }
      if (!date2.startTime || !date2.endTime) {
        return false;
      }
      return date1.startTime === date2.startTime && date1.startTime === date2.endTime;
    }
    if (date2.isDate) {
      if (date1.start && date2.start < date1.start) {
        return false;
      }
      if (date1.end && date2.start > date1.end) {
        return false;
      }
      return true;
    }
    if (date1.start && (!date2.start || date2.start < date1.start)) {
      return false;
    }
    if (date1.end && (!date2.end || date2.end > date1.end)) {
      return false;
    }
    return true;
  }
  intersectsDay(day) {
    if (!this.shallowIntersectsDate(day.range))
      return null;
    return this.matchesDay(day) ? this : null;
  }
  matchesDay(day) {
    if (!this.on)
      return true;
    if (this.on.and && !DateInfo.testConfig(this.on.and, day, this)) {
      return false;
    }
    if (this.on.or && !this.on.or.some((or) => DateInfo.testConfig(or, day, this))) {
      return false;
    }
    return true;
  }
  toRange() {
    return new DateInfo({
      start: this.start,
      end: this.end
    }, this.opts);
  }
  compare(other) {
    if (this.order !== other.order)
      return this.order - other.order;
    if (this.isDate !== other.isDate)
      return this.isDate ? 1 : -1;
    if (this.isDate)
      return 0;
    const diff = this.start - other.start;
    return diff !== 0 ? diff : this.end - other.end;
  }
}
const locales = {
  ar: { dow: 7, L: "D/\u200FM/\u200FYYYY" },
  bg: { dow: 2, L: "D.MM.YYYY" },
  ca: { dow: 2, L: "DD/MM/YYYY" },
  "zh-CN": { dow: 2, L: "YYYY/MM/DD" },
  "zh-TW": { dow: 1, L: "YYYY/MM/DD" },
  hr: { dow: 2, L: "DD.MM.YYYY" },
  cs: { dow: 2, L: "DD.MM.YYYY" },
  da: { dow: 2, L: "DD.MM.YYYY" },
  nl: { dow: 2, L: "DD-MM-YYYY" },
  "en-US": { dow: 1, L: "MM/DD/YYYY" },
  "en-AU": { dow: 2, L: "DD/MM/YYYY" },
  "en-CA": { dow: 1, L: "YYYY-MM-DD" },
  "en-GB": { dow: 2, L: "DD/MM/YYYY" },
  "en-IE": { dow: 2, L: "DD-MM-YYYY" },
  "en-NZ": { dow: 2, L: "DD/MM/YYYY" },
  "en-ZA": { dow: 1, L: "YYYY/MM/DD" },
  eo: { dow: 2, L: "YYYY-MM-DD" },
  et: { dow: 2, L: "DD.MM.YYYY" },
  fi: { dow: 2, L: "DD.MM.YYYY" },
  fr: { dow: 2, L: "DD/MM/YYYY" },
  "fr-CA": { dow: 1, L: "YYYY-MM-DD" },
  "fr-CH": { dow: 2, L: "DD.MM.YYYY" },
  de: { dow: 2, L: "DD.MM.YYYY" },
  he: { dow: 1, L: "DD.MM.YYYY" },
  id: { dow: 2, L: "DD/MM/YYYY" },
  it: { dow: 2, L: "DD/MM/YYYY" },
  ja: { dow: 1, L: "YYYY\u5E74M\u6708D\u65E5" },
  ko: { dow: 1, L: "YYYY.MM.DD" },
  lv: { dow: 2, L: "DD.MM.YYYY" },
  lt: { dow: 2, L: "DD.MM.YYYY" },
  mk: { dow: 2, L: "D.MM.YYYY" },
  nb: { dow: 2, L: "D. MMMM YYYY" },
  nn: { dow: 2, L: "D. MMMM YYYY" },
  pl: { dow: 2, L: "DD.MM.YYYY" },
  pt: { dow: 2, L: "DD/MM/YYYY" },
  ro: { dow: 2, L: "DD.MM.YYYY" },
  ru: { dow: 2, L: "DD.MM.YYYY" },
  sk: { dow: 2, L: "DD.MM.YYYY" },
  "es-ES": { dow: 2, L: "DD/MM/YYYY" },
  "es-MX": { dow: 2, L: "DD/MM/YYYY" },
  sv: { dow: 2, L: "YYYY-MM-DD" },
  th: { dow: 1, L: "DD/MM/YYYY" },
  tr: { dow: 2, L: "DD.MM.YYYY" },
  uk: { dow: 2, L: "DD.MM.YYYY" },
  vi: { dow: 2, L: "DD/MM/YYYY" }
};
locales.en = locales["en-US"];
locales.es = locales["es-ES"];
locales.no = locales.nb;
locales.zh = locales["zh-CN"];
toPairs_1(locales).forEach(([id, { dow, L }]) => {
  locales[id] = {
    id,
    firstDayOfWeek: dow,
    masks: { L }
  };
});
const PATCH = {
  DATE_TIME: 1,
  DATE: 2,
  TIME: 3
};
const PATCH_KEYS = {
  1: ["year", "month", "day", "hours", "minutes", "seconds", "milliseconds"],
  2: ["year", "month", "day"],
  3: ["hours", "minutes", "seconds", "milliseconds"]
};
const token = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
const twoDigits = /\d\d?/;
const threeDigits = /\d{3}/;
const fourDigits = /\d{4}/;
const word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
const literal = /\[([^]*?)\]/gm;
const noop = () => {
};
const monthUpdate = (arrName) => (d, v, l) => {
  const index2 = l[arrName].indexOf(v.charAt(0).toUpperCase() + v.substring(1).toLowerCase());
  if (~index2) {
    d.month = index2;
  }
};
const maskMacros = ["L", "iso"];
const daysInWeek = 7;
const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const hourOptions = [
  { value: 0, label: "00" },
  { value: 1, label: "01" },
  { value: 2, label: "02" },
  { value: 3, label: "03" },
  { value: 4, label: "04" },
  { value: 5, label: "05" },
  { value: 6, label: "06" },
  { value: 7, label: "07" },
  { value: 8, label: "08" },
  { value: 9, label: "09" },
  { value: 10, label: "10" },
  { value: 11, label: "11" },
  { value: 12, label: "12" },
  { value: 13, label: "13" },
  { value: 14, label: "14" },
  { value: 15, label: "15" },
  { value: 16, label: "16" },
  { value: 17, label: "17" },
  { value: 18, label: "18" },
  { value: 19, label: "19" },
  { value: 20, label: "20" },
  { value: 21, label: "21" },
  { value: 22, label: "22" },
  { value: 23, label: "23" }
];
const formatFlags = {
  D(d) {
    return d.day;
  },
  DD(d) {
    return pad(d.day);
  },
  Do(d, l) {
    return l.DoFn(d.day);
  },
  d(d) {
    return d.weekday - 1;
  },
  dd(d) {
    return pad(d.weekday - 1);
  },
  W(d, l) {
    return l.dayNamesNarrow[d.weekday - 1];
  },
  WW(d, l) {
    return l.dayNamesShorter[d.weekday - 1];
  },
  WWW(d, l) {
    return l.dayNamesShort[d.weekday - 1];
  },
  WWWW(d, l) {
    return l.dayNames[d.weekday - 1];
  },
  M(d) {
    return d.month;
  },
  MM(d) {
    return pad(d.month);
  },
  MMM(d, l) {
    return l.monthNamesShort[d.month - 1];
  },
  MMMM(d, l) {
    return l.monthNames[d.month - 1];
  },
  YY(d) {
    return String(d.year).substring(2);
  },
  YYYY(d) {
    return pad(d.year, 4);
  },
  h(d) {
    return d.hours % 12 || 12;
  },
  hh(d) {
    return pad(d.hours % 12 || 12);
  },
  H(d) {
    return d.hours;
  },
  HH(d) {
    return pad(d.hours);
  },
  m(d) {
    return d.minutes;
  },
  mm(d) {
    return pad(d.minutes);
  },
  s(d) {
    return d.seconds;
  },
  ss(d) {
    return pad(d.seconds);
  },
  S(d) {
    return Math.round(d.milliseconds / 100);
  },
  SS(d) {
    return pad(Math.round(d.milliseconds / 10), 2);
  },
  SSS(d) {
    return pad(d.milliseconds, 3);
  },
  a(d, l) {
    return d.hours < 12 ? l.amPm[0] : l.amPm[1];
  },
  A(d, l) {
    return d.hours < 12 ? l.amPm[0].toUpperCase() : l.amPm[1].toUpperCase();
  },
  Z() {
    return "Z";
  },
  ZZ(d) {
    const o = d.timezoneOffset;
    return `${o > 0 ? "-" : "+"}${pad(Math.floor(Math.abs(o) / 60), 2)}`;
  },
  ZZZ(d) {
    const o = d.timezoneOffset;
    return `${o > 0 ? "-" : "+"}${pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4)}`;
  },
  ZZZZ(d) {
    const o = d.timezoneOffset;
    return `${o > 0 ? "-" : "+"}${pad(Math.floor(Math.abs(o) / 60), 2)}:${pad(Math.abs(o) % 60, 2)}`;
  }
};
const parseFlags = {
  D: [
    twoDigits,
    (d, v) => {
      d.day = v;
    }
  ],
  Do: [
    new RegExp(twoDigits.source + word.source),
    (d, v) => {
      d.day = parseInt(v, 10);
    }
  ],
  d: [twoDigits, noop],
  W: [word, noop],
  M: [
    twoDigits,
    (d, v) => {
      d.month = v - 1;
    }
  ],
  MMM: [word, monthUpdate("monthNamesShort")],
  MMMM: [word, monthUpdate("monthNames")],
  YY: [
    twoDigits,
    (d, v) => {
      const da = new Date();
      const cent = +da.getFullYear().toString().substring(0, 2);
      d.year = `${v > 68 ? cent - 1 : cent}${v}`;
    }
  ],
  YYYY: [
    fourDigits,
    (d, v) => {
      d.year = v;
    }
  ],
  S: [
    /\d/,
    (d, v) => {
      d.millisecond = v * 100;
    }
  ],
  SS: [
    /\d{2}/,
    (d, v) => {
      d.millisecond = v * 10;
    }
  ],
  SSS: [
    threeDigits,
    (d, v) => {
      d.millisecond = v;
    }
  ],
  h: [
    twoDigits,
    (d, v) => {
      d.hour = v;
    }
  ],
  m: [
    twoDigits,
    (d, v) => {
      d.minute = v;
    }
  ],
  s: [
    twoDigits,
    (d, v) => {
      d.second = v;
    }
  ],
  a: [
    word,
    (d, v, l) => {
      const val = v.toLowerCase();
      if (val === l.amPm[0]) {
        d.isPm = false;
      } else if (val === l.amPm[1]) {
        d.isPm = true;
      }
    }
  ],
  Z: [
    /[^\s]*?[+-]\d\d:?\d\d|[^\s]*?Z?/,
    (d, v) => {
      if (v === "Z")
        v = "+00:00";
      const parts = `${v}`.match(/([+-]|\d\d)/gi);
      if (parts) {
        const minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
        d.timezoneOffset = parts[0] === "+" ? minutes : -minutes;
      }
    }
  ]
};
parseFlags.DD = parseFlags.D;
parseFlags.dd = parseFlags.d;
parseFlags.WWWW = parseFlags.WWW = parseFlags.WW = parseFlags.W;
parseFlags.MM = parseFlags.M;
parseFlags.mm = parseFlags.m;
parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
parseFlags.ss = parseFlags.s;
parseFlags.A = parseFlags.a;
parseFlags.ZZZZ = parseFlags.ZZZ = parseFlags.ZZ = parseFlags.Z;
function resolveConfig(config, locales2) {
  const detLocale = new Intl.DateTimeFormat().resolvedOptions().locale;
  let id;
  if (isString_1(config)) {
    id = config;
  } else if (has(config, "id")) {
    id = config.id;
  }
  id = (id || detLocale).toLowerCase();
  const localeKeys = Object.keys(locales2);
  const validKey = (k) => localeKeys.find((lk) => lk.toLowerCase() === k);
  id = validKey(id) || validKey(id.substring(0, 2)) || detLocale;
  const defLocale = __spreadProps$1(__spreadValues$1(__spreadValues$1({}, locales2["en-IE"]), locales2[id]), { id });
  config = isObject$e(config) ? defaultsDeep_1(config, defLocale) : defLocale;
  return config;
}
class Locale {
  constructor(config, { locales: locales$1 = locales, timezone } = {}) {
    const { id, firstDayOfWeek, masks: masks2 } = resolveConfig(config, locales$1);
    this.id = id;
    this.daysInWeek = daysInWeek;
    this.firstDayOfWeek = clamp_1(firstDayOfWeek, 1, daysInWeek);
    this.masks = masks2;
    this.timezone = timezone || void 0;
    this.dayNames = this.getDayNames("long");
    this.dayNamesShort = this.getDayNames("short");
    this.dayNamesShorter = this.dayNamesShort.map((s) => s.substring(0, 2));
    this.dayNamesNarrow = this.getDayNames("narrow");
    this.monthNames = this.getMonthNames("long");
    this.monthNamesShort = this.getMonthNames("short");
    this.amPm = ["am", "pm"];
    this.monthData = {};
    this.getMonthComps = this.getMonthComps.bind(this);
    this.parse = this.parse.bind(this);
    this.format = this.format.bind(this);
    this.toPage = this.toPage.bind(this);
  }
  format(date, mask) {
    date = this.normalizeDate(date);
    if (!date)
      return "";
    mask = this.normalizeMasks(mask)[0];
    const literals = [];
    mask = mask.replace(literal, ($0, $1) => {
      literals.push($1);
      return "??";
    });
    const timezone = /Z$/.test(mask) ? "utc" : this.timezone;
    const dateParts = this.getDateParts(date, timezone);
    mask = mask.replace(token, ($0) => $0 in formatFlags ? formatFlags[$0](dateParts, this) : $0.slice(1, $0.length - 1));
    return mask.replace(/\?\?/g, () => literals.shift());
  }
  parse(dateString, mask) {
    const masks2 = this.normalizeMasks(mask);
    return masks2.map((m) => {
      if (typeof m !== "string") {
        throw new Error("Invalid mask in fecha.parse");
      }
      let str = dateString;
      if (str.length > 1e3) {
        return false;
      }
      let isValid = true;
      const dateInfo = {};
      m.replace(token, ($0) => {
        if (parseFlags[$0]) {
          const info = parseFlags[$0];
          const index2 = str.search(info[0]);
          if (!~index2) {
            isValid = false;
          } else {
            str.replace(info[0], (result) => {
              info[1](dateInfo, result, this);
              str = str.substring(index2 + result.length);
              return result;
            });
          }
        }
        return parseFlags[$0] ? "" : $0.slice(1, $0.length - 1);
      });
      if (!isValid) {
        return false;
      }
      const today = new Date();
      if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
        dateInfo.hour = +dateInfo.hour + 12;
      } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
        dateInfo.hour = 0;
      }
      let date;
      if (dateInfo.timezoneOffset != null) {
        dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
        date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
      } else {
        date = this.getDateFromParts({
          year: dateInfo.year || today.getFullYear(),
          month: (dateInfo.month || 0) + 1,
          day: dateInfo.day || 1,
          hours: dateInfo.hour || 0,
          minutes: dateInfo.minute || 0,
          seconds: dateInfo.second || 0,
          milliseconds: dateInfo.millisecond || 0
        });
      }
      return date;
    }).find((d) => d) || new Date(dateString);
  }
  normalizeMasks(masks2) {
    return (arrayHasItems(masks2) && masks2 || [
      isString_1(masks2) && masks2 || "YYYY-MM-DD"
    ]).map((m) => maskMacros.reduce((prev, curr) => prev.replace(curr, this.masks[curr] || ""), m));
  }
  normalizeDate(d, config = {}) {
    let result = null;
    let { type, fillDate } = config;
    const { mask, patch, time } = config;
    const auto = type === "auto" || !type;
    if (isNumber_1(d)) {
      type = "number";
      result = new Date(+d);
    } else if (isString_1(d)) {
      type = "string";
      result = d ? this.parse(d, mask || "iso") : null;
    } else if (isObject$e(d)) {
      type = "object";
      result = this.getDateFromParts(d);
    } else {
      type = "date";
      result = isDate$2(d) ? new Date(d.getTime()) : null;
    }
    if (result && patch) {
      fillDate = fillDate == null ? new Date() : this.normalizeDate(fillDate);
      const parts = __spreadValues$1(__spreadValues$1({}, this.getDateParts(fillDate)), pick_1(this.getDateParts(result), PATCH_KEYS[patch]));
      result = this.getDateFromParts(parts);
    }
    if (auto)
      config.type = type;
    if (result && !isNaN(result.getTime())) {
      if (time) {
        result = this.adjustTimeForDate(result, {
          timeAdjust: time
        });
      }
      return result;
    }
    return null;
  }
  denormalizeDate(date, { type, mask } = {}) {
    switch (type) {
      case "number":
        return date ? date.getTime() : NaN;
      case "string":
        return date ? this.format(date, mask || "iso") : "";
      default:
        return date ? new Date(date) : null;
    }
  }
  hourIsValid(hour, validHours, dateParts) {
    if (!validHours)
      return true;
    if (isArrayLikeObject_1(validHours))
      return validHours.includes(hour);
    if (isObject$e(validHours)) {
      const min = validHours.min || 0;
      const max = validHours.max || 24;
      return min <= hour && max >= hour;
    }
    return validHours(hour, dateParts);
  }
  getHourOptions(validHours, dateParts) {
    return hourOptions.filter((opt) => this.hourIsValid(opt.value, validHours, dateParts));
  }
  getMinuteOptions(minuteIncrement) {
    const options = [];
    minuteIncrement = minuteIncrement > 0 ? minuteIncrement : 1;
    for (let i = 0; i <= 59; i += minuteIncrement) {
      options.push({
        value: i,
        label: pad(i, 2)
      });
    }
    return options;
  }
  nearestOptionValue(value, options) {
    if (value == null)
      return value;
    const result = options.reduce((prev, opt) => {
      if (opt.disabled)
        return prev;
      if (isNaN(prev))
        return opt.value;
      const diffPrev = Math.abs(prev - value);
      const diffCurr = Math.abs(opt.value - value);
      return diffCurr < diffPrev ? opt.value : prev;
    }, NaN);
    return isNaN(result) ? value : result;
  }
  adjustTimeForDate(date, { timeAdjust, validHours, minuteIncrement }) {
    if (!timeAdjust && !validHours && !minuteIncrement)
      return date;
    const dateParts = this.getDateParts(date);
    if (timeAdjust) {
      if (timeAdjust === "now") {
        const timeParts = this.getDateParts(new Date());
        dateParts.hours = timeParts.hours;
        dateParts.minutes = timeParts.minutes;
        dateParts.seconds = timeParts.seconds;
        dateParts.milliseconds = timeParts.milliseconds;
      } else {
        const d = new Date(`2000-01-01T${timeAdjust}Z`);
        dateParts.hours = d.getUTCHours();
        dateParts.minutes = d.getUTCMinutes();
        dateParts.seconds = d.getUTCSeconds();
        dateParts.milliseconds = d.getUTCMilliseconds();
      }
    }
    if (validHours) {
      const options = this.getHourOptions(validHours, dateParts);
      dateParts.hours = this.nearestOptionValue(dateParts.hours, options);
    }
    if (minuteIncrement) {
      const options = this.getMinuteOptions(minuteIncrement);
      dateParts.minutes = this.nearestOptionValue(dateParts.minutes, options);
    }
    date = this.getDateFromParts(dateParts);
    return date;
  }
  normalizeDates(dates, opts) {
    opts = opts || {};
    opts.locale = this;
    return (isArrayLikeObject_1(dates) ? dates : [dates]).map((d) => d && (d instanceof DateInfo ? d : new DateInfo(d, opts))).filter((d) => d);
  }
  getDateParts(date, timezone = this.timezone) {
    if (!date)
      return null;
    let tzDate = date;
    if (timezone) {
      const normDate = new Date(date.toLocaleString("en-US", { timeZone: timezone }));
      normDate.setMilliseconds(date.getMilliseconds());
      const diff = normDate.getTime() - date.getTime();
      tzDate = new Date(date.getTime() + diff);
    }
    const milliseconds = tzDate.getMilliseconds();
    const seconds = tzDate.getSeconds();
    const minutes = tzDate.getMinutes();
    const hours = tzDate.getHours();
    const month = tzDate.getMonth() + 1;
    const year = tzDate.getFullYear();
    const comps = this.getMonthComps(month, year);
    const day = tzDate.getDate();
    const dayFromEnd = comps.days - day + 1;
    const weekday = tzDate.getDay() + 1;
    const weekdayOrdinal = Math.floor((day - 1) / 7 + 1);
    const weekdayOrdinalFromEnd = Math.floor((comps.days - day) / 7 + 1);
    const week = Math.ceil((day + Math.abs(comps.firstWeekday - comps.firstDayOfWeek)) / 7);
    const weekFromEnd = comps.weeks - week + 1;
    const parts = {
      milliseconds,
      seconds,
      minutes,
      hours,
      day,
      dayFromEnd,
      weekday,
      weekdayOrdinal,
      weekdayOrdinalFromEnd,
      week,
      weekFromEnd,
      month,
      year,
      date,
      isValid: true
    };
    parts.timezoneOffset = this.getTimezoneOffset(parts);
    return parts;
  }
  getDateFromParts(parts) {
    if (!parts)
      return null;
    const d = new Date();
    const {
      year = d.getFullYear(),
      month = d.getMonth() + 1,
      day = d.getDate(),
      hours: hrs = 0,
      minutes: min = 0,
      seconds: sec = 0,
      milliseconds: ms = 0
    } = parts;
    if (this.timezone) {
      const dateString = `${pad(year, 4)}-${pad(month, 2)}-${pad(day, 2)}T${pad(hrs, 2)}:${pad(min, 2)}:${pad(sec, 2)}.${pad(ms, 3)}`;
      return toDate(dateString, { timeZone: this.timezone });
    }
    return new Date(year, month - 1, day, hrs, min, sec, ms);
  }
  getTimezoneOffset(parts) {
    const {
      year: y,
      month: m,
      day: d,
      hours: hrs = 0,
      minutes: min = 0,
      seconds: sec = 0,
      milliseconds: ms = 0
    } = parts;
    let date;
    const utcDate = new Date(Date.UTC(y, m - 1, d, hrs, min, sec, ms));
    if (this.timezone) {
      const dateString = `${pad(y, 4)}-${pad(m, 2)}-${pad(d, 2)}T${pad(hrs, 2)}:${pad(min, 2)}:${pad(sec, 2)}.${pad(ms, 3)}`;
      date = toDate(dateString, { timeZone: this.timezone });
    } else {
      date = new Date(y, m - 1, d, hrs, min, sec, ms);
    }
    return (date - utcDate) / 6e4;
  }
  toPage(arg, fromPage) {
    if (isNumber_1(arg)) {
      return addPages(fromPage, arg);
    }
    if (isString_1(arg)) {
      return this.getDateParts(this.normalizeDate(arg));
    }
    if (isDate$2(arg)) {
      return this.getDateParts(arg);
    }
    if (isObject$e(arg)) {
      return arg;
    }
    return null;
  }
  getMonthDates(year = 2e3) {
    const dates = [];
    for (let i = 0; i < 12; i++) {
      dates.push(new Date(year, i, 15));
    }
    return dates;
  }
  getMonthNames(length) {
    const dtf = new Intl.DateTimeFormat(this.id, {
      month: length,
      timezome: "UTC"
    });
    return this.getMonthDates().map((d) => dtf.format(d));
  }
  getWeekdayDates(firstDayOfWeek = this.firstDayOfWeek) {
    const dates = [];
    const year = 2020;
    const month = 1;
    const day = 5 + firstDayOfWeek - 1;
    for (let i = 0; i < daysInWeek; i++) {
      dates.push(this.getDateFromParts({
        year,
        month,
        day: day + i,
        hours: 12
      }));
    }
    return dates;
  }
  getDayNames(length) {
    const dtf = new Intl.DateTimeFormat(this.id, {
      weekday: length,
      timeZone: this.timezone
    });
    return this.getWeekdayDates(1).map((d) => dtf.format(d));
  }
  getMonthComps(month, year) {
    const key = `${month}-${year}`;
    let comps = this.monthData[key];
    if (!comps) {
      const inLeapYear = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      const firstDayOfMonth = new Date(year, month - 1, 1);
      const firstWeekday = firstDayOfMonth.getDay() + 1;
      const days = month === 2 && inLeapYear ? 29 : daysInMonths[month - 1];
      const weekStartsOn = this.firstDayOfWeek - 1;
      const weeks = getWeeksInMonth(firstDayOfMonth, {
        weekStartsOn
      });
      const weeknumbers = [];
      const isoWeeknumbers = [];
      for (let i = 0; i < weeks; i++) {
        const date = addDays(firstDayOfMonth, i * 7);
        weeknumbers.push(getWeek(date, { weekStartsOn }));
        isoWeeknumbers.push(getISOWeek(date));
      }
      comps = {
        firstDayOfWeek: this.firstDayOfWeek,
        inLeapYear,
        firstWeekday,
        days,
        weeks,
        month,
        year,
        weeknumbers,
        isoWeeknumbers
      };
      this.monthData[key] = comps;
    }
    return comps;
  }
  getThisMonthComps() {
    const { month, year } = this.getDateParts(new Date());
    return this.getMonthComps(month, year);
  }
  getPrevMonthComps(month, year) {
    if (month === 1)
      return this.getMonthComps(12, year - 1);
    return this.getMonthComps(month - 1, year);
  }
  getNextMonthComps(month, year) {
    if (month === 12)
      return this.getMonthComps(1, year + 1);
    return this.getMonthComps(month + 1, year);
  }
  getDayId(date) {
    return this.format(date, "YYYY-MM-DD");
  }
  getCalendarDays({ weeks, monthComps, prevMonthComps, nextMonthComps }) {
    const days = [];
    const { firstDayOfWeek, firstWeekday, isoWeeknumbers, weeknumbers } = monthComps;
    const prevMonthDaysToShow = firstWeekday + (firstWeekday < firstDayOfWeek ? daysInWeek : 0) - firstDayOfWeek;
    let prevMonth = true;
    let thisMonth = false;
    let nextMonth = false;
    const formatter = new Intl.DateTimeFormat(this.id, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    let day = prevMonthComps.days - prevMonthDaysToShow + 1;
    let dayFromEnd = prevMonthComps.days - day + 1;
    let weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
    let weekdayOrdinalFromEnd = 1;
    let week = prevMonthComps.weeks;
    let weekFromEnd = 1;
    let month = prevMonthComps.month;
    let year = prevMonthComps.year;
    const today = new Date();
    const todayDay = today.getDate();
    const todayMonth = today.getMonth() + 1;
    const todayYear = today.getFullYear();
    const dft = (y, m, d) => (hours, minutes, seconds, milliseconds) => this.normalizeDate({
      year: y,
      month: m,
      day: d,
      hours,
      minutes,
      seconds,
      milliseconds
    });
    for (let w = 1; w <= weeks; w++) {
      for (let i = 1, weekday = firstDayOfWeek; i <= daysInWeek; i++, weekday += weekday === daysInWeek ? 1 - daysInWeek : 1) {
        if (prevMonth && weekday === firstWeekday) {
          day = 1;
          dayFromEnd = monthComps.days;
          weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
          weekdayOrdinalFromEnd = Math.floor((monthComps.days - day) / daysInWeek + 1);
          week = 1;
          weekFromEnd = monthComps.weeks;
          month = monthComps.month;
          year = monthComps.year;
          prevMonth = false;
          thisMonth = true;
        }
        const dateFromTime = dft(year, month, day);
        const range = {
          start: dateFromTime(0, 0, 0),
          end: dateFromTime(23, 59, 59, 999)
        };
        const date = range.start;
        const id = `${pad(year, 4)}-${pad(month, 2)}-${pad(day, 2)}`;
        const weekdayPosition = i;
        const weekdayPositionFromEnd = daysInWeek - i;
        const weeknumber = weeknumbers[w - 1];
        const isoWeeknumber = isoWeeknumbers[w - 1];
        const isToday = day === todayDay && month === todayMonth && year === todayYear;
        const isFirstDay = thisMonth && day === 1;
        const isLastDay = thisMonth && day === monthComps.days;
        const onTop = w === 1;
        const onBottom = w === weeks;
        const onLeft = i === 1;
        const onRight = i === daysInWeek;
        days.push({
          id,
          label: day.toString(),
          ariaLabel: formatter.format(new Date(year, month - 1, day)),
          day,
          dayFromEnd,
          weekday,
          weekdayPosition,
          weekdayPositionFromEnd,
          weekdayOrdinal,
          weekdayOrdinalFromEnd,
          week,
          weekFromEnd,
          weeknumber,
          isoWeeknumber,
          month,
          year,
          dateFromTime,
          date,
          range,
          isToday,
          isFirstDay,
          isLastDay,
          inMonth: thisMonth,
          inPrevMonth: prevMonth,
          inNextMonth: nextMonth,
          onTop,
          onBottom,
          onLeft,
          onRight,
          classes: [
            `id-${id}`,
            `day-${day}`,
            `day-from-end-${dayFromEnd}`,
            `weekday-${weekday}`,
            `weekday-position-${weekdayPosition}`,
            `weekday-ordinal-${weekdayOrdinal}`,
            `weekday-ordinal-from-end-${weekdayOrdinalFromEnd}`,
            `week-${week}`,
            `week-from-end-${weekFromEnd}`,
            {
              "is-today": isToday,
              "is-first-day": isFirstDay,
              "is-last-day": isLastDay,
              "in-month": thisMonth,
              "in-prev-month": prevMonth,
              "in-next-month": nextMonth,
              "on-top": onTop,
              "on-bottom": onBottom,
              "on-left": onLeft,
              "on-right": onRight
            }
          ]
        });
        if (thisMonth && isLastDay) {
          thisMonth = false;
          nextMonth = true;
          day = 1;
          dayFromEnd = nextMonthComps.days;
          weekdayOrdinal = 1;
          weekdayOrdinalFromEnd = Math.floor((nextMonthComps.days - day) / daysInWeek + 1);
          week = 1;
          weekFromEnd = nextMonthComps.weeks;
          month = nextMonthComps.month;
          year = nextMonthComps.year;
        } else {
          day++;
          dayFromEnd--;
          weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
          weekdayOrdinalFromEnd = Math.floor((monthComps.days - day) / daysInWeek + 1);
        }
      }
      week++;
      weekFromEnd--;
    }
    return days;
  }
}
class Attribute {
  constructor({
    key,
    hashcode,
    highlight,
    content,
    dot,
    bar,
    popover,
    dates,
    excludeDates,
    excludeMode,
    customData,
    order,
    pinPage
  }, theme, locale) {
    this.key = isUndefined_1(key) ? createGuid() : key;
    this.hashcode = hashcode;
    this.customData = customData;
    this.order = order || 0;
    this.dateOpts = { order, locale };
    this.pinPage = pinPage;
    if (highlight) {
      this.highlight = theme.normalizeHighlight(highlight);
    }
    if (content) {
      this.content = theme.normalizeContent(content);
    }
    if (dot) {
      this.dot = theme.normalizeDot(dot);
    }
    if (bar) {
      this.bar = theme.normalizeBar(bar);
    }
    if (popover) {
      this.popover = popover;
    }
    this.dates = locale.normalizeDates(dates, this.dateOpts);
    this.hasDates = !!arrayHasItems(this.dates);
    this.excludeDates = locale.normalizeDates(excludeDates, this.dateOpts);
    this.hasExcludeDates = !!arrayHasItems(this.excludeDates);
    this.excludeMode = excludeMode || "intersects";
    if (this.hasExcludeDates && !this.hasDates) {
      this.dates.push(new DateInfo({}, this.dateOpts));
      this.hasDates = true;
    }
    this.isComplex = some(this.dates, (d) => d.isComplex);
  }
  intersectsDate(date) {
    date = date instanceof DateInfo ? date : new DateInfo(date, this.dateOpts);
    return !this.excludesDate(date) && (this.dates.find((d) => d.intersectsDate(date)) || false);
  }
  includesDate(date) {
    date = date instanceof DateInfo ? date : new DateInfo(date, this.dateOpts);
    return !this.excludesDate(date) && (this.dates.find((d) => d.includesDate(date)) || false);
  }
  excludesDate(date) {
    date = date instanceof DateInfo ? date : new DateInfo(date, this.dateOpts);
    return this.hasExcludeDates && this.excludeDates.find((ed) => this.excludeMode === "intersects" && ed.intersectsDate(date) || this.excludeMode === "includes" && ed.includesDate(date));
  }
  intersectsDay(day) {
    return !this.excludesDay(day) && (this.dates.find((d) => d.intersectsDay(day)) || false);
  }
  excludesDay(day) {
    return this.hasExcludeDates && this.excludeDates.find((ed) => ed.intersectsDay(day));
  }
}
const maxSwipeTime = 300;
const minHorizontalSwipeDistance = 60;
const maxVerticalSwipeDistance = 80;
var touch = {
  maxSwipeTime,
  minHorizontalSwipeDistance,
  maxVerticalSwipeDistance
};
const title = "MMMM YYYY";
const weekdays = "W";
const navMonths = "MMM";
const input = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
];
const inputDateTime = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
];
const inputDateTime24hr = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
];
const inputTime = [
  "h:mm A"
];
const inputTime24hr = [
  "HH:mm"
];
const dayPopover = "WWW, MMM D, YYYY";
const data = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
];
const model = "iso";
const iso = "YYYY-MM-DDTHH:mm:ss.SSSZ";
var masks = {
  title,
  weekdays,
  navMonths,
  input,
  inputDateTime,
  inputDateTime24hr,
  inputTime,
  inputTime24hr,
  dayPopover,
  data,
  model,
  iso
};
const sm = "640px";
const md = "768px";
const lg = "1024px";
const xl = "1280px";
var defaultScreens = {
  sm,
  md,
  lg,
  xl
};
const defaultConfig = {
  componentPrefix: "v",
  color: "blue",
  isDark: false,
  navVisibility: "click",
  titlePosition: "center",
  transition: "slide-h",
  touch,
  masks,
  screens: defaultScreens,
  locales,
  datePicker: {
    updateOnInput: true,
    inputDebounce: 1e3,
    popover: {
      visibility: "hover-focus",
      placement: "bottom-start",
      keepVisibleOnInput: false,
      isInteractive: true
    }
  }
};
const state = vue_cjs_prod$1.reactive(defaultConfig);
const computedLocales = vue_cjs_prod$1.computed(() => {
  return mapValues_1(state.locales, (v) => {
    v.masks = defaultsDeep_1(v.masks, state.masks);
    return v;
  });
});
const getDefault = (path) => {
  if (window && has(window.__vcalendar__, path)) {
    return get_1(window.__vcalendar__, path);
  }
  return get_1(state, path);
};
const rootMixin$1 = {
  props: {
    color: {
      type: String,
      default: () => getDefault("color")
    },
    isDark: {
      type: Boolean,
      default: () => getDefault("isDark")
    },
    firstDayOfWeek: Number,
    masks: Object,
    locale: [String, Object],
    timezone: String,
    minDate: null,
    maxDate: null,
    minDateExact: null,
    maxDateExact: null,
    disabledDates: null,
    availableDates: null,
    theme: null
  },
  computed: {
    $theme() {
      if (this.theme instanceof Theme)
        return this.theme;
      return new Theme({
        color: this.color,
        isDark: this.isDark
      });
    },
    $locale() {
      if (this.locale instanceof Locale)
        return this.locale;
      const config = isObject$e(this.locale) ? this.locale : {
        id: this.locale,
        firstDayOfWeek: this.firstDayOfWeek,
        masks: this.masks
      };
      return new Locale(config, {
        locales: computedLocales.value,
        timezone: this.timezone
      });
    },
    disabledDates_() {
      const dates = this.normalizeDates(this.disabledDates);
      const { minDate, minDateExact, maxDate, maxDateExact } = this;
      if (minDateExact || minDate) {
        const end = minDateExact ? this.normalizeDate(minDateExact) : this.normalizeDate(minDate, { time: "00:00:00" });
        dates.push({
          start: null,
          end: new Date(end.getTime() - 1e3)
        });
      }
      if (maxDateExact || maxDate) {
        const start = maxDateExact ? this.normalizeDate(maxDateExact) : this.normalizeDate(maxDate, { time: "23:59:59" });
        dates.push({
          start: new Date(start.getTime() + 1e3),
          end: null
        });
      }
      return dates;
    },
    availableDates_() {
      return this.normalizeDates(this.availableDates);
    },
    disabledAttribute() {
      return new Attribute({
        key: "disabled",
        dates: this.disabledDates_,
        excludeDates: this.availableDates_,
        excludeMode: "includes",
        order: 100
      }, this.$theme, this.$locale);
    }
  },
  methods: {
    formatDate(date, mask) {
      return this.$locale ? this.$locale.format(date, mask) : "";
    },
    parseDate(text, mask) {
      if (!this.$locale)
        return null;
      const value = this.$locale.parse(text, mask);
      return isDate$2(value) ? value : null;
    },
    normalizeDate(date, config) {
      return this.$locale ? this.$locale.normalizeDate(date, config) : date;
    },
    normalizeDates(dates) {
      return this.$locale.normalizeDates(dates, {
        isFullDay: true
      });
    },
    pageForDate(date) {
      return this.$locale.getDateParts(this.normalizeDate(date));
    },
    pageForThisMonth() {
      return this.pageForDate(new Date());
    }
  }
};
const slotMixin$1 = {
  methods: {
    safeSlot(name, args, def = null) {
      return isFunction_1$1(this.$slots[name]) ? this.$slots[name](args) : def;
    }
  }
};
const childMixin = childMixin$1;
const rootMixin = rootMixin$1;
const slotMixin = slotMixin$1;
const _sfc_main$8$1 = {
  name: "PopoverRow",
  mixins: [childMixin],
  props: {
    attribute: Object
  },
  computed: {
    indicator() {
      const { highlight, dot, bar, popover } = this.attribute;
      if (popover && popover.hideIndicator)
        return null;
      if (highlight) {
        const { color, isDark } = highlight.start;
        return {
          style: __spreadProps$1(__spreadValues$1({}, this.theme.bgAccentHigh({
            color,
            isDark: !isDark
          })), {
            width: "10px",
            height: "5px",
            borderRadius: "3px"
          })
        };
      }
      if (dot) {
        const { color, isDark } = dot.start;
        return {
          style: __spreadProps$1(__spreadValues$1({}, this.theme.bgAccentHigh({
            color,
            isDark: !isDark
          })), {
            width: "5px",
            height: "5px",
            borderRadius: "50%"
          })
        };
      }
      if (bar) {
        const { color, isDark } = bar.start;
        return {
          style: __spreadProps$1(__spreadValues$1({}, this.theme.bgAccentHigh({
            color,
            isDark: !isDark
          })), {
            width: "10px",
            height: "3px"
          })
        };
      }
      return null;
    }
  }
};
const _hoisted_1$4 = { class: "vc-day-popover-row" };
const _hoisted_2$4 = {
  key: 0,
  class: "vc-day-popover-row-indicator"
};
const _hoisted_3$3 = { class: "vc-day-popover-row-content" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return vue_cjs_prod$1.openBlock(), vue_cjs_prod$1.createElementBlock("div", _hoisted_1$4, [
    $options.indicator ? (vue_cjs_prod$1.openBlock(), vue_cjs_prod$1.createElementBlock("div", _hoisted_2$4, [
      vue_cjs_prod$1.createElementVNode("span", {
        style: vue_cjs_prod$1.normalizeStyle($options.indicator.style),
        class: vue_cjs_prod$1.normalizeClass($options.indicator.class)
      }, null, 6)
    ])) : vue_cjs_prod$1.createCommentVNode("", true),
    vue_cjs_prod$1.createElementVNode("div", _hoisted_3$3, [
      vue_cjs_prod$1.renderSlot(_ctx.$slots, "default", {}, () => [
        vue_cjs_prod$1.createTextVNode(vue_cjs_prod$1.toDisplayString($props.attribute.popover ? $props.attribute.popover.label : "No content provided"), 1)
      ])
    ])
  ]);
}
var PopoverRow = /* @__PURE__ */ _export_sfc$1(_sfc_main$8$1, [["render", _sfc_render$4]]);
const _defSize = "26px";
const _defViewBox = "0 0 32 32";
const icons = {
  "left-arrow": {
    viewBox: "0 -1 16 34",
    path: "M11.196 10c0 0.143-0.071 0.304-0.179 0.411l-7.018 7.018 7.018 7.018c0.107 0.107 0.179 0.268 0.179 0.411s-0.071 0.304-0.179 0.411l-0.893 0.893c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-8.321-8.321c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l8.321-8.321c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l0.893 0.893c0.107 0.107 0.179 0.25 0.179 0.411z"
  },
  "right-arrow": {
    viewBox: "-5 -1 16 34",
    path: "M10.625 17.429c0 0.143-0.071 0.304-0.179 0.411l-8.321 8.321c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-0.893-0.893c-0.107-0.107-0.179-0.25-0.179-0.411 0-0.143 0.071-0.304 0.179-0.411l7.018-7.018-7.018-7.018c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l0.893-0.893c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l8.321 8.321c0.107 0.107 0.179 0.268 0.179 0.411z"
  }
};
const _sfc_main$7$1 = {
  props: ["name"],
  data() {
    return {
      width: _defSize,
      height: _defSize,
      viewBox: _defViewBox,
      path: "",
      isBaseline: false
    };
  },
  mounted() {
    this.updateIcon();
  },
  watch: {
    name() {
      this.updateIcon();
    }
  },
  methods: {
    updateIcon() {
      const icon = icons[this.name];
      if (icon) {
        this.width = icon.width || _defSize;
        this.height = icon.height || _defSize;
        this.viewBox = icon.viewBox;
        this.path = icon.path;
      }
    }
  }
};
const _hoisted_1$3 = ["width", "height", "viewBox"];
const _hoisted_2$3 = ["d"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return vue_cjs_prod$1.openBlock(), vue_cjs_prod$1.createElementBlock("svg", {
    class: "vc-svg-icon",
    width: $data.width,
    height: $data.height,
    viewBox: $data.viewBox
  }, [
    vue_cjs_prod$1.createElementVNode("path", { d: $data.path }, null, 8, _hoisted_2$3)
  ], 8, _hoisted_1$3);
}
var SvgIcon = /* @__PURE__ */ _export_sfc$1(_sfc_main$7$1, [["render", _sfc_render$3]]);
const _yearGroupCount = 12;
const _sfc_main$6$1 = {
  name: "CalendarNav",
  emits: ["input"],
  components: {
    SvgIcon
  },
  mixins: [childMixin],
  props: {
    value: { type: Object, default: () => ({ month: 0, year: 0 }) },
    validator: { type: Function, default: () => () => true }
  },
  data() {
    return {
      monthMode: true,
      yearIndex: 0,
      yearGroupIndex: 0,
      onSpaceOrEnter
    };
  },
  computed: {
    month() {
      return this.value ? this.value.month || 0 : 0;
    },
    year() {
      return this.value ? this.value.year || 0 : 0;
    },
    title() {
      return this.monthMode ? this.yearIndex : `${this.firstYear} - ${this.lastYear}`;
    },
    monthItems() {
      return this.getMonthItems(this.yearIndex);
    },
    yearItems() {
      return this.getYearItems(this.yearGroupIndex);
    },
    prevItemsEnabled() {
      return this.monthMode ? this.prevMonthItemsEnabled : this.prevYearItemsEnabled;
    },
    nextItemsEnabled() {
      return this.monthMode ? this.nextMonthItemsEnabled : this.nextYearItemsEnabled;
    },
    prevMonthItemsEnabled() {
      return this.getMonthItems(this.yearIndex - 1).some((i) => !i.isDisabled);
    },
    nextMonthItemsEnabled() {
      return this.getMonthItems(this.yearIndex + 1).some((i) => !i.isDisabled);
    },
    prevYearItemsEnabled() {
      return this.getYearItems(this.yearGroupIndex - 1).some((i) => !i.isDisabled);
    },
    nextYearItemsEnabled() {
      return this.getYearItems(this.yearGroupIndex + 1).some((i) => !i.isDisabled);
    },
    activeItems() {
      return this.monthMode ? this.monthItems : this.yearItems;
    },
    firstYear() {
      return head_1(this.yearItems.map((i) => i.year));
    },
    lastYear() {
      return last_1(this.yearItems.map((i) => i.year));
    }
  },
  watch: {
    year() {
      this.yearIndex = this.year;
    },
    yearIndex(val) {
      this.yearGroupIndex = this.getYearGroupIndex(val);
    },
    value() {
      this.focusFirstItem();
    }
  },
  created() {
    this.yearIndex = this.year;
  },
  mounted() {
    this.focusFirstItem();
  },
  methods: {
    focusFirstItem() {
      this.$nextTick(() => {
        const focusableEl = this.$refs.navContainer.querySelector(".vc-nav-item:not(.is-disabled)");
        if (focusableEl) {
          focusableEl.focus();
        }
      });
    },
    getItemClasses({ isActive, isCurrent, isDisabled }) {
      const classes = ["vc-nav-item"];
      if (isActive) {
        classes.push("is-active");
      } else if (isCurrent) {
        classes.push("is-current");
      }
      if (isDisabled) {
        classes.push("is-disabled");
      }
      return classes;
    },
    getYearGroupIndex(year) {
      return Math.floor(year / _yearGroupCount);
    },
    getMonthItems(year) {
      const { month: thisMonth, year: thisYear } = this.pageForDate(new Date());
      return this.locale.getMonthDates().map((d, i) => {
        const month = i + 1;
        return {
          month,
          year,
          id: `${year}.${pad(month, 2)}`,
          label: this.locale.format(d, this.masks.navMonths),
          ariaLabel: this.locale.format(d, "MMMM YYYY"),
          isActive: month === this.month && year === this.year,
          isCurrent: month === thisMonth && year === thisYear,
          isDisabled: !this.validator({ month, year }),
          click: () => this.monthClick(month, year)
        };
      });
    },
    getYearItems(yearGroupIndex) {
      const { _, year: thisYear } = this.pageForDate(new Date());
      const startYear = yearGroupIndex * _yearGroupCount;
      const endYear = startYear + _yearGroupCount;
      const items = [];
      for (let year = startYear; year < endYear; year += 1) {
        let enabled = false;
        for (let month = 1; month < 12; month++) {
          enabled = this.validator({ month, year });
          if (enabled)
            break;
        }
        items.push({
          year,
          id: year,
          label: year,
          ariaLabel: year,
          isActive: year === this.year,
          isCurrent: year === thisYear,
          isDisabled: !enabled,
          click: () => this.yearClick(year)
        });
      }
      return items;
    },
    monthClick(month, year) {
      if (this.validator({ month, year })) {
        this.$emit("input", { month, year });
      }
    },
    yearClick(year) {
      this.yearIndex = year;
      this.monthMode = true;
      this.focusFirstItem();
    },
    toggleMode() {
      this.monthMode = !this.monthMode;
    },
    movePrev() {
      if (!this.prevItemsEnabled)
        return;
      if (this.monthMode) {
        this.movePrevYear();
      }
      this.movePrevYearGroup();
    },
    moveNext() {
      if (!this.nextItemsEnabled)
        return;
      if (this.monthMode) {
        this.moveNextYear();
      }
      this.moveNextYearGroup();
    },
    movePrevYear() {
      this.yearIndex--;
    },
    moveNextYear() {
      this.yearIndex++;
    },
    movePrevYearGroup() {
      this.yearGroupIndex--;
    },
    moveNextYearGroup() {
      this.yearGroupIndex++;
    }
  }
};
const _hoisted_1$2 = {
  class: "vc-nav-container",
  ref: "navContainer"
};
const _hoisted_2$2 = { class: "vc-nav-header" };
const _hoisted_3$2 = ["tabindex"];
const _hoisted_4$2 = ["tabindex"];
const _hoisted_5$1 = { class: "vc-nav-items" };
const _hoisted_6$1 = ["data-id", "aria-label", "tabindex", "onClick", "onKeydown"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_svg_icon = vue_cjs_prod$1.resolveComponent("svg-icon");
  return vue_cjs_prod$1.openBlock(), vue_cjs_prod$1.createElementBlock("div", _hoisted_1$2, [
    vue_cjs_prod$1.createElementVNode("div", _hoisted_2$2, [
      vue_cjs_prod$1.createElementVNode("span", {
        role: "button",
        class: vue_cjs_prod$1.normalizeClass(["vc-nav-arrow is-left", { "is-disabled": !$options.prevItemsEnabled }]),
        tabindex: $options.prevItemsEnabled ? 0 : void 0,
        onClick: _cache[0] || (_cache[0] = (...args) => $options.movePrev && $options.movePrev(...args)),
        onKeydown: _cache[1] || (_cache[1] = (e) => $data.onSpaceOrEnter(e, $options.movePrev))
      }, [
        vue_cjs_prod$1.renderSlot(_ctx.$slots, "nav-left-button", {}, () => [
          vue_cjs_prod$1.createVNode(_component_svg_icon, {
            name: "left-arrow",
            width: "20px",
            height: "24px"
          })
        ])
      ], 42, _hoisted_3$2),
      vue_cjs_prod$1.createElementVNode("span", {
        role: "button",
        class: "vc-nav-title vc-grid-focus",
        style: { whiteSpace: "nowrap" },
        tabindex: "0",
        onClick: _cache[2] || (_cache[2] = (...args) => $options.toggleMode && $options.toggleMode(...args)),
        onKeydown: _cache[3] || (_cache[3] = (e) => $data.onSpaceOrEnter(e, $options.toggleMode))
      }, vue_cjs_prod$1.toDisplayString($options.title), 33),
      vue_cjs_prod$1.createElementVNode("span", {
        role: "button",
        class: vue_cjs_prod$1.normalizeClass(["vc-nav-arrow is-right", { "is-disabled": !$options.nextItemsEnabled }]),
        tabindex: $options.nextItemsEnabled ? 0 : void 0,
        onClick: _cache[4] || (_cache[4] = (...args) => $options.moveNext && $options.moveNext(...args)),
        onKeydown: _cache[5] || (_cache[5] = (e) => $data.onSpaceOrEnter(e, $options.moveNext))
      }, [
        vue_cjs_prod$1.renderSlot(_ctx.$slots, "nav-right-button", {}, () => [
          vue_cjs_prod$1.createVNode(_component_svg_icon, {
            name: "right-arrow",
            width: "20px",
            height: "24px"
          })
        ])
      ], 42, _hoisted_4$2)
    ]),
    vue_cjs_prod$1.createElementVNode("div", _hoisted_5$1, [
      (vue_cjs_prod$1.openBlock(true), vue_cjs_prod$1.createElementBlock(vue_cjs_prod$1.Fragment, null, vue_cjs_prod$1.renderList($options.activeItems, (item) => {
        return vue_cjs_prod$1.openBlock(), vue_cjs_prod$1.createElementBlock("span", {
          key: item.label,
          role: "button",
          "data-id": item.id,
          "aria-label": item.ariaLabel,
          class: vue_cjs_prod$1.normalizeClass($options.getItemClasses(item)),
          tabindex: item.isDisabled ? void 0 : 0,
          onClick: item.click,
          onKeydown: (e) => $data.onSpaceOrEnter(e, item.click)
        }, vue_cjs_prod$1.toDisplayString(item.label), 43, _hoisted_6$1);
      }), 128))
    ])
  ], 512);
}
var CalendarNav = /* @__PURE__ */ _export_sfc$1(_sfc_main$6$1, [["render", _sfc_render$2]]);
function showPopover(opts) {
  if (document) {
    document.dispatchEvent(new CustomEvent("show-popover", {
      detail: opts
    }));
  }
}
function hidePopover(opts) {
  if (document) {
    document.dispatchEvent(new CustomEvent("hide-popover", {
      detail: opts
    }));
  }
}
function togglePopover(opts) {
  if (document) {
    document.dispatchEvent(new CustomEvent("toggle-popover", {
      detail: opts
    }));
  }
}
function updatePopover(opts) {
  if (document) {
    document.dispatchEvent(new CustomEvent("update-popover", {
      detail: opts
    }));
  }
}
function getPopoverTriggerEvents(opts) {
  const { visibility } = opts;
  const click = visibility === "click";
  const hover = visibility === "hover";
  const hoverFocus = visibility === "hover-focus";
  const focus = visibility === "focus";
  opts.autoHide = !click;
  let hovered = false;
  let focused = false;
  const { isRenderFn } = opts;
  const events = {
    click: isRenderFn ? "onClick" : "click",
    mousemove: isRenderFn ? "onMousemove" : "mousemove",
    mouseleave: isRenderFn ? "onMouseleave" : "mouseleave",
    focusin: isRenderFn ? "onFocusin" : "focusin",
    focusout: isRenderFn ? "onFocusout" : "focusout"
  };
  return {
    [events.click](e) {
      if (click) {
        opts.ref = e.target;
        togglePopover(opts);
        e.stopPropagation();
      }
    },
    [events.mousemove](e) {
      opts.ref = e.currentTarget;
      if (!hovered) {
        hovered = true;
        if (hover || hoverFocus) {
          showPopover(opts);
        }
      }
    },
    [events.mouseleave](e) {
      opts.ref = e.target;
      if (hovered) {
        hovered = false;
        if (hover || hoverFocus && !focused) {
          hidePopover(opts);
        }
      }
    },
    [events.focusin](e) {
      opts.ref = e.currentTarget;
      if (!focused) {
        focused = true;
        if (focus || hoverFocus) {
          showPopover(opts);
        }
      }
    },
    [events.focusout](e) {
      opts.ref = e.currentTarget;
      if (focused && !elementContains(opts.ref, e.relatedTarget)) {
        focused = false;
        if (focus || hoverFocus && !hovered) {
          hidePopover(opts);
        }
      }
    }
  };
}
const _sfc_main$5$1 = {
  name: "CalendarDay",
  emits: [
    "dayclick",
    "daymouseenter",
    "daymouseleave",
    "dayfocusin",
    "dayfocusout",
    "daykeydown"
  ],
  mixins: [childMixin, slotMixin],
  inheritAttrs: false,
  render() {
    const backgroundsLayer = () => this.hasBackgrounds && vue_cjs_prod$1.h("div", {
      class: "vc-highlights vc-day-layer"
    }, this.backgrounds.map(({ key, wrapperClass, class: bgClass, style }) => vue_cjs_prod$1.h("div", {
      key,
      class: wrapperClass
    }, [
      vue_cjs_prod$1.h("div", {
        class: bgClass,
        style
      })
    ])));
    const contentLayer = () => this.safeSlot("day-content", {
      day: this.day,
      attributes: this.day.attributes,
      attributesMap: this.day.attributesMap,
      dayProps: this.dayContentProps,
      dayEvents: this.dayContentEvents
    }) || vue_cjs_prod$1.h("span", __spreadProps$1(__spreadValues$1(__spreadProps$1(__spreadValues$1({}, this.dayContentProps), {
      class: this.dayContentClass,
      style: this.dayContentStyle
    }), this.dayContentEvents), {
      ref: "content"
    }), [this.day.label]);
    const dotsLayer = () => this.hasDots && vue_cjs_prod$1.h("div", {
      class: "vc-day-layer vc-day-box-center-bottom"
    }, [
      vue_cjs_prod$1.h("div", {
        class: "vc-dots"
      }, this.dots.map(({ key, class: bgClass, style }) => vue_cjs_prod$1.h("span", {
        key,
        class: bgClass,
        style
      })))
    ]);
    const barsLayer = () => this.hasBars && vue_cjs_prod$1.h("div", {
      class: "vc-day-layer vc-day-box-center-bottom"
    }, [
      vue_cjs_prod$1.h("div", {
        class: "vc-bars"
      }, this.bars.map(({ key, class: bgClass, style }) => vue_cjs_prod$1.h("span", {
        key,
        class: bgClass,
        style
      })))
    ]);
    return vue_cjs_prod$1.h("div", {
      class: [
        "vc-day",
        ...this.day.classes,
        { "vc-day-box-center-center": !this.$slots["day-content"] },
        { "is-not-in-month": !this.inMonth }
      ]
    }, [backgroundsLayer(), contentLayer(), dotsLayer(), barsLayer()]);
  },
  inject: ["sharedState"],
  props: {
    day: { type: Object, required: true }
  },
  data() {
    return {
      glyphs: {},
      dayContentEvents: {}
    };
  },
  computed: {
    label() {
      return this.day.label;
    },
    startTime() {
      return this.day.range.start.getTime();
    },
    endTime() {
      return this.day.range.end.getTime();
    },
    inMonth() {
      return this.day.inMonth;
    },
    isDisabled() {
      return this.day.isDisabled;
    },
    backgrounds() {
      return this.glyphs.backgrounds;
    },
    hasBackgrounds() {
      return !!arrayHasItems(this.backgrounds);
    },
    content() {
      return this.glyphs.content;
    },
    dots() {
      return this.glyphs.dots;
    },
    hasDots() {
      return !!arrayHasItems(this.dots);
    },
    bars() {
      return this.glyphs.bars;
    },
    hasBars() {
      return !!arrayHasItems(this.bars);
    },
    popovers() {
      return this.glyphs.popovers;
    },
    hasPopovers() {
      return !!arrayHasItems(this.popovers);
    },
    dayContentClass() {
      return [
        "vc-day-content vc-focusable",
        { "is-disabled": this.isDisabled },
        get_1(last_1(this.content), "class") || ""
      ];
    },
    dayContentStyle() {
      return get_1(last_1(this.content), "style");
    },
    dayContentProps() {
      let tabindex;
      if (this.day.isFocusable) {
        tabindex = "0";
      } else if (this.day.inMonth) {
        tabindex = "-1";
      }
      return {
        tabindex,
        "aria-label": this.day.ariaLabel,
        "aria-disabled": this.day.isDisabled ? "true" : "false",
        role: "button"
      };
    },
    dayEvent() {
      return __spreadProps$1(__spreadValues$1({}, this.day), {
        el: this.$refs.content,
        popovers: this.popovers
      });
    }
  },
  watch: {
    theme() {
      this.refresh();
    },
    popovers() {
      this.refreshPopovers();
    },
    "day.shouldRefresh"() {
      this.refresh();
    }
  },
  mounted() {
    this.refreshPopovers();
    this.refresh();
  },
  methods: {
    getDayEvent(origEvent) {
      return __spreadProps$1(__spreadValues$1({}, this.dayEvent), {
        event: origEvent
      });
    },
    click(e) {
      this.$emit("dayclick", this.getDayEvent(e));
    },
    mouseenter(e) {
      this.$emit("daymouseenter", this.getDayEvent(e));
    },
    mouseleave(e) {
      this.$emit("daymouseleave", this.getDayEvent(e));
    },
    focusin(e) {
      this.$emit("dayfocusin", this.getDayEvent(e));
    },
    focusout(e) {
      this.$emit("dayfocusout", this.getDayEvent(e));
    },
    keydown(e) {
      this.$emit("daykeydown", this.getDayEvent(e));
    },
    refresh() {
      if (!this.day.shouldRefresh)
        return;
      this.day.shouldRefresh = false;
      const glyphs = {
        backgrounds: [],
        dots: [],
        bars: [],
        popovers: [],
        content: []
      };
      this.day.attributes = Object.values(this.day.attributesMap || {}).sort((a, b) => a.order - b.order);
      this.day.attributes.forEach((attr) => {
        const { targetDate } = attr;
        const { isDate: isDate2, isComplex, startTime, endTime } = targetDate;
        const onStart = this.startTime <= startTime;
        const onEnd = this.endTime >= endTime;
        const onStartAndEnd = onStart && onEnd;
        const onStartOrEnd = onStart || onEnd;
        const dateInfo = {
          isDate: isDate2,
          isComplex,
          onStart,
          onEnd,
          onStartAndEnd,
          onStartOrEnd
        };
        this.processHighlight(attr, dateInfo, glyphs);
        this.processNonHighlight(attr, "content", dateInfo, glyphs.content);
        this.processNonHighlight(attr, "dot", dateInfo, glyphs.dots);
        this.processNonHighlight(attr, "bar", dateInfo, glyphs.bars);
        this.processPopover(attr, glyphs);
      });
      this.glyphs = glyphs;
    },
    processHighlight({ key, highlight }, { isDate: isDate2, isComplex, onStart, onEnd, onStartAndEnd }, { backgrounds, content }) {
      if (!highlight)
        return;
      const { base, start, end } = highlight;
      if (isDate2 || isComplex) {
        backgrounds.push({
          key,
          wrapperClass: "vc-day-layer vc-day-box-center-center",
          class: ["vc-highlight", start.class],
          style: start.style
        });
        content.push({
          key: `${key}-content`,
          class: start.contentClass,
          style: start.contentStyle
        });
      } else if (onStartAndEnd) {
        backgrounds.push({
          key,
          wrapperClass: "vc-day-layer vc-day-box-center-center",
          class: ["vc-highlight", start.class],
          style: start.style
        });
        content.push({
          key: `${key}-content`,
          class: start.contentClass,
          style: start.contentStyle
        });
      } else if (onStart) {
        backgrounds.push({
          key: `${key}-base`,
          wrapperClass: "vc-day-layer vc-day-box-right-center",
          class: ["vc-highlight vc-highlight-base-start", base.class],
          style: base.style
        });
        backgrounds.push({
          key,
          wrapperClass: "vc-day-layer vc-day-box-center-center",
          class: ["vc-highlight", start.class],
          style: start.style
        });
        content.push({
          key: `${key}-content`,
          class: start.contentClass,
          style: start.contentStyle
        });
      } else if (onEnd) {
        backgrounds.push({
          key: `${key}-base`,
          wrapperClass: "vc-day-layer vc-day-box-left-center",
          class: ["vc-highlight vc-highlight-base-end", base.class],
          style: base.style
        });
        backgrounds.push({
          key,
          wrapperClass: "vc-day-layer vc-day-box-center-center",
          class: ["vc-highlight", end.class],
          style: end.style
        });
        content.push({
          key: `${key}-content`,
          class: end.contentClass,
          style: end.contentStyle
        });
      } else {
        backgrounds.push({
          key: `${key}-middle`,
          wrapperClass: "vc-day-layer vc-day-box-center-center",
          class: ["vc-highlight vc-highlight-base-middle", base.class],
          style: base.style
        });
        content.push({
          key: `${key}-content`,
          class: base.contentClass,
          style: base.contentStyle
        });
      }
    },
    processNonHighlight(attr, itemKey, { isDate: isDate2, onStart, onEnd }, list) {
      if (!attr[itemKey])
        return;
      const { key } = attr;
      const className = `vc-${itemKey}`;
      const { base, start, end } = attr[itemKey];
      if (isDate2 || onStart) {
        list.push({
          key,
          class: [className, start.class],
          style: start.style
        });
      } else if (onEnd) {
        list.push({
          key,
          class: [className, end.class],
          style: end.style
        });
      } else {
        list.push({
          key,
          class: [className, base.class],
          style: base.style
        });
      }
    },
    processPopover(attribute, { popovers }) {
      const { key, customData, popover } = attribute;
      if (!popover)
        return;
      const resolvedPopover = defaults_1({
        key,
        customData,
        attribute
      }, __spreadValues$1({}, popover), {
        visibility: popover.label ? "hover" : "click",
        placement: "bottom",
        isInteractive: !popover.label
      });
      popovers.splice(0, 0, resolvedPopover);
    },
    refreshPopovers() {
      let popoverEvents = {};
      if (arrayHasItems(this.popovers)) {
        popoverEvents = getPopoverTriggerEvents(defaults_1({ id: this.dayPopoverId, data: this.day, isRenderFn: true }, ...this.popovers));
      }
      this.dayContentEvents = mergeEvents({
        onClick: this.click,
        onMouseenter: this.mouseenter,
        onMouseleave: this.mouseleave,
        onFocusin: this.focusin,
        onFocusout: this.focusout,
        onKeydown: this.keydown
      }, popoverEvents);
      updatePopover({
        id: this.dayPopoverId,
        data: this.day
      });
    }
  }
};
const _sfc_main$4$1 = {
  name: "CalendarPane",
  emits: ["update:page", "weeknumberclick"],
  mixins: [childMixin, slotMixin],
  inheritAttrs: false,
  render() {
    const header = this.safeSlot("header", this.page) || vue_cjs_prod$1.h("div", { class: `vc-header align-${this.titlePosition}` }, [
      vue_cjs_prod$1.h("div", __spreadValues$1({
        class: "vc-title"
      }, this.navPopoverEvents), [this.safeSlot("header-title", this.page, this.page.title)])
    ]);
    const weekdayCells = this.weekdayLabels.map((wl, i) => vue_cjs_prod$1.h("div", {
      key: i + 1,
      class: "vc-weekday"
    }, [wl]));
    const showWeeknumbersLeft = this.showWeeknumbers_.startsWith("left");
    const showWeeknumbersRight = this.showWeeknumbers_.startsWith("right");
    if (showWeeknumbersLeft) {
      weekdayCells.unshift(vue_cjs_prod$1.h("div", {
        class: "vc-weekday"
      }));
    } else if (showWeeknumbersRight) {
      weekdayCells.push(vue_cjs_prod$1.h("div", {
        class: "vc-weekday"
      }));
    }
    const getWeeknumberCell = (weeknumber) => vue_cjs_prod$1.h("div", {
      class: ["vc-weeknumber"]
    }, [
      vue_cjs_prod$1.h("span", {
        class: ["vc-weeknumber-content", `is-${this.showWeeknumbers_}`],
        onClick: (event) => {
          this.$emit("weeknumberclick", {
            weeknumber,
            days: this.page.days.filter((d) => d[this.weeknumberKey] === weeknumber),
            event
          });
        }
      }, [weeknumber])
    ]);
    const dayCells = [];
    const { daysInWeek: daysInWeek2 } = this.locale;
    this.page.days.forEach((day, i) => {
      const mod = i % daysInWeek2;
      if (showWeeknumbersLeft && mod === 0 || showWeeknumbersRight && mod === daysInWeek2) {
        dayCells.push(getWeeknumberCell(day[this.weeknumberKey]));
      }
      dayCells.push(vue_cjs_prod$1.h(_sfc_main$5$1, __spreadProps$1(__spreadValues$1({}, this.$attrs), {
        day
      }), this.$slots));
      if (showWeeknumbersRight && mod === daysInWeek2 - 1) {
        dayCells.push(getWeeknumberCell(day[this.weeknumberKey]));
      }
    });
    const weeks = vue_cjs_prod$1.h("div", {
      class: {
        "vc-weeks": true,
        "vc-show-weeknumbers": this.showWeeknumbers_,
        "is-left": showWeeknumbersLeft,
        "is-right": showWeeknumbersRight
      }
    }, [weekdayCells, dayCells]);
    return vue_cjs_prod$1.h("div", {
      class: [
        "vc-pane",
        `row-from-end-${this.rowFromEnd}`,
        `column-from-end-${this.columnFromEnd}`
      ],
      ref: "pane"
    }, [header, weeks]);
  },
  props: {
    page: Object,
    position: Number,
    row: Number,
    rowFromEnd: Number,
    column: Number,
    columnFromEnd: Number,
    titlePosition: String,
    navVisibility: {
      type: String,
      default: () => getDefault("navVisibility")
    },
    showWeeknumbers: [Boolean, String],
    showIsoWeeknumbers: [Boolean, String]
  },
  computed: {
    weeknumberKey() {
      return this.showWeeknumbers ? "weeknumber" : "isoWeeknumber";
    },
    showWeeknumbers_() {
      const showWeeknumbers = this.showWeeknumbers || this.showIsoWeeknumbers;
      if (showWeeknumbers == null)
        return "";
      if (isBoolean_1(showWeeknumbers)) {
        return showWeeknumbers ? "left" : "";
      }
      if (showWeeknumbers.startsWith("right")) {
        return this.columnFromEnd > 1 ? "right" : showWeeknumbers;
      }
      return this.column > 1 ? "left" : showWeeknumbers;
    },
    navPlacement() {
      switch (this.titlePosition) {
        case "left":
          return "bottom-start";
        case "right":
          return "bottom-end";
        default:
          return "bottom";
      }
    },
    navPopoverEvents() {
      const { sharedState, navVisibility, navPlacement, page, position } = this;
      return getPopoverTriggerEvents({
        id: sharedState.navPopoverId,
        visibility: navVisibility,
        placement: navPlacement,
        modifiers: [
          { name: "flip", options: { fallbackPlacements: ["bottom"] } }
        ],
        data: { page, position },
        isInteractive: true,
        isRenderFn: true
      });
    },
    weekdayLabels() {
      return this.locale.getWeekdayDates().map((d) => this.format(d, this.masks.weekdays));
    }
  }
};
class AttributeStore {
  constructor(theme, locale, attrs) {
    this.theme = theme;
    this.locale = locale;
    this.map = {};
    this.refresh(attrs, true);
  }
  destroy() {
    this.theme = null;
    this.locale = null;
    this.map = {};
    this.list = [];
    this.pinAttr = null;
  }
  refresh(attrs, reset) {
    const map2 = {};
    const list = [];
    let pinAttr = null;
    const adds = [];
    const deletes = reset ? new Set() : new Set(Object.keys(this.map));
    if (arrayHasItems(attrs)) {
      attrs.forEach((attr, i) => {
        if (!attr || !attr.dates)
          return;
        const key = attr.key ? attr.key.toString() : i.toString();
        const order = attr.order || 0;
        const hashcode = hash(JSON.stringify(attr));
        let exAttr = this.map[key];
        if (!reset && exAttr && exAttr.hashcode === hashcode) {
          deletes.delete(key);
        } else {
          exAttr = new Attribute(__spreadValues$1({
            key,
            order,
            hashcode
          }, attr), this.theme, this.locale);
          adds.push(exAttr);
        }
        if (exAttr && exAttr.pinPage) {
          pinAttr = exAttr;
        }
        map2[key] = exAttr;
        list.push(exAttr);
      });
    }
    this.map = map2;
    this.list = list;
    this.pinAttr = pinAttr;
    return { adds, deletes: Array.from(deletes) };
  }
}
const addHorizontalSwipeHandler = (element, handler, { maxSwipeTime: maxSwipeTime2, minHorizontalSwipeDistance: minHorizontalSwipeDistance2, maxVerticalSwipeDistance: maxVerticalSwipeDistance2 }) => {
  if (!element || !element.addEventListener || !isFunction_1$1(handler)) {
    return null;
  }
  let startX = 0;
  let startY = 0;
  let startTime = null;
  let isSwiping = false;
  function touchStart(e) {
    const t = e.changedTouches[0];
    startX = t.screenX;
    startY = t.screenY;
    startTime = new Date().getTime();
    isSwiping = true;
  }
  function touchEnd(e) {
    if (!isSwiping)
      return;
    isSwiping = false;
    const t = e.changedTouches[0];
    const deltaX = t.screenX - startX;
    const deltaY = t.screenY - startY;
    const deltaTime = new Date().getTime() - startTime;
    if (deltaTime < maxSwipeTime2) {
      if (Math.abs(deltaX) >= minHorizontalSwipeDistance2 && Math.abs(deltaY) <= maxVerticalSwipeDistance2) {
        const arg = { toLeft: false, toRight: false };
        if (deltaX < 0) {
          arg.toLeft = true;
        } else {
          arg.toRight = true;
        }
        handler(arg);
      }
    }
  }
  on(element, "touchstart", touchStart, { passive: true });
  on(element, "touchend", touchEnd, { passive: true });
  return () => {
    off(element, "touchstart", touchStart);
    off(element, "touchend", touchEnd);
  };
};
const _sfc_main$3$1 = {
  name: "Calendar",
  emits: [
    "dayfocusin",
    "dayfocusout",
    "transition-start",
    "transition-end",
    "update:from-page",
    "update:to-page"
  ],
  render() {
    const panes = this.pages.map((page, i) => {
      const position = i + 1;
      const row = Math.ceil((i + 1) / this.columns);
      const rowFromEnd = this.rows - row + 1;
      const column = position % this.columns || this.columns;
      const columnFromEnd = this.columns - column + 1;
      return vue_cjs_prod$1.h(_sfc_main$4$1, __spreadProps$1(__spreadValues$1({}, this.$attrs), {
        key: page.key,
        attributes: this.store,
        page,
        position,
        row,
        rowFromEnd,
        column,
        columnFromEnd,
        titlePosition: this.titlePosition,
        canMove: this.canMove,
        "onUpdate:page": (e) => this.move(e, { position: i + 1 }),
        onDayfocusin: (e) => {
          this.lastFocusedDay = e;
          this.$emit("dayfocusin", e);
        },
        onDayfocusout: (e) => {
          this.lastFocusedDay = null;
          this.$emit("dayfocusout", e);
        }
      }), this.$slots);
    });
    const getArrowButton = (isPrev) => {
      const click = () => this.move(isPrev ? -this.step_ : this.step_);
      const keydown = (e) => onSpaceOrEnter(e, click);
      const isDisabled = isPrev ? !this.canMovePrev : !this.canMoveNext;
      return vue_cjs_prod$1.h("div", {
        class: [
          "vc-arrow",
          `is-${isPrev ? "left" : "right"}`,
          { "is-disabled": isDisabled }
        ],
        role: "button",
        onClick: click,
        onKeydown: keydown
      }, [
        (isPrev ? this.safeSlot("header-left-button", { click }) : this.safeSlot("header-right-button", { click })) || vue_cjs_prod$1.h(SvgIcon, {
          name: isPrev ? "left-arrow" : "right-arrow"
        })
      ]);
    };
    const getNavPopover = () => vue_cjs_prod$1.h(_sfc_main$9$1, {
      id: this.sharedState.navPopoverId,
      contentClass: "vc-nav-popover-container",
      ref: "navPopover"
    }, {
      default: ({ data: data2 }) => {
        const { position, page } = data2;
        return vue_cjs_prod$1.h(CalendarNav, {
          value: page,
          position,
          validator: (e) => this.canMove(e, { position }),
          onInput: (e) => this.move(e)
        }, __spreadValues$1({}, this.$slots));
      }
    });
    const getDayPopover = () => vue_cjs_prod$1.h(_sfc_main$9$1, {
      id: this.sharedState.dayPopoverId,
      contentClass: "vc-day-popover-container"
    }, {
      default: ({ data: day, updateLayout, hide }) => {
        const attributes = Object.values(day.attributes).filter((a) => a.popover);
        const masks2 = this.$locale.masks;
        const format = this.formatDate;
        const dayTitle = format(day.date, masks2.dayPopover);
        return this.safeSlot("day-popover", {
          day,
          attributes,
          masks: masks2,
          format,
          dayTitle,
          updateLayout,
          hide
        }, vue_cjs_prod$1.h("div", [
          masks2.dayPopover && vue_cjs_prod$1.h("div", {
            class: ["vc-day-popover-header"]
          }, [dayTitle]),
          attributes.map((attribute) => vue_cjs_prod$1.h(PopoverRow, {
            key: attribute.key,
            attribute
          }))
        ]));
      }
    });
    return vue_cjs_prod$1.h("div", {
      "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year",
      class: [
        "vc-container",
        `vc-${this.$theme.color}`,
        {
          "vc-is-expanded": this.isExpanded,
          "vc-is-dark": this.$theme.isDark
        }
      ],
      onKeydown: this.handleKeydown,
      onMouseup: (e) => e.preventDefault(),
      ref: "container"
    }, [
      getNavPopover(),
      vue_cjs_prod$1.h("div", {
        class: [
          "vc-pane-container",
          { "in-transition": this.inTransition }
        ]
      }, [
        vue_cjs_prod$1.h(CustomTransition, {
          name: this.transitionName,
          "on-before-enter": () => {
            this.inTransition = true;
          },
          "on-after-enter": () => {
            this.inTransition = false;
          }
        }, {
          default: () => vue_cjs_prod$1.h("div", __spreadProps$1(__spreadValues$1({}, this.$attrs), {
            class: "vc-pane-layout",
            style: {
              gridTemplateColumns: `repeat(${this.columns}, 1fr)`
            },
            key: this.firstPage ? this.firstPage.key : ""
          }), panes)
        }),
        vue_cjs_prod$1.h("div", {
          class: [`vc-arrows-container title-${this.titlePosition}`]
        }, [getArrowButton(true), getArrowButton(false)]),
        this.$slots.footer && this.$slots.footer()
      ]),
      getDayPopover()
    ]);
  },
  mixins: [rootMixin, slotMixin],
  provide() {
    return {
      sharedState: this.sharedState
    };
  },
  props: {
    rows: {
      type: Number,
      default: 1
    },
    columns: {
      type: Number,
      default: 1
    },
    step: Number,
    titlePosition: {
      type: String,
      default: () => getDefault("titlePosition")
    },
    isExpanded: Boolean,
    fromDate: Date,
    toDate: Date,
    fromPage: Object,
    toPage: Object,
    minPage: Object,
    maxPage: Object,
    transition: String,
    attributes: [Object, Array],
    trimWeeks: Boolean,
    disablePageSwipe: Boolean
  },
  data() {
    return {
      pages: [],
      store: null,
      lastFocusedDay: null,
      focusableDay: new Date().getDate(),
      transitionName: "",
      inTransition: false,
      sharedState: {
        navPopoverId: createGuid(),
        dayPopoverId: createGuid(),
        theme: {},
        masks: {},
        locale: {}
      }
    };
  },
  computed: {
    firstPage() {
      return head_1(this.pages);
    },
    lastPage() {
      return last_1(this.pages);
    },
    minPage_() {
      return this.minPage || this.pageForDate(this.minDate);
    },
    maxPage_() {
      return this.maxPage || this.pageForDate(this.maxDate);
    },
    count() {
      return this.rows * this.columns;
    },
    step_() {
      return this.step || this.count;
    },
    canMovePrev() {
      return this.canMove(-this.step_);
    },
    canMoveNext() {
      return this.canMove(this.step_);
    }
  },
  watch: {
    $locale() {
      this.refreshLocale();
      this.refreshPages({ page: this.firstPage, ignoreCache: true });
      this.initStore();
    },
    $theme() {
      this.refreshTheme();
      this.initStore();
    },
    fromDate() {
      this.refreshPages();
    },
    fromPage(val) {
      const firstPage = this.pages && this.pages[0];
      if (pageIsEqualToPage(val, firstPage))
        return;
      this.refreshPages();
    },
    toPage(val) {
      const lastPage = this.pages && this.pages[this.pages.length - 1];
      if (pageIsEqualToPage(val, lastPage))
        return;
      this.refreshPages();
    },
    count() {
      this.refreshPages();
    },
    attributes: {
      handler(val) {
        const { adds, deletes } = this.store.refresh(val);
        this.refreshAttrs(this.pages, adds, deletes);
      },
      deep: true
    },
    pages(val) {
      this.refreshAttrs(val, this.store.list, null, true);
    },
    disabledAttribute() {
      this.refreshDisabledDays();
    },
    lastFocusedDay(val) {
      if (val) {
        this.focusableDay = val.day;
        this.refreshFocusableDays();
      }
    },
    inTransition(val) {
      if (val) {
        this.$emit("transition-start");
      } else {
        this.$emit("transition-end");
        if (this.transitionPromise) {
          this.transitionPromise.resolve(true);
          this.transitionPromise = null;
        }
      }
    }
  },
  created() {
    this.refreshLocale();
    this.refreshTheme();
    this.initStore();
    this.refreshPages();
  },
  mounted() {
    if (!this.disablePageSwipe) {
      this.removeHandlers = addHorizontalSwipeHandler(this.$refs.container, ({ toLeft, toRight }) => {
        if (toLeft) {
          this.moveNext();
        } else if (toRight) {
          this.movePrev();
        }
      }, getDefault("touch"));
    }
  },
  beforeUnmount() {
    this.pages = [];
    this.store.destroy();
    this.store = null;
    this.sharedState = null;
    if (this.removeHandlers)
      this.removeHandlers();
  },
  methods: {
    refreshLocale() {
      this.sharedState.locale = this.$locale;
      this.sharedState.masks = this.$locale.masks;
    },
    refreshTheme() {
      this.sharedState.theme = this.$theme;
    },
    canMove(arg, opts = {}) {
      const page = this.firstPage && this.$locale.toPage(arg, this.firstPage);
      if (!page)
        return false;
      let { position } = opts;
      if (isNumber_1(arg))
        position = 1;
      if (!position) {
        if (pageIsBeforePage(page, this.firstPage)) {
          position = -1;
        } else if (pageIsAfterPage(page, this.lastPage)) {
          position = 1;
        } else {
          return true;
        }
      }
      Object.assign(opts, this.getTargetPageRange(page, {
        position,
        force: true
      }));
      return pageRangeToArray(opts.fromPage, opts.toPage).some((p) => pageIsBetweenPages(p, this.minPage_, this.maxPage_));
    },
    movePrev(opts) {
      return this.move(-this.step_, opts);
    },
    moveNext(opts) {
      return this.move(this.step_, opts);
    },
    move(arg, opts = {}) {
      const canMove = this.canMove(arg, opts);
      if (!opts.force && !canMove) {
        return Promise.reject(new Error(`Move target is disabled: ${JSON.stringify(opts)}`));
      }
      this.$refs.navPopover.hide({ hideDelay: 0 });
      if (opts.fromPage && !pageIsEqualToPage(opts.fromPage, this.firstPage)) {
        return this.refreshPages(__spreadProps$1(__spreadValues$1({}, opts), {
          page: opts.fromPage,
          position: 1,
          force: true
        }));
      }
      return Promise.resolve(true);
    },
    focusDate(date, opts = {}) {
      return this.move(date, opts).then(() => {
        const focusableEl = this.$el.querySelector(`.id-${this.$locale.getDayId(date)}.in-month .vc-focusable`);
        if (focusableEl) {
          focusableEl.focus();
          return Promise.resolve(true);
        }
        return Promise.resolve(false);
      });
    },
    showPageRange(range, opts) {
      let fromPage;
      let toPage;
      if (isDate$2(range)) {
        fromPage = this.pageForDate(range);
      } else if (isObject$e(range)) {
        const { month, year } = range;
        const { from, to } = range;
        if (isNumber_1(month) && isNumber_1(year)) {
          fromPage = range;
        } else if (from || to) {
          fromPage = isDate$2(from) ? this.pageForDate(from) : from;
          toPage = isDate$2(to) ? this.pageForDate(to) : to;
        }
      } else {
        return Promise.reject(new Error("Invalid page range provided."));
      }
      const lastPage = this.lastPage;
      let page = fromPage;
      if (pageIsAfterPage(toPage, lastPage)) {
        page = addPages(toPage, -(this.pages.length - 1));
      }
      if (pageIsBeforePage(page, fromPage)) {
        page = fromPage;
      }
      return this.refreshPages(__spreadProps$1(__spreadValues$1({}, opts), { page }));
    },
    getTargetPageRange(page, { position, force } = {}) {
      let fromPage = null;
      let toPage = null;
      if (pageIsValid(page)) {
        let pagesToAdd = 0;
        position = +position;
        if (!isNaN(position)) {
          pagesToAdd = position > 0 ? 1 - position : -(this.count + position);
        }
        fromPage = addPages(page, pagesToAdd);
      } else {
        fromPage = this.getDefaultInitialPage();
      }
      toPage = addPages(fromPage, this.count - 1);
      if (!force) {
        if (pageIsBeforePage(fromPage, this.minPage_)) {
          fromPage = this.minPage_;
        } else if (pageIsAfterPage(toPage, this.maxPage_)) {
          fromPage = addPages(this.maxPage_, 1 - this.count);
        }
        toPage = addPages(fromPage, this.count - 1);
      }
      return { fromPage, toPage };
    },
    getDefaultInitialPage() {
      let page = this.fromPage || this.pageForDate(this.fromDate);
      if (!pageIsValid(page)) {
        const toPage = this.toPage || this.pageForDate(this.toPage);
        if (pageIsValid(toPage)) {
          page = addPages(toPage, 1 - this.count);
        }
      }
      if (!pageIsValid(page)) {
        page = this.getPageForAttributes();
      }
      if (!pageIsValid(page)) {
        page = this.pageForThisMonth();
      }
      return page;
    },
    refreshPages({ page, position = 1, force, transition, ignoreCache } = {}) {
      return new Promise((resolve, reject) => {
        const { fromPage, toPage } = this.getTargetPageRange(page, {
          position,
          force
        });
        const pages = [];
        for (let i = 0; i < this.count; i++) {
          pages.push(this.buildPage(addPages(fromPage, i), ignoreCache));
        }
        this.refreshDisabledDays(pages);
        this.refreshFocusableDays(pages);
        this.transitionName = this.getPageTransition(this.pages[0], pages[0], transition);
        this.pages = pages;
        this.$emit("update:from-page", fromPage);
        this.$emit("update:to-page", toPage);
        if (this.transitionName && this.transitionName !== "none") {
          this.transitionPromise = {
            resolve,
            reject
          };
        } else {
          resolve(true);
        }
      });
    },
    refreshDisabledDays(pages) {
      this.getPageDays(pages).forEach((d) => {
        d.isDisabled = !!this.disabledAttribute && this.disabledAttribute.intersectsDay(d);
      });
    },
    refreshFocusableDays(pages) {
      this.getPageDays(pages).forEach((d) => {
        d.isFocusable = d.inMonth && d.day === this.focusableDay;
      });
    },
    getPageDays(pages = this.pages) {
      return pages.reduce((prev, curr) => prev.concat(curr.days), []);
    },
    getPageTransition(oldPage, newPage, transition = this.transition) {
      if (transition === "none")
        return transition;
      if (transition === "fade" || !transition && this.count > 1 || !pageIsValid(oldPage) || !pageIsValid(newPage)) {
        return "fade";
      }
      const movePrev = pageIsBeforePage(newPage, oldPage);
      if (transition === "slide-v") {
        return movePrev ? "slide-down" : "slide-up";
      }
      return movePrev ? "slide-right" : "slide-left";
    },
    getPageForAttributes() {
      let page = null;
      const attr = this.store.pinAttr;
      if (attr && attr.hasDates) {
        let [date] = attr.dates;
        date = date.start || date.date;
        page = this.pageForDate(date);
      }
      return page;
    },
    buildPage({ month, year }, ignoreCache) {
      const key = `${year.toString()}-${month.toString()}`;
      let page = this.pages.find((p) => p.key === key);
      if (!page || ignoreCache) {
        const date = new Date(year, month - 1, 15);
        const monthComps = this.$locale.getMonthComps(month, year);
        const prevMonthComps = this.$locale.getPrevMonthComps(month, year);
        const nextMonthComps = this.$locale.getNextMonthComps(month, year);
        page = {
          key,
          month,
          year,
          weeks: this.trimWeeks ? monthComps.weeks : 6,
          title: this.$locale.format(date, this.$locale.masks.title),
          shortMonthLabel: this.$locale.format(date, "MMM"),
          monthLabel: this.$locale.format(date, "MMMM"),
          shortYearLabel: year.toString().substring(2),
          yearLabel: year.toString(),
          monthComps,
          prevMonthComps,
          nextMonthComps,
          canMove: (pg) => this.canMove(pg),
          move: (pg) => this.move(pg),
          moveThisMonth: () => this.moveThisMonth(),
          movePrevMonth: () => this.move(prevMonthComps),
          moveNextMonth: () => this.move(nextMonthComps),
          refresh: true
        };
        page.days = this.$locale.getCalendarDays(page);
      }
      return page;
    },
    initStore() {
      this.store = new AttributeStore(this.$theme, this.$locale, this.attributes);
      this.refreshAttrs(this.pages, this.store.list, [], true);
    },
    refreshAttrs(pages = [], adds = [], deletes = [], reset) {
      if (!arrayHasItems(pages))
        return;
      pages.forEach((p) => {
        p.days.forEach((d) => {
          let shouldRefresh = false;
          let map2 = {};
          if (reset) {
            shouldRefresh = true;
          } else if (hasAny(d.attributesMap, deletes)) {
            map2 = omit_1(d.attributesMap, deletes);
            shouldRefresh = true;
          } else {
            map2 = d.attributesMap || {};
          }
          adds.forEach((attr) => {
            const targetDate = attr.intersectsDay(d);
            if (targetDate) {
              const newAttr = __spreadProps$1(__spreadValues$1({}, attr), {
                targetDate
              });
              map2[attr.key] = newAttr;
              shouldRefresh = true;
            }
          });
          if (shouldRefresh) {
            d.attributesMap = map2;
            d.shouldRefresh = true;
          }
        });
      });
    },
    handleKeydown(e) {
      const day = this.lastFocusedDay;
      if (day != null) {
        day.event = e;
        this.handleDayKeydown(day);
      }
    },
    handleDayKeydown(day) {
      const { dateFromTime, event } = day;
      const date = dateFromTime(12);
      let newDate = null;
      switch (event.key) {
        case "ArrowLeft": {
          newDate = addDays(date, -1);
          break;
        }
        case "ArrowRight": {
          newDate = addDays(date, 1);
          break;
        }
        case "ArrowUp": {
          newDate = addDays(date, -7);
          break;
        }
        case "ArrowDown": {
          newDate = addDays(date, 7);
          break;
        }
        case "Home": {
          newDate = addDays(date, -day.weekdayPosition + 1);
          break;
        }
        case "End": {
          newDate = addDays(date, day.weekdayPositionFromEnd);
          break;
        }
        case "PageUp": {
          if (event.altKey) {
            newDate = addYears(date, -1);
          } else {
            newDate = addMonths(date, -1);
          }
          break;
        }
        case "PageDown": {
          if (event.altKey) {
            newDate = addYears(date, 1);
          } else {
            newDate = addMonths(date, 1);
          }
          break;
        }
      }
      if (newDate) {
        event.preventDefault();
        this.focusDate(newDate).catch();
      }
    }
  }
};
const _sfc_main$2$1 = {
  inheritAttrs: false,
  emits: ["update:modelValue"],
  props: {
    options: Array,
    modelValue: null
  }
};
const _hoisted_1$1 = { class: "vc-select" };
const _hoisted_2$1 = ["value"];
const _hoisted_3$1 = ["value", "disabled"];
const _hoisted_4$1 = /* @__PURE__ */ vue_cjs_prod$1.createElementVNode("div", { class: "vc-select-arrow" }, [
  /* @__PURE__ */ vue_cjs_prod$1.createElementVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, [
    /* @__PURE__ */ vue_cjs_prod$1.createElementVNode("path", { d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" })
  ])
], -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return vue_cjs_prod$1.openBlock(), vue_cjs_prod$1.createElementBlock("div", _hoisted_1$1, [
    vue_cjs_prod$1.createElementVNode("select", vue_cjs_prod$1.mergeProps(_ctx.$attrs, {
      value: $props.modelValue,
      onChange: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", $event.target.value))
    }), [
      (vue_cjs_prod$1.openBlock(true), vue_cjs_prod$1.createElementBlock(vue_cjs_prod$1.Fragment, null, vue_cjs_prod$1.renderList($props.options, (option) => {
        return vue_cjs_prod$1.openBlock(), vue_cjs_prod$1.createElementBlock("option", {
          key: option.value,
          value: option.value,
          disabled: option.disabled
        }, vue_cjs_prod$1.toDisplayString(option.label), 9, _hoisted_3$1);
      }), 128))
    ], 16, _hoisted_2$1),
    _hoisted_4$1
  ]);
}
var TimeSelect = /* @__PURE__ */ _export_sfc$1(_sfc_main$2$1, [["render", _sfc_render$1]]);
const _amOptions = [
  { value: 0, label: "12" },
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
  { value: 11, label: "11" }
];
const _pmOptions = [
  { value: 12, label: "12" },
  { value: 13, label: "1" },
  { value: 14, label: "2" },
  { value: 15, label: "3" },
  { value: 16, label: "4" },
  { value: 17, label: "5" },
  { value: 18, label: "6" },
  { value: 19, label: "7" },
  { value: 20, label: "8" },
  { value: 21, label: "9" },
  { value: 22, label: "10" },
  { value: 23, label: "11" }
];
const _sfc_main$1$1 = {
  name: "TimePicker",
  components: { TimeSelect },
  emits: ["update:modelValue"],
  props: {
    modelValue: { type: Object, required: true },
    locale: { type: Object, required: true },
    theme: { type: Object, required: true },
    is24hr: { type: Boolean, default: true },
    showBorder: Boolean,
    hourOptions: Array,
    minuteOptions: Array
  },
  computed: {
    date() {
      let date = this.locale.normalizeDate(this.modelValue);
      if (this.modelValue.hours === 24) {
        date = new Date(date.getTime() - 1);
      }
      return date;
    },
    hours: {
      get() {
        return this.modelValue.hours;
      },
      set(value) {
        this.updateValue(value, this.minutes);
      }
    },
    minutes: {
      get() {
        return this.modelValue.minutes;
      },
      set(value) {
        this.updateValue(this.hours, value);
      }
    },
    isAM: {
      get() {
        return this.modelValue.hours < 12;
      },
      set(value) {
        let hours = this.hours;
        if (value && hours >= 12) {
          hours -= 12;
        } else if (!value && hours < 12) {
          hours += 12;
        }
        this.updateValue(hours, this.minutes);
      }
    },
    amHourOptions() {
      return _amOptions.filter((opt) => this.hourOptions.some((ho) => ho.value === opt.value));
    },
    pmHourOptions() {
      return _pmOptions.filter((opt) => this.hourOptions.some((ho) => ho.value === opt.value));
    },
    hourOptions_() {
      if (this.is24hr)
        return this.hourOptions;
      if (this.isAM)
        return this.amHourOptions;
      return this.pmHourOptions;
    },
    amDisabled() {
      return !arrayHasItems(this.amHourOptions);
    },
    pmDisabled() {
      return !arrayHasItems(this.pmHourOptions);
    }
  },
  methods: {
    updateValue(hours, minutes = this.minutes) {
      if (hours !== this.hours || minutes !== this.minutes) {
        this.$emit("update:modelValue", __spreadProps$1(__spreadValues$1({}, this.modelValue), {
          hours,
          minutes,
          seconds: 0,
          milliseconds: 0
        }));
      }
    }
  }
};
const _hoisted_1 = /* @__PURE__ */ vue_cjs_prod$1.createElementVNode("div", null, [
  /* @__PURE__ */ vue_cjs_prod$1.createElementVNode("svg", {
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    viewBox: "0 0 24 24",
    class: "vc-time-icon",
    stroke: "currentColor"
  }, [
    /* @__PURE__ */ vue_cjs_prod$1.createElementVNode("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" })
  ])
], -1);
const _hoisted_2 = { class: "vc-time-content" };
const _hoisted_3 = {
  key: 0,
  class: "vc-time-date"
};
const _hoisted_4 = { class: "vc-time-weekday" };
const _hoisted_5 = { class: "vc-time-month" };
const _hoisted_6 = { class: "vc-time-day" };
const _hoisted_7 = { class: "vc-time-year" };
const _hoisted_8 = { class: "vc-time-select" };
const _hoisted_9 = /* @__PURE__ */ vue_cjs_prod$1.createElementVNode("span", { style: { "margin": "0 4px" } }, ":", -1);
const _hoisted_10 = {
  key: 0,
  class: "vc-am-pm"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_time_select = vue_cjs_prod$1.resolveComponent("time-select");
  return vue_cjs_prod$1.openBlock(), vue_cjs_prod$1.createElementBlock("div", {
    class: vue_cjs_prod$1.normalizeClass(["vc-time-picker", [{ "vc-invalid": !$props.modelValue.isValid, "vc-bordered": $props.showBorder }]])
  }, [
    _hoisted_1,
    vue_cjs_prod$1.createElementVNode("div", _hoisted_2, [
      $options.date ? (vue_cjs_prod$1.openBlock(), vue_cjs_prod$1.createElementBlock("div", _hoisted_3, [
        vue_cjs_prod$1.createElementVNode("span", _hoisted_4, vue_cjs_prod$1.toDisplayString($props.locale.format($options.date, "WWW")), 1),
        vue_cjs_prod$1.createElementVNode("span", _hoisted_5, vue_cjs_prod$1.toDisplayString($props.locale.format($options.date, "MMM")), 1),
        vue_cjs_prod$1.createElementVNode("span", _hoisted_6, vue_cjs_prod$1.toDisplayString($props.locale.format($options.date, "D")), 1),
        vue_cjs_prod$1.createElementVNode("span", _hoisted_7, vue_cjs_prod$1.toDisplayString($props.locale.format($options.date, "YYYY")), 1)
      ])) : vue_cjs_prod$1.createCommentVNode("", true),
      vue_cjs_prod$1.createElementVNode("div", _hoisted_8, [
        vue_cjs_prod$1.createVNode(_component_time_select, {
          modelValue: $options.hours,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.hours = $event),
          modelModifiers: { number: true },
          options: $options.hourOptions_
        }, null, 8, ["modelValue", "options"]),
        _hoisted_9,
        vue_cjs_prod$1.createVNode(_component_time_select, {
          modelValue: $options.minutes,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $options.minutes = $event),
          modelModifiers: { number: true },
          options: $props.minuteOptions
        }, null, 8, ["modelValue", "options"]),
        !$props.is24hr ? (vue_cjs_prod$1.openBlock(), vue_cjs_prod$1.createElementBlock("div", _hoisted_10, [
          vue_cjs_prod$1.createElementVNode("button", {
            class: vue_cjs_prod$1.normalizeClass({ active: $options.isAM, "vc-disabled": $options.amDisabled }),
            onClick: _cache[2] || (_cache[2] = vue_cjs_prod$1.withModifiers(($event) => $options.isAM = true, ["prevent"])),
            type: "button"
          }, " AM ", 2),
          vue_cjs_prod$1.createElementVNode("button", {
            class: vue_cjs_prod$1.normalizeClass({ active: !$options.isAM, "vc-disabled": $options.pmDisabled }),
            onClick: _cache[3] || (_cache[3] = vue_cjs_prod$1.withModifiers(($event) => $options.isAM = false, ["prevent"])),
            type: "button"
          }, " PM ", 2)
        ])) : vue_cjs_prod$1.createCommentVNode("", true)
      ])
    ])
  ], 2);
}
var TimePicker = /* @__PURE__ */ _export_sfc$1(_sfc_main$1$1, [["render", _sfc_render]]);
const _baseConfig = {
  type: "auto",
  mask: "iso",
  timeAdjust: ""
};
const _config = [_baseConfig, _baseConfig];
const MODE = {
  DATE: "date",
  DATE_TIME: "datetime",
  TIME: "time"
};
const RANGE_PRIORITY = {
  NONE: 0,
  START: 1,
  END: 2,
  BOTH: 3
};
const _sfc_main$h = {
  name: "DatePicker",
  emits: [
    "update:modelValue",
    "drag",
    "dayclick",
    "daykeydown",
    "popover-will-show",
    "popover-did-show",
    "popover-will-hide",
    "popover-did-hide"
  ],
  render() {
    const footer = (wrap, wrapperEl) => {
      if (!this.$slots.footer)
        return wrap;
      const children = [wrap, this.$slots.footer()];
      return wrapperEl ? vue_cjs_prod$1.h(wrapperEl, children) : children;
    };
    const timePicker = () => {
      if (!this.dateParts)
        return null;
      const parts = this.isRange ? this.dateParts : [this.dateParts[0]];
      return vue_cjs_prod$1.h("div", {}, __spreadProps$1(__spreadValues$1({}, this.$slots), {
        default: () => parts.map((dp, idx) => {
          const hourOptions2 = this.$locale.getHourOptions(this.modelConfig_[idx].validHours, dp);
          const minuteOptions = this.$locale.getMinuteOptions(this.modelConfig_[idx].minuteIncrement, dp);
          return vue_cjs_prod$1.h(TimePicker, {
            modelValue: dp,
            locale: this.$locale,
            theme: this.$theme,
            is24hr: this.is24hr,
            showBorder: !this.isTime,
            isDisabled: this.isDateTime && !dp.isValid || this.isDragging,
            hourOptions: hourOptions2,
            minuteOptions,
            "onUpdate:modelValue": (p) => this.onTimeInput(p, idx === 0)
          });
        })
      }));
    };
    const calendar = () => vue_cjs_prod$1.h(_sfc_main$3$1, __spreadProps$1(__spreadValues$1({}, this.$attrs), {
      attributes: this.attributes_,
      theme: this.$theme,
      locale: this.$locale,
      minDate: this.minDateExact || this.minDate,
      maxDate: this.maxDateExact || this.maxDate,
      disabledDates: this.disabledDates,
      availableDates: this.availableDates,
      onDayclick: this.onDayClick,
      onDaykeydown: this.onDayKeydown,
      onDaymouseenter: this.onDayMouseEnter,
      ref: "calendar"
    }), __spreadProps$1(__spreadValues$1({}, this.$slots), {
      footer: () => this.isDateTime ? footer(timePicker()) : footer()
    }));
    const content = () => {
      if (this.isTime) {
        return vue_cjs_prod$1.h("div", {
          class: [
            "vc-container",
            `vc-${this.$theme.color}`,
            { "vc-is-dark": this.$theme.isDark }
          ]
        }, footer(timePicker(), "div"));
      }
      return calendar();
    };
    return this.$slots.default ? vue_cjs_prod$1.h("div", [
      this.$slots.default(this.slotArgs),
      vue_cjs_prod$1.h(_sfc_main$9$1, {
        id: this.datePickerPopoverId,
        placement: "bottom-start",
        contentClass: `vc-container${this.isDark ? " vc-is-dark" : ""}`,
        "on-before-show": (e) => this.$emit("popover-will-show", e),
        "on-after-show": (e) => this.$emit("popover-did-show", e),
        "on-before-hide": (e) => this.$emit("popover-will-hide", e),
        "on-after-hide": (e) => this.$emit("popover-did-hide", e),
        ref: "popover"
      }, {
        default: content
      })
    ]) : content();
  },
  mixins: [rootMixin],
  props: {
    mode: { type: String, default: MODE.DATE },
    modelValue: { type: null, required: true },
    modelConfig: { type: Object, default: () => ({}) },
    is24hr: Boolean,
    minuteIncrement: Number,
    isRequired: Boolean,
    isRange: Boolean,
    updateOnInput: {
      type: Boolean,
      default: () => getDefault("datePicker.updateOnInput")
    },
    inputDebounce: {
      type: Number,
      default: () => getDefault("datePicker.inputDebounce")
    },
    popover: { type: Object, default: () => ({}) },
    dragAttribute: Object,
    selectAttribute: Object,
    attributes: Array,
    validHours: [Object, Array, Function]
  },
  data() {
    return {
      value_: null,
      dateParts: null,
      activeDate: "",
      dragValue: null,
      inputValues: ["", ""],
      updateTimeout: null,
      watchValue: true,
      datePickerPopoverId: createGuid()
    };
  },
  computed: {
    isDate() {
      return this.mode.toLowerCase() === MODE.DATE;
    },
    isDateTime() {
      return this.mode.toLowerCase() === MODE.DATE_TIME;
    },
    isTime() {
      return this.mode.toLowerCase() === MODE.TIME;
    },
    isDragging() {
      return !!this.dragValue;
    },
    modelConfig_() {
      return this.normalizeConfig(this.modelConfig, _config);
    },
    inputMask() {
      const masks2 = this.$locale.masks;
      if (this.isTime) {
        return this.is24hr ? masks2.inputTime24hr : masks2.inputTime;
      }
      if (this.isDateTime) {
        return this.is24hr ? masks2.inputDateTime24hr : masks2.inputDateTime;
      }
      return this.$locale.masks.input;
    },
    inputMaskHasTime() {
      return /[Hh]/g.test(this.inputMask);
    },
    inputMaskHasDate() {
      return /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(this.inputMask);
    },
    inputMaskPatch() {
      if (this.inputMaskHasTime && this.inputMaskHasDate) {
        return PATCH.DATE_TIME;
      }
      if (this.inputMaskHasDate)
        return PATCH.DATE;
      if (this.inputMaskHasTime)
        return PATCH.TIME;
      return void 0;
    },
    slotArgs() {
      const {
        isRange,
        isDragging,
        updateValue,
        showPopover: showPopover2,
        hidePopover: hidePopover2,
        togglePopover: togglePopover2
      } = this;
      const inputValue = isRange ? {
        start: this.inputValues[0],
        end: this.inputValues[1]
      } : this.inputValues[0];
      const events = [true, false].map((isStart) => __spreadValues$1({
        input: this.onInputInput(isStart),
        change: this.onInputChange(isStart),
        keyup: this.onInputKeyup
      }, getPopoverTriggerEvents(__spreadProps$1(__spreadValues$1({}, this.popover_), {
        id: this.datePickerPopoverId,
        callback: (e) => {
          if (e.action === "show" && e.completed) {
            this.onInputShow(isStart);
          }
        }
      }))));
      const inputEvents = isRange ? {
        start: events[0],
        end: events[1]
      } : events[0];
      return {
        inputValue,
        inputEvents,
        isDragging,
        updateValue,
        showPopover: showPopover2,
        hidePopover: hidePopover2,
        togglePopover: togglePopover2,
        getPopoverTriggerEvents
      };
    },
    popover_() {
      return defaultsDeep_1(this.popover, getDefault("datePicker.popover"));
    },
    selectAttribute_() {
      if (!this.hasValue(this.value_))
        return null;
      const attribute = __spreadProps$1(__spreadValues$1({
        key: "select-drag"
      }, this.selectAttribute), {
        dates: this.value_,
        pinPage: true
      });
      const { dot, bar, highlight, content } = attribute;
      if (!dot && !bar && !highlight && !content) {
        attribute.highlight = true;
      }
      return attribute;
    },
    dragAttribute_() {
      if (!this.isRange || !this.hasValue(this.dragValue)) {
        return null;
      }
      const attribute = __spreadProps$1(__spreadValues$1({
        key: "select-drag"
      }, this.dragAttribute), {
        dates: this.dragValue
      });
      const { dot, bar, highlight, content } = attribute;
      if (!dot && !bar && !highlight && !content) {
        attribute.highlight = {
          startEnd: {
            fillMode: "outline"
          }
        };
      }
      return attribute;
    },
    attributes_() {
      const attrs = isArrayLikeObject_1(this.attributes) ? [...this.attributes] : [];
      if (this.dragAttribute_) {
        attrs.push(this.dragAttribute_);
      } else if (this.selectAttribute_) {
        attrs.push(this.selectAttribute_);
      }
      return attrs;
    }
  },
  watch: {
    inputMask() {
      this.formatInput();
    },
    modelValue(val) {
      if (!this.watchValue)
        return;
      this.forceUpdateValue(val, {
        config: this.modelConfig_,
        formatInput: true,
        hidePopover: false
      });
    },
    value_() {
      this.refreshDateParts();
    },
    dragValue() {
      this.refreshDateParts();
    },
    timezone() {
      this.refreshDateParts();
      this.forceUpdateValue(this.value_, { formatInput: true });
    }
  },
  created() {
    this.value_ = this.normalizeValue(this.modelValue, this.modelConfig_, PATCH.DATE_TIME, RANGE_PRIORITY.BOTH);
    this.forceUpdateValue(this.modelValue, {
      config: this.modelConfig_,
      formatInput: true,
      hidePopover: false
    });
    this.refreshDateParts();
  },
  mounted() {
    on(document, "keydown", this.onDocumentKeyDown);
    on(document, "click", this.onDocumentClick);
  },
  beforeUnmount() {
    off(document, "keydown", this.onDocumentKeyDown);
    off(document, "click", this.onDocumentClick);
  },
  methods: {
    getDateParts(date) {
      return this.$locale.getDateParts(date);
    },
    getDateFromParts(parts) {
      return this.$locale.getDateFromParts(parts);
    },
    refreshDateParts() {
      const value = this.dragValue || this.value_;
      const dateParts = [];
      if (this.isRange) {
        if (value && value.start) {
          dateParts.push(this.getDateParts(value.start));
        } else {
          dateParts.push({});
        }
        if (value && value.end) {
          dateParts.push(this.getDateParts(value.end));
        } else {
          dateParts.push({});
        }
      } else if (value) {
        dateParts.push(this.getDateParts(value));
      } else {
        dateParts.push({});
      }
      this.$nextTick(() => this.dateParts = dateParts);
    },
    onDocumentKeyDown(e) {
      if (this.dragValue && e.key === "Escape") {
        this.dragValue = null;
      }
    },
    onDocumentClick(e) {
      if (document.body.contains(e.target) && !elementContains(this.$el, e.target)) {
        this.dragValue = null;
        this.formatInput();
      }
    },
    onDayClick(day) {
      this.handleDayClick(day);
      this.$emit("dayclick", day);
    },
    onDayKeydown(day) {
      switch (day.event.key) {
        case " ":
        case "Enter": {
          this.handleDayClick(day);
          day.event.preventDefault();
          break;
        }
        case "Escape": {
          this.hidePopover();
        }
      }
      this.$emit("daykeydown", day);
    },
    handleDayClick(day) {
      const { keepVisibleOnInput, visibility } = this.popover_;
      const opts = {
        patch: PATCH.DATE,
        adjustTime: true,
        formatInput: true,
        hidePopover: this.isDate && !keepVisibleOnInput && visibility !== "visible"
      };
      if (this.isRange) {
        if (!this.isDragging) {
          this.dragTrackingValue = __spreadValues$1({}, day.range);
        } else {
          this.dragTrackingValue.end = day.date;
        }
        opts.isDragging = !this.isDragging;
        opts.rangePriority = opts.isDragging ? RANGE_PRIORITY.NONE : RANGE_PRIORITY.BOTH;
        opts.hidePopover = opts.hidePopover && !opts.isDragging;
        this.updateValue(this.dragTrackingValue, opts);
      } else {
        opts.clearIfEqual = !this.isRequired;
        this.updateValue(day.date, opts);
      }
    },
    onDayMouseEnter(day) {
      if (!this.isDragging)
        return;
      this.dragTrackingValue.end = day.date;
      this.updateValue(this.dragTrackingValue, {
        patch: PATCH.DATE,
        adjustTime: true,
        formatInput: true,
        hidePriority: false,
        rangePriority: RANGE_PRIORITY.NONE
      });
    },
    onTimeInput(parts, isStart) {
      let value = null;
      if (this.isRange) {
        const start = isStart ? parts : this.dateParts[0];
        const end = isStart ? this.dateParts[1] : parts;
        value = { start, end };
      } else {
        value = parts;
      }
      this.updateValue(value, {
        patch: PATCH.TIME,
        rangePriority: isStart ? RANGE_PRIORITY.START : RANGE_PRIORITY.END
      }).then(() => this.adjustPageRange(isStart));
    },
    onInputInput(isStart) {
      return (e) => {
        if (!this.updateOnInput)
          return;
        this.onInputUpdate(e.target.value, isStart, {
          formatInput: false,
          hidePopover: false,
          debounce: this.inputDebounce
        });
      };
    },
    onInputChange(isStart) {
      return (e) => {
        this.onInputUpdate(e.target.value, isStart, {
          formatInput: true,
          hidePopover: false
        });
      };
    },
    onInputUpdate(inputValue, isStart, opts) {
      this.inputValues.splice(isStart ? 0 : 1, 1, inputValue);
      const value = this.isRange ? {
        start: this.inputValues[0],
        end: this.inputValues[1] || this.inputValues[0]
      } : inputValue;
      const config = {
        type: "string",
        mask: this.inputMask
      };
      this.updateValue(value, __spreadProps$1(__spreadValues$1({}, opts), {
        config,
        patch: this.inputMaskPatch,
        rangePriority: isStart ? RANGE_PRIORITY.START : RANGE_PRIORITY.END
      })).then(() => this.adjustPageRange(isStart));
    },
    onInputShow(isStart) {
      this.adjustPageRange(isStart);
    },
    onInputKeyup(e) {
      if (e.key !== "Escape")
        return;
      this.updateValue(this.value_, {
        formatInput: true,
        hidePopover: true
      });
    },
    updateValue(value, opts = {}) {
      clearTimeout(this.updateTimeout);
      return new Promise((resolve) => {
        const _a = opts, { debounce } = _a, args = __objRest(_a, ["debounce"]);
        if (debounce > 0) {
          this.updateTimeout = setTimeout(() => {
            this.forceUpdateValue(value, args);
            resolve(this.value_);
          }, debounce);
        } else {
          this.forceUpdateValue(value, args);
          resolve(this.value_);
        }
      });
    },
    normalizeConfig(config, baseConfig = this.modelConfig_) {
      config = isArrayLikeObject_1(config) ? config : [config.start || config, config.end || config];
      return baseConfig.map((b, i) => __spreadValues$1(__spreadValues$1({
        validHours: this.validHours,
        minuteIncrement: this.minuteIncrement
      }, b), config[i]));
    },
    forceUpdateValue(value, {
      config = this.modelConfig_,
      patch = PATCH.DATE_TIME,
      clearIfEqual = false,
      formatInput = true,
      hidePopover: hidePopover2 = false,
      isDragging = this.isDragging,
      rangePriority = RANGE_PRIORITY.BOTH
    } = {}) {
      config = this.normalizeConfig(config);
      let normalizedValue = this.normalizeValue(value, config, patch, rangePriority);
      if (!normalizedValue && this.isRequired) {
        normalizedValue = this.value_;
      }
      normalizedValue = this.adjustTimeForValue(normalizedValue, config);
      const isDisabled = this.valueIsDisabled(normalizedValue);
      if (isDisabled) {
        if (isDragging)
          return;
        normalizedValue = this.value_;
        hidePopover2 = false;
      }
      const valueKey = isDragging ? "dragValue" : "value_";
      let valueChanged = !this.valuesAreEqual(this[valueKey], normalizedValue);
      if (!isDisabled && !valueChanged && clearIfEqual) {
        normalizedValue = null;
        valueChanged = true;
      }
      if (valueChanged) {
        this[valueKey] = normalizedValue;
        if (!isDragging)
          this.dragValue = null;
        const denormalizedValue = this.denormalizeValue(normalizedValue);
        const event = this.isDragging ? "drag" : "update:modelValue";
        this.watchValue = false;
        this.$emit(event, denormalizedValue);
        this.$nextTick(() => this.watchValue = true);
      }
      if (hidePopover2)
        this.hidePopover();
      if (formatInput)
        this.formatInput();
    },
    hasValue(value) {
      if (this.isRange) {
        return isObject$e(value) && !!value.start && !!value.end;
      }
      return !!value;
    },
    normalizeValue(value, config, patch, rangePriority) {
      if (!this.hasValue(value))
        return null;
      if (this.isRange) {
        const result = {};
        const start = value.start > value.end ? value.end : value.start;
        result.start = this.normalizeDate(start, __spreadProps$1(__spreadValues$1({}, config[0]), {
          fillDate: this.value_ && this.value_.start || config[0].fillDate,
          patch
        }));
        const end = value.start > value.end ? value.start : value.end;
        result.end = this.normalizeDate(end, __spreadProps$1(__spreadValues$1({}, config[1]), {
          fillDate: this.value_ && this.value_.end || config[1].fillDate,
          patch
        }));
        return this.sortRange(result, rangePriority);
      }
      return this.normalizeDate(value, __spreadProps$1(__spreadValues$1({}, config[0]), {
        fillDate: this.value_ || config[0].fillDate,
        patch
      }));
    },
    adjustTimeForValue(value, config) {
      if (!this.hasValue(value))
        return null;
      if (this.isRange) {
        return {
          start: this.$locale.adjustTimeForDate(value.start, config[0]),
          end: this.$locale.adjustTimeForDate(value.end, config[1])
        };
      }
      return this.$locale.adjustTimeForDate(value, config[0]);
    },
    sortRange(range, priority = RANGE_PRIORITY.NONE) {
      const { start, end } = range;
      if (start > end) {
        switch (priority) {
          case RANGE_PRIORITY.START:
            return { start, end: start };
          case RANGE_PRIORITY.END:
            return { start: end, end };
          case RANGE_PRIORITY.BOTH:
            return { start: end, end: start };
        }
      }
      return { start, end };
    },
    denormalizeValue(value, config = this.modelConfig_) {
      if (this.isRange) {
        if (!this.hasValue(value))
          return null;
        return {
          start: this.$locale.denormalizeDate(value.start, config[0]),
          end: this.$locale.denormalizeDate(value.end, config[1])
        };
      }
      return this.$locale.denormalizeDate(value, config[0]);
    },
    valuesAreEqual(a, b) {
      if (this.isRange) {
        const aHasValue = this.hasValue(a);
        const bHasValue = this.hasValue(b);
        if (!aHasValue && !bHasValue)
          return true;
        if (aHasValue !== bHasValue)
          return false;
        return datesAreEqual(a.start, b.start) && datesAreEqual(a.end, b.end);
      }
      return datesAreEqual(a, b);
    },
    valueIsDisabled(value) {
      return this.hasValue(value) && this.disabledAttribute && this.disabledAttribute.intersectsDate(value);
    },
    formatInput() {
      this.$nextTick(() => {
        const config = this.normalizeConfig({
          type: "string",
          mask: this.inputMask
        });
        const value = this.denormalizeValue(this.dragValue || this.value_, config);
        if (this.isRange) {
          this.inputValues = [value && value.start, value && value.end];
        } else {
          this.inputValues = [value, ""];
        }
      });
    },
    showPopover(opts = {}) {
      showPopover(__spreadProps$1(__spreadValues$1(__spreadValues$1({
        ref: this.$el
      }, this.popover_), opts), {
        isInteractive: true,
        id: this.datePickerPopoverId
      }));
    },
    hidePopover(opts = {}) {
      hidePopover(__spreadProps$1(__spreadValues$1(__spreadValues$1({
        hideDelay: 10
      }, this.showPopover_), opts), {
        id: this.datePickerPopoverId
      }));
    },
    togglePopover(opts) {
      togglePopover(__spreadProps$1(__spreadValues$1(__spreadValues$1({
        ref: this.$el
      }, this.popover_), opts), {
        isInteractive: true,
        id: this.datePickerPopoverId
      }));
    },
    adjustPageRange(isStart) {
      this.$nextTick(() => {
        const calendar = this.$refs.calendar;
        const page = this.getPageForValue(isStart);
        const position = isStart ? 1 : -1;
        if (page && calendar && !pageIsBetweenPages(page, calendar.firstPage, calendar.lastPage)) {
          calendar.move(page, {
            position,
            transition: "fade"
          });
        }
      });
    },
    getPageForValue(isStart) {
      if (this.hasValue(this.value_)) {
        return this.pageForDate(this.isRange ? this.value_[isStart ? "start" : "end"] : this.value_);
      }
      return null;
    },
    move(args, opts) {
      if (this.$refs.calendar) {
        return this.$refs.calendar.move(args, opts);
      }
      return Promise.reject(new Error("Navigation disabled while calendar is not yet displayed"));
    },
    focusDate(date, opts) {
      if (this.$refs.calendar) {
        return this.$refs.calendar.focusDate(date, opts);
      }
      return Promise.reject(new Error("Navigation disabled while calendar is not yet displayed"));
    }
  }
};

var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var vue_cjs_prod = {};
var shared_cjs_prod = {};
Object.defineProperty(shared_cjs_prod, "__esModule", { value: true });
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const PatchFlagNames = {
  [1]: `TEXT`,
  [2]: `CLASS`,
  [4]: `STYLE`,
  [8]: `PROPS`,
  [16]: `FULL_PROPS`,
  [32]: `HYDRATE_EVENTS`,
  [64]: `STABLE_FRAGMENT`,
  [128]: `KEYED_FRAGMENT`,
  [256]: `UNKEYED_FRAGMENT`,
  [512]: `NEED_PATCH`,
  [1024]: `DYNAMIC_SLOTS`,
  [2048]: `DEV_ROOT_FRAGMENT`,
  [-1]: `HOISTED`,
  [-2]: `BAIL`
};
const slotFlagsText = {
  [1]: "STABLE",
  [2]: "DYNAMIC",
  [3]: "FORWARDED"
};
const GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
const isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  let lines = source.split(/(\r?\n)/);
  const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
  lines = lines.filter((_, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
    if (count >= start) {
      for (let j2 = i - range; j2 <= i + range || end > count; j2++) {
        if (j2 < 0 || j2 >= lines.length)
          continue;
        const line = j2 + 1;
        res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j2]}`);
        const lineLength = lines[j2].length;
        const newLineSeqLength = newlineSequences[j2] && newlineSequences[j2].length || 0;
        if (j2 === i) {
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j2 > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + newLineSeqLength;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }
  const isUnsafe = unsafeAttrCharRE.test(name);
  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }
  return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
const isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
function normalizeStyle(value) {
  if (isArray$1(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString$1(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString$1(value)) {
    return value;
  } else if (isObject$1(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  let ret = "";
  if (!styles || isString$1(styles)) {
    return ret;
  }
  for (const key in styles) {
    const value = styles[key];
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
    if (isString$1(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString$1(value)) {
    res = value;
  } else if (isArray$1(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$1(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props)
    return null;
  let { class: klass, style } = props;
  if (klass && !isString$1(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
  const str = "" + string;
  const match = escapeRE.exec(str);
  if (!match) {
    return str;
  }
  let html = "";
  let escaped;
  let index;
  let lastIndex = 0;
  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        escaped = "&quot;";
        break;
      case 38:
        escaped = "&amp;";
        break;
      case 39:
        escaped = "&#39;";
        break;
      case 60:
        escaped = "&lt;";
        break;
      case 62:
        escaped = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index) {
      html += str.slice(lastIndex, index);
    }
    lastIndex = index + 1;
    html += escaped;
  }
  return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length)
    return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b)
    return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isSymbol(a);
  bValidType = isSymbol(b);
  if (aValidType || bValidType) {
    return a === b;
  }
  aValidType = isArray$1(a);
  bValidType = isArray$1(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject$1(a);
  bValidType = isObject$1(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const toDisplayString = (val) => {
  return isString$1(val) ? val : val == null ? "" : isArray$1(val) || isObject$1(val) && (val.toString === objectToString$1 || !isFunction$1(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject$1(val) && !isArray$1(val) && !isPlainObject$1(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn$1 = (val, key) => hasOwnProperty$1.call(val, key);
const isArray$1 = Array.isArray;
const isMap = (val) => toTypeString$1(val) === "[object Map]";
const isSet = (val) => toTypeString$1(val) === "[object Set]";
const isDate = (val) => toTypeString$1(val) === "[object Date]";
const isFunction$1 = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject$1 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject$1(val) && isFunction$1(val.then) && isFunction$1(val.catch);
};
const objectToString$1 = Object.prototype.toString;
const toTypeString$1 = (value) => objectToString$1.call(value);
const toRawType = (value) => {
  return toTypeString$1(value).slice(8, -1);
};
const isPlainObject$1 = (val) => toTypeString$1(val) === "[object Object]";
const isIntegerKey = (key) => isString$1(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis$1;
const getGlobalThis$1 = () => {
  return _globalThis$1 || (_globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : {});
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
  return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}
shared_cjs_prod.EMPTY_ARR = EMPTY_ARR;
shared_cjs_prod.EMPTY_OBJ = EMPTY_OBJ;
shared_cjs_prod.NO = NO;
shared_cjs_prod.NOOP = NOOP;
shared_cjs_prod.PatchFlagNames = PatchFlagNames;
shared_cjs_prod.camelize = camelize;
shared_cjs_prod.capitalize = capitalize;
shared_cjs_prod.def = def;
shared_cjs_prod.escapeHtml = escapeHtml;
shared_cjs_prod.escapeHtmlComment = escapeHtmlComment;
shared_cjs_prod.extend = extend;
shared_cjs_prod.genPropsAccessExp = genPropsAccessExp;
shared_cjs_prod.generateCodeFrame = generateCodeFrame;
shared_cjs_prod.getGlobalThis = getGlobalThis$1;
shared_cjs_prod.hasChanged = hasChanged;
shared_cjs_prod.hasOwn = hasOwn$1;
shared_cjs_prod.hyphenate = hyphenate;
shared_cjs_prod.includeBooleanAttr = includeBooleanAttr;
shared_cjs_prod.invokeArrayFns = invokeArrayFns;
shared_cjs_prod.isArray = isArray$1;
shared_cjs_prod.isBooleanAttr = isBooleanAttr;
shared_cjs_prod.isBuiltInDirective = isBuiltInDirective;
shared_cjs_prod.isDate = isDate;
var isFunction_1 = shared_cjs_prod.isFunction = isFunction$1;
shared_cjs_prod.isGloballyWhitelisted = isGloballyWhitelisted;
shared_cjs_prod.isHTMLTag = isHTMLTag;
shared_cjs_prod.isIntegerKey = isIntegerKey;
shared_cjs_prod.isKnownHtmlAttr = isKnownHtmlAttr;
shared_cjs_prod.isKnownSvgAttr = isKnownSvgAttr;
shared_cjs_prod.isMap = isMap;
shared_cjs_prod.isModelListener = isModelListener;
shared_cjs_prod.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
shared_cjs_prod.isObject = isObject$1;
shared_cjs_prod.isOn = isOn;
shared_cjs_prod.isPlainObject = isPlainObject$1;
shared_cjs_prod.isPromise = isPromise;
shared_cjs_prod.isReservedProp = isReservedProp;
shared_cjs_prod.isSSRSafeAttrName = isSSRSafeAttrName;
shared_cjs_prod.isSVGTag = isSVGTag;
shared_cjs_prod.isSet = isSet;
shared_cjs_prod.isSpecialBooleanAttr = isSpecialBooleanAttr;
shared_cjs_prod.isString = isString$1;
shared_cjs_prod.isSymbol = isSymbol;
shared_cjs_prod.isVoidTag = isVoidTag;
shared_cjs_prod.looseEqual = looseEqual;
shared_cjs_prod.looseIndexOf = looseIndexOf;
shared_cjs_prod.makeMap = makeMap;
shared_cjs_prod.normalizeClass = normalizeClass;
shared_cjs_prod.normalizeProps = normalizeProps;
shared_cjs_prod.normalizeStyle = normalizeStyle;
shared_cjs_prod.objectToString = objectToString$1;
shared_cjs_prod.parseStringStyle = parseStringStyle;
shared_cjs_prod.propsToAttrMap = propsToAttrMap;
shared_cjs_prod.remove = remove;
shared_cjs_prod.slotFlagsText = slotFlagsText;
shared_cjs_prod.stringifyStyle = stringifyStyle;
shared_cjs_prod.toDisplayString = toDisplayString;
shared_cjs_prod.toHandlerKey = toHandlerKey;
shared_cjs_prod.toNumber = toNumber;
shared_cjs_prod.toRawType = toRawType;
shared_cjs_prod.toTypeString = toTypeString$1;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var compilerDom = require$$0;
  var runtimeDom = require$$1;
  var shared = shared_cjs_prod;
  function _interopNamespace(e) {
    if (e && e.__esModule)
      return e;
    var n = /* @__PURE__ */ Object.create(null);
    if (e) {
      Object.keys(e).forEach(function(k2) {
        n[k2] = e[k2];
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }
  var runtimeDom__namespace = /* @__PURE__ */ _interopNamespace(runtimeDom);
  const compileCache = /* @__PURE__ */ Object.create(null);
  function compileToFunction(template, options) {
    if (!shared.isString(template)) {
      if (template.nodeType) {
        template = template.innerHTML;
      } else {
        return shared.NOOP;
      }
    }
    const key = template;
    const cached = compileCache[key];
    if (cached) {
      return cached;
    }
    if (template[0] === "#") {
      const el = document.querySelector(template);
      template = el ? el.innerHTML : ``;
    }
    const opts = shared.extend({
      hoistStatic: true,
      onError: void 0,
      onWarn: shared.NOOP
    }, options);
    if (!opts.isCustomElement && typeof customElements !== "undefined") {
      opts.isCustomElement = (tag) => !!customElements.get(tag);
    }
    const { code: code2 } = compilerDom.compile(template, opts);
    const render = new Function("Vue", code2)(runtimeDom__namespace);
    render._rc = true;
    return compileCache[key] = render;
  }
  runtimeDom.registerRuntimeCompiler(compileToFunction);
  Object.keys(runtimeDom).forEach(function(k2) {
    if (k2 !== "default")
      exports[k2] = runtimeDom[k2];
  });
  exports.compile = compileToFunction;
})(vue_cjs_prod);
const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const buildAssetsDir = () => appConfig.buildAssetsDir;
const buildAssetsURL = (...path) => joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
};
globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: vue_cjs_prod.reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter$1(nuxtApp, $name, value);
    defineGetter$1(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter$1(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter$1(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      var _a;
      if (prop === "public") {
        return target.public;
      }
      return (_a = target[prop]) != null ? _a : target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return null;
    }
    if (plugin.length > 1) {
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    return plugin;
  }).filter(Boolean);
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = vue_cjs_prod.getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter$1(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
var vueRouter_cjs_prod = { exports: {} };
var vueRouter_prod = {};
/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var vue = vue_cjs_prod;
  function isESModule(obj) {
    return obj.__esModule || obj[Symbol.toStringTag] === "Module";
  }
  const assign2 = Object.assign;
  function applyToParams(fn, params) {
    const newParams = {};
    for (const key in params) {
      const value = params[key];
      newParams[key] = isArray2(value) ? value.map(fn) : fn(value);
    }
    return newParams;
  }
  const noop = () => {
  };
  const isArray2 = Array.isArray;
  const TRAILING_SLASH_RE = /\/$/;
  const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
  function parseURL(parseQuery2, location2, currentLocation = "/") {
    let path, query = {}, searchString = "", hash = "";
    const hashPos = location2.indexOf("#");
    let searchPos = location2.indexOf("?");
    if (hashPos < searchPos && hashPos >= 0) {
      searchPos = -1;
    }
    if (searchPos > -1) {
      path = location2.slice(0, searchPos);
      searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
      query = parseQuery2(searchString);
    }
    if (hashPos > -1) {
      path = path || location2.slice(0, hashPos);
      hash = location2.slice(hashPos, location2.length);
    }
    path = resolveRelativePath(path != null ? path : location2, currentLocation);
    return {
      fullPath: path + (searchString && "?") + searchString + hash,
      path,
      query,
      hash
    };
  }
  function stringifyURL(stringifyQuery2, location2) {
    const query = location2.query ? stringifyQuery2(location2.query) : "";
    return location2.path + (query && "?") + query + (location2.hash || "");
  }
  function stripBase(pathname, base) {
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
      return pathname;
    return pathname.slice(base.length) || "/";
  }
  function isSameRouteLocation(stringifyQuery2, a, b) {
    const aLastIndex = a.matched.length - 1;
    const bLastIndex = b.matched.length - 1;
    return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
  }
  function isSameRouteRecord(a, b) {
    return (a.aliasOf || a) === (b.aliasOf || b);
  }
  function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length)
      return false;
    for (const key in a) {
      if (!isSameRouteLocationParamsValue(a[key], b[key]))
        return false;
    }
    return true;
  }
  function isSameRouteLocationParamsValue(a, b) {
    return isArray2(a) ? isEquivalentArray(a, b) : isArray2(b) ? isEquivalentArray(b, a) : a === b;
  }
  function isEquivalentArray(a, b) {
    return isArray2(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
  }
  function resolveRelativePath(to, from) {
    if (to.startsWith("/"))
      return to;
    if (!to)
      return from;
    const fromSegments = from.split("/");
    const toSegments = to.split("/");
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
      segment = toSegments[toPosition];
      if (segment === ".")
        continue;
      if (segment === "..") {
        if (position > 1)
          position--;
      } else
        break;
    }
    return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
  }
  var NavigationType;
  (function(NavigationType2) {
    NavigationType2["pop"] = "pop";
    NavigationType2["push"] = "push";
  })(NavigationType || (NavigationType = {}));
  var NavigationDirection;
  (function(NavigationDirection2) {
    NavigationDirection2["back"] = "back";
    NavigationDirection2["forward"] = "forward";
    NavigationDirection2["unknown"] = "";
  })(NavigationDirection || (NavigationDirection = {}));
  const START = "";
  function normalizeBase(base) {
    if (!base) {
      {
        base = "/";
      }
    }
    if (base[0] !== "/" && base[0] !== "#")
      base = "/" + base;
    return removeTrailingSlash(base);
  }
  const BEFORE_HASH_RE = /^[^#]+#/;
  function createHref(base, location2) {
    return base.replace(BEFORE_HASH_RE, "#") + location2;
  }
  const computeScrollPosition = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
  });
  let createBaseLocation = () => location.protocol + "//" + location.host;
  function createCurrentLocation(base, location2) {
    const { pathname, search, hash } = location2;
    const hashPos = base.indexOf("#");
    if (hashPos > -1) {
      let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
      let pathFromHash = hash.slice(slicePos);
      if (pathFromHash[0] !== "/")
        pathFromHash = "/" + pathFromHash;
      return stripBase(pathFromHash, "");
    }
    const path = stripBase(pathname, base);
    return path + search + hash;
  }
  function useHistoryListeners(base, historyState, currentLocation, replace) {
    let listeners = [];
    let teardowns = [];
    let pauseState = null;
    const popStateHandler = ({ state }) => {
      const to = createCurrentLocation(base, location);
      const from = currentLocation.value;
      const fromState = historyState.value;
      let delta = 0;
      if (state) {
        currentLocation.value = to;
        historyState.value = state;
        if (pauseState && pauseState === from) {
          pauseState = null;
          return;
        }
        delta = fromState ? state.position - fromState.position : 0;
      } else {
        replace(to);
      }
      listeners.forEach((listener) => {
        listener(currentLocation.value, from, {
          delta,
          type: NavigationType.pop,
          direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
        });
      });
    };
    function pauseListeners() {
      pauseState = currentLocation.value;
    }
    function listen(callback) {
      listeners.push(callback);
      const teardown = () => {
        const index = listeners.indexOf(callback);
        if (index > -1)
          listeners.splice(index, 1);
      };
      teardowns.push(teardown);
      return teardown;
    }
    function beforeUnloadListener() {
      const { history: history2 } = window;
      if (!history2.state)
        return;
      history2.replaceState(assign2({}, history2.state, { scroll: computeScrollPosition() }), "");
    }
    function destroy() {
      for (const teardown of teardowns)
        teardown();
      teardowns = [];
      window.removeEventListener("popstate", popStateHandler);
      window.removeEventListener("beforeunload", beforeUnloadListener);
    }
    window.addEventListener("popstate", popStateHandler);
    window.addEventListener("beforeunload", beforeUnloadListener);
    return {
      pauseListeners,
      listen,
      destroy
    };
  }
  function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
      back,
      current,
      forward,
      replaced,
      position: window.history.length,
      scroll: computeScroll ? computeScrollPosition() : null
    };
  }
  function useHistoryStateNavigation(base) {
    const { history: history2, location: location2 } = window;
    const currentLocation = {
      value: createCurrentLocation(base, location2)
    };
    const historyState = { value: history2.state };
    if (!historyState.value) {
      changeLocation(currentLocation.value, {
        back: null,
        current: currentLocation.value,
        forward: null,
        position: history2.length - 1,
        replaced: true,
        scroll: null
      }, true);
    }
    function changeLocation(to, state, replace2) {
      const hashIndex = base.indexOf("#");
      const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
      try {
        history2[replace2 ? "replaceState" : "pushState"](state, "", url);
        historyState.value = state;
      } catch (err) {
        {
          console.error(err);
        }
        location2[replace2 ? "replace" : "assign"](url);
      }
    }
    function replace(to, data) {
      const state = assign2({}, history2.state, buildState(
        historyState.value.back,
        to,
        historyState.value.forward,
        true
      ), data, { position: historyState.value.position });
      changeLocation(to, state, true);
      currentLocation.value = to;
    }
    function push(to, data) {
      const currentState = assign2(
        {},
        historyState.value,
        history2.state,
        {
          forward: to,
          scroll: computeScrollPosition()
        }
      );
      changeLocation(currentState.current, currentState, true);
      const state = assign2({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
      changeLocation(to, state, false);
      currentLocation.value = to;
    }
    return {
      location: currentLocation,
      state: historyState,
      push,
      replace
    };
  }
  function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
      if (!triggerListeners)
        historyListeners.pauseListeners();
      history.go(delta);
    }
    const routerHistory = assign2({
      location: "",
      base,
      go,
      createHref: createHref.bind(null, base)
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => historyNavigation.location.value
    });
    Object.defineProperty(routerHistory, "state", {
      enumerable: true,
      get: () => historyNavigation.state.value
    });
    return routerHistory;
  }
  function createMemoryHistory(base = "") {
    let listeners = [];
    let queue = [START];
    let position = 0;
    base = normalizeBase(base);
    function setLocation(location2) {
      position++;
      if (position === queue.length) {
        queue.push(location2);
      } else {
        queue.splice(position);
        queue.push(location2);
      }
    }
    function triggerListeners(to, from, { direction, delta }) {
      const info = {
        direction,
        delta,
        type: NavigationType.pop
      };
      for (const callback of listeners) {
        callback(to, from, info);
      }
    }
    const routerHistory = {
      location: START,
      state: {},
      base,
      createHref: createHref.bind(null, base),
      replace(to) {
        queue.splice(position--, 1);
        setLocation(to);
      },
      push(to, data) {
        setLocation(to);
      },
      listen(callback) {
        listeners.push(callback);
        return () => {
          const index = listeners.indexOf(callback);
          if (index > -1)
            listeners.splice(index, 1);
        };
      },
      destroy() {
        listeners = [];
        queue = [START];
        position = 0;
      },
      go(delta, shouldTrigger = true) {
        const from = this.location;
        const direction = delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
        position = Math.max(0, Math.min(position + delta, queue.length - 1));
        if (shouldTrigger) {
          triggerListeners(this.location, from, {
            direction,
            delta
          });
        }
      }
    };
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => queue[position]
    });
    return routerHistory;
  }
  function createWebHashHistory(base) {
    base = location.host ? base || location.pathname + location.search : "";
    if (!base.includes("#"))
      base += "#";
    return createWebHistory(base);
  }
  function isRouteLocation(route) {
    return typeof route === "string" || route && typeof route === "object";
  }
  function isRouteName(name) {
    return typeof name === "string" || typeof name === "symbol";
  }
  const START_LOCATION_NORMALIZED = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  const NavigationFailureSymbol = Symbol("");
  exports.NavigationFailureType = void 0;
  (function(NavigationFailureType) {
    NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
    NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
    NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
  })(exports.NavigationFailureType || (exports.NavigationFailureType = {}));
  const ErrorTypeMessages = {
    [1]({ location: location2, currentLocation }) {
      return `No match for
 ${JSON.stringify(location2)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
    },
    [2]({ from, to }) {
      return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
    },
    [4]({ from, to }) {
      return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
    },
    [8]({ from, to }) {
      return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
    },
    [16]({ from, to }) {
      return `Avoided redundant navigation to current location: "${from.fullPath}".`;
    }
  };
  function createRouterError(type, params) {
    {
      return assign2(new Error(ErrorTypeMessages[type](params)), {
        type,
        [NavigationFailureSymbol]: true
      }, params);
    }
  }
  function isNavigationFailure(error, type) {
    return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
  }
  const propertiesToLog = ["params", "query", "hash"];
  function stringifyRoute(to) {
    if (typeof to === "string")
      return to;
    if ("path" in to)
      return to.path;
    const location2 = {};
    for (const key of propertiesToLog) {
      if (key in to)
        location2[key] = to[key];
    }
    return JSON.stringify(location2, null, 2);
  }
  const BASE_PARAM_PATTERN = "[^/]+?";
  const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  };
  const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
  function tokensToParser(segments, extraOptions) {
    const options = assign2({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    const score = [];
    let pattern = options.start ? "^" : "";
    const keys = [];
    for (const segment of segments) {
      const segmentScores = segment.length ? [] : [90];
      if (options.strict && !segment.length)
        pattern += "/";
      for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
        const token = segment[tokenIndex];
        let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
        if (token.type === 0) {
          if (!tokenIndex)
            pattern += "/";
          pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
          subSegmentScore += 40;
        } else if (token.type === 1) {
          const { value, repeatable, optional, regexp } = token;
          keys.push({
            name: value,
            repeatable,
            optional
          });
          const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
          if (re2 !== BASE_PARAM_PATTERN) {
            subSegmentScore += 10;
            try {
              new RegExp(`(${re2})`);
            } catch (err) {
              throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
            }
          }
          let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
          if (!tokenIndex)
            subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
          if (optional)
            subPattern += "?";
          pattern += subPattern;
          subSegmentScore += 20;
          if (optional)
            subSegmentScore += -8;
          if (repeatable)
            subSegmentScore += -20;
          if (re2 === ".*")
            subSegmentScore += -50;
        }
        segmentScores.push(subSegmentScore);
      }
      score.push(segmentScores);
    }
    if (options.strict && options.end) {
      const i = score.length - 1;
      score[i][score[i].length - 1] += 0.7000000000000001;
    }
    if (!options.strict)
      pattern += "/?";
    if (options.end)
      pattern += "$";
    else if (options.strict)
      pattern += "(?:/|$)";
    const re = new RegExp(pattern, options.sensitive ? "" : "i");
    function parse2(path) {
      const match = path.match(re);
      const params = {};
      if (!match)
        return null;
      for (let i = 1; i < match.length; i++) {
        const value = match[i] || "";
        const key = keys[i - 1];
        params[key.name] = value && key.repeatable ? value.split("/") : value;
      }
      return params;
    }
    function stringify2(params) {
      let path = "";
      let avoidDuplicatedSlash = false;
      for (const segment of segments) {
        if (!avoidDuplicatedSlash || !path.endsWith("/"))
          path += "/";
        avoidDuplicatedSlash = false;
        for (const token of segment) {
          if (token.type === 0) {
            path += token.value;
          } else if (token.type === 1) {
            const { value, repeatable, optional } = token;
            const param = value in params ? params[value] : "";
            if (isArray2(param) && !repeatable) {
              throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
            }
            const text = isArray2(param) ? param.join("/") : param;
            if (!text) {
              if (optional) {
                if (segment.length < 2) {
                  if (path.endsWith("/"))
                    path = path.slice(0, -1);
                  else
                    avoidDuplicatedSlash = true;
                }
              } else
                throw new Error(`Missing required param "${value}"`);
            }
            path += text;
          }
        }
      }
      return path || "/";
    }
    return {
      re,
      score,
      keys,
      parse: parse2,
      stringify: stringify2
    };
  }
  function compareScoreArray(a, b) {
    let i = 0;
    while (i < a.length && i < b.length) {
      const diff = b[i] - a[i];
      if (diff)
        return diff;
      i++;
    }
    if (a.length < b.length) {
      return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
    } else if (a.length > b.length) {
      return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
    }
    return 0;
  }
  function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while (i < aScore.length && i < bScore.length) {
      const comp = compareScoreArray(aScore[i], bScore[i]);
      if (comp)
        return comp;
      i++;
    }
    if (Math.abs(bScore.length - aScore.length) === 1) {
      if (isLastScoreNegative(aScore))
        return 1;
      if (isLastScoreNegative(bScore))
        return -1;
    }
    return bScore.length - aScore.length;
  }
  function isLastScoreNegative(score) {
    const last = score[score.length - 1];
    return score.length > 0 && last[last.length - 1] < 0;
  }
  const ROOT_TOKEN = {
    type: 0,
    value: ""
  };
  const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
  function tokenizePath(path) {
    if (!path)
      return [[]];
    if (path === "/")
      return [[ROOT_TOKEN]];
    if (!path.startsWith("/")) {
      throw new Error(`Invalid path "${path}"`);
    }
    function crash(message) {
      throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0;
    let previousState = state;
    const tokens = [];
    let segment;
    function finalizeSegment() {
      if (segment)
        tokens.push(segment);
      segment = [];
    }
    let i = 0;
    let char;
    let buffer = "";
    let customRe = "";
    function consumeBuffer() {
      if (!buffer)
        return;
      if (state === 0) {
        segment.push({
          type: 0,
          value: buffer
        });
      } else if (state === 1 || state === 2 || state === 3) {
        if (segment.length > 1 && (char === "*" || char === "+"))
          crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
        segment.push({
          type: 1,
          value: buffer,
          regexp: customRe,
          repeatable: char === "*" || char === "+",
          optional: char === "*" || char === "?"
        });
      } else {
        crash("Invalid state to consume buffer");
      }
      buffer = "";
    }
    function addCharToBuffer() {
      buffer += char;
    }
    while (i < path.length) {
      char = path[i++];
      if (char === "\\" && state !== 2) {
        previousState = state;
        state = 4;
        continue;
      }
      switch (state) {
        case 0:
          if (char === "/") {
            if (buffer) {
              consumeBuffer();
            }
            finalizeSegment();
          } else if (char === ":") {
            consumeBuffer();
            state = 1;
          } else {
            addCharToBuffer();
          }
          break;
        case 4:
          addCharToBuffer();
          state = previousState;
          break;
        case 1:
          if (char === "(") {
            state = 2;
          } else if (VALID_PARAM_RE.test(char)) {
            addCharToBuffer();
          } else {
            consumeBuffer();
            state = 0;
            if (char !== "*" && char !== "?" && char !== "+")
              i--;
          }
          break;
        case 2:
          if (char === ")") {
            if (customRe[customRe.length - 1] == "\\")
              customRe = customRe.slice(0, -1) + char;
            else
              state = 3;
          } else {
            customRe += char;
          }
          break;
        case 3:
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
          customRe = "";
          break;
        default:
          crash("Unknown state");
          break;
      }
    }
    if (state === 2)
      crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    return tokens;
  }
  function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    const matcher = assign2(parser, {
      record,
      parent,
      children: [],
      alias: []
    });
    if (parent) {
      if (!matcher.record.aliasOf === !parent.record.aliasOf)
        parent.children.push(matcher);
    }
    return matcher;
  }
  function createRouterMatcher(routes2, globalOptions) {
    const matchers = [];
    const matcherMap = /* @__PURE__ */ new Map();
    globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
    function getRecordMatcher(name) {
      return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
      const isRootAdd = !originalRecord;
      const mainNormalizedRecord = normalizeRouteRecord(record);
      mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
      const options = mergeOptions(globalOptions, record);
      const normalizedRecords = [
        mainNormalizedRecord
      ];
      if ("alias" in record) {
        const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
        for (const alias of aliases) {
          normalizedRecords.push(assign2({}, mainNormalizedRecord, {
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
          }));
        }
      }
      let matcher;
      let originalMatcher;
      for (const normalizedRecord of normalizedRecords) {
        const { path } = normalizedRecord;
        if (parent && path[0] !== "/") {
          const parentPath = parent.record.path;
          const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
          normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
        }
        matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
        if (originalRecord) {
          originalRecord.alias.push(matcher);
        } else {
          originalMatcher = originalMatcher || matcher;
          if (originalMatcher !== matcher)
            originalMatcher.alias.push(matcher);
          if (isRootAdd && record.name && !isAliasRecord(matcher))
            removeRoute(record.name);
        }
        if (mainNormalizedRecord.children) {
          const children = mainNormalizedRecord.children;
          for (let i = 0; i < children.length; i++) {
            addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
          }
        }
        originalRecord = originalRecord || matcher;
        insertMatcher(matcher);
      }
      return originalMatcher ? () => {
        removeRoute(originalMatcher);
      } : noop;
    }
    function removeRoute(matcherRef) {
      if (isRouteName(matcherRef)) {
        const matcher = matcherMap.get(matcherRef);
        if (matcher) {
          matcherMap.delete(matcherRef);
          matchers.splice(matchers.indexOf(matcher), 1);
          matcher.children.forEach(removeRoute);
          matcher.alias.forEach(removeRoute);
        }
      } else {
        const index = matchers.indexOf(matcherRef);
        if (index > -1) {
          matchers.splice(index, 1);
          if (matcherRef.record.name)
            matcherMap.delete(matcherRef.record.name);
          matcherRef.children.forEach(removeRoute);
          matcherRef.alias.forEach(removeRoute);
        }
      }
    }
    function getRoutes() {
      return matchers;
    }
    function insertMatcher(matcher) {
      let i = 0;
      while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0 && (matcher.record.path !== matchers[i].record.path || !isRecordChildOf(matcher, matchers[i])))
        i++;
      matchers.splice(i, 0, matcher);
      if (matcher.record.name && !isAliasRecord(matcher))
        matcherMap.set(matcher.record.name, matcher);
    }
    function resolve(location2, currentLocation) {
      let matcher;
      let params = {};
      let path;
      let name;
      if ("name" in location2 && location2.name) {
        matcher = matcherMap.get(location2.name);
        if (!matcher)
          throw createRouterError(1, {
            location: location2
          });
        name = matcher.record.name;
        params = assign2(
          paramsFromLocation(
            currentLocation.params,
            matcher.keys.filter((k2) => !k2.optional).map((k2) => k2.name)
          ),
          location2.params && paramsFromLocation(location2.params, matcher.keys.map((k2) => k2.name))
        );
        path = matcher.stringify(params);
      } else if ("path" in location2) {
        path = location2.path;
        matcher = matchers.find((m) => m.re.test(path));
        if (matcher) {
          params = matcher.parse(path);
          name = matcher.record.name;
        }
      } else {
        matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
        if (!matcher)
          throw createRouterError(1, {
            location: location2,
            currentLocation
          });
        name = matcher.record.name;
        params = assign2({}, currentLocation.params, location2.params);
        path = matcher.stringify(params);
      }
      const matched = [];
      let parentMatcher = matcher;
      while (parentMatcher) {
        matched.unshift(parentMatcher.record);
        parentMatcher = parentMatcher.parent;
      }
      return {
        name,
        path,
        params,
        matched,
        meta: mergeMetaFields(matched)
      };
    }
    routes2.forEach((route) => addRoute(route));
    return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
  }
  function paramsFromLocation(params, keys) {
    const newParams = {};
    for (const key of keys) {
      if (key in params)
        newParams[key] = params[key];
    }
    return newParams;
  }
  function normalizeRouteRecord(record) {
    return {
      path: record.path,
      redirect: record.redirect,
      name: record.name,
      meta: record.meta || {},
      aliasOf: void 0,
      beforeEnter: record.beforeEnter,
      props: normalizeRecordProps(record),
      children: record.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in record ? record.components || null : record.component && { default: record.component }
    };
  }
  function normalizeRecordProps(record) {
    const propsObject = {};
    const props = record.props || false;
    if ("component" in record) {
      propsObject.default = props;
    } else {
      for (const name in record.components)
        propsObject[name] = typeof props === "boolean" ? props : props[name];
    }
    return propsObject;
  }
  function isAliasRecord(record) {
    while (record) {
      if (record.record.aliasOf)
        return true;
      record = record.parent;
    }
    return false;
  }
  function mergeMetaFields(matched) {
    return matched.reduce((meta2, record) => assign2(meta2, record.meta), {});
  }
  function mergeOptions(defaults, partialOptions) {
    const options = {};
    for (const key in defaults) {
      options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
    }
    return options;
  }
  function isRecordChildOf(record, parent) {
    return parent.children.some((child) => child === record || isRecordChildOf(record, child));
  }
  const HASH_RE = /#/g;
  const AMPERSAND_RE = /&/g;
  const SLASH_RE = /\//g;
  const EQUAL_RE = /=/g;
  const IM_RE = /\?/g;
  const PLUS_RE = /\+/g;
  const ENC_BRACKET_OPEN_RE = /%5B/g;
  const ENC_BRACKET_CLOSE_RE = /%5D/g;
  const ENC_CARET_RE = /%5E/g;
  const ENC_BACKTICK_RE = /%60/g;
  const ENC_CURLY_OPEN_RE = /%7B/g;
  const ENC_PIPE_RE = /%7C/g;
  const ENC_CURLY_CLOSE_RE = /%7D/g;
  const ENC_SPACE_RE = /%20/g;
  function commonEncode(text) {
    return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
  }
  function encodeHash(text) {
    return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryValue(text) {
    return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
  }
  function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
  }
  function encodeParam(text) {
    return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
  }
  function decode(text) {
    try {
      return decodeURIComponent("" + text);
    } catch (err) {
    }
    return "" + text;
  }
  function parseQuery(search) {
    const query = {};
    if (search === "" || search === "?")
      return query;
    const hasLeadingIM = search[0] === "?";
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
    for (let i = 0; i < searchParams.length; ++i) {
      const searchParam = searchParams[i].replace(PLUS_RE, " ");
      const eqPos = searchParam.indexOf("=");
      const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
      const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
      if (key in query) {
        let currentValue = query[key];
        if (!isArray2(currentValue)) {
          currentValue = query[key] = [currentValue];
        }
        currentValue.push(value);
      } else {
        query[key] = value;
      }
    }
    return query;
  }
  function stringifyQuery(query) {
    let search = "";
    for (let key in query) {
      const value = query[key];
      key = encodeQueryKey(key);
      if (value == null) {
        if (value !== void 0) {
          search += (search.length ? "&" : "") + key;
        }
        continue;
      }
      const values = isArray2(value) ? value.map((v2) => v2 && encodeQueryValue(v2)) : [value && encodeQueryValue(value)];
      values.forEach((value2) => {
        if (value2 !== void 0) {
          search += (search.length ? "&" : "") + key;
          if (value2 != null)
            search += "=" + value2;
        }
      });
    }
    return search;
  }
  function normalizeQuery(query) {
    const normalizedQuery = {};
    for (const key in query) {
      const value = query[key];
      if (value !== void 0) {
        normalizedQuery[key] = isArray2(value) ? value.map((v2) => v2 == null ? null : "" + v2) : value == null ? value : "" + value;
      }
    }
    return normalizedQuery;
  }
  const matchedRouteKey = Symbol("");
  const viewDepthKey = Symbol("");
  const routerKey = Symbol("");
  const routeLocationKey = Symbol("");
  const routerViewLocationKey = Symbol("");
  function useCallbacks() {
    let handlers = [];
    function add(handler) {
      handlers.push(handler);
      return () => {
        const i = handlers.indexOf(handler);
        if (i > -1)
          handlers.splice(i, 1);
      };
    }
    function reset() {
      handlers = [];
    }
    return {
      add,
      list: () => handlers,
      reset
    };
  }
  function registerGuard(record, name, guard) {
    const removeFromList = () => {
      record[name].delete(guard);
    };
    vue.onUnmounted(removeFromList);
    vue.onDeactivated(removeFromList);
    vue.onActivated(() => {
      record[name].add(guard);
    });
    record[name].add(guard);
  }
  function onBeforeRouteLeave(leaveGuard) {
    const activeRecord = vue.inject(
      matchedRouteKey,
      {}
    ).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "leaveGuards", leaveGuard);
  }
  function onBeforeRouteUpdate(updateGuard) {
    const activeRecord = vue.inject(
      matchedRouteKey,
      {}
    ).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "updateGuards", updateGuard);
  }
  function guardToPromiseFn(guard, to, from, record, name) {
    const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return () => new Promise((resolve, reject) => {
      const next = (valid) => {
        if (valid === false) {
          reject(createRouterError(4, {
            from,
            to
          }));
        } else if (valid instanceof Error) {
          reject(valid);
        } else if (isRouteLocation(valid)) {
          reject(createRouterError(2, {
            from: to,
            to: valid
          }));
        } else {
          if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") {
            enterCallbackArray.push(valid);
          }
          resolve();
        }
      };
      const guardReturn = guard.call(record && record.instances[name], to, from, next);
      let guardCall = Promise.resolve(guardReturn);
      if (guard.length < 3)
        guardCall = guardCall.then(next);
      guardCall.catch((err) => reject(err));
    });
  }
  function extractComponentsGuards(matched, guardType, to, from) {
    const guards = [];
    for (const record of matched) {
      for (const name in record.components) {
        let rawComponent = record.components[name];
        if (guardType !== "beforeRouteEnter" && !record.instances[name])
          continue;
        if (isRouteComponent(rawComponent)) {
          const options = rawComponent.__vccOpts || rawComponent;
          const guard = options[guardType];
          guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
        } else {
          let componentPromise = rawComponent();
          guards.push(() => componentPromise.then((resolved) => {
            if (!resolved)
              return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
            const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
            record.components[name] = resolvedComponent;
            const options = resolvedComponent.__vccOpts || resolvedComponent;
            const guard = options[guardType];
            return guard && guardToPromiseFn(guard, to, from, record, name)();
          }));
        }
      }
    }
    return guards;
  }
  function isRouteComponent(component) {
    return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
  }
  function loadRouteLocation(route) {
    return route.matched.every((record) => record.redirect) ? Promise.reject(new Error("Cannot load a route that redirects.")) : Promise.all(route.matched.map((record) => record.components && Promise.all(Object.keys(record.components).reduce((promises, name) => {
      const rawComponent = record.components[name];
      if (typeof rawComponent === "function" && !("displayName" in rawComponent)) {
        promises.push(rawComponent().then((resolved) => {
          if (!resolved)
            return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}". Ensure you passed a function that returns a promise.`));
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.components[name] = resolvedComponent;
          return;
        }));
      }
      return promises;
    }, [])))).then(() => route);
  }
  function useLink(props) {
    const router = vue.inject(routerKey);
    const currentRoute = vue.inject(routeLocationKey);
    const route = vue.computed(() => router.resolve(vue.unref(props.to)));
    const activeRecordIndex = vue.computed(() => {
      const { matched } = route.value;
      const { length } = matched;
      const routeMatched = matched[length - 1];
      const currentMatched = currentRoute.matched;
      if (!routeMatched || !currentMatched.length)
        return -1;
      const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
      if (index > -1)
        return index;
      const parentRecordPath = getOriginalPath(matched[length - 2]);
      return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
    });
    const isActive = vue.computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
    const isExactActive = vue.computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate2(e = {}) {
      if (guardEvent(e)) {
        return router[vue.unref(props.replace) ? "replace" : "push"](
          vue.unref(props.to)
        ).catch(noop);
      }
      return Promise.resolve();
    }
    return {
      route,
      href: vue.computed(() => route.value.href),
      isActive,
      isExactActive,
      navigate: navigate2
    };
  }
  const RouterLinkImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: {
        type: [String, Object],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink,
    setup(props, { slots }) {
      const link = vue.reactive(useLink(props));
      const { options } = vue.inject(routerKey);
      const elClass = vue.computed(() => ({
        [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
        [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
      }));
      return () => {
        const children = slots.default && slots.default(link);
        return props.custom ? children : vue.h("a", {
          "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
          href: link.href,
          onClick: link.navigate,
          class: elClass.value
        }, children);
      };
    }
  });
  const RouterLink = RouterLinkImpl;
  function guardEvent(e) {
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
      return;
    if (e.defaultPrevented)
      return;
    if (e.button !== void 0 && e.button !== 0)
      return;
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const target = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(target))
        return;
    }
    if (e.preventDefault)
      e.preventDefault();
    return true;
  }
  function includesParams(outer, inner) {
    for (const key in inner) {
      const innerValue = inner[key];
      const outerValue = outer[key];
      if (typeof innerValue === "string") {
        if (innerValue !== outerValue)
          return false;
      } else {
        if (!isArray2(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
          return false;
      }
    }
    return true;
  }
  function getOriginalPath(record) {
    return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
  }
  const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
  const RouterViewImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterView",
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: { MODE: 3 },
    setup(props, { attrs, slots }) {
      const injectedRoute = vue.inject(routerViewLocationKey);
      const routeToDisplay = vue.computed(() => props.route || injectedRoute.value);
      const injectedDepth = vue.inject(viewDepthKey, 0);
      const depth = vue.computed(() => {
        let initialDepth = vue.unref(injectedDepth);
        const { matched } = routeToDisplay.value;
        let matchedRoute;
        while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) {
          initialDepth++;
        }
        return initialDepth;
      });
      const matchedRouteRef = vue.computed(() => routeToDisplay.value.matched[depth.value]);
      vue.provide(viewDepthKey, vue.computed(() => depth.value + 1));
      vue.provide(matchedRouteKey, matchedRouteRef);
      vue.provide(routerViewLocationKey, routeToDisplay);
      const viewRef = vue.ref();
      vue.watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
        if (to) {
          to.instances[name] = instance;
          if (from && from !== to && instance && instance === oldInstance) {
            if (!to.leaveGuards.size) {
              to.leaveGuards = from.leaveGuards;
            }
            if (!to.updateGuards.size) {
              to.updateGuards = from.updateGuards;
            }
          }
        }
        if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
          (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
        }
      }, { flush: "post" });
      return () => {
        const route = routeToDisplay.value;
        const currentName = props.name;
        const matchedRoute = matchedRouteRef.value;
        const ViewComponent = matchedRoute && matchedRoute.components[currentName];
        if (!ViewComponent) {
          return normalizeSlot(slots.default, { Component: ViewComponent, route });
        }
        const routePropsOption = matchedRoute.props[currentName];
        const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
        const onVnodeUnmounted = (vnode) => {
          if (vnode.component.isUnmounted) {
            matchedRoute.instances[currentName] = null;
          }
        };
        const component = vue.h(ViewComponent, assign2({}, routeProps, attrs, {
          onVnodeUnmounted,
          ref: viewRef
        }));
        return normalizeSlot(slots.default, { Component: component, route }) || component;
      };
    }
  });
  function normalizeSlot(slot, data) {
    if (!slot)
      return null;
    const slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
  }
  const RouterView = RouterViewImpl;
  function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    const parseQuery$1 = options.parseQuery || parseQuery;
    const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    const routerHistory = options.history;
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = vue.shallowRef(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = applyToParams.bind(null, decode);
    function addRoute(parentOrRoute, route) {
      let parent;
      let record;
      if (isRouteName(parentOrRoute)) {
        parent = matcher.getRecordMatcher(parentOrRoute);
        record = route;
      } else {
        record = parentOrRoute;
      }
      return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
      const recordMatcher = matcher.getRecordMatcher(name);
      if (recordMatcher) {
        matcher.removeRoute(recordMatcher);
      }
    }
    function getRoutes() {
      return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
    }
    function hasRoute(name) {
      return !!matcher.getRecordMatcher(name);
    }
    function resolve(rawLocation, currentLocation) {
      currentLocation = assign2({}, currentLocation || currentRoute.value);
      if (typeof rawLocation === "string") {
        const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
        const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
        const href2 = routerHistory.createHref(locationNormalized.fullPath);
        return assign2(locationNormalized, matchedRoute2, {
          params: decodeParams(matchedRoute2.params),
          hash: decode(locationNormalized.hash),
          redirectedFrom: void 0,
          href: href2
        });
      }
      let matcherLocation;
      if ("path" in rawLocation) {
        matcherLocation = assign2({}, rawLocation, {
          path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
        });
      } else {
        const targetParams = assign2({}, rawLocation.params);
        for (const key in targetParams) {
          if (targetParams[key] == null) {
            delete targetParams[key];
          }
        }
        matcherLocation = assign2({}, rawLocation, {
          params: encodeParams(rawLocation.params)
        });
        currentLocation.params = encodeParams(currentLocation.params);
      }
      const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
      const hash = rawLocation.hash || "";
      matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
      const fullPath = stringifyURL(stringifyQuery$1, assign2({}, rawLocation, {
        hash: encodeHash(hash),
        path: matchedRoute.path
      }));
      const href = routerHistory.createHref(fullPath);
      return assign2({
        fullPath,
        hash,
        query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      }, matchedRoute, {
        redirectedFrom: void 0,
        href
      });
    }
    function locationAsObject(to) {
      return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign2({}, to);
    }
    function checkCanceledNavigation(to, from) {
      if (pendingLocation !== to) {
        return createRouterError(8, {
          from,
          to
        });
      }
    }
    function push(to) {
      return pushWithRedirect(to);
    }
    function replace(to) {
      return push(assign2(locationAsObject(to), { replace: true }));
    }
    function handleRedirectRecord(to) {
      const lastMatched = to.matched[to.matched.length - 1];
      if (lastMatched && lastMatched.redirect) {
        const { redirect } = lastMatched;
        let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
        if (typeof newTargetLocation === "string") {
          newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
          newTargetLocation.params = {};
        }
        return assign2({
          query: to.query,
          hash: to.hash,
          params: "path" in newTargetLocation ? {} : to.params
        }, newTargetLocation);
      }
    }
    function pushWithRedirect(to, redirectedFrom) {
      const targetLocation = pendingLocation = resolve(to);
      const from = currentRoute.value;
      const data = to.state;
      const force = to.force;
      const replace2 = to.replace === true;
      const shouldRedirect = handleRedirectRecord(targetLocation);
      if (shouldRedirect)
        return pushWithRedirect(
          assign2(locationAsObject(shouldRedirect), {
            state: typeof shouldRedirect === "object" ? assign2({}, data, shouldRedirect.state) : data,
            force,
            replace: replace2
          }),
          redirectedFrom || targetLocation
        );
      const toLocation = targetLocation;
      toLocation.redirectedFrom = redirectedFrom;
      let failure;
      if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
        failure = createRouterError(16, { to: toLocation, from });
        handleScroll();
      }
      return (failure ? Promise.resolve(failure) : navigate2(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure2) => {
        if (failure2) {
          if (isNavigationFailure(failure2, 2)) {
            return pushWithRedirect(
              assign2({
                replace: replace2
              }, locationAsObject(failure2.to), {
                state: typeof failure2.to === "object" ? assign2({}, data, failure2.to.state) : data,
                force
              }),
              redirectedFrom || toLocation
            );
          }
        } else {
          failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
        }
        triggerAfterEach(toLocation, from, failure2);
        return failure2;
      });
    }
    function checkCanceledNavigationAndReject(to, from) {
      const error = checkCanceledNavigation(to, from);
      return error ? Promise.reject(error) : Promise.resolve();
    }
    function navigate2(to, from) {
      let guards;
      const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
      guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
      for (const record of leavingRecords) {
        record.leaveGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards).then(() => {
        guards = [];
        for (const guard of beforeGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
        for (const record of updatingRecords) {
          record.updateGuards.forEach((guard) => {
            guards.push(guardToPromiseFn(guard, to, from));
          });
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const record of to.matched) {
          if (record.beforeEnter && !from.matched.includes(record)) {
            if (isArray2(record.beforeEnter)) {
              for (const beforeEnter of record.beforeEnter)
                guards.push(guardToPromiseFn(beforeEnter, to, from));
            } else {
              guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
          }
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        to.matched.forEach((record) => record.enterCallbacks = {});
        guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const guard of beforeResolveGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
    }
    function triggerAfterEach(to, from, failure) {
      for (const guard of afterGuards.list())
        guard(to, from, failure);
    }
    function finalizeNavigation(toLocation, from, isPush, replace2, data) {
      const error = checkCanceledNavigation(toLocation, from);
      if (error)
        return error;
      const isFirstNavigation = from === START_LOCATION_NORMALIZED;
      const state = {};
      if (isPush) {
        if (replace2 || isFirstNavigation)
          routerHistory.replace(toLocation.fullPath, assign2({
            scroll: isFirstNavigation && state && state.scroll
          }, data));
        else
          routerHistory.push(toLocation.fullPath, data);
      }
      currentRoute.value = toLocation;
      handleScroll();
      markAsReady();
    }
    let removeHistoryListener;
    function setupListeners() {
      if (removeHistoryListener)
        return;
      removeHistoryListener = routerHistory.listen((to, _from, info) => {
        if (!router.listening)
          return;
        const toLocation = resolve(to);
        const shouldRedirect = handleRedirectRecord(toLocation);
        if (shouldRedirect) {
          pushWithRedirect(assign2(shouldRedirect, { replace: true }), toLocation).catch(noop);
          return;
        }
        pendingLocation = toLocation;
        const from = currentRoute.value;
        navigate2(toLocation, from).catch((error) => {
          if (isNavigationFailure(error, 4 | 8)) {
            return error;
          }
          if (isNavigationFailure(error, 2)) {
            pushWithRedirect(
              error.to,
              toLocation
            ).then((failure) => {
              if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
                routerHistory.go(-1, false);
              }
            }).catch(noop);
            return Promise.reject();
          }
          if (info.delta) {
            routerHistory.go(-info.delta, false);
          }
          return triggerError(error, toLocation, from);
        }).then((failure) => {
          failure = failure || finalizeNavigation(
            toLocation,
            from,
            false
          );
          if (failure) {
            if (info.delta && !isNavigationFailure(failure, 8)) {
              routerHistory.go(-info.delta, false);
            } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
              routerHistory.go(-1, false);
            }
          }
          triggerAfterEach(toLocation, from, failure);
        }).catch(noop);
      });
    }
    let readyHandlers = useCallbacks();
    let errorHandlers = useCallbacks();
    let ready;
    function triggerError(error, to, from) {
      markAsReady(error);
      const list = errorHandlers.list();
      if (list.length) {
        list.forEach((handler) => handler(error, to, from));
      } else {
        console.error(error);
      }
      return Promise.reject(error);
    }
    function isReady() {
      if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
        return Promise.resolve();
      return new Promise((resolve2, reject) => {
        readyHandlers.add([resolve2, reject]);
      });
    }
    function markAsReady(err) {
      if (!ready) {
        ready = !err;
        setupListeners();
        readyHandlers.list().forEach(([resolve2, reject]) => err ? reject(err) : resolve2());
        readyHandlers.reset();
      }
      return err;
    }
    function handleScroll(to, from, isPush, isFirstNavigation) {
      return Promise.resolve();
    }
    const go = (delta) => routerHistory.go(delta);
    const installedApps = /* @__PURE__ */ new Set();
    const router = {
      currentRoute,
      listening: true,
      addRoute,
      removeRoute,
      hasRoute,
      getRoutes,
      resolve,
      options,
      push,
      replace,
      go,
      back: () => go(-1),
      forward: () => go(1),
      beforeEach: beforeGuards.add,
      beforeResolve: beforeResolveGuards.add,
      afterEach: afterGuards.add,
      onError: errorHandlers.add,
      isReady,
      install(app) {
        const router2 = this;
        app.component("RouterLink", RouterLink);
        app.component("RouterView", RouterView);
        app.config.globalProperties.$router = router2;
        Object.defineProperty(app.config.globalProperties, "$route", {
          enumerable: true,
          get: () => vue.unref(currentRoute)
        });
        const reactiveRoute = {};
        for (const key in START_LOCATION_NORMALIZED) {
          reactiveRoute[key] = vue.computed(() => currentRoute.value[key]);
        }
        app.provide(routerKey, router2);
        app.provide(routeLocationKey, vue.reactive(reactiveRoute));
        app.provide(routerViewLocationKey, currentRoute);
        const unmountApp = app.unmount;
        installedApps.add(app);
        app.unmount = function() {
          installedApps.delete(app);
          if (installedApps.size < 1) {
            pendingLocation = START_LOCATION_NORMALIZED;
            removeHistoryListener && removeHistoryListener();
            removeHistoryListener = null;
            currentRoute.value = START_LOCATION_NORMALIZED;
            ready = false;
          }
          unmountApp();
        };
      }
    };
    return router;
  }
  function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
  }
  function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for (let i = 0; i < len; i++) {
      const recordFrom = from.matched[i];
      if (recordFrom) {
        if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
          updatingRecords.push(recordFrom);
        else
          leavingRecords.push(recordFrom);
      }
      const recordTo = to.matched[i];
      if (recordTo) {
        if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
          enteringRecords.push(recordTo);
        }
      }
    }
    return [leavingRecords, updatingRecords, enteringRecords];
  }
  function useRouter2() {
    return vue.inject(routerKey);
  }
  function useRoute2() {
    return vue.inject(routeLocationKey);
  }
  exports.RouterLink = RouterLink;
  exports.RouterView = RouterView;
  exports.START_LOCATION = START_LOCATION_NORMALIZED;
  exports.createMemoryHistory = createMemoryHistory;
  exports.createRouter = createRouter;
  exports.createRouterMatcher = createRouterMatcher;
  exports.createWebHashHistory = createWebHashHistory;
  exports.createWebHistory = createWebHistory;
  exports.isNavigationFailure = isNavigationFailure;
  exports.loadRouteLocation = loadRouteLocation;
  exports.matchedRouteKey = matchedRouteKey;
  exports.onBeforeRouteLeave = onBeforeRouteLeave;
  exports.onBeforeRouteUpdate = onBeforeRouteUpdate;
  exports.parseQuery = parseQuery;
  exports.routeLocationKey = routeLocationKey;
  exports.routerKey = routerKey;
  exports.routerViewLocationKey = routerViewLocationKey;
  exports.stringifyQuery = stringifyQuery;
  exports.useLink = useLink;
  exports.useRoute = useRoute2;
  exports.useRouter = useRouter2;
  exports.viewDepthKey = viewDepthKey;
})(vueRouter_prod);
(function(module) {
  module.exports = vueRouter_prod;
})(vueRouter_cjs_prod);
const wrapInRef = (value) => vue_cjs_prod.isRef(value) ? value : vue_cjs_prod.ref(value);
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = vue_cjs_prod.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (vue_cjs_prod.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useError = () => vue_cjs_prod.toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const CookieDefaults = {
  path: "/",
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a, _b;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = wrapInRef((_b = cookies[name]) != null ? _b : (_a = opts.default) == null ? void 0 : _a.call(opts));
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual$1(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  var _a;
  {
    return parse(((_a = useRequestEvent()) == null ? void 0 : _a.req.headers.cookie) || "", opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return serialize(name, value, { ...opts, maxAge: -1 });
  }
  return serialize(name, value, opts);
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (vue_cjs_prod.getCurrentInstance()) {
    return vue_cjs_prod.inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 302));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  return vue_cjs_prod.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = vue_cjs_prod.computed(() => {
        return props.to || props.href || "";
      });
      const isExternal = vue_cjs_prod.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      return () => {
        var _a, _b, _c;
        if (!isExternal.value) {
          return vue_cjs_prod.h(
            vue_cjs_prod.resolveComponent("RouterLink"),
            {
              to: to.value,
              activeClass: props.activeClass || options.activeClass,
              exactActiveClass: props.exactActiveClass || options.exactActiveClass,
              replace: props.replace,
              ariaCurrentValue: props.ariaCurrentValue,
              custom: props.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? (_b = (_a = router.resolve(to.value)) == null ? void 0 : _a.href) != null ? _b : null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate2 = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate: navigate2,
            route: router.resolve(href),
            rel,
            target,
            isActive: false,
            isExactActive: false
          });
        }
        return vue_cjs_prod.h("a", { href, rel, target }, (_c = slots.default) == null ? void 0 : _c.call(slots));
      };
    }
  });
}
const __nuxt_component_0$4 = defineNuxtLink({ componentName: "NuxtLink" });
function useHead(meta2) {
  const resolvedMeta = isFunction_1(meta2) ? vue_cjs_prod.computed(meta2) : meta2;
  useNuxtApp()._useHead(resolvedMeta);
}
const preload = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
const components = {};
const _nuxt_components_plugin_mjs_KR1HBZs4kY = defineNuxtPlugin((nuxtApp) => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
});
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var BODY_TAG_ATTR_NAME = `data-meta-body`;
var createElement = (tag, attrs, document2) => {
  const el = document2.createElement(tag);
  for (const key of Object.keys(attrs)) {
    if (key === "body" && attrs.body === true) {
      el.setAttribute(BODY_TAG_ATTR_NAME, "true");
    } else {
      let value = attrs[key];
      if (key === "key" || value === false) {
        continue;
      }
      if (key === "children") {
        el.textContent = value;
      } else {
        el.setAttribute(key, value);
      }
    }
  }
  return el;
};
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "noscript",
  "htmlAttrs",
  "bodyAttrs"
];
var renderTemplate = (template, title) => {
  if (template == null)
    return "";
  if (typeof template === "string") {
    return template.replace("%s", title != null ? title : "");
  }
  return template(vue_cjs_prod.unref(title));
};
var headObjToTags = (obj) => {
  const tags = [];
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key] == null)
      continue;
    switch (key) {
      case "title":
        tags.push({ tag: key, props: { children: obj[key] } });
        break;
      case "titleTemplate":
        break;
      case "base":
        tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
        break;
      default:
        if (acceptFields.includes(key)) {
          const value = obj[key];
          if (Array.isArray(value)) {
            value.forEach((item) => {
              tags.push({ tag: key, props: item });
            });
          } else if (value) {
            tags.push({ tag: key, props: value });
          }
        }
        break;
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document2 = window.document, type, tags) => {
  var _a, _b;
  const head = document2.head;
  const body = document2.body;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  let bodyMetaElements = body.querySelectorAll(`[${BODY_TAG_ATTR_NAME}]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldHeadElements = [];
  const oldBodyElements = [];
  if (bodyMetaElements) {
    for (let i = 0; i < bodyMetaElements.length; i++) {
      if (bodyMetaElements[i] && ((_a = bodyMetaElements[i].tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldBodyElements.push(bodyMetaElements[i]);
      }
    }
  }
  if (headCountEl) {
    for (let i = 0, j2 = headCountEl.previousElementSibling; i < headCount; i++, j2 = (j2 == null ? void 0 : j2.previousElementSibling) || null) {
      if (((_b = j2 == null ? void 0 : j2.tagName) == null ? void 0 : _b.toLowerCase()) === type) {
        oldHeadElements.push(j2);
      }
    }
  } else {
    headCountEl = document2.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => {
    var _a2;
    return {
      element: createElement(tag.tag, tag.props, document2),
      body: (_a2 = tag.props.body) != null ? _a2 : false
    };
  });
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldHeadElements.length; i++) {
      const oldEl = oldHeadElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldHeadElements.splice(i, 1);
        return false;
      }
    }
    for (let i = 0; i < oldBodyElements.length; i++) {
      const oldEl = oldBodyElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldBodyElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldBodyElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  oldHeadElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    if (t.body === true) {
      body.insertAdjacentElement("beforeend", t.element);
    } else {
      head.insertBefore(t.element, headCountEl);
    }
  });
  headCountEl.setAttribute("content", "" + (headCount - oldHeadElements.length + newElements.filter((t) => !t.body).length));
};
var createHead = (initHeadObject) => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  if (initHeadObject) {
    allHeadObjs.push(vue_cjs_prod.shallowRef(initHeadObject));
  }
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      const titleTemplate = allHeadObjs.map((i) => vue_cjs_prod.unref(i).titleTemplate).reverse().find((i) => i != null);
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(vue_cjs_prod.unref(objs));
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          if (titleTemplate && tag.tag === "title") {
            tag.props.children = renderTemplate(titleTemplate, tag.props.children);
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document2 = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document2.title = title;
      }
      setAttrs(document2.documentElement, htmlAttrs);
      setAttrs(document2.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document2, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var tagToString = (tag) => {
  let isBodyTag = false;
  if (tag.props.body) {
    isBodyTag = true;
    delete tag.props.body;
  }
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}${isBodyTag ? `  ${BODY_TAG_ATTR_NAME}="true"` : ""}>`;
  }
  return `<${tag.tag}${attrs}${isBodyTag ? ` ${BODY_TAG_ATTR_NAME}="true"` : ""}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  let bodyTags = [];
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else if (tag.props.body) {
      bodyTags.push(tagToString(tag));
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    },
    get bodyTags() {
      return bodyTags.join("");
    }
  };
};
const node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_D7WGfuP1A0 = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    vue_cjs_prod.watchEffect(() => {
      head.updateDOM();
    });
  });
  nuxtApp._useHead = (_meta) => {
    const meta2 = vue_cjs_prod.ref(_meta);
    const headObj = vue_cjs_prod.computed(() => {
      const overrides = { meta: [] };
      if (meta2.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta2.value.charset });
      }
      if (meta2.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta2.value.viewport });
      }
      return defu(overrides, meta2.value);
    });
    head.addHeadObjs(headObj);
    {
      return;
    }
  };
  {
    nuxtApp.ssrContext.renderMeta = () => {
      const meta2 = renderHeadToString(head);
      return {
        ...meta2,
        bodyScripts: meta2.bodyTags
      };
    };
  }
});
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = vue_cjs_prod.defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    fetchpriority: String,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
const NoScript = vue_cjs_prod.defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a;
    const noscript = { ...props };
    const textContent = (((_a = slots.default) == null ? void 0 : _a.call(slots)) || []).filter(({ children }) => children).map(({ children }) => children).join("");
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
const Link = vue_cjs_prod.defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
const Base = vue_cjs_prod.defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = vue_cjs_prod.defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    const title = ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null;
    return {
      title
    };
  })
});
const Meta = vue_cjs_prod.defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta2) => ({
    meta: [meta2]
  }))
});
const Style = vue_cjs_prod.defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = vue_cjs_prod.defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const Html = vue_cjs_prod.defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body = vue_cjs_prod.defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const Components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Script,
  NoScript,
  Link,
  Base,
  Title,
  Meta,
  Style,
  Head,
  Html,
  Body
}, Symbol.toStringTag, { value: "Module" }));
const metaConfig = { "globalMeta": { "meta": [], "link": [], "style": [], "script": [], "noscript": [], "charset": "utf-8", "viewport": "width=device-width, initial-scale=1" } };
const metaMixin = {
  created() {
    const instance = vue_cjs_prod.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = useNuxtApp();
    const source = typeof options.head === "function" ? vue_cjs_prod.computed(() => options.head(nuxtApp)) : options.head;
    useHead(source);
  }
};
const node_modules_nuxt_dist_head_runtime_plugin_mjs_1QO0gqa6n2 = defineNuxtPlugin((nuxtApp) => {
  useHead(vue_cjs_prod.markRaw({ title: "", ...metaConfig.globalMeta }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in Components) {
    nuxtApp.vueApp.component(name, Components[name]);
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (override, routeProps) => {
  var _a;
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = (_a = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a : interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const Fragment = {
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? vue_cjs_prod.h(component, props === true ? {} : props, slots) : vue_cjs_prod.h(Fragment, {}, slots) };
};
const isNestedKey = Symbol("isNested");
const NuxtPage = vue_cjs_prod.defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    const isNested = vue_cjs_prod.inject(isNestedKey, false);
    vue_cjs_prod.provide(isNestedKey, true);
    return () => {
      return vue_cjs_prod.h(vueRouter_cjs_prod.exports.RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          var _a;
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(props.pageKey, routeProps);
          return _wrapIf(
            vue_cjs_prod.Transition,
            (_a = routeProps.route.meta.pageTransition) != null ? _a : defaultPageTransition,
            wrapInKeepAlive(
              routeProps.route.meta.keepalive,
              isNested && nuxtApp.isHydrating ? vue_cjs_prod.h(Component, { key, routeProps, pageKey: key }) : vue_cjs_prod.h(vue_cjs_prod.Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
              }, { default: () => vue_cjs_prod.h(Component, { key, routeProps, pageKey: key }) })
            )
          ).default();
        }
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
const Component = vue_cjs_prod.defineComponent({
  props: ["routeProps", "pageKey"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = vue_cjs_prod.computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    vue_cjs_prod.provide("_route", vue_cjs_prod.reactive(route));
    return () => vue_cjs_prod.h(props.routeProps.Component);
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const meta$4 = void 0;
const meta$3 = void 0;
const _sfc_main$g = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "button-primary z-[1] rounded-[12px] flex items-center justify-center text-center" }, _attrs))} data-v-9ad13182>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheButton/TheButton.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$e], ["__scopeId", "data-v-9ad13182"]]);
const _sfc_main$f = {
  props: {
    fill: {
      default: "#FBFBFD",
      type: String
    }
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    width: "17",
    height: "17",
    viewBox: "0 0 17 17",
    fill: $props.fill,
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M13.4577 3.54175H12.7493V2.12508C12.7493 1.93722 12.6747 1.75705 12.5419 1.62421C12.409 1.49138 12.2289 1.41675 12.041 1.41675C11.8532 1.41675 11.673 1.49138 11.5401 1.62421C11.4073 1.75705 11.3327 1.93722 11.3327 2.12508V3.54175H5.66602V2.12508C5.66602 1.93722 5.59139 1.75705 5.45855 1.62421C5.32571 1.49138 5.14554 1.41675 4.95768 1.41675C4.76982 1.41675 4.58965 1.49138 4.45682 1.62421C4.32398 1.75705 4.24935 1.93722 4.24935 2.12508V3.54175H3.54102C2.97743 3.54175 2.43693 3.76563 2.03841 4.16415C1.6399 4.56266 1.41602 5.10316 1.41602 5.66675V6.37508H15.5827V5.66675C15.5827 5.10316 15.3588 4.56266 14.9603 4.16415C14.5618 3.76563 14.0213 3.54175 13.4577 3.54175Z"${serverRenderer.exports.ssrRenderAttr("fill", $props.fill)}></path><path d="M1.41602 13.4584C1.41602 14.022 1.6399 14.5625 2.03841 14.961C2.43693 15.3595 2.97743 15.5834 3.54102 15.5834H13.4577C14.0213 15.5834 14.5618 15.3595 14.9603 14.961C15.3588 14.5625 15.5827 14.022 15.5827 13.4584V7.79175H1.41602V13.4584Z"${serverRenderer.exports.ssrRenderAttr("fill", $props.fill)}></path></svg>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Svg/CalendarIcon.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const CalendarIcon = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$e = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 300",
    height: "42",
    width: "42"
  }, _attrs))}><rect class="tooltip-horizontal-scroll-icon_card" x="480" width="200" height="200" rx="5" fill="rgba(190,190,190,0.3)"></rect><rect class="tooltip-horizontal-scroll-icon_card" y="0" width="200" height="200" rx="5" fill="rgba(190,190,190,0.3)"></rect><rect class="tooltip-horizontal-scroll-icon_card" x="240" width="200" height="200" rx="5" fill="rgba(190,190,190,0.3)"></rect><path class="tooltip-horizontal-scroll-icon_hand" d="M78.9579 285.7C78.9579 285.7 37.8579 212.5 20.5579 180.8C-2.44209 138.6 -6.2422 120.8 9.6579 112C19.5579 106.5 33.2579 108.8 41.6579 123.4L61.2579 154.6V32.3C61.2579 32.3 60.0579 0 83.0579 0C107.558 0 105.458 32.3 105.458 32.3V91.7C105.458 91.7 118.358 82.4 133.458 86.6C141.158 88.7 150.158 92.4 154.958 104.6C154.958 104.6 185.658 89.7 200.958 121.4C200.958 121.4 236.358 114.4 236.358 151.1C236.358 187.8 192.158 285.7 192.158 285.7H78.9579Z" fill="rgba(190,190,190,1)"></path></svg>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Svg/DragAnim.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$d = {
  props: ["bike"],
  components: { CalendarIcon }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheButton = __nuxt_component_0$3;
  const _component_CalendarIcon = vue_cjs_prod.resolveComponent("CalendarIcon");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "bike bg-light xsm:px-[56px] pb-[40px] pt-[33px] px-[41px] rounded-[26px] flex flex-col lg:max-w-[440px] lg:mx-auto" }, _attrs))}><div class="bike-title xsm:tracking-[-0.2px] lil:text-[18px] xsm:mb-[46px] font-Helvbold uppercase text-[28px] mb-[64px] xsm:text-[22px]">${serverRenderer.exports.ssrInterpolate($props.bike.title)}</div><div class="bike-img mb-[82px] xsm:mb-[63px] mt-auto"><img class="object-contain mx-auto max-w-full ml-[-5px]"${serverRenderer.exports.ssrRenderAttr("src", $props.bike.img)} alt=""></div><div class="bike-desc"><div class="bike-desc__text text-[16px] xsm:tracking-[0.2px] text-dark xsm:text-[12px] xsm:leading-[16px] leading-[20px] xsm:mb-[18px] mb-[26px]">${serverRenderer.exports.ssrInterpolate($props.bike.desc)}</div></div><div class="bike-price flex items-end font-Helvbold justify-between mb-[26px] xsm:mb-[21px]"><div class="bike-price__fuel text-[18px] xsm:text-[14px] lil:text-[10px]"> \u0420\u0430\u0441\u0445\u043E\u0434: ${serverRenderer.exports.ssrInterpolate($props.bike.fuel)}</div><div class="bike-price__value text-[18px] xsm:text-[14px] lil:text-[10px]"> \u043E\u0442 ${serverRenderer.exports.ssrInterpolate($props.bike.priceDay)} / \u0434\u0435\u043D\u044C </div></div><div class="bike-bottom flex items-center justify-between">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_TheButton, { class: "h-[70px] xsm:text-[12px] lil:mr-[8px] lil:text-[10px] lil:gap-[6px] xsm:h-[54px] xsm:w-full xsm:mr-[25px] gap-[11px] w-[250px] px-0 py-0 text-[16px] font-Helvmed text-light" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_CalendarIcon, { class: "flex-shrink-0 w-[19px]" }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C</span>`);
      } else {
        return [
          vue_cjs_prod.createVNode(_component_CalendarIcon, { class: "flex-shrink-0 w-[19px]" }),
          vue_cjs_prod.createVNode("span", null, "\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<button class="bike-detailed tracking-[-1.1px] font-Helvmed text-center text-[16px] xsm:text-[13px]"> \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 </button></div></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Bike/Bike.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$c = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    width: "17",
    height: "15",
    viewBox: "0 0 17 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M13.6866 14.4663C12.3299 14.4498 11.2435 13.3367 11.2601 11.9801C11.2767 10.6236 12.3899 9.53739 13.7466 9.55397C15.1033 9.57055 16.1897 10.6837 16.1731 12.0402C16.1565 13.3967 15.0433 14.4829 13.6866 14.4663Z" fill="#111111"></path><path d="M2.47761 14.4668C1.12091 14.4503 0.0345254 13.3371 0.0510991 11.9806C0.0676729 10.6241 1.18093 9.53788 2.53762 9.55446C3.89432 9.57104 4.9807 10.6841 4.96413 12.0407C4.94756 13.3972 3.8343 14.4834 2.47761 14.4668Z" fill="#111111"></path><path d="M7.46125 2.50795C7.31571 2.65238 7.11943 2.73414 6.91439 2.73572L5.58195 7.53324C5.34156 8.39818 5.55672 9.33418 6.17396 9.98628C6.17396 9.98628 6.96685 10.8406 8.15386 10.8419C8.52836 10.8393 8.8866 10.6886 9.15042 10.4228C9.41423 10.157 9.56219 9.79766 9.56201 9.42316C9.56208 8.90479 9.50417 8.38803 9.38935 7.88253C9.24127 7.30248 9.14465 7.11322 8.96701 6.74931C8.38728 6.66996 8.16349 5.81697 8.59215 5.12236C9.04172 4.39189 10.0272 4.30822 11.2152 4.72392C12.4032 5.13963 13.5132 4.9155 15.0472 4.6532C16.5895 4.38957 16.8308 6.75595 15.7169 6.75595H15.0435C15.8396 7.22999 16.4864 7.91838 16.9099 8.7425C16.9584 8.83584 16.988 8.93782 16.997 9.04262C17.0061 9.14742 16.9944 9.25297 16.9626 9.35325C16.9309 9.45353 16.8797 9.54657 16.8119 9.62704C16.7442 9.70752 16.6613 9.77385 16.5679 9.82226C16.4787 9.86705 16.3779 9.88297 16.2793 9.8678C16.1807 9.85262 16.0892 9.80712 16.0177 9.73759C15.6472 9.3609 15.1894 9.08157 14.6849 8.92445C14.3705 8.83038 14.0445 8.78054 13.7164 8.77636C12.8591 8.77733 12.0372 9.11834 11.431 9.72457C10.8249 10.3308 10.4839 11.1527 10.4831 12.01C10.4831 12.0764 10.4851 12.1434 10.489 12.2109C10.4905 12.2336 10.4873 12.2563 10.4796 12.2777C10.4719 12.2991 10.4599 12.3187 10.4443 12.3352C10.4288 12.3518 10.41 12.365 10.3891 12.374C10.3682 12.383 10.3458 12.3876 10.323 12.3875H6.57107C6.35791 12.3815 6.15404 12.299 5.9967 12.1551C5.83935 12.0111 5.73905 11.8154 5.7141 11.6036C5.63617 10.9896 5.38371 10.4108 4.98668 9.93599C4.58966 9.46115 4.06474 9.1102 3.47422 8.92478C3.15981 8.83072 2.83383 8.78088 2.50568 8.7767C1.7589 8.77604 1.03513 9.0351 0.458378 9.50949C0.223299 9.7024 -0.110392 9.43113 0.0340405 9.16351L0.0380249 9.15654C0.517719 8.30577 1.24628 7.62216 2.12584 7.19755C2.25168 7.13646 2.37918 7.08168 2.50734 7.03154C2.55051 4.81091 5.12806 2.73671 5.12806 2.73671C4.43578 2.77722 4.41154 2.08793 4.41154 2.08793C4.36904 1.2522 4.93482 0.582496 5.71543 0.536676C5.91205 0.526477 6.10698 0.577646 6.27324 0.683101L6.7248 0.966656C6.87597 1.06403 7.03554 1.14771 7.2016 1.21668C7.31589 1.26291 7.41774 1.33529 7.49899 1.42801C7.58024 1.52073 7.63861 1.63121 7.66943 1.75058C7.66943 1.75058 7.87761 1.81234 7.95398 1.88339C8.00799 1.92955 8.0475 1.99034 8.06774 2.05844C8.08798 2.12654 8.08808 2.19905 8.06804 2.26721C8.048 2.33537 8.00867 2.39627 7.95479 2.44258C7.90091 2.48889 7.83479 2.51863 7.76439 2.5282C7.76439 2.5282 7.65814 2.54613 7.46125 2.50795Z" fill="#111111"></path></svg>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Svg/BikeIcon.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$b = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    width: "17",
    height: "17",
    viewBox: "0 0 17 17",
    fill: "none"
  }, _attrs))}><path d="M5.89688 5.89688C1.75313 9.9875 1.0625 15.9375 1.0625 15.9375C1.0625 15.9375 7.0125 15.2469 11.1031 11.1031C15.1937 6.95937 15.9375 1.0625 15.9375 1.0625C15.9375 1.0625 9.9875 1.75313 5.89688 5.89688Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.84375 5.89697V7.49072C5.84375 8.44697 6.32187 9.3501 7.17188 9.82822C8.02188 10.3063 8.5 11.2095 8.5 12.1657V13.1751" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 3.77197V5.84385C8.5 6.8001 8.97812 7.70322 9.82812 8.18135C10.6781 8.65947 11.1562 9.5626 11.1562 10.5188V11.0501" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Svg/SurfIcon.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$a = {
  props: {
    stroke: {
      required: false,
      default: "#111111"
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    width: "8",
    height: "6",
    viewBox: "0 0 8 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M1 1.5L4 4.5L7 1.5"${serverRenderer.exports.ssrRenderAttr("stroke", $props.stroke)} stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Svg/ArrowIcon.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const ArrowIcon = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$9 = {
  props: {
    label: {
      required: true,
      type: String
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SvgArrowIcon = ArrowIcon;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "z-[2] text-dark text-[16px] flex items-center cursor-pointer justify-between relative sm:pt-[17px] sm:pb-[19px] pt-[23px] pb-[20px] pr-[21px] pl-[50px] rounded-[12px] bg-light" }, _attrs))}><div class="absolute left-[18px]">`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="whitespace-nowrap overflow-hidden text-ellipsis">${serverRenderer.exports.ssrInterpolate($props.label)}</div><div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_SvgArrowIcon, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Dropdownbtn/Dropdownbtn.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$7]]);
const __nuxt_component_2 = vue_cjs_prod.defineComponent({
  name: "ClientOnly",
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots }) {
    const mounted = vue_cjs_prod.ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return vue_cjs_prod.createElementBlock(fallbackTag, null, fallbackStr);
    };
  }
});
const _sfc_main$8 = {
  components: { DatePicker: _sfc_main$h },
  setup() {
    let label = vue_cjs_prod.ref("\u041E\u0442 \u043A\u0430\u043A\u043E\u0433\u043E \u2014 \u0414\u043E \u043A\u0430\u043A\u043E\u0433\u043E");
    let isVisible = vue_cjs_prod.ref(false);
    let range2 = vue_cjs_prod.ref({
      start: new Date(),
      end: null
    });
    const setVisible = () => {
      isVisible.value = !isVisible.value;
      if (isVisible.value)
        window.addEventListener("click", closeCSonWindowClick);
    };
    const listenClick = (day) => {
      if (!range2.value.end) {
        range2.value.start = day.date;
      }
      label.value = `\u0441 ${formatDate(range2.value.start)} \u2014 \u0434\u043E ${range2.value.end ? formatDate(range2.value.end) : ""}`;
    };
    const formatDate = (date) => {
      const yyyy = date.getFullYear();
      let mm = date.getMonth() + 1;
      let dd = date.getDate();
      if (dd < 10)
        dd = "0" + dd;
      if (mm < 10)
        mm = "0" + mm;
      return `${dd}.${mm}.${yyyy}`;
    };
    let selectDate = () => {
      isVisible.value = false;
      window.removeEventListener("click", closeCSonWindowClick);
    };
    const closeCSonWindowClick = (event) => {
      if (isVisible.value === true && !event.target.closest(".datepicker")) {
        isVisible.value = false;
        window.removeEventListener("click", closeCSonWindowClick);
      }
    };
    vue_cjs_prod.onUnmounted(() => {
      window.removeEventListener("click", closeCSonWindowClick);
    });
    return {
      label,
      listenClick,
      range: range2,
      isVisible,
      setVisible,
      selectDate
    };
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Dropdownbtn = __nuxt_component_0$2;
  const _component_SvgCalendarIcon = CalendarIcon;
  const _component_client_only = __nuxt_component_2;
  const _component_DatePicker = vue_cjs_prod.resolveComponent("DatePicker");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "datepicker select-none relative z-[1] text-dark text-[16px]" }, _attrs))} data-v-5f2e1331>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Dropdownbtn, {
    onClick: $setup.setVisible,
    label: $setup.label
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_SvgCalendarIcon, { fill: "#111111" }, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_SvgCalendarIcon, { fill: "#111111" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div style="${serverRenderer.exports.ssrRenderStyle($setup.isVisible ? null : { display: "none" })}" class="datepicker-panel absolute" data-v-5f2e1331>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_client_only, null, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_DatePicker, {
          "min-date": new Date(),
          "is-range": "",
          onInput: ($event) => _ctx.console.log("input"),
          onDayclick: $setup.listenClick,
          modelValue: $setup.range,
          "onUpdate:modelValue": ($event) => $setup.range = $event
        }, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_DatePicker, {
            "min-date": new Date(),
            "is-range": "",
            onInput: ($event) => _ctx.console.log("input"),
            onDayclick: $setup.listenClick,
            modelValue: $setup.range,
            "onUpdate:modelValue": ($event) => $setup.range = $event
          }, null, 8, ["min-date", "onInput", "onDayclick", "modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OrderDatePicker/OrderDatePicker.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-5f2e1331"]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    width: "8",
    height: "8",
    viewBox: "0 0 8 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M4 1V7" stroke="#111111" stroke-width="0.825629" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 4.00024H7" stroke="#111111" stroke-width="0.825629" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Svg/PlusIcon.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const PlusIcon = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$6 = {
  props: {
    tooltip: {
      type: Object,
      required: true
    }
  },
  setup() {
    let upHere = vue_cjs_prod.ref(false);
    return { upHere };
  },
  components: { PlusIcon }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PlusIcon = vue_cjs_prod.resolveComponent("PlusIcon");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    class: [$setup.upHere ? "z-[5]" : "z-[4]", "tooltip absolute flex items-center justify-center rounded-full bg-light w-[52px] h-[52px] md:w-[39px] md:h-[39px]"]
  }, _attrs))} data-v-ecfeb7a4><img${serverRenderer.exports.ssrRenderAttr("src", $props.tooltip.svg)} class="relative left-[-4.3%] bottom-[-3%] lg:w-[20px]" alt="" data-v-ecfeb7a4>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_PlusIcon, { class: "absolute top-[14px] right-[12px] lg:w-[5px] lg:right-[8px] lg:top-[7px]" }, null, _parent));
  _push(`<div style="${serverRenderer.exports.ssrRenderStyle($setup.upHere ? null : { display: "none" })}" class="tooltip-popup top-0 md:top-auto md:bottom-[110%] absolute w-[240px] md:w-[150px] md:text-[12px] md:leading-[1.3] md:px-[5px] md:py-[16px] rounded-[13px] bg-dark-200 py-[28px] pl-[24px] pr-[16px] text-[16px] text-light leading-[21px]" data-v-ecfeb7a4><svg width="31" height="20" viewBox="0 0 31 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-0 max-w-full xsm:hidden" data-v-ecfeb7a4><path d="M31 20L-8.74228e-07 1.90735e-06L31 5.52296e-07L31 20Z" fill="#1E1E1E" data-v-ecfeb7a4></path></svg> ${serverRenderer.exports.ssrInterpolate($props.tooltip.info)}</div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OrderBike/Tooltip.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-ecfeb7a4"]]);
const _sfc_main$5 = {
  __name: "OrderBike",
  __ssrInlineRender: true,
  setup(__props) {
    const bikeImageSrc = "/img/offer/order-bike.png";
    const tooltips = {
      first: {
        info: "\u0412\u0441\u0435 \u0431\u0430\u0439\u043A\u0438 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u044B \u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043B\u0435\u043C \u0434\u043B\u044F \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438\u043B\u0438 \u043A\u0430\u043C\u0435\u0440\u044B",
        svg: "/svg/camera.svg"
      },
      second: {
        info: "\u0412\u0441\u0435 \u0431\u0430\u0439\u043A\u0438 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u044B \u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043B\u0435\u043C \u0434\u043B\u044F \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438\u043B\u0438 \u043A\u0430\u043C\u0435\u0440\u044B",
        svg: "/svg/umbrella.svg"
      },
      third: {
        info: "\u0412\u0441\u0435 \u0431\u0430\u0439\u043A\u0438 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u044B \u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043B\u0435\u043C \u0434\u043B\u044F \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438\u043B\u0438 \u043A\u0430\u043C\u0435\u0440\u044B",
        svg: "/svg/wrench.svg"
      },
      fourth: {
        info: "\u0412\u0441\u0435 \u0431\u0430\u0439\u043A\u0438 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u044B \u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043B\u0435\u043C \u0434\u043B\u044F \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438\u043B\u0438 \u043A\u0430\u043C\u0435\u0440\u044B",
        svg: "/svg/helmet.svg"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OrderBikeTooltip = __nuxt_component_0$1;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "orderbike" }, _attrs))}><img class="object-contain max-w-none lg:max-w-full"${serverRenderer.exports.ssrRenderAttr("src", bikeImageSrc)} alt="">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_OrderBikeTooltip, {
        class: "left-[9.4%] top-[29.5%] sm:left-[13.6%] sm:top-[12.1%]",
        tooltip: tooltips.first
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_OrderBikeTooltip, {
        class: "left-[48.3%] top-[33.4%] sm:left-[73.6%] sm:top-[18.6%]",
        tooltip: tooltips.second
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_OrderBikeTooltip, {
        class: "left-[-0.7%] top-[61.5%] sm:top-[49.4%] sm:left-[35%]",
        tooltip: tooltips.third
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_OrderBikeTooltip, {
        class: "left-[41.2%] top-[59.6%] sm:left-[66.6%] sm:top-[60.2%]",
        tooltip: tooltips.fourth
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OrderBike/OrderBike.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  props: {
    question: {
      require: true,
      type: Object
    }
  },
  methods: {
    enter(element, done) {
      element.style.maxHeight = element.scrollHeight + "px";
      element.style.opacity = "1";
      done();
    },
    afterEnter(element) {
      element.style.transition = null;
    },
    leave(element) {
      element.style.maxHeight = "0px";
      element.style.opacity = "0";
    }
  },
  setup() {
    const isAnswerVisible = vue_cjs_prod.ref(false);
    return { isAnswerVisible };
  },
  components: { ArrowIcon }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ArrowIcon = vue_cjs_prod.resolveComponent("ArrowIcon");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "faq-question select-none bg-light relative rounded-[12px] pl-[37px] xsm:pl-[19px] xsm:pr-[24px] md:pl-[35px] md:pr-[22px] pr-[30px] cursor-pointer" }, _attrs))} data-v-df5ac0e0><div class="faq-question-title flex items-center pb-[22px] pt-[19px] xsm:pt-[23px] xsm:items-baseline justify-between" data-v-df5ac0e0><h4 class="font-Helvmed text-[24px] xsm:max-w-[70%] xsm:text-[20px] xsm:leading-[22px] tracking-[-0.7px] text-dark-200" data-v-df5ac0e0>${serverRenderer.exports.ssrInterpolate($props.question.title)}</h4>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_ArrowIcon, {
    class: [$setup.isAnswerVisible ? "rotate-180" : "", "w-[26px] transition-transform h-[12px]"]
  }, null, _parent));
  _push(`</div><div style="${serverRenderer.exports.ssrRenderStyle($setup.isAnswerVisible ? null : { display: "none" })}" class="faq-question-container bg-light left-0 rounded-b-[12px] max-h-0 top-[-10px] overflow-hidden w-full" data-v-df5ac0e0><div class="faq-question-answer pr-[70px] xsm:pr-[10px] sm:pr-[40px] md:pr-[60px] pb-[32px]" data-v-df5ac0e0><p class="text-dark text-[16px] leading-[1.25] xsm:text-[14px] xsm:leading-[18px]" data-v-df5ac0e0>${serverRenderer.exports.ssrInterpolate($props.question.text)}</p></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FaqQuestion/FaqQuestion.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-df5ac0e0"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    width: "23",
    height: "17",
    viewBox: "0 0 23 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M16.3686 16.8277C14.655 16.7984 12.9528 16.5431 11.3061 16.0683C9.18441 15.4239 6.95343 15.2201 4.75012 15.4693C3.66976 15.6008 2.59885 15.8009 1.54387 16.0683C1.41934 16.0999 1.28924 16.1027 1.16349 16.0764C1.03774 16.05 0.919654 15.9953 0.818249 15.9165C0.723855 15.8337 0.64912 15.7309 0.599491 15.6156C0.549863 15.5003 0.526592 15.3753 0.531374 15.2499V1.74989C0.525759 1.55715 0.58633 1.3683 0.703005 1.21478C0.819679 1.06126 0.985416 0.952339 1.17262 0.906143C2.40334 0.597866 3.65569 0.383499 4.91887 0.264893C7.1908 0.0503329 9.48279 0.276667 11.6689 0.931455C13.6934 1.53959 15.8168 1.74877 17.9211 1.54739C19.1026 1.42144 20.2731 1.20709 21.4226 0.906143C21.5472 0.874542 21.6773 0.871797 21.803 0.898117C21.9288 0.924437 22.0468 0.979128 22.1482 1.05802C22.2523 1.14007 22.3355 1.24547 22.3912 1.36567C22.4469 1.48587 22.4735 1.61749 22.4689 1.74989V15.2499C22.4745 15.4426 22.4139 15.6315 22.2972 15.785C22.1806 15.9385 22.0148 16.0474 21.8276 16.0936C20.7013 16.3814 19.5568 16.5928 18.402 16.7265C17.7267 16.7988 17.0477 16.8326 16.3686 16.8277ZM6.63169 13.6721C8.34525 13.7013 10.0475 13.9567 11.6942 14.4315C13.8025 15.0701 16.0185 15.2739 18.2079 15.0305C19.0596 14.9305 19.9048 14.7812 20.7392 14.5833V2.81302C19.8619 3.00139 18.9745 3.13943 18.0814 3.22646C15.7977 3.45424 13.4915 3.23938 11.2892 2.59364C9.27889 1.98665 7.17008 1.77462 5.07919 1.96927C4.11692 2.05497 3.16138 2.20436 2.21887 2.41646V14.229C3.00488 14.0592 3.79904 13.9296 4.59825 13.8408C5.27229 13.7459 5.95121 13.6895 6.63169 13.6721Z" fill="white"></path><path d="M1.68706 5.96893H1.30737C1.09549 5.95192 0.897838 5.85558 0.753924 5.69915C0.610009 5.54272 0.530439 5.33773 0.53112 5.12518V1.75018C0.525504 1.55743 0.586076 1.36858 0.70275 1.21506C0.819424 1.06155 0.985162 0.952622 1.17237 0.906426C2.40309 0.598149 3.65544 0.383782 4.91862 0.265176C5.12113 0.245223 5.32404 0.299133 5.48994 0.416972C5.65585 0.534811 5.77357 0.708638 5.82143 0.906426C5.88022 1.18376 5.90851 1.46669 5.90581 1.75018C5.90581 2.86906 5.46133 3.94211 4.67016 4.73328C3.87899 5.52445 2.80594 5.96893 1.68706 5.96893ZM2.21862 2.41674V4.22236C2.73487 4.11164 3.20358 3.84225 3.55913 3.45191C3.91467 3.06156 4.13925 2.56981 4.20143 2.04549C3.58549 2.1383 2.92737 2.25643 2.21862 2.41674Z" fill="white"></path><path d="M21.3549 5.96879C20.3809 5.97094 19.4362 5.636 18.6811 5.02082C17.9259 4.40564 17.4069 3.54811 17.2121 2.59379C17.1889 2.46867 17.1943 2.33992 17.228 2.21718C17.2616 2.09444 17.3225 1.9809 17.4062 1.88504C17.4758 1.79088 17.5643 1.71224 17.666 1.65413C17.7677 1.59603 17.8803 1.55973 17.9968 1.54754C19.1528 1.41788 20.2978 1.20355 21.4224 0.906292C21.547 0.874691 21.6771 0.871946 21.8028 0.898266C21.9286 0.924587 22.0467 0.979277 22.1481 1.05817C22.2521 1.14022 22.3353 1.24562 22.391 1.36582C22.4467 1.48602 22.4733 1.61764 22.4687 1.75004V5.12504C22.4716 5.32605 22.4027 5.5215 22.2743 5.67619C22.1459 5.83087 21.9665 5.93464 21.7684 5.96879C21.6311 5.98574 21.4922 5.98574 21.3549 5.96879ZM19.2118 3.10004C19.5679 3.66343 20.1318 4.06363 20.7812 4.21379V2.81317C20.2412 2.92285 19.7181 3.02411 19.2118 3.10004Z" fill="white"></path><path d="M1.375 16.0938C1.15122 16.0938 0.936612 16.0049 0.778379 15.8466C0.620145 15.6884 0.53125 15.4738 0.53125 15.25V11.875C0.53125 11.6512 0.620145 11.4366 0.778379 11.2784C0.936612 11.1201 1.15122 11.0312 1.375 11.0312C2.35975 11.0325 3.31302 11.3783 4.06965 12.0085C4.82628 12.6388 5.33859 13.5139 5.51781 14.4822C5.53919 14.5964 5.53674 14.7139 5.5106 14.8271C5.48447 14.9404 5.43522 15.047 5.36594 15.1403C5.29644 15.2319 5.20895 15.3084 5.10884 15.365C5.00872 15.4216 4.89809 15.4571 4.78375 15.4694C3.70339 15.6009 2.63248 15.801 1.5775 16.0684C1.51127 16.085 1.44328 16.0935 1.375 16.0938ZM2.21875 12.8622V14.1869C2.67438 14.0941 3.11313 14.0097 3.54344 13.9422C3.24045 13.4395 2.77217 13.0577 2.21875 12.8622Z" fill="white"></path><path d="M18.3091 16.7097C18.1141 16.7145 17.9234 16.6515 17.7696 16.5315C17.6157 16.4115 17.5082 16.2419 17.4654 16.0516C17.4187 15.7871 17.3989 15.5185 17.4063 15.25C17.4063 14.1311 17.8508 13.0581 18.6419 12.2669C19.4331 11.4757 20.5062 11.0312 21.625 11.0313C21.8488 11.0312 22.0634 11.1201 22.2217 11.2784C22.3799 11.4366 22.4688 11.6512 22.4688 11.875V15.25C22.4744 15.4427 22.4138 15.6316 22.2972 15.7851C22.1805 15.9386 22.0148 16.0476 21.8275 16.0938C20.7012 16.3815 19.5567 16.5929 18.4019 16.7266L18.3091 16.7097ZM20.7813 12.8622C20.3389 13.0135 19.947 13.2843 19.6491 13.6448C19.3513 14.0052 19.159 14.4411 19.0938 14.9041C19.6254 14.8197 20.1822 14.7184 20.7813 14.5834V12.8622Z" fill="white"></path><path d="M12.7656 11.875H9.8125C9.58872 11.875 9.37411 11.7861 9.21588 11.6279C9.05765 11.4696 8.96875 11.255 8.96875 11.0312C8.96875 10.8075 9.05765 10.5929 9.21588 10.4346C9.37411 10.2764 9.58872 10.1875 9.8125 10.1875H12.7656C12.8775 10.1875 12.9848 10.1431 13.0639 10.0639C13.1431 9.98482 13.1875 9.87751 13.1875 9.76562C13.1875 9.65374 13.1431 9.54643 13.0639 9.46731C12.9848 9.3882 12.8775 9.34375 12.7656 9.34375H10.2344C9.67493 9.34375 9.13841 9.12151 8.74282 8.72593C8.34724 8.33034 8.125 7.79382 8.125 7.23438C8.125 6.67493 8.34724 6.13841 8.74282 5.74282C9.13841 5.34724 9.67493 5.125 10.2344 5.125H13.1875C13.4113 5.125 13.6259 5.2139 13.7841 5.37213C13.9424 5.53036 14.0312 5.74497 14.0312 5.96875C14.0312 6.19253 13.9424 6.40714 13.7841 6.56537C13.6259 6.72361 13.4113 6.8125 13.1875 6.8125H10.2344C10.1225 6.8125 10.0152 6.85695 9.93606 6.93606C9.85695 7.01518 9.8125 7.12249 9.8125 7.23438C9.8125 7.34626 9.85695 7.45357 9.93606 7.53269C10.0152 7.6118 10.1225 7.65625 10.2344 7.65625H12.7656C13.3251 7.65625 13.8616 7.87849 14.2572 8.27407C14.6528 8.66966 14.875 9.20618 14.875 9.76562C14.875 10.3251 14.6528 10.8616 14.2572 11.2572C13.8616 11.6528 13.3251 11.875 12.7656 11.875Z" fill="white"></path><path d="M11.5 6.8125C11.2762 6.8125 11.0616 6.7236 10.9034 6.56537C10.7451 6.40714 10.6562 6.19253 10.6562 5.96875V5.125C10.6562 4.90122 10.7451 4.68661 10.9034 4.52838C11.0616 4.37015 11.2762 4.28125 11.5 4.28125C11.7238 4.28125 11.9384 4.37015 12.0966 4.52838C12.2549 4.68661 12.3438 4.90122 12.3438 5.125V5.96875C12.3438 6.19253 12.2549 6.40714 12.0966 6.56537C11.9384 6.7236 11.7238 6.8125 11.5 6.8125Z" fill="white"></path><path d="M11.5 12.7188C11.2762 12.7188 11.0616 12.6299 10.9034 12.4716C10.7451 12.3134 10.6562 12.0988 10.6562 11.875V11.0312C10.6562 10.8075 10.7451 10.5929 10.9034 10.4346C11.0616 10.2764 11.2762 10.1875 11.5 10.1875C11.7238 10.1875 11.9384 10.2764 12.0966 10.4346C12.2549 10.5929 12.3438 10.8075 12.3438 11.0312V11.875C12.3438 12.0988 12.2549 12.3134 12.0966 12.4716C11.9384 12.6299 11.7238 12.7188 11.5 12.7188Z" fill="white"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Svg/MoneyIcon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const inBrowser = false;
const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
const isNumber = (val) => typeof val === "number" && isFinite(val);
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
const assign = Object.assign;
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {});
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isBoolean = (val) => typeof val === "boolean";
const isObject = (val) => val !== null && typeof val === "object";
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const VERSION = "9.2.2";
function initFeatureFlags() {
  if (typeof __VUE_I18N_FULL_INSTALL__ !== "boolean") {
    getGlobalThis().__VUE_I18N_FULL_INSTALL__ = true;
  }
  if (typeof __VUE_I18N_LEGACY_API__ !== "boolean") {
    getGlobalThis().__VUE_I18N_LEGACY_API__ = true;
  }
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
CoreWarnCodes.__EXTEND_POINT__;
let code = CompileErrorCodes.__EXTEND_POINT__;
const inc = () => ++code;
const I18nErrorCodes = {
  UNEXPECTED_RETURN_TYPE: code,
  INVALID_ARGUMENT: inc(),
  MUST_BE_CALL_SETUP_TOP: inc(),
  NOT_INSLALLED: inc(),
  NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
  REQUIRED_VALUE: inc(),
  INVALID_VALUE: inc(),
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
  NOT_INSLALLED_WITH_PROVIDE: inc(),
  UNEXPECTED_ERROR: inc(),
  NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
  BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: inc(),
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: inc(),
  __EXTEND_POINT__: inc()
};
function createI18nError(code2, ...args) {
  return createCompileError(code2, null, void 0);
}
const TransrateVNodeSymbol = /* @__PURE__ */ makeSymbol("__transrateVNode");
const DatetimePartsSymbol = /* @__PURE__ */ makeSymbol("__datetimeParts");
const NumberPartsSymbol = /* @__PURE__ */ makeSymbol("__numberParts");
const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
const InejctWithOption = /* @__PURE__ */ makeSymbol("__injectWithOption");
function handleFlatJson(obj) {
  if (!isObject(obj)) {
    return obj;
  }
  for (const key in obj) {
    if (!hasOwn(obj, key)) {
      continue;
    }
    if (!key.includes(".")) {
      if (isObject(obj[key])) {
        handleFlatJson(obj[key]);
      }
    } else {
      const subKeys = key.split(".");
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      for (let i = 0; i < lastIndex; i++) {
        if (!(subKeys[i] in currentObj)) {
          currentObj[subKeys[i]] = {};
        }
        currentObj = currentObj[subKeys[i]];
      }
      currentObj[subKeys[lastIndex]] = obj[key];
      delete obj[key];
      if (isObject(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
function getLocaleMessages(locale, options) {
  const { messages, __i18n, messageResolver, flatJson } = options;
  const ret = isPlainObject(messages) ? messages : isArray(__i18n) ? {} : { [locale]: {} };
  if (isArray(__i18n)) {
    __i18n.forEach((custom) => {
      if ("locale" in custom && "resource" in custom) {
        const { locale: locale2, resource } = custom;
        if (locale2) {
          ret[locale2] = ret[locale2] || {};
          deepCopy(resource, ret[locale2]);
        } else {
          deepCopy(resource, ret);
        }
      } else {
        isString(custom) && deepCopy(JSON.parse(custom), ret);
      }
    });
  }
  if (messageResolver == null && flatJson) {
    for (const key in ret) {
      if (hasOwn(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
function deepCopy(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
  for (const key in src) {
    if (hasOwn(src, key)) {
      if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
        des[key] = src[key];
      } else {
        deepCopy(src[key], des[key]);
      }
    }
  }
}
function getComponentOptions(instance) {
  return instance.type;
}
function adjustI18nResources(global2, options, componentOptions) {
  let messages = isObject(options.messages) ? options.messages : {};
  if ("__i18nGlobal" in componentOptions) {
    messages = getLocaleMessages(globalThis.locale.value, {
      messages,
      __i18n: componentOptions.__i18nGlobal
    });
  }
  const locales = Object.keys(messages);
  if (locales.length) {
    locales.forEach((locale) => {
      global2.mergeLocaleMessage(locale, messages[locale]);
    });
  }
  {
    if (isObject(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    if (isObject(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
  }
}
function createTextNode(key) {
  return vue_cjs_prod.createVNode(vue_cjs_prod.Text, null, key, 0);
}
const DEVTOOLS_META = "__INTLIFY_META__";
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale, key, type) => {
    return missing(locale, key, vue_cjs_prod.getCurrentInstance() || void 0, type);
  };
}
const getMetaInfo = () => {
  const instance = vue_cjs_prod.getCurrentInstance();
  let meta2 = null;
  return instance && (meta2 = getComponentOptions(instance)[DEVTOOLS_META]) ? { [DEVTOOLS_META]: meta2 } : null;
};
function createComposer(options = {}, VueI18nLegacy) {
  const { __root } = options;
  const _isGlobal = __root === void 0;
  let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = vue_cjs_prod.ref(
    __root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE
  );
  const _fallbackLocale = vue_cjs_prod.ref(
    __root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
  );
  const _messages = vue_cjs_prod.ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = vue_cjs_prod.ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = vue_cjs_prod.ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = isFunction(options.missing) ? options.missing : null;
  let _runtimeMissing = isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  const getCoreContext = () => {
    _isGlobal && setFallbackContext(null);
    const ctxOptions = {
      version: VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      __meta: { framework: "vue" }
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = isPlainObject(_context) ? _context.__datetimeFormatters : void 0;
      ctxOptions.__numberFormatters = isPlainObject(_context) ? _context.__numberFormatters : void 0;
    }
    const ctx = createCoreContext(ctxOptions);
    _isGlobal && setFallbackContext(ctx);
    return ctx;
  };
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = vue_cjs_prod.computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = vue_cjs_prod.computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages = vue_cjs_prod.computed(() => _messages.value);
  const datetimeFormats = /* @__PURE__ */ vue_cjs_prod.computed(() => _datetimeFormats.value);
  const numberFormats = /* @__PURE__ */ vue_cjs_prod.computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return isFunction(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
    trackReactivityValues();
    let ret;
    if (__INTLIFY_PROD_DEVTOOLS__) {
      try {
        setAdditionalMeta(getMetaInfo());
        if (!_isGlobal) {
          _context.fallbackContext = __root ? getFallbackContext() : void 0;
        }
        ret = fn(_context);
      } finally {
        setAdditionalMeta(null);
        if (!_isGlobal) {
          _context.fallbackContext = void 0;
        }
      }
    } else {
      ret = fn(_context);
    }
    if (isNumber(ret) && ret === NOT_REOSLVED) {
      const [key, arg2] = argumentParser();
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  };
  function t(...args) {
    return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root) => Reflect.apply(root.t, root, [...args]), (key) => key, (val) => isString(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !isObject(arg3)) {
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
    }
    return t(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
  }
  function d(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => Reflect.apply(root.d, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function n(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => Reflect.apply(root.n, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function normalize(values) {
    return values.map((val) => isString(val) || isNumber(val) || isBoolean(val) ? createTextNode(String(val)) : val);
  }
  const interpolate = (val) => val;
  const processor = {
    normalize,
    interpolate,
    type: "vnode"
  };
  function transrateVNode(...args) {
    return wrapWithDeps(
      (context) => {
        let ret;
        const _context2 = context;
        try {
          _context2.processor = processor;
          ret = Reflect.apply(translate, null, [_context2, ...args]);
        } finally {
          _context2.processor = null;
        }
        return ret;
      },
      () => parseTranslateArgs(...args),
      "translate",
      (root) => root[TransrateVNodeSymbol](...args),
      (key) => [createTextNode(key)],
      (val) => isArray(val)
    );
  }
  function numberParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(number, null, [context, ...args]),
      () => parseNumberArgs(...args),
      "number format",
      (root) => root[NumberPartsSymbol](...args),
      () => [],
      (val) => isString(val) || isArray(val)
    );
  }
  function datetimeParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(datetime, null, [context, ...args]),
      () => parseDateTimeArgs(...args),
      "datetime format",
      (root) => root[DatetimePartsSymbol](...args),
      () => [],
      (val) => isString(val) || isArray(val)
    );
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te2(key, locale2) {
    const targetLocale = isString(locale2) ? locale2 : _locale.value;
    const message = getLocaleMessage(targetLocale);
    return _context.messageResolver(message, key) !== null;
  }
  function resolveMessages(key) {
    let messages2 = null;
    const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i = 0; i < locales.length; i++) {
      const targetLocaleMessages = _messages.value[locales[i]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key);
      if (messageValue != null) {
        messages2 = messageValue;
        break;
      }
    }
    return messages2;
  }
  function tm(key) {
    const messages2 = resolveMessages(key);
    return messages2 != null ? messages2 : __root ? __root.tm(key) || {} : {};
  }
  function getLocaleMessage(locale2) {
    return _messages.value[locale2] || {};
  }
  function setLocaleMessage2(locale2, message) {
    _messages.value[locale2] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage(locale2, message) {
    _messages.value[locale2] = _messages.value[locale2] || {};
    deepCopy(message, _messages.value[locale2]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale2) {
    return _datetimeFormats.value[locale2] || {};
  }
  function setDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = format2;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function mergeDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = assign(_datetimeFormats.value[locale2] || {}, format2);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function getNumberFormat(locale2) {
    return _numberFormats.value[locale2] || {};
  }
  function setNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = format2;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  function mergeNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = assign(_numberFormats.value[locale2] || {}, format2);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  composerID++;
  if (__root && inBrowser) {
    vue_cjs_prod.watch(__root.locale, (val) => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
    vue_cjs_prod.watch(__root.fallbackLocale, (val) => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t,
    getLocaleMessage,
    setLocaleMessage: setLocaleMessage2,
    mergeLocaleMessage,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te2;
    composer.tm = tm;
    composer.d = d;
    composer.n = n;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOption] = options.__injectWithOption;
    composer[TransrateVNodeSymbol] = transrateVNode;
    composer[DatetimePartsSymbol] = datetimeParts;
    composer[NumberPartsSymbol] = numberParts;
  }
  return composer;
}
function convertComposerOptions(options) {
  const locale = isString(options.locale) ? options.locale : DEFAULT_LOCALE;
  const fallbackLocale = isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
  const missing = isFunction(options.missing) ? options.missing : void 0;
  const missingWarn = isBoolean(options.silentTranslationWarn) || isRegExp(options.silentTranslationWarn) ? !options.silentTranslationWarn : true;
  const fallbackWarn = isBoolean(options.silentFallbackWarn) || isRegExp(options.silentFallbackWarn) ? !options.silentFallbackWarn : true;
  const fallbackRoot = isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  const fallbackFormat = !!options.formatFallbackMessages;
  const modifiers = isPlainObject(options.modifiers) ? options.modifiers : {};
  const pluralizationRules = options.pluralizationRules;
  const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : void 0;
  const warnHtmlMessage = isString(options.warnHtmlInMessage) ? options.warnHtmlInMessage !== "off" : true;
  const escapeParameter = !!options.escapeParameterHtml;
  const inheritLocale = isBoolean(options.sync) ? options.sync : true;
  let messages = options.messages;
  if (isPlainObject(options.sharedMessages)) {
    const sharedMessages = options.sharedMessages;
    const locales = Object.keys(sharedMessages);
    messages = locales.reduce((messages2, locale2) => {
      const message = messages2[locale2] || (messages2[locale2] = {});
      assign(message, sharedMessages[locale2]);
      return messages2;
    }, messages || {});
  }
  const { __i18n, __root, __injectWithOption } = options;
  const datetimeFormats = options.datetimeFormats;
  const numberFormats = options.numberFormats;
  const flatJson = options.flatJson;
  return {
    locale,
    fallbackLocale,
    messages,
    flatJson,
    datetimeFormats,
    numberFormats,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackRoot,
    fallbackFormat,
    modifiers,
    pluralRules: pluralizationRules,
    postTranslation,
    warnHtmlMessage,
    escapeParameter,
    messageResolver: options.messageResolver,
    inheritLocale,
    __i18n,
    __root,
    __injectWithOption
  };
}
function createVueI18n(options = {}, VueI18nLegacy) {
  {
    const composer = createComposer(convertComposerOptions(options));
    const vueI18n = {
      id: composer.id,
      get locale() {
        return composer.locale.value;
      },
      set locale(val) {
        composer.locale.value = val;
      },
      get fallbackLocale() {
        return composer.fallbackLocale.value;
      },
      set fallbackLocale(val) {
        composer.fallbackLocale.value = val;
      },
      get messages() {
        return composer.messages.value;
      },
      get datetimeFormats() {
        return composer.datetimeFormats.value;
      },
      get numberFormats() {
        return composer.numberFormats.value;
      },
      get availableLocales() {
        return composer.availableLocales;
      },
      get formatter() {
        return {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(val) {
      },
      get missing() {
        return composer.getMissingHandler();
      },
      set missing(handler) {
        composer.setMissingHandler(handler);
      },
      get silentTranslationWarn() {
        return isBoolean(composer.missingWarn) ? !composer.missingWarn : composer.missingWarn;
      },
      set silentTranslationWarn(val) {
        composer.missingWarn = isBoolean(val) ? !val : val;
      },
      get silentFallbackWarn() {
        return isBoolean(composer.fallbackWarn) ? !composer.fallbackWarn : composer.fallbackWarn;
      },
      set silentFallbackWarn(val) {
        composer.fallbackWarn = isBoolean(val) ? !val : val;
      },
      get modifiers() {
        return composer.modifiers;
      },
      get formatFallbackMessages() {
        return composer.fallbackFormat;
      },
      set formatFallbackMessages(val) {
        composer.fallbackFormat = val;
      },
      get postTranslation() {
        return composer.getPostTranslationHandler();
      },
      set postTranslation(handler) {
        composer.setPostTranslationHandler(handler);
      },
      get sync() {
        return composer.inheritLocale;
      },
      set sync(val) {
        composer.inheritLocale = val;
      },
      get warnHtmlInMessage() {
        return composer.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(val) {
        composer.warnHtmlMessage = val !== "off";
      },
      get escapeParameterHtml() {
        return composer.escapeParameter;
      },
      set escapeParameterHtml(val) {
        composer.escapeParameter = val;
      },
      get preserveDirectiveContent() {
        return true;
      },
      set preserveDirectiveContent(val) {
      },
      get pluralizationRules() {
        return composer.pluralRules || {};
      },
      __composer: composer,
      t(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = {};
        let list = null;
        let named = null;
        if (!isString(arg1)) {
          throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
        }
        const key = arg1;
        if (isString(arg2)) {
          options2.locale = arg2;
        } else if (isArray(arg2)) {
          list = arg2;
        } else if (isPlainObject(arg2)) {
          named = arg2;
        }
        if (isArray(arg3)) {
          list = arg3;
        } else if (isPlainObject(arg3)) {
          named = arg3;
        }
        return Reflect.apply(composer.t, composer, [
          key,
          list || named || {},
          options2
        ]);
      },
      rt(...args) {
        return Reflect.apply(composer.rt, composer, [...args]);
      },
      tc(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = { plural: 1 };
        let list = null;
        let named = null;
        if (!isString(arg1)) {
          throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
        }
        const key = arg1;
        if (isString(arg2)) {
          options2.locale = arg2;
        } else if (isNumber(arg2)) {
          options2.plural = arg2;
        } else if (isArray(arg2)) {
          list = arg2;
        } else if (isPlainObject(arg2)) {
          named = arg2;
        }
        if (isString(arg3)) {
          options2.locale = arg3;
        } else if (isArray(arg3)) {
          list = arg3;
        } else if (isPlainObject(arg3)) {
          named = arg3;
        }
        return Reflect.apply(composer.t, composer, [
          key,
          list || named || {},
          options2
        ]);
      },
      te(key, locale) {
        return composer.te(key, locale);
      },
      tm(key) {
        return composer.tm(key);
      },
      getLocaleMessage(locale) {
        return composer.getLocaleMessage(locale);
      },
      setLocaleMessage(locale, message) {
        composer.setLocaleMessage(locale, message);
      },
      mergeLocaleMessage(locale, message) {
        composer.mergeLocaleMessage(locale, message);
      },
      d(...args) {
        return Reflect.apply(composer.d, composer, [...args]);
      },
      getDateTimeFormat(locale) {
        return composer.getDateTimeFormat(locale);
      },
      setDateTimeFormat(locale, format2) {
        composer.setDateTimeFormat(locale, format2);
      },
      mergeDateTimeFormat(locale, format2) {
        composer.mergeDateTimeFormat(locale, format2);
      },
      n(...args) {
        return Reflect.apply(composer.n, composer, [...args]);
      },
      getNumberFormat(locale) {
        return composer.getNumberFormat(locale);
      },
      setNumberFormat(locale, format2) {
        composer.setNumberFormat(locale, format2);
      },
      mergeNumberFormat(locale, format2) {
        composer.mergeNumberFormat(locale, format2);
      },
      getChoiceIndex(choice, choicesLength) {
        return -1;
      },
      __onComponentInstanceCreated(target) {
        const { componentInstanceCreatedListener } = options;
        if (componentInstanceCreatedListener) {
          componentInstanceCreatedListener(target, vueI18n);
        }
      }
    };
    return vueI18n;
  }
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    const ret = slots.default ? slots.default() : [];
    return ret.reduce((slot, current) => {
      return slot = [
        ...slot,
        ...isArray(current.children) ? current.children : [current]
      ];
    }, []);
  } else {
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, {});
  }
}
function getFragmentableTag(tag) {
  return vue_cjs_prod.Fragment;
}
const Translation = {
  name: "i18n-t",
  props: assign({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      validator: (val) => isNumber(val) || !isNaN(val)
    }
  }, baseFormatProps),
  setup(props, context) {
    const { slots, attrs } = context;
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return () => {
      const keys = Object.keys(slots).filter((key) => key !== "_");
      const options = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== void 0) {
        options.plural = isString(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context, keys);
      const children = i18n[TransrateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = assign({}, attrs);
      const tag = isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag();
      return vue_cjs_prod.h(tag, assignedAttrs, children);
    };
  }
};
function isVNode(target) {
  return isArray(target) && !isString(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = {};
    if (props.locale) {
      options.locale = props.locale;
    }
    if (isString(props.format)) {
      options.key = props.format;
    } else if (isObject(props.format)) {
      if (isString(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? assign({}, options2, { [prop]: props.format[prop] }) : options2;
      }, {});
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (isArray(parts)) {
      children = parts.map((part, index) => {
        const slot = slots[part.type];
        const node = slot ? slot({ [part.type]: part.value, index, parts }) : [part.value];
        if (isVNode(node)) {
          node[0].key = `${part.type}-${index}`;
        }
        return node;
      });
    } else if (isString(parts)) {
      children = [parts];
    }
    const assignedAttrs = assign({}, attrs);
    const tag = isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag();
    return vue_cjs_prod.h(tag, assignedAttrs, children);
  };
}
const NumberFormat = {
  name: "i18n-n",
  props: assign({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  setup(props, context) {
    const i18n = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
    return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => i18n[NumberPartsSymbol](...args));
  }
};
const DatetimeFormat = {
  name: "i18n-d",
  props: assign({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  setup(props, context) {
    const i18n = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
    return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => i18n[DatetimePartsSymbol](...args));
  }
};
function getComposer$2(i18n, instance) {
  const i18nInternal = i18n;
  if (i18n.mode === "composition") {
    return i18nInternal.__getInstance(instance) || i18n.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
  }
}
function vTDirective(i18n) {
  const _process = (binding) => {
    const { instance, modifiers, value } = binding;
    if (!instance || !instance.$) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const composer = getComposer$2(i18n, instance.$);
    const parsedValue = parseValue(value);
    return [
      Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]),
      composer
    ];
  };
  const register = (el, binding) => {
    const [textContent, composer] = _process(binding);
    el.__composer = composer;
    el.textContent = textContent;
  };
  const unregister = (el) => {
    if (el.__composer) {
      el.__composer = void 0;
      delete el.__composer;
    }
  };
  const update = (el, { value }) => {
    if (el.__composer) {
      const composer = el.__composer;
      const parsedValue = parseValue(value);
      el.textContent = Reflect.apply(composer.t, composer, [
        ...makeParams(parsedValue)
      ]);
    }
  };
  const getSSRProps = (binding) => {
    const [textContent] = _process(binding);
    return { textContent };
  };
  return {
    created: register,
    unmounted: unregister,
    beforeUpdate: update,
    getSSRProps
  };
}
function parseValue(value) {
  if (isString(value)) {
    return { path: value };
  } else if (isPlainObject(value)) {
    if (!("path" in value)) {
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
    }
    return value;
  } else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value) {
  const { path, locale, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (isString(locale)) {
    options.locale = locale;
  }
  if (isNumber(choice)) {
    options.plural = choice;
  }
  if (isNumber(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app, i18n, ...options) {
  const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
  const useI18nComponentName = !!pluginOptions.useI18nComponentName;
  const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (globalInstall) {
    app.component(!useI18nComponentName ? Translation.name : "i18n", Translation);
    app.component(NumberFormat.name, NumberFormat);
    app.component(DatetimeFormat.name, DatetimeFormat);
  }
  {
    app.directive("t", vTDirective(i18n));
  }
}
function defineMixin(vuei18n, composer, i18n) {
  return {
    beforeCreate() {
      const instance = vue_cjs_prod.getCurrentInstance();
      if (!instance) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      const options = this.$options;
      if (options.i18n) {
        const optionsI18n = options.i18n;
        if (options.__i18n) {
          optionsI18n.__i18n = options.__i18n;
        }
        optionsI18n.__root = composer;
        if (this === this.$root) {
          this.$i18n = mergeToRoot(vuei18n, optionsI18n);
        } else {
          optionsI18n.__injectWithOption = true;
          this.$i18n = createVueI18n(optionsI18n);
        }
      } else if (options.__i18n) {
        if (this === this.$root) {
          this.$i18n = mergeToRoot(vuei18n, options);
        } else {
          this.$i18n = createVueI18n({
            __i18n: options.__i18n,
            __injectWithOption: true,
            __root: composer
          });
        }
      } else {
        this.$i18n = vuei18n;
      }
      if (options.__i18nGlobal) {
        adjustI18nResources(composer, options, options);
      }
      vuei18n.__onComponentInstanceCreated(this.$i18n);
      i18n.__setInstance(instance, this.$i18n);
      this.$t = (...args) => this.$i18n.t(...args);
      this.$rt = (...args) => this.$i18n.rt(...args);
      this.$tc = (...args) => this.$i18n.tc(...args);
      this.$te = (key, locale) => this.$i18n.te(key, locale);
      this.$d = (...args) => this.$i18n.d(...args);
      this.$n = (...args) => this.$i18n.n(...args);
      this.$tm = (key) => this.$i18n.tm(key);
    },
    mounted() {
    },
    unmounted() {
      const instance = vue_cjs_prod.getCurrentInstance();
      if (!instance) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      delete this.$t;
      delete this.$rt;
      delete this.$tc;
      delete this.$te;
      delete this.$d;
      delete this.$n;
      delete this.$tm;
      i18n.__deleteInstance(instance);
      delete this.$i18n;
    }
  };
}
function mergeToRoot(root, options) {
  root.locale = options.locale || root.locale;
  root.fallbackLocale = options.fallbackLocale || root.fallbackLocale;
  root.missing = options.missing || root.missing;
  root.silentTranslationWarn = options.silentTranslationWarn || root.silentFallbackWarn;
  root.silentFallbackWarn = options.silentFallbackWarn || root.silentFallbackWarn;
  root.formatFallbackMessages = options.formatFallbackMessages || root.formatFallbackMessages;
  root.postTranslation = options.postTranslation || root.postTranslation;
  root.warnHtmlInMessage = options.warnHtmlInMessage || root.warnHtmlInMessage;
  root.escapeParameterHtml = options.escapeParameterHtml || root.escapeParameterHtml;
  root.sync = options.sync || root.sync;
  root.__composer[SetPluralRulesSymbol](options.pluralizationRules || root.pluralizationRules);
  const messages = getLocaleMessages(root.locale, {
    messages: options.messages,
    __i18n: options.__i18n
  });
  Object.keys(messages).forEach((locale) => root.mergeLocaleMessage(locale, messages[locale]));
  if (options.datetimeFormats) {
    Object.keys(options.datetimeFormats).forEach((locale) => root.mergeDateTimeFormat(locale, options.datetimeFormats[locale]));
  }
  if (options.numberFormats) {
    Object.keys(options.numberFormats).forEach((locale) => root.mergeNumberFormat(locale, options.numberFormats[locale]));
  }
  return root;
}
const I18nInjectionKey = /* @__PURE__ */ makeSymbol("global-vue-i18n");
function createI18n(options = {}, VueI18nLegacy) {
  const __legacyMode = __VUE_I18N_LEGACY_API__ && isBoolean(options.legacy) ? options.legacy : __VUE_I18N_LEGACY_API__;
  const __globalInjection = isBoolean(options.globalInjection) ? options.globalInjection : true;
  const __allowComposition = __VUE_I18N_LEGACY_API__ && __legacyMode ? !!options.allowComposition : true;
  const __instances = /* @__PURE__ */ new Map();
  const [globalScope, __global] = createGlobal(options, __legacyMode);
  const symbol = makeSymbol("");
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance) {
    __instances.set(component, instance);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  {
    const i18n = {
      get mode() {
        return __VUE_I18N_LEGACY_API__ && __legacyMode ? "legacy" : "composition";
      },
      get allowComposition() {
        return __allowComposition;
      },
      async install(app, ...options2) {
        app.__VUE_I18N_SYMBOL__ = symbol;
        app.provide(app.__VUE_I18N_SYMBOL__, i18n);
        if (!__legacyMode && __globalInjection) {
          injectGlobalFields(app, i18n.global);
        }
        if (__VUE_I18N_FULL_INSTALL__) {
          apply(app, i18n, ...options2);
        }
        if (__VUE_I18N_LEGACY_API__ && __legacyMode) {
          app.mixin(defineMixin(__global, __global.__composer, i18n));
        }
        const unmountApp = app.unmount;
        app.unmount = () => {
          i18n.dispose();
          unmountApp();
        };
      },
      get global() {
        return __global;
      },
      dispose() {
        globalScope.stop();
      },
      __instances,
      __getInstance,
      __setInstance,
      __deleteInstance
    };
    return i18n;
  }
}
function useI18n(options = {}) {
  const instance = vue_cjs_prod.getCurrentInstance();
  if (instance == null) {
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
  }
  if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(I18nErrorCodes.NOT_INSLALLED);
  }
  const i18n = getI18nInstance(instance);
  const global2 = getGlobalComposer(i18n);
  const componentOptions = getComponentOptions(instance);
  const scope = getScope(options, componentOptions);
  if (__VUE_I18N_LEGACY_API__) {
    if (i18n.mode === "legacy" && !options.__useComponent) {
      if (!i18n.allowComposition) {
        throw createI18nError(I18nErrorCodes.NOT_AVAILABLE_IN_LEGACY_MODE);
      }
      return useI18nForLegacy(instance, scope, global2, options);
    }
  }
  if (scope === "global") {
    adjustI18nResources(global2, options, componentOptions);
    return global2;
  }
  if (scope === "parent") {
    let composer2 = getComposer(i18n, instance, options.__useComponent);
    if (composer2 == null) {
      composer2 = global2;
    }
    return composer2;
  }
  const i18nInternal = i18n;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const composerOptions = assign({}, options);
    if ("__i18n" in componentOptions) {
      composerOptions.__i18n = componentOptions.__i18n;
    }
    if (global2) {
      composerOptions.__root = global2;
    }
    composer = createComposer(composerOptions);
    setupLifeCycle(i18nInternal, instance);
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy) {
  const scope = vue_cjs_prod.effectScope();
  {
    const obj = __VUE_I18N_LEGACY_API__ && legacyMode ? scope.run(() => createVueI18n(options)) : scope.run(() => createComposer(options));
    if (obj == null) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    return [scope, obj];
  }
}
function getI18nInstance(instance) {
  {
    const i18n = vue_cjs_prod.inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
    if (!i18n) {
      throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSLALLED_WITH_PROVIDE);
    }
    return i18n;
  }
}
function getScope(options, componentOptions) {
  return isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n) {
  return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
}
function getComposer(i18n, target, useComponent = false) {
  let composer = null;
  const root = target.root;
  let current = target.parent;
  while (current != null) {
    const i18nInternal = i18n;
    if (i18n.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    } else {
      if (__VUE_I18N_LEGACY_API__) {
        const vueI18n = i18nInternal.__getInstance(current);
        if (vueI18n != null) {
          composer = vueI18n.__composer;
          if (useComponent && composer && !composer[InejctWithOption]) {
            composer = null;
          }
        }
      }
    }
    if (composer != null) {
      break;
    }
    if (root === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function setupLifeCycle(i18n, target, composer) {
  {
    vue_cjs_prod.onUnmounted(() => {
      i18n.__deleteInstance(target);
    }, target);
  }
}
function useI18nForLegacy(instance, scope, root, options = {}) {
  const isLocale = scope === "local";
  const _composer = vue_cjs_prod.shallowRef(null);
  if (isLocale && instance.proxy && !(instance.proxy.$options.i18n || instance.proxy.$options.__i18n)) {
    throw createI18nError(I18nErrorCodes.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  }
  const _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = vue_cjs_prod.ref(
    isLocale && _inheritLocale ? root.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE
  );
  const _fallbackLocale = vue_cjs_prod.ref(
    isLocale && _inheritLocale ? root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
  );
  const _messages = vue_cjs_prod.ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = vue_cjs_prod.ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = vue_cjs_prod.ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  const _missingWarn = isLocale ? root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const _fallbackWarn = isLocale ? root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const _fallbackRoot = isLocale ? root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  const _fallbackFormat = !!options.fallbackFormat;
  const _missing = isFunction(options.missing) ? options.missing : null;
  const _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  const _warnHtmlMessage = isLocale ? root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const _escapeParameter = !!options.escapeParameter;
  const _modifiers = isLocale ? root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
  const _pluralRules = options.pluralRules || isLocale && root.pluralRules;
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = vue_cjs_prod.computed({
    get: () => {
      return _composer.value ? _composer.value.locale.value : _locale.value;
    },
    set: (val) => {
      if (_composer.value) {
        _composer.value.locale.value = val;
      }
      _locale.value = val;
    }
  });
  const fallbackLocale = vue_cjs_prod.computed({
    get: () => {
      return _composer.value ? _composer.value.fallbackLocale.value : _fallbackLocale.value;
    },
    set: (val) => {
      if (_composer.value) {
        _composer.value.fallbackLocale.value = val;
      }
      _fallbackLocale.value = val;
    }
  });
  const messages = vue_cjs_prod.computed(() => {
    if (_composer.value) {
      return _composer.value.messages.value;
    } else {
      return _messages.value;
    }
  });
  const datetimeFormats = vue_cjs_prod.computed(() => _datetimeFormats.value);
  const numberFormats = vue_cjs_prod.computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return _composer.value ? _composer.value.getPostTranslationHandler() : _postTranslation;
  }
  function setPostTranslationHandler(handler) {
    if (_composer.value) {
      _composer.value.setPostTranslationHandler(handler);
    }
  }
  function getMissingHandler() {
    return _composer.value ? _composer.value.getMissingHandler() : _missing;
  }
  function setMissingHandler(handler) {
    if (_composer.value) {
      _composer.value.setMissingHandler(handler);
    }
  }
  function warpWithDeps(fn) {
    trackReactivityValues();
    return fn();
  }
  function t(...args) {
    return _composer.value ? warpWithDeps(() => Reflect.apply(_composer.value.t, null, [...args])) : warpWithDeps(() => "");
  }
  function rt(...args) {
    return _composer.value ? Reflect.apply(_composer.value.rt, null, [...args]) : "";
  }
  function d(...args) {
    return _composer.value ? warpWithDeps(() => Reflect.apply(_composer.value.d, null, [...args])) : warpWithDeps(() => "");
  }
  function n(...args) {
    return _composer.value ? warpWithDeps(() => Reflect.apply(_composer.value.n, null, [...args])) : warpWithDeps(() => "");
  }
  function tm(key) {
    return _composer.value ? _composer.value.tm(key) : {};
  }
  function te2(key, locale2) {
    return _composer.value ? _composer.value.te(key, locale2) : false;
  }
  function getLocaleMessage(locale2) {
    return _composer.value ? _composer.value.getLocaleMessage(locale2) : {};
  }
  function setLocaleMessage2(locale2, message) {
    if (_composer.value) {
      _composer.value.setLocaleMessage(locale2, message);
      _messages.value[locale2] = message;
    }
  }
  function mergeLocaleMessage(locale2, message) {
    if (_composer.value) {
      _composer.value.mergeLocaleMessage(locale2, message);
    }
  }
  function getDateTimeFormat(locale2) {
    return _composer.value ? _composer.value.getDateTimeFormat(locale2) : {};
  }
  function setDateTimeFormat(locale2, format2) {
    if (_composer.value) {
      _composer.value.setDateTimeFormat(locale2, format2);
      _datetimeFormats.value[locale2] = format2;
    }
  }
  function mergeDateTimeFormat(locale2, format2) {
    if (_composer.value) {
      _composer.value.mergeDateTimeFormat(locale2, format2);
    }
  }
  function getNumberFormat(locale2) {
    return _composer.value ? _composer.value.getNumberFormat(locale2) : {};
  }
  function setNumberFormat(locale2, format2) {
    if (_composer.value) {
      _composer.value.setNumberFormat(locale2, format2);
      _numberFormats.value[locale2] = format2;
    }
  }
  function mergeNumberFormat(locale2, format2) {
    if (_composer.value) {
      _composer.value.mergeNumberFormat(locale2, format2);
    }
  }
  const wrapper = {
    get id() {
      return _composer.value ? _composer.value.id : -1;
    },
    locale,
    fallbackLocale,
    messages,
    datetimeFormats,
    numberFormats,
    get inheritLocale() {
      return _composer.value ? _composer.value.inheritLocale : _inheritLocale;
    },
    set inheritLocale(val) {
      if (_composer.value) {
        _composer.value.inheritLocale = val;
      }
    },
    get availableLocales() {
      return _composer.value ? _composer.value.availableLocales : Object.keys(_messages.value);
    },
    get modifiers() {
      return _composer.value ? _composer.value.modifiers : _modifiers;
    },
    get pluralRules() {
      return _composer.value ? _composer.value.pluralRules : _pluralRules;
    },
    get isGlobal() {
      return _composer.value ? _composer.value.isGlobal : false;
    },
    get missingWarn() {
      return _composer.value ? _composer.value.missingWarn : _missingWarn;
    },
    set missingWarn(val) {
      if (_composer.value) {
        _composer.value.missingWarn = val;
      }
    },
    get fallbackWarn() {
      return _composer.value ? _composer.value.fallbackWarn : _fallbackWarn;
    },
    set fallbackWarn(val) {
      if (_composer.value) {
        _composer.value.missingWarn = val;
      }
    },
    get fallbackRoot() {
      return _composer.value ? _composer.value.fallbackRoot : _fallbackRoot;
    },
    set fallbackRoot(val) {
      if (_composer.value) {
        _composer.value.fallbackRoot = val;
      }
    },
    get fallbackFormat() {
      return _composer.value ? _composer.value.fallbackFormat : _fallbackFormat;
    },
    set fallbackFormat(val) {
      if (_composer.value) {
        _composer.value.fallbackFormat = val;
      }
    },
    get warnHtmlMessage() {
      return _composer.value ? _composer.value.warnHtmlMessage : _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      if (_composer.value) {
        _composer.value.warnHtmlMessage = val;
      }
    },
    get escapeParameter() {
      return _composer.value ? _composer.value.escapeParameter : _escapeParameter;
    },
    set escapeParameter(val) {
      if (_composer.value) {
        _composer.value.escapeParameter = val;
      }
    },
    t,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    rt,
    d,
    n,
    tm,
    te: te2,
    getLocaleMessage,
    setLocaleMessage: setLocaleMessage2,
    mergeLocaleMessage,
    getDateTimeFormat,
    setDateTimeFormat,
    mergeDateTimeFormat,
    getNumberFormat,
    setNumberFormat,
    mergeNumberFormat
  };
  return wrapper;
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm"];
function injectGlobalFields(app, composer) {
  const i18n = /* @__PURE__ */ Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const wrap = vue_cjs_prod.isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n, prop, wrap);
  });
  app.config.globalProperties.$i18n = i18n;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
}
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
{
  initFeatureFlags();
}
if (__INTLIFY_PROD_DEVTOOLS__) {
  const target = getGlobalThis();
  target.__INTLIFY__ = true;
  setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const _sfc_main$2 = {
  props: {
    options: {
      type: Object,
      required: true
    },
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    enter(element, done) {
      element.style.maxHeight = element.querySelector(".cs-list").scrollHeight + "px";
      element.style.opacity = "1";
      done();
    },
    afterEnter(element) {
      element.style.transition = null;
    },
    leave(element) {
      element.style.maxHeight = "0px";
      element.style.opacity = "0";
    }
  },
  emits: ["selectOption"],
  setup({ options, isVisible }) {
    let selectedOption = vue_cjs_prod.ref(options.defaultValue);
    let canSee = vue_cjs_prod.ref(isVisible);
    const root = vue_cjs_prod.ref(null);
    let changeVisible = () => {
      canSee.value = !canSee.value;
      if (canSee.value)
        window.addEventListener("click", closeCSonWindowClick);
    };
    let selectOption = (option) => {
      selectedOption.value = option.model;
      canSee.value = false;
      window.removeEventListener("click", closeCSonWindowClick);
    };
    const closeCSonWindowClick = (event) => {
      if (canSee.value === true && !root.value.isEqualNode(event.target.closest(".cs"))) {
        canSee.value = false;
        window.removeEventListener("click", closeCSonWindowClick);
      }
    };
    vue_cjs_prod.onUnmounted(() => {
      window.removeEventListener("click", closeCSonWindowClick);
    });
    return {
      selectedOption,
      selectOption,
      canSee,
      root,
      changeVisible
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Dropdownbtn = __nuxt_component_0$2;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    ref: "root",
    class: [$setup.canSee ? "z-[5]" : "z-[4]", "cs select-none relative text-dark text-[16px]"]
  }, _attrs))} data-v-b0f9414d>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Dropdownbtn, {
    onClick: $setup.changeVisible,
    class: [{ shadow: $setup.canSee }, "cs-current"],
    label: $setup.selectedOption
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          vue_cjs_prod.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`<div class="cs-list-container max-h-0 top-0 opacity-0 absolute rounded-[12px] bg-light w-full" style="${serverRenderer.exports.ssrRenderStyle($setup.canSee ? null : { display: "none" })}" data-v-b0f9414d><ul class="cs-list pt-[80px] pb-[10px]" data-v-b0f9414d><!--[-->`);
  serverRenderer.exports.ssrRenderList($props.options.elements, (element, i) => {
    _push(`<li class="cs-list-item pr-[21px] bg-light hover:bg-dark py-[20px] pl-[50px] cursor-pointer" data-v-b0f9414d>${serverRenderer.exports.ssrInterpolate(element.model)}</li>`);
  });
  _push(`<!--]--></ul></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CustomSelect/CustomSelect.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CustomSelect = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-b0f9414d"]]);
const meta$2 = void 0;
const meta$1 = void 0;
const meta = void 0;
const routes = [
  {
    name: "about",
    path: "/about",
    file: "D:/OSPanel/domains/balidrive/pages/about.vue",
    children: [],
    meta: meta$4,
    alias: [],
    component: () => import('./about.27bad371.mjs').then((m) => m.default || m)
  },
  {
    name: "contacts",
    path: "/contacts",
    file: "D:/OSPanel/domains/balidrive/pages/contacts.vue",
    children: [],
    meta: meta$3,
    alias: [],
    component: () => import('./contacts.827f1989.mjs').then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    file: "D:/OSPanel/domains/balidrive/pages/index.vue",
    children: [],
    meta: meta$2,
    alias: [],
    component: () => import('./index.e1367dbc.mjs').then((m) => m.default || m)
  },
  {
    name: "partner",
    path: "/partner",
    file: "D:/OSPanel/domains/balidrive/pages/partner.vue",
    children: [],
    meta: meta$1,
    alias: [],
    component: () => import('./partner.add8bf88.mjs').then((m) => m.default || m)
  },
  {
    name: "rules",
    path: "/rules",
    file: "D:/OSPanel/domains/balidrive/pages/rules.vue",
    children: [],
    meta,
    alias: [],
    component: () => import('./rules.9d2fccc8.mjs').then((m) => m.default || m)
  }
];
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions
};
const globalMiddleware = [];
const namedMiddleware = {};
const node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB = defineNuxtPlugin(async (nuxtApp) => {
  let __temp, __restore;
  nuxtApp.vueApp.component("NuxtPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtNestedPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtChild", NuxtPage);
  const baseURL2 = useRuntimeConfig().app.baseURL;
  const routerHistory = vueRouter_cjs_prod.exports.createMemoryHistory(baseURL2);
  const initialURL = nuxtApp.ssrContext.url;
  const router = vueRouter_cjs_prod.exports.createRouter({
    ...routerOptions,
    history: routerHistory,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = vue_cjs_prod.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = vue_cjs_prod.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a, _b, _c, _d;
    if (((_b = (_a = to.matched[0]) == null ? void 0 : _a.components) == null ? void 0 : _b.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = vue_cjs_prod.computed(() => _route.value[key]);
  }
  nuxtApp._route = vue_cjs_prod.reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  try {
    if (true) {
      ;
      [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
      ;
    }
    ;
    [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
    ;
  } catch (error2) {
    callWithNuxt(nuxtApp, showError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    var _a;
    to.meta = vue_cjs_prod.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_a = namedMiddleware[entry2]) == null ? void 0 : _a.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      if (!middleware) {
        throw new Error(`Unknown route middleware: '${entry2}'.`);
      }
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError$1({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return callWithNuxt(nuxtApp, showError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (to.matched.length === 0) {
      callWithNuxt(nuxtApp, showError, [createError$1({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    } else {
      const currentURL = to.fullPath || "/";
      if (!isEqual(currentURL, initialURL)) {
        await callWithNuxt(nuxtApp, navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      callWithNuxt(nuxtApp, showError, [error2]);
    }
  });
  return { provide: { router } };
});
const isVue2 = false;
const isVue3 = true;
/*!
  * pinia v2.0.22
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const piniaSymbol = Symbol();
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = vue_cjs_prod.effectScope(true);
  const state = scope.run(() => vue_cjs_prod.ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = vue_cjs_prod.markRaw({
    install(app) {
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin) => _p.push(plugin));
        toBeInstalled = [];
      }
    },
    use(plugin) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin);
      } else {
        _p.push(plugin);
      }
      return this;
    },
    _p,
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
const node_modules__64pinia_nuxt_dist_runtime_plugin_vue3_mjs_A0OWXRrUgq = defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});
const useStrapiToken = () => {
  const nuxtApp = useNuxtApp();
  const config = useRuntimeConfig();
  nuxtApp._cookies = nuxtApp._cookies || {};
  if (nuxtApp._cookies[config.strapi.cookieName]) {
    return nuxtApp._cookies[config.strapi.cookieName];
  }
  const cookie = useCookie(config.strapi.cookieName, config.strapi.cookie);
  nuxtApp._cookies[config.strapi.cookieName] = cookie;
  return cookie;
};
const useStrapiUser = () => useState("strapi_user", "$QryOJSJhK2");
const useStrapiUrl = () => {
  const config = useRuntimeConfig();
  const version = config.strapi.version;
  return version === "v3" ? config.strapi.url : `${config.strapi.url}${config.strapi.prefix}`;
};
const useStrapiVersion = () => {
  const config = useRuntimeConfig();
  return config.strapi.version;
};
const defaultErrors = (err) => ({
  v4: {
    error: {
      status: 500,
      name: "UnknownError",
      message: err.message,
      details: err
    }
  },
  v3: {
    error: "UnknownError",
    message: err.message,
    statusCode: 500
  }
});
const useStrapiClient = () => {
  const nuxt = useNuxtApp();
  const baseURL2 = useStrapiUrl();
  const version = useStrapiVersion();
  const token = useStrapiToken();
  return async (url, fetchOptions = {}) => {
    const headers = {};
    if (token && token.value) {
      headers.Authorization = `Bearer ${token.value}`;
    }
    if (version === "v4" && fetchOptions.params) {
      const params = stringify(fetchOptions.params, { encodeValuesOnly: true });
      if (params) {
        url = `${url}?${params}`;
      }
      delete fetchOptions.params;
    }
    try {
      return await $fetch(url, {
        retry: 0,
        baseURL: baseURL2,
        ...fetchOptions,
        headers: {
          ...headers,
          ...fetchOptions.headers
        }
      });
    } catch (err) {
      const e = err.data || defaultErrors(err)[version];
      nuxt.hooks.callHook("strapi:error", e);
      throw e;
    }
  };
};
const useStrapiAuth = () => {
  const url = useStrapiUrl();
  const token = useStrapiToken();
  const user = useStrapiUser();
  const client = useStrapiClient();
  const config = useRuntimeConfig();
  const setToken = (value) => {
    token.value = value;
  };
  const setUser = (value) => {
    user.value = value;
  };
  const fetchUser = async () => {
    if (token.value && !user.value) {
      try {
        user.value = await client("/users/me", { params: config.strapi.auth });
      } catch (e) {
        setToken(null);
      }
    }
    return user;
  };
  const login = async (data) => {
    setToken(null);
    const { jwt } = await client("/auth/local", { method: "POST", body: data });
    setToken(jwt);
    const user2 = await fetchUser();
    return {
      user: user2,
      jwt
    };
  };
  const logout = () => {
    setToken(null);
    setUser(null);
  };
  const register = async (data) => {
    setToken(null);
    const { jwt } = await client("/auth/local/register", { method: "POST", body: data });
    setToken(jwt);
    const user2 = await fetchUser();
    return {
      user: user2,
      jwt
    };
  };
  const forgotPassword = async (data) => {
    setToken(null);
    await client("/auth/forgot-password", { method: "POST", body: data });
  };
  const resetPassword = async (data) => {
    setToken(null);
    const { jwt } = await client("/auth/reset-password", { method: "POST", body: data });
    setToken(jwt);
    const user2 = await fetchUser();
    return {
      user: user2,
      jwt
    };
  };
  const sendEmailConfirmation = async (data) => {
    await client("/auth/send-email-confirmation", { method: "POST", body: data });
  };
  const getProviderAuthenticationUrl = (provider) => {
    return `${url}/connect/${provider}`;
  };
  const authenticateProvider = async (provider, access_token) => {
    setToken(null);
    const { jwt } = await client(`/auth/${provider}/callback`, { method: "GET", params: { access_token } });
    setToken(jwt);
    const user2 = await fetchUser();
    return {
      user: user2,
      jwt
    };
  };
  return {
    setToken,
    setUser,
    fetchUser,
    login,
    logout,
    register,
    forgotPassword,
    resetPassword,
    sendEmailConfirmation,
    getProviderAuthenticationUrl,
    authenticateProvider
  };
};
const node_modules__64nuxtjs_strapi_dist_runtime_strapi_plugin_mjs_35gTOGMBRa = defineNuxtPlugin(async () => {
  let __temp, __restore;
  const { fetchUser } = useStrapiAuth();
  [__temp, __restore] = executeAsync(() => fetchUser()), await __temp, __restore();
});
const ie = {
  PREFIX: "prefix",
  PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
  PREFIX_AND_DEFAULT: "prefix_and_default",
  NO_PREFIX: "no_prefix"
}, W = "", Q = ie.PREFIX_EXCEPT_DEFAULT, Y = false, J = "___", K = "default", ue = "ltr", fe = "";
const Ce = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol", Pe = (e) => Ce ? Symbol(e) : e, F = Object.assign, be = Array.isArray, Ae = (e) => typeof e == "function", C = (e) => typeof e == "string", Ie = (e) => typeof e == "boolean", Oe = (e) => typeof e == "symbol", Z = (e) => e !== null && typeof e == "object", we = /\/$|\/\?/;
function X(e = "", t = false) {
  return t ? we.test(e) : e.endsWith("/");
}
function $e(e = "", t = false) {
  if (!t)
    return (X(e) ? e.slice(0, -1) : e) || "/";
  if (!X(e, true))
    return e || "/";
  const [o, ...n] = e.split("?");
  return (o.slice(0, -1) || "/") + (n.length ? `?${n.join("?")}` : "");
}
function De(e = "", t = false) {
  if (!t)
    return e.endsWith("/") ? e : e + "/";
  if (X(e, true))
    return e || "/";
  const [o, ...n] = e.split("?");
  return o + "/" + (n.length ? `?${n.join("?")}` : "");
}
function de(e, t) {
  typeof console < "u" && (console.warn("[vue-i18n-routing] " + e), t && console.warn(t.stack));
}
function he(e) {
  e = e || [];
  const t = [];
  for (const o of e)
    C(o) ? t.push({ code: o }) : t.push(o);
  return t;
}
function T(e) {
  return e != null && "global" in e && "mode" in e;
}
function U(e) {
  return e != null && !("__composer" in e) && vue_cjs_prod.isRef(e.locale);
}
function $(e) {
  return e != null && "__composer" in e;
}
function V(e) {
  return e != null && !("__composer" in e) && !vue_cjs_prod.isRef(e.locale);
}
function v(e) {
  return e != null && ("__VUE_I18N_BRIDGE__" in e || "_sync" in e);
}
function me(e) {
  return T(e) ? U(e.global) ? e.global : e.global.__composer : $(e) ? e.__composer : e;
}
function ee(e) {
  const t = T(e) ? e.global : e;
  return U(t) ? t.locale.value : (V(t) || $(t) || v(t), t.locale);
}
function Te(e) {
  const t = T(e) ? e.global : e;
  return U(t) ? t.locales.value : (V(t) || $(t) || v(t), t.locales);
}
function it(e) {
  const t = T(e) ? e.global : e;
  return U(t) ? t.localeCodes.value : (V(t) || $(t) || v(t), t.localeCodes);
}
function Ue(e, t) {
  const o = T(e) ? e.global : e;
  if (U(o))
    o.locale.value = t;
  else if (V(o) || $(o) || v(o))
    o.locale = t;
  else
    throw new Error("TODO:");
}
function pe(e) {
  return C(e) ? e : Oe(e) ? e.toString() : "(null)";
}
function se(e, t, {
  defaultLocale: o,
  strategy: n,
  routesNameSeparator: a,
  defaultLocaleRouteNameSuffix: l
}) {
  let c = pe(e) + (n === "no_prefix" ? "" : a + t);
  return t === o && n === "prefix_and_default" && (c += a + l), c;
}
function je(e, t) {
  return Ae(e) ? e(t) : e;
}
function y(e) {
  return function() {
    return Reflect.apply(e, {
      getRouteBaseName: this.getRouteBaseName,
      localePath: this.localePath,
      localeRoute: this.localeRoute,
      localeLocation: this.localeLocation,
      resolveRoute: this.resolveRoute,
      switchLocalePath: this.switchLocalePath,
      localeHead: this.localeHead,
      i18n: this.$i18n,
      route: this.$route,
      router: this.$router
    }, arguments);
  };
}
function ze(e, { locales: t = [], localeCodes: o = [], baseUrl: n = fe, hooks: a = {} } = {}) {
  const l = vue_cjs_prod.effectScope(), c = e.install;
  return e.install = (r, ...i) => {
    Reflect.apply(c, e, [r, ...i]);
    const u = me(e);
    l.run(() => Me(u, { locales: t, localeCodes: o, baseUrl: n, hooks: a })), $(e.global) && He(e.global, a.onExtendVueI18n);
    const f = r, s = e.mode === "composition" ? f.config.globalProperties.$i18n : null;
    if (s && Xe(s, u, a.onExtendExportedGlobal), (qe(i[0]) ? i[0] : { inject: true }).inject && r.mixin({
      methods: {
        resolveRoute: y(k),
        localePath: y(te),
        localeRoute: y(oe),
        localeLocation: y(ge),
        switchLocalePath: y(j),
        getRouteBaseName: y(I),
        localeHead: y(Le)
      }
    }), f.unmount) {
      const h = f.unmount;
      f.unmount = () => {
        l.stop(), h();
      };
    }
  }, l;
}
function Me(e, t) {
  const { locales: o, localeCodes: n, baseUrl: a } = t, l = vue_cjs_prod.ref(o), c = vue_cjs_prod.ref(n);
  e.locales = vue_cjs_prod.computed(() => l.value), e.localeCodes = vue_cjs_prod.computed(() => c.value), e.__baseUrl = je(a, {}), t.hooks && t.hooks.onExtendComposer && t.hooks.onExtendComposer(e);
}
function Xe(e, t, o) {
  const n = [
    {
      locales: {
        get() {
          return t.locales.value;
        }
      },
      localeCodes: {
        get() {
          return t.localeCodes.value;
        }
      },
      __baseUrl: {
        get() {
          return t.__baseUrl;
        }
      }
    }
  ];
  o && n.push(o(t));
  for (const a of n)
    for (const [l, c] of Object.entries(a))
      Object.defineProperty(e, l, c);
}
function He(e, t) {
  const o = me(e), n = [
    {
      locales: {
        get() {
          return o.locales.value;
        }
      },
      localeCodes: {
        get() {
          return o.localeCodes.value;
        }
      },
      __baseUrl: {
        get() {
          return o.__baseUrl;
        }
      }
    }
  ];
  t && n.push(t(o));
  for (const a of n)
    for (const [l, c] of Object.entries(a))
      Object.defineProperty(e, l, c);
}
function qe(e) {
  return Z(e) && "inject" in e && Ie(e.inject);
}
const H = Pe("vue-i18n-routing-gor");
function Qe(e, t) {
  e[H] ? de("already registered global options") : e[H] = t;
}
function Ye(e) {
  var t;
  return (t = e[H]) != null ? t : {};
}
function Ke(e) {
  return new RegExp(`^/(${e.join("|")})(?:/|$)`, "i");
}
function Ze(e, t, o) {
  const n = `(${e.join("|")})`, a = `(?:${t}${o})?`, l = new RegExp(`${t}${n}${a}$`, "i"), c = Ke(e);
  return (i) => {
    if (Z(i)) {
      if (i.name) {
        const f = (C(i.name) ? i.name : i.name.toString()).match(l);
        if (f && f.length > 1)
          return f[1];
      } else if (i.path) {
        const u = i.path.match(c);
        if (u && u.length > 1)
          return u[1];
      }
    } else if (C(i)) {
      const u = i.match(c);
      if (u && u.length > 1)
        return u[1];
    }
    return "";
  };
}
function B(e, t, {
  defaultLocale: o = W,
  defaultDirection: n = ue,
  defaultLocaleRouteNameSuffix: a = K,
  routesNameSeparator: l = J,
  strategy: c = Q,
  trailingSlash: r = Y,
  localeCodes: i = []
} = {}) {
  const u = Ye(e);
  return {
    defaultLocale: t.defaultLocale || u.defaultLocale || o,
    defaultDirection: t.defaultDirection || u.defaultDirection || n,
    defaultLocaleRouteNameSuffix: t.defaultLocaleRouteNameSuffix || u.defaultLocaleRouteNameSuffix || a,
    routesNameSeparator: t.routesNameSeparator || u.routesNameSeparator || l,
    strategy: t.strategy || u.strategy || c,
    trailingSlash: t.trailingSlash || u.trailingSlash || r,
    localeCodes: t.localeCodes || u.localeCodes || i
  };
}
const tt = /* @__PURE__ */ new Set(["prefix_and_default", "prefix_except_default"]);
function I(e) {
  const t = this.router, { routesNameSeparator: o } = B(t, this), n = e != null ? vue_cjs_prod.isRef(e) ? vue_cjs_prod.unref(e) : e : this.route;
  return n == null || !n.name ? void 0 : pe(n.name).split(o)[0];
}
function te(e, t) {
  const o = k.call(this, e, t);
  return o == null ? "" : o.redirectedFrom || o.fullPath;
}
function oe(e, t) {
  const o = k.call(this, e, t);
  return o == null ? void 0 : o;
}
function ge(e, t) {
  const o = k.call(this, e, t);
  return o == null ? void 0 : o;
}
function k(e, t) {
  const o = this.router, n = this.i18n, a = t || ee(n), { routesNameSeparator: l, defaultLocale: c, defaultLocaleRouteNameSuffix: r, strategy: i, trailingSlash: u } = B(o, this);
  let f = e;
  C(e) && (f[0] === "/" ? f = { path: e } : f = { name: e });
  let s = F({}, f);
  if (s.path && !s.name) {
    let d = null;
    try {
      d = o.resolve(s);
    } catch {
    }
    const h = d, S = I.call(this, h);
    C(S) ? s = {
      name: se(S, a, {
        defaultLocale: c,
        strategy: i,
        routesNameSeparator: l,
        defaultLocaleRouteNameSuffix: r
      }),
      params: h.params,
      query: h.query,
      hash: h.hash
    } : (!(a === c && tt.has(i)) && i !== "no_prefix" && (s.path = `/${a}${s.path}`), s.path = u ? De(s.path, true) : $e(s.path, true));
  } else {
    !s.name && !s.path && (s.name = I.call(this, this.route)), s.name = se(s.name, a, {
      defaultLocale: c,
      strategy: i,
      routesNameSeparator: l,
      defaultLocaleRouteNameSuffix: r
    });
    const { params: d } = s;
    d && d[0] === void 0 && d.pathMatch && (d[0] = d.pathMatch);
  }
  try {
    const d = o.resolve(s);
    return (isVue3 ? d.name : d.route.name) ? d : o.resolve(e);
  } catch (d) {
    if (d.type === 1)
      return null;
  }
}
function j(e) {
  const t = this.route, o = I.call(this, t);
  if (!o)
    return "";
  const { params: n, ...a } = t, c = F({}, a, {
    name: o,
    params: {
      ...n,
      ...{},
      0: n.pathMatch
    }
  });
  return te.call(this, c, e);
}
function Le({ addDirAttribute: e = false, addSeoAttributes: t = false } = {}) {
  const o = this.router, n = this.i18n, { defaultDirection: a } = B(o, this), l = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  if (n.locales == null || n.__baseUrl == null)
    return l;
  const c = ee(n), r = Te(n), i = he(r).find((s) => s.code === c) || {
    code: c
  }, u = i.iso, f = i.dir || a;
  return e && (l.htmlAttrs.dir = f), t && c && n.locales && (u && (l.htmlAttrs.lang = u), ot.call(this, r, n.__baseUrl, l.link), nt.call(this, n.__baseUrl, l.link, t), lt(i, u, l.meta), at(r, u, l.meta)), l;
}
function ot(e, t, o) {
  const n = this.router, { defaultLocale: a, strategy: l } = B(n, this);
  if (l === ie.NO_PREFIX)
    return;
  const c = /* @__PURE__ */ new Map();
  for (const r of e) {
    const i = r.iso;
    if (!i) {
      de("Locale ISO code is required to generate alternate link");
      continue;
    }
    const [u, f] = i.split("-");
    u && f && (r.isCatchallLocale || !c.has(u)) && c.set(u, r), c.set(i, r);
  }
  for (const [r, i] of c.entries()) {
    const u = j.call(this, i.code);
    u && o.push({
      hid: `i18n-alt-${r}`,
      rel: "alternate",
      href: q(u, t),
      hreflang: r
    });
  }
  if (a) {
    const r = j.call(this, a);
    r && o.push({
      hid: "i18n-xd",
      rel: "alternate",
      href: q(r, t),
      hreflang: "x-default"
    });
  }
}
function nt(e, t, o) {
  const n = this.route, a = oe.call(this, {
    ...n,
    name: I.call(this, n)
  });
  if (a) {
    let l = q(a.path, e);
    const c = Z(o) && o.canonicalQueries || [];
    if (c.length) {
      const r = a.query, i = new URLSearchParams();
      for (const f of c)
        if (f in r) {
          const s = r[f];
          be(s) ? s.forEach((d) => i.append(f, d || "")) : i.append(f, s || "");
        }
      const u = i.toString();
      u && (l = `${l}?${u}`);
    }
    t.push({
      hid: "i18n-can",
      rel: "canonical",
      href: l
    });
  }
}
function lt(e, t, o) {
  !(e && t) || o.push({
    hid: "i18n-og",
    property: "og:locale",
    content: _e(t)
  });
}
function at(e, t, o) {
  const n = e.filter((a) => {
    const l = a.iso;
    return l && l !== t;
  });
  if (n.length) {
    const a = n.map((l) => ({
      hid: `i18n-og-alt-${l.iso}`,
      property: "og:locale:alternate",
      content: _e(l.iso)
    }));
    o.push(...a);
  }
}
function _e(e) {
  return (e || "").replace(/-/g, "_");
}
function q(e, t) {
  return e.match(/^https?:\/\//) ? e : t + e;
}
const localeCodes = ["en", "ru", "ua"];
const localeMessages = {};
const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = Object({});
  const vueI18nOptionsLoader = async (context2) => Object({ "legacy": false, "locale": "ru", "messages": Object({ "ru": {
    "welcome": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0440\u0438\u0432\u0435\u0442"]);
    }
  }, "en": {
    "welcome": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Welcome"]);
    }
  }, "ua": {
    "welcome": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0440i\u0432\u0435\u0442"]);
    }
  } }) });
  nuxtI18nOptions.vueI18n = await vueI18nOptionsLoader();
  nuxtI18nOptions.locales = [Object({ "code": "en", "name": "English" }), Object({ "code": "ru", "name": "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" }), Object({ "code": "ua", "name": "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439" })];
  nuxtI18nOptions.defaultLocale = "";
  nuxtI18nOptions.defaultDirection = "ltr";
  nuxtI18nOptions.routesNameSeparator = "___";
  nuxtI18nOptions.trailingSlash = false;
  nuxtI18nOptions.defaultLocaleRouteNameSuffix = "default";
  nuxtI18nOptions.strategy = "no_prefix";
  nuxtI18nOptions.lazy = false;
  nuxtI18nOptions.langDir = null;
  nuxtI18nOptions.detectBrowserLanguage = Object({ "alwaysRedirect": false, "cookieCrossOrigin": false, "cookieDomain": null, "cookieKey": "i18n_redirected", "cookieSecure": false, "fallbackLocale": "", "redirectOn": "root", "useCookie": true });
  nuxtI18nOptions.baseUrl = "";
  nuxtI18nOptions.parsePages = true;
  nuxtI18nOptions.pages = Object({});
  nuxtI18nOptions.skipSettingLocaleOnNavigate = false;
  nuxtI18nOptions.onBeforeLanguageSwitch = () => ({});
  nuxtI18nOptions.onLanguageSwitched = () => null;
  return nuxtI18nOptions;
};
const nuxtI18nOptionsDefault = Object({ vueI18n: void 0, locales: [], defaultLocale: "", defaultDirection: "ltr", routesNameSeparator: "___", trailingSlash: false, defaultLocaleRouteNameSuffix: "default", strategy: "prefix_except_default", lazy: false, langDir: null, detectBrowserLanguage: Object({ "alwaysRedirect": false, "cookieCrossOrigin": false, "cookieDomain": null, "cookieKey": "i18n_redirected", "cookieSecure": false, "fallbackLocale": "", "redirectOn": "root", "useCookie": true }), baseUrl: "", parsePages: true, pages: Object({}), skipSettingLocaleOnNavigate: false, onBeforeLanguageSwitch: () => ({}), onLanguageSwitched: () => null });
const nuxtI18nInternalOptions = Object({ __normalizedLocales: [Object({ "code": "en", "name": "English" }), Object({ "code": "ru", "name": "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" }), Object({ "code": "ua", "name": "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439" })] });
function formatMessage(message) {
  return "[@nuxtjs/i18n] " + message;
}
function isLegacyVueI18n(target) {
  return target != null && ("__VUE_I18N_BRIDGE__" in target || "_sync" in target);
}
function callVueI18nInterfaces(i18n, name, ...args) {
  const target = T(i18n) ? i18n.global : i18n;
  const [obj, method] = U(target) ? [target, target[name]] : V(target) || $(target) || isLegacyVueI18n(target) ? [target, target[name]] : [target, target[name]];
  return Reflect.apply(method, obj, [...args]);
}
function getVueI18nPropertyValue(i18n, name) {
  const target = T(i18n) ? i18n.global : i18n;
  const ret = U(target) ? target[name].value : V(target) || $(target) || isLegacyVueI18n(target) ? target[name] : target[name];
  return ret;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function proxyNuxt(nuxt, target) {
  return function() {
    return Reflect.apply(
      target,
      {
        i18n: nuxt.$i18n,
        getRouteBaseName: nuxt.$getRouteBaseName,
        localePath: nuxt.$localePath,
        localeRoute: nuxt.$localeRoute,
        switchLocalePath: nuxt.$switchLocalePath,
        localeHead: nuxt.$localeHead,
        route: nuxt.$router.currentRoute.value,
        router: nuxt.$router,
        store: void 0
      },
      arguments
    );
  };
}
async function loadMessage(context, locale) {
  let message = null;
  const loader = localeMessages[locale];
  if (loader) {
    try {
      const getter = await loader().then((r) => r.default || r);
      if (isFunction(getter)) {
        console.error(formatMessage("Not support executable file (e.g. js, cjs, mjs)"));
      } else {
        message = getter;
      }
    } catch (e) {
      console.error(formatMessage("Failed locale loading: " + e.message));
    }
  } else {
    console.warn(formatMessage("Could not find " + locale + " locale"));
  }
  return message;
}
async function loadLocale(context, locale, setter) {
  {
    const message = await loadMessage(context, locale);
    if (message != null) {
      setter(locale, message);
    }
  }
}
function getBrowserLocale(options, context) {
  {
    {
      throw new Error("Not implement for nuxt3 options API style");
    }
  }
}
function getLocaleCookie(context, {
  useCookie: useCookie2 = nuxtI18nOptionsDefault.detectBrowserLanguage.useCookie,
  cookieKey = nuxtI18nOptionsDefault.detectBrowserLanguage.cookieKey,
  localeCodes: localeCodes2 = []
} = {}) {
  if (useCookie2) {
    let localeCode;
    {
      if (context.req && typeof context.req.headers.cookie !== "undefined") {
        const cookies = context.req.headers && context.req.headers.cookie ? parse(context.req.headers.cookie) : {};
        localeCode = cookies[cookieKey];
      }
    }
    if (localeCode && localeCodes2.includes(localeCode)) {
      return localeCode;
    }
  }
}
function setLocaleCookie(locale, context, {
  useCookie: useCookie2 = nuxtI18nOptionsDefault.detectBrowserLanguage.useCookie,
  cookieKey = nuxtI18nOptionsDefault.detectBrowserLanguage.cookieKey,
  cookieDomain = nuxtI18nOptionsDefault.detectBrowserLanguage.cookieDomain,
  cookieSecure = nuxtI18nOptionsDefault.detectBrowserLanguage.cookieSecure,
  cookieCrossOrigin = nuxtI18nOptionsDefault.detectBrowserLanguage.cookieCrossOrigin
} = {}) {
  if (!useCookie2) {
    return;
  }
  const date = new Date();
  const cookieOptions = {
    expires: new Date(date.setDate(date.getDate() + 365)),
    path: "/",
    sameSite: cookieCrossOrigin ? "none" : "lax",
    secure: cookieCrossOrigin || cookieSecure
  };
  if (cookieDomain) {
    cookieOptions.domain = cookieDomain;
  }
  {
    if (context.res) {
      const { res } = context;
      let headers = res.getHeader("Set-Cookie") || [];
      if (!isArray(headers)) {
        headers = [String(headers)];
      }
      const redirectCookie = serialize(cookieKey, locale, cookieOptions);
      headers.push(redirectCookie);
      res.setHeader("Set-Cookie", headers);
    }
  }
}
function getInitialLocale(context, route, nuxtI18nOptions, localeCodes2, routeLocaleGetter, locale = "") {
  const { strategy, defaultLocale, vueI18n } = nuxtI18nOptions;
  const initialLocale = locale || vueI18n.locale || "en-US";
  const browserLocale = nuxtI18nOptions.detectBrowserLanguage ? detectBrowserLanguage(route, context, nuxtI18nOptions, nuxtI18nInternalOptions, localeCodes2, initialLocale) : "";
  let finalLocale = browserLocale;
  if (!finalLocale) {
    if (strategy !== "no_prefix") {
      finalLocale = routeLocaleGetter(route);
    }
  }
  if (!finalLocale && nuxtI18nOptions.detectBrowserLanguage && nuxtI18nOptions.detectBrowserLanguage.useCookie) {
    finalLocale = getLocaleCookie(context, { ...nuxtI18nOptions, localeCodes: localeCodes2 });
  }
  if (!finalLocale) {
    finalLocale = defaultLocale || "";
  }
  return finalLocale;
}
function detectBrowserLanguage(route, context, nuxtI18nOptions, nuxtI18nInternalOptions2, localeCodes2 = [], locale = "") {
  const { strategy } = nuxtI18nOptions;
  const { redirectOn, alwaysRedirect, useCookie: useCookie2, fallbackLocale } = nuxtI18nOptions.detectBrowserLanguage;
  const path = isString(route) ? route : route.path;
  if (strategy !== "no_prefix") {
    if (redirectOn === "root") {
      if (path !== "/") {
        return "";
      }
    } else if (redirectOn === "no prefix") {
      if (!alwaysRedirect && path.match(Ke(localeCodes2))) {
        return "";
      }
    }
  }
  const cookieLocale = getLocaleCookie(context, { ...nuxtI18nOptions, localeCodes: localeCodes2 });
  let matchedLocale = cookieLocale;
  if (!useCookie2) {
    matchedLocale = getBrowserLocale();
  }
  const finalLocale = matchedLocale || fallbackLocale;
  const vueI18nLocale = locale || nuxtI18nOptions.vueI18n.locale;
  if (finalLocale && (!useCookie2 || alwaysRedirect || !cookieLocale)) {
    if (finalLocale !== vueI18nLocale) {
      return finalLocale;
    }
  }
  return "";
}
function setCookieLocale(i18n, locale) {
  return callVueI18nInterfaces(i18n, "setLocaleCookie", locale);
}
function setLocaleMessage(i18n, locale, messages) {
  return callVueI18nInterfaces(i18n, "setLocaleMessage", locale, messages);
}
function onBeforeLanguageSwitch(i18n, oldLocale, newLocale, initial, context) {
  return callVueI18nInterfaces(i18n, "onBeforeLanguageSwitch", oldLocale, newLocale, initial, context);
}
function onLanguageSwitched(i18n, oldLocale, newLocale) {
  return callVueI18nInterfaces(i18n, "onLanguageSwitched", oldLocale, newLocale);
}
function makeFallbackLocaleCodes(fallback, locales) {
  let fallbackLocales = [];
  if (isArray(fallback)) {
    fallbackLocales = fallback;
  } else if (isObject(fallback)) {
    const targets = [...locales, "default"];
    for (const locale of targets) {
      if (fallback[locale]) {
        fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
      }
    }
  } else if (isString(fallback) && locales.every((locale) => locale !== fallback)) {
    fallbackLocales.push(fallback);
  }
  return fallbackLocales;
}
async function loadInitialMessages(context, messages, options) {
  const { defaultLocale, initialLocale, localeCodes: localeCodes2, fallbackLocale, langDir, lazy } = options;
  const setter = (locale, message) => messages[locale] = message;
  if (langDir) {
    if (lazy && fallbackLocale) {
      const fallbackLocales = makeFallbackLocaleCodes(fallbackLocale, [defaultLocale, initialLocale]);
      await Promise.all(fallbackLocales.map((locale) => loadLocale(context, locale, setter)));
    }
    const locales = lazy ? [...(/* @__PURE__ */ new Set()).add(defaultLocale).add(initialLocale)] : localeCodes2;
    await Promise.all(locales.map((locale) => loadLocale(context, locale, setter)));
  }
  return messages;
}
async function loadAndSetLocale(newLocale, context, i18n, {
  useCookie: useCookie2 = nuxtI18nOptionsDefault.detectBrowserLanguage.useCookie,
  skipSettingLocaleOnNavigate = nuxtI18nOptionsDefault.skipSettingLocaleOnNavigate,
  initial = false,
  lazy = false,
  langDir = null
} = {}) {
  let ret = false;
  const oldLocale = ee(i18n);
  if (!newLocale) {
    return [ret, oldLocale];
  }
  if (oldLocale === newLocale) {
    return [ret, oldLocale];
  }
  const localeOverride = onBeforeLanguageSwitch(i18n, oldLocale, newLocale, initial, context);
  const localeCodes2 = it(i18n);
  if (localeOverride && localeCodes2 && localeCodes2.includes(localeOverride)) {
    if (localeOverride === oldLocale) {
      return [ret, oldLocale];
    }
    newLocale = localeOverride;
  }
  if (langDir) {
    const i18nFallbackLocales = getVueI18nPropertyValue(i18n, "fallbackLocale");
    if (lazy) {
      const setter = (locale, message) => setLocaleMessage(i18n, locale, message);
      if (i18nFallbackLocales) {
        const fallbackLocales = makeFallbackLocaleCodes(i18nFallbackLocales, [newLocale]);
        await Promise.all(fallbackLocales.map((locale) => loadLocale(context, locale, setter)));
      }
      await loadLocale(context, newLocale, setter);
    }
  }
  if (skipSettingLocaleOnNavigate) {
    return [ret, oldLocale];
  }
  if (useCookie2) {
    setCookieLocale(i18n, newLocale);
  }
  Ue(i18n, newLocale);
  ret = true;
  return [ret, oldLocale];
}
function detectLocale(route, context, i18n, routeLocaleGetter, nuxtI18nOptions, localeCodes2 = []) {
  const { strategy, defaultLocale, vueI18n } = nuxtI18nOptions;
  const initialLocale = ee(i18n) || defaultLocale || vueI18n.locale || "en-US";
  const browserLocale = nuxtI18nOptions.detectBrowserLanguage ? detectBrowserLanguage(route, context, nuxtI18nOptions, nuxtI18nInternalOptions, localeCodes2, initialLocale) : "";
  let finalLocale = browserLocale;
  if (!finalLocale) {
    if (strategy !== "no_prefix") {
      finalLocale = routeLocaleGetter(route);
    }
  }
  if (!finalLocale && nuxtI18nOptions.detectBrowserLanguage && nuxtI18nOptions.detectBrowserLanguage.useCookie) {
    finalLocale = getLocaleCookie(context, { ...nuxtI18nOptions, localeCodes: localeCodes2 });
  }
  if (!finalLocale) {
    finalLocale = defaultLocale || "";
  }
  return finalLocale;
}
function detectRedirect(route, nuxt, targetLocale, routeLocaleGetter, nuxtI18nOptions) {
  const { strategy, defaultLocale } = nuxtI18nOptions;
  let redirectPath = "";
  if (strategy !== "no_prefix" && (routeLocaleGetter(route) !== targetLocale || strategy === "prefix_and_default" && targetLocale === defaultLocale)) {
    const fullPath = isString(route) ? route : route.fullPath;
    const routePath = nuxt.$switchLocalePath(targetLocale) || nuxt.$localePath(fullPath, targetLocale);
    if (isString(routePath) && routePath && routePath !== fullPath && !routePath.startsWith("//")) {
      redirectPath = routePath;
    }
  }
  return redirectPath;
}
async function navigate(i18n, redirectPath, locale, {
  status = 302,
  skipSettingLocaleOnNavigate = nuxtI18nOptionsDefault.skipSettingLocaleOnNavigate
} = {}) {
  if (skipSettingLocaleOnNavigate) {
    i18n.__pendingLocale = locale;
    i18n.__pendingLocalePromise = new Promise((resolve) => {
      i18n.__resolvePendingLocalePromise = resolve;
    });
    return;
  }
  if (redirectPath) {
    return navigateTo(redirectPath, { redirectCode: status });
  }
}
function inejctNuxtHelpers(nuxt, i18n) {
  defineGetter(nuxt, "$i18n", i18n.global);
  for (const pair of [
    ["getRouteBaseName", I],
    ["localePath", te],
    ["localeRoute", oe],
    ["switchLocalePath", j],
    ["localeHead", Le]
  ]) {
    defineGetter(nuxt, "$" + pair[0], proxyNuxt(nuxt, pair[1]));
  }
}
const node_modules__64nuxtjs_i18n_dist_runtime_plugin_mjs_vyNBGOI7EC = defineNuxtPlugin(async (nuxt) => {
  var _a;
  let __temp, __restore;
  const router = useRouter();
  const { vueApp: app } = nuxt;
  const nuxtI18nOptions = ([__temp, __restore] = executeAsync(() => resolveNuxtI18nOptions()), __temp = await __temp, __restore(), __temp);
  const useCookie2 = nuxtI18nOptions.detectBrowserLanguage && nuxtI18nOptions.detectBrowserLanguage.useCookie;
  const getLocaleFromRoute = Ze(
    localeCodes,
    nuxtI18nOptions.routesNameSeparator,
    nuxtI18nOptions.defaultLocaleRouteNameSuffix
  );
  const vueI18nOptions = nuxtI18nOptions.vueI18n;
  vueI18nOptions.messages = vueI18nOptions.messages || {};
  vueI18nOptions.fallbackLocale = (_a = vueI18nOptions.fallbackLocale) != null ? _a : false;
  Qe(router, nuxtI18nOptions);
  let initialLocale = getInitialLocale(
    nuxt.ssrContext,
    router.currentRoute.value,
    nuxtI18nOptions,
    localeCodes,
    getLocaleFromRoute
  );
  [__temp, __restore] = executeAsync(() => loadInitialMessages(nuxt, vueI18nOptions.messages, {
    ...nuxtI18nOptions,
    initialLocale,
    fallbackLocale: vueI18nOptions.fallbackLocale,
    localeCodes
  })), await __temp, __restore();
  initialLocale || (initialLocale = vueI18nOptions.locale || "en-US");
  const i18n = createI18n({
    ...vueI18nOptions,
    locale: initialLocale
  });
  let notInitialSetup = true;
  function isInitialLocaleSetup(locale) {
    return initialLocale !== locale && notInitialSetup;
  }
  ze(i18n, {
    locales: nuxtI18nOptions.locales,
    localeCodes,
    baseUrl: nuxtI18nOptions.baseUrl,
    hooks: {
      onExtendComposer(composer) {
        composer.localeProperties = vue_cjs_prod.computed(() => {
          return nuxtI18nInternalOptions.__normalizedLocales.find((l) => l.code === composer.locale.value) || {
            code: composer.locale.value
          };
        });
        composer.setLocale = async (locale) => {
          const localeSetup = isInitialLocaleSetup(locale);
          const [modified, oldLocale] = await loadAndSetLocale(locale, nuxt, i18n, {
            useCookie: useCookie2,
            initial: localeSetup,
            skipSettingLocaleOnNavigate: nuxtI18nOptions.skipSettingLocaleOnNavigate,
            lazy: nuxtI18nOptions.lazy,
            langDir: nuxtI18nOptions.langDir
          });
          if (modified && localeSetup) {
            notInitialSetup = false;
          }
          if (!notInitialSetup) {
            onLanguageSwitched(i18n, oldLocale, locale);
          }
          const redirectPath = detectRedirect(
            locale,
            nuxt,
            initialLocale,
            getLocaleFromRoute,
            nuxtI18nOptions
          );
          navigate(i18n, redirectPath, locale, {
            skipSettingLocaleOnNavigate: nuxtI18nOptions.skipSettingLocaleOnNavigate
          });
        };
        composer.getBrowserLocale = () => getBrowserLocale(nuxtI18nInternalOptions, nuxt.ssrContext);
        composer.getLocaleCookie = () => getLocaleCookie(nuxt.ssrContext, { ...nuxtI18nOptions.detectBrowserLanguage, localeCodes });
        composer.setLocaleCookie = (locale) => setLocaleCookie(locale, nuxt.ssrContext, nuxtI18nOptions.detectBrowserLanguage || void 0);
        composer.onBeforeLanguageSwitch = nuxtI18nOptions.onBeforeLanguageSwitch;
        composer.onLanguageSwitched = nuxtI18nOptions.onLanguageSwitched;
        composer.finalizePendingLocaleChange = async () => {
          if (!i18n.__pendingLocale) {
            return;
          }
          Ue(i18n, i18n.__pendingLocale);
          if (i18n.__resolvePendingLocalePromise) {
            await i18n.__resolvePendingLocalePromise("");
          }
          i18n.__pendingLocale = void 0;
        };
        composer.waitForPendingLocaleChange = async () => {
          if (i18n.__pendingLocale && i18n.__pendingLocalePromise) {
            await i18n.__pendingLocalePromise;
          }
        };
      },
      onExtendExportedGlobal(g) {
        return {
          localeProperties: {
            get() {
              return g.localeProperties.value;
            }
          },
          getBrowserLocale: {
            get() {
              return () => Reflect.apply(g.getBrowserLocale, g, []);
            }
          },
          getLocaleCookie: {
            get() {
              return () => Reflect.apply(g.getLocaleCookie, g, []);
            }
          },
          setLocaleCookie: {
            get() {
              return (locale) => Reflect.apply(g.setLocaleCookie, g, [locale]);
            }
          },
          onBeforeLanguageSwitch: {
            get() {
              return (oldLocale, newLocale, initialSetup, context) => Reflect.apply(g.onBeforeLanguageSwitch, g, [oldLocale, newLocale, initialSetup, context]);
            }
          },
          onLanguageSwitched: {
            get() {
              return (oldLocale, newLocale) => Reflect.apply(g.onLanguageSwitched, g, [oldLocale, newLocale]);
            }
          },
          finalizePendingLocaleChange: {
            get() {
              return () => Reflect.apply(g.finalizePendingLocaleChange, g, []);
            }
          },
          waitForPendingLocaleChange: {
            get() {
              return () => Reflect.apply(g.waitForPendingLocaleChange, g, []);
            }
          }
        };
      },
      onExtendVueI18n(composer) {
        return {
          localeProperties: {
            get() {
              return composer.localeProperties.value;
            }
          },
          getBrowserLocale: {
            get() {
              return () => Reflect.apply(composer.getBrowserLocale, composer, []);
            }
          },
          getLocaleCookie: {
            get() {
              return () => Reflect.apply(composer.getLocaleCookie, composer, []);
            }
          },
          setLocaleCookie: {
            get() {
              return (locale) => Reflect.apply(composer.setLocaleCookie, composer, [locale]);
            }
          },
          onBeforeLanguageSwitch: {
            get() {
              return (oldLocale, newLocale, initialSetup, context) => Reflect.apply(composer.onBeforeLanguageSwitch, composer, [oldLocale, newLocale, initialSetup, context]);
            }
          },
          onLanguageSwitched: {
            get() {
              return (oldLocale, newLocale) => Reflect.apply(composer.onLanguageSwitched, composer, [oldLocale, newLocale]);
            }
          },
          finalizePendingLocaleChange: {
            get() {
              return () => Reflect.apply(composer.finalizePendingLocaleChange, composer, []);
            }
          },
          waitForPendingLocaleChange: {
            get() {
              return () => Reflect.apply(composer.waitForPendingLocaleChange, composer, []);
            }
          }
        };
      }
    }
  });
  app.use(i18n);
  inejctNuxtHelpers(nuxt, i18n);
  {
    const route = router.currentRoute.value;
    const locale = detectLocale(route, nuxt.ssrContext, i18n, getLocaleFromRoute, nuxtI18nOptions, localeCodes);
    const [modified, oldLocale] = ([__temp, __restore] = executeAsync(() => loadAndSetLocale(
      locale || nuxtI18nOptions.defaultLocale,
      nuxt,
      i18n,
      {
        useCookie: useCookie2,
        skipSettingLocaleOnNavigate: nuxtI18nOptions.skipSettingLocaleOnNavigate,
        lazy: nuxtI18nOptions.lazy,
        langDir: nuxtI18nOptions.langDir
      }
    )), __temp = await __temp, __restore(), __temp);
    if (!notInitialSetup) {
      onLanguageSwitched(i18n, oldLocale, locale);
    }
    const redirectPath = detectRedirect(
      route,
      nuxt,
      initialLocale,
      getLocaleFromRoute,
      nuxtI18nOptions
    );
    navigate(i18n, redirectPath, locale, { skipSettingLocaleOnNavigate: nuxtI18nOptions.skipSettingLocaleOnNavigate });
  }
});
const _plugins = [
  preload,
  _nuxt_components_plugin_mjs_KR1HBZs4kY,
  node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_D7WGfuP1A0,
  node_modules_nuxt_dist_head_runtime_plugin_mjs_1QO0gqa6n2,
  node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB,
  node_modules__64pinia_nuxt_dist_runtime_plugin_vue3_mjs_A0OWXRrUgq,
  node_modules__64nuxtjs_strapi_dist_runtime_strapi_plugin_mjs_35gTOGMBRa,
  node_modules__64nuxtjs_i18n_dist_runtime_plugin_mjs_vyNBGOI7EC
];
const _sfc_main$1 = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = vue_cjs_prod.defineAsyncComponent(() => import('./error-component.6b35e3e3.mjs'));
    const nuxtApp = useNuxtApp();
    vue_cjs_prod.provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    vue_cjs_prod.onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, showError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_App = vue_cjs_prod.resolveComponent("App");
      serverRenderer.exports.ssrRenderSuspense(_push, {
        default: () => {
          if (vue_cjs_prod.unref(error)) {
            _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(ErrorComponent), { error: vue_cjs_prod.unref(error) }, null, _parent));
          } else {
            _push(serverRenderer.exports.ssrRenderComponent(_component_App, null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const layouts = {
  default: vue_cjs_prod.defineAsyncComponent(() => import('./default.73d20fc1.mjs'))
};
const defaultLayoutTransition = { name: "layout", mode: "out-in" };
const __nuxt_component_0 = vue_cjs_prod.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = useRoute();
    return () => {
      var _a, _b, _c;
      const layout = (_b = (_a = vue_cjs_prod.isRef(props.name) ? props.name.value : props.name) != null ? _a : route.meta.layout) != null ? _b : "default";
      const hasLayout = layout && layout in layouts;
      return _wrapIf(
        vue_cjs_prod.Transition,
        hasLayout && ((_c = route.meta.layoutTransition) != null ? _c : defaultLayoutTransition),
        _wrapIf(layouts[layout], hasLayout, context.slots)
      ).default();
    };
  }
});
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_NuxtPage = vue_cjs_prod.resolveComponent("NuxtPage");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "page-container bg-dark p-[20px] md:pt-[0px] sm:px-0 pb-0" }, _attrs))}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, null, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<main${_scopeId}>`);
        _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
        _push2(`</main>`);
      } else {
        return [
          vue_cjs_prod.createVNode("main", null, [
            vue_cjs_prod.createVNode(_component_NuxtPage)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = vue_cjs_prod.createApp(_sfc_main$1);
    vueApp.component("App", AppComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { ArrowIcon as A, CustomSelect as C, _export_sfc as _, useI18n as a, CalendarIcon as b, __nuxt_component_0$3 as c, __nuxt_component_2$1 as d, entry$1 as default, __nuxt_component_3 as e, __nuxt_component_4 as f, __nuxt_component_5 as g, __nuxt_component_6 as h, _sfc_main$5 as i, __nuxt_component_8 as j, __nuxt_component_9 as k, __nuxt_component_0$4 as l, useRoute as m, useHead as u, vue_cjs_prod as v };
//# sourceMappingURL=server.mjs.map
