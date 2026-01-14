import "../_chunks/initHannaNamespace-f4f98843.js";
import { E } from "../_chunks/qj-1c8d4095.js";
import { d as defaultAlertTexts } from "../_chunks/Alert-11447dea.js";
import { g as getTexts } from "../_chunks/i18n-a7278b6d.js";
import { g as getLang } from "../_chunks/getLang-8d69057b.js";
import "../_chunks/compat.module-0843eda4.js";
import "../_chunks/jsxRuntime.module-b4e3cc20.js";
import "../_chunks/getSVGtext-b918ded2.js";
import "../_chunks/_Button-bcc13c44.js";
import "../_chunks/_Link-980948f0.js";
import "../_chunks/env-e5e0e8b6.js";
import "../_chunks/_useMobileMenuToggling-ec254f95.js";
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
