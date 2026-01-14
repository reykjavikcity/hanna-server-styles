System.register(["../_chunks/initHannaNamespace-77b40001.js", "../_chunks/qj-0ce4c6bc.js", "../_chunks/inlineSVG-61e1ccf3.js", "../_chunks/i18n-5b23de04.js", "../_chunks/getLang-61538edc.js", "../_chunks/getSVGtext-2c45db0c.js"], function(exports, module) {
  "use strict";
  var q, inlineSVG;
  return {
    setters: [null, (module2) => {
      q = module2.q;
    }, (module2) => {
      inlineSVG = module2.i;
    }, null, null, null],
    execute: function() {
      window.Hanna.makeSprinkle({
        name: "WizardLayout",
        init: (layoutElm) => {
          const logoContainerElm = q(".Layout__header__logo", layoutElm);
          if (logoContainerElm) {
            inlineSVG("img", logoContainerElm);
          }
        }
      });
    }
  };
});
