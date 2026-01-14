import { C as Cn, c as compat_module, b as F } from "./compat.module-8e5010ff.js";
import "./getSVGtext-b918ded2.js";
import "./i18n-a7278b6d.js";
import { i as getAugmentedNamespace, j as commonjsGlobal } from "./qj-1c8d4095.js";
var formatchange = {};
/* FormatChange  -- (c) 2012-2022 Hugsmiðjan ehf.   @license MIT/GPL */
var _beget = Object.create || function(prototype) {
  var F2 = function() {
  };
  F2.prototype = prototype;
  return new F2();
};
var isBrowser = (window2) => !!(window2 && window2.getComputedStyle);
var FormatChange = function(groups, config) {
  var self = this;
  if (!(this instanceof FormatChange)) {
    return new FormatChange(groups, config);
  }
  config = config || {};
  self.win = config.win || self.win;
  self.elm = config.elm;
  if (config.elmTagName) {
    self.elmTagName = config.elmTagName;
  }
  if (config.elmId) {
    self.elmId = config.elmId;
  }
  if ("manual" in config) {
    self.manual = config.manual;
  }
  if ("defer" in config) {
    self.defer = config.defer;
  }
  self.formatGroups = groups || _beget(self.formatGroups);
  self.media = {};
  self._callbacks = [];
  self._check = function() {
    self.check();
  };
  !self.defer && self.start();
};
FormatChange.prototype = {
  // Default options and format groups.
  elmTagName: "del",
  elmId: "mediaformat",
  manual: false,
  defer: false,
  win: typeof window !== "undefined" ? window : void 0,
  formatGroups: {},
  isRunning: function() {
    return this._on;
  },
  start: function(afresh) {
    if (this._on || !isBrowser(this.win)) {
      return;
    }
    if (!this.elm) {
      var doc = this.win.document;
      var id = this.elmId || "mediaformat";
      var elm = this.elm = doc.getElementById(id);
      if (!elm) {
        elm = this.elm = doc.createElement(this.elmTagName || "del");
        var elm_style = elm.style;
        elm_style.position = "absolute";
        elm_style.visibility = elm_style.overflow = "hidden";
        elm_style.border = elm_style.padding = elm_style.margin = elm_style.width = elm_style.height = 0;
        elm.id = id;
        elm._isMine = true;
        doc.body.appendChild(elm);
      }
    }
    this._on = true;
    if (!this.manual) {
      this.win.addEventListener("resize", this._check);
    }
    this.refresh(afresh);
  },
  stop: function() {
    var elm = this.elm;
    if (!this._on) {
      return;
    }
    if (!this.manual) {
      this.win.removeEventListener("resize", this._check);
    }
    if (elm._isMine) {
      elm.parentNode.removeChild(elm);
      delete this.elm;
    }
    this._on = false;
  },
  refresh: function(hardRefresh) {
    if (hardRefresh) {
      this.oldFormat = null;
    }
    if (this._on && !this.check()) {
      this._updateFlags();
    }
    return this._on;
  },
  subscribe: function(callback, runImmediately) {
    if (!callback) {
      return;
    }
    this.unsubscribe(callback);
    this._callbacks.push(callback);
    if (runImmediately !== false && this._on && !this._triggering) {
      callback(this.media);
    }
  },
  unsubscribe: function(callback) {
    if (!callback) {
      return;
    }
    for (var i = 0, cb; cb = this._callbacks[i]; i++) {
      if (cb === callback) {
        this._callbacks.splice(i, 1);
        break;
      }
    }
  },
  _on: false,
  // update the static group-related flags.
  _updateFlags: function() {
    var self = this;
    var media = self.media;
    var formatGroups2 = self.formatGroups;
    for (var grpName in formatGroups2) {
      var grp = formatGroups2[grpName];
      var is = !!(grp && grp[media.is]);
      var was = !!(grp && grp[media.was]);
      media["is" + grpName] = is;
      media["was" + grpName] = was;
      media["became" + grpName] = is && !was;
      media["left" + grpName] = !is && was;
      !grp && delete formatGroups2[grpName];
    }
  },
  check: function() {
    if (!this._on) {
      return;
    }
    var media = this.media;
    var oldFormat = this.oldFormat;
    var newFormat = this.win.getComputedStyle(this.elm, "::after").content || "";
    newFormat = newFormat.replace(/['"]/g, "");
    var changeOccurred = newFormat !== oldFormat;
    if (changeOccurred) {
      media.is = media.format = newFormat;
      media.was = media.lastFormat = oldFormat;
      this.oldFormat = newFormat;
      this._updateFlags();
      this._triggering = true;
      for (var i = 0, callback; callback = this._callbacks[i]; i++) {
        callback(media);
      }
      this._triggering = false;
    }
    return changeOccurred;
  }
};
var FormatChange_1 = formatchange.FormatChange = FormatChange;
const formatGroups = {
  Hamburger: {
    phone: true,
    phablet: true,
    tablet: true
  },
  Topmenu: {
    netbook: true,
    // desktop: true,
    wide: true
  }
};
let _formatMonitor;
const getFormatMonitor = /* @__NO_SIDE_EFFECTS__ */ () => {
  if (!_formatMonitor) {
    _formatMonitor = new FormatChange_1(formatGroups);
  }
  return _formatMonitor;
};
const useId = Cn.useId;
const domid_prefix = `_${`${Date.now()}-`.slice(6)}`;
let domid_incr = 0;
const domid = () => domid_prefix + domid_incr++;
const useDomid = useId ? (staticId) => {
  const id = useId();
  return staticId || id;
} : (staticId) => {
  const idRef = Cn.useRef();
  if (!idRef.current) {
    idRef.current = staticId || domid();
  }
  return idRef.current;
};
var react = {};
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(compat_module);
var __extends = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = commonjsGlobal && commonjsGlobal.__assign || function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  Object.defineProperty(o, k2, { enumerable: true, get: function() {
    return m[k];
  } });
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(react, "__esModule", { value: true });
var makeFormatMonitorHook_1 = react.makeFormatMonitorHook = react.withMediaProps = void 0;
var react_1 = __importStar(require$$0);
var withMediaProps = function(TargetComponent, formatMonitor, getPropsFromMedia) {
  var getStateFromMedia = getPropsFromMedia || TargetComponent.getPropsFromMedia || function(media) {
    return media;
  };
  var FormatMonitored = (
    /** @class */
    function(_super) {
      __extends(FormatMonitored2, _super);
      function FormatMonitored2(props) {
        var _this = _super.call(this, props) || this;
        _this.getStateFromMedia = function(media) {
          _this.setState(getStateFromMedia(media));
        };
        _this.state = {};
        return _this;
      }
      FormatMonitored2.prototype.componentDidMount = function() {
        formatMonitor.subscribe(this.getStateFromMedia);
      };
      FormatMonitored2.prototype.componentWillUnmount = function() {
        formatMonitor.unsubscribe(this.getStateFromMedia);
      };
      FormatMonitored2.prototype.render = function() {
        return react_1.default.createElement(TargetComponent, __assign({}, this.props, this.state));
      };
      return FormatMonitored2;
    }(react_1.default.Component)
  );
  return FormatMonitored;
};
react.withMediaProps = withMediaProps;
var makeFormatMonitorHook = function(formatMonitor) {
  return function(callback) {
    var fmtMonitor = typeof formatMonitor === "function" ? formatMonitor() : formatMonitor;
    var callbackRef = (0, react_1.useRef)(callback);
    callbackRef.current = callback;
    var hasCallback = !!callback;
    (0, react_1.useEffect)(function() {
      if (callbackRef.current) {
        var callCallback_1 = function(media) {
          return callbackRef.current && callbackRef.current(media);
        };
        fmtMonitor.subscribe(callCallback_1);
        return function() {
          fmtMonitor.unsubscribe(callCallback_1);
        };
      }
    }, [hasCallback]);
  };
};
makeFormatMonitorHook_1 = react.makeFormatMonitorHook = makeFormatMonitorHook;
makeFormatMonitorHook_1(getFormatMonitor);
const _MobileMenuTogglerContext = F({
  closeHamburgerMenu: () => void 0,
  isHamburgerMenuOpen: void 0,
  isHamburgerMenuActive: void 0
});
_MobileMenuTogglerContext.Provider;
export {
  domid as d,
  getFormatMonitor as g,
  require$$0 as r,
  useDomid as u
};
