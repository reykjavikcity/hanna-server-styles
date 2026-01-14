System.register([], function(exports, module) {
  "use strict";
  return {
    execute: function() {
      const notNully = exports("n", /* @__NO_SIDE_EFFECTS__ */ (val) => val != null);
    }
  };
});
