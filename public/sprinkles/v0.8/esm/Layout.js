import "../_chunks/initHannaNamespace-f4f98843.js";
import { q } from "../_chunks/qj-1c8d4095.js";
import { f as focusElement } from "../_chunks/getSVGtext-b918ded2.js";
import "../_chunks/i18n-a7278b6d.js";
import { i as inlineSVG } from "../_chunks/inlineSVG-f1dff0c5.js";
import "../_chunks/getLang-8d69057b.js";
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
