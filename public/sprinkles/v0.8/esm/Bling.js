import "../_chunks/initHannaNamespace-f4f98843.js";
import { g as getSVGtext } from "../_chunks/getSVGtext-b918ded2.js";
import "../_chunks/i18n-a7278b6d.js";
import { a as getBlingUrl } from "../_chunks/assets-a74434cf.js";
import "../_chunks/qj-1c8d4095.js";
import "../_chunks/getLang-8d69057b.js";
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
