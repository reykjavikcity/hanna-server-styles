var n, l$1, u$1, t$2, r$1, o$1, f$1, e$1, c$1 = {}, s$1 = [], a$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function h$1(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function v$1(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function y$1(l2, u2, i2) {
  var t2, r2, o2, f2 = {};
  for (o2 in u2)
    "key" == o2 ? t2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : f2[o2] = u2[o2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
    for (o2 in l2.defaultProps)
      void 0 === f2[o2] && (f2[o2] = l2.defaultProps[o2]);
  return p$1(l2, f2, t2, r2, null);
}
function p$1(n2, i2, t2, r2, o2) {
  var f2 = { type: n2, props: i2, key: t2, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o2 ? ++u$1 : o2 };
  return null == o2 && null != l$1.vnode && l$1.vnode(f2), f2;
}
function d$1() {
  return { current: null };
}
function _$1(n2) {
  return n2.children;
}
function k$2(n2, l2) {
  this.props = n2, this.context = l2;
}
function b$1(n2, l2) {
  if (null == l2)
    return n2.__ ? b$1(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? b$1(n2) : null;
}
function g$2(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return g$2(n2);
  }
}
function m$1(n2) {
  (!n2.__d && (n2.__d = true) && t$2.push(n2) && !w$2.__r++ || r$1 !== l$1.debounceRendering) && ((r$1 = l$1.debounceRendering) || o$1)(w$2);
}
function w$2() {
  var n2, l2, u2, i2, r2, o2, e2, c2;
  for (t$2.sort(f$1); n2 = t$2.shift(); )
    n2.__d && (l2 = t$2.length, i2 = void 0, r2 = void 0, e2 = (o2 = (u2 = n2).__v).__e, (c2 = u2.__P) && (i2 = [], (r2 = h$1({}, o2)).__v = o2.__v + 1, L$1(c2, o2, r2, u2.__n, void 0 !== c2.ownerSVGElement, null != o2.__h ? [e2] : null, i2, null == e2 ? b$1(o2) : e2, o2.__h), M$1(i2, o2), o2.__e != e2 && g$2(o2)), t$2.length > l2 && t$2.sort(f$1));
  w$2.__r = 0;
}
function x$2(n2, l2, u2, i2, t2, r2, o2, f2, e2, a2) {
  var h2, v2, y2, d2, k2, g2, m2, w2 = i2 && i2.__k || s$1, x2 = w2.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if (null != (d2 = u2.__k[h2] = null == (d2 = l2[h2]) || "boolean" == typeof d2 || "function" == typeof d2 ? null : "string" == typeof d2 || "number" == typeof d2 || "bigint" == typeof d2 ? p$1(null, d2, null, null, d2) : Array.isArray(d2) ? p$1(_$1, { children: d2 }, null, null, null) : d2.__b > 0 ? p$1(d2.type, d2.props, d2.key, d2.ref ? d2.ref : null, d2.__v) : d2)) {
      if (d2.__ = u2, d2.__b = u2.__b + 1, null === (y2 = w2[h2]) || y2 && d2.key == y2.key && d2.type === y2.type)
        w2[h2] = void 0;
      else
        for (v2 = 0; v2 < x2; v2++) {
          if ((y2 = w2[v2]) && d2.key == y2.key && d2.type === y2.type) {
            w2[v2] = void 0;
            break;
          }
          y2 = null;
        }
      L$1(n2, d2, y2 = y2 || c$1, t2, r2, o2, f2, e2, a2), k2 = d2.__e, (v2 = d2.ref) && y2.ref != v2 && (m2 || (m2 = []), y2.ref && m2.push(y2.ref, null, d2), m2.push(v2, d2.__c || k2, d2)), null != k2 ? (null == g2 && (g2 = k2), "function" == typeof d2.type && d2.__k === y2.__k ? d2.__d = e2 = A$2(d2, e2, n2) : e2 = C$1(n2, d2, y2, w2, k2, e2), "function" == typeof u2.type && (u2.__d = e2)) : e2 && y2.__e == e2 && e2.parentNode != n2 && (e2 = b$1(y2));
    }
  for (u2.__e = g2, h2 = x2; h2--; )
    null != w2[h2] && ("function" == typeof u2.type && null != w2[h2].__e && w2[h2].__e == u2.__d && (u2.__d = $$1(i2).nextSibling), S(w2[h2], w2[h2]));
  if (m2)
    for (h2 = 0; h2 < m2.length; h2++)
      O$1(m2[h2], m2[++h2], m2[++h2]);
}
function A$2(n2, l2, u2) {
  for (var i2, t2 = n2.__k, r2 = 0; t2 && r2 < t2.length; r2++)
    (i2 = t2[r2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? A$2(i2, l2, u2) : C$1(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
function P$2(n2, l2) {
  return l2 = l2 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n3) {
    P$2(n3, l2);
  }) : l2.push(n2)), l2;
}
function C$1(n2, l2, u2, i2, t2, r2) {
  var o2, f2, e2;
  if (void 0 !== l2.__d)
    o2 = l2.__d, l2.__d = void 0;
  else if (null == u2 || t2 != r2 || null == t2.parentNode)
    n:
      if (null == r2 || r2.parentNode !== n2)
        n2.appendChild(t2), o2 = null;
      else {
        for (f2 = r2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 1)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, r2), o2 = r2;
      }
  return void 0 !== o2 ? o2 : t2.nextSibling;
}
function $$1(n2) {
  var l2, u2, i2;
  if (null == n2.type || "string" == typeof n2.type)
    return n2.__e;
  if (n2.__k) {
    for (l2 = n2.__k.length - 1; l2 >= 0; l2--)
      if ((u2 = n2.__k[l2]) && (i2 = $$1(u2)))
        return i2;
  }
  return null;
}
function H$1(n2, l2, u2, i2, t2) {
  var r2;
  for (r2 in u2)
    "children" === r2 || "key" === r2 || r2 in l2 || T$2(n2, r2, null, u2[r2], i2);
  for (r2 in l2)
    t2 && "function" != typeof l2[r2] || "children" === r2 || "key" === r2 || "value" === r2 || "checked" === r2 || u2[r2] === l2[r2] || T$2(n2, r2, l2[r2], u2[r2], i2);
}
function I$1(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || a$1.test(l2) ? u2 : u2 + "px";
}
function T$2(n2, l2, u2, i2, t2) {
  var r2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || I$1(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || I$1(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      r2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? i2 || n2.addEventListener(l2, r2 ? z$2 : j$2, r2) : n2.removeEventListener(l2, r2 ? z$2 : j$2, r2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l2 && "height" !== l2 && "href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
}
function j$2(n2) {
  return this.l[n2.type + false](l$1.event ? l$1.event(n2) : n2);
}
function z$2(n2) {
  return this.l[n2.type + true](l$1.event ? l$1.event(n2) : n2);
}
function L$1(n2, u2, i2, t2, r2, o2, f2, e2, c2) {
  var s2, a2, v2, y2, p2, d2, b2, g2, m2, w2, A2, P2, C2, $2, H2, I2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, o2 = [e2]), (s2 = l$1.__b) && s2(u2);
  try {
    n:
      if ("function" == typeof I2) {
        if (g2 = u2.props, m2 = (s2 = I2.contextType) && t2[s2.__c], w2 = s2 ? m2 ? m2.props.value : s2.__ : t2, i2.__c ? b2 = (a2 = u2.__c = i2.__c).__ = a2.__E : ("prototype" in I2 && I2.prototype.render ? u2.__c = a2 = new I2(g2, w2) : (u2.__c = a2 = new k$2(g2, w2), a2.constructor = I2, a2.render = q$2), m2 && m2.sub(a2), a2.props = g2, a2.state || (a2.state = {}), a2.context = w2, a2.__n = t2, v2 = a2.__d = true, a2.__h = [], a2._sb = []), null == a2.__s && (a2.__s = a2.state), null != I2.getDerivedStateFromProps && (a2.__s == a2.state && (a2.__s = h$1({}, a2.__s)), h$1(a2.__s, I2.getDerivedStateFromProps(g2, a2.__s))), y2 = a2.props, p2 = a2.state, a2.__v = u2, v2)
          null == I2.getDerivedStateFromProps && null != a2.componentWillMount && a2.componentWillMount(), null != a2.componentDidMount && a2.__h.push(a2.componentDidMount);
        else {
          if (null == I2.getDerivedStateFromProps && g2 !== y2 && null != a2.componentWillReceiveProps && a2.componentWillReceiveProps(g2, w2), !a2.__e && null != a2.shouldComponentUpdate && false === a2.shouldComponentUpdate(g2, a2.__s, w2) || u2.__v === i2.__v) {
            for (u2.__v !== i2.__v && (a2.props = g2, a2.state = a2.__s, a2.__d = false), a2.__e = false, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), A2 = 0; A2 < a2._sb.length; A2++)
              a2.__h.push(a2._sb[A2]);
            a2._sb = [], a2.__h.length && f2.push(a2);
            break n;
          }
          null != a2.componentWillUpdate && a2.componentWillUpdate(g2, a2.__s, w2), null != a2.componentDidUpdate && a2.__h.push(function() {
            a2.componentDidUpdate(y2, p2, d2);
          });
        }
        if (a2.context = w2, a2.props = g2, a2.__P = n2, P2 = l$1.__r, C2 = 0, "prototype" in I2 && I2.prototype.render) {
          for (a2.state = a2.__s, a2.__d = false, P2 && P2(u2), s2 = a2.render(a2.props, a2.state, a2.context), $2 = 0; $2 < a2._sb.length; $2++)
            a2.__h.push(a2._sb[$2]);
          a2._sb = [];
        } else
          do {
            a2.__d = false, P2 && P2(u2), s2 = a2.render(a2.props, a2.state, a2.context), a2.state = a2.__s;
          } while (a2.__d && ++C2 < 25);
        a2.state = a2.__s, null != a2.getChildContext && (t2 = h$1(h$1({}, t2), a2.getChildContext())), v2 || null == a2.getSnapshotBeforeUpdate || (d2 = a2.getSnapshotBeforeUpdate(y2, p2)), H2 = null != s2 && s2.type === _$1 && null == s2.key ? s2.props.children : s2, x$2(n2, Array.isArray(H2) ? H2 : [H2], u2, i2, t2, r2, o2, f2, e2, c2), a2.base = u2.__e, u2.__h = null, a2.__h.length && f2.push(a2), b2 && (a2.__E = a2.__ = null), a2.__e = false;
      } else
        null == o2 && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = N$1(i2.__e, u2, i2, t2, r2, o2, f2, c2);
    (s2 = l$1.diffed) && s2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || null != o2) && (u2.__e = e2, u2.__h = !!c2, o2[o2.indexOf(e2)] = null), l$1.__e(n3, u2, i2);
  }
}
function M$1(n2, u2) {
  l$1.__c && l$1.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$1.__e(n3, u3.__v);
    }
  });
}
function N$1(l2, u2, i2, t2, r2, o2, f2, e2) {
  var s2, a2, h2, y2 = i2.props, p2 = u2.props, d2 = u2.type, _2 = 0;
  if ("svg" === d2 && (r2 = true), null != o2) {
    for (; _2 < o2.length; _2++)
      if ((s2 = o2[_2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
        l2 = s2, o2[_2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === d2)
      return document.createTextNode(p2);
    l2 = r2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), o2 = null, e2 = false;
  }
  if (null === d2)
    y2 === p2 || e2 && l2.data === p2 || (l2.data = p2);
  else {
    if (o2 = o2 && n.call(l2.childNodes), a2 = (y2 = i2.props || c$1).dangerouslySetInnerHTML, h2 = p2.dangerouslySetInnerHTML, !e2) {
      if (null != o2)
        for (y2 = {}, _2 = 0; _2 < l2.attributes.length; _2++)
          y2[l2.attributes[_2].name] = l2.attributes[_2].value;
      (h2 || a2) && (h2 && (a2 && h2.__html == a2.__html || h2.__html === l2.innerHTML) || (l2.innerHTML = h2 && h2.__html || ""));
    }
    if (H$1(l2, p2, y2, r2, e2), h2)
      u2.__k = [];
    else if (_2 = u2.props.children, x$2(l2, Array.isArray(_2) ? _2 : [_2], u2, i2, t2, r2 && "foreignObject" !== d2, o2, f2, o2 ? o2[0] : i2.__k && b$1(i2, 0), e2), null != o2)
      for (_2 = o2.length; _2--; )
        null != o2[_2] && v$1(o2[_2]);
    e2 || ("value" in p2 && void 0 !== (_2 = p2.value) && (_2 !== l2.value || "progress" === d2 && !_2 || "option" === d2 && _2 !== y2.value) && T$2(l2, "value", _2, y2.value, false), "checked" in p2 && void 0 !== (_2 = p2.checked) && _2 !== l2.checked && T$2(l2, "checked", _2, y2.checked, false));
  }
  return l2;
}
function O$1(n2, u2, i2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$1.__e(n3, i2);
  }
}
function S(n2, u2, i2) {
  var t2, r2;
  if (l$1.unmount && l$1.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || O$1(t2, null, u2)), null != (t2 = n2.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l$1.__e(n3, u2);
      }
    t2.base = t2.__P = null, n2.__c = void 0;
  }
  if (t2 = n2.__k)
    for (r2 = 0; r2 < t2.length; r2++)
      t2[r2] && S(t2[r2], u2, i2 || "function" != typeof n2.type);
  i2 || null == n2.__e || v$1(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function q$2(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function B$2(u2, i2, t2) {
  var r2, o2, f2;
  l$1.__ && l$1.__(u2, i2), o2 = (r2 = "function" == typeof t2) ? null : t2 && t2.__k || i2.__k, f2 = [], L$1(i2, u2 = (!r2 && t2 || i2).__k = y$1(_$1, null, [u2]), o2 || c$1, c$1, void 0 !== i2.ownerSVGElement, !r2 && t2 ? [t2] : o2 ? null : i2.firstChild ? n.call(i2.childNodes) : null, f2, !r2 && t2 ? t2 : o2 ? o2.__e : i2.firstChild, r2), M$1(f2, u2);
}
function D$1(n2, l2) {
  B$2(n2, l2, D$1);
}
function E$1(l2, u2, i2) {
  var t2, r2, o2, f2 = h$1({}, l2.props);
  for (o2 in u2)
    "key" == o2 ? t2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : f2[o2] = u2[o2];
  return arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i2), p$1(l2.type, f2, t2 || l2.key, r2 || l2.ref, null);
}
function F$2(n2, l2) {
  var u2 = { __c: l2 = "__cC" + e$1++, __: n2, Consumer: function(n3, l3) {
    return n3.children(l3);
  }, Provider: function(n3) {
    var u3, i2;
    return this.getChildContext || (u3 = [], (i2 = {})[l2] = this, this.getChildContext = function() {
      return i2;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u3.some(function(n5) {
        n5.__e = true, m$1(n5);
      });
    }, this.sub = function(n4) {
      u3.push(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u3.splice(u3.indexOf(n4), 1), l3 && l3.call(n4);
      };
    }), n3.children;
  } };
  return u2.Provider.__ = u2.Consumer.contextType = u2;
}
n = s$1.slice, l$1 = { __e: function(n2, l2, u2, i2) {
  for (var t2, r2, o2; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((r2 = t2.constructor) && null != r2.getDerivedStateFromError && (t2.setState(r2.getDerivedStateFromError(n2)), o2 = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), o2 = t2.__d), o2)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$1 = 0, k$2.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h$1({}, this.state), "function" == typeof n2 && (n2 = n2(h$1({}, u2), this.props)), n2 && h$1(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), m$1(this));
}, k$2.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), m$1(this));
}, k$2.prototype.render = _$1, t$2 = [], o$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f$1 = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, w$2.__r = 0, e$1 = 0;
function t$1(o2, e2) {
  return l$1.__a && l$1.__a(e2), o2;
}
"undefined" != typeof window && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.13.2", l$1, { Fragment: _$1, Component: k$2 });
var t, r, u, i, o = 0, f = [], c = [], e = l$1.__b, a = l$1.__r, v = l$1.diffed, l = l$1.__c, m = l$1.unmount;
function d(t2, u2) {
  l$1.__h && l$1.__h(r, t2, o || u2), o = 0;
  var i2 = r.__H || (r.__H = { __: [], __h: [] });
  return t2 >= i2.__.length && i2.__.push({ __V: c }), i2.__[t2];
}
function h(n2) {
  return o = 1, s(B$1, n2);
}
function s(n2, u2, i2) {
  var o2 = d(t++, 2);
  if (o2.t = n2, !o2.__c && (o2.__ = [i2 ? i2(u2) : B$1(void 0, u2), function(n3) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
    t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r, !r.u)) {
    var f2 = function(n3, t2, r2) {
      if (!o2.__c.__H)
        return true;
      var u3 = o2.__c.__H.__.filter(function(n4) {
        return n4.__c;
      });
      if (u3.every(function(n4) {
        return !n4.__N;
      }))
        return !c2 || c2.call(this, n3, t2, r2);
      var i3 = false;
      return u3.forEach(function(n4) {
        if (n4.__N) {
          var t3 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i3 = true);
        }
      }), !(!i3 && o2.__c.props === n3) && (!c2 || c2.call(this, n3, t2, r2));
    };
    r.u = true;
    var c2 = r.shouldComponentUpdate, e2 = r.componentWillUpdate;
    r.componentWillUpdate = function(n3, t2, r2) {
      if (this.__e) {
        var u3 = c2;
        c2 = void 0, f2(n3, t2, r2), c2 = u3;
      }
      e2 && e2.call(this, n3, t2, r2);
    }, r.shouldComponentUpdate = f2;
  }
  return o2.__N || o2.__;
}
function p(u2, i2) {
  var o2 = d(t++, 3);
  !l$1.__s && z$1(o2.__H, i2) && (o2.__ = u2, o2.i = i2, r.__H.__h.push(o2));
}
function y(u2, i2) {
  var o2 = d(t++, 4);
  !l$1.__s && z$1(o2.__H, i2) && (o2.__ = u2, o2.i = i2, r.__h.push(o2));
}
function _(n2) {
  return o = 5, F$1(function() {
    return { current: n2 };
  }, []);
}
function A$1(n2, t2, r2) {
  o = 6, y(function() {
    return "function" == typeof n2 ? (n2(t2()), function() {
      return n2(null);
    }) : n2 ? (n2.current = t2(), function() {
      return n2.current = null;
    }) : void 0;
  }, null == r2 ? r2 : r2.concat(n2));
}
function F$1(n2, r2) {
  var u2 = d(t++, 7);
  return z$1(u2.__H, r2) ? (u2.__V = n2(), u2.i = r2, u2.__h = n2, u2.__V) : u2.__;
}
function T$1(n2, t2) {
  return o = 8, F$1(function() {
    return n2;
  }, t2);
}
function q$1(n2) {
  var u2 = r.context[n2.__c], i2 = d(t++, 9);
  return i2.c = n2, u2 ? (null == i2.__ && (i2.__ = true, u2.sub(r)), u2.props.value) : n2.__;
}
function x$1(t2, r2) {
  l$1.useDebugValue && l$1.useDebugValue(r2 ? r2(t2) : t2);
}
function P$1(n2) {
  var u2 = d(t++, 10), i2 = h();
  return u2.__ = n2, r.componentDidCatch || (r.componentDidCatch = function(n3, t2) {
    u2.__ && u2.__(n3, t2), i2[1](n3);
  }), [i2[0], function() {
    i2[1](void 0);
  }];
}
function V$1() {
  var n2 = d(t++, 11);
  if (!n2.__) {
    for (var u2 = r.__v; null !== u2 && !u2.__m && null !== u2.__; )
      u2 = u2.__;
    var i2 = u2.__m || (u2.__m = [0, 0]);
    n2.__ = "P" + i2[0] + "-" + i2[1]++;
  }
  return n2.__;
}
function b() {
  for (var t2; t2 = f.shift(); )
    if (t2.__P && t2.__H)
      try {
        t2.__H.__h.forEach(k$1), t2.__H.__h.forEach(w$1), t2.__H.__h = [];
      } catch (r2) {
        t2.__H.__h = [], l$1.__e(r2, t2.__v);
      }
}
l$1.__b = function(n2) {
  r = null, e && e(n2);
}, l$1.__r = function(n2) {
  a && a(n2), t = 0;
  var i2 = (r = n2.__c).__H;
  i2 && (u === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.__V = c, n3.__N = n3.i = void 0;
  })) : (i2.__h.forEach(k$1), i2.__h.forEach(w$1), i2.__h = [])), u = r;
}, l$1.diffed = function(t2) {
  v && v(t2);
  var o2 = t2.__c;
  o2 && o2.__H && (o2.__H.__h.length && (1 !== f.push(o2) && i === l$1.requestAnimationFrame || ((i = l$1.requestAnimationFrame) || j$1)(b)), o2.__H.__.forEach(function(n2) {
    n2.i && (n2.__H = n2.i), n2.__V !== c && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c;
  })), u = r = null;
}, l$1.__c = function(t2, r2) {
  r2.some(function(t3) {
    try {
      t3.__h.forEach(k$1), t3.__h = t3.__h.filter(function(n2) {
        return !n2.__ || w$1(n2);
      });
    } catch (u2) {
      r2.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), r2 = [], l$1.__e(u2, t3.__v);
    }
  }), l && l(t2, r2);
}, l$1.unmount = function(t2) {
  m && m(t2);
  var r2, u2 = t2.__c;
  u2 && u2.__H && (u2.__H.__.forEach(function(n2) {
    try {
      k$1(n2);
    } catch (n3) {
      r2 = n3;
    }
  }), u2.__H = void 0, r2 && l$1.__e(r2, u2.__v));
};
var g$1 = "function" == typeof requestAnimationFrame;
function j$1(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), g$1 && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 100);
  g$1 && (t2 = requestAnimationFrame(r2));
}
function k$1(n2) {
  var t2 = r, u2 = n2.__c;
  "function" == typeof u2 && (n2.__c = void 0, u2()), r = t2;
}
function w$1(n2) {
  var t2 = r;
  n2.__c = n2.__(), r = t2;
}
function z$1(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
}
function B$1(n2, t2) {
  return "function" == typeof t2 ? t2(n2) : t2;
}
function g(n2, t2) {
  for (var e2 in t2)
    n2[e2] = t2[e2];
  return n2;
}
function C(n2, t2) {
  for (var e2 in n2)
    if ("__source" !== e2 && !(e2 in t2))
      return true;
  for (var r2 in t2)
    if ("__source" !== r2 && n2[r2] !== t2[r2])
      return true;
  return false;
}
function E(n2, t2) {
  return n2 === t2 && (0 !== n2 || 1 / n2 == 1 / t2) || n2 != n2 && t2 != t2;
}
function w(n2) {
  this.props = n2;
}
function x(n2, e2) {
  function r2(n3) {
    var t2 = this.props.ref, r3 = t2 == n3.ref;
    return !r3 && t2 && (t2.call ? t2(null) : t2.current = null), e2 ? !e2(this.props, n3) || !r3 : C(this.props, n3);
  }
  function u2(e3) {
    return this.shouldComponentUpdate = r2, y$1(n2, e3);
  }
  return u2.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u2.prototype.isReactComponent = true, u2.__f = true, u2;
}
(w.prototype = new k$2()).isPureReactComponent = true, w.prototype.shouldComponentUpdate = function(n2, t2) {
  return C(this.props, n2) || C(this.state, t2);
};
var R = l$1.__b;
l$1.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), R && R(n2);
};
var N = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function k(n2) {
  function t2(t3) {
    var e2 = g({}, t3);
    return delete e2.ref, n2(e2, t3.ref || null);
  }
  return t2.$$typeof = N, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t2;
}
var A = function(n2, t2) {
  return null == n2 ? null : P$2(P$2(n2).map(t2));
}, O = { map: A, forEach: A, count: function(n2) {
  return n2 ? P$2(n2).length : 0;
}, only: function(n2) {
  var t2 = P$2(n2);
  if (1 !== t2.length)
    throw "Children.only";
  return t2[0];
}, toArray: P$2 }, T = l$1.__e;
l$1.__e = function(n2, t2, e2, r2) {
  if (n2.then) {
    for (var u2, o2 = t2; o2 = o2.__; )
      if ((u2 = o2.__c) && u2.__c)
        return null == t2.__e && (t2.__e = e2.__e, t2.__k = e2.__k), u2.__c(n2, t2);
  }
  T(n2, t2, e2, r2);
};
var I = l$1.unmount;
function L(n2, t2, e2) {
  return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
    "function" == typeof n3.__c && n3.__c();
  }), n2.__c.__H = null), null != (n2 = g({}, n2)).__c && (n2.__c.__P === e2 && (n2.__c.__P = t2), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
    return L(n3, t2, e2);
  })), n2;
}
function U(n2, t2, e2) {
  return n2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
    return U(n3, t2, e2);
  }), n2.__c && n2.__c.__P === t2 && (n2.__e && e2.insertBefore(n2.__e, n2.__d), n2.__c.__e = true, n2.__c.__P = e2)), n2;
}
function D() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F(n2) {
  var t2 = n2.__.__c;
  return t2 && t2.__a && t2.__a(n2);
}
function M(n2) {
  var e2, r2, u2;
  function o2(o3) {
    if (e2 || (e2 = n2()).then(function(n3) {
      r2 = n3.default || n3;
    }, function(n3) {
      u2 = n3;
    }), u2)
      throw u2;
    if (!r2)
      throw e2;
    return y$1(r2, o3);
  }
  return o2.displayName = "Lazy", o2.__f = true, o2;
}
function V() {
  this.u = null, this.o = null;
}
l$1.unmount = function(n2) {
  var t2 = n2.__c;
  t2 && t2.__R && t2.__R(), t2 && true === n2.__h && (n2.type = null), I && I(n2);
}, (D.prototype = new k$2()).__c = function(n2, t2) {
  var e2 = t2.__c, r2 = this;
  null == r2.t && (r2.t = []), r2.t.push(e2);
  var u2 = F(r2.__v), o2 = false, i2 = function() {
    o2 || (o2 = true, e2.__R = null, u2 ? u2(l2) : l2());
  };
  e2.__R = i2;
  var l2 = function() {
    if (!--r2.__u) {
      if (r2.state.__a) {
        var n3 = r2.state.__a;
        r2.__v.__k[0] = U(n3, n3.__c.__P, n3.__c.__O);
      }
      var t3;
      for (r2.setState({ __a: r2.__b = null }); t3 = r2.t.pop(); )
        t3.forceUpdate();
    }
  }, c2 = true === t2.__h;
  r2.__u++ || c2 || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), n2.then(i2, i2);
}, D.prototype.componentWillUnmount = function() {
  this.t = [];
}, D.prototype.render = function(n2, e2) {
  if (this.__b) {
    if (this.__v.__k) {
      var r2 = document.createElement("div"), o2 = this.__v.__k[0].__c;
      this.__v.__k[0] = L(this.__b, r2, o2.__O = o2.__P);
    }
    this.__b = null;
  }
  var i2 = e2.__a && y$1(_$1, null, n2.fallback);
  return i2 && (i2.__h = null), [y$1(_$1, null, e2.__a ? null : n2.children), i2];
};
var W = function(n2, t2, e2) {
  if (++e2[1] === e2[0] && n2.o.delete(t2), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
    for (e2 = n2.u; e2; ) {
      for (; e2.length > 3; )
        e2.pop()();
      if (e2[1] < e2[0])
        break;
      n2.u = e2 = e2[2];
    }
};
function P(n2) {
  return this.getChildContext = function() {
    return n2.context;
  }, n2.children;
}
function j(n2) {
  var e2 = this, r2 = n2.i;
  e2.componentWillUnmount = function() {
    B$2(null, e2.l), e2.l = null, e2.i = null;
  }, e2.i && e2.i !== r2 && e2.componentWillUnmount(), n2.__v ? (e2.l || (e2.i = r2, e2.l = { nodeType: 1, parentNode: r2, childNodes: [], appendChild: function(n3) {
    this.childNodes.push(n3), e2.i.appendChild(n3);
  }, insertBefore: function(n3, t2) {
    this.childNodes.push(n3), e2.i.appendChild(n3);
  }, removeChild: function(n3) {
    this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e2.i.removeChild(n3);
  } }), B$2(y$1(P, { context: e2.context }, n2.__v), e2.l)) : e2.l && e2.componentWillUnmount();
}
function z(n2, e2) {
  var r2 = y$1(j, { __v: n2, i: e2 });
  return r2.containerInfo = e2, r2;
}
(V.prototype = new k$2()).__a = function(n2) {
  var t2 = this, e2 = F(t2.__v), r2 = t2.o.get(n2);
  return r2[0]++, function(u2) {
    var o2 = function() {
      t2.props.revealOrder ? (r2.push(u2), W(t2, n2, r2)) : u2();
    };
    e2 ? e2(o2) : o2();
  };
}, V.prototype.render = function(n2) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t2 = P$2(n2.children);
  n2.revealOrder && "b" === n2.revealOrder[0] && t2.reverse();
  for (var e2 = t2.length; e2--; )
    this.o.set(t2[e2], this.u = [1, 0, this.u]);
  return n2.children;
}, V.prototype.componentDidUpdate = V.prototype.componentDidMount = function() {
  var n2 = this;
  this.o.forEach(function(t2, e2) {
    W(n2, e2, t2);
  });
};
var B = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, H = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Y = /[A-Z0-9]/g, $ = "undefined" != typeof document, q = function(n2) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
};
function G(n2, t2, e2) {
  return null == t2.__k && (t2.textContent = ""), B$2(n2, t2), "function" == typeof e2 && e2(), n2 ? n2.__c : null;
}
function J(n2, t2, e2) {
  return D$1(n2, t2), "function" == typeof e2 && e2(), n2 ? n2.__c : null;
}
k$2.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t2) {
  Object.defineProperty(k$2.prototype, t2, { configurable: true, get: function() {
    return this["UNSAFE_" + t2];
  }, set: function(n2) {
    Object.defineProperty(this, t2, { configurable: true, writable: true, value: n2 });
  } });
});
var K = l$1.event;
function Q() {
}
function X() {
  return this.cancelBubble;
}
function nn() {
  return this.defaultPrevented;
}
l$1.event = function(n2) {
  return K && (n2 = K(n2)), n2.persist = Q, n2.isPropagationStopped = X, n2.isDefaultPrevented = nn, n2.nativeEvent = n2;
};
var tn, en = { enumerable: false, configurable: true, get: function() {
  return this.class;
} }, rn = l$1.vnode;
l$1.vnode = function(n2) {
  "string" == typeof n2.type && function(n3) {
    var t2 = n3.props, e2 = n3.type, u2 = {};
    for (var o2 in t2) {
      var i2 = t2[o2];
      if (!("value" === o2 && "defaultValue" in t2 && null == i2 || $ && "children" === o2 && "noscript" === e2 || "class" === o2 || "className" === o2)) {
        var l2 = o2.toLowerCase();
        "defaultValue" === o2 && "value" in t2 && null == t2.value ? o2 = "value" : "download" === o2 && true === i2 ? i2 = "" : "ondoubleclick" === l2 ? o2 = "ondblclick" : "onchange" !== l2 || "input" !== e2 && "textarea" !== e2 || q(t2.type) ? "onfocus" === l2 ? o2 = "onfocusin" : "onblur" === l2 ? o2 = "onfocusout" : Z.test(o2) ? o2 = l2 : -1 === e2.indexOf("-") && H.test(o2) ? o2 = o2.replace(Y, "-$&").toLowerCase() : null === i2 && (i2 = void 0) : l2 = o2 = "oninput", "oninput" === l2 && u2[o2 = l2] && (o2 = "oninputCapture"), u2[o2] = i2;
      }
    }
    "select" == e2 && u2.multiple && Array.isArray(u2.value) && (u2.value = P$2(t2.children).forEach(function(n4) {
      n4.props.selected = -1 != u2.value.indexOf(n4.props.value);
    })), "select" == e2 && null != u2.defaultValue && (u2.value = P$2(t2.children).forEach(function(n4) {
      n4.props.selected = u2.multiple ? -1 != u2.defaultValue.indexOf(n4.props.value) : u2.defaultValue == n4.props.value;
    })), t2.class && !t2.className ? (u2.class = t2.class, Object.defineProperty(u2, "className", en)) : (t2.className && !t2.class || t2.class && t2.className) && (u2.class = u2.className = t2.className), n3.props = u2;
  }(n2), n2.$$typeof = B, rn && rn(n2);
};
var un = l$1.__r;
l$1.__r = function(n2) {
  un && un(n2), tn = n2.__c;
};
var on = l$1.diffed;
l$1.diffed = function(n2) {
  on && on(n2);
  var t2 = n2.props, e2 = n2.__e;
  null != e2 && "textarea" === n2.type && "value" in t2 && t2.value !== e2.value && (e2.value = null == t2.value ? "" : t2.value), tn = null;
};
var ln = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
  return tn.__n[n2.__c].props.value;
} } } }, cn = "17.0.2";
function fn(n2) {
  return y$1.bind(null, n2);
}
function an(n2) {
  return !!n2 && n2.$$typeof === B;
}
function sn(n2) {
  return an(n2) ? E$1.apply(null, arguments) : n2;
}
function hn(n2) {
  return !!n2.__k && (B$2(null, n2), true);
}
function vn(n2) {
  return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
}
var dn = function(n2, t2) {
  return n2(t2);
}, pn = function(n2, t2) {
  return n2(t2);
}, mn = _$1;
function yn(n2) {
  n2();
}
function _n(n2) {
  return n2;
}
function bn() {
  return [false, yn];
}
var Sn = y;
function gn(n2, t2) {
  var e2 = t2(), r2 = h({ h: { __: e2, v: t2 } }), u2 = r2[0].h, o2 = r2[1];
  return y(function() {
    u2.__ = e2, u2.v = t2, E(u2.__, t2()) || o2({ h: u2 });
  }, [n2, e2, t2]), p(function() {
    return E(u2.__, u2.v()) || o2({ h: u2 }), n2(function() {
      E(u2.__, u2.v()) || o2({ h: u2 });
    });
  }, [n2]), e2;
}
var Cn = { useState: h, useId: V$1, useReducer: s, useEffect: p, useLayoutEffect: y, useInsertionEffect: Sn, useTransition: bn, useDeferredValue: _n, useSyncExternalStore: gn, startTransition: yn, useRef: _, useImperativeHandle: A$1, useMemo: F$1, useCallback: T$1, useContext: q$1, useDebugValue: x$1, version: "17.0.2", Children: O, render: G, hydrate: J, unmountComponentAtNode: hn, createPortal: z, createElement: y$1, createContext: F$2, createFactory: fn, cloneElement: sn, createRef: d$1, Fragment: _$1, isValidElement: an, findDOMNode: vn, Component: k$2, PureComponent: w, memo: x, forwardRef: k, flushSync: pn, unstable_batchedUpdates: dn, StrictMode: mn, Suspense: D, SuspenseList: V, lazy: M, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ln };
const React = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get Children() {
    return O;
  },
  Component: k$2,
  Fragment: _$1,
  PureComponent: w,
  get StrictMode() {
    return mn;
  },
  Suspense: D,
  SuspenseList: V,
  get __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED() {
    return ln;
  },
  cloneElement: sn,
  createContext: F$2,
  createElement: y$1,
  createFactory: fn,
  createPortal: z,
  createRef: d$1,
  get default() {
    return Cn;
  },
  findDOMNode: vn,
  get flushSync() {
    return pn;
  },
  forwardRef: k,
  hydrate: J,
  isValidElement: an,
  lazy: M,
  memo: x,
  render: G,
  startTransition: yn,
  unmountComponentAtNode: hn,
  get unstable_batchedUpdates() {
    return dn;
  },
  useCallback: T$1,
  useContext: q$1,
  useDebugValue: x$1,
  useDeferredValue: _n,
  useEffect: p,
  useErrorBoundary: P$1,
  useId: V$1,
  useImperativeHandle: A$1,
  get useInsertionEffect() {
    return Sn;
  },
  useLayoutEffect: y,
  useMemo: F$1,
  useReducer: s,
  useRef: _,
  useState: h,
  useSyncExternalStore: gn,
  useTransition: bn,
  get version() {
    return cn;
  }
}, Symbol.toStringTag, { value: "Module" }));
export {
  Cn as C,
  F$1 as F,
  React as R,
  T$1 as T,
  _,
  _$1 as a,
  F$2 as b,
  pn as c,
  y$1 as d,
  h,
  k$2 as k,
  l$1 as l,
  p,
  q$1 as q,
  t$1 as t,
  y,
  z
};
