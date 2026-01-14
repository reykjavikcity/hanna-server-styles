System.register(["../_chunks/initHannaNamespace-77b40001.js", "../_chunks/qj-0ce4c6bc.js", "../_chunks/Alert-349b2825.js", "../_chunks/i18n-5b23de04.js", "../_chunks/getLang-61538edc.js", "../_chunks/compat.module-919773fc.js", "../_chunks/jsxRuntime.module-791778ad.js", "../_chunks/getSVGtext-2c45db0c.js", "../_chunks/_Button-14554c59.js", "../_chunks/_Link-8229a97c.js", "../_chunks/env-c53cf972.js", "../_chunks/_useMobileMenuToggling-b1fb85e8.js"], function(exports, module) {
  "use strict";
  var E, defaultAlertTexts, getTexts, getLang;
  return {
    setters: [null, (module2) => {
      E = module2.E;
    }, (module2) => {
      defaultAlertTexts = module2.d;
    }, (module2) => {
      getTexts = module2.g;
    }, (module2) => {
      getLang = module2.g;
    }, null, null, null, null, null, null, null],
    execute: function() {
      window.Hanna.makeSprinkle({
        name: "Alert",
        selector: ".Alert--closable",
        init: (alertElm) => {
          if (alertElm.querySelector(".Alert__close")) {
            return;
          }
          const {
            closeLabel,
            closeLabelLong
          } = getTexts({
            lang: getLang(alertElm)
          }, defaultAlertTexts);
          alertElm.append(" ", E("button", {
            className: "Alert__close",
            type: "button",
            onClick: () => {
              alertElm.hidden = true;
            },
            "aria-label": closeLabelLong,
            title: closeLabelLong || closeLabel
          }, closeLabel));
        }
      });
    }
  };
});
