import { C as Cn } from "../../_chunks/compat.module-0843eda4.js";
import { q, a as qq } from "../../_chunks/qj-1c8d4095.js";
import { e as ensureCSS } from "../../_chunks/ensureCSS-6552b186.js";
import { g as getLang } from "../../_chunks/getLang-8d69057b.js";
import { SiteWideAlerts } from "./sitewideAlerts.component.js";
import { o } from "../../_chunks/jsxRuntime.module-b4e3cc20.js";
import "../../_chunks/hannavars-d2690bca.js";
import "../../_chunks/getSVGtext-b918ded2.js";
import "../../_chunks/ObjectHelpers-c82b0e19.js";
import "../../_chunks/i18n-a7278b6d.js";
import "../../_chunks/assets-a74434cf.js";
import "../../_chunks/Alert-11447dea.js";
import "../../_chunks/_Button-bcc13c44.js";
import "../../_chunks/_Link-980948f0.js";
import "../../_chunks/env-e5e0e8b6.js";
import "../../_chunks/_useMobileMenuToggling-ec254f95.js";
var _jsxFileName = "/Users/maro5239/work/hanna/modules/hanna-sprinkles/src/utils/sitewideAlerts.tsx";
const makeEmptyDivInside = (container) => {
  const div = document.createElement("div");
  container.append(div);
  return div;
};
const resolveRoot = (rootElm, Layout) => {
  if (typeof rootElm === "string") {
    const selectedElm = q(rootElm);
    if (selectedElm) {
      return selectedElm;
    }
  } else if (rootElm) {
    return rootElm;
  }
  const existingAlertsContainer = q(`.${Layout}__alerts`);
  if (existingAlertsContainer) {
    return makeEmptyDivInside(existingAlertsContainer);
  }
  const newAlertsContainer = document.createElement("div");
  newAlertsContainer.className = `${Layout}__alerts`;
  const layoutElm = qq(`.${Layout}, body`).slice(-1)[0];
  layoutElm.prepend(newAlertsContainer);
  return makeEmptyDivInside(newAlertsContainer);
};
const sitewideAlerts = (props) => {
  const Layout = props.layoutName || "Layout";
  const rootElm = resolveRoot(props.rootElm, Layout);
  ensureCSS("Alert").then(() => {
    Cn.render(o(SiteWideAlerts, {
      alertsUri: props.alertsUri,
      baseUrl: props.baseUrl,
      refreshInterval: props.refreshInterval,
      lang: getLang()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, void 0), rootElm);
  });
};
export {
  sitewideAlerts as default
};
