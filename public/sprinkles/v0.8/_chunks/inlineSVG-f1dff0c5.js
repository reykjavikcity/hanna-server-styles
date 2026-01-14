import { a as qq } from "./qj-1c8d4095.js";
import { g as getSVGtext } from "./getSVGtext-b918ded2.js";
import "./i18n-a7278b6d.js";
const inlineSVG = (imgSelector, elm) => {
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
};
export {
  inlineSVG as i
};
