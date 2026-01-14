System.register(["../../../_chunks/compat.module-919773fc.js", "../../../_chunks/initHannaNamespace-77b40001.js", "../../../_chunks/qj-0ce4c6bc.js", "../../../_chunks/jsxRuntime.module-791778ad.js", "../../../_chunks/getSVGtext-2c45db0c.js", "../../../_chunks/i18n-5b23de04.js", "../../../_chunks/_useMobileMenuToggling-b1fb85e8.js", "../../../_chunks/index-a8aaa585.js", "../../../_chunks/SiteSearchInput-7551fae8.js", "../../../_chunks/env-c53cf972.js", "../../../_chunks/useLaggedState-2873be27.js", "../../../_chunks/ensureCSS-cc708e92.js", "../../../_chunks/getLang-61538edc.js", "./reykjavik.is.js", "../../../_chunks/hannavars-0e03a23c.js", "../../../_chunks/ObjectHelpers-a9c65074.js", "../../../_chunks/assets-7c5ecab5.js"], function(exports, module) {
  "use strict";
  var t, h, _, p, Cn, getDefaultExportFromCjs, debounce, o, modifiedClass, getTexts, require$$0, propTypesExports, SiteSearchInput, isPreact, useLaggedState, ensureCSS, getLang, createElasticQuery, postQuery;
  return {
    setters: [(module2) => {
      t = module2.t;
      h = module2.h;
      _ = module2._;
      p = module2.p;
      Cn = module2.C;
    }, null, (module2) => {
      getDefaultExportFromCjs = module2.g;
      debounce = module2.d;
    }, (module2) => {
      o = module2.o;
      modifiedClass = module2.m;
    }, null, (module2) => {
      getTexts = module2.g;
    }, (module2) => {
      require$$0 = module2.r;
    }, (module2) => {
      propTypesExports = module2.p;
    }, (module2) => {
      SiteSearchInput = module2.S;
    }, (module2) => {
      isPreact = module2.i;
    }, (module2) => {
      useLaggedState = module2.u;
    }, (module2) => {
      ensureCSS = module2.e;
    }, (module2) => {
      getLang = module2.g;
    }, (module2) => {
      createElasticQuery = module2.createElasticQuery;
      postQuery = module2.postQuery;
    }, null, null, null],
    execute: function() {
      var _jsxFileName$3 = "/Users/maro5239/work/hanna/modules/hanna-react/src/PageHeading.tsx";
      const PageHeading = (props) => {
        const {
          Tag = "h1",
          align,
          small,
          children,
          wrapperProps
        } = props;
        return o(Tag, {
          ...wrapperProps,
          className: modifiedClass("PageHeading", [small && "small", align === "right" && `align--${align}`], (wrapperProps || {}).className),
          children
        }, void 0, false, {
          fileName: _jsxFileName$3,
          lineNumber: 19,
          columnNumber: 5
        }, void 0);
      };
      var Autosuggest$1 = {};
      function shallowEqualArrays(arrA, arrB) {
        if (arrA === arrB) {
          return true;
        }
        if (!arrA || !arrB) {
          return false;
        }
        var len = arrA.length;
        if (arrB.length !== len) {
          return false;
        }
        for (var i = 0; i < len; i++) {
          if (arrA[i] !== arrB[i]) {
            return false;
          }
        }
        return true;
      }
      var arrays = shallowEqualArrays;
      var Autowhatever = {};
      var _slicedToArray = function() {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = void 0;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"])
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        return function(arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();
      var dist$2 = function(_ref) {
        var data = _ref.data;
        var multiSection = _ref.multiSection;
        function nextNonEmptySectionIndex(sectionIndex) {
          if (sectionIndex === null) {
            sectionIndex = 0;
          } else {
            sectionIndex++;
          }
          while (sectionIndex < data.length && data[sectionIndex] === 0) {
            sectionIndex++;
          }
          return sectionIndex === data.length ? null : sectionIndex;
        }
        function prevNonEmptySectionIndex(sectionIndex) {
          if (sectionIndex === null) {
            sectionIndex = data.length - 1;
          } else {
            sectionIndex--;
          }
          while (sectionIndex >= 0 && data[sectionIndex] === 0) {
            sectionIndex--;
          }
          return sectionIndex === -1 ? null : sectionIndex;
        }
        function next(position) {
          var _position = _slicedToArray(position, 2);
          var sectionIndex = _position[0];
          var itemIndex = _position[1];
          if (multiSection) {
            if (itemIndex === null || itemIndex === data[sectionIndex] - 1) {
              sectionIndex = nextNonEmptySectionIndex(sectionIndex);
              if (sectionIndex === null) {
                return [null, null];
              }
              return [sectionIndex, 0];
            }
            return [sectionIndex, itemIndex + 1];
          }
          if (data === 0 || itemIndex === data - 1) {
            return [null, null];
          }
          if (itemIndex === null) {
            return [null, 0];
          }
          return [null, itemIndex + 1];
        }
        function prev(position) {
          var _position2 = _slicedToArray(position, 2);
          var sectionIndex = _position2[0];
          var itemIndex = _position2[1];
          if (multiSection) {
            if (itemIndex === null || itemIndex === 0) {
              sectionIndex = prevNonEmptySectionIndex(sectionIndex);
              if (sectionIndex === null) {
                return [null, null];
              }
              return [sectionIndex, data[sectionIndex] - 1];
            }
            return [sectionIndex, itemIndex - 1];
          }
          if (data === 0 || itemIndex === 0) {
            return [null, null];
          }
          if (itemIndex === null) {
            return [null, data - 1];
          }
          return [null, itemIndex - 1];
        }
        function isLast(position) {
          return next(position)[1] === null;
        }
        return {
          next,
          prev,
          isLast
        };
      };
      var dist$1 = { exports: {} };
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function ToObject(val) {
        if (val == null) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(val);
      }
      function ownEnumerableKeys(obj) {
        var keys = Object.getOwnPropertyNames(obj);
        if (Object.getOwnPropertySymbols) {
          keys = keys.concat(Object.getOwnPropertySymbols(obj));
        }
        return keys.filter(function(key) {
          return propIsEnumerable.call(obj, key);
        });
      }
      var objectAssign = Object.assign || function(target, source) {
        var from;
        var keys;
        var to = ToObject(target);
        for (var s = 1; s < arguments.length; s++) {
          from = arguments[s];
          keys = ownEnumerableKeys(Object(from));
          for (var i = 0; i < keys.length; i++) {
            to[keys[i]] = from[keys[i]];
          }
        }
        return to;
      };
      dist$1.exports;
      (function(module2, exports2) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _slicedToArray2 = function() {
          function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = void 0;
            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i)
                  break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"])
                  _i["return"]();
              } finally {
                if (_d)
                  throw _e;
              }
            }
            return _arr;
          }
          return function(arr, i) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i);
            } else {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
          };
        }();
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
              arr2[i] = arr[i];
            return arr2;
          } else {
            return Array.from(arr);
          }
        }
        var _objectAssign = objectAssign;
        var _objectAssign2 = _interopRequireDefault(_objectAssign);
        var truthy = function truthy2(x) {
          return x;
        };
        exports2["default"] = function(input) {
          var _ref = Array.isArray(input) && input.length === 2 ? input : [input, null];
          var _ref2 = _slicedToArray2(_ref, 2);
          var theme2 = _ref2[0];
          var classNameDecorator = _ref2[1];
          return function(key) {
            for (var _len = arguments.length, names = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              names[_key - 1] = arguments[_key];
            }
            var styles = names.map(function(name) {
              return theme2[name];
            }).filter(truthy);
            return typeof styles[0] === "string" || typeof classNameDecorator === "function" ? { key, className: classNameDecorator ? classNameDecorator.apply(void 0, _toConsumableArray(styles)) : styles.join(" ") } : { key, style: _objectAssign2["default"].apply(void 0, [{}].concat(_toConsumableArray(styles))) };
          };
        };
        module2.exports = exports2["default"];
      })(dist$1, dist$1.exports);
      var distExports = dist$1.exports;
      var SectionTitle = {};
      var compareObjects = {};
      (function(exports2) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2["default"] = compareObjects2;
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof(obj);
        }
        function compareObjects2(objA, objB) {
          var keys = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
          if (objA === objB) {
            return false;
          }
          var aKeys = Object.keys(objA);
          var bKeys = Object.keys(objB);
          if (aKeys.length !== bKeys.length) {
            return true;
          }
          var keysMap = {};
          var i, len;
          for (i = 0, len = keys.length; i < len; i++) {
            keysMap[keys[i]] = true;
          }
          for (i = 0, len = aKeys.length; i < len; i++) {
            var key = aKeys[i];
            var aValue = objA[key];
            var bValue = objB[key];
            if (aValue === bValue) {
              continue;
            }
            if (!keysMap[key] || aValue === null || bValue === null || _typeof(aValue) !== "object" || _typeof(bValue) !== "object") {
              return true;
            }
            var aValueKeys = Object.keys(aValue);
            var bValueKeys = Object.keys(bValue);
            if (aValueKeys.length !== bValueKeys.length) {
              return true;
            }
            for (var n = 0, length = aValueKeys.length; n < length; n++) {
              var aValueKey = aValueKeys[n];
              if (aValue[aValueKey] !== bValue[aValueKey]) {
                return true;
              }
            }
          }
          return false;
        }
      })(compareObjects);
      (function(exports2) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2["default"] = void 0;
        var _react = _interopRequireWildcard(require$$0);
        var _propTypes = _interopRequireDefault(propTypesExports);
        var _compareObjects = _interopRequireDefault(compareObjects);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        function _getRequireWildcardCache() {
          if (typeof WeakMap !== "function")
            return null;
          var cache = /* @__PURE__ */ new WeakMap();
          _getRequireWildcardCache = function _getRequireWildcardCache2() {
            return cache;
          };
          return cache;
        }
        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          }
          if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
            return { "default": obj };
          }
          var cache = _getRequireWildcardCache();
          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }
          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
          newObj["default"] = obj;
          if (cache) {
            cache.set(obj, newObj);
          }
          return newObj;
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof(obj);
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        function _createSuper(Derived) {
          return function() {
            var Super = _getPrototypeOf(Derived), result;
            if (_isNativeReflectConstruct()) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
          };
        }
        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }
          return _assertThisInitialized(self);
        }
        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self;
        }
        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy === "function")
            return true;
          try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            }));
            return true;
          } catch (e) {
            return false;
          }
        }
        function _getPrototypeOf(o2) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
            return o3.__proto__ || Object.getPrototypeOf(o3);
          };
          return _getPrototypeOf(o2);
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
          if (superClass)
            _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o2, p2) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
            o3.__proto__ = p3;
            return o3;
          };
          return _setPrototypeOf(o2, p2);
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        var SectionTitle2 = /* @__PURE__ */ function(_Component) {
          _inherits(SectionTitle3, _Component);
          var _super = _createSuper(SectionTitle3);
          function SectionTitle3() {
            _classCallCheck(this, SectionTitle3);
            return _super.apply(this, arguments);
          }
          _createClass(SectionTitle3, [{
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(nextProps) {
              return (0, _compareObjects["default"])(nextProps, this.props);
            }
          }, {
            key: "render",
            value: function render() {
              var _this$props = this.props, section = _this$props.section, renderSectionTitle = _this$props.renderSectionTitle, theme2 = _this$props.theme, sectionKeyPrefix = _this$props.sectionKeyPrefix;
              var sectionTitle = renderSectionTitle(section);
              if (!sectionTitle) {
                return null;
              }
              return /* @__PURE__ */ _react["default"].createElement("div", theme2("".concat(sectionKeyPrefix, "title"), "sectionTitle"), sectionTitle);
            }
          }]);
          return SectionTitle3;
        }(_react.Component);
        exports2["default"] = SectionTitle2;
        _defineProperty(SectionTitle2, "propTypes", {
          section: _propTypes["default"].any.isRequired,
          renderSectionTitle: _propTypes["default"].func.isRequired,
          theme: _propTypes["default"].func.isRequired,
          sectionKeyPrefix: _propTypes["default"].string.isRequired
        });
      })(SectionTitle);
      var ItemList = {};
      var Item = {};
      (function(exports2) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2["default"] = void 0;
        var _react = _interopRequireWildcard(require$$0);
        var _propTypes = _interopRequireDefault(propTypesExports);
        var _compareObjects = _interopRequireDefault(compareObjects);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        function _getRequireWildcardCache() {
          if (typeof WeakMap !== "function")
            return null;
          var cache = /* @__PURE__ */ new WeakMap();
          _getRequireWildcardCache = function _getRequireWildcardCache2() {
            return cache;
          };
          return cache;
        }
        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          }
          if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
            return { "default": obj };
          }
          var cache = _getRequireWildcardCache();
          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }
          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
          newObj["default"] = obj;
          if (cache) {
            cache.set(obj, newObj);
          }
          return newObj;
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof(obj);
        }
        function _extends() {
          _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends.apply(this, arguments);
        }
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
        function _objectWithoutProperties(source, excluded) {
          if (source == null)
            return {};
          var target = _objectWithoutPropertiesLoose(source, excluded);
          var key, i;
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0)
                continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key))
                continue;
              target[key] = source[key];
            }
          }
          return target;
        }
        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null)
            return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;
          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0)
              continue;
            target[key] = source[key];
          }
          return target;
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        function _createSuper(Derived) {
          return function() {
            var Super = _getPrototypeOf(Derived), result;
            if (_isNativeReflectConstruct()) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
          };
        }
        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }
          return _assertThisInitialized(self);
        }
        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self;
        }
        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy === "function")
            return true;
          try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            }));
            return true;
          } catch (e) {
            return false;
          }
        }
        function _getPrototypeOf(o2) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
            return o3.__proto__ || Object.getPrototypeOf(o3);
          };
          return _getPrototypeOf(o2);
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
          if (superClass)
            _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o2, p2) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
            o3.__proto__ = p3;
            return o3;
          };
          return _setPrototypeOf(o2, p2);
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        var Item2 = /* @__PURE__ */ function(_Component) {
          _inherits(Item3, _Component);
          var _super = _createSuper(Item3);
          function Item3() {
            var _this;
            _classCallCheck(this, Item3);
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            _defineProperty(_assertThisInitialized(_this), "storeItemReference", function(item) {
              if (item !== null) {
                _this.item = item;
              }
            });
            _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function(event) {
              var _this$props = _this.props, sectionIndex = _this$props.sectionIndex, itemIndex = _this$props.itemIndex;
              _this.props.onMouseEnter(event, {
                sectionIndex,
                itemIndex
              });
            });
            _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function(event) {
              var _this$props2 = _this.props, sectionIndex = _this$props2.sectionIndex, itemIndex = _this$props2.itemIndex;
              _this.props.onMouseLeave(event, {
                sectionIndex,
                itemIndex
              });
            });
            _defineProperty(_assertThisInitialized(_this), "onMouseDown", function(event) {
              var _this$props3 = _this.props, sectionIndex = _this$props3.sectionIndex, itemIndex = _this$props3.itemIndex;
              _this.props.onMouseDown(event, {
                sectionIndex,
                itemIndex
              });
            });
            _defineProperty(_assertThisInitialized(_this), "onClick", function(event) {
              var _this$props4 = _this.props, sectionIndex = _this$props4.sectionIndex, itemIndex = _this$props4.itemIndex;
              _this.props.onClick(event, {
                sectionIndex,
                itemIndex
              });
            });
            return _this;
          }
          _createClass(Item3, [{
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(nextProps) {
              return (0, _compareObjects["default"])(nextProps, this.props, ["renderItemData"]);
            }
          }, {
            key: "render",
            value: function render() {
              var _this$props5 = this.props, isHighlighted = _this$props5.isHighlighted, item = _this$props5.item, renderItem = _this$props5.renderItem, renderItemData = _this$props5.renderItemData, restProps = _objectWithoutProperties(_this$props5, ["isHighlighted", "item", "renderItem", "renderItemData"]);
              delete restProps.sectionIndex;
              delete restProps.itemIndex;
              if (typeof restProps.onMouseEnter === "function") {
                restProps.onMouseEnter = this.onMouseEnter;
              }
              if (typeof restProps.onMouseLeave === "function") {
                restProps.onMouseLeave = this.onMouseLeave;
              }
              if (typeof restProps.onMouseDown === "function") {
                restProps.onMouseDown = this.onMouseDown;
              }
              if (typeof restProps.onClick === "function") {
                restProps.onClick = this.onClick;
              }
              return /* @__PURE__ */ _react["default"].createElement("li", _extends({
                role: "option"
              }, restProps, {
                ref: this.storeItemReference
              }), renderItem(item, _objectSpread({
                isHighlighted
              }, renderItemData)));
            }
          }]);
          return Item3;
        }(_react.Component);
        exports2["default"] = Item2;
        _defineProperty(Item2, "propTypes", {
          sectionIndex: _propTypes["default"].number,
          isHighlighted: _propTypes["default"].bool.isRequired,
          itemIndex: _propTypes["default"].number.isRequired,
          item: _propTypes["default"].any.isRequired,
          renderItem: _propTypes["default"].func.isRequired,
          renderItemData: _propTypes["default"].object.isRequired,
          onMouseEnter: _propTypes["default"].func,
          onMouseLeave: _propTypes["default"].func,
          onMouseDown: _propTypes["default"].func,
          onClick: _propTypes["default"].func
        });
      })(Item);
      (function(exports2) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2["default"] = void 0;
        var _react = _interopRequireWildcard(require$$0);
        var _propTypes = _interopRequireDefault(propTypesExports);
        var _Item = _interopRequireDefault(Item);
        var _compareObjects = _interopRequireDefault(compareObjects);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        function _getRequireWildcardCache() {
          if (typeof WeakMap !== "function")
            return null;
          var cache = /* @__PURE__ */ new WeakMap();
          _getRequireWildcardCache = function _getRequireWildcardCache2() {
            return cache;
          };
          return cache;
        }
        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          }
          if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
            return { "default": obj };
          }
          var cache = _getRequireWildcardCache();
          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }
          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
          newObj["default"] = obj;
          if (cache) {
            cache.set(obj, newObj);
          }
          return newObj;
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof(obj);
        }
        function _extends() {
          _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends.apply(this, arguments);
        }
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        function _createSuper(Derived) {
          return function() {
            var Super = _getPrototypeOf(Derived), result;
            if (_isNativeReflectConstruct()) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
          };
        }
        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }
          return _assertThisInitialized(self);
        }
        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self;
        }
        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy === "function")
            return true;
          try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            }));
            return true;
          } catch (e) {
            return false;
          }
        }
        function _getPrototypeOf(o2) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
            return o3.__proto__ || Object.getPrototypeOf(o3);
          };
          return _getPrototypeOf(o2);
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
          if (superClass)
            _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o2, p2) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
            o3.__proto__ = p3;
            return o3;
          };
          return _setPrototypeOf(o2, p2);
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        var ItemsList = /* @__PURE__ */ function(_Component) {
          _inherits(ItemsList2, _Component);
          var _super = _createSuper(ItemsList2);
          function ItemsList2() {
            var _this;
            _classCallCheck(this, ItemsList2);
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            _this = _super.call.apply(_super, [this].concat(args));
            _defineProperty(_assertThisInitialized(_this), "storeHighlightedItemReference", function(highlightedItem) {
              _this.props.onHighlightedItemChange(highlightedItem === null ? null : highlightedItem.item);
            });
            return _this;
          }
          _createClass(ItemsList2, [{
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(nextProps) {
              return (0, _compareObjects["default"])(nextProps, this.props, ["itemProps"]);
            }
          }, {
            key: "render",
            value: function render() {
              var _this2 = this;
              var _this$props = this.props, items = _this$props.items, itemProps = _this$props.itemProps, renderItem = _this$props.renderItem, renderItemData = _this$props.renderItemData, sectionIndex = _this$props.sectionIndex, highlightedItemIndex = _this$props.highlightedItemIndex, getItemId = _this$props.getItemId, theme2 = _this$props.theme, keyPrefix = _this$props.keyPrefix;
              var sectionPrefix = sectionIndex === null ? keyPrefix : "".concat(keyPrefix, "section-").concat(sectionIndex, "-");
              var isItemPropsFunction = typeof itemProps === "function";
              return /* @__PURE__ */ _react["default"].createElement("ul", _extends({
                role: "listbox"
              }, theme2("".concat(sectionPrefix, "items-list"), "itemsList")), items.map(function(item, itemIndex) {
                var isFirst = itemIndex === 0;
                var isHighlighted = itemIndex === highlightedItemIndex;
                var itemKey = "".concat(sectionPrefix, "item-").concat(itemIndex);
                var itemPropsObj = isItemPropsFunction ? itemProps({
                  sectionIndex,
                  itemIndex
                }) : itemProps;
                var allItemProps = _objectSpread({
                  id: getItemId(sectionIndex, itemIndex),
                  "aria-selected": isHighlighted
                }, theme2(itemKey, "item", isFirst && "itemFirst", isHighlighted && "itemHighlighted"), {}, itemPropsObj);
                if (isHighlighted) {
                  allItemProps.ref = _this2.storeHighlightedItemReference;
                }
                return /* @__PURE__ */ _react["default"].createElement(_Item["default"], _extends({}, allItemProps, {
                  sectionIndex,
                  isHighlighted,
                  itemIndex,
                  item,
                  renderItem,
                  renderItemData
                }));
              }));
            }
          }]);
          return ItemsList2;
        }(_react.Component);
        exports2["default"] = ItemsList;
        _defineProperty(ItemsList, "propTypes", {
          items: _propTypes["default"].array.isRequired,
          itemProps: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
          renderItem: _propTypes["default"].func.isRequired,
          renderItemData: _propTypes["default"].object.isRequired,
          sectionIndex: _propTypes["default"].number,
          highlightedItemIndex: _propTypes["default"].number,
          onHighlightedItemChange: _propTypes["default"].func.isRequired,
          getItemId: _propTypes["default"].func.isRequired,
          theme: _propTypes["default"].func.isRequired,
          keyPrefix: _propTypes["default"].string.isRequired
        });
        _defineProperty(ItemsList, "defaultProps", {
          sectionIndex: null
        });
      })(ItemList);
      (function(exports2) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2["default"] = void 0;
        var _react = _interopRequireWildcard(require$$0);
        var _propTypes = _interopRequireDefault(propTypesExports);
        var _sectionIterator = _interopRequireDefault(dist$2);
        var _reactThemeable = _interopRequireDefault(distExports);
        var _SectionTitle = _interopRequireDefault(SectionTitle);
        var _ItemList = _interopRequireDefault(ItemList);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        function _getRequireWildcardCache() {
          if (typeof WeakMap !== "function")
            return null;
          var cache = /* @__PURE__ */ new WeakMap();
          _getRequireWildcardCache = function _getRequireWildcardCache2() {
            return cache;
          };
          return cache;
        }
        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          }
          if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
            return { "default": obj };
          }
          var cache = _getRequireWildcardCache();
          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }
          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
          newObj["default"] = obj;
          if (cache) {
            cache.set(obj, newObj);
          }
          return newObj;
        }
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
        function _slicedToArray2(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(o2, minLen) {
          if (!o2)
            return;
          if (typeof o2 === "string")
            return _arrayLikeToArray(o2, minLen);
          var n = Object.prototype.toString.call(o2).slice(8, -1);
          if (n === "Object" && o2.constructor)
            n = o2.constructor.name;
          if (n === "Map" || n === "Set")
            return Array.from(n);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray(o2, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
        function _iterableToArrayLimit(arr, i) {
          if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
            return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = void 0;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof(obj);
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        function _createSuper(Derived) {
          return function() {
            var Super = _getPrototypeOf(Derived), result;
            if (_isNativeReflectConstruct()) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
          };
        }
        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }
          return _assertThisInitialized(self);
        }
        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self;
        }
        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy === "function")
            return true;
          try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            }));
            return true;
          } catch (e) {
            return false;
          }
        }
        function _getPrototypeOf(o2) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
            return o3.__proto__ || Object.getPrototypeOf(o3);
          };
          return _getPrototypeOf(o2);
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
          if (superClass)
            _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o2, p2) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
            o3.__proto__ = p3;
            return o3;
          };
          return _setPrototypeOf(o2, p2);
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        var emptyObject = {};
        var defaultRenderInputComponent = function defaultRenderInputComponent2(props) {
          return /* @__PURE__ */ _react["default"].createElement("input", props);
        };
        var defaultRenderItemsContainer = function defaultRenderItemsContainer2(_ref) {
          var containerProps = _ref.containerProps, children = _ref.children;
          return /* @__PURE__ */ _react["default"].createElement("div", containerProps, children);
        };
        var defaultTheme2 = {
          container: "react-autowhatever__container",
          containerOpen: "react-autowhatever__container--open",
          input: "react-autowhatever__input",
          inputOpen: "react-autowhatever__input--open",
          inputFocused: "react-autowhatever__input--focused",
          itemsContainer: "react-autowhatever__items-container",
          itemsContainerOpen: "react-autowhatever__items-container--open",
          itemsList: "react-autowhatever__items-list",
          item: "react-autowhatever__item",
          itemFirst: "react-autowhatever__item--first",
          itemHighlighted: "react-autowhatever__item--highlighted",
          sectionContainer: "react-autowhatever__section-container",
          sectionContainerFirst: "react-autowhatever__section-container--first",
          sectionTitle: "react-autowhatever__section-title"
        };
        var Autowhatever2 = /* @__PURE__ */ function(_Component) {
          _inherits(Autowhatever3, _Component);
          var _super = _createSuper(Autowhatever3);
          function Autowhatever3(props) {
            var _this;
            _classCallCheck(this, Autowhatever3);
            _this = _super.call(this, props);
            _defineProperty(_assertThisInitialized(_this), "storeInputReference", function(input) {
              if (input !== null) {
                _this.input = input;
              }
              var userRef = _this.props.inputProps.ref;
              if (userRef) {
                if (typeof userRef === "function") {
                  userRef(input);
                } else if (_typeof(userRef) === "object" && Object.prototype.hasOwnProperty.call(userRef, "current")) {
                  userRef.current = input;
                }
              }
            });
            _defineProperty(_assertThisInitialized(_this), "storeItemsContainerReference", function(itemsContainer) {
              if (itemsContainer !== null) {
                _this.itemsContainer = itemsContainer;
              }
            });
            _defineProperty(_assertThisInitialized(_this), "onHighlightedItemChange", function(highlightedItem) {
              _this.highlightedItem = highlightedItem;
            });
            _defineProperty(_assertThisInitialized(_this), "getItemId", function(sectionIndex, itemIndex) {
              if (itemIndex === null) {
                return null;
              }
              var id = _this.props.id;
              var section = sectionIndex === null ? "" : "section-".concat(sectionIndex);
              return "react-autowhatever-".concat(id, "-").concat(section, "-item-").concat(itemIndex);
            });
            _defineProperty(_assertThisInitialized(_this), "onFocus", function(event) {
              var inputProps = _this.props.inputProps;
              _this.setState({
                isInputFocused: true
              });
              inputProps.onFocus && inputProps.onFocus(event);
            });
            _defineProperty(_assertThisInitialized(_this), "onBlur", function(event) {
              var inputProps = _this.props.inputProps;
              _this.setState({
                isInputFocused: false
              });
              inputProps.onBlur && inputProps.onBlur(event);
            });
            _defineProperty(_assertThisInitialized(_this), "onKeyDown", function(event) {
              var _this$props = _this.props, inputProps = _this$props.inputProps, highlightedSectionIndex = _this$props.highlightedSectionIndex, highlightedItemIndex = _this$props.highlightedItemIndex;
              var keyCode = event.keyCode;
              switch (keyCode) {
                case 40:
                case 38: {
                  var nextPrev = keyCode === 40 ? "next" : "prev";
                  var _this$sectionIterator = _this.sectionIterator[nextPrev]([highlightedSectionIndex, highlightedItemIndex]), _this$sectionIterator2 = _slicedToArray2(_this$sectionIterator, 2), newHighlightedSectionIndex = _this$sectionIterator2[0], newHighlightedItemIndex = _this$sectionIterator2[1];
                  inputProps.onKeyDown(event, {
                    newHighlightedSectionIndex,
                    newHighlightedItemIndex
                  });
                  break;
                }
                default:
                  inputProps.onKeyDown(event, {
                    highlightedSectionIndex,
                    highlightedItemIndex
                  });
              }
            });
            _this.highlightedItem = null;
            _this.state = {
              isInputFocused: false
            };
            _this.setSectionsItems(props);
            _this.setSectionIterator(props);
            _this.setTheme(props);
            return _this;
          }
          _createClass(Autowhatever3, [{
            key: "componentDidMount",
            value: function componentDidMount() {
              this.ensureHighlightedItemIsVisible();
            }
            // eslint-disable-next-line camelcase, react/sort-comp
          }, {
            key: "UNSAFE_componentWillReceiveProps",
            value: function UNSAFE_componentWillReceiveProps(nextProps) {
              if (nextProps.items !== this.props.items) {
                this.setSectionsItems(nextProps);
              }
              if (nextProps.items !== this.props.items || nextProps.multiSection !== this.props.multiSection) {
                this.setSectionIterator(nextProps);
              }
              if (nextProps.theme !== this.props.theme) {
                this.setTheme(nextProps);
              }
            }
          }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
              this.ensureHighlightedItemIsVisible();
            }
          }, {
            key: "setSectionsItems",
            value: function setSectionsItems(props) {
              if (props.multiSection) {
                this.sectionsItems = props.items.map(function(section) {
                  return props.getSectionItems(section);
                });
                this.sectionsLengths = this.sectionsItems.map(function(items) {
                  return items.length;
                });
                this.allSectionsAreEmpty = this.sectionsLengths.every(function(itemsCount) {
                  return itemsCount === 0;
                });
              }
            }
          }, {
            key: "setSectionIterator",
            value: function setSectionIterator(props) {
              this.sectionIterator = (0, _sectionIterator["default"])({
                multiSection: props.multiSection,
                data: props.multiSection ? this.sectionsLengths : props.items.length
              });
            }
          }, {
            key: "setTheme",
            value: function setTheme(props) {
              this.theme = (0, _reactThemeable["default"])(props.theme);
            }
          }, {
            key: "renderSections",
            value: function renderSections() {
              var _this2 = this;
              if (this.allSectionsAreEmpty) {
                return null;
              }
              var theme2 = this.theme;
              var _this$props2 = this.props, id = _this$props2.id, items = _this$props2.items, renderItem = _this$props2.renderItem, renderItemData = _this$props2.renderItemData, renderSectionTitle = _this$props2.renderSectionTitle, highlightedSectionIndex = _this$props2.highlightedSectionIndex, highlightedItemIndex = _this$props2.highlightedItemIndex, itemProps = _this$props2.itemProps;
              return items.map(function(section, sectionIndex) {
                var keyPrefix = "react-autowhatever-".concat(id, "-");
                var sectionKeyPrefix = "".concat(keyPrefix, "section-").concat(sectionIndex, "-");
                var isFirstSection = sectionIndex === 0;
                return /* @__PURE__ */ _react["default"].createElement("div", theme2("".concat(sectionKeyPrefix, "container"), "sectionContainer", isFirstSection && "sectionContainerFirst"), /* @__PURE__ */ _react["default"].createElement(_SectionTitle["default"], {
                  section,
                  renderSectionTitle,
                  theme: theme2,
                  sectionKeyPrefix
                }), /* @__PURE__ */ _react["default"].createElement(_ItemList["default"], {
                  items: _this2.sectionsItems[sectionIndex],
                  itemProps,
                  renderItem,
                  renderItemData,
                  sectionIndex,
                  highlightedItemIndex: highlightedSectionIndex === sectionIndex ? highlightedItemIndex : null,
                  onHighlightedItemChange: _this2.onHighlightedItemChange,
                  getItemId: _this2.getItemId,
                  theme: theme2,
                  keyPrefix,
                  ref: _this2.storeItemsListReference
                }));
              });
            }
          }, {
            key: "renderItems",
            value: function renderItems() {
              var items = this.props.items;
              if (items.length === 0) {
                return null;
              }
              var theme2 = this.theme;
              var _this$props3 = this.props, id = _this$props3.id, renderItem = _this$props3.renderItem, renderItemData = _this$props3.renderItemData, highlightedSectionIndex = _this$props3.highlightedSectionIndex, highlightedItemIndex = _this$props3.highlightedItemIndex, itemProps = _this$props3.itemProps;
              return /* @__PURE__ */ _react["default"].createElement(_ItemList["default"], {
                items,
                itemProps,
                renderItem,
                renderItemData,
                highlightedItemIndex: highlightedSectionIndex === null ? highlightedItemIndex : null,
                onHighlightedItemChange: this.onHighlightedItemChange,
                getItemId: this.getItemId,
                theme: theme2,
                keyPrefix: "react-autowhatever-".concat(id, "-")
              });
            }
          }, {
            key: "ensureHighlightedItemIsVisible",
            value: function ensureHighlightedItemIsVisible() {
              var highlightedItem = this.highlightedItem;
              if (!highlightedItem) {
                return;
              }
              var itemsContainer = this.itemsContainer;
              var itemOffsetRelativeToContainer = highlightedItem.offsetParent === itemsContainer ? highlightedItem.offsetTop : highlightedItem.offsetTop - itemsContainer.offsetTop;
              var scrollTop = itemsContainer.scrollTop;
              if (itemOffsetRelativeToContainer < scrollTop) {
                scrollTop = itemOffsetRelativeToContainer;
              } else if (itemOffsetRelativeToContainer + highlightedItem.offsetHeight > scrollTop + itemsContainer.offsetHeight) {
                scrollTop = itemOffsetRelativeToContainer + highlightedItem.offsetHeight - itemsContainer.offsetHeight;
              }
              if (scrollTop !== itemsContainer.scrollTop) {
                itemsContainer.scrollTop = scrollTop;
              }
            }
          }, {
            key: "render",
            value: function render() {
              var theme2 = this.theme;
              var _this$props4 = this.props, id = _this$props4.id, multiSection = _this$props4.multiSection, renderInputComponent = _this$props4.renderInputComponent, renderItemsContainer = _this$props4.renderItemsContainer, highlightedSectionIndex = _this$props4.highlightedSectionIndex, highlightedItemIndex = _this$props4.highlightedItemIndex;
              var isInputFocused = this.state.isInputFocused;
              var renderedItems = multiSection ? this.renderSections() : this.renderItems();
              var isOpen = renderedItems !== null;
              var ariaActivedescendant = this.getItemId(highlightedSectionIndex, highlightedItemIndex);
              var itemsContainerId = "react-autowhatever-".concat(id);
              var containerProps = _objectSpread({
                role: "combobox",
                "aria-haspopup": "listbox",
                "aria-owns": itemsContainerId,
                "aria-expanded": isOpen
              }, theme2("react-autowhatever-".concat(id, "-container"), "container", isOpen && "containerOpen"), {}, this.props.containerProps);
              var inputComponent = renderInputComponent(_objectSpread({
                type: "text",
                value: "",
                autoComplete: "off",
                "aria-autocomplete": "list",
                "aria-controls": itemsContainerId,
                "aria-activedescendant": ariaActivedescendant
              }, theme2("react-autowhatever-".concat(id, "-input"), "input", isOpen && "inputOpen", isInputFocused && "inputFocused"), {}, this.props.inputProps, {
                onFocus: this.onFocus,
                onBlur: this.onBlur,
                onKeyDown: this.props.inputProps.onKeyDown && this.onKeyDown,
                ref: this.storeInputReference
              }));
              var itemsContainer = renderItemsContainer({
                containerProps: _objectSpread({
                  id: itemsContainerId,
                  role: "listbox"
                }, theme2("react-autowhatever-".concat(id, "-items-container"), "itemsContainer", isOpen && "itemsContainerOpen"), {
                  ref: this.storeItemsContainerReference
                }),
                children: renderedItems
              });
              return /* @__PURE__ */ _react["default"].createElement("div", containerProps, inputComponent, itemsContainer);
            }
          }]);
          return Autowhatever3;
        }(_react.Component);
        exports2["default"] = Autowhatever2;
        _defineProperty(Autowhatever2, "propTypes", {
          id: _propTypes["default"].string,
          // Used in aria-* attributes. If multiple Autowhatever's are rendered on a page, they must have unique ids.
          multiSection: _propTypes["default"].bool,
          // Indicates whether a multi section layout should be rendered.
          renderInputComponent: _propTypes["default"].func,
          // When specified, it is used to render the input element.
          renderItemsContainer: _propTypes["default"].func,
          // Renders the items container.
          items: _propTypes["default"].array.isRequired,
          // Array of items or sections to render.
          renderItem: _propTypes["default"].func,
          // This function renders a single item.
          renderItemData: _propTypes["default"].object,
          // Arbitrary data that will be passed to renderItem()
          renderSectionTitle: _propTypes["default"].func,
          // This function gets a section and renders its title.
          getSectionItems: _propTypes["default"].func,
          // This function gets a section and returns its items, which will be passed into `renderItem` for rendering.
          containerProps: _propTypes["default"].object,
          // Arbitrary container props
          inputProps: _propTypes["default"].object,
          // Arbitrary input props
          itemProps: _propTypes["default"].oneOfType([
            // Arbitrary item props
            _propTypes["default"].object,
            _propTypes["default"].func
          ]),
          highlightedSectionIndex: _propTypes["default"].number,
          // Section index of the highlighted item
          highlightedItemIndex: _propTypes["default"].number,
          // Highlighted item index (within a section)
          theme: _propTypes["default"].oneOfType([
            // Styles. See: https://github.com/markdalgleish/react-themeable
            _propTypes["default"].object,
            _propTypes["default"].array
          ])
        });
        _defineProperty(Autowhatever2, "defaultProps", {
          id: "1",
          multiSection: false,
          renderInputComponent: defaultRenderInputComponent,
          renderItemsContainer: defaultRenderItemsContainer,
          renderItem: function renderItem() {
            throw new Error("`renderItem` must be provided");
          },
          renderItemData: emptyObject,
          renderSectionTitle: function renderSectionTitle() {
            throw new Error("`renderSectionTitle` must be provided");
          },
          getSectionItems: function getSectionItems() {
            throw new Error("`getSectionItems` must be provided");
          },
          containerProps: emptyObject,
          inputProps: emptyObject,
          itemProps: emptyObject,
          highlightedSectionIndex: null,
          highlightedItemIndex: null,
          theme: defaultTheme2
        });
      })(Autowhatever);
      var theme = {};
      Object.defineProperty(theme, "__esModule", {
        value: true
      });
      theme.mapToAutowhateverTheme = theme.defaultTheme = void 0;
      var defaultTheme = {
        container: "react-autosuggest__container",
        containerOpen: "react-autosuggest__container--open",
        input: "react-autosuggest__input",
        inputOpen: "react-autosuggest__input--open",
        inputFocused: "react-autosuggest__input--focused",
        suggestionsContainer: "react-autosuggest__suggestions-container",
        suggestionsContainerOpen: "react-autosuggest__suggestions-container--open",
        suggestionsList: "react-autosuggest__suggestions-list",
        suggestion: "react-autosuggest__suggestion",
        suggestionFirst: "react-autosuggest__suggestion--first",
        suggestionHighlighted: "react-autosuggest__suggestion--highlighted",
        sectionContainer: "react-autosuggest__section-container",
        sectionContainerFirst: "react-autosuggest__section-container--first",
        sectionTitle: "react-autosuggest__section-title"
      };
      theme.defaultTheme = defaultTheme;
      var mapToAutowhateverTheme = function mapToAutowhateverTheme2(theme2) {
        var result = {};
        for (var key in theme2) {
          switch (key) {
            case "suggestionsContainer":
              result["itemsContainer"] = theme2[key];
              break;
            case "suggestionsContainerOpen":
              result["itemsContainerOpen"] = theme2[key];
              break;
            case "suggestion":
              result["item"] = theme2[key];
              break;
            case "suggestionFirst":
              result["itemFirst"] = theme2[key];
              break;
            case "suggestionHighlighted":
              result["itemHighlighted"] = theme2[key];
              break;
            case "suggestionsList":
              result["itemsList"] = theme2[key];
              break;
            default:
              result[key] = theme2[key];
          }
        }
        return result;
      };
      theme.mapToAutowhateverTheme = mapToAutowhateverTheme;
      (function(exports2) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2["default"] = void 0;
        var _react = _interopRequireWildcard(require$$0);
        var _propTypes = _interopRequireDefault(propTypesExports);
        var _arrays = _interopRequireDefault(arrays);
        var _Autowhatever = _interopRequireDefault(Autowhatever);
        var _theme = theme;
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        function _getRequireWildcardCache() {
          if (typeof WeakMap !== "function")
            return null;
          var cache = /* @__PURE__ */ new WeakMap();
          _getRequireWildcardCache = function _getRequireWildcardCache2() {
            return cache;
          };
          return cache;
        }
        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          }
          if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
            return { "default": obj };
          }
          var cache = _getRequireWildcardCache();
          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }
          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
          newObj["default"] = obj;
          if (cache) {
            cache.set(obj, newObj);
          }
          return newObj;
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof(obj);
        }
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        function _createSuper(Derived) {
          return function() {
            var Super = _getPrototypeOf(Derived), result;
            if (_isNativeReflectConstruct()) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
          };
        }
        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }
          return _assertThisInitialized(self);
        }
        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self;
        }
        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy === "function")
            return true;
          try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            }));
            return true;
          } catch (e) {
            return false;
          }
        }
        function _getPrototypeOf(o2) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
            return o3.__proto__ || Object.getPrototypeOf(o3);
          };
          return _getPrototypeOf(o2);
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
          if (superClass)
            _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o2, p2) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
            o3.__proto__ = p3;
            return o3;
          };
          return _setPrototypeOf(o2, p2);
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        var alwaysTrue = function alwaysTrue2() {
          return true;
        };
        var defaultShouldRenderSuggestions = function defaultShouldRenderSuggestions2(value) {
          return value.trim().length > 0;
        };
        var defaultRenderSuggestionsContainer = function defaultRenderSuggestionsContainer2(_ref) {
          var containerProps = _ref.containerProps, children = _ref.children;
          return /* @__PURE__ */ _react["default"].createElement("div", containerProps, children);
        };
        var REASON_SUGGESTIONS_REVEALED = "suggestions-revealed";
        var REASON_SUGGESTIONS_UPDATED = "suggestions-updated";
        var REASON_SUGGESTION_SELECTED = "suggestion-selected";
        var REASON_INPUT_FOCUSED = "input-focused";
        var REASON_INPUT_CHANGED = "input-changed";
        var REASON_INPUT_BLURRED = "input-blurred";
        var REASON_ESCAPE_PRESSED = "escape-pressed";
        var Autosuggest2 = /* @__PURE__ */ function(_Component) {
          _inherits(Autosuggest3, _Component);
          var _super = _createSuper(Autosuggest3);
          function Autosuggest3(_ref2) {
            var _this;
            var _alwaysRenderSuggestions = _ref2.alwaysRenderSuggestions;
            _classCallCheck(this, Autosuggest3);
            _this = _super.call(this);
            _defineProperty(_assertThisInitialized(_this), "onDocumentMouseDown", function(event) {
              _this.justClickedOnSuggestionsContainer = false;
              var node = event.detail && event.detail.target || // This is for testing only. Please show me a better way to emulate this.
              event.target;
              while (node !== null && node !== document) {
                if (node.getAttribute && node.getAttribute("data-suggestion-index") !== null) {
                  return;
                }
                if (node === _this.suggestionsContainer) {
                  _this.justClickedOnSuggestionsContainer = true;
                  return;
                }
                node = node.parentNode;
              }
            });
            _defineProperty(_assertThisInitialized(_this), "storeAutowhateverRef", function(autowhatever) {
              if (autowhatever !== null) {
                _this.autowhatever = autowhatever;
              }
            });
            _defineProperty(_assertThisInitialized(_this), "onSuggestionMouseEnter", function(event, _ref3) {
              var sectionIndex = _ref3.sectionIndex, itemIndex = _ref3.itemIndex;
              _this.updateHighlightedSuggestion(sectionIndex, itemIndex);
              if (event.target === _this.pressedSuggestion) {
                _this.justSelectedSuggestion = true;
              }
              _this.justMouseEntered = true;
              setTimeout(function() {
                _this.justMouseEntered = false;
              });
            });
            _defineProperty(_assertThisInitialized(_this), "highlightFirstSuggestion", function() {
              _this.updateHighlightedSuggestion(_this.props.multiSection ? 0 : null, 0);
            });
            _defineProperty(_assertThisInitialized(_this), "onDocumentMouseUp", function() {
              if (_this.pressedSuggestion && !_this.justSelectedSuggestion) {
                _this.input.focus();
              }
              _this.pressedSuggestion = null;
            });
            _defineProperty(_assertThisInitialized(_this), "onSuggestionMouseDown", function(event) {
              if (!_this.justSelectedSuggestion) {
                _this.justSelectedSuggestion = true;
                _this.pressedSuggestion = event.target;
              }
            });
            _defineProperty(_assertThisInitialized(_this), "onSuggestionsClearRequested", function() {
              var onSuggestionsClearRequested = _this.props.onSuggestionsClearRequested;
              onSuggestionsClearRequested && onSuggestionsClearRequested();
            });
            _defineProperty(_assertThisInitialized(_this), "onSuggestionSelected", function(event, data) {
              var _this$props = _this.props, alwaysRenderSuggestions = _this$props.alwaysRenderSuggestions, onSuggestionSelected = _this$props.onSuggestionSelected, onSuggestionsFetchRequested = _this$props.onSuggestionsFetchRequested;
              onSuggestionSelected && onSuggestionSelected(event, data);
              var keepSuggestionsOnSelect = _this.props.shouldKeepSuggestionsOnSelect(data.suggestion);
              if (alwaysRenderSuggestions || keepSuggestionsOnSelect) {
                onSuggestionsFetchRequested({
                  value: data.suggestionValue,
                  reason: REASON_SUGGESTION_SELECTED
                });
              } else {
                _this.onSuggestionsClearRequested();
              }
              _this.resetHighlightedSuggestion();
            });
            _defineProperty(_assertThisInitialized(_this), "onSuggestionClick", function(event) {
              var _this$props2 = _this.props, alwaysRenderSuggestions = _this$props2.alwaysRenderSuggestions, focusInputOnSuggestionClick = _this$props2.focusInputOnSuggestionClick;
              var _this$getSuggestionIn = _this.getSuggestionIndices(_this.findSuggestionElement(event.target)), sectionIndex = _this$getSuggestionIn.sectionIndex, suggestionIndex = _this$getSuggestionIn.suggestionIndex;
              var clickedSuggestion = _this.getSuggestion(sectionIndex, suggestionIndex);
              var clickedSuggestionValue = _this.props.getSuggestionValue(clickedSuggestion);
              _this.maybeCallOnChange(event, clickedSuggestionValue, "click");
              _this.onSuggestionSelected(event, {
                suggestion: clickedSuggestion,
                suggestionValue: clickedSuggestionValue,
                suggestionIndex,
                sectionIndex,
                method: "click"
              });
              var keepSuggestionsOnSelect = _this.props.shouldKeepSuggestionsOnSelect(clickedSuggestion);
              if (!(alwaysRenderSuggestions || keepSuggestionsOnSelect)) {
                _this.closeSuggestions();
              }
              if (focusInputOnSuggestionClick === true) {
                _this.input.focus();
              } else {
                _this.onBlur();
              }
              setTimeout(function() {
                _this.justSelectedSuggestion = false;
              });
            });
            _defineProperty(_assertThisInitialized(_this), "onBlur", function() {
              var _this$props3 = _this.props, inputProps = _this$props3.inputProps, shouldRenderSuggestions = _this$props3.shouldRenderSuggestions;
              var value = inputProps.value, onBlur = inputProps.onBlur;
              var highlightedSuggestion = _this.getHighlightedSuggestion();
              var shouldRender = shouldRenderSuggestions(value, REASON_INPUT_BLURRED);
              _this.setState({
                isFocused: false,
                highlightedSectionIndex: null,
                highlightedSuggestionIndex: null,
                highlightedSuggestion: null,
                valueBeforeUpDown: null,
                isCollapsed: !shouldRender
              });
              onBlur && onBlur(_this.blurEvent, {
                highlightedSuggestion
              });
            });
            _defineProperty(_assertThisInitialized(_this), "onSuggestionMouseLeave", function(event) {
              _this.resetHighlightedSuggestion(false);
              if (_this.justSelectedSuggestion && event.target === _this.pressedSuggestion) {
                _this.justSelectedSuggestion = false;
              }
            });
            _defineProperty(_assertThisInitialized(_this), "onSuggestionTouchStart", function() {
              _this.justSelectedSuggestion = true;
            });
            _defineProperty(_assertThisInitialized(_this), "onSuggestionTouchMove", function() {
              _this.justSelectedSuggestion = false;
              _this.pressedSuggestion = null;
              _this.input.focus();
            });
            _defineProperty(_assertThisInitialized(_this), "itemProps", function(_ref4) {
              var sectionIndex = _ref4.sectionIndex, itemIndex = _ref4.itemIndex;
              return {
                "data-section-index": sectionIndex,
                "data-suggestion-index": itemIndex,
                onMouseEnter: _this.onSuggestionMouseEnter,
                onMouseLeave: _this.onSuggestionMouseLeave,
                onMouseDown: _this.onSuggestionMouseDown,
                onTouchStart: _this.onSuggestionTouchStart,
                onTouchMove: _this.onSuggestionTouchMove,
                onClick: _this.onSuggestionClick
              };
            });
            _defineProperty(_assertThisInitialized(_this), "renderSuggestionsContainer", function(_ref5) {
              var containerProps = _ref5.containerProps, children = _ref5.children;
              var renderSuggestionsContainer = _this.props.renderSuggestionsContainer;
              return renderSuggestionsContainer({
                containerProps,
                children,
                query: _this.getQuery()
              });
            });
            _this.state = {
              isFocused: false,
              isCollapsed: !_alwaysRenderSuggestions,
              highlightedSectionIndex: null,
              highlightedSuggestionIndex: null,
              highlightedSuggestion: null,
              valueBeforeUpDown: null
            };
            _this.justPressedUpDown = false;
            _this.justMouseEntered = false;
            _this.pressedSuggestion = null;
            return _this;
          }
          _createClass(Autosuggest3, [{
            key: "componentDidMount",
            value: function componentDidMount() {
              document.addEventListener("mousedown", this.onDocumentMouseDown);
              document.addEventListener("mouseup", this.onDocumentMouseUp);
              this.input = this.autowhatever.input;
              this.suggestionsContainer = this.autowhatever.itemsContainer;
            }
            // eslint-disable-next-line camelcase, react/sort-comp
          }, {
            key: "UNSAFE_componentWillReceiveProps",
            value: function UNSAFE_componentWillReceiveProps(nextProps) {
              var shouldResetHighlighting = this.state.highlightedSuggestionIndex === 0 && this.props.highlightFirstSuggestion && !nextProps.highlightFirstSuggestion;
              if ((0, _arrays["default"])(nextProps.suggestions, this.props.suggestions)) {
                if (nextProps.highlightFirstSuggestion && nextProps.suggestions.length > 0 && this.justPressedUpDown === false && this.justMouseEntered === false) {
                  this.highlightFirstSuggestion();
                } else if (shouldResetHighlighting) {
                  this.resetHighlightedSuggestion();
                }
              } else {
                if (this.willRenderSuggestions(nextProps, REASON_SUGGESTIONS_UPDATED)) {
                  if (this.state.isCollapsed && !this.justSelectedSuggestion) {
                    this.revealSuggestions();
                  }
                  if (shouldResetHighlighting) {
                    this.resetHighlightedSuggestion();
                  }
                } else {
                  this.resetHighlightedSuggestion();
                }
              }
            }
          }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps, prevState) {
              var _this$props4 = this.props, suggestions = _this$props4.suggestions, onSuggestionHighlighted = _this$props4.onSuggestionHighlighted, highlightFirstSuggestion = _this$props4.highlightFirstSuggestion;
              if (!(0, _arrays["default"])(suggestions, prevProps.suggestions) && suggestions.length > 0 && highlightFirstSuggestion) {
                this.highlightFirstSuggestion();
                return;
              }
              if (onSuggestionHighlighted) {
                var highlightedSuggestion = this.getHighlightedSuggestion();
                var prevHighlightedSuggestion = prevState.highlightedSuggestion;
                if (highlightedSuggestion != prevHighlightedSuggestion) {
                  onSuggestionHighlighted({
                    suggestion: highlightedSuggestion
                  });
                }
              }
            }
          }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
              document.removeEventListener("mousedown", this.onDocumentMouseDown);
              document.removeEventListener("mouseup", this.onDocumentMouseUp);
            }
          }, {
            key: "updateHighlightedSuggestion",
            value: function updateHighlightedSuggestion(sectionIndex, suggestionIndex, prevValue) {
              var _this2 = this;
              this.setState(function(state) {
                var valueBeforeUpDown = state.valueBeforeUpDown;
                if (suggestionIndex === null) {
                  valueBeforeUpDown = null;
                } else if (valueBeforeUpDown === null && typeof prevValue !== "undefined") {
                  valueBeforeUpDown = prevValue;
                }
                return {
                  highlightedSectionIndex: sectionIndex,
                  highlightedSuggestionIndex: suggestionIndex,
                  highlightedSuggestion: suggestionIndex === null ? null : _this2.getSuggestion(sectionIndex, suggestionIndex),
                  valueBeforeUpDown
                };
              });
            }
          }, {
            key: "resetHighlightedSuggestion",
            value: function resetHighlightedSuggestion() {
              var shouldResetValueBeforeUpDown = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
              this.setState(function(state) {
                var valueBeforeUpDown = state.valueBeforeUpDown;
                return {
                  highlightedSectionIndex: null,
                  highlightedSuggestionIndex: null,
                  highlightedSuggestion: null,
                  valueBeforeUpDown: shouldResetValueBeforeUpDown ? null : valueBeforeUpDown
                };
              });
            }
          }, {
            key: "revealSuggestions",
            value: function revealSuggestions() {
              this.setState({
                isCollapsed: false
              });
            }
          }, {
            key: "closeSuggestions",
            value: function closeSuggestions() {
              this.setState({
                highlightedSectionIndex: null,
                highlightedSuggestionIndex: null,
                highlightedSuggestion: null,
                valueBeforeUpDown: null,
                isCollapsed: true
              });
            }
          }, {
            key: "getSuggestion",
            value: function getSuggestion(sectionIndex, suggestionIndex) {
              var _this$props5 = this.props, suggestions = _this$props5.suggestions, multiSection = _this$props5.multiSection, getSectionSuggestions = _this$props5.getSectionSuggestions;
              if (multiSection) {
                return getSectionSuggestions(suggestions[sectionIndex])[suggestionIndex];
              }
              return suggestions[suggestionIndex];
            }
          }, {
            key: "getHighlightedSuggestion",
            value: function getHighlightedSuggestion() {
              var _this$state = this.state, highlightedSectionIndex = _this$state.highlightedSectionIndex, highlightedSuggestionIndex = _this$state.highlightedSuggestionIndex;
              if (highlightedSuggestionIndex === null) {
                return null;
              }
              return this.getSuggestion(highlightedSectionIndex, highlightedSuggestionIndex);
            }
          }, {
            key: "getSuggestionValueByIndex",
            value: function getSuggestionValueByIndex(sectionIndex, suggestionIndex) {
              var getSuggestionValue = this.props.getSuggestionValue;
              return getSuggestionValue(this.getSuggestion(sectionIndex, suggestionIndex));
            }
          }, {
            key: "getSuggestionIndices",
            value: function getSuggestionIndices(suggestionElement) {
              var sectionIndex = suggestionElement.getAttribute("data-section-index");
              var suggestionIndex = suggestionElement.getAttribute("data-suggestion-index");
              return {
                sectionIndex: typeof sectionIndex === "string" ? parseInt(sectionIndex, 10) : null,
                suggestionIndex: parseInt(suggestionIndex, 10)
              };
            }
          }, {
            key: "findSuggestionElement",
            value: function findSuggestionElement(startNode) {
              var node = startNode;
              do {
                if (node.getAttribute && node.getAttribute("data-suggestion-index") !== null) {
                  return node;
                }
                node = node.parentNode;
              } while (node !== null);
              console.error("Clicked element:", startNode);
              throw new Error("Couldn't find suggestion element");
            }
          }, {
            key: "maybeCallOnChange",
            value: function maybeCallOnChange(event, newValue, method) {
              var _this$props$inputProp = this.props.inputProps, value = _this$props$inputProp.value, onChange = _this$props$inputProp.onChange;
              if (newValue !== value) {
                onChange(event, {
                  newValue,
                  method
                });
              }
            }
          }, {
            key: "willRenderSuggestions",
            value: function willRenderSuggestions(props, reason) {
              var suggestions = props.suggestions, inputProps = props.inputProps, shouldRenderSuggestions = props.shouldRenderSuggestions;
              var value = inputProps.value;
              return suggestions.length > 0 && shouldRenderSuggestions(value, reason);
            }
          }, {
            key: "getQuery",
            value: function getQuery() {
              var inputProps = this.props.inputProps;
              var value = inputProps.value;
              var valueBeforeUpDown = this.state.valueBeforeUpDown;
              return (valueBeforeUpDown === null ? value : valueBeforeUpDown).trim();
            }
          }, {
            key: "render",
            value: function render() {
              var _this3 = this;
              var _this$props6 = this.props, suggestions = _this$props6.suggestions, renderInputComponent = _this$props6.renderInputComponent, onSuggestionsFetchRequested = _this$props6.onSuggestionsFetchRequested, renderSuggestion = _this$props6.renderSuggestion, inputProps = _this$props6.inputProps, multiSection = _this$props6.multiSection, renderSectionTitle = _this$props6.renderSectionTitle, id = _this$props6.id, getSectionSuggestions = _this$props6.getSectionSuggestions, theme2 = _this$props6.theme, getSuggestionValue = _this$props6.getSuggestionValue, alwaysRenderSuggestions = _this$props6.alwaysRenderSuggestions, highlightFirstSuggestion = _this$props6.highlightFirstSuggestion, containerProps = _this$props6.containerProps;
              var _this$state2 = this.state, isFocused = _this$state2.isFocused, isCollapsed = _this$state2.isCollapsed, highlightedSectionIndex = _this$state2.highlightedSectionIndex, highlightedSuggestionIndex = _this$state2.highlightedSuggestionIndex, valueBeforeUpDown = _this$state2.valueBeforeUpDown;
              var shouldRenderSuggestions = alwaysRenderSuggestions ? alwaysTrue : this.props.shouldRenderSuggestions;
              var value = inputProps.value, _onFocus = inputProps.onFocus, _onKeyDown = inputProps.onKeyDown;
              var willRenderSuggestions = this.willRenderSuggestions(this.props, "render");
              var isOpen = alwaysRenderSuggestions || isFocused && !isCollapsed && willRenderSuggestions;
              var items = isOpen ? suggestions : [];
              var autowhateverInputProps = _objectSpread({}, inputProps, {
                onFocus: function onFocus(event) {
                  if (!_this3.justSelectedSuggestion && !_this3.justClickedOnSuggestionsContainer) {
                    var shouldRender = shouldRenderSuggestions(value, REASON_INPUT_FOCUSED);
                    _this3.setState({
                      isFocused: true,
                      isCollapsed: !shouldRender
                    });
                    _onFocus && _onFocus(event);
                    if (shouldRender) {
                      onSuggestionsFetchRequested({
                        value,
                        reason: REASON_INPUT_FOCUSED
                      });
                    }
                  }
                },
                onBlur: function onBlur(event) {
                  if (_this3.justClickedOnSuggestionsContainer) {
                    _this3.input.focus();
                    return;
                  }
                  _this3.blurEvent = event;
                  if (!_this3.justSelectedSuggestion) {
                    _this3.onBlur();
                    _this3.onSuggestionsClearRequested();
                  }
                },
                onChange: function onChange(event) {
                  var value2 = event.target.value;
                  var shouldRender = shouldRenderSuggestions(value2, REASON_INPUT_CHANGED);
                  _this3.maybeCallOnChange(event, value2, "type");
                  if (_this3.suggestionsContainer) {
                    _this3.suggestionsContainer.scrollTop = 0;
                  }
                  _this3.setState(_objectSpread({}, highlightFirstSuggestion ? {} : {
                    highlightedSectionIndex: null,
                    highlightedSuggestionIndex: null,
                    highlightedSuggestion: null
                  }, {
                    valueBeforeUpDown: null,
                    isCollapsed: !shouldRender
                  }));
                  if (shouldRender) {
                    onSuggestionsFetchRequested({
                      value: value2,
                      reason: REASON_INPUT_CHANGED
                    });
                  } else {
                    _this3.onSuggestionsClearRequested();
                  }
                },
                onKeyDown: function onKeyDown(event, data) {
                  var keyCode = event.keyCode;
                  switch (keyCode) {
                    case 40:
                    case 38:
                      if (isCollapsed) {
                        if (shouldRenderSuggestions(value, REASON_SUGGESTIONS_REVEALED)) {
                          onSuggestionsFetchRequested({
                            value,
                            reason: REASON_SUGGESTIONS_REVEALED
                          });
                          _this3.revealSuggestions();
                          event.preventDefault();
                        }
                      } else if (suggestions.length > 0) {
                        var newHighlightedSectionIndex = data.newHighlightedSectionIndex, newHighlightedItemIndex = data.newHighlightedItemIndex;
                        var newValue;
                        if (newHighlightedItemIndex === null) {
                          newValue = valueBeforeUpDown === null ? value : valueBeforeUpDown;
                        } else {
                          newValue = _this3.getSuggestionValueByIndex(newHighlightedSectionIndex, newHighlightedItemIndex);
                        }
                        _this3.updateHighlightedSuggestion(newHighlightedSectionIndex, newHighlightedItemIndex, value);
                        _this3.maybeCallOnChange(event, newValue, keyCode === 40 ? "down" : "up");
                        event.preventDefault();
                      }
                      _this3.justPressedUpDown = true;
                      setTimeout(function() {
                        _this3.justPressedUpDown = false;
                      });
                      break;
                    case 13: {
                      if (event.keyCode === 229) {
                        break;
                      }
                      var highlightedSuggestion = _this3.getHighlightedSuggestion();
                      if (isOpen && !alwaysRenderSuggestions) {
                        _this3.closeSuggestions();
                      }
                      if (highlightedSuggestion != null) {
                        event.preventDefault();
                        var _newValue = getSuggestionValue(highlightedSuggestion);
                        _this3.maybeCallOnChange(event, _newValue, "enter");
                        _this3.onSuggestionSelected(event, {
                          suggestion: highlightedSuggestion,
                          suggestionValue: _newValue,
                          suggestionIndex: highlightedSuggestionIndex,
                          sectionIndex: highlightedSectionIndex,
                          method: "enter"
                        });
                        _this3.justSelectedSuggestion = true;
                        setTimeout(function() {
                          _this3.justSelectedSuggestion = false;
                        });
                      }
                      break;
                    }
                    case 27: {
                      if (isOpen) {
                        event.preventDefault();
                      }
                      var willCloseSuggestions = isOpen && !alwaysRenderSuggestions;
                      if (valueBeforeUpDown === null) {
                        if (!willCloseSuggestions) {
                          var _newValue2 = "";
                          _this3.maybeCallOnChange(event, _newValue2, "escape");
                          if (shouldRenderSuggestions(_newValue2, REASON_ESCAPE_PRESSED)) {
                            onSuggestionsFetchRequested({
                              value: _newValue2,
                              reason: REASON_ESCAPE_PRESSED
                            });
                          } else {
                            _this3.onSuggestionsClearRequested();
                          }
                        }
                      } else {
                        _this3.maybeCallOnChange(event, valueBeforeUpDown, "escape");
                      }
                      if (willCloseSuggestions) {
                        _this3.onSuggestionsClearRequested();
                        _this3.closeSuggestions();
                      } else {
                        _this3.resetHighlightedSuggestion();
                      }
                      break;
                    }
                  }
                  _onKeyDown && _onKeyDown(event);
                }
              });
              var renderSuggestionData = {
                query: this.getQuery()
              };
              return /* @__PURE__ */ _react["default"].createElement(_Autowhatever["default"], {
                multiSection,
                items,
                renderInputComponent,
                renderItemsContainer: this.renderSuggestionsContainer,
                renderItem: renderSuggestion,
                renderItemData: renderSuggestionData,
                renderSectionTitle,
                getSectionItems: getSectionSuggestions,
                highlightedSectionIndex,
                highlightedItemIndex: highlightedSuggestionIndex,
                containerProps,
                inputProps: autowhateverInputProps,
                itemProps: this.itemProps,
                theme: (0, _theme.mapToAutowhateverTheme)(theme2),
                id,
                ref: this.storeAutowhateverRef
              });
            }
          }]);
          return Autosuggest3;
        }(_react.Component);
        exports2["default"] = Autosuggest2;
        _defineProperty(Autosuggest2, "propTypes", {
          suggestions: _propTypes["default"].array.isRequired,
          onSuggestionsFetchRequested: function onSuggestionsFetchRequested(props, propName) {
            var onSuggestionsFetchRequested2 = props[propName];
            if (typeof onSuggestionsFetchRequested2 !== "function") {
              throw new Error("'onSuggestionsFetchRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsFetchRequestedProp");
            }
          },
          onSuggestionsClearRequested: function onSuggestionsClearRequested(props, propName) {
            var onSuggestionsClearRequested2 = props[propName];
            if (props.alwaysRenderSuggestions === false && typeof onSuggestionsClearRequested2 !== "function") {
              throw new Error("'onSuggestionsClearRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsClearRequestedProp");
            }
          },
          shouldKeepSuggestionsOnSelect: _propTypes["default"].func,
          onSuggestionSelected: _propTypes["default"].func,
          onSuggestionHighlighted: _propTypes["default"].func,
          renderInputComponent: _propTypes["default"].func,
          renderSuggestionsContainer: _propTypes["default"].func,
          getSuggestionValue: _propTypes["default"].func.isRequired,
          renderSuggestion: _propTypes["default"].func.isRequired,
          inputProps: function inputProps(props, propName) {
            var inputProps2 = props[propName];
            if (!inputProps2) {
              throw new Error("'inputProps' must be passed.");
            }
            if (!Object.prototype.hasOwnProperty.call(inputProps2, "value")) {
              throw new Error("'inputProps' must have 'value'.");
            }
            if (!Object.prototype.hasOwnProperty.call(inputProps2, "onChange")) {
              throw new Error("'inputProps' must have 'onChange'.");
            }
          },
          shouldRenderSuggestions: _propTypes["default"].func,
          alwaysRenderSuggestions: _propTypes["default"].bool,
          multiSection: _propTypes["default"].bool,
          renderSectionTitle: function renderSectionTitle(props, propName) {
            var renderSectionTitle2 = props[propName];
            if (props.multiSection === true && typeof renderSectionTitle2 !== "function") {
              throw new Error("'renderSectionTitle' must be implemented. See: https://github.com/moroshko/react-autosuggest#renderSectionTitleProp");
            }
          },
          getSectionSuggestions: function getSectionSuggestions(props, propName) {
            var getSectionSuggestions2 = props[propName];
            if (props.multiSection === true && typeof getSectionSuggestions2 !== "function") {
              throw new Error("'getSectionSuggestions' must be implemented. See: https://github.com/moroshko/react-autosuggest#getSectionSuggestionsProp");
            }
          },
          focusInputOnSuggestionClick: _propTypes["default"].bool,
          highlightFirstSuggestion: _propTypes["default"].bool,
          theme: _propTypes["default"].object,
          id: _propTypes["default"].string,
          containerProps: _propTypes["default"].object
          // Arbitrary container props
        });
        _defineProperty(Autosuggest2, "defaultProps", {
          renderSuggestionsContainer: defaultRenderSuggestionsContainer,
          shouldRenderSuggestions: defaultShouldRenderSuggestions,
          alwaysRenderSuggestions: false,
          multiSection: false,
          shouldKeepSuggestionsOnSelect: function shouldKeepSuggestionsOnSelect() {
            return false;
          },
          focusInputOnSuggestionClick: true,
          highlightFirstSuggestion: false,
          theme: _theme.defaultTheme,
          id: "1",
          containerProps: {}
        });
      })(Autosuggest$1);
      var dist = Autosuggest$1["default"];
      const Autosuggest = /* @__PURE__ */ getDefaultExportFromCjs(dist);
      var _jsxFileName$2 = "/Users/maro5239/work/hanna/modules/hanna-react/src/SiteSearchAutocomplete.tsx";
      const defaultSiteSearchACTexts = {
        is: {
          label: "Leit á vefnum",
          inputLabel: "Leitarorð",
          buttonText: "Leita",
          placeholder: "Sláðu inn leitarorð",
          suggestionsLabel: "Tillögur"
        },
        en: {
          label: "Site search",
          inputLabel: "Search terms",
          buttonText: "Search",
          placeholder: "Enter search terms",
          suggestionsLabel: "Suggestions"
        },
        pl: {
          label: "Wyszukiwanie na stronie",
          inputLabel: "Wyszukiwane słowa",
          buttonText: "Szukaj",
          placeholder: "Wpisz wyszukiwane słowa",
          suggestionsLabel: "Sugestie"
        }
      };
      const SiteSearchAutocomplete = (props) => {
        const {
          suggestions,
          setSuggestions,
          renderSuggestion,
          getSuggestionValue,
          onSuggestionsFetchRequested,
          onSuggestionSelected,
          onSuggestionHighlighted,
          onSubmit,
          onButtonClick,
          bem = "SiteSearchAutocomplete",
          wrapperProps
        } = props;
        const [value, setValue] = t(h(""), "value");
        const inputRef = t(_(null), "inputRef");
        const txt = getTexts(props, defaultSiteSearchACTexts);
        if (!txt.buttonText) {
          console.warn("SiteSearchAutocomplete: Missing translation: `buttonText`");
        }
        return o(Autosuggest, {
          theme: {
            container: bem,
            containerOpen: `${bem}--open`,
            suggestionsContainer: `${bem}__container`,
            suggestionsContainerOpen: `${bem}__container--open`,
            suggestionsList: `${bem}__list`,
            suggestion: `${bem}__item`,
            suggestionHighlighted: `${bem}__item--highlighted`
          },
          focusInputOnSuggestionClick: true,
          suggestions,
          onSuggestionsClearRequested: () => setSuggestions([]),
          onSuggestionsFetchRequested,
          getSuggestionValue,
          onSuggestionSelected,
          onSuggestionHighlighted,
          renderSuggestion: renderSuggestion || ((s) => String(s)),
          containerProps: {
            ...wrapperProps,
            "aria-label": txt.label
          },
          renderSuggestionsContainer: ({
            containerProps,
            children
          }) => o("div", {
            ...containerProps,
            "aria-label": suggestions.length ? txt.suggestionsLabel : void 0,
            children
          }, void 0, false, {
            fileName: _jsxFileName$2,
            lineNumber: 121,
            columnNumber: 9
          }, void 0),
          inputProps: {
            ref: inputRef,
            value,
            onChange: (_2, {
              newValue
            }) => {
              setValue(newValue);
            }
          },
          renderInputComponent: (inputProps) => {
            const {
              className,
              type,
              disabled,
              readOnly,
              required,
              children,
              ref,
              ...siteSearchProps
            } = inputProps;
            return o(SiteSearchInput, {
              ...siteSearchProps,
              inputRef: ref,
              label: props.label || // eslint-disable-line deprecation/deprecation
              txt.inputLabel,
              placeholder: txt.placeholder,
              buttonText: txt.buttonText,
              onSubmit: onSubmit && (() => onSubmit(value)),
              onButtonClick: onButtonClick && (() => onButtonClick(value))
            }, void 0, false, {
              fileName: _jsxFileName$2,
              lineNumber: 142,
              columnNumber: 11
            }, void 0);
          }
        }, void 0, false, {
          fileName: _jsxFileName$2,
          lineNumber: 101,
          columnNumber: 5
        }, void 0);
      };
      var _jsxFileName$1 = "/Users/maro5239/work/hanna/modules/hanna-react/src/SiteSearchCurtain.tsx";
      const SiteSearchCurtain = (props) => {
        const [focused, setFocused] = useLaggedState(false);
        p(
          () => {
            const closeSearch = (e) => {
              if (e.key === "Escape") {
                setFocused(false);
              }
            };
            document.addEventListener("keyup", closeSearch);
            return () => document.removeEventListener("keyup", closeSearch);
          },
          // eslint-disable-next-line react-hooks/exhaustive-deps
          []
        );
        const focusHandler = () => {
          setFocused(true);
        };
        const blurHandler = (e) => {
          if (!e.relatedTarget || !e.currentTarget.contains(e.relatedTarget)) {
            setFocused(false, 100);
          }
        };
        return o("div", {
          className: modifiedClass("SiteSearchCurtain", [focused && "focused"]),
          onFocus: focusHandler,
          onBlur: blurHandler,
          ...isPreact && {
            onfocusin: focusHandler,
            onfocusout: blurHandler
          },
          children: props.children
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 43,
          columnNumber: 5
        }, void 0);
      };
      var _jsxFileName = "/Users/maro5239/work/hanna/modules/hanna-sprinkles/src/utils/elsearch/renderSiteSearchAutocomplete.tsx";
      const log = (...args) => console.error("renderSiteSearchAutocomplete: ", ...args);
      const ElasticSiteSearchAutocomplete = (props) => {
        const {
          title,
          lang,
          apiUri,
          searchPagePath,
          exceptBundles
        } = props;
        const [suggestions, setSuggestions] = t(h([]), "suggestions");
        const [debouncer] = t(h(() => debounce.d(200)), "debouncer");
        return o(SiteSearchCurtain, {
          children: [
            title && o(PageHeading, {
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 17
            }, void 0),
            /* eslint-disable-next-line deprecation/deprecation */
            o(SiteSearchAutocomplete, {
              lang,
              suggestions,
              renderSuggestion: ({
                label
              }) => label,
              setSuggestions,
              onSuggestionSelected: (e, {
                suggestion
              }) => {
                window.location.href = suggestion.href;
              },
              getSuggestionValue: ({
                label
              }) => label,
              onSubmit: (value) => {
                window.location.href = `${searchPagePath}?q=${encodeURIComponent(value)}`;
              },
              onSuggestionsFetchRequested: ({
                value
              }) => {
                debouncer.cancel();
                if (value.length >= 2) {
                  debouncer(() => {
                    const query = createElasticQuery({
                      value,
                      preference: "searchbox",
                      size: 5,
                      _source: ["label", "url_alias"],
                      exceptBundles
                    });
                    postQuery(apiUri, [query]).then((results) => {
                      const [result] = results;
                      if (!result) {
                        throw new Error();
                      }
                      setSuggestions(result.items.map(({
                        label,
                        url_alias
                      }) => ({
                        label,
                        href: url_alias
                      })));
                    });
                  });
                }
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 9
            }, void 0)
          ]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 5
        }, void 0);
      };
      const renderSiteSearchAutocomplete = exports("default", (props) => {
        var _a;
        const {
          insertAt,
          apiUri,
          searchPagePath,
          exceptBundles
        } = props;
        if (!apiUri || !searchPagePath) {
          !apiUri && log("`apiUri` missing");
          !searchPagePath && log("`searchPagePath` missing");
          return;
        }
        const insertionElm = document.querySelector(insertAt);
        const parentElm = insertionElm == null ? void 0 : insertionElm.closest(".RowBlockColumn");
        if (!parentElm) {
          !insertionElm ? log(`Insertion point "${insertAt}" not found`) : log("RowBlockColumn parent not found");
          return;
        }
        const title = ((_a = parentElm.querySelector(".PageHeading")) == null ? void 0 : _a.textContent) || void 0;
        ensureCSS("SiteSearchCurtain").then(() => {
          const rootElm = document.createElement("div");
          Cn.render(o(ElasticSiteSearchAutocomplete, {
            lang: getLang(parentElm),
            title,
            apiUri,
            searchPagePath,
            exceptBundles
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 7
          }, void 0), rootElm, () => {
            parentElm.textContent = "";
            parentElm.append(rootElm);
          });
        });
      });
    }
  };
});
