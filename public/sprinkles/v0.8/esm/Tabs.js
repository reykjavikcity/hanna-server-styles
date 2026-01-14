import { C as Cn, t, h, F } from "../_chunks/compat.module-0843eda4.js";
import "../_chunks/initHannaNamespace-f4f98843.js";
import { f as frag } from "../_chunks/qj-1c8d4095.js";
import { T as Tabs } from "../_chunks/Tabs-7769a5d5.js";
import { d as domid } from "../_chunks/_useMobileMenuToggling-ec254f95.js";
import "../_chunks/getSVGtext-b918ded2.js";
import { n as notNully } from "../_chunks/misc-d1570401.js";
import "../_chunks/i18n-a7278b6d.js";
import { a as autoSeenEffectWrapperProps, b as autoSeenEffectsRefresh } from "../_chunks/addSeenEffect-3eaf41e0.js";
import { o } from "../_chunks/jsxRuntime.module-b4e3cc20.js";
import "../_chunks/getLang-8d69057b.js";
var _jsxFileName = "/Users/maro5239/work/hanna/modules/hanna-sprinkles/src/Tabs.tsx";
const setPanelDisplay = (panelElm, isActive) => {
  if (isActive) {
    panelElm.hidden = false;
    panelElm.tabIndex = 0;
  } else {
    panelElm.hidden = true;
    panelElm.removeAttribute("tabindex");
  }
};
const isAriaLabelled = (elm) => elm.hasAttribute("aria-label") || elm.hasAttribute("aria-labelledby");
const log = (...args) => console.info("Tabs sprinkle: ", ...args);
const SprinkledTabs = (props) => {
  const {
    tabPanelPairs,
    startingIdx,
    label,
    labelledBy,
    id
  } = props;
  const [activeIdx, setActiveIdx] = t(h(startingIdx), "activeIdx");
  const {
    tabs,
    onSetActive
  } = t(F(() => ({
    tabs: tabPanelPairs.map((d) => d.tab),
    onSetActive: (newActiveIdx) => {
      const newTab = tabPanelPairs[newActiveIdx];
      if (!newTab) {
        return;
      }
      const currentTab = activeIdx !== void 0 && tabPanelPairs[activeIdx];
      currentTab && setPanelDisplay(currentTab.panelElm, false);
      setPanelDisplay(newTab.panelElm, true);
      setActiveIdx(newActiveIdx);
    }
  }), [activeIdx, tabPanelPairs]), "tabs");
  return o(Tabs, {
    tabs,
    id,
    "aria-label": label,
    "aria-labelledby": labelledBy,
    role: "tablist",
    activeIdx,
    onSetActive,
    ssr: false
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, globalThis);
};
const getTabsData = (elm) => {
  const tabElms = Array.from(elm.querySelectorAll(".Tabs__tab"));
  const data = tabElms.filter((tabElm) => {
    tabElm = tabElm.cloneNode(true);
    const isLink = "href" in tabElm;
    if (!isLink) {
      log("Not an anchor element", tabElm);
    }
    return isLink;
  }).map((tabElm) => {
    const controlsId = tabElm.getAttribute("aria-controls") || frag.getFrag(tabElm.href) || void 0;
    const panelElm = controlsId && document.getElementById(controlsId);
    if (!panelElm) {
      if (!controlsId) {
        log("ID pointer missing on", tabElm);
      } else {
        log("tab panel elm not found for", tabElm);
      }
      return;
    }
    const badgeElm = tabElm.querySelector(".Tabs__tab__badge") || void 0;
    badgeElm && badgeElm.remove();
    const badge = badgeElm && badgeElm.textContent.trim().replace(/(?:^\(|\)$)/g, "");
    return {
      panelElm,
      isActive: tabElm.dataset.active === "true",
      tab: {
        id: tabElm.id || domid(),
        "aria-controls": controlsId,
        label: tabElm.textContent,
        badge,
        longLabel: tabElm.getAttribute("aria-label") || void 0
      }
    };
  }).filter(notNully);
  if (data.length !== tabElms.length) {
    return;
  }
  const activeIdx = data.findIndex((item) => item.isActive);
  return {
    id: elm.id || void 0,
    label: elm.getAttribute("aria-label") || void 0,
    labelledBy: elm.getAttribute("aria-labelledby") || void 0,
    tabPanelPairs: data.map((item) => ({
      tab: item.tab,
      panelElm: item.panelElm
    })),
    startingIdx: activeIdx >= 0 ? activeIdx : void 0
  };
};
window.Hanna.makeSprinkle({
  name: "Tabs",
  init: (elm) => {
    const props = getTabsData(elm);
    if (props) {
      props.tabPanelPairs.forEach(({
        tab,
        panelElm
      }, i) => {
        setPanelDisplay(panelElm, i === props.startingIdx);
        panelElm.setAttribute("role", "tabpanel");
        if (panelElm.classList.contains("TabPanel")) {
          panelElm.dataset.sprinkled = "true";
        }
        if (!isAriaLabelled(panelElm)) {
          panelElm.setAttribute("aria-label", tab.longLabel || tab.label);
        }
      });
      const root = elm;
      elm.getAttributeNames().forEach((attrName) => {
        elm.removeAttribute(attrName);
      });
      Cn.render(o(SprinkledTabs, {
        ...props,
        wrapperProps: autoSeenEffectWrapperProps(elm)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, globalThis), root, () => autoSeenEffectsRefresh());
      return root;
    }
  },
  unmount: (elm, root) => {
    root && Cn.unmountComponentAtNode(root);
  }
});
