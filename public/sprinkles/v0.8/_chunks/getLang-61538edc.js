System.register(["./i18n-5b23de04.js"], function(exports, module) {
  "use strict";
  var DEFAULT_LANG;
  return {
    setters: [(module2) => {
      DEFAULT_LANG = module2.D;
    }],
    execute: function() {
      const langs = {
        is: "is",
        en: "en",
        pl: "pl"
      };
      const getLang = exports("g", (elm) => {
        let elmLang = ((elm == null ? void 0 : elm.closest("[lang]")) || document.documentElement).lang;
        elmLang = elmLang.slice(0, 2).toLowerCase();
        return langs[elmLang] || DEFAULT_LANG;
      });
    }
  };
});
