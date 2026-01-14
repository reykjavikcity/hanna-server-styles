System.register(["./compat.module-fe631ce3.js", "./qj-0ce4c6bc.js", "./jsxRuntime.module-00dbfc50.js", "./getSVGtext-2c45db0c.js", "./i18n-5b23de04.js", "./_useMobileMenuToggling-eaed9893.js"], function(exports, module) {
  "use strict";
  var t, h, frag, useIsBrowserSide, o, modifiedClass;
  return {
    setters: [(module2) => {
      t = module2.t;
      h = module2.h;
    }, (module2) => {
      frag = module2.f;
    }, (module2) => {
      useIsBrowserSide = module2.u;
      o = module2.o;
      modifiedClass = module2.m;
    }, null, null, null],
    execute: function() {
      var _jsxFileName = "/Users/maro5239/work/hanna/modules/hanna-react/src/Tabs.tsx";
      const navKeyEffects = {
        ArrowUp: -1,
        ArrowLeft: -1,
        ArrowDown: 1,
        ArrowRight: 1
      };
      const renderTab = (tabProps, index, listProps) => {
        const {
          label,
          badge,
          href,
          type,
          longLabel
        } = tabProps;
        const {
          activeIdx,
          activateTab,
          focusedIdx,
          setFocusedIdx,
          tabRole,
          listAriaControls,
          isBrowser
        } = listProps;
        const handleClick = isBrowser && ((e) => {
          e.preventDefault();
          activateTab(index);
          e.currentTarget.focus();
        });
        const handleFocus = isBrowser && (() => setFocusedIdx(index));
        const isActive = activeIdx === index || void 0;
        const Tag = href && !tabRole ? "a" : "button";
        const tagProps = Tag === "button" ? {
          role: tabRole,
          type: type || "button",
          // 'aria-selected': tabRole && isActive,
          tabIndex: tabRole ? focusedIdx === index ? 0 : -1 : void 0,
          "aria-controls": tabProps["aria-controls"] || tabRole && frag.getFrag(href) || listAriaControls
        } : {
          href
        };
        return [o(Tag, {
          className: "Tabs__tab",
          "data-active": isActive,
          ...tagProps,
          onClick: handleClick,
          onFocus: handleFocus,
          "aria-label": longLabel,
          title: longLabel,
          children: [label, " ", badge != null && o("small", {
            className: "Tabs__tab__badge",
            children: ["(", badge, ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 33
          }, void 0)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 5
        }, void 0), " "];
      };
      const Tabs = exports("T", (props) => {
        const {
          tabs,
          role,
          "aria-label": ariaLabel,
          "aria-labelledby": ariaLabelledBy,
          "aria-controls": listAriaControls,
          wrapperProps = {},
          id = wrapperProps.id,
          activeIdx,
          onSetActive,
          activateOnFocus,
          ssr,
          vertical,
          subTabs
        } = props;
        const isBrowser = useIsBrowserSide(ssr);
        const [focusedIdx, setFocusedIdx] = t(h(activeIdx || 0), "focusedIdx");
        const tabRole = isBrowser && role === "tablist" ? "tab" : void 0;
        const activateTab = (index) => {
          const tab = tabs[index];
          if (index === activeIdx || !tab) {
            return;
          }
          const ret = tab.onActivated && tab.onActivated.call(null);
          if (onSetActive && ret !== false) {
            onSetActive(index, tab);
          }
        };
        const handleKeydown = tabRole && ((e) => {
          var _a, _b;
          const delta = navKeyEffects[e.key];
          if (delta) {
            e.stopPropagation();
            let nextIdx = (focusedIdx || 0) + delta;
            const maxIdx = tabs.length - 1;
            nextIdx = nextIdx < 0 ? maxIdx : nextIdx > maxIdx ? 0 : nextIdx;
            (_a = e.currentTarget.querySelectorAll(".Tabs__tab")[nextIdx]) == null ? void 0 : _a.focus();
            activateOnFocus && activateTab(nextIdx);
            (_b = wrapperProps.onKeyDown) == null ? void 0 : _b.call(wrapperProps, e);
          }
        });
        const listProps = {
          activeIdx,
          activateTab,
          focusedIdx,
          setFocusedIdx,
          tabRole,
          listAriaControls,
          isBrowser
        };
        return o("div", {
          ...props.wrapperProps,
          className: modifiedClass("Tabs", vertical && "vertical", wrapperProps.className),
          role: tabRole && role,
          id,
          "aria-label": ariaLabel,
          "aria-labelledby": ariaLabelledBy,
          onKeyDown: handleKeydown,
          "data-sprinkled": isBrowser,
          children: [tabs.map((tabProps, index) => renderTab(tabProps, index, listProps)), subTabs && o(Tabs, {
            ...subTabs,
            role: "role" in subTabs ? subTabs.role : role,
            activateOnFocus: subTabs.activateOnFocus ?? activateOnFocus,
            ssr,
            vertical: void 0,
            subTabs: void 0
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 9
          }, void 0)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 5
        }, void 0);
      });
    }
  };
});
