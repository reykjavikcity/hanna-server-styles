import { t, h, p, l } from "./compat.module-8e5010ff.js";
const classes = /* @__NO_SIDE_EFFECTS__ */ (...classNames) => {
  let classStr = "";
  for (let i = 0, len = classNames.length; i < len; i++) {
    let name = classNames[i];
    if (name && Array.isArray(name)) {
      name = /* @__PURE__ */ classes(...name);
    }
    if (!name) {
      continue;
    }
    classStr += (classStr ? " " : "") + name;
  }
  return classStr;
};
const modifiedClass = /* @__NO_SIDE_EFFECTS__ */ (bemClass, modifiers, extraClass) => {
  const _flattenModifiers = (mod) => !mod || !mod.length ? "" : typeof mod === "string" ? ` ${bemClass}--${mod}` : mod.map(_flattenModifiers).join("");
  return bemClass + _flattenModifiers(modifiers) + (extraClass ? ` ${extraClass}` : "");
};
let alreadyBrowserSide = false;
const defaultSSRSupport = true;
let DEFAULT_SSR_SUPPORT = defaultSSRSupport;
const useClientState = (serverState, clientState, ssrSupport = DEFAULT_SSR_SUPPORT) => {
  const stateTuple = t(h(
    () => ssrSupport === "ssr-only" ? serverState : ssrSupport && !alreadyBrowserSide ? serverState : clientState
    // TODO: Remove this type assertion once @types/react and typescript have been updated
  ), "stateTuple");
  p(
    () => {
      alreadyBrowserSide = true;
      if (ssrSupport !== "ssr-only") {
        stateTuple[1](clientState);
      }
    },
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  return stateTuple;
};
const useIsBrowserSide = (ssrSupport) => useClientState(false, true, ssrSupport)[0] || void 0;
var _ = 0;
function o(o2, e, n, t2, f, l$1) {
  var s, u, a = {};
  for (u in e)
    "ref" == u ? s = e[u] : a[u] = e[u];
  var i = { type: o2, props: a, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_, __source: f, __self: l$1 };
  if ("function" == typeof o2 && (s = o2.defaultProps))
    for (u in s)
      void 0 === a[u] && (a[u] = s[u]);
  return l.vnode && l.vnode(i), i;
}
export {
  classes as c,
  modifiedClass as m,
  o,
  useIsBrowserSide as u
};
