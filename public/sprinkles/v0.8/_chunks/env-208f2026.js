System.register(["./compat.module-fe631ce3.js"], function(exports, module) {
  "use strict";
  var Cn;
  return {
    setters: [(module2) => {
      Cn = module2.C;
    }],
    execute: function() {
      const isPreact = exports(
        "i",
        // imported from 'preact'
        "h" in Cn || // imported from 'preact/compat' (has all of `react-dom` bundled)
        "hydrate" in Cn && "render" in Cn || // `undefined` instead of `false` for nicer prop usage
        void 0
      );
    }
  };
});
