System.register(["./qj-0ce4c6bc.js", "./getSVGtext-2c45db0c.js", "./i18n-5b23de04.js"], function(exports, module) {
  "use strict";
  var qq, getSVGtext;
  return {
    setters: [(module2) => {
      qq = module2.a;
    }, (module2) => {
      getSVGtext = module2.g;
    }, null],
    execute: function() {
      const inlineSVG = exports("i", (imgSelector, elm) => {
        qq(imgSelector, elm).filter((imgElm) => !imgElm.dataset.sprinkled).forEach((imgElm) => {
          if (imgElm.tagName !== "IMG") {
            return;
          }
          imgElm.dataset.sprinkled = "true";
          imgElm.style.visibility = "hidden";
          getSVGtext(imgElm.src).then((svgText) => {
            if (svgText) {
              const parent = imgElm.parentElement;
              if (parent && parent.nodeName === "PICTURE") {
                const parentClass = parent.className;
                const classAttr = parentClass ? ` class="${parentClass}"` : "";
                parent.outerHTML = `<span${classAttr}>${svgText}</span>`;
              } else {
                imgElm.outerHTML = svgText;
              }
            }
            imgElm.style.visibility = "";
          });
        });
      });
    }
  };
});
