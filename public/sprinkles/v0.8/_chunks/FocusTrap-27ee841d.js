System.register(["./getSVGtext-2c45db0c.js", "./i18n-5b23de04.js", "./jsxRuntime.module-00dbfc50.js"], function(exports, module) {
  "use strict";
  var focusElement, o;
  return {
    setters: [(module2) => {
      focusElement = module2.f;
    }, null, (module2) => {
      o = module2.o;
    }],
    execute: function() {
      var _jsxFileName = "/Users/maro5239/work/hanna/modules/hanna-react/src/FocusTrap.tsx";
      const FocusTrap = exports("F", (props) => {
        const Tag = props.Tag || "span";
        return o(Tag, {
          className: "FocusTrap",
          tabIndex: 0,
          onFocus: (e) => {
            e.preventDefault();
            let container = e.currentTarget;
            let depth = Math.max(props.depth || 1, 1);
            while (depth-- && container) {
              container = container.parentElement;
            }
            if (!container) {
              return;
            }
            const focusables = container.querySelectorAll(focusElement.keyboardFocusableSelector);
            const delta = props.atTop ? -1 : 1;
            let i = delta < 0 ? focusables.length - 1 : 0;
            let newTarget;
            while (newTarget = focusables[i]) {
              newTarget.focus();
              if (document.activeElement === newTarget) {
                return;
              }
              i += delta;
            }
            const fallbackFocusElm = container.matches("[tabindex]") ? container : container.querySelector('[tabindex="-1"]') || container.closest("[tabindex]");
            if (fallbackFocusElm) {
              fallbackFocusElm.focus();
            }
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 5
        }, void 0);
      });
    }
  };
});
