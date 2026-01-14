import "./compat.module-0843eda4.js";
const DATA_ATTR_NAME = "is-seen";
const STACKING_DELAY = 200;
const dataAttr = `data-${DATA_ATTR_NAME}`;
const inTargetSourceOrder = (a, b) => a.target.compareDocumentPosition(b.target) & Node.DOCUMENT_POSITION_PRECEDING ? 1 : -1;
const options = {
  // root: window
  rootMargin: "-100px 0px 0px 0px",
  // '0px'
  threshold: 0
  // 0
};
let observer;
const getObserver = (target, callback) => {
  if (target.hasAttribute(dataAttr)) {
    return;
  }
  if (!observer) {
    observer = new IntersectionObserver((entries, observer2) => entries.filter((e) => e.isIntersecting).sort(inTargetSourceOrder).forEach(({
      target: target2
    }, i) => {
      setTimeout(() => {
        target2.setAttribute(dataAttr, "true");
        callback && callback(target2);
        observer2.unobserve(target2);
      }, STACKING_DELAY * i);
    }), options);
  }
  if (target.matches(`[${dataAttr}] *`)) {
    target.setAttribute(dataAttr, "");
    return;
  }
  target.setAttribute(dataAttr, "false");
  observer.observe(target);
  return () => observer.unobserve(target);
};
getObserver.DATA_ATTR_NAME = DATA_ATTR_NAME;
const hasLegacySeenEffectsCSS = !!document.querySelector('link[rel="stylesheet"][href*="/bundle/"][href*="-legacy-AutoSeenEffects"]');
const autoSeenEffectsRefresh = hasLegacySeenEffectsCSS ? () => {
  const H = window.Hanna;
  if (H.sprinkles.SeenEffects) {
    H.sprinkles.SeenEffects();
  } else {
    H.loadSprinkles("SeenEffects");
  }
} : () => void 0;
const autoSeenEffectWrapperProps = hasLegacySeenEffectsCSS ? (elm) => {
  const {
    isSeen,
    seenEffect
  } = elm.dataset;
  return isSeen != null ? {
    "data-is-seen": "",
    "data-seen-effect": "none"
  } : {
    "data-seen-effect": seenEffect ?? true
  };
} : () => void 0;
const autoSeenEffectPrepare = hasLegacySeenEffectsCSS ? (elm) => {
  const elmData = elm.dataset;
  if (elmData.seenEffect == null && elmData.isSeen == null) {
    elmData.seenEffect = "true";
  }
} : () => void 0;
export {
  autoSeenEffectWrapperProps as a,
  autoSeenEffectsRefresh as b,
  autoSeenEffectPrepare as c,
  getObserver as g,
  hasLegacySeenEffectsCSS as h
};
