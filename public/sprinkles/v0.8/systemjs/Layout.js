System.register(["../_chunks/initHannaNamespace-77b40001.js", "../_chunks/qj-0ce4c6bc.js", "../_chunks/getSVGtext-2c45db0c.js", "../_chunks/i18n-5b23de04.js", "../_chunks/inlineSVG-61e1ccf3.js", "../_chunks/getLang-61538edc.js"], function(exports, module) {
  "use strict";
  var q, focusElement, inlineSVG;
  return {
    setters: [null, (module2) => {
      q = module2.q;
    }, (module2) => {
      focusElement = module2.f;
    }, null, (module2) => {
      inlineSVG = module2.i;
    }, null],
    execute: function() {
      const updateSkipLink = () => {
        var _a;
        const oldnavlinkCl = (_a = q("a.Layout__header__skiplink")) == null ? void 0 : _a.classList;
        if (oldnavlinkCl) {
          oldnavlinkCl.remove("Layout__header__skiplink");
          oldnavlinkCl.add("Layout__header__navlink");
        }
        q(".Layout");
      };
      window.Hanna.makeSprinkle({
        name: "Layout",
        init: (layoutElm) => {
          const logoContainerElm = q(".Layout__header__logo", layoutElm);
          if (logoContainerElm) {
            inlineSVG("img", logoContainerElm);
          }
          updateSkipLink();
          const navLink = q('a.Layout__header__navlink[href^="#"]');
          const navElm = navLink && q(navLink.hash);
          if (!navLink || !navElm) {
            return;
          }
          navLink.addEventListener("click", (e) => {
            e.preventDefault();
            focusElement(navElm, true);
          });
        }
      });
    }
  };
});
