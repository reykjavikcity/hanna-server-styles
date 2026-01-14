import "../_chunks/initHannaNamespace-f4f98843.js";
import { q } from "../_chunks/qj-1c8d4095.js";
import { i as inlineSVG } from "../_chunks/inlineSVG-f1dff0c5.js";
import "../_chunks/i18n-a7278b6d.js";
import "../_chunks/getLang-8d69057b.js";
import "../_chunks/getSVGtext-b918ded2.js";
window.Hanna.makeSprinkle({
  name: "WizardLayout",
  init: (layoutElm) => {
    const logoContainerElm = q(".Layout__header__logo", layoutElm);
    if (logoContainerElm) {
      inlineSVG("img", logoContainerElm);
    }
  }
});
