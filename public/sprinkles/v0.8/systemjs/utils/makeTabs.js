System.register(["../../_chunks/compat.module-919773fc.js", "../../_chunks/Tabs-ebeffc47.js", "../../_chunks/ensureCSS-cc708e92.js", "../../_chunks/jsxRuntime.module-791778ad.js", "../../_chunks/qj-0ce4c6bc.js", "../../_chunks/getSVGtext-2c45db0c.js", "../../_chunks/i18n-5b23de04.js", "../../_chunks/_useMobileMenuToggling-b1fb85e8.js", "../../_chunks/hannavars-0e03a23c.js", "../../_chunks/ObjectHelpers-a9c65074.js", "../../_chunks/assets-7c5ecab5.js"], function(exports, module) {
  "use strict";
  var Cn, t, h, p, T, Tabs, ensureCSS, o;
  return {
    setters: [(module2) => {
      Cn = module2.C;
      t = module2.t;
      h = module2.h;
      p = module2.p;
      T = module2.T;
    }, (module2) => {
      Tabs = module2.T;
    }, (module2) => {
      ensureCSS = module2.e;
    }, (module2) => {
      o = module2.o;
    }, null, null, null, null, null, null, null],
    execute: function() {
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
      const setPanelDisplay = exports("setPanelDisplay", (panelElm, isActive) => {
        if (isActive) {
          panelElm.hidden = false;
          panelElm.tabIndex = 0;
        } else {
          panelElm.hidden = true;
          panelElm.removeAttribute("tabindex");
        }
      });
      const makeTabs = exports("default", (props) => {
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
      });
    }
  };
});
