import { C as Cn, t, h, p, T } from "../../_chunks/compat.module-0843eda4.js";
import { T as Tabs } from "../../_chunks/Tabs-7769a5d5.js";
import { e as ensureCSS } from "../../_chunks/ensureCSS-6552b186.js";
import { o } from "../../_chunks/jsxRuntime.module-b4e3cc20.js";
import "../../_chunks/qj-1c8d4095.js";
import "../../_chunks/getSVGtext-b918ded2.js";
import "../../_chunks/i18n-a7278b6d.js";
import "../../_chunks/_useMobileMenuToggling-ec254f95.js";
import "../../_chunks/hannavars-d2690bca.js";
import "../../_chunks/ObjectHelpers-c82b0e19.js";
import "../../_chunks/assets-a74434cf.js";
var _jsxFileName = "/Users/maro5239/work/hanna/modules/hanna-sprinkles/src/utils/makeTabs.tsx";
const UncontrolledTabs = (props) => {
  const {
    activeIdx,
    onSetActive,
    role = "tablist",
    ...tabsProps
  } = props;
  const [_activeIdx, setActiveIdx] = t(h(activeIdx), "_activeIdx");
  p(() => setActiveIdx(activeIdx), [activeIdx]);
  const _onSetActive = T((newActiveIdx) => {
    const tabData = props.tabs[newActiveIdx];
    if (tabData) {
      onSetActive && onSetActive(newActiveIdx, tabData);
      setActiveIdx(newActiveIdx);
    }
  }, [props.tabs, onSetActive]);
  return o(Tabs, {
    ...tabsProps,
    activeIdx: _activeIdx,
    onSetActive: _onSetActive,
    role,
    ssr: false
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, void 0);
};
const setPanelDisplay = (panelElm, isActive) => {
  if (isActive) {
    panelElm.hidden = false;
    panelElm.tabIndex = 0;
  } else {
    panelElm.hidden = true;
    panelElm.removeAttribute("tabindex");
  }
};
const makeTabs = (props) => {
  const rootElm = document.createElement("div");
  const ready = ensureCSS("Tabs").then(() => {
    Cn.render(o(UncontrolledTabs, {
      ...props
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }, void 0), rootElm);
  });
  return {
    rootElm,
    unmount: () => {
      Cn.unmountComponentAtNode(rootElm);
      rootElm.remove();
    },
    update: (newProps) => {
      Cn.render(o(UncontrolledTabs, {
        ...props,
        ...newProps
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 23
      }, void 0), rootElm);
    },
    ready,
    setPanelDisplay
  };
};
export {
  makeTabs as default,
  setPanelDisplay
};
