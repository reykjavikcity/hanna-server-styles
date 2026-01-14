System.register(["./compat.module-919773fc.js", "./jsxRuntime.module-791778ad.js"], function(exports, module) {
  "use strict";
  var t, _, p, o;
  return {
    setters: [(module2) => {
      t = module2.t;
      _ = module2._;
      p = module2.p;
    }, (module2) => {
      o = module2.o;
    }],
    execute: function() {
      var _jsxFileName = "/Users/maro5239/work/hanna/modules/hanna-sprinkles/src/_/InjectHTML.tsx";
      const InjectHTML = exports("I", ({
        html
      }) => {
        const ref = t(_(null), "ref");
        p(() => {
          if (!ref.current) {
            return;
          }
          ref.current.outerHTML = ref.current.innerHTML;
        }, []);
        return o("span", {
          ref,
          dangerouslySetInnerHTML: {
            __html: html
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 10
        }, void 0);
      });
    }
  };
});
