const keyboardFocusableSelector = 'a[href],button,input,select,textarea,summary,iframe,[tabindex]:not(.FocusTrap):not([tabindex="-1"])';
const focusElement = (target, forwardToFirstFocusable) => setTimeout(() => {
  let elm = typeof target === "string" ? document.querySelector(target) : target;
  if (!elm) {
    return;
  }
  if (forwardToFirstFocusable && elm.tabIndex === -1) {
    elm = elm.querySelector(keyboardFocusableSelector) || elm;
  }
  if (elm.tabIndex === -1) {
    elm.tabIndex = -1;
  }
  elm.focus();
}, 0);
focusElement.keyboardFocusableSelector = keyboardFocusableSelector;
const isSvgUrl = /* @__NO_SIDE_EFFECTS__ */ (url) => /\.svg(?:$|\?|#)/i.test(url);
const getSVGtext = /* @__NO_SIDE_EFFECTS__ */ (url, altText) => {
  return url && /* @__PURE__ */ isSvgUrl(url) ? fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(`Failed to fetch SVG from ${url}`);
    }
    return res.text();
  }).then((res) => {
    const svgStart = res.search(/<svg/i);
    if (svgStart === -1) {
      return "";
    }
    if (svgStart > 0) {
      res = res.slice(svgStart);
    }
    if (altText) {
      res = res.replace(/<title[^]*?>[^]*?<\/title>/i, "").replace(/>/, `><title>${altText}</title>`);
    }
    return res;
  }).catch((error) => {
    console.error(error);
    return "";
  }) : Promise.resolve("");
};
getSVGtext.isSvgUrl = isSvgUrl;
export {
  focusElement as f,
  getSVGtext as g
};
