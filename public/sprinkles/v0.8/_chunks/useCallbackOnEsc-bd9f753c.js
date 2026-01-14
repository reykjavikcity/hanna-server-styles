System.register(["./compat.module-919773fc.js"], function(exports, module) {
  "use strict";
  var t, _, p;
  return {
    setters: [(module2) => {
      t = module2.t;
      _ = module2._;
      p = module2.p;
    }],
    execute: function() {
      const useCallbackOnEsc = exports("u", (callback) => {
        const cb = t(_(callback), "cb");
        const active = !!callback;
        cb.current = callback;
        p(() => {
          if (!active) {
            return;
          }
          const callbackOnEsc = (e) => {
            if (e.key === "Escape") {
              cb.current && cb.current();
            }
          };
          document.addEventListener("keydown", callbackOnEsc);
          return () => {
            document.removeEventListener("keydown", callbackOnEsc);
          };
        }, [active]);
      });
    }
  };
});
