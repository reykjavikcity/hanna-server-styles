import { t, F, h, p, C as Cn } from "../../_chunks/compat.module-0843eda4.js";
import { f as frag, z as zapElm, e as aquireId } from "../../_chunks/qj-1c8d4095.js";
import { u as useDomid } from "../../_chunks/_useMobileMenuToggling-ec254f95.js";
import { T as Tabs } from "../../_chunks/Tabs-7769a5d5.js";
import { o } from "../../_chunks/jsxRuntime.module-b4e3cc20.js";
import { h as hasLegacySeenEffectsCSS, b as autoSeenEffectsRefresh } from "../../_chunks/addSeenEffect-3eaf41e0.js";
import { e as ensureCSS } from "../../_chunks/ensureCSS-6552b186.js";
import { g as getLang } from "../../_chunks/getLang-8d69057b.js";
import "../../_chunks/getSVGtext-b918ded2.js";
import "../../_chunks/i18n-a7278b6d.js";
import "../../_chunks/hannavars-d2690bca.js";
import "../../_chunks/ObjectHelpers-c82b0e19.js";
import "../../_chunks/assets-a74434cf.js";
var _jsxFileName$1 = "/Users/maro5239/work/hanna/modules/hanna-react/src/VerticalTabsTOC.tsx";
const getId = (url) => url && decodeURIComponent(url.split("#")[1] || "") || "";
const getItemId = (item) => getId(item && item.href);
const mapToItemsById = (items, domid) => {
  const updatedItems = items.map((item) => {
    return {
      ...item,
      "aria-controls": item["aria-controls"] || domid
    };
  });
  const itemsById = {};
  updatedItems.forEach((topItem, activeIdx) => {
    const subItems = topItem.items;
    if (!subItems) {
      const itemId = getItemId(topItem);
      itemsById[itemId] = {
        activeIdx
      };
      return;
    }
    subItems.forEach((subItem, idx) => {
      itemsById[getItemId(subItem)] = {
        activeIdx,
        subTabs: {
          activeIdx: idx,
          "aria-label": topItem.longLabel || topItem.label,
          id: topItem["aria-controls"],
          tabs: subItems,
          onSetActive: (_, item) => {
            const newId = getItemId(item);
            frag.setFrag(newId);
          }
        }
      };
      if (idx === 0) {
        topItem.href = topItem.href || `#${getItemId(subItem)}`;
      }
    });
  });
  return {
    itemsById,
    updatedItems
  };
};
const VerticalTabsTOC = (props) => {
  const {
    onItemSelect,
    items
  } = props;
  const _domid = useDomid();
  const domid = props.id || _domid;
  const {
    itemsById,
    updatedItems
  } = t(F(() => mapToItemsById(items, domid), [items, domid]), "itemsById");
  const [state, setState] = t(h(() => {
    const initialId = typeof location !== "undefined" ? getId(location.hash) : "";
    return itemsById[initialId] || itemsById[getItemId(updatedItems[0])] || {};
  }), "state");
  p(() => {
    const handleHash = () => {
      const newId = getId(location.href);
      const newState = itemsById[newId];
      if (newState) {
        setState(newState);
        onItemSelect(newId);
      }
    };
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [itemsById, onItemSelect]);
  return o(Tabs, {
    wrapperProps: props.wrapperProps,
    id: domid,
    vertical: true,
    "aria-label": props["aria-label"],
    onSetActive: (_, item) => {
      var _a;
      const itemId = getItemId(item);
      const newId = itemId || getItemId((_a = itemsById[itemId].subTabs) == null ? void 0 : _a.tabs[0]);
      frag.setFrag(newId);
    },
    tabs: updatedItems,
    role: "tablist",
    activateOnFocus: props.activateOnFocus,
    activeIdx: state.activeIdx,
    subTabs: state.subTabs,
    ssr: props.ssr
  }, void 0, false, {
    fileName: _jsxFileName$1,
    lineNumber: 98,
    columnNumber: 5
  }, void 0);
};
var _jsxFileName = "/Users/maro5239/work/hanna/modules/hanna-sprinkles/src/utils/makeVerticalTabsTOC.tsx";
const setPanelVisibility = (panelElm, isActive) => {
  if (isActive) {
    panelElm.hidden = false;
    panelElm.tabIndex = 0;
  } else {
    panelElm.hidden = true;
    panelElm.removeAttribute("tabindex");
  }
};
const getContainers = (source) => {
  const containers = typeof source === "string" ? Array.from(document.querySelectorAll(source)) : source instanceof HTMLElement ? [source] : Array.isArray(source) ? source.sort((a, b) => {
    return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
  }) : Array.from(source);
  let lastElm;
  return containers.filter((elm, idx) => {
    if (lastElm && lastElm.contains(elm)) {
      console.warn("Content containers must not overlap. Ignoring ", elm, "because it is a decendant of", lastElm);
      return false;
    }
    lastElm = containers[idx];
    return true;
  });
};
const getHeadingTagLevels = (container, generateMissing) => {
  let firstH = container.querySelector("h1, h2, h3");
  if (!firstH) {
    if (generateMissing) {
      firstH = document.createElement("h2");
      firstH.dataset.vttocInserted = "";
      firstH.hidden = true;
      firstH.textContent = "Untitled";
      container.prepend(firstH);
    } else {
      return [];
    }
  }
  const headings = ["H1", "H2", "H3", "H4"];
  const pos = headings.indexOf(firstH.nodeName) || 1;
  return headings.slice(pos, pos + 2);
};
const makePanels = (containers) => {
  const panelElms = [];
  const items = [];
  const ids = [];
  containers.forEach((containerElm, i) => {
    const [hTop, hSub] = getHeadingTagLevels(containerElm, i === 0);
    if (!hTop) {
      const lastPanel = panelElms[panelElms.length - 1];
      const $merged = lastPanel.$merged || (lastPanel.$merged = []);
      const thinPanel = document.createElement("div");
      thinPanel.$container = containerElm;
      thinPanel.append(...Array.from(containerElm.childNodes));
      lastPanel.append(thinPanel);
      $merged.push(thinPanel);
      return;
    }
    let tHeading = containerElm.querySelector(hTop);
    while (tHeading) {
      const groupNodes = [];
      let nextHeading = tHeading.nextSibling;
      while (nextHeading && nextHeading.nodeName !== hTop && nextHeading.nodeName !== hSub) {
        groupNodes.push(nextHeading);
        nextHeading = nextHeading.nextSibling;
      }
      const label = tHeading.textContent;
      const panelElm = document.createElement("div");
      panelElm.$container = containerElm;
      panelElm.className = "TabPanel";
      panelElm.hidden = true;
      panelElm.dataset.sprinkled = "true";
      panelElm.setAttribute("aria-label", label);
      const hId = tHeading.id;
      if (hId) {
        tHeading.removeAttribute("id");
        tHeading.dataset.domid = hId;
      }
      panelElm.id = hId || aquireId(label);
      ids.push(panelElm.id);
      panelElm.append(...groupNodes);
      const panelHasContent = !!panelElm.textContent.trim();
      tHeading.before(panelElm);
      panelElm.prepend(tHeading);
      panelElms.push(panelElm);
      if (tHeading.nodeName === hTop) {
        items.push({
          label,
          longLabel: tHeading.getAttribute("aria-label") || void 0,
          items: []
        });
      }
      if (tHeading.nodeName === hSub || panelHasContent) {
        const lastItem = items[items.length - 1];
        lastItem.items.push({
          label,
          href: `#${panelElm.id}`,
          "aria-controls": panelElm.id
        });
      }
      tHeading = nextHeading;
    }
  });
  items.forEach((item) => {
    const subItems = item.items || [];
    if (subItems.length < 2) {
      const subItem = subItems[0] || item;
      item.href = subItem.href;
      item["aria-controls"] = subItem["aria-controls"];
      delete item.items;
    }
  });
  return {
    items,
    panelElms,
    ids
  };
};
const parseAndPrepareContent = (source) => {
  const containers = getContainers(source);
  const {
    items,
    panelElms,
    ids
  } = makePanels(containers);
  const setPanelElmsDisplay = (targetId) => {
    let activeContainer;
    panelElms.forEach((panelElm) => {
      const isActive = !!targetId && panelElm.id === targetId;
      if (isActive) {
        activeContainer = panelElm.$container;
      }
      setPanelVisibility(panelElm, isActive);
    });
    containers.forEach((container) => {
      container.hidden = container !== activeContainer;
    });
    if (containers.length === 1) {
      containers[0].hidden = false;
    }
  };
  return {
    props: {
      items,
      onItemSelect: setPanelElmsDisplay
    },
    panelElms,
    ids
  };
};
const makeVerticalTabsTOC = (contentSource, tocLabel) => {
  const {
    props,
    panelElms,
    ids
  } = parseAndPrepareContent(contentSource);
  props["aria-label"] = tocLabel || {
    is: "Efnisyfirlit",
    en: "Table of Contents",
    pl: "Spis treści"
  }[getLang()];
  const rootElm = document.createElement("div");
  let initialId = decodeURIComponent(location.href.split("#")[1] || "");
  if (!initialId || !ids.includes(initialId)) {
    const firstItem = props.items[0];
    if (firstItem.items) {
      initialId = firstItem.items[0]["aria-controls"] || "";
    } else {
      initialId = firstItem["aria-controls"] || "";
    }
  }
  props.onItemSelect(initialId);
  const readyArgs = {
    rootElm,
    panelElms,
    unmount: () => {
      Cn.unmountComponentAtNode(rootElm);
      rootElm.remove();
      panelElms.flatMap((panelElm) => {
        const {
          $merged
        } = panelElm;
        if ($merged) {
          delete panelElm.$merged;
          return [panelElm, ...$merged];
        }
        return [panelElm];
      }).forEach((panelElm) => {
        const insertedHeading = panelElm.querySelector("[data-vttoc-inserted]");
        insertedHeading == null ? void 0 : insertedHeading.remove();
        const disabledIdElm = panelElm.querySelector("[data-domid]");
        if (disabledIdElm) {
          disabledIdElm.id = disabledIdElm.dataset.domid;
          disabledIdElm.removeAttribute("data-domid");
        }
        zapElm(panelElm);
        panelElm.$container.hidden = false;
      });
    }
  };
  const whenReady = ensureCSS("Tabs").then(() => {
    Cn.render(o(VerticalTabsTOC, {
      ...props,
      ssr: false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 21
    }, void 0), rootElm);
    return readyArgs;
  });
  if (hasLegacySeenEffectsCSS) {
    whenReady.then(() => {
      setTimeout(autoSeenEffectsRefresh, 100);
    });
  }
  Object.assign(whenReady, readyArgs, {
    whenReady
  });
  return whenReady;
};
export {
  makeVerticalTabsTOC as default
};
