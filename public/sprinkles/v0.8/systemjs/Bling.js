System.register(["../_chunks/initHannaNamespace-77b40001.js", "../_chunks/getSVGtext-2c45db0c.js", "../_chunks/i18n-5b23de04.js", "../_chunks/assets-7c5ecab5.js", "../_chunks/qj-0ce4c6bc.js", "../_chunks/getLang-61538edc.js"], function(exports, module) {
  "use strict";
  var getSVGtext, getBlingUrl;
  return {
    setters: [null, (module2) => {
      getSVGtext = module2.g;
    }, null, (module2) => {
      getBlingUrl = module2.a;
    }, null, null],
    execute: function() {
      window.Hanna.makeSprinkle({
        name: "Bling",
        init: (elm) => {
          const {
            blingType,
            blingImage
          } = elm.dataset;
          const blingUrl = blingType ? getBlingUrl(blingType) : blingImage;
          getSVGtext(blingUrl).then((svgText) => {
            if (svgText) {
              elm.innerHTML = svgText;
            }
          });
        }
      });
    }
  };
});
