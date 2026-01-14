import { h as getScrollbarWidth, a as qq } from "./qj-1c8d4095.js";
import { s as setDefaultLanguage } from "./i18n-a7278b6d.js";
import { g as getLang } from "./getLang-8d69057b.js";
const lacksIntersectionObserverSuppport = typeof window !== "undefined" && !("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype && "isIntersecting" in window.IntersectionObserverEntry.prototype);
if (lacksIntersectionObserverSuppport) {
  import("./qj-1c8d4095.js").then((n) => n.I);
}
getScrollbarWidth.setCSSvar();
setDefaultLanguage(getLang());
const Hanna = window.Hanna = window.Hanna || {};
Hanna.sprinkles = Hanna.sprinkles || {};
Hanna.refresh = () => Object.values(Hanna.sprinkles).forEach((sprinkle) => sprinkle());
const makeSprinkle = (props) => {
  const {
    name,
    init,
    refresh,
    unmount
  } = props;
  const selector = props.selector || `.${name}`;
  const dataAttr = `data-${props.dataAttr || "sprinkled"}`;
  const sprinkles = window.Hanna.sprinkles;
  let sprinkledElms = [];
  const SprinkleFn = () => {
    sprinkledElms = sprinkledElms.filter(({
      elm,
      data
    }) => {
      if (!document.contains(elm)) {
        try {
          unmount && unmount(elm, data);
        } catch (err) {
          console.error(`Error unmounting sprinkle '${name}' for:`, elm, err);
        }
        elm.removeAttribute(dataAttr);
        return false;
      }
      try {
        refresh && refresh(elm, data);
      } catch (err) {
        console.error(`Error refreshing sprinkle '${name}' for:`, elm, err);
      }
      return true;
    });
    const newlySprinkled = [];
    qq(selector).forEach((elm) => {
      if (
        // ...previously found, inited and placed in `spinkledElms`
        sprinkledElms.find((item) => item.elm === elm) || // ...aleady processed via some mysterious means (i.e. by React, etc.)
        elm.hasAttribute(dataAttr)
      ) {
        return;
      }
      try {
        const data = init(elm);
        !elm.hasAttribute(dataAttr) && elm.setAttribute(dataAttr, "");
        newlySprinkled.push({
          elm,
          data
        });
      } catch (err) {
        console.error(`Error initializing sprinkle '${name}' for:`, elm, err);
      }
    });
    sprinkledElms = sprinkledElms.concat(newlySprinkled);
  };
  if (!sprinkles[name]) {
    sprinkles[name] = SprinkleFn;
    SprinkleFn();
  } else {
    console.warn(`A sprinkle named '${name}' already exists.`);
  }
  return SprinkleFn;
};
Hanna.makeSprinkle = makeSprinkle;
Hanna.loadSprinkles && // eslint-disable-line @typescript-eslint/no-unnecessary-condition
Hanna.loadSprinkles("SeenEffects");
