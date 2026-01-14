var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
function getScrollbarWidth() {
  if (!(document && document.body)) {
    return 0;
  }
  var scrollDiv = document.createElement("div");
  scrollDiv.style.cssText = "position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll;";
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
getScrollbarWidth.setCSSvar = function(varName) {
  if (varName === void 0) {
    varName = "browser-scrollbar-width";
  }
  document && document.documentElement.style.setProperty("--" + varName, getScrollbarWidth() + "px");
};
var getScrollbarWidth_1 = getScrollbarWidth;
const getScrollbarWidth$1 = /* @__PURE__ */ getDefaultExportFromCjs(getScrollbarWidth_1);
function qq(selectors, root) {
  return !selectors || root === null ? [] : [].slice.call((root || document).querySelectorAll(selectors));
}
var qq_1 = qq;
const qq$1 = /* @__PURE__ */ getDefaultExportFromCjs(qq_1);
function q(selectors, root) {
  return selectors && root !== null && (root || document).querySelector(selectors) || void 0;
}
var q_1 = q;
const q$1 = /* @__PURE__ */ getDefaultExportFromCjs(q_1);
var frag = {};
var getPageScrollElm = function(customWindow) {
  if (customWindow === void 0) {
    customWindow = window;
  }
  var document2 = customWindow.document;
  var bodyElm = document2.body;
  var pageScrollElm = document2.documentElement;
  if (pageScrollElm.clientHeight === pageScrollElm.scrollHeight && bodyElm.clientHeight !== bodyElm.scrollHeight) {
    pageScrollElm = bodyElm;
  }
  return pageScrollElm;
};
var getPageScrollElm_1 = getPageScrollElm;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var getPageScrollElm2 = getPageScrollElm_1;
  var encodeFrag = function(_fragment) {
    return encodeURI(_fragment).replace(/#/g, "%23").replace(/%7C/g, "|");
  };
  var setFrag = function(_fragment, _isEncoded) {
    _fragment = (_fragment || "").replace(/^#/, "");
    var scrollElm = getPageScrollElm2();
    var _elm = _fragment && document.getElementById(_isEncoded ? decodeURIComponent(_fragment) : _fragment);
    var _prePos = scrollElm.scrollTop;
    var _tmpId = _elm && _elm.id;
    _elm && (_elm.id = "");
    document.location.hash = _isEncoded ? _fragment : encodeFrag(_fragment);
    scrollElm.scrollTo(0, _prePos);
    _elm && (_elm.id = _tmpId || "");
  };
  var getFrag = function(url, _returnRaw) {
    var _fragment = (url || document.location.href).split("#")[1] || "";
    return _returnRaw ? _fragment : decodeURIComponent(_fragment);
  };
  var frag2 = {
    get: getFrag,
    set: setFrag,
    encode: encodeFrag
  };
  exports["default"] = frag2;
  exports.encodeFrag = encodeFrag;
  exports.getFrag = getFrag;
  exports.setFrag = setFrag;
})(frag);
var makeE = function(window2) {
  var document2 = window2.document, Node = window2.Node, NodeList = window2.NodeList;
  var E2 = function(tagName, attrs) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      children[_i - 2] = arguments[_i];
    }
    var elm = document2.createElement(tagName);
    if (attrs) {
      for (var name_1 in attrs) {
        var value = attrs[name_1];
        if (value != null) {
          if (name_1 === "style") {
            var styleObj = value;
            for (var cssProp in styleObj) {
              if (cssProp in elm.style) {
                elm.style[cssProp] = styleObj[cssProp];
              }
            }
          } else if (name_1 in elm) {
            elm[name_1] = value;
          } else if (/^on[A-Z]/.test(name_1)) {
            elm.addEventListener(name_1.substr(2).toLowerCase(), value);
          } else if (name_1.charAt(0) === "_") {
            elm[name_1.substr(1)] = value;
          } else {
            elm.setAttribute(name_1, value);
          }
        }
      }
    }
    var _appendChildren = function(child) {
      if (child instanceof Array || child instanceof NodeList) {
        child.forEach(_appendChildren);
      } else if (child || child === 0) {
        if (!(child instanceof Node)) {
          child = document2.createTextNode(typeof child === "string" ? child : String(child));
        }
        elm.appendChild(child);
      }
    };
    children.forEach(_appendChildren);
    return elm;
  };
  E2.make = makeE;
  return E2;
};
var _E;
var E = typeof window !== "undefined" ? makeE(window) : function() {
  if (!_E) {
    _E = makeE(typeof window !== "undefined" ? window : {});
  }
  return _E.apply(null, arguments);
};
E.make = E.make || makeE;
var E_1 = E;
const E$1 = /* @__PURE__ */ getDefaultExportFromCjs(E_1);
var focusElm = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var getPageScrollElm2 = getPageScrollElm_1;
  var getYScroll = function() {
    return document.documentElement.scrollTop || document.body.scrollTop;
  };
  var _focusElm = function(_elm, opts) {
    if (_elm.tabIndex < 0) {
      _elm.setAttribute("tabindex", "-1");
    }
    var scrollElm = getPageScrollElm2();
    var _before = scrollElm.scrollTop;
    _elm.focus();
    var _scrolld = scrollElm.scrollTop - _before;
    if (_scrolld) {
      var elmTopFromViewport = _elm.getBoundingClientRect().top;
      var orgWinBottom = scrollElm.clientHeight;
      if (_scrolld > 0 && _scrolld + elmTopFromViewport < orgWinBottom - 50) {
        scrollElm.scrollTo(scrollElm.scrollLeft, _before);
      } else {
        var offset = opts.offset;
        var offsetPx = typeof offset === "function" ? offset(_elm) : offset || 0;
        var elmTopPos = elmTopFromViewport + getYScroll();
        scrollElm.scrollTo(scrollElm.scrollLeft, elmTopPos - offsetPx);
      }
    }
  };
  var focusElm2 = function(elm, options) {
    if (elm) {
      var opts_1 = options || {};
      if (opts_1.delay == null) {
        _focusElm(elm, opts_1);
      } else {
        return setTimeout(function() {
          _focusElm(elm, opts_1);
        }, opts_1.delay);
      }
    }
  };
  exports["default"] = focusElm2;
  exports.focusElm = focusElm2;
  exports.getYScroll = getYScroll;
})(focusElm);
var debounce = function(func, delay, immediate) {
  var timeout;
  var _args;
  var _this;
  var debouncedFn = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    _args = args;
    _this = this;
    immediate && !timeout && func.apply(_this, _args);
    timeout && clearTimeout(timeout);
    timeout = setTimeout(function() {
      debouncedFn.cancel(true);
    }, delay);
  };
  debouncedFn.cancel = function(finish) {
    timeout && clearTimeout(timeout);
    finish && !!timeout && func.apply(_this, _args);
    timeout = void 0;
  };
  return debouncedFn;
};
debounce.d = function(delay, immediate) {
  return debounce(function(fn) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    fn.apply(this, args);
  }, delay, immediate);
};
var debounce_1 = debounce;
const debounce$1 = /* @__PURE__ */ getDefaultExportFromCjs(debounce_1);
var throttle = function(func, delay, skipFirst) {
  var timeout;
  var throttled = 0;
  var _args;
  var _this;
  var throttledFn = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    _args = args;
    _this = this;
    if (!throttled) {
      skipFirst ? throttled++ : func.apply(_this, _args);
      timeout = setTimeout(throttledFn.finish, delay);
    }
    throttled++;
  };
  throttledFn.finish = function(cancel) {
    timeout && clearTimeout(timeout);
    !cancel && throttled > 1 && func.apply(_this, _args);
    throttled = 0;
  };
  return throttledFn;
};
throttle.d = function(delay, skipFirst) {
  return throttle(function(fn) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    fn.apply(this, args);
  }, delay, skipFirst);
};
var throttle_1 = throttle;
const throttle$1 = /* @__PURE__ */ getDefaultExportFromCjs(throttle_1);
var object = {};
Object.defineProperty(object, "__esModule", { value: true });
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function(obj, key) {
  return _hasOwnProperty.call(obj, key);
};
var _createEmpty = function(original) {
  return original.constructor ? (
    //
    // @ts-ignore  (TODO: Figure out how to express this safely)
    new original.constructor()
  ) : /* @__PURE__ */ Object.create(null);
};
var _clone = function(original) {
  var clone = _createEmpty(original);
  for (var originalKey in original) {
    if (hasOwn(original, originalKey)) {
      clone[originalKey] = original[originalKey];
    }
  }
  return clone;
};
function objectUpdate(original, newValues, customSameCheck) {
  var clone;
  for (var key in newValues) {
    var valA = original[key];
    var valB = newValues[key];
    if (valA !== valB && hasOwn(newValues, key) && !(customSameCheck && valA && valB && customSameCheck(valA, valB, key))) {
      if (!clone) {
        clone = _clone(original);
      }
      clone[key] = newValues[key];
    }
  }
  return clone || original;
}
var objectClean = function(original, alsoNull) {
  var deleted;
  var clone = _createEmpty(original);
  for (var key in original) {
    if (hasOwn(original, key)) {
      var originalVal = original[key];
      if (originalVal === void 0 || originalVal === null && alsoNull) {
        deleted = true;
      } else {
        clone[key] = originalVal;
      }
    }
  }
  return deleted ? clone : original;
};
var objectIsEmpty = function(object2) {
  for (var key in object2) {
    if (hasOwn(object2, key)) {
      return false;
    }
  }
  return true;
};
var defaultSame = function(a, b, key) {
  return a[key] === b[key];
};
function objectIsSame(a, b, isSame) {
  if (isSame === void 0) {
    isSame = defaultSame;
  }
  if (a === b) {
    return true;
  }
  var aKeys = Object.keys(a);
  if (aKeys.length !== Object.keys(b).length) {
    return false;
  }
  for (var i = 0; i < aKeys.length; i++) {
    var key = aKeys[i];
    if (!hasOwn(b, key) || !isSame(a, b, key)) {
      return false;
    }
  }
  return true;
}
var objectOnly = function(original, keys) {
  var extra;
  var clone = _createEmpty(original);
  for (var key in original) {
    if (hasOwn(original, key)) {
      if (keys.indexOf(key) > -1) {
        clone[key] = original[key];
      } else {
        extra = true;
      }
    }
  }
  return extra ? clone : original;
};
var objectWithout = function(original, keys) {
  var clone;
  var numKeys = keys.length;
  for (var i = 0; i < numKeys; i++) {
    var key = keys[i];
    if (hasOwn(original, key)) {
      clone = clone || _clone(original);
      delete clone[key];
    }
  }
  return clone || original;
};
var objectReplace = function(original, replacement, customSameCheck) {
  return objectIsSame(original, replacement, customSameCheck) ? original : replacement;
};
var objectClean_1 = object.objectClean = objectClean;
object.objectIsEmpty = objectIsEmpty;
var objectIsSame_1 = object.objectIsSame = objectIsSame;
object.objectOnly = objectOnly;
object.objectReplace = objectReplace;
object.objectUpdate = objectUpdate;
object.objectWithout = objectWithout;
var domid_prefix = "_" + /* @__PURE__ */ (Date.now() + "-").substr(6);
var domid_incr = 0;
function domid$1() {
  return domid_prefix + domid_incr++;
}
var domid_1 = domid$1;
var domid = domid_1;
function aquireId(el, prefDefaultId) {
  if (typeof el === "string") {
    prefDefaultId = el;
    el = void 0;
  }
  if (el) {
    el = "nodeType" in el ? el : el[0];
  }
  if (!el || !el.id) {
    var id = prefDefaultId || "tmp_" + domid();
    if (prefDefaultId) {
      var count = void 0;
      var idPrefix = prefDefaultId;
      while (document.getElementById(id)) {
        if (count === void 0) {
          var m = prefDefaultId.match(/\d+$/);
          count = m ? parseInt(m[0]) : 1;
          idPrefix = m ? prefDefaultId.replace(/\d+$/, "") : prefDefaultId;
        }
        count++;
        id = idPrefix + count;
      }
    }
    if (!el) {
      return id;
    }
    if (!el.id) {
      el.id = id;
    }
  }
  return el.id;
}
var aquireId_1 = aquireId;
const aquireId$1 = /* @__PURE__ */ getDefaultExportFromCjs(aquireId_1);
var time = {};
Object.defineProperty(time, "__esModule", { value: true });
var SECOND = 1e3;
var MINUTE = 6e4;
var HOUR = 36e5;
var DAY = 864e5;
var sinceLast = function(timestamp, periodSizeMS) {
  return timestamp >= 0 ? timestamp % periodSizeMS : (periodSizeMS + timestamp % periodSizeMS) % DAY;
};
var untilNext = function(timestamp, periodSizeMS) {
  return periodSizeMS - sinceLast(timestamp, periodSizeMS);
};
var atLast = function(timestamp, periodSizeMS) {
  return timestamp - sinceLast(timestamp, periodSizeMS);
};
var atNext = function(timestamp, periodSizeMS) {
  return timestamp + (periodSizeMS - sinceLast(timestamp, periodSizeMS));
};
var safeTimeout = function(callback, delay) {
  var startingTime = Date.now();
  var timeoutId = setTimeout(function() {
    var undershootMs = startingTime + delay - Date.now();
    if (undershootMs > 0) {
      timeoutId = setTimeout(callback, undershootMs + 50);
    } else {
      callback();
    }
  }, delay + 50);
  return function() {
    return timeoutId;
  };
};
var onNext = function(periodSizeMS, offsetMs, callback) {
  if (typeof offsetMs !== "number") {
    callback = offsetMs;
    offsetMs = 0;
  }
  var _callback = callback;
  if (!_callback) {
    return;
  }
  var msToNext = untilNext(Date.now(), periodSizeMS) + offsetMs;
  var timeoutId = msToNext > 2e3 ? safeTimeout(_callback, msToNext) : (
    // quicker (and dirtier) alternative to safeTimeout() for shorter periodSizes
    function(tId) {
      return function() {
        return tId;
      };
    }(setTimeout(_callback, msToNext + 50))
  );
  return {
    cancel: function(execCallback) {
      clearTimeout(timeoutId());
      execCallback && _callback();
    }
  };
};
var onEvery = function(periodSizeMS, offsetMs, callback) {
  if (typeof offsetMs !== "number") {
    callback = offsetMs;
    offsetMs = 0;
  }
  var _callback = callback;
  if (!_callback) {
    return;
  }
  var nextUp;
  var callbackOnNext = function() {
    nextUp = onNext(periodSizeMS, offsetMs, function() {
      _callback();
      callbackOnNext();
    });
  };
  callbackOnNext();
  return {
    cancel: function(execCallback) {
      nextUp && nextUp.cancel(execCallback);
    }
  };
};
var DAY_1 = time.DAY = DAY;
time.HOUR = HOUR;
var MINUTE_1 = time.MINUTE = MINUTE;
var SECOND_1 = time.SECOND = SECOND;
time.atEnd = atNext;
time.atLast = atLast;
time.atNext = atNext;
time.atStart = atLast;
time.onEvery = onEvery;
time.onNext = onNext;
time.safeTimeout = safeTimeout;
time.sinceLast = sinceLast;
time.untilNext = untilNext;
function zapElm(elm) {
  var parent = elm.parentNode;
  if (parent) {
    while (elm.firstChild) {
      parent.insertBefore(elm.firstChild, elm);
    }
    parent.removeChild(elm);
  }
}
var zapElm_1 = zapElm;
const zapElm$1 = /* @__PURE__ */ getDefaultExportFromCjs(zapElm_1);
function makeQueryString(paramsObj) {
  return Object.keys(paramsObj).reduce(function(acc, key) {
    var param = paramsObj[key];
    if (!Array.isArray(param)) {
      param = [param];
    }
    param.forEach(function(value) {
      if (value != null) {
        var strVal = encodeURIComponent(String(value));
        acc.push(key + (strVal ? "=" + strVal : ""));
      }
    });
    return acc;
  }, []).join("&");
}
var makeQueryString_1 = makeQueryString;
const makeQueryString$1 = /* @__PURE__ */ getDefaultExportFromCjs(makeQueryString_1);
var range = function(from, to, step) {
  if (Number(from) !== from || Number(to) !== to) {
    throw new Error("invalid range");
  }
  var asc = from < to;
  var validStep = step && step > 0 && Number(step) === step;
  step = (asc ? 1 : -1) * (validStep && step || 1);
  var arr = [];
  var curr = from;
  while (asc ? curr <= to : to <= curr) {
    arr[arr.length] = curr;
    curr += step;
  }
  return arr;
};
var range_1 = range;
const range$1 = /* @__PURE__ */ getDefaultExportFromCjs(range_1);
(function() {
  if (typeof window !== "object") {
    return;
  }
  if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
    if (!("isIntersecting" in window.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(
        window.IntersectionObserverEntry.prototype,
        "isIntersecting",
        {
          get: function() {
            return this.intersectionRatio > 0;
          }
        }
      );
    }
    return;
  }
  var document2 = window.document;
  function IntersectionObserverEntry(entry) {
    this.time = entry.time;
    this.target = entry.target;
    this.rootBounds = entry.rootBounds;
    this.boundingClientRect = entry.boundingClientRect;
    this.intersectionRect = entry.intersectionRect || getEmptyRect();
    this.isIntersecting = !!entry.intersectionRect;
    var targetRect = this.boundingClientRect;
    var targetArea = targetRect.width * targetRect.height;
    var intersectionRect = this.intersectionRect;
    var intersectionArea = intersectionRect.width * intersectionRect.height;
    if (targetArea) {
      this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
    } else {
      this.intersectionRatio = this.isIntersecting ? 1 : 0;
    }
  }
  function IntersectionObserver2(callback, opt_options) {
    var options = opt_options || {};
    if (typeof callback !== "function") {
      throw new Error("callback must be a function");
    }
    if (options.root && options.root.nodeType != 1) {
      throw new Error("root must be an Element");
    }
    this._checkForIntersections = throttle2(
      this._checkForIntersections.bind(this),
      this.THROTTLE_TIMEOUT
    );
    this._callback = callback;
    this._observationTargets = [];
    this._queuedEntries = [];
    this._rootMarginValues = this._parseRootMargin(options.rootMargin);
    this.thresholds = this._initThresholds(options.threshold);
    this.root = options.root || null;
    this.rootMargin = this._rootMarginValues.map(function(margin) {
      return margin.value + margin.unit;
    }).join(" ");
  }
  IntersectionObserver2.prototype.THROTTLE_TIMEOUT = 100;
  IntersectionObserver2.prototype.POLL_INTERVAL = null;
  IntersectionObserver2.prototype.USE_MUTATION_OBSERVER = true;
  IntersectionObserver2.prototype.observe = function(target) {
    var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
      return item.element == target;
    });
    if (isTargetAlreadyObserved) {
      return;
    }
    if (!(target && target.nodeType == 1)) {
      throw new Error("target must be an Element");
    }
    this._registerInstance();
    this._observationTargets.push({ element: target, entry: null });
    this._monitorIntersections();
    this._checkForIntersections();
  };
  IntersectionObserver2.prototype.unobserve = function(target) {
    this._observationTargets = this._observationTargets.filter(function(item) {
      return item.element != target;
    });
    if (!this._observationTargets.length) {
      this._unmonitorIntersections();
      this._unregisterInstance();
    }
  };
  IntersectionObserver2.prototype.disconnect = function() {
    this._observationTargets = [];
    this._unmonitorIntersections();
    this._unregisterInstance();
  };
  IntersectionObserver2.prototype.takeRecords = function() {
    var records = this._queuedEntries.slice();
    this._queuedEntries = [];
    return records;
  };
  IntersectionObserver2.prototype._initThresholds = function(opt_threshold) {
    var threshold = opt_threshold || [0];
    if (!Array.isArray(threshold)) {
      threshold = [threshold];
    }
    return threshold.sort().filter(function(t, i, a) {
      if (typeof t !== "number" || isNaN(t) || t < 0 || t > 1) {
        throw new Error("threshold must be a number between 0 and 1 inclusively");
      }
      return t !== a[i - 1];
    });
  };
  IntersectionObserver2.prototype._parseRootMargin = function(opt_rootMargin) {
    var marginString = opt_rootMargin || "0px";
    var margins = marginString.split(/\s+/).map(function(margin) {
      var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
      if (!parts) {
        throw new Error("rootMargin must be specified in pixels or percent");
      }
      return { value: parseFloat(parts[1]), unit: parts[2] };
    });
    margins[1] = margins[1] || margins[0];
    margins[2] = margins[2] || margins[0];
    margins[3] = margins[3] || margins[1];
    return margins;
  };
  IntersectionObserver2.prototype._monitorIntersections = function() {
    if (!this._monitoringIntersections) {
      this._monitoringIntersections = true;
      if (this.POLL_INTERVAL) {
        this._monitoringInterval = setInterval(
          this._checkForIntersections,
          this.POLL_INTERVAL
        );
      } else {
        addEvent(window, "resize", this._checkForIntersections, true);
        addEvent(document2, "scroll", this._checkForIntersections, true);
        if (this.USE_MUTATION_OBSERVER && "MutationObserver" in window) {
          this._domObserver = new MutationObserver(this._checkForIntersections);
          this._domObserver.observe(document2, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        }
      }
    }
  };
  IntersectionObserver2.prototype._unmonitorIntersections = function() {
    if (this._monitoringIntersections) {
      this._monitoringIntersections = false;
      clearInterval(this._monitoringInterval);
      this._monitoringInterval = null;
      removeEvent(window, "resize", this._checkForIntersections, true);
      removeEvent(document2, "scroll", this._checkForIntersections, true);
      if (this._domObserver) {
        this._domObserver.disconnect();
        this._domObserver = null;
      }
    }
  };
  IntersectionObserver2.prototype._checkForIntersections = function() {
    var rootIsInDom = this._rootIsInDom();
    var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
    this._observationTargets.forEach(function(item) {
      var target = item.element;
      var targetRect = getBoundingClientRect(target);
      var rootContainsTarget = this._rootContainsTarget(target);
      var oldEntry = item.entry;
      var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, rootRect);
      var newEntry = item.entry = new IntersectionObserverEntry({
        time: now(),
        target,
        boundingClientRect: targetRect,
        rootBounds: rootRect,
        intersectionRect
      });
      if (!oldEntry) {
        this._queuedEntries.push(newEntry);
      } else if (rootIsInDom && rootContainsTarget) {
        if (this._hasCrossedThreshold(oldEntry, newEntry)) {
          this._queuedEntries.push(newEntry);
        }
      } else {
        if (oldEntry && oldEntry.isIntersecting) {
          this._queuedEntries.push(newEntry);
        }
      }
    }, this);
    if (this._queuedEntries.length) {
      this._callback(this.takeRecords(), this);
    }
  };
  IntersectionObserver2.prototype._computeTargetAndRootIntersection = function(target, rootRect) {
    if (window.getComputedStyle(target).display == "none") {
      return;
    }
    var targetRect = getBoundingClientRect(target);
    var intersectionRect = targetRect;
    var parent = getParentNode(target);
    var atRoot = false;
    while (!atRoot) {
      var parentRect = null;
      var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {};
      if (parentComputedStyle.display == "none") {
        return;
      }
      if (parent == this.root || parent == document2) {
        atRoot = true;
        parentRect = rootRect;
      } else {
        if (parent != document2.body && parent != document2.documentElement && parentComputedStyle.overflow != "visible") {
          parentRect = getBoundingClientRect(parent);
        }
      }
      if (parentRect) {
        intersectionRect = computeRectIntersection(parentRect, intersectionRect);
        if (!intersectionRect) {
          break;
        }
      }
      parent = getParentNode(parent);
    }
    return intersectionRect;
  };
  IntersectionObserver2.prototype._getRootRect = function() {
    var rootRect;
    if (this.root) {
      rootRect = getBoundingClientRect(this.root);
    } else {
      var html = document2.documentElement;
      var body = document2.body;
      rootRect = {
        top: 0,
        left: 0,
        right: html.clientWidth || body.clientWidth,
        width: html.clientWidth || body.clientWidth,
        bottom: html.clientHeight || body.clientHeight,
        height: html.clientHeight || body.clientHeight
      };
    }
    return this._expandRectByRootMargin(rootRect);
  };
  IntersectionObserver2.prototype._expandRectByRootMargin = function(rect) {
    var margins = this._rootMarginValues.map(function(margin, i) {
      return margin.unit == "px" ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
    });
    var newRect = {
      top: rect.top - margins[0],
      right: rect.right + margins[1],
      bottom: rect.bottom + margins[2],
      left: rect.left - margins[3]
    };
    newRect.width = newRect.right - newRect.left;
    newRect.height = newRect.bottom - newRect.top;
    return newRect;
  };
  IntersectionObserver2.prototype._hasCrossedThreshold = function(oldEntry, newEntry) {
    var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
    var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;
    if (oldRatio === newRatio) {
      return;
    }
    for (var i = 0; i < this.thresholds.length; i++) {
      var threshold = this.thresholds[i];
      if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
        return true;
      }
    }
  };
  IntersectionObserver2.prototype._rootIsInDom = function() {
    return !this.root || containsDeep(document2, this.root);
  };
  IntersectionObserver2.prototype._rootContainsTarget = function(target) {
    return containsDeep(this.root || document2, target);
  };
  IntersectionObserver2.prototype._registerInstance = function() {
  };
  IntersectionObserver2.prototype._unregisterInstance = function() {
  };
  function now() {
    return window.performance && performance.now && performance.now();
  }
  function throttle2(fn, timeout) {
    var timer = null;
    return function() {
      if (!timer) {
        timer = setTimeout(function() {
          fn();
          timer = null;
        }, timeout);
      }
    };
  }
  function addEvent(node, event, fn, opt_useCapture) {
    if (typeof node.addEventListener === "function") {
      node.addEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.attachEvent === "function") {
      node.attachEvent("on" + event, fn);
    }
  }
  function removeEvent(node, event, fn, opt_useCapture) {
    if (typeof node.removeEventListener === "function") {
      node.removeEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.detatchEvent === "function") {
      node.detatchEvent("on" + event, fn);
    }
  }
  function computeRectIntersection(rect1, rect2) {
    var top = Math.max(rect1.top, rect2.top);
    var bottom = Math.min(rect1.bottom, rect2.bottom);
    var left = Math.max(rect1.left, rect2.left);
    var right = Math.min(rect1.right, rect2.right);
    var width = right - left;
    var height = bottom - top;
    return width >= 0 && height >= 0 && {
      top,
      bottom,
      left,
      right,
      width,
      height
    };
  }
  function getBoundingClientRect(el) {
    var rect;
    try {
      rect = el.getBoundingClientRect();
    } catch (err) {
    }
    if (!rect) {
      return getEmptyRect();
    }
    if (!(rect.width && rect.height)) {
      rect = {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      };
    }
    return rect;
  }
  function getEmptyRect() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }
  function containsDeep(parent, child) {
    var node = child;
    while (node) {
      if (node == parent) {
        return true;
      }
      node = getParentNode(node);
    }
    return false;
  }
  function getParentNode(node) {
    var parent = node.parentNode;
    if (parent && parent.nodeType == 11 && parent.host) {
      return parent.host;
    }
    if (parent && parent.assignedSlot) {
      return parent.assignedSlot.parentNode;
    }
    return parent;
  }
  window.IntersectionObserver = IntersectionObserver2;
  window.IntersectionObserverEntry = IntersectionObserverEntry;
})();
const IntersectionObserver = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  DAY_1 as D,
  E$1 as E,
  IntersectionObserver as I,
  MINUTE_1 as M,
  SECOND_1 as S,
  qq$1 as a,
  focusElm as b,
  objectClean_1 as c,
  debounce$1 as d,
  aquireId$1 as e,
  frag as f,
  getDefaultExportFromCjs as g,
  getScrollbarWidth$1 as h,
  getAugmentedNamespace as i,
  commonjsGlobal as j,
  makeQueryString$1 as m,
  objectIsSame_1 as o,
  q$1 as q,
  range$1 as r,
  throttle$1 as t,
  zapElm$1 as z
};
